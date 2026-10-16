// Cloudflare Pages Function: POST /api/check, same behaviour as netlify/functions/catalogue-check.mjs.
// Differences forced by the Workers free plan (10 ms CPU per request; waiting on fetch does not count):
// - reads the first 250 products (one page) instead of 500, and says so ("capped"), because parsing a second
//   page of catalogue JSON can exceed the CPU limit. Set CHECK_MAX_PAGES=2 on the Workers Paid plan.
// - results are cached in the edge cache for 15 minutes per store, so a crowd checking one store hits it once.
import { checkStore, CheckError, normaliseStore } from "../../netlify/lib/check-core.mjs";
import { json, originAllowed, clientIp, dohResolve, limited } from "../_lib/common.js";

const CACHE_S = 15 * 60;

export async function onRequestPost({ request, env, waitUntil }) {
  if (!originAllowed(request)) return json(403, { error: "Not allowed." });
  if (await limited("check", clientIp(request), 8, 600)) {
    return json(429, { error: "Too many checks from your connection. Try again in a few minutes." });
  }
  let body;
  try {
    const raw = await request.text();
    if (raw.length > 2000) return json(413, { error: "Request too large." });
    body = JSON.parse(raw || "{}");
  } catch {
    return json(400, { error: "Enter a store web address." });
  }
  const host = normaliseStore(body.store);
  const cacheKey = host ? new Request(`https://check.internal/${host.replace(/^www\./, "")}`) : null;
  if (cacheKey) {
    const hit = await caches.default.match(cacheKey);
    if (hit) return json(200, { ...(await hit.json()), cached: true });
  }
  try {
    const maxPages = Math.min(2, Math.max(1, Number(env.CHECK_MAX_PAGES) || 1));
    const result = await checkStore(body.store, { resolve: dohResolve, maxPages });
    if (cacheKey) {
      waitUntil(caches.default.put(cacheKey, new Response(JSON.stringify(result),
        { headers: { "Content-Type": "application/json", "Cache-Control": `max-age=${CACHE_S}` } })));
    }
    return json(200, result);
  } catch (e) {
    if (e instanceof CheckError) return json(e.code === "invalid" ? 400 : 422, { error: e.message, code: e.code });
    console.error("check failed", e);
    return json(500, { error: "Something went wrong on our side. Try again in a minute." });
  }
}

export const onRequest = () => json(405, { error: "Use POST." }, { Allow: "POST" });
