# Citation-fit audit, Sections 1 and 1.1 — 2026-07-31

Snapshot document. Five Opus research agents checked every source cited in §1 and §1.1 of `knowledge/paper.md` (state after commit `fc8a215`) on two dimensions: bibliographic accuracy of the reference or footnote entry, and fit between the source and the exact claim it is attached to. Verdict scale: supports / supports with caveat / does not support. Grokipedia was excluded as a source for all agents. This audit covers the §1 and §1.1 apparatus only; the remaining chapters are unaudited.

## Verdict table

| Source | Bibliography | Fit verdict |
|---|---|---|
| Pichler and Reiter 2022 | correct | supports |
| Borek et al. 2021 (TaDiRAH, fn 1) | correct | supports (top concepts confirmed against live vocabulary API) |
| Zhao et al. 2023 (fn 4) | correct; arXiv version unpinned | supports on all four claim elements |
| Pollin et al. 2025 | volume 10 was missing (fixed) | supports with caveat |
| Pollin, KONDE Weißbuch (fn 5) | year, editors, Handle were missing (fixed) | supports |
| IEEE 2017 / Std 1012-2016 (fn 6, §2.3) | correct; superseded by IEEE 1012-2024 | fn 6: supports; §2.3 line-129 attribution: overreach |
| Wilkinson et al. 2016 | correct | main text: supports; fn 8 second half is authorial inference |
| Hitzler 2021 (fn 7) | correct | supports with caveat (full text inaccessible) |
| Geiger 2024 | correct; place Wolfenbüttel optional | supports |
| Drucker 2011 | correct; DHQ DOI now exists, optional | supports with caveat |
| Schöch 2013 | correct | supports with caveat |
| Ciula et al. 2023 | correct | supports (near-verbatim to p. 12 definition) |
| Flanders and Jannidis 2019 | title/place variants noted | supports with caveat (verified via precursor white paper only) |
| van Es, Wieringa, and Schäfer 2018 | correct | supports |
| Koolen, van Gorp, and van Ossenbruggen 2019 | correct | supports |
| Fickers 2020 | correct | supports, label caveat (self-identifies as digital hermeneutics) |
| Herrmann et al. 2023 | correct | supports (strongest single fit) |
| Edmond 2005 | correct | supports with caveat (predates the RSE term) |
| Baxter et al. 2012 | catalogued as conference abstract | supports (founding RSE statement) |
| Cohen et al. 2021 | correct | supports with caveat (loosest fit for the translation verb) |
| Kemman 2021 | correct | supports |
| Carver et al. 2022 | correct | does not support the scale claim (see finding 1) |
| Pollin 2025a (dissertation) | correct; URN optional | supports; page range 89–98 unverified |
| Pollin 2019 | correct | supports (verified element by element in full text) |
| URL footnotes (Gephi, TEI, Bookkeeping Ontology, DEPCHA) | all resolve | descriptions match |

## Findings requiring a text decision

1. **Carver et al. 2022 does not carry the scale claim.** §1.1 states "the necessary expertise and resources are not equally available to individual researchers and small projects (Carver et al. 2022)". The survey documents general insufficiency of expertise, training, and institutional support but does not stratify by project or team size; its differentials are by role and gender. The paper's own footnote on research-software surveys already cites Carver in the supportable form (persistent gaps across the lifecycle). Repair options: soften the body sentence to insufficiency and uneven distribution, or keep the scale claim and co-cite Cohen et al. 2021, which states that a research-group developer is frequently the only developer in the team or one of few.
2. **"missing … information" in the Drucker/Schöch sentence has no source.** Drucker carries interpretation and treats uncertainty in the register of graphical display; Schöch carries selection, relations, and ambiguity. Neither treats missing information. Repair options: drop "missing", or add a source that carries it.
3. **§2.3 IEEE attribution overreaches.** "Schemas, tests, constraints, and build procedures can be executed without domain judgement (IEEE 2017)" attributes to the standard a claim it does not make; IEEE 1012 specifies V&V processes, tasks, and integrity levels. Repair options: move the citation to the verification/validation terms themselves, or mark it as cf.
4. **"has shown" overstates the tool-criticism cluster.** Of the four works, only Herrmann et al. 2023 proceeds case-driven; van Es et al. explicitly disclaim demonstration and Koolen et al. rest on one workshop. "has argued" or "has established" fits what the cluster does. Propositional content is fully carried by all four.
5. **Pollin 2025a locator unverified.** The dissertation is publicly locatable (unipub, URN available) and the abstract confirms Scholar-Centred Design; whether pp. 89–98 is the correct range was not checked against the PDF.

## Conceptual flag

The back-reference "this operationalisation" opening §1.1's modelling paragraph points to a broader sense (making a domain computationally explicit for a purpose) than the narrow Pichler/Reiter sense (developing a measurement procedure for a concept) with which §1 introduces the term. The nearest textual antecedent is §1.1's own "made computationally explicit" sentence, so the demonstrative crosses an intervening shift of sense. Ciula et al. 2023 covers the broader use, since the book carries operationalisation as its own key term.

## Fixed in this round (commit follows this file)

- Pollin et al. 2025: volume 10 added to the reference entry.
- KONDE footnote: year 2024, editors, and Handle added.

## Optional bibliographic strengthening, not applied

- Geiger 2024: add place Wolfenbüttel per the ZfdG recommended citation.
- Drucker 2011: DHQ has since assigned DOI 10.63744/r4ysrh7ae534.
- Flanders and Jannidis 2019: cite the introduction chapter with pages 3–25 for a harder anchor; publisher metadata carries the title with "the" and place Abingdon/New York, against the cover form used in the entry.
- Pollin 2025a: add URN urn:nbn:at:at-ubg:1-220602 beside the repository URL.
- IEEE: note that Std 1012-2016 is superseded by 1012-2024 (abstract wording identical; the citation may stand on the cited edition).
- Zhao et al. 2023: pin the arXiv version.

## Resolutions, later the same day

Operator decisions and applied repairs after this audit (steering document decisions 22 to 24):

- Finding 1 (Carver): the scale sentence now stands alone and carries the co-citation (Cohen et al. 2021; Carver et al. 2022).
- Finding 2 (missing information): the Drucker/Schöch citation moved forward to the interpretation clause it carries; the modelling-decisions clause is authorial.
- Finding 3 (IEEE in §2.3): the citation now reads (IEEE 2025); the attribution question itself stays on the chapter-2 consistency chain.
- Finding 4: "has shown" became "has argued".
- Finding 5: the operator confirmed pp. 89–98.
- IEEE edition: the paper now cites IEEE Std 1012-2024 as IEEE 2025 (reference entry updated; title and publication year verified against the IEEE standards register).
- Apparatus: ZfdG volume 10 and the completed KONDE footnote were already applied with this audit's commit.

## Access limits, stated

IEEE 1012 clause-3 definitions, the Hitzler body text, and the Flanders/Jannidis volume are paywalled; verdicts for these rest on official abstracts, Crossref metadata, and (for Flanders/Jannidis) the authors' open precursor white paper. The Pollin 2025a PDF was not opened.
