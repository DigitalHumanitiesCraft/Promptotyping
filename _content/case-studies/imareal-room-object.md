---
title: Imareal Room-Object Dashboard
id: imareal-room-object
paper: none
source: Projects/Promptotyping/Case Studies/imareal-room-object.md
---

# Imareal Room-Object Dashboard

## Context

A dashboard that makes medieval room inventories from the REALonline database explorable for research on material culture. The records describe relations between rooms and the objects in them, drawn from late medieval noble households in Austria and northern Italy. The work ran as one Promptotyping iteration, with conceptual passes in a chat interface for close reading of the data and design analysis, and implementation in an agentic coding environment.

## Contribution

The journal appears here as an active document for the first time in the record. The agent wrote it during the session, unprompted at each step and uncorrected by the developer afterwards. Together with the commit history it forms what the project names context memory, since the journal records why a decision was taken and the commits fix which states worked, and a later session that reads both resumes with the reasoning intact, which the code alone does not carry.

The session was also steered by the method's own system prompt, so the agent laid out the Promptotyping Documents itself and led the developer through the phases. Control over the process moved into the prompt, and the developer supplied the domain decisions.

Two operational observations come from the same session. Screenshots and console output fed back to the model improve the interface across iterations, which makes visual feedback part of the working loop. Commits act as savepoints between phases, and a commit forgotten before a larger rebuild is the point at which a session loses ground.

## Limits

The treemap did not come out right. Repeated feedback loops with screenshot and console failed to fix it, and the visual feedback path therefore has a documented ceiling that the same session shows working elsewhere.

The journal is a self-report. It was written by the agent and left uncorrected, so it records what the agent took the reasons to be, and reading it as a record of the developer's reasoning overstates what it is.

Implementation started without an explicit minimum viable product. The project records that as a decision to weigh case by case according to complexity, and it produced no rule that a later project could follow.

The work stopped after the first iteration, so nothing in the case shows how the documents behave when a project returns to them after a break, which is the situation context memory is meant for.

Section 2.5 of the paper reads this phase as a group and withholds the attribution of one component to one project. The gallery card names this case as the origin of context memory, which the paper does not assert.
