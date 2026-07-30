---
title: Intake diff paper-draft.md 2026-07-30
project:
  name: Promptotyping Site
  repository: https://github.com/DigitalHumanitiesCraft/Promptotyping
status: snapshot
language: en
version: 0.1
created: 2026-07-30
updated: 2026-07-30
authors: [Christopher Pollin]
generated-with: Claude Code (Claude Opus 5)
method:
  name: Promptotyping
  url: https://dhcraft.org/Promptotyping/
template:
  name: Vorlage Report
  version: 0.2
  url: https://dhcraft.org/Promptotyping/promptotyping-document/report
  alias: https://dhcraft.org/Promptotyping/#promptotyping-document-report
related: [paper-draft, paper-knowledge, paper-writing, paper, journal, revision, verification-draft-sources]
---

# Intake diff paper-draft.md 2026-07-30

Loss control for the operator's externally revised manuscript (Fassung 4), intaken on 2026-07-30 in commit `e30bedb`.

**OLD** is the integrated final version of 2026-07-29, retrievable as `git show HEAD~1:knowledge/paper-draft.md` at the time of writing, 852 lines, six embedded figures, sections 1.1 to 1.2, 2.1 to 2.4, 3.1 to 3.6, 4.1 to 4.11, 5.1 to 5.6.

**NEW** is the current `knowledge/paper-draft.md`, 560 lines, five figure placeholders, sections 1.1 to 1.2, 2.1 to 2.4, 3.1 to 3.4, 4.1 to 4.3, 5.1 to 5.3.

The revision is a genuine rewrite rather than a trim. Roughly a third of the running text is new, the method chapter is reorganised around a single worked case, and one entirely new section (2.4) enters. This report is the basis for restoration decisions and takes no decisions itself. Section 2 below is exhaustive for dropped substance; pure rewording is ignored throughout.

## 1. Structural mapping

| OLD section | Fate | NEW location |
| :---- | :---- | :---- |
| Abstract | Rewritten, one limitation sentence added | Abstract |
| 1. Introduction | Rewritten around a research question, roadmap rebuilt | 1. Introduction |
| 1.1 Translating Research Data … Scholar-Centred Design | Condensed by about half, tool criticism moved in from OLD 3.1 | 1.1 (same title) |
| 1.2 Context Engineering and Agentic Engineering | Condensed, Critical Expert passages moved out | 1.2 Context Engineering, Agentic Engineering, and AI Harnesses |
| 2. lead-in (development history) | Compressed from four paragraphs to one plus footnote 14 | 2. Promptotyping as a Method, lead-in |
| 2.1 Definition | Merged with the document typology of OLD 2.3 | 2.1 Promptotyping and the Project Knowledge Base |
| 2.2 Preparation and Exploration | Merged with the four forms of work of OLD 2.1 and the Distillation core of OLD 2.3 | 2.2 Forms of Work and Iteration |
| 2.3 Distillation into Promptotyping Documents | Split. Document typology to NEW 2.1, Distillation proper to NEW 2.2, SZD instance to NEW 2.3 | 2.1, 2.2, 2.3 |
| 2.4 Agentic Implementation and Verification | Restructured around the SZD worked example, checking taxonomy preserved | 2.3 From Project Knowledge to an Accepted Promptotype |
| (none) | New section | 2.4 Documentation, Accountability, and the Limits of AI-Assisted Development |
| 3. lead-in | Replaced. Capability evidence and asymmetric amplification now open the chapter | 3. lead-in |
| 3.1 Research Artefacts as Scholarly Arguments | Condensed, three-case illustration added, Drucker 2014 and tool-criticism argument dropped | 3.1 Research Artefacts and the Amplification of Computer-Based Research |
| 3.2 Semantic Explicitness and the Limits of Context | Collapsed into part of one paragraph | 3.2 Research Data and Project Knowledge as Mediating Structures |
| 3.3 Documents as Conceptual Models and Mediating Structures | Collapsed into the same paragraph as 3.2 | 3.2 |
| 3.4 Amplification, Distributed Authority, and the Limits of Externalisation | Condensed to one paragraph | 3.3 Amplification, Competence, and the Limits of Externalisation |
| 3.5 Promptotypes, Acceptance, and Publication | Merged with 3.6, condensed to one paragraph | 3.4 Acceptance, Reconstructability, and the Status of the Promptotype |
| 3.6 Reconstructability and Model Dependence | Merged into 3.4 | 3.4 |
| 4. lead-in | Preserved, condensed | 4. Promptotyping in Practice, lead-in |
| 4.1 Case Selection, Sources, and Evidential Status | Table dropped, prose preserved | 4.1 Cases and Evidential Status |
| 4.2 Recurrent Artefact Forms | Five prose definitions become five table rows | 4.2, Table 2 |
| 4.3 Anatomy of an Iteration Across the Cases | **Dropped**, with Figure 3 | none |
| 4.4 SZD-HTR | Condensed to one bold-lemma paragraph | 4.2, SZD-HTR |
| 4.5 CorrespExplorer | Condensed to one paragraph | 4.2, CorrespExplorer |
| 4.6 M³GIM | Condensed to one paragraph, figure kept | 4.2, M³GIM |
| 4.7 ZBZ OCR/TEI | Condensed to one paragraph, figure kept | 4.2, ZBZ OCR/TEI |
| 4.8 Notker | Condensed to one paragraph, figure kept | 4.2, Notker |
| 4.9 coOCR/HTR and teiCrafter (4.9.1, 4.9.2) | Condensed to two paragraphs, subsection level removed | 4.2, coOCR/HTR and teiCrafter |
| 4.10 Cross-Case Comparison | Table narrowed from seven to five columns, six observations become prose | 4.3, Table 3 |
| 4.11 Teaching, Collaboration, and Independent Continuation | Condensed to one paragraph inside 4.3 | 4.3, final paragraph |
| 5. lead-in | New orientation paragraph | 5. Scope, Limits, Evaluation, and Conclusion |
| 5.1 Empirical Scope and Methodological Limits | Preserved nearly verbatim | 5.1 |
| 5.2 Conditions of Applicability | Preserved verbatim | 5.1 |
| 5.3 Technical, Organisational, Infrastructural, and Social Limits | Condensed | 5.1 |
| 5.4 Transferability and Open Questions | Condensed | 5.2 Transferability and Priorities for Evaluation |
| 5.5 Priorities for Evaluation | Prose becomes five bullets, follow-up design condensed | 5.2 |
| 5.6 Conclusion | Rewritten, two new arguments added | 5.3 Conclusion |
| AI Use and Research Provenance | Preserved verbatim | same |
| Figure Generation Disclosure | **Dropped**, with footnote `[^figure-prompts]` | none |
| References | Preserved plus two entries | References |
| Figure files | Preserved verbatim | Figure files |
| List of Figures | **Dropped** | none |

Table numbering was corrected in passing. OLD carried a Table 2 that appeared before its Table 1; NEW numbers them in order of appearance, so the checking taxonomy is Table 1, the artefact forms are the new Table 2, and the cross-case comparison is Table 3.

## 2. Substance present in OLD, absent from NEW

### 2.1 Condensed but preserved

These claims survive in shorter form. They need no restoration decision, and they are listed so that the dropped list below can be read as complete.

| OLD claim | Where it survives in NEW |
| :---- | :---- |
| The two LLM routes, direct generation against generated deterministic transformation | 1, paragraph 2, extended by the unstructured-material case |
| A verified transformation establishes only correct implementation of the chosen mapping | 1, paragraph 3 |
| Expertise in source annotation, intended mapping, and target representation is still required | 1, paragraph 3 |
| Humanities sources resist self-evident computational units | 1.1, one sentence |
| Formalising semantics at the data level does not determine how researchers work with it | 1.1 and 3.2 |
| RSE collaboration remains essential for dependable, integrated, supported artefacts | 1.1 and 2.3 |
| Context Engineering maintains an inspectable body from which task context is selected | 1.2 and 2.1 |
| Agentic capability lies in the model, harness, and environment together | 1.2 |
| Knowledge that guides agentic work must persist and stay open to correction | 1.2 and 2.4 |
| The term was first used in the dissertation, then developed publicly | 2 lead-in, as author-date citations |
| Research data and knowledge base have distinct functions | 2.1 |
| Filenames are not constitutive of the method | 2.1 |
| Declarative, process, and action layers with their diagnostic function | 2.1 |
| Generated reports refreshable from the data state | 2.1, as *derived context artefacts* |
| Long-context degradation does not permit accumulation as a substitute for selection | 2.1 |
| The four forms of work, their objects, and their non-linear return paths | 2.2 |
| Distillation as pragmatic modelling rather than compression | 2.2 |
| The new-agent-instance completion criterion | 2.2 |
| Too vague to implement is often too vague to document | 2.2 |
| Write-back as the mechanism that makes findings durable | 2.2 |
| A provisional artefact is not a promptotype merely because it runs | 2.2 and 2.3 |
| Spec-Driven Development comparison and the epistemic authority difference | 2.3 |
| Vibe Coding demarcation | 2.3 |
| The full checking taxonomy of OLD Table 2 | 2.3, Table 1, with an added agent-role column |
| The three SZD transcription statuses and the edit history | 2.3 |
| Validation converts from verification and never in reverse | 2.3 |
| Critical Expert in the Loop, sycophancy, jagged frontier | 2.3 |
| The possibility space the system did not produce | 2.3 |
| Distributed Critical Expert role | 2.3 |
| Least privilege for multiple agents | 2.3 |
| Purpose-specific acceptance and identifiability of the accepted state | 2.3 and 3.4 |
| The RSE boundary of the method | 2.3 and 5.2 |
| Backtalk of the artefact (Schön, Goldschmidt) | 3.1 |
| Research value lies in what building yields rather than in the artefact's existence | 3.1 |
| Formal data models do not contain the research purpose | 3.2 |
| Documents as semi-formal conceptual models (Stachowiak, Mayr and Thalheim) | 3.2, as a bare citation |
| Errors are attributable to code, requirements, design, data assumptions, or model | 3.2 |
| Amplification defined as extending rather than replacing competence | 3.3 |
| Only the articulable part of competence can be externalised | 3.3 |
| The hybrid-practitioner limitation of the evidence | 3.3 |
| Reconstructability rather than reproduction of the generative process | 3.4 |
| Publication creates additional obligations | 3.4 |
| Case selection is biased towards work that reached an inspectable state | 4.1 |
| The distinct methodological function of each case | 4.1 |
| The five artefact categories and their overlap | 4.2, Table 2 |
| Promptotypes can operate prospectively (M³GIM, Notker) | 4.3 |
| Workshops show communicability without establishing independent long-term use | 4.3 and 5.1 |
| The whole of OLD 5.1 and 5.2 | 5.1, nearly verbatim |
| Asymmetric amplification | 3 lead-in, 3.3, 5.1 |
| Infrastructural concentration beyond model provision | 5.1 |
| Critical engagement as the practical position | 5.1, verbatim |
| The five evaluation objects | 5.2, as bullets |

### 2.2 Dropped

Each item is gone from NEW in every location. IDs are stable for tick-off.

#### From the Abstract and Introduction

- **D-1-01** The abstract's commitment to **Markdown documents** as the carrier of the knowledge base. NEW says only "documents". In the body, Markdown survives as a negation ("not a demand to reproduce all relevant source material in Markdown"), in footnotes 14 and 15, and in the Figure files note.
- **D-1-02** The abstract's enumeration of what the knowledge base records, "requirements, decisions, procedures, and open questions".
- **D-1-03** "Its contribution is conceptual and methodological", together with the four-part statement of what the paper does (defines, reconstructs, explains externalisation, establishes write-back). NEW substitutes a research question.
- **D-1-04** "Software makes data accessible by enabling it to be queried, transformed, related, and presented."
- **D-1-05** The roadmap's naming of Critical Expert judgement as a foundation established in 1.2, and of "ethical" among the limits treated in 5.

#### From 1.1

- **D-1.1-01** Formal data models named by kind, "tabular, hierarchical, relational, or graph-based", with Flanders and Jannidis 2015. NEW cites Flanders and Jannidis 2019 in a different role.
- **D-1.1-02** The claim that community standards such as TEI can be **customised for particular research perspectives**, with TEI Consortium 2026.
- **D-1.1-03** "Software operates on these formally represented distinctions rather than directly on the research objects themselves."
- **D-1.1-04** The humanities paragraph's specifics, "require contextualisation, admit multiple perspectives, and often preserve uncertainty rather than resolving it", "meaning depends on provenance, material and historical context, and the questions through which they are examined", and the concrete units "a person, transaction, place, or textual passage".
- **D-1.1-05** The network-tool example at this point, "cannot infer from that structure alone what an encoded relation means for a particular historical question, whether its direction is warranted, or how uncertainty should be represented".
- **D-1.1-06** RDF, ontologies, and provenance information named as the Semantic Web's means of making meanings explicit in the body text. NEW moves the Semantic Web to footnote 6 without this function.
- **D-1.1-07** The explicit definition of *research data* for the paper, "the structured representations that provide the scholarly basis of a project".
- **D-1.1-08** **The two-family definition of digital research artefacts.** OLD counted documentary forms (which make data, assumptions, requirements, and decisions explicit) and technical forms (transformations, pipelines, analytical and verification environments, editions, capture systems, interfaces) as artefacts of the same kind, and made adaptation to a project rather than technical format the defining criterion. NEW defines artefacts as operational forms only, so the Promptotyping Documents themselves no longer fall under the term. This changes what the title of the paper refers to.
- **D-1.1-09** The four decisions that translation requires, "which aspects of the data matter for a particular activity, which operations should be possible, how uncertainty and absence should be represented, and how the results should remain intelligible and verifiable".
- **D-1.1-10** "A digital research artefact is not simply a presentation layer placed over otherwise self-sufficient data."
- **D-1.1-11** The Bookkeeping Ontology's retention of **provenance and uncertainty** about transactions.
- **D-1.1-12** "Different historical questions continued to require different selections, operations, aggregations, and forms of interaction."
- **D-1.1-13** Scholar-Centred Design's method basis, the three citations Salinas, Cueva, and Paz 2020; Jetter 2022; Broy and Kuhrmann 2021.
- **D-1.1-14** Scholar-Centred Design's **bidirectional feedback loop**, "It did not merely elicit preferences for a predefined system … while modelling and prototyping prompted researchers to articulate and revise their understanding of the sources, data, and domain."
- **D-1.1-15** Siemens 2009 from the RSE collaboration citation set.
- **D-1.1-16** The contrast with "deferring implementation to a separate, fully resourced development phase".
- **D-1.1-17** **"The term *Promptotyping* captures this convergence of prompting and prototyping."** The etymology of the method's name appears nowhere in NEW.
- **D-1.1-18** The three-way composition statement, "Promptotyping combines Scholar-Centred Design with Context Engineering and Agentic Engineering", with the role assignment that Scholar-Centred Design establishes the **criteria by which an artefact is evaluated**. Scholar-Centred Design survives in NEW only as a source of requirements in Preparation.

#### From 1.2

- **D-1.2-01** "None of them removes the need for expert judgement in specifying the intended result and determining whether it is adequate."
- **D-1.2-02** "Selection" as part of the definition of Context Engineering (organisation, maintenance, **selection**, and provision).
- **D-1.2-03** The full statement of what the informational environment consists of, "requirements, decisions, procedures, unresolved questions, and criteria relevant to implementation and verification".
- **D-1.2-04** **The literature grounding of Agentic Engineering**, Cao 2026 and Alenezi 2026, together with the qualification that the term is emergent and is often discussed more narrowly as *agentic programming*, *agentic coding*, or *Agentic Software Engineering*. NEW defines the term without any citation.
- **D-1.2-05** The harness maintaining "evidence of the actions performed", and "It does not itself determine which project knowledge is relevant or how the work should be organised."
- **D-1.2-06** "What defines the role is not individual authorship of every project component but responsibility for the judgements through which project knowledge and artefacts are specified, challenged, verified, and accepted."
- **D-1.2-07** **"Expertise is therefore not replaced by increasingly capable models, larger context windows, or longer agentic workflows. Its role shifts towards specification, contextual judgement, orchestration, diagnosis, and verification."** The five-term description of where expert work moves is gone.

#### From the chapter 2 lead-in (development history)

The genealogy is the most heavily compressed passage in the manuscript. Footnotes 5, 6, 7, and 8 of OLD are all gone; footnote 14 of NEW carries three clauses in their place.

- **D-2.0-01** GPT-4 with Advanced Data Analysis as the tool of the earliest cases, and Python analyses and visualisations as their output.
- **D-2.0-02** **The Hugo Schuchardt correspondence case in full**, the conversion of unstructured correspondence text to TEI XML, and with it OLD footnote 6, the FORGE 2023 publication (Pollin, Steiner, and Zach, `10.5281/zenodo.8425163`) and the note that the mapping-rule approach was ported to the experimental teiCrafter Custom GPT. NEW footnote 14 says "a documented mapping from correspondence data to TEI XML" with no source. The paper's earliest documented case now has no citation.
- **D-2.0-03** The mapping table as "an early instance of the externalisation of project knowledge that the method later consolidates as Distillation".
- **D-2.0-04** **The psychology case in full**, including OLD footnote 7 (Doctoral Congress, Institute of Psychology, University of Graz, 24 November 2023, with the described workflow) and the methodological point that **user stories functioned as an intermediate specification** connecting scholarly purpose, available data structures, and the operations to be implemented. NEW footnote 14 retains one clause. The corresponding reference entry Pollin 2023 was added to the list but is never cited (see 4.4).
- **D-2.0-05** **Semantic Markdown in the main text**, including what the representation retained ("classes, definitions, properties, domains, ranges, cardinalities, external alignments, and domain rules") against what it omitted ("serialisation syntax and repeated formal structures"), and the conclusion that it was "not merely a shortened account of the ontology" but "a task-specific representation designed for a different addressee and use".
- **D-2.0-06** The step through a **project-specific Custom GPT** that combined instructions, project knowledge, and data-analysis capabilities.
- **D-2.0-07** The observation that the documents "ceased to function only as contextual material for individual interactions" once agents gained repository access, stated as a transition.
- **D-2.0-08** OLD footnote 5, the workshop series as the documented record of the experiments and teaching materials. Pollin 2024 is now an uncited entry.

#### From 2.1 Definition

- **D-2.1-01** The name ***Promptotyping Document*** as a defined term of the method. NEW introduces "knowledge documents" instead and uses "Promptotyping Documents" once, in 3.2, without definition. The site's whole template catalogue is built on the dropped term.
- **D-2.1-02** OLD footnote 9, the public and versioned method specification, and the demarcation "The project knowledge base is not a database or formal knowledge-representation system."
- **D-2.1-03** "The knowledge base does not authorise itself."
- **D-2.1-04** **The scope statement of the method**, "*Promptotyping* applies to documentary and technical artefacts through which modelled research data can be investigated, transformed, enriched, verified, or revised. These range from models and processing pipelines to capture tools, scholarly editions, analytical interfaces, and software applications; **no particular output format or technical architecture defines the method**."
- **D-2.1-05** **The structural precondition of applicability**, "Its application requires research material to be available in a structured and machine-actionable form before it can serve as the basis of implementation", with the graded examples from CSV or JSON up to markup standards, metadata models, graph representations, and ontologies, and OLD footnote 10 (TEI, LIDO, CMIF, PAGE XML, RDF). A weaker form survives in NEW 5.1 as a limit rather than a precondition.
- **D-2.1-06** **The precursor demarcation**, "Earlier notebooks, Custom GPT workflows, FORGE, and comparable experiments are treated as precursors unless the surviving record permits an identifiable accepted iteration state to be reconstructed", and the complementary statement that early cases document individual operations, "externalisation, condensation, intermediate specification, and iterative implementation". NEW keeps the abstract threshold and drops both lists.
- **D-2.1-07** "Multi-user functionality" from the enumeration of what pushes an artefact into the RSE domain.
- **D-2.1-08** The explicit separation, in the Figure 1 discussion, of the **digital research artefact produced during Implementation from the promptotype**, and "nor does it imply that every internal cycle produces a new promptotype".
- **D-2.1-09** **The corpus-count policy for SZD**, "Corpus counts are treated as dated project-state measurements rather than as fixed properties of the pipeline because backup holdings, canonical records, and processed subsets may differ." An equivalent survives for ZBZ in footnote 30 only.
- **D-2.1-10** The SZD material types "life documents, works, and essay files".

#### From 2.2 Preparation and Exploration

- **D-2.2-01** The Preparation materials list in full, "documentation of standards and data models, source descriptions, research questions, domain knowledge, and any existing editorial, annotation, or mapping guidelines".
- **D-2.2-02** "Preparation also establishes the **project repository** and makes the relevant source material accessible for direct inspection and **deterministic processing**."
- **D-2.2-03** **The worked user story**, "As a social historian, I want to trace people and their relations through commodity transactions so that I can investigate the social structure of the community", and the observation that it is simultaneously a statement about historical inquiry and a functional requirement.
- **D-2.2-04** **The QUS framework**, "established criteria such as the QUS framework distinguish qualities that can be tested formally from those that require an understanding of their content". Lucassen et al. 2016 survives as a bare citation.
- **D-2.2-05** **The Wheaton network visualisation as a case, in full.** Code generation, modelled data, and Scholar-Centred Design requirements converging in a research-specific interface; persons, institutions, places, and commodities as differentiated nodes and relations; controls exposing categories from the data model and the social-historical user stories; and the conclusion that the interface "operationalised a particular prosopographic interpretation of the accounting data" rather than rendering an existing graph. This was the first Promptotyping case in the paper and the only one that closed the loop back to 1.1. NEW mentions Wheaton once, in 1.1, as a requirements contrast.
- **D-2.2-06** **The SZD source typology**, "from handwritten Kurrent through typescripts, forms, tables, and proofs to newspaper material and heterogeneous compilations". NEW says "heterogeneous material" in 2.3 and "heterogeneous facsimile scans" in 4.2. Kurrent appears nowhere in NEW.
- **D-2.2-07** **The vagueness-propagation examples**, "an unexplained absence may be rendered as zero; an uncertain date may become a precise point; and a generic instruction to 'show relationships' may produce directionality or causal implications not warranted by the data". NEW keeps the undefined category and the abstract consequence.
- **D-2.2-08** **The three modes of Exploration** as a named structure, and the outputs of the deterministic mode, "compact aggregations, inventories, anomalies, value distributions, or schema-versus-corpus comparisons", as well as the LLM mode's "provisional interface concepts".
- **D-2.2-09** The routing of generated representation proposals into the design documents of Distillation, with the forward reference to the epistemic treatment.
- **D-2.2-10** "Knowing what the data cannot support is as important as identifying what can be built from them" survives, but the paired statement that Exploration's central question is not merely whether an interface can be built is condensed away.

#### From 2.3 Distillation into Promptotyping Documents

This section carries the highest density of dropped substance.

- **D-2.3-01** **The OWL and RDF ballast analysis**, that the full serialisations contained the structures required for interoperability, validation, and machine reasoning but also "namespaces, repeated axioms, and serialisation syntax that consumed context without contributing equally to the conceptual task".
- **D-2.3-02** **"Context-window constraints made selection necessary, but they did not determine what should be selected. That remained a scholarly and modelling decision."** The pragmatic-modelling conclusion survives without its premise.
- **D-2.3-03** **"The LLM reads about the data and writes code that reads the data."** OLD used this formula twice, in 2.3 and again in 3.2, as the compact statement of the central arrangement. NEW restates the arrangement descriptively and loses the formula.
- **D-2.3-04** "A description adequate for generating a statistical overview may not be adequate for modelling uncertainty, constructing an edition interface, or verifying a transformation pipeline."
- **D-2.3-05** The definition of a Promptotyping Document and its seven knowledge kinds, "research data, domain context, requirements, design, process, agent behaviour, or verification".
- **D-2.3-06** **The Markdown justification paragraph in full.** "Markdown is not epistemically privileged, nor does it provide a formal guarantee of precision. Its role is practical", with the four reasons (readable without specialised software, versionable in Git, processable by coding agents without a conversion layer, sufficiently structured for headings, lists, tables, examples, metadata, and cross-references) and the conclusion that it "reduces the format boundary between the scholar's description and the agent's working context". NEW replaces this with a claim of document-environment neutrality (footnote 15), which is a different position.
- **D-2.3-07** **Dual readability** as a named property, and the two-reader characterisation, "The scholar reads to determine whether data, requirements, and decisions have been represented appropriately. The agent reads to determine how to act."
- **D-2.3-08** The alternative names for the requirements document, `specification.md` and `user-stories.md`.
- **D-2.3-09** The contents of `data.md` beyond structure and semantics, "compact examples, element or field inventories, mappings to standards, controlled vocabularies, and warnings about exceptional cases".
- **D-2.3-10** The contents of `journal.md` beyond four items, "sessions", "model and tool use", "handovers".
- **D-2.3-11** The contents of the action document beyond four items, "testing strategy", "file boundaries", "coding conventions", "verification checkpoints", "required documentation behaviour".
- **D-2.3-12** "What matters is that the relevant knowledge functions are present and that **their status and provenance are clear**."
- **D-2.3-13** **The four concrete design-document requirements**, that dating uncertainty remain visible as an interval, that missing values not be silently excluded, that a graph not imply directionality absent from the sources, and that contested categories remain distinguishable from factual classifications. NEW keeps uncertainty, missingness, and provenance as an abstract triple.
- **D-2.3-14** "The purpose is not to guarantee that the artefact will be epistemically adequate. It is to make the project's representational decisions available for scrutiny and correction."
- **D-2.3-15** **Components of the SZD verification concept**, the "ground-truth strategy", the "external quality signals produced independently of the transcription step", and "cross-model comparison".
- **D-2.3-16** **The SZD design requirement that every transcription be displayed beside its facsimile** so that claims about the text remain inspectable against the source.
- **D-2.3-17** The lineage of the typology, "The distinction adapts the established separation between declarative and procedural knowledge and adds a process layer for preserving how and why the work developed."
- **D-2.3-18** Declarative documents' further examples, "editorial guidelines, mapping rules, verification concepts, and descriptions of project pipelines", and their **durability claim**, "Their content should survive changes in code, model version, or tool because it expresses the maintained project description rather than one particular execution."
- **D-2.3-19** "Curated learnings" as a process-document form, and **"context memory"** as the name for what process documents plus Git history constitute.
- **D-2.3-20** Action documents specifying "role or permission boundaries in multi-agent projects".
- **D-2.3-21** **The curated-versus-generated provenance distinction.** OLD named both sides and gave an operational test, "whether the next execution of that command will overwrite the file". NEW keeps the generated side as *derived context artefacts*, loses the curated side, the pairing, and the test.
- **D-2.3-22** "Generated documents make **Distillation a build-time stage** as well as a scholarly writing practice", together with the handling rules that such reports be committed, clearly marked, and not edited manually.
- **D-2.3-23** **The document-provenance disclosure rule, in full.** "Because Promptotyping Documents may themselves be drafted, revised, or generated with model assistance, their provenance belongs to the method. A document should disclose whether its claims are curated by a person or rendered by a named process, and under which model and tool conditions it was produced. Model assistance does not make a document generated in this sense if a person remains responsible for the judgement it formulates." This is a normative rule of the method with no counterpart in NEW, and it is the rule the repository's own `generated-with` frontmatter field implements.
- **D-2.3-24** **The `knowledge/` folder** as a named element of the method, "the part of the work that outlasts the current chat or agent session and that can be read, checked, cited, and handed over", with the dependency on "a discipline of writing back". The string `knowledge/` does not occur in NEW.
- **D-2.3-25** **The public template layer.** "The public Promptotyping templates consolidate document functions that recurred across multiple projects. They remain revisable as further use shows which distinctions projects can sustain in practice. **Documents may declare the template they instantiate through a persistent reference**, allowing readers and agents to retrieve the current specification of that document function." The `template:` mechanism, on which the site's entire anchor scheme and the sixteen published template URLs rest, no longer appears in the paper. NEW mentions "document templates" only in 5.2 as material for a transfer study.
- **D-2.3-26** **Verification Documents** as a document type. "These record a claim, the materials against which it was checked, the procedure used, and the resulting verdict. Verification can therefore apply not only to generated artefacts but also to factual claims made about projects and the method. **Selected factual claims in this paper are accompanied by corresponding records in the companion repository.**" NEW mentions a verification record once, as an example of a document combining two types, and never introduces the type. The self-referential claim survives only in the AI Use section, in weaker wording.
- **D-2.3-27** **The machine-actionable DMP contrast** (Miksa et al. 2019), with the conclusion that Promptotyping Documents are operative in implementation sessions and that "documents that do not support that work are revised". The operative-not-retrospective claim survives in NEW 2.1 without the contrast and without the citation.

#### From 2.4 Agentic Implementation and Verification

- **D-2.4-01** "Under continuous prompt-level direction, the researcher carried the coherence of the work, supplied missing context, and decided each next step."
- **D-2.4-02** The characterisation of Spec-Driven Development frameworks as **separating stated intent from generated code**.
- **D-2.4-03** Promptotyping's differentiators against Vibe Coding as a named list, "the preparation of data and context, persistent specifications, **versioned process memory**, and defined verification checkpoints", and the retained exploratory mode "in which alternatives can be produced before requirements are settled".
- **D-2.4-04** **Visual feedback as a named form of feedback**, with screenshots as its instrument and its justification, "many failures are not represented in formal code correctness: content may be clipped, hierarchy may be unreadable, a filter may technically work but communicate the wrong relation, or a conventional representation may contradict the design principles". NEW has one clause about visual and interactive feedback and no failure modes.
- **D-2.4-05** OLD footnote 12, the citation of decision E66 as a project record (`zbz-ocr-tei/knowledge/decisions.md`, 26 May 2026, "cited as a project record rather than as a general scholarly source"). NEW states E66 twice with no source at all. This is the paper's most consequential single case finding and it is now unanchored.
- **D-2.4-06** **The Strutz framework passage in full.** The five separated dimensions (syntactic validity, source fidelity, schema compliance, structural fidelity, semantic recognition); the benchmark's composition (100 plain-text letter transcriptions, manually curated TEI reference documents, 400 outputs from four LLMs across five prompt scenarios, dimension-specific results); the mapping of its parts onto deterministic validation, assessment evidence, and expert verification; and the conclusion that it is "an external, domain-specific example of scalable checking that does not transfer scholarly authority to the model". This was the paper's only independently published external corroboration of its checking architecture. Both Strutz entries are now orphans.
- **D-2.4-07** The two verification examples, "The existence of a working map does not establish that its spatial representation is appropriate. The presence of a network edge does not establish that the underlying historical relation has been interpreted correctly."
- **D-2.4-08** **"Verification is therefore not an inefficiency left behind after automation. It is the scholarly labour through which an artefact becomes acceptable."**
- **D-2.4-09** **Confabulation** as a named failure mode. NEW describes the behaviour ("fill a gap with a plausible continuation") without the term.
- **D-2.4-10** "Competence therefore develops through work with the particular systems, data, and task types involved."
- **D-2.4-11** **The per-phase allocation of the Critical Expert's work**, "In Exploration, the expert judges proposals. In Distillation, they decide which project knowledge must remain available. In Implementation, they verify the artefact and determine whether corrections belong in the specification, the assumptions about the data, the source preparation, or the implementation instructions."
- **D-2.4-12** **The two scopes of write-back** as a general mechanism, project-level correction to one knowledge base against method-level correction to the general templates or action rules. NEW keeps the ZBZ instance in the Figure 4 caption and drops the general statement.
- **D-2.4-13** **The deferred-inspection rule.** "A first pass may deliberately prioritise seeing an artefact run, but any deferred inspection must be completed before the artefact is accepted, **used as evidence, published, or handed over**." NEW keeps bounded increments and drops the obligation and its four triggers.
- **D-2.4-14** **The weaker identification mechanisms for an accepted state**, "a commit SHA linked to a dated journal entry, a version field in document frontmatter, a numbered and dated decision record, or a dated iteration designation", the assessment that these are weaker than an archived release because they do not freeze all components, the disclaimer that `v0.0.1`, `v0.0.2`, and `v0.1.0` are illustrative rather than prescribed, and the minimum requirement of "a durable, unambiguous reference to the accepted state".
- **D-2.4-15** The **lead agent coordinating sub-agents** responsible for separate components, data domains, or verification tasks. NEW says only that additional agents may be assigned to components or checks.
- **D-2.4-16** "Multi-agent organisation … increases the need for explicit role definitions, knowledge boundaries, handovers, and verification. **The researcher's methodological task shifts from steering a single executing instance towards designing a small work organisation.**"
- **D-2.4-17** The SZD division of labour stated per party, the scholar determining purpose, modelling source types, specifying editorial and verification rules, and authorising output, against the agent implementing pipelines, interfaces, transformations, and checks within those specifications.

#### From chapter 3

- **D-3.0-01** **The opening claim of the chapter.** "Promptotyping does not automate a neutral passage from research data to software. No such neutral passage exists: research data are modelled representations, and every computational form derived from them selects, organises, and operationalises particular distinctions." NEW opens with capability evidence instead. A weakened form appears in the conclusion.
- **D-3.1-01** Hinrichs, Forlini, and Moynihan 2019 with their claim that visualisation is valuable as **provisional construction** rather than only as a stable final representation. The citation is gone from text and footnotes.
- **D-3.1-02** Whitelaw 2015 and Galey and Ruecker 2010 as author-date citations. They survive as unreferenced name mentions in footnote 26.
- **D-3.1-03** "A digital research artefact is … not a transparent container through which findings are merely displayed", with the five interpretative decisions, "Selecting which entities become nodes, assigning direction to an edge, aggregating observations into a category, arranging events on a timeline, or representing uncertainty through a particular visual form", and their consequence, "which relations become visible, which comparisons become possible, and which absences recede from view".
- **D-3.1-04** **Drucker 2014 and the critique of inherited visual conventions**, "familiar graphical forms may imply precision, completeness, comparability, directionality, or categorical stability that humanistic data do not warrant", with the generated forms it applies to (bar chart, timeline, map, dashboard, network). Drucker 2014 is now an orphan. NEW keeps only that generated artefacts may reproduce unexamined conventions.
- **D-3.1-05** **"Once such assumptions are stated in a design document, they become attributable scholarly claims rather than incidental consequences of a generated implementation."**
- **D-3.1-06** "The artefact and the documents can therefore be criticised together."
- **D-3.1-07** **The tool-criticism payload.** "Promptotyping provides this criticism with a project-level object: the versioned description from which the artefact was derived and against which its representational decisions can be examined." NEW moves tool criticism forward to 1.1 with different citations and drops the claim that Promptotyping supplies it with an object. Koolen et al. 2019 becomes an orphan, and van Es et al. 2018 is displaced by an uncited "van Es 2023".
- **D-3.1-08** "A technically adequate implementation is not necessarily an adequate resolution of the underlying scholarly problem. A functioning interface may still rest on inadequate categories, unsupported mappings, or an inappropriate model of uncertainty."
- **D-3.1-09** The three ways implementation becomes epistemically productive, "reveals characteristics of the data, consequences of a model, or alternatives for representing a research problem".
- **D-3.1-10** Goldschmidt's specific finding, that designers read information from their own representations that they did not consciously place there, and the four concrete forms of backtalk, "an unhandled state, an unsupported distinction, an implausible aggregation, or a conflict between the data model and its operational use".
- **D-3.1-11** "Backtalk therefore explains how Implementation can generate questions; Distillation and write-back explain how their answers become inspectable and reusable project knowledge."
- **D-3.2-01** "Their status depends not only on their contents but on the preparation, contextualisation, provenance, and durability through which findings can be examined and research processes reproduced or reused."
- **D-3.2-02** The CSV blindness example, "without knowing why its columns were selected, what an empty field means, which categories are interpretative, or what was excluded when the table was constructed".
- **D-3.2-03** The list of semantically explicit formats, "TEI, LIDO, CMIF, PAGE XML, RDF, and project-specific ontologies", and what they can represent, "entities, relations, constraints, provenance, controlled vocabularies, and uncertainty".
- **D-3.2-04** **The M³GIM semantic-explicitness example in full.** The vocabulary defining classes, properties, domains, ranges, typed date relations, controlled values, and alignments with the archival standard; the observation that these could be carried into a domain document with little interpretative reconstruction; the four things the vocabulary did not supply (the research question, the empirical shape of the project graph, deliberate absences, the reliability of an individual entry); and **the finding that formalising the vocabulary exposed modelling problems, including role values that became difficult to distinguish once the hierarchical context of the source had been removed**. The last is a documented case observation with no counterpart anywhere in NEW.
- **D-3.2-05** **The FAIR inference.** That data made interoperable through explicit structures and shared vocabularies provide more stable points of reference for subsequent descriptions and implementations, **read from the perspective of Context Engineering**, together with the explicit epistemic marking "This is an inference from the Promptotyping cases rather than a claim contained in the FAIR principles themselves."
- **D-3.2-06** **The contrary technical pressure of semantic richness.** That richly encoded XML and RDF serialisations may require substantially more context than a compact table or summary, and the conclusion, **"Semantic explicitness and direct suitability for an LLM context are therefore not the same property."**
- **D-3.2-07** The separation of the **source, contextual, and operational functions** of the material as a named three-way distinction.
- **D-3.2-08** "Distillation therefore does not reverse the explication achieved through semantic modelling. It reorganises that work for a different use … **The intellectual investment in making knowledge explicit can survive changes in its carrier.**"
- **D-3.2-09** **The Semantic Web genealogy** (Berners-Lee, Hendler, and Lassila 2001), with its precise demarcation, "The resemblance is genealogical rather than technically equivalent. Promptotyping does not depend on general-purpose formal inference over a complete graph. It uses explicit semantics to construct a task-specific context from which an agent generates deterministic operations over the underlying data." The reference becomes an orphan.
- **D-3.3-01** Translation between domain specialists and developers as **a negotiation** "across vocabularies, assumptions, practices, and standards of adequacy".
- **D-3.3-02** The document-by-document account of what each mediates (data document, requirements document, design document, action document) as shared objects between the two kinds of judgement.
- **D-3.3-03** "Their authority does not reside in the files themselves."
- **D-3.3-04** **Stachowiak's three criteria applied one by one**, representation of originals such as source structures, research practices, requirements, and intended operations; abbreviation by retaining the attributes relevant to the purpose; pragmatism through creation for particular addressees, periods, and uses. NEW retains the citation and the word "abbreviate".
- **D-3.3-05** **"Abbreviation provides the theoretical basis for Distillation independently of technical context limits. Omitting information that does not contribute to a particular purpose is constitutive of modelling rather than merely an accommodation to a token budget."** This was the theoretical grounding of Distillation.
- **D-3.3-06** "Pragmatism explains why the same project may require different documents or different levels of detail when its question, artefact, agent, or human addressee changes."
- **D-3.3-07** **The ontology demarcation** (Gruber 1993). The definition of an ontology as an explicit specification of a conceptualisation, the statement that Promptotyping Documents are not ontologies and claim no OWL or RDF semantics, and their placement "at the semi-formal end of the representational spectrum". Gruber 1993 becomes an orphan.
- **D-3.3-08** **The precise negative demarcation and its justification.** "Promptotyping Documents support no formal inference, no automated consistency checking, and no validation in the sense of a reasoner or schema … **This limitation is accepted deliberately. Formalising the documents further would narrow the circle of contributors able to read, challenge, and maintain them, and it would displace the negotiation between scholarly and technical judgement that the documents exist to support. The residual ambiguity of semi-formal description is therefore not only a deficiency to be engineered away. It marks the point at which interpretation remains open and verification remains necessary.**" NEW keeps "supports no formal inference" as a clause and drops the argument for why the documents are deliberately not formalised further.
- **D-3.3-09** "Generative implementation reduces the manual formalisation required between this semi-formal project model and a running system."
- **D-3.4-01** The fourth amplification instance, **"Experience with recurrent model failures can be incorporated into action and verification documents rather than remaining tacit knowledge held by one operator."**
- **D-3.4-02** "Its limits become visible when implementation produces a question or failure for which the documents contain no adequate answer."
- **D-3.4-03** **The Notker distributed-judgement case in full.** The commissioning scholar supplying the internally annotated source document, deciding how textual layers, language changes, and sigla were to be modelled, and verifying generated TEI output against his editorial intentions; the author decomposing the workflow, directing the agentic implementation, and translating accepted editorial decisions into implementable instructions and deterministic checks; and the scholar's judgement remaining decisive where adequacy could not be expressed as rules, "including the examination of the resulting edition interface against the intended editorial model". This was the paper's clearest documented evidence that the Critical Expert role can be distributed. NEW 4.3 retains one sentence saying that responsibility can be distributed.
- **D-3.4-04** **The competence boundary of the method.** "Templates and instructions can support agentic-engineering judgement, but they cannot substitute fully for the ability to diagnose technical behaviour, evaluate a workflow, or formulate an actionable correction. The boundary of the method therefore depends not only on whether a scholar can state a requirement, but also on whether the resulting implementation can be inspected and steered responsibly."
- **D-3.4-05** **The authorship principle.** "Tools may contribute formulations, code, mappings, designs, and evaluations, but the persons presenting an artefact remain accountable for the scholarly claims it carries. **Responsibility follows from the act of acceptance and publication, not from exclusive manual production.**"
- **D-3.5-01** **Iteration acceptance and publication as a named distinction.**
- **D-3.5-02** What readers of a published artefact require, "a stable reference, accessible data where legally and ethically possible, an account of provenance, and sufficient documentation to understand the decisions embodied in the artefact".
- **D-3.5-03** **The separate publication tasks**, "archived releases, persistent identifiers, citation metadata, licensing, accessibility, and preservation".
- **D-3.5-04** **"A published digital research artefact should identify the promptotype from which it was released."**
- **D-3.5-05** "What publication changes is not the possibility of revision but the obligation to preserve and identify the released state."
- **D-3.5-06** **The status disclosure rule.** "The status of a promptotype must therefore be stated explicitly: accepted for which purpose, against which criteria, by whom, and whether it has been published or transferred into maintained software."
- **D-3.6-01** The full list of what can be reconstructed, in particular **"the models and tools disclosed"**.
- **D-3.6-02** The condition on deterministic re-execution, "**Once accepted code, dependencies, and source data are versioned**, deterministic transformations can in principle be re-executed independently of the non-deterministic process that generated the code."
- **D-3.6-03** "The knowledge base adds a layer of reusability alongside the code by preserving the project logic from which a new implementation can be derived."

#### From chapter 4

- **D-4.1-01** **The evidential-status table, in full.** Seven rows with a per-case grading that NEW replaces with a general principle. The dropped gradings are these. SZD-HTR, "Documented project with restricted production data and public institutional context"; CorrespExplorer, "Public interface and public knowledge vault"; M³GIM, "Documented project; public availability varies by project component"; ZBZ OCR/TEI, "Public repository, public interface, institutional project page, numbered decision record"; Notker, "Proposal-stage promptotype documented through project records"; coOCR/HTR, "Public research-preview interface"; teiCrafter, "Public interface; current tool distinct from the earlier Custom GPT precursor". This is the single largest evidential loss in the revision, because the paper now asserts that evidential status differs without saying how it differs per case.
- **D-4.2-01** Verification Interfaces, "They create review points inside processing pipelines and keep uncertain or unchecked material distinguishable from authorised results."
- **D-4.2-02** Exploration Interfaces, the means ("filters, linked views, maps, timelines, networks, tables, and alternative forms of navigation"), the purpose beyond retrieval ("patterns, absences, concentrations, and possible relations"), and the three citations Whitelaw 2015; Roberts 2007; Windhager et al. 2019.
- **D-4.2-03** Edition Interfaces, what they connect ("facsimiles, translations, apparatus, annotations, variants, or correction functions") and **the claim that their interface decisions are editorial decisions** (Pierazzo 2015).
- **D-4.2-04** Capture Interfaces, "Difficulties encountered during capture can therefore reveal inadequacies in the schema, vocabulary, or modelling assumptions."
- **D-4.2-05** Scholarly Workbenches, the per-tool composition and the boundary claim, "Their significance lies not in replacing full editorial infrastructures but in making a constrained workflow inspectable and modifiable."
- **D-4.3-01** **The whole of OLD 4.3, Anatomy of an Iteration Across the Cases**, with Figure 3. The cross-case alignment of five projects across the forms of work is gone, as is the first of the two misunderstandings it prevented, "an iteration is not identical with one implementation session".
- **D-4.4-01** SZD, the source types in the case section, and the institutional framing, "The public Stefan Zweig Digital platform provides the institutional and archival context, while the production pipeline and data remain subject to project conditions."
- **D-4.4-02** **The infrastructure-scale burden.** "It also shows the increasing organisational burden of Promptotyping at infrastructure scale: source routing, ground-truth construction, data management, interface curation, and expert verification remain substantial work." No equivalent in NEW.
- **D-4.5-01** CorrespExplorer's documented knowledge base, "user stories, data and design descriptions, a phase-based journal, and browser tests".
- **D-4.5-02** The twelve coordinated views as a stated figure, and the reflection "The methodological result was not the number of views."
- **D-4.5-03** **The convention-reproduction example.** "Many initial visualisations reproduced established conventions of correspondence research. A heatmap or chord diagram could be technically plausible while remaining poorly matched to the question, the scale of the data, or the treatment of uncertainty."
- **D-4.5-04** "Generative abundance does not remove scholarly selection. The model can broaden the set of available representations; the Critical Expert decides which representations are warranted, useful, and adequately specified." NEW keeps the first half of the mechanism and drops the formulation.
- **D-4.6-01** **The M³GIM cycle notation**, `data model → interface and capture environment → interaction finding → documented modelling decision → revised data model and artefact`.
- **D-4.6-02** "Questions that remained abstract in schema discussions became concrete when records had to be displayed, filtered, connected, or entered."
- **D-4.6-03** **The model-drift warning.** "The decision register and journal are methodologically important because **interface convenience can otherwise drive unexamined model drift**. A local display problem does not necessarily justify changing the conceptual model." NEW keeps the sorting of findings into model or interface and drops the reason it matters.
- **D-4.6-04** "This prospective use increases the value of the artefact for communication and planning, while making the provisional status of the data and interface especially important."
- **D-4.7-01** **The ZBZ editorial framing.** The institutional page describing a work-in-progress edition "whose texts are encoded in TEI/XML and follow the transcription principles of the **Deutsches Textarchiv**", and the pipeline target "TEI in the **DTA Basisformat**". Neither DTA nor Deutsches Textarchiv occurs in NEW. PDF as the pipeline's input format is also gone.
- **D-4.7-02** "The infrastructure is organised around the judgement of the editors rather than around autonomous model approval."
- **D-4.7-03** **The negative-case framing.** "This is the defining loop of Promptotyping in a negative case: the implementation reveals that the documented work organisation is inadequate; the relevant project knowledge is corrected; the artefact is then rebuilt or revised from that correction."
- **D-4.8-01** **The Notker source identification**, "Psalm 2 from **Notker III of St Gall's Old High German Psalm commentary**". NEW says "a deliberately bounded sample from Psalm 2".
- **D-4.8-02** What the editorial guidelines covered, "Latin psalm text, Old High German translation, commentary, language changes, textual functions, source references, and marginal sigla".
- **D-4.8-03** "TEI-XML was specified as the canonical encoded source" in the body. The figure caption still says "a TEI source model".
- **D-4.8-04** What the interface connected, "a modern German translation, facsimile access, patristic sources, comparisons of psalm witnesses, and a parallel textual tradition".
- **D-4.8-05** **The residual open question**, "Several questions remained with the commissioning scholar, including context-dependent interpretation of marginal sigla."
- **D-4.8-06** "The same artefact would require different criteria if it were accepted for publication, sustained editorial work, or corpus-wide research use."
- **D-4.9-01** "coOCR/HTR and teiCrafter are related but distinct workbench forms. **They should not be merged into one project history.**"
- **D-4.9-02** **The three-valued result vocabulary of coOCR/HTR**, results "represented as confident, uncertain, or problematic rather than as unexplained percentage scores", and the separation of document viewer, transcription editor, and validation functions.
- **D-4.9-03** "The project is a developmental precursor for several later Promptotyping distinctions", and the interface acting as backtalk, "incomplete states and source variation forced distinctions that an abstract description could leave unresolved".
- **D-4.9-04** "API conditions" from the list of what a client-side workbench cannot solve.
- **D-4.9-05** teiCrafter's early stage described in substance, "An early experimental Custom GPT **transferred a mapping-rule approach for transforming unstructured correspondence text into TEI**. That experiment belongs to the developmental history of externalising transformation rules." NEW says only "an early Custom GPT experiment". The link back to the Schuchardt case (D-2.0-02) is broken on both sides.
- **D-4.9-06** teiCrafter presented by Digital Humanities Craft, and the Strutz 2026 cross-reference at this point.
- **D-4.9-07** "The workbenches demonstrate task-level operations, whereas the pipelines organise several such operations across larger production processes." The boundary to ZBZ and SZD is no longer drawn.
- **D-4.10-01** **The "Dominant work" column of the cross-case table**, which mapped each case onto forms of work (SZD "Preparation through Verification", CorrespExplorer "Exploration", M³GIM "Exploration and Capture", ZBZ "Implementation and Write-back", Notker "Distillation and purpose-specific Acceptance", coOCR/HTR "Exploration and Verification", teiCrafter "Distillation and Verification"). With OLD 4.3 also gone, the manuscript no longer relates any case to the four forms of work.
- **D-4.10-02** **The separate "Verification and acceptance" column**, whose per-case verdicts are gone: SZD "Human, agent, and unchecked states remain distinct"; CorrespExplorer "Expert selection of retained views"; M³GIM "Project team distinguishes model refinement from interface convenience"; ZBZ "Only accountable editors authorise verification and acceptance"; coOCR/HTR "Expert correction remains necessary"; teiCrafter "Editor verifies textual, structural, and semantic fidelity".
- **D-4.10-03** coOCR/HTR's data state narrowed from "User-supplied images, PAGE XML, IIIF" to "User-supplied images and document data".
- **D-4.11-01** **The two concrete collaboration allocations.** "In Notker, the commissioning scholar retained philological authority while agentic-engineering judgement remained with the author. In ZBZ, the partner institution defines editorial acceptance while the pipeline and interfaces organise evidence for that decision."

#### From chapter 5

- **D-5.3-01** "The technical limits of the static artefact form are stated in Section 4.1 and are not repeated here." The cross-reference was already wrong in OLD, so the deletion removes a defect together with the topic. No treatment of static-artefact limits survives.
- **D-5.3-02** **The unrecognised-labour clause.** "… and whether it is displaced onto researchers or collaborators whose labour is not recognised in conventional accounts of software development."
- **D-5.3-03** "Subscription costs, infrastructure concentration, and unequal access reinforce existing differences in technical and scholarly capacity."
- **D-5.3-04** **The training-data privilege mechanism.** "Training data and model performance also privilege material that is digitised, published, and well represented in **dominant languages and formats**." NEW keeps the resource-side asymmetry and drops the corpus-side one.
- **D-5.3-05** "This claim is presented as a bounded interpretation and a priority for future research, not as an empirical result established by the project inventory."
- **D-5.3-06** **Confidentiality and copyright** as named constraints; "institutional agreements", "model provider", and "applicable research-ethics requirements" from the permissibility conditions; "culturally sensitive" and "contractually restricted" from the data kinds; "restricted tools" and "additional agreements" from the remedies.
- **D-5.4-01** Three of the six elements of the humanistic difficulty profile, "dense domain semantics, uncertain identification, incomplete data".
- **D-5.4-02** **The criteria for the central open question**, "the quality of the knowledge base, the ability to identify errors in the generated artefact, the degree of independence after initial support, and the appropriateness of the resulting representation".
- **D-5.4-03** "Acceptance criteria" from what the knowledge base preserves for a handover.
- **D-5.5-01** Knowledge-base quality, "complete enough for their purpose, internally coherent" and "whether contradictory statements can be detected and reconciled".
- **D-5.5-02** Promptotype quality, "accessibility" and "the clarity of the documented grounds of acceptance", and the reverse case "a plausible representation may remain unusable or technically fragile".
- **D-5.5-03** Method quality, the distribution of effort **across the named forms of work** and "recurrent error categories".
- **D-5.5-04** **The three-condition design of the follow-up study.** "conventional work without generative assistance, prompt-based work without a maintained project knowledge base, and Promptotyping with the four forms of work and explicit acceptance records", together with the three participant groups "domain experts without programming backgrounds, hybrid scholar-developers, and Research Software Engineers". NEW says "participants with different levels of technical expertise" and names no conditions. This removes the operational core of the proposed study.
- **D-5.6-01** "It treats that passage not as a neutral technical conversion but as a sequence of scholarly and engineering decisions."
- **D-5.6-02** The closing paragraph's programme, "Further work should test Promptotyping with independent researchers, compare it with alternative development practices, establish appropriate criteria for knowledge-base, promptotype, and artefact quality, and examine where domain experts can work without sustained hybrid support. **The public method specification and templates provide a basis for that work, while versioned project repositories preserve the documented practice from which the method was consolidated.**" The pointer to the public specification and the template catalogue is gone from the conclusion, as it is from 2.3 (D-2.3-25).
- **D-5.6-03** "The documented projects demonstrate the feasibility and breadth of the method **across heterogeneous data types and several interface functions**."

#### From the apparatus sections

- **D-A-01** **The Figure Generation Disclosure section, in full**, with footnote `[^figure-prompts]`. It disclosed that Figures 1 to 6 were generated and iteratively revised with ChatGPT Images 2.0 from author-written specifications, that their process records, intermediate versions, and accepted files are documented in the companion repository under `assets/figures/` (`manifest.yaml`, `prompts/`, `candidates/`), that the figures form part of the paper's own Promptotyping iterations, and that the author remains responsible for their conceptual content, terminology, selection, and final form. This section was the paper's self-application of its own provenance requirement (see D-2.3-23), and removing both leaves the manuscript with no disclosure of figure provenance.
- **D-A-02** The List of Figures, six short captions.

## 3. Figures

OLD embedded six figures with repo-relative paths under `assets/figures/`. NEW carries five bracket placeholders and no image reference at all. The mapping is unambiguous on all five, because the NEW captions are revisions of the OLD captions of the same figures.

| NEW placeholder | NEW caption subject | Canonical file | Was OLD figure |
| :---- | :---- | :---- | :---- |
| `[Figure 1 here]` | The Promptotyping method | `assets/figures/figure-01-promptotyping-method.png` | Figure 1 |
| `[Figure 2 here]` | Project knowledge, working context, implementation, and authority | `assets/figures/figure-02-knowledge-context-authority.png` | Figure 2 |
| `[Figure 3 here]` | Prospective Promptotyping during modelling and data capture in M³GIM | `assets/figures/figure-04-m3gim-loop.png` | Figure 4 |
| `[Figure 4 here]` | The ZBZ OCR/TEI workflow before and after decision E66 | `assets/figures/figure-05-zbz-e66.png` | Figure 5 |
| `[Figure 5 here]` | Purpose-specific acceptance in the Notker edition case | `assets/figures/figure-06-notker-acceptance.png` | Figure 6 |

**Without a NEW placeholder: OLD Figure 3, `assets/figures/figure-03-comparative-iterations.png`, "Comparative anatomy of five Promptotyping iterations".** It fell with OLD section 4.3 (D-4.3-01). The file stays in the repository with `status: accepted` and `author_verified: true` in `assets/figures/manifest.yaml`, so a restoration decision on D-4.3-01 restores the figure without regeneration. If the section stays dropped, the manifest entry needs a status change, otherwise the figure register claims an accepted figure that the manuscript does not carry.

Recommended references, matching the convention in `CLAUDE.md` that figures are addressed repo-relative from the manuscript and resolved on the site through `404.html`:

```
![The Promptotyping method](assets/figures/figure-01-promptotyping-method.png)
![Project knowledge, working context, implementation, and authority in Promptotyping](assets/figures/figure-02-knowledge-context-authority.png)
![Prospective Promptotyping during modelling and data capture in M³GIM](assets/figures/figure-04-m3gim-loop.png)
![The ZBZ OCR/TEI workflow before and after decision E66](assets/figures/figure-05-zbz-e66.png)
![Purpose-specific acceptance in the Notker edition case](assets/figures/figure-06-notker-acceptance.png)
```

Two consequences follow if the placeholders are filled in this order. The file numbers and the caption numbers diverge from Figure 3 onwards, which the manifest currently does not record; either the manifest gains a `manuscript_number` field beside `number`, or the files are renumbered, which breaks the candidate and prompt-record links. Keeping the filenames and recording the divergence is the cheaper option. Second, the NEW "Figure files" note states that the figures "are referenced through relative Markdown paths" while the manuscript contains no reference at all, so that note is currently false.

## 4. References and footnotes

The NEW reference list is the OLD list plus two entries. It was not revised with the text, so the citation layer and the text have come apart in four distinct ways.

### 4.1 Works cited in OLD but no longer cited in NEW

All of these remain in the NEW reference list as orphans. The dropped passage is named in brackets.

Alenezi 2026 [D-1.2-04] · Berners-Lee, Hendler, and Lassila 2001 [D-3.2-09] · Broy and Kuhrmann 2021 [D-1.1-13] · Cao 2026 [D-1.2-04] · Drucker 2014 [D-3.1-04] · Flanders and Jannidis 2015 [D-1.1-01] · Galey and Ruecker 2010 [D-3.1-02, name survives in footnote 26] · Gruber 1993 [D-3.3-07] · Hinrichs, Forlini, and Moynihan 2019 [D-3.1-01] · Jetter 2022 [D-1.1-13] · Koolen, van Gorp, and van Ossenbruggen 2019 [D-3.1-07] · Miksa et al. 2019 [D-2.3-27] · Pierazzo 2015 [D-4.2-03] · Roberts 2007 [D-4.2-02] · Salinas, Cueva, and Paz 2020 [D-1.1-13] · Siemens 2009 [D-1.1-15] · Strutz 2025 [D-2.4-06] · Strutz 2026 [D-2.4-06, D-4.9-06] · TEI Consortium 2026 [D-1.1-02] · Whitelaw 2015 [D-3.1-02, D-4.2-02, name survives in footnote 26] · Windhager et al. 2019 [D-4.2-02] · van Es, Wieringa, and Schäfer 2018 [D-3.1-07, displaced by an uncited "van Es 2023"] · Pollin 2026b [now cited in full form in footnote 25 only, never author-date].

Two further works lost their footnote anchor rather than an author-date citation. Pollin, Steiner, and Zach 2023 (FORGE) never had a list entry and is gone with OLD footnote 6 [D-2.0-02]. The ZBZ decision record `decisions.md` E66 is gone with OLD footnote 12 [D-2.4-05].

### 4.2 Works cited in NEW but absent from the NEW reference list

Six author-date citations in the running text resolve to nothing.

| Citation | NEW location | Note |
| :---- | :---- | :---- |
| Pichler and Reiter 2022 | 1, paragraph 1 | Present in the list. Cited in NEW, uncited in OLD, so this one is correct. |
| **Ciula et al. 2023** | 1.1, on modelling | **No entry.** |
| **Fickers 2020** | 1.1, tool criticism | **No entry.** |
| **van Es 2023** | 1.1, tool criticism | **No entry.** The list carries van Es, Wieringa, and Schäfer 2018, a different work. |
| **Herrmann et al. 2023** | 1.1, tool criticism | **No entry.** |
| **Russell and Norvig 2020** | 2.1, on the knowledge-base concept | **No entry.** Carries the definitional load for the term "knowledge base". |
| **Lewis et al. 2020** | 2.1, retrieval-augmented generation | **No entry.** |
| **Karpathy (2026)** | footnote 15 | **No entry and no full citation in the note.** Author and year only. |

### 4.3 Works in the NEW reference list never cited in the NEW text

Thirty-three of sixty-seven entries are uncited. Twenty-five became orphans through this revision, the twenty-three works of section 4.1 above plus Pollin 2023 and Pollin 2026c from 4.4. Eight were already uncited in OLD and are inherited, namely Andorfer 2026, Berners-Lee with Witt 2025, Chue Hong et al. 2022, Holmes and Takeda 2023, Marwick et al. 2018, Risam and Gil 2022, Pollin 2024, Pollin 2025c. The last two are anchored differently. Pollin 2024 lost its footnote [D-2.0-08]; Pollin 2025c has never been cited in either version.

One of the thirty-three hides behind a near-match. A mechanical check that pairs surname with year reports van Es, Wieringa, and Schäfer 2018 as cited, because "van Es 2023" stands close by in 1.1. The two are different works, so the 2018 entry is uncited in fact.

### 4.4 Further apparatus defects

1. **Footnotes 22 and 23 are word-identical.** Both carry the proprietary-LLM, vendor-lock-in, and research-software-sustainability block with the same four sources. They sit on different claims, portability of the development process (22) and sustainable research software (23), and neither claim is served well by a note covering both. Known before intake.
2. **Footnotes 12 and 24 both introduce Kwa et al.** as if for the first time, with the same finding under two names, "task-completion time horizon" (12) and "50%-task-completion time horizon" (24). Footnote 12 gives `arXiv:2503.14499`, footnote 24 gives no identifier. Known before intake.
3. **The apparatus runs on two incompatible systems.** The body cites author-date against the reference list, while the footnotes carry full bibliographic citations for at least eighteen works that never enter the list, among them Kwa et al., Chen et al., Karpathy, Hitzler, Hettrick et al., Baltes/Cheong/Treude, Afroz et al., Dingemanse, ALLEA, DFG, European Commission (ERA Living Guidelines), the High-Level Expert Group, McLoughlin et al., Opara-Martins/Sahandi/Tian, Rosado de Souza et al., Barker et al., Becker et al., and Pollin's KONDE Weißbuch entry. A reader cannot tell from a name whether it is findable in the list.
4. **Carver et al. 2022 is cited twice in two systems**, as an author-date citation in 1.1 and again in full bibliographic form inside footnote 18.
5. **Pollin 2024 and Pollin 2026c are the same work.** Both are the workshop series "Angewandte Generative KI in den (digitalen) Geisteswissenschaften", entered under two years with two different Zenodo DOIs (`zenodo.org/records/20529814` and `10.5281/zenodo.10647754`). Neither is cited. One of them has to go, and the surviving one needs a decision on which DOI is the concept DOI.
6. **Pollin 2023 was added but is never cited.** It is the psychology talk that OLD footnote 7 carried [D-2.0-04]. The entry now has a URL (`chpollin.github.io/GM-DH/`) that the OLD footnote did not have, so the intake added evidence and removed its anchor in the same move.
7. **The TEI Consortium entry regressed.** OLD gave Version 4.12.0, 28 July 2026; NEW gives Version 4.11.0, 18 February 2026. The entry is also now uncited. `knowledge/verification-draft-sources.md` carries a verdict row for this source and needs re-checking against whichever version survives.
8. **The Cao 2026 title changed** from "Agentic Software: How AI Agents Are Restructuring the Software Paradigm" to "The End of Software Engineering: How AI Agents Are Fundamentally Restructuring the Software Paradigm", same DOI. One of the two is wrong. The entry is uncited either way, and `verification-draft-sources.md` carries a verdict on it.
9. **Strutz 2026 lost its issue number**, "12 (1): 39" in OLD against "12: 39" in NEW.
10. **The Pollin 2026c entry has literal asterisks.** `\*Workshopreihe …\*` will render as visible asterisks rather than italics.
11. **"Two blog posts" followed by three citations.** Chapter 2's lead-in reads "first used in my dissertation and subsequently developed in two blog posts (Pollin 2025a; Pollin 2025b; Pollin 2026a)". The dissertation is 2025a, so two citations remain for "two blog posts", and Pollin 2026a is a contribution to a scholarly portal (L.I.S.A., Gerda Henkel Stiftung) rather than a blog post. OLD footnote 8 distinguished the two correctly.
12. **The case is named inconsistently.** Section 3.1 says "the Stefan Zweig OCR/HTR project" where the rest of the manuscript says SZD-HTR or "Stefan Zweig Digital HTR pipeline".
13. **"Two years" against "since 2023".** The abstract says "two years of recorded experimental practice", chapter 2 says "since 2023". Inherited from OLD, uncorrected.
14. **The Figure files note contradicts the manuscript** (see section 3 above).
15. **Google Docs escaping runs through the whole file.** Section numbers appear as `1\.`, years as `2026\.`, the placeholders as `\[Figure 1 here\]`, underscores in DOIs as `\_`. Heading text such as `# 1\. Introduction` feeds the site's heading-ID generator, so the escapes have to come out before `paper-draft.md` replaces `paper.md`, otherwise the published `#abschnitt-{n}-{slug}` anchors change.

Positive findings on the apparatus. Footnote markers and definitions are complete and in order in both versions, 33 in NEW and 19 in OLD, with no orphan marker and no unused definition. OLD's cross-reference defects were partly repaired: OLD 5.1 and 5.6 pointed at "Section 4.7" for findings that sat in 4.10, and NEW points at 4.1, correctly. All other NEW cross-references (2.3 to 4.2, 2.4 to 2.3, 5.1 to 3.3 and 4.1) resolve.

## 5. New content in NEW

Listed briefly, since none of it requires a restoration decision.

- **A research question** in the introduction, how scholars, research software engineers, and AI agents can collaborate through documented project knowledge without transferring responsibility to the agents.
- **The probabilistic recognition step** for unstructured material, distinguished from deterministic mapping of structured material, with Pollin et al. 2025 and a definition of "workflow" in footnote 5 pointing to the KONDE Weißbuch.
- **A context-dependent definition of research data** grounded in Geiger 2024, and modelling grounded in Ciula et al. 2023 and Flanders and Jannidis 2019.
- **A tool-criticism block in 1.1** with three citations OLD did not use (Fickers 2020, van Es 2023, Herrmann et al. 2023), taking over the function of OLD 3.1's tool-criticism paragraph.
- **Four new explanatory footnotes in chapter 1**, Gephi (2), TEI (3), Semantic Web with Hitzler (6), FAIR (7).
- **The claim that implementation participates in determining the research question**, "Implementation thereby becomes part of determining both how researchers wish to work with their data and what those data can warrantably support."
- **Footnote 10**, that responsible use may mean declining to use an LLM, with a disclosure of why the paper focuses on frontier-capability models and what that focus does not endorse.
- **Footnote 11**, concrete harnesses at the time of writing (Claude Code, OpenAI Codex, Cursor).
- **Footnotes 12 and 13**, the task-completion time horizon (Kwa et al.) and long-horizon ML research engineering (Chen et al.) as evidence for the growing span of delegated work.
- **The knowledge base grounded in the AI-textbook sense** of an explicitly represented body of knowledge on which an agent operates (Russell and Norvig 2020).
- **Derived context artefacts** as a named category, and an explicit statement that Distillation does not require all source material to be reproduced in Markdown, with retrieval-augmented generation (Lewis et al. 2020) and direct file access as alternative context mechanisms.
- **Footnote 15** (Karpathy's wiki arrangement) and **footnote 16** (the source-versus-description separation as configurable, relevant to restricted material).
- **A fully worked SZD walk-through** as the spine of section 2.3, taking the case through Preparation, Exploration, Distillation, derived artefacts, Implementation, checking, and acceptance in one continuous argument. This is the largest structural gain of the revision.
- **An agent-role column** in the checking table, stating for each object of checking what an agent may permissibly do.
- **Section 2.4 in its entirety.** Research-software accessibility (footnote 18), *AI slop* as an informal term with two preprint studies (footnote 19), research integrity and generative AI (footnote 20, Dingemanse, ALLEA, DFG, ERA Living Guidelines), trustworthy AI (footnote 21, High-Level Expert Group), the evidence-against-authority distinction, vendor lock-in and sustainability (footnotes 22 and 23), and the explicit scope statement that Promptotyping is not a comprehensive framework for responsible AI or sustainable research software.
- **A capability-evidence opening for chapter 3**, task-completion time horizons and jaggedness as the empirical basis on which asymmetric amplification now rests, with footnotes 24 and 25. The concept moved from a limits observation in OLD 5.3 to a load-bearing part of the epistemic argument.
- **A three-case illustration in 3.1** (Notker, M³GIM, Stefan Zweig) of what operationalisation makes available, replacing OLD's abstract treatment.
- **Footnote 26**, an explicit statement of what the interface and visualisation traditions do and do not establish.
- **Footnote 27**, Becker et al.'s randomised finding that early-2025 AI tools increased task-completion time for experienced developers on mature repositories. This is counter-evidence that OLD did not carry.
- **Table 2**, the artefact forms as a table.
- **Two new closing arguments in 5.3.** That the change is modal rather than economic, since project-specific artefacts become practicable in settings that could not resource them at all, with the open question about settings that already have development capacity declared and not answered; and that more capable models make the method's provisions more consequential rather than less, because the distance between what a system can plausibly produce and what a scholar can responsibly accept grows.
- **Two reference entries**, Pollin 2023 and Pollin 2026c, both uncited.

## Verification

Both versions were read in full. The structural map, the dropped-item inventory, and the new-content list were compiled by reading, and were spot-checked mechanically for the terms most likely to have moved rather than vanished (`Promptotyping Document`, `Markdown`, `knowledge/`, `template`, `Semantic Markdown`, `Kurrent`, `Notker III`, `Wheaton`, `QUS`, `confabulation`, `Verification Document`, `curated`, `Custom GPT`, `FORGE`, `Schuchardt`, `backtalk`, `screenshot`, `milestone`, `DTA`, `IIIF`). The reference lists, in-text citations, footnote markers, and footnote definitions of both versions were extracted and compared by script; the counts in section 4 are from that extraction. The figure mapping was checked against `assets/figures/manifest.yaml` and the file inventory of `assets/figures/`. No file other than this one was changed.
