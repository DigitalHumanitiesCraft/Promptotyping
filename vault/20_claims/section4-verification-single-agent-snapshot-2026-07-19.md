---
type: claim
topics: ["[[Evidence]]", "[[Limitations]]"]
status: grounded
checked:
  validation: 2026-07-19
grounding:
  - "[[10_distillates/documents/verification-paper-figures-2026-07-19#^s23]]"
  - "[[10_distillates/documents/verification-paper-figures-2026-07-19#^s24]]"
  - "[[10_distillates/documents/verification-paper-figures-2026-07-19#^s25]]"
created: 2026-07-19
updated: 2026-07-25
---

# The Section 5 verification was a single-agent snapshot with test figures counted as source functions.

## Statement

The Section 5 verification ran as a single adversarial agent without a second independent pass, read repository states on 2026-07-19 via local clones, shallow clones, and the GitHub API so that later growth stays invisible to it, and counted test figures as test functions in source without executing a pytest collection. These bounds set how far its verdicts reach. The evidence section carried the number 4 when the verification ran and carries the number 5 since the revision; the section references above were corrected on 2026-07-25, and the file name keeps the old number so that existing anchors resolve.

## Support

- [[10_distillates/documents/verification-paper-figures-2026-07-19#^s23]] — records the single-agent design without a second pass.
- [[10_distillates/documents/verification-paper-figures-2026-07-19#^s24]] — records the snapshot reading date and the methods that make later growth invisible.
- [[10_distillates/documents/verification-paper-figures-2026-07-19#^s25]] — records the test-function counting rule in place of a pytest collection.

## Related

- [[20_claims/klawiter-test-count-2026-07-19]]
- [[20_claims/medieval-test-count-2026-07-19]]
