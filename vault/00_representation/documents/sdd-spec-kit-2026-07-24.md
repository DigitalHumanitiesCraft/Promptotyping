---
type: representation
source-type: document
source: "[[_sources/sdd-spec-kit-2026-07-24.md]]"
converter: "manual extraction from the artefacts named per section, wording preserved; repository artefacts pinned to release v0.14.1 (published 2026-07-23) and to the tags named in the audience section"
channel: collection
metadata:
  title: "GitHub Spec Kit: announcement post, templates, methodology document and README"
  creator: "Spec Kit maintainers, GitHub"
  date: "2025-09-02/2026-07-24"
  format: "text/html and text/markdown"
  identifier: "https://github.com/github/spec-kit"
  license: "MIT (repository); the announcement post is GitHub web content quoted for scholarly citation"
  confidential: false
created: 2026-07-24
updated: 2026-07-24
checked:
  validation: 2026-07-24
---

# GitHub Spec Kit

Compact extract of the Spec Kit material relevant to the Section 2.5 delimitation, preserving the wording of the passages that carry the framework's own account of its artefacts, its verification arrangement, its roles and its intended readership. Section markers name the retrieved artefact; the full retrieval provenance with URLs and dates sits in the source file.

## A. Announcement post (github.blog, 2025-09-02)

Spec Kit, our new open sourced toolkit for spec-driven development, provides a structured process to bring spec-driven development to your coding agent workflows with tools including GitHub Copilot, Claude Code, and Gemini CLI. ^announce

Instead of coding first and writing docs later, in spec-driven development, you start with a (you guessed it) spec. This is a contract for how your code should behave and becomes the source of truth your tools and AI agents use to generate, test, and validate code. ^contract

Spec Kit makes your specification the center of your engineering process. Instead of writing a spec and setting it aside, the spec drives the implementation, checklists, and task breakdowns. Your primary role is to steer; the coding agent does the bulk of the writing. It works in four phases with clear checkpoints. ^steer

Implement: Your coding agent tackles the tasks one by one (or in parallel, where applicable). But here's what's different: instead of reviewing thousand-line code dumps, you, the developer, review focused changes that solve specific problems. ^developer-reviews

Crucially, your role isn't just to steer. It's to verify. At each phase, you reflect and refine. Does the spec capture what you actually want to build? Does the plan account for real-world constraints? Are there omissions or edge cases the AI missed? The process builds in explicit checkpoints for you to critique what's been generated, spot gaps, and course correct before moving forward. The AI generates the artifacts; you ensure they're right. ^verify

## B. Repository metadata (GitHub API, retrieved 2026-07-24)

"created_at": "2025-08-21T22:54:31Z" ^created

Latest release at retrieval: tag v0.14.1, published 2026-07-23T20:17:58Z. ^release

## C. Plan template, artefact tree (templates/plan-template.md)

├── plan.md              # This file (__SPECKIT_COMMAND_PLAN__ command output) / ├── research.md          # Phase 0 output / ├── data-model.md        # Phase 1 output / ├── quickstart.md        # Phase 1 output / ├── contracts/           # Phase 1 output / └── tasks.md             # Phase 2 output ^data-model

## D. Spec template, data section (templates/spec-template.md)

Heading and body of the data section: "Key Entities *(include if feature involves data)*" — "- **[Entity 1]**: [What it represents, key attributes without implementation]" — "- **[Entity 2]**: [What it represents, relationships to other entities]" ^key-entities

- **FR-006**: System MUST authenticate users via [NEEDS CLARIFICATION: auth method not specified - email/password, SSO, OAuth?] ^clarification-example

## E. Methodology document (spec-driven.md)

4. **Detailed Documentation**: Generates supporting documents for data models, API contracts, and test scenarios ^plan-generates-data-models

Both templates mandate the use of `[NEEDS CLARIFICATION]` markers: 1. **Mark all ambiguities**: Use [NEEDS CLARIFICATION: specific question] 2. **Don't guess**: If the prompt doesn't specify something, mark it ^uncertainty-markers

This is supportive of a **team process**, where team-reviewed specifications are expressed and versioned, created in branches, and merged. ^team-review

## F. Quality commands (README.md)

`/speckit.analyze` — Cross-artifact consistency & coverage analysis (run after `/speckit.tasks`, before `/speckit.implement`); `/speckit.checklist` — Generate custom quality checklists that validate requirements completeness, clarity, and consistency (like "unit tests for English") ^quality-commands

## G. Role bundles (README.md)

Extensions and presets are individual building blocks. A **bundle** packages a curated set of them — extensions, presets, steps, and workflows — into a single, versioned, role-oriented setup so a whole team persona (product manager, business analyst, security researcher, developer, …) can be provisioned with one command. ^bundles

## H. Audience wording (templates/spec-template.md at tags v0.0.1, v0.0.20, v0.0.55)

- 👥 Written for business stakeholders, not developers ^audience-early

- [ ] Written for non-technical stakeholders ^audience-early-checklist

Counter-check on the current release: the same file at tag v0.14.1 and at main carries no audience statement naming stakeholders, non-technical readers or developers; the only occurrence of "business" is the success-criteria placeholder "- **SC-004**: [Business metric, e.g., \"Reduce support tickets related to [X] by 50%\"]". ^audience-current
