# Citation-fit audit, Chapters 3 to 5 — 2026-07-31

Snapshot document. Three Opus research agents checked the remaining sources of `knowledge/paper.md` (state after commit `454f955`): the chapter-3 traditions and capability evidence and the chapter-4 project-URL footnotes. Chapter 5 introduces no new sources; its back-references (FAIR, Gephi, Dell'Acqua) were audited in the earlier rounds. Verdict scale: supports / supports with caveat / does not support. Grokipedia was excluded as a source for all agents. Together with `citation-fit-section-1-2026-07-31.md` and `citation-fit-section-2-2026-07-31.md`, this completes the audit of the paper's full apparatus.

## Verdict table

| Source | Bibliography | Fit verdict |
|---|---|---|
| Schön 1996 | correct (pages 171–189 confirmed via Crossref) | supports; the interview itself carries "backtalk" verbatim, so citing it over the 1983 book is defensible; "implemented" is the paper's sharpening |
| Goldschmidt 2003 | correct | supports with caveat; her medium is hand sketches, the transfer to implemented artefacts is plausible extension |
| Owens 2011 | correct | supports ("Data is always manufactured"; selectivity and machine-actionability both verbatim) |
| Posner 2015 | correct | supports with caveat; her critical register is flattened into a neutral warrant, content compatible |
| Stachowiak 1973 | correct; ISBN and a locator for the two features (pp. 131–133) optional | supports the abbreviation-for-purpose half exactly (Verkürzungsmerkmal, pragmatisches Merkmal); silent on inspectability and revisability |
| Mayr and Thalheim 2021 | correct (print year 2021 right despite 2020 online-first) | supports with caveat; "semi-formal" and "inspectable and revisable" are the paper's own extensions, not the source's terms |
| Galey and Ruecker 2010 | correct (LLC is the right journal name for 2010) | footnote paraphrase supports (abstract near-verbatim); main-text "experiments" only weakly covered |
| Whitelaw 2015 | DHQ has assigned a DOI; entry updated to it (fixed, resolution verified) | supports ("instead of demanding a query it would offer multiple ways in"; the query-formulation point verbatim via Belkin) |
| Glazer et al. 2024 (fn) | correct; no retitle, so no pin under the house policy, though the DOI now resolves to v7 | supports with caveat; carries "task-dependent" and the anti-automation caution strongly, but not "rapidly expanding" (see finding 4) |
| Hubert et al. 2025 (fn) | internally inconsistent: year 2025 beside the print apparatus 651 (8106): 607–613, which belongs to the 2026 version of record (see finding 5) | supports; both halves documented in the full text, including the authors' own scope caveats |
| Becker et al. 2025 (fn) | citation was incomplete (no identifier, no URL); completed with authors, arXiv ID, and DOI (fixed) | supports; RCT design, experienced developers, mature repositories, and the 19-percent slowdown against perceived speed-up all verbatim in the abstract |
| CorrespExplorer URLs (fn) | all three resolve | supports; CMIF, all named coordinated views, client-side processing, and the notBefore/notAfter interval representation verified on the live pages |
| ZBZ institutional page (fn) | resolves; title exact; "288 texts" still stated verbatim | supports |
| ZBZ repository (fn) | repository is private, anonymous readers get 404 (see finding 1) | E66 verified in the decision register via authenticated access and matches the case text closely; the "entity" stage was abolished by E71 (see finding 2) |
| coOCR/HTR (fn) | resolves | supports with caveat; eight of nine described elements verbatim, but the site does not call itself a "research preview" (see finding 3) |
| teiCrafter URLs (fn) | both resolve | supports; the two artefacts are unambiguously distinct software states, the footnote's warning is well founded |

## Findings requiring a text decision

1. **The ZBZ repository URL is not publicly readable.** `github.com/chpollin/zbz-ocr-tei` is a private repository; the footnote presents it as a citable reference, but no reader can open it. The public interface URL works. Options: make the repository public, drop the repository URL, or mark it explicitly as a private repository cited for provenance.
2. **The "entity" stage no longer exists.** Decision E71 (one day after E66) removed NER and entity linking entirely; the public interface filters Stream, OCR, Layout, TEI. The case sentence "intermediate OCR, layout, entity, and TEI states" describes an abandoned state. Options: delete "entity" or date the sentence historically. E66 itself is verified and matches the case text closely, including the register row marking the screening stage as abolished.
3. **coOCR/HTR does not describe itself as a "research preview".** The live page says "BETA Work in Progress – Developed with Promptotyping". Footnote and main text both attribute the "research preview" self-description. Options: adopt the site's own wording or drop the self-description clause; the footnote's feature list verifies element by element.
4. **Glazer et al. does not carry "rapidly expanding".** FrontierMath documents a capability gap (no 2024 model above a 2-percent success rate) and its versions through late 2025 report no newer models; the expansion evidence lives in Epoch AI's continuously updated leaderboard, which the paper does not cite. Options: restructure the footnote so Glazer carries the baseline and domain limits while Hubert carries the progress, or cite the ongoing results page in addition.
5. **The Hubert entry mixes two versions.** Year 2025 (online publication, 12 November 2025) stands beside volume 651, issue 8106, pages 607–613, which belong to the print version of record dated 2026; Nature's own cite-this-article gives 2026. Options: move to 2026 (changes the in-text citation) or keep 2025 with a "published online" note and without the print apparatus.
6. **The conceptual-models citation covers more than its sources.** Stachowiak and Mayr/Thalheim carry "abbreviate the project for a particular purpose" precisely; "semi-formal" and "inspectable and revisable by responsible contributors" are the paper's own extensions. Option: move the citation directly after the purpose clause so it reads on what the sources carry.

## Fixed in this round (commit follows this file)

- Becker et al. footnote completed: four authors, arXiv:2507.09089 (2025), DOI link. The footnote-only convention requires full citations.
- Whitelaw entry moved from the redirecting digitalhumanities.org URL to the newly assigned DHQ DOI 10.63744/4pg836gkjaeb (resolution verified), parallel to the Drucker DOI hardening.

## Open observations, no action taken

- Main-text "experiments" in the prototype sentence leans on the broader tradition rather than on Galey/Ruecker specifically; Schön's backtalk covers the experiential half.
- Posner is cited against her rhetorical grain (she laments the reduction the claim neutrally reports); compatible, noted for awareness.
- Stachowiak could carry a locator (pp. 131–133) for the two features; book entries in the list carry no page ranges by convention.
- The CorrespExplorer root URL is a landing page; the coordinated views live one click deeper at `explore.html`. Calling the root the public interface is defensible.
- The CorrespExplorer site is German-language; the paper is English. No action required.
- Glazer's author list grew from 22 (v1) to 24 (v7); the first-seven-plus-et-al. form is stable across versions.
- Becker: arXiv gives "Elizabeth Barnes" where secondary sources write "Beth Barnes"; the arXiv metadata name was used.

## Access limits, stated

MIT Press (Goldschmidt full text), ACM DL (Schön chapter page), SpringerLink (Mayr/Thalheim, despite CC BY), Nature (Hubert article page), and the Galey/Ruecker article body were not directly readable. Substitutes: the Stanford HCI full text of the Schön interview (verdict source-firm), Crossref plus the Technion abstract and a paged secondary quotation for Goldschmidt, Crossref/CoLab/Semantic Scholar abstracts and the authors' companion chapter for Mayr/Thalheim, Europe PMC full-text XML for Hubert (full text, not metadata), and the OUP abstract for Galey/Ruecker. Stachowiak was not consulted in the original; the three features rest on two paged scholarly secondary sources. The ZBZ repository was verified through the operator's authenticated gh session, which a reader of the paper cannot reproduce.
