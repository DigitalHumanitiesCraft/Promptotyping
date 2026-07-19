---
type: distillate
source-type: document
representation: "[[00_representation/documents/verification-paper-figures-2026-07-19]]"
topics: ["[[Evidence]]"]
status: grounded
checked:
  validation: 2026-07-19
created: 2026-07-19
updated: 2026-07-19
---

# Distillate: Section 4 figures verification (2026-07-19)

The adversarial verification of paper Section 4 records which quantitative figures held against the real project repositories on 2026-07-19, which figures deviated and by how much, which items lie outside deterministic checking, and the scope limits of the verification itself.

## Core statements

- The verification confirms Wheaton's stated figures against the repository, 1,124 transactions and 718 individuals. [[00_representation/documents/verification-paper-figures-2026-07-19#^conf]] ^s1
- The verification confirms the Hans Gross figure against the repository, 3,892 objects. [[00_representation/documents/verification-paper-figures-2026-07-19#^conf]] ^s2
- The verification confirms CorrespExplorer's stated figures against the repository, 11,576 letters and 12 coordinated views. [[00_representation/documents/verification-paper-figures-2026-07-19#^conf]] ^s3
- The verification confirms Lucina's stated figures against the repository, 128 neo-Latin poems and 5 iterations. [[00_representation/documents/verification-paper-figures-2026-07-19#^conf]] ^s4
- The verification confirms coOCR-HTR's stated figures against the repository, 567 tests per self-documentation, about 17,000 lines of production JavaScript (17,762 actual), 197 commits, and 67 fork commits. [[00_representation/documents/verification-paper-figures-2026-07-19#^conf]] ^s5
- The verification confirms the Austrian Dashboard figure against the repository, 22 universities. [[00_representation/documents/verification-paper-figures-2026-07-19#^conf]] ^s6
- The verification confirms ZBZ's stated figures against the repository, 286 PDFs, about 4,150 pages (4,117 actual), and over 30 Python scripts (98 actual). [[00_representation/documents/verification-paper-figures-2026-07-19#^conf]] ^s7
- The verification confirms Notker's stated figures against the repository, Psalm 2 with 13 verses and 6 text-layer controls. [[00_representation/documents/verification-paper-figures-2026-07-19#^conf]] ^s8
- The verification confirms Klawiter's stated figures against the repository, 6,296 entries and the existence of a 7-stage pipeline. [[00_representation/documents/verification-paper-figures-2026-07-19#^conf]] ^s9
- The verification confirms FemPrompt's stated figures against the repository, 326 papers, a 505-file vault, and a 68 percent to 42 percent split as documented in-repo. [[00_representation/documents/verification-paper-figures-2026-07-19#^conf]] ^s10
- On 2026-07-19 the Medieval Legal Transactions repository holds 3,611 XML files under `sources/` and 3,092 in `done/` folders, and no figure of 6,400 was found in the repository. [[00_representation/documents/verification-paper-figures-2026-07-19#^c1]] ^s11
- On 2026-07-19 the ZBZ repository shows 305 commits spanning 2026-01-29 to 2026-07-09. [[00_representation/documents/verification-paper-figures-2026-07-19#^c2]] ^s12
- On 2026-07-19 the ZBZ knowledge base holds 13 content documents plus an index, and the 3 Action Documents the paper names were not found. [[00_representation/documents/verification-paper-figures-2026-07-19#^c3]] ^s13
- On 2026-07-19 the VetMedAI / Austrian Dashboard repository README states 79 Excel files in both of its mentions. [[00_representation/documents/verification-paper-figures-2026-07-19#^c4]] ^s14
- On 2026-07-19 the VetMedAI knowledge base holds about 31 content documents in `knowledge/` (34 Markdown files including the README). [[00_representation/documents/verification-paper-figures-2026-07-19#^c5]] ^s15
- On 2026-07-19 the HerData repository README states 15,312 letters as the full corpus of letters to Goethe, the paper's 1,793-letter figure is not documented in the repository, and it is plausibly the women-related subset. [[00_representation/documents/verification-paper-figures-2026-07-19#^c6]] ^s16
- On 2026-07-19 the M³GIM repository holds about 127 E-entries. [[00_representation/documents/verification-paper-figures-2026-07-19#^c7]] ^s17
- On 2026-07-19 the CorrespExplorer repository holds 13 knowledge files and 34 unique US-IDs. [[00_representation/documents/verification-paper-figures-2026-07-19#^c8]] ^s18
- On 2026-07-19 the Klawiter repository holds 247 test functions, and the figure of 264 is reachable only as a parametrised collection count. [[00_representation/documents/verification-paper-figures-2026-07-19#^c9]] ^s19
- On 2026-07-19 the Medieval Legal Transactions repository holds 192 test functions across 10 files and a knowledge folder of 6 content documents plus a README, with the exact regression collection count requiring a pytest run. [[00_representation/documents/verification-paper-figures-2026-07-19#^c10]] ^s20
- On 2026-07-19 the linked Kulturpool Explorer repository `chpollin/vkm-explorer` returns 404, and the about 19,000 objects figure is an API-scale value rather than a repository count. [[00_representation/documents/verification-paper-figures-2026-07-19#^nv1]] ^s21
- The duration and cost figures of Section 4 are experiential values that lie outside deterministic checking. [[00_representation/documents/verification-paper-figures-2026-07-19#^nv2]] ^s22
- The verification ran as a single adversarial agent without a second, independent pass. [[00_representation/documents/verification-paper-figures-2026-07-19#^lim]] ^s23
- The verification read repository states on 2026-07-19 via local clones, shallow clones, and the GitHub API, so later growth is invisible to it. [[00_representation/documents/verification-paper-figures-2026-07-19#^lim]] ^s24
- The verification counted test figures as test functions in source, without executing a pytest collection. [[00_representation/documents/verification-paper-figures-2026-07-19#^lim]] ^s25
- Several Section 4 deviations are snapshot drift, where the paper describes an earlier state of still-growing repositories, so dating a figure is as valid as updating it. [[00_representation/documents/verification-paper-figures-2026-07-19#^mn]] ^s26

## Terms

- **Snapshot drift**: the gap between a figure the paper states and the current repository state, arising because the repository kept growing after the figure was recorded. [[00_representation/documents/verification-paper-figures-2026-07-19#^mn]]
- **Test function counting**: counting tests as the number of test functions defined in source, distinct from the parametrised collection count a pytest run would report. [[00_representation/documents/verification-paper-figures-2026-07-19#^c9]]

## Open questions

- Whether the paper's 6,400 figure for Medieval Legal Transactions counts legal transactions inside the files rather than files, which the source leaves as an editorial decision.
- Whether HerData's 1,793 figure is the women-related subset of the 15,312-letter corpus, which the source marks as plausible but unverified against the frontend filter.

## Related

- [[20_claims/wheaton-figures-verified-2026-07-19]]
- [[00_representation/documents/verification-paper-figures-2026-07-19]]
