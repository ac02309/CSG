// Cloudflare Pages Function: GET /api/leads (header "Authorization: Bearer <LEADS_KEY>") -> CSV of new leads,
// in the same columns as the Netlify Forms export, ready for: python -m outreach inbound leads.csv
// ?form=brief exports contact-page requests instead. ?all=1 includes rows already exported.
// ?mark=1 marks the returned rows as exported.
import { safeEqual } from "../_lib/common.js";

const cell = (v) => {
  let s = String(v ?? "");
  if (/^[=+\-@\t\r]/.test(s)) s = "'" + s; // spreadsheet formula-injection guard
  return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
};

export async function onRequestGet({ request, env }) {
  const auth = request.headers.get("authorization") || "";
  if (!env.LEADS_KEY || env.LEADS_KEY.length < 24 || !safeEqual(auth, `Bearer ${env.LEADS_KEY}`)) {
    return new Response("Not found", { status: 404 }); // indistinguishable from a missing page
  }
  if (!env.LEADS) return new Response("Form storage is not set up.", { status: 503 });
  const url = new URL(request.url);
  const form = url.searchParams.get("form") === "brief" ? "brief" : "catalogue-check";
  const fresh = url.searchParams.get("all") ? "" : " AND exported = 0";
  let rows = [];
  try {
    rows = (await env.LEADS.prepare(`SELECT * FROM leads WHERE form = ?${fresh} ORDER BY id LIMIT 5000`).bind(form).all()).results || [];
  } catch {
    rows = []; // table not created yet: no leads
  }
  if (url.searchParams.get("mark") && rows.length) {
    await env.LEADS.prepare("UPDATE leads SET exported = 1 WHERE form = ? AND id <= ? AND exported = 0")
      .bind(form, rows[rows.length - 1].id).run();
  }
  let head, body;
  if (form === "brief") {
    const keys = ["name", "email", "company", "role", "team_size", "process", "tools", "hours_per_week", "outcome", "referrer", "request", "topic", "message"];
    head = "created_at," + keys.join(",") + "\n";
    body = rows.map((r) => { const f = JSON.parse(r.fields || "{}"); return [r.at, ...keys.map((k) => f[k])].map(cell).join(","); }).join("\n");
  } else {
    head = "created_at,store,email,name,updates,summary\n";
    body = rows.map((r) => [r.at, r.store, r.email, r.name, r.updates ? "yes" : "", r.summary].map(cell).join(",")).join("\n");
  }
  return new Response("﻿" + head + body + (body ? "\n" : ""), {
    headers: { "Content-Type": "text/csv; charset=utf-8", "Cache-Control": "no-store",
      "Content-Disposition": `attachment; filename="${form}-${new Date().toISOString().slice(0, 10)}.csv"` },
  });
}
