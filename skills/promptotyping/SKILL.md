---
name: promptotyping
description: "Guides an agent in Promptotyping, a working practice for translating research data and their contexts into research artefacts such as tools, visualisations, editions and data workflows, built from a curated project knowledge base. Use when a user invokes Promptotyping, works in a repository whose knowledge or docs folder guides the agent, or asks to orient in a project, explore research data, distil findings into knowledge documents, curate, ground or review those documents, or hand a session off."
argument-hint: "[orient|explore|distill|curate|handoff]"
license: CC-BY-4.0
compatibility: "Designed for Claude Code. Compatible with any agent that supports the Agent Skills standard (agentskills.io). Needs Git, and network access only for grounding."
metadata:
  author: DigitalHumanitiesCraft
  version: "2.0.0"
  short-description: Work from maintained project knowledge
---

# Promptotyping

Promptotyping is a working practice for translating research data and their contexts, with frontier Large Language Model (LLM) agents, into research artefacts that fit the researchers' purposes and ways of working. Agents build prototypes from modelled data and a curated project knowledge base, and what checking and use of a prototype reveal is curated back into that knowledge base. What decides whether an artefact fits lies in the sources and the research purpose as the researchers understand them, so the knowledge documents can themselves be wrong about the material. The artefact may be replaced once what working with it revealed has been curated back.

## Terms

The work takes four forms, which recur in no fixed sequence.

- Preparation assembles the material and the research context.
- Exploration establishes what the data can and cannot support.
- Distillation writes that understanding into the knowledge documents.
- Implementation builds the artefact from them in bounded tasks.

A Promptotype is what an iteration yields, a prototype that can be used and inspected, together with the project knowledge base and the research data from which it was built, so that each state can be versioned as a whole.

The project knowledge base is the set of knowledge documents together with the agent instructions in the repository root. The documents are of three types, which distinguish functions and prescribe no file structure.

- Declarative knowledge documents state what holds, for instance the project's purpose and scope (`project.md`), the structure, meaning, provenance, gaps and uncertainties of the data (`data.md`), and what the artefact is to do (`specification.md`).
- Process knowledge documents state what is open and how the understanding developed and why, in `journal.md`.
- Agent instruction documents state how agents are to work, with procedures, constraints, the checks to be run and pointers to the relevant knowledge, in `CLAUDE.md` or `AGENTS.md`.

The knowledge folder holds the knowledge documents. A new project uses `knowledge/`, and a project that already has a folder for them keeps it. The file names in this skill are the defaults of a new project and stand for the existing document with that function. A project adds a document when it has the function for it, such as `design.md` for an artefact with an interface. Templates and the document convention are published at https://dhcraft.org/Promptotyping/.

The researchers know the sources and the field and judge whether an artefact fits. "The user" is whoever directs the agent, and that person passes on to the researchers what only they can decide.

## Subcommands

When the skill is invoked with a subcommand, or the user names one during the work, read the matching reference file and follow it. Text after the subcommand narrows it to a document or a topic.

| Subcommand | Call it when | Reference |
|---|---|---|
| `orient` | a session begins or the task changes | [references/orient.md](references/orient.md) |
| `explore` | there is new material or a new question to the data | [references/explore.md](references/explore.md) |
| `distill` | findings are to become the basis for building | [references/distill.md](references/distill.md) |
| `curate` | the knowledge documents are to be checked, corrected or grounded | [references/curate.md](references/curate.md) |
| `handoff` | a session ends or work passes to someone else | [references/handoff.md](references/handoff.md) |

A session runs `orient`, then the work, then `handoff`. `orient` changes nothing and may be run unasked. `explore`, `distill` and `curate` write files and commit their result, and `handoff` commits the session, so these four run when the user asks for them or agrees. No subcommand pushes.

Preparation and Implementation have no subcommand. Preparation is the researchers' work, in which the agent helps as [references/explore.md](references/explore.md) describes. Implementation is the agent's ordinary work between `orient` and `handoff` and follows the rules for building. Text that names no subcommand is a general request under those rules.

Where a finding belongs follows from its reach. A single statement or requirement is corrected under rule 3 of building or through `curate`. A changed purpose or a document that is missing calls for `distill`. An account of the data that is in question as a whole calls for `explore`.

Read [references/version-1.md](references/version-1.md) when the project keeps its documents under `docs/` or `promptotyping-docs/`, when its journal has no section `## Open`, when the knowledge folder holds a `handoff.md`, or when the user calls `check`, `verify`, `compact` or `distil`.

## Rules for building

These rules apply whenever the agent builds, whether or not a subcommand was called.

1. Build in bounded tasks, each small enough that its result can be run and inspected. State which documents the task draws on and which assumptions it makes.
2. Compare each result with the knowledge base, show it to the researchers and stop for their inspection, since many requirements only become clear in front of a running artefact. For a web artefact, start a local server and give the address.
3. When a result reveals missing or wrong knowledge, write the finding into the responsible knowledge document first and let the code follow. Decide first where the fault arose, in knowledge about the data, in a requirement, in a design decision or in the agent instructions.
4. Where rules or mappings suffice to process research data, write a procedure that can be inspected, tested and rerun. Where an LLM must produce data directly, preserve its raw output, so that every correction can be measured against it, and treat each item as a proposal. An artefact that shows unconfirmed data shows which statements have been confirmed and by whom.
5. Select the context for each task. Load the documents the task needs and leave the others out, and work on large data through code, so that only a profile and selected examples enter the context.
6. Before a decision on design, propose alternatives and name what each trades for what.
7. Never change the source material in `data/`. Data the project produces lie in a folder of their own and are versioned with the knowledge base and the artefact. Commit at stable states.

## Checking

Three kinds of checking stay apart, because they differ in what a judgement rests on.

- Verification establishes whether a result conforms to a standard the project has accepted, at its strongest through an executable check, code that decides whether a result meets a stated condition. An executable check is itself checked for whether it runs against the code the artefact actually uses, covers all of the real data and can fail. A test fixture confirms nothing about the data.
- Agentic review is the examination of code, data or knowledge documents by an agent, often with a fresh context. Its findings are evidence.
- Scholarly validation is the judgement of people with knowledge of the sources and the field on whether a result is warranted by the sources and adequate to the research purpose.

A result has one of three statuses, proposal, doubted and confirmed.

- A proposal is what an agent or an LLM produces.
- A proposal is doubted when anyone taking part in the work, an agent included, has marked it as doubtful.
- A proposal is confirmed only by a person whose expertise reaches as far as the decision requires or by a validated deterministic rule. Such a rule is an executable check that runs on all of the real data, has been shown on cases with known answers to fail when it should, and has been adopted by the researchers for a defined kind of decision.

Who or what set a status is recorded in the form the project uses for it, and otherwise in a short note after the statement, such as "(proposal, agent, 2026-11-14)" or "(confirmed by the editor, 2026-11-20)".

Three questions are put to each Promptotype, and they build on one another.

1. Does it do what it claims?
2. Is it warranted by the sources?
3. Is it adequate to the purpose?

An agent can run executable checks and review code for the first question, raise doubts for the second, and point to gaps for the third. A Promptotype is accepted for a purpose when the researchers who work with it judge it good enough for that purpose. The agent reports what it built and checked and lists what needs the researchers' decision. Confirmation, scholarly validation and acceptance are recorded only as the judgement of the person who gave it, and an agent's account of its own work needs independent confirmation.

## The journal

`journal.md` in the knowledge folder is the working diary of the project. Whichever subcommand first needs it creates it in this form.

```
# Journal

## Open

- Map view does not show the letters dated only to a year. Decide with the
  researchers whether they appear without a day.
- Date parser rewritten, tests pass, result not yet compared with data.md.

## 2026-11-14 | Uncertain dates in the timeline

- Trigger: letters that carry only a year (data.md, section Dating).
- Found: the parser dropped them without a message.
- Decided: keep them, place them at the start of the year, mark them as uncertain.
- Rejected: leaving them out of the timeline, since the gaps are what the researchers ask about.
- Changed: scripts/parse_dates.py, specification.md.
- Evidence: tests/test_dates.py fails on the old parser and passes on the new one.
```

`## Open` stands at the beginning and holds what the next session needs to continue, meaning unfinished work, results not yet checked, questions that wait for the researchers, and work handed to a named recipient. Each handoff rewrites it as the complete current list. A settled point leaves the section, and an entry below records how it was settled. When nothing is open, the section says "Nothing open."

The entries follow, newest first, one per coherent step of the work, with the fields that have content among Trigger, Found, Decided, Rejected, Corrected, Changed and Evidence, and with at least one piece of evidence. Where a journal already groups its entries under a heading of its own, keep that form. A judgement of the researchers on a Promptotype is an entry of its own, in their words, with its purpose and its known limits. An entry is history and is rewritten only by condensing. Accepted work that has not begun belongs in the specification or in a `plan.md`, where the project keeps one.

## Boundaries

- The user's task, the repository's own agent instructions and its permissions take precedence over this skill.
- Source material and research data stay accessible for inspection. Rights are clarified before material enters a model or a public repository, and the agent asks when they are unclear.
- The agent deletes a document, publishes or pushes only when the user has authorised that action.
- If a source the work depends on cannot be read, the agent says so and reports the dependent result as unchecked.
