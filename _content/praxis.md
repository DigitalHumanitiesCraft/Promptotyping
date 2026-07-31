---
title: Practice and best practices
slug: praxis
source: Projects/Promptotyping/Promptotyping MOC.md (method extensions)
status: complete
language: en
version: "0.2"
updated: 2026-07-26
mirrored: 2026-06-10
machine-url: https://dhcraft.org/Promptotyping/_content/praxis.md
---

# Practice and best practices

This section collects method extensions of Promptotyping that grew out of practice. None was designed at a desk; each arose in a concrete project and carried over into further ones. Every entry names its documented case of origin. Where that case is represented in the curated gallery of this site, the reference leads to its page; where it is not, the project name stands in the running text without a link.

## Verification Milestones

Verification Milestones are defined checkpoints in the workflow at which domain expertise is applied systematically. They operationalise the Critical Expert in the Loop as a process step rather than a role. At a milestone the process halts, an intermediate result is checked with deterministic tools and with scholarly judgement, and only then does it continue.

The effect is that checking is enforced at the points where an error would become expensive, instead of being left to chance. The pattern arose in the ZBZ OCR/TEI pipeline ([#case-zbz-ocr-tei](#case-zbz-ocr-tei)), where every pipeline stage carries such a checkpoint.

## Promptotyping Interfaces

Promptotyping Interfaces are browser-based validation tools that make intermediate results visible, comparable and correctable. They make the epistemic quality of an output transparent by showing it as inspectable material beside its source instead of presenting it as a finished result.

The interface here is an instrument of validation rather than the end product. It shows where the model is confident and where it is not, and it gives the expert the place at which to intervene. The pattern was developed in the ZBZ OCR/TEI pipeline ([#case-zbz-ocr-tei](#case-zbz-ocr-tei)).

## Subagents and role simulation

Subagent definitions with differentiated permissions separate roles from one another, a read-only analysis agent, an implementation agent with full write access, a synthesis agent. A division of labour with distinct rights and viewpoints thereby arises inside a single project.

Real subagents are loaded only if the definitions exist before the session starts. Where they are missing, a role simulation runs inside a single session instead, in which one agent takes the roles in turn. The distinction matters methodologically, because the real separation enforces permissions while the simulation does not. The pattern was tried out in the wiiw FIGARO project.

## Script versus LLM separation

Algorithmically unambiguous tasks belong in Python scripts, semantically interpreting tasks belong to the LLM. Renaming tags, computing statistics and merging documents are unambiguous and deterministically solvable, while merging concepts or deriving rules from examples demands interpretation.

The dividing line runs along unambiguousness rather than along complexity. A complex but unambiguous task belongs in the script, and a simple but interpreting task belongs to the model. The pattern was worked out in the vault curation project.

## Knowledge Curation

Knowledge Curation is the systematic maintenance of the networked knowledge model on two layers, the personal vault as a second brain and the project-specific knowledge vaults in the repositories. Three types of operation interlock, script-based ones (deterministic restructuring), semantic ones (consolidation and rule extraction by the model) and structural ones (rearrangement of the knowledge graph).

Links act as navigable context paths for agentic systems, since an agent follows a link to load the context it needs for the next operation. As a cross-cutting practice over the components of the epistemic infrastructure, Knowledge Curation is what lets Promptotyping accumulate across sessions instead of starting over at each restart. The pattern arose in the vault curation project and in the Klawiter Bibliography Rescue ([#case-klawiter-rescue](#case-klawiter-rescue)).

## Demo repository reduction in teaching

For Promptotyping workshops in which participants rebuild the method themselves on a real project, the demo repository is deliberately left unconfigured. It starts in its initial state with raw data, a brief `idea.md` and an empty `knowledge/` folder, without a `CLAUDE.md`, without custom commands, without an output structure. The initial prompts sit on the slides as a consumable handover into the harness, and the persistent knowledge documents arise in the repository over the course of the work.

The learning gain comes from building the Promptotyping architecture under guidance rather than from reading a finished one. Whoever produces the structure understands why it looks as it does. The pattern was tried out in the workshop on the prosopographic database of medieval Viennese legal transactions and in the teaching part of the ZBZ OCR/TEI pipeline ([#case-zbz-ocr-tei](#case-zbz-ocr-tei)).

## Claims verification as a document function

The adversarial checking of a project's own empirical and novelty claims becomes a function of the knowledge base itself, so that knowledge documents check the project's external representations. Three components carry it. The first is the recomputation of all headline figures from the raw data by an independent agent, with a mandatory source path per figure. The second is a web search against the project's own novelty claim, whose declared aim is refutation. The third is a conformance audit against the standards the project claims to meet.

The binding rule is that externally used claims in paper, companion or report may be used only in the form the verification documents license. In the case of origin, a reported divergence in a headline figure turned out to be half an artefact of how the task had been posed, visible only because the infrastructure had logged its own grounds for exclusion; the infrastructure corrected its own finding. The pattern arose in FemPrompt SozArb ([#case-femprompt-sozarb](#case-femprompt-sozarb)).

## The epistemic status of user stories

Every user story is a hypothesis about the user for as long as the named user has not confirmed it. In the agentic context the implementing conversation is absent, the conversation that would correct false stories in a classical team. Unvalidated stories therefore have to be marked as assumptions and carry an observation point that records through which event the assumption resolves.

The review criteria for a `user-stories.md` are listed with the template ([Vorlage User Stories](#promptotyping-document-user-stories)). They come from the QUS framework (Lucassen et al. 2016), which separates the criteria a tool can decide from those that require understanding of the content, and the list adds what the agentic setting demands. The epistemic status itself takes no support from that framework, since each of its criteria judges the intrinsic quality of the story text and none asks whether the named user has confirmed the story. It comes from the case of origin, in which proxy stories with a false model of use led several versions to build on a false assumption. The pattern arose in FemPrompt SozArb ([#case-femprompt-sozarb](#case-femprompt-sozarb)).

## Templates for Knowledge Documents

Fillable templates for the Markdown documents in the `knowledge/` folder of a Promptotyping repository are conceived by function. Each template addresses a function (identity, material, substance, construction, form, genesis, navigation, agent socialisation) rather than a fixed file name. Which templates a concrete repository uses depends on the project, and the convention describes the trigger criteria per function descriptively, so that a coding agent can decide for itself which documents it creates.

The first set of templates was abstracted from the HerData refactor ([#case-herdata](#case-herdata)); the action-layer template came out of a sweep across many repositories, and the catalogue has grown since with each function that recurred in comparable form in at least two repositories. The templates themselves are available as addressable Knowledge Document sections of this site, and the descriptive rule as the [Convention Knowledge Documents](#konvention-v0.1).
