---
title: Verification
project:
  name: Promptotyping Site
  repository: https://github.com/DigitalHumanitiesCraft/Promptotyping
status: active
language: en
version: 0.1
created: 2026-07-26
updated: 2026-07-26
authors: [Christopher Pollin]
generated-with: Claude Code (Claude Opus 5)
method:
  name: Promptotyping
  url: https://dhcraft.org/Promptotyping/
template:
  name: Vorlage Verification
  version: 0.2
  url: https://dhcraft.org/Promptotyping/promptotyping-document/verification
  alias: https://dhcraft.org/Promptotyping/#promptotyping-document-verification
related: [INDEX, specification, architecture, journal]
---

# Verification

Which claims this site makes about itself, what each is checked against, by what procedure, and with what verdict. The site specifies the verification function in part 5 and requires in A12 that it demonstrates the method on itself. Until 2026-07-26 it ran no check of its own statements, while the vault under it had `validate.py` from the start. This document closes that gap for the claims a script can decide.

The dividing line is the one part 5 draws. Where a rule decides, a script runs it unsupervised. Where scholarly judgement decides, the check stays with the Critical Expert, and this document records only that it is outstanding.

## What is checked automatically

`tools/check_consistency.py`, run from the repository root, exits non-zero on any failure.

### V1. The catalogue and the convention agree on the document type

**Claim.** Every template in `data/promptotyping-documents.json` carries the analytical type that `_content/konvention.md` assigns to its function.

**Why it matters.** The diagnostic rule of part 3 routes by type. A reader who sees formally wrong output is sent to the Action Document. If `testing.md` is filed as declarative, the rule sends them to the wrong file, and the error is invisible because both documents read plausibly on their own.

**Procedure.** Read the type column of the reading-heuristic table, match each catalogue function against it by name, and compare. Where the convention splits a function into variants, the variants must agree with one another first.

**Verdict, 2026-07-26.** Passes. It did not before that date. The catalogue filed Quality Assurance as declarative while the convention's own prose and section 3.3 of the paper both class the testing strategy as an Action Document; the convention contradicted itself two pages apart. The check was regression-tested by reintroducing the old value, which it reports.

### V2. Catalogue and template folder cover each other

**Claim.** Every catalogue slug has a file under `_content/promptotyping-document/`, and every file there is either in the catalogue or held back for a stated reason.

**Why it matters.** A catalogue entry without a file is a dead address that a foreign repository may already carry in a `template:` field. A file without an entry is either an oversight or a deliberate hold, and only the second is acceptable.

**Verdict, 2026-07-26.** Passes, with sixteen slugs on both sides and nothing held back. `technology` entered the catalogue on 2026-07-26; until then it was the one held-back slug, reported by the check as a note. The `HELD_BACK` map stays in the script as the mechanism for the next such case, since a file without an entry has to be either an oversight or a stated hold, and the script is what forces the choice.

### V3. The action layer lists the catalogue's slugs

**Claim.** The slug list in `CLAUDE.md` covers every slug in the catalogue.

**Why it matters.** The action layer is what the next agent reads. A slug missing there is a template the next session does not know it may use.

**Verdict, 2026-07-26.** Passes.

### V4. The gallery holds its own conditions

**Claim.** Every card claiming a depth page has a file under `_content/case-studies/`, and every file there is claimed by a card. Card ids are unique. Every `useCase` value stands in `_meta.use_case_labels` and its label matches the entry there. Every `interfaceTypes` value is one of the paper's five epistemic functions.

**Why it matters.** A card claiming a depth page that does not exist opens an empty panel; a file no card claims is content nobody can reach. The two closed vocabularies carry meaning beyond their own list, because the interface types are the typology of section 4.2 and the use-case values drive the filter and the colour of the card edge. A value outside the list fails silently in both directions.

**Verdict, 2026-07-26.** Passes.

### V5. Every project the paper offers as evidence is reachable

**Claim.** Every project in Table 1 of section 5.2 has a card, every card that claims a Table 1 row finds that row in `knowledge/paper.md`, and where both sides describe the same project they agree on its interface types.

**Why it matters.** This is the condition the gallery exists for. A reader who comes from the paper to check a claim of section 5.2 has to find the project, and three of the thirteen were unfindable until 2026-07-26. The typology cross-check matters for a second reason: the five interface types are an argument of section 4.2, so a card and a table row disagreeing about a project's type is a contradiction about the method.

**Procedure.** Parse the table under the header row `|Project|Data|Interface Type(s)|Methodological Contribution|`, keyed on that line so a new section cannot move it. Compare the project names against the `paper_row` field of the cards, in both directions, then compare the interface types per project.

**Verdict, 2026-07-26.** Passes. On its first run it reported the three missing projects, VetMedAI Wissensbilanz, wiiw Patent Analysis and Medieval Legal Transactions, all three now carrying a card and a depth page. The ten projects that already had cards agreed with Table 1 on their interface types without exception.

### V6. Every address the gallery publishes resolves

**Claim.** Every `repo_url`, `demo_url` and `video_url` on a card answers with an HTTP status below 400.

**Why it matters.** A dead link is a claim the site cannot keep, and the gallery is the fastest-ageing part of the site because it points at repositories and hosts outside this one. Two dead links sat there until the consistency pass of 2026-07-25 found them by reading.

**Procedure.** A `HEAD` request per address, twenty-second timeout. The pass is opt-in behind `--check-urls`, because the script runs before every commit and fifty network round trips would make that unusable; the default run reports the skip as a note rather than passing silently.

**Verdict, 2026-07-26.** Passes after two corrections the check itself found on its first run. The Kulturpool card pointed at `chpollin/vkm-explorer`, a repository that does not exist; the project lives at `chpollin/kulturpool-demo`, which is public and whose Pages site answers, so the card gained a working demo address as well. The HerData card advertised a demo at `chpollin.github.io/HerData` that answers 404, and the repository behind it is private with no Pages site, so the demo is unpublished rather than misaddressed. The address is removed, since a dead link claims more than no link does. Republishing it is an operator action.

## What is not checked automatically, and why

- **Whether a page says what the paper says.** The contradictions of 2026-07-26 were found by reading `knowledge/paper.md` against the site, not by any script. Agreement in substance is not decidable by rule, and the four findings of that reading are recorded in `knowledge/journal.md`.
- **Whether the anchors resolve in the browser.** Checked by hand against the rendered DOM during the refactor of 2026-07-26, by comparing the union of element ids over every page and deep link before and after. Worth automating, since it is rule-decidable; not automated yet.
- **The experience values.** The record's duration and effort figures rest on the operator's memory and cannot be recomputed. They are marked as such where they appear.

## Outstanding

The nine glossary terms that occur nowhere outside the glossary. The site's own term index reports them, which makes the finding visible without deciding it; whether each is site vocabulary worth keeping is a judgement.
