/* Preserve old manuscript routes without distributing the manuscript. */
(function (A) {
  "use strict";

  A.renderPaper = function () {
    const host = document.getElementById(A.PAPER_HOST_ID);
    if (host) {
      host.classList.remove("placeholder-section");
      host.innerHTML = "<h1>Manuscript unavailable</h1>" +
        "<p>The manuscript was removed from this website on 14 October 2026. " +
        'The <a href="#specification">method specification</a> and ' +
        '<a href="#use-cases">documented applications</a> remain available.</p>';
    }
    return Promise.resolve();
  };
})(window.PromptotypingApp = window.PromptotypingApp || {});
