/* Shell controls that belong to no single page: the reusable slide-in side
   panel and the theme toggle. */

(function (A) {
  "use strict";

  /* ---- Reusable side panel ----
     Generic slide-in panel. The page renderers call this with a rendered title
     and HTML body. */

  var panelOpenerEl = null; // element that triggered the panel, for focus return

  function openSidePanel(title, html) {
    var panel = document.getElementById("side-panel");
    var backdrop = document.getElementById("side-panel-backdrop");
    var titleEl = document.getElementById("side-panel-title");
    var bodyEl = document.getElementById("side-panel-body");
    if (!panel || !bodyEl) {
      return;
    }
    // Track the element that opened the panel so focus can return on close.
    panelOpenerEl = document.activeElement || null;
    titleEl.textContent = title || "";
    bodyEl.innerHTML = html || "";
    panel.classList.add("open");
    panel.setAttribute("aria-hidden", "false");
    if (backdrop) {
      backdrop.classList.add("visible");
    }
    // Move focus into the panel: prefer close button, fall back to panel itself.
    var closeBtn = document.getElementById("side-panel-close");
    if (closeBtn) {
      closeBtn.focus();
    } else {
      panel.setAttribute("tabindex", "-1");
      panel.focus();
    }
  }

  function closeSidePanel() {
    var panel = document.getElementById("side-panel");
    var backdrop = document.getElementById("side-panel-backdrop");
    if (!panel) {
      return;
    }
    panel.classList.remove("open");
    panel.setAttribute("aria-hidden", "true");
    if (backdrop) {
      backdrop.classList.remove("visible");
    }
    // Return focus to the trigger element.
    if (panelOpenerEl && typeof panelOpenerEl.focus === "function") {
      panelOpenerEl.focus();
      panelOpenerEl = null;
    }
  }

  function setupSidePanel() {
    var closeBtn = document.getElementById("side-panel-close");
    var backdrop = document.getElementById("side-panel-backdrop");
    if (closeBtn) {
      closeBtn.addEventListener("click", closeSidePanel);
    }
    if (backdrop) {
      backdrop.addEventListener("click", closeSidePanel);
    }
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        closeSidePanel();
      }
    });
  }

  /* ---- Theme ----
     The stored choice wins over the system preference. The document class is
     set in an inline prelude before first paint; this only wires the toggle. */

  var THEME_KEY = "promptotyping-theme";

  function currentTheme() {
    var set = document.documentElement.getAttribute("data-theme");
    if (set) {
      return set;
    }
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark" : "light";
  }

  function setupThemeToggle() {
    var btn = document.getElementById("theme-toggle");
    if (!btn) {
      return;
    }
    var label = function () {
      btn.setAttribute("title", currentTheme() === "dark"
        ? "Switch to the light theme" : "Switch to the dark theme");
    };
    label();
    btn.addEventListener("click", function () {
      var next = currentTheme() === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      try {
        localStorage.setItem(THEME_KEY, next);
      } catch (e) {
        // Private mode: the choice holds for this page load only.
      }
      label();
    });
  }

  A.openSidePanel = openSidePanel;
  A.closeSidePanel = closeSidePanel;
  A.setupSidePanel = setupSidePanel;
  A.setupThemeToggle = setupThemeToggle;
})(window.PromptotypingApp = window.PromptotypingApp || {});
