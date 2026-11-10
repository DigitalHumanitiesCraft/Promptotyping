// Adds a copy button to every figure.dh-code. Without the Clipboard API (older browsers,
// pages served over plain http from another host) no button is rendered, because a button
// that cannot work would only need explaining. Labels follow <html lang>, and a figure can
// override them with data-copy-label and data-copied-label.
const LABELS = {
  de: { copy: "Kopieren", copied: "Kopiert", failed: "Kopieren nicht möglich" },
  en: { copy: "Copy", copied: "Copied", failed: "Copy failed" },
};

function labelsFor(figure) {
  const lang = (document.documentElement.lang || "en").slice(0, 2).toLowerCase();
  const base = LABELS[lang] ?? LABELS.en;
  return {
    copy: figure.dataset.copyLabel ?? base.copy,
    copied: figure.dataset.copiedLabel ?? base.copied,
    failed: base.failed,
  };
}

function enhance(figure) {
  const pre = figure.querySelector("pre");
  if (!pre || figure.querySelector(".dh-copy")) return;
  const labels = labelsFor(figure);
  const button = document.createElement("button");
  button.type = "button";
  button.className = "dh-copy";
  button.textContent = labels.copy;
  // The visible label changes after copying; aria-live announces it to screen readers.
  button.setAttribute("aria-live", "polite");
  let timer;
  button.addEventListener("click", async () => {
    clearTimeout(timer);
    try {
      await navigator.clipboard.writeText(pre.innerText.replace(/\n$/, ""));
      button.textContent = labels.copied;
      timer = setTimeout(() => { button.textContent = labels.copy; }, 2000);
    } catch {
      // A failure stays visible until the next attempt, so the reader knows to select by hand.
      button.textContent = labels.failed;
    }
  });
  figure.append(button);
}

if (window.isSecureContext && navigator.clipboard?.writeText) {
  document.querySelectorAll("figure.dh-code").forEach(enhance);
}
