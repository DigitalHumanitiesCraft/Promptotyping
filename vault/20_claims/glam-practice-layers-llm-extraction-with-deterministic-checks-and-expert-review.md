---
type: claim
topics: ["[[ArtefactVerification]]"]
status: grounded
checked:
  validation: 2026-07-23
grounding:
  - "[[10_distillates/publications/fischer-2025-bildkarten#^s1]]"
  - "[[10_distillates/publications/fischer-2025-bildkarten#^s2]]"
  - "[[10_distillates/publications/fischer-2025-bildkarten#^s3]]"
  - "[[10_distillates/publications/fischer-2025-bildkarten#^s4]]"
created: 2026-07-23
updated: 2026-07-23
---

# GLAM practice brackets non-deterministic LLM extraction with deterministic regex post-checks and an expert correction interface.

## Statement

A published archival-cataloguing workflow combines LLM extraction from image cards with deterministic post-checks by regular expression, moving misassigned fixed-structure entries automatically, and a purpose-built correction interface where an expert checks, adjusts, deletes, and completes the extracted fields. This is the layering the paper's Section 6.2 invokes: where output fidelity is not decidable by a closed feedback loop, the non-deterministic step is checked by deterministic rules and, above that, by human review.

## Support

- [[10_distillates/publications/fischer-2025-bildkarten#^s1]] — LLM extraction from image cards, over 90 % with pre- and post-processing.
- [[10_distillates/publications/fischer-2025-bildkarten#^s2]] — regular grammars applied to the LLM output for structured extraction.
- [[10_distillates/publications/fischer-2025-bildkarten#^s3]] — regular expressions verify and correct fixed-structure inventory numbers.
- [[10_distillates/publications/fischer-2025-bildkarten#^s4]] — expert correction interface over the extracted fields.

## Related

- [[20_claims/MOC-Method]]
