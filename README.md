# Promptotyping

[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.14160875.svg)](https://doi.org/10.5281/zenodo.14160875)

## Purpose

Promptotyping is an iterative, knowledge-driven method for developing project-specific digital research artefacts from structured research data and maintained project knowledge through Context Engineering and Agentic Engineering, organised around four recurrent forms of work (Preparation, Exploration, Distillation, Implementation). In the canonical repository convention, a `knowledge/` folder holds versioned Knowledge Documents for requirements, data, decisions, and domain knowledge. This curated knowledge artefact guides implementation, persists across sessions, and receives consequential findings through write-back. The method also permits another inspectable and revisable documentary environment. A Critical Expert in the Loop verifies LLM output at defined points.

This repository is the public method portal. It holds the method specification and its supporting material, the templates, examples, method site and tools. The portal at **https://dhcraft.org/Promptotyping/** integrates the specification, case evidence, tutorial, templates and canonical skill. It also serves the templates as stable, machine-readable addresses.

### The method in brief

The four forms of work move from gathering raw material (Preparation) over probing what the data affords (Exploration) and distilling the findings into selective Markdown documents (Distillation) to iterative, verified development with an agentic coding tool (Implementation). Knowledge Document is the general term for a document of this kind, and it specialises into three types according to the kind of knowledge it holds, each with a diagnostic rule attached. Declarative Documents hold knowledge about the subject matter. Process Documents divide current handoff inputs, accepted future work, and the curated provenance index between `handoff.md`, `plan.md`, and `journal.md`. Action Documents, which the paper calls agent instruction documents, hold knowledge about how to act (`CLAUDE.md`, `AGENTS.md`); check these when output is formally wrong.

An overview of the method is at [dhcraft.org/Promptotyping/#overview](https://dhcraft.org/Promptotyping/#overview).

### The method paper

The method paper is maintained separately and will be published in the journal. The manuscript and the material bound to it, its specification, review tooling, figures and audits, are not part of this repository. On 14 October 2026 the author removed the manuscript from the public repository and website, and on 28 October 2026 the remaining manuscript-bound material followed. Earlier public availability remains part of the publication history.

## Data and rights

This repository contains no third-party research data. Its material basis is recorded in [knowledge/project.md](knowledge/project.md). The cleaned German video transcripts under [source-material/](source-material/) and the sources of the Grounded Vault under [vault/](vault/) are carried with their provenance, and benchmark tasks hold their own data contracts and provenance in the [benchmark authoring area](research-artefacts/promptotyping-bench/README.md).

## Use

The portal is published with GitHub Pages directly from the repository root at **https://dhcraft.org/Promptotyping/**.

### Local development

```bash
git clone https://github.com/DigitalHumanitiesCraft/Promptotyping.git
cd Promptotyping
python -m http.server 8000
```

Open http://localhost:8000.

### Videos

Two introductions to the method (German): the methodology explainer [Promptotyping, Teil 1](https://youtu.be/8sUe4Jkh3uQ) covering the four forms of work, the documents, and Critical Expert in the Loop, and the live demo [Teil 2](https://youtu.be/hd_a-NBO_S4), building a functional dashboard from 76 Excel files with Claude Code.

### What is in this repository

| Content | Location | On the site |
|---|---|---|
| Evidence layer of the method (Grounded Vault) | [vault/](vault/) | [#vault](https://dhcraft.org/Promptotyping/#vault) |
| Promptotyping Bench (draft research programme) | [Proposal](research-artefacts/promptotyping-bench-proposal.md), [plan](knowledge/benchmark-plan.md), [task and tooling index](research-artefacts/promptotyping-bench/README.md), [research map](vault/30_assertions/MOC-Benchmark.md) | No dedicated portal page |
| Knowledge Document templates | [_content/promptotyping-document/](_content/promptotyping-document/) | [#vorlagen](https://dhcraft.org/Promptotyping/#vorlagen) |
| Convention (naming contract, frontmatter schema, structure) | [_content/konvention.md](_content/konvention.md) | [#konvention-v0.1](https://dhcraft.org/Promptotyping/#konvention-v0.1) |
| Technology baseline for static research tools (draft) | [_content/technology-baseline.md](_content/technology-baseline.md) | — |
| Curated case studies | [data/case-studies.json](data/case-studies.json), depth pages in [_content/case-studies/](_content/case-studies/) | [#use-cases](https://dhcraft.org/Promptotyping/#use-cases) |
| Guided first iteration | [_content/tutorial.md](_content/tutorial.md) | [#tutorial](https://dhcraft.org/Promptotyping/#tutorial) |
| Method extensions from practice | [_content/praxis.md](_content/praxis.md) | [#praxis](https://dhcraft.org/Promptotyping/#praxis) |
| Canonical Promptotyping skill | [DigitalHumanitiesCraft/promptotyping-skill](https://github.com/DigitalHumanitiesCraft/promptotyping-skill) (own repository) | [#skills-promptotyping](https://dhcraft.org/Promptotyping/#skills-promptotyping) |
| Reusable system prompts (coding, writing) | [_content/skills/](_content/skills/) | [#skills](https://dhcraft.org/Promptotyping/#skills) |
| Glossary | [data/glossar.json](data/glossar.json), [_content/glossar.md](_content/glossar.md) | [#glossar](https://dhcraft.org/Promptotyping/#glossar) |
| Durable site knowledge base (self-application) | [knowledge/](knowledge/) | — |
| Live Process Inbox | [knowledge/handoff.md](knowledge/handoff.md) | — |
| Source material, including video scripts | [source-material/](source-material/) | — |
| Dated reports and audits | [snapshots/](snapshots/) | — |

#### Templates

The templates of the catalogue structure the documents of a Promptotyping knowledge base. Each is addressable under a stable latest URL of the pattern `https://dhcraft.org/Promptotyping/promptotyping-document/{slug}` and readable as raw Markdown under the machine address pattern below. A template applies only when its trigger holds. This method portal records its material basis in `knowledge/project.md`; benchmark tasks hold their own data contracts and provenance in the separate authoring area.

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

#### Use cases

The gallery at [#use-cases](https://dhcraft.org/Promptotyping/#use-cases) curates publicly documented projects built with the method; each card links the project's GitHub repository and, where available, live demo and video. The underlying data is [data/case-studies.json](data/case-studies.json), and the cases marked there with `deep_page` carry a depth page under [_content/case-studies/](_content/case-studies/).

### Machine access

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

### Repository layout

```
index.html        single-shell entry for the method portal
404.html          subpath-to-hash routing fallback
CLAUDE.md         action layer of this repository (its own instance of the action-layer template)
.nojekyll         required so GitHub Pages publishes _content/
knowledge/        knowledge base of the site itself
research-artefacts/  benchmark proposal and benchmark authoring area
source-material/  cleaned video transcripts
snapshots/        dated reports and audits
schema/           JSON Schema of the frontmatter core
tools/            consistency check, glossary build, tests
_content/         Markdown content (method pages, templates, case studies, glossary)
assets/           CSS, JS, vendored libraries, fonts, logo
data/             JSON data (case studies, glossary, template table, vault index)
vault/            Grounded Vault instance, evidence layer of the method
```

No framework, no build step; marked.js and js-yaml are vendored. The reasoning is documented in the [technology baseline](_content/technology-baseline.md).

## How this was built

The site applies the method it specifies. Its knowledge base in [knowledge/](knowledge/INDEX.md) follows the templates the site publishes, each document carrying the `template:` field that points back to its own specification, and [CLAUDE.md](CLAUDE.md) is the agent's entry point. The harness was Claude Code. The Co-Authored-By trailers of the commits name Claude without a model for the first phase from September to November 2025, and later Claude Sonnet 4.6, Claude Opus 4.7, Claude Opus 4.8, Claude Fable 5, Claude Opus 5 and Claude Opus 5.5; commits without a trailer do not record whether an agent was involved.

Checking is layered. Verification runs `tools/check_consistency.py`, which decides by rule where the site states the same thing in more than one place, together with the regression tests of the tools and the validator of the Grounded Vault ([knowledge/verification.md](knowledge/verification.md)). The method's supporting claims are anchored in the Grounded Vault under [vault/](vault/), which links every assertion to a source with provenance. Where agreement in substance is not decidable by rule, the check stays with the Critical Expert, and [knowledge/verification.md](knowledge/verification.md) records it as outstanding. The development history is in [knowledge/journal.md](knowledge/journal.md).

## Limits

- The Promptotyping Bench is a draft research programme. Its tooling tests supply engineering evidence and no study result ([knowledge/benchmark-plan.md](knowledge/benchmark-plan.md)).
- The automatic checks decide consistency between the site's own statements. Whether the method description is right in substance remains a matter of scholarly judgement.
- The templates other than `technology` are mirrors of the operator's vault and stay German.

## Licence and citation

This repository documents the Promptotyping method. The method paper is maintained separately and will be published in the journal.

For the repository and site: Pollin, Christopher; Steiner, Christian: Promptotyping. Zenodo. https://doi.org/10.5281/zenodo.14160875 (concept DOI, always resolves to the current version)

The method originates in the author's dissertation and was first published in blog form:

- Pollin, Christopher: Modelling, Operationalising and Exploring Historical Information. Using Historical Financial Sources as an Example. Dissertation, University of Graz 2025. https://unipub.uni-graz.at/obvugrhs/12127700
- Pollin, Christopher: Promptotyping. Von der Idee zur Anwendung. DHCraft Blog, 24.04.2025. https://dhcraft.org/excellence/blog/Promptotyping/
- Pollin, Christopher: Promptotyping. Zwischen Vibe Coding, Vibe Research und Context Engineering. Blogpost, L.I.S.A. Wissenschaftsportal der Gerda Henkel Stiftung, 17.01.2026. https://lisa.gerda-henkel-stiftung.de/digitale_geschichte_pollin

Code (HTML, CSS, JavaScript, and the Python tooling under [tools/](tools/), [vault/tools/](vault/tools/) and [research-artefacts/promptotyping-bench/](research-artefacts/promptotyping-bench/)) is licensed under the MIT License, see [LICENSE](LICENSE). Content (Markdown under [_content/](_content/), [knowledge/](knowledge/), the Grounded Vault under [vault/](vault/), and the prose texts of the site) is licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). The split follows the carrier; source that runs is MIT, text that is read is CC BY 4.0. This repository contains no third-party research data.
