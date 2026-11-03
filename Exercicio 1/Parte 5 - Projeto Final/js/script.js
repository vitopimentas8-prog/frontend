const tipButton = document.querySelector("#tip-button");
const extraTip = document.querySelector("#extra-tip");
const currentYear = document.querySelector("#current-year");

if (tipButton && extraTip) {
  tipButton.addEventListener("click", () => {
    const isExpanded = tipButton.getAttribute("aria-expanded") === "true";
    tipButton.setAttribute("aria-expanded", String(!isExpanded));
    extraTip.hidden = isExpanded;
    tipButton.textContent = isExpanded ? "Mostrar mais uma dica" : "Ocultar dica";
  });
}

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}
