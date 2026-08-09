---
type: distillate
source-type: document
representation: "[[00_representation/documents/szd-htr-fair4rs-audit-2026-07-23]]"
topics: ["[[Evidence]]"]
status: grounded
checked:
  validation: 2026-07-23
created: 2026-07-23
updated: 2026-07-23
---

# Distillate: SZD-HTR FAIR4RS audit (2026-07-23)

The audit checked the SZD-HTR repository criterion by criterion against the FAIR4RS principles v1.0 on 2026-07-23, via local clone and GitHub API, and records an uneven profile: accessibility holds by construction, reusability largely holds with provenance as the method's strength, findability fails throughout.

## Core statements

- The audit ran on 2026-07-23 against the FAIR4RS principles v1.0 (RDA, DOI 10.15497/RDA00068), per criterion, using the local clone at commit 29a350c and the GitHub API. [[00_representation/documents/szd-htr-fair4rs-audit-2026-07-23#^proc]] ^s1
- All findability principles fail at the snapshot: no persistent identifier (F1), no version identifiers or releases (F1.2), no machine-readable metadata (F2 partial, F3, F4), and empty GitHub description and topics. [[00_representation/documents/szd-htr-fair4rs-audit-2026-07-23#^find]] ^s2
- Accessibility holds by construction: repository and Pages viewer are retrievable over HTTPS without proprietary tooling (A1, A1.1); A2 fails as a consequence of F4. [[00_representation/documents/szd-htr-fair4rs-audit-2026-07-23#^find]] ^s3
- Reusability largely holds: provenance is fulfilled above the ordinary (R1.2, via README genesis account, journal, and git history), qualified dependency references exist (R2), domain standards are met (R3); the licence is present but not SPDX-detectable and unusual for code (R1.1 partial). [[00_representation/documents/szd-htr-fair4rs-audit-2026-07-23#^find]] ^s4
- The audit's verdict is that the paper's claim holds: accessibility by construction, reusability largely with provenance as the method's strength, findability unfulfilled as the normal condition of a never formally published prototype, and the findability gap is publication work. [[00_representation/documents/szd-htr-fair4rs-audit-2026-07-23#^verd]] ^s5
- The audit is a single-day snapshot by a single pass without a second independent checker, and the F1.1/A1.2 weightings are interpretation. [[00_representation/documents/szd-htr-fair4rs-audit-2026-07-23#^lim]] ^s6
