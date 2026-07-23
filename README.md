# Promptotyping

[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.14160875.svg)](https://doi.org/10.5281/zenodo.14160875)

Promptotyping is an iterative context engineering method in four phases (Preparation, Exploration & Mapping, Distillation, Implementation) for building research artefacts from research data with frontier LLMs. The primary artefact is a set of versioned Promptotyping Documents that hold a project's requirements, data, decisions, and domain knowledge; the prototype is a functional by-product that can be discarded and regenerated from the documents. A Critical Expert in the Loop verifies LLM output at defined points.

This repository is the public specification of the method and the repository of the method paper, which is written here in [knowledge/paper.md](knowledge/paper.md). It renders as an interactive paper at **https://dhcraft.org/Promptotyping/** (German site, English paper) and serves the method's templates as stable, machine-readable addresses.

## The method in brief

The four phases move from gathering raw material (Preparation) over probing what the data affords (Exploration & Mapping) and condensing the findings into token-efficient Markdown documents (Distillation) to iterative, verified development with an agentic coding tool (Implementation). The documents fall into three analytical types with a diagnostic rule attached. Knowledge Documents are declarative (data, domain, architecture); when output is factually wrong, check these first. Process Documents are chronological (journal, plan); check these when decision logic is unclear. Action Documents are imperative (`CLAUDE.md`); check these when output is formally wrong.

The full argument is the method paper; a German overview is at [dhcraft.org/Promptotyping/#ueberblick](https://dhcraft.org/Promptotyping/#ueberblick).

## The method paper

**Pollin, Christopher: Promptotyping. Translating Research Data into Research Artefacts with Context and Agentic Engineering** (in preparation).

The complete current text is a single Markdown document, [knowledge/paper.md](knowledge/paper.md), written and revised in this repository; [knowledge/paper-writing.md](knowledge/paper-writing.md) holds everything decided, checked, and still open about it, and the Grounded Vault under [vault/](vault/) anchors its supporting claims in sources. The interactive site renders the paper as a reading flow with inline glossary; until the revised version is released, the site shows the earlier published state, while [knowledge/paper.md](knowledge/paper.md) is the current draft.

## Videos

Two introductions to the method (German): the methodology explainer [Promptotyping, Teil 1](https://youtu.be/8sUe4Jkh3uQ) covering the four phases, the documents, and Critical Expert in the Loop, and the live demo [Teil 2](https://youtu.be/hd_a-NBO_S4), building a functional dashboard from 76 Excel files with Claude Code.

## What is in this repository

| Content | Location | On the site |
|---|---|---|
| Method paper (English, in progress) | [knowledge/paper.md](knowledge/paper.md), steering in [knowledge/paper-writing.md](knowledge/paper-writing.md) | earlier published state under [_content/paper/](_content/paper/) |
| Evidence layer of the paper (Grounded Vault) | [vault/](vault/) | — |
| Promptotyping Document templates | [_content/promptotyping-document/](_content/promptotyping-document/) | [#vorlagen](https://dhcraft.org/Promptotyping/#vorlagen) |
| Convention (frontmatter schema, structure) | [_content/konvention.md](_content/konvention.md) | [#konvention](https://dhcraft.org/Promptotyping/#konvention) |
| Technology baseline for static research tools (draft) | [_content/technology-baseline.md](_content/technology-baseline.md) | — |
| Curated case studies | [data/case-studies.json](data/case-studies.json), depth pages in [_content/case-studies/](_content/case-studies/) | [#use-cases](https://dhcraft.org/Promptotyping/#use-cases) |
| Method extensions from practice | [_content/praxis.md](_content/praxis.md) | [#praxis](https://dhcraft.org/Promptotyping/#praxis) |
| Reusable system prompts (coding, writing) | [_content/skills/](_content/skills/) | [#skills](https://dhcraft.org/Promptotyping/#skills) |
| Glossary | [data/glossar.json](data/glossar.json), [_content/glossar.md](_content/glossar.md) | [#glossar](https://dhcraft.org/Promptotyping/#glossar) |
| Site knowledge base (self-application) | [knowledge/](knowledge/) | — |

### Templates

The templates of the catalogue structure the documents of a Promptotyping knowledge base. Each is addressable under a stable latest URL of the pattern `https://dhcraft.org/Promptotyping/promptotyping-document/{slug}` and readable as raw Markdown under the machine address pattern below. A template applies only when its trigger holds; a methods repository without data processing, like this one, skips `data`, and the reasoning is documented in its knowledge base.

| Slug | Function | Type |
|---|---|---|
| [index](_content/promptotyping-document/index.md) | Navigation and glossary of the knowledge base | Knowledge |
| [project](_content/promptotyping-document/project.md) | Charter | Knowledge |
| [data](_content/promptotyping-document/data.md) | Material | Knowledge |
| [specification](_content/promptotyping-document/specification.md) | Specification (requirements, decisions) | Knowledge |
| [user-stories](_content/promptotyping-document/user-stories.md) | Specification (narrative scenarios) | Knowledge |
| [action-layer](_content/promptotyping-document/action-layer.md) | Agent instructions (`CLAUDE.md`) | Action |
| [architecture](_content/promptotyping-document/architecture.md) | Architecture | Knowledge |
| [domain-knowledge](_content/promptotyping-document/domain-knowledge.md) | Domain knowledge and reasoning layer | Knowledge |
| [design](_content/promptotyping-document/design.md) | Design | Knowledge |
| [testing](_content/promptotyping-document/testing.md) | Quality assurance | Knowledge |
| [verification](_content/promptotyping-document/verification.md) | Adversarial verification of claims | Knowledge |
| [journal](_content/promptotyping-document/journal.md) | Provenance | Process |
| [plan](_content/promptotyping-document/plan.md) | Planning | Process |
| [report](_content/promptotyping-document/report.md) | Reporting | Knowledge (snapshot) |
| [integration](_content/promptotyping-document/integration.md) | Cross-project contracts and handoffs | Knowledge |

Template versions live in the mirrors' frontmatter and in [data/promptotyping-documents.json](data/promptotyping-documents.json); a further template (`technology`, for reusable technology baselines) exists as a [draft](_content/promptotyping-document/technology.md) pending catalogue inclusion.

### Use cases

The gallery at [#use-cases](https://dhcraft.org/Promptotyping/#use-cases) curates publicly documented projects built with the method; each card links the project's GitHub repository and, where available, live demo and video. The underlying data is [data/case-studies.json](data/case-studies.json), and seven cases carry depth pages under [_content/case-studies/](_content/case-studies/).

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
index.html        single-page entry, renders the interactive paper
404.html          subpath-to-hash routing fallback
CLAUDE.md         action layer of this repository (its own instance of the action-layer template)
.nojekyll         required so GitHub Pages publishes _content/
knowledge/        knowledge base of the site itself, plus the method paper
_content/         Markdown content (paper sections, templates, case studies, glossary)
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

This is the repository of the method paper. Pollin, Christopher: Promptotyping. Translating Research Data into Research Artefacts with Context and Agentic Engineering (in preparation); the text is developed in [knowledge/paper.md](knowledge/paper.md), its evidence layer in [vault/](vault/).

For the repository and site: Pollin, Christopher; Steiner, Christian: Promptotyping. Zenodo. https://doi.org/10.5281/zenodo.14160875 (concept DOI, always resolves to the current version)

The method originates in the author's dissertation and was first published in blog form:

- Pollin, Christopher: Modelling, Operationalising and Exploring Historical Information. Using Historical Financial Sources as an Example. Dissertation, University of Graz 2025. https://unipub.uni-graz.at/obvugrhs/12127700
- Pollin, Christopher: Promptotyping. Von der Idee zur Anwendung. DHCraft Blog, 24.04.2025. https://dhcraft.org/excellence/blog/Promptotyping/
- Pollin, Christopher: Promptotyping. Zwischen Vibe Coding, Vibe Research und Context Engineering. Blogpost, L.I.S.A. Wissenschaftsportal der Gerda Henkel Stiftung, 17.01.2026. https://lisa.gerda-henkel-stiftung.de/digitale_geschichte_pollin

## Licence

Code (HTML, CSS, JavaScript, and the Python tooling under [vault/tools/](vault/tools/)) is licensed under the MIT License, see [LICENSE](LICENSE). Content (Markdown under [_content/](_content/), [knowledge/](knowledge/), the Grounded Vault under [vault/](vault/), and the prose texts of the site) is licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). The split follows the carrier; source that runs is MIT, text that is read is CC BY 4.0. This repository contains no third-party research data.
