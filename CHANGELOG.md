# Changelog

Changes to the Promptotyping specification, templates, skill and site, per release. Versions follow the numbering in `CITATION.cff`.

## 1.0.0, unreleased

The first numbered release, prepared to accompany the paper on Promptotyping.

### Added

- The Promptotyping skill under `skills/promptotyping/` in version 2.0.0, with five subcommands, `orient`, `explore`, `distill`, `curate` and `handoff`. `SKILL.md` holds the definition, the terms and the rules for building and checking, and one reference file per subcommand holds its procedure. `orient` establishes where the project stands and changes no file. `explore` is the form of work Exploration, in which the project learns what its research data can and cannot support. `distill` models the findings as knowledge documents, including epics and user stories. `curate` maintains the existing documents in three kinds among which the agent chooses, against the project, as grounding against knowledge outside it, and as review with a fresh context. `handoff` ends a session, writes the journal with a section `## Open` at its beginning and commits without pushing. Implementation has no call and follows rules in the core of the skill. The skill no longer uses `knowledge/handoff.md`. The convention and the templates still describe that document and follow in a later step. The same skill is installable from the repository `promptotyping-skill`.
- Eval cases for the skill under `tools/skill-evals/`, covering handoff, curation and pruning. They lie outside the skill package, so an installation and the download archive carry only `SKILL.md` and the agent metadata.
- Installation instructions for Claude Code, Codex and environments that read `AGENTS.md`, in the README and on the Skills page.
- The five practices of Promptotyping on the Application page.
- This changelog and a version in `CITATION.cff`.

### Changed

- Terms aligned with the paper. A promptotype is accepted for a purpose when the researchers who will work with it judge that it fits their questions and ways of working, which is its scholarly validation, and until then it remains a state of work in progress. Distillation goes beyond summarisation or context compression. The LLM role is called agent, also on the introduction page.
- The template mirrors re-synchronised with their editorial source and checked against the paper's terms for verification, agentic review and scholarly validation.
- The convention mirror updated to the current action layer (`CLAUDE.md` or `AGENTS.md`), status vocabulary, structural principles and write-back rule.
- The README now says what Promptotyping is, for whom, how to start and how to cite it.
- The Skills page renders the skill from this repository. It replaces the separate skill repository `DigitalHumanitiesCraft/promptotyping-skill` as the canonical place.
- The Pages workflow publishes `skills/` and `CITATION.cff`.
