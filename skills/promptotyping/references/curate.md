# curate

Maintains the knowledge documents that exist. It checks their statements against a measure and brings them back into line with it. It corrects what is wrong, updates what has changed, makes vague statements concrete, and removes what no longer holds, the last only with the researchers' approval.

`curate` is the explicit call for knowledge curation, the revision of the project knowledge in light of what the sources, checking and work with the artefacts reveal. The same curation also happens under rule 3 of building.

Call it when a check, a review or work with the artefact contradicts a statement, when the data or the code have changed, when documents have drifted from the state of the project or from each other, when facts from outside the project have to be supported, or when the documents are to be questioned as a whole. Without further text, it covers the documents that the changes since the last handoff touch, and in a small knowledge base all of them.

`curate` leaves the set of documents as it is. Splitting, merging or renaming documents is not part of it.

## Three kinds

The kinds differ in the measure the documents are held against. Choose the kind the situation calls for, say which you chose, and combine them where the task needs it. A user may also name one, as in `curate ground` or `curate review`.

### Against the project

Compare the documents with the data, the code and the state of the work. This is the default and needs no network. Choose it after building, after a change to the data, and when documents contradict each other.

### Grounding

Compare statements with knowledge outside the project, such as the web, the literature or the researchers' own collection of notes. Choose it for URLs, DOIs and bibliographic data, software versions, standards, institutional facts and dates, and above all where an agent wrote those statements.

Each statement ends in one of three ways.

- supported, with its source beside it
- corrected, with the source that contradicts it
- unsupported, with a note on whether no source was found or none could be reached

These are findings of an agent, and the statement stays a proposal. Where a web request decides the question, such as a link that resolves or a DOI that is registered, the request decides it. Whether a cited work supports the claim it is cited for remains scholarly validation. Without access to outside sources, list the statements that need grounding and mark them as unsupported.

### Review

An agent with a fresh context reads the knowledge documents and the artefact critically and reports doubts. It changes nothing. Choose it before a Promptotype goes to the researchers for their judgement, after a larger step of building, and in a deep handoff.

A fresh context is a subagent or a new session that receives the declarative documents, the artefact and the criteria below, and reads the journal only afterwards, so that it does not start from the judgement of the agent that built them. Where the environment offers no subagent, write the review request under `## Open`, tell the user to run `curate review` in a new session, and continue with the other kinds. A review by the agent that built the work is reported as a self-review and does not count as this kind.

The reviewer puts the three questions to the Promptotype and examines

- completeness, meaning open sections, placeholders and promised content
- consistency between documents, and between documents and code
- statements that rest on unchecked model output
- gaps in the data that no document addresses
- executable checks that do not run against the code the artefact uses, do not cover all of the real data, or cannot fail
- questions the project has not yet asked of its sources or its purpose, and alternatives it has not weighed

It reports each finding with the affected document or file, the evidence and a proposed correction, ordered as blocking, to correct or optional, and lists separately what only the researchers can decide. It reports the questions not yet asked even when it finds nothing else. A review without findings means only that this reviewer found none.

## Procedure

1. Locate the responsible document for each statement in question.
2. Compare the statement with its measure, by the kind chosen. Use an executable check where the comparison can be formalised.
3. Correct in place what the state of the project decides, such as a file name, a count, the behaviour of the code or a link that no longer resolves. Limit an overstated statement to what its evidence supports.
4. Leave a statement about the material that needs interpretation, and any statement a person has confirmed, as it stands. Mark it as doubted with the evidence and put the point under `## Open` for the researchers.
5. Where a requirement was missing, add it to the specification as a proposal with its acceptance criterion.
6. Find every document that restates a changed statement and bring it into step, or replace the restatement by a link.
7. Remove nothing until the researchers have approved it. List the candidates with a reason each under `## Open`, so that waiting for approval holds up nothing else. Remove a whole document only with their explicit authorisation.
8. Record in the journal what was found, corrected and marked, with the evidence, the kind of curation and the producer of each finding, and commit.

## Result

Each examined statement matches its measure, carries its limit, or is marked as doubted or unsupported. The report shows the changed passages and ends by naming the kinds of curation that were not carried out, for instance "not grounded against outside sources".

## Distinct from

`distill` builds the basis for a purpose or rebuilds it for another. `curate` keeps what exists true. `explore` is called when the account of the data as a whole is in question. Fixing the code follows the rules for building.
