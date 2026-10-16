/* Instant catalogue check: calls /api/check and renders the findings, then offers the full list. */
(function () {
  "use strict";
  var form = document.getElementById("checkForm");
  if (!form) return;
  var input = document.getElementById("checkStore");
  var btn = document.getElementById("checkBtn");
  var status = document.getElementById("checkStatus");
  var out = document.getElementById("checkResult");
  var lead = document.getElementById("leadForm");
  var leadNote = document.getElementById("leadNote");
  var last = null;

  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }
  function fmt(n) { return Number(n).toLocaleString("en-GB"); }
  function pct(x) { return x < 0.01 ? "under 1%" : Math.round(x * 100) + "%"; }

  function render(r) {
    out.textContent = "";
    var head = el("div", "chk-head");
    head.appendChild(el("p", "chk-kicker", r.capped ? "First " + fmt(r.products) + " products checked" : fmt(r.products) + " products checked"));
    var h = el("h2", "h3 chk-title");
    var real = r.findings.filter(function (f) { return !f.setup_choice; });
    h.textContent = real.length ? r.store + ": " + real.length + (real.length === 1 ? " issue type" : " issue types") + " found"
                                : r.store + ": no common catalogue errors found";
    head.appendChild(h);
    out.appendChild(head);
    if (!r.findings.length) {
      out.appendChild(el("p", "chk-why", "The public catalogue looks clean on the checks we run here. The full check goes deeper: barcodes (GTINs), images, descriptions and the whole catalogue."));
    }
    var list = el("ol", "chk-list");
    r.findings.forEach(function (f) {
      var li = el("li", "chk-item" + (f.setup_choice ? " chk-setup" : ""));
      var n = el("span", "chk-n", fmt(f.count));
      var body = el("div", "chk-body");
      body.appendChild(el("p", "chk-label", f.label + (f.share != null ? " (" + pct(f.share) + ")" : "")));
      body.appendChild(el("p", "chk-why", f.setup_choice
        ? "Empty on almost every product, which usually means a deliberate setup rather than an error."
        : f.why));
      if (f.examples && f.examples.length) {
        body.appendChild(el("p", "chk-ex", "For example: " + f.examples.join("; ")));
      }
      li.appendChild(n); li.appendChild(body); list.appendChild(li);
    });
    out.appendChild(list);
    if (r.capped) out.appendChild(el("p", "chk-note", "Large catalogue: this instant check reads the first " + fmt(r.products) + " products. The full check covers every product."));
    out.hidden = false;
    lead.hidden = false;
    document.getElementById("leadStore").value = r.store;
    document.getElementById("leadSummary").value = r.findings.map(function (f) { return f.count + " " + f.label; }).join("; ").slice(0, 900);
    out.focus();
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var store = input.value.trim();
    if (!store) { status.textContent = "Enter your store's web address."; input.focus(); return; }
    btn.disabled = true;
    btn.textContent = "Checking…";
    status.textContent = "Reading your public catalogue. This takes a few seconds.";
    out.hidden = true;
    fetch("/api/check", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ store: store }) })
      .then(function (res) { return res.json().then(function (j) { return { ok: res.ok, j: j }; }); })
      .then(function (x) {
        if (!x.ok) { status.textContent = x.j.error || "That check did not work. Try again."; return; }
        status.textContent = "";
        last = x.j;
        render(x.j);
        if (window.csgTrack) window.csgTrack("Catalogue check", { issues: String(x.j.findings.length) });
      })
      .catch(function () { status.textContent = "The check could not run. Try again in a minute."; })
      .then(function () { btn.disabled = false; btn.textContent = "Check my store"; });
  });

  lead.addEventListener("submit", function (e) {
    e.preventDefault();
    var email = document.getElementById("leadEmail");
    if (!email.value || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.value)) {
      leadNote.textContent = "Enter the email address the list should go to."; email.focus(); return;
    }
    if (lead.website && lead.website.value) return; // honeypot
    var data = new URLSearchParams(new FormData(lead)).toString();
    fetch("/", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: data })
      .then(function (res) {
        if (!res.ok) throw new Error();
        lead.querySelector("fieldset").disabled = true;
        leadNote.textContent = "Done. The product-level list for " + (last ? last.store : "your store") + " will be with you within two business days.";
        if (window.csgTrack) window.csgTrack("Catalogue check list requested", {});
      })
      .catch(function () { leadNote.textContent = "That did not send. Email enquiries@clarkesystemsgroup.com with your store address instead."; });
  });
})();
