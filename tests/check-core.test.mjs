// node tests/check-core.test.mjs  (no dependencies)
import { analyse, checkStore, normaliseStore, assertPublicHost, CheckError } from "../netlify/lib/check-core.mjs";
let fails = 0;
const ok = (c, m) => { console.log((c ? "  PASS " : "  FAIL ") + m); if (!c) fails++; };
const rejects = async (p, code) => { try { await p; return false; } catch (e) { return e instanceof CheckError && (!code || e.code === code); } };

console.log("input validation");
ok(normaliseStore("https://Shop.Example.co.uk/collections/x?y=1") === "shop.example.co.uk", "URL normalised to host");
for (const bad of ["localhost", "127.0.0.1", "http://169.254.169.254/latest", "user:pw@shop.com", "shop.com:8080", "a", "", "x".repeat(300) + ".com"])
  ok(normaliseStore(bad) === null, `rejects ${JSON.stringify(bad.slice(0, 40))}`);

console.log("network safety");
const res = (ips) => async () => ips.map((address) => ({ address }));
ok(await rejects(assertPublicHost("evil.com", res(["10.0.0.5"])), "blocked"), "private IP blocked (SSRF)");
ok(await rejects(assertPublicHost("evil.com", res(["93.184.216.34", "127.0.0.1"])), "blocked"), "mixed public/loopback blocked");
ok(await rejects(assertPublicHost("evil.com", res(["::ffff:192.168.1.1"])), "blocked"), "IPv4-mapped private IPv6 blocked");
ok(!(await rejects(assertPublicHost("shop.com", res(["23.227.38.65"])))), "public Shopify IP allowed");

console.log("analysis");
const prods = Array.from({ length: 300 }, (_, i) => ({ id: i, title: i === 0 ? "Gift Card" : `Rug ${i}`, product_type: i < 30 ? "" : (i === 31 ? "rugs" : "Rugs"),
  vendor: i === 40 ? "Oak and Loom" : "Oak & Loom", images: i < 5 ? [] : [{}],
  variants: [{ sku: i === 0 ? "" : (i === 50 || i === 51 ? "DUP" : `S${i}`), grams: i < 40 ? 0 : 900, requires_shipping: true }] }));
const a = analyse(prods);
const f = Object.fromEntries(a.findings.map((x) => [x.key, x]));
ok(f.uncategorised.count === 30, "30 products with no product type");
ok(f.no_weight.count === 39, "39 shipped variants with no weight (gift card excluded)");
ok(f.no_image.count === 5 && f.duplicate_sku.count === 1, "no image 5, one shared SKU");
ok(!f.no_sku, "gift card with no SKU is not counted");
ok(f.taxonomy_clash && f.vendor_clash, "clashing product type and brand spellings found");

console.log("orchestration with a fake store");
const mk = (status, body, headers = {}) => ({ status, headers: { get: (k) => headers[k.toLowerCase()] ?? null }, text: async () => (typeof body === "string" ? body : JSON.stringify(body)) });
const page = (n, from) => ({ products: Array.from({ length: n }, (_, i) => ({ id: from + i, title: `P${from + i}`, product_type: "T", vendor: "V", images: [{}], variants: [{ sku: `S${from + i}`, grams: 0, requires_shipping: true }] })) });
const fakeFetch = (routes) => async (url) => { for (const [k, v] of routes) if (url.includes(k)) return typeof v === "function" ? v(url) : v; return mk(404, ""); };
let r = await checkStore("shop.example.com", { resolve: res(["23.227.38.65"]), fetcher: fakeFetch([
  ["limit=1", mk(200, page(1, 0))], ["robots.txt", mk(200, "User-agent: *\nDisallow: /cart")],
  ["page=1", mk(200, page(250, 0))], ["page=2", mk(200, page(40, 250))]]) });
ok(r.products === 290 && !r.capped && r.findings.find((x) => x.key === "no_weight").setup_choice, "290 products read; a field empty on every product is flagged as a setup choice");
r = await checkStore("big.example.com", { resolve: res(["23.227.38.65"]), fetcher: fakeFetch([
  ["limit=1", mk(200, page(1, 0))], ["robots.txt", mk(404, "")], ["page=1", mk(200, page(250, 0))], ["page=2", mk(200, page(250, 250))]]) });
ok(r.products === 500 && r.capped, "large catalogue capped at 500 and labelled as partial");
ok(await rejects(checkStore("shy.example.com", { resolve: res(["23.227.38.65"]), fetcher: fakeFetch([
  ["limit=1", mk(200, page(1, 0))], ["robots.txt", mk(200, "User-agent: *\nDisallow: /products.json")]]) }), "robots"), "robots.txt refusal respected");
ok(await rejects(checkStore("redir.example.com", { resolve: async (h) => h === "redir.example.com" ? [{ address: "23.227.38.65" }] : [{ address: "10.0.0.1" }],
  fetcher: fakeFetch([["redir.example.com/products.json?limit=1", mk(301, "", { location: "https://internal.example.com/products.json" })]]) }), "blocked"),
  "redirect to an internal address blocked");
ok(await rejects(checkStore("woo.example.com", { resolve: res(["93.184.216.34"]), fetcher: fakeFetch([["limit=1", mk(200, page(1, 0))], ["robots.txt", mk(404, "")], ["page=1", mk(404, "")]]) }), "no_catalogue"),
  "non-Shopify store gets a clear message");
ok(await rejects(checkStore("busy.example.com", { resolve: res(["23.227.38.65"]), fetcher: fakeFetch([["limit=1", mk(200, page(1, 0))], ["robots.txt", mk(404, "")], ["page=1", mk(429, "")]]) }), "limited"),
  "a store rate-limiting us gets an honest message, not a timeout");

console.log(fails ? `\n${fails} FAILED` : "\nALL PASSED");
process.exit(fails ? 1 : 0);
