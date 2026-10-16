// Browser checks: every page opened in Chromium and held to the site's own rules.
// Run with `npm run test:browser` (needs `npx playwright install chromium` once).
// Exits non-zero if any rule is broken, so CI blocks the change.
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';
import { chromium } from 'playwright';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const AXE = fs.readFileSync(createRequire(import.meta.url).resolve('axe-core/axe.min.js'), 'utf8');
const PAGES = fs.readdirSync(ROOT).filter((f) => f.endsWith('.html')).sort();
const TYPES = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.mjs': 'text/javascript', '.json': 'application/json', '.svg': 'image/svg+xml', '.webp': 'image/webp', '.png': 'image/png', '.jpg': 'image/jpeg', '.woff2': 'font/woff2', '.ico': 'image/x-icon', '.txt': 'text/plain', '.xml': 'application/xml' };
// the page holds its load position for 2 s (site.js), so scripted scrolling waits past that
const SETTLE = 2300;

const server = http.createServer((req, res) => {
  let p = decodeURIComponent(new URL(req.url, 'http://x').pathname);
  if (p.endsWith('/')) p += 'index.html';
  const file = path.join(ROOT, p);
  if (!file.startsWith(ROOT) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) { res.writeHead(404); res.end(); return; }
  res.writeHead(200, { 'content-type': TYPES[path.extname(file)] || 'application/octet-stream' });
  fs.createReadStream(file).pipe(res);
});
await new Promise((r) => server.listen(0, '127.0.0.1', r));
const BASE = `http://127.0.0.1:${server.address().port}/`;

const browser = await chromium.launch({ args: ['--disable-webgl', '--disable-webgl2'] });
const failures = [];
const fail = (suite, msg) => failures.push(`${suite}: ${msg}`);
async function open(page, file) { await page.goto(BASE + file); await page.waitForTimeout(SETTLE); await page.evaluate(() => { document.documentElement.style.scrollBehavior = 'auto'; }); }

// 1. Accessibility: WCAG 2.2 AA and best practice, no console errors, on every page
{
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 800 }, reducedMotion: 'reduce', bypassCSP: true });
  const page = await ctx.newPage();
  const errors = []; page.on('pageerror', (e) => errors.push(e.message));
  for (const f of PAGES) {
    await page.goto(BASE + f, { waitUntil: 'load' });
    await page.evaluate(() => document.querySelectorAll('.rv').forEach((e) => e.classList.add('in')));
    await page.addScriptTag({ content: AXE });
    const v = await page.evaluate(async () => (await axe.run(document, { runOnly: ['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa', 'best-practice'] })).violations.map((x) => `${x.id} (${x.nodes.length})`));
    if (v.length) fail('accessibility', `${f}: ${v.join(', ')}`);
  }
  if (errors.length) fail('accessibility', `script errors: ${[...new Set(errors)].join(' | ')}`);
  await ctx.close();
}

// 2. "Request a demo" in the navigation changes at most once (hidden to shown), never on contact,
//    and the label never appears twice on screen at once
for (const [w, h] of [[1440, 900], [1280, 720]]) {
  const page = await browser.newPage({ viewport: { width: w, height: h } });
  for (const f of PAGES) {
    await open(page, f);
    const r = await page.evaluate(async () => {
      const btn = document.querySelector('.gnav-cta'); if (!btn) return null;
      const vis = (el) => { const s = getComputedStyle(el), b = el.getBoundingClientRect(); return s.visibility !== 'hidden' && s.display !== 'none' && +s.opacity > 0.05 && b.width > 0 && b.bottom > 0 && b.top < innerHeight; };
      const seq = [vis(btn) ? 1 : 0]; let twice = 0;
      const H = document.documentElement.scrollHeight;
      for (let y = 0; y <= H; y += 150) {
        scrollTo(0, y); await new Promise((r) => setTimeout(r, 60));
        seq.push(vis(btn) ? 1 : 0);
        // anything tucked behind the navigation bar is not on screen
        const navB = document.querySelector('.gnav').getBoundingClientRect().bottom;
        const same = [...document.querySelectorAll('a,button')].filter((a) => a.textContent.trim() === 'Request a demo' && !a.closest('.mnav,[hidden]') && vis(a) && (a.closest('.gnav') || a.getBoundingClientRect().top >= navB - 2));
        if (same.length > 1) twice++;
      }
      let changes = 0; for (let i = 1; i < seq.length; i++) if (seq[i] !== seq[i - 1]) changes++;
      return { contact: document.body.dataset.nav === 'contact', first: seq[0], changes, hides: seq.some((v, i) => i && seq[i - 1] && !v), twice };
    });
    if (!r) continue;
    if (r.contact && (r.first || r.changes)) fail('demo button', `${f} at ${w}: shown on the contact page`);
    if (!r.contact && (r.hides || r.changes > 1)) fail('demo button', `${f} at ${w}: changes ${r.changes} times`);
    if (r.twice) fail('demo button', `${f} at ${w}: "Request a demo" on screen twice (${r.twice} positions)`);
  }
  await page.close();
}

// 3. The home story: fits one screen, plays in about 11 s, steps can be chosen, rests on 4, replays on return
for (const [w, h] of [[1440, 900], [390, 844], [2560, 1440]]) {
  const page = await browser.newPage({ viewport: { width: w, height: h } });
  await open(page, 'index.html');
  const st = () => page.evaluate(() => { const s = document.querySelector('#story'); return { stage: s.csgStage, on: [...s.querySelectorAll('[data-step]')].findIndex((x) => x.classList.contains('on')) }; });
  const into = () => page.evaluate(() => { const r = document.querySelector('#story .story-grid').getBoundingClientRect(); scrollTo(0, r.top + scrollY - Math.max(70, (innerHeight - r.height) / 2)); });
  const tag = `${w}x${h}`;
  await into(); await page.waitForTimeout(250);
  const fit = await page.evaluate(() => { const r = document.querySelector('#story .story-grid').getBoundingClientRect(); return { h: r.height, room: innerHeight - document.querySelector('.gnav').getBoundingClientRect().bottom }; });
  if (fit.h > fit.room + 1) fail('story', `${tag}: ${Math.round(fit.h)}px tall, screen has ${Math.round(fit.room)}px`);
  await page.waitForTimeout(3000); let a = await st();
  if (a.on !== 1) fail('story', `${tag}: after 3 s shows step ${a.on + 1}, expected 2`);
  await page.waitForTimeout(8500); a = await st();
  if (a.on !== 3 || a.stage !== 3) fail('story', `${tag}: not resting on step 4 after 11.5 s`);
  await page.click('#story [data-go="1"]'); await page.waitForTimeout(3150); a = await st();
  if (a.on !== 2) fail('story', `${tag}: after choosing step 2 and 3 s, shows step ${a.on + 1}, expected 3`);
  await page.evaluate(() => scrollTo(0, document.querySelector('#story').getBoundingClientRect().bottom + scrollY + innerHeight)); await page.waitForTimeout(300);
  await into(); await page.waitForTimeout(300); a = await st();
  if (a.on !== 0) fail('story', `${tag}: does not replay from step 1 on return`);
  await page.close();
}

// 4. Sections fold into place: flat in the reading area, nothing scrolls sideways, the page scale follows the reader
for (const [w, h] of [[1440, 900], [390, 844]]) {
  const page = await browser.newPage({ viewport: { width: w, height: h } });
  for (const f of ['index.html', 'services.html', 'approach.html', 'integrations.html', 'work-launch-qa.html', 'faq.html', 'contact.html']) {
    await open(page, f);
    const out = await page.evaluate(async () => {
      const o = [], frame = () => new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));
      const lt = (el) => { let y = 0; while (el) { y += el.offsetTop; el = el.offsetParent; } return y; };
      const H = document.documentElement.scrollHeight - innerHeight;
      for (let i = 0; i <= 30; i++) {
        scrollTo(0, Math.round(H * ((i * 7) % 31) / 30)); await frame(); const Y = scrollY;
        document.querySelectorAll('.fold').forEach((s) => { if (lt(s) - Y <= innerHeight * 0.6 && s.style.transform) o.push(`section not flat in the reading area at y=${Y}`); });
        if (document.documentElement.scrollWidth > document.documentElement.clientWidth + 1) o.push(`sideways scroll at y=${Y}`);
        const rail = document.querySelector('.page-scale');
        if (rail && getComputedStyle(rail).display !== 'none') {
          const secs = [...document.querySelectorAll('main > section, main > div > section')].filter((s) => s.querySelector('h1,h2'));
          let cur = 0; if (Y > 8) secs.forEach((s, k) => { if (lt(s) <= Y + innerHeight * 0.35) cur = k; });
          const on = [...rail.querySelectorAll('.ps-t')].findIndex((x) => x.classList.contains('on'));
          if (on !== cur) o.push(`page scale marks ${on + 1}, reader in ${cur + 1} at y=${Y}`);
        }
      }
      return [...new Set(o)].slice(0, 3);
    });
    out.forEach((m) => fail('folds', `${f} at ${w}: ${m}`));
  }
  await page.close();
}

// 5. Small phones and browser zoom: nothing wider than the screen
for (const [label, w, h, dsf] of [['320 phone', 320, 640, 2], ['390 phone', 390, 844, 3], ['zoom 50%', 2880, 1800, 0.5], ['zoom 200%', 720, 450, 2], ['zoom 300%', 480, 300, 3]]) {
  const ctx = await browser.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: dsf });
  const page = await ctx.newPage();
  for (const f of PAGES) {
    await page.goto(BASE + f, { waitUntil: 'load' });
    const r = await page.evaluate(() => {
      document.querySelectorAll('.fold').forEach((e) => { e.style.transform = 'none'; });
      const vw = document.documentElement.clientWidth, wide = [];
      if (document.documentElement.scrollWidth > vw + 1) wide.push(`page is ${document.documentElement.scrollWidth}px wide`);
      document.querySelectorAll('main *').forEach((el) => {
        if (el.closest('.marquee,canvas,[hidden],.vh,details:not([open])')) return;
        for (let a = el.parentElement; a && a !== document.body; a = a.parentElement) { const ox = getComputedStyle(a).overflowX; if (ox === 'auto' || ox === 'scroll' || ox === 'hidden' || ox === 'clip') return; }
        const s = getComputedStyle(el); if (s.display === 'none' || s.visibility === 'hidden' || s.position === 'fixed') return;
        const b = el.getBoundingClientRect(); if (b.width && b.right > vw + 1) wide.push(`${el.tagName.toLowerCase()} "${(el.textContent || '').trim().slice(0, 30)}" overflows by ${Math.round(b.right - vw)}px`);
      });
      return wide.slice(0, 2);
    });
    r.forEach((m) => fail('overflow', `${f} at ${label}: ${m}`));
  }
  await ctx.close();
}

// 6. Fast, random scrolling: counters never pass their value and are complete by mid-screen; progress bar exact
{
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  for (const f of ['index.html', 'quality-checks.html', 'approach.html', 'services.html']) {
    await open(page, f);
    const out = await page.evaluate(async () => {
      const o = [], H = document.documentElement.scrollHeight - innerHeight, frame = () => new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));
      for (let i = 0; i < 60; i++) {
        scrollTo(0, Math.round(H * ((i * 13) % 59) / 58)); await frame();
        document.querySelectorAll('[data-tally]').forEach((el) => { const v = parseInt(el.textContent.replace(/[^\d]/g, '') || '0', 10), to = +el.dataset.tally, t = el.getBoundingClientRect().top; if (v > to) o.push(`counter above ${to}`); if (t < innerHeight * 0.5 - 2 && v !== to) o.push(`counter ${v}/${to} not complete past mid-screen`); });
        const bar = document.querySelector('.progress i'); if (bar) { const m = /scaleX\(([\d.]+)\)/.exec(bar.style.transform), want = scrollY / H; if (!m || Math.abs(+m[1] - want) > 0.01) o.push('reading progress out of step'); }
      }
      return [...new Set(o)].slice(0, 3);
    });
    out.forEach((m) => fail('scroll speed', `${f}: ${m}`));
  }
  await page.close();
}

// 7. Nothing is ever missed: a flick to the bottom of every page leaves no block or headline unrevealed behind it
for (const [w, h] of [[1440, 900], [390, 844]]) {
  const page = await browser.newPage({ viewport: { width: w, height: h } });
  for (const f of PAGES) {
    await open(page, f);
    const left = await page.evaluate(async () => {
      const frame = () => new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));
      for (let y = 0; y < document.documentElement.scrollHeight; y += innerHeight * 1.6) { scrollTo(0, y); await frame(); }
      scrollTo(0, document.documentElement.scrollHeight); await frame(); await frame();
      return [...document.querySelectorAll('.rv:not(.in), [data-split]:not(.in)')].filter((e) => { const b = e.getBoundingClientRect(); return b.height > 0 && b.bottom < 0; }).length;
    });
    if (left) fail('nothing missed', `${f} at ${w}px: ${left} block(s) left hidden after a fast scroll`);
  }
  await page.close();
}

// 8. With 3D on: the scenes may spill past their frames but never past the screen edge
{
  const gl = await chromium.launch({ args: ['--use-gl=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const page = await gl.newPage({ viewport: { width: 390, height: 844 } });
  for (const f of PAGES.filter((p) => fs.readFileSync(path.join(ROOT, p), 'utf8').includes('film.js'))) {
    await page.goto(BASE + f); await page.waitForTimeout(1500);
    const wide = await page.evaluate(async () => {
      for (let y = 0; y < document.documentElement.scrollHeight; y += innerHeight) { scrollTo(0, y); await new Promise((r) => setTimeout(r, 60)); }
      return document.documentElement.scrollWidth - innerWidth;
    });
    if (wide > 0) fail('3D overflow', `${f}: page is ${wide}px wider than a 390px screen with 3D on`);
  }
  await gl.close();
}

await browser.close(); server.close();
if (failures.length) { console.error(`${failures.length} problem(s):\n- ${failures.join('\n- ')}`); process.exit(1); }
console.log(`Browser checks passed on ${PAGES.length} pages: accessibility, demo button, story, folds, overflow, scroll speed, nothing missed, 3D overflow.`);
