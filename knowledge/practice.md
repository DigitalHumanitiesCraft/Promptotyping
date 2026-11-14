---
title: Practice
project:
  name: Promptotyping specification
  repository: https://github.com/DigitalHumanitiesCraft/Promptotyping
method:
  name: Promptotyping
  url: https://dhcraft.org/Promptotyping/
status: complete
created: 2026-11-14
updated: 2026-11-14
template:
  name: Domain knowledge template
  version: 0.3
  url: https://dhcraft.org/Promptotyping/templates/domain-knowledge.md
language: en
version: "2.0"
authors: [Christopher Pollin]
generated-with: Claude Code (Claude Fable 5.2, Claude Opus 5.5)
topics: ["[[Promptotyping]]", "[[Knowledge Engineering]]", "[[Context Engineering]]", "[[Agentic Engineering]]"]
related: [INDEX, project, specification, journal]
---

# Practice

Promptotyping is practised in four forms of work, yields a Promptotype in each iteration and keeps three kinds of checking apart, with the researchers deciding on acceptance. Its procedure for agents is the [Promptotyping skill](https://github.com/DigitalHumanitiesCraft/promptotyping-skill), and its document structures are the [templates](../templates/).

## The working practice

Promptotyping is a working practice in which research data and their contexts are translated into research artefacts with frontier Large Language Model (LLM) agents, so that the artefacts fit the purposes of the researchers and the ways in which they work. Three kinds of engineering carry it. Knowledge Engineering elicits, models and curates the researchers' knowledge of the domain, of the data and of their own aims. Context Engineering selects from this knowledge what an agent needs for a task. Agentic Engineering organises the work of the agents that build on it.

The agents build prototypes from modelled data and from a curated project knowledge base, and whatever checking and use of a prototype bring to light is curated back into that knowledge base. Whether an artefact fits is decided by the sources and by the research purpose, as the researchers understand both, so the knowledge documents can themselves be wrong about the material. The artefact may be replaced once what working with it revealed has been curated back.

It is called a working practice in the sense of editorial practice, a way of doing a particular kind of work that can be described by what it is for, who takes part, what it works with, which forms the work takes, what it yields and how a result is judged. It grew out of doing the work, and the word method is avoided because it would claim an empirical validation that does not yet exist. The description names no feature of a particular LLM or tool. The three projects of the paper were built with a single coding agent and LLMs of a single family, and with others the practice is untried. The agent has to be able to read the project's files, run scripts and edit the repository, so a chat interface that cannot do this does not carry the practice either.

The researchers know the sources and the field and judge whether an artefact fits. Research software developers decide how it is built, and one person can hold both roles, as [Checking](#checking) describes. The user is whoever directs the agent, and that person passes on to the researchers what only they can decide.

## Forms of work

The work takes four forms, which recur in no fixed sequence. A first pass runs through them in the order below, and afterwards each form returns whenever the work calls for it.

### Preparation

Preparation assembles the material and the research context. The research data are collected in their original formats, together with the documentation of the standards and data models they follow, the research questions, the provisional purpose and any requirements already present in the working material. The researchers write the purpose, the question and a few user stories in their own words, because later work is checked against them, and a story written by the LLM would check the LLM against itself. Like every part of the specification they can be wrong about the material. Preparation is done when the material is accessible and documented well enough to be examined. Vagueness here cascades, since a vaguely put question yields a vaguely specified artefact and the correction falls due again in every iteration.

### Exploration

Exploration establishes what the data can and cannot support. Small material is read directly. Beyond a few dozen files neither a person nor an agent opens each one, and feeding the whole corpus to the LLM spends the context on material it would only summarise, where a count would give an answer. The instrument is a script that traverses the corpus and renders a description of it with four parts.

- A structural inventory of every key, path or element and how often it occurs.
- A few real examples per field, enough to see the shape of a value.
- Aggregations such as value ranges, cardinality, empty fields and the distribution over the dimension the question uses.
- The anomalies, meaning rare fields, values that break the declared schema and places where schema and corpus disagree.

The script can be rerun when the data change, and its output is a generated document that nobody edits by hand. The agent then proposes which fields correspond to which analytical categories, which forms of presentation fit the data and where the data fall short, and the researchers judge these proposals. Every non-obvious statement in `data.md` names the file and rows behind it, so that a researcher can follow one claim to its evidence and test whether a gap known to them is stated. Exploration is done when there is a documented account of what is feasible, what is not and why, and the researchers recognise their material in it. Exploration is not optional, because either the researchers explore their data themselves or whoever builds for them has to. What varies is its depth, and with familiar data it is short.

### Distillation

Distillation writes what Exploration taught into the knowledge documents. It is modelling in its own right, selective and written for people and agents at once, and it goes beyond summarisation or context compression, because it keeps every distinction, condition and uncertainty that an adequate implementation depends on. Each document is brought onto one bounded function, redundancy is resolved by reference, and descriptions that can be rendered from the source data stand beside the curated documents as generated ones. Before Implementation the specification is checked for contradictions and cut to a first scope that is small enough to inspect, and whatever no user story carries goes, however reasonable it looks. Distillation has done enough when a new contributor or an agent who has the documents and access to the project is able to carry the work on with nothing further explained. In the skill the researchers also confirm that the documents describe their material and purpose as they understand them. What a document distinguishes and what it leaves out are epistemic decisions, because they determine what every later step can know.

### Implementation

Implementation builds the artefact from the knowledge documents one bounded task at a time, and a task is small enough when its result can be run and inspected. Each task states the documents it draws on and the assumptions it makes, and its context is selected for it, so that large data are worked on through code and only a profile and selected examples enter the context. Each result is shown to the researchers, because a running artefact is what makes many requirements clear in the first place. Three feedback loops steer the work.

- Deterministic feedback from schema validation, tests and builds.
- Visual feedback from screenshots of the running artefact, which go back into the agent's context.
- Expert feedback on whether the output is correct, adequate to the domain and aligned with the question, with faults reported by element identifier and expected behaviour.

In the documented projects, deliberately requesting a radically different design probed alternatives that the learned conventions of the LLM otherwise hid. Deferring the check on a milestone is a decision with a price. It is defensible in a first pass whose point is to see something running, and it leaves a verification debt that is recorded and settled before the artefact is used or handed on.

## Iteration and re-entry

Knowledge curation is how each form of work hands its findings back to the project knowledge. That knowledge is revised whenever the sources, checking or work with the artefacts bring something to light, which corrects what has become outdated and removes what has stopped applying. When a result reveals missing or wrong knowledge, the finding is written into the responsible knowledge document first and the code follows. The first question is where the fault arose, in knowledge about the data, in a requirement, in a design decision or in the agent instructions. Re-entry goes into the form of work the new knowledge belongs to.

- A wrong artefact sends the work back into Distillation.
- A finding that the data afford more or less than assumed sends it back into Exploration.
- Sources that arrive later send it back into Preparation.

A single pass through the four forms is the exception. Regenerating an artefact from the documents brings back no decision that never entered them, which is why patching only the code leaves the knowledge base behind and the next session inherits the gap.

## The Promptotype

A Promptotype is what an iteration yields. It consists of a prototype open to use and inspection, the research data it was built from and the project knowledge base, so that every state of the three can be versioned as a single whole. The prototype serves as a means of knowing, since working with it shows which distinctions the data sustain and where the work breaks down. Something runs early, so there is always something concrete to look at and to discuss. The researchers who work with a Promptotype accept it for a purpose once they judge it good enough for that purpose. Passing checks does not amount to acceptance, and an accepted Promptotype can remain a state of work in progress. One may be in use before most of its data are confirmed, as long as it marks what is confirmed and names who confirmed it.

## The project knowledge base

The project knowledge base is the set of knowledge documents of a project, those in the folder `knowledge/` and the agent instructions in the repository root, versioned with the code. A folder `docs/` is left to a website published from the repository. The documents fall into three types. The types separate functions and lay down no file structure.

- Declarative knowledge documents say what holds, for instance the purpose and scope (`project.md`), how the data are structured, what they mean, where they come from and where they have gaps or are uncertain (`data.md`), and what the artefact is to do (`specification.md`).
- Process knowledge documents record what is open, how the understanding grew and for what reasons, in `journal.md`.
- Agent instruction documents tell agents how to work. They hold procedures, constraints, the checks to run and pointers to the knowledge a task needs, and they are named `CLAUDE.md` or `AGENTS.md`.

A description of a project's pipeline is declarative, because it states something about the subject, while the process document holds the work on the project. A project adds a document when it has the function for it, such as `design.md` for an interface or `testing.md` for what its tests guarantee. The file name carries the function before the document is opened, and each document follows its template in this repository, as far as the material fills it.

The journal opens with the section `## Open`, the complete current list of what the next session needs, rewritten at every handoff and reading "Nothing open." when nothing is. Its entries follow newest first, one per coherent step of the work, with evidence. When the older entries no longer help a reader understand the current state, the journal is condensed, and their full wording goes to `journal-archive.md` or, in a published knowledge base, stays in the Git history alone. Accepted work that has not begun belongs in the specification or a plan.

Generated documents are rendered by a named command, marked as such and never edited by hand. Durable documents state quantities that change as the work proceeds qualitatively or point to the source that holds the current figure.

## Checking

Three kinds of checking stay apart, because a judgement rests on something different in each.

- Verification settles whether a result meets a standard that the project has adopted. It is strongest as an executable check, which decides whether a stated condition holds. Such a check is itself checked for whether it runs against the code the artefact actually uses, covers all of the real data and can fail. A test fixture confirms nothing about the data.
- In agentic review an agent examines code, data or knowledge documents, often with a fresh context. It checks them against the sources, runs executable checks and reports what it finds and what it suspects to be wrong. Its findings are evidence. Since a reviewer that runs on the same LLM can have the same blind spots, the independence of such a review is unproven.
- Scholarly validation is a judgement by people who know the sources and the field. They decide whether the sources warrant a result and whether it is adequate to the research purpose.

A technically correct implementation can still fail validation, because the requirement it realises faithfully may itself be inadequate. A deterministic metric shows the boundary. A character error rate can be computed reproducibly once reference, rules and scope are fixed, yet it measures deviation from a selected reference, and the choice and reading of that reference remain editorial decisions.

A result has one of three statuses. A proposal is what an agent or an LLM produces. A proposal is doubted when anyone taking part, an agent included, has marked it as doubtful. Only two things confirm a proposal, a person whose expertise extends as far as the decision demands, or a validated deterministic rule. A rule of this kind is an executable check that runs over the whole of the real data, has failed where it should on cases whose answers are known, and has been adopted by the researchers for a defined kind of decision. Who or what set a status is recorded with it.

Three questions are put to each Promptotype, and they build on one another. Does it do what it claims? Do the sources warrant it? Is it adequate to the purpose? An agent can run executable checks for the first, raise doubts for the second and point to gaps for the third. The researchers decide. Agents may assemble evidence, compare materials, investigate discrepancies, run checks and record provisional assessments, but they may not record a confirmation, a scholarly validation, an approval or an acceptance themselves. This rule came from the [ZBZ OCR/TEI pipeline](../case-studies/zbz-ocr-tei.md), in which an agent-screening stage had recorded release states that no responsible person had granted. Where a workflow keeps checking states, they stay distinguishable by the procedure that produced them, because a combined confidence score destroys exactly what makes a state readable. Acceptance names its purpose, its criteria, who judged and the known limits, and an artefact can be accepted as an experimental pipeline without being accepted as a publication-ready edition.

Two failure modes of current LLMs add to the need for this division. Sycophancy is the tendency to agree with the user instead of challenging assumptions, so the absence of an objection confirms nothing. Confabulation is the generation of plausible but false output that fills a gap instead of reporting it. Checking also extends to what is missing, the questions not asked and the alternatives not generated behind an artefact that looks coherent.

Two kinds of judgement meet in the work and separate as soon as two people hold them. The judgement of the researchers decides whether the artefact answers the research question, whether the data are represented correctly and what a figure needs by way of context before it may be read. The judgement of the research software developer decides workflow, technology and the form of the artefact, and it reports a fault to the agent in the terms the agent works in. Where one person holds both, the case is hybrid, and where the developer's judgement is missing lies the boundary of what the practice reaches.

## The artefact and its boundary

A research artefact is bound to one project, and its scholarly standing comes from the distinctions that project's data model carries. Tools, digital editions, interactive visualisations, data workflows and project-specific schemas or ontologies are all research artefacts. A schema under revision counts as an artefact and may become infrastructure once it is stabilised and shared.

The default form is a self-contained static web tool, a set of HTML, CSS and JavaScript files with the data embedded or loaded from flat files, runnable from a local web server and on any static host. Three properties carry the default. In the documented projects agents generated such artefacts in one pass, which keeps the derivation from documents to artefact inspectable. They go online without infrastructure, which matches the resources of the researchers the practice addresses. And in the documented projects the artefacts with the fewest moving parts lasted longest, since they carry no server dependencies or build chains that decay. Repository and artefact keep data, procedure and output apart, and the data are treated as read-only.

The technical rules for this default follow from these properties.

- The artefact runs without a build step. Cloning it and opening it in a browser over a local web server suffices, since browsers block fetch and module requests from `file://` addresses, and package managers, bundlers, transpilers and CSS preprocessors are excluded.
- JavaScript stays vanilla without a framework, because in the documented projects the browser platform proved the most stable runtime for an artefact that may be regenerated from its documents.
- A single library may be vendored into the repository where a problem is algorithmically deep, provided it lies beyond a reasonable own implementation, works as one file without a build step, has a licence that permits redistribution and has a documented removal path.
- Heavy computation is precomputed upstream, and the artefact ships derived data, so that deterministic work stays in inspectable scripts.
- The artefact makes no external calls at runtime and uses no CDN, no third-party web fonts and no analytics, which makes offline use, privacy and security one property. Unavoidable embedded content loads only on click.
- Input from paste fields, URL parameters and hash fragments is validated before it reaches the page, no secret enters client code or history, and personal data of third parties stay out of delivered and example data.
- Every artefact declares that it was generated, from which documents, with which LLMs and tools and how it was checked, the way an edition discloses its editorial principles, and the repository carries citation metadata.

Where a step does not run in the browser, it becomes a generated pipeline upstream, and where a description is to be rendered from the data, it becomes a generated document. Client-side processing bounds the data volume, a bound that moves with format and memory, and static artefacts support no collaborative or server-mediated work. Where a project grows beyond the prototype, the obligations change along axes that tip independently, namely maintenance beyond the project's run time, use by third parties expecting support, multi-user operation over shared state, responsibility for data belonging to others, and institutional deployment with a commitment to availability. Where one of them tips, the standards of Research Software Engineering apply, and the knowledge base becomes the handover package with data description, user stories, acceptance criteria, design rationale and process record.

The documented interfaces sort better by the epistemic function they serve than by data format or visualisation technique. Verification interfaces check intermediate results of a pipeline before errors propagate, exploration interfaces open structured data through coordinated views, edition interfaces render scholarly editions, capture interfaces support structured input and thereby reveal what the data model can express, and audit interfaces show the path to the results beside the results. The categories combine within one project.

## Practices that hold

These practices grew out of applying Promptotyping and carried over into further projects.

- Where rules or mappings can process research data, the agent writes a procedure that can be inspected, tested and rerun, and the dividing line is whether the rules are unambiguous. Where an LLM must produce data directly, its raw output is preserved, every item counts as a proposal, and an artefact that shows unconfirmed data shows what has been confirmed and by whom.
- At verification milestones the process halts and an intermediate result is checked with deterministic tools and scholarly judgement before the work continues, so that checking happens where an error would become expensive.
- Browser interfaces show intermediate results beside their sources, so that the expert sees where the output is uncertain and has a place to intervene.
- Subagents with defined permissions enforce a division of labour, while a role simulation inside one session enforces no permission and is weaker for it.
- A user story stays a proposal until the named users confirm it, and it names the occasion at which that will be decided, because in the documented projects false stories stayed uncorrected where no team conversation took place.
- Empirical or novelty claims used outside the project, in a paper, report or case study, are recomputed from the raw data by an independent agent, searched against with the aim of refutation and used only in the form the project's checks license.
- Before a design decision the agent proposes alternatives and names what each trades for what.
- When the agent does not deliver, three moves cover most failures, a fresh session that receives only the repository, a smaller task, and writing the missing fact or rule into its document before asking again when the same mistake recurs.
- In workshops the demo repository starts with raw data, a short idea and an empty `knowledge/` folder, so that participants build the structure under guidance and understand why it looks as it does.

The practice runs in two modes, distinguished by how the work is organised. The default is one researcher with one agent. In complex projects a lead instance coordinates subagents with defined permissions and knowledge zones, and the burden shifts from steering one agent to designing a small team. The documented experience lies mostly with the first mode, and whether sustained multi-agent work holds up is open.

## Fit check

A bounded Promptotyping iteration is defensible only when each condition below can be answered with yes.

- The project has accessible structured or semi-structured research data whose provenance and relevant semantics are sufficiently understood.
- One scholarly purpose and a limited first artefact can be stated.
- Researchers can inspect the relation between sources, data, project knowledge, implementation and output.
- The project has capacity for verification, for scholarly validation and for the researchers' judgement on acceptance.
- Rights, privacy, institutional agreements, infrastructure and the terms of the LLM provider permit the intended processing, since the agent sends what it reads to an external LLM.
- The expected state can be versioned, inspected and accepted for a stated purpose.

An unknown answer is settled before implementation, and a no excludes the iteration in its current form. Public or institutional operation adds expertise in security, accessibility, maintenance, integration and operation. A positive fit check licenses a bounded trial and forecasts no comparative success, because the documented projects are not representative, the total human work is unmeasured and independent transfer has yet to be shown.

## Sources

- The dissertation in which Promptotyping originates, University of Graz, 2025, https://unipub.uni-graz.at/obvugrhs/12127700
- The first public description on the DHCraft blog, 2025, https://dhcraft.org/excellence/blog/Promptotyping
- The description on L.I.S.A., 2026, https://lisa.gerda-henkel-stiftung.de/digitale_geschichte_pollin
- The paper on the practice, Pollin 2026, Promptotyping, submitted, maintained outside this repository.
- The Promptotyping skill, https://github.com/DigitalHumanitiesCraft/promptotyping-skill
- Two videos, an introduction to the practice (https://youtu.be/8sUe4Jkh3uQ) and a continuous demonstration that turns a set of spreadsheets into a dashboard (https://youtu.be/hd_a-NBO_S4).
- The documented projects in [case-studies/](../case-studies/).
