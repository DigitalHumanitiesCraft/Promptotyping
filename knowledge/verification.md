---
title: Verification
project:
  name: Promptotyping Site
  repository: https://github.com/DigitalHumanitiesCraft/Promptotyping
status: active
language: en
version: 0.4
created: 2026-07-26
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
  alias: https://dhcraft.org/Promptotyping/#promptotyping-document-verification
related: [INDEX, specification, architecture, journal]
---

# Verification

Which claims this site makes about itself, what each is checked against, by what procedure, and with what verdict. The site specifies the verification function in part 5 and requires in A12 that it demonstrates the method on itself. Until 2026-07-26 it ran no check of its own statements, while the vault under it had `validate.py` from the start. This document closes that gap for the claims a script can decide.

The dividing line is the one part 5 draws. Where a rule decides, a script runs it unsupervised. Where scholarly judgement decides, the check stays with the Critical Expert, and this document records only that it is outstanding.

## What is checked automatically

`tools/check_consistency.py` exits non-zero on any failure; it resolves every path from its own location, so the directory it is called from does not matter. It reaches for the second script in `tools/`, the glossary generator `build_glossar.py`, rather than restating its rules, so V7 below cannot drift from the generator it guards.

Under `tools/tests/` the checks are themselves held to their regression cases, run with `python -m unittest discover tools/tests`. Each case takes the repository's own data as its fixture, corrupts one field of a copy, and asserts that the check reports it. The green run before every commit shows that the site is consistent; it does not show that a check still decides anything, and a check that has quietly stopped deciding passes in exactly the same way. The suite uses the standard library alone, so `tools/` keeps needing no dependency; the vault under it is a template instance with its own dependency set and tests its validator with pytest.

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

**Procedure.** Find the line that introduces the list and read the backticked slugs out of its remainder, so a changed count word or a punctuation mark inside the list cannot hide it. A list the check no longer finds is a failure. Restating the slugs in the script would create the second copy whose drift the check exists to catch, and a check whose subject has disappeared must not report green; a copy of the action layer without a slug list is the regression case, and `tools/tests/` holds it.

**Verdict, 2026-07-26.** Passes.

### V4. The gallery holds its own conditions

**Claim.** Every card claiming a depth page has a file under `_content/case-studies/`, and every file there is claimed by a card. Card ids are unique. Every `role` value stands in `_meta.role_labels`. Every `interfaceTypes` value is one of the five epistemic functions of the site's interface typology. A card claims a row of the paper's case table exactly when its role is `evidence`.

**Why it matters.** A card claiming a depth page that does not exist opens an empty panel; a file no card claims is content nobody can reach. The two closed vocabularies carry meaning beyond their own list. The role decides which group heading a card appears under, and a role outside `role_labels` drops the card out of the gallery without a message. The interface types are the typology of section 4.2, and the first of them sets the hue of the card edge and the filter chips, so a value outside the five fails silently in both directions.

**Verdict, 2026-07-26.** Passes. The description in this document named `useCase` and `_meta.use_case_labels` until the same date, which the vocabulary change of 2026-07-26 had replaced by `role` and `role_labels` without the text following.

### V5. Every case the paper analyses is reachable

**Claim.** Every case in Table 3 of section 4.3 has a card, and every card that claims a case-table row finds that row in `knowledge/paper.md`.

**Why it matters.** This is the condition the gallery exists for. A reader who comes from the paper to check a claim of section 4 has to find the project, and three of the thirteen were unfindable until 2026-07-26.

**Procedure.** Parse the table under the header row `| Case | Data state | Artefact | Central finding | Write-back or acceptance |`, keyed on that line so a new section cannot move it. Compare the case names against the `paper_row` field of the cards, in both directions.

**Verdict, 2026-07-30.** Passes, re-keyed with the promotion of the five-chapter text. The check originally guarded the seven-chapter text's project inventory (Table 1, section 5.2) including a per-project interface-type comparison; the promoted paper carries no per-case interface types, so that comparison lapsed and the typology lives in the gallery data alone. Seven cases carry the evidence role now; the eight projects the paper no longer lists moved to the role `further` with their cards intact. The first run of the earlier form, 2026-07-26, reported three missing projects, all of which gained cards.

### V6. Every address the gallery publishes resolves

**Claim.** Every `repo_url`, `demo_url` and `video_url` on a card answers with an HTTP status below 400.

**Why it matters.** A dead link is a claim the site cannot keep, and the gallery is the fastest-ageing part of the site because it points at repositories and hosts outside this one. Two dead links sat there until the consistency pass of 2026-07-25 found them by reading.

**Procedure.** A `HEAD` request per address, twenty-second timeout. The pass is opt-in behind `--check-urls`, because the script runs before every commit and fifty network round trips would make that unusable; the default run reports the skip as a note rather than passing silently.

**Verdict, 2026-07-26.** Passes after two corrections the check itself found on its first run. The Kulturpool card pointed at `chpollin/vkm-explorer`, a repository that does not exist; the project lives at `chpollin/kulturpool-demo`, which is public and whose Pages site answers, so the card gained a working demo address as well. The HerData card advertised a demo at `chpollin.github.io/HerData` that answers 404, and the repository behind it is private with no Pages site, so the demo is unpublished rather than misaddressed. The address is removed, since a dead link claims more than no link does. Republishing it is an operator action.

### V7. The glossary mirror is what the generator renders

**Claim.** `_content/glossar.md` is byte for byte the output of `tools/build_glossar.py` over `data/glossar.json`.

**Why it matters.** The glossary stands twice, as the data source the site fetches at run time and as the Markdown file a reader or a machine retrieves under the address the frontmatter publishes. Part 5 requires that a generated document is rendered by a script, and this file was the one place on the site where the rule was broken; the mirror was edited by hand. Two hand-kept copies of the same term diverge quietly, and the tooltip then says something other than the page.

**Procedure.** The generator holds the non-derivable head of the file, meaning the frontmatter, the H1 and the lead paragraph, and renders one block per entry from `begriff`, `kurz`, `voll` and the structured `quellen` list in the order of the JSON array; since A34 the sources render as hash links, which puts the mirror under the anchor check of V8. Any further field in an entry stays in the data and is not rendered. The check calls the generator and reports the first line at which the file on disk departs from it. Writing the file is a separate run of `tools/build_glossar.py` without arguments.

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

### V10. Section 1 of the paper still carries what later sections say it carries (retired)

**Claim, as it stood.** Where a later section of `knowledge/paper.md` named something Section 1 established, or where the steering document recorded a decision as closed by a passage in Section 1, that passage was still in Section 1. A declared table paired each anchor phrase with the dependent phrase that made it obligatory, and a pair fell silent when the dependent phrase went, which was the check's own retirement condition.

**Retired, 2026-07-30.** The promotion of the five-chapter text replaced the guarded opening and dissolved the steering document the check also read; every dependent phrase of the declared table left the text with it, so all six pairs fell silent at once. The check was removed from the script rather than kept as dead code. The mechanism, a declared anchor-and-dependent table over the opening, is recorded here and can be redeclared if rewrites of the new opening start dropping load-bearing anchors again. The regression history lives in the git history of `tools/check_consistency.py`.

### V11. The glossary's source layer and taxonomy hold their vocabularies

**Claim.** Every glossary entry names at least one source, every source states a type the schema declares, every address sits under the anchor family its type prescribes, every cited reference id is one the paper's own list mints, every entry carries a category that `_meta.kategorien` names, and every category has exactly one mark in `CATEGORY_MARKS`.

**Why it matters.** The source layer of A34 and the taxonomy of A36 are curated data whose failure is silent in both directions. A source under the wrong family renders as a link into nothing, a `ref-` key the paper does not mint passes any prefix test, a category the render table does not know shows an entry without a mark, and a mark nothing names is dead presentation. The reference ids are rebuilt from the paper's list rather than trusted by prefix.

**Verdict, 2026-07-29.** Passes, written with the layer itself. The four failure ways were each provoked once during the build of A34 and A36 and each reported, including a bogus paper anchor, a bogus `ref-` id, an unknown category and an orphan vocabulary value. The checks run inside the anchor group of V8.

### V12. The action layer names every id the registry mounts

**Claim.** Every page and part id in `PAGES` of `assets/js/registry.js` appears as a hash anchor in the anchor scheme of `CLAUDE.md`.

**Why it matters.** V8 runs the other direction, every address the prose names must exist. This closes the remaining gap: a page added to the registry is live and addressable while the published scheme the next agent reads never heard of it. On the day the group was written it found two, `#workflow` had never been in the scheme and `#paper` had only its section family listed.

**Verdict, 2026-07-29.** Passes after the two missing ids were added to the scheme; the regression case is removing one of them, which the check reports.

### V13. The requirement numbers are unique and every cited one exists

**Claim.** No A-number heading in `knowledge/specification.md` occurs twice, and every bare A-number cited in the action layer or a core knowledge document has a heading. Gaps in the sequence are allowed, since a withdrawn requirement keeps its number reserved.

**Why it matters.** The numbers are the requirement identifiers of this knowledge base, cited across the action layer, the plan and the design grounds. A duplicate splits one identifier over two requirements, and a citation without a heading sends the reader to nothing while the citing sentence keeps reading well. The paper texts and `INDEX.md` stay outside the citing set, because `INDEX.md` names the archived audits A1 and A2, which are records rather than requirements. The dated records fall out for the same reason and are recognised the way V9 recognises them, since a journal entry naming an audit run records a name instead of citing a number.

**Procedure.** The citing set is the action layer plus every document under `knowledge/` that neither stands in the exemption list nor is a dated record. It is derived rather than listed, so a knowledge document written tomorrow is under the rule without anyone remembering to enrol it. Until 2026-07-31 the script held a closed list of seven documents while this text described the open rule; the two agreed on which documents were checked, and only because nothing had been added since.

**Verdict, 2026-07-31.** Passes. The three failure ways were each provoked once and reported, a citation of a number without a heading, a duplicated heading, and the same citation in a document the closed list did not name.

### V14. Everything the vault index points at exists

**Claim.** Every claim slug in `data/vault.json` is a file under `vault/20_claims/`, and every distillate and source path the index carries is a file of this repository. An entry whose path is empty fails too, because that is what the generator writes for a source it could not resolve; passing over the empty case would spare exactly the entries the index is least sure of.

**Why it matters.** The index is generated by `vault/tools/build_site_index.py` and committed, so a rename or removal in the vault leaves stale entries behind until the generator is re-run, and the vault page then links into nothing. The reverse direction is open by construction and stays unchecked: a claim outside every topic map is legitimately absent from the index, so absence proves nothing.

**Verdict, 2026-07-29.** Passes. The regression case is renaming a claim slug in a copy of the index, which the check reports.

## What is not checked automatically, and why

- **Whether a page says what the paper says.** The contradictions of 2026-07-26 were found by reading `knowledge/paper.md` against the site, not by any script. Agreement in substance is not decidable by rule, and the four findings of that reading are recorded in `knowledge/journal.md`.
- **Whether the anchors resolve in the browser.** V8 decides the anchor set from the sources, which is a static reading of what the code would mount. Whether the element actually appears in the DOM depends on the render order, on a fetch that may fail and on the routing that reveals the page, and none of that is visible to a file reader. The check of 2026-07-26 against the rendered DOM, comparing the union of element ids over every page and deep link before and after the refactor, stays the instrument for that question. The routing rebuild of the same day was taken with the second form of it, a local server that answers every non-file path with `404.html` under HTTP 404 as GitHub Pages does, driven by a headless browser over every published subpath form and two unresolvable paths, and read off the page host that carries `is-active`.
- **What V8 cannot see by construction.** An href or an id assembled at run time carries no literal, so a concatenated address is skipped on the reference side and its family is covered by prefix on the declared side. An anchor named outside the sources it reads goes unnoticed, which includes every foreign repository carrying a `template:` URI and every link in a slide deck, a mail or a published PDF; those are exactly the addresses the no-renaming rule protects, and the check cannot enumerate them. A link that resolves to the wrong but existing anchor passes, since only existence is decidable here. The praxis anchors are derived from the raw Markdown heading while the site derives them from the rendered heading, so an inline link or emphasis inside a practice heading would move the real anchor away from the computed one.
- **That the ports still compute what the browser computes.** `slugify`, the heading-id generator and its collision suffix exist twice, once as JavaScript the site runs and once as a Python rebuild that decides the anchor set of V8. A rebuild drifting from the original reports nothing; it turns V8 into a silent pass, since both sides then agree on an anchor set the browser never mounts. Since 2026-07-31 the script holds a table of input and output pairs read off the JavaScript, covering umlauts, the sharp s, a character outside the alphabet, punctuation runs, a numbered heading at both depths, an override and the collision suffix, and it runs as its own check group. That is a guard rather than a proof of agreement: the table decides the cases it holds, and whether the JavaScript itself still behaves that way stays the browser half of the verification named above.
- **Why the records are exempt from V9.** A journal entry and an archived audit are correct as of the date they carry. Holding them against today's code would ask a record to stop being a record, and correcting them would falsify the process history the paper rests on. `knowledge/journal.md` is named in the check; the archived audit records and the snapshot report are recognised by their `status`. Two of the archived records additionally cite files of other repositories, which this repository cannot decide at all.
- **The experience values.** The record's duration and effort figures rest on the operator's memory and cannot be recomputed. They are marked as such where they appear.

## Outstanding

The term index reported a set of glossary terms as occurring nowhere outside the glossary, and the reading of 2026-07-26 found the report half an artefact of its own method. Every one of those terms is a long nominal phrase, which never occurs in running prose as the word sequence the glossary heads it with, so the index could not have found them however widely the concept was used. The entries now carry an optional `suchform`, the shorter wording under which the term actually appears, and the index searches it alongside the term. What the index reports after that change is a genuine gap, and no term is currently in that state.
