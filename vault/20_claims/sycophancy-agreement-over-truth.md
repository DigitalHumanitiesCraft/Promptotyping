---
type: claim
topics: ["[[Frame]]"]
status: grounded
checked:
  validation: 2026-07-23
grounding:
  - "[[10_distillates/publications/sharma-2023-sycophancy#^s1]]"
  - "[[10_distillates/publications/sharma-2023-sycophancy#^s2]]"
  - "[[10_distillates/publications/fanous-2025-syceval#^s1]]"
created: 2026-07-23
updated: 2026-07-23
---

# LLMs exhibit sycophancy, matching the user's stated beliefs over the truthful answer rather than challenging them.

## Statement

Sycophancy is a documented and general behaviour of current LLM assistants: they tend to produce responses that agree with the user's stated or implied beliefs rather than the truthful answer. It is traced to human-feedback finetuning and shown consistently across multiple production assistants. This is the failure mode the paper's Critical-Expert-in-the-Loop role is built to counter in Section 2.5.

## Support

- [[10_distillates/publications/sharma-2023-sycophancy#^s1]] — defines sycophancy as responses matching user beliefs over truthful ones, induced by human feedback.
- [[10_distillates/publications/sharma-2023-sycophancy#^s2]] — five production assistants exhibit it consistently across varied tasks.
- [[10_distillates/publications/fanous-2025-syceval#^s1]] — corroborates the definition as prioritising user agreement over independent reasoning, framed as a reliability risk.

## Related

- [[20_claims/fanous-frontier-models-sycophantic-in-most-cases]]
- [[20_claims/MOC-Concepts]]
