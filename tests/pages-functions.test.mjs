// node --experimental-sqlite tests/pages-functions.test.mjs
// Runs the Cloudflare Pages Functions in Node with stand-ins for the Workers edge cache and D1 (real SQLite).
import { DatabaseSync } from "node:sqlite";

let fails = 0;
const ok = (c, m) => { console.log((c ? "  PASS " : "  FAIL ") + m); if (!c) fails++; };

// --- Workers stand-ins
const store = new Map();
globalThis.caches = { default: {
  match: async (req) => { const v = store.get(req.url); return v ? new Response(v) : undefined; },
  put: async (req, res) => { store.set(req.url, await res.text()); },
} };
function d1() {
  const db = new DatabaseSync(":memory:");
  const stmt = (sql, args = []) => ({
    bind: (...a) => stmt(sql, a),
    run: async () => { db.prepare(sql).run(...args); return { success: true }; },
    all: async () => ({ results: db.prepare(sql).all(...args) }),
  });
  return { prepare: (sql) => stmt(sql), _db: db };
}
const realFetch = globalThis.fetch;
const shop = (n, from = 0) => ({ products: Array.from({ length: n }, (_, k) => from + k).map((i) => ({ id: i, title: `Rug ${i}`, product_type: i < 20 ? "" : "Rugs",
  vendor: "Oak", images: [{}], variants: [{ sku: `S${i}`, grams: i < 30 ? 0 : 500, requires_shipping: true }] })) });
let storeCalls = 0;
globalThis.fetch = async (url) => {
  const u = String(url);
  if (u.startsWith("https://cloudflare-dns.com/")) {
    const name = new URL(u).searchParams.get("name"), type = new URL(u).searchParams.get("type");
    const ip = name === "internal.example.com" ? "10.0.0.8" : "23.227.38.65";
    return new Response(JSON.stringify({ Answer: type === "A" ? [{ type: 1, data: ip }] : [] }));
  }
  if (u.includes("robots.txt")) return new Response("User-agent: *\nDisallow: /cart");
  storeCalls++;
  if (u.includes("limit=1")) return new Response(JSON.stringify(shop(1)));
  if (u.includes("page=1")) return new Response(JSON.stringify(shop(250)));
  if (u.includes("page=2")) return new Response(JSON.stringify(shop(100, 250)));
  return new Response("", { status: 404 });
};

const check = await import("../functions/api/check.js");
const lead = await import("../functions/api/lead.js");
const leads = await import("../functions/api/leads.js");
const waits = [];
const ctx = (request, env = {}) => ({ request, env, waitUntil: (p) => waits.push(p) });
const post = (path, body, headers = {}) => new Request(`https://www.clarkesystemsgroup.com${path}`, { method: "POST",
  headers: { "content-type": "application/json", origin: "https://www.clarkesystemsgroup.com", "cf-connecting-ip": "1.2.3.4", ...headers },
  body: typeof body === "string" ? body : JSON.stringify(body) });

console.log("check");
let r = await check.onRequestPost(ctx(post("/api/check", { store: "shop.example.com" })));
let j = await r.json();
ok(r.status === 200 && j.products === 250 && j.capped === true, "free plan reads one page (250) and says capped");
ok(j.findings.find((f) => f.key === "uncategorised").count === 20, "findings computed");
await Promise.all(waits);
const before = storeCalls;
r = await check.onRequestPost(ctx(post("/api/check", { store: "https://www.shop.example.com/x" }, { "cf-connecting-ip": "5.5.5.5" })));
j = await r.json();
ok(j.cached === true && storeCalls === before, "second check of the same store served from the edge cache");
r = await check.onRequestPost(ctx(post("/api/check", { store: "big.example.com" }, { "cf-connecting-ip": "6.6.6.6" }), { CHECK_MAX_PAGES: "2" }));
j = await r.json();
ok(j.products === 350 && j.capped === false, "CHECK_MAX_PAGES=2 reads two pages");
r = await check.onRequestPost(ctx(post("/api/check", { store: "internal.example.com" }, { "cf-connecting-ip": "7.7.7.7" })));
ok(r.status === 422 && (await r.json()).code === "blocked", "private address blocked via DoH (SSRF)");
r = await check.onRequestPost(ctx(post("/api/check", { store: "x.com" }, { origin: "https://evil.example" })));
ok(r.status === 403, "foreign origin refused");
r = await check.onRequestPost(ctx(post("/api/check", "x".repeat(3000), { "cf-connecting-ip": "8.8.8.8" })));
ok(r.status === 413, "oversized body refused");
let last;
for (let i = 0; i < 9; i++) last = await check.onRequestPost(ctx(post("/api/check", { store: "nope" }, { "cf-connecting-ip": "9.9.9.9" })));
ok(last.status === 429, "9th check in 10 minutes from one IP is rate limited");
ok((await check.onRequest()).status === 405, "GET refused");

console.log("lead form");
const env = { LEADS: d1(), LEADS_KEY: "k".repeat(32) };
const form = (o, ip) => post("/api/lead", new URLSearchParams(o).toString(), { "content-type": "application/x-www-form-urlencoded", "cf-connecting-ip": ip });
r = await lead.onRequestPost(ctx(form({ "form-name": "catalogue-check", store: "Shop.Example.com", email: "jo@shop.example.com",
  name: "Jo", updates: "yes", summary: "20 products have no product type" }, "10.1.1.1"), env));
ok(r.status === 200, "lead stored");
r = await lead.onRequestPost(ctx(form({ "form-name": "catalogue-check", store: "a.com", email: "bad" }, "10.1.1.2"), env));
ok(r.status === 400, "bad email refused");
r = await lead.onRequestPost(ctx(form({ "form-name": "catalogue-check", store: "a.com", email: "x@a.com", csg_trap: "spam" }, "10.1.1.3"), env));
ok(r.status === 200, "honeypot pretends success");
r = await lead.onRequestPost(ctx(post("/api/lead", { "form-name": "brief", name: "Sam", email: "sam@co.uk", process: "Weekly report", message: "Hi\nthere", evil: "x" },
  { "cf-connecting-ip": "10.1.1.4" }), env));
ok(r.status === 200, "contact brief (JSON) stored");
const rows = env.LEADS._db.prepare("SELECT * FROM leads").all();
ok(rows.length === 2, "honeypot stored nothing");
ok(!JSON.stringify(rows).includes("10.1.1") && !rows[1].fields.includes("evil"), "no IP stored; unknown fields dropped");
r = await lead.onRequestPost(ctx(form({ store: "a.com", email: "x@a.com" }, "10.1.1.5"), {}));
ok(r.status === 503, "no D1 binding -> 503 so the page shows the email fallback");

console.log("lead export");
const get = (q, auth) => new Request(`https://www.clarkesystemsgroup.com/api/leads${q}`, { headers: auth ? { authorization: auth } : {} });
ok((await leads.onRequestGet(ctx(get(""), env))).status === 404, "no key -> looks like a missing page");
ok((await leads.onRequestGet(ctx(get("", "Bearer wrong"), env))).status === 404, "wrong key refused");
ok((await leads.onRequestGet(ctx(get("", "Bearer short"), { ...env, LEADS_KEY: "short" }))).status === 404, "a short key is never accepted");
const auth = `Bearer ${"k".repeat(32)}`;
let csv = await (await leads.onRequestGet(ctx(get("?mark=1", auth), env))).text();
ok(csv.includes("created_at,store,email,name,updates,summary") && csv.includes("shop.example.com,jo@shop.example.com,Jo,yes"), "catalogue-check CSV matches the engine's inbound columns");
ok(!csv.includes("sam@co.uk"), "contact requests not mixed into the lead export");
csv = await (await leads.onRequestGet(ctx(get("", auth), env))).text();
ok(!csv.includes("jo@shop"), "marked rows not exported twice");
csv = await (await leads.onRequestGet(ctx(get("?form=brief", auth), env))).text();
ok(csv.includes("sam@co.uk") && csv.includes('"Hi\nthere"'), "contact export with safe quoting");
await lead.onRequestPost(ctx(form({ store: "x.com", email: "z@x.com", name: "=HYPERLINK(\"http://evil\")" }, "10.1.1.6"), env));
csv = await (await leads.onRequestGet(ctx(get("", auth), env))).text();
ok(csv.includes("\"'=HYPERLINK"), "spreadsheet formula injection neutralised");

r = await lead.onRequestPost(ctx(form({ store: "x.com", email: "=1+1@x.com" }, "10.1.1.7"), env));
ok(r.status === 400, "email starting with a formula character refused");
r = await lead.onRequestPost(ctx(form({ store: "=evil()", email: "a@x.com" }, "10.1.1.8"), env));
ok(r.status === 400, "store that is not a domain refused");
for (let i = 0; i < 8; i++) await check.onRequestPost(ctx(post("/api/check", { store: "nope" }, { "cf-connecting-ip": "10.9.9.9" })));
r = await lead.onRequestPost(ctx(form({ store: "x.com", email: "b@x.com" }, "10.9.9.9"), env));
ok(r.status === 200, "a visitor who used all 8 checks can still submit the lead form");
r = await lead.onRequestPost(ctx(post("/api/lead", { "form-name": "brief", email: "long@co.uk", business: "Acme", process: "x".repeat(6000), message: "y".repeat(6000) },
  { "cf-connecting-ip": "10.1.2.1" }), env));
ok(r.status === 200, "a long contact brief (12k characters) is accepted");
csv = await (await leads.onRequestGet(ctx(get("?form=brief&all=1", auth), env))).text();
ok(csv.split("\n")[0].includes("business") && csv.includes("Acme") && csv.split("\n")[0].includes("subject"), "business and subject exported");
r = await lead.onRequestPost(ctx(form({ store: "x.com", email: "+sales@x.com" }, "10.4.4.1"), env));
ok(r.status === 200, "+sales@ address accepted");
r = await lead.onRequestPost(ctx(form({ store: "x.com", email: "jo@münchen.de" }, "10.4.4.2"), env));
ok(r.status === 200, "Unicode domain accepted");
env.LEADS._db.prepare("INSERT INTO leads (at, form, store, email, name, updates, summary, fields) VALUES ('t','catalogue-check','=evil()','=1+1@x.com','',0,'','{}')").run();
csv = await (await leads.onRequestGet(ctx(get("", auth), env))).text();
ok(csv.includes("'+sales@x.com") && csv.includes("'=1+1@x.com") && csv.includes("'=evil()"),
   "legacy unsafe rows and a leading + are guarded on export");
for (const o of ["http://localhost.attacker.com", "http://localhost:3000.evil"]) {
  r = await check.onRequestPost(ctx(post("/api/check", { store: "x.com" }, { origin: o, "cf-connecting-ip": "10.3.3.3" })));
  ok(r.status === 403, `origin ${o} refused`);
}

console.log("full list");
const { signListToken, verifyListToken } = await import("../functions/_lib/common.js");
const { listRows, toCsv, compact, analyse } = await import("../assets/catalogue-rules.mjs");
r = await lead.onRequestPost(ctx(form({ "form-name": "catalogue-check", store: "www.shop.example.com", email: "t@shop.example.com" }, "10.6.1.1"), env));
j = await r.json();
ok(r.status === 200 && typeof j.token === "string", "lead form returns a full-list token");
r = await lead.onRequestPost(ctx(form({ "form-name": "catalogue-check", store: "shop.example.com", email: "t@shop.example.com" }, "10.6.1.2"), { LEADS: env.LEADS }));
ok(!(await r.json()).token, "no LEADS_KEY -> no token (the page falls back to the emailed list)");
const tok = j.token;
ok(await verifyListToken(env.LEADS_KEY, "shop.example.com", tok), "token valid for the store, with or without www.");
ok(!(await verifyListToken(env.LEADS_KEY, "other.example.com", tok)), "token refused for another store");
ok(!(await verifyListToken("x".repeat(32), "shop.example.com", tok)), "token refused under another key");
ok(!(await verifyListToken(env.LEADS_KEY, "shop.example.com", await signListToken(env.LEADS_KEY, "shop.example.com", -10))), "expired token refused");
const fp = (o, ip) => check.onRequestPost(ctx(post("/api/check", o, { "cf-connecting-ip": ip }), env));
r = await fp({ store: "shop.example.com", page: 1, token: "123.abc" }, "10.7.1.1");
ok(r.status === 403, "bad token refused before any store request");
const calls0 = storeCalls;
r = await fp({ store: "shop.example.com", page: 1, token: tok }, "10.7.1.2"); const p1 = await r.json();
r = await fp({ store: "shop.example.com", page: 2, token: tok }, "10.7.1.2"); const p2 = await r.json();
await Promise.all(waits);
ok(p1.products.length === 250 && p1.more === true && p2.products.length === 100 && p2.more === false, "pages read until a short page");
ok(!("body_html" in shop(1).products[0]) && p1.products[0].variants[0].sku === "S0" && !("canonical" in p1), "compacted products, internals not exposed");
ok(storeCalls - calls0 <= 4, "robots.txt and the address read once per list, not per page");
r = await fp({ store: "shop.example.com", page: 41, token: tok }, "10.7.1.3");
ok(r.status === 400, "page past the 10,000-product cap refused");
const all = [...p1.products, ...p2.products];
const rows2 = listRows(all);
ok(rows2.filter((x) => x.key === "uncategorised").length === 20 && rows2.filter((x) => x.key === "no_weight").length === 30, "a row for every product to fix");
ok(JSON.stringify(analyse(all).findings.map((f) => f.count)) === JSON.stringify(analyse(shop(250).products.concat(shop(100, 250).products)).findings.map((f) => f.count)),
   "compacted products give the same findings as raw ones");
const dup = listRows([{ id: 1, title: "A", handle: "a", images: [1], body_html: "x", product_type: "Rug", vendor: "Oak", variants: [{ title: "Red", sku: "X1", grams: 1 }, { title: "Blue", sku: "x1", grams: 1 }] },
  { id: 2, title: "B", handle: "b", images: [1], body_html: "x", product_type: "Rugs", vendor: "Oak", variants: [{ title: "Default Title", sku: "B1", grams: 1 }] },
  { id: 3, title: "C", handle: "c", images: [1], body_html: "x", product_type: "Rugs", vendor: "Oak", variants: [{ title: "Default Title", sku: "C1", grams: 1 }] }]);
ok(dup.filter((x) => x.key === "duplicate_sku").length === 2 && dup.find((x) => x.key === "taxonomy_clash")?.fix.includes('"Rugs"'), "shared SKUs and the majority spelling suggested");
const csv2 = toCsv([{ issue: "No SKU", product: "=cmd()", variant: "", sku: "-1", fix: "Add a SKU", handle: "x" }], "shop.example.com");
ok(csv2.includes("'=cmd()") && csv2.includes("'-1") && csv2.includes("https://shop.example.com/products/x"), "CSV is spreadsheet-safe with product links");

globalThis.fetch = realFetch;
console.log(fails ? `\n${fails} FAILED` : "\nALL PASSED");
process.exit(fails ? 1 : 0);
