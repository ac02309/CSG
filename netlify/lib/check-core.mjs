// Catalogue check core: reads a store's public catalogue and returns exact findings.
// Shared by the Netlify Function and its tests. No dependencies.
import { lookup } from "node:dns/promises";
import net from "node:net";

export const UA = "Mozilla/5.0 (compatible; CSG-research/1.0; +https://clarkesystemsgroup.com/catalogue-check)";
const PAGE_TIMEOUT_MS = 3500;
const MAX_PAGES = 2; // first 500 Shopify products: keeps every check inside the function time limit

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

function privateIp(ip) {
  if (net.isIPv4(ip)) {
    const [a, b] = ip.split(".").map(Number);
    return a === 0 || a === 10 || a === 127 || (a === 100 && b >= 64 && b <= 127) || (a === 169 && b === 254) ||
      (a === 172 && b >= 16 && b <= 31) || (a === 192 && b === 168) || (a === 198 && (b === 18 || b === 19)) || a >= 224;
  }
  const v = ip.toLowerCase();
  return v === "::1" || v === "::" || v.startsWith("fc") || v.startsWith("fd") || v.startsWith("fe80") ||
    v.startsWith("::ffff:") && privateIp(v.replace("::ffff:", ""));
}

export async function assertPublicHost(host, resolve = lookup) {
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

async function robotsAllows(base, path, fetcher) {
  const ctl = new AbortController();
  const t = setTimeout(() => ctl.abort(), 2500);
  try {
    const r = await fetcher(`${base}/robots.txt`, { headers: { "User-Agent": UA }, redirect: "follow", signal: ctl.signal });
    if (r.status >= 500) return false;
    if (r.status !== 200) return true;
    const txt = (await r.text()).slice(0, 200_000);
    let applies = false, disallowed = false, allowed = false;
    for (const raw of txt.split(/\r?\n/)) {
      const line = raw.replace(/#.*/, "").trim();
      const m = line.match(/^(user-agent|disallow|allow)\s*:\s*(.*)$/i);
      if (!m) continue;
      const key = m[1].toLowerCase(), val = m[2].trim();
      if (key === "user-agent") applies = val === "*" || /csg-research/i.test(val);
      else if (applies && val && path.startsWith(val.replace(/\*$/, ""))) {
        if (key === "disallow") disallowed = true; else allowed = true;
      }
    }
    return allowed || !disallowed;
  } catch {
    return false;
  } finally {
    clearTimeout(t);
  }
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
export async function checkStore(input, { fetcher = fetch, resolve = lookup } = {}) {
  const host = normaliseStore(input);
  if (!host) throw new CheckError("invalid", "Enter a store web address, for example yourstore.co.uk.");
  const base = await canonicalBase(host, fetcher, resolve);
  if (!(await robotsAllows(base, "/products.json", fetcher))) {
    throw new CheckError("robots", "This store asks automated tools not to read its catalogue, so we have not checked it.");
  }
  const products = [];
  const seen = new Set();
  let capped = false;
  for (let page = 1; page <= MAX_PAGES; page++) {
    const r = await fetchJson(`${base}/products.json?limit=250&page=${page}`, fetcher);
    if (r.status !== 200) {
      if (page === 1) {
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
    if (page === MAX_PAGES) capped = true;
  }
  if (!products.length) throw new CheckError("empty", "That store's public catalogue is empty.");
  const result = analyse(products);
  return { store: base.replace("https://", ""), capped, checked_at: new Date().toISOString(), ...result };
}
