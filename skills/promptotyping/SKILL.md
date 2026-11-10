---
name: promptotyping
description: Orients, distils, implements, curates, synthesises, prunes and hands off work in Promptotyping repositories, where a maintained knowledge folder guides agents in building research artefacts. Use when a user invokes Promptotyping, asks to create, revise, check, combine or clean up a Promptotyping knowledge base ("Wissensbasis anlegen", "knowledge-Ordner refactoren", "destillieren", "kuratieren", "synthetisieren", "zurückschneiden", "Journal verdichten", "Handoff einarbeiten"), or works in a repository whose action layer routes into a knowledge folder. Not for generic project management in unrelated repositories.
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

When the folder has no action layer and no `knowledge/` folder yet, the project starts with Preparation and Exploration. Ask for the purpose, the research question and two or three user stories in the researchers' words, and write them into `knowledge/project.md`. Copy the data into `data/` and keep the originals elsewhere. Explore with small scripts under `scripts/` that profile the data, and write `knowledge/data.md` on provenance, structure, semantics, gaps and anomalies, naming the files and rows behind each statement and marking inferences. Exploration is sufficient for the moment once the researchers recognise their material in it. Then continue with Distil.

An open handoff point is input awaiting checking, integration or rejection. Verify its source and current target before relying on it. If a source cannot be read, report it and mark the dependent result unverified.

## Distil

Purpose. Turn what Preparation, Exploration, checking and work with the researchers revealed into maintained knowledge documents from which implementation and verification can proceed. Distillation selects for a purpose. It goes beyond summarisation and keeps the distinctions, conditions and uncertainties an adequate implementation requires.

Trigger. A new project after Exploration, a changed purpose, a journal or analysis notes grown past their routing function, or an implementation finding that exposes missing knowledge.

Inputs. The source basis and its profiles, the research purpose in the researchers' words, the existing project knowledge, and the repository state.

Procedure.

1. Name the purpose the distillation serves. The same material may need a different distillation for another purpose.
2. Evaluate the function triggers of the convention and create or revise documents by function. Every repository carries `project.md`, `specification.md`, `journal.md` and `handoff.md` in `knowledge/` and an action layer in the root. Since that already makes more than three documents, the convention's trigger for `INDEX.md`, the register and reading order of the base, holds in every repository. Add `data.md` when the project processes or produces data, and move provisional user stories from `project.md` into `specification.md` as requirements with acceptance criteria.
3. Keep each document bounded by one routing question. Link related documents instead of repeating their content.
4. Mark what the data show, what the agent infers, and what remains open. Name the file and rows or elements behind every non-obvious statement.
5. Create `knowledge/handoff.md` with `status: active` and, where no open input exists, the empty state `Keine offenen Handoff-Punkte.`, a fixed string of the convention that stays the same in every language.
6. Derive or revise the action layer after the knowledge documents, so that it routes into them.

After. The working basis is a bounded set of documents, each answering one question, and the source material stays where it was.

Check. A fresh agent instance, given only the documents and access to the project resources, can state what the project is, what the data afford and where they end, and what is to be built next, without undocumented explanation. The researchers confirm that the documents describe their material and purpose as they understand them.

Distinct from. Synthesise connects pieces that are already maintained. Curate corrects statements that exist. Prune removes them.

## Implement

Purpose. Make the maintained knowledge actionable in a bounded, inspectable increment.

Procedure.

1. Select one bounded task from `knowledge/plan.md` or the specification.
2. Where agents process research data, write an inspectable procedure wherever rules or mappings suffice. Where a model must produce data directly, preserve its raw output and treat each item as unchecked until it has been checked.
3. Build the increment, run the project's checks, and compare the result with the relevant documents before building further assumptions in.
4. Show the increment to the researchers as a basis for discussing requirements.
5. Write each durable finding into the responsible document at the level where it applies, and then let the code follow. Correct an existing statement through Curate. Add a new requirement or decision with the finding as its evidence, and put it to the researchers where it changes what the artefact is for.
6. Record one concise journal entry once a substantively coherent transition has been integrated, rejected or corrected.

Report the files actually changed, the checks run, deviations and unresolved findings. A self-report is input to verification.

## Curate

Purpose. Keep the project knowledge true against the sources and the project state.

Trigger. A check, a review or work with the artefact contradicts a statement; a source or data state changed; a navigation document no longer matches the folder; an agentic review is commissioned on the knowledge base.

Inputs. The statement in question, its stated evidence, the current sources, data and code, and the finding that raised the question.

Procedure.

1. Locate the responsible document for the statement through `INDEX.md` and the naming contract.
2. Compare the statement with the source, data or code it rests on. Use deterministic checks where the comparison can be formalised. Record an agent's comparison as agentic review in the journal entry of step 5, naming the producer.
3. Correct a false statement in place, limit an overgeneralised one to what its evidence supports, and mark a statement whose source cannot be opened as unverified.
4. Search the knowledge base for documents that restate the changed statement and bring each one into step, replace it by a link, or leave it with a reason.
5. Record the correction in the journal with its evidence. Questions only the researchers can decide go to them as open points and stay unresolved in the documents until they decide.

After. Each examined statement either matches its evidence, carries its limit, or is marked unverified, and no document restates the earlier wording.

Check. Re-read every changed statement against its named evidence, and search the repository for the earlier wording.

Distinct from. Distil builds the working basis from material. Curate keeps existing statements true, and a new requirement that a finding calls for is added in Implement. Prune removes what no longer holds.

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

Trigger. A superseded requirement or decision, completed plan items, resolved open questions, a journal that has lost its provenance function through repetition or copied knowledge, documents that no routing question needs any more, generated output that a command reproduces.

Inputs. The candidate items, the current repository state, and a clean Git baseline.

Procedure.

1. Start from a clean Git baseline, meaning all current work is committed, so that every removed statement remains recoverable.
2. Give each candidate a disposition: keep, integrate into its canonical document, reject with a reason, or remove and leave only to Git.
3. Before removal, find every link, anchor and restatement that depends on the item and repoint or remove it.
4. For the journal, protect entries cited elsewhere, decisions by the researchers, corrections, rejected alternatives with their reasons and commit hashes. Use no fixed threshold, keep no archive document, and write one compaction entry that names the commit from which the compaction started.
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
