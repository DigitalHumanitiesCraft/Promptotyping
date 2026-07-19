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
updated: "2026-07-19"
related: [index, specification, operations, state]
---

# Schema

This document is the stable rulebook of the vault. It defines the layer model, the controlled vocabularies, the anchor mechanics per source type, the audit trail, and for every content document type the exact frontmatter and section skeleton. Every content file, whether produced by agent or human, derives from the rules set here. The procedures that produce and check these documents live in [[knowledge/operations]]; this document defines only what a well-formed artifact is.

## Layer model

| Layer | Folder | Content | Anchor it carries |
|---|---|---|---|
| Sources | `_sources/` | originals, local only | none; this is the ground |
| Representation | `00_representation/` | archived full texts, datasets with schema | block IDs, file plus schema |
| Distillates | `10_distillates/` | one distillate per source | grounding anchors into its source, statement IDs |
| Claims | `20_claims/` | atomic cross-source statements, topic maps | grounding anchors into distillate statements |
| Deliverable | `30_deliverable/` | one file per chapter | footnote anchors into claims, posits marked |

Two rules keep the chain honest. Anchors are minted only at the layer they belong to; a representation mints block IDs, a distillate mints statement IDs, and no higher layer creates anchors into material below its direct predecessor. And each layer references only the layer directly beneath it; the deliverable binds to claims, claims bind to distillate statements, distillates bind to representation blocks.

## Controlled vocabularies

- `type`: `representation` | `distillate` | `claim` | `moc` | `glossary` | `chapter`
- `source-type`: `document` | `publication` | `data`
- `channel`: `handover` | `collection` | `import` | `deep-research`
- `status`: `grounded` | `validated` | `verified`, plus `contested` (claims only) and `superseded` (distillates only)
- `topics`: values must each name an existing topic map; the set of `MOC-*.md` files in `20_claims/` is the controlled topic backbone

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

Every representation carries a compact, Dublin-Core-compatible metadata block. Licensing and confidentiality are metadata of the individual source; nothing else in the architecture depends on them.

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

## Document types

Each type carries its frontmatter as a code block, followed by the section skeleton where one is fixed. Fields not marked optional are required. Wikilink values are quoted, block IDs unquoted, as Obsidian requires for YAML.

### 1. Representation (source-type: document)

Exactly one archived full text per source, converted once and never edited afterwards, so that its anchors stay stable. Lives in `00_representation/documents/`. A revised source enters as a new file with a date-suffixed slug; existing anchors keep resolving against the old file.

```yaml
---
type: representation
source-type: document
source: "[[_sources/<filename>]]"
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

### 2. Representation (source-type: data)

A dataset plus its schema description. The data file (CSV, XML, …) lives in `00_representation/data/` next to a Markdown file of the same slug that carries the frontmatter and describes the schema.

```yaml
---
type: representation
source-type: data
source: "[[_sources/<filename>]]"    # omit when the data file is the original
data: "[[00_representation/data/<file.csv>]]"
channel: handover
metadata: { … }
created: 2026-01-01
updated: 2026-01-01
---
```

The body describes columns, units, encodings and known limitations. The anchor of this type is a computation, defined in the distillate.

### 3. Distillate

The condensation of exactly one source into its core statements. One file per source in `10_distillates/<source-type>s/`, same slug as its representation. A distillate reproduces its source without evaluating it and without merging it with other sources; synthesis belongs to claims.

```yaml
---
type: distillate
source-type: document        # document | publication | data
representation: "[[00_representation/documents/<slug>]]"   # document and data types
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

- <statement> [[00_representation/documents/<slug>#^a1b2]] ^s1
- <statement> [[00_representation/documents/<slug>#^c3d4]] ^s2

## Terms

- **<term>**: <meaning as set by the source> [[00_representation/documents/<slug>#^e5f6]]

## Open questions

- <unclarity of the source>

## Related

- [[10_distillates/…]] / [[20_claims/…]]
```

Every core statement carries exactly one grounding anchor into its source and ends with a statement ID (`^s1`, `^s2`, …), the anchor claims bind to. The anchor form varies by source type:

- **document**: a block reference into the representation, as above.
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

### 4. Claim

An atomic, source-independent statement relevant to the deliverable, one file in `20_claims/`, synthesized from the distillates of one or more sources. This is the layer where source types converge.

```yaml
---
type: claim
topics: ["[[<Topic>]]"]
status: grounded             # grounded | validated | verified | contested
checked: {}
grounding:
  - "[[10_distillates/documents/<slug>#^s1]]"
  - "[[10_distillates/publications/<slug>#^s2]]"
contested-with: []           # wikilinks; required on both sides when status is contested
created: 2026-01-01
updated: 2026-01-01
---
```

```markdown
# <The claim as one sentence>

## Statement

<The claim spelled out, one short paragraph.>

## Support

- [[10_distillates/documents/<slug>#^s1]] — <what this anchor contributes>
- [[10_distillates/publications/<slug>#^s2]] — <what this anchor contributes>

## Related

- [[20_claims/…]]
```

A conclusion without source support never becomes a claim; it enters the deliverable as a posit. Claims that cannot be reconciled are both set to `contested` and linked to each other in `contested-with`.

### 5. Topic map (MOC)

One file per topic of the controlled backbone, named `MOC-<Topic>.md` in `20_claims/`. The set of these files is the topic vocabulary.

```yaml
---
type: moc
topic: "<Topic>"
created: 2026-01-01
updated: 2026-01-01
---
```

The body lists every claim of the topic as a wikilink with a half-sentence of orientation. Every claim must be reachable from at least one topic map.

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

The body gives the definition in one or two sentences with a grounding anchor where the definition comes from a source.

### 7. Chapter

One file per chapter of the deliverable in `30_deliverable/`, continuous prose in the project's working language and style sheet.

```yaml
---
type: chapter
status: grounded             # grounded | validated | verified
checked: {}
claims: ["[[20_claims/<slug>]]"]   # structured mirror of all referenced claims
posits: 0                          # count of posit footnotes
created: 2026-01-01
updated: 2026-01-01
---
```

The anchor contract of the deliverable: every load-bearing sentence carries a footnote marker; every footnote begins with one of two keywords and nothing else counts.

```markdown
Water use fell by a third after metering was introduced.[^1] The board should
therefore extend metering to all sites.[^2]

[^1]: Grounded in [[20_claims/metering-reduces-use]].
[^2]: Posit: follows from [^1] only if consumption patterns are comparable
      across sites. Open evidence question: site-level baseline data.
```

Validation cross-checks the footnotes against the `claims` mirror and the `posits` count. Footnotes are the reference notation; an instantiation may substitute another notation as long as marker, keyword and mirror survive.

## Meta documents

The six documents in `knowledge/` carry the Promptotyping header (as at the top of this file) instead of a content `type`. They are meta-knowledge about the vault and are exempt from the content schema. A knowledge document is split only when its sections develop divergent update rhythms or divergent readers.

## Naming

File names are speaking slugs, ASCII-lowercase with hyphens, derived from genre and subject (`report-water-metering-2026-03`). Representation and distillate of the same source share the same slug. Date suffixes distinguish version rows.
