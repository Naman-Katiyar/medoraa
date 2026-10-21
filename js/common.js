const Medora = (() => {
  const inr = (n) => "₹" + Number(n).toLocaleString("en-IN");

  function normalize(s) {
    return (s || "").toLowerCase().replace(/[^a-z0-9 ]/g, " ").replace(/\s+/g, " ").trim();
  }

  function levenshtein(a, b) {
    const m = a.length, n = b.length;
    const dp = Array.from({ length: m + 1 }, (_, i) => [i, ...Array(n).fill(0)]);
    for (let j = 1; j <= n; j++) dp[0][j] = j;
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        dp[i][j] = Math.min(
          dp[i - 1][j] + 1,
          dp[i][j - 1] + 1,
          dp[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1)
        );
      }
    }
    return dp[m][n];
  }

  function similarity(a, b) {
    if (!a || !b) return 0;
    if (a === b) return 1;
    const shorter = Math.min(a.length, b.length);
    const longer = Math.max(a.length, b.length);
    if ((b.includes(a) || a.includes(b)) && shorter >= 3 && shorter / longer >= 0.35) return 0.92;
    return Math.max(0, 1 - levenshtein(a, b) / longer);
  }

  function scoreDrug(query, drug) {
    const q = normalize(query);
    const brand = normalize(drug.brand);
    const generic = normalize(drug.generic);
    const wordOk = (w) => w.length >= 3 && !/^\d+$/.test(w);
    const targetWords = (brand + " " + generic).split(" ").filter(wordOk);
    const queryWords = q.split(" ").filter(wordOk);
    let best = Math.max(similarity(q, brand), similarity(q, generic));
    targetWords.forEach((w) => {
      best = Math.max(best, similarity(q, w));
      queryWords.forEach((qw) => { best = Math.max(best, similarity(qw, w)); });
    });
    const strengthNum = (drug.strength.match(/\d+/) || [""])[0];
    if (strengthNum && q.includes(strengthNum)) best = Math.min(1, best + 0.08);
    return best;
  }

  function searchDrugs(drugs, query) {
    if (!normalize(query) || /^\d+$/.test(normalize(query))) return [];
    return drugs
      .map((d) => ({ drug: d, score: scoreDrug(query, d) }))
      .filter((x) => x.score >= 0.45)
      .sort((a, b) => b.score - a.score)
      .slice(0, 5);
  }

  function loadDrugs() {
    return fetch("data/drugs.json").then((r) => {
      if (!r.ok) throw new Error("drugs.json not found");
      return r.json();
    });
  }

  function getPrescription() {
    try { return JSON.parse(localStorage.getItem("medora_rx") || "[]"); }
    catch (e) { return []; }
  }

  function setPrescription(list) {
    localStorage.setItem("medora_rx", JSON.stringify(list));
  }

  function addToPrescription(drug) {
    const list = getPrescription();
    if (!list.some((p) => p.brand === drug.brand)) {
      list.push(drug);
      setPrescription(list);
    }
    return list;
  }

  return { inr, normalize, similarity, scoreDrug, searchDrugs, loadDrugs, getPrescription, setPrescription, addToPrescription };
})();

if (typeof module !== "undefined" && module.exports) {
  module.exports = Medora;
}

if (typeof document !== "undefined") {
  document.addEventListener("DOMContentLoaded", () => {
    const page = window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".nav-link").forEach((link) => {
      if (link.getAttribute("href") === page) link.classList.add("active");
    });
    const badge = document.getElementById("rxCount");
    if (badge) {
      const count = Medora.getPrescription().length;
      badge.textContent = count;
      badge.style.display = count ? "inline-block" : "none";
    }
  });

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  }
}
