---
title: wiiw Patent Analysis
id: wiiw-patent-analysis
paper: "5.2, Table 1"
---

# wiiw Patent Analysis

## Context and research question

Which firms patent together, across which borders, and how did that pattern move between 2010 and 2018. The question comes from economic research, which is what the case contributes to the record. It was built at an economic research institute in Vienna, and the domain expertise it had to serve was economic.

## Data

The source is an R dataset, an edge list of patent cooperations between firms covering 2010 to 2018. Each row names two firm identifiers, their ISO country codes, the application year and a weight counting the collaborations between those firms in that year. The graph is undirected and weighted, and almost all of its edges cross a national border. The repository's `knowledge/data.md` holds the current figures for row count, firms and country distribution. The CSV files under the exploration directory are derived from the dataset as working formats.

One property of the dataset decides how the case may be read. It is synthetic. The repository's own data document states that the real data stays local and is never uploaded to a cloud environment, and the file name carries the same marker. What is published is a stand-in with the structure of the real thing.

## Approach

The interface separates the question into tabbed views, each answering a different form of it. A force-directed graph with centrality measures gives the overall structure, yearly snapshots give the movement over time, and a bridge-country view gives the cooperation patterns that connect otherwise separate clusters. A further view documents the data and the method. The site is static and deployed from the repository.

## Methodological contribution

The method produced a working analysis interface on economic research data, outside the humanities.

The case also documents a way of working with data under a confidentiality obligation. An agentic tool sends what it reads to a provider's infrastructure, which disqualifies the tool for such data. Here a dataset was synthesised that carries the structure of the original and none of its content, development ran against that, and the real data stayed on local infrastructure. The published artefact is therefore inspectable without the confidentiality being at issue. The record carries no second case with this pattern.

## Limits

The synthetic data bounds what the published artefact can be used for. The interface is open to judgement, and no finding about real patent cooperation survives the substitution. The methodology view states this on the dashboard itself.

The knowledge base carries no frontmatter, so the case sits outside the addressing mechanism the convention describes.
