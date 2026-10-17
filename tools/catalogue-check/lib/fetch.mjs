// Fetching the public catalogue. Read-only, sequential, polite.
// Everything network-facing takes an injectable `fetchImpl` and `sleep`, so tests never touch the network.

export const USER_AGENT = 'CSG-Catalogue-Check/1.0 (+https://www.clarkesystemsgroup.com)';
export const MAX_PRODUCTS = 10000;

const defaultSleep = (ms) => new Promise((r) => setTimeout(r, ms));

export function normaliseStoreUrl(input) {
  let s = String(input || '').trim();
  if (!s) throw new Error('No store address given.');
  if (!/^https?:\/\//i.test(s)) s = 'https://' + s;
  let u;
  try { u = new URL(s); } catch { throw new Error(`"${input}" is not a valid web address.`); }
  return u.origin;
}

// A tiny HTTP client: one request at a time, 600–1000 ms apart, clear User-Agent, backs off on 429/503.
export function createHttp({ fetchImpl = globalThis.fetch, sleep = defaultSleep, minDelay = 600, maxDelay = 1000, log = () => {} } = {}) {
  let count = 0;
  let lastError = null;
  async function getJson(url) {
    const r = await getJsonInner(url);
    if (!r.ok) lastError = `${url} -> ${r.status ? 'HTTP ' + r.status : ''}${r.error ? (r.status ? ', ' : '') + r.error : ''}`;
    return r;
  }
  async function getJsonInner(url) {
    if (count > 0) await sleep(minDelay + Math.random() * (maxDelay - minDelay));
    count++;
    for (let attempt = 0; attempt < 4; attempt++) {
      let res;
      try {
        res = await fetchImpl(url, {
          headers: { 'User-Agent': USER_AGENT, Accept: 'application/json' },
          redirect: 'follow',
          signal: AbortSignal.timeout(30000),
        });
      } catch (e) {
        return { ok: false, status: 0, error: e?.cause?.code || e?.cause?.message || e?.message || String(e) };
      }
      if (res.status === 429 || res.status === 503) {
        const ra = Number(res.headers?.get?.('retry-after'));
        const wait = (ra > 0 ? ra : 5 * (attempt + 1)) * 1000;
        log(`  rate limited (${res.status}); waiting ${Math.round(wait / 1000)}s`);
        await sleep(wait);
        continue;
      }
      if (!res.ok) return { ok: false, status: res.status };
      const text = await res.text();
      try {
        return { ok: true, status: res.status, data: JSON.parse(text), headers: res.headers };
      } catch {
        return { ok: false, status: res.status, error: 'response was not JSON' };
      }
    }
    return { ok: false, status: 429, error: 'still rate limited after retries' };
  }
  return { getJson, get requests() { return count; }, get lastError() { return lastError; } };
}

// ---------- Shopify: /products.json (public) ----------
export async function fetchShopify(origin, http, { max = MAX_PRODUCTS, log = () => {} } = {}) {
  const bases = [`${origin}/products.json`, `${origin}/collections/all/products.json`];
  let emptyButValid = null;
  for (const base of bases) {
    const first = await http.getJson(`${base}?limit=250&page=1`);
    if (!first.ok || !Array.isArray(first.data?.products)) continue;
    if (first.data.products.length === 0) { emptyButValid = emptyButValid || base; continue; }
    log(`  Shopify catalogue found at ${base}`);
    const warnings = [];
    const products = [];
    const seen = new Set();
    let batch = first.data.products;
    let page = 1;
    let truncated = false;
    for (;;) { // paginate until the store returns an empty page
      const fresh = batch.filter((p) => !seen.has(p.id));
      if (batch.length > 0 && fresh.length === 0) break; // the server is ignoring the page parameter
      for (const p of fresh) { seen.add(p.id); products.push(p); }
      log(`  page ${page}: ${batch.length} products (total ${products.length})`);
      if (products.length >= max) break;
      if (batch.length === 0) break;
      page++;
      const r = await http.getJson(`${base}?limit=250&page=${page}`);
      if (!r.ok || !Array.isArray(r.data?.products)) {
        warnings.push(`Stopped at page ${page}: the store returned ${r.status || r.error}. Products after that point were not checked.`);
        break;
      }
      batch = r.data.products;
    }
    if (products.length >= max) {
      truncated = true;
      warnings.push(`The check stops at ${max.toLocaleString('en-GB')} products. Products beyond that were not checked.`);
    }
    return { platform: 'shopify', source: base, products: products.slice(0, max), truncated, warnings };
  }
  if (emptyButValid) return { platform: 'shopify', source: emptyButValid, products: [], truncated: false, warnings: ['The store publishes an empty product list.'] };
  return null;
}

// ---------- WooCommerce: Store API (public) ----------
async function pageThrough(http, makeUrl, { max, log, label, firstPageCheck = () => true }) {
  const items = [];
  const seen = new Set();
  const warnings = [];
  let page = 1;
  let totalPages = Infinity;
  for (;;) {
    const r = await http.getJson(makeUrl(page));
    if (!r.ok || !Array.isArray(r.data)) {
      if (page === 1) return null;
      if (page <= totalPages && totalPages !== Infinity) warnings.push(`Stopped reading ${label} at page ${page}: the store returned ${r.status || r.error}.`);
      break;
    }
    if (page === 1 && !firstPageCheck(r.data)) return null;
    const tp = Number(r.headers?.get?.('x-wp-totalpages'));
    if (tp > 0) totalPages = tp;
    const fresh = r.data.filter((p) => !seen.has(p.id));
    if (r.data.length > 0 && fresh.length === 0) break;
    for (const p of fresh) { seen.add(p.id); items.push(p); }
    log(`  ${label} page ${page}: ${r.data.length} (total ${items.length})`);
    if (r.data.length === 0 || items.length >= max || page >= totalPages) break;
    page++;
  }
  return { items, warnings };
}

export async function fetchWooCommerce(origin, http, { max = MAX_PRODUCTS, log = () => {} } = {}) {
  const styles = [
    (q) => `${origin}/wp-json/wc/store/v1/products?${q}`,
    (q) => `${origin}/?rest_route=/wc/store/v1/products&${q}`,
  ];
  for (const style of styles) {
    const got = await pageThrough(http, (page) => style(`per_page=100&page=${page}`), { max, log, label: 'products' });
    if (!got) continue;
    const warnings = [...got.warnings];
    let products = got.items;
    if (products.length > max) products = products.slice(0, max);
    const truncated = got.items.length >= max;
    if (truncated) warnings.push(`The check stops at ${max.toLocaleString('en-GB')} products. Products beyond that were not checked.`);

    // Variation-level data (SKUs, prices) for variable products, if the store exposes it.
    let variations = null;
    if (products.some((p) => p.type === 'variable')) {
      const v = await pageThrough(http, (page) => style(`type=variation&per_page=100&page=${page}`), {
        max: max * 20, log, label: 'variations',
        // If the store ignores type=variation it returns ordinary products; stop rather than page through them again.
        firstPageCheck: (data) => data.length > 0 && data.every((x) => x && (x.type === 'variation' || x.parent > 0)),
      });
      if (v) {
        variations = v.items;
        warnings.push(...v.warnings);
      }
    }
    return { platform: 'woocommerce', source: style('').replace(/[?&]$/, ''), products, variations, truncated, warnings };
  }
  return null;
}

// Detect the platform and fetch. Returns null if neither public endpoint answers.
export async function fetchCatalogue(storeUrl, { http, max = MAX_PRODUCTS, log = () => {} } = {}) {
  const origin = normaliseStoreUrl(storeUrl);
  log(`Checking ${origin}`);
  log('Trying Shopify public catalogue…');
  const shop = await fetchShopify(origin, http, { max, log });
  if (shop) return { origin, ...shop };
  log('Trying WooCommerce Store API…');
  const woo = await fetchWooCommerce(origin, http, { max, log });
  if (woo) return { origin, ...woo };
  return null;
}
