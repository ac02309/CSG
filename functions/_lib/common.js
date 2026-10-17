// Shared helpers for the Cloudflare Pages Functions (Workers runtime). Only used if the site moves to
// Cloudflare Pages; the Netlify site ignores this folder. See docs/HOSTING.md.
export const ALLOWED_ORIGINS = new Set(["https://www.clarkesystemsgroup.com", "https://clarkesystemsgroup.com"]);

export function json(status, body, extra = {}) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store",
      "X-Content-Type-Options": "nosniff", ...extra },
  });
}

export function originAllowed(req) {
  const origin = req.headers.get("origin") || "";
  if (!origin) return true; // same-origin form posts from older browsers omit it; other limits still apply
  return ALLOWED_ORIGINS.has(origin) || /^https:\/\/[a-z0-9-]+\.clarkesystemsgroup\.pages\.dev$/.test(origin) ||
    origin === "https://clarkesystemsgroup.pages.dev" || /^http:\/\/localhost(:\d+)?$/.test(origin);
}

export const clientIp = (req) => req.headers.get("cf-connecting-ip") || "unknown";

// DNS over HTTPS (Cloudflare's resolver): Workers have no DNS API. Returns [{address}] like Node's lookup(all).
export async function dohResolve(host) {
  const out = [];
  for (const type of ["A", "AAAA"]) {
    const r = await fetch(`https://cloudflare-dns.com/dns-query?name=${encodeURIComponent(host)}&type=${type}`,
      { headers: { Accept: "application/dns-json" } });
    if (!r.ok) throw new Error(`DoH ${r.status}`);
    const j = await r.json();
    for (const a of j.Answer || []) if (a.type === 1 || a.type === 28) out.push({ address: a.data });
  }
  if (!out.length) throw new Error("no address");
  return out;
}

// Soft per-IP rate limit using the edge cache (per data centre, not global; good enough to stop casual abuse
// without paying for KV writes, which are capped at 1,000 a day on the free plan).
// route keeps each endpoint's counter separate (a visitor's checks must never use up their lead submission).
// Not atomic: a parallel burst can slip a few requests past the limit; the function's own work is bounded anyway.
export async function limited(route, ip, max, windowS) {
  const cache = caches.default;
  const bucket = Math.floor(Date.now() / 1000 / windowS);
  const key = new Request(`https://rate.internal/${route}/${encodeURIComponent(ip)}/${bucket}`);
  const hit = await cache.match(key);
  const n = hit ? Number(await hit.text()) + 1 : 1;
  await cache.put(key, new Response(String(n), { headers: { "Cache-Control": `max-age=${windowS}` } }));
  return n > max;
}

// Constant-time string comparison for the export key.
export function safeEqual(a, b) {
  const x = new TextEncoder().encode(String(a)), y = new TextEncoder().encode(String(b));
  let d = x.length ^ y.length;
  for (let i = 0; i < Math.max(x.length, y.length); i++) d |= (x[i] || 0) ^ (y[i] || 0);
  return d === 0;
}

// Full-list token: proof that this visitor left their email for this store (issued by /api/lead, checked by
// /api/check before it serves catalogue pages for the full list). HMAC-SHA256 over the store and an expiry,
// keyed from LEADS_KEY with a separate label, so the token can never be used as the export key or vice versa.
export const tokenStore = (s) => String(s || "").trim().toLowerCase().replace(/^https?:\/\//, "").split(/[/?#]/)[0].replace(/^www\./, "");
const b64url = (buf) => btoa(String.fromCharCode(...new Uint8Array(buf))).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
async function hmac(secret, msg) {
  const key = await crypto.subtle.importKey("raw", new TextEncoder().encode("csg-full-list:" + secret),
    { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  return b64url(await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(msg)));
}
export async function signListToken(secret, store, ttlS = 3600, now = Date.now()) {
  const exp = Math.floor(now / 1000) + ttlS;
  return `${exp}.${await hmac(secret, `${tokenStore(store)}|${exp}`)}`;
}
export async function verifyListToken(secret, store, token, now = Date.now()) {
  if (!secret || secret.length < 24 || typeof token !== "string" || token.length > 200) return false;
  const [exp, sig] = token.split(".");
  if (!/^\d{10}$/.test(exp || "") || Number(exp) < now / 1000) return false;
  return safeEqual(sig || "", await hmac(secret, `${tokenStore(store)}|${exp}`));
}
