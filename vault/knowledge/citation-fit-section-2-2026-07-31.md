# Citation-fit audit, Chapter 2 — 2026-07-31

Snapshot document. Five Opus research agents checked every source cited in chapter 2 of `knowledge/paper.md` (state after commit `70a7493`) on two dimensions: bibliographic accuracy of the reference or footnote entry, and fit between the source and the exact claim it is attached to. Verdict scale: supports / supports with caveat / does not support. Grokipedia was excluded as a source for all agents. The audit ran in step with the operator's read reaching chapter 2; the §2.3 IEEE attribution question was already on file from the §1 audit and stays on the chapter-2 consistency chain. Chapters 3 to 5 follow in step with the read.

## Verdict table

| Source | Bibliography | Fit verdict |
|---|---|---|
| Russell and Norvig 2020 | correct (AIMA 4th ed., §7.1 verified in full text) | supports with caveat; "on which an agent operates" is the safer analogy, since "guides" runs in AIMA through the inference the paper's sentence then excludes |
| Lewis et al. 2020 | correct; URL updated to the stable paper_files form (fixed) | supports (term anchor for RAG, coined in the source's abstract) |
| Hong, Troynikov, and Huber 2025 | URL had moved; updated to the current canonical address (fixed) | supports (the report targets exactly the uniform-processing assumption) |
| Karpathy 2026 (fn) | correct; gist is mutable, single revision so far | supports (all three elements verbatim in the gist) |
| Lucassen et al. 2016 | correct | supports with caveat; user-story half clean, acceptance criteria only named as constituent, not developed |
| Macedo 2026 | correct; v1 only, no pinning needed | supports (SDD as specification-as-source-of-truth is the source's own framing); weight caveat: single-author preprint |
| Sarkar and Drosos 2025 | venue correct; DOI is the preprint's, PPIG assigns none | does not support as written (see finding 1) |
| Fakhoury et al. 2024 | correct | supports (TiCoder formalises user intent into binding tests); "test-driven development" is broader than the source |
| Hora and Robbes 2026 | correct; proceedings version may now carry a publisher DOI | does not support the claim as stated (see finding 2) |
| Krumdick et al. 2025 | correct; first author's list now reports COLM 2026 | supports both halves of the joint claim |
| Szymanski et al. 2025 | pages 952–966 were missing (fixed) | supports with caveat; carries only the partial-agreement half (see finding 4) |
| Sterz et al. 2024 | correct | supports (four effectiveness conditions; "mere presence" gap explicit in the source) |
| Sharma et al. 2024 | correct; proceedings venue with arXiv DOI is the house pattern | supports with caveat; carries only the assumption-reproduction half (see finding 5) |
| Dell'Acqua et al. 2023 | correct as working paper; version of record now exists (see finding 9) | supports (jagged frontier and non-inferability both near-verbatim) |
| Green 2022 | correct | partial; carries only the third clause (see finding 3) |
| Hertzum 2024 | correct; article no. 37 optional | supports with caveat (anchors thinking aloud; the no-single-check point rests on Benito-Santos) |
| Benito-Santos et al. 2026 | correct | supports (monomethod critique and triangulation carry the sentence's second half) |
| Saltzer and Schroeder 1975 | DOI was wrong, registered DOI is 10.1109/PROC.1975.9939 (fixed, verified via Crossref) | supports (least privilege is principle 6, wording matches) |
| Hettrick et al. 2014 (fn) | correct; the deposit is a dataset, not a report | supports with caveat (carries software centrality; the gaps half leans on Carver) |
| Baltes, Cheong, and Treude 2026 (fn) | retitled in v3; pinned to v1 (fixed) | supports (all four attributed dimensions present) |
| Afroz et al. 2026 (fn) | correct | supports (both halves of the attributed summary) |
| Dingemanse 2024 (fn) | correct | supports (organised around the five values verbatim) |
| ALLEA 2023 (fn) | correct | supports |
| DFG 2023 (fn) | headline dash and URL added (fixed) | supports |
| EC Living Guidelines (fn) | correct; update date 8 May 2026 confirmed | supports |
| HLEG 2019 (fn) | correct | supports (three components and seven requirements verified in wording and order) |
| McLoughlin et al. 2026 (fn) | correct | supports with caveat; "development histories" unverified as a distinct item (paywalled) |
| Opara-Martins, Sahandi, and Tian 2016 (fn) | article number was misread as issue number (fixed) | supports with caveat; switching-costs element unverified behind paywall |
| Rosado de Souza et al. 2019 (fn) | first-author accent and pages 135–138 corrected (fixed) | supports with caveat; "governance, shared ownership, stewardship" exceed the source's abstract-level vocabulary (see finding 7) |
| Barker et al. 2022 (fn) | correct, article 622 confirmed | supports |
| Pollin 2025b | correct (title, date, canonical URL verified live) | supports (methodological elaboration, not a passing mention) |
| Pollin 2026a | correct | supports (develops Promptotyping against Vibe Coding and Context Engineering) |
| Pollin 2026b | trailing slash added to the URL (fixed); source titles with period and spaced dash, entry keeps Chicago colon | supports (asymmetric amplification is the post's central thesis) |
| SZD platform (fn) | URL correct | supports with caveat (see finding 8) |
| CLAUDE.md docs URL (proposed fn) | current canonical address, old docs.anthropic.com URL 301s to it | supports; page covers more scopes than the project level |
| AGENTS.md site (proposed fn) | correct | supports (tagline near-verbatim: "a simple, open format for guiding coding agents") |

## Findings requiring a text decision

1. **Sarkar and Drosos 2025 does not carry the vibe-coding definition as written.** "Generating code from natural-language instructions while accepting the implementation without thorough review" is the Karpathy formulation that the source quotes as "the Karpathy canon" and then empirically contradicts: the study observed frequent, albeit lightweight, code review and concludes that reviewing appears important for maintaining understanding, agency, and trust. Their own characterisation is conversational, iterative interaction in which the model handles significant portions of the coding work. Repair options: attribute the strict sense to Karpathy and cite Sarkar and Drosos for the empirical examination, or shift the contrast to the specification axis (Promptotyping's maintained knowledge base against conversational prompting), which the source supports.
2. **Hora and Robbes 2026 is narrower than the sentence it warrants.** The study documents that agent-authored test commits are more mock-heavy, and mock-heavy tests validate less real behaviour; it says nothing about tests codifying no judgement external to the generation. Repair: attach the citation to the observed weakness of agent-generated tests and let the external-judgement point stand as the paper's own argument (the Fakhoury contrast already carries it).
3. **Green 2022 carries only the third clause of its sentence.** The source strongly supports "the presence of a person in the workflow does not guarantee competent validation". The first clause (transparent documentation does not make an agent trustworthy) and the second (passing tests does not establish scholarly adequacy) run against the source's own institutional-oversight proposal, in which transparency and passed rigorous evaluations are precisely what ground appropriate adoption. Repair: bind the citation to the third clause; the first two stand as the paper's own claims or take other anchors.
4. **The joint LLM-as-judge claim splits unevenly.** Both sources carry partial expert agreement; the human-set-reference half is carried by Krumdick alone (kappa rises substantially with a human-written reference), while Szymanski has no reference-answer condition. Repair: split the citations across the two halves, or cite Szymanski only for partial agreement.
5. **Sharma et al. 2024 carries only the first half of its sentence.** Sycophancy experiments show models abandoning knowledge they demonstrably have in favour of the user's suggestion; gap-filling with unsupported plausible continuations is hallucination, not sycophancy, and is not the source's subject. Repair: split the sentence and give the second half its own source, or drop the second half from the citation's scope.
6. **McLoughlin et al. 2026, "development histories".** The abstract and accessible summaries confirm model internals and stable historical versions; "development histories" as a distinct third item could not be verified (full text paywalled). Option: drop or merge the item, or verify against the full text.
7. **Rosado de Souza et al. 2019 wording.** The source's own vocabulary is resourced, supported, and shared; "governance" and "continued stewardship" exceed what the accessible text states. Option: align the footnote's list with the source's terms or verify against the full text.
8. **SZD footnote phrasing.** Stefan Zweig Digital virtually reconstructs a dispersed estate (Salzburg, Fredonia, Jerusalem, Marbach); "the public archival and scholarly platform for the estate" can read as though one platform is the estate's archive. Option: "the reference research portal that virtually reconstructs the dispersed estate, run by the Literaturarchiv Salzburg". TEI delivery confirmed at source level (TEI_SOURCE endpoints on GAMS).
9. **Dell'Acqua et al. 2023 now has a version of record.** Published as *Organization Science* 37 (2), 2026, [https://doi.org/10.1287/orsc.2025.21838](https://doi.org/10.1287/orsc.2025.21838). Upgrading changes the in-text year to 2026; keeping the working paper is defensible but no longer cites the ranking version.
10. **Lucassen et al. 2016 and acceptance criteria.** The source names acceptance criteria as a user-story constituent in one introductory sentence and develops nothing further. Option: leave (the claim's weight is on user stories) or co-cite a dedicated acceptance-criteria source.

## Fixed in this round (commit follows this file)

- Saltzer and Schroeder: DOI corrected to 10.1109/PROC.1975.9939 (cited DOI returned 404; correction verified against Crossref and the doi.org redirect).
- Szymanski et al.: pages 952–966 added.
- Lewis et al.: URL updated to the stable paper_files form.
- Hong et al.: URL updated to the current canonical address (old address 301s).
- Baltes et al. footnote: pinned to arXiv:2603.27249v1 (retitled in v3), consistent with the Zhao/Schulhoff/Kwa pinning decisions.
- DFG footnote: headline punctuation aligned to the official en dash, press-release URL added.
- Opara-Martins et al. footnote: "no. 4" corrected to "article 4".
- Rosado de Souza et al. footnote: first author "Mario" per the form of record, pages 135–138 added.
- Pollin 2026b: trailing slash added to the URL (301 otherwise).

## Open observations, no action taken

- Krumdick et al. may now have a COLM 2026 proceedings version; the arXiv page carries no venue note yet.
- Sharma and Sarkar entries pair a proceedings venue with an arXiv DOI; this is the apparatus' existing pattern for such cases and was left unchanged.
- The Karpathy gist is mutable (single revision so far, active comment thread); the references list carries no access dates by convention.
- The Hettrick deposit is the survey dataset, not a prose report; a reader following the DOI gets data.
- L.I.S.A. currently brands itself without the genitive "der"; the entry keeps the long-standing full name.
- The operator's proposed §2.1 revision "that guides an agent's work" (Russell and Norvig) is carried, but the canonical "on which an agent operates" borrows the part of AIMA that survives the sentence's own no-inference disclaimer; noted for the read.

## Access limits, stated

ACM Digital Library (Hertzum, Benito-Santos, Szymanski, Sterz landing pages), ScienceDirect (Green), Nature (McLoughlin), Springer (Lucassen full body, Opara-Martins full text), and IEEE Xplore returned paywalls or bot blocks. Verdicts for these rest on Crossref records, official abstracts, open proceedings or author versions (FAccT PDF for Sterz, arXiv versions for Green, Szymanski, Fakhoury, Sarkar and Drosos, Benito-Santos), and institutional summaries. The McLoughlin and Opara-Martins caveats in findings 6 and 7 name exactly the unverified elements. The AIMA 4th-edition text was read via a public mirror and cross-checked against the official Berkeley chapter PDF.
