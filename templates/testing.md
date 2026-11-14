---
title: Testing template
slug: testing
version: "0.3"
status: complete
language: en
updated: 2026-11-14
machine-url: https://dhcraft.org/Promptotyping/templates/testing.md
---
# Testing template

This template structures the quality assurance document of a Promptotyping knowledge base. A single document is called `testing.md`, and separate test domains are specialised as `<subject>-testing.md`. The document lies in the `knowledge/` folder and carries the test strategy, its guarantees, its open gaps and the reproducible run commands. The first paragraph under the H1 confirms this function, and no separate frontmatter field `zweck:` or `function:` is introduced.

## Scope

The template applies as soon as the system has automated or systematic quality assurance that is to be documented, such as a test suite, a validation harness or an acceptance check against the project goals. The trigger is the need to make the test strategy comprehensible as a whole, meaning what is checked, what is deliberately left unchecked and which guarantee follows. The mere existence of individual tests does not trigger it.

Trivial tool repositories without tests of their own do without the template, and a sentence in `architecture.md` is then enough. The documentation of individual test cases lies in the test code. Continuous integration configuration lies in `architecture.md`, or in `deployment-architecture.md` when it has a routing question of its own. The testing document refers to continuous integration only as a trigger.

Testing normally remains one document. When the suite grows to several independent engines with their own update rhythms (a Node engine harness and a separate Python/lxml validation harness, as in teiCrafter), these still remain sections of the same document as long as they share one test strategy. A separate file pays off only when one aspect of quality assurance (for instance a CER evaluation methodology in an OCR project) develops a reader and a maintenance rhythm of its own.

The document comes into being with the first suite and is updated when a guarantee is added, a gap closes or a run command changes, in the same commit as the suite itself. The optional state block carries the meaning of a fixed date and goes stale by design. The rest of the document describes the strategy and goes stale only when the suite is rebuilt without the document being touched.

## Function of the document

The document answers what this system demonstrably guarantees, how it shows this and what remains deliberately unchecked. It addresses three groups of readers. A reviewer wants to decide whether a claim can be trusted or must be checked personally. A coding agent makes a change and is to deliver the matching regression test with it. An external examiner or domain expert judges the reproducibility of the results. In the context of Promptotyping the second group matters most. The document tells the agent in which form a new guarantee is to be secured, and so raises every sign-off from a claim ("the IDs are gone") to a measurement ("the test is green").

## Structural principles

Three principles carry the document.

1. The document separates guarantee from gap. What the system demonstrably holds stands apart from what it deliberately does not check. A test strategy that names only its guarantees conceals its blind spots and invites false trust. The explicit section on gaps is constitutive and tells the reviewer exactly where to look personally. It is no admission of incompleteness.
2. The document describes guarantees and leaves implementations to the code. What a proof claims and against which data it shows this is test strategy, and how the test code is built internally is code. A description that reaches into the test code goes stale faster than it is of use. The central information is the claim of each proof and its evidential status.
3. The document ties the tests back to the project goals. A test suite serves as the yardstick for whether the system reaches its goal and has no purpose of its own. The document makes this binding explicit through an acceptance section, which gives for each project goal the method that checks it and the evidence that it is green. This distinguishes the document from a mere list of green tests.

## Frontmatter schema

The document follows the reduced required core of the current convention, `title`, `project` (object with `name` and `repository`), `method` (object with `name` and `url`), `status`, `created`, `updated`. The file name is the primary routing signal, and the first paragraph confirms the function. There is no field `zweck:` or `function:`.

- `template:` recommended, as a block with `name`, `version` and `url`, where this template has been applied (see the section *Template addressability* of the [convention](convention.md)). teiCrafter already carries the field canonically with the dhcraft.org URL.
- `status:` means the maturity of the document (`idea`, `draft`, `stub`, `complete`, `reviewed`, `archived`, plus `active` for ongoing process documents and `snapshot` for documents tied to a fixed date). It does not mean the operational state of the project. A testing document with a maintained state block can carry `snapshot` semantics, and the vocabulary of the convention is authoritative.
- `topics:` typically `[[Software Testing]]`, `[[Regression]]`, `[[Test-Driven Development]]`, `[[Data Validation]]`, `[[Evaluation]]`. Edition and OCR projects add topics close to the domain such as `[[TEI XML]]`. They place the agent in the fields of knowledge in which a test strategy needs reasoning.
- `version:` consistent across the repository, raised together with the sibling documents.
- `authors:` carries only people, even when an LLM produced the text. `generated-with:` stands beside it in the format `Harness (LLM)`, for instance `Claude Code (Claude Opus 5)`, if the document was produced with LLM support. See the section *Provenance in the frontmatter* of the [convention](convention.md).
- `related:` typically `architecture`, `specification`, `data`, the documents against which the tests measure.

## Sections in detail

### Lead

The lead names the core of the test strategy in one to three sentences and thereby carries the purpose. It states the governing principle (testing first, testing the output instead of the code, four pillars), the architecture of the checking (headless proofs plus a validation harness, or pytest plus a verification set plus manual visual inspection) and the one sentence that sums up the document. teiCrafter writes here, in translation, "Testing first. The yardstick is built before the features it judges", and M3GIM "The test suite validates the output of the pipeline, not the pipeline code".

### Test strategy and test taxonomy

This section names the architecture of quality assurance, the governing order of the tests. It lists the pillars or levels into which the tests fall, each with the class of error it covers and the others do not see. An edition project can have four complementary pillars (pytest for the build code, a verification set for data consistency end to end, JavaScript tests for the browser logic, manual visual inspection). teiCrafter has two layers (headless engine proofs and a validation harness with three levels). co-ocr-htr prioritises logic before interface. The taxonomy is the core of this section, and every recurring kind of test receives a name and a delimited class of error.

### What is guaranteed (proofs)

This section lists the central guarantees one by one, each with its claim and evidential status, in a table with the columns Proof, What is claimed and Result. In teiCrafter these are the engine proofs (the central claim "read any TEI and save it back without losing a byte", evidenced by the roundtrip sweep) and the feature proofs per milestone. In a data pipeline project they are the test stages (schema validation, string integrity, referential integrity, determinism). Each entry carries the claim and leaves the code out. The result is binary (PASS, or a count such as 295/295) or qualitative (green, varying). Concrete test counts may stand here, because this document has the character of a snapshot. The rule against volatile metrics applies to knowledge and strategy documents and does not apply to a testing document that records the state of evidence.

### Acceptance and engine proofs (verification of the project goals)

This section ties the tests back to the project goals. For each project goal or success criterion it gives the question to be answered, the verification method, the level (automatic, contextual, visual, professional) and the evidence. teiCrafter states this verification cascade explicitly, in translation: "Was everything processed" (coverage sweep, automatic), "Is the output valid TEI" (schema, automatic), "Is nothing lost, and is the only change the intended one" (roundtrip byte identity, contextual), "Does the intended use work for a person" (browser walk-through, visual), "Is it correct as an edition" (review by domain experts, professional). The engine proof is the central claim that carries the whole system. It stands here because it bridges the test suite and the project goal. In smaller projects this section shrinks to a short mapping of the pillars to the acceptance questions.

### What is deliberately not checked (gaps)

This section makes the blind spots of the test strategy explicit. For each gap it states what is not covered, why (cannot be automated, not worth it, separate milestone) and what currently covers it in place of a test. An edition project may list browser visual regression (screenshot comparison, separate milestone, currently covered by manual visual inspection), JavaScript-rendered DOM content and stakeholder acceptance. M3GIM lists, under "Delimitations", pipeline internals, Google Sheets content and performance as deliberately untested. co-ocr-htr lists interface components, external dependencies and visual aspects. This section is constitutive, since a guarantee without a named gap is a claim and falls short of a strategy.

### How to Run

This section enables a third party to run the tests. It gives the concrete commands in a code block, each with a comment on what it checks and which target state it has. teiCrafter gives "node test/tools/run_all.mjs" as the one regression gate plus the individual proofs with target states. M3GIM gives "pytest tests/ -m 'not slow'" plus the determinism variant. co-ocr-htr gives the npm test commands. Where needed, environment overrides for paths and data sources belong here (M3GIM and teiCrafter both have such overrides). The commands are written so that a person or an agent can execute them directly.

### Claims carried outside the project (optional)

This section applies when the project carries empirical findings or claims of novelty outside, in a paper, a proposal, a report or a public site. Such a claim is checked against the research data before it leaves the project and is used outside only in the form the check allows. A project that explores only internally leaves the section out.

- Each check is an attempt to refute the claim. A claim holds when the attempt fails. Agreement among several checkers is a signal and settles nothing by itself.
- Each result takes one value from a small closed set of verdicts, and each verdict carries its consequence. A minimal set is holds (use the claim), partly holds (correct the wording before use) and does not hold (withhold the claim).
- The check runs as a chain. A deterministic check by script comes first (quotations identical with the source, references resolve), then an agentic review, then the scholarly validation by the researchers. Only two things confirm a claim, a person whose expertise extends as far as the decision demands, or a validated deterministic rule. A rule of this kind is an executable check that runs over the whole of the real data, has failed where it should on cases whose answers are known, and has been adopted by the researchers for a defined kind of decision.
- The checker sees the source passage and the claim and does not see the author's reasoning, so that the reasoning cannot anchor the judgement.
- A claim of novelty is searched with the aim of refuting it, and its entry names the nearest prior work found.
- What the check cannot decide is listed as open, with the reason it cannot be decided and the person who is to decide it.
- The section states the limits of the method, for instance that a check without ground truth measures plausibility and cannot establish correctness, and that an error below the checker's threshold of detection passes. A check without stated limits is itself an unchecked claim.

### Pattern: test in the same commit (optional)

This section records the working principle that every checkable change receives its regression test in the same commit. It states the rule, its justification (tests as an afterthought produce gaps), examples and the declared exception (purely visual polish). It applies when the repository practises test-driven or test-accompanied development. Suites without this principle leave the section out.

### TDD workflow and anchor strategy (optional)

This section documents how new guarantees arise and how single-case fixtures serve as living documentation. It describes the xfail workflow (state the invariant first as strict xfail, then implement, and XPASS signals the completed phase) and the anchor record strategy (a few curated fixtures that keep their source provenance explicit and so make the mapping from source to output readable in the test itself). M3GIM describes both at length. The section applies when the project extends a data model iteratively. Static suites leave it out.

### Known exceptions and limits (optional)

This section records deviations that are permanently tolerated. For each exception it gives the test name, the status (xfail, skip), the cause and the condition under which the exception is lifted. M3GIM lists "test_all_record_ids_unique xfail (PL_07 duplicate from the source, fix in the sheet)" and a justification for a skip. co-ocr-htr lists under "Known Limitations" a concrete regex lastIndex bug as a trap that was caught and fixed. The section applies when the suite carries deliberately tolerated red or skip states.

### Components (optional)

This section lists the test files and helper tools so that a developer finds the way in. For each file or tool it gives one sentence on its function (the validator, the orchestrator, the negative self-test, the fixture generators). teiCrafter and M3GIM both list their components or structure in this way. The section applies when the suite is large enough that its structure itself needs orientation. For small suites the How to Run section is enough.

### Current state (optional)

This section records the state of evidence of the suite on a fixed date, in a table with pillar or stage, tests and status. M3GIM keeps such a state block. This is the only place where volatile figures are unproblematic, because the testing document has the character of a snapshot in any case. The table is updated with every substantial state of the suite.

## What does not belong here

- Stack and architecture. Which technologies the system uses and how it is built belongs in `architecture.md`. The testing document names the test runner as a tool (Vitest, pytest, Node harness) and leaves the application stack out.
- Provenance of substantive changes. Transitions in the test strategy that were integrated, rejected or corrected are recorded in `journal.md`. The testing document carries the current state of guarantees. References to milestones in proof names remain admissible as stable IDs.
- Requirements. Which functionality the system is to provide belongs in `specification.md`. The testing document checks against these requirements and does not formulate them.
- Implementation of the test code. How a proof is built internally belongs in the test code (test names, assertions, comments). The document carries the claim of each proof and leaves its code out.
- CI/CD configuration. The workflow file is the source of truth, in `architecture.md` or `.github/workflows/`. The testing document names the trigger and leaves the configuration out.

## Template to fill in

The following block is meant as a template. Optional sections that do not apply are deleted before the commit and are not kept empty. The first paragraph under the H1 carries the purpose in one sentence.

````markdown
---
title: Testing
project:
  name: [Project name]
  repository: [Repository URL]
method:
  name: Promptotyping
  url: https://dhcraft.org/Promptotyping/
template:
  name: Testing template
  version: 0.3
  url: https://dhcraft.org/Promptotyping/templates/testing.md
status: draft
created: [YYYY-MM-DD]
updated: [YYYY-MM-DD]
language: [de | en]
version: [Repository schema version]
authors: [Author 1, Author 2]
generated-with: [Harness (LLM), if relevant]
topics: ["[[Software Testing]]", "[[Regression]]"]
related: [architecture, specification, data]
---

# Testing

<!-- First paragraph = purpose in one sentence. Governing principle (testing first, testing the output, four pillars), architecture of the checking, the one summarising sentence. -->

[Lead paragraph]

## Test strategy

<!-- The pillars or levels, each with the class of error it covers and the others do not see. -->

[...]

## What is guaranteed

<!-- Table: proof, claim, result. The claim instead of the code. Counts allowed (snapshot document). -->

| Proof | What is claimed | Result |
|---|---|---|
| [Proof] | [Claim] | [PASS / n/n / green] |

## Acceptance

<!-- For each project goal: question, method, level (automatic/contextual/visual/professional), evidence. The engine proof as the central claim. -->

| Question | Method | Level | Evidence |
|---|---|---|---|
| [Question] | [Method] | [Level] | [Evidence] |

## What is deliberately not checked

<!-- For each gap: what is not covered, why, what covers it in its place. Constitutive. -->

[...]

## How to Run

<!-- Concrete commands with target state. Environment overrides if relevant. The process part. -->

```
[command]                # what it checks, target state
```

<!-- ============================================================ -->
<!-- OPTIONAL SECTIONS: delete those that do not apply before the commit -->
<!-- ============================================================ -->

## Claims carried outside the project

<!-- Trigger: findings or claims of novelty used in a paper, proposal, report or public site. Per claim: wording, source passage in the data, verdict with its consequence, the last step of the chain that checked it. Claims of novelty name the nearest prior work. The checker sees source passage and claim, not the author's reasoning. Confirmed is set by a person whose expertise extends as far as the decision demands, or by a validated deterministic rule, and by nothing else. -->

| Claim | Source passage | Verdict | Checked by |
|---|---|---|---|
| [Wording] | [File, rows or elements] | [holds: use / partly holds: correct / does not hold: withhold] | [script / agentic review / researchers] |

Open: [Claim, why it cannot be decided, who decides.]

Limits: [What the check cannot establish.]

## Pattern: test in the same commit

<!-- Trigger: test-accompanied development. Rule, justification, examples, declared exception. -->

[...]

## TDD workflow and anchor strategy

<!-- Trigger: iterative extension of the model. xfail workflow, anchor records as living documentation. -->

[...]

## Known exceptions and limits

<!-- Trigger: deliberately tolerated red or skip states. Per entry: test name, status, cause, condition for lifting it. -->

[...]

## Components

<!-- Trigger: large suite. One sentence on the function of each file or tool. -->

[...]

## Current state

<!-- Trigger: state of evidence on a fixed date wanted. Table with pillar, tests, status. -->

| Pillar | Tests | Status |
|---|---|---|
| [Pillar] | [n] | [green] |
````

## Use as a prompt template

The template serves as a structural anchor when quality assurance is set up. The agent receives the template block and fills it from the test suite that actually exists, the names of the test files, the assertions and the run scripts. The acceptance section requires a binding back to the project goals in `specification.md` and should be checked against the specification. The section on gaps requires honesty about what is unchecked and should not stay empty out of reflex.

The template also serves as a review sheet for an existing test strategy. An existing `testing.md` is held against the template to check whether guarantee and gap are separated, whether the proofs carry their claim instead of their code, whether acceptance is bound to the project goals, whether the How to Run section actually gets a third party running, and whether no architecture or chronicle has grown into the document.

## Example

The canonical carrier of this function is teiCrafter (`knowledge/testing.md`, "Testing and Evaluation Harness", which already carries the `template:` field canonically with the dhcraft.org URL). It is organised testing first. The lead states, in translation, "Testing first. The yardstick is built before the features it judges", together with the two-layer architecture (headless engine proofs in Node and a validation harness in Python/lxml) and the one regression gate `node test/tools/run_all.mjs`. The central claim is the engine proof "read any TEI and save it back without losing a byte", evidenced by `roundtrip_sweep.mjs` (byte-identical across the whole real corpus). The validation harness has three levels (text and word fidelity, schema validity against TEI All RelaxNG plus Schematron, structural invariants). The acceptance section ties five project questions back to method and level (automatic, contextual, visual, professional) and names the visual level as the centre for the question whether the goal has been reached in the project's own sense. The deliberate gap is the browser click-through of the interface, which the headless proofs cannot cover. Named browser check scenarios cover it instead. The How to Run section lists every proof as a command with target state and environment overrides for the data sources.

Three complementary genres show the range. An edition project's `test-strategy.md` has the four-pillar model (pytest for the build code, a verification set for data consistency end to end in three coverage stages, JavaScript tests for the browser logic, manual visual inspection), the pattern "code plus test in the same commit" with a declared exception for purely visual polish, and an explicit section "Gaps that deliberately remain open" (browser visual regression as a separate milestone, JavaScript-rendered DOM, stakeholder acceptance). M3GIM (`tests.md`) has the principle "validates the output of the pipeline, not the pipeline code", a numbered taxonomy of test stages with deliberate gaps in the IDs, the TDD workflow with strict xfail and the anchor record strategy as living documentation ("cell 123 in Objekte.xlsx becomes this record"), together with a section "Delimitations" listing what is deliberately untested and documented exceptions (PL_07 xfail, NIM_11 skip). co-ocr-htr (`TESTING.md`) prioritises logic before interface, with two explicit lists "What We Test" and "What We Don't Test", and lists under "Known Limitations" a regex lastIndex bug that was concretely caught. All four share the basic figure. Guarantee and gap are kept apart, and the tests are bound back to the project goals instead of being listed for their own sake.

A frequent failure pattern is a test strategy kept twice, once in `architecture.md` and once in `test-strategy.md`, without either being declared the source of truth. Every change to the suite must then reach two places, and in practice one of them is missed.

## Terms

### Test strategy

The governing order of quality assurance, meaning which kinds of test exist, which class of error each covers and which guarantee follows.

### Proof

A single named guarantee with an explicit claim and a binary or qualitative evidential status. In teiCrafter it is a headless check that shows a property of the engine or of a feature against real data.

### Acceptance

The binding of the tests back to the project goals, for each goal with question, method, verification level and evidence. It is part of verification. The acceptance of a Promptotype for a purpose is a different thing, the judgement of the researchers who work with it.

### Verification level

The kind of check in the Promptotyping cascade, which is automatic (by machine), contextual (against real data and the intended change), visual (a browser walk-through by a person) or professional (review by domain experts). The professional level belongs to scholarly validation, which lies with the researchers, and the other levels belong to verification.

### Gap

A deliberately unchecked area of quality assurance, with its justification and a statement of what covers it in its place. It is a constitutive part of the document and no admission.

### xfail

A test that is red on purpose because the invariant it checks is not yet implemented. In strict mode the suite breaks as soon as the test turns green, which signals the completed phase.

## Related

- [Convention](convention.md), with the list of all templates
- [Promptotyping](https://dhcraft.org/Promptotyping/)
- [Architecture template](architecture.md)
- [Specification template](specification.md)
- [Data template](data.md)
- [Journal template](journal.md)
