---
title: Technology Baseline. The static website as a research tool
slug: technology-baseline
status: draft
language: en
version: 0.2
created: 2026-07-23
updated: 2026-07-26
authors: [Christopher Pollin]
generated-with: Claude Code (Claude Fable 5)
machine-url: https://dhcraft.org/Promptotyping/_content/technology-baseline.md
---

# Technology Baseline. The static website as a research tool

This document carries the project-independent technology knowledge for the method's most frequent artefact type, the self-contained static web tool. It is the layer of rationale that the `architecture.md` of a project instance refers to instead of restating the stack argument in every repository, and the instance then documents only its deviations. The scholarly short form of the argument stands in the method paper (Pollin 2026, section 4.2); this document is the operative long form with the concrete rules.

## Why the static form

A Promptotyping artefact is as a rule a set of HTML, CSS and JavaScript files, with the research data embedded or loaded from flat files, runnable from a local folder and deployable on any static host. Three properties ground this default.

The first is generability. Static artefacts can be produced by agentic coding tools in a single pass, which keeps the derivation from the Knowledge Documents to the artefact inspectable. Every additional layer, whether a build chain, a server component or a database, lengthens the derivation and withdraws parts of it from inspection.

The second is publishability. A static artefact needs no infrastructure. GitHub Pages or any web space suffices, which matches the resource situation of the individual researchers and small projects the method addresses.

The third is durability. The field's own sustainability discourse, minimal computing (Risam and Gil 2022) and the Endings principles, arrives at the same finding. Digital artefacts survive most reliably with the fewest moving parts, without server-side dependencies and without build chains that rot. A static artefact from 2026 still renders once nobody maintains it any more.

## The rules

### No build step

`git clone` and opening the browser suffices to run the artefact locally. A local web server (`python -m http.server`) is the only admissible prerequisite, because browsers block `fetch` on `file://` URLs. npm dependencies, bundlers, transpilers and CSS preprocessors are excluded. The reason lies in the decay of tool chains, since a build configuration written today stops running within a few years, and every toolchain repair is maintenance work a research prototype does not get. Project-internal scripts that check the vault or the data are untouched by this, because they build nothing for delivery.

### Vanilla JavaScript as the default

No framework. Frameworks age fast, resist inspection by those who reuse the artefact, and offer nothing an exploratory research instrument needs; the native DOM, `fetch`, ES modules and `location.hash` cover the demand. A method-specific argument comes on top. Because the prototype can be regenerated from the Knowledge Documents, the target language of the regeneration has to stay stable over the long term, and the browser platform is the most stable runtime environment there is, while a framework API is not.

### Compromise rule for libraries

Where a problem is algorithmically deep, a single library may be vendored locally. Four criteria have to hold together:

1. The problem lies seriously beyond a reasonable vanilla implementation (Markdown parsing, YAML parsing, map rendering, complex charts).
2. The library is self-contained and vendorable as a single file without a build step.
3. The licence permits redistribution.
4. The removal path is documented; the repository states what fails if the library is removed and how the artefact then degrades.

Vendored means lying in the repository, never loaded from a CDN, since a CDN is an external runtime dependency and violates the offline rule. This site itself carries two libraries under this rule, marked.js for Markdown rendering and js-yaml for the frontmatter parsing of the frontmatter inspector.

### Precomputation instead of runtime load

Heavy computation runs before delivery. The artefact ships derived data, typically as JSON, and the pipelines stay upstream in the repository. The browser renders and filters, and it computes no analyses. This keeps the artefact fast, makes the computation inspectable as a script, and separates deterministic work (script) from generative work (LLM), a separation that holds methodologically as well, since no model does what a script can do deterministically.

### No external calls at runtime

The artefact works offline. No external APIs, no web fonts from third-party servers, no analytics, no CDN resources. The rule is at once a longevity, a privacy and a security property, since every external endpoint is a point of failure, a tracking vector and an attack surface. Where embedded third-party content is unavoidable, as with videos, click-to-load applies with a privacy-preserving variant (`youtube-nocookie.com`), and before the click no request leaves the page.

### Security at the trust boundaries

Static artefacts have a small but real attack surface. No secrets, tokens or credentials in client code, including the git history. User input from paste fields, URL parameters and hash fragments is validated before it reaches the DOM or the routing, and `innerHTML` with unchecked input is excluded. Personal data of third parties belongs neither in the delivered data nor in example datasets; where research data concerns persons, the instance settles the legal position before publication.

### Provenance declaration

Every artefact discloses its conditions of production, the way an edition discloses its editorial guidelines. It declares that it was generated, from which documents, with which models and tools, and how it was verified. The carriers are the frontmatter of the Knowledge Documents (`generated-with`, `method`, `template`) and a visible place in the artefact itself, in the footer or the imprint. For citability, `CITATION.cff` and `codemeta.json` go into the repository, derivable deterministically from the frontmatter; a Zenodo DOI presupposes a release.

## Sustainability and FAIR4RS

Measured against the FAIR4RS principles (Chue Hong et al. 2022) the artefact type is uneven, and the pattern is instructive. Accessibility holds by construction, since artefact and source are retrievable over HTTPS without proprietary tooling. Reusability is the method's strength, since the detailed provenance that R1.2 demands arises in journal, documents and repository history as a by-product of working. Findability fails by default, since without a persistent identifier, versioned releases and machine-readable citation metadata a prototype stays unfindable. That gap is publication work and separable from the artefact, and an archived release with a DOI together with generated citation metadata closes it without touching the artefact.

## Limits of the format and the handover point

The limits are part of the definition of the artefact type. Client-side processing bounds the data volume, and the bound moves with the data format and the memory of the reading machine. With flat JSON or CSV files it is reached early, and the answer is to move work upstream, so that a script precomputes, aggregates or samples and the artefact loads the result. Columnar formats with WebAssembly query engines shift the bound by orders of magnitude, at the price of a vendored engine that the compromise rule must cover. Collaborative or server-mediated workflows, write persistence beyond the browser, and authentication lie outside the format. Where a project grows past these limits it has outgrown prototyping and arrived in software development; from there Research Software Engineering carries it with its standards for testing, maintenance and operation, and the method's document set becomes the handover package.

## Application in a project instance

The `architecture.md` of a project refers to this document as its baseline and carries only what is project-specific, meaning the concrete stack, the data formats, the module structure, and every deviation from the rules with its reason. A deviation without a documented reason is a finding for the review. The reference uses this document's machine address (`machine-url` in the frontmatter), so that a coding agent can resolve the baseline as well.

## Sources

- Pollin, Christopher: Promptotyping. Translating Research Data into Research Artefacts with Context and Agentic Engineering. 2026 (in preparation), section 4.2.
- Risam, Roopika; Gil, Alex: Introduction. The Questions of Minimal Computing. In: Digital Humanities Quarterly 16,2 (2022). https://www.digitalhumanities.org/dhq/vol/16/2/000646/000646.html
- The Endings Project: Principles for Digital Longevity. https://endings.uvic.ca/principles.html
- Chue Hong, Neil P.; Katz, Daniel S.; Barker, Michelle et al.: FAIR Principles for Research Software (FAIR4RS Principles). Research Data Alliance 2022. https://doi.org/10.15497/RDA00068
