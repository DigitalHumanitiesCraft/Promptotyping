---
type: claim
topics: ["[[ArtefactVerification]]"]
status: grounded
checked: {}
grounding:
  - "[[10_distillates/publications/strutz-2026-tei-evaluation-framework#^s3]]"
created: 2026-07-29
updated: 2026-07-29
---

# LLM-generated TEI encodings alter content, bias systematically towards modern language conventions, and apply encoding decisions inconsistently.

## Statement

A published evaluation of LLM-generated TEI names three recurring behaviours of the generated encodings, alteration of the content itself, a systematic bias towards modern language conventions, and inconsistent application of encoding decisions across documents. The first two are the reason the paper's Table 2 keeps data fidelity in the verification row wherever correctness is not deterministically decidable, because a silently modernised historical spelling passes every syntactic and schema check the deterministic layer can run. The third is what makes sampling the appropriate expert procedure, since an inconsistency shows only across documents.

## Support

- [[10_distillates/publications/strutz-2026-tei-evaluation-framework#^s3]] — the three named behaviours of LLM-generated encodings.

## Related

- [[20_claims/szd-htr-confabulated-reading-in-hasty-kurrent]]
- [[20_claims/tei-evaluation-assigns-its-dimensions-to-different-checking-regimes]]
