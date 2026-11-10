---
name: promptotyping
description: Orients, distils, implements, curates, synthesises, prunes and hands off work in Promptotyping repositories, where a maintained knowledge folder guides agents in building research artefacts. Use when a user invokes Promptotyping, asks to create, revise, check, combine or clean up a Promptotyping knowledge base ("Wissensbasis anlegen", "knowledge-Ordner refactoren", "destillieren", "kuratieren", "synthetisieren", "zurückschneiden", "Journal verdichten", "Handoff einarbeiten"), or works in a repository whose action layer routes into a knowledge folder. Not for generic project management in unrelated repositories.
license: CC-BY-4.0
metadata:
  short-description: Work from maintained project knowledge
---

# Promptotyping

Promptotyping is a working practice for translating research data and their contexts into research artefacts that fit the researchers' questions and ways of working. Its work recurs through four forms, Preparation, Exploration, Distillation and Implementation, and a curated project knowledge base gives researchers and agents a shared context throughout. Each iteration yields a promptotype, the state of an artefact together with the project knowledge and the research data from which it was built. A promptotype is accepted for a purpose when the researchers who will work with it judge that it fits their questions and ways of working. Until then it remains a state of work in progress, whatever checks it has passed. This skill reports the promptotype an iteration produced and never declares it accepted.

The knowledge base is the `knowledge/` folder together with the action layer in the repository root, usually `CLAUDE.md` or `AGENTS.md`. Its documents are of three types. Declarative knowledge documents state what holds, such as `project.md`, `data.md` and `specification.md`. Process knowledge documents state how the understanding developed and what is open, namely `journal.md`, `handoff.md` and `plan.md`. Agent instruction documents state how agents are to work, above all the action layer. Structure, naming and frontmatter follow the public Knowledge Document convention, readable without JavaScript at https://dhcraft.org/Promptotyping/_content/konvention.md, and its templates at `https://dhcraft.org/Promptotyping/_content/promptotyping-document/{slug}.md`, for instance `data`, `specification`, `journal` or `handoff`. The convention names a function trigger for every document type, the condition under which a project needs that document, and a naming contract, under which the file name states the question a document answers.

## Authority and boundaries

- The user's task scope, the repository's action layer and any `knowledge/governance.md` take precedence over this skill.
- Project documents are the authority for local facts and decisions. The convention governs structure and routing.
- Source material and research data stay accessible for inspection. Only task-relevant selections enter a model context.
- Three kinds of checking stay apart. Verification establishes conformity to formalised requirements through schemas, tests and reproducible measurements, and reaches only as far as a check encodes. Agentic review is an examination by an agent, often with a fresh context, against named criteria, and its findings remain probabilistic evidence. Scholarly validation establishes whether representations and requirements are warranted by the sources and adequate to the research purpose, and it remains with the researchers.
- An agent's result stays a proposal, with its producer recorded, until a person or a validated deterministic rule confirms it. Agents never record approval, scholarly validation or acceptance on their own.
- Do not delete documents, publish, or widen permissions unless the user has authorised that action. Commit according to the repository's own instructions, and where they bar the agent from committing, ask the user to commit before an operation that needs a clean Git baseline.

## Choosing the operation

Every operation starts with Orient. The table names what each one changes.

| Operation | Use it when | What changes |
|---|---|---|
| Orient | a session enters the repository or switches task | nothing; the agent knows the current state |
| Distil | material or experience must become maintained knowledge for a purpose | a smaller, maintained set of statements replaces scattered material as the working basis |
| Implement | a bounded task is ready to build from the knowledge base | the artefact gains an inspected increment |
| Curate | knowledge must be kept true against the sources and the project state | false or outdated statements are corrected in place |
| Synthesise | several maintained pieces must be connected into something none of them states | one new statement or document exists, traced to its parts |
| Prune | statements, documents or entries no longer hold or serve anyone | they are removed, and nothing still depends on them |
| Hand off | an input from another session, review or partner arrives, or someone else takes over | the inbox holds only open points, and processed ones are integrated or rejected |

Distil, Curate, Synthesise and Prune are operations of knowledge curation, the examination and revision of the project knowledge in light of what the sources, checking and work with the artefacts reveal. Distil is also the form of work Distillation. Curation runs through all four forms of work, so these operations are invoked from Preparation, Exploration and Implementation as well. Synthesise and Prune are names this skill gives to two recurring operations of curation.

## Orient

1. Read the action layer in the repository root.
2. Read `knowledge/INDEX.md` where it exists, then `knowledge/handoff.md`.
3. Read the documents relevant to the task. Read `knowledge/governance.md` when authority, evidence status, rights, publication or escalation affects the work.
4. Read `knowledge/journal.md` only when provenance or the ground of a decision is needed.
5. Inspect the actual repository state, run `git status`, and verify that cited sources and targets exist.
6. When the user asks for an account, state in a few sentences what the project is, what the data afford and where they end, and what is to be built next, and build nothing. Whatever the account misses exists only outside the documents and belongs in the document that should carry it.

When the folder has no action layer and no `knowledge/` folder yet, the project starts with Prepare and explore.

An open handoff point is input awaiting checking, integration or rejection. Verify its source and current target before relying on it. If a source cannot be read, report it and mark the dependent result unverified.

## Prepare and explore

A new project begins with the forms of work Preparation and Exploration, before there is anything to distil.

Preparation makes the material and the purpose explicit.

1. Initialise a Git repository, create the folders `data/`, `knowledge/` and `scripts/`, and add a `.gitignore` for operating-system and editor files.
2. Ask for the purpose, the research question and two or three user stories in the researchers' words. Write them into `knowledge/project.md` as a minimal charter, keep the wording, mark the user stories as provisional, and follow the project template only as far as the answers fill it.
3. A working copy of the research data goes into `data/`, and the originals stay elsewhere. Never change files in `data/`.
4. Commit `knowledge/` and the `.gitignore`, and ask before committing anything in `data/`.

Exploration establishes what the data can and cannot support.

1. Read `knowledge/project.md` first, so that the examination follows the purpose and the user stories. Examine the files in `data/` with small, documented scripts under `scripts/` rather than reading them whole.
2. Let the scripts write the volatile figures, such as counts, value ranges, cardinalities and distributions, to `generated/data-profile.md`.
3. Write `knowledge/data.md` on provenance, structure, meaning, relations, gaps and anomalies. It points to the profile instead of repeating its numbers, names the file and the rows or elements behind every non-obvious statement, and marks every interpretation as an inference.
4. Name the three statements in `data.md` you are least sure of, so that the researchers can check them against the data, and commit the scripts and documents.

Exploration is sufficient for the moment once the researchers recognise their material in it. Then continue with Distil.

## Distil

Purpose. Turn what Preparation, Exploration, checking and work with the researchers revealed into maintained knowledge documents from which implementation and verification can proceed. Distillation selects for a purpose. It goes beyond summarisation and keeps the distinctions, conditions and uncertainties an adequate implementation requires.

Trigger. A new project after Exploration, a changed purpose, a journal or analysis notes grown past their routing function, or an implementation finding that exposes missing knowledge.

Inputs. The source basis and its profiles, the research purpose in the researchers' words, the existing project knowledge, and the repository state.

Procedure.

1. Name the purpose the distillation serves. The same material may need a different distillation for another purpose.
2. Evaluate the function triggers of the convention and create or revise documents by function. Every repository carries `project.md`, `specification.md`, `journal.md` and `handoff.md` in `knowledge/` and an action layer in the root. Since that already makes more than three documents, the convention's trigger for `INDEX.md`, the register and reading order of the base, holds in every repository. Add `data.md` when the project processes or produces data, and move provisional user stories from `project.md` into `specification.md` as requirements, each with an acceptance criterion the researchers can decide in front of the artefact. Add `design.md` when the artefact has an interface, including how gaps and uncertainty in the data stay visible, and a document for the checks and their evidence under the name the convention's function triggers give. Follow the templates and leave out the sections the material does not fill.
3. Keep each document bounded by one routing question. Link related documents instead of repeating their content.
4. Mark what the data show, what the agent infers, and what remains open. Name the file and rows or elements behind every non-obvious statement.
5. Create `knowledge/handoff.md` with `status: active` and, where no open input exists, the empty state `Keine offenen Handoff-Punkte.`, a fixed string of the convention that stays the same in every language. Create `knowledge/journal.md` with one entry for this transition.
6. Derive or revise the action layer after the knowledge documents, so that it routes into them, and name it for the agent in use, for instance `CLAUDE.md` for Claude Code and `AGENTS.md` for Codex and other agents that read that file. It tells every session to read `knowledge/INDEX.md` and `knowledge/handoff.md` first and fixes the technical baseline the user names, for instance a static web page in HTML, CSS and plain JavaScript without a build step that loads its data from files.
7. Commit the result.

After. The working basis is a bounded set of documents, each answering one question, and the source material stays where it was.

Check. A fresh agent instance, given only the documents and access to the project resources, can state what the project is, what the data afford and where they end, and what is to be built next, without undocumented explanation. The researchers confirm that the documents describe their material and purpose as they understand them.

Distinct from. Synthesise connects pieces that are already maintained. Curate corrects statements that exist. Prune removes them.

## Implement

Purpose. Make the maintained knowledge actionable in a bounded, inspectable increment.

Procedure.

1. Select one bounded task from `knowledge/plan.md` or the specification, such as one milestone that serves one user story.
2. Where agents process research data, write an inspectable procedure wherever rules or mappings suffice. Where a model must produce data directly, preserve its raw output and treat each item as unchecked until it has been checked.
3. Build the increment, run the project's checks, and compare the result with the relevant documents before building further assumptions in.
4. Show the increment to the researchers as a basis for discussing requirements, and stop for their inspection before the next increment. For a web artefact, start a local web server and give the exact address to open.
5. Run only the checks a rule can decide, among them that the artefact loads without errors, every acceptance criterion a rule can decide, and agreement between the figures the artefact shows and the results of the profiling scripts. List every remaining criterion under "Human decision required", write procedures, evidence and results into the document that records the checks, and record no approval or acceptance.
6. Write each durable finding into the responsible document at the level where it applies, and then let the code follow. Correct an existing statement or add a missing requirement through Curate, and put a change to what the artefact is for to the researchers. Once the documents are corrected, change only what they now require.
7. When the researchers give their judgement on a promptotype, record it verbatim with its purpose, criteria and known limits in the document that records the checks, add a journal entry that names the judgement, the accepted result and the evidence, and commit the documents and the artefact together.
8. Record one concise journal entry once a substantively coherent transition has been integrated, rejected or corrected.

Report the files actually changed, the checks run, deviations and unresolved findings. A self-report is input to verification.

## Curate

Purpose. Keep the project knowledge true against the sources and the project state.

Trigger. A check, a review or work with the artefact contradicts a statement; a source or data state changed; a navigation document no longer matches the folder; an agentic review is commissioned on the knowledge base; external references such as URLs, DOIs, versions or dates have to be confirmed.

Inputs. The statement in question, its stated evidence, the current sources, data and code, and the finding that raised the question.

Procedure.

1. When a fault in the artefact raised the question, leave the code unchanged for now and decide whether it arose from missing or wrong knowledge about the data, a missing requirement, a design decision or the agent instructions.
2. Locate the responsible document through `INDEX.md` and the naming contract.
3. Compare the statement with the source, data or code it rests on. Use deterministic checks where the comparison can be formalised. Record an agent's comparison as agentic review in the journal entry of step 6, naming the producer.
4. Correct a false statement in place, limit an overgeneralised one to what its evidence supports, and mark a statement whose source cannot be opened as unverified. Where a requirement was missing, add it to `specification.md` with a testable acceptance criterion.
5. Search the knowledge base for documents that restate the changed statement and bring each one into step, replace it by a link, or leave it with a reason.
6. Record the finding, the failed check and the correction with their evidence in the journal, and in the document that records the checks where one exists. Questions only the researchers can decide go to them as open points and stay unresolved in the documents until they decide.
7. Show the user the changed passages before the artefact is rebuilt.

An agentic review of the whole knowledge base examines the documents it names for completeness (open sections, placeholders, promised content), consistency between documents, statements that rest on unchecked model output, gaps in the data that no document addresses, and questions the project has not yet asked of its sources or its purpose. Report each finding with the affected document, the evidence and a proposed correction, ordered as blocking, to correct or optional. The findings remain proposals until a person or a deterministic check confirms them, and confirmed findings are corrected through steps 2 to 6. Report the questions not yet asked even when nothing else is found, since they go to the researchers as open points.

External references are statements too. For URLs, DOIs and bibliographic data, software versions, standards, institutional facts and dates, decide with a deterministic request where one settles the question, such as a resolving link or a registered DOI, which is verification, and record any other comparison as agentic review. Each reference ends as confirmed with its source, unverified because no source could be reached, or corrected in place with the source that contradicts it. Whether a cited work supports the claim it is cited for remains scholarly validation. Without network access, list the references that need checking and leave them marked unverified.

After. Each examined statement either matches its evidence, carries its limit, or is marked unverified, and no document restates the earlier wording.

Check. Re-read every changed statement against its named evidence, and search the repository for the earlier wording.

Distinct from. Distil builds the working basis from material. Curate keeps existing statements true and adds a requirement only where a finding shows that one was missing. Prune removes what no longer holds.

## Synthesise

Purpose. Connect several maintained pieces into a statement, overview or document that none of them contains alone, such as a design decision drawn from data limits and a user story, a cross-case finding, or a report for an external reader.

Trigger. A question the knowledge base answers only in parts; a decision that depends on several documents; a reader who needs a combined account.

Inputs. The named question, and the maintained documents and sources that bear on it.

Procedure.

1. State the question the synthesis answers and who needs the answer.
2. Collect the pieces and read each in full. Keep the source of every piece.
3. Write the connection as an explicit inference and name the pieces it rests on. A connection the pieces do not support stays out.
4. Place the result in the document whose routing question it answers, or in a dated report under `snapshots/` when it addresses an external reader at a date.
5. Present a synthesis that changes a requirement, a model of the data or a scholarly claim to the researchers as a proposal.

After. One new statement or document exists, traced to its parts, and the parts are unchanged.

Check. For each claim in the synthesis, the pieces it names support it when read on their own. An agentic review with a fresh context can check this against the cited pieces.

Distinct from. Distil reduces material to knowledge for a purpose. Synthesise works on knowledge that is already maintained and adds a connection. Curate corrects without adding.

## Prune

Purpose. Remove what no longer holds or what nobody needs, because removal does not happen on its own and an outdated statement misleads more than a missing one.

Trigger. A first distillation that carries more than a first version needs, meaning contradictions between documents, requirements that no user story supports and design ideas nobody asked for; a superseded requirement or decision, completed plan items, resolved open questions, a journal that has lost its provenance function through repetition or copied knowledge, documents that no routing question needs any more, generated output that a command reproduces.

Inputs. The candidate items, the current repository state, and a clean Git baseline.

Procedure.

1. Start from a clean Git baseline, meaning all current work is committed, so that every removed statement remains recoverable.
2. Give each candidate a disposition: keep, integrate into its canonical document, reject with a reason, or remove and leave only to Git. Whatever no user story carries is a candidate for removal, however reasonable it looks. Propose the dispositions, change no file until the user has approved them, apply only the approved ones, and record the reduction with its reasons in the journal.
3. Before removal, find every link, anchor and restatement that depends on the item and repoint or remove it.
4. For the journal, protect entries cited elsewhere, decisions by the researchers, corrections, rejected alternatives with their reasons and commit hashes. Fold related entries into one entry per milestone that keeps its date range. Copy commit hashes verbatim, and never write a hash that no entry or `git log` shows. Use no fixed threshold, keep no archive document, and write one compaction entry that names the commit from which the compaction started.
5. Delete a whole document only with the user's authorisation, and name in the commit where its content now stands.

After. The knowledge base is smaller, nothing links to a removed item, and each removal is traceable in Git.

Check. Search for references to each removed item. Re-read the documents a fresh agent reads first and confirm that they still route correctly.

Distinct from. Curate corrects a statement that still serves. Prune removes one that no longer does. Distil may make material obsolete, and Prune then removes it.

## Hand off

`knowledge/handoff.md` is the live Process Inbox. It holds only received inputs that are still open, such as a finding from another session, a review or a project partner, each waiting to be integrated or rejected. Future work the project has accepted belongs in `plan.md`. Each point carries `Received`, `Source`, `Target` and `Context`, and carries `Evidence`, `Next action`, `Blocker` or `Operator point` only where the field has content. An operator point names a decision only the researchers or the project lead can take.

Process a point in this order.

1. Verify the source and the current target. If either is missing, stop, keep the point, and report the gap.
2. Integrate durable content into the responsible declarative knowledge document or agent instruction document, or record a reasoned rejection, for instance because the target already carries the content.
3. Add a concise journal entry at the top with the fields that have content (Trigger, Found, Decided, Corrected, Changed, Evidence) and at least one piece of evidence.
4. Remove the point completely. Restore the empty state when the inbox becomes empty.

Accepted future work belongs in `plan.md`, durable cross-project contracts in an integration document. Before another session or person takes over, bring the inbox and the journal up to date and commit.

## Verification

Inspect the real repository state rather than the documents' claims about it, and run the checks the project defines. State the end state, what was verified and how, what remains uncertain, and which decision needs the researchers. Distinguish a promptotype still in progress from one the researchers have accepted for its purpose.

The cases in [evals/cases.json](evals/cases.json) provide saved inputs and expected outputs for handoff, curation and pruning. Run them as isolated agent tasks in a scratch repository and inspect the resulting files. The fixtures alone prove no passed run.
