#!/usr/bin/env node
// Offline tests: run the engine against the synthetic fixtures with a fake fetch. No network.
// Usage: node tools/catalogue-check/test.mjs [--pdf]
import assert from 'node:assert/strict';
import { readFileSync, mkdtempSync, existsSync, statSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHttp, fetchCatalogue, normaliseStoreUrl, USER_AGENT } from './lib/fetch.mjs';
import { analyse, typeKey, ISSUE_ORDER } from './lib/checks.mjs';
import { renderHtml, renderCsv } from './lib/report.mjs';

const here = fileURLToPath(new URL('.', import.meta.url));
const shopifyFx = JSON.parse(readFileSync(join(here, 'fixtures/shopify-products.json'), 'utf8'));
const wooFx = JSON.parse(readFileSync(join(here, 'fixtures/woocommerce-products.json'), 'utf8'));
const clone = (x) => JSON.parse(JSON.stringify(x));

// A fake fetch: routes map exact URLs to JSON bodies (or { status, body, headers }). Everything else is 404.
function fakeFetch(routes, seen = []) {
  return async (url, init) => {
    seen.push({ url, headers: init?.headers || {} });
    let r = routes[url];
    if (typeof r === 'function') r = r();
    if (r === undefined) return new Response('<html>Not found</html>', { status: 404 });
    if (r && r.__raw) return new Response(JSON.stringify(r.body), { status: r.status, headers: r.headers || {} });
    return new Response(JSON.stringify(r), { status: 200, headers: { 'content-type': 'application/json' } });
  };
}
const sleeps = [];
const fakeSleep = async (ms) => { sleeps.push(ms); };
const httpFor = (routes, seen) => createHttp({ fetchImpl: fakeFetch(routes, seen), sleep: fakeSleep });

let passed = 0;
const tests = [];
const test = (name, fn) => tests.push({ name, fn });

const SHOP = 'https://example-store.test';
const shopRoutes = (products = shopifyFx.products) => ({
  [`${SHOP}/products.json?limit=250&page=1`]: { products },
  [`${SHOP}/products.json?limit=250&page=2`]: { products: [] },
});

const WOO = 'https://example-woo.test';
const wooRoutes = () => ({
  [`${WOO}/wp-json/wc/store/v1/products?per_page=100&page=1`]: { __raw: true, status: 200, body: wooFx.products, headers: { 'X-WP-TotalPages': '1' } },
  [`${WOO}/wp-json/wc/store/v1/products?type=variation&per_page=100&page=1`]: { __raw: true, status: 200, body: wooFx.variations, headers: { 'X-WP-TotalPages': '1' } },
});

const expectCounts = (counts, expected) => {
  for (const t of ISSUE_ORDER) assert.equal(counts[t], expected[t] ?? 0, `count for ${t}`);
};

// ---------------- Shopify ----------------
test('Shopify fixture: detection, pagination, polite requests', async () => {
  const seen = [];
  sleeps.length = 0;
  const cat = await fetchCatalogue('example-store.test/some/page', { http: httpFor(shopRoutes(), seen) });
  assert.equal(cat.platform, 'shopify');
  assert.equal(cat.origin, SHOP);
  assert.equal(cat.products.length, 8);
  assert.deepEqual(seen.map((s) => s.url), [`${SHOP}/products.json?limit=250&page=1`, `${SHOP}/products.json?limit=250&page=2`]);
  assert.ok(seen.every((s) => s.headers['User-Agent'] === USER_AGENT));
  assert.equal(sleeps.length, 1, 'one pause between two requests');
  assert.ok(sleeps.every((ms) => ms >= 600 && ms <= 1000), 'pauses are 600–1000 ms');
});

test('Shopify fixture: every check finds the expected items', async () => {
  const cat = await fetchCatalogue(SHOP, { http: httpFor(shopRoutes()) });
  const r = analyse(cat);
  assert.equal(r.productsChecked, 8);
  assert.equal(r.variantsChecked, 10);
  expectCounts(r.counts, {
    shared_sku: 4, missing_sku: 1, missing_barcode: 1, missing_image: 1, variant_image: 2, missing_weight: 1,
    missing_type: 1, clashing_type: 2, no_description: 1, duplicate_title: 2, zero_price: 1, compare_below_price: 1,
  });
  assert.equal(r.notes.length, 0);
  assert.equal(r.notVisible.length, 0);
  // Spot checks on the detail
  const weight = r.issues.find((i) => i.type === 'missing_weight');
  assert.equal(weight.sku, '');
  assert.equal(weight.variantTitle, 'L');
  assert.equal(weight.productUrl, `${SHOP}/products/classic-tee?variant=103`);
  const clash = r.issues.filter((i) => i.type === 'clashing_type').map((i) => i.productTitle).sort();
  assert.deepEqual(clash, ['Logo Tee', 'Plain Tee']);
  assert.match(r.issues.find((i) => i.type === 'clashing_type').fix, /“T-Shirt”/);
  assert.ok(!r.issues.some((i) => i.type === 'missing_weight' && i.productTitle === 'Gift Card'), 'non-shipped items are not flagged for weight');
});

test('Shopify: barcode field absent store-wide is reported as not visible, not as errors', async () => {
  const products = clone(shopifyFx.products);
  for (const p of products) for (const v of p.variants) delete v.barcode;
  const r = analyse(await fetchCatalogue(SHOP, { http: httpFor(shopRoutes(products)) }));
  assert.equal(r.counts.missing_barcode, 0);
  assert.ok(r.notVisible.some((x) => x.type === 'missing_barcode'));
});

test('Shopify: a field empty on >90% of products becomes one store-wide note', async () => {
  const products = [];
  for (let i = 1; i <= 20; i++) {
    products.push({ id: i, title: `Item ${i}`, handle: `item-${i}`, product_type: 'Prints', body_html: i === 1 ? '<p>Hi</p>' : '',
      images: [{ id: i, variant_ids: [] }], variants: [{ id: 1000 + i, title: 'Default Title', sku: `P-${i}`, barcode: '123', grams: 10, requires_shipping: true, price: '5.00' }] });
  }
  const r = analyse(await fetchCatalogue(SHOP, { http: httpFor(shopRoutes(products)) }));
  assert.equal(r.counts.no_description, 0);
  assert.equal(r.notes.length, 1);
  assert.equal(r.notes[0].type, 'no_description');
  assert.match(r.notes[0].text, /95% of products \(19 of 20\)/);
});

test('Shopify: multi-page catalogue; stops when the server ignores the page parameter', async () => {
  const mk = (from, n) => Array.from({ length: n }, (_, k) => ({ id: from + k, title: `P${from + k}`, handle: `p${from + k}`, product_type: 'X', body_html: 'x', images: [{ id: 1 }], variants: [{ id: from + k, sku: `S${from + k}`, price: '1.00', grams: 1, requires_shipping: true }] }));
  const routes = {
    [`${SHOP}/products.json?limit=250&page=1`]: { products: mk(1, 250) },
    [`${SHOP}/products.json?limit=250&page=2`]: { products: mk(251, 30) },
    [`${SHOP}/products.json?limit=250&page=3`]: { products: [] },
  };
  const cat = await fetchCatalogue(SHOP, { http: httpFor(routes) });
  assert.equal(cat.products.length, 280);
  const repeat = { [`${SHOP}/products.json?limit=250&page=1`]: { products: mk(1, 250) }, [`${SHOP}/products.json?limit=250&page=2`]: { products: mk(1, 250) } };
  const cat2 = await fetchCatalogue(SHOP, { http: httpFor(repeat) });
  assert.equal(cat2.products.length, 250);
  const capped = await fetchCatalogue(SHOP, { http: httpFor(routes), max: 100 });
  assert.equal(capped.products.length, 100);
  assert.ok(capped.truncated);
});

test('Shopify: falls back to /collections/all/products.json', async () => {
  const routes = {
    [`${SHOP}/collections/all/products.json?limit=250&page=1`]: { products: shopifyFx.products },
    [`${SHOP}/collections/all/products.json?limit=250&page=2`]: { products: [] },
  };
  const cat = await fetchCatalogue(SHOP, { http: httpFor(routes) });
  assert.equal(cat.platform, 'shopify');
  assert.equal(cat.source, `${SHOP}/collections/all/products.json`);
});

test('HTTP: waits and retries on 429', async () => {
  let n = 0;
  sleeps.length = 0;
  const routes = {
    [`${SHOP}/products.json?limit=250&page=1`]: () => (n++ === 0 ? { __raw: true, status: 429, body: {}, headers: { 'Retry-After': '2' } } : { products: shopifyFx.products }),
    [`${SHOP}/products.json?limit=250&page=2`]: { products: [] },
  };
  const cat = await fetchCatalogue(SHOP, { http: httpFor(routes) });
  assert.equal(cat.products.length, 8);
  assert.ok(sleeps.includes(2000));
});

// ---------------- WooCommerce ----------------
test('WooCommerce fixture: detection and every check', async () => {
  const seen = [];
  const cat = await fetchCatalogue(WOO, { http: httpFor(wooRoutes(), seen) });
  assert.equal(cat.platform, 'woocommerce');
  assert.equal(cat.products.length, 9);
  assert.equal(cat.variations.length, 3);
  const r = analyse(cat);
  assert.equal(r.productsChecked, 9);
  assert.equal(r.variantsChecked, 11);
  expectCounts(r.counts, {
    shared_sku: 4, missing_sku: 1, missing_barcode: 0, missing_image: 1, variant_image: 0, missing_weight: 0,
    missing_type: 1, clashing_type: 2, no_description: 1, duplicate_title: 2, zero_price: 1, compare_below_price: 1,
  });
  // GTIN field is published but empty on 10 of 11 items: one store-wide note
  assert.deepEqual(r.notes.map((x) => x.type), ['missing_barcode']);
  // Weight and variant images are not in the Store API
  assert.deepEqual(r.notVisible.map((x) => x.type).sort(), ['missing_weight', 'variant_image']);
  const missingSku = r.issues.find((i) => i.type === 'missing_sku');
  assert.equal(missingSku.productTitle, 'Linen Shirt');
  assert.equal(missingSku.variantTitle, 'L');
  assert.deepEqual(r.issues.filter((i) => i.type === 'clashing_type').map((i) => i.productTitle).sort(), ['Leather Belt', 'Oxford Shirt']);
  assert.equal(r.typeWord, 'category');
});

test('WooCommerce: variable products without public variation data are not flagged for SKU', async () => {
  const routes = { [`${WOO}/wp-json/wc/store/v1/products?per_page=100&page=1`]: { __raw: true, status: 200, body: wooFx.products, headers: { 'X-WP-TotalPages': '1' } } };
  const r = analyse(await fetchCatalogue(WOO, { http: httpFor(routes) }));
  assert.equal(r.counts.missing_sku, 0);
  assert.ok(r.notVisible.some((x) => x.type === 'missing_sku'));
});

test('Neither platform: returns null (CLI exits with a clear message)', async () => {
  const cat = await fetchCatalogue('https://not-a-store.test', { http: httpFor({}) });
  assert.equal(cat, null);
});

// ---------------- helpers and output ----------------
test('Type clash keys', () => {
  for (const t of ['T-Shirt', 'Tshirt', 'T-shirts', 't shirt', 'T Shirts']) assert.equal(typeKey(t), 'tshirt', t);
  assert.equal(typeKey('Accessories'), typeKey('accessory'));
  assert.equal(typeKey('Glasses'), typeKey('Glass'));
  assert.equal(typeKey('Dresses'), typeKey('dress'));
  assert.equal(typeKey('Home & Garden'), typeKey('Home and garden'));
  assert.notEqual(typeKey('Hats'), typeKey('Hat stands'));
  assert.equal(normaliseStoreUrl('shop.example.com/collections/x'), 'https://shop.example.com');
});

test('Report: HTML and CSV contain every flagged item', async () => {
  const r = analyse(await fetchCatalogue(SHOP, { http: httpFor(shopRoutes()) }));
  const html = renderHtml(r, { date: new Date('2026-10-17') });
  assert.match(html, /@font-face\{font-family:"Inter";src:url\(data:font\/woff2;base64,/);
  assert.match(html, /Want these fixed\?/);
  assert.match(html, /We’ll quote a fixed price, agreed before work starts\. Nightly checks then keep it clean\./);
  assert.match(html, /enquiries@clarkesystemsgroup\.com/);
  assert.match(html, /Missing barcodes can stop products appearing on Google Shopping/);
  assert.match(html, /href="https:\/\/example-store\.test\/products\/classic-tee\?variant=103"/);
  assert.ok(!/<script/i.test(html), 'no scripts in the report');
  const csv = renderCsv(r);
  const lines = csv.replace(/^﻿/, '').trim().split('\r\n');
  assert.equal(lines.length, 1 + r.issues.length);
  assert.equal(lines[0], 'Issue type,Severity,Product title,Product URL,Variant title,SKU,Detail,Suggested fix');
  assert.equal(r.issues.length, 18);
});

if (process.argv.includes('--pdf')) {
  test('PDF renders with Playwright (A4)', async () => {
    const { writeFileSync } = await import('node:fs');
    const { renderPdf } = await import('./lib/pdf.mjs');
    const r = analyse(await fetchCatalogue(SHOP, { http: httpFor(shopRoutes()) }));
    const dir = mkdtempSync(join(tmpdir(), 'catcheck-'));
    writeFileSync(join(dir, 'report.html'), renderHtml(r));
    await renderPdf(join(dir, 'report.html'), join(dir, 'report.pdf'));
    assert.ok(existsSync(join(dir, 'report.pdf')) && statSync(join(dir, 'report.pdf')).size > 10000);
    assert.equal(readFileSync(join(dir, 'report.pdf')).subarray(0, 5).toString(), '%PDF-');
    rmSync(dir, { recursive: true, force: true });
  });
}

for (const t of tests) {
  try {
    await t.fn();
    passed++;
    console.log(`  ok   ${t.name}`);
  } catch (e) {
    console.log(`  FAIL ${t.name}\n       ${e.message}`);
    process.exitCode = 1;
  }
}
console.log(`\n${passed}/${tests.length} tests passed`);
