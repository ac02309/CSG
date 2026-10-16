// Build the site for Cloudflare Pages into dist/ (only used if hosting moves; Netlify serves the repo root).
//   Cloudflare Pages settings: build command  node scripts/build-pages.mjs   output directory  dist
//   Functions are read from /functions automatically.
// What it does, and why:
// - copies only public files (repo files such as README, scripts, tests, netlify/ never reach the site;
//   Pages cannot return 404 for them via _redirects the way Netlify does)
// - Pages serves /about.html as a 301 to /about, so links, canonical URLs, og:url, JSON-LD and the sitemap
//   are rewritten to the extensionless form; otherwise every canonical URL would point at a redirect
// - points the contact form at /api/lead (Netlify Forms does not exist on Pages; the form falls back to the
//   visitor's email app if that fails, so nothing is lost)
// - fails the build on a broken internal link or more than 100 _headers rules (the Pages limit)
import { cpSync, existsSync, mkdirSync, readdirSync, readFileSync, rmSync, statSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = fileURLToPath(new URL("..", import.meta.url)); // correct on Windows and in paths with spaces
const OUT = join(ROOT, "dist");
const SITE = "https://www.clarkesystemsgroup.com";
const COPY_DIRS = ["assets", "og", ".well-known"];
const COPY_EXT = /\.(html|png|jpe?g|webp|avif|svg|ico|webmanifest|txt|xml)$/i;
const NEVER = new Set(["README.md", "SECURITY.md", "LAUNCH.md", "site.config.json", "netlify.toml", "package.json",
  "package-lock.json", "_redirects"]);

rmSync(OUT, { recursive: true, force: true });
mkdirSync(OUT);
for (const name of readdirSync(ROOT)) {
  const p = join(ROOT, name);
  if (statSync(p).isFile() && COPY_EXT.test(name) && !NEVER.has(name)) cpSync(p, join(OUT, name));
}
for (const d of COPY_DIRS) if (existsSync(join(ROOT, d))) cpSync(join(ROOT, d), join(OUT, d), { recursive: true });

const pages = readdirSync(OUT).filter((f) => f.endsWith(".html"));
const pageSet = new Set(pages.map((f) => f.replace(/\.html$/, "")));
const clean = (name, rest = "") => (name === "index" ? "/" : name === "404" ? "/404" : name) + rest;

const problems = [];
for (const f of pages) {
  let h = readFileSync(join(OUT, f), "utf8");
  // relative page links: href="services.html#x" -> href="services#x"
  h = h.replace(/(href|action)="([a-z0-9-]+)\.html([?#][^"]*)?"/gi, (m, attr, name, rest) =>
    pageSet.has(name) ? `${attr}="${clean(name, rest || "")}"` : m);
  // root-relative links on the 404 page: href="/services.html"
  h = h.replace(/(href)="\/([a-z0-9-]+)\.html([?#][^"]*)?"/gi, (m, attr, name, rest) =>
    pageSet.has(name) ? `${attr}="/${name === "index" ? "" : name}${rest || ""}"` : m);
  // absolute URLs in canonical, og:url and JSON-LD
  h = h.replaceAll(new RegExp(`${SITE.replace(/[.]/g, "\\.")}/([a-z0-9-]+)\\.html`, "g"),
    (m, name) => (pageSet.has(name) ? `${SITE}/${name === "index" ? "" : name}` : m));
  // the privacy notice must name the host that actually receives form submissions
  if (f === "privacy.html") {
    const swaps = [
      ["your request is sent to us through Netlify, our website host, which stores the submission and notifies us by email.",
       "your request is sent to us through Cloudflare, our website host, which stores the submission until we collect it."],
      ["Netlify (website hosting and request form submissions)",
       process.env.CHECK_ENDPOINT
         ? "Cloudflare (website hosting and request form submissions) and Netlify (running the instant catalogue check, which receives the store address you enter and your IP address for rate limiting, and redirecting the clarkesystemsgroup.com address to www)"
         : "Cloudflare (website hosting and request form submissions) and Netlify (redirecting the clarkesystemsgroup.com address to www)"],
    ];
    for (const [from, to] of swaps) {
      if (!h.includes(from)) problems.push(`privacy.html: expected text not found, update build-pages.mjs: "${from.slice(0, 50)}..."`);
      h = h.replace(from, to);
    }
  }
  if (f === "contact.html") {
    h = h.replace(/(<form[^>]*id="brief"[^>]*?)data-endpoint="[^"]*"/, '$1data-endpoint="/api/lead"');
    if (!h.includes('data-endpoint="/api/lead"')) problems.push("contact.html: could not point the form at /api/lead");
  }
  // fallback: keep the check on Netlify if Shopify turns away Cloudflare's servers (docs/HOSTING.md)
  if (f === "catalogue-check.html" && process.env.CHECK_ENDPOINT) {
    if (!/^https:\/\/[a-z0-9.-]+\/api\/check$/.test(process.env.CHECK_ENDPOINT)) problems.push("CHECK_ENDPOINT must be https://<host>/api/check");
    h = h.replace(/(<form[^>]*id="checkForm")/, `$1 data-endpoint="${process.env.CHECK_ENDPOINT}"`);
  }
  if (f === "catalogue-check.html") {
    h = h.replace(/(<form[^>]*name="catalogue-check")/, '$1 data-endpoint="/api/lead"');
    if (!h.includes('name="catalogue-check" data-endpoint="/api/lead"')) problems.push("catalogue-check.html: lead form not repointed");
  }
  // every internal link must resolve
  for (const [, href] of h.matchAll(/href="([^"#?:]+)(?:[?#][^"]*)?"/g)) {
    if (/^(https?:|mailto:|data:|\/\/)/.test(href)) continue;
    const path = href.replace(/^\//, "").replace(/^\.\//, "");
    if (!path) continue;
    if (pageSet.has(path) || existsSync(join(OUT, path))) continue;
    problems.push(`${f}: broken link ${href}`);
  }
  writeFileSync(join(OUT, f), h);
}

if (existsSync(join(OUT, "sitemap.xml"))) {
  const s = readFileSync(join(OUT, "sitemap.xml"), "utf8").replace(/<loc>([^<]+)\.html<\/loc>/g, (m, u) =>
    `<loc>${u.endsWith("/index") ? u.slice(0, -5) : u}</loc>`);
  writeFileSync(join(OUT, "sitemap.xml"), s);
}

const headers = readFileSync(join(ROOT, "_headers"), "utf8").replace(/^# Netlify response headers\./m, "# Response headers.");
const rules = headers.split("\n").filter((l) => /^\//.test(l)).length;
if (rules > 100) problems.push(`_headers has ${rules} rules; Cloudflare Pages allows 100`);
writeFileSync(join(OUT, "_headers"), headers);

// the live site must never show a "[... before launch]" placeholder (business address): fail the production build
if (process.env.CF_PAGES_BRANCH === "main" || process.env.CONTEXT === "production") {
  for (const f of pages) {
    const m = readFileSync(join(OUT, f), "utf8").match(/\[[^\]<]*before launch[^\]<]*\]/i);
    if (m) problems.push(`${f}: placeholder still present: ${m[0]}`);
  }
}

if (problems.length) {
  console.error(problems.map((p) => "  ! " + p).join("\n"));
  process.exit(1);
}
console.log(`dist/: ${pages.length} pages, ${rules} header rules, links rewritten to extensionless URLs`);
