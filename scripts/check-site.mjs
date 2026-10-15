// Site checks with no dependencies: local links and anchors resolve, structured data parses,
// every page has the essentials, and nothing marked "add before launch" is left behind.
import { readFileSync, readdirSync, existsSync } from "node:fs";

const pages = readdirSync(".").filter((f) => f.endsWith(".html"));
const errors = [], warnings = [];
const ids = Object.fromEntries(pages.map((p) => [p, new Set([...readFileSync(p, "utf8").matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]))]));

for (const page of pages) {
  const html = readFileSync(page, "utf8");
  for (const [, ref] of html.matchAll(/\s(?:href|src)="([^"]+)"/g)) {
    if (/^(https?:|mailto:|tel:|data:)/.test(ref)) continue;
    const [pathAndQuery, hash] = ref.split("#");
    const path = pathAndQuery.split("?")[0].replace(/^\//, "") || page;
    if (!existsSync(path)) { errors.push(`${page}: broken link ${ref}`); continue; }
    if (hash && path.endsWith(".html") && !ids[path]?.has(hash)) errors.push(`${page}: missing anchor ${ref}`);
  }
  for (const [, json] of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try { JSON.parse(json); } catch (e) { errors.push(`${page}: invalid JSON-LD (${e.message})`); }
  }
  for (const [label, re] of [["<title>", /<title>[^<]+<\/title>/], ["meta description", /name="description" content="[^"]+"/], ["one <h1>", /<h1[\s>]/]]) {
    if (!re.test(html)) errors.push(`${page}: missing ${label}`);
  }
  if ((html.match(/<h1[\s>]/g) || []).length > 1) errors.push(`${page}: more than one <h1>`);
  if (page !== "404.html" && !/rel="canonical"/.test(html)) errors.push(`${page}: missing canonical link`);
  for (const [, todo] of html.matchAll(/\[([^\]<]*before launch[^\]<]*)\]/gi)) warnings.push(`${page}: placeholder still present: [${todo}]`);
}

for (const w of warnings) console.log(process.env.GITHUB_ACTIONS ? `::warning::${w}` : `warning: ${w}`);
for (const e of errors) console.log(process.env.GITHUB_ACTIONS ? `::error::${e}` : `error: ${e}`);
console.log(`${pages.length} pages checked: ${errors.length} errors, ${warnings.length} warnings.`);
process.exit(errors.length ? 1 : 0);
