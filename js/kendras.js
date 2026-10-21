const $ = (id) => document.getElementById(id);
let kendras = [];

function distanceKm(lat1, lng1, lat2, lng2) {
  const R = 6371;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLng = (lng2 - lng1) * Math.PI / 180;
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLng / 2) * Math.sin(dLng / 2);
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function renderKendras(list) {
  $("kendraList").innerHTML = list.map((k) => {
    const dest = encodeURIComponent(k.lat + "," + k.lng);
    return `<li>
      <div class="kendra-info">
        <strong>${k.name}</strong>
        <span>${k.address}</span>
        ${k.dist !== undefined ? `<span class="kendra-dist"><i class="bi bi-geo-alt-fill"></i> ${k.dist.toFixed(1)} ${t("kmAway")}</span>` : ""}
        ${k.phone ? `<span><a class="kendra-phone" href="tel:${k.phone}"><i class="bi bi-telephone-fill"></i> ${k.phone}</a></span>` : ""}
      </div>
      <div class="kendra-actions">
        <a class="btn secondary map-btn" target="_blank" rel="noopener" href="https://www.google.com/maps/dir/?api=1&amp;destination=${dest}"><i class="bi bi-cursor-fill"></i> <span>${t("directions")}</span></a>
      </div>
    </li>`;
  }).join("");
}

function locate() {
  const status = $("locStatus");
  if (!("geolocation" in navigator)) {
    status.textContent = t("locationDenied");
    return;
  }
  status.textContent = t("locating");
  navigator.geolocation.getCurrentPosition(
    (pos) => {
      const { latitude, longitude } = pos.coords;
      const sorted = kendras
        .map((k) => ({ ...k, dist: distanceKm(latitude, longitude, k.lat, k.lng) }))
        .sort((a, b) => a.dist - b.dist);
      renderKendras(sorted);
      status.textContent = t("nearestFirst");
    },
    () => { status.textContent = t("locationDenied"); },
    { timeout: 10000 }
  );
}

document.addEventListener("DOMContentLoaded", () => {
  fetch("data/kendras.json")
    .then((r) => r.json())
    .then((data) => { kendras = data; renderKendras(kendras); })
    .catch(() => { kendras = []; });
  $("locateBtn").addEventListener("click", locate);
});

document.addEventListener("medora:lang", () => {
  if (kendras.length) renderKendras(kendras);
});

let indiaKendras = null;

function renderIndia(list, total) {
  $("indiaList").innerHTML = list.map((k) => {
    const query = encodeURIComponent(`Jan Aushadhi Kendra ${k[5]} ${k[4]} ${k[3]} ${k[6]}`);
    return `<li>
      <div class="kendra-info">
        <strong>Jan Aushadhi Kendra - ${k[4]}</strong>
        <span>${k[6]}, ${k[4]}, ${k[3]} - ${k[5]}</span>
        <span>${t("contactPerson")}: ${k[1]} (${k[0]})</span>
        ${k[2] ? `<span><a class="kendra-phone" href="tel:+91${k[2].slice(-10)}"><i class="bi bi-telephone-fill"></i> ${k[2]}</a></span>` : ""}
      </div>
      <div class="kendra-actions">
        <a class="btn secondary map-btn" target="_blank" rel="noopener" href="https://www.google.com/maps/dir/?api=1&amp;destination=${query}"><i class="bi bi-cursor-fill"></i> <span>${t("directions")}</span></a>
      </div>
    </li>`;
  }).join("");
  $("indiaStatus").textContent = total > list.length
    ? `${t("showingFirst")} ${list.length} / ${total} ${t("resultsFound")}`
    : `${total} ${t("resultsFound")}`;
}

function searchIndia() {
  if (!indiaKendras) return;
  const q = $("indiaQuery").value.trim().toLowerCase();
  const st = $("indiaState").value;
  const matches = indiaKendras.filter((k) => {
    if (st && k[3] !== st) return false;
    if (!q) return true;
    return (k[1] + " " + k[3] + " " + k[4] + " " + k[5] + " " + k[6]).toLowerCase().includes(q);
  });
  renderIndia(matches.slice(0, 30), matches.length);
}

document.addEventListener("DOMContentLoaded", () => {
  const btn = $("loadIndiaBtn");
  if (!btn) return;
  btn.addEventListener("click", () => {
    if (indiaKendras) return;
    btn.disabled = true;
    fetch("data/kendras-india.json")
      .then((r) => r.json())
      .then((data) => {
        indiaKendras = data;
        const states = [...new Set(data.map((k) => k[3]))].sort();
        $("indiaState").innerHTML = `<option value="">${t("allStates")}</option>` +
          states.map((s) => `<option value="${s}">${s}</option>`).join("");
        btn.classList.add("hidden");
        $("indiaTools").classList.remove("hidden");
        searchIndia();
      })
      .catch(() => { btn.disabled = false; });
  });
  $("indiaQuery").addEventListener("input", searchIndia);
  $("indiaState").addEventListener("change", searchIndia);
});
