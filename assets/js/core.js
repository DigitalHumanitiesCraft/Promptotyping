/* Promptotyping Site, shared helpers. Vanilla JS, no build step.
   Fetching, frontmatter, escaping, copying, the YouTube facade and the guard
   around programmatic hash writes. This file is loaded first; every later file
   reaches these through the shared namespace window.PromptotypingApp. */

(function (A) {
  "use strict";

  function escapeHtml(s) {
    return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  function slugify(text) {
    return text.toLowerCase()
      .replace(/[ä]/g, "ae").replace(/[ö]/g, "oe").replace(/[ü]/g, "ue")
      .replace(/[ß]/g, "ss")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }

  /* ---- Loading ---- */

  function fetchMarkdown(file) {
    return fetch(file).then(function (res) {
      if (!res.ok) {
        throw new Error("Could not load " + file + " (" + res.status + ").");
      }
      return res.text();
    });
  }

  /* The message names the bare file, since the data path adds nothing a reader
     of the error can act on. */
  function fetchJson(file) {
    return fetch(file).then(function (res) {
      if (!res.ok) {
        throw new Error("Could not load " + file.replace(/^.*\//, "") +
          " (" + res.status + ").");
      }
      return res.json();
    });
  }

  function showLoadError(el, err) {
    el.innerHTML = '<p class="section-loading">' + err.message + "</p>";
  }

  /* Normalise line endings and strip a leading YAML frontmatter block.
     knowledge/paper.md is headerless and starts with its H1. */
  function stripFrontmatter(text) {
    return text.replace(/\r\n?/g, "\n").replace(/^---\n[\s\S]*?\n---\n?/, "");
  }

  /* Flat scalar fields of a leading frontmatter block. Enough for the page
     status line; nested structures are not used there and stay unparsed. */
  function readFrontmatter(text) {
    var m = /^---\n([\s\S]*?)\n---/.exec(text.replace(/\r\n?/g, "\n"));
    if (!m) {
      return {};
    }
    var out = {};
    m[1].split("\n").forEach(function (line) {
      var f = /^([a-zA-Z][\w-]*):[ \t]*(.*)$/.exec(line);
      if (f && f[2]) {
        out[f[1]] = f[2].trim().replace(/^["']|["']$/g, "");
      }
    });
    return out;
  }

  /* ---- Clipboard ---- */

  function copyText(text, btn, resetLabel) {
    function done() {
      if (btn) {
        btn.textContent = "Copied";
        setTimeout(function () { btn.textContent = resetLabel; }, 1500);
      }
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done, function () { fallbackCopy(text, done); });
    } else {
      fallbackCopy(text, done);
    }
  }

  function fallbackCopy(text, done) {
    var ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand("copy"); } catch (e) { /* ignore */ }
    document.body.removeChild(ta);
    if (done) { done(); }
  }

  function addCodeCopyButtons(el) {
    el.querySelectorAll("pre").forEach(function (pre) {
      if (pre.querySelector(".code-copy")) {
        return;
      }
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "code-copy";
      btn.textContent = "Copy";
      btn.addEventListener("click", function () {
        var code = pre.querySelector("code");
        copyText(code ? code.textContent : pre.textContent, btn, "Copy");
      });
      pre.appendChild(btn);
    });
  }

  /* ---- YouTube click-to-load facade ---- */

  function buildVideoFacade(youtubeId, title) {
    var wrap = document.createElement("div");
    wrap.className = "video-embed";

    var facade = document.createElement("button");
    facade.type = "button";
    facade.className = "video-facade";
    facade.setAttribute("aria-label", "Load video: " + title);
    facade.innerHTML =
      '<span class="video-facade-title">' + title + "</span>" +
      '<span class="video-facade-note">A click loads the video from youtube-nocookie.com. ' +
      "Before the click no connection to YouTube is made and no tracking takes place.</span>" +
      '<span class="video-facade-play">Load video</span>';

    facade.addEventListener("click", function () {
      var iframe = document.createElement("iframe");
      iframe.src = "https://www.youtube-nocookie.com/embed/" + youtubeId + "?autoplay=1&rel=0";
      iframe.setAttribute("title", title);
      iframe.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");
      iframe.setAttribute("allowfullscreen", "");
      wrap.innerHTML = "";
      wrap.appendChild(iframe);
    });

    wrap.appendChild(facade);
    return wrap;
  }

  /* Update the hash without triggering the global hashchange reload handler. */
  var suppressHashChange = false;

  function setHashSilently(anchor) {
    suppressHashChange = true;
    window.location.hash = anchor;
    setTimeout(function () { suppressHashChange = false; }, 0);
  }

  function hashChangeSuppressed() {
    return suppressHashChange;
  }

  /* Frontmatter of the rendered content pages, keyed by page id. Written by
     renderMarkdownInto, read by the page status line. */
  A.pageFrontmatter = {};

  A.escapeHtml = escapeHtml;
  A.slugify = slugify;
  A.fetchMarkdown = fetchMarkdown;
  A.fetchJson = fetchJson;
  A.showLoadError = showLoadError;
  A.stripFrontmatter = stripFrontmatter;
  A.readFrontmatter = readFrontmatter;
  A.copyText = copyText;
  A.addCodeCopyButtons = addCodeCopyButtons;
  A.buildVideoFacade = buildVideoFacade;
  A.setHashSilently = setHashSilently;
  A.hashChangeSuppressed = hashChangeSuppressed;
})(window.PromptotypingApp = window.PromptotypingApp || {});
