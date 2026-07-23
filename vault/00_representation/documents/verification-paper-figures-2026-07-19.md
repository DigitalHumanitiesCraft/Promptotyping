---
type: representation
source-type: document
source: "[[_sources/verification-paper-figures-2026-07-19]]"
converter: "none (verbatim Markdown copy of the source; block IDs appended for anchoring)"
channel: handover
metadata:
  title: "Verification of Section 4 Figures"
  creator: "verification agent under the method author's direction, Digital Humanities Craft"
  date: "2026-07-19"
  format: "text/markdown"
  identifier: "https://github.com/DigitalHumanitiesCraft/Promptotyping/blob/7c209645b05492ce14c5aaafbe606235cb9b55e0/knowledge/verification-paper-figures.md"
  license: "no explicit license file for this document; public repository"
  confidential: false
created: 2026-07-19
updated: 2026-07-23
checked:
  validation: 2026-07-19
---

# Verification of Section 4 Figures

Adversarial verification of every quantitative claim in `_content/paper/04-*` (case-study table and insights) against the real repositories, run 2026-07-19 by an independent agent (local clones, shallow clones, GitHub API). This document carries the findings so the corrections can be applied in a later session. Once all corrections are in the paper and this document's open items are resolved, it is superseded by the paper itself.

## Confirmed as stated

Wheaton (1,124 transactions; 718 individuals), Hans Gross (3,892 objects), CorrespExplorer (11,576 letters; 12 coordinated views), Lucina (128 neo-Latin poems; 5 iterations), coOCR-HTR (567 tests per self-documentation, ~17,000 lines production JS at 17,762 actual, 197 commits, 67 fork commits), Austrian Dashboard (22 universities), ZBZ (286 PDFs; ~4,150 pages at 4,117 actual; over 30 Python scripts at 98 actual), Notker (Psalm 2, 13 verses; 6 text-layer controls), Klawiter (6,296 entries; 7-stage pipeline exists), FemPrompt (326 papers; 505-file vault; 68%/42% split as documented in-repo). ^conf

## Corrections to apply

Ordered by size of deviation. Where a figure appears in both the table and an insight, both occurrences deviate identically.

1. **Medieval Legal Transactions, "~6,400 TEI-XML documents".** Real: 3,611 XML files under `sources/`, 3,092 in `done/`-folders; no 6,400 figure found in the repo. Correct to "~3,600 TEI-XML documents (~3,100 released)" or, if 6,400 counts legal transactions inside the files, state that reference unit explicitly. ^c1
2. **ZBZ, "128 commits" and "six weeks".** Real: 305 commits spanning 2026-01-29 to 2026-07-09. Either "over 300 commits" with the real span, or date the 128/six-weeks figure as the initial build snapshot. ^c2
3. **ZBZ, "16 knowledge documents plus 3 Action Documents".** Real: 13 content documents plus index; the 3 Action Documents were not found. Correct to 13, drop or substantiate the Action Documents. ^c3
4. **VetMedAI / Austrian Dashboard, "76 Excel files".** Real: 79 (README, both mentions). Correct both table rows. ^c4
5. **VetMedAI, "41 documents".** Real: ~31 content documents in `knowledge/` (34 md including README). "Largest knowledge base" still holds at 31. ^c5
6. **HerData, "1,793 letters".** Not documented in the repo; README states 15,312 letters (full corpus of letters to Goethe). 1,793 is plausibly the women-related subset. Qualify the reference unit or verify against the frontend filter before the figure stays. ^c6
7. **M³GIM, "49 documented decisions".** Real: ~127 E-entries by now. Date the figure as a snapshot or update it. ^c7
8. **CorrespExplorer, "7 documents" and "37 user stories".** Real today: 13 knowledge files, 34 unique US-IDs. Keep 7 only if marked as the historical first-vault state; correct 37 to 34. ^c8
9. **Klawiter, "264 tests".** Real: 247 test functions; 264 reachable only as parametrised collection count. Set 247 or state the counting rule. ^c9
10. **Medieval, "381 regression tests" and "8 knowledge documents".** 192 test functions in 10 files; exact collection count needs a pytest run. Knowledge folder holds 6 content documents plus README. Re-count 381 via pytest collect or soften; correct 8 to 6. ^c10

## Not verifiable

- **Kulturpool Explorer:** linked repo `chpollin/vkm-explorer` returns 404 (renamed, private, or gone). Fix the link; ~19,000 objects is an API-scale value, not a repo count. ^nv1
- All duration and cost figures (~2h, ~3h, ~8h, ~5h, ~25h, one to two days, single working day, OCR under 10 EUR): experiential values, not deterministically checkable. CorrespExplorer's "46 journal phases" and "74+ tests" are self-documented and plausible. ^nv2

## Method note

Several deviations are snapshot drift, the paper describes an earlier state of still-growing repos (CorrespExplorer, M³GIM, ZBZ commits). For those, dating the figure is as valid as updating it; the choice is editorial and should be made consistently across Section 4. ^mn

## Grenzen

This is a scoped snapshot verification (a findings register for one correction pass), narrower than the full Verification template it references. Its limits: repository states were read on 2026-07-19 via local clones, shallow clones, and the GitHub API, so later growth is invisible to it; test figures were counted as test functions in source, without executing a pytest collection; duration and cost figures are experiential values outside deterministic checking; the verification ran as a single adversarial agent without a second, independent pass. ^lim

## Related

- `plan.md` (milestone M3)
- `_content/paper/04-*`
- `journal.md`
