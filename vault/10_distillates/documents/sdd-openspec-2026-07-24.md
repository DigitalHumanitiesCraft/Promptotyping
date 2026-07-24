---
type: distillate
source-type: document
representation: "[[00_representation/documents/sdd-openspec-2026-07-24]]"
topics: ["[[Frame]]"]
status: grounded
checked:
  validation: 2026-07-24
created: 2026-07-24
updated: 2026-07-24
---

# Distillate: OpenSpec

OpenSpec belongs to the six-framework comparison set of Macedo 2026 and carries the wave's arrangement in its leanest form, plain Markdown requirements with scenarios, reviewed by the human before code is written. It widens the evidence base for the Section 2.5 delimitation beyond the three frameworks the paper names.

## Core statements

- The OpenSpec repository was created on 2025-08-05 and describes itself as spec-driven development for AI coding assistants. [[00_representation/documents/sdd-openspec-2026-07-24#^created]] ^s1
- A change proposal produces four artefacts, a proposal, requirement specifications with scenarios, a technical design and a task checklist. [[00_representation/documents/sdd-openspec-2026-07-24#^artefacts]] ^s2
- The specification form is deliberately plain Markdown with no notation to learn, holding requirements and concrete scenarios. [[00_representation/documents/sdd-openspec-2026-07-24#^plain-markdown]] ^s3
- Requirements are written as behaviour statements with when-then scenarios attached. [[00_representation/documents/sdd-openspec-2026-07-24#^requirement-form]] ^s4
- The review arrangement is that the agent writes and the human reviews the plan before any code is written. [[00_representation/documents/sdd-openspec-2026-07-24#^review]] ^s5
- The framework treats requirement ownership across teams as its scaling problem, with one team owning specifications that other teams and their agents read. [[00_representation/documents/sdd-openspec-2026-07-24#^shared-requirements]] ^s6
- The README lists no artefact describing external data sources or their semantics and defines no verification role bound to subject-matter competence. [[00_representation/documents/sdd-openspec-2026-07-24#^negative-data-audience]] ^s7

## Terms

- **Store**: an OpenSpec planning repository of its own, holding specifications and changes that several code repositories and their agents read. [[00_representation/documents/sdd-openspec-2026-07-24#^shared-requirements]]

## Open questions

- The shared-requirements arrangement makes the specification an object several parties read; the documentation does not say whether any of those parties lack software competence.

## Related

- [[10_distillates/documents/sdd-spec-kit-2026-07-24]]
- [[10_distillates/documents/sdd-kiro-2026-07-24]]
- [[10_distillates/documents/sdd-bmad-method-2026-07-24]]
- [[10_distillates/publications/macedo-2026-from-prompt-to-process]]
