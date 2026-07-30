---
title: Verification of the deduplication pass on paper-draft.md, 2026-07-30
project:
  name: Promptotyping Site
  repository: https://github.com/DigitalHumanitiesCraft/Promptotyping
status: snapshot
language: en
version: 0.1
created: 2026-07-30
updated: 2026-07-30
authors: [Christopher Pollin]
generated-with: Claude Code (Claude Opus 5)
method:
  name: Promptotyping
  url: https://dhcraft.org/Promptotyping/
template:
  name: Vorlage Verification
  version: 0.2
  url: https://dhcraft.org/Promptotyping/promptotyping-document/verification
related: [paper-draft, redundancy-inventory-2026-07-30, sanitation-report-2026-07-30, paper-knowledge, journal]
---

# Verification of the deduplication pass on paper-draft.md, 2026-07-30

Independent check by a verifier who did not perform the rewrite. Compared were the inventory `knowledge/redundancy-inventory-2026-07-30.md` (233 components), the pre-sanitation manuscript `git show e30bedb:knowledge/paper-draft.md` (560 lines), the current `knowledge/paper-draft.md` (500 lines), and the rewriter's `knowledge/sanitation-report-2026-07-30.md`, whose claims were treated as unverified until checked against the file itself. Line numbers refer to the current manuscript. Nothing was repaired; this document is the only file written.

## Overall verdict

**REJECT, with two mandatory sentence-level repairs. No information was lost.**

The information-survival result is clean. All 96 `unique` components and all 50 named increments are present, with one licensed exception whose licensing condition holds. All 17 protected repetitions are present. No deletion was found that the inventory does not license, and no unlicensed content was added beyond the one declared transitional sentence. The rewrite should not be reverted.

Two anaphors introduced by the deletions no longer resolve, and both need a clause. They are listed under check 4 as V-1 and V-2. A further six observations are recorded as non-blocking.

## Verdicts per check

| Check | Subject | Verdict |
| :---- | :---- | :---- |
| 1 | Survival of 96 `unique` and 50 increments | **pass** (145/146 present; C-10 licensed absent, condition verified) |
| 2 | 17 protected repetitions | **pass** (17/17 present, plus the two protected variants) |
| 3 | Frozen zones §1, §1.1, §2.1, §2.2 verbatim | **pass with declared deviations** (no retained word reworded; four normalisations and one demonstrative resolution beyond the report's declaration) |
| 4 | Coherence | **fail** (2 broken anaphors, V-1 and V-2) |
| 5 | Apparatus | **pass** in the entries-to-citations direction and for the footnote work; **fail** in the citations-to-entries direction (8 items, all pre-existing and declared) |
| 6 | Canonical four-member relation | **pass** (four canonical homes, member names uniform; one licensed caption exception) |
| 7 | Figures | **pass** (5 embeds, 5 files present, captions numbered 1 to 5) |

---

## Check 1. Survival

Method: each component was searched as an exact substring of a distinctive phrase from the inventory's wording column, after normalisation of typographic quotes and dashes. A hit records the line at which the claim stands. Every hit was then read in its paragraph to confirm that the substance, and for increments the named increment, is what survives rather than the phrase alone.

Legend: `u` = `unique`, `i` = `variant-with-increment`. All entries below are verdict **present** unless marked otherwise.

**Cluster A** (13 u, 8 i)
A-02 l.15 · A-10 l.99 · A-11 l.99 · A-16 l.113 · A-18 l.125 · A-29 l.173 · A-32 l.175 · A-33 l.175 · A-34 l.177 · A-35 l.177 · A-37 l.177 · A-45 l.177 and l.259 · A-46 l.255 || A-04 l.27 · A-06 l.49 · A-17 l.121 · A-19 l.129 · A-23 l.155 · A-25 l.157 · A-36 l.177 · A-39 l.213

A-45 was relocated into §2.4 as the inventory's deviation row directs and additionally retained in the Figure 4 caption, which the report attributes to an operator instruction. A-36 stands with all three limbs, which is the condition the inventory attaches to the deletion of C-10.

**Cluster B** (5 u, 1 i)
B-01 l.27 · B-03 l.27 · B-08 l.181 · B-09 l.181 · B-11 l.321 || B-10 l.183

**Cluster C** (9 u, 2 i)
C-02 l.39 · C-03 l.39 · C-04 l.41 · C-05 l.41 · C-07 l.65 · **C-10 absent, licensed** · C-15 l.339 · C-17 l.339 · C-19 l.460 (fn13) || C-08 l.65 · C-11 l.173

C-10 ("Documentation is necessary to this organisation but does not by itself establish accountability") carries the inventory's own conditional, "Keep, unless A-36 retains its full triad" (note 3 on cluster A). A-36 retains all three limbs at l.177, so the condition is met and the absence is licensed rather than a loss. C-03 was reformulated from "not only … but also" to "Beyond increased model capability, the methodologically relevant change is …", which applies the inventory's style note D8 and preserves the claim. §1.2 lies outside the freeze, so the reformulation is admissible; the report does not declare it.

**Cluster D** (9 u, 3 i)
D-01 l.189 · D-02 l.189 · D-03 l.189 · D-04 l.189 · D-06 l.484 (fn25) · D-07 l.213 · D-08 l.213 · D-11 l.305 · D-13 l.305 || D-09 l.213 · D-10 l.213 · D-12 l.305

**Cluster E** (7 u, 5 i)
E-04 l.95 · E-05 l.95 · E-06 l.95 · E-07 l.93 · E-14 l.285 · E-15 l.247 · E-16 l.255 || E-03 l.61 · E-10 l.179 · E-11 l.179 · E-12 l.209 · E-13 l.285

**Cluster F** (16 u, 7 i)
F-04 l.97 · F-05 l.97 · F-06 l.97 · F-07 l.97 · F-12 l.99 · F-14 l.159 · F-15 l.159 · F-16 l.161 · F-17 l.161 · F-18 l.161 · F-19 l.161 · F-20 l.163 · F-22 l.163 · F-30 l.217 · F-32 l.217 · F-33 l.217 || F-13 l.159 · F-21 l.163 · F-23 l.163 · F-25 l.165 · F-27 l.217 · F-31 l.217 · F-36 l.285

**Cluster G** (3 u) G-03 l.213 · G-04 l.213 · G-06 l.297
**Cluster H** (4 u, 1 i) H-02 l.189 · H-03 l.189 · H-04 l.213 · H-06 l.213 || H-01 l.151
**Cluster I** (3 u, 1 i) I-01 l.19 · I-04 l.195 · I-05 l.195 || I-03 l.87
**Cluster J** (3 u, 1 i) J-01 l.9 · J-02 l.13 · J-04 l.23 || J-03 l.23
**Cluster K** (2 u, 4 i) K-01 l.13 · K-04 l.27 || K-03 l.27 · K-06 l.191 · K-07 l.199 · K-08 l.337
**Cluster L** (1 u, 1 i) L-01 l.119 || L-04 l.217
**Cluster M** (1 u, 5 i) M-01 l.127 || M-02 l.133 · M-03 l.149 · M-06 l.207 · M-07 l.269 · M-08 l.326
**Cluster N** (5 u) N-01 l.33 · N-02 l.35 · N-05 l.67 · N-06 l.67 · N-07 l.87
**Cluster O** (2 u, 4 i) O-04 l.71 · O-05 l.71 || O-01 l.33 · O-02 l.51 · O-07 l.113 · O-08 l.466 (fn16)
**Cluster P** (1 u, 2 i) P-02 l.119 || P-03 l.183 · P-04 l.209
**Cluster Q** (1 u) Q-03 l.49
**Cluster R** (2 u) R-01 l.37 · R-04 l.113
**Cluster S** (5 u, 1 i) S-01 l.103 · S-03 l.105 · S-05 l.145 · S-07 l.147 · S-09 l.245 || S-06 l.245
**Cluster T** (3 u, 4 i) T-03 l.225 · T-05 l.295 · T-06 l.295 || T-02 l.213 · T-04 l.291 · T-07 l.319 · T-08 l.287
**Cluster U** (1 u) U-02 l.83

**Result: 145 of 146 present, one licensed absence. No miss.**

### Counter-check for unlicensed loss

The inventory can only protect what it inventoried. A sentence-level diff of the whole manuscript against `e30bedb` was therefore run in both directions, matching every sentence of the pre-sanitation text against its nearest counterpart in the current text at a similarity threshold of 0.85.

Every disappeared sentence maps to an inventory row that licenses its deletion or reduction, to a figure placeholder replaced by an image embed, or to one of the two text-defect repairs the report declares. No sentence disappeared that the inventory does not account for.

In the reverse direction, every sentence without a pre-sanitation counterpart is a truncation, a member-name normalisation, or a back-reference formed from surviving material, with one exception. The single genuinely new sentence is the declared transition at l.167, "How this organisation relates to the wider requirements of accountable research software development, and where its limits lie, is the subject of the following section." It carries no claim, which is what the inventory's structural-consequence note requires.

## Check 2. Protected repetitions

| ID | Present at | Verdict |
| :---- | :---- | :---- |
| A-01 (Abstract, responsibility clause) | l.5 | pass |
| A-21 (checking-form functional mention) | l.131 | pass |
| A-22 (Table 1 role column, three rows) | l.140, l.142, l.143 | pass |
| A-38 (§2.4 closing enumeration limb) | l.183 | pass |
| A-42 (§5.3 terminal statement) | l.341 | pass |
| A-44 (Figure 2 caption) | l.117 | pass |
| B-02 (§1.1 motivating variant) | l.27 | pass |
| C-01 (Abstract, knowledge base) | l.5 | pass |
| C-14 (§2.4 closing enumeration limb) | l.183 | pass |
| C-16 (§5.3 premise of the increment) | l.339 | pass |
| E-01 (Abstract, write-back) | l.5 | pass |
| F-01 (Abstract, promptotype relation) | l.5 | pass |
| F-03 (Figure 1 caption) | l.81 | pass |
| J-05 (§5.3 return to the opening) | l.335 | pass |
| M-05 (limb of the A-36 triad) | l.177 | pass |
| Q-01 (Abstract, method definition) | l.5 | pass |
| T-01 (Abstract, evidential limitation) | l.5 | pass |

The two components that are protected but classed `variant-with-increment` rather than `repetition` are also present, A-19 at l.129 and E-13 at l.285. The research question named in the check brief is A-02 at l.15, verified under check 1.

**Result: 17 of 17 present.**

Report accuracy: the sanitation report's roster under "Protected repetitions verified present" lists eighteen items, includes A-19 and E-13, which are protected variants rather than protected repetitions, and omits A-42. A-42 is in fact present, so the roster is mislabelled without consequence for the text.

## Check 3. Frozen zones

Method: §1 with §1.1, §2.1, and §2.2 were split into sentences in both versions after removal of the Google Docs escape artefacts, and every sentence of the current text was matched against the pre-sanitation set. Nine sentences differ. Their classification follows.

**Admissible under the freeze rule as stated in the brief**

| Location | Change | Class |
| :---- | :---- | :---- |
| §1 l.15 | "Section 5 defines its scope and limits, outlines … , and concludes …" reduced to "… scope and limits and outlines priorities for evaluation and transfer." (A-03) | deletion plus a conjunction |
| §1.1 l.27 | First conjunct of A-04 deleted, "not" capitalised to open the sentence | deletion plus sentence-initial capital |
| §2.1 l.49 | "They maintain that knowledge" resolved to "Researchers and contributors maintain that knowledge" (after A-05 was deleted) | pronoun resolution |
| §1 l.15 | F-02 truncated to "It also defines the versioned *promptotype*." | truncation, no retained word altered |
| §1.1 l.27 | Q-02 tail "through LLM-based AI agents" dropped | truncation, no retained word altered |
| §2.1 l.55 | U-01 tail "through user stories and acceptance criteria" dropped | truncation, no retained word altered |
| §2.2 l.79 to l.81 | Figure 1 placeholder replaced by the image embed | production change, caption text untouched apart from the row below |

**Deviations beyond the report's declaration**

The report declares "two minimal connective adjustments … (a pronoun in §2.1 l.49, a sentence-initial capital in §1.1 l.27)". Three further changes inside the frozen zones alter or insert words, and all three are substantively justified elsewhere in the report without being counted there.

1. **§2.2 l.81, Figure 1 caption.** "the digital research artefact" became "the resulting digital research artefact". Word insertion, mandated by the canonical-relation normalisation of section 2 of the report.
2. **§2.2 l.97, F-05.** "the referenced state of the research data" became "the referenced research-data state". Reformulation, same mandate.
3. **§2.2 l.99, F-12.** "This relation allows researchers …" became "The promptotype relation allows researchers …". Demonstrative resolved after the deletion of F-10 and F-11 removed its antecedent. This is a third connective adjustment of the same class as the declared pronoun, and it is correct as a repair; it is simply not declared.

**Apparatus change inside a frozen zone**

§1.1 l.23, the tool-criticism citation, changed from "(Fickers 2020; van Es 2023; Herrmann et al. 2023)" to "(Fickers 2020; van Es, Wieringa, and Schäfer 2018; Koolen, van Gorp, and van Ossenbruggen 2019; Herrmann et al. 2023)". The prose is untouched. This executes inventory row D6 and, per the report, an operator instruction to fix the citation rather than prune the works.

**Result: no retained word of the frozen prose was reworded.** Every difference is a deletion, a truncation, a declared connective repair, an undeclared connective repair of the same class, a canonical-relation normalisation, or a citation repair. The zones hold on substance; the report's count of adjustments is understated.

## Check 4. Coherence

The current manuscript was read end to end. Cross-references were verified individually against their targets.

### Blocking findings

**V-1. Dangling anaphor at l.111, §2.3.** The text reads "Corpus profiles and validation reports can be regenerated from the current project state. They remain distinguishable from the maintained scholarly account of what those observations mean and how they should affect transcription or verification." The noun "observations" stood in the clause deleted as O-06 ("exposing structural observations without requiring the full collection to be reproduced in the model context"). "Those observations" now points at nothing in the paragraph. Repair by restoring an object noun to the first sentence or by rewriting the reference.

**V-2. Unanchored topic at l.217, §3.4.** The section now opens "An accepted promptotype is a bounded and identifiable scholarly state. Publication introduces additional obligations because external users must be able to understand the purpose, data basis, limitations, and status of the released artefact." The word "publication" entered the section through F-29, deleted here, which listed "exploration, internal use, comparison, handover, or publication". Publication now arrives without a lead-in, and the paragraph jumps from a definitional characterisation to an obligation attached to one purpose. Repair by a bridging clause naming the range of purposes, which is available at F-17 in §2.3.

### Non-blocking findings

**V-3. Weakened antecedent at l.131, §2.3.** "This authority is not transferred to the agent" (A-21, protected) follows "… and is exercised in the role defined in Section 2.2", the back-reference that replaced A-20. The noun "authority" no longer appears in the preceding sentence, so the reader supplies it from "role". The report claims the reduction was shaped "so that A-21 keeps its antecedent"; the antecedent is recoverable but no longer explicit.

**V-4. Thinned inference at l.175, §2.4.** "The forms of checking defined in Section 2.3 produce evidence with different scope. **Accountability therefore requires a distinction between evidence and authority.**" The middle term that carried the "therefore" was A-31, deleted as a duplicate of cluster M. The following sentence (A-33) supplies the ground after the fact, so the inference holds in reverse order rather than breaking.

**V-5. Paragraph without a topic noun at l.209, §3.2.** The fourth paragraph produced by the declared split of §3.2 consists of one sentence opening "Their epistemic importance lies in …". The antecedent, Promptotyping Documents, sits at the start of the previous paragraph.

**V-6. Displaced antecedent at l.179, §2.4.** "This distinction also limits the claims …" refers to the distinguishability stated in A-37, which is now two sentences back because the relocated A-45 was placed between them. Recoverable, since A-45 states the same distinction operatively.

**V-7. Residual gap from the D-10 reduction at l.213, §3.3.** The reduction replaced "existing domain knowledge, … the capacity to assess generated results, … and access to capable models and infrastructure" with a back-reference to "the conditions named at the opening of this chapter". The §3 opening names "the available project knowledge" where D-10 named "existing domain knowledge". The two are not the same object. The inventory licenses the reduction, so this is recorded rather than charged against the pass.

**V-8. Figures 3 to 5 and Tables 1 to 3 carry no in-text reference.** They appear only in their caption lines. The same was true before the pass, so the defect is inherited rather than introduced.

### Cross-references verified

All section references resolve: §1 l.15 (Sections 1 to 5), §2.3 l.103 ("Section 4.2"), §2.3 l.131 ("Section 2.2", role definition present at l.99), §2.3 l.151 ("Section 3", jaggedness present at l.189), §2.4 l.175 ("Section 2.3"), §2.4 l.179 ("Section 2.2", relation present at l.97), §3.3 l.213 ("Section 5.1" and "the opening of this chapter"), §3.4 and §4 l.221 ("Section 2.2"), §4.1 l.225 and §5.1 l.295 ("as noted in Section 4.1", target present), §4.2 l.245 ("Section 2.3"), §5 l.291 (Sections 5.1 to 5.3), §5.1 l.297 ("Section 3.3"), §5.1 l.305 ("Section 3.3"). Figure 1 is referenced at l.99, Figure 2 at l.113.

Footnote markers: 33 definitions, 33 uses, no orphan, no duplicate, use order identical to numbering.

## Check 5. Apparatus

**Footnote repairs, all verified against the file.**

- fn22 (l.478) and fn23 (l.480) are no longer word-identical. fn22 carries the model-internals and vendor-lock-in framing with McLoughlin et al. and Opara-Martins, Sahandi, and Tian. fn23 carries the sustainability framing with Rosado de Souza et al. and Barker et al. Each anchors its own sources, as inventory defect D1 requires. **pass**
- fn12 (l.458) carries the full Kwa introduction, with the measure defined as human expert completion time, the four task domains including general reasoning, the exponential increase between 2019 and 2025 at roughly seven-month doubling, the fn12-only clarification on human time against agent runtime, the external-validity caution absorbed from fn24, and the full citation. Terminology is unified on "task-completion time horizon". **pass**
- fn24 (l.482) is a cross-reference to n. 12 plus the mathematical-reasoning and formal-proof sentence. fn28 (l.490) is a cross-reference to n. 17. fn17 (l.468) carries the platform URL, the access date, and the caveat as the first note of the pair, which resolves D3. **pass**
- D4 resolved. Carver et al. 2022 in fn18, Dell'Acqua et al. 2023 in fn27, and Pollin 2026b in fn25 each appear once, in author-date form, with one References entry.

**References to citations.** Forty entries, each cited in the body or in a footnote. Checked mechanically by pairing every entry's leading surname and year against the running text and the footnote block, then reading the one machine-flagged case (IEEE 2017, cited at l.127; the flag was an artefact of surname parsing). **pass**

**Citations to References.** Eight in-text author-date citations resolve to no entry: Ciula et al. 2023 (§1.1), Fickers 2020 (§1.1), Herrmann et al. 2023 (§1.1), Russell and Norvig 2020 (§2.1), Lewis et al. 2020 (§2.1), Schön 1996 (§3.1), Goldschmidt 2003 (§3.1), Karpathy 2026 (fn15). **fail on the letter of the check.**

All eight were present in `e30bedb` and are inherited rather than introduced; seven are named in inventory row D6 and the eighth in D5, and the report flags all eight for operator attention. Since the pass ran, the commit `ec8cb33` recorded ready-to-paste Chicago entries for all eight in `knowledge/literature-checking-2026-07-30.md`, so the gap is now a paste operation rather than a research task. This failure is not charged against the deduplication.

**Not verified.** The two residues the report flags remain open and were confirmed as such rather than assessed. "Security" and "operational reliability" in the §2.4 sentence carrying fn23 are covered by neither remaining source. The claim in fn24 about mathematical-reasoning and formal-proof evaluations carries no source, and the §3 opening at l.189 makes the same claim with fn24 as its only support.

## Check 6. Canonical four-member relation

The canonical member list is "maintained project knowledge; the resulting digital research artefact; the referenced research-data state; the documented grounds of acceptance". Full enumerations were located by searching for each member name and reading every hit.

| Location | Form | Verdict |
| :---- | :---- | :---- |
| Abstract, l.5 | Full, with "recorded by accountable contributors" | canonical home |
| §2.2, l.97 (F-05) | Full | canonical home |
| §2.3, l.159 (F-13) | Full, with the increment "including the verification evidence they record" | canonical home |
| §3.4, l.217 (F-31) | Full, six-member form collapsed to four | canonical home |
| Figure 1 caption, l.81 (F-03) | Full | licensed exception |
| §2.3, l.165 (F-25) | Four members instantiated with SZD content | licensed case instantiation |

Member naming is uniform across all four canonical homes, which removes the terminology drift the inventory names as a precondition. Every other former occurrence is now a reference rather than an enumeration: §1 l.15, §2.3 l.163, §2.4 l.179 ("the documented relation defined in Section 2.2"), §4 l.221, §5.3 l.335.

The Figure 1 caption is the one place outside the four canonical homes where the relation stands in full. It is F-03, a protected repetition under the caption convention, so check 2 and check 6 pull in opposite directions and check 2 wins by the inventory's explicit rule. **pass**, with the caption recorded as the licensed exception.

The collapse of the six-member form at F-31 remains an open operator question, since it is a substantive decision rather than a deduplication. The report flags it. If code and verification evidence were meant as separate members at that one point, the collapse has to be reversed.

## Check 7. Figures

Five image embeds, five caption lines, captions numbered Figure 1 to Figure 5 in order. All five referenced files exist.

| Caption | Embed path | File present |
| :---- | :---- | :---- |
| Figure 1 (l.79, l.81) | `assets/figures/figure-01-promptotyping-method.png` | yes |
| Figure 2 (l.115, l.117) | `assets/figures/figure-02-knowledge-context-authority.png` | yes |
| Figure 3 (l.251, l.253) | `assets/figures/figure-04-m3gim-loop.png` | yes |
| Figure 4 (l.257, l.259) | `assets/figures/figure-05-zbz-e66.png` | yes |
| Figure 5 (l.263, l.265) | `assets/figures/figure-06-notker-acceptance.png` | yes |

The manuscript's "Figure files" section states that the manifest in that directory records the mapping from each file to the caption it carries. `assets/figures/manifest.yaml` does carry a `manuscript_number` field for every entry and marks `figure-03-comparative-iterations.png` as `status: retired` with `manuscript_number: null`. The statement is therefore accurate, and flag 7 of the sanitation report, which asserts that the manifest records only `number`, is stale. **pass**

## Report claims checked against the file

| Report claim | Result |
| :---- | :---- |
| Only `knowledge/paper-draft.md` and the report itself were written | confirmed; commit `0a51b2b` touches exactly those two files and the working tree is clean |
| All seventeen protected repetitions present | substantively confirmed; the roster is mislabelled (see check 2) |
| Two minimal connective adjustments in the frozen zones | understated; see check 3 |
| 33 footnote definitions, 33 uses, no orphan, no duplicate, order matching | confirmed mechanically |
| Forty References entries, every one cited | confirmed mechanically |
| Deviation rows A-40, A-45, C-09, D-05, F-34, F-35, F-37 applied as written | confirmed by inspection of each site |
| Figure manifest defect (flag 7) | not reproducible; the manifest already carries `manuscript_number` |

## What must be repaired

1. **V-1**, l.111. Restore an antecedent for "those observations".
2. **V-2**, l.217. Supply a lead-in for "Publication introduces additional obligations".

Both are single-clause repairs inside sections that lie outside the freeze. Nothing else in this verification requires a change to the manuscript before the pass is accepted. The items under check 5 (eight unresolved citations), the fn23 and fn24 residues, and the §3.4 member-count question are inherited or are operator decisions rather than defects of the deduplication.
