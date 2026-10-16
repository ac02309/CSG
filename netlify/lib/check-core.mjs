// Catalogue check core: reads a store's public catalogue and returns exact findings.
// Runtime-neutral (no Node built-ins), so the same file runs in the Netlify Function (Node), a Cloudflare Pages
// Function (Workers) and the tests. The caller supplies the DNS resolver.
const isIPv4 = (s) => /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/.test(s) && s.split(".").every((n) => Number(n) <= 255);
const isIPv6 = (s) => s.includes(":") && /^[0-9a-f:.]+$/i.test(s);
const net = { isIP: (s) => (isIPv4(s) ? 4 : isIPv6(s) ? 6 : 0), isIPv4, isIPv6 };
const noResolver = async () => { throw new Error("no DNS resolver supplied"); };

export const UA = "Mozilla/5.0 (compatible; CSG-research/1.0; +https://clarkesystemsgroup.com/catalogue-check)";
const PAGE_TIMEOUT_MS = 3500;
const MAX_PAGES = 2; // default: first 500 Shopify products, inside the function time limit

// --------------------------------------------------------------- input and network safety
export function normaliseStore(input) {
  let s = String(input || "").trim().toLowerCase();
  if (s.length > 253) return null;
  s = s.replace(/^https?:\/\//, "").split(/[/?#]/)[0].replace(/:443$/, "");
  if (s.includes("@") || s.includes(":")) return null; // no credentials, no ports
  if (!/^(?=.{4,253}$)([a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z]{2,24}$/.test(s)) return null;
  if (net.isIP(s)) return null;
  return s;
}

// Expand any IPv6 text form to 8 hextets (handles "::", embedded dotted IPv4). Returns null if invalid.
function ipv6Words(ip) {
  let v = ip.toLowerCase().split("%")[0];
  const dotted = v.match(/(\d+\.\d+\.\d+\.\d+)$/);
  if (dotted) {
    if (!isIPv4(dotted[1])) return null;
    const [a, b, c, d] = dotted[1].split(".").map(Number);
    v = v.slice(0, -dotted[1].length) + ((a << 8) | b).toString(16) + ":" + ((c << 8) | d).toString(16);
  }
  const halves = v.split("::");
  if (halves.length > 2) return null;
  const head = halves[0] ? halves[0].split(":") : [], tail = halves.length === 2 && halves[1] ? halves[1].split(":") : [];
  const fill = halves.length === 2 ? 8 - head.length - tail.length : 0;
  if (fill < 0 || (halves.length === 1 && head.length !== 8)) return null;
  const words = [...head, ...Array(fill).fill("0"), ...tail];
  if (words.length !== 8 || words.some((w) => !/^[0-9a-f]{1,4}$/.test(w))) return null;
  return words.map((w) => parseInt(w, 16));
}

function privateV4(ip) {
  const [a, b] = ip.split(".").map(Number);
  return a === 0 || a === 10 || a === 127 || (a === 100 && b >= 64 && b <= 127) || (a === 169 && b === 254) ||
    (a === 172 && b >= 16 && b <= 31) || (a === 192 && b === 168) || (a === 192 && b === 0) ||
    (a === 198 && (b === 18 || b === 19)) || a >= 224;
}

export function privateIp(ip) {
  if (isIPv4(ip)) return privateV4(ip);
  const w = ipv6Words(ip);
  if (!w) return true;                                            // unparseable: refuse
  const v4 = (hi, lo) => `${hi >> 8}.${hi & 255}.${lo >> 8}.${lo & 255}`;
  const zero = (n) => w.slice(0, n).every((x) => x === 0);
  if (zero(8)) return true;                                       // ::
  if (zero(7) && w[7] === 1) return true;                         // ::1
  if (zero(5) && w[5] === 0xffff) return privateV4(v4(w[6], w[7])); // ::ffff:a.b.c.d (IPv4-mapped, any notation)
  if (zero(6)) return true;                                       // ::a.b.c.d (deprecated IPv4-compatible)
  if (w[0] === 0x64 && w[1] === 0xff9b) return privateV4(v4(w[6], w[7])); // NAT64 64:ff9b::/96
  if (w[0] === 0x2002) return privateV4(v4(w[1], w[2]));          // 6to4 2002::/16
  if ((w[0] & 0xfe00) === 0xfc00) return true;                    // fc00::/7 unique local
  if ((w[0] & 0xffc0) === 0xfe80) return true;                    // fe80::/10 link local
  if ((w[0] & 0xffc0) === 0xfec0) return true;                    // fec0::/10 site local
  if ((w[0] & 0xff00) === 0xff00) return true;                    // ff00::/8 multicast
  if (w[0] === 0x2001 && w[1] === 0xdb8) return true;             // documentation
  return false;
}

export async function assertPublicHost(host, resolve = noResolver) {
  let addrs;
  try {
    addrs = await resolve(host, { all: true });
  } catch {
    throw new CheckError("not_found", "That web address does not exist.");
  }
  if (!addrs.length || addrs.some((a) => privateIp(a.address))) {
    throw new CheckError("blocked", "That address cannot be checked.");
  }
}

export class CheckError extends Error {
  constructor(code, message) { super(message); this.code = code; }
}

async function fetchJson(url, fetcher) {
  const ctl = new AbortController();
  const t = setTimeout(() => ctl.abort(), PAGE_TIMEOUT_MS);
  try {
    // Shopify Markets filters the catalogue by the visitor's country; always view as a UK shopper,
    // or a check run from a US data centre undercounts a UK store's products
    const r = await fetcher(url, { headers: { "User-Agent": UA, Accept: "application/json", Cookie: "localization=GB" },
      redirect: "manual", signal: ctl.signal });
    if (r.status >= 300 && r.status < 400) return { status: r.status, location: r.headers.get("location") };
    if (r.status !== 200) return { status: r.status };
    const len = Number(r.headers.get("content-length") || 0);
    if (len > 15_000_000) return { status: 413 };
    const text = await r.text();
    if (text.length > 15_000_000) return { status: 413 };
    try { return { status: 200, data: JSON.parse(text) }; } catch { return { status: 422 }; }
  } catch (e) {
    return { status: e.name === "AbortError" ? 408 : 0 };
  } finally {
    clearTimeout(t);
  }
}

// robots.txt per RFC 9309: groups of consecutive user-agent lines, * and $ wildcards, longest match wins,
// Allow wins a tie. Redirects are followed only to public https hosts (each hop checked), at most 3 hops.
export function robotsVerdict(txt, path, agent = "csg-research") {
  const groups = [];
  let cur = null, lastWasAgent = false;
  for (const raw of txt.split(/\r?\n/)) {
    const line = raw.replace(/#.*/, "").trim();
    const m = line.match(/^(user-agent|disallow|allow)\s*:\s*(.*)$/i);
    if (!m) continue;
    const key = m[1].toLowerCase(), val = m[2].trim();
    if (key === "user-agent") {
      if (!lastWasAgent) { cur = { agents: [], rules: [] }; groups.push(cur); }
      cur.agents.push(val.toLowerCase());
      lastWasAgent = true;
    } else {
      lastWasAgent = false;
      if (cur && val) cur.rules.push({ allow: key === "allow", pattern: val });
    }
  }
  const mine = groups.filter((g) => g.agents.some((a) => a !== "*" && agent.includes(a)));
  const chosen = mine.length ? mine : groups.filter((g) => g.agents.includes("*"));
  const rules = chosen.flatMap((g) => g.rules);
  let best = null;
  for (const r of rules) {
    const anchored = r.pattern.endsWith("$");
    const body = anchored ? r.pattern.slice(0, -1) : r.pattern;
    const rx = new RegExp("^" + body.split("*").map((x) => x.replace(/[.+?^${}()|[\]\\]/g, "\\$&")).join(".*") + (anchored ? "$" : ""));
    if (!rx.test(path)) continue;
    const len = r.pattern.length;
    if (!best || len > best.len || (len === best.len && r.allow)) best = { len, allow: r.allow };
  }
  return best ? best.allow : true;
}

async function robotsAllows(base, path, fetcher, resolve) {
  let url = `${base}/robots.txt`;
  for (let hop = 0; hop < 4; hop++) {
    const ctl = new AbortController();
    const t = setTimeout(() => ctl.abort(), 2500);
    try {
      const r = await fetcher(url, { headers: { "User-Agent": UA }, redirect: "manual", signal: ctl.signal });
      if (r.status >= 300 && r.status < 400) {
        const loc = r.headers.get("location");
        if (!loc || hop === 3) return true;                       // unreadable robots file: treated as none (RFC 9309)
        const u = new URL(loc, url);
        const host = u.protocol === "https:" ? normaliseStore(u.hostname) : null;
        if (!host) return false;                                  // redirect to http or an odd host: do not proceed
        await assertPublicHost(host, resolve);
        url = `https://${host}${u.pathname}${u.search}`;
        continue;
      }
      if (r.status >= 500 || r.status === 0) return false;      // server trouble: assume disallowed (RFC 9309)
      if (r.status !== 200) return true;                        // 4xx: no robots file
      return robotsVerdict((await r.text()).slice(0, 500_000), path);
    } catch (e) {
      if (e instanceof CheckError) return false;
      return false;
    } finally {
      clearTimeout(t);
    }
  }
  return true;
}

// Resolve the store's canonical https host (follows one redirect, e.g. to www.), checking each hop.
async function canonicalBase(host, fetcher, resolve) {
  await assertPublicHost(host, resolve);
  const r = await fetchJson(`https://${host}/products.json?limit=1`, fetcher);
  if (r.status >= 300 && r.status < 400 && r.location) {
    const u = new URL(r.location, `https://${host}`);
    if (u.protocol !== "https:") throw new CheckError("blocked", "That store does not use a secure address.");
    const h2 = normaliseStore(u.hostname);
    if (!h2) throw new CheckError("blocked", "That address cannot be checked.");
    await assertPublicHost(h2, resolve);
    return `https://${h2}`;
  }
  return `https://${host}`;
}

// --------------------------------------------------------------- checks
const NON_PHYSICAL = new RegExp(
  String.raw`\bgift ?cards?\b(?!\s+(holder|box|case|wallet))|\be-?gift\b|\bgift (certificate|voucher)s?\b|\bvouchers?\b|` +
  String.raw`\bdonations?\b|\bgift ?wrap(ping)?\b(?!\s+(paper|roll|sheet)s?)|\bpostage\b|\bpackage protection\b|` +
  String.raw`\bshipping (protection|insurance|upgrade)\b|\b(next|same)[- ]day delivery$|\bdelivery (charge|upgrade|fee)\b|` +
  String.raw`\bpriority (processing|dispatch)\b|\b(service|handling|scripting|personali[sz]ation|engraving) (charge|fee|service|option)\b|` +
  String.raw`^personali[sz]ation$|^engraving$|\bsubscriptions?\b(?!\s+box)|\binsurance\b|\bwarranty\b(?!\s+card)|\bdeposit\b|` +
  String.raw`\btickets?\b(?!\s+holder)|\btakeaway\b|\beat[- ]in\b|\bdigital (download|product|file|pattern)\b|\be-?book\b|` +
  String.raw`\bsample\b(?!\s+pack)|\bcatalogue( 20\d\d)?$|\badd[- ]?on\b|^tips?$`, "i");

export const CHECKS = {
  duplicate_sku: { label: "SKUs are shared by more than one variant", why: "Most 3PL, ERP and marketplace connectors match stock by SKU, so a shared SKU can split or overwrite stock counts." },
  no_weight: { label: "product variants have no shipping weight", why: "If you charge postage by weight or use carrier-calculated rates, checkout may be undercharging customers on these." },
  no_image: { label: "products have no image", why: "Google Shopping and the marketplaces reject product listings without an image." },
  no_sku: { label: "variants have no SKU", why: "If a warehouse, ERP or marketplace connector matches by SKU, these variants are invisible to it." },
  uncategorised: { label: "products have no product type", why: "If any smart collections, filters or feed rules use product type, these products drop out of them." },
  taxonomy_clash: { label: "sets of near-duplicate product types", why: "Filters, collections and reports that use product type treat these as separate ranges." },
  vendor_clash: { label: "brands spelt more than one way", why: "Brand filters and brand-level reports split one brand into several." },
};
const ORDER = ["duplicate_sku", "no_weight", "no_image", "no_sku", "uncategorised", "taxonomy_clash", "vendor_clash"];

const normType = (s) => s.toLowerCase().replace(/&/g, " and ").replace(/[^a-z0-9 ]/g, " ").split(/\s+/)
  .filter((w) => w && w !== "and").map((w) => (w.length > 3 && w.endsWith("s") && !w.endsWith("ss") ? w.slice(0, -1) : w)).join(" ");

export function analyse(products) {
  const hits = Object.fromEntries(ORDER.map((k) => [k, []]));
  let variants = 0;
  const skuOwners = new Map();
  for (const p of products) {
    const title = String(p.title || "").trim();
    const special = NON_PHYSICAL.test(title);
    if (!String(p.product_type || "").trim()) hits.uncategorised.push(title);
    if (!(p.images || []).length) hits.no_image.push(title);
    for (const v of p.variants || []) {
      variants++;
      const sku = String(v.sku || "").trim();
      if (sku && !special) {
        const k = sku.toLowerCase();
        if (!skuOwners.has(k)) skuOwners.set(k, []);
        skuOwners.get(k).push(title);
      } else if (!sku && !special) hits.no_sku.push(title);
      if (v.requires_shipping !== false && !v.grams && !special) hits.no_weight.push(title);
    }
  }
  for (const [sku, owners] of skuOwners) {
    if (owners.length < 2) continue;
    const names = [...new Set(owners)];
    hits.duplicate_sku.push(names.length > 1 ? `SKU ${sku.toUpperCase()} on "${names[0]}" and "${names[1]}"`
                                             : `SKU ${sku.toUpperCase()} on ${owners.length} variants of "${names[0]}"`);
  }
  for (const [field, key] of [["product_type", "taxonomy_clash"], ["vendor", "vendor_clash"]]) {
    const groups = new Map();
    for (const p of products) {
      const v = String(p[field] || "").trim();
      if (!v) continue;
      const g = normType(v);
      if (!groups.has(g)) groups.set(g, new Set());
      groups.get(g).add(v);
    }
    for (const set of groups.values()) if (set.size > 1) hits[key].push([...set].map((x) => `"${x}"`).join(" / "));
  }
  const denom = { uncategorised: products.length, no_image: products.length };
  const findings = [];
  for (const key of ORDER) {
    const list = hits[key];
    const count = list.length;
    const min = key.endsWith("_clash") || key === "duplicate_sku" ? 1 : 3;
    if (count < min) continue;
    const total = key.endsWith("_clash") ? null : (denom[key] ?? variants);
    const share = total ? count / total : null;
    findings.push({
      key, count, total, share,
      label: CHECKS[key].label, why: CHECKS[key].why,
      setup_choice: share !== null && share >= 0.9 && ["no_weight", "uncategorised", "no_sku"].includes(key),
      examples: [...new Set(list)].slice(0, 3),
    });
  }
  return { products: products.length, variants, findings };
}

// --------------------------------------------------------------- orchestration
export async function checkStore(input, { fetcher = fetch, resolve = noResolver, maxPages = MAX_PAGES } = {}) {
  const host = normaliseStore(input);
  if (!host) throw new CheckError("invalid", "Enter a store web address, for example yourstore.co.uk.");
  const base = await canonicalBase(host, fetcher, resolve);
  if (!(await robotsAllows(base, "/products.json", fetcher, resolve))) {
    throw new CheckError("robots", "This store asks automated tools not to read its catalogue, so we have not checked it.");
  }
  const products = [];
  const seen = new Set();
  let capped = false;
  for (let page = 1; page <= maxPages; page++) {
    const r = await fetchJson(`${base}/products.json?limit=250&page=${page}`, fetcher);
    if (r.status !== 200) {
      if (page === 1) {
        if (r.status === 403 || r.status === 429) {
          throw new CheckError("limited", "That store is turning away automated requests right now. Try again in a few minutes.");
        }
        throw new CheckError("no_catalogue", r.status === 404
          ? "We could not find a public Shopify catalogue at that address. WooCommerce and other platforms need the full check."
          : "That store did not respond in time. Try again in a minute.");
      }
      capped = true; // a later page failed: report honestly as a partial check
      break;
    }
    const batch = Array.isArray(r.data?.products) ? r.data.products.filter((p) => p && typeof p === "object") : null;
    if (!batch) throw new CheckError("no_catalogue", "That address did not return a Shopify catalogue.");
    const fresh = batch.filter((p) => !seen.has(p.id));
    if (batch.length && !fresh.length) break;
    fresh.forEach((p) => seen.add(p.id));
    products.push(...fresh);
    if (batch.length < 250) break;
    if (page === maxPages) capped = true;
  }
  if (!products.length) throw new CheckError("empty", "That store's public catalogue is empty.");
  const result = analyse(products);
  return { store: base.replace("https://", ""), capped, checked_at: new Date().toISOString(), ...result };
}
