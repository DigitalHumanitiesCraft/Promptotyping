---
type: distillate
source-type: document
representation: "[[00_representation/documents/m3gim-vocab-derivation-2026-07-24]]"
topics: ["[[Frame]]"]
status: grounded
checked:
  validation: 2026-07-24
created: 2026-07-24
updated: 2026-07-24
---

# Distillate: Deriving a domain document from a formal vocabulary (M³GIM)

The report documents an experiment inside one of the paper's documented projects, in which the project's own namespace was formalised as an ontology and the domain document of its knowledge base was then derived from that formal source. It bounds what Section 2.3 may claim about ontology-based data as a ground for the method's context layer.

## Core statements

- The experiment formalised a project namespace as a vocabulary file with classes, properties, domains, ranges, links to the archival standard, and controlled vocabularies as SKOS schemes, and then derived the knowledge base's domain document from that file. [[00_representation/documents/m3gim-vocab-derivation-2026-07-24#^setup]] ^s1
- The structural layer of the domain document came across mechanically, the class hierarchy, the permitted connections between classes, the typed date properties, the financial layer, the document-type hierarchy, and the ordering of the role vocabulary. [[00_representation/documents/m3gim-vocab-derivation-2026-07-24#^derivable]] ^s2
- Within what was derivable, the formal constructs carry which types exist and what may connect to what, and are machine-checkable. [[00_representation/documents/m3gim-vocab-derivation-2026-07-24#^formal-constructs]] ^s3
- The remainder of what was derivable rests on prose annotations inside the ontology, which yields no derivation advantage over well-kept documentation. [[00_representation/documents/m3gim-vocab-derivation-2026-07-24#^annotation-prose]] ^s4
- Four kinds of knowledge could not come from the vocabulary, the subject matter and research question, the shape the graph actually takes in the data, deliberate absences, and the reliability of a given entry. [[00_representation/documents/m3gim-vocab-derivation-2026-07-24#^not-derivable]] ^s5
- The derivation step was cheap and the formalisation step expensive, and formalising needed the same sources one would otherwise query, the dataset, the specification, the pipeline code, and the test suite. [[00_representation/documents/m3gim-vocab-derivation-2026-07-24#^cost-shift]] ^s6
- Formalisation enforces a completeness prose does not enforce, because a domain, a range, and the question of an edge to the standard have to be decided for every term, and where that decision was impossible a vagueness sat in the model that had not been noticed. [[00_representation/documents/m3gim-vocab-derivation-2026-07-24#^diagnostic]] ^s7
- Comparing the vocabulary against the dataset can be run as a test, which prose documentation cannot support. [[00_representation/documents/m3gim-vocab-derivation-2026-07-24#^checkability]] ^s8
- One exposed defect is that role values hang on globally identified entity nodes and collapse into one another once the tree context of the source is dropped. [[00_representation/documents/m3gim-vocab-derivation-2026-07-24#^defect-context]] ^s9
- Another exposed defect is a property pair that two branches of the pipeline fill in opposite senses, without effect so far because the second branch carries no data. [[00_representation/documents/m3gim-vocab-derivation-2026-07-24#^defect-property]] ^s10
- The existing conformance test checks the existence of external terms and leaves the fit of a value to its range unchecked, and comparison against the standard's component lists showed three range violations. [[00_representation/documents/m3gim-vocab-derivation-2026-07-24#^defect-range]] ^s11

## Terms

- **derivation**: here, the rendering of a knowledge base's domain document out of a formal vocabulary file, with a record of what came from the formal source. [[00_representation/documents/m3gim-vocab-derivation-2026-07-24#^setup]]

## Open questions

- The report covers one project and one vocabulary; whether the split between derivable structure and non-derivable subject matter holds elsewhere is not addressed.
- Whether the exposed defects would have surfaced eventually by other means is not decidable from the report.

## Related

- [[10_distillates/publications/gruber-1993-ontolingua]]
- [[10_distillates/publications/berners-lee-2001-semantic-web]]
