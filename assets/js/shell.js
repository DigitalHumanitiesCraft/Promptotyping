/* Shell controls that belong to no single page: the reusable slide-in side
   panel and the theme toggle. */

(function (A) {
  "use strict";

  /* ---- Reusable side panel ----
     Generic slide-in panel. The page renderers call this with a rendered title
     and HTML body. */

  var panelOpenerEl = null; // element that triggered the panel, for focus return
  var panelRequestId = 0;

  function panelIsOpen(panel) {
    return panel && panel.classList.contains("open");
  }

  function openSidePanel(title, html) {
    var panel = document.getElementById("side-panel");
    var backdrop = document.getElementById("side-panel-backdrop");
    var titleEl = document.getElementById("side-panel-title");
    var bodyEl = document.getElementById("side-panel-body");
    if (!panel || !bodyEl) {
      return;
    }
    panelRequestId += 1;
    var wasOpen = panelIsOpen(panel);
    if (!wasOpen) {
      panelOpenerEl = document.activeElement || null;
    }
    titleEl.textContent = title || "";
    bodyEl.innerHTML = html || "";
    panel.classList.add("open");
    panel.setAttribute("aria-hidden", "false");
    if (backdrop) {
      backdrop.classList.add("visible");
    }
    if (!wasOpen) {
      var closeBtn = document.getElementById("side-panel-close");
      if (closeBtn) {
        closeBtn.focus();
      } else {
        panel.setAttribute("tabindex", "-1");
        panel.focus();
      }
    }
  }

  function closeSidePanel() {
    var panel = document.getElementById("side-panel");
    var backdrop = document.getElementById("side-panel-backdrop");
    if (!panel) {
      return;
    }
    panelRequestId += 1;
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
      var panel = document.getElementById("side-panel");
      if (!panelIsOpen(panel)) {
        return;
      }
      if (e.key === "Escape") {
        e.preventDefault();
        closeSidePanel();
        return;
      }
      if (e.key !== "Tab") {
        return;
      }
      var focusable = Array.prototype.slice.call(panel.querySelectorAll(
        'a[href], button:not([disabled]), textarea:not([disabled]), ' +
        'input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
      )).filter(function (el) {
        return el.getAttribute("aria-hidden") !== "true" && el.offsetParent !== null;
      });
      if (!focusable.length) {
        e.preventDefault();
        panel.focus();
        return;
      }
      var first = focusable[0];
      var last = focusable[focusable.length - 1];
      if (e.shiftKey && (document.activeElement === first || !panel.contains(document.activeElement))) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey &&
          (document.activeElement === last || !panel.contains(document.activeElement))) {
        e.preventDefault();
        first.focus();
      }
    });
  }

  /* ---- Markdown in the panel ----
     Templates and case-study deep pages open the same device: panel with a
     loading line, fetch, strip the frontmatter, render, fill, cache. It stands
     here once, with one cache keyed by the anchor the caller addresses the
     document under. `after` receives the panel body and runs on the cached open
     as well, so a footer or an embed it appends is there every time. It does not
     run when the load fails, where the panel carries the error instead. */

  var panelCache = {};

  function openMarkdownPanel(title, url, cacheKey, after) {
    function augmentBody() {
      var body = document.getElementById("side-panel-body");
      if (body && typeof after === "function") {
        after(body);
      }
    }
    if (panelCache[cacheKey]) {
      openSidePanel(title, panelCache[cacheKey]);
      augmentBody();
      return Promise.resolve();
    }
    openSidePanel(title, '<p class="section-loading">Loading.</p>');
    var requestId = panelRequestId;
    return A.fetchMarkdown(url)
      .then(function (text) {
        panelCache[cacheKey] = A.parseMarkdown(A.stripFrontmatter(text));
        if (requestId !== panelRequestId) {
          return;
        }
        var panel = document.getElementById("side-panel");
        var body = document.getElementById("side-panel-body");
        if (!panelIsOpen(panel) || !body) {
          return;
        }
        body.innerHTML = panelCache[cacheKey];
        augmentBody();
      })
      .catch(function (err) {
        if (requestId !== panelRequestId) {
          return;
        }
        var body = document.getElementById("side-panel-body");
        if (body) {
          body.innerHTML = '<p class="section-loading">' + A.escapeHtml(err.message) + "</p>";
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
  A.openMarkdownPanel = openMarkdownPanel;
  A.setupSidePanel = setupSidePanel;
  A.setupThemeToggle = setupThemeToggle;
})(window.PromptotypingApp = window.PromptotypingApp || {});
