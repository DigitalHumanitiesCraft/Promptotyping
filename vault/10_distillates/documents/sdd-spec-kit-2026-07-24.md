---
type: distillate
source-type: document
representation: "[[00_representation/documents/sdd-spec-kit-2026-07-24]]"
topics: ["[[Frame]]"]
status: grounded
checked:
  validation: 2026-07-24
created: 2026-07-24
updated: 2026-07-24
---

# Distillate: GitHub Spec Kit

Spec Kit is the Spec-Driven-Development framework the paper names by title in Section 2.5. Its own documentation fixes what the framework claims for its artefact set, its verification arrangement, its role model and its intended readership, and therefore bounds what the delimitation may assert about it.

## Core statements

- Spec Kit entered the public record with its announcement post of 2025-09-02, and its repository was created on 2025-08-21. [[00_representation/documents/sdd-spec-kit-2026-07-24#^created]] ^s1
- The framework describes the specification as a contract for the behaviour of the code and as the source of truth from which agents generate, test and validate. [[00_representation/documents/sdd-spec-kit-2026-07-24#^contract]] ^s2
- Its planning phase produces a dedicated `data-model.md` alongside research, contracts and quickstart artefacts, so a data-describing document exists in the framework's own artefact tree. [[00_representation/documents/sdd-spec-kit-2026-07-24#^data-model]] ^s3
- The data content of that artefact is the entity model of the system under construction, described as entities with attributes and relationships and derived from the feature requirements. [[00_representation/documents/sdd-spec-kit-2026-07-24#^key-entities]] ^s4
- The framework mandates explicit uncertainty markers, and the uncertainty they mark is underspecification of the requirements rather than uncertainty in an external source. [[00_representation/documents/sdd-spec-kit-2026-07-24#^uncertainty-markers]] ^s5
- Verification is an explicit and repeated obligation of the human, who reflects and refines at each phase checkpoint and answers for whether the generated artefacts are right. [[00_representation/documents/sdd-spec-kit-2026-07-24#^verify]] ^s6
- The person carrying that obligation is named as the developer reviewing the agent's focused changes. [[00_representation/documents/sdd-spec-kit-2026-07-24#^developer-reviews]] ^s7
- Machine-side quality assurance runs as cross-artefact consistency and coverage analysis and as generated checklists over requirement completeness, clarity and consistency. [[00_representation/documents/sdd-spec-kit-2026-07-24#^quality-commands]] ^s8
- Beyond the individual reviewer the framework locates review in a team process over versioned, branched and merged specifications. [[00_representation/documents/sdd-spec-kit-2026-07-24#^team-review]] ^s9
- The framework provisions role-oriented setups for team personas that include product manager, business analyst and security researcher next to developer. [[00_representation/documents/sdd-spec-kit-2026-07-24#^bundles]] ^s10
- Early releases of the specification template stated the intended readership expressly as business stakeholders and carried a checklist item requiring the specification to be written for non-technical stakeholders. [[00_representation/documents/sdd-spec-kit-2026-07-24#^audience-early]] ^s11
- The release current at retrieval carries no such audience statement in the specification template. [[00_representation/documents/sdd-spec-kit-2026-07-24#^audience-current]] ^s12

## Terms

- **Spec-Driven Development**: in this framework's usage, a process in which the specification is the source of truth that drives implementation, checklists and task breakdown, with the human steering and the coding agent writing. [[00_representation/documents/sdd-spec-kit-2026-07-24#^steer]]
- **data-model.md**: the phase-one planning artefact of Spec Kit that carries the entity model derived from the feature specification. [[00_representation/documents/sdd-spec-kit-2026-07-24#^data-model]]

## Open questions

- The framework names a data artefact and a verification obligation without binding either to a subject-matter warrant; whether that binding is absent by design or merely unstated cannot be settled from the documentation.
- Whether the removal of the business-stakeholder audience line between the early tags and the current release is a deliberate repositioning is not stated anywhere in the repository material retrieved here.
- The bundle mechanism provisions tooling for non-developer personas; the documentation does not say whether those personas author or only consume the specification.

## Related

- [[10_distillates/documents/sdd-kiro-2026-07-24]]
- [[10_distillates/documents/sdd-bmad-method-2026-07-24]]
- [[10_distillates/documents/sdd-openspec-2026-07-24]]
- [[10_distillates/publications/macedo-2026-from-prompt-to-process]]
