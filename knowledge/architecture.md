---
title: Architecture
project:
  name: Promptotyping specification
  repository: https://github.com/DigitalHumanitiesCraft/Promptotyping
status: complete
language: en
version: "2.0"
created: 2026-05-09
updated: 2026-11-14
authors: [Christopher Pollin]
generated-with: Claude Code (Claude Fable 5.2, Claude Opus 5.5)
method:
  name: Promptotyping
  url: https://dhcraft.org/Promptotyping/
template:
  name: Architecture template
  version: 0.4
  url: https://dhcraft.org/Promptotyping/templates/architecture.md
topics: ["[[Web Architecture]]", "[[Static Sites]]"]
knowledge-sources:
  standards:
    WCAG 2.1: https://www.w3.org/TR/WCAG21/
  vocabularies:
    GitHub Pages: https://docs.github.com/en/pages
related: [INDEX, specification, design, journal]
---

# Architecture

The repository is a static site without a build step, one HTML page beside folders of Markdown that GitHub Pages serves as they are. It is kept this simple because cloning the repository and starting a static server suffices to run it and no tool chain can decay under it. What the site must do is in [specification.md](specification.md), how it looks in [design.md](design.md).

## Stack

The page is HTML and CSS, and its only script is the copy button of the shared DHCraft files. The page addresses its own stylesheets and this script with a version in the query string, which changes whenever one of them changes, so that a browser does not pair a new page with an older cached file. There is no framework, no package manager, no bundler and no runtime CDN, and any library is vendored into `assets/` under the rule for libraries in [practice.md](practice.md#the-artefact-and-its-boundary). Fonts and the shared DHCraft design files lie in `assets/dhcraft/`, unchanged copies from the brand-assets repository. The documents are Markdown with YAML frontmatter, and GitHub renders them for human readers.

## Components

| Component | Purpose | Interface |
|---|---|---|
| `index.html` | The single page | Static markup that reads without JavaScript |
| `404.html` | The page GitHub Pages serves for an address that is no file | Static markup with a short inline script that leads the old address of a template to its new one |
| `assets/` | Styles, fonts, the DHCraft mark, the two figures and the copy script | Loaded by the page from the same origin |
| `templates/` | The eleven templates and the convention | One Markdown file per slug, `templates/<slug>.md` |
| `case-studies/` | The documented use cases | One Markdown file per case |
| `knowledge/` | This project knowledge base, published as the worked example | Markdown files, entry point `INDEX.md` |

## Data flow

The Markdown files are written in the repository, the page links them, and the workflow copies them into the published tree unchanged. The one thing made at delivery is the archive `downloads/promptotyping-templates.zip`, which the workflow packs from the templates, the convention and the licence. Readers open a document through its view on GitHub, which renders it, while the raw file stays addressable on the site at the same path, so that an agent receives the Markdown with HTTP status 200 and without JavaScript.

## Interfaces to other projects or systems

### The Promptotyping skill

Direction. This repository delivers, the skill repository receives.

Exchange format. The skill reads a template from `https://dhcraft.org/Promptotyping/templates/<slug>.md` before an agent creates a document, and this repository links the skill repository from the page.

Responsibility. This repository is responsible for the templates and the convention and for keeping their addresses stable. The skill repository is responsible for the skill.

Acceptance. Every template slug the skill names resolves on the site.

Source of truth. This repository for the templates and the convention, the skill repository for the skill.

### Repositories that apply the practice

Direction. This repository delivers.

Exchange format. A knowledge document names the template it follows in its `template:` field, with name, version and URL.

Responsibility. Addresses that foreign documents carry are never renamed without a decision on how the old ones resolve.

Acceptance. A URL in a `template:` field of a filled template resolves.

Source of truth. This repository.

## Security

The site has no backend, no database, no forms that send data and no tracking, so its attack surface is the content it serves. The page loads nothing from other origins before a user action. What it publishes is curated, because GitHub Pages serves every file the workflow copies, and the workflow therefore copies an explicit list of paths and never the whole repository. The accepted risk is that a document published from `knowledge/` carries material not meant for readers, which the publication check before a push guards against.

## Accessibility

The page aims at WCAG 2.1 level AA. The minima are stated in [design.md](design.md#accessibility).

## Repository structure

Beside the components above, the repository root holds these files.

| Path | Function |
|---|---|
| `README.md` | What Promptotyping is and how to start, for readers on GitHub |
| `CHANGELOG.md` | Changes per release |
| `CITATION.cff` | Citation metadata with the concept DOI |
| `LICENSE` | The MIT licence for code and the statement that text and templates stand under CC BY 4.0 |
| `CLAUDE.md` | The agent instructions of this repository |
| `.github/workflows/pages.yml` | The publishing workflow |

## Build and deployment

Locally the repository root is served with any static server, for example `python -m http.server 8000`, and opened at `http://localhost:8000`. A push to `main` runs `.github/workflows/pages.yml`, which assembles the published tree from an explicit list of paths and uploads it to GitHub Pages without Jekyll processing. The list holds `index.html`, `404.html`, `LICENSE`, `CITATION.cff`, `assets/`, `templates/`, `case-studies/` and `knowledge/`, and a new folder the page links has to be added to it. The workflow then packs `templates/*.md` and `LICENSE` into `downloads/promptotyping-templates.zip`, which the page offers for download and `.gitignore` keeps out of the repository. `README.md`, `CHANGELOG.md`, `CLAUDE.md` and the workflow itself stay in the repository. The workflow file is the source of truth for what is published, and the site is served at https://dhcraft.org/Promptotyping/ through the DHCraft domain.
