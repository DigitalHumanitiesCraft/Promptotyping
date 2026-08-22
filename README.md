# Promptotyping

[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.14160875.svg)](https://doi.org/10.5281/zenodo.14160875)

Promptotyping is an iterative, knowledge-driven method for developing project-specific digital research artefacts from structured research data and maintained project knowledge through Context Engineering and Agentic Engineering, organised around four recurrent forms of work (Preparation, Exploration, Distillation, Implementation). In the canonical repository convention, a `knowledge/` folder holds versioned Knowledge Documents for requirements, data, decisions, and domain knowledge. This curated knowledge artefact guides implementation, persists across sessions, and receives consequential findings through write-back. The method also permits another inspectable and revisable documentary environment. A Critical Expert in the Loop verifies LLM output at defined points.

This repository is the public method portal and the repository of the method paper, which is written in [research-artefacts/promptotyping-paper.md](research-artefacts/promptotyping-paper.md). The portal at **https://dhcraft.org/Promptotyping/** integrates the specification, case evidence, tutorial, templates, canonical skill, and paper. It also serves the templates as stable, machine-readable addresses.

## The method in brief

The four forms of work move from gathering raw material (Preparation) over probing what the data affords (Exploration) and distilling the findings into selective Markdown documents (Distillation) to iterative, verified development with an agentic coding tool (Implementation). Knowledge Document is the general term for a document of this kind, and it specialises into three types according to the kind of knowledge it holds, each with a diagnostic rule attached. Declarative Documents hold knowledge about the subject matter. Process Documents divide current handoff inputs, accepted future work, and the curated provenance index between `handoff.md`, `plan.md`, and `journal.md`. Action Documents, which the paper calls agent instruction documents, hold knowledge about how to act (`CLAUDE.md`, `AGENTS.md`); check these when output is formally wrong.

The full argument is the method paper; an overview is at [dhcraft.org/Promptotyping/#ueberblick](https://dhcraft.org/Promptotyping/#ueberblick).

## The method paper

**Pollin, Christopher: Promptotyping. Translating Research Data into Research Artefacts through Context Engineering and Agentic Engineering** (version 0.9.1, author-review draft, 22 August 2026; in preparation).

The complete current text is a single Markdown Research Artefact, [research-artefacts/promptotyping-paper.md](research-artefacts/promptotyping-paper.md), written and revised in this repository. [knowledge/paper-specification.md](knowledge/paper-specification.md) holds everything decided, checked, and still open about it, and the Grounded Vault under [vault/](vault/) anchors its supporting claims in sources. The method portal renders the Research Artefact directly on its Paper page with an inline glossary.

The current repository state is **version 0.9.1, an author-review draft of 22 August 2026**. It incorporates the revisions made after the publicly circulated version 0.9 and establishes the baseline for complete sentence-level author review. Version 1.0 is reserved for a state in which the author has accepted every sentence in its paragraph and subsection context, the canonical terminology, the evidence and apparatus, the complete rendered text, and the release decision. The public review copy announced on 31 July 2026 remains version 0.9; its comments are evidence for revision and do not supersede the canonical repository text.

The open review round runs on the circulated version 0.9 copy, which serves as the external comment surface. The [research artefact](research-artefacts/promptotyping-paper.md) stays canonical. A reviewer comment becomes a change only through a recorded decision and an edit there. The author-review protocol and the current divergence between the two versions are recorded in [knowledge/paper-specification.md](knowledge/paper-specification.md).

## Videos

Two introductions to the method (German): the methodology explainer [Promptotyping, Teil 1](https://youtu.be/8sUe4Jkh3uQ) covering the four forms of work, the documents, and Critical Expert in the Loop, and the live demo [Teil 2](https://youtu.be/hd_a-NBO_S4), building a functional dashboard from 76 Excel files with Claude Code.

## What is in this repository

| Content | Location | On the site |
|---|---|---|
| Method paper (English, version 0.9.1, author-review draft) | [research-artefacts/promptotyping-paper.md](research-artefacts/promptotyping-paper.md), specification in [knowledge/paper-specification.md](knowledge/paper-specification.md) | [#paper](https://dhcraft.org/Promptotyping/#paper) |
| Evidence layer of the paper (Grounded Vault) | [vault/](vault/) | [#vault](https://dhcraft.org/Promptotyping/#vault) |
| Knowledge Document templates | [_content/promptotyping-document/](_content/promptotyping-document/) | [#vorlagen](https://dhcraft.org/Promptotyping/#vorlagen) |
| Convention (naming contract, frontmatter schema, structure) | [_content/konvention.md](_content/konvention.md) | [#konvention-v0.1](https://dhcraft.org/Promptotyping/#konvention-v0.1) |
| Technology baseline for static research tools (draft) | [_content/technology-baseline.md](_content/technology-baseline.md) | — |
| Curated case studies | [data/case-studies.json](data/case-studies.json), depth pages in [_content/case-studies/](_content/case-studies/) | [#use-cases](https://dhcraft.org/Promptotyping/#use-cases) |
| Guided first iteration | [_content/tutorial.md](_content/tutorial.md) | [#tutorial](https://dhcraft.org/Promptotyping/#tutorial) |
| Method extensions from practice | [_content/praxis.md](_content/praxis.md) | [#praxis](https://dhcraft.org/Promptotyping/#praxis) |
| Canonical Promptotyping skill | [skills/promptotyping/](skills/promptotyping/) | [#skills-promptotyping](https://dhcraft.org/Promptotyping/#skills-promptotyping) |
| Reusable system prompts (coding, writing) | [_content/skills/](_content/skills/) | [#skills](https://dhcraft.org/Promptotyping/#skills) |
| Glossary | [data/glossar.json](data/glossar.json), [_content/glossar.md](_content/glossar.md) | [#glossar](https://dhcraft.org/Promptotyping/#glossar) |
| Durable site knowledge base (self-application) | [knowledge/](knowledge/) | — |
| Live Process Inbox | [knowledge/handoff.md](knowledge/handoff.md) | — |
| Source material, including video scripts | [source-material/](source-material/) | — |
| Dated reports and transfer context | [snapshots/](snapshots/), [handoffs/](handoffs/) | — |

### Templates

The templates of the catalogue structure the documents of a Promptotyping knowledge base. Each is addressable under a stable latest URL of the pattern `https://dhcraft.org/Promptotyping/promptotyping-document/{slug}` and readable as raw Markdown under the machine address pattern below. A template applies only when its trigger holds; a methods repository without data processing, like this one, skips `data`, and the reasoning is documented in its knowledge base.

| Slug | Function | Type |
|---|---|---|
| [index](_content/promptotyping-document/index.md) | Navigation and glossary of the knowledge base | Declarative |
| [project](_content/promptotyping-document/project.md) | Charter | Declarative |
| [data](_content/promptotyping-document/data.md) | Material | Declarative |
| [specification](_content/promptotyping-document/specification.md) | Specification (requirements, decisions) | Declarative |
| [user-stories](_content/promptotyping-document/user-stories.md) | Specification (narrative scenarios) | Declarative |
| [action-layer](_content/promptotyping-document/action-layer.md) | Agent instructions (`CLAUDE.md`) | Action |
| [architecture](_content/promptotyping-document/architecture.md) | Architecture | Declarative |
| [technology](_content/promptotyping-document/technology.md) | Technology baseline for an artefact family | Action |
| [domain-knowledge](_content/promptotyping-document/domain-knowledge.md) | Domain knowledge and reasoning layer | Declarative |
| [design](_content/promptotyping-document/design.md) | Design | Declarative |
| [testing](_content/promptotyping-document/testing.md) | Quality assurance | Action |
| [verification](_content/promptotyping-document/verification.md) | Adversarial verification of claims | Declarative |
| [journal](_content/promptotyping-document/journal.md) | Provenance | Process |
| [handoff](_content/promptotyping-document/handoff.md) | Process Inbox | Process |
| [plan](_content/promptotyping-document/plan.md) | Planning | Process |
| [report](_content/promptotyping-document/report.md) | Reporting | Declarative (snapshot) |
| [integration](_content/promptotyping-document/integration.md) | Cross-project contracts | Declarative |

Template versions live in the mirrors' frontmatter and in [data/promptotyping-documents.json](data/promptotyping-documents.json), which is the catalogue this table follows.

### Use cases

The gallery at [#use-cases](https://dhcraft.org/Promptotyping/#use-cases) curates publicly documented projects built with the method; each card links the project's GitHub repository and, where available, live demo and video. The underlying data is [data/case-studies.json](data/case-studies.json), and the cases marked there with `deep_page` carry a depth page under [_content/case-studies/](_content/case-studies/).

## Machine access

Repositories that apply the method declare which template a document follows in a `template:` frontmatter field:

```yaml
template:
  name: Vorlage Datengrundlage
  version: <current template version, see data/promptotyping-documents.json>
  url: https://dhcraft.org/Promptotyping/promptotyping-document/data
  alias: https://dhcraft.org/Promptotyping/#promptotyping-document-data
```

The `url` resolves in a browser via `404.html` routing and requires JavaScript. For HTTP retrieval without JavaScript, the canonical machine address is the static Markdown file:

```
https://dhcraft.org/Promptotyping/_content/promptotyping-document/{slug}.md
```

`.nojekyll` in the repository root is required for GitHub Pages to publish `_content/`. Details in [knowledge/specification.md](knowledge/specification.md) (A4, A5, ADR-10).

## Self-application

The site is both specification and application of the method. The knowledge base in [knowledge/](knowledge/) follows the templates the site publishes, each document carrying the `template:` field that points back to its own specification. The paper's supporting claims are anchored in the Grounded Vault under [vault/](vault/), which links every claim to a source with provenance.

## Repository layout

```
index.html        single-shell entry for the method portal
404.html          subpath-to-hash routing fallback
CLAUDE.md         action layer of this repository (its own instance of the action-layer template)
.nojekyll         required so GitHub Pages publishes _content/
knowledge/        knowledge base of the site itself
research-artefacts/  method paper
skills/           canonical Promptotyping skill
_content/         Markdown content (method pages, templates, case studies, glossary)
assets/           CSS, JS, vendored libraries, fonts, logo
data/             JSON data (case studies, glossary, template table)
vault/            Grounded Vault instance, evidence layer of the paper
```

No framework, no build step; marked.js and js-yaml are vendored. The reasoning is documented in the [technology baseline](_content/technology-baseline.md).

## Local development

```bash
git clone https://github.com/DigitalHumanitiesCraft/Promptotyping.git
cd Promptotyping
python -m http.server 8000
```

Open http://localhost:8000. Development history is in [knowledge/journal.md](knowledge/journal.md).

## Citation

This is the repository of the method paper. Pollin, Christopher: Promptotyping. Translating Research Data into Research Artefacts through Context Engineering and Agentic Engineering (in preparation); the text is developed in [research-artefacts/promptotyping-paper.md](research-artefacts/promptotyping-paper.md), its evidence layer in [vault/](vault/).

For the repository and site: Pollin, Christopher; Steiner, Christian: Promptotyping. Zenodo. https://doi.org/10.5281/zenodo.14160875 (concept DOI, always resolves to the current version)

The method originates in the author's dissertation and was first published in blog form:

- Pollin, Christopher: Modelling, Operationalising and Exploring Historical Information. Using Historical Financial Sources as an Example. Dissertation, University of Graz 2025. https://unipub.uni-graz.at/obvugrhs/12127700
- Pollin, Christopher: Promptotyping. Von der Idee zur Anwendung. DHCraft Blog, 24.04.2025. https://dhcraft.org/excellence/blog/Promptotyping/
- Pollin, Christopher: Promptotyping. Zwischen Vibe Coding, Vibe Research und Context Engineering. Blogpost, L.I.S.A. Wissenschaftsportal der Gerda Henkel Stiftung, 17.01.2026. https://lisa.gerda-henkel-stiftung.de/digitale_geschichte_pollin

## Licence

Code (HTML, CSS, JavaScript, and the Python tooling under [vault/tools/](vault/tools/)) is licensed under the MIT License, see [LICENSE](LICENSE). Content (Markdown under [_content/](_content/), [knowledge/](knowledge/), the Grounded Vault under [vault/](vault/), and the prose texts of the site) is licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). The split follows the carrier; source that runs is MIT, text that is read is CC BY 4.0. This repository contains no third-party research data.
