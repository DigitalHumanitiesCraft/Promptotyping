---
title: VetMedAI Wissensbilanz
id: vetmedai-wissensbilanz
paper: none
---

# VetMedAI Wissensbilanz

## Context and research question

Austrian universities report their performance annually in an intellectual-capital statement, the Wissensbilanz, and they report it as spreadsheets. The question the dashboard answers is what the sector looks like when those separate returns are read together, across institutions and across years. The project was the first use case of VetMedAI at the University of Veterinary Medicine Vienna, and it was built as a teaching case with an audience present during development.

## Data

The corpus is the set of Excel files under `data/`, covering the Austrian universities and their performance metrics. The heterogeneity is the difficulty. The files were produced by different institutions to satisfy a reporting obligation, so sheet layouts, indicator names and year coverage vary from file to file, and no schema governs the set.

## Approach

The knowledge base is organised in a numbered hierarchy that separates meta, domain, design, hypotheses, learnings and journal. Two of those categories originate here. The hypotheses category holds numbered statements about what the dashboard is for, which makes assumptions about utility checkable against the interface. The learnings category holds numbered documents that distil transferable insight from the sessions; it is a process document type distinct from the journal, since a journal records what happened and a learning records what to do differently.

The frontend renders the indicators through several visualisation types with a dual-mode analysis, and a tutorial system with badges serves the teaching purpose.

## Methodological contribution

The case shows what a hand-curated knowledge base buys over a heterogeneous corpus. Nothing in the source data declares its own structure, so every mapping from spreadsheet to indicator had to be written down before the agent could work against it, and the domain category is where that writing sits.

The separation of learnings from journal is the second contribution. It has since become a document type in its own right, distinguishing the transferable rule from the record of the session that produced it.

## Limits

The dashboard reads what the reports contain, and the reports were written for compliance. An indicator that two institutions interpret differently is displayed as one series, and no part of the interface marks that divergence, so a comparison across institutions carries an assumption the data does not support.

The knowledge base carries frontmatter only in part, which puts the case outside the addressing mechanism the convention describes and makes it a poor example of the machine-readable side of the method.

The paper calls this the largest knowledge base in the record. That holds for hand-curated bases, and another case in the same table carries a generated vault far larger in file count. The two are different kinds of artefact, and the superlative applies only to the first.
