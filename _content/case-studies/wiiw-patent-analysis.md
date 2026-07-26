---
title: wiiw Patent Analysis
id: wiiw-patent-analysis
paper: "5.2, Table 1"
---

# wiiw Patent Analysis

## Context and research question

Which firms patent together, across which borders, and how did that pattern move between 2010 and 2018. The question comes from economic research, and that is why the case stands in the record. It was built during a data-analysis workshop at an economic research institute in Vienna, which makes it the test of whether the method carries once the domain expertise on the other side of the table is not a philologist's.

## Data

The source is an R dataset, an edge list of patent cooperations between firms with 137,990 rows over the period 2010 to 2018. Each row names two firm identifiers, their ISO country codes, the application year and a weight counting the collaborations between those firms in that year. Around 134,000 distinct firms appear, the graph is undirected and weighted, and 99.15 per cent of the edges cross a national border. The CSV files under the exploration directory are derived from it as working formats.

One property of the dataset decides how the case may be read. It is synthetic. The repository's own data document states that the real data stays local and is never uploaded to a cloud environment, and the file name carries the same marker. What is published is a stand-in with the structure of the real thing.

## Approach

The interface has four tabs, and each answers a different form of the question. A force-directed graph with centrality measures gives the overall structure, yearly snapshots give the movement over time, a bridge-country view gives the cooperation patterns that connect otherwise separate clusters, and a fourth tab documents the data and the method. The site is static and deployed from the repository.

## Methodological contribution

Two things. The first is the plain one, that the method produced a working analysis interface outside the humanities, on economic research data, in a workshop setting.

The second was not planned as a contribution and matters more. Working with an agentic tool means the data passes through a provider's infrastructure, and for data under a confidentiality obligation that is disqualifying. The case answers it by synthesising a dataset that carries the structure of the original while carrying none of its content, developing against that, and keeping the real data on local infrastructure. The published artefact is therefore inspectable by anyone without the confidentiality ever being at issue. That is a reusable pattern, and the record has no second case that documents it.

## Limits

The synthetic data bounds what the published artefact can be used for. The interface can be judged, the analysis cannot, because no finding about real patent cooperation survives the substitution. Anyone reading the deployed dashboard as a result about the world is reading it wrongly, and the fourth tab is where the site says so.

The knowledge base carries no frontmatter, so the case sits outside the addressing mechanism described in the convention. Its knowledge base is also small compared to the edition and pipeline cases, which reflects the scope of a workshop build.
