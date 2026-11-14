# Changelog

Changes to the Promptotyping specification, templates, skill and site, per release. Versions follow the numbering in `CITATION.cff`.

## 1.0.0, unreleased

The first numbered release, prepared to accompany the paper on Promptotyping.

### Added

- The Promptotyping skill under `skills/promptotyping/`, with eight operations in one `SKILL.md`, namely Orient, Explore, Distil, Implement, Curate, Synthesise, Prune and Hand off. Orient establishes where the project stands and changes no file. Explore is the form of work Exploration as an operation of its own, in which the project learns what its research data can and cannot support. Distil, Curate, Synthesise and Prune are the operations of knowledge curation, each with purpose, trigger, inputs, procedure, resulting change, check and delimitation.
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
