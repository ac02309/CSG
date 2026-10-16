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
    origin === "https://clarkesystemsgroup.pages.dev" || origin.startsWith("http://localhost");
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
export async function limited(ip, max, windowS) {
  const cache = caches.default;
  const bucket = Math.floor(Date.now() / 1000 / windowS);
  const key = new Request(`https://rate.internal/${encodeURIComponent(ip)}/${bucket}`);
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
