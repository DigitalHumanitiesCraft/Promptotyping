---
title: The artefact and its boundary
slug: artefakt
status: complete
language: en
version: "0.3"
created: 2026-07-25
updated: 2026-07-31
source: research-artefacts/promptotyping-paper.md, sections 3.2, 4.1 and 4.2
machine-url: https://dhcraft.org/Promptotyping/_content/artefakt.md
---

# The artefact and its boundary

A tool serves many projects at the level of generality all of them share. A research artefact is bound to one project, and that is where its scholarly standing comes from, because the distinctions it preserves are the ones that project's data model carries. What the method produces is software that operates on the data of one project and makes it explorable, analysable or editable.

## The default, a self-contained static web tool

The artefacts are, by deliberate default, self-contained static web tools, a set of HTML, CSS and JavaScript files with the research data embedded or loaded from flat files, runnable on any static host and from a local folder. Three properties carry this choice.

- **Generability.** Current agentic tools produce static artefacts in one pass, which keeps the derivation from documents to artefact inspectable.
- **Publishability.** They go online without infrastructure, which matches the resource situation of the researchers the method addresses.
- **Durability.** Minimal computing and the Endings Project argue that the digital artefacts with the fewest moving parts have the best chances of survival, without server-side dependencies and without build chains that rot. Digital scholarly editing reaches the same conclusion from its own side when it publishes TEI-XML editions as static websites.

The data side of this arrangement has an established name. A repository holding a project's research data beside the code that renders it is what the reproducibility discussion calls a Research Compendium (Marwick, Boettiger and Mullen 2018), defined by three principles, that its files follow the conventions of the scholarly community so that others recognise the structure, that data, method and output stay separate with the relation between them stated unambiguously, which treats the data as read-only and documents every modification in the code, and that the computational environment of the original analysis is specified. The first two carry over to a Promptotyping artefact directly and describe what its repository already does. The third is where the analogy strains, because the environment that produced the derivation here is a language model with a harness, and whether naming them discharges the principle is open.

## Technical rules

From these properties follow the rules that a project's action layer passes on to the agent. The elaborated version lies in the [technology baseline](_content/technology-baseline.md).

- **Vanilla JavaScript is the default.** Frameworks age fast, resist inspection, and add nothing an exploratory artefact needs.
- **A single library may be vendored**, meaning copied into the repository and versioned with it, without a package manager, and only where a problem is algorithmically deep. A compromise rule with four criteria governs this. The problem lies beyond a reasonable implementation of one's own, the library is self-contained and vendorable without a build step, its licence permits redistribution, and its removal path is documented.
- **Heavy computation is precomputed.** The artefact ships derived data, and the pipelines stay upstream of it.
- **No external calls at runtime.** The artefact must work offline, which is at once a longevity, a privacy and a security property.
- **Every artefact carries a provenance declaration** stating that it was generated, from which documents, with which LLMs and tools, and how it was checked. The artefact discloses its conditions of production the way an edition discloses its editorial principles.

## Side forms

The default holds as long as its conditions hold, and the record shows the side forms where one of them breaks. Where a processing step does not run in the browser, it takes shape as a generated pipeline upstream of the artefact. Where a description is to be rendered from the source data itself, it takes shape as a deterministically generated document. Both are derived from the document set in the same way.

## Five functions by which the interfaces sort

The browser-based interfaces of the documented projects sort by the epistemic function they serve. Data format and visualisation technique have proved weaker as ordering principles.

The typology below is the site's own. It descends from an earlier version of the method paper, and the five names given here are the ones the use-case gallery filters by. Since the revision of 31 July 2026 the paper draws its own line differently. It names six operational forms, Capture, Transformation, Exploration, Edition, Verification and the integrated scholarly workbench, and it orders them under three methodological functions of implementation, production and curation, prospective modelling and exploration, and project formation with bounded communication ([paper, section 3.2](#abschnitt-3-2-project-conditions-functions-and-artefact-forms)). Two differences are worth holding apart. The paper counts Transformation as a form in its own right, which this page treats as a side form of the default; and the paper replaces the site's Audit category with the integrated workbench, which is a different cut rather than a rename. The site keeps its five names because published card filters and the colour scale depend on them.

- **Verification.** Checks the intermediate results of a pipeline at defined points and makes them comparable and correctable before errors propagate. The paradigmatic case is a comparison viewer for several text-recognition sources with layout overlay.
- **Exploration.** Opens up existing structured research data through coordinated views. Here the interface is the primary research artefact, the means through which the data becomes analytically accessible.
- **Edition.** Renders scholarly digital editions, with facsimile synchronisation, TEI text display and editorial correction. Interface decisions in editions are editorial decisions.
- **Capture.** Supports structured input, annotation or metadata creation. Such interfaces produce new data and shape the data model in doing so, because they reveal what the model can and cannot express.
- **Audit.** Makes an entire research process inspectable by rendering the path to the results alongside the results, with comparisons, divergence cases and statistics.

The categories are not mutually exclusive. A pipeline project combines Verification Interfaces at its stages, an Edition Interface as its reader, and Capture elements in its curation editor. What the typology makes visible is how interface design depends on epistemic function. A TEI-XML dataset requires an Edition Interface, an Exploration Interface, or both, depending on the research question, and there lies the empirical reason why the monolithic dashboard for all cases fails.

## Limits of the format

The limits are part of the definition of the artefact type.

Client-side processing bounds the data volume, and the bound moves with the stack. Where it lies in practice depends on browser memory and data format, and the pipelines stay upstream of it. With flat JSON or CSV files the range stays modest, while a statically published TEI edition of over sixteen thousand edition units shows the order of magnitude reachable on the pre-rendered side. Columnar formats with WebAssembly query engines shift the client-side range by orders of magnitude while the artefact stays static and self-contained, at the price of a vendored engine that the compromise rule must cover. Beyond the bound, precomputation and sampling carry more of the load.

Static artefacts support no collaborative or server-mediated workflows, and persistence beyond the browser lies outside their purpose.

## The handover point

Where a project grows beyond the prototype, the regime of obligations the artefact stands under changes. No single measure of the artefact shows this change, because it runs along several axes that tip independently of one another. The axes the record has met are the duty of maintenance beyond a project's own run time, use by third parties with an expectation of support, multi-user operation over shared state, responsibility for data belonging to others, and institutional deployment with a commitment to availability.

Where one of these axes tips, the standards of Research Software Engineering apply to the artefact, with their demands on testing, sustainability and maintenance, and they apply according to what the artefact has become, irrespective of what it was built with.

The document set does not lose its value at this boundary. It becomes the handover package. A project that reaches the handover point puts a versioned specification into the hands of a Research Software Engineer, with data description, user stories, acceptance criteria, design rationale and process record. The documents serve a human developer exactly as they serve an agent.
