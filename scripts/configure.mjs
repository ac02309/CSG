// Applies site.config.json to the pages. Each owner-supplied detail lives in the config; this script
// writes it into the marked regions (<!-- cfg:name -->…<!-- /cfg:name -->) and a few attributes.
// It is idempotent: run it after every config change and commit the result.
//
//   node scripts/configure.mjs           apply the config
//   node scripts/configure.mjs --check   fail if the pages are out of date with the config (used in CI)
//
// It also stamps each stylesheet and script reference with a fingerprint of the file (?v=…), so a
// changed asset is never served stale from a visitor's cache.
import { readFileSync, writeFileSync, readdirSync, existsSync } from "node:fs";
import { createHash } from "node:crypto";

const check = process.argv.includes("--check");
const cfg = JSON.parse(readFileSync("site.config.json", "utf8"));
const SITE = "https://www.clarkesystemsgroup.com/";
const problems = [];

const esc = (s) => String(s ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const url = (s) => (/^https:\/\/[^\s"<>]+$/.test(s || "") ? s : "");
const arrow = '<svg aria-hidden="true" focusable="false" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M3 8h10M9 4l4 4-4 4"/></svg>';

// ---------- derived values ----------
const a = cfg.business?.address || {};
const addressParts = [a.line1, a.line2, a.town, a.postcode].map((s) => (s || "").trim()).filter(Boolean);
const address = addressParts.length >= 3 ? [...addressParts, a.country || "United Kingdom"].join(", ") : "";
if (addressParts.length && !address) problems.push("business.address needs at least line1, town and postcode.");

const f = cfg.founder || {};
const founderOn = !!(f.show && f.name);
const photo = founderOn && f.photo ? f.photo.replace(/^\//, "") : "";
if (photo && !existsSync(photo)) problems.push(`founder.photo "${photo}" does not exist.`);
const founderLinkedIn = url(f.linkedin);
if (f.linkedin && !founderLinkedIn) problems.push("founder.linkedin must be a full https:// URL.");
const companyLinkedIn = url(cfg.business?.linkedin);
if (cfg.business?.linkedin && !companyLinkedIn) problems.push("business.linkedin must be a full https:// URL.");
const booking = url(cfg.booking?.url);
if (cfg.booking?.url && !booking) problems.push("booking.url must be a full https:// URL.");

const testimonials = (cfg.testimonials || []).filter((t) => t.consent && t.quote && t.name);
const fc = cfg.foundingClients || {};
const foundingOn = !!(fc.show && fc.offer);
if (fc.show && !fc.offer) problems.push("foundingClients.offer is empty, so the programme stays hidden.");

const an = cfg.analytics || {};
const provider = ["plausible", "cloudflare", "netlify"].includes(an.provider) ? an.provider : "none";
if (provider === "cloudflare" && !an.cloudflareToken) problems.push("analytics.cloudflareToken is needed for Cloudflare Web Analytics.");

// ---------- region renderers ----------
const initials = (n) => n.split(/\s+/).map((w) => w[0]).join("").slice(0, 2).toUpperCase();

function founderSection() {
  if (!founderOn) return "";
  const pic = photo
    ? `<img src="${esc(photo)}" alt="${esc(f.photoAlt || f.name)}" width="480" height="560" loading="lazy" decoding="async">`
    : `<span class="fd-mono" aria-hidden="true">${esc(initials(f.name))}</span>`;
  const proof = (f.proof || []).filter(Boolean).map((p) => `<li>${esc(p)}</li>`).join("");
  const li = founderLinkedIn ? `<a class="btn btn-g" href="${esc(founderLinkedIn)}" rel="me noopener" target="_blank" data-track="LinkedIn click">LinkedIn</a>` : "";
  return `
  <section class="block" id="founder" aria-labelledby="founderTitle">
    <div class="wrap">
      <div class="founder">
        <div class="fd-photo">${pic}</div>
        <div class="fd-copy">
          <span class="tag">Who you work with</span>
          <h2 class="h-l" id="founderTitle">${esc(f.name)}</h2>
          <p class="fd-role">${esc(f.role)}</p>
          <p class="fd-bio">${esc(f.bio)}</p>
          ${proof ? `<ul class="fd-proof">${proof}</ul>` : ""}
          <div class="fd-links"><a class="btn btn-p" href="contact.html?topic=Demo">Request a demo</a>${li}</div>
        </div>
      </div>
    </div>
  </section>
  `;
}

function testimonialSection() {
  if (!testimonials.length) return "";
  const cards = testimonials.map((t) => {
    const who = [t.role, t.company].filter(Boolean).map(esc).join(", ");
    const res = t.result ? `<p class="tm-res"><span class="big">${esc(t.result)}</span><span>${esc(t.resultLabel)}</span></p>` : "";
    const cs = t.caseStudy && existsSync(t.caseStudy) ? `<a class="link" href="${esc(t.caseStudy)}">Read the case study ${arrow}</a>` : "";
    const inc = t.foundingClient ? `<span class="tm-inc">Founding client: received a discount on their build in exchange for a case study and testimonial.</span>` : "";
    return `<figure class="tm">${res}<blockquote><p>${esc(t.quote)}</p></blockquote>${cs}<figcaption><strong>${esc(t.name)}</strong>${who ? `<span>${who}</span>` : ""}${inc}</figcaption></figure>`;
  }).join("");
  return `
  <section class="block" id="clients" aria-labelledby="clientsTitle">
    <div class="wrap">
      <div class="head"><h2 class="h-l" id="clientsTitle">${testimonials.length > 1 ? "What clients say." : "What a client says."}</h2><p class="sub">Clarke Systems Group clients, in their own words.</p></div>
      <div class="tm-grid${testimonials.length === 1 ? " one" : ""}">${cards}</div>
    </div>
  </section>
  `;
}

function foundingSection() {
  if (!foundingOn) return "";
  const places = Number(fc.places) > 0 ? `${Number(fc.places)} founding client${Number(fc.places) === 1 ? "" : "s"}` : "a small number of founding clients";
  const closes = fc.closes ? ` Places close ${esc(fc.closes)}.` : "";
  return `
  <section class="block-tight" id="founding" aria-labelledby="foundingTitle">
    <div class="wrap">
      <div class="founding">
        <div class="fo-copy">
          <span class="tag">Founding client programme</span>
          <h2 class="h-l" id="foundingTitle">${esc(fc.offer)}</h2>
          <p class="sub">We are taking on ${places}. You get the full build, documentation and 30-day defect cover, with the founder leading your project personally.${closes}</p>
        </div>
        <ul class="fo-terms">
          <li><strong>What you get</strong><span>${esc(fc.offer)}, on the same scope, process and guarantees as every project.</span></li>
          <li><strong>What we ask</strong><span>Once your system is live and has delivered a measurable result, a short case study and testimonial, published only with your written approval. Named or anonymised, your choice.</span></li>
        </ul>
        <a class="btn btn-p" href="contact.html?topic=Founding+client+programme">Apply as a founding client</a>
      </div>
    </div>
  </section>
  `;
}

const faqDefault = "Clarke Systems Group was founded by an engineer from enterprise digital commerce who designed and delivered automation systems at a global digital-commerce analytics business, including launch quality assurance across 30+ markets, capacity planning for 290+ client projects and AI product categorisation. Our case studies present that work, anonymised. Clarke Systems Group is independent and is not affiliated with any current or former employer.";
const faqFounder = () => founderOn
  ? `Clarke Systems Group was founded by ${esc(f.name)}, an engineer from enterprise digital commerce who designed and delivered automation systems at a global digital-commerce analytics business, including launch quality assurance across 30+ markets, capacity planning for 290+ client projects and AI product categorisation. ${esc(f.name.split(" ")[0])} leads every project personally. Our case studies present that earlier work, anonymised. Clarke Systems Group is independent and is not affiliated with any current or former employer.`
  : faqDefault;

const social = () => {
  const href = companyLinkedIn || (founderOn ? founderLinkedIn : "");
  return href ? `<li><a href="${esc(href)}" rel="me noopener" target="_blank" data-track="LinkedIn click">LinkedIn</a></li>` : "";
};

const analyticsTag = () => {
  if (provider === "plausible") return `<script defer data-domain="${esc(an.domain)}" src="https://plausible.io/js/script.js"></script>`;
  if (provider === "cloudflare") return `<script defer src="https://static.cloudflareinsights.com/beacon.min.js" data-cf-beacon='{"token":"${esc(an.cloudflareToken)}"}'></script>`;
  return "";
};
const analyticsName = { plausible: "Plausible Analytics", cloudflare: "Cloudflare Web Analytics", netlify: "Netlify Analytics" }[provider];
const privacyAnalytics = () => provider === "none" ? "" : `<li>Visit statistics: we use ${analyticsName} to count visits and see which pages are useful. It does not use cookies, does not track you across other sites and does not identify you; we see only totals, such as page views and the country and type of device visitors use.</li>`;
const privacyProcessors = () => provider === "none" || provider === "netlify" ? "" : `, ${analyticsName.replace(/ Analytics$/, "")} (visit statistics)`;

const CSP_BASE = {
  "default-src": ["'self'"], "script-src": ["'self'"], "style-src": ["'self'", "'unsafe-inline'"], "img-src": ["'self'", "data:"],
  "font-src": ["'self'"], "connect-src": ["'self'", "https:"], "form-action": ["'self'", "mailto:"], "base-uri": ["'self'"], "object-src": ["'none'"],
};
const csp = () => {
  const c = structuredClone(CSP_BASE);
  if (provider === "plausible") c["script-src"].push("https://plausible.io");
  if (provider === "cloudflare") c["script-src"].push("https://static.cloudflareinsights.com");
  return Object.entries(c).map(([k, v]) => `${k} ${v.join(" ")}`).join("; ") + "; upgrade-insecure-requests";
};

const regions = {
  address: () => (address ? esc(address) : "[Business address: add before launch]"),
  founder: founderSection,
  testimonials: testimonialSection,
  founding: foundingSection,
  "faq-founder": faqFounder,
  social,
  analytics: analyticsTag,
  "privacy-analytics": privacyAnalytics,
  "privacy-processors": privacyProcessors,
};

// ---------- apply ----------
const fingerprint = Object.fromEntries(["site.css", "site.js", "film.js"].map((f) => [f, createHash("sha256").update(readFileSync(`assets/${f}`)).digest("hex").slice(0, 10)]));
const changed = [];
for (const page of readdirSync(".").filter((p) => p.endsWith(".html"))) {
  const before = readFileSync(page, "utf8");
  let html = before.replace(/<!-- cfg:([a-z-]+) -->[\s\S]*?<!-- \/cfg:\1 -->/g, (m, name) =>
    regions[name] ? `<!-- cfg:${name} -->${regions[name]()}<!-- /cfg:${name} -->` : m);

  html = html.replace(/(\/?assets\/(site\.css|site\.js|film\.js))\?v=[\w-]*/g, (m, ref, file) => `${ref}?v=${fingerprint[file]}`);
  html = html.replace(/(<meta http-equiv="Content-Security-Policy" content=")[^"]*(")/, `$1${csp()}$2`);
  if (page === "contact.html") html = html.replace(/data-booking="[^"]*"/, `data-booking="${esc(booking)}"`);

  if (page === "index.html") {
    html = html.replace(/(<script type="application\/ld\+json">)([\s\S]*?)(<\/script>)/, (m, open, json, close) => {
      const data = JSON.parse(json);
      const org = data["@graph"].find((n) => n["@id"] === SITE + "#org");
      org.address = address
        ? { "@type": "PostalAddress", streetAddress: [a.line1, a.line2].filter(Boolean).join(", "), addressLocality: a.town, postalCode: a.postcode, addressCountry: "GB" }
        : { "@type": "PostalAddress", addressCountry: "GB" };
      const sameAs = [companyLinkedIn].filter(Boolean);
      if (sameAs.length) org.sameAs = sameAs; else delete org.sameAs;
      if (founderOn) {
        org.founder = { "@type": "Person", name: f.name, jobTitle: f.role, ...(founderLinkedIn ? { sameAs: [founderLinkedIn] } : {}), ...(photo ? { image: SITE + photo } : {}) };
      } else delete org.founder;
      return open + JSON.stringify(data) + close;
    });
  }

  if (html !== before) {
    changed.push(page);
    if (!check) writeFileSync(page, html);
  }
}

for (const p of problems) console.log(`config: ${p}`);
if (check) {
  if (changed.length) {
    console.log(`Pages out of date with site.config.json: ${changed.join(", ")}. Run: node scripts/configure.mjs`);
    process.exit(1);
  }
  console.log("Pages match site.config.json.");
} else {
  console.log(changed.length ? `Updated: ${changed.join(", ")}` : "No changes.");
}
const status = [
  ["Business address", !!address], ["Founder section", founderOn], ["Founder photo", !!photo], ["LinkedIn", !!(companyLinkedIn || founderLinkedIn)],
  ["Booking link", !!booking], ["Analytics", provider !== "none"], ["Founding client programme", foundingOn], [`Testimonials (${testimonials.length})`, testimonials.length > 0],
];
console.log("\n" + status.map(([k, v]) => `  ${v ? "on " : "off"}  ${k}`).join("\n"));
