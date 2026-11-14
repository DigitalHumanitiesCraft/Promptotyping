# Changelog

Changes to the Promptotyping templates, convention, knowledge base and site, per release. Versions follow the numbering in `CITATION.cff`. The skill has its own changelog in the repository `promptotyping-skill`.

## 1.0.0, unreleased

The first numbered release, prepared to accompany the paper on Promptotyping.

### What the repository holds

- `templates/` with eleven templates of the Promptotyping Documents in English, `project`, `data`, `domain-knowledge`, `specification`, `design`, `architecture`, `testing`, `plan`, `journal`, `index` and `action-layer`, and the convention they follow. This repository is their single source, and each file is addressable as `https://dhcraft.org/Promptotyping/templates/<name>.md`.
- `knowledge/`, the knowledge base of this project, written with its own templates and published on the site as the worked example. `practice.md` describes the four forms of work, the three kinds of checking and the limits of the artefact.
- `case-studies/` with the documented projects, each with its role, its artefact and its links.
- One page at https://dhcraft.org/Promptotyping/ with the definition, the figure of the practice, the five subcommands of the skill, the templates, the knowledge base, the use cases and the citation.

### Changed against the state before the release

- Terms follow the paper. Promptotyping is a working practice for translating research data and their contexts, with frontier LLM agents, into research artefacts that fit the researchers' purposes and ways of working. A Promptotype is a prototype taken together with the project knowledge base and the research data from which it was built. The figure of the practice was brought into line with these definitions.
- The journal carries the open points. It opens with a section `## Open`, condensing keeps the five newest entries and appends the older ones to `journal-archive.md`, and `knowledge/handoff.md` is gone.
- The templates `handoff`, `user-stories`, `report`, `technology`, `integration` and `verification` are retired. Their rules that a project needs went into `journal` (the section `## Open`), `specification` (epics and user stories), `architecture` (shared technology baseline, interfaces to other projects) and `testing` (claims carried outside the project).
- The skill lives in the repository `DigitalHumanitiesCraft/promptotyping-skill`, which is its single source, in version 2.0.0 with the subcommands `orient`, `explore`, `distill`, `curate` and `handoff`.

### Removed

- The multi-page portal with its routing, its Markdown renderer, the data catalogues and the pages Application, Checking, Artefact and boundary, Worked workflow, Tutorial, Best Practices, Technology Baseline, Working environment and Skills. What they said about the practice is condensed in `knowledge/practice.md`.
- The glossary with its term index, the Vault view with the Grounded Vault instance, the introduction page, the dated records under `snapshots/`, the benchmark with its planning documents, the video transcripts, the schema file and the consistency tooling with its tests.
- The earlier wording of the journal, which stays in the Git history.

Addresses of the retired pages end on the start page or the not-found page. An address of a template that still exists is led to its new place.
