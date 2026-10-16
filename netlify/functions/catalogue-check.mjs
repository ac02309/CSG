// POST /api/check {"store": "yourstore.co.uk"} -> findings from the store's public catalogue.
// Abuse limits: per-visitor rate limit, per-store cache, same-origin only, small request bodies.
import { checkStore, CheckError, normaliseStore } from "../lib/check-core.mjs";

const RATE = { windowMs: 10 * 60 * 1000, max: 8 };
const CACHE_MS = 15 * 60 * 1000;
const visits = new Map(); // ip -> [timestamps]   (per function instance; a soft limit)
const cache = new Map();  // store -> {at, body}

const ALLOWED_ORIGINS = new Set([
  "https://www.clarkesystemsgroup.com", "https://clarkesystemsgroup.com",
]);

function json(status, body, extra = {}) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store",
      "X-Content-Type-Options": "nosniff", ...extra },
  });
}

function limited(ip) {
  const now = Date.now();
  const list = (visits.get(ip) || []).filter((t) => now - t < RATE.windowMs);
  list.push(now);
  visits.set(ip, list);
  if (visits.size > 5000) visits.clear();
  return list.length > RATE.max;
}

export default async (req, context) => {
  if (req.method !== "POST") return json(405, { error: "Use POST." }, { Allow: "POST" });
  const origin = req.headers.get("origin") || "";
  const preview = /^https:\/\/[a-z0-9-]+--clarkesystemsgroup\.netlify\.app$/.test(origin);
  if (origin && !ALLOWED_ORIGINS.has(origin) && !preview && !origin.startsWith("http://localhost")) {
    return json(403, { error: "Not allowed." });
  }
  const ip = context?.ip || req.headers.get("x-nf-client-connection-ip") || "unknown";
  if (limited(ip)) return json(429, { error: "Too many checks from your connection. Try again in a few minutes." });
  let body;
  try {
    const raw = await req.text();
    if (raw.length > 2000) return json(413, { error: "Request too large." });
    body = JSON.parse(raw || "{}");
  } catch {
    return json(400, { error: "Enter a store web address." });
  }
  const key = (normaliseStore(body.store) || String(body.store || "").slice(0, 100)).replace(/^www\./, "");
  const hit = cache.get(key);
  if (hit && Date.now() - hit.at < CACHE_MS) return json(200, { ...hit.body, cached: true });
  try {
    const result = await checkStore(body.store);
    cache.set(key, { at: Date.now(), body: result });
    if (cache.size > 2000) cache.clear();
    return json(200, result);
  } catch (e) {
    if (e instanceof CheckError) return json(e.code === "invalid" ? 400 : 422, { error: e.message, code: e.code });
    console.error("check failed", e);
    return json(500, { error: "Something went wrong on our side. Try again in a minute." });
  }
};

export const config = { path: "/api/check" };
