// Copies only what visitors receive into dist/, for hosts that publish a folder (Cloudflare Pages).
// The repository root also holds tests, docs, marketing files and node_modules, none of which belong
// on the live site; publishing the root would upload all of it and break the host's file limits.
// Run after scripts/configure.mjs: `npm run build`.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.join(ROOT, 'dist');
const KEEP_FILES = /\.(html|png|jpg|ico|txt|xml|webmanifest)$/;
const KEEP_DIRS = ['assets', 'og'];
const KEEP_NAMED = ['_headers', '_redirects'];

fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(OUT);
let n = 0;
for (const f of fs.readdirSync(ROOT)) {
  const src = path.join(ROOT, f);
  if (!fs.statSync(src).isFile()) continue;
  if (f === '_redirects') {
    // the forced-404 rules only hide repository files, which dist/ never contains; other hosts reject Netlify's "404!"
    const kept = fs.readFileSync(src, 'utf8').split('\n').filter((l) => !/\s404!\s*$/.test(l) && !l.startsWith('# Repository files'));
    if (kept.some((l) => l.trim() && !l.startsWith('#'))) { fs.writeFileSync(path.join(OUT, f), kept.join('\n')); n++; }
    continue;
  }
  if (KEEP_FILES.test(f) || KEEP_NAMED.includes(f)) { fs.copyFileSync(src, path.join(OUT, f)); n++; }
}
for (const d of KEEP_DIRS) {
  fs.cpSync(path.join(ROOT, d), path.join(OUT, d), { recursive: true });
  n += fs.readdirSync(path.join(ROOT, d), { recursive: true }).length;
}
console.log(`dist/: ${n} files ready to publish`);
