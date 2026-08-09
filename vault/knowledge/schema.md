---
title: Schema
project:
  name: "Promptotyping Paper Vault"
  repository: "https://github.com/DigitalHumanitiesCraft/Promptotyping"
method:
  name: Promptotyping
  url: https://dhcraft.org/Promptotyping/
profile:
  name: Grounded Vault
  url: https://github.com/DigitalHumanitiesCraft/grounded-vault
status: draft
language: en
created: "2026-07-19"
updated: "2026-08-09"
related: [index, specification, operations, state]
---

# Schema

This document defines the rules of the vault. It sets out the layer model, the controlled vocabularies, the anchor mechanics per source type, the audit trail, and for every content document type the exact frontmatter and section skeleton. Every content file, whether produced by agent or human, derives from the rules set here. The procedures that produce and check these documents live in [[knowledge/operations]]; this document defines only what a well-formed artifact is.

## Layer model

| Layer | Folder | Content | Anchor it carries |
|---|---|---|---|
| Sources | `00_sources/` | originals, local only | none; this is the ground |
| Markdown representation | `10_markdown/` | archived full texts, datasets with schema | block IDs, file plus schema |
| Distillates | `20_distillates/` | one distillate per source | grounding anchors into its source, statement IDs |
| Assertions | `30_assertions/` | atomic cross-source statements, topic maps | grounding anchors into distillate statements |
| Output | `40_output/` | one file per chapter | footnote anchors into assertions, posits marked |

Every Markdown representation and every distillate is also listed in an inventory register, `knowledge/state.md` by default, and the validator raises `E-INVENTORY` on one that is not. Without the register row a document is invisible to every check and every overview that reads a register, so it can be complete and conformant and still be missed. An instance that keeps more than one register declares them in `INVENTORY_REGISTERS` in `tools/validate.py`.

The layers carry these definitions. A **source** is the original file exactly as it arrived, kept untouched so that every later form of its content can be checked against it. A **Markdown representation** is the uniform Markdown form of a source, produced once by converting the original and given block IDs so that later layers anchor into passages that never change afterwards. A **distillate** is the set of single statements extracted from one source, each anchored to the passage of the representation it was taken from. An **assertion** is a single source-supported statement synthesized from the distillates of a topic and grounded in at least one distillate statement. The **output** is the final output of the vault, one or more documents such as a report, proposal, thesis or paper; its document type is the chapter, and a **chapter** is an output text in which every load-bearing sentence carries a footnote to an assertion and every own conclusion is marked as a posit.

Two rules constrain the chain. Anchors are minted only at the layer they belong to; a Markdown representation mints block IDs, a distillate mints statement IDs, and no higher layer creates anchors into material below its direct predecessor. And each layer references only the layer directly beneath it; the output binds to assertions, assertions bind to distillate statements, distillates bind to the blocks of the Markdown representation.

## Controlled vocabularies

- `type`: `representation` | `distillate` | `assertion` | `moc` | `glossary` | `chapter`. The value `representation` is the machine-side short form for Markdown representation; the prose of this vault uses the full term.
- `source-type`: `document` | `publication` | `data`
- `channel`: `handover` | `collection` | `import` | `deep-research`
- `status`: `grounded` | `validated` | `verified`, plus `contested` (assertions only) and `superseded` (distillates only)
- `topics`: values must each name an existing topic map; the set of `MOC-*.md` files in `30_assertions/` is the controlled topic set

## Audit trail

A status records the outcome of checks that actually ran. Every check writes its date into the `checked` map of the document it checked:

```yaml
status: validated
checked:
  validation: 2026-07-11
  machine-review: 2026-07-11
```

The discipline is machine-enforced: `validated` requires `checked.validation` and `checked.machine-review`; `verified` additionally requires `checked.verification`. `grounded` is the entry status of every freshly produced document and requires no entry. A document's status is the minimum of the states of its anchors; one unreviewed anchor keeps the whole document at `grounded`. For publication distillates the intake-time quotation check is recorded as `checked.quote`, because the source text may be unavailable to later validation runs. No instance ever sets a status above its own authority; the contracts are defined in [[knowledge/operations]].

## Source metadata

Every Markdown representation carries a compact, Dublin-Core-compatible metadata block. Licensing and confidentiality are metadata of the individual source; nothing else in the architecture depends on them.

```yaml
metadata:
  title: ""            # dc:title
  creator: ""          # dc:creator; role and institution, no third-party personal names
  date: ""             # dc:date of the source, ISO 8601
  format: ""           # dc:format of the original (pdf, pptx, csv, …)
  identifier: ""       # dc:identifier (DOI, URL, archival signature) where one exists
  license: ""          # dc:rights; SPDX identifier or short clause
  confidential: false  # true keeps original and full text local
```

## Source types

The source type of a source follows from whether its content may be stored in the vault and from the anchor that storage decision permits.

A **document** is a source whose full text may be stored in the vault. It is converted into a Markdown representation and anchored by block reference into that representation. A **publication** is a source that is only cited. What lies in the vault is the bibliographic record, and the anchor is the verbatim quotation together with the identifier. A **data** source is a file whose anchor is a deterministic computation over that file. An aggregate or a statistical finding exists at no single passage, so the computation takes the place of one.

The criterion is storability, and the publication status of a source decides nothing by itself, so an open-access article that may be stored is treated as a `document`. Where a full text may be stored, `document` is preferred over `publication`, because its anchors resolve inside the vault.

## Bibliographic records

`references/` holds the bibliographic records of the citable-only sources as CSL JSON, exported from the reference manager. Each file is a JSON array of records, and each record carries an `id` alongside its bibliographic fields.

```json
[
  {
    "id": "author2024keyword",
    "type": "article-journal",
    "title": "",
    "author": [{ "family": "", "given": "" }],
    "issued": { "date-parts": [[2024]] },
    "container-title": "",
    "URL": ""
  }
]
```

The `reference` field of a publication distillate names one such `id`, and validation raises `E-ANCHOR` when no record in `references/` carries it. The folder is needed only while the source type `publication` is active.

## Document types

Each type carries its frontmatter as a code block, followed by the section skeleton where one is fixed. Fields not marked optional are required. Wikilink values are quoted, block IDs unquoted, as Obsidian requires for YAML.

### 1. Markdown representation (source-type: document)

The uniform Markdown form of a source, produced once by converting the original and given block IDs so that later layers anchor into passages that never change afterwards. Exactly one per source, stored in `10_markdown/documents/`. A revised source enters as a new file with a date-suffixed slug; existing anchors keep resolving against the old file.

```yaml
---
type: representation
source-type: document
source: "[[00_sources/<filename>]]"
converter: ""            # e.g. Docling, MarkItDown
channel: handover        # handover | collection | import | deep-research
metadata: { … }          # see Source metadata
created: 2026-01-01
updated: 2026-01-01
---
```

The body is the converted full text under an H1 taken from the original. Every anchor-relevant paragraph ends with a block ID:

```markdown
The board approves centrally operated services. ^a1b2
```

Block IDs are short, stable, unique per file, and minted only here.

### 2. Markdown representation (source-type: data)

A dataset plus its schema description. The data file (CSV, XML, …) lives in `10_markdown/data/` next to a Markdown file of the same slug that carries the frontmatter and describes the schema.

```yaml
---
type: representation
source-type: data
source: "[[00_sources/<filename>]]"    # omit when the data file is the original
data: "[[10_markdown/data/<file.csv>]]"
channel: handover
metadata: { … }
created: 2026-01-01
updated: 2026-01-01
---
```

The body describes columns, units, encodings and known limitations. The anchor of this type is a computation, defined in the distillate.

### 3. Distillate

The set of single statements extracted from one source, each anchored to the passage of the representation it was taken from. One file per source in `20_distillates/<source-type>s/`, same slug as its Markdown representation. A distillate reproduces its source without evaluating it and without merging it with other sources; synthesis belongs to assertions.

```yaml
---
type: distillate
source-type: document        # document | publication | data
representation: "[[10_markdown/documents/<slug>]]"   # document and data types
reference: ""                # publication type: CSL JSON id from references/
topics: ["[[<Topic>]]"]
status: grounded             # grounded | validated | verified | superseded
checked: {}
superseded-by: ""            # optional, wikilink to the successor distillate
created: 2026-01-01
updated: 2026-01-01
---
```

```markdown
# Distillate: <source short title>

<Lead: one sentence naming the source and its contribution to the vault.>

## Core statements

- <statement> [[10_markdown/documents/<slug>#^a1b2]] ^s1
- <statement> [[10_markdown/documents/<slug>#^c3d4]] ^s2

## Terms

- **<term>**: <meaning as set by the source> [[10_markdown/documents/<slug>#^e5f6]]

## Open questions

- <unclarity of the source>

## Related

- [[20_distillates/…]] / [[30_assertions/…]]
```

Every core statement carries exactly one grounding anchor into its source and ends with a statement ID (`^s1`, `^s2`, …), the anchor assertions bind to. The anchor form varies by source type:

- **document**: a block reference into the Markdown representation, as above.
- **publication**: a verbatim quotation with citation instead of a block reference. The quotation must appear character for character in the source; the intake-time check is recorded as `checked.quote`.

  ```markdown
  - <statement in own words> ^s1
    > "<verbatim quotation>" (<identifier>, p. <n>)
  ```

- **data**: a reproducible computation instead of a block reference, named on an indented line. The script lives in `tools/analysis/` and is deterministic.

  ```markdown
  - <statement, e.g. an aggregate or finding> ^s1
    - computation: `python tools/analysis/<script>.py` → `<stated result>`
  ```

  The script reads the data file of the Markdown representation, takes no arguments, and prints the stated result and nothing else to standard output. Validation re-runs it from the vault root and compares that output character for character with the stated result, so a formatting difference is a defect.

### 4. Assertion

A single source-supported statement synthesized from the distillates of a topic and grounded in at least one distillate statement. One file per assertion in `30_assertions/`. This is the layer where source types converge.

```yaml
---
type: assertion
topics: ["[[<Topic>]]"]
status: grounded             # grounded | validated | verified | contested
checked: {}
grounding:
  - "[[20_distillates/documents/<slug>#^s1]]"
  - "[[20_distillates/publications/<slug>#^s2]]"
contested-with: []           # wikilinks; required on both sides when status is contested
created: 2026-01-01
updated: 2026-01-01
---
```

```markdown
# <The assertion as one sentence>

## Statement

<The assertion spelled out, one short paragraph.>

## Support

- [[20_distillates/documents/<slug>#^s1]] — <what this anchor contributes>
- [[20_distillates/publications/<slug>#^s2]] — <what this anchor contributes>

## Related

- [[30_assertions/…]]
```

A conclusion without source support never becomes an assertion; it enters the output as a posit. Assertions that cannot be reconciled are both set to `contested` and linked to each other in `contested-with`.

### 5. Topic map (MOC)

One file per topic of the controlled topic set, named `MOC-<Topic>.md` in `30_assertions/`. The set of these files is the topic vocabulary.

```yaml
---
type: moc
topic: "<Topic>"
created: 2026-01-01
updated: 2026-01-01
---
```

```markdown
# MOC: <Topic>

<Lead: one sentence on what this topic covers.>

- [[30_assertions/<slug>]] — <half-sentence of orientation>

## Open questions

- <question the vault cannot currently answer from its sources>
```

The body lists every assertion of the topic as a wikilink with a half-sentence of orientation. Every assertion must be reachable from at least one topic map, and the validator raises `E-ORPHAN` on one that is not.

### 6. Glossary entry

One term per file in `glossary/`, serving as definition, wikilink hub and tag keyword.

```yaml
---
type: glossary
term: "<term>"
created: 2026-01-01
updated: 2026-01-01
---
```

```markdown
# <Term>

<Definition in one or two sentences.> [[10_markdown/documents/<slug>#^a1b2]]
```

The body gives the definition in one or two sentences with a grounding anchor where the definition comes from a source. The glossary holds one document per central technical term of the content and is used as the need arises.

### 7. Chapter

An output text in which every load-bearing sentence carries a footnote to an assertion and every own conclusion is marked as a posit. One file per chapter in `40_output/`, continuous prose in the project's working language and style sheet.

```yaml
---
type: chapter
status: grounded             # grounded | validated | verified
checked: {}
assertions: ["[[30_assertions/<slug>]]"]   # structured mirror of all referenced assertions
posits: 0                                  # count of posit footnotes
created: 2026-01-01
updated: 2026-01-01
---
```

The anchor contract of the output: every load-bearing sentence carries a footnote marker; every footnote begins with one of two keywords and nothing else counts.

```markdown
Water use fell by a third after metering was introduced.[^1] The board should
therefore extend metering to all sites.[^2]

[^1]: Grounded in [[30_assertions/metering-reduces-use]].
[^2]: Posit: follows from [^1] only if consumption patterns are comparable
      across sites. Open evidence question: site-level baseline data.
```

Validation cross-checks the footnotes against the `assertions` mirror and the `posits` count. Footnotes are the reference notation; an instantiation may substitute another notation as long as marker, keyword and mirror survive.

## Meta documents

The six documents in `knowledge/` carry the Promptotyping header (as at the top of this file) instead of a content `type`. They are meta-knowledge about the vault and are exempt from the content schema. A knowledge document is split only when its sections develop divergent update rhythms or divergent readers.

## Naming

File names are speaking slugs, ASCII-lowercase with hyphens, derived from genre and subject (`report-water-metering-2026-03`). Markdown representation and distillate of the same source share the same slug. Date suffixes distinguish version rows.
