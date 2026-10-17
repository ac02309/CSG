// Cloudflare Pages Function: POST /api/check, same behaviour as netlify/functions/catalogue-check.mjs.
// Differences forced by the Workers free plan (10 ms CPU per request; waiting on fetch does not count):
// - reads the first 250 products (one page) instead of 500, and says so ("capped"), because parsing a second
//   page of catalogue JSON can exceed the CPU limit. Set CHECK_MAX_PAGES=2 on the Workers Paid plan.
// - results are cached in the edge cache for 15 minutes per store, so a crowd checking one store hits it once.
// Full list: with a token from /api/lead, {store, page, token} returns one page of the catalogue (250 products,
// compacted) and the browser builds the product-level list from every page, so it is ready in seconds.
import { checkStore, checkPage, CheckError, normaliseStore } from "../../netlify/lib/check-core.mjs";
import { json, originAllowed, clientIp, dohResolve, limited, verifyListToken } from "../_lib/common.js";

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
  if (body.token != null) return fullPage(body, host, env, waitUntil, request);
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

async function fullPage(body, host, env, waitUntil, request) {
  if (!host || !(await verifyListToken(env.LEADS_KEY, host, body.token))) {
    return json(403, { error: "This list link has expired. Run the check again to get the full list.", code: "token" });
  }
  // a 10,000-product store is 40 pages; this allows two such lists per visitor every 10 minutes
  if (await limited("full", clientIp(request), 90, 600)) {
    return json(429, { error: "Too many requests from your connection. Try again in a few minutes." });
  }
  const page = Number(body.page);
  const bare = host.replace(/^www\./, "");
  const pageKey = new Request(`https://check.internal/full/${bare}/${page}`);
  const hit = await caches.default.match(pageKey);
  if (hit) return json(200, await hit.json());
  // the store's address and robots.txt are read once per list, not once per page
  const canonKey = new Request(`https://check.internal/canon/${bare}`);
  const canonHit = await caches.default.match(canonKey);
  try {
    const r = await checkPage(host, { page, resolve: dohResolve, canonical: canonHit ? await canonHit.json() : null });
    const { canonical, ...out } = r;
    const put = (key, val) => waitUntil(caches.default.put(key, new Response(JSON.stringify(val),
      { headers: { "Content-Type": "application/json", "Cache-Control": `max-age=${CACHE_S}` } })));
    if (!canonHit) put(canonKey, canonical);
    put(pageKey, out);
    return json(200, out);
  } catch (e) {
    if (e instanceof CheckError) return json(e.code === "invalid" ? 400 : 422, { error: e.message, code: e.code });
    console.error("full list page failed", e);
    return json(500, { error: "Something went wrong on our side. Try again in a minute." });
  }
}

export const onRequest = () => json(405, { error: "Use POST." }, { Allow: "POST" });
