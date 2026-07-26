---
title: wiiw FIGARO Subagents
id: wiiw-figaro-subagents
paper: none
---

# wiiw FIGARO Subagents

## Context and research question

The Eurostat FIGARO dataset describes production, income, money flows and consumption across European economies, and it is large enough that no single reading of it settles a question. The case was prepared for a workshop at an economic research institute and asks what changes when the analysis is distributed across several agent roles. The comparison is against a single conversation carrying the whole task. The research question driving the run concerns the energy crisis and the recovery after COVID.

## Data

The FIGARO dataset in its distributed form, a set of Parquet files. The size is the reason the case exists, since a corpus that does not fit in a context window forces the question of how an agent reaches it.

## Approach

The repository defines subagent roles for analysis, implementation and synthesis, and the run passes through exploration, hypothesis formation, implementation and synthesis under version control. Generated visualisations are handed back to the model as images for feedback and correction, which uses the context window more economically than passing the underlying tables again. Where a reading needs a larger window than the working model offers, a second model with a larger one takes it.

## Methodological contribution

The case documents the distance between a designed multi-agent architecture and what a session actually does with it. The repository is laid out as a multi-agent workflow; the recorded session realises it as one model taking the roles in turn. Both states are visible, and that makes the case useful for anyone reading multi-agent orchestration as a settled technique.

Feeding visualisations back as images is the second contribution. It is a context-management technique, and it buys room in the window without touching the analysis.

## Limits

The paper does not carry this case. The run is a single documented pass, so nothing here supports a claim about reproducibility, and the research question served the demonstration.

The role separation is asserted by the repository and realised only in part by the session, which means the case shows what the architecture was meant to do more clearly than what it did.
