/* Markdown pipeline: the marked.js configuration and the one function that
   renders a content file into a page host. */

(function (A) {
  "use strict";

  /* ---- marked.js configuration ---- */

  function configureMarked() {
    marked.use({
      gfm: true,
      breaks: false
    });
  }

  /* Render a Markdown fragment under the configuration of this file: side panel
     bodies and anything else that is not a page host. It exists so the marked
     coupling stands in this file alone. */
  function parseMarkdown(markdown) {
    return marked.parse(markdown);
  }

  /* Render a content file into its page host (overview, application, practice,
     skills, convention, artefact, verification, working environment). */
  function renderMarkdownInto(sectionId, file, after) {
    var el = document.getElementById(sectionId);
    if (!el) {
      return Promise.resolve();
    }
    return A.fetchMarkdown(file)
      .then(function (text) {
        A.pageFrontmatter[sectionId] = A.readFrontmatter(text);
        el.innerHTML = parseMarkdown(A.stripFrontmatter(text));
        el.classList.remove("placeholder-section");
        if (typeof after === "function") {
          after(el, text);
        }
      })
      .catch(function (err) {
        A.showLoadError(el, err);
      });
  }

  A.configureMarked = configureMarked;
  A.parseMarkdown = parseMarkdown;
  A.renderMarkdownInto = renderMarkdownInto;
})(window.PromptotypingApp = window.PromptotypingApp || {});
