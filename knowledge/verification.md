---
title: Verification
project:
  name: Promptotyping Site
  repository: https://github.com/DigitalHumanitiesCraft/Promptotyping
status: active
language: en
version: 0.2
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

`tools/check_consistency.py`, run from the repository root, exits non-zero on any failure. It reaches for the second script in `tools/`, the glossary generator `build_glossar.py`, rather than restating its rules, so V7 below cannot drift from the generator it guards.

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

**Claim.** Every card claiming a depth page has a file under `_content/case-studies/`, and every file there is claimed by a card. Card ids are unique. Every `role` value stands in `_meta.role_labels`. Every `interfaceTypes` value is one of the paper's five epistemic functions. A card claims a row of Table 1 exactly when its role is `evidence`.

**Why it matters.** A card claiming a depth page that does not exist opens an empty panel; a file no card claims is content nobody can reach. The two closed vocabularies carry meaning beyond their own list. The role decides which group heading a card appears under, and a role outside `role_labels` drops the card out of the gallery without a message. The interface types are the typology of section 4.2, and the first of them sets the hue of the card edge and the filter chips, so a value outside the five fails silently in both directions.

**Verdict, 2026-07-26.** Passes. The description in this document named `useCase` and `_meta.use_case_labels` until the same date, which the vocabulary change of 2026-07-26 had replaced by `role` and `role_labels` without the text following.

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

### V7. The glossary mirror is what the generator renders

**Claim.** `_content/glossar.md` is byte for byte the output of `tools/build_glossar.py` over `data/glossar.json`.

**Why it matters.** The glossary stands twice, as the data source the site fetches at run time and as the Markdown file a reader or a machine retrieves under the address the frontmatter publishes. Part 5 requires that a generated document is rendered by a script, and this file was the one place on the site where the rule was broken; the mirror was edited by hand. Two hand-kept copies of the same term diverge quietly, and the tooltip then says something other than the page.

**Procedure.** The generator holds the non-derivable head of the file, meaning the frontmatter, the H1 and the lead paragraph, and renders one block per entry from `begriff`, `kurz`, `voll` and `quelle` in the order of the JSON array. Any further field in an entry stays in the data and is not rendered. The check calls the generator and reports the first line at which the file on disk departs from it. Writing the file is a separate run of `tools/build_glossar.py` without arguments.

**Verdict, 2026-07-26.** Passes. Both files were byte-identical with the generator output when the generator was written, which is what established that the body is fully derivable.

### V8. Every anchor a hand-written reference names is one the site mounts

**Claim.** Every anchor named in a `](#…)` link under `_content/`, in a literal `href="#…"` in the site scripts, in a `template:` url or alias in `knowledge/` and `vault/_sources/`, or in the prose of `CLAUDE.md` and `README.md`, is declared somewhere. Every alias table points at a target that exists. The subpath handover stands, meaning `404.html` writes the parameter `app.js` reads and states no address of its own, and the Python rebuild of the resolver agrees with the declarations it reads.

**Why it matters.** This is the failure class where a value is display text and identifier at once. A heading is translated, a card is renamed, and the anchor moves with it while the sentence that links there stays. Nothing reports it, because both sides read plausibly on their own, and a foreign repository may already carry the old address in a `template:` field. The English pass of 2026-07-26 hit the class three times. The handover checks guard the routing rebuild of the same day. The parameter name is written in `404.html` and read in `app.js`, and a rename on one side sends every subpath to the not-found state; a slug written back into `404.html` restores the duplicate table that had already drifted seven entries apart from the resolver before it was removed.

**Procedure.** The declared side is read out of the tables the site itself reads, `PAGES` and `ANCHOR_FAMILIES` in `assets/js/registry.js`, the slugs of the four data files, the alias tables in `markdown.js`, `pages-content.js`, `pages-glossar.js` and `pages-paper.js`, and the literal block ids in the scripts. `slugify` and the heading-id generator with its collision suffix are ported into the check, and the heading anchors of `_content/praxis.md` and `knowledge/paper.md` are derived with them. Restating any of those tables as a Python literal would create the second copy whose drift the group exists to catch, so each is parsed from its source file. The reference side takes only literal addresses; an href assembled at run time carries no literal to decide. The subpath side is a self-test of that rebuild, holding it against the same declarations, so a rebuild that stops understanding a declaration shows up as a failure instead of turning the checks above into silent passes. Whether the JavaScript resolver agrees is the browser half of the verification and is named among the limits below.

**Verdict, 2026-07-26.** Passes after the one failure of its first run at the real repository was corrected. `_content/promptotyping-document/user-stories.md` linked to `#praxis-user-story-status`, an anchor no practice heading has ever carried; the section is reachable as `#praxis-the-epistemic-status-of-user-stories`, with the pre-English form held alive in `PRAXIS_ALIASES`. The link predates the English pass and survived it, since it was wrong from the start and had nothing to do with a translation, which is the case the group exists for. The subpath comparison against the tables in `404.html` was replaced on the same day by the handover checks, when the routing rebuild removed the tables; the four failure cases of the new form were each provoked once and each reported.

### V9. Every prose statement binding a symbol to a code file still holds

**Claim.** Wherever `CLAUDE.md` or a knowledge document says that a named symbol lives in a named code file, that file is in this repository and carries that name.

**Why it matters.** The action layer and the architecture document route the next agent to a file by name. A cut through the code moves the symbol and leaves the sentence standing, and the next session then reads a file that no longer holds what it was sent for. Four such statements were wrong after the ten-file cut of 2026-07-26, three of them pointing at `app.js`.

**Procedure.** Match the pattern of a backticked identifier followed by `in` and a backticked path ending in `.js` or `.py`. A bare file name is resolved against the repository, and an ambiguous name is reported so the statement gets a path. Chronological and dated records are exempt, which covers `journal.md` by name and every document whose status is `archived` or `snapshot`.

**Verdict, 2026-07-26.** Passes, with the four corrected statements as its regression case.

### V10. Section 1 of the paper still carries what later sections say it carries

**Claim.** Where a later section of `knowledge/paper.md` names something Section 1 established, or where `knowledge/paper-writing.md` records a decision as closed by a passage in Section 1, that passage is still in Section 1.

**Why it matters.** The opening is the part of the paper that gets rewritten most often, and three successive rewrites in July 2026 dropped the same anchors each time. The failures are silent, because the later sections keep reading well on their own. Section 2.3 says "the same inference Section 1 draws" and Section 2.5 says "The workshop demonstration of June 2023 (Section 1)"; when the opening loses the marked inference, the paper attributes to Carver et al. a step the source does not carry, which the grounding vault forbids in the claim itself.

**Procedure.** A declared table pairs an anchor phrase required in Section 1 with the dependent phrase that makes it obligatory. The dependent side is searched in the rest of the paper and in `paper-writing.md`, so a decision recorded only in the steering document also holds its anchor. A pair falls silent when the dependent phrase goes, which keeps the table from outliving its reasons. Six pairs are declared, for the requirements-engineering origin, Kemman's trading zone, the marked inference beyond Carver, the June 2023 waypoint, the dissertation's four-item difficulty profile, and the capacity gap.

**Verdict, 2026-07-27.** Passes. The regression case is the third rewrite of that day, in which two of the six pairs were broken and both were reported.

## What is not checked automatically, and why

- **Whether a page says what the paper says.** The contradictions of 2026-07-26 were found by reading `knowledge/paper.md` against the site, not by any script. Agreement in substance is not decidable by rule, and the four findings of that reading are recorded in `knowledge/journal.md`.
- **Whether the anchors resolve in the browser.** V8 decides the anchor set from the sources, which is a static reading of what the code would mount. Whether the element actually appears in the DOM depends on the render order, on a fetch that may fail and on the routing that reveals the page, and none of that is visible to a file reader. The check of 2026-07-26 against the rendered DOM, comparing the union of element ids over every page and deep link before and after the refactor, stays the instrument for that question. The routing rebuild of the same day was taken with the second form of it, a local server that answers every non-file path with `404.html` under HTTP 404 as GitHub Pages does, driven by a headless browser over every published subpath form and two unresolvable paths, and read off the page host that carries `is-active`.
- **What V8 cannot see by construction.** An href or an id assembled at run time carries no literal, so a concatenated address is skipped on the reference side and its family is covered by prefix on the declared side. An anchor named outside the sources it reads goes unnoticed, which includes every foreign repository carrying a `template:` URI and every link in a slide deck, a mail or a published PDF; those are exactly the addresses the no-renaming rule protects, and the check cannot enumerate them. A link that resolves to the wrong but existing anchor passes, since only existence is decidable here. The praxis anchors are derived from the raw Markdown heading while the site derives them from the rendered heading, so an inline link or emphasis inside a practice heading would move the real anchor away from the computed one.
- **Why the records are exempt from V9.** A journal entry and an archived audit are correct as of the date they carry. Holding them against today's code would ask a record to stop being a record, and correcting them would falsify the process history the paper rests on. `knowledge/journal.md` is named in the check; the archived audit records and the snapshot report are recognised by their `status`. Two of the archived records additionally cite files of other repositories, which this repository cannot decide at all.
- **The experience values.** The record's duration and effort figures rest on the operator's memory and cannot be recomputed. They are marked as such where they appear.

## Outstanding

The term index reported a set of glossary terms as occurring nowhere outside the glossary, and the reading of 2026-07-26 found the report half an artefact of its own method. Every one of those terms is a long nominal phrase, which never occurs in running prose as the word sequence the glossary heads it with, so the index could not have found them however widely the concept was used. The entries now carry an optional `suchform`, the shorter wording under which the term actually appears, and the index searches it alongside the term. What the index reports after that change is a genuine gap, and no term is currently in that state.
