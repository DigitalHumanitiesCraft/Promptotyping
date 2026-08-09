/* Vault page. The Grounded Vault under the paper, read from the generated
   index data/vault.json (vault/tools/build_site_index.py). The page lists the
   topic maps with their assertions; an assertion opens in the side panel with its
   statement and its grounding anchors, which link to the distillate Markdown in
   the repository.

   A second view draws the same grounding chain as a network, assertion to
   distillate to source, one topic at a time. The list stays the primary form
   and the default; the network answers what rests on what and nothing else. */

(function (A) {
  "use strict";

  /* Topic names are vault identifiers and are written as wikilink targets, so
     a two-word topic arrives run together. Split it for display only; the
     identifier itself belongs to the vault and is renamed there or nowhere. */
  function topicLabel(name) {
    return String(name).replace(/([a-z])([A-Z])/g, "$1 $2");
  }

  var vaultAssertionsBySlug = {};
  var vaultDistillatesBySlug = {};
  var vaultSourcesBySlug = {};
  var vaultTopics = [];

  /* ---- Network view geometry ----
     Three columns of fixed width in one static layout; the reading direction is
     the direction of grounding, from the assertion on the left down to the
     source on the right. Nothing is simulated and nothing moves. The container
     scrolls, which is the whole of the pan. */

  var COLUMNS = [
    { key: "assertion", label: "Assertions", width: 280, chars: 42 },
    { key: "distillate", label: "Distillates", width: 190, chars: 28 },
    { key: "source", label: "Sources", width: 190, chars: 28 }
  ];
  var COL_GAP = 80;
  var ROW_H = 26;
  var NODE_H = 20;
  var HEAD_H = 28;

  function columnX(i) {
    var x = 0;
    for (var n = 0; n < i; n += 1) {
      x += COLUMNS[n].width + COL_GAP;
    }
    return x;
  }

  var GRAPH_W = columnX(COLUMNS.length - 1) + COLUMNS[COLUMNS.length - 1].width;

  function clip(text, chars) {
    var s = String(text || "");
    return s.length > chars ? s.slice(0, chars - 1).replace(/\s+$/, "") + "…" : s;
  }

  /* Build the three columns and the two edge sets of one topic. Column order is
     first appearance walking the assertions in the order their topic map lists
     them, which keeps the lines largely monotone without a layout pass. */
  function buildGraphModel(topic) {
    var columns = [[], [], []];
    var edges = [];
    var index = { assertion: {}, distillate: {}, source: {} };

    function place(kind, slug, node) {
      var col = kind === "assertion" ? 0 : (kind === "distillate" ? 1 : 2);
      if (!(slug in index[kind])) {
        index[kind][slug] = columns[col].length;
        node.key = kind + ":" + slug;
        node.kind = kind;
        node.row = columns[col].length;
        columns[col].push(node);
      }
      return index[kind][slug];
    }

    (topic.assertions || []).forEach(function (slug) {
      var assertion = vaultAssertionsBySlug[slug];
      if (!assertion) {
        return;
      }
      place("assertion", slug, { slug: slug, label: assertion.title, title: assertion.title,
        note: "Assertion, status " + assertion.status });
      var seen = {};
      assertion.grounding.forEach(function (g) {
        // Several statements of one distillate carry one assertion; the network
        // asks what rests on what, so they are one line.
        if (seen[g.distillate]) {
          return;
        }
        seen[g.distillate] = true;
        var dist = vaultDistillatesBySlug[g.distillate];
        place("distillate", g.distillate, {
          slug: g.distillate,
          label: dist ? dist.title.replace(/^Distillate:\s*/, "") : g.distillate,
          title: dist ? dist.title : g.distillate,
          note: "Distillate",
          href: dist ? dist.path : ""
        });
        edges.push({ a: "assertion:" + slug, b: "distillate:" + g.distillate });
        var source = dist && dist.source ? vaultSourcesBySlug[dist.source] : null;
        if (!source) {
          return;
        }
        place("source", source.slug, {
          slug: source.slug,
          label: source.label,
          title: source.title,
          note: source.kind === "publication" ? "Source, publication" : "Source, archived document",
          href: source.path
        });
        edges.push({ a: "distillate:" + g.distillate, b: "source:" + source.slug });
      });
    });

    // The same source carries several distillates, so the second edge set is
    // deduplicated; the first cannot repeat a pair.
    var pairs = {};
    edges = edges.filter(function (e) {
      var k = e.a + "|" + e.b;
      if (pairs[k]) {
        return false;
      }
      pairs[k] = true;
      return true;
    });

    return { columns: columns, edges: edges };
  }

  function nodeY(row) {
    return HEAD_H + row * ROW_H;
  }

  function edgePath(from, to) {
    var x1 = columnX(from.col) + COLUMNS[from.col].width;
    var y1 = nodeY(from.row) + NODE_H / 2;
    var x2 = columnX(to.col);
    var y2 = nodeY(to.row) + NODE_H / 2;
    var bend = COL_GAP / 2;
    return "M" + x1 + " " + y1 + "C" + (x1 + bend) + " " + y1 + " " +
      (x2 - bend) + " " + y2 + " " + x2 + " " + y2;
  }

  function graphSvg(topic, model) {
    var byKey = {};
    model.columns.forEach(function (col, ci) {
      col.forEach(function (node) {
        byKey[node.key] = { col: ci, row: node.row };
      });
    });

    var rows = Math.max(model.columns[0].length, model.columns[1].length,
      model.columns[2].length);
    var height = HEAD_H + rows * ROW_H + 4;

    var heads = COLUMNS.map(function (c, i) {
      return '<text class="vg-head" x="' + columnX(i) + '" y="14">' +
        A.escapeHtml(c.label) + "</text>";
    }).join("");

    var lines = model.edges.map(function (e) {
      return '<path class="vg-edge" data-a="' + e.a + '" data-b="' + e.b +
        '" d="' + edgePath(byKey[e.a], byKey[e.b]) + '"/>';
    }).join("");

    var nodes = model.columns.map(function (col, ci) {
      var spec = COLUMNS[ci];
      return col.map(function (node) {
        var x = columnX(ci);
        var y = nodeY(node.row);
        // An assertion addresses its own list entry; the click handler switches back
        // to the list, which is the state a #vault-{slug} link resolves in.
        var href = node.kind === "assertion" ? "#vault-" + node.slug : node.href;
        var external = node.kind !== "assertion" && href
          ? ' target="_blank" rel="noopener"' : "";
        var open = href
          ? '<a class="vg-node vg-' + node.kind + '" href="' + A.escapeHtml(href) + '"' +
            external + ' data-key="' + node.key + '" data-kind="' + node.kind +
            '" data-slug="' + A.escapeHtml(node.slug) + '" aria-label="' +
            A.escapeHtml(node.note + ". " + node.title) + '">'
          : '<g class="vg-node vg-' + node.kind + '" data-key="' + node.key + '">';
        return open +
          '<rect x="' + x + '" y="' + y + '" width="' + spec.width +
          '" height="' + NODE_H + '" rx="2"/>' +
          '<text x="' + (x + 7) + '" y="' + (y + 14) + '">' +
          A.escapeHtml(clip(node.label, spec.chars)) + "</text>" +
          (href ? "</a>" : "</g>");
      }).join("");
    }).join("");

    return '<svg class="vault-graph-svg" width="' + GRAPH_W + '" height="' + height +
      '" viewBox="0 0 ' + GRAPH_W + " " + height + '" aria-label="Grounding network of ' +
      A.escapeHtml(topicLabel(topic.topic)) + '">' +
      '<g class="vg-heads">' + heads + "</g>" +
      '<g class="vg-edges">' + lines + "</g>" +
      '<g class="vg-nodes">' + nodes + "</g></svg>";
  }

  /* ---- View state ---- */

  var currentView = "list";
  var currentTopic = null;

  function listHost() { return document.getElementById("vault-list"); }
  function graphHost() { return document.getElementById("vault-network"); }

  function setView(view) {
    var list = listHost();
    var graph = graphHost();
    if (!list || !graph || view === currentView) {
      return false;
    }
    currentView = view;
    list.hidden = view !== "list";
    graph.hidden = view !== "graph";
    document.querySelectorAll(".vault-view-switch button").forEach(function (b) {
      var on = b.getAttribute("data-view") === view;
      b.setAttribute("aria-pressed", on ? "true" : "false");
      b.classList.toggle("active", on);
    });
    if (view === "graph" && !currentTopic && vaultTopics.length) {
      showTopic(vaultTopics[0].topic);
    }
    return true;
  }

  function showTopic(name) {
    var topic = vaultTopics.filter(function (t) { return t.topic === name; })[0];
    var canvas = document.getElementById("vault-graph-canvas");
    if (!topic || !canvas) {
      return;
    }
    currentTopic = name;
    canvas.innerHTML = graphSvg(topic, buildGraphModel(topic));
    canvas.scrollLeft = 0;
    litKey = null;
    setDetail("");
    document.querySelectorAll(".vault-graph-topics button").forEach(function (b) {
      var on = b.getAttribute("data-topic") === name;
      b.setAttribute("aria-pressed", on ? "true" : "false");
      b.classList.toggle("active", on);
    });
  }

  var DETAIL_REST = "Point at a node, or move to it with the keyboard, to read what it is.";

  function setDetail(text) {
    var el = document.getElementById("vault-graph-detail");
    if (el) {
      el.textContent = text || DETAIL_REST;
    }
  }

  /* Light the node under the pointer or the focus together with everything it
     is anchored to; the rest of the network steps back. A class switch, no
     transition, so a hundred lines never animate. */
  var litKey = null;

  function lightUp(node) {
    var svg = document.querySelector(".vault-graph-svg");
    var key = node ? node.getAttribute("data-key") : null;
    if (!svg || key === litKey) {
      return;
    }
    litKey = key;
    svg.querySelectorAll(".is-lit").forEach(function (el) { el.classList.remove("is-lit"); });
    if (!node) {
      svg.classList.remove("is-lighting");
      setDetail("");
      return;
    }
    var lit = {};
    lit[key] = true;
    svg.querySelectorAll(".vg-edge").forEach(function (edge) {
      var a = edge.getAttribute("data-a");
      var b = edge.getAttribute("data-b");
      if (a === key || b === key) {
        edge.classList.add("is-lit");
        lit[a] = true;
        lit[b] = true;
      }
    });
    svg.querySelectorAll(".vg-node").forEach(function (el) {
      if (lit[el.getAttribute("data-key")]) {
        el.classList.add("is-lit");
      }
    });
    svg.classList.add("is-lighting");
    setDetail(node.getAttribute("aria-label") || "");
  }

  /* An assertion node leads to the assertion in the list, which is where the published
     address #vault-{slug} resolves. */
  function goToAssertion(slug) {
    if (!vaultAssertionsBySlug[slug]) {
      return;
    }
    setView("list");
    var el = document.getElementById("vault-" + slug);
    if (el) {
      el.scrollIntoView();
    }
    openVaultAssertion(slug);
    A.setHashSilently("vault-" + slug);
  }

  function wireGraph(root) {
    root.addEventListener("click", function (ev) {
      var view = ev.target.closest("[data-view]");
      if (view) {
        setView(view.getAttribute("data-view"));
        return;
      }
      var chip = ev.target.closest("[data-topic]");
      if (chip) {
        showTopic(chip.getAttribute("data-topic"));
        return;
      }
      var node = ev.target.closest(".vg-assertion");
      if (node) {
        ev.preventDefault();
        goToAssertion(node.getAttribute("data-slug"));
      }
    });
    // One handler per pointer move: the node under the pointer, or nothing when
    // the pointer sits between the nodes. Moving inside one node changes the
    // target between its rectangle and its label and resolves to the same node,
    // so the highlight never flickers.
    root.addEventListener("mouseover", function (ev) {
      lightUp(ev.target.closest(".vg-node"));
    });
    root.addEventListener("focusin", function (ev) {
      lightUp(ev.target.closest(".vg-node"));
    });
    root.addEventListener("focusout", function (ev) {
      if (!root.contains(ev.relatedTarget)) {
        lightUp(null);
      }
    });
    // A deep link is answered in the list, whichever view the reader left
    // behind. The list is never scrolled while it is hidden, so the switch has
    // to carry the scroll itself.
    window.addEventListener("hashchange", function () {
      var hash = window.location.hash.replace(/^#/, "");
      if (hash.indexOf("vault-") !== 0 || !vaultAssertionsBySlug[hash.slice(6)]) {
        return;
      }
      if (setView("list")) {
        var el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView();
        }
      }
    });
  }

  /* ---- Rendering ---- */

  function renderVault() {
    var el = document.getElementById("vault");
    if (!el) {
      return Promise.resolve();
    }
    return A.fetchJson("data/vault.json")
      .then(function (data) {
        (data.assertions || []).forEach(function (c) { vaultAssertionsBySlug[c.slug] = c; });
        (data.distillates || []).forEach(function (d) { vaultDistillatesBySlug[d.slug] = d; });
        (data.sources || []).forEach(function (s) { vaultSourcesBySlug[s.slug] = s; });
        vaultTopics = data.topics || [];

        var blocks = vaultTopics.map(function (topic) {
          var items = topic.assertions.map(function (slug) {
            var assertion = vaultAssertionsBySlug[slug];
            if (!assertion) {
              return "";
            }
            return '<li class="vault-assertion-item" id="vault-' + slug + '">' +
              '<button type="button" class="vault-assertion" data-assertion="' + slug + '">' +
              A.escapeHtml(assertion.title) + "</button>" +
              '<span class="vault-assertion-meta">' + assertion.grounding.length +
              (assertion.grounding.length === 1 ? " anchor" : " anchors") + "</span></li>";
          }).join("");
          return '<section class="vault-topic" id="vault-topic-' +
            topic.topic.toLowerCase() + '">' +
            "<h3>" + A.escapeHtml(topicLabel(topic.topic)) + "</h3>" +
            '<p class="vault-topic-desc">' + A.escapeHtml(topic.description) + "</p>" +
            '<ul class="vault-assertion-list">' + items + "</ul></section>";
        }).join("");

        var topicChips = vaultTopics.map(function (topic) {
          return '<button type="button" class="vault-chip" data-topic="' +
            A.escapeHtml(topic.topic) + '" aria-pressed="false">' +
            A.escapeHtml(topicLabel(topic.topic)) + "</button>";
        }).join("");

        el.classList.remove("placeholder-section");
        el.innerHTML =
          "<h1>Vault</h1>" +
          "<p>The evidence layer under the paper. Sources are condensed into distillates " +
          "of quotation-checked single statements, and the assertions that the paper's " +
          "load-bearing sentences rest on are built from those statements. The anchors " +
          "resolve downwards only, from the assertion to the source. An assertion opens in the " +
          "side panel with its statement and its anchors.</p>" +
          '<p class="vault-repo-note"><a href="vault/" target="_blank" rel="noopener">' +
          "Vault in the repository</a></p>" +
          '<div class="vault-view-switch" role="group" aria-label="Vault view">' +
          '<button type="button" class="vault-chip active" data-view="list" ' +
          'aria-pressed="true">List</button>' +
          '<button type="button" class="vault-chip" data-view="graph" ' +
          'aria-pressed="false">Network</button></div>' +
          '<div class="vault-topics" id="vault-list">' + blocks + "</div>" +
          '<div class="vault-graph-panel" id="vault-network" hidden>' +
          '<div class="vault-graph-topics">' + topicChips + "</div>" +
          '<p class="vault-graph-legend">Every line is a grounding anchor. An assertion rests ' +
          "on the distillates it is anchored in, and a distillate condenses one source.</p>" +
          '<p class="vault-graph-detail" id="vault-graph-detail">' + DETAIL_REST + "</p>" +
          '<div class="vault-graph" id="vault-graph-canvas" tabindex="0" role="group" ' +
          'aria-label="Grounding network, scrollable"></div></div>';

        el.addEventListener("click", function (ev) {
          var btn = ev.target.closest(".vault-assertion");
          if (btn) {
            openVaultAssertion(btn.getAttribute("data-assertion"));
          }
        });
        wireGraph(el);
      })
      .catch(function (err) {
        A.showLoadError(el, err);
      });
  }

  function openVaultAssertion(slug) {
    var assertion = vaultAssertionsBySlug[slug];
    if (!assertion) {
      return;
    }
    var anchors = assertion.grounding.map(function (g) {
      var dist = vaultDistillatesBySlug[g.distillate];
      var label = dist ? dist.title : g.distillate;
      var href = dist ? dist.path : null;
      var stmt = g.statement ? ' <span class="vault-anchor-id">' + A.escapeHtml(g.statement) + "</span>" : "";
      return "<li>" + (href
        ? '<a href="' + href + '" target="_blank" rel="noopener">' + A.escapeHtml(label) + "</a>"
        : A.escapeHtml(label)) + stmt + "</li>";
    }).join("");

    var contested = assertion.contestedWith.length
      ? '<p class="vault-panel-contested">Contested with ' +
        assertion.contestedWith.map(A.escapeHtml).join(", ") + "</p>"
      : "";

    A.openSidePanel(assertion.title,
      '<p class="vault-panel-status">Status ' + A.escapeHtml(assertion.status) +
      (assertion.topics.length ? " &middot; " + assertion.topics.map(A.escapeHtml).join(", ") : "") + "</p>" +
      "<p>" + A.escapeHtml(assertion.statement) + "</p>" +
      contested +
      "<h3>Grounding</h3><ul class=\"vault-anchor-list\">" + anchors + "</ul>");
  }

  A.renderVault = renderVault;
})(window.PromptotypingApp = window.PromptotypingApp || {});
