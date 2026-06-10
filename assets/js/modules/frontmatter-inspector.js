/* Frontmatter-Inspector (A11, ADR-7). Paste-live-render module in the Vorlagen
   section. Takes a whole YAML frontmatter block, extracts template.url/alias via
   js-yaml, validates the URL against the site anchor schema, and opens the side
   panel with the rendered template. No ES modules: app.js is an IIFE that exposes
   helpers on window.PromptotypingApp. */

(function () {
  "use strict";

  var App = window.PromptotypingApp || {};
  var SITE_BASE = "https://dhcraft.org/Promptotyping/";

  var DEFAULT_FRONTMATTER =
    "---\n" +
    "title: Datengrundlage\n" +
    "template:\n" +
    "  name: Vorlage Datengrundlage\n" +
    "  version: 0.1\n" +
    "  url: https://dhcraft.org/Promptotyping/promptotyping-document/data\n" +
    "  alias: https://dhcraft.org/Promptotyping/#promptotyping-document-data\n" +
    "---";

  function setStatus(statusEl, kind, text) {
    statusEl.textContent = text;
    statusEl.className = "inspector-status inspector-status-" + kind;
  }

  /* Snapshot anchors look like promptotyping-document-{slug}-v{version}. If the
     version is not addressable today (all templates are v0.1, no snapshot anchors
     exist yet), fall back to the latest anchor with a warning (A11). */
  function resolveWithFallback(anchor, statusEl, tmpl) {
    var snapshotMatch = /^(promptotyping-document-[a-z-]+?)-v([\d.]+)$/.exec(anchor);
    if (snapshotMatch) {
      var latest = snapshotMatch[1];
      var version = snapshotMatch[2];
      // Today only v0.1 (specification v0.2) exists, and snapshots are not yet
      // minted as separate anchors. Any explicit snapshot falls back to latest.
      var latestEl = document.getElementById(latest);
      if (latestEl) {
        setStatus(statusEl, "warn",
          "Snapshot v" + version + " ist nicht als eigener Anker vorhanden. Fallback auf die aktuelle Fassung.");
        return latest;
      }
    }
    return anchor;
  }

  function parseAndResolve(input, statusEl, openPanel, resolve) {
    var fmMatch = /^---\n([\s\S]+?)\n---/.exec(input.trim());
    if (!fmMatch) {
      setStatus(statusEl, "error", "Kein Frontmatter-Block gefunden (--- ... ---).");
      return;
    }

    var parsed;
    try {
      parsed = window.jsyaml.load(fmMatch[1]);
    } catch (e) {
      setStatus(statusEl, "error", "YAML-Fehler: " + e.message);
      return;
    }

    var tmpl = parsed && parsed.template;
    if (!tmpl || (!tmpl.url && !tmpl.alias)) {
      setStatus(statusEl, "error", "Kein template:-Feld mit url oder alias gefunden.");
      return;
    }

    var url = tmpl.url || tmpl.alias;
    if (url.indexOf(SITE_BASE) !== 0 && url.charAt(0) !== "#" && url.charAt(0) !== "/") {
      setStatus(statusEl, "error", "URL zeigt nicht auf " + SITE_BASE + ".");
      return;
    }

    var anchor = resolve(url);
    if (!anchor || anchor.indexOf("promptotyping-document-") !== 0) {
      setStatus(statusEl, "error",
        "URL passt nicht zum Vorlagen-Anker-Schema (#promptotyping-document-{slug}).");
      return;
    }

    anchor = resolveWithFallback(anchor, statusEl, tmpl);

    var name = tmpl.name ? tmpl.name : "Vorlage";
    var version = tmpl.version ? " v" + tmpl.version : "";
    if (statusEl.className.indexOf("inspector-status-warn") === -1) {
      setStatus(statusEl, "ok", "Vorlage erkannt: " + name + version + ". Panel geoeffnet.");
    }
    openPanel(anchor);
  }

  function initInspector(rootEl) {
    var textarea = rootEl.querySelector("textarea[name='frontmatter']");
    var statusEl = rootEl.querySelector(".inspector-status");
    if (!textarea || !statusEl) {
      return;
    }

    var resolve = App.resolveTemplateUrl;
    var openPanel = App.openTemplatePanel;
    if (typeof resolve !== "function" || typeof openPanel !== "function") {
      setStatus(statusEl, "error", "Inspector nicht initialisierbar (App-Helfer fehlen).");
      return;
    }

    if (!textarea.value) {
      textarea.value = DEFAULT_FRONTMATTER;
    }

    var timer = null;
    textarea.addEventListener("input", function () {
      clearTimeout(timer);
      timer = setTimeout(function () {
        parseAndResolve(textarea.value, statusEl, openPanel, resolve);
      }, 300);
    });

    // Resolve the default value once on load, but do not auto-open the panel so
    // the page does not start with an intrusive open panel; just show status.
    var fmMatch = /^---\n([\s\S]+?)\n---/.exec(textarea.value.trim());
    if (fmMatch) {
      setStatus(statusEl, "ok",
        "Beispiel-Frontmatter geladen. Tippen loest die referenzierte Vorlage auf.");
    }

    var btn = rootEl.querySelector(".inspector-resolve");
    if (btn) {
      btn.addEventListener("click", function () {
        parseAndResolve(textarea.value, statusEl, openPanel, resolve);
      });
    }
  }

  function boot() {
    var roots = document.querySelectorAll("[data-component='frontmatter-inspector']");
    Array.prototype.forEach.call(roots, function (root) {
      if (root.dataset.inspectorReady) {
        return;
      }
      root.dataset.inspectorReady = "1";
      initInspector(root);
    });
  }

  // The host markup is injected by app.js after async rendering; boot on its
  // ready event (and once now in case it already fired).
  document.addEventListener("promptotyping:sections-ready", boot);
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
