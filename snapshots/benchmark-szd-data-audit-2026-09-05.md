---
title: SZD benchmark data audit
status: snapshot
language: en
created: 2026-09-05
related: [../knowledge/benchmark-specification, ../knowledge/benchmark-plan]
---

# Stefan Zweig digital: first benchmark data audit

The operator selected [Stefan Zweig digital](https://stefanzweig.digital/) as the
first real DH collection, then chose correspondence and dating as the first
research activity. This audit records read-only inspection and an authored task
proposal. It supplies no benchmark results or scholarly acceptance of labels.

## Source and inspection boundary

The local source repository is `C:/Users/chris/Documents/GitHub/SZD`, with origin
`https://github.com/chpollin/SZD.git` and inspected commit
`45115eaa58a83a12660ab556e7fcdbe1fc56f588`. The `data/` working tree was clean at
inspection. No source repository files were changed. Counts below describe that
checkout; they do not establish the current extent of the online portal.

The official [project description](https://stefanzweig.digital/archive/objects/context:szd/methods/sdef:Context/get?locale=en&mode=about)
provides the archival and technical context. The repository's
[collection documentation](https://github.com/chpollin/SZD/blob/45115eaa58a83a12660ab556e7fcdbe1fc56f588/knowledge/COLLECTIONS.md)
distinguishes the correspondence index from the individual correspondence objects.
The public [Zenodo version 4 deposit](https://zenodo.org/records/7624796), dated
9 February 2023, contains older collection XML files. Its listed files do not
include this correspondence konvolut. Its DOI must not be used as the version
identifier for the selected 2026 repository file.

## Observed inventory

XML was parsed with Python's standard `xml.etree.ElementTree`, using the TEI
namespace `http://www.tei-c.org/ns/1.0`. Bibliographic counts use
`.//tei:body//tei:biblFull`; person and event counts use their respective elements.

| Repository source | Observed elements | Consequence for task design |
|---|---:|---|
| `data/Correspondence/SZDKOR.xml` | 765 `biblFull` | Aggregate catalogue entries; do not equate the count with individual letters |
| `data/Correspondence/konvolute/*.xml` | 904 `biblFull` across 42 files | Candidate individual correspondence descriptions; uniqueness and archival unit still require inspection |
| `data/Library/SZDBIB.xml` | 1,303 `biblFull` | Alternative task on provenance and material traces |
| `data/Work/SZDMSK.xml` | 352 `biblFull` | Alternative task on manuscript descriptions and repositories |
| `data/Biography/SZDBIO.xml` | 104 `event` | Possible contextual material, with editorial provenance |
| `data/Index/Person/SZDPER.xml` | 2,192 `person` | Supply only relevant authority records when needed |

These are element counts, not estimates of unique historical objects or complete
correspondence networks. In particular, the index and konvolut counts cannot be
added or assumed to cover identical archival material.

## Recommended first extract

The [Hannah Altmann konvolut](https://github.com/chpollin/SZD/blob/45115eaa58a83a12660ab556e7fcdbe1fc56f588/data/Correspondence/konvolute/szd.korrespondenzen.altmann-hannah.xml)
contains 184 `biblFull` records. The committed Git blob's SHA-256 is
`bb5998948e357e2ab0c64e438dda8b1aa53ea07c10602803f77636e4cfbaf2e2`.
The inspected Windows checkout's SHA-256 is
`0785a00cc3fbdaa955a64effcca89de615b90532ce75787482bc95ab7fa58dbe`;
it differs only by CRLF line endings. Replacing CRLF with LF reproduces the
committed bytes exactly. Use the committed blob for portable source packaging;
the selection manifest records both hashes and their basis.
Each record has a facsimile PID element; link availability was not tested.

For the German `date` elements in the `sent` correspondence actions, 136 `@when`
values have the shape `YYYY-MM-DD`, 44 have `YYYY-MM`, and four have `YYYY`.
These counts describe syntax and granularity, not historical certainty. There are
54 dates with `@ana="supplied/verified"`; absence of this attribute does not prove
certainty. The inspected mapping document describes a supplied-date field using
`@type`, whereas this file uses `@ana`. The intended local semantics need expert
review before deriving assessment labels.

Observed cases supporting a small, meaningful task include:

| Source ID suffix, all under `SZDKOR.altmann-hannah.` | Evidence in the XML | Evaluation opportunity |
|---|---|---|
| `1`, `2`, `3`, `4` | Month, day and year granularity; supplied annotation on some dates | Preserve precision and annotation separately |
| `4` | Two recipient actions, including Lotte Zweig and Hannah Altmann | Preserve every recipient; avoid deriving recipients only from the title |
| `13`, `17` | December 1939 at month and day granularity; Lotte and Stefan as senders | Support a bounded research comparison with visible evidence |
| `48`, `64` | Hannah and Manfred Altmann as co-recipients | Distinguish correspondence records from person relations |
| `102` | Literal `15158`, `@when="1941-07"`, title referring to July 1941; an empty sender name with a GND reference; two recipients | Expose incomplete or divergent representations without silently repairing the source |
| `116`–`120` | May 1941, mixed date literals and granularity, both senders and co-recipients | Continue the implementation with genuine additional records |

The cause of the numeric date literal in record `102` is unverified. Calling it an
Excel conversion error would exceed this inspection. Likewise, an authority link
may support an explicitly derived display label without changing the empty source
name. All recipient actions must be retained; a first-recipient-only extraction
would already distort the research data.

## Rights and packaging evidence

The checked main index, library, works, biography and person files contain a
CC BY 4.0 declaration in their TEI headers. The Hannah Altmann file has no
`availability` or `licence` element in its header. The repository README reserves
archival-data and facsimile rights to the archive while licensing code separately.
These differing statements must be recorded per source; neither a code licence nor
another XML file's declaration establishes the selected file's reuse terms.

The current task proposal contains source references and an ID selection manifest,
not a redistributed archival dataset or images. Record the applicable metadata
reuse basis when preparing the shareable input package. Facsimile reproduction is
outside the proposed first task; source links support subsequent scholarly review.

## Consequences and next step

The [task draft](../research-artefacts/promptotyping-bench/tasks/szd-correspondence/README.md)
proposes 12 initial records and four continuation records. Selection is purposive,
covering research-relevant variations with small input volume; it cannot estimate
their prevalence in SZD. Byte size and actual model tokens must be measured after
context-preserving packaging, rather than inferred from the record count.

SZD already appears in this repository's case-study collection as a timeline
annotation implementation. Record that prior exposure in the study manifest.
Supply the research brief and data to both conditions, keeping existing solution
code, evaluator expectations and this authoring audit outside participant workspaces.
The currently inspected examples are development material; later held-out probes
need fresh, reviewed records and an explicit exposure record.

Remaining work is to establish the selected metadata's packaging terms, review
the research scenarios and collection semantics, prepare source-preserving inputs,
author independent reference expectations, and implement the measured harness.
