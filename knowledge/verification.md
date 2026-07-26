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

## What is not checked automatically, and why

- **Whether a page says what the paper says.** The contradictions of 2026-07-26 were found by reading `knowledge/paper.md` against the site, not by any script. Agreement in substance is not decidable by rule, and the four findings of that reading are recorded in `knowledge/journal.md`.
- **Whether the anchors resolve in the browser.** Checked by hand against the rendered DOM during the refactor of 2026-07-26, by comparing the union of element ids over every page and deep link before and after. Worth automating, since it is rule-decidable; not automated yet.
- **The experience values.** The record's duration and effort figures rest on the operator's memory and cannot be recomputed. They are marked as such where they appear.

## Outstanding

The nine glossary terms that occur nowhere outside the glossary. The site's own term index reports them, which makes the finding visible without deciding it; whether each is site vocabulary worth keeping is a judgement.
