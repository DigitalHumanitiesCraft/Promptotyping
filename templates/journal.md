---
title: Journal template
slug: journal
version: "0.7"
status: complete
language: en
updated: 2026-11-14
machine-url: https://dhcraft.org/Promptotyping/templates/journal.md
---
# Journal template

This template structures the working diary of a Promptotyping project knowledge base. The resulting document is called `journal.md` and lies in the `knowledge/` folder. At its beginning, in the section `## Open`, it holds what the next session needs in order to continue. Beneath that it records the substantively connected steps of the work, newest first. The rule for this stands in the [convention](convention.md), section Journal, open points and condensing.

## Scope

The template holds for every Promptotyping project, because the Provenance function is always triggered. `journal.md` is created at repository setup with the section `## Open` and the sentence "Nothing open.", always carries `status: active` and remains as the working diary at the end of the project. Each handoff at the end of a session rewrites `## Open` and adds the entries for the steps of the work that the journal does not yet record.

The journal is condensed as soon as its older entries no longer help a reader understand the current state, for instance because of repetitions, copied durable knowledge, scattered reasons for decisions or a regular reading context that has become too expensive. The full wording of the condensed entries then goes to `journal-archive.md` in the same folder. A count of lines or entries alone does not trigger condensing.

## Function of the document

The journal answers what is open and how the project arrived at its state. `## Open` addresses the person or agent who takes up the work next. The entries record which step of the work yielded what on which trigger, what was decided, rejected or corrected, and where the evidence lies. Whoever checks the origin or the reason for a decision behind a current statement reads there.

Durable substantive and procedural content lies in declarative knowledge documents or agent instruction documents, accepted work that has not begun in `specification.md` or `plan.md`, and detailed results of checks in `testing.md`. The current project status is carried by the living source specific to the project. The wording of condensed entries is preserved by `journal-archive.md` and Git.

## Structural principles

1. `## Open` stands at the beginning and holds the complete current list of what is open. This includes unfinished work, unchecked results, questions that wait for the researchers, and work handed to a named recipient. Each handoff rewrites the section as a whole. A settled point leaves it, and an entry beneath records how it was settled. When nothing is open, the section says "Nothing open." The heading `## Open` and this sentence are fixed strings and stay English even in a German journal, because agents and tools recognise the section by them.
2. One entry is written per substantively connected step of the work. Session boundaries produce no entry of their own unless they conclude such a step.
3. An entry carries the fields Trigger, Found, Decided, Rejected, Corrected, Changed and Evidence, as far as they have content. Fields without content are omitted. A rejected alternative stands with its reason under Rejected, and a correction stands under Corrected with a pointer to the earlier statement.
4. Operator judgements stand verbatim in the field Decided, introduced with "Operator:". A delegated decision carries a statement of origin that names who decided under which delegation and that the decision can be revised. The judgement of the researchers on a Promptotype is an entry of its own in their words.
5. Each entry names at least one commit or other checkable piece of evidence in the field Evidence.
6. An entry is history and is rewritten only by condensing. Before a handed-over or open point is used, its source and current goal are checked, and durable content is integrated into the responsible document or rejected with a reason. The entry is written after that, and the point leaves `## Open`.
7. Condensing removes only detail from `journal.md`. `## Open` and the five most recent entries remain unchanged, the wording of older entries is appended to `journal-archive.md`, and connected older entries are each folded into one milestone entry. Entries cited externally, for example in a paper, README or case study, as well as operator judgements, statements of origin, corrections, rejected alternatives with their reasons and commit hashes are kept verbatim, and cited headings stay stable as anchors.
8. A journal without `## Open` receives the section at the next handoff. A `knowledge/handoff.md` that still exists hands its open points over to `## Open`, and the file is proposed to the operator for removal. Earlier entries keep their form and order.

## Frontmatter schema

The journal follows the required core of the [convention](convention.md). The following fields are specific to the Provenance function.

- `status:` is always `active`.
- `related:` typically holds `project` and `specification`, and also `plan` in a project with a work plan.
- `topics:` and `knowledge-sources:` are usually omitted.
- `updated:` is adjusted after a handoff, a new entry or a condensing.

## Sections in detail

### Open

The section follows immediately after the H1. Each point is concrete enough for the next session to begin at once, for example "A quarter of the datings carry no certainty attribute, and how uncertain dates are displayed is open." A point handed to a named recipient names that recipient and what they need to begin, namely source, state and evidence. If the recipient works in another repository, the point stands in `## Open` of the journal there. When nothing is open, the section says only "Nothing open."

### Entries

The entries stand under `## Entries`, newest first. The heading reads `### YYYY-MM-DD Subject`. A session number or phase remains as an addition only where it is cited outside the journal. An entry carries only the fields that have content.

- Trigger names the open point, review or operator commission in a checkable form.
- Found states what emerged, also when it refutes an earlier statement.
- Decided states the decision with its reason. Operator judgements stand verbatim, delegated decisions with a statement of origin.
- Rejected states the rejected alternative with its reason.
- Corrected states the earlier statement with its date or entry and the place of the valid version.
- Changed names the target document and section in one sentence, without an inventory of the diff.
- Evidence names commits, report paths, tests or other checkable proof.

An entry fits on one screen, and each field comprises a few sentences. Numbers stand only where the number itself is the finding, never as a state. An existing German journal may keep the labels Anlass, Befund, Entschieden, Verworfen, Korrigiert, Geändert and Belege and the heading `## Einträge`.

### Condensing and archive

Condensing follows the fixed procedure of the [convention](convention.md), section Journal, open points and condensing. It starts from a fully committed state. The unchanged wording of each older entry is appended to `journal-archive.md`, oldest first and only insofar as it does not already stand there. Before any change to `journal.md`, a check confirms that the heading of each entry to be condensed stands in the archive. A milestone entry carries the period in its heading, for example `### 2026-08-01–2026-09-15 Data model and import path`. One line in the journal points to the archive, and an entry of its own for the condensing names the starting state, the range and the number of archived entries. The archive is only appended to and never rewritten, and at session start it is read only when a reason for a decision is needed.

## What does not belong here

- The current project status, which lies in the living source specific to the project.
- Accepted work that has not begun, which lies in `specification.md` or `plan.md`.
- Detailed results of checks, which lie in `testing.md`.
- Copies of durable substantive knowledge or procedural rules.
- Copied handover texts. A handed-over point stands briefly under `## Open`, and its durable content goes into the responsible document.
- Session logs, code diffs and full commit messages.
- Overviews of phases and descriptions of architecture and data, which lie in the declarative knowledge documents or in `INDEX.md`.
- Check figures, test runs and digests, which lie in `testing.md` or in the commit message.
- Inventories of diffs and the history of wordings in the journal itself. Condensed wordings are preserved by `journal-archive.md` and Git.
- Paths local to a machine and session logistics.
- Ordinal headings such as "Night IX" without a subject.
- Rigid thresholds for condensing by count of lines or entries.

## Template to fill in

````markdown
---
title: Journal
project:
  name: [Project name]
  repository: [Repository URL]
method:
  name: Promptotyping
  url: https://lisa.gerda-henkel-stiftung.de/digitale_geschichte_pollin
status: active
language: [de | en]
version: [Repository schema version]
created: [YYYY-MM-DD]
updated: [YYYY-MM-DD]
authors: [Author 1, Author 2]
generated-with: [Harness (LLM), if relevant]
template:
  name: Journal template
  version: 0.7
  url: https://dhcraft.org/Promptotyping/templates/journal.md
related: [project, specification]
---

# Journal

## Open

Nothing open.

<!-- Complete current list of what is open, rewritten at every handoff. The heading and "Nothing open." are fixed strings in every language. One point per line, concrete enough to begin at once:

- [Unfinished work, unchecked result or question to the researchers, with its location]
- [Handover to a recipient: source, state, evidence]
-->

## Entries

<!-- One entry per substantively connected step of the work, newest first. Only fields with content appear. An existing German journal may keep ## Einträge with Anlass, Befund, Entschieden, Verworfen, Korrigiert, Geändert, Belege. -->

### YYYY-MM-DD [Subject]

- Trigger: [open point, review or operator commission]
- Found: [what emerged, also against an earlier statement]
- Decided: [decision with reason; Operator: "verbatim judgement"; delegated with statement of origin]
- Rejected: [alternative, because …]
- Corrected: [earlier statement with date or entry; place of the valid version]
- Changed: [target document#section in one sentence]
- Evidence: [commit, report path, test]

<!-- Entry after a condensing:

### YYYY-MM-DD condensed [range]

- Starting state: [commit before the condensing]
- Range: [condensed entries or period]
- Changed: [number of entries appended to journal-archive.md, milestone entries formed]
- Evidence: [commit of the condensing]
-->
````

## Use as a prompt template

At repository setup the block is created as `knowledge/journal.md`. At session start the agent reads, after the action layer and `knowledge/INDEX.md`, the beginning of the journal, that is `## Open` and the most recent entry. It reads older entries and `journal-archive.md` only when a reason for a decision is needed.

At the handoff at the end of a session the agent adds, beneath `## Open`, the entries for the steps of the session's work that the journal does not yet record, each with the applicable fields and at least one piece of evidence. Before that it has written durable content into its target documents. It then rewrites `## Open` as the complete current list and commits. A handover to a named recipient runs the same way, and the point under `## Open` names recipient, source, state and evidence.

A condensing follows the procedure in the section Condensing and archive. After the transfer the agent checks hashes with `git cat-file -e`, links and anchors, and every external citation by a search against the new journal and the archive. If a cited heading changes, the citing text is updated with it.

The review checks whether `## Open` stands at the beginning and carries the complete current list or "Nothing open.", whether each entry represents one step of the work and names evidence, whether current status, accepted work and details of checks lie in their responsible places, and whether each condensed entry stands verbatim in the archive.

## Example

A handoff had left open how letters with only an inferred year stand in the schema. After the decision the variant is integrated into `data-schema.md`. The point leaves `## Open`, and the journal receives an entry at the top.

```markdown
# Journal

## Open

- The timeline still shows undated letters at the end of the year, timeline.js
  not adjusted after the schema change.

## Entries

### 2026-10-20 Schema variant for undated letters

- Trigger: open point from the data check of 2026-10-18.
- Found: some of the letters carry only an inferred year, while the previous schema required a full date.
- Decided: Operator: "Inferred dates stay marked as such and are never padded to full dates."
- Rejected: padding to 1 January, because it feigns a precision that is not there.
- Changed: data-schema.md#Dating
- Evidence: `a1b2c3d`
```

## Terms

### Working diary

The journal as a whole, with what is open at the beginning and the entries beneath.

### Open

The section at the beginning of the journal with the complete current list of what the next session needs in order to continue.

### Statement of origin

The note on a delegated decision stating who decided under which delegation and that the decision can be revised.

### Milestone entry

An entry folded during condensing from connected older entries, with the period in its heading.

### Journal archive

`journal-archive.md`, the append-only document with the full wording of condensed entries.

## Related

- Templates of the Promptotyping Documents (this folder)
- [Convention](convention.md)
- [Promptotyping](https://dhcraft.org/Promptotyping/)
- Context Engineering
- [Plan template](plan.md)
- [Testing template](testing.md)
