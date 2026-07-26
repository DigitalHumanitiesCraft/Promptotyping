---
title: VetMedAI Wissensbilanz
id: vetmedai-wissensbilanz
paper: "5.2, Table 1"
---

# VetMedAI Wissensbilanz

## Context and research question

Austrian universities report their performance annually in an intellectual-capital statement, the Wissensbilanz, and they report it as spreadsheets. The question the dashboard answers is what the sector looks like when those separate returns are read together, across institutions and across years. The project was the first use case of VetMedAI at the University of Veterinary Medicine Vienna, and it was built in a teaching setting, with workshop participants watching the development as it happened.

## Data

The corpus is 77 Excel files under `data/`, covering the Austrian universities and their performance metrics. The heterogeneity is the difficulty. The files were produced by different institutions to satisfy a reporting obligation, so sheet layouts, indicator names and year coverage vary from file to file, and no schema governs the set.

## Approach

The knowledge base is the largest in the record measured by document count, 31 documents in a numbered hierarchy that separates meta, domain, design, hypotheses, learnings and journal. Two of those categories are unusual and both came out of this project. The hypotheses category holds four numbered statements about what the dashboard is for, which turns assumptions about utility into something a reader can check against the interface. The learnings category holds ten numbered documents that distil transferable insight from the sessions, and it is a process document type distinct from the journal, since a journal records what happened and a learning records what to do differently.

The frontend renders seven visualisation types with a dual-mode analysis over the indicators, and it carries a tutorial system with badges, which serves the teaching purpose.

## Methodological contribution

The case shows what a hand-curated knowledge base buys over a heterogeneous corpus. Nothing in the source data declares its own structure, so every mapping from spreadsheet to indicator had to be written down before the agent could work against it, and the domain category is where that writing sits. The separation of learnings from journal is the second contribution and has since become a document type in its own right.

The teaching context is not incidental. A workshop audience watching a build sees the corrections, and the case is one of the two places in the record where the method was demonstrated live. Everywhere else it is reported after the fact.

## Limits

The dashboard reads what the reports contain, and the reports were written for compliance. An indicator that two institutions interpret differently is displayed as one series, and no part of the interface marks that divergence, so a comparison across institutions carries an assumption the data does not support.

The knowledge base carries frontmatter only in part, which puts the case outside the addressing mechanism the convention describes and makes it a poor example of the machine-readable side of the method. The count of 31 documents also sits awkwardly against a corpus in which another case holds a generated vault of several hundred files; the two numbers measure different things, a curated base against a generated one, and the label of largest applies only to the first.
