#!/usr/bin/env node
// Clarke Systems Group · free catalogue check
// Usage: node tools/catalogue-check/check.mjs <store-url> [--out dir] [--no-pdf] [--max N]
import { mkdirSync, writeFileSync } from 'node:fs';
import { resolve, join } from 'node:path';
import { createHttp, fetchCatalogue, normaliseStoreUrl, MAX_PRODUCTS } from './lib/fetch.mjs';
import { analyse, ISSUE_TYPES, ISSUE_ORDER } from './lib/checks.mjs';
import { renderHtml, renderCsv } from './lib/report.mjs';
import { renderPdf } from './lib/pdf.mjs';

const USAGE = `Usage: node tools/catalogue-check/check.mjs <store-url> [--out dir] [--no-pdf] [--max N]

  <store-url>   The store's web address, e.g. https://example-store.com
  --out dir     Where to write the report (default ./reports/<domain>-<date>/)
  --no-pdf      Skip the PDF (HTML and CSV are still written)
  --max N       Stop after N products (default and ceiling ${MAX_PRODUCTS})

Only run this for stores that asked for a check, or on public data for demonstration
without publishing the store's name.`;

function parseArgs(argv) {
  const args = { url: null, out: null, pdf: true, max: MAX_PRODUCTS };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--out') args.out = argv[++i];
    else if (a.startsWith('--out=')) args.out = a.slice(6);
    else if (a === '--no-pdf') args.pdf = false;
    else if (a === '--max') args.max = Math.min(MAX_PRODUCTS, Number(argv[++i]) || MAX_PRODUCTS);
    else if (a === '-h' || a === '--help') args.help = true;
    else if (!a.startsWith('--') && !args.url) args.url = a;
    else throw new Error(`Unknown option: ${a}`);
  }
  return args;
}

async function main() {
  let args;
  try { args = parseArgs(process.argv.slice(2)); } catch (e) { console.error(e.message + '\n\n' + USAGE); process.exit(2); }
  if (args.help || !args.url) { console.log(USAGE); process.exit(args.help ? 0 : 2); }

  let origin;
  try { origin = normaliseStoreUrl(args.url); } catch (e) { console.error(e.message); process.exit(2); }

  const started = Date.now();
  const log = (m) => console.log(m);
  const http = createHttp({ log });
  const catalogue = await fetchCatalogue(origin, { http, max: args.max, log });
  if (!catalogue) {
    console.error(`\nCould not read a public catalogue at ${origin}.
We tried Shopify (/products.json and /collections/all/products.json) and the WooCommerce Store API
(/wp-json/wc/store/v1/products). Either the store runs on another platform, the address is wrong,
the store blocks these endpoints, or the network is blocking the request.
Last response: ${http.lastError || 'none'}
Nothing was written.`);
    process.exit(1);
  }

  const result = analyse(catalogue);
  const now = new Date();
  const date = now.toISOString().slice(0, 10);
  const host = new URL(catalogue.origin).host;
  const outDir = resolve(args.out || join('reports', `${host}-${date}`));
  mkdirSync(outDir, { recursive: true });

  const htmlPath = join(outDir, 'report.html');
  writeFileSync(htmlPath, renderHtml(result, { date: now, warnings: catalogue.warnings }));
  writeFileSync(join(outDir, 'issues.csv'), renderCsv(result));
  let pdfNote = '';
  if (args.pdf) {
    try { await renderPdf(htmlPath, join(outDir, 'report.pdf')); }
    catch (e) { pdfNote = `PDF skipped: ${e.message}`; }
  }

  console.log(`\n${catalogue.platform === 'shopify' ? 'Shopify' : 'WooCommerce'} · ${host}`);
  console.log(`Products checked: ${result.productsChecked}   Variants checked: ${result.variantsChecked}   Requests: ${http.requests}`);
  for (const t of ISSUE_ORDER) {
    const note = result.notes.some((x) => x.type === t) ? ' (store-wide note)' : '';
    if (result.counts[t] || note) console.log(`  ${ISSUE_TYPES[t].label.padEnd(36)} ${String(result.counts[t]).padStart(6)}${note}`);
  }
  for (const x of result.notVisible) console.log(`  Not visible publicly: ${ISSUE_TYPES[x.type].label}`);
  for (const w of catalogue.warnings) console.log(`  Warning: ${w}`);
  if (pdfNote) console.log(`  ${pdfNote}`);
  console.log(`\nReport written to ${outDir}  (${((Date.now() - started) / 1000).toFixed(1)}s)`);
}

main().catch((e) => { console.error(e?.stack || e); process.exit(1); });
