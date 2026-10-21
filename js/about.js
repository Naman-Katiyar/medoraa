document.addEventListener("DOMContentLoaded", () => {
  const keyInput = document.getElementById("gemmaKey");
  const modelInput = document.getElementById("gemmaModel");
  keyInput.value = localStorage.getItem("medora_gemma_key") || "";
  modelInput.value = localStorage.getItem("medora_gemma_model") || "";
  document.getElementById("saveGemmaBtn").addEventListener("click", () => {
    localStorage.setItem("medora_gemma_key", keyInput.value.trim());
    localStorage.setItem("medora_gemma_model", modelInput.value.trim());
    document.getElementById("gemmaSaved").classList.remove("hidden");
  });
});
