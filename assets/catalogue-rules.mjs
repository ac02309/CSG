// Catalogue check rules: what counts as an error, and the fix suggested for each.
// Plain ES module with no dependencies. The server (netlify/lib/check-core.mjs, Cloudflare Pages Functions) and the
// browser (assets/check.js builds the full list from it) import this same file, so their results always agree.
// It runs on raw Shopify products.json products or on compact() ones; both have the fields read here.

const hasText = (html) => typeof html === "string" && html.replace(/<[^>]*>|&nbsp;|\s/g, "").length > 0;

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
  no_description: { label: "products have no description", why: "Google Shopping and the marketplaces rank and sometimes reject listings with no description, and customers have less to go on." },
  uncategorised: { label: "products have no product type", why: "If any smart collections, filters or feed rules use product type, these products drop out of them." },
  taxonomy_clash: { label: "sets of near-duplicate product types", why: "Filters, collections and reports that use product type treat these as separate ranges." },
  vendor_clash: { label: "brands spelt more than one way", why: "Brand filters and brand-level reports split one brand into several." },
};
const ORDER = ["duplicate_sku", "no_weight", "no_image", "no_sku", "no_description", "uncategorised", "taxonomy_clash", "vendor_clash"];

const normType = (s) => s.toLowerCase().replace(/&/g, " and ").replace(/[^a-z0-9 ]/g, " ").split(/\s+/)
  .filter((w) => w && w !== "and").map((w) => (w.length > 3 && w.endsWith("s") && !w.endsWith("ss") ? w.slice(0, -1) : w)).join(" ");

// WooCommerce calls product types categories and has no smart collections
const WOO = [[/smart collections, filters/g, "filters, menus"], [/Filters, collections/g, "Filters, menus"],
  [/product types/g, "categories"], [/product type/g, "category"], [/Product types/g, "Categories"], [/Product type/g, "Category"],
  [/variants/g, "products"], [/variant/g, "product"]];
export const words = (s, platform) => (platform === "woocommerce" ? WOO.reduce((t, [a, b]) => t.replace(a, b), s) : s);

export function analyse(products, platform = "shopify") {
  const hits = Object.fromEntries(ORDER.map((k) => [k, []]));
  let variants = 0;
  const skuOwners = new Map();
  for (const p of products) {
    const title = String(p.title || "").trim();
    const special = NON_PHYSICAL.test(title);
    if (!String(p.product_type || "").trim()) hits.uncategorised.push(title);
    if (!(p.images || []).length) hits.no_image.push(title);
    if (!hasText(p.body_html)) hits.no_description.push(title);
    for (const v of p.variants || []) {
      variants++;
      const sku = String(v.sku || "").trim();
      if (sku && !special) {
        const k = sku.toLowerCase();
        if (!skuOwners.has(k)) skuOwners.set(k, []);
        skuOwners.get(k).push(title);
      } else if (!sku && !special) hits.no_sku.push(title);
      // grams null: the platform does not publish weights (WooCommerce Store API), so the check is not run
      if (v.requires_shipping !== false && v.grams !== null && !v.grams && !special) hits.no_weight.push(title);
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
  const denom = { uncategorised: products.length, no_image: products.length, no_description: products.length };
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
      label: words(CHECKS[key].label, platform), why: words(CHECKS[key].why, platform),
      setup_choice: share !== null && share >= 0.9 && ["no_weight", "uncategorised", "no_sku", "no_description"].includes(key),
      examples: [...new Set(list)].slice(0, 3),
    });
  }
  return { products: products.length, variants, findings };
}


// The fields the checks and the full list need, small enough to send a page of 250 products to the browser.
export function compact(p) {
  return {
    id: p.id, title: String(p.title || "").slice(0, 300), handle: String(p.handle || "").slice(0, 300),
    product_type: String(p.product_type || "").slice(0, 200), vendor: String(p.vendor || "").slice(0, 200),
    url: String(p.url || "").startsWith("https://") ? String(p.url).slice(0, 500) : "",
    images: (p.images || []).length ? [1] : [], body_html: hasText(p.body_html) ? "1" : "",
    variants: (p.variants || []).slice(0, 250).map((v) => ({
      title: String(v.title || "").slice(0, 200), sku: String(v.sku || "").slice(0, 200),
      grams: v.grams === null ? null : Number(v.grams) || 0, requires_shipping: v.requires_shipping !== false,
    })),
  };
}

const ISSUE = {
  duplicate_sku: "Shared SKU", no_weight: "No shipping weight", no_image: "No image", no_sku: "No SKU",
  no_description: "No description", uncategorised: "No product type", taxonomy_clash: "Product type spelt differently",
  vendor_clash: "Brand spelt differently",
};

const FIX = {
  duplicate_sku: (n) => `Give this variant its own SKU (${n} variants share it)`,
  no_weight: () => "Add the shipping weight",
  no_image: () => "Add at least one product image",
  no_sku: () => "Add a SKU",
  no_description: () => "Add a product description",
  uncategorised: () => "Set a product type",
  taxonomy_clash: (to) => `Change the product type to "${to}" so it matches the rest of the range`,
  vendor_clash: (to) => `Change the vendor to "${to}" so it matches the rest of this brand`,
};

// One row per product or variant to fix, in the order of analyse()'s findings. Issues present on almost every
// product (setup_choice) come last, since they usually reflect a deliberate setup.
export function listRows(products, platform = "shopify") {
  const { findings } = analyse(products, platform);
  const keys = [...findings.filter((f) => !f.setup_choice), ...findings.filter((f) => f.setup_choice)].map((f) => f.key);
  const setup = new Set(findings.filter((f) => f.setup_choice).map((f) => f.key));
  const rows = { };
  keys.forEach((k) => { rows[k] = []; });
  const add = (k, p, v, fix) => rows[k] && rows[k].push({
    issue: words(ISSUE[k], platform), key: k, setup: setup.has(k),
    product: p.title, handle: p.handle, url: p.url || "", variant: v && v.title !== "Default Title" ? v.title : "", sku: v ? v.sku : "", fix,
  });
  const skuCount = new Map();
  for (const p of products) {
    if (NON_PHYSICAL.test(String(p.title || ""))) continue;
    for (const v of p.variants || []) {
      const k = String(v.sku || "").trim().toLowerCase();
      if (k) skuCount.set(k, (skuCount.get(k) || 0) + 1);
    }
  }
  // most common spelling in each near-duplicate group is the suggested one
  const target = {};
  for (const field of ["product_type", "vendor"]) {
    const groups = new Map();
    for (const p of products) {
      const val = String(p[field] || "").trim();
      if (!val) continue;
      const g = normType(val);
      if (!groups.has(g)) groups.set(g, new Map());
      groups.get(g).set(val, (groups.get(g).get(val) || 0) + 1);
    }
    target[field] = new Map();
    for (const counts of groups.values()) {
      if (counts.size < 2) continue;
      const best = [...counts.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))[0][0];
      for (const val of counts.keys()) if (val !== best) target[field].set(val, best);
    }
  }
  for (const p of products) {
    const special = NON_PHYSICAL.test(String(p.title || "").trim());
    if (!String(p.product_type || "").trim()) add("uncategorised", p, null, FIX.uncategorised());
    if (!(p.images || []).length) add("no_image", p, null, FIX.no_image());
    if (!hasText(p.body_html)) add("no_description", p, null, FIX.no_description());
    const ty = target.product_type.get(String(p.product_type || "").trim());
    if (ty) add("taxonomy_clash", p, null, FIX.taxonomy_clash(ty));
    const ve = target.vendor.get(String(p.vendor || "").trim());
    if (ve) add("vendor_clash", p, null, FIX.vendor_clash(ve));
    if (special) continue;
    for (const v of p.variants || []) {
      const sku = String(v.sku || "").trim();
      if (sku && skuCount.get(sku.toLowerCase()) > 1) add("duplicate_sku", p, v, FIX.duplicate_sku(skuCount.get(sku.toLowerCase())));
      if (!sku) add("no_sku", p, v, FIX.no_sku());
      if (v.requires_shipping !== false && v.grams !== null && !v.grams) add("no_weight", p, v, FIX.no_weight());
    }
  }
  return keys.flatMap((k) => rows[k]).map((r) => ({ ...r, fix: words(r.fix, platform) }));
}

// Spreadsheet-safe CSV: a cell starting with = + - @ or a tab is prefixed with an apostrophe, so opening the
// file in Excel or Sheets can never run a formula from a store's product data.
export function toCsv(rows, store) {
  const cell = (s) => {
    let v = String(s ?? "");
    if (/^[=+\-@\t\r]/.test(v)) v = "'" + v;
    return /[",\n\r]/.test(v) ? '"' + v.replace(/"/g, '""') + '"' : v;
  };
  const head = ["Issue", "Product", "Variant", "SKU", "Suggested fix", "Product page"];
  const lines = rows.map((r) => [r.issue + (r.setup ? " (on almost every product: may be deliberate)" : ""), r.product, r.variant, r.sku, r.fix,
    r.url || (r.handle ? `https://${store}/products/${r.handle}` : "")].map(cell).join(","));
  return "\uFEFF" + [head.join(","), ...lines].join("\r\n") + "\r\n";
}
