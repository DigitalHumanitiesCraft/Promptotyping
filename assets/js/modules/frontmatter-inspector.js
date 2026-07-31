/* Frontmatter inspector (A11, ADR-7). Paste-live-render module in the templates
   section. Takes a whole YAML frontmatter block, extracts template.url/alias via
   js-yaml, validates the URL against the site anchor schema, and opens the side
   panel with the rendered template. No ES modules: app.js is an IIFE that exposes
   helpers on window.PromptotypingApp. */

(function () {
  "use strict";

  var App = window.PromptotypingApp || {};
  var SITE_BASE = App.SITE_BASE;
  /* The example the textarea starts with, and the anchor family it belongs to,
     both stated by the address vocabulary of registry.js rather than spelled
     out a second time here. */
  var TEMPLATE = App.templateUrls();
  var EXAMPLE = App.templateUrls("data");

  var DEFAULT_FRONTMATTER =
    "---\n" +
    "title: Datengrundlage\n" +
    "template:\n" +
    "  name: Vorlage Datengrundlage\n" +
    "  version: 0.1\n" +
    "  url: " + EXAMPLE.subpath + "\n" +
    "  alias: " + EXAMPLE.hash + "\n" +
    "---";

  function setStatus(statusEl, kind, text) {
    statusEl.textContent = text;
    statusEl.className = "inspector-status inspector-status-" + kind;
  }

  /* Snapshot anchors look like promptotyping-document-{slug}-v{version}. If the
     version is not addressable today (all templates are v0.1, no snapshot anchors
     exist yet), fall back to the latest anchor with a warning (A11). */
  function resolveWithFallback(anchor, statusEl) {
    var snapshotMatch = /^(promptotyping-document-[a-z-]+?)-v([\d.]+)$/.exec(anchor);
    if (snapshotMatch) {
      var latest = snapshotMatch[1];
      var version = snapshotMatch[2];
      // Today only v0.1 (specification v0.2) exists, and snapshots are not yet
      // minted as separate anchors. Any explicit snapshot falls back to latest.
      var latestEl = document.getElementById(latest);
      if (latestEl) {
        setStatus(statusEl, "warn",
          "Snapshot v" + version + " has no anchor of its own. Falling back to the current version.");
        return latest;
      }
    }
    return anchor;
  }

  function parseAndResolve(input, statusEl, openPanel, resolve) {
    var fmMatch = /^---\n([\s\S]+?)\n---/.exec(input.trim());
    if (!fmMatch) {
      setStatus(statusEl, "error", "No frontmatter block found (--- ... ---).");
      return;
    }

    var parsed;
    try {
      parsed = window.jsyaml.load(fmMatch[1]);
    } catch (e) {
      setStatus(statusEl, "error", "YAML error: " + e.message);
      return;
    }

    var tmpl = parsed && parsed.template;
    if (!tmpl || (!tmpl.url && !tmpl.alias)) {
      setStatus(statusEl, "error", "No template: field with url or alias found.");
      return;
    }

    var url = tmpl.url || tmpl.alias;
    if (url.indexOf(SITE_BASE) !== 0 && url.charAt(0) !== "#" && url.charAt(0) !== "/") {
      setStatus(statusEl, "error", "The URL does not point at " + SITE_BASE + ".");
      return;
    }

    var anchor = resolve(url);
    if (!anchor || anchor.indexOf(TEMPLATE.prefix) !== 0) {
      setStatus(statusEl, "error",
        "The URL does not match the template anchor scheme (#" +
        TEMPLATE.anchor + "{slug}).");
      return;
    }

    anchor = resolveWithFallback(anchor, statusEl);

    var name = tmpl.name ? tmpl.name : "Template";
    var version = tmpl.version ? " v" + tmpl.version : "";
    if (statusEl.className.indexOf("inspector-status-warn") === -1) {
      setStatus(statusEl, "ok", "Template recognised: " + name + version + ". Panel opened.");
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
        "Example frontmatter loaded. Typing resolves the referenced template.");
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

  // The host markup is injected by app.js after async rendering, so this event
  // is the earliest moment there is anything to take over, and app.js fires it
  // once the render promises have resolved.
  document.addEventListener("promptotyping:sections-ready", boot);
})();
