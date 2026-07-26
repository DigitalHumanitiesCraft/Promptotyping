/* Vault page. The Grounded Vault under the paper, read from the generated
   index data/vault.json (vault/tools/build_site_index.py). The page lists the
   topic maps with their claims; a claim opens in the side panel with its
   statement and its grounding anchors, which link to the distillate Markdown in
   the repository. */

(function (A) {
  "use strict";

  /* Topic names are vault identifiers and are written as wikilink targets, so
     a two-word topic arrives run together. Split it for display only; the
     identifier itself belongs to the vault and is renamed there or nowhere. */
  function topicLabel(name) {
    return String(name).replace(/([a-z])([A-Z])/g, "$1 $2");
  }

  var vaultClaimsBySlug = {};
  var vaultDistillatesBySlug = {};

  function renderVault() {
    var el = document.getElementById("vault");
    if (!el) {
      return Promise.resolve();
    }
    return A.fetchJson("data/vault.json")
      .then(function (data) {
        (data.claims || []).forEach(function (c) { vaultClaimsBySlug[c.slug] = c; });
        (data.distillates || []).forEach(function (d) { vaultDistillatesBySlug[d.slug] = d; });

        var blocks = (data.topics || []).map(function (topic) {
          var items = topic.claims.map(function (slug) {
            var claim = vaultClaimsBySlug[slug];
            if (!claim) {
              return "";
            }
            return '<li class="vault-claim-item" id="vault-' + slug + '">' +
              '<button type="button" class="vault-claim" data-claim="' + slug + '">' +
              A.escapeHtml(claim.title) + "</button>" +
              '<span class="vault-claim-meta">' + claim.grounding.length +
              (claim.grounding.length === 1 ? " anchor" : " anchors") + "</span></li>";
          }).join("");
          return '<section class="vault-topic" id="vault-topic-' +
            topic.topic.toLowerCase() + '">' +
            "<h3>" + A.escapeHtml(topicLabel(topic.topic)) + "</h3>" +
            '<p class="vault-topic-desc">' + A.escapeHtml(topic.description) + "</p>" +
            '<ul class="vault-claim-list">' + items + "</ul></section>";
        }).join("");

        el.classList.remove("placeholder-section");
        el.innerHTML =
          "<h1>Vault</h1>" +
          "<p>The evidence layer under the paper. Sources are condensed into distillates " +
          "of quotation-checked single statements, and the claims that the paper's " +
          "load-bearing sentences rest on are built from those statements. The anchors " +
          "resolve downwards only, from the assertion to the source. A claim opens in the " +
          "side panel with its statement and its anchors.</p>" +
          '<p class="vault-repo-note"><a href="vault/" target="_blank" rel="noopener">' +
          "Vault in the repository</a></p>" +
          '<div class="vault-topics">' + blocks + "</div>";

        el.addEventListener("click", function (ev) {
          var btn = ev.target.closest(".vault-claim");
          if (btn) {
            openVaultClaim(btn.getAttribute("data-claim"));
          }
        });
      })
      .catch(function (err) {
        A.showLoadError(el, err);
      });
  }

  function openVaultClaim(slug) {
    var claim = vaultClaimsBySlug[slug];
    if (!claim) {
      return;
    }
    var anchors = claim.grounding.map(function (g) {
      var dist = vaultDistillatesBySlug[g.distillate];
      var label = dist ? dist.title : g.distillate;
      var href = dist ? dist.path : null;
      var stmt = g.statement ? ' <span class="vault-anchor-id">' + A.escapeHtml(g.statement) + "</span>" : "";
      return "<li>" + (href
        ? '<a href="' + href + '" target="_blank" rel="noopener">' + A.escapeHtml(label) + "</a>"
        : A.escapeHtml(label)) + stmt + "</li>";
    }).join("");

    var contested = claim.contestedWith.length
      ? '<p class="vault-panel-contested">Contested with ' +
        claim.contestedWith.map(A.escapeHtml).join(", ") + "</p>"
      : "";

    A.openSidePanel(claim.title,
      '<p class="vault-panel-status">Status ' + A.escapeHtml(claim.status) +
      (claim.topics.length ? " &middot; " + claim.topics.map(A.escapeHtml).join(", ") : "") + "</p>" +
      "<p>" + A.escapeHtml(claim.statement) + "</p>" +
      contested +
      "<h3>Grounding</h3><ul class=\"vault-anchor-list\">" + anchors + "</ul>");
  }

  A.renderVault = renderVault;
})(window.PromptotypingApp = window.PromptotypingApp || {});
