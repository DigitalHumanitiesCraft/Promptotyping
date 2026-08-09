---
type: representation
source-type: document
source: "[[_sources/m3gim-vocab-derivation-2026-07-24.md]]"
converter: "manual extraction from the German original, wording preserved and rendered into English where quoted; source pinned to commit e51174d6aea73f8678bfab205e69110c82c976b6 of the m3gim repository"
channel: collection
metadata:
  title: "Befund: Domänenwissen aus einer formalen Quelle (M³GIM knowledge base)"
  creator: "method author, Digital Humanities Craft OG, with agent support"
  date: "2026-07-24"
  format: "text/markdown"
  identifier: "https://github.com/DigitalHumanitiesCraft/m3gim/blob/main/knowledge/vocab-derivation-findings.md"
  license: "CC BY 4.0 (repository documentation)"
  confidential: false
created: 2026-07-24
updated: 2026-07-24
checked:
  validation: 2026-07-24
---

# Findings on deriving a domain document from a formal vocabulary

Compact extract of the report on an experiment in the M³GIM project, in which the project namespace was formalised as a vocabulary file and the domain document of the knowledge base was then derived from it. The extract preserves the substance of the passages that carry what the derivation produced, what it could not produce, and what the formalisation exposed.

## A. Set-up

The thesis under test was that domain knowledge for an agentic knowledge base can be derived from a formal vocabulary where one exists, instead of being elicited from the domain expert. The experiment ran in two steps. The project namespace, until then only speaking, was formalised as a vocabulary file with classes, properties, domains, ranges, links to the archival standard RiC-O 1.1, and two controlled vocabularies as SKOS schemes. The domain document of the knowledge base was then derived from that file, with a record of what came from the formal source and what did not. Pipeline, data, and frontend were left untouched. ^setup

## B. What the vocabulary carried

The derivation ran largely mechanically. The class overview with superclasses and defining statements, the relation diagram between classes, the list of typed date properties, the structure of the financial layer, the hierarchy of document types, and the ordering of the role vocabulary by target type stand in the derived document as they stand in the Turtle file. For these sections no query to the expert was needed and no source beyond the file. ^derivable

Two kinds of knowledge lie on top of one another inside what is derivable. Carried by the formal constructs: `rdfs:subClassOf`, `rdfs:domain`, `rdfs:range` and `rdfs:subPropertyOf` answer which entity types exist, what may be connected with what, and which standard statement a project statement implies; `skos:broader` yields the aggregation levels of the document types, `skos:member` the assignment of roles to target types. These statements are machine-checkable and can be rendered into prose without interpretation. ^formal-constructs

Carried as annotation: everything a term means, why it is named as it is, and what about it is unresolved sits in `rdfs:comment` and `skos:editorialNote`. That is prose in a formal container. The gain is that the prose stands at the term it explains and that formalisation forces a definition for every term. No derivation advantage over well-kept documentation arises from it. ^annotation-prose

## C. What the vocabulary could not carry

Four kinds of knowledge had to come from the rest of the knowledge base and from observation of the dataset. Subject matter and research question: that the material is a partial bequest at a university archive, that the guiding question is mobility, and that the data represents the state of cataloguing rather than a reconstructed biography, stands in no term. The shape of the graph: domain and range say that a document has a participating actor, and leave open whether that actor holds its own node or sits embedded in the document; in this dataset the second case holds, and it decides what a query for all documents of a person looks like. Negative knowledge: that a confidence property is deliberately left empty, that a residence deliberately generates no mobility event, and that a decimal confidence was deliberately removed, are statements about what is absent, for which RDFS and OWL carry no construct that would serve here. Reliability of an entry: whether a curated statement takes precedence over an enriched one, whether a currency was recorded or inferred from context, and whether a value follows a recording convention or compensates for a pipeline step, decides how far any analysis carries, and the vocabulary can note it without deriving it. ^not-derivable

## D. The actual finding

The thesis holds for the second step and moves the cost into the first. The derivation from vocabulary to domain document was cheap and lost little. The formalisation itself was the expensive operation, and it needed the same sources one would otherwise query, the dataset, the specification, the pipeline code, and the test suite. ^cost-shift

The gain lies elsewhere than in the saving. Formalisation enforces a completeness that prose does not enforce. For every term a domain, a range, and the question whether an edge carries to the standard have to be decided. Where that decision was not possible, a vagueness sat in the model that nobody had noticed before. ^diagnostic

A second gain is checkability. Comparing the vocabulary against the dataset can be run as a test and answers whether every term used is defined and every vocabulary value is assigned to a concept. With prose documentation that question can only be answered by reading. ^checkability

## E. Defects the formalisation exposed

Context-dependent statements on globally identified nodes: the role holds in the context of a document but hangs on the entity node, and that node carries the Wikidata identifier for reconciled entities. When the tree is merged into the RDF level the branch context falls away, and the same identifier collects all roles from all documents; one city then carries sending place, destination, residence, and place of contract at once. ^defect-context

One property with two opposing fillings: `detailField` and `detailValue` are filled the other way round by two branches of the pipeline. In the financial branch `detailField` carries the type of item and `detailValue` the raw value; in the branch for the link type `detail` it is the reverse. The second branch carries no data in the current state, which is why the collision stayed without effect. ^defect-property

A name that makes a different statement from the value: a property named as the start of a season carries the full period in the form `1952/1953`; its counterpart for the end is specified and never filled, because the season is not decomposed. ^defect-name

Term lock reaching only to the term name: the existing conformance test holds every external term against a documented allowlist and exempts the project namespace. What is checked is the existence of a term. Whether the value fits its range stays unchecked, and comparison against the official component lists of the standard shows three places where an object property receives a value form its range excludes. ^defect-range

The standard carries more than the project uses: five archival roles that the project keeps as literal values on one collecting property have their own object properties in RiC-O 1.1. Both this and the available event subclass came to notice only when a documented superclass and superproperty were sought for the project's own terms. ^standard-unused
