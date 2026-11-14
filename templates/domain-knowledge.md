---
title: Domain knowledge template
slug: domain-knowledge
version: "0.3"
status: complete
language: en
updated: 2026-11-14
machine-url: https://dhcraft.org/Promptotyping/templates/domain-knowledge.md
---
# Domain knowledge template

This template structures the domain knowledge document of a Promptotyping knowledge base. The file name follows `<subject>-<function>.md`, for instance `editorial-guidelines.md`, `tei-mapping.md`, `domain-ontology.md`, `research-methodology.md` or `research-framework.md`. The document lies in the `knowledge/` folder and carries the methodological rules of the discipline together with their justification. The first paragraph confirms the function routed through the file name, and no separate field `zweck:` or `function:` is introduced.

## Scope

The function applies as soon as a project sets a methodological rule of the discipline that cannot be derived from the material or from the software requirements and constitutes a scholarly decision in its own right. The trigger is a rule, a mapping, a calculation logic, a vocabulary or a theoretical framing for which a domain expert is responsible and which one must know in order to interpret or extend the output correctly. This is the case for editorial guidelines, TEI mappings, coding manuals, ontology definitions, calculation logics (for instance a CER methodology, score formulas, classification rules) and for explicit research frameworks, methodology chapters or design justifications grounded in research.

Simple tools without a methodological decision of their own need only a short methods section in the charter document. Agent instructions follow the [action layer template](action-layer.md). Research results about the subject matter are worked out in the research documents responsible for them. Domain knowledge distinguishes two subtypes by group of readers and function.

- (a) Method and justification layer, the why. Theoretical framework, research questions, methodological decisions with academic sources. Typical documents are `research-framework.md`, `research-methodology.md` and `<subject>-methodology.md`.
- (b) Domain-specific rule set, the how of the markup. Editorial guidelines, TEI mapping, coding manual, ontology, calculation logic, normative and close to the markup. Typical documents are `editorial-guidelines.md`, `tei-mapping.md`, `ontology.md`.

A project can keep both subtypes in separate files (notker-edition does not move the theory out, agentic-edition-pipeline keeps its rule set in `03_CONTEXT.md` and `04_TEI_MAPPING.md`), or the rule set carries a short justification section at its head and remains one file. The split follows the same logic of rhythm as in the [architecture template](architecture.md), with separate files as soon as justification and rule set develop their own update rhythms and groups of readers. This split is at the same time the distillation boundary of the function. When a rule set grows beyond readability, it is divided into topic files by groups of phenomena or by subtype, and never extended into a miscellany.

The rule set (b) comes into being with the first trial markup and is updated with every new rule and every clarified phenomenon. Clarified points move from the section on unresolved phenomena into the rules for the phenomena. The justification layer (a) comes into being early and changes seldom afterwards. The costliest decay pattern of the function is a rule set that is schematically outdated and goes on describing a superseded schema as valid while the operational team works with it. A change of schema updates the rule set in the same pass.

## Function of the document

Depending on the subtype, the document answers two interlocking questions. Subtype (a) answers within which theoretical and methodological framework the project works, which research questions guide it, and which literature and disciplinary standards justify its decisions. Subtype (b) answers by which rules the material is marked up, mapped or calculated, how each relevant phenomenon is treated, and which phenomena are still unresolved.

The document addresses three groups of readers. A domain expert (editor, domain scholar, funding officer) checks the methodological soundness and uses the rule set as a reference for manual post-processing and for communication with the client. A reviewer judges whether the decisions are justified and consistent. A coding agent reads the document before generating markup or calculation code. In subtype (b) the mapping rules are the direct specification for the annotation or transformation step, and in subtype (a) theory and sources place the agent in the right field of knowledge. A vague rule layer leads to markup that misses the intended semantics.

## Structural principles

Three principles carry the document.

1. The document separates the rule from the material and from the specification. What the data are and where they come from belongs in `data.md` ([data template](data.md)), and the material is the subject matter. What the system is to do belongs in `specification.md` ([specification template](specification.md)), and the specification is the substance. By which disciplinary rule the material is marked up or the result justified belongs here. This separation is the reason the function exists. The rule set is neither the subject matter nor the scope of functions. It is the scholarly decision between them.
2. The document gives every decision its justification and makes every gap explicit. In subtype (a) every methodological decision carries its source and its consequence, and a research decision without justification is a mere claim. In subtype (b) every coding rule carries its justification (why this element and not that one) and its delimitation (how which borderline cases are treated). Unresolved phenomena are named in a section of their own for open points and are never passed over in silence. What still has to be clarified with the client stands in the document as an open question.
3. The document points to the machine-readable source instead of duplicating it. Where a schema carries the formal truth (RelaxNG schema, ODD, JSON Schema, OWL ontology, vocabulary file), the document paraphrases the schema and links the schema file in the repository as the source of truth. The description of the rules is the readable layer and the schema the checkable one. They do not drift apart, because the document interprets the schema and does not retell it.

## Frontmatter schema

The document follows the reduced required core of the frontmatter in the [convention](convention.md) (state of 2026-06-13), `title`, `project` (object with `name` and `repository`), `method` (object with `name` and `url`), `status`, `created`, `updated`. The purpose lives as the first paragraph under the H1. `status` means the maturity of the document (`idea`, `draft`, `stub`, `complete`, `reviewed`, `archived`, and since 2026-07-19 also `active` for ongoing process documents and `snapshot` for documents tied to a fixed date), and not the operational state of the project. Recommended are `template` (as a block with `name`, `version`, `url`, `alias`, where this template has been applied), `language`, `version` (consistent across the repository), `authors` and `generated-with` respectively, `topics` and `related`. `authors` carries only people, even when an LLM produced the text. `generated-with` names harness and LLM in the format `Harness (LLM)`, for instance `Claude Code (Claude Opus 5)`, see the section *Provenance in the frontmatter* of the convention. Specific to domain knowledge are these fields.

- `topics:` places the agent in the disciplinary field of knowledge and carries particular weight here. In subtype (b) typically `[[TEI]]`, `[[Editorial Guidelines]]`, `[[Critical Apparatus]]`, and depending on language and corpus also concepts of language or period (`[[Old High German]]`). In ontology projects `[[RDF]]`, `[[OWL]]` and the vocabulary used (`[[RiC-O]]`, `[[CIDOC CRM]]`). In subtype (a) the theoretical fields (`[[Mobility Studies]]`, `[[Explainable AI]]`, `[[Historical Information]]`).
- `knowledge-sources:` is central here and should be maintained. At a minimum it holds `standards:` (standards, schemas and guidelines used, with URI, such as TEI P5, ISO codes, WCAG, disciplinary editorial guidelines) and, where applicable, `vocabularies:` (controlled vocabularies, authority files) as well as `datasets:` or `institutions:` for referenced reference projects. In subtype (a) the academic primary sources stand either here as entries under `standards:` or, more tellingly, in the document section `Sources`.
- `related:` typically `data`, `specification`, `design`, the documents that build on the rule set or use it.

A special case is the vault atom structure. Method and theory documents of subtype (a) that are to remain readable as atomic units of knowledge often follow the vault atom structure from the document rules of the respective vault instead of the Promptotyping frontmatter, with `type: knowledge`, `created`, `tags`, `status` in the frontmatter and `## Summary`, `## Sources`, `## Related` in the body instead of `knowledge-sources:` in the frontmatter. This is no error. It is the appropriate form when the document is read primarily as a knowledge atom and less as agent context in the repository (hist-info-model keeps its theory documents this way). The primary group of readers decides which of the two frontmatter forms applies. Agent-centred repository context takes the Promptotyping frontmatter, and an atomic knowledge document takes the vault atom structure.

## Sections in detail

The section structure differs by subtype. Common to both is the lead paragraph (the purpose sentence). Optional sections that do not apply are left out and are not kept empty.

### Lead (both subtypes, required)

The lead carries the purpose of the document in one sentence and then the scope of the rules or of the framework in one to three sentences. It states what the document lays down or justifies, for which corpus or which pipeline stage it applies, and what it serves as a reference for (manual post-processing, scaling to the whole holdings, communication with the client).

### Subtype (a): method and justification layer

`## Theoretical framework` places the project in its disciplinary field. It gives the governing theories and their proponents with brief references, the state of research (related projects, predecessors) and the gap the project closes. It names one to five references, each with one sentence on why it holds.

`## Research questions` makes the guiding questions explicit. It gives numbered research questions, where appropriate with a hypothesis and a feasibility goal. It applies only where the project is a research study, and pure methodology documents without a question of their own leave the section out.

`## Research-based decisions` binds every methodological or design decision to its source and its consequence. For each finding it gives three steps, the finding (what the literature shows), the source (primary evidence with DOI or URL) and the consequence (what is therefore concretely built this way in the project). A closing overview table of decisions against their research basis condenses the section. This is the governing structure of subtype (a), as it connects theory with practice in a way that can be checked.

`## Research context` names the concrete field of objects in which the methodology operates. It gives a case study, the institutional or historical frame, the relevant literature and named research gaps. The section is optional and applies where the context does not already stand in the charter document.

`## Sources` gives full evidence of the literature cited. It holds academic references with author, year, title, DOI or URL. In the vault atom structure this section is required and replaces `knowledge-sources:` in the frontmatter.

### Subtype (b): domain-specific rule set

`## Justification` (optional) carries the basic disciplinary decision if subtype (a) does not exist as a file of its own. It gives two to five sentences on the choice of markup or calculation logic, with a pointer to the relevant model or reference edition. It is left out when `research-framework.md` or `research-methodology.md` carries the justification.

`## Phenomena and their treatment` (core) lays down the rule for every relevant phenomenon. For each phenomenon it gives a description, the normative coding or calculation (a code block with the concrete element, attribute or formula), the justification of the choice and the delimitation of borderline cases. In edition projects this is the markup of the textual layers, changes of language, glosses, apparatus and footnotes, and in calculation logics the formula per metric with its conditions. This is the most voluminous part and is organised by groups of phenomena.

`## Mapping tables` keeps the mapping from source structure to target structure compact. It holds tables of source element against target element against rule (for instance paragraph against `<p>` against the splitting rule, or metadata field against TEI header element against source). TEI projects keep header mapping and body mapping apart. The section applies wherever a systematic one-to-one or one-to-many mapping exists.

`## Header and schema declarations` names the formal decisions in the schema that the rule set presupposes. It gives taxonomies, class declarations, controlled ID lists (textual witnesses, sources, vocabulary IDs), the schema profile and the encoding of variants, with a pointer to the schema file in the repository as the source of truth. The document paraphrases the schema file and does not replace it.

`## Unresolved phenomena` (required where any exist) makes explicit the open points the rule set does not yet decide. It holds a table of phenomenon against status against consequence for the coding, each with the party responsible for clarifying it (typically the client). A question deliberately left undecided stands here and not in a footnote.

`## Conventions for the whole project` (optional) prepares the scaling of the rules developed for a pilot or trial segment to the whole holdings. It states how the coding is extended to further units, reference projects and code tables (language codes, siglum systems). The section applies where a prototype scales to larger holdings.

## What does not belong here

- Material and provenance of the data. What the data are, where they come from and how large the holdings are belongs in `data.md` ([data template](data.md)). Domain knowledge links the data document for the empirical basis (for instance the concrete meanings of the sigla) but does not keep it itself.
- Scope of functions and acceptance criteria. What the system is to achieve belongs in `specification.md` ([specification template](specification.md)). The rule set states by which disciplinary logic markup is done and leaves the features of the frontend to the specification.
- Technical realisation. Which script executes the mapping and which stack carries the pipeline belongs in `architecture.md` ([architecture template](architecture.md)). The rule set names the function (`chain_cross_verse_hyphens()` implements the cross-verse chaining) and leaves its implementation out.
- Imperative instructions to agents belong in the action layer according to the [action layer template](action-layer.md). It points to the declarative disciplinary rule set.
- Research results as statements about the subject matter. What the edition or the analysis shows in substance is a matter for the publications. The document carries the rule and its justification and leaves the result of applying it out. Where empirical findings or claims of novelty drawn from applying the rules are put forward outside the project, they are checked in the section *Claims carried outside the project* of the project's `testing.md` ([testing template](testing.md)).

## Template to fill in

There are two blocks, one per subtype. The first covers the domain-specific rule set (b), the second the method and justification layer (a) in the Promptotyping frontmatter. A variant of the second block shows the vault atom structure for the case in which the document is read primarily as a knowledge atom. Optional sections that do not apply are deleted before the commit and are not left empty. The first paragraph carries the purpose.

### Subtype (b): rule set

````markdown
---
title: [Editorial guidelines | TEI mapping | Ontology | Coding manual]
project:
  name: [Project name]
  repository: [Repository URL]
method:
  name: Promptotyping
  url: https://lisa.gerda-henkel-stiftung.de/digitale_geschichte_pollin
status: draft
created: [YYYY-MM-DD]
updated: [YYYY-MM-DD]
template:
  name: Domain knowledge template
  version: 0.3
  url: https://dhcraft.org/Promptotyping/templates/domain-knowledge.md
language: [de | en]
version: [Repository schema version]
authors: [Author 1, Author 2]
generated-with: [Harness (LLM), if relevant]
topics: ["[[TEI]]", "[[Editorial Guidelines]]"]
knowledge-sources:
  standards:
    [Standard, for instance TEI P5 Guidelines]: [URI]
  vocabularies:
    [Vocabulary or authority file]: [URI]
related: [data, specification, design]
---

# [Title]

<!-- Lead: the first sentence carries the purpose. Then one to three sentences of scope: which corpus, which pipeline stage, what it serves as a reference for. -->

[Purpose sentence and scope]

## Justification

<!-- Optional. Left out when a separate research-framework.md carries the justification. Why this markup or calculation logic, with model or reference edition. -->

[...]

## Phenomena and their treatment

<!-- Core. Per phenomenon: description, normative coding in a code block, justification, delimitation of borderline cases. Organise by groups of phenomena. -->

### [Group of phenomena]

[Description]

```xml
[concrete element/attribute]
```

- [Attribute/rule]: [meaning]

**Delimitation:** [Borderline cases and their treatment]

## Mapping tables

<!-- Mapping from source structure to target structure. For TEI, header mapping and body mapping apart. -->

| Source element | Target element | Rule |
|---|---|---|
| [Source element] | [Target element] | [Rule] |

## Header and schema declarations

<!-- Taxonomies, controlled ID lists, schema profile. Pointer to the schema file as the source of truth. -->

[...]

## Unresolved phenomena

<!-- Required where any exist. Phenomenon, status, consequence for the coding, party responsible for clarifying it. -->

| Phenomenon | Status | Consequence for the coding |
|---|---|---|
| [Phenomenon] | [to be clarified with ...] | [Consequence] |

## Conventions for the whole project

<!-- Optional. Scaling of the prototype rule set to the whole holdings, reference projects, code tables. -->

[...]
````

### Subtype (a): method and justification layer

````markdown
---
title: [Research framework | Methodology | Research foundations]
project:
  name: [Project name]
  repository: [Repository URL]
method:
  name: Promptotyping
  url: https://lisa.gerda-henkel-stiftung.de/digitale_geschichte_pollin
status: draft
created: [YYYY-MM-DD]
updated: [YYYY-MM-DD]
template:
  name: Domain knowledge template
  version: 0.3
  url: https://dhcraft.org/Promptotyping/templates/domain-knowledge.md
language: [de | en]
version: [Repository schema version]
authors: [Author 1, Author 2]
generated-with: [Harness (LLM), if relevant]
topics: ["[[Mobility Studies]]", "[[Explainable AI]]"]
related: [project, data, specification]
---

# [Title]

<!-- Lead: the first sentence carries the purpose. Then one to three sentences: which framework, what it holds for. -->

[Purpose sentence and framing]

## Theoretical framework

<!-- Governing theories with proponent and brief reference, state of research, gap. One sentence per reference on why it holds. -->

[...]

## Research questions

<!-- Optional. Numbered questions, where appropriate a hypothesis and a feasibility goal. Left out in pure methodology documents without a question of their own. -->

**RQ1.** [...]

**Hypothesis.** [...]

## Research-based decisions

<!-- Core. Per finding: finding, source (DOI/URL), consequence (what is therefore concretely built this way). Closing: overview table. -->

### [No.] [Finding as a title]

**Finding:** [...]

**Source:** [Author, year, title, DOI/URL]

**Consequence:** [What is therefore concretely built this way in the project]

---

| Design decision | Research basis |
|---|---|
| [Decision] | [Source] |

## Research context

<!-- Optional. Case study, institutional/historical frame, relevant literature, named research gaps. -->

[...]

## Sources

<!-- Academic references with author, year, title, DOI/URL. -->

[...]
````

### Variant: vault atom structure (for subtype a, when primarily a knowledge atom)

````markdown
---
type: knowledge
created: [YYYY-MM-DD]
tags: [2 to 4 tags, lowercase-hyphenated]
status: draft
---

# [Title]

## Summary

<!-- Two to three paragraphs. The first sentence carries the purpose. -->

[...]

## [Theoretical framework | Core concepts | Methodological decision]

[...]

## Sources

[Author, year, title. DOI/URL.]

## Related

- [[Related atom]], [relation in half a sentence]
````

## Use as a prompt template

The template serves as a structural anchor when domain knowledge is set up. First the agent (or the domain expert) decides which subtype applies and whether both are kept separately. The matching template block is copied into a new file in the `knowledge/` folder and filled iteratively. Subtype (b) is filled from the source material that actually exists (trial page, DOCX, schema file, existing reference edition), and the rule for each phenomenon is derived from a real instance and never invented. Subtype (a) is filled from the literature, and every finding needs a checkable primary source with DOI or URL. Since this layer carries disciplinary scholarly decisions, it is the part of the knowledge base that most urgently needs validation in substance by the Critical Expert (Critical-Expert-in-the-Loop). Borderline cases and unresolved phenomena are not smoothed away. They are left standing as open questions to the client. Research sources are checked against the ban on Grokipedia.

The template also serves as a review sheet for an existing domain knowledge document. An existing `editorial-guidelines.md`, `tei-mapping.md`, `research-framework.md` or `research-methodology.md` is checked against the naming contract, the lead, the justifications, the sources and the consequences. The review also checks the delimitation from `data.md` and `specification.md` and the pointer to an authoritative schema file.

## Example

notker-edition shows the domain-specific rule set fully worked out (subtype b). It keeps `editorial-guidelines.md` as TEI coding guidelines for Notker's commentary on the Psalms. The lead carries the purpose in one sentence and names the three uses (manual post-processing, extension to all 150 psalms, communication with the client). The core organises the textual phenomena. Notker's three functional textual layers (psalm quotation, translation, commentary) are each coded as `<seg type="..." ana="...">` with a concrete code block, the change of language as `<foreign xml:lang="...">`, and interlinear glosses as `<ab>` with `<gloss>`. Every rule carries its justification (for instance "`<seg>` instead of `<quote>`, because Notker paraphrases") and its delimitation (loanwords are tagged, proper names are not). The section on header declarations gives the taxonomy of textual functions and the controlled ID lists for textual witnesses (`wit-G`, `wit-R`, `wit-H`) and commentary sources (`src-A`, `src-C`), with a pointer to the RelaxNG schema (`data/schema/tei_all.rng`) as the formal source of truth. A section of its own on unresolved phenomena gives the open points (meaning of the sigla G and R in the main text column, verse boundary 12/13) as a table with the resolution "clarify with the client". A theory or justification section of subtype (a) is not moved out separately here, and the justifications sit at each individual rule.

agentic-edition-pipeline shows the rule set in skeleton form (subtype b, early phase). It splits the rule set into `03_CONTEXT.md` (editorial guidelines with transcription conventions, normalisations, annotation types and authority data) and `04_TEI_MAPPING.md` (TEI profile DTABf with a pointer to `schemas/dtabf.json`, a header mapping and body mapping table of source element against TEI element against rule, annotation rules, registers). Both documents are laid out as fillable skeletons with `[TODO]` markers and show the structure of the mapping tables in pure form. They demonstrate that the rule set function also holds as a scaffold before it is filled.

dia-xai shows the method and justification layer with academic sources (subtype a). It keeps `RESEARCH.md` as its research foundations. The lead carries the purpose ("distilled findings from the research literature that justify our design decisions", in translation) and the structural promise (every finding with a primary source and a concrete consequence). Each of the eleven sections follows the three steps of finding, source and consequence. Anchoring bias in pre-annotation (Berzak et al., EMNLP 2016), for example, leads to the design decision "raw text always visible in the verify view". A closing table of design decisions against their research basis condenses the eleven findings. This is the pure form of subtype (a), a checkable binding of every practical decision to a primary source.

The research framework of a study is kept as `research-framework.md`. It carries the theoretical framework, relevant prior work, research gaps and research questions, with sources in a section of their own.

hist-info-model shows the vault atom variant (subtype a as a knowledge atom). It keeps its theory documents in the folder `knowledge/01-theory/` in the vault atom structure instead of the Promptotyping frontmatter. `Historical-Information.md` carries `type: knowledge` plus `tags` and `status: draft` in the frontmatter and, in the body, `## Summary`, then the disciplinary decision (five properties, three primitives, the open question of their relation), then `## Sources` (Pollin, Thaller, Koselleck, Langefors) and `## Related` with annotated wikilinks. This demonstrates the special case of a method and theory document that is read primarily as an atomic unit of knowledge and follows the vault structure instead of the Promptotyping frontmatter.

## Terms

### Domain knowledge

The layer of methodological rules and theory of the discipline in a project, meaning the rules by which material is marked up or calculated and their scholarly justification. It is neither the material (subject matter) nor the specification (scope of functions).

### Method and justification layer (subtype a)

The theoretical framework and the research-based justification of the project's decisions, with academic sources. It answers the why.

### Domain-specific rule set (subtype b)

The normative specification close to the markup (editorial guidelines, TEI mapping, coding manual, ontology, calculation logic). It answers the how of the markup.

### Mapping

The systematic assignment of source structure to target structure (source element to TEI element, metadata field to header element), the core of subtype (b).

### Unresolved phenomenon

A case for which the rule set does not yet carry a decision and which is named explicitly as an open question to be clarified with the client instead of being passed over in silence.

### Source of truth (for schemas)

The machine-readable file (RelaxNG schema, ODD, JSON Schema, OWL ontology) that carries the formal truth. The domain knowledge document paraphrases and links it and does not replace it.

## Related

- [Templates of the Promptotyping Documents](./)
- [Convention](convention.md)
- [Promptotyping](https://dhcraft.org/Promptotyping/)
- [Data template](data.md)
- [Specification template](specification.md)
- [Architecture template](architecture.md)
- Critical-Expert-in-the-Loop
