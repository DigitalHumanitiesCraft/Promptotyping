---
type: distillate
source-type: publication
reference: groth-2010
topics:
- '[[ArtefactVerification]]'
status: grounded
checked:
  quote: 2026-07-26
created: 2026-07-26
updated: 2026-07-26
---

# Distillate: The anatomy of a nanopublication (Groth, Gibson and Velterop 2010)

The established model for treating a single scientific statement as a publishable, attributable unit by binding it to the annotations that carry its context. It is the nearest prior art for a document that holds one claim together with its evidence and its provenance. Quotations come from the v3 manuscript hosted on the W3C wiki. Typographic quotation marks and apostrophes are normalised to their ASCII forms in the quotations, while the dashes of the definition list are reproduced as the source sets them.

## Core statements

- A statement can be validated scientifically only together with its context, which a traditional publication supplies implicitly. ^s1
  > "The statement itself is what is common to all of the sources of the statement, but the statement can only be validated scientifically if you take into consideration its context. Traditionally, the context of a scientific statement is implicit in its immediate environment; the scientific publication." (groth-2010, §1 Introduction)
- The problem the model addresses is how to put that context back around a statement once the statement is separated from the document. ^s2
  > "The challenge now becomes; what needs to be done to put the context back in to a statement that was formerly provided by a document. In this paper we explore the extra components that would need to be available to reinforce the value of a statement to the point where it could in itself be considered a publication." (groth-2010, §1 Introduction)
- The requirements the model starts from are the ones publication practice already imposes, citability, attributability and reviewability. ^s3
  > "Similar to standard scientific publications, nano-publications need to be citable, attributable, and reviewable. Furthermore, they need to be easily curated." (groth-2010, §2 Core model)
- A statement is a uniquely identifiable triple, and an annotation is a triple whose subject is a statement. ^s4
  > "Statement – A triple that is uniquely identifiable. Annotation – A triple such that the subject of the triple is a statement." (groth-2010, §2 Core model)
- A nanopublication is the set of annotations referring to one statement, together with a community-agreed minimum of those annotations. ^s5
  > "Nanopublication – A set of annotations that refer to the same statement and contains a minimum set of (community) agreed upon annotations." (groth-2010, §2 Core model)
- The annotations carry provenance, naming where a statement was imported from, by whom, and who authored it. ^s6
  > "Examples of the annotations provided are importedFromSource (identifies where the research statement was extracted from), importedBy (identifies what entity is responsible for importing a statement), authoredBy (identifies the author of a research statement)." (groth-2010, §4 Annotations)
- Assertion is modelled explicitly, so that an entity can state that it asserts a nanopublication and thereby claim its content. ^s7
  > "This ontology provides as assertedBy relationship, which relates a particular NamedGraph to an entity (i.e. an authority). Thus, an entity can state that they asserted a nano-publication and thus claim." (groth-2010, §5 Attribution, review, citation)

## Terms

- **Nanopublication**: a single scientific statement made citable and attributable by the set of annotations that carry its context. [[20_distillates/publications/groth-2010-nanopublication#^s5]]
- **Annotation**: a statement about a statement, the mechanism by which provenance and attribution attach to the assertion. [[20_distillates/publications/groth-2010-nanopublication#^s4]]

## Open questions

- The model is built for machine aggregation of formalised triples across a web of data. A claim-verification document holds prose claims about a project's own work, with a procedure and a verdict, and neither the procedure nor the verdict has a counterpart in this model.
- The source proposes review as a requirement and provides a relation for asserting, without fixing who checks a nanopublication or by what procedure.
- The carrier is the pre-publication manuscript; the journal version at pages 51 to 56 may differ in wording, so a claim resting on exact phrasing needs the published text.

## Related

- [[20_distillates/publications/hitchcock-2003-toulmins-warrants]]
- [[20_distillates/publications/mariani-2025-prov-a]]
- [[20_distillates/publications/berners-lee-2001-semantic-web]]
