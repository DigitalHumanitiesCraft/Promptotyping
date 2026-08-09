---
type: distillate
source-type: publication
reference: marwick-2018
topics: ["[[Method]]"]
status: grounded
checked:
  quote: 2026-07-26
created: 2026-07-26
updated: 2026-07-26
---

# Distillate: Packaging Data Analytical Work Reproducibly Using R (and Friends) (Marwick, Boettiger and Mullen 2018)

The established name and the three defining principles of the research compendium, the arrangement in which a project's data, method and outputs live in one recognisably organised repository. It is the reproducibility tradition's counterpart to the site's standalone-research-data pattern. Quotations come from the publisher PDF hosted at projecttier.org. Typographic quotation marks, apostrophes and dashes are normalised to their ASCII forms in the quotations.

## Core statements

- The research compendium is offered as the solution to organising a project's digital materials so that others can inspect, reproduce and extend the work. ^s1
  > "we review the concept of the research compendium as a solution for providing a standard and easily recognizable way for organizing the digital materials of a research project to enable other researchers to inspect, reproduce, and extend the research." (marwick-2018, Abstract)
- Three principles define a compendium independently of any particular tooling or discipline. ^s2
  > "There are three generic principles that define research compendia, independent of particular software tools, and disciplinary contexts." (marwick-2018, §2 What is a Research Compendium?)
- The first principle is that the files follow the conventions of the scholarly community, so that others recognise the structure and tools can build on it. ^s3
  > "A research compendium should organize its files according to the prevailing conventions of the scholarly community, whether that be an academic discipline or a lab group. Following these conventions will help other people recognize the structure of the project, and also support tool building which takes advantage of the shared structure." (marwick-2018, §2 What is a Research Compendium?)
- The second principle separates data, method and output while stating the relation between them, which treats the data as read-only and the outputs as regenerable. ^s4
  > "A research compendium should maintain a clear separation of data, method, and output, while unambiguously expressing the relationship between those three. In practice, this means data files must be separate from code files." (marwick-2018, §2 What is a Research Compendium?)
- The separation is what lets a reader see how the original researcher operated on the data, with modifications documented in the code rather than in the data. ^s5
  > "This is important to let others easily identify how the original researcher operated on the data to generate the results. Keeping data and method separate treats the data as \"read-only,\" so that the original data are untouched and all modifications are transparently documented in the code." (marwick-2018, §2 What is a Research Compendium?)
- The third principle requires the computational environment of the original analysis to be specified. ^s6
  > "A research compendium should specify the computational environment that was used for the original analysis. At its most basic, this could be a plain text file that includes a short list of the names and version numbers of the software and other critical tools used for the analysis." (marwick-2018, §2 What is a Research Compendium?)

## Terms

- **Research compendium**: a repository organised by community convention that holds a project's data, method and output with their relation made explicit. [[10_distillates/publications/marwick-2018-research-compendium#^s1]]

## Open questions

- The compendium is built for a computational analysis whose outputs are regenerable results. A Promptotyping artefact is an interface over the data rather than a result, so the read-only status of the data carries over while the disposability of the output does not.
- The third principle asks for the computational environment of the analysis. What the counterpart is when the derivation ran through a language model, and whether naming a model and a tool discharges it, is outside this source.
- The carrier is a third-party host of the publisher PDF whose page numbers are stripped from the running heads, so quotations are located by section.

## Related

- [[10_distillates/publications/risam-2022-minimal-computing]]
- [[10_distillates/publications/holmes-2023-endings-principles]]
- [[10_distillates/publications/wilkinson-2016-fair-principles]]
- [[10_distillates/publications/soiland-2022-ro-crate]]
