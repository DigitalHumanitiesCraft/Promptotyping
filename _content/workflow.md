---
title: Worked workflow. From a stack of Excel files to a dashboard
slug: workflow
status: complete
language: en
version: "0.2"
created: 2026-07-25
updated: 2026-07-26
source: the two introductory videos, cleaned scripts in the Grounded Vault
machine-url: https://dhcraft.org/Promptotyping/_content/workflow.md
---

# Worked workflow

A completed case, from raw data to the running artefact, recorded as a screencast of one working session. The starting material is a large set of Excel files from a public reporting system, and the result is a static dashboard. The case is a didactic base case without a public repository, chosen because it shows the loop in full, and it solves no difficult research problem. The two videos are [part 1 on the method and the four phases](https://youtu.be/8sUe4Jkh3uQ) and [part 2 with the continuous demonstration](https://youtu.be/hd_a-NBO_S4).

## Preparation

Preparation here consists of nothing more than collecting the Excel files in a `data` folder. The case needs no more, because the material is already tabular and the question put to it is simple.

## Exploration

The first instruction to the agent is to analyse all files in detail and produce a `data.md` from them that renders the totality of the data and the relations between all columns. The instruction is extended by a directive on working method, namely to create a `scripts` folder with Python scripts that assist the exploration, and to document their function in a Markdown document of their own.

This extension carries the principle the method's token economy rests on. With many files the LLM does not read the data; it writes code that reads the data and works on from the compressed result. At the end of the step there are three scripts, their documentation, the extracted data as JSON, and the `data.md`.

The second move is tidying up. The `data.md` moves into a `knowledge` folder, and the move is reported back to the agent, since otherwise it works on from an outdated picture of the file layout.

## Distillation

Three further documents arise from the understanding of the data in one go, a requirements description, an architecture document and a design document. The architecture document describes a static single-page application, HTML5, CSS, responsive layout, vanilla JavaScript without a build, and a single library for the visualisation, with JSON and CSV as data formats. One detail shows what a well-filled context yields, since the agent assigns the view to the Visual Information Seeking Mantra without that term appearing in the prompt.

Then comes the step that separates the phase from mere writing. The documents are checked against themselves, for inconsistencies and for superfluous scope. The agent supplies criticisms and recommendations, and the scope is deliberately reduced, in this case to two chart types. Ingredients no human asked for are discarded, among them a dark colour scheme and keyboard shortcuts. That is the overengineering check at the passage into Implementation, and it is right in a first pass, because the knowledge stays in the `knowledge` folder and the next iteration builds on from it.

Before implementation begins, a `journal.md` is created that records the data analysis, the dashboard planning, the critical review and the simplification. In a case without a repository the journal takes the place of the commit history.

## Implementation

Implementation runs in milestones, and the first HTML view can be opened in a local server. From here three feedback channels operate.

- **Screenshots.** The running artefact is photographed and the image goes back into the context. The agent thereby sees what it has built.
- **Precise fault addressing.** A fault in the interface is reported by the identifier of the element rather than by a description of what looks wrong. This is the second kind of judgement the method presupposes, the development-side one.
- **Clicking through.** The finished view is operated the way a user would operate it.

Two passages of the recording are methodologically instructive, because they depart from the rule.

Exploration is caught up on in the middle of implementation. The speaker finds that the first probe was not thorough enough, interrupts the run and has the `data.md` updated with the new knowledge. Re-entry into an earlier phase exists for exactly this.

The milestone check is deferred. The run continues on a bare instruction to carry on, and the inspection follows several milestones later. This is a decision with a price, defensible in a first pass whose point is to see something running at all, and it leaves a verification debt.

## The possibility space

At the end stands an experiment that does not serve completion. A single prompt requests a radically different design, against the conventions the LLM's defaults reproduce. The result is an unusual interface whose usability remains open. The purpose is to probe the possibility space, because the learned conventions otherwise keep invisible the options a project needs. To close, the knowledge documents are brought up to the state reached, which closes the loop from Implementation back into the documents.

## What the case shows and what it does not

It shows the full loop on material that demands no scholarly modelling, and it shows the concrete moves that stay abstract in the description of the [application](#anwendung). It does not show what the method achieves on interpretatively modelled research data, because tabular reporting data does not carry the difficulties at issue there. The [use cases](#use-cases) and the evidence chapter of the [paper](#abschnitt-5-evidence-the-documented-projects) stand for that.
