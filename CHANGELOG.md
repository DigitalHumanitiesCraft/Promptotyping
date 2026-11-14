# Changelog

Changes to the Promptotyping specification, templates, skill and site, per release. Versions follow the numbering in `CITATION.cff`.

## 1.0.0, unreleased

The first numbered release, prepared to accompany the paper on Promptotyping.

### Added

- The Promptotyping skill in version 2.0.0, with five subcommands, `orient`, `explore`, `distill`, `curate` and `handoff`. `SKILL.md` holds the definition, the terms and the rules for building and checking, and one reference file per subcommand holds its procedure. `orient` establishes where the project stands and changes no file. `explore` is the form of work Exploration, in which the project learns what its research data can and cannot support. `distill` models the findings as knowledge documents, including epics and user stories. `curate` maintains the existing documents in three kinds among which the agent chooses, against the project, as grounding against knowledge outside it, and as review with a fresh context. `handoff` ends a session, writes the journal with a section `## Open` at its beginning and commits without pushing. Implementation has no call and follows rules in the core of the skill. The skill no longer uses `knowledge/handoff.md`. It lives in the repository `promptotyping-skill`, and this site links it.
- Installation instructions for Claude Code, Codex and environments that read `AGENTS.md`, in the README and on the Skills page.
- The five practices of Promptotyping on the Application page.
- This changelog and a version in `CITATION.cff`.

### Changed

- Terms aligned with the paper. A promptotype is accepted for a purpose when the researchers who will work with it judge that it fits their purposes and ways of working, which is its scholarly validation, and until then it remains a state of work in progress. Distillation goes beyond summarisation or context compression. The LLM role is called agent, also on the introduction page.
- The template mirrors re-synchronised with their editorial source and checked against the paper's terms for verification, agentic review and scholarly validation.
- The convention mirror updated to the current action layer (`CLAUDE.md` or `AGENTS.md`), status vocabulary, structural principles and write-back rule.
- The README now says what Promptotyping is, for whom, how to start and how to cite it.
- The skill lives in the repository `DigitalHumanitiesCraft/promptotyping-skill`, tagged per version, which is its single source (decided 2026-11-14). The Skills page and the start page describe it and link there, and this repository no longer carries a copy or a skill archive.
- The document convention and its templates follow the journal rule of 2026-11-14. The journal opens with a section `## Open`, condensing keeps the five newest entries and appends the older ones to `journal-archive.md`, and `knowledge/handoff.md` is no longer a mandatory document. The Handoff template stays addressable as superseded.
- The Skills page with the two system prompts for coding and writing is retired, and its addresses land on the start page, `#skills-promptotyping` on the section headed Skill. The Promptotyping Bench, its two planning documents and the video transcripts left the repository.
- The glossary with its term index and the in-text term links, the Vault view with the Grounded Vault instance under `vault/`, the dated records under `snapshots/` and the eval cases of the skill under `tools/skill-evals/` left the repository (decided 2026-11-14). Their addresses `#glossar`, `#konzept-{name}`, `#vault` and `#vault-{slug}` land on the start page.
- The introduction page under `intro/` is removed (operator decision of 2026-11-14), because its text no longer followed the terms of the paper and the start page already shows the five subcommands of the skill.
- The Pages workflow publishes `CITATION.cff`.
