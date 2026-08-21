# Promptotyping Paper Vault — Agent Action Layer

This vault is a Grounded Vault instance. Every substantive statement you produce here must carry a grounding anchor; the rules live in `knowledge/`, and this file only routes you there. Do not duplicate rules here.

## Session start

Read in this order: `knowledge/index.md` (terminology), `knowledge/state.md` (where work stands), then the document your task routes to below.

## Task routing

| Task | Read first | Chain |
|---|---|---|
| Add a source | `knowledge/operations.md` § Acquire, Ingest | acquire → ingest |
| Distill a source | `knowledge/schema.md` § Distillate, `operations.md` § Distill | three-stage chain |
| Build or revise assertions | `schema.md` § Assertion, `operations.md` § Build assertions | assertions |
| Write a chapter | `schema.md` § Chapter, `operations.md` § Write chapters | chapters |
| Answer a question | `operations.md` § Query | query |
| Check the vault | `operations.md` § Check | validate → review |

## Hard rules

- Anchors are minted only at their own layer; never invent a block or statement ID that does not exist.
- A Markdown representation is never edited after ingest; a revised source enters as a new file with a date-suffixed slug.
- A status is set only after its check ran; record the date in `checked`. Never set `verified`; that is the human verification role's alone.
- Own conclusions become posits in the output, never assertions.
- Run `python tools/validate.py .` before reporting any production task as done. Zero errors alone is not the criterion; a warning marked `*` is undeclared and is a finding, not background noise.
- Volatile state goes to `knowledge/state.md`, decisions to `knowledge/journal.md` (append-only).
- Working language of content: English. This action layer and `knowledge/` stay English.

## Harness block (exchangeable)

<!-- This block is specific to Claude Code and may be replaced for another harness. -->

- Commit at milestones with concise English imperative messages; stage explicit paths.
- Subagents run with an explicit Opus model override; delegation stays flat (no sub-subagents). Guardrail and exclusion lists are passed to subagents verbatim.
- The deliverable is the paper, maintained canonically in `research-artefacts/promptotyping-paper.md` at the repository root. The site renders that file directly, so no derived cut of the paper exists; never copy paper text into `40_output/` (see the settled decision in `knowledge/specification.md`).
