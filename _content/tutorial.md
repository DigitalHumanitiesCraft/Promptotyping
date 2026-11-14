---
title: Tutorial. Your first Promptotyping iteration
slug: tutorial
status: draft
language: en
version: "0.5"
created: 2026-07-29
updated: 2026-11-14
machine-url: https://dhcraft.org/Promptotyping/_content/tutorial.md
---

# Tutorial

This page directs your own first Promptotyping iteration, from a dataset you bring to an accepted, versioned first state. The [worked workflow](#workflow) shows the same loop as a completed case you can watch; here you carry it out yourself. The six steps map onto the practice's four forms of work, Step 1 is Preparation, Step 2 is Exploration, Steps 3 and 4 are [Distillation](#glossar), Step 5 is Implementation, and Step 6 closes the iteration with verification and acceptance. The returns from later steps into earlier documents are knowledge curation, which runs through all four forms of work. Every step names its goal, the concrete action, the state you should then be in, and a check you can decide alone. Where the action addresses the agent, a short sentence names the step in the words a person would use, and the [Promptotyping skill](#skills-promptotyping) carries the procedure behind it. Say it in the words of your material; the durable substance of the practice is the documents these steps produce.

## What you need

- **A structured dataset.** A folder of CSV, JSON, XML/TEI, or comparable machine-readable files that you know as a researcher. Tabular exports are enough; the tutorial makes no assumptions about format richness.
- **A question.** One thing you actually want to see, check, or trace in this data. Without it, every later decision loses its criterion.
- **An agentic coding tool.** A coding agent that can read your files, run scripts, and edit the repository, for example Claude Code or a comparable harness. Start the agent in the folder that will become the repository; every path the steps below name is relative to that root.
- **The Promptotyping skill.** Install or copy the [canonical Promptotyping skill](#skills-promptotyping) before Step 1. Use Orient whenever a later session enters the repository and Hand off before another session or person takes over. An agent that cannot load skills gets the same procedure when you give it the [skill file](https://dhcraft.org/Promptotyping/skills/promptotyping/SKILL.md) to read at the start of each session.
- **Git.** The iteration ends with an identifiable versioned state, and a repository is the simplest way to have one. You need no Git knowledge beyond letting the agent run it.
- **Clearance to process the material.** The agent sends what it reads to an external model. Before Step 2, settle that the data may be processed that way, which concerns personal data, copyright, contracts with holding institutions, and the provider's terms. Where that cannot be established, Promptotyping is the wrong instrument for this material, whatever its technical fit.
- **Your own competence.** You are the [Critical Expert](#glossar) of this pass. The agent will propose mappings, categories, and interfaces; whether they are faithful to your material is a judgement the tutorial cannot make for you.

The scope of a first pass is deliberately small. One dataset, one question, one artefact. Everything the pass teaches you is written into documents, so nothing is lost when you throw the artefact away.

**When the agent does not deliver.** At any step, three moves cover most failures. Start a fresh session and supply only the repository, so accumulated context stops interfering. Cut the task smaller, one document or one view instead of several. And when the same mistake recurs, write the missing fact or rule into the document it belongs to before prompting again; the routing rule in Step 5 says which document that is.

## Step 1. Prepare

**Goal.** The material and your purpose are explicit enough that systematic exploration can start, and later changes will be visible as revisions.

**Do this yourself first.** Write down, in your own words, three things: the purpose in two or three sentences, the question you put to the data, and two or three user stories in the form "As a (role), I want to (activity), so that (purpose)". A usable user story names an activity and a purpose, for example: "As an editor, I want to see all letters whose dating is uncertain next to their date evidence, so that I can decide which datings the edition can assert." Write these yourself. They are the criterion everything later is checked against, and outsourcing them to the model means checking the model against the model.

**Then let the agent set up the repository:**

```
Set up this folder as a Promptotyping project for my data, and ask me for the purpose, the question and the user stories.
```

Give your purpose, question, and user stories when the agent asks, and copy a working copy of your dataset into `data/`, keeping the originals elsewhere. The skill has the agent initialise Git, keep your wording, mark the stories as provisional, and leave `data/` unchanged.

**You should now have** a repository containing `data/` with your files and `knowledge/project.md` with purpose, question, and provisional user stories in your wording. This is a compact starting state. Step 3 transfers the stories into `specification.md`, their durable document function, after Exploration has tested their relation to the data.

**Check yourself.** Read the user stories and ask whether a colleague from your field would understand what the artefact must let them do, without you in the room. Sharpen any story that only says "explore the data" until it names an activity and a purpose.

## Step 2. Explore

**Goal.** A documented account of what the data can support, what it cannot support, and what remains open.

**Do this.** Give the agent its first analytical task:

```
Explore my data with small scripts and tell me which three statements about them you are least sure of.
```

The skill has the agent write the volatile figures to a generated profile and name in `data.md` the file and rows behind every non-obvious statement. That demand for named evidence matters twice over. The agent's statements about your data are hypotheses, and `data.md` must keep visible where the files end and the model's guesses begin; the named evidence rows are what make the next check workable.

**You should now have** a curated `knowledge/data.md`, a generated `generated/data-profile.md`, and a `scripts/` folder with the documented profiling scripts that produce the report.

**Check yourself, twice.** First the falsification probe: pick one claim in `data.md`, follow its named evidence to the file and rows, and read them yourself. Second the gap probe: name one deficiency of the data that you know as its researcher, a known gap, a known encoding quirk, a known bias, and look up whether `data.md` states it. If either probe fails, tell the agent what is wrong and have `data.md` corrected before you continue. That correction is your first act as Critical Expert, and expect to make it; a first `data.md` that survives both probes untouched is the exception.

## Step 3. Distil

**Goal.** The remaining durable documents exist: Specification, Design, Navigation, Verification, the Process Inbox, the provenance index, and the agent instruction document in the repository root.

**Do this.** Have the agent derive them through the skill's Distil operation. The named structures are available in the template catalogue as [Project](#promptotyping-document-project), [Data](#promptotyping-document-data), [Specification](#promptotyping-document-specification), [Design](#promptotyping-document-design), [Verification](#promptotyping-document-verification), [Index](#promptotyping-document-index), [Handoff](#promptotyping-document-handoff), [Journal](#promptotyping-document-journal), and [Action Layer](#promptotyping-document-action-layer).

```
Distil the knowledge base for the first artefact, built as a static web page without a build step.
```

One sentence in there is a choice you should know you are making. This tutorial fixes the technical baseline to a self-contained static web page, HTML, CSS, and vanilla JavaScript without a build step, loading its data from files; that is the artefact family this site documents as a [Technology Baseline](#vorlagen-technology-baseline), and it keeps a first pass free of infrastructure. Tell the agent if your case genuinely needs something else.

**You should now have** `knowledge/INDEX.md`, `project.md`, `data.md`, `specification.md`, `design.md`, `verification.md`, `handoff.md`, `journal.md`, and a root agent instruction document.

**Check yourself.** Open `specification.md` and test one acceptance criterion against its user story: could you decide, sitting in front of the finished artefact, whether the criterion is met? A criterion you could not decide is not yet a criterion, have it sharpened.

## Step 4. Reduce and test the knowledge base

**Goal.** A knowledge base a fresh agent could work from, cut to the scope you actually want.

**Do this.** Run the scope check as its own move:

```
Curate the knowledge base down to a first version. Propose the cuts and wait for my approval.
```

The skill's criterion for cutting is that whatever no user story carries goes, however reasonable it looks, and it looks for contradictions between the documents as well. Approve the cuts you agree with in your own words, and the agent applies only those and records the reduction in the journal.

**You should now have** the same documents, reduced, with the reduction recorded in the journal.

**Check yourself with the fresh-instance test.** Start a new agent session with no history, in the repository root, and ask it:

```
Orient yourself and tell me what this project is, what the data afford and what comes next. Build nothing.
```

If the answer misses something you consider essential, that knowledge exists only in your head or in the old chat. Put it into the document where it belongs, `data.md` for facts about the data, `specification.md` for what the artefact must do, `design.md` for how things should be represented, and run the test again. This test is the practice's own completion criterion for Distillation.

## Step 5. Implement

**Goal.** A running artefact derived from the documents, built in increments you actually inspected.

**Do this.** Have the agent build the first milestone only:

```
Implement the first milestone and give me the address to open.
```

The skill has the agent start a local web server and stop for your inspection. The local server matters; a static page that loads data from files stays blank when opened directly from the file system, and that blankness is an environment effect you would otherwise misread as a bug. Open the URL after every milestone. Three feedback channels do the work here. Screenshots go back to the agent so it sees what it built; take one and drag the image file into the session, or paste its path. Faults are reported by naming the element and the expected behaviour from `specification.md`, since "looks wrong" gives the agent nothing to act on. And you operate the artefact the way the role in your user story would.

When something is wrong, route the correction before you prompt. A factually wrong display means `data.md` or `specification.md` was incomplete, and the durable fix belongs there, with the artefact regenerated from the corrected document. A violation of your technical rules means the agent instruction document was too vague. Patching only the code leaves the knowledge base behind, and the next session inherits the gap. This knowledge curation, the return of findings into the documents, is what the practice adds to code generation.

When a finding needs a correction, describe it in your own words and ask for curation before the code changes:

```
Here is a fault I found: (your description). Curate the knowledge base before any code changes.
```

The skill has the agent decide at which level the fault arose, correct the responsible document and show you the changed passages. Then have the artefact brought in line with the corrected documents:

```
Bring the artefact in line with the changed documents and give me the address.
```

**You should now have** a running artefact covering your reduced scope, milestone by milestone, and knowledge documents that were corrected whenever implementation exposed a gap.

**Check yourself.** For each milestone, did you open it and test it against the acceptance criteria of the user story it serves, before the next one was built? Deferring inspection is tempting and sometimes right in a first pass, but everything you deferred must be inspected now, before the next step calls anything accepted.

## Step 6. Verify, accept, version

**Goal.** A first [promptotype](#glossar), the state of the artefact together with the project knowledge and the research data from which it was built, and your judgement whether it fits your purpose.

**Do this.** Separate the checks by who can decide them. Let the agent run what is deterministically decidable:

```
Run the checks a rule can decide and list the criteria I have to decide.
```

Treat the agent's comparisons as evidence for your judgement; the judgement itself stays with you. What only you can decide is whether the representation is faithful to the material and whether the artefact answers the question from Step 1. Decide it by using the artefact on cases you know well, including at least one case you expect it to get wrong.

Then make your purpose-specific judgement. The agent can write it down for you, in your words and without judging itself:

```
Record my judgement verbatim and commit: (your judgement in your own words).
```

The durable grounds of the judgement go into `knowledge/verification.md`. Add one entry at the top of `knowledge/journal.md` whose Trigger field names your judgement, whose Decided field states the accepted result in your own words, whose Changed field names the Verification document, and whose Evidence field points to a checkable record. Put accepted future work in `plan.md` and received open deltas in `handoff.md`. Commit the documents and artefact together after the Journal entry exists.

**You should now have** your first promptotype, identified by one commit and a dated provenance entry, and accepted for your purpose if your judgement found that it fits. Otherwise it remains a state of work in progress, and the next iteration starts from what you found.

**Check yourself.** Could a colleague, given only the repository, reconstruct what was accepted, by whom, for which purpose, and on which grounds? Acceptance here is purpose-specific. `verification.md` carries the grounds and `journal.md` points to the transition; publication or handover would impose further criteria.

## Where this leaves you

The next iteration starts from the documents, and that is the point of having written them. A new requirement, a corrected understanding of the data, or a new source enters the relevant document first, and implementation follows from it. The [canonical skill](#skills-promptotyping) carries this routing into later sessions; its subcommands `orient`, `curate` and `handoff` keep the knowledge base true and lean as work continues. The [templates](#vorlagen) give every document you just wrote a fuller, versioned structural pattern; the catalogue is German, and your files map onto it as `project.md` to `project`, `INDEX.md` to `index`, `data.md` to `data`, `specification.md` to `specification`, `design.md` to `design`, `verification.md` to `verification`, `handoff.md` to `handoff`, `journal.md` to `journal`, and the root agent instruction document to `action-layer`. The [working-environment page](#arbeitsumgebung) explains how the vault, agent instruction document, harness, and skill fit together. The [best practices](#praxis) collect the working practices that grew out of documented projects, including the verification milestones and the script-versus-LLM separation you just used. The paper argues why the practice is built this way, with the [documented projects](#use-cases) as its evidence.

One honest limit. This tutorial exercised the loop on a bounded first pass. What it cannot establish is that your artefact is scholarly adequate, since that depends on the judgement you brought to Steps 2 and 6, and it does not transfer to material you cannot verify. Where an artefact is to be operated durably, maintained, or handed to third parties, the boundary to Research Software Engineering applies, and the documents you now have are the handover package.
