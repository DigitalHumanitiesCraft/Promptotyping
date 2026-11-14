---
title: Plan template
slug: plan
version: "0.3"
status: complete
language: en
updated: 2026-11-14
machine-url: https://dhcraft.org/Promptotyping/templates/plan.md
---
# Plan template

This template structures the forward-looking process document of a Promptotyping knowledge base. A single document is called `plan.md`, and separate work streams are specialised as `<subject>-plan.md`. The document lies in the `knowledge/` folder and is the counterpart to the retrospective `journal.md`. It orders the work still outstanding into phases and milestones with entry and exit conditions anchored in `specification.md`. The first paragraph confirms the function, and no separate frontmatter field `zweck:` or `function:` is introduced.

## Scope

The template applies as soon as a project has an ordered sequence of several steps of outstanding work whose order and completion conditions are to be recorded. This is the normal case for every actively developed repository that extends beyond a single pass of work. The trigger is that at least two sections of work build on each other and have checkable completion conditions, or that the project is heading for a fixed date (meeting, deployment, submission) against which the work is paced.

It does not apply to trivial tool repositories that are finished in one session, nor to pure publication repositories without further development. Nor does it replace a backlog of unordered individual tasks, since a plan orders and a backlog collects. The day-to-day planning of a single session does not belong here. It stays in the head of whoever does the work or in the action layer.

The plan comes into being as soon as the sequence becomes recognisable, usually after the first version of `specification.md`, and is carried forward at every completed milestone. Its status is `active`. At the end of the project it is closed (`archived`) or its transferable insights move into a `learnings.md`. A plan that stays unchanged after the end of the project becomes a false source about the state of the project.

## Function of the document

The document answers what the next step is, in which order the steps build on each other, how to recognise that a step is complete, and what must be true before it can begin. It is the forward-looking steering layer of the knowledge base. It addresses primarily the person responsible for the project, who paces the work and prioritises it against a date, and the coding agent, which takes up a session and must know which milestone comes next and under which condition it may mark it as done.

The delimitation from the neighbouring documents defines the function. `journal.md` is the working diary, with what is open in the ongoing work at the beginning and the retrospective record beneath. `plan.md` holds accepted future work that has not yet begun and is carried forward. Completed work leaves the active plan. A journal entry arises when the completion integrates, rejects or corrects a transition that belongs together in substance. `specification.md` holds requirements, acceptance criteria and decisions, and the exit conditions of the plan point to them.

## Structural principles

Three principles carry the document.

1. Every milestone is anchored in the specification. A phase or milestone carries an entry condition (what must be true in order to begin) and an exit condition (what must be true in order to finish). The exit condition points to the acceptance criteria, quality gates or decisions in `specification.md` instead of restating them. Without this anchoring the plan becomes a wish list without a checkable criterion for done. The plan is the sequence, and the specification is the yardstick.
2. The plan looks forward and is carried forward. When a milestone is completed, its state moves into the status tracker, and new insights about the next phase flow in. The provenance of substantive transitions lies in the journal, and Git preserves earlier wordings.
3. Volatile figures may stand in the status tracker. Knowledge, strategy and overview documents carry no transient quantities. The status tracker differs from them as a snapshot of the progress of work at a point in time and therefore falls under the snapshot exception that applies to dated status documents. Commit hashes, completed numbers of artefacts and measured values reached belong there, because the status tracker records exactly this state. Outside the status tracker, for instance in the description of future phases, the outlook stays free of figures that go stale with the next step.

## Frontmatter schema

The document follows the reduced required core of the [convention](convention.md), `title`, `project` (object with `name` and `repository`), `method` (object with `name` and `url`), `status`, `created`, `updated`. The purpose lives as the first paragraph under the H1, in one sentence that is understandable without the context of the repository. The template ensures that this first paragraph carries the purpose.

`status:` means the maturity of the document (`idea`, `draft`, `stub`, `complete`, `reviewed`, `archived`, and since 2026-07-19 also `active` for ongoing process documents and `snapshot` for documents tied to a fixed date), and not the operational state of the project. For a plan that is carried forward continuously, `active` is the fitting value. The operational progress stands in the status tracker and not in the frontmatter.

`template:` is recommended as soon as this template has been applied, as a block with `name`, `version` and `url` (see the section *Template addressability* of the [convention](convention.md)). Specific to the plan are these fields.

- `related:` typically lists `specification` (the yardstick in which the milestones are anchored), `journal` (the retrospective counterpart) and `index`, and where individual milestones build on them also `data` and `architecture`.
- `topics:` is typically left out. The plan is a process document and carries no thematic placement in a domain. The thematic topics live in the knowledge documents beside it.
- `knowledge-sources:` is left out, since the plan carries no external references.
- `updated:` is updated at every completed milestone. Next to the journal, the field is one of the most frequently changed in the knowledge base.
- Additionally recommended are `language`, `version` (consistent across the repository), `authors` and `generated-with`, if the document was produced with LLM support. `authors` carries only people, and `generated-with` uses the format `Harness (LLM)`, for instance `Claude Code (Claude Opus 5)`. See the section *Provenance in the frontmatter* of the convention.

## Sections in detail

### Lead

The lead carries the purpose in one sentence and then delimits the function in two to three sentences. It states what the plan steers, positions it explicitly as the forward-looking counterpart to the journal and notes that it is carried forward and not accumulated. The FemPrompt `plan.md` models this self-positioning: "This is a process document; it is updated as phases close (mark done with date), and decisions made along the way go into specification as ADRs, not here." The lead positions the plan against specification and journal. It carries neither the what and why nor the history of how things came about.

### Target state

This section defines what "done" means before the sequence begins. It states, in two to four points, the conditions under which the project or the planned stage counts as complete. The target state is the fixed point towards which all phases run, and without it the sequence of phases loses its direction. The FemPrompt `plan.md` has this section as "Zielbild (what done means)" with four checkable conditions. In smaller plans the target state can move into the lead, and in projects with several stages it has a section of its own.

### Phases and milestones

This section divides the work into an ordered sequence of checkable stages. Each phase has a goal in one sentence and beneath it one or more milestones, and each milestone has an entry condition, the work to be done and an exit condition. An overview table with phase, milestones and quality gate gives the overall picture. The order is always oldest phase first, because the plan represents the order of building.

Each milestone carries the following.

- The entry condition states what must be true for the milestone to begin, as a rule the completion of an earlier milestone or an external precondition.
- The work states what is to be done, as bullet points or as thematically ordered blocks of commits, concretely enough that an agent can begin without asking.
- The exit condition states how to recognise that the milestone is complete. It is anchored in an acceptance criterion, a quality gate or a decision in `specification.md` and is formulated as "Done when", never as a declaration of intent.

An optional indented note `Status (YYYY-MM-DD)` per milestone records where the milestone currently stands when the central status tracker is not detailed enough. The FemPrompt `plan.md` uses these indented status blocks per phase extensively.

### Status tracker

This section records the current progress of all milestones at a point in time. It holds a table (milestone, status, notes) that is updated at every completed milestone. Volatile figures are expressly allowed here, such as commit hashes, completed counts and measured values reached, because the tracker freezes exactly this state (snapshot exception). A small legend (`completed`, `in progress`, `pending`) keeps the status values consistent. The `roadmap.md` has this section as "Status Tracker" with commit references in the notes column, and the `IMPLEMENTATION-PLAN.md` solves the same through phase tables with `[x]` markers and a legend.

### Open decisions and dependencies

This section records what remains to be decided and what blocks the sequence. It gives open decision points together with the milestone before which they must be settled ("Decide before P3"), and hard dependencies between milestones or on external events ("TP4 freeze precedes the B2 screening start"). The FemPrompt `plan.md` has both "Open items" and explicit notes on "Hard ordering". This section prevents a phase from being started while its precondition is still unresolved.

### Deviations

This section governs what happens when the planned order is departed from. It states under which conditions the sequence may be reprioritised, which canonical document carries the changed assumption and which quality gates apply regardless of the order. A substantive transition of correction receives a journal entry with the field Corrected. Short plans with a fixed pace leave the section out.

## What does not belong here

- Records of the provenance of transitions that were integrated, rejected or corrected. They lie in `journal.md`.
- Requirements and the justification of decisions. What is built and why stands in `specification.md`. The plan points to its acceptance criteria as exit conditions and does not restate them. Decisions taken along the way move into the specification as ADRs and not into the plan.
- Volatile figures outside the status tracker. Transient quantities stay out of the description of future phases, since they go stale before the phase begins. Only the status tracker carries the frozen state.
- Time estimates. The sequence is fixed and the pace is open. The plan names no estimates in minutes, days or weeks ("No time estimates", `roadmap.md`).
- An unordered backlog. The plan orders steps that build on each other. Loosely collected individual ideas without a sequence belong in a backlog document of their own.

## Template to fill in

The following block is meant as a template. The first paragraph after the frontmatter carries the purpose.

````markdown
---
title: Plan
project:
  name: [Project name]
  repository: [Repository URL]
status: active
language: [de | en]
version: [Repository schema version]
created: [YYYY-MM-DD]
updated: [YYYY-MM-DD]
authors: [Author 1, Author 2]
generated-with: [Harness (LLM), if relevant]
method:
  name: Promptotyping
  url: https://lisa.gerda-henkel-stiftung.de/digitale_geschichte_pollin
template:
  name: Plan template
  version: 0.3
  url: https://dhcraft.org/Promptotyping/templates/plan.md
related: [specification, journal, index]
---

<!-- Lead: the first paragraph carries the purpose in one sentence, then the delimitation. Forward-looking counterpart to the journal, carried forward instead of accumulated, decisions move into the specification. -->

[Lead paragraph with the purpose in the first sentence]

## Target state

<!-- What "done" means, in two to four checkable points. The fixed point towards which all phases run. -->

[...]

## Phases and milestones

<!-- Overview table, then per phase a goal and one or more milestones with entry, work, exit. Order: oldest phase first. -->

| Phase | Milestones | Quality gate |
|---|---|---|
| Phase 0. [Name] | M1 [Short name] | none |
| Phase 1. [Name] | M2 [Short name] | Gate A |

### Phase 0. [Name]

**Goal:** [One sentence.]

#### Milestone 1. [Short name]

**Entry condition:** [What must be true beforehand.]

[Work to be done as bullet points or blocks of commits.]

**Exit condition (M1):** [Done when ..., anchored in an acceptance criterion or quality gate in specification.md.]

<!-- Optional per milestone: -->
Status (YYYY-MM-DD): [Where this milestone currently stands.]

## Status tracker

<!-- Snapshot at a point in time. Volatile figures are allowed here (commit hashes, counts, measured values). Updated at every completed milestone. -->

| Milestone | Status | Notes |
|---|---|---|
| M1 [Short name] | pending | |
| M2 [Short name] | pending | |

Legend: completed, in progress, pending.

## Open decisions and dependencies

<!-- Open decision points with the milestone before which they must be settled. Hard dependencies between milestones or on external events. -->

[...]

## Deviations

<!-- Optional. Under which conditions reprioritising is allowed, where the deviation is documented (journal.md), which conditions apply regardless of the order (quality gates). -->

[...]
````

## Use as a prompt template

The template serves as a structural anchor when a plan is set up. The agent receives the template block and fills it from `specification.md` and the current state of the repository. At the start of a session, after `knowledge/INDEX.md` and the section `## Open` at the beginning of `knowledge/journal.md`, it reads the status tracker and the section *Open decisions and dependencies*. When a milestone is completed, it updates the plan and the `updated:` field. A journal entry follows only for a transition that belongs together in substance.

The template also serves as a review sheet for an existing plan. An existing `plan.md` or `<subject>-plan.md` is held against the template. The check covers the entry and exit conditions, their anchoring in the specification, the restriction of volatile figures to the status tracker and the removal of completed work from the active plan.

## Example

The `plan.md` of FemPrompt SozArb (`knowledge/plan.md`, [chpollin/FemPrompt_SozArb](https://github.com/chpollin/FemPrompt_SozArb)) calls itself "a process document" in its lead and the counterpart to the journal, in which decisions taken along the way "go into specification as ADRs, not here". It carries a "Zielbild (what done means)" with four checkable conditions, divides the work into stages A to C with numbered milestones (P0 to P7), and every milestone closes with a "Done when" exit condition. The indented blocks `Status (2026-06-09)` per milestone carry volatile states such as concrete file paths and differences in counts (the pairing problem of 292 against 291), which are deliberately absent from the running text on future phases.

The `roadmap.md` of the DH Developer Skriptum (`knowledge/roadmap.md`, [chpollin/Teaching](https://github.com/chpollin/Teaching)) is listed in its `INDEX.md` expressly as a function of its own, "Plan", with the question "What is the sequence of work, what milestones, what is next?". It opens with a table of phases and milestones, anchors every milestone in the "Quality Gates" of `specification.md`, states "No time estimates", and closes with a "Status Tracker" table (commit references such as `28dd38e` in the notes column) and a "Deviations" section, which marks the order of waves as a recommendation and the gates as applying independently.

The `IMPLEMENTATION-PLAN.md` of co-ocr-htr (`knowledge/IMPLEMENTATION-PLAN.md`, [ResearchTools/co-ocr-htr](https://github.com/chpollin/co-ocr-htr)) shows the compact variant, with dense phase tables (feature, status, location) using `[x]`, `[~]` and `[ ]` markers and an explicit legend at the end. It demonstrates that status tracker and phase structure can coincide in a single document carried by tables when the project is small enough. Entry and exit conditions are indented into the phase goals there instead of being spelled out per milestone.

The failure pattern found by the content audit of July 2026 is the plan as a miscellany, a `plan.md` that mixes charter, specification, status and session record in one document and loses its steering function, because no reader can tell any longer which part looks forward.

## Terms

### Phase

A thematically delimited section of work with one goal, which groups one or more milestones.

### Milestone

A checkable stage within a phase, with an entry condition, the work to be done and an exit condition.

### Entry condition

What must be true for a milestone to begin, as a rule the completion of an earlier milestone or an external precondition.

### Exit condition

How to recognise that a milestone is complete, anchored in an acceptance criterion or quality gate of `specification.md`.

### Status tracker

A snapshot of milestone progress at a point in time. It is the only section of the plan in which volatile figures are admissible.

### Quality gate

A checkpoint defined in the specification, made of mechanical and human checks, to which an exit condition can be bound.

## Related

- [Templates of the Promptotyping Documents](./)
- [Convention](convention.md)
- [Promptotyping](https://dhcraft.org/Promptotyping/)
- [Journal template](journal.md)
- [Specification template](specification.md)
- [Index template](index.md)
- [Project template](project.md)
