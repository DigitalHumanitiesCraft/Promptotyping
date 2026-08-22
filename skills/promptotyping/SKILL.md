---
name: promptotyping
description: Orient, distil, continue, hand off, and compact work in Promptotyping repositories whose maintained project knowledge guides agentic implementation. Use when a user invokes Promptotyping, asks to create or refactor a Promptotyping knowledge base, or works in a repository with a Promptotyping action layer and knowledge folder. Do not use as generic project management for unrelated repositories.
metadata:
  short-description: Work from maintained project knowledge
---

# Promptotyping

Use maintained project knowledge to develop an inspectable research artefact through Preparation, Exploration, Distillation, and Implementation. Treat these as recurrent forms of work. Findings from Implementation may return the work to any earlier form, most often to Distillation.

## Authority and scope

- Preserve the user's task scope and the repository's permission boundaries.
- Apply the repository action layer and any project governance document before the generic method specification.
- Treat project documents as the authority for local facts and decisions. Use the public [Knowledge Document convention](https://dhcraft.org/Promptotyping/#konvention-v0.1) for structure and routing.
- Keep source material and research data accessible for inspection. Supply only task-relevant selections to a model context.
- Reserve scholarly validation and acceptance for the accountable Critical Expert. Agents may assemble evidence, execute checks, and record provisional assessments.

## Orient

1. Read the repository action layer, usually `AGENTS.md` or `CLAUDE.md`.
2. Read `knowledge/INDEX.md`.
3. Read `knowledge/handoff.md`.
4. Read the Declarative and Action Documents relevant to the task. Include `governance.md` when authority, evidence status, rights, publication, or escalation affects the work.
5. Consult `knowledge/journal.md` only when provenance or a decision ground is needed.
6. Inspect the actual repository state and verify that cited sources and targets still exist.

An open handoff point is an input awaiting checking, integration, or rejection. Verify its source and current target before relying on it.

## Distill

Use Distillation to establish or revise the maintained knowledge base.

1. Inspect the source basis, research purpose, existing project knowledge, and repository state.
2. Evaluate the function triggers in the public convention. Create documents by function rather than from a fixed checklist.
3. Every Promptotyping repository carries `project.md`, `specification.md`, `journal.md`, `handoff.md`, and a repository action layer. Add `INDEX.md` when the knowledge base exceeds three documents or carries several constitutive terms.
4. Create `knowledge/handoff.md` with `status: active` and the exclusive empty state `Keine offenen Handoff-Punkte.` when no open input exists.
5. Use a published template when the catalogue provides one. A function without a released template follows the convention and its frontmatter vocabulary.
6. Keep each document bounded by one routing question. Link related documents instead of duplicating their current content.
7. Derive the action layer after the knowledge documents exist. It routes into the knowledge base and translates relevant project rules into operational instructions.

## Implement and write back

- Select a bounded task from the maintained project state.
- Examine data and artefacts with deterministic tools where the operation can be formalised.
- Develop inspectable, versioned increments and compare them with the relevant Knowledge Documents.
- Interpret findings at the level where the underlying issue arose. Write durable corrections into the responsible Declarative or Action Document.
- Record one concise Journal entry after a substantively coherent transition has been integrated, rejected, or corrected.
- Report the realised files, checks, deviations, and unresolved findings. A self-report remains input to verification.

An artefact becomes a promptotype only when responsible contributors accept a coherent and identifiable relation among maintained project knowledge, a referenced research-data state, the resulting artefact, and documented grounds of acceptance.

## Handoff

Use `knowledge/handoff.md` as the live Process Inbox. It contains open received deltas only.

Each point carries these fields:

```markdown
### [Short subject]

- Received: [YYYY-MM-DD]
- Source: [verifiable repository, lane, document, or message]
- Target: [current Declarative or Action Document]
- Context: [context required for checking and integration]
```

Add `Evidence`, `Next action`, `Blocker`, or `Operator point` only when the field has content. Accepted future work belongs in `plan.md`. Durable cross-project contracts belong in an Integration Document.

Process a point in this order:

1. Verify its source and current target.
2. Integrate durable content into the responsible Declarative or Action Document, or record a reasoned rejection.
3. Add a concise Journal record naming the subject, source, target, and result.
4. Remove the point completely. Restore `Keine offenen Handoff-Punkte.` when the Inbox becomes empty.

## Compact

Compact a Process Document only when it no longer performs its routing or provenance function. Begin from a clean Git baseline so every substantive statement can be traced.

- Move current factual or operational content to its responsible Declarative or Action Document.
- Keep accepted future work in `plan.md` and open received deltas in `handoff.md`.
- Preserve only the transitions needed to explain the current state in `journal.md`.
- Use Git history for earlier wording.
- Create no archive document during semantic compaction.
- Do not commit, delete, publish, or expand permissions unless the user has authorised that action.

## Completion report

Report the actual end state, verification performed, remaining uncertainty, and any decision that requires accountable human authority. Distinguish a runnable implementation from an accepted promptotype.
