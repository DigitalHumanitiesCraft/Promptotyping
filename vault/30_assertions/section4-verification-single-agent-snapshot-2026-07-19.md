---
type: assertion
topics:
- '[[Evidence]]'
- '[[Limitations]]'
status: grounded
checked:
  validation: 2026-08-09
grounding:
- '[[20_distillates/documents/verification-paper-figures-2026-07-19#^s23]]'
- '[[20_distillates/documents/verification-paper-figures-2026-07-19#^s24]]'
- '[[20_distillates/documents/verification-paper-figures-2026-07-19#^s25]]'
created: 2026-07-19
updated: 2026-07-29
---

# The Section 5 verification was a single-agent snapshot with test figures counted as source functions.

## Statement

The figures verification ran as a single adversarial agent without a second independent pass, read repository states on 2026-07-19 via local clones, shallow clones, and the GitHub API so that later growth stays invisible to it, and counted test figures as test functions in source without executing a pytest collection. These bounds set how far its verdicts reach. The file name keeps the section number the evidence layer carried when the verification ran, so that existing anchors resolve.

## Support

- [[20_distillates/documents/verification-paper-figures-2026-07-19#^s23]] — records the single-agent design without a second pass.
- [[20_distillates/documents/verification-paper-figures-2026-07-19#^s24]] — records the snapshot reading date and the methods that make later growth invisible.
- [[20_distillates/documents/verification-paper-figures-2026-07-19#^s25]] — records the test-function counting rule in place of a pytest collection.

## Related

- [[30_assertions/klawiter-test-count-2026-07-19]]
- [[30_assertions/medieval-test-count-2026-07-19]]
