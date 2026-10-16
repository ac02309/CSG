// Cloudflare Pages Function: POST /api/lead, stores the site's two forms in D1:
//   "catalogue-check" (Get the full product-level list) and "brief" (the contact page request).
// Replaces Netlify Forms if the site moves to Cloudflare Pages. Bind a D1 database as LEADS (docs/HOSTING.md).
// Stores only the fields each form asks for. No IP address is stored.
import { json, originAllowed, clientIp, limited } from "../_lib/common.js";

const SCHEMA = `CREATE TABLE IF NOT EXISTS leads (id INTEGER PRIMARY KEY, at TEXT NOT NULL, form TEXT NOT NULL DEFAULT 'catalogue-check',
  store TEXT NOT NULL DEFAULT '', email TEXT NOT NULL, name TEXT, updates INTEGER NOT NULL DEFAULT 0, summary TEXT,
  fields TEXT, exported INTEGER NOT NULL DEFAULT 0)`;
const FORMS = {
  "catalogue-check": ["store", "summary", "name", "email", "updates"],
  brief: ["name", "email", "company", "role", "team_size", "process", "tools", "hours_per_week", "outcome", "referrer",
          "request", "topic", "subject", "message"],
};
const EMAIL = /^[^@\s<>"]{1,64}@[^@\s<>"]{1,190}\.[a-z]{2,24}$/i;
// control characters removed; line breaks kept (the contact brief is multi-line)
const clip = (v, n) => String(v ?? "").replace(/\r\n?/g, "\n").replace(/[\u0000-\u0009\u000b-\u001f\u007f]/g, " ").trim().slice(0, n);

export async function onRequestPost({ request, env }) {
  if (!originAllowed(request)) return json(403, { error: "Not allowed." });
  if (!env.LEADS) return json(503, { error: "Form storage is not set up." }); // the page then shows the email fallback
  if (await limited(clientIp(request), 5, 600)) return json(429, { error: "Too many requests. Try again later." });
  const raw = await request.text();
  if (raw.length > 4000) return json(413, { error: "Request too large." });
  const type = request.headers.get("content-type") || "";
  let f;
  try {
    f = type.includes("application/json") ? JSON.parse(raw) : Object.fromEntries(new URLSearchParams(raw));
  } catch {
    return json(400, { error: "Could not read the form." });
  }
  if (f.website) return json(200, { ok: true }); // honeypot: pretend success, store nothing
  const form = FORMS[f["form-name"]] ? f["form-name"] : "catalogue-check";
  const email = clip(f.email, 254), store = clip(f.store, 253).toLowerCase();
  if (!EMAIL.test(email)) return json(400, { error: "Enter your work email." });
  if (form === "catalogue-check" && !store) return json(400, { error: "Enter your store address." });
  const fields = Object.fromEntries(FORMS[form].filter((k) => f[k] != null && f[k] !== "").map((k) => [k, clip(f[k], 3000)]));
  await env.LEADS.prepare(SCHEMA).run();
  await env.LEADS.prepare("INSERT INTO leads (at, form, store, email, name, updates, summary, fields) VALUES (?, ?, ?, ?, ?, ?, ?, ?)")
    .bind(new Date().toISOString(), form, store, email, clip(f.name, 120),
      ["yes", "on", "true", "1"].includes(String(f.updates || "").toLowerCase()) ? 1 : 0, clip(f.summary, 900),
      JSON.stringify(fields))
    .run();
  return json(200, { ok: true });
}

export const onRequest = () => json(405, { error: "Use POST." }, { Allow: "POST" });
