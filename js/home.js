let drugs = [];
const $ = (id) => document.getElementById(id);

Medora.loadDrugs()
  .then((data) => { drugs = data; })
  .catch(() => { drugs = []; });

const input = $("searchInput");

input.addEventListener("input", () => {
  const results = Medora.searchDrugs(drugs, input.value);
  const box = $("suggestions");
  $("notFound").classList.toggle("hidden", !(input.value.trim() && results.length === 0));
  if (!results.length) { box.classList.add("hidden"); box.innerHTML = ""; return; }
  box.innerHTML = results.map((r) =>
    `<button class="suggestion" data-brand="${r.drug.brand}">
       <span>${r.drug.brand} <small>(${r.drug.generic} ${r.drug.strength})</small></span>
       <span class="conf">${Math.round(r.score * 100)}% ${t("matchWord")}</span>
     </button>`).join("");
  box.classList.remove("hidden");
  box.querySelectorAll(".suggestion").forEach((btn) => {
    btn.addEventListener("click", () => {
      const drug = drugs.find((d) => d.brand === btn.dataset.brand);
      const hit = results.find((r) => r.drug === drug);
      showResult(drug, hit ? hit.score : 1);
      box.classList.add("hidden");
      input.value = drug.brand;
    });
  });
});

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const results = Medora.searchDrugs(drugs, input.value);
    if (results.length) showResult(results[0].drug, results[0].score);
  }
});

function showResult(drug, score) {
  const saving = drug.brandedPrice - drug.genericPrice;
  const pct = Math.round((saving / drug.brandedPrice) * 100);
  $("notFound").classList.add("hidden");
  $("resultSection").innerHTML = `
    <div class="result-card">
      <div class="saving-headline">
        <div class="prices"><span class="old">${Medora.inr(drug.brandedPrice)}</span> &rarr; ${Medora.inr(drug.genericPrice)}</div>
        <div class="save-line">${t("youSaveLine", { s: Medora.inr(saving) })} <span class="pill">${pct}%</span></div>
      </div>
      <div class="result-body">
        <h3>${drug.brand} &rarr; <span class="generic-name">${drug.generic}</span></h3>
        <div class="meta-grid">
          <div><span>${t("genericLabel")}</span><strong>${drug.generic}</strong></div>
          <div><span>${t("strengthLabel")}</span><strong>${drug.strength}</strong></div>
          <div><span>${t("packLabel")}</span><strong>${drug.pack}</strong></div>
          <div><span>${t("jaPrice")}</span><strong>${Medora.inr(drug.genericPrice)}</strong></div>
        </div>
        <p class="trust">${t("trustLine", { p: Math.round(score * 100) })}</p>
        <div class="nearest-box">
          <h4><i class="bi bi-geo-alt-fill"></i> ${t("nearestKendra")}</h4>
          <div id="nearestBody">
            <button class="btn secondary" id="nearestBtn"><i class="bi bi-crosshair"></i> ${t("findNearest")}</button>
            <p id="nearestStatus" class="photo-status"></p>
          </div>
        </div>
        <div class="result-actions">
          <button class="btn full" id="addRxBtn"><i class="bi bi-plus-circle-fill"></i> ${t("addRx")}</button>
          <button class="btn shield-btn" id="shieldBtn"><i class="bi bi-shield-fill-check"></i> ${t("shieldBtn")}</button>
          <button class="btn secondary" id="listenBtn"><i class="bi bi-volume-up-fill"></i> ${t("listenBtn")}</button>
        </div>
      </div>
    </div>`;
  $("resultSection").classList.remove("hidden");
  $("addRxBtn").addEventListener("click", () => {
    Medora.addToPrescription(drug);
    const badge = $("rxCount");
    const count = Medora.getPrescription().length;
    if (badge) { badge.textContent = count; badge.style.display = "inline-block"; }
    const toast = $("toast");
    toast.classList.remove("hidden");
    setTimeout(() => toast.classList.add("hidden"), 2200);
  });
  $("shieldBtn").addEventListener("click", () => {
    $("shieldGeneric").textContent = drug.generic;
    $("shieldStrength").textContent = drug.strength + " - " + drug.pack;
    $("shieldPrice").textContent = t("jaPrice") + ": " + Medora.inr(drug.genericPrice);
    $("shieldOverlay").classList.remove("hidden");
  });
  $("listenBtn").addEventListener("click", () => speakDrug(drug));
  $("nearestBtn").addEventListener("click", findNearestKendra);
  if (navigator.permissions && navigator.permissions.query) {
    navigator.permissions.query({ name: "geolocation" })
      .then((r) => { if (r.state === "granted") findNearestKendra(); })
      .catch(() => {});
  }
  $("resultSection").scrollIntoView({ behavior: "smooth", block: "start" });
}

$("shieldClose").addEventListener("click", () => $("shieldOverlay").classList.add("hidden"));

function speakDrug(drug) {
  const save = drug.brandedPrice - drug.genericPrice;
  const u = new SpeechSynthesisUtterance(
    t("speakLine", { g: drug.generic, st: drug.strength, b: drug.brandedPrice, p: drug.genericPrice, s: save })
  );
  u.lang = MEDORA_LANGS[medoraLang()].locale;
  u.rate = 0.92;
  speechSynthesis.cancel();
  speechSynthesis.speak(u);
}

function detectLangFromText(text) {
  if (/[\u0900-\u097F]/.test(text)) return "hi";
  if (/[\u0C00-\u0C7F]/.test(text)) return "te";
  if (/[\u0B80-\u0BFF]/.test(text)) return "ta";
  if (/[\u0980-\u09FF]/.test(text)) return "bn";
  if (/[\u0C80-\u0CFF]/.test(text)) return "kn";
  if (/[\u0D00-\u0D7F]/.test(text)) return "ml";
  if (/[\u0A80-\u0AFF]/.test(text)) return "gu";
  if (/[\u0A00-\u0A7F]/.test(text)) return "pa";
  return null;
}

const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
if (SpeechRec) {
  const rec = new SpeechRec();
  rec.lang = "en-IN";
  rec.interimResults = false;
  rec.addEventListener("result", (e) => {
    const spoken = e.results[0][0].transcript;
    const detected = detectLangFromText(spoken);
    if (detected && detected !== medoraLang()) {
      localStorage.setItem("medora_lang", detected);
      applyLanguage();
    }
    input.value = spoken;
    input.dispatchEvent(new Event("input"));
    const results = Medora.searchDrugs(drugs, spoken);
    if (results.length) {
      showResult(results[0].drug, results[0].score);
      setTimeout(() => speakDrug(results[0].drug), 400);
    }
  });
  rec.addEventListener("end", () => $("micBtn").classList.remove("listening"));
  $("micBtn").addEventListener("click", () => {
    rec.lang = MEDORA_LANGS[medoraLang()].locale;
    $("micBtn").classList.add("listening");
    try { rec.start(); } catch (e) { $("micBtn").classList.remove("listening"); }
  });
} else {
  $("micBtn").style.display = "none";
}

/* Gemma is used only to transcribe the printed brand name from a strip photo.
   All medicine facts and prices always come from data/drugs.json. */
let gemmaConfigCache = null;
async function loadGemmaConfig() {
  if (gemmaConfigCache) return gemmaConfigCache;
  const cfg = {
    key: localStorage.getItem("medora_gemma_key") || "",
    model: localStorage.getItem("medora_gemma_model") || ""
  };
  if (!cfg.key || !cfg.model) {
    try {
      const resp = await fetch(".env", { cache: "no-store" });
      if (resp.ok) {
        const text = await resp.text();
        text.split(/\r?\n/).forEach((line) => {
          const i = line.indexOf("=");
          if (i > 0) {
            const name = line.slice(0, i).trim();
            const value = line.slice(i + 1).trim();
            if (name === "GEMMA_API_KEY" && value) cfg.key = value;
            if (name === "GEMMA_MODEL_ID" && value) cfg.model = value;
          }
        });
      }
    } catch (e) {}
  }
  gemmaConfigCache = cfg;
  return cfg;
}

$("photoInput").addEventListener("change", async (e) => {
  const file = e.target.files[0];
  if (!file) return;
  $("photoPreview").src = URL.createObjectURL(file);
  $("photoPreview").classList.remove("hidden");
  const status = $("photoStatus");
  status.classList.remove("hidden");
  const cfg = await loadGemmaConfig();
  const key = cfg.key;
  const model = cfg.model;
  if (!key || !model) {
    status.textContent = t("photoNoKey");
    return;
  }
  status.textContent = t("photoReading");
  try {
    const base64 = await new Promise((res, rej) => {
      const reader = new FileReader();
      reader.onload = () => res(reader.result.split(",")[1]);
      reader.onerror = rej;
      reader.readAsDataURL(file);
    });
    const resp = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${key}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [
          { text: "Read ALL printed medicine brand names and strengths in this image. Reply with one medicine per line, name and strength only, nothing else. Do not read or guess doses or instructions. If the text is handwritten or unreadable, reply with exactly: UNREADABLE" },
          { inline_data: { mime_type: file.type || "image/jpeg", data: base64 } }
        ] }]
      })
    });
    const data = await resp.json();
    const parts = data.candidates && data.candidates[0] && data.candidates[0].content && data.candidates[0].content.parts;
    const raw = parts ? parts.map((p) => p.text || "").join(" ").trim() : "";
    if (!raw) {
      status.textContent = t("photoFail");
    } else if (raw.toUpperCase().includes("UNREADABLE")) {
      status.textContent = t("photoUnreadable");
    } else {
      const lines = raw.split(/\n+/).map((s) => s.replace(/^[-*\d.)\s]+/, "").trim()).filter(Boolean).slice(0, 8);
      if (lines.length <= 1) {
        const text = lines[0] || raw;
        input.value = text;
        input.dispatchEvent(new Event("input"));
        const results = Medora.searchDrugs(drugs, text);
        if (results.length) showResult(results[0].drug, results[0].score);
        status.textContent = t("photoOk", { x: text });
      } else {
        showPhotoRx(lines);
        status.textContent = t("photoOk", { x: lines.join(", ") });
      }
    }
  } catch (err) {
    status.textContent = t("photoFail");
  }
});

let kendraCache = null;

function loadKendraCache() {
  if (kendraCache) return Promise.resolve(kendraCache);
  return fetch("data/kendras.json")
    .then((r) => r.json())
    .then((d) => { kendraCache = d; return d; });
}

function kmBetween(lat1, lng1, lat2, lng2) {
  const R = 6371;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLng = (lng2 - lng1) * Math.PI / 180;
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLng / 2) * Math.sin(dLng / 2);
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function findNearestKendra() {
  const body = $("nearestBody");
  if (!body) return;
  const status = $("nearestStatus");
  const setStatus = (txt) => { if (status) status.textContent = txt; };
  if (!("geolocation" in navigator)) { setStatus(t("locationDenied")); return; }
  setStatus(t("locating"));
  navigator.geolocation.getCurrentPosition(
    (pos) => {
      loadKendraCache().then((list) => {
        if (!list.length) { setStatus(t("locationDenied")); return; }
        let best = null, bestDist = Infinity;
        list.forEach((k) => {
          const d = kmBetween(pos.coords.latitude, pos.coords.longitude, k.lat, k.lng);
          if (d < bestDist) { bestDist = d; best = k; }
        });
        const dest = encodeURIComponent(best.lat + "," + best.lng);
        body.innerHTML = `<div class="nearest-result">
          <strong>${best.name}</strong>
          <span>${best.address}</span>
          <span class="kendra-dist"><i class="bi bi-geo-alt-fill"></i> ${bestDist.toFixed(1)} ${t("kmAway")}</span>
          ${best.phone ? `<span><a class="kendra-phone" href="tel:${best.phone}"><i class="bi bi-telephone-fill"></i> ${best.phone}</a></span>` : ""}
          <a class="btn secondary map-btn" target="_blank" rel="noopener" href="https://www.google.com/maps/dir/?api=1&amp;destination=${dest}"><i class="bi bi-cursor-fill"></i> ${t("directions")}</a>
        </div>`;
      }).catch(() => setStatus(t("locationDenied")));
    },
    () => setStatus(t("locationDenied")),
    { timeout: 10000 }
  );
}

let photoFound = [];

function showPhotoRx(lines) {
  const found = [];
  const missing = [];
  lines.forEach((line) => {
    const r = Medora.searchDrugs(drugs, line);
    if (r.length && r[0].score >= 0.75) found.push(r[0].drug);
    else missing.push(line);
  });
  photoFound = found;
  const box = $("photoRx");
  box.innerHTML = `
    <h4><i class="bi bi-card-checklist"></i> ${t("photoRxTitle")} (${found.length})</h4>
    <p class="muted small">${t("photoVerify")}</p>
    <ul class="photo-rx-list">
      ${found.map((d) => `<li><strong>${d.brand}</strong> &rarr; ${d.generic} ${d.strength} <span class="pill">${Medora.inr(d.brandedPrice)} &rarr; ${Medora.inr(d.genericPrice)}</span></li>`).join("")}
    </ul>
    ${missing.length ? `<p class="muted small">${t("photoNotFound")} ${missing.join(", ")}</p>` : ""}
    ${found.length ? `<button class="btn full" id="photoAddAllBtn"><i class="bi bi-plus-circle-fill"></i> ${t("photoAddAll")}</button>` : ""}`;
  box.classList.remove("hidden");
  if (found.length) {
    $("photoAddAllBtn").addEventListener("click", () => {
      photoFound.forEach((d) => Medora.addToPrescription(d));
      const badge = $("rxCount");
      if (badge) badge.textContent = Medora.getPrescription().length;
      $("photoAddAllBtn").disabled = true;
    });
  }
}
