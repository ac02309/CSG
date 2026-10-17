// Report output: branded HTML (also used for the PDF) and a flat CSV.
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { ISSUE_TYPES, ISSUE_ORDER } from './checks.mjs';

const FONT_PATH = fileURLToPath(new URL('../../../assets/fonts/inter.woff2', import.meta.url));
const MAX_ROWS_PER_TABLE = 500;

const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
const n = (x) => Number(x).toLocaleString('en-GB');
const SEV_LABEL = { error: 'Error', warning: 'Warning', notice: 'Notice' };
const PLATFORM = { shopify: 'Shopify', woocommerce: 'WooCommerce' };

function fontFace() {
  try {
    const b64 = readFileSync(FONT_PATH).toString('base64');
    return `@font-face{font-family:"Inter";src:url(data:font/woff2;base64,${b64}) format("woff2");font-weight:100 900;font-display:block}`;
  } catch {
    return ''; // falls back to system fonts
  }
}

const MARK = '<svg viewBox="0 0 30 30" aria-hidden="true" width="26" height="26"><defs><linearGradient id="brandG" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#0f9c86"/><stop offset="1" stop-color="#3b52c4"/></linearGradient></defs><circle cx="15" cy="15" r="11" fill="none" stroke="url(#brandG)" stroke-width="3.2" stroke-dasharray="52 17.1" transform="rotate(25 15 15)" stroke-linecap="round"/><circle cx="25.2" cy="11.2" r="3" fill="url(#brandG)"/></svg>';

function label(type, typeWord) {
  const base = ISSUE_TYPES[type].label;
  if (typeWord === 'category') {
    if (type === 'missing_type') return 'Missing categories';
    if (type === 'clashing_type') return 'Clashing categories';
  }
  return base;
}

export function renderHtml(result, { date = new Date(), warnings = [] } = {}) {
  const host = new URL(result.origin).host;
  const dateStr = date.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
  const found = ISSUE_ORDER.filter((t) => result.counts[t] > 0);
  const totalFlagged = result.issues.length;
  const productsAffected = new Set(result.issues.map((i) => i.productUrl.split('?')[0])).size;
  const noteTypes = new Set(result.notes.map((x) => x.type));
  const hiddenTypes = new Set(result.notVisible.map((x) => x.type));

  const summaryRows = ISSUE_ORDER.map((t) => {
    const c = result.counts[t];
    let status;
    if (c > 0) status = `<span class="pill pill-${ISSUE_TYPES[t].severity}">${n(c)}</span>`;
    else if (noteTypes.has(t)) status = '<span class="pill pill-note">Store-wide note</span>';
    else if (hiddenTypes.has(t) && t !== 'missing_sku') status = '<span class="pill pill-muted">Not visible publicly</span>';
    else status = '<span class="pill pill-ok">None found</span>';
    const link = c > 0 ? `<a href="#${t}">${esc(label(t, result.typeWord))}</a>` : esc(label(t, result.typeWord));
    return `<tr><th scope="row">${link}</th><td class="cost">${esc(ISSUE_TYPES[t].cost)}</td><td class="num">${status}</td></tr>`;
  }).join('');

  const notesHtml = [...result.notes.map((x) => ({ ...x, kind: 'Store-wide note' })), ...result.notVisible.map((x) => ({ ...x, kind: 'Not visible publicly' }))]
    .map((x) => `<li><span class="note-kind">${esc(x.kind)} · ${esc(label(x.type, result.typeWord))}</span><p>${esc(x.text)}</p></li>`).join('');
  const warnHtml = warnings.map((w) => `<li><span class="note-kind">Coverage</span><p>${esc(w)}</p></li>`).join('');

  const sections = found.map((t) => {
    const rows = result.issues.filter((i) => i.type === t);
    const shown = rows.slice(0, MAX_ROWS_PER_TABLE);
    const more = rows.length - shown.length;
    const sev = ISSUE_TYPES[t].severity;
    const body = shown.map((i) => `<tr>
<td class="prod"><a href="${esc(i.productUrl)}">${esc(i.productTitle)}</a></td>
<td>${esc(i.variantTitle) || '<span class="dim">–</span>'}</td>
<td class="sku">${i.sku ? esc(i.sku) : '<span class="dim">–</span>'}</td>
<td>${esc(i.detail)}</td>
<td>${esc(i.fix)}</td>
</tr>`).join('');
    return `<section class="issue" id="${t}">
<header class="issue-head">
  <div><span class="sev sev-${sev}">${SEV_LABEL[sev]}</span><h3>${esc(label(t, result.typeWord))}</h3></div>
  <span class="count">${n(rows.length)} ${rows.length === 1 ? 'item' : 'items'}</span>
</header>
<p class="why"><strong>What this costs you.</strong> ${esc(ISSUE_TYPES[t].cost)}</p>
<table class="list">
<thead><tr><th>Product</th><th>Variant</th><th>SKU</th><th>Problem</th><th>Suggested fix</th></tr></thead>
<tbody>${body}</tbody>
</table>
${more > 0 ? `<p class="more">Showing the first ${n(shown.length)} of ${n(rows.length)}. The full list is in issues.csv.</p>` : ''}
</section>`;
  }).join('\n');

  return `<!doctype html>
<html lang="en-GB">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Catalogue check · ${esc(host)} · Clarke Systems Group</title>
<style>
${fontFace()}
:root{--mist:#f3f5f8;--paper:#fff;--ink:#0b1220;--ink-2:#2a3445;--muted:#5b6474;--rule:#d9dee6;--rule-2:#e7ebf1;--cobalt:#2d4fe0;--cobalt-ink:#1f3bb8;--amber:#f59e0b;--amber-ink:#b54708;--aqua:#0e9384;
--f:"Inter",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;color-scheme:light}
*,*::before,*::after{box-sizing:border-box}
html{background:var(--mist)}
body{margin:0;background:var(--mist);color:var(--ink);font-family:var(--f);font-size:15px;line-height:1.5;letter-spacing:-.011em;-webkit-font-smoothing:antialiased;font-feature-settings:"cv11","ss01"}
a{color:var(--cobalt-ink);text-decoration:none}
a:hover{text-decoration:underline}
h1,h2,h3,p{margin:0}
.wrap{max-width:68rem;margin:0 auto;padding:40px 24px 64px}
.brand{display:flex;align-items:center;gap:10px;font-weight:600;font-size:15px;letter-spacing:-.01em}
.top{display:flex;justify-content:space-between;align-items:center;gap:16px;padding-bottom:28px}
.top .tag{font-size:13px;color:var(--muted)}
.hero{background:var(--paper);border-radius:28px;padding:44px 44px 36px;box-shadow:0 1px 2px rgba(11,18,32,.04),0 12px 32px -12px rgba(11,18,32,.12)}
.eyebrow{font-size:13px;font-weight:600;color:var(--aqua);letter-spacing:.01em;margin-bottom:10px}
h1{font-size:40px;line-height:1.08;letter-spacing:-.035em;font-weight:700;overflow-wrap:anywhere}
.lede{margin-top:14px;font-size:17px;color:var(--ink-2);max-width:44rem}
.meta{margin-top:18px;font-size:13px;color:var(--muted)}
.stats{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-top:32px}
.stat{background:var(--mist);border-radius:18px;padding:18px 20px}
.stat b{display:block;font-size:30px;line-height:1.1;letter-spacing:-.03em;font-weight:700;font-variant-numeric:tabular-nums}
.stat span{font-size:13px;color:var(--muted)}
.stat.alert b{color:var(--amber-ink)}
h2{font-size:26px;letter-spacing:-.03em;font-weight:700;margin:48px 0 16px}
.card{background:var(--paper);border-radius:22px;padding:8px 24px;box-shadow:0 1px 2px rgba(11,18,32,.04)}
table{width:100%;border-collapse:collapse}
.summary th,.summary td{padding:14px 8px;border-bottom:1px solid var(--rule-2);vertical-align:top;text-align:left}
.summary tr:last-child th,.summary tr:last-child td{border-bottom:0}
.summary th{font-weight:600;width:28%;font-size:14px}
.summary th a{color:var(--ink)}
.summary .cost{color:var(--ink-2);font-size:13.5px}
.summary .num{text-align:right;white-space:nowrap;width:1%}
.pill{display:inline-block;font-size:12px;font-weight:600;border-radius:999px;padding:3px 10px;font-variant-numeric:tabular-nums}
.pill-error{background:#fdf0e1;color:var(--amber-ink)}
.pill-warning{background:#fff6e5;color:#8a4a06}
.pill-notice{background:#eef1fd;color:var(--cobalt-ink)}
.pill-ok{background:#e8f6f3;color:#0b7568}
.pill-note{background:#eef1fd;color:var(--cobalt-ink)}
.pill-muted{background:var(--mist);color:var(--muted)}
.notes{list-style:none;padding:0;margin:0;display:grid;gap:10px}
.notes li{background:var(--paper);border-radius:18px;padding:16px 20px;border-left:3px solid var(--cobalt)}
.note-kind{display:block;font-size:12px;font-weight:600;color:var(--cobalt-ink);margin-bottom:4px}
.notes p{font-size:14px;color:var(--ink-2)}
.issue{background:var(--paper);border-radius:22px;padding:26px 24px 18px;margin-top:16px;box-shadow:0 1px 2px rgba(11,18,32,.04)}
.issue-head{display:flex;justify-content:space-between;align-items:flex-start;gap:16px}
.issue h3{font-size:20px;letter-spacing:-.025em;font-weight:700;margin-top:6px}
.count{font-size:13px;color:var(--muted);white-space:nowrap;padding-top:4px}
.sev{display:inline-block;font-size:11px;font-weight:700;letter-spacing:.04em;text-transform:uppercase}
.sev-error{color:var(--amber-ink)}.sev-warning{color:#8a4a06}.sev-notice{color:var(--cobalt-ink)}
.why{margin:10px 0 16px;font-size:14px;color:var(--ink-2);max-width:52rem}
.list{font-size:13px;table-layout:fixed}
.list th{text-align:left;font-size:11.5px;font-weight:600;color:var(--muted);padding:8px 8px;border-bottom:1px solid var(--rule)}
.list td{padding:10px 8px;border-bottom:1px solid var(--rule-2);vertical-align:top;overflow-wrap:anywhere}
.list tr:last-child td{border-bottom:0}
.list th:nth-child(1){width:22%}.list th:nth-child(2){width:12%}.list th:nth-child(3){width:12%}.list th:nth-child(4){width:27%}.list th:nth-child(5){width:27%}
.list .prod a{font-weight:600}
.sku{font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;font-size:12px}
.dim{color:#a3abb8}
.more{font-size:13px;color:var(--muted);padding:12px 8px 4px}
.cta{margin-top:48px;background:var(--ink);color:#fff;border-radius:28px;padding:40px 44px}
.cta h2{margin:0;color:#fff;font-size:28px}
.cta p{margin-top:12px;color:#c9d0dc;font-size:16px;max-width:40rem}
.cta .contact{margin-top:22px;display:flex;flex-wrap:wrap;gap:10px 22px;font-weight:600}
.cta a{color:#fff}
.cta .btn{display:inline-block;background:#fff;color:var(--ink);border-radius:999px;padding:10px 20px}
.fine{margin-top:28px;font-size:12.5px;color:var(--muted);max-width:52rem}
.fine p+p{margin-top:8px}
@media (max-width:720px){.wrap{padding:20px 16px 40px}.hero{padding:28px 22px}h1{font-size:30px}.stats{grid-template-columns:repeat(2,1fr)}
.summary .cost{display:none}.list thead{display:none}.list,.list tbody,.list tr,.list td{display:block;width:auto}.list tr{padding:10px 0;border-bottom:1px solid var(--rule-2)}.list td{border:0;padding:2px 0}.cta{padding:28px 22px}}
@page{size:A4;margin:14mm 12mm}
@media print{html,body{background:var(--mist);-webkit-print-color-adjust:exact;print-color-adjust:exact}.wrap{max-width:none;padding:0}
.hero,.issue,.card,.cta{box-shadow:none}
body{font-size:11.5px}.top{padding-bottom:14px}.hero{padding:26px 28px 22px;border-radius:20px}h1{font-size:30px}.lede{font-size:13.5px;margin-top:10px}.meta{font-size:11px;margin-top:10px}
.stats{margin-top:18px;gap:8px}.stat{padding:12px 14px;border-radius:14px}.stat b{font-size:22px}.stat span{font-size:11px}
h2{font-size:19px;margin:24px 0 10px}.card{padding:2px 16px;border-radius:16px}.summary th,.summary td{padding:7px 6px}.summary th{font-size:11.5px}.summary .cost{font-size:11px}.pill{font-size:10.5px;padding:2px 8px}
.notes li{padding:10px 14px;border-radius:12px}.notes p{font-size:11.5px}
.issue{padding:16px 16px 10px;margin-top:10px;border-radius:16px}.issue h3{font-size:15px;margin-top:3px}.why{font-size:11.5px;margin:6px 0 8px}.count{font-size:11px}
.list{font-size:10.5px}.list th{font-size:9.5px;padding:5px 6px}.list td{padding:6px}.sku{font-size:10px}
.cta{margin-top:24px;padding:24px 28px;border-radius:20px}.cta h2{font-size:21px}.cta p{font-size:13px}.cta .contact{margin-top:14px}.fine{margin-top:16px;font-size:10px}.list tr,.notes li,.summary tr{break-inside:avoid}.list thead{display:table-header-group}.issue-head,.why{break-after:avoid}.cta{break-inside:avoid}h2{break-after:avoid}}
</style>
</head>
<body>
<main class="wrap">
<div class="top"><div class="brand">${MARK}<span>Clarke Systems Group</span></div><span class="tag">Catalogue check</span></div>

<section class="hero">
<p class="eyebrow">${esc(PLATFORM[result.platform] || result.platform)} catalogue check</p>
<h1>${esc(host)}</h1>
<p class="lede">${totalFlagged === 0
    ? 'We checked every product your store publishes and found none of the data errors we look for. Any store-wide notes are below.'
    : `We checked every product your store publishes and found ${n(totalFlagged)} ${totalFlagged === 1 ? 'item' : 'items'} to look at, across ${n(found.length)} ${found.length === 1 ? 'type of issue' : 'types of issue'}. Each one is listed below with why it matters and a suggested fix.`}</p>
<p class="meta">Checked ${esc(dateStr)} · Read-only, from the catalogue your store already publishes · No admin access used</p>
<div class="stats">
  <div class="stat"><b>${n(result.productsChecked)}</b><span>Products checked</span></div>
  <div class="stat"><b>${n(result.variantsChecked)}</b><span>Variants checked</span></div>
  <div class="stat${totalFlagged ? ' alert' : ''}"><b>${n(totalFlagged)}</b><span>Items flagged</span></div>
  <div class="stat"><b>${n(productsAffected)}</b><span>Products affected</span></div>
</div>
</section>

<h2>Summary</h2>
<div class="card"><table class="summary"><tbody>${summaryRows}</tbody></table></div>

${notesHtml || warnHtml ? `<h2>Store-wide notes</h2>
<ul class="notes">${notesHtml}${warnHtml}</ul>` : ''}

${found.length ? `<h2>The product-level list</h2>\n${sections}` : ''}

<section class="cta">
<h2>Want these fixed?</h2>
<p>We’ll quote a fixed price, agreed before work starts. Nightly checks then keep it clean.</p>
<div class="contact"><a class="btn" href="mailto:enquiries@clarkesystemsgroup.com">enquiries@clarkesystemsgroup.com</a><a href="https://www.clarkesystemsgroup.com">clarkesystemsgroup.com</a></div>
</section>

<div class="fine">
<p>How we checked: we read the product data your store publishes to every visitor, one page at a time. We did not log in or use admin access, and we changed nothing. Some fields (such as barcodes or weights on some stores) are not published, and the report says where that is the case.</p>
<p>Some flagged items may be intentional. The list shows where to look; you decide what to fix. Clarke Systems Group · enquiries@clarkesystemsgroup.com</p>
</div>
</main>
</body>
</html>
`;
}

const CSV_HEADER = ['Issue type', 'Severity', 'Product title', 'Product URL', 'Variant title', 'SKU', 'Detail', 'Suggested fix'];
const csvCell = (v) => {
  let s = String(v ?? '');
  if (/^[=+\-@\t\r]/.test(s)) s = "'" + s; // stop spreadsheet formula injection
  return /[",\n\r]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
};

export function renderCsv(result) {
  const lines = [CSV_HEADER.join(',')];
  for (const i of result.issues) {
    lines.push([label(i.type, result.typeWord), SEV_LABEL[i.severity], i.productTitle, i.productUrl, i.variantTitle, i.sku, i.detail, i.fix].map(csvCell).join(','));
  }
  return '﻿' + lines.join('\r\n') + '\r\n';
}
