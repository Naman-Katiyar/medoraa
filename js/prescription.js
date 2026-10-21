const $ = (id) => document.getElementById(id);

function renderPrescription() {
  const prescription = Medora.getPrescription();
  const list = $("rxList");
  $("rxEmpty").classList.toggle("hidden", prescription.length > 0);
  $("rxTotals").classList.toggle("hidden", prescription.length === 0);
  list.innerHTML = prescription.map((p, i) =>
    `<li class="rx-item">
       <div><div class="rx-name">${p.generic} ${p.strength}</div><div class="rx-sub">${p.brand} &bull; ${p.pack}</div></div>
       <span class="rx-save">${t("saveWord")} ${Medora.inr(p.brandedPrice - p.genericPrice)}</span>
       <button class="rx-remove" data-i="${i}" aria-label="Remove">&times;</button>
     </li>`).join("");
  list.querySelectorAll(".rx-remove").forEach((b) =>
    b.addEventListener("click", () => {
      const current = Medora.getPrescription();
      current.splice(Number(b.dataset.i), 1);
      Medora.setPrescription(current);
      renderPrescription();
    })
  );
  const branded = prescription.reduce((s, p) => s + p.brandedPrice, 0);
  const generic = prescription.reduce((s, p) => s + p.genericPrice, 0);
  $("totalBranded").textContent = Medora.inr(branded);
  $("totalGeneric").textContent = Medora.inr(generic);
  $("totalSaving").textContent = Medora.inr(branded - generic);
  const packs = Math.max(1, Number($("packsPerMonth").value) || 1);
  const monthly = (branded - generic) * packs;
  $("chronicOutput").textContent = prescription.length
    ? t("chronicLine", { m: Medora.inr(monthly), y: Medora.inr(monthly * 12), t: Medora.inr(monthly * 120) })
    : "";
  $("printList").innerHTML = prescription.map((p) =>
    `<li>${p.generic} ${p.strength} (${p.pack}) - Jan Aushadhi: ${Medora.inr(p.genericPrice)} (Branded: ${Medora.inr(p.brandedPrice)})</li>`).join("");
  $("printTotal").textContent = prescription.length
    ? t("printTotalLine", { b: Medora.inr(branded), g: Medora.inr(generic), s: Medora.inr(branded - generic) })
    : "";
  const badge = $("rxCount");
  if (badge) {
    badge.textContent = prescription.length;
    badge.style.display = prescription.length ? "inline-block" : "none";
  }
}

document.addEventListener("medora:lang", () => {
  if (document.getElementById("rxList")) renderPrescription();
});

document.addEventListener("DOMContentLoaded", () => {
  renderPrescription();
  $("packsPerMonth").addEventListener("input", renderPrescription);
  $("clearRxBtn").addEventListener("click", () => {
    Medora.setPrescription([]);
    renderPrescription();
  });
  $("printBtn").addEventListener("click", () => window.print());
  $("whatsappBtn").addEventListener("click", () => {
    const prescription = Medora.getPrescription();
    if (!prescription.length) return;
    const branded = prescription.reduce((s, p) => s + p.brandedPrice, 0);
    const generic = prescription.reduce((s, p) => s + p.genericPrice, 0);
    const lines = prescription.map((p) => `${p.generic} ${p.strength} (${p.pack}) - Jan Aushadhi ${Medora.inr(p.genericPrice)}`);
    const text = `Medora - Generic Medicine List\n${lines.join("\n")}\nTotal: Branded ${Medora.inr(branded)} -> Generic ${Medora.inr(generic)}. Saving: ${Medora.inr(branded - generic)}.\nPlease confirm with doctor/pharmacist.`;
    window.open("https://wa.me/?text=" + encodeURIComponent(text), "_blank");
  });
});
