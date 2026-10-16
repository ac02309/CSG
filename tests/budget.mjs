// Page weight budget: what each page downloads before any image or 3D scene appears.
// Fails if a page grows past its budget, so speed cannot quietly slip.
import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
// compressed bytes, as served (Netlify compresses text files)
const BUDGET = { page: 60_000, film: 200_000, poster: 110_000 };
const gz = (file) => zlib.gzipSync(fs.readFileSync(file)).length;
const failures = [];
let worst = 0;
for (const f of fs.readdirSync(ROOT).filter((x) => x.endsWith('.html'))) {
  const html = fs.readFileSync(path.join(ROOT, f), 'utf8');
  const local = [...html.matchAll(/(?:src|href)="\/?(assets\/[^"?#]+\.(?:css|js))(?:\?[^"]*)?"/g)].map((m) => m[1]).filter((a) => !a.endsWith('film.js'));
  const bytes = gz(path.join(ROOT, f)) + [...new Set(local)].reduce((n, a) => n + gz(path.join(ROOT, a)), 0);
  worst = Math.max(worst, bytes);
  if (bytes > BUDGET.page) failures.push(`${f}: ${bytes} bytes of HTML, CSS and script, budget ${BUDGET.page}`);
}
const film = gz(path.join(ROOT, 'assets/film.js'));
if (film > BUDGET.film) failures.push(`assets/film.js: ${film} bytes compressed, budget ${BUDGET.film}`);
for (const p of fs.readdirSync(path.join(ROOT, 'assets/posters'))) {
  const n = fs.statSync(path.join(ROOT, 'assets/posters', p)).size;
  if (n > BUDGET.poster) failures.push(`assets/posters/${p}: ${n} bytes, budget ${BUDGET.poster}`);
}
if (failures.length) { console.error(`Over budget:\n- ${failures.join('\n- ')}`); process.exit(1); }
console.log(`Within budget: heaviest page ${worst} bytes (budget ${BUDGET.page}), 3D bundle ${film} bytes (budget ${BUDGET.film}).`);
