---
type: distillate
source-type: publication
reference: lucassen-2016
topics: ["[[Method]]"]
status: grounded
checked:
  quote: 2026-07-26
created: 2026-07-26
updated: 2026-07-26
---

# Distillate: Improving agile requirements, the Quality User Story framework and tool (Lucassen et al. 2016)

The source that the site's user-story vocabulary names as its origin. It defines thirteen quality criteria for user stories, sorts them into three categories and by scope, and states which of them its companion tool AQUSA checks and which it deliberately leaves out. Quotations come from the open-access publisher PDF; the typographic ligatures of that PDF are normalised. Typographic quotation marks, apostrophes and dashes are normalised to their ASCII forms in the quotations.

## Core statements

- The framework consists of thirteen quality criteria for user stories, with an accompanying tool that detects defects by natural-language processing. ^s1
  > "we propose the Quality User Story (QUS) framework, a set of 13 quality criteria that user story writers should strive to conform to. Based on QUS, we present the Automatic Quality User Story Artisan (AQUSA) software tool. Relying on natural language processing (NLP) techniques, AQUSA detects quality defects and suggest possible remedies." (lucassen-2016, Abstract, p. 383)
- The criteria are organised in three categories taken from Lindland, syntactic, semantic and pragmatic quality. ^s2
  > "Because user stories are a controlled language, the QUS framework's criteria are organized in Lindland's categories [31]: Syntactic quality, concerning the textual structure of a user story without considering its meaning; Semantic quality, concerning the relations and meaning of (parts of) the user story text; Pragmatic quality, considers the audience's subjective interpretation of the user story text aside from syntax and semantics." (lucassen-2016, §3, p. 386)
- Each criterion is additionally classified by whether it applies to a single user story or to a set of them. ^s3
  > "The last column of Table 1 classifies the criteria depending on whether they relate to an individual user story or to a set of user stories." (lucassen-2016, §3, p. 386)
- The three syntactic criteria are well-formed, atomic and minimal, all of them scoped to an individual story. ^s4
  > "Well-formed A user story includes at least a role and a means Individual / Atomic A user story expresses a requirement for exactly one feature Individual / Minimal A user story contains nothing more than role, means, and ends Individual" (lucassen-2016, Table 1, p. 387; the slashes mark the table's row breaks)
- The four semantic criteria are conceptually sound, problem-oriented, unambiguous and conflict-free, the last of them scoped to the set. ^s5
  > "Conceptually sound The means expresses a feature and the ends expresses a rationale Individual / Problem-oriented A user story only specifies the problem, not the solution to it Individual / Unambiguous A user story avoids terms or abstractions that lead to multiple interpretations Individual / Conflict-free A user story should not be inconsistent with any other user story Set" (lucassen-2016, Table 1, p. 387; the slashes mark the table's row breaks)
- The six pragmatic criteria are full sentence, estimatable, unique, uniform, independent and complete, of which four are scoped to the set. ^s6
  > "Full sentence A user story is a well-formed full sentence Individual / Estimatable A story does not denote a coarse-grained requirement that is difficult to plan and prioritize Individual / Unique Every user story is unique, duplicates are avoided Set / Uniform All user stories in a specification employ the same template Set / Independent The user story is self-contained and has no inherent dependencies on other stories Set / Complete Implementing a set of user stories creates a feature-complete application, no steps are missing Set" (lucassen-2016, Table 1, p. 387; the slashes mark the table's row breaks)
- The tool is built for the criteria a rule can decide, and the semantic criteria are excluded from it because they require understanding of the content. ^s7
  > "the first version of AQUSA focuses on the QUS criteria for which the probability of fulfilling the Perfect Recall Condition is high; thus, we include the syntactic criteria and a few pragmatic criteria that can be algorithmically checked, but we exclude semantic criteria as they require deep understanding of requirements' content" (lucassen-2016, §4, p. 390)
- The implemented analyzers of the first tool version cover five criteria, well-formed, atomic, minimal, unique and uniform. ^s8
  > "AQUSA v1 runs one or more story analyses by first calling the StoryChunker and then running the Unique-, Minimal-, WellFormed-, Uniform-, and AtomicAnalyzer." (lucassen-2016, §4.1, p. 391)
- The tool is designed for the clerical part of requirements engineering, the defects that are easy to describe and algorithmically decidable. ^s9
  > "AQUSA is designed as a tool that focuses on easily describable, algorithmically determinable defects: the clerical part of RE" (lucassen-2016, §4, p. 390)
- Independence is stated as a criterion that cannot be met throughout, and the recommendation for the unavoidable case is to make the dependency explicit. ^s10
  > "Much like in programming loosely coupled systems, however, it is practically impossible to never breach this quality criterion; our recommendation is then to make the relationship visible through the establishment of an explicit dependency." (lucassen-2016, §3.2.3, p. 389)

## Terms

- **Quality User Story framework (QUS)**: thirteen criteria for the intrinsic quality of user-story text, grouped syntactic, semantic and pragmatic, and scoped to a single story or to the set. [[10_distillates/publications/lucassen-2016-quality-user-story#^s1]]
- **AQUSA**: the companion tool that reports defects against those criteria a rule can decide. [[10_distillates/publications/lucassen-2016-quality-user-story#^s7]]
- **Perfect Recall Condition**: the design requirement that a defect detector miss close to nothing, since a missed defect forces manual re-reading of the whole set. [[10_distillates/publications/lucassen-2016-quality-user-story#^s9]]

## Open questions

- The framework judges the intrinsic quality of the story text. Whether the story is true of the user it names lies outside every one of its thirteen criteria, so the site's epistemic-status claim about user stories takes no support from this source and needs its own ground.
- The exclusion of the semantic criteria from the tool is stated for the first tool version and argued from the recall requirement, not proved impossible in principle.
- Conflict-free, full sentence, estimatable and complete are QUS criteria without an implemented analyzer in the reported version; the source states the selection rule but gives no per-criterion verdict on future automatability.

## Related

- [[10_distillates/publications/pollin-2025b-dissertation]] — the Scholar-Centred Design lineage in which the paper places user stories.
