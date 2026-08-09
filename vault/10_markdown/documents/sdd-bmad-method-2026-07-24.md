---
type: representation
source-type: document
source: "[[_sources/sdd-bmad-method-2026-07-24.md]]"
converter: "manual extraction from the artefacts named per section, wording preserved; repository state pinned by the API metadata quoted in section A"
channel: collection
metadata:
  title: "BMAD-METHOD: repository metadata, README, agents reference and workflow map"
  creator: "BMad Method maintainers, BMad Code"
  date: "2025-04-13/2026-07-24"
  format: "text/markdown and text/html"
  identifier: "https://github.com/bmad-code-org/BMAD-METHOD"
  license: "MIT (repository); documentation site quoted for scholarly citation"
  confidential: false
created: 2026-07-24
updated: 2026-07-24
checked:
  validation: 2026-07-24
---

# BMAD-METHOD

Compact extract of the BMAD material relevant to the Section 2.5 delimitation, preserving the wording of the passages that carry the framework's agent roster, its phase artefacts, its validation gates and its account of context. Section markers name the retrieved artefact; the full retrieval provenance with URLs and dates sits in the source file.

## A. Repository metadata (GitHub API, retrieved 2026-07-24)

"created_at": "2025-04-13T14:54:25Z" ^created

"description": "Breakthrough Method for Agile Ai Driven Development" ^description

## B. Repository README

Traditional AI tools do the thinking for you, producing average results. BMad agents and facilitated workflows act as expert collaborators who guide you through a structured process to bring out your best thinking in partnership with the AI. ^collaborators

Specialized Agents — 12+ domain experts (PM, Architect, Developer, UX, and more) ^specialised-agents

## C. Agents reference

This page lists the default BMM (Agile suite) agents that install with BMad Method, along with their skill IDs, menu triggers, and primary workflows. Each agent is invoked as a skill. ^agents-are-skills

The default roster with its primary workflows: Analyst (Brainstorm, Market Research, Domain Research, Technical Research, Create Brief, PRFAQ Challenge, Document Project); Product Manager (Create/Update/Validate PRD, Create Epics and Stories, Implementation Readiness, Correct Course); Architect (Create Architecture, Implementation Readiness); Developer (Dev Story, Quick Dev, QA Test Generation, Code Review, Sprint Planning, Create Story, Epic Retrospective); UX Designer (Create UX Design); Technical Writer (Document Project, Write Document, Mermaid Generate, Validate Doc, Explain Concept). ^roster

## D. Workflow map

The BMad Method (BMM) is a module in the BMad Ecosystem, targeted at following the best practices of context engineering and planning. AI agents work best with clear, structured context. The BMM system builds that context progressively across 4 distinct phases - each phase, and multiple workflows optionally within each phase, produce documents that inform the next, so agents always know what to build and why. ^four-phases

bmad-spec produces the canonical machine contract: a five-field kernel (Why, Capabilities, Constraints, Non-goals, Success signal) plus companion files, validated so every load-bearing source claim is preserved. ^spec-kernel

bmad-check-implementation-readiness Gate check before implementation PASS/CONCERNS/FAIL decision; bmad-code-review Validate implementation quality Approved or changes requested ^gates

Each document becomes context for the next phase. The PRD tells the architect what constraints matter. The architecture tells the dev agent which patterns to follow. Story files give focused, complete context for implementation. Without this structure, agents make inconsistent decisions. ^document-chain

Recommended Create project-context.md to ensure AI agents follow your project's rules and preferences. This file works like a constitution for your project — it guides implementation decisions across all workflows. ^project-context

## E. Negative check on data and audience

Across the pages retrieved on 2026-07-24 the workflow map lists no artefact whose purpose is the description of external data sources or their semantics; the phase outputs are brief, PRD, spec, UX design, architecture, epics, stories, sprint status and review results. No readership for the produced documents is stated other than the agents of the following phase and the human working with them, and no verification role tied to subject-matter competence is defined. ^negative-data-audience
