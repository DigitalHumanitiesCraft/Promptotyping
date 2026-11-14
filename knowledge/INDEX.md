---
title: INDEX
project:
  name: Promptotyping Site
  repository: https://github.com/DigitalHumanitiesCraft/Promptotyping
status: complete
language: en
version: 1.1
created: 2026-05-09
updated: 2026-11-14
authors: [Christopher Pollin]
generated-with: Claude Code (Claude Fable 5, Claude Opus 5, Claude Opus 5.5)
method:
  name: Promptotyping
  url: https://dhcraft.org/Promptotyping/
template:
  name: Vorlage Index
  version: 0.4
  url: https://dhcraft.org/Promptotyping/promptotyping-document/index
  alias: https://dhcraft.org/Promptotyping/#promptotyping-document-index
related: [project, governance, specification, architecture, design, verification, journal, plan]
---

# INDEX

## Manuscript publication boundary

The public repository carries the specification of the Promptotyping practice, and the manuscript is maintained outside it. The manuscript left the repository and GitHub Pages on 14 October 2026, and the material bound to it followed on 28 October 2026 (operator decisions). The site carries no paper page and states the definitions it shares with the manuscript in its own words. The rule and its history are in [specification.md](specification.md#manuscript-publication-boundary), and paper work does not happen in this repository. Earlier commits and historical publication records are retained, so the removal does not undo prior public availability. The journal's acceptance of the expose does not establish acceptance of the full manuscript or resolve eligibility of the previously public draft.


Navigation and glossary of this repository's durable knowledge base. The repository `DigitalHumanitiesCraft/Promptotyping` is the public site for the specification of the Promptotyping practice at https://dhcraft.org/Promptotyping/. File names and paths are the primary routing signals; this index confirms each function and separates durable project knowledge from the pages and data the site publishes.

## Language regime

The durable core is English because it specifies the public self-application. `journal.md` remains German as the internal provenance record. Open points stand in the section `## Open` at the beginning of `journal.md`, whose heading and empty state "Nothing open." are fixed English strings; the dated handoff snapshot retains the language of the work it records. The German video transcripts are Source Material. Template names remain German identifiers because public URLs and `template:` fields depend on them.

## Status vocabulary

`status:` names document maturity rather than project state. The vocabulary is `idea`, `draft`, `stub`, `complete`, `reviewed`, `archived`, `active` for a continuously maintained Process Document, and `snapshot` for a dated record.

## Document register

| Path | Function | Routing question | Update trigger |
|---|---|---|---|
| `knowledge/INDEX.md` | Navigation | What exists, where does it belong, and how is it read? | path, function, or constitutive term changes |
| [project.md](project.md) | Charter | What is this project, for whom, and on what material basis? | project identity or scope changes |
| [governance.md](governance.md) | Governance | Who may decide and change what, and which source, rights, checking, and escalation rules bind the work? | authority or governance rule changes |
| [specification.md](specification.md) | Specification | What must the site do and why? | requirement or decision changes |
| [architecture.md](architecture.md) | Architecture | How is the site technically realised? | implementation architecture changes |
| [design.md](design.md) | Design | How does the site look and behave? | design-system or interaction changes |
| [verification.md](verification.md) | Verification | Which claims does the site make about itself, and how are they checked? | claim, procedure, or verdict changes |
| [journal.md](journal.md) | Provenance | What is open, and which transitions were integrated, rejected, or corrected, from which source? | a substantively coherent transition closes; `## Open` is rewritten at every handoff |
| [plan.md](plan.md) | Planning | Which accepted work remains and in what dependency order? | accepted scope or completion state changes |


The paper is maintained outside this repository and will be published in the journal; neither its text nor its governing knowledge is part of this knowledge base. A `data.md` does not carry for this repository because [project.md](project.md) holds the material basis.

## Artefact areas

- `knowledge/` contains durable Knowledge Documents, including `journal.md` with the open points in its section `## Open`.
- `snapshots/` with its dated records was retired on 2026-11-14 (operator decision). Earlier commits keep the records, and journal entries that link them keep their links as written.
- `intro/` with the introduction page for newcomers (A47) was withdrawn on 2026-11-14 by operator decision.
- `_content/` contains authored publication pages and the stable public template mirrors.
- The Promptotyping skill lives in the repository [promptotyping-skill](https://github.com/DigitalHumanitiesCraft/promptotyping-skill) (A42, revised 2026-11-14), and the start page links it. The Skills page with the skill and the two system prompts is retired, and `_content/skills/` is gone. The eval cases for the skill under `tools/skill-evals/` were retired on 2026-11-14.
- `assets/data/` holds the runtime data of the site, the template catalogue and the use cases. The glossary data and the Vault index left it on 2026-11-14.

## Reading order

1. INDEX (orientation)
2. journal.md, section `## Open` (what is open)
3. plan.md (which accepted work remains, in the order `CLAUDE.md` sets for session start)
4. project.md (what the site is)
5. governance.md (who has authority and which rules bind changes)
6. specification.md (what it can do)
7. architecture.md (how it is built)
8. design.md (how it looks)
9. journal.md (the provenance of substantive transitions)


## Glossary

Terms constitutive for this knowledge base. Canonical definitions live in the linked vault knowledge documents; this is the short form relevant here.

**Promptotyping.** Iterative, knowledge-driven working practice organised around four recurrent forms of work, Preparation, Exploration, Distillation, Implementation, through which a project builds its own research artefacts out of structured research data and the project knowledge it maintains, by way of Knowledge Engineering, Context Engineering and Agentic Engineering. Knowledge curation runs across all four forms of work. It is called a working practice because the word method would claim an empirical validation that does not yet exist (author decision 2026-10-28). In repository-based projects the `knowledge/` folder holds the maintained project knowledge from which implementation proceeds. Its coverage ends where findings from implementation do not return to it through knowledge curation.

**Promptotype.** The artefact state that each iteration yields, which holds only in relation to the project knowledge and research-data state underlying it. It is a means of knowing, since using it reveals which distinctions the data sustain and at which points the work breaks down. It is accepted for a purpose when the researchers who will work with it judge that it fits their purposes and ways of working, which is its scholarly validation, and until then it remains a state of work in progress. Until 2026-10-28 this glossary reserved the term for an accepted iteration with documented grounds of acceptance.

**Knowledge Document.** Structured Markdown document in a repository's `knowledge/` folder. All of them are Knowledge Documents, specialised by the kind of knowledge they carry into three analytical types named as in the paper, declarative knowledge documents (subject matter), process knowledge documents (workflow state and provenance) and agent instruction documents (imperative). From 2026-09-27 to 2026-11-10 site and convention kept the short names Declarative, Process and Action Document beside the paper's names (operator decision recorded in [journal.md](journal.md), entry of 2026-09-27). Since the operator's decision of 2026-11-10 to align terms with the manuscript, the short forms remain only in the type column of the convention's routing heuristic and in the catalogue field `typ`. Until July 2026 the declarative type itself was called Knowledge Document, and the name then moved to the umbrella term.

**Template (Vorlage).** Fillable structural pattern for one function of a Promptotyping knowledge base. The function names are English: Navigation, Charter, Material, Specification, Architecture, Technology Baseline, Domain Knowledge, Design, Quality Assurance, Verification, Provenance, Planning, Governance, Reporting, Integration, and Agent Instructions. The Handoff template stays addressable as superseded since 2026-11-14. The catalogue lives in the vault; the site mirrors the templates as versioned anchors. A template carries only where its trigger holds.

**Naming Contract.** Repository rule that makes the file name and path the primary routing signal. Durable single carriers use canonical function names; specialisations follow `<subject>-<function>.md`. Open points stand in `## Open` of `knowledge/journal.md`, while exceptional dated Handoff snapshots and Reports include scope and date outside `knowledge/`. `INDEX.md` and `CLAUDE.md` are the registered uppercase exceptions.

**ZfdG.** Official abbreviation of *Zeitschrift für digitale Geisteswissenschaften*. [journal.md](journal.md) uses it for the venue decision of 2026-07-23. The dated submission report that also carried it left `snapshots/` on 2026-10-28.

**Konvention Knowledge Documents.** The description of knowledge-base functions, the frontmatter schema, and the structural principles. Lives in the vault, mirrored on the public site as an external specification. The vault file still carries the earlier name `Konvention Promptotyping Documents.md`, whose renaming the journal entry of 2026-09-27 records as open vault work.

**Anchor schema.** System of permanently stable URL anchors on the site (`#promptotyping-document-data`, `#case-herdata`, `#konvention-v0.1`). The addresses of retired pages stay resolvable and land on the start page. Version snapshots add sub-anchors (`#promptotyping-document-data-v0.1`). Repositories linking via the `template:` field address these anchors; anchors are never renamed. Since the rebuild of 2026-07-25 the site shows one page at a time and holds the inactive pages in the DOM, which is what keeps every published anchor resolvable (`specification.md`, `architecture.md`).

**Subpath form.** Path form of an address (`/promptotyping-document/data`), canonical on equal terms with the hash anchor (A4) and routed to it via `404.html`, which requires JavaScript. The canonical machine address for HTTP retrieval without JavaScript is the static Markdown URL (`/_content/promptotyping-document/{slug}.md`).

**Side panel.** Right sliding panel carrying context-specific depth; a bottom sheet on mobile. What it holds is owned by `specification.md`.

**Frontmatter-Inspector.** Module on the templates section resolving a `template:` URI live and rendering the referenced template beneath it.

**Case-study filter.** Module of the use-case section filtering the curated cards by use-case typology (primary), interface type, and demo availability.

**Phase provenance lane.** Historical design device of the first deploy, removed by operator decision 2026-06-10 (A2, ADR-4). The `{:.phase-*}` tags it read are gone, and the stripper that had covered for them was deleted on 2026-07-27.

**Critical Expert.** The person or group competent and accountable for judging whether the project knowledge adequately represents the research material and whether the artefact suits its stated purpose, and responsible for accepting an iteration. The site formerly called the role Critical Expert in the Loop (EIL), and its former glossary anchor `#konzept-eil` lands on the start page since the glossary was retired on 2026-11-14. In this repository the operator holds the role.

**`template:` field.** Frontmatter field pointing to the authoritative template specification on this site. Format `template: { name, version, url, alias }`; `url` is the latest subpath form, `alias` the latest hash anchor.

**Grounded Vault (`vault/`).** Retired on 2026-11-14 by operator decision. The folder held an instance of the Grounded Vault template with sources, distillates and assertions, and the Vault view showed it on the site. Both left the repository, and the addresses `#vault` and `#vault-{slug}` land on the start page. The Grounded Vault template itself lives in its own repository, linked from the start page footer.

The separate personal Obsidian vault holds cross-project orientation under `Projects/Promptotyping/`, reached through `Promptotyping MOC.md` and `Project Overview Promptotyping.md`. It is not a second copy of the repository or its evidence chain.

**Project Governance.** The binding project-level rules for authority, source and evidence status, permissions, checking, acceptance, write-back, rights, publication, and escalation. In this repository they live in [governance.md](governance.md) and are applied through the repository action layer.

## Relation to the vault knowledge base

This repository knowledge base is a self-application of the practice. The vault templates guiding it are the source of the template mirror; discrepancies flow back to the vault first, then into the repo. The Critical Expert check made visible that not every template carries; method repositories skip the Material template, which sharpened the trigger rule in the convention itself.

## Related

- External convention: dhcraft.org/Promptotyping/#konvention-v0.1
- Vault substrate: the vault template catalogue, the vault convention
