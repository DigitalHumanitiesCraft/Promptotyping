# Promptotyping

[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.14160875.svg)](https://doi.org/10.5281/zenodo.14160875)

## What Promptotyping is

Promptotyping is a working practice for translating research data and their contexts into research artefacts, such as interfaces, data workflows, schemas or editions, that fit the researchers' questions and ways of working. An AI coding agent, a program that reads and writes the files of a project and runs commands on instruction, builds the artefact. What researchers and agent know about the domain, the data and the aims is kept in a small curated project knowledge base, usually Markdown files in a `knowledge/` folder, so that it persists across sessions and can be checked.

The practice combines three forms of engineering. Knowledge Engineering makes explicit and curates what researchers and project partners know, Context Engineering selects from this knowledge what an agent needs for a task, and Agentic Engineering organises the work of the agents. The work runs through four forms of work, Preparation, Exploration, Distillation and Implementation, which follow one another in a first pass and recur as the work requires. Knowledge curation, the examination and revision of the project knowledge in light of what sources, checks and work with the artefacts reveal, runs through all four.

Each iteration yields a promptotype, the state of an artefact together with the project knowledge and the research data from which it was built. Three kinds of checking stay apart. Verification tests conformity to formalised requirements such as schemas and tests, agentic review lets an agent examine the work against named criteria, and scholarly validation by the researchers decides whether the work is warranted by the sources and fits its purpose. A promptotype is accepted for a purpose when the researchers who will work with it judge that it fits their questions and ways of working. Until then it remains a state of work in progress.

## Who it is for

Promptotyping is for researchers and project teams in the digital humanities and neighbouring fields who have structured or semi-structured research data, such as tables, XML, TEI or JSON, and a concrete question, and who need a project-specific artefact that a generic tool does not provide. Someone in the team must be able to judge whether the artefact is faithful to the sources. Programming skills help but are not required for a first round. Working with the repository itself needs basic Git.

After a first round you have a versioned repository with a knowledge base that describes your data, purpose and requirements, a small running artefact built from it, and a record of what was checked, by whom, and what was decided. A later session, by you, a colleague or another agent, can continue from the folder alone.

## Get started

1. Read the [introduction](https://dhcraft.org/Promptotyping/intro/), which plays one synthetic round and gives copyable prompts, or the longer [tutorial](https://dhcraft.org/Promptotyping/#tutorial).
2. Install an AI coding agent such as Claude Code or Codex, and Git.
3. Optionally install the Promptotyping skill, so that the agent follows the practice's operations in every session (see [The skill](#the-skill)).
4. Create an empty project folder, copy your data into `data/`, and write down your purpose, your question and two or three user stories in your own words.
5. Start the agent in that folder and follow the steps of the introduction, Prepare, Explore, Distil, Cut to size, Build, Check and accept. To rehearse first, use the invented example file [`intro/example/letters.csv`](intro/example/letters.csv).

## The skill

The Promptotyping skill under [`skills/promptotyping/`](skills/promptotyping/) gives an agent written procedures for working from a knowledge base. It carries seven operations in one `SKILL.md`. Orient reads the action layer and the knowledge base before any work. Distil, Curate, Synthesise and Prune are the operations of knowledge curation, which turn material into maintained knowledge, keep it true against the sources, connect pieces into a new statement and remove what no longer holds. Implement builds a checked increment, and Hand off processes the inbox of received inputs.

For Claude Code, copy the folder into your skills directory, `~/.claude/skills/` for all projects or `.claude/skills/` inside one project.

```bash
git clone https://github.com/DigitalHumanitiesCraft/Promptotyping.git
mkdir -p ~/.claude/skills
cp -r Promptotyping/skills/promptotyping ~/.claude/skills/
```

Codex reads skills from its skills directory, usually `$CODEX_HOME/skills/`. An agent that reads only an `AGENTS.md` file gets the skill through one line in the project's `AGENTS.md`, after the folder has been copied, for instance to `.agents/skills/promptotyping/`.

```markdown
Before working in knowledge/, read .agents/skills/promptotyping/SKILL.md and follow the operation that fits the task.
```

## The portal

This repository is the public Promptotyping portal at **https://dhcraft.org/Promptotyping/**. It holds the practice specification, the templates for the knowledge documents, documented use cases, the tutorial, the skill and the tools that check the site. It also serves the templates under stable, machine-readable addresses.

### Promptotyping in brief

The four forms of work move from gathering raw material (Preparation) over probing what the data afford (Exploration) and distilling the findings into selective Markdown documents (Distillation) to iterative, checked development with an AI coding agent (Implementation). Knowledge Document is the umbrella term for the documents of the knowledge base. It specialises into three types according to the kind of knowledge it holds, and each type suggests where to look first when something goes wrong. Declarative Documents, which the paper calls declarative knowledge documents, hold knowledge about the subject matter and are a first place to check when output is wrong in substance. Process Documents, the paper's process knowledge documents, divide current handoff inputs, accepted future work and the curated provenance index between `handoff.md`, `plan.md` and `journal.md`, and they show the grounds of decisions. Action Documents, the paper's agent instruction documents, hold knowledge about how to act (`CLAUDE.md`, `AGENTS.md`) and are a first place to check when an agent behaves wrongly.

An overview of the practice is at [dhcraft.org/Promptotyping/#overview](https://dhcraft.org/Promptotyping/#overview).

### The paper

The paper on Promptotyping is maintained separately and prepared for journal submission. The manuscript and the material bound to it, its specification, review tooling, figures and audits, are not part of this repository. On 14 October 2026 the author removed the manuscript from the public repository and website, and on 28 October 2026 the remaining manuscript-bound material followed. Earlier public availability remains part of the publication history.

## Data and rights

This repository contains no third-party research data. Its material basis is recorded in [knowledge/project.md](knowledge/project.md). The cleaned German video transcripts under [source-material/](source-material/) and the sources of the Grounded Vault under [vault/](vault/) are carried with their provenance, and benchmark tasks hold their own data contracts and provenance in the [benchmark authoring area](research-artefacts/promptotyping-bench/README.md).

## Use

The portal is published with GitHub Pages at **https://dhcraft.org/Promptotyping/**. The workflow [.github/workflows/pages.yml](.github/workflows/pages.yml) publishes only the folders the site loads, so the knowledge base, tools and tests stay in the repository.

### Local development

```bash
git clone https://github.com/DigitalHumanitiesCraft/Promptotyping.git
cd Promptotyping
python -m http.server 8000
```

Open http://localhost:8000.

### Videos

Two introductions to the practice (German): the explainer [Promptotyping, Teil 1](https://youtu.be/8sUe4Jkh3uQ) covering the four forms of work, the documents, and the critical expert in the loop, and the live demo [Teil 2](https://youtu.be/hd_a-NBO_S4), building a functional dashboard from 76 Excel files with Claude Code.

### What is in this repository

| Content | Location | On the site |
|---|---|---|
| Evidence layer of the practice (Grounded Vault) | [vault/](vault/) | [#vault](https://dhcraft.org/Promptotyping/#vault) |
| Promptotyping Bench (draft research programme) | [Proposal](research-artefacts/promptotyping-bench-proposal.md), [plan](knowledge/benchmark-plan.md), [task and tooling index](research-artefacts/promptotyping-bench/README.md), [research map](vault/30_assertions/MOC-Benchmark.md) | No dedicated portal page |
| Knowledge Document templates | [_content/promptotyping-document/](_content/promptotyping-document/) | [#vorlagen](https://dhcraft.org/Promptotyping/#vorlagen) |
| Convention (naming contract, frontmatter schema, structure) | [_content/konvention.md](_content/konvention.md) | [#konvention-v0.1](https://dhcraft.org/Promptotyping/#konvention-v0.1) |
| Technology baseline for static research tools (draft) | [_content/technology-baseline.md](_content/technology-baseline.md) | — |
| Curated case studies | [data/case-studies.json](data/case-studies.json), depth pages in [_content/case-studies/](_content/case-studies/) | [#use-cases](https://dhcraft.org/Promptotyping/#use-cases) |
| Guided first iteration | [_content/tutorial.md](_content/tutorial.md) | [#tutorial](https://dhcraft.org/Promptotyping/#tutorial) |
| Extensions grown from practice | [_content/praxis.md](_content/praxis.md) | [#praxis](https://dhcraft.org/Promptotyping/#praxis) |
| Canonical Promptotyping skill with eval cases | [skills/promptotyping/](skills/promptotyping/) | [#skills-promptotyping](https://dhcraft.org/Promptotyping/#skills-promptotyping) |
| Reusable system prompts (coding, writing) | [_content/skills/](_content/skills/) | [#skills](https://dhcraft.org/Promptotyping/#skills) |
| Glossary | [data/glossar.json](data/glossar.json), [_content/glossar.md](_content/glossar.md) | [#glossar](https://dhcraft.org/Promptotyping/#glossar) |
| Durable site knowledge base (self-application) | [knowledge/](knowledge/) | — |
| Live Process Inbox | [knowledge/handoff.md](knowledge/handoff.md) | — |
| Source material, including video scripts | [source-material/](source-material/) | — |
| Dated reports and audits | [snapshots/](snapshots/) | — |

#### Templates

The templates of the catalogue structure the documents of a Promptotyping knowledge base. Each is addressable under a stable latest URL of the pattern `https://dhcraft.org/Promptotyping/promptotyping-document/{slug}` and readable as raw Markdown under the machine address pattern below. A template applies only when its trigger holds. This Promptotyping portal records its material basis in `knowledge/project.md`; benchmark tasks hold their own data contracts and provenance in the separate authoring area.

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

The gallery at [#use-cases](https://dhcraft.org/Promptotyping/#use-cases) curates publicly documented projects built with the practice; each card links the project's GitHub repository and, where available, live demo and video. The underlying data is [data/case-studies.json](data/case-studies.json), and the cases marked there with `deep_page` carry a depth page under [_content/case-studies/](_content/case-studies/).

### Machine access

Repositories that apply the practice declare which template a document follows in a `template:` frontmatter field:

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
index.html        single-shell entry for the Promptotyping portal
404.html          subpath-to-hash routing fallback
CLAUDE.md         action layer of this repository (its own instance of the action-layer template)
CITATION.cff      citation metadata
CHANGELOG.md      changes per release
.nojekyll         required so GitHub Pages publishes _content/
knowledge/        knowledge base of the site itself
skills/           the Promptotyping skill for AI coding agents
research-artefacts/  benchmark proposal and benchmark authoring area
source-material/  cleaned video transcripts
snapshots/        dated reports and audits
schema/           JSON Schema of the frontmatter core
tools/            consistency check, glossary build, tests
_content/         Markdown content (practice pages, templates, case studies, glossary)
assets/           CSS, JS, vendored libraries, fonts, logo
data/             JSON data (case studies, glossary, template table, vault index)
vault/            Grounded Vault instance, evidence layer of the practice
```

No framework, no build step; marked.js and js-yaml are vendored. The reasoning is documented in the [technology baseline](_content/technology-baseline.md).

## How this was built

The site applies the practice it specifies. Its knowledge base in [knowledge/](knowledge/INDEX.md) follows the templates the site publishes, each document carrying the `template:` field that points back to its own specification, and [CLAUDE.md](CLAUDE.md) is the agent's entry point. The harness was Claude Code. The Co-Authored-By trailers of the commits name Claude without a model for the first phase from September to November 2025, and later Claude Sonnet 4.6, Claude Opus 4.7, Claude Opus 4.8, Claude Fable 5, Claude Opus 5 and Claude Opus 5.5; commits without a trailer do not record whether an agent was involved.

Checking is layered. Verification runs `tools/check_consistency.py`, which decides by rule where the site states the same thing in more than one place, together with the regression tests of the tools and the validator of the Grounded Vault ([knowledge/verification.md](knowledge/verification.md)). The practice's supporting claims are anchored in the Grounded Vault under [vault/](vault/), which links every assertion to a source with provenance. Where agreement in substance is not decidable by rule, the check stays with the author as critical expert, and [knowledge/verification.md](knowledge/verification.md) records it as outstanding. The development history is in [knowledge/journal.md](knowledge/journal.md).

## Limits

- The Promptotyping Bench is a draft research programme. Its tooling tests supply engineering evidence and no study result ([knowledge/benchmark-plan.md](knowledge/benchmark-plan.md)).
- The automatic checks decide consistency between the site's own statements. Whether the practice description is right in substance remains a matter of scholarly judgement.
- The templates other than `technology` are mirrors of the author's Obsidian vault and stay German.

## Citation and licence

Cite the repository and site through its citation file [CITATION.cff](CITATION.cff), which GitHub offers under "Cite this repository". The concept DOI resolves to the current archived version.

Pollin, Christopher; Steiner, Christian: Promptotyping. Version 1.0.0. Zenodo. https://doi.org/10.5281/zenodo.14160875

Changes per version are listed in [CHANGELOG.md](CHANGELOG.md). Promptotyping originates in the author's dissertation and was first published in blog form.

- Pollin, Christopher: Modelling, Operationalising and Exploring Historical Information. Using Historical Financial Sources as an Example. Dissertation, University of Graz 2025. https://unipub.uni-graz.at/obvugrhs/12127700
- Pollin, Christopher: Promptotyping. Von der Idee zur Anwendung. DHCraft Blog, 24.04.2025. https://dhcraft.org/excellence/blog/Promptotyping/
- Pollin, Christopher: Promptotyping. Zwischen Vibe Coding, Vibe Research und Context Engineering. Blogpost, L.I.S.A. Wissenschaftsportal der Gerda Henkel Stiftung, 17.01.2026. https://lisa.gerda-henkel-stiftung.de/digitale_geschichte_pollin

Code (HTML, CSS, JavaScript, and the Python tooling under [tools/](tools/), [vault/tools/](vault/tools/) and [research-artefacts/promptotyping-bench/](research-artefacts/promptotyping-bench/)) is licensed under the MIT License, see [LICENSE](LICENSE). Text (Markdown under [_content/](_content/), [knowledge/](knowledge/), [skills/](skills/), the Grounded Vault under [vault/](vault/), and the prose of the site) is licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). The split follows the carrier, so source that runs is MIT and text that is read is CC BY 4.0. This repository contains no third-party research data.
