---
type: representation
source-type: document
source: "[[_sources/sdd-openspec-2026-07-24.md]]"
converter: "manual extraction from the artefacts named per section, wording preserved; repository state pinned by the API metadata quoted in section A"
channel: collection
metadata:
  title: "OpenSpec: repository metadata and README"
  creator: "OpenSpec maintainers, Fission AI"
  date: "2025-08-05/2026-07-24"
  format: "text/markdown"
  identifier: "https://github.com/Fission-AI/OpenSpec"
  license: "MIT"
  confidential: false
created: 2026-07-24
updated: 2026-07-24
checked:
  validation: 2026-07-24
---

# OpenSpec

Compact extract of the OpenSpec material relevant to the Section 2.5 delimitation, preserving the wording of the passages that carry the framework's artefact set, its specification form, its review arrangement and its team model. OpenSpec is one of the six frameworks compared in Macedo 2026. Section markers name the retrieved artefact; the full retrieval provenance with URLs and dates sits in the source file.

## A. Repository metadata (GitHub API, retrieved 2026-07-24)

"created_at": "2025-08-05T10:37:45Z" ^created

"description": "Spec-driven development (SDD) for AI coding assistants." ^description

## B. Repository README

Artefacts produced by a change proposal: proposal.md — why we're doing this, what's changing; specs/ — requirements and scenarios; design.md — technical approach; tasks.md — implementation checklist ^artefacts

Plain Markdown — requirements with concrete scenarios, no special syntax to learn. ^plain-markdown

Requirement form: "### Requirement: Theme selection / The app SHALL let users switch between light and dark themes, defaulting to the system preference. / #### Scenario: User toggles dark mode / - **WHEN** the user clicks the theme toggle / - **THEN** the app switches to dark mode and persists the choice" ^requirement-form

Your AI writes these; you review the plan before any code is written. ^review

Solo, OpenSpec keeps you and your AI honest on a single repo. On a team, the hard part moves: a feature spans the API server, the web app, and a shared library; requirements are owned by one team and consumed by others; planning starts before any code exists. ^team-problem

Shared requirements — a platform team owns the specs; product teams reference them read-only, right where their coding agent can read them. No drifting wiki. ^shared-requirements

## C. Negative check on data and audience

Retrieved 2026-07-24: the README lists no artefact whose purpose is the description of external data sources or their semantics, states no readership for the specification other than the user and the coding agents of their own or another team, and defines no verification role tied to subject-matter competence. ^negative-data-audience
