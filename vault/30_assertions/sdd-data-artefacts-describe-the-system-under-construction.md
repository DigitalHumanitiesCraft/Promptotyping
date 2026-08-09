---
type: assertion
topics:
- '[[Frame]]'
status: grounded
checked:
  validation: 2026-07-24
grounding:
- '[[20_distillates/documents/sdd-spec-kit-2026-07-24#^s3]]'
- '[[20_distillates/documents/sdd-spec-kit-2026-07-24#^s4]]'
- '[[20_distillates/documents/sdd-kiro-2026-07-24#^s3]]'
- '[[20_distillates/documents/sdd-kiro-2026-07-24#^s8]]'
- '[[20_distillates/documents/sdd-bmad-method-2026-07-24#^s10]]'
- '[[20_distillates/documents/sdd-openspec-2026-07-24#^s7]]'
created: 2026-07-24
updated: 2026-07-29
---

# The data artefacts of Spec-Driven-Development frameworks describe the system under construction, and none of them describes external sources or their semantics.

## Statement

Spec Kit produces a dedicated data-model artefact in its planning phase and Kiro's design document carries data flow diagrams, interfaces and database schemas, and in both cases the described object is the system being built, derived from its requirements. BMAD-METHOD and OpenSpec list no artefact whose purpose is describing external data sources at all, and Kiro's persistent context files cover product purpose, technology stack and project structure without touching sources. The difference the paper states is therefore one of the object of description rather than the presence of a data artefact.

## Support

- [[20_distillates/documents/sdd-spec-kit-2026-07-24#^s3]] — a dedicated data-model artefact exists in Spec Kit's own artefact tree.
- [[20_distillates/documents/sdd-spec-kit-2026-07-24#^s4]] — its content is the entity model of the system, derived from the feature requirements.
- [[20_distillates/documents/sdd-kiro-2026-07-24#^s3]] — Kiro's design artefact carries data descriptions of the system under construction.
- [[20_distillates/documents/sdd-kiro-2026-07-24#^s8]] — none of Kiro's foundational context files describes data sources or their semantics.
- [[20_distillates/documents/sdd-bmad-method-2026-07-24#^s10]] — the BMAD workflow map lists no artefact describing external data sources.
- [[20_distillates/documents/sdd-openspec-2026-07-24#^s7]] — the OpenSpec README lists no artefact describing external data sources.

## Related

- [[30_assertions/sdd-frameworks-converge-on-specification-over-prompt]]
- [[30_assertions/sdd-review-examines-internal-coherence]]
- [[30_assertions/MOC-Frame]]
