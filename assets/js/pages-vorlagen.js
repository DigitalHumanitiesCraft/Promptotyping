/* Templates page. The hub of the method specification: catalogue table,
   convention abstract, machine access with the frontmatter inspector host, and
   the technology baseline. A table row opens its template mirror in the side
   panel. */

(function (A) {
  "use strict";

  var templateBySlug = {};

  function renderVorlagen() {
    var el = document.getElementById("vorlagen");
    if (!el) {
      return Promise.resolve();
    }
    return A.fetchJson("data/promptotyping-documents.json")
      .then(function (data) {
        var templateDocs = data.documents || [];
        templateDocs.forEach(function (d) { templateBySlug[d.slug] = d; });

        var rows = templateDocs.map(function (d) {
          return '<tr class="vorlage-row" id="promptotyping-document-' + d.slug + '" ' +
            'tabindex="0" role="button" data-slug="' + d.slug + '">' +
            "<td>" + A.escapeHtml(d.title) + "</td>" +
            "<td>" + A.escapeHtml(d.funktion) + "</td>" +
            '<td class="vorlagen-trigger">' + A.escapeHtml(d.trigger || "") + "</td>" +
            "<td><code>" + A.escapeHtml(d.datei) + "</code></td>" +
            "<td>" + A.escapeHtml(d.typ) + "</td>" +
            "<td>" + A.escapeHtml(d.version) + "</td>" +
            "<td>" + A.escapeHtml(d.status) + "</td>" +
            "</tr>";
        }).join("");

        el.classList.remove("placeholder-section");
        el.innerHTML =
          "<h1>Templates</h1>" +
          "<p>This page gathers the specification of the method, the fillable template " +
          "catalogue, the underlying convention, machine access through the " +
          "<code>template:</code> field, and the technology baseline for static web tools.</p>" +
          '<div class="vorlagen-block" id="vorlagen-katalog">' +
          "<h3>Catalogue</h3>" +
          "<p>Fillable templates for the Knowledge Documents in the <code>knowledge/</code> " +
          "folder of a repository. Each template addresses a function rather than a fixed file " +
          "name. A click on a row opens the full template specification in the side panel.</p>" +
          '<table class="vorlagen-table"><thead><tr>' +
          "<th>Template</th><th>Function</th><th>Applies when</th><th>Recommended file</th><th>Type</th><th>Version</th><th>Status</th>" +
          "</tr></thead><tbody>" + rows + "</tbody></table>" +
          "</div>" +

          '<div class="vorlagen-block" id="vorlagen-konvention">' +
          "<h3>Convention</h3>" +
          "<p>The Konvention Knowledge Documents describes which functions a knowledge base " +
          "in the <code>knowledge/</code> folder of a repository covers, from navigation through " +
          "specification and architecture to provenance. It fixes the frontmatter vocabulary with " +
          "which a document declares its origin, its template and its machine address, and assigns " +
          "each function to one of the three analytical document types Knowledge, Process or " +
          "Action. For every function it names a trigger criterion by which an agent decides " +
          "whether a given repository needs the document. The template catalogue above is the " +
          "fillable extract of these functions. The full convention stands " +
          '<a href="#konvention-v0.1">further down on this page</a>.</p>' +
          "</div>" +

          '<div class="vorlagen-block" id="vorlagen-maschinenzugriff">' +
          "<h3>Machine access</h3>" +
          renderInspector() +
          '<p class="vorlagen-machine-note">For machines the canonical retrieval form of every ' +
          "template is the static markdown URL under <code>_content/</code>. It delivers the raw " +
          "markdown text straight from the GitHub Pages repository root, without the single-page " +
          "JavaScript having to run. Pattern: " +
          "<code>https://dhcraft.org/Promptotyping/_content/promptotyping-document/{slug}.md</code>. " +
          "The subpath and hash forms carried in the <code>template:</code> field are the " +
          "human-readable addresses; resolving a subpath presupposes JavaScript. Whoever needs the " +
          "raw text deterministically and without a browser environment uses the static " +
          "<code>_content/</code> markdown URL.</p>" +
          "</div>" +

          '<div class="vorlagen-block" id="vorlagen-technology-baseline">' +
          "<h3>Technology Baseline</h3>" +
          "<p>A Technology Baseline carries the project-independent technology knowledge for a " +
          "recurring artefact type, so that a single project instance documents only its " +
          "deviations in its <code>architecture.md</code> instead of arguing the stack again. This " +
          "repository carries such a baseline for the method's most frequent artefact type, the " +
          "self-contained static web tool of HTML, CSS and JavaScript without a build step. It " +
          "records the rules, no build, vanilla as the default, vendored libraries only under a " +
          "compromise rule, no external runtime calls, and grounds them in generatability, " +
          "publishability and durability. Status draft.</p>" +
          '<p class="vorlagen-tb-links">' +
          '<a href="' + A.SITE_BASE + '_content/technology-baseline.md" target="_blank" rel="noopener">Machine address</a>' +
          '<a href="_content/technology-baseline.md" target="_blank" rel="noopener">Open in the repository</a>' +
          "</p>" +
          "</div>";

        wireVorlagenRows(el);
      })
      .catch(function (err) {
        A.showLoadError(el, err);
      });
  }

  /* Host markup only; assets/js/modules/frontmatter-inspector.js takes it over
     on promptotyping:sections-ready. */
  function renderInspector() {
    return '<div class="frontmatter-inspector" data-component="frontmatter-inspector">' +
      "<h3>Frontmatter inspector</h3>" +
      "<p>A Promptotyping repository links the authoritative template specification through a " +
      "<code>template:</code> field in its frontmatter. A whole frontmatter block can be pasted " +
      "here. The inspector reads <code>template.url</code> or <code>template.alias</code>, checks " +
      "the URL against the anchor scheme of this site, and opens the referenced template in the " +
      "side panel.</p>" +
      '<textarea name="frontmatter" rows="9" spellcheck="false" ' +
      'aria-label="YAML frontmatter block"></textarea>' +
      '<div class="inspector-controls">' +
      '<button type="button" class="inspector-resolve">Resolve template</button>' +
      '<span class="inspector-status" role="status" aria-live="polite"></span>' +
      "</div></div>";
  }

  function wireVorlagenRows(el) {
    el.querySelectorAll(".vorlage-row").forEach(function (row) {
      var slug = row.getAttribute("data-slug");
      function open() { openTemplatePanel("promptotyping-document-" + slug); }
      row.addEventListener("click", open);
      row.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          open();
        }
      });
    });
  }

  /* ---- Template side panel ---- */

  /* Build the copyable template: frontmatter block for a document, with the
     machine-url as a comment line so an agent sees the deterministic .md URL. */
  function templateFrontmatterBlock(doc) {
    var urls = A.templateUrls(doc.slug);
    return "template:\n" +
      "  name: " + doc.title + "\n" +
      "  version: " + doc.version + "\n" +
      "  url: " + urls.subpath + "\n" +
      "  alias: " + urls.hash + "\n" +
      "  # machine-url (static raw text, retrievable without JavaScript):\n" +
      "  # " + doc.machineUrl;
  }

  /* Open the side panel with the fully rendered template mirror. anchor is the
     canonical hash anchor, e.g. promptotyping-document-data. The panel body
     comes from the shared markdown-panel device; what belongs to a template
     alone is the footer, appended on every open, including the cached one, so
     its copy button is wired whenever it is on screen. */
  function openTemplatePanel(anchor) {
    if (!anchor) {
      return;
    }
    var slug = anchor.replace(/^promptotyping-document-/, "").replace(/-v[\d.]+$/, "");
    var doc = templateBySlug[slug];
    var canonical = A.templateUrls(slug).anchor;
    A.openMarkdownPanel(doc ? doc.title : "Template",
      "_content/promptotyping-document/" + slug + ".md", canonical,
      function (body) {
        if (doc) {
          body.insertAdjacentHTML("beforeend", renderTemplateFooter(doc));
          wireTemplatePanelFooter(body);
        }
        A.setHashSilently(canonical);
      });
  }

  function renderTemplateFooter(doc) {
    var block = templateFrontmatterBlock(doc);
    return '<div class="panel-footer">' +
      '<button type="button" class="panel-copy" data-copy="' +
        encodeURIComponent(block) + '">Copy frontmatter block</button> ' +
      '<a href="' + doc.machineUrl + '" target="_blank" rel="noopener">Open markdown</a>' +
      '<pre class="panel-frontmatter"><code>' + A.escapeHtml(block) + "</code></pre>" +
      "</div>";
  }

  /* The panel body is replaced on each open, so wire the copy button after the
     content for this doc is injected. */
  function wireTemplatePanelFooter(bodyEl) {
    var btn = bodyEl.querySelector(".panel-copy");
    if (btn) {
      btn.addEventListener("click", function () {
        var text = decodeURIComponent(btn.getAttribute("data-copy"));
        A.copyText(text, btn, "Copy frontmatter block");
      });
    }
  }

  A.renderVorlagen = renderVorlagen;
  A.openTemplatePanel = openTemplatePanel;
})(window.PromptotypingApp = window.PromptotypingApp || {});
