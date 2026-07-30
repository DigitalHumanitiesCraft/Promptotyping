# Redundancy Inventory — `knowledge/paper-draft.md` (Fassung 4), 2026-07-30

This document is the instrument that guarantees a later deduplication rewrite of `knowledge/paper-draft.md` loses no information. It decomposes every redundant passage into sentence-level semantic components, classifies each one, and assigns each piece of unique content a single canonical home. A verifier can later tick off every `unique` component and every named `increment` against the rewritten text.

Line numbers refer to the state of `knowledge/paper-draft.md` on 2026-07-30 (560 lines). The file was read in full before this inventory was written. Nothing in the manuscript was modified.

## Classification scheme

| Class | Meaning | Consequence for the rewrite |
| :---- | :---- | :---- |
| `unique` | The content appears nowhere else in the manuscript. | Must survive, at the canonical home named in the row. |
| `repetition` | Content identical in substance to another component, which is named in the "covered by" column. | May be deleted without loss. |
| `variant-with-increment` | Repeats existing content and adds something. The increment is named. | Only the increment survives at this location. |

Two additional flags appear in the action column:

- **protected** — the component repeats content but is retained by an editorial convention that overrides deduplication (abstract self-containment, figure captions that must stand alone, the research question, definitional sentences named in the operator plan).
- **deviation** — the assignment departs from the predefined plan; the reason is stated in the row or in the note beneath the table.

Clusters A to F follow the operator's predefined plan. Clusters G to U were found by a full sweep of the manuscript and carry proposed canonical homes rather than pre-agreed ones.

---

## Cluster A — Responsibility thesis

Plan: argued canonically in §2.4 (evidence versus authority) plus the definitional sentence at l.103 in §2.2. Functional mentions inside the checking-form definitions (§2.3 l.135, l.137, Table 1 role column), the research question in §1, one restatement in the §5.3 conclusion, and the Abstract stay.

| ID | Location | Wording (exact or near-exact) | Class | Covered by / Increment | Action and canonical home |
| :---- | :---- | :---- | :---- | :---- | :---- |
| A-01 | Abstract, l.5 | "…the documented grounds of verification and acceptance by accountable contributors." | repetition | A-33 | Keep. **protected** (abstract self-containment). |
| A-02 | §1, l.15 | "The paper asks how scholars, research software engineers, and AI agents can collaborate through documented project knowledge to iteratively develop project-specific digital research artefacts without transferring scholarly and technical responsibility to the agents." | unique | — | Keep. Canonical home for the research question: §1. |
| A-03 | §1, l.15 | "…concludes by characterising the approach as an amplification of scholarly and technical competence that redistributes parts of the formalisation and implementation work without transferring responsibility for the judgements on which the resulting artefacts depend." | repetition | A-02 (responsibility), D-13 and §5.1 l.305 (redistribution of labour) | Delete the responsibility clause and the redistribution clause; keep the chapter preview to "Section 5 defines its scope and limits and outlines priorities for evaluation and transfer." |
| A-04 | §1.1, l.27 | "This does not replace modelling, software-engineering competence, or critical judgement, and not all relevant requirements can be determined in advance." | variant-with-increment | Increment: "not all relevant requirements can be determined in advance", which motivates the provisional artefact in the next sentence | Keep only the increment. Responsibility clause covered by A-30/A-31, competence clause by G-02. |
| A-05 | §2.1, l.49 | "Researchers and contributors retain responsibility for the scholarly and technical decisions represented in this base." | repetition | A-33 | Delete. |
| A-06 | §2.1, l.49 | "They maintain that knowledge and direct the implementation and revision tasks assigned to LLM-based agents." | variant-with-increment | Increment: identifies the maintainers of the knowledge base as the same contributors who direct agent tasks, which the §2.1 definition of the knowledge base needs | Keep as one clause inside the definition. |
| A-07 | §2.1, l.49 | "The artefact is developed through the continuing interaction between maintained project knowledge, agentic execution, and human interpretation and judgement." | repetition | A-15 (near-verbatim) | Delete here or at A-15; see note 1. |
| A-08 | §2.1, l.69 | "This externalisation does not make the agent responsible for the project's decisions." | repetition | A-30, A-31 | Delete. |
| A-09 | §2.1, l.69 | "It provides an inspectable basis from which the agent can carry out bounded work and against which the resulting implementation can be examined." | repetition | P-02 (§2.3 l.125, near-verbatim) | Delete; see cluster P. |
| A-10 | §2.2, l.103 | "The role denotes the competence and responsibility required to determine whether the project knowledge represents the research material adequately and whether the artefact warrants acceptance for its intended purpose." | unique | — | Keep. Canonical definition of the Critical Expert role: §2.2. |
| A-11 | §2.2, l.103 | "An agent may propose mappings, designs, or assessments, but producing a plausible proposal and accepting responsibility for its adequacy remain distinct acts." | unique | — | Keep. **protected** (the definitional sentence named in the plan). |
| A-12 | §2.2, l.103 | "The *Critical Expert* represented in Figure 1 may be one person or a group with distributed responsibilities." | repetition | A-23 (§2.3 l.161 states the distribution at length) | Keep here as the compact form and reduce A-23; see note 2. |
| A-13 | §2.3, l.119 | "The agent does not independently develop or authorise the resulting research artefact." | repetition | A-31 | Delete. |
| A-14 | §2.3, l.119 | "Human contributors maintain the project knowledge, assign and constrain agentic work, inspect intermediate results, and determine which findings require revision." | repetition | A-06, A-27 | Delete. |
| A-15 | §2.3, l.119 | "The artefact develops through the continued interaction between articulated project knowledge, agentic implementation, and human judgement." | repetition | A-07 (near-verbatim) | Keep exactly one of A-07 and A-15; see note 1. |
| A-16 | §2.3, l.119 | "Figure 2 represents this arrangement by separating persistent project knowledge from the task-specific working context and by distinguishing implementation from the authority required for verification and acceptance." | unique | — | Keep. Figure reference; belongs where the figure sits. |
| A-17 | §2.3, l.127 | "The researcher is therefore not merely a stakeholder requesting functionality but remains responsible for claims about the material being operationalised." | variant-with-increment | Increment: the delimitation against Spec-Driven Development, where the specifying party is a stakeholder | Keep only as the SDD contrast. |
| A-18 | §2.3, l.131 | "These procedures provide different forms of evidence and must not be treated as interchangeable." | unique | — | Keep. Canonical home for the non-interchangeability of evidence forms: §2.3, introducing the four checking forms. |
| A-19 | §2.3, l.135 | "It remains a generative assessment and does not authorise the output it reviews. Its report is evidence for subsequent judgement rather than a verification verdict." | variant-with-increment | Increment: the evidential status of agentic review specifically | Keep. **protected** (functional mention inside a checking-form definition). |
| A-20 | §2.3, l.137 | "The Critical Expert determines whether the artefact represents the research data appropriately and whether the resulting operationalisation is warranted for the intended scholarly activity." | repetition | A-10 | Reduce to a back-reference or delete; A-10 already defines the role. |
| A-21 | §2.3, l.137 | "This authority is not transferred to the agent." | repetition | A-31 | Keep. **protected** (functional mention inside a checking-form definition). |
| A-22 | Table 1, l.146, l.148, l.149 | "Assist through review, but not issue the final verdict"; "Produce evidence or alternatives for human assessment"; "Propose or compare interpretations without authorising them" | repetition | A-31 | Keep all three. **protected** (the table's role column is the operative form of the thesis). |
| A-23 | §2.3, l.161 | "Where scholarly and technical responsibilities are distributed, the Critical Expert need not be a single person. A domain specialist may determine whether an encoding or representation is warranted, while a technical contributor assesses the implementation…" | variant-with-increment | Increment: the concrete split between domain specialist and technical contributor | Keep only the split; the "need not be a single person" clause is covered by A-12. |
| A-24 | §2.3, l.161 | "Responsibility remains with the contributors competent and authorised to make the respective decisions." | repetition | A-33 | Delete. |
| A-25 | §2.3, l.163 | "Increasing the number of agents does not reduce the need for human judgement and may increase the effort required to coordinate and audit their work." | variant-with-increment | Increment: the multi-agent case, and the coordination cost it adds | Keep. Canonical home for the multi-agent qualification: §2.3. |
| A-26 | §2.3, l.173 | "The example shows how agentic implementation can extend the work that researchers and technical contributors carry out from maintained project knowledge without transferring responsibility for scholarly or technical judgement to the agent." | repetition | A-02, A-31 | Delete (the closing paragraph of §2.3 is removed with B-04 to B-07; see cluster B). |
| A-27 | §2.3, l.173 | "The agent implements and revises bounded parts of the artefact, operates project tools, and produces evidence for assessment." | repetition | A-19, A-22 | Delete. |
| A-28 | §2.3, l.173 | "The project's contributors remain responsible for determining what should be represented, how the work is organised, and whether the resulting state is adequate." | repetition | A-33 | Delete. |
| A-29 | §2.4, l.181 | "The use of generative systems does not reduce researchers' responsibility for the methods, representations, and claims produced through their work." | unique | — | Keep. Canonical home for the research-integrity register of the thesis: §2.4. |
| A-30 | §2.4, l.185 | "The forms of checking defined in Section 2.3 produce evidence with different scope. Deterministic validation can establish conformity to a formalised condition. Agentic review can identify apparent discrepancies…" | repetition | §2.3 l.133, l.135 (the definitions themselves) | Reduce to the back-reference "The forms of checking defined in Section 2.3 produce evidence with different scope." |
| A-31 | §2.4, l.185 | "Neither establishes that the formalised condition was appropriate, that the representation remains faithful to the research material, or that the artefact is adequate for its intended scholarly purpose." | repetition | M-01, M-03 | Delete; covered by cluster M. |
| A-32 | §2.4, l.185 | "**Accountability therefore requires a distinction between evidence and authority.**" | unique | — | Keep. **Canonical home of cluster A**: §2.4. |
| A-33 | §2.4, l.185 | "A system's ability to generate a finding, execute a check, or modify a workflow state does not give it the competence or authority to issue the scholarly or technical judgement that the state may appear to express." | unique | — | Keep. **Canonical statement of the thesis**: §2.4. |
| A-34 | §2.4, l.187 | "Human involvement alone does not resolve this problem." | unique | — | Keep. §2.4. |
| A-35 | §2.4, l.187 | "Consequential judgements must be attributable to contributors with the relevant competence and recognised responsibility, and they must refer to an identifiable artefact state, data state, evidential basis, and purpose." | unique | — | Keep. §2.4. This is the component every deleted "responsibility remains with the humans" sentence resolves to. |
| A-36 | §2.4, l.187 | "Transparent documentation does not make an agent trustworthy, passing tests does not establish scholarly adequacy, and the presence of a person in the workflow does not guarantee competent verification." | variant-with-increment | Increment: the third limb, that a human in the workflow does not guarantee competent verification. First limb covered by C-09, second by M-05 | Keep only the third limb, or keep the triad and delete C-09; see note 3. |
| A-37 | §2.4, l.187 | "Promptotyping therefore keeps machine-generated findings, administrative workflow states, Critical Expert verification, and acceptance distinguishable even where they are operationally connected." | unique | — | Keep. §2.4. |
| A-38 | §2.4, l.193 | "…keeps consequential judgements attributable to competent contributors…" | repetition | A-35 | Keep. **protected** (the closing summary of §2.4 enumerates the method's provisions; deleting one limb breaks the enumeration). |
| A-39 | §3.3, l.217 | "Critical Expert verification remains necessary because the consequences disclosed by an artefact become scholarly findings only through competent interpretation, contextualisation, and judgement." | variant-with-increment | Increment: the epistemic ground, that artefact consequences become findings only through interpretation | Keep only the increment; it links cluster A to §3.1 backtalk. |
| A-40 | §5.3, l.339 | "Responsibility for what the artefact represents remains with the researchers and contributors who maintain that knowledge and verify what agents implement from it." | repetition | A-42 | Delete. **deviation**: the plan permits one restatement in §5.3, and §5.3 currently carries two (l.339 and l.345). A-42 is kept because it is the manuscript's terminal thesis sentence and is set in bold. |
| A-41 | §5.3, l.343 | "…more of a project's intent and criteria of assessment must be made explicit…" | repetition | C-08 | See cluster C. |
| A-42 | §5.3, l.345 | "**Promptotyping therefore changes the form in which scholarly knowledge guides implementation without transferring scholarly authority to an AI agent.**" | repetition | A-33 | Keep. **protected** (the one permitted conclusion restatement). |
| A-43 | §5.3, l.345 | "The contribution is amplification, not replacement." | repetition | A-42, D-10 | Delete. Also a style defect (trailing negative apposition); see the style note in the apparatus section. |
| A-44 | Figure 2 caption, l.123 | "Deterministic validation and agentic review provide evidence about the artefact but do not authorise scholarly claims… only responsible human contributors accept an iteration for its stated purpose." | repetition | A-32, A-33 | Keep. **protected** (captions must stand alone). |
| A-45 | Figure 4 caption, l.263 | "…the rule that an agent must never record approval, verification, or acceptance that a responsible person has not explicitly granted." | unique | — | Keep, but relocate. **deviation**: this is the sharpest operative formulation of the thesis in the manuscript and it exists only in a figure caption. Argumentative content unique to a caption should move into §2.4 next to A-37, with the caption keeping a compressed form. |
| A-46 | §4.2 (ZBZ), l.259 | "Production and verification had thereby collapsed into one generative operation, assigning apparent authority to the executing agent." | unique | — | Keep. §4.2, the empirical instance of the thesis. |

Notes on cluster A:

1. A-07 and A-15 are the same sentence with different noun choices ("agentic execution" against "agentic implementation", "human interpretation and judgement" against "human judgement"). Keep A-07 in the §2.1 method definition, delete A-15, because §2.3 is the worked example and does not need to restate the definition.
2. A-12 and A-23 both say the Critical Expert may be several people. A-12 is one clause in the role definition; A-23 spends three sentences on it. Keep A-12 plus the concrete role split from A-23.
3. A-36 and C-09 both state that documentation alone does not establish accountability, three lines apart in §2.4. The triad in A-36 is the more compact carrier. If the triad is retained in full, C-09 becomes deletable; the paragraph opening then needs a new first sentence.

**Cluster A totals: 46 components — 13 `unique`, 25 `repetition`, 8 `variant-with-increment`. Of the repetitions, 6 are protected and stay.**

---

## Cluster B — RSE boundary

Plan: canonical in §2.4 (l.191); the motivating variant in §1.1 stays; §2.3 l.175 is fully covered and can go.

| ID | Location | Wording (exact or near-exact) | Class | Covered by / Increment | Action and canonical home |
| :---- | :---- | :---- | :---- | :---- | :---- |
| B-01 | §1.1, l.27 | "Translating scholarly requirements into software has commonly involved collaboration between domain specialists and technical contributors, including Research Software Engineers (Edmond 2005; Baxter et al. 2012; Cohen et al. 2021; Kemman 2021)." | unique | — | Keep. §1.1, the historical framing that introduces the RSE literature. |
| B-02 | §1.1, l.27 | "Such collaboration remains essential where artefacts require dependable long-term operation, institutional integration, security, or supported use by third parties…" | repetition | B-09 | Keep. **protected** (the motivating variant named in the plan; it carries the sentence that follows). |
| B-03 | §1.1, l.27 | "…yet the necessary expertise and resources are not equally available to individual researchers and small projects (Carver et al. 2022)." | unique | — | Keep. §1.1. This is the motivating increment, the resource gap that the paper responds to. |
| B-04 | §2.3, l.175 | "Promptotyping addresses a bounded part of the capacity gap between scholarly specification and technical implementation." | repetition | B-10 ("a bounded form of AI-assisted research software development"), B-03 (the capacity gap itself) | Delete. |
| B-05 | §2.3, l.175 | "It can support exploration, internal workflows, demonstrators, and the development of inspectable handover packages." | repetition | B-12, F-16 | Delete. |
| B-06 | §2.3, l.175 | "Artefacts requiring dependable long-term operation, institutional integration, security, maintenance, or supported third-party use enter the domain of Research Software Engineering." | repetition | B-09 (near-verbatim) | Delete. |
| B-07 | §2.3, l.175 | "Knowledge documents and accepted promptotypes may support that transition by preserving the project logic and an identifiable implementation state, but they do not remove its technical and organisational obligations." | repetition | B-11 (transition support), B-08 (obligations not removed) | Delete. |
| B-08 | §2.4, l.191 | "Nor does it provide the maintenance, security, operational reliability, resourcing, and continued stewardship required for sustainable research software.[^23]" | unique | — | Keep. **Canonical home of cluster B**: §2.4. |
| B-09 | §2.4, l.191 | "Artefacts intended for dependable long-term operation, institutional integration, or supported third-party use therefore remain within the domain of professional Research Software Engineering." | unique | — | Keep. **Canonical boundary statement**: §2.4. |
| B-10 | §2.4, l.193 | "**Promptotyping should consequently be understood as a method for organising a bounded form of AI-assisted research software development, not as a comprehensive framework for responsible AI or sustainable research software.**" | variant-with-increment | Increment: names what Promptotyping is *not* a framework for, at the level of the whole method | Keep. §2.4 closing. |
| B-11 | §5.2, l.325 | "Independently of generative implementation, the knowledge base can support handover to human developers and Research Software Engineers by preserving the project's data description, requirements, decisions, and unresolved questions." | unique | — | Keep. §5.2. Increment over B-07: the handover value is independent of generative implementation, which is an evaluation-relevant claim. |
| B-12 | §2.2, l.101 | "A state may be adequate for exploration or internal use while remaining insufficient for publication, handover, or supported use by third parties." | repetition | F-16 | See cluster F; the third-party clause is the B-cluster's trace in §2.2. |

Note on cluster B: deleting l.175 removes the closing paragraph of §2.3, which currently performs the transition into §2.4. The rewrite needs one linking sentence there so the section does not end on the SZD example. That is a structural consequence of the deletion, not a lost claim.

**Cluster B totals: 12 components — 5 `unique`, 6 `repetition`, 1 `variant-with-increment`. Of the repetitions, 1 is protected and stays.**

---

## Cluster C — Persistence of knowledge

Plan: canonical in §1.2; §2.4 reduced to a linking clause; §5.3 keeps its paragraph because it carries the increment that the gap between plausible production and responsible acceptance grows.

| ID | Location | Wording (exact or near-exact) | Class | Covered by / Increment | Action and canonical home |
| :---- | :---- | :---- | :---- | :---- | :---- |
| C-01 | Abstract, l.5 | "Its organising structure is an evolving and versioned project knowledge base…" | repetition | C-04 | Keep. **protected** (abstract self-containment). |
| C-02 | §1.2, l.39 | "The unit of agentic work is therefore no longer an isolated prompt or code fragment, but the versioned project environment as a whole." | unique | — | Keep. §1.2. |
| C-03 | §1.2, l.39 | "The methodologically relevant change is not only increased model capability, but also the growing amount and variety of work that can be delegated within a persistent, tool-accessible project context between successive human interventions." | unique | — | Keep. §1.2. This is the premise from which C-04 follows. |
| C-04 | §1.2, l.41 | "As AI agents become capable of completing increasingly extended, multi-step computational tasks between human interventions, the knowledge required to guide their work can no longer remain confined to an individual prompt, a transient conversation, or continuous human direction." | unique | — | Keep. **Canonical home of cluster C**: §1.2. |
| C-05 | §1.2, l.41 | "**It must persist beyond individual interactions while remaining available to project contributors for inspection and correction.**" | unique | — | Keep. **Canonical statement of the thesis**: §1.2. |
| C-06 | §2.1, l.49 | "…allowing the project's current understanding to persist and evolve beyond the immediate working context." | repetition | C-05 | Delete. |
| C-07 | §2.1, l.65 | "Knowledge documents are operative rather than merely retrospective. Human contributors use them to inspect assumptions, coordinate decisions, and assess results. Agents use selected documents when planning and carrying out assigned work." | unique | — | Keep. §2.1. The operative-versus-retrospective distinction and its two addressee groups are stated nowhere else in full. |
| C-08 | §2.1, l.65 | "Their persistence allows project knowledge to remain available when a conversation ends, an agent instance changes, or another contributor continues the implementation." | variant-with-increment | Increment: the three concrete continuity conditions (conversation end, agent instance change, contributor change) | Keep only the increment; the persistence claim itself is C-05. |
| C-09 | §2.1, l.69 | "As the span of work performed between human interventions grows, more of the project's intent and criteria of assessment must be made explicit." | repetition | C-16 | Delete here. **deviation**: the plan does not name l.69, but this sentence is the same claim as C-16 in §5.3, which the plan protects. §2.1's paragraph survives on its interdependence claim (N-05). |
| C-10 | §2.4, l.183 | "Documentation is necessary to this organisation but does not by itself establish accountability." | unique | — | Keep, unless A-36 retains its full triad; see note on cluster A, point 3. §2.4. |
| C-11 | §2.4, l.183 | "As agentic systems perform longer sequences of work between human interventions, relevant project knowledge cannot remain confined to individual prompts, transient conversations, or the unstated understanding of one contributor." | variant-with-increment | Increment: "the unstated understanding of one contributor", which C-04 does not contain | Reduce to a linking clause carrying only the increment, per plan. |
| C-12 | §2.4, l.183 | "It must persist across actions and contributors while remaining revisable." | repetition | C-05 | Delete. |
| C-13 | §2.4, l.183 | "The project knowledge base therefore serves not only as a retrospective record but also as an operative reference for implementation and examination." | repetition | C-07 (near-verbatim) | Delete. |
| C-14 | §2.4, l.193 | "It preserves project knowledge beyond individual interactions…" | repetition | C-05 | Keep. **protected** (limb of the §2.4 closing enumeration; see A-38). |
| C-15 | §5.3, l.343 | "More capable models will not make this organisation obsolete." | unique | — | Keep. §5.3. The obsolescence objection is answered only here. |
| C-16 | §5.3, l.343 | "As agents complete longer spans of work between human interventions, more of a project's intent and criteria of assessment must be made explicit…" | repetition | C-04 | Keep. **protected** (it is the premise the §5.3 increment depends on and cannot be replaced by a back-reference without breaking the sentence). |
| C-17 | §5.3, l.343 | "…and the distance between what a system can plausibly produce and what a scholar can responsibly accept grows rather than shrinks." | unique | — | Keep. **This is the increment that earns the §5.3 paragraph its place.** |
| C-18 | §5.3, l.343 | "The method's provisions become more consequential, not less." | repetition | C-15 | Delete. Also a style defect (trailing negative apposition); see the style note. |
| C-19 | fn13, l.520 | "…maintaining durable project artefacts across agent roles and invocations contributes substantially to performance. This supports treating long-horizon agentic work as a problem of maintaining cumulative and inspectable project state…" | unique | — | Keep. The empirical support for C-05; footnote, no body duplicate. |

**Cluster C totals: 19 components — 9 `unique`, 8 `repetition`, 2 `variant-with-increment`. Of the repetitions, 3 are protected and stay.**

---

## Cluster D — Asymmetry list

Plan: definition in §3 intro, two-respects analysis in §3.3 without verbatim list repetition, §5.1 keeps the distributional consequence with its existing back-reference.

| ID | Location | Wording (exact or near-exact) | Class | Covered by / Increment | Action and canonical home |
| :---- | :---- | :---- | :---- | :---- | :---- |
| D-01 | §3 intro, l.199 | "This combination of expanding capacity and persistent *jaggedness* provides one basis for the concept of *asymmetric amplification*." | unique | — | Keep. **Canonical home of cluster D**: §3 intro. |
| D-02 | §3 intro, l.199 | "Generative systems do not automate research as a whole or support every research activity equally." | unique | — | Keep. §3 intro. |
| D-03 | §3 intro, l.199 | "They can act most directly where relevant materials and operations are digitally represented…" | unique | — | Keep. §3 intro. First limb of the asymmetry. |
| D-04 | §3 intro, l.199 | "…while the resulting leverage depends on the task, the available project knowledge, the capacity to assess results, and access to suitable models and infrastructure." | unique | — | Keep. **Canonical form of the four-item list**: §3 intro. Second limb of the asymmetry. |
| D-05 | fn25, l.544 | "…it depends on domain knowledge, the capacity to judge quality, access to capable models, and the infrastructure through which they are used." | repetition | D-04 | Delete from the footnote. **deviation**: the plan is silent on fn25, but the note states the list a third time in a fourth wording. The footnote should carry provenance only. |
| D-06 | fn25, l.544 | "I previously used *asymmetric amplification* to describe two related effects of frontier LLMs… The present chapter develops the concept specifically in relation to project-specific digital research artefacts and Promptotyping." | unique | — | Keep. Provenance of the term and the delimitation against the earlier blog use. |
| D-07 | §3.3, l.217 | "Promptotyping amplifies the reach of scholarly and technical competence by allowing articulated descriptions of data, requirements, decisions, examples, and procedures to guide more implementation work, persist across sessions and contributors, and inform several artefacts or alternative versions." | unique | — | Keep. §3.3. States the amplification mechanism, which the §3 intro does not. |
| D-08 | §3.3, l.217 | "This amplification remains asymmetric in two respects." | unique | — | Keep. **The analytical increment of §3.3**: it converts the intro's flat list into a two-way distinction. |
| D-09 | §3.3, l.217 | "It varies across research activities because current systems can intervene most directly where relevant materials and operations are digitally represented and accessible through tools…" | variant-with-increment | Increment: "and accessible through tools" | Reduce to a named respect without restating D-03 verbatim, per plan. |
| D-10 | §3.3, l.217 | "…and it varies across researchers and projects because its practical value depends on existing domain knowledge, the ability to articulate relevant distinctions, the capacity to assess generated results, technical support, and access to capable models and infrastructure." | variant-with-increment | Increment: two items absent from D-04, "the ability to articulate relevant distinctions" and "technical support" | Reduce to a named respect carrying only the two new items, per plan. |
| D-11 | §5.1, l.309 | "These inequalities are one practical consequence of the asymmetric amplification discussed in Section 3.3." | unique | — | Keep. **protected** (the existing back-reference the plan preserves). |
| D-12 | §5.1, l.309 | "Researchers with well-modelled data, relevant expertise, time for verification, and access to capable systems may obtain greater benefits than those without these resources." | variant-with-increment | Increment: "time for verification", absent from D-04 and D-10 | Reduce to the distributional claim; fold "time for verification" into D-10 or keep the one item here. |
| D-13 | §5.1, l.309 | "Promptotyping inherits these inequalities and may intensify them when implementation capacity becomes concentrated among those able to access and govern high-capability systems." | unique | — | Keep. **The distributional consequence the plan preserves in §5.1.** |

**Cluster D totals: 13 components — 9 `unique`, 1 `repetition`, 3 `variant-with-increment`. The single repetition is deleted from fn25.**

---

## Cluster E — Write-back

Plan: definition in §2.2; §2.4 keeps only the accountability angle; §4.3 untouched (empirical cross-case finding).

| ID | Location | Wording (exact or near-exact) | Class | Covered by / Increment | Action and canonical home |
| :---- | :---- | :---- | :---- | :---- | :---- |
| E-01 | Abstract, l.5 | "…and into which findings and corrections arising from implementation and verification are written back." | repetition | E-05 | Keep. **protected** (abstract self-containment). |
| E-02 | §2.1, l.49 | "Findings and corrections arising from implementation and verification are incorporated into the knowledge base…" | repetition | E-05 (near-verbatim with the Abstract) | Delete or reduce to a clause; §2.1 defines the knowledge base, §2.2 defines write-back. |
| E-03 | §2.1, l.61 | "**The typology therefore helps direct corrections towards the kind of project knowledge that proved inadequate rather than accumulating local patches in the implementation.**" | variant-with-increment | Increment: the diagnostic function of the three-part document typology, which routes a correction to declarative, process, or action knowledge | Keep. §2.1. The increment is the routing, not the write-back itself. |
| E-04 | §2.2, l.99 | "A correction becomes methodologically consequential when it is incorporated into maintained project knowledge." | unique | — | Keep. **Canonical home of cluster E**: §2.2. |
| E-05 | §2.2, l.99 | "Changing generated code without revising an inadequate requirement or design decision may repair one artefact state while leaving the same failure available to recur." | unique | — | Keep. **Canonical statement of the insufficiency of code-only fixes**: §2.2. |
| E-06 | §2.2, l.99 | "**Write-back allows subsequent implementation to proceed from the revised understanding and is therefore the mechanism through which implementation findings become durable project knowledge rather than an additional phase of the method.**" | unique | — | Keep. **Canonical definition of write-back**: §2.2. |
| E-07 | §2.2, l.97 | "An inadequate instruction normally requires revision of the knowledge documents, a changed understanding of what the data can support returns the work to Exploration, and newly available material or altered project conditions may require renewed Preparation." | unique | — | Keep. §2.2. Names which form of work a given finding returns to; distinct from write-back proper. |
| E-08 | §2.4, l.183 | "When implementation reveals an inadequate assumption, missing distinction, or misunderstood requirement, correcting the generated code is insufficient." | repetition | E-05 | Delete, per plan. |
| E-09 | §2.4, l.183 | "The maintained account from which subsequent work proceeds must also be revised." | repetition | E-06 | Delete, per plan. |
| E-10 | §2.4, l.189 | "Writing consequential findings back into maintained project knowledge can preserve the reasons for revisions and support later inspection, continuation, and handover." | variant-with-increment | Increment: write-back preserves *reasons*, and thereby serves inspection, continuation and handover | Keep. **The accountability angle §2.4 retains, per plan.** |
| E-11 | §2.4, l.189 | "It cannot reproduce every generative interaction or ensure that another model will interpret the same documents in the same way." | variant-with-increment | Increment: the limits of write-back as a provenance record | Keep the first limb. The second limb is covered by L-04; see cluster L. |
| E-12 | §3.2, l.213 | "…so that findings arising from an artefact can be attributed to the code, requirements, design, data assumptions, or underlying model and written back into a revised account of the project rather than remaining local corrections or observations confined to a transient interaction." | variant-with-increment | Increment: the attribution layers (code, requirements, design, data assumptions, underlying model) to which a finding can be assigned | Keep only the attribution layers; the write-back clause is covered by E-06 and the "local corrections" clause by E-05. |
| E-13 | §4.3, l.289 | "**Implementation becomes methodologically productive when the questions it exposes are externalised and written back into the relevant project knowledge.**" | variant-with-increment | Increment: this is the empirical cross-case finding, warranted by Table 3 | Keep. **protected** (untouched per plan). |
| E-14 | §4.3, l.289 | "That write-back may concern the data model, interface design, workflow organisation, action rules, or verification criteria." | unique | — | Keep. §4.3. The enumeration of write-back objects exists only here. |
| E-15 | §4.2 (CorrespExplorer), l.251 | "Write-back therefore concerned both the representation of uncertainty and the organisation of agentic work." | unique | — | Keep. §4.2, case instance. |
| E-16 | §4.2 (ZBZ), l.259 | "The correction entered the maintained process and action documents before the pipeline was revised." | unique | — | Keep. §4.2, case instance and the sequencing evidence for E-06. |

**Cluster E totals: 16 components — 7 `unique`, 4 `repetition`, 5 `variant-with-increment`. Of the repetitions, 1 is protected and stays.**

---

## Cluster F — Promptotype definition (the four-part relation)

Plan: definition in §2.2, operative elaboration in §2.3, epistemic status in §3.4 with the doubled in-section statement reduced to one; Abstract stays.

The four-part relation (maintained project knowledge, artefact, referenced data state, documented grounds of acceptance) is stated in full or near-full at l.5, l.15, l.85, l.101, l.103, l.165, l.169, l.171, l.221 (twice, plus a third enumeration), l.225 and l.339, that is at eleven places in eleven different wordings, with the member names varying between "grounds of acceptance", "grounds of verification and acceptance", "verification record" and "verification evidence".

| ID | Location | Wording (exact or near-exact) | Class | Covered by / Increment | Action and canonical home |
| :---- | :---- | :---- | :---- | :---- | :---- |
| F-01 | Abstract, l.5 | "Each accepted iteration yields an identifiable *promptotype* connecting the maintained project knowledge, the digital research artefact, the referenced state of the research data, and the documented grounds of verification and acceptance by accountable contributors." | repetition | F-05 | Keep. **protected** (abstract self-containment, per plan). |
| F-02 | §1, l.15 | "It also defines the versioned *promptotype* as an accepted iteration connecting maintained project knowledge, a resulting artefact, and a referenced state of the research data with the documented grounds of acceptance." | repetition | F-05 | Reduce to the announcement "It also defines the versioned *promptotype*." The chapter preview need not carry the definition. |
| F-03 | Figure 1 caption, l.85 | "Purpose-specific acceptance connects maintained project knowledge, the digital research artefact, the referenced research-data state, and the documented grounds of acceptance as an identifiable promptotype." | repetition | F-05 | Keep. **protected** (captions must stand alone). |
| F-04 | §2.2, l.101 | "A *Promptotyping iteration* may contain several such cycles." | unique | — | Keep. §2.2. Relates iteration to the four forms of work. |
| F-05 | §2.2, l.101 | "It concludes when the maintained project knowledge, the resulting digital research artefact, the referenced state of the research data, and the documented grounds of acceptance form a coherent and identifiable state for a stated purpose." | unique | — | Keep. **Canonical statement of the four-part relation**: §2.2. |
| F-06 | §2.2, l.101 | "**This accepted iteration state is a *promptotype*.**" | unique | — | Keep. **Canonical definition of the term**: §2.2. |
| F-07 | §2.2, l.101 | "Not every artefact generated with an LLM meets this threshold. A provisional artefact remains a precursor when its relation to project knowledge, data, and acceptance cannot be reconstructed." | unique | — | Keep. §2.2. The negative delimitation exists only here. |
| F-08 | §2.2, l.101 | "Acceptance also does not imply finality." | repetition | F-19 | Delete; §2.3 is the operative home of purpose-specificity and non-finality. |
| F-09 | §2.2, l.101 | "A state may be adequate for exploration or internal use while remaining insufficient for publication, handover, or supported use by third parties." | repetition | F-18 | Delete. |
| F-10 | §2.2, l.103 | "A promptotype consequently denotes more than the artefact alone." | repetition | F-06, F-07 | Delete. |
| F-11 | §2.2, l.103 | "It connects a runnable implementation with the maintained understanding from which it was developed and the basis on which it was judged adequate." | repetition | F-05 | Delete. **Within-section doubling**: §2.2 states the relation at l.101 and again at l.103. |
| F-12 | §2.2, l.103 | "This relation allows researchers, technical contributors, and other stakeholders to examine the same operational state rather than negotiating exclusively through abstract descriptions." | unique | — | Keep. §2.2. The shared-object function of the promptotype for distributed roles. |
| F-13 | §2.3, l.165 | "An iteration is accepted when the responsible contributors judge that its project knowledge, artefact, referenced data state, and verification record form a coherent state for a stated purpose." | variant-with-increment | Increment: names the *judging party* (the responsible contributors) and substitutes "verification record" for "grounds of acceptance" | Keep as the single operative statement of the relation in §2.3, per plan. Harmonise the member name with F-05; see the terminology note. |
| F-14 | §2.3, l.165 | "Acceptance is therefore distinct from both validation and verification." | unique | — | Keep. §2.3. |
| F-15 | §2.3, l.165 | "**Validation establishes conformity to formal rules; verification assesses claims that require judgement; acceptance determines whether the assembled state is adequate for its intended use.**" | unique | — | Keep. **Canonical triad**: §2.3. |
| F-16 | §2.3, l.167 | "Acceptance is purpose-specific." | unique | — | Keep. **Canonical statement of purpose-specificity**: §2.3. |
| F-17 | §2.3, l.167 | "A promptotype may support different points in a project lifecycle, from an exploratory demonstrator or internal workflow to a handover package or published artefact. Each purpose requires different acceptance criteria." | unique | — | Keep. §2.3. The lifecycle enumeration exists only here in this form. |
| F-18 | §2.3, l.167 | "Closing an iteration does not imply that the project, research data, or artefact has become final." | unique | — | Keep. §2.3. Covers F-08 and F-09. |
| F-19 | §2.3, l.167 | "New sources, corrected assumptions, or improved checks may initiate another iteration and produce a later promptotype." | unique | — | Keep. §2.3. The succession condition. |
| F-20 | §2.3, l.169 | "The accepted state must be identifiable." | unique | — | Keep. §2.3. |
| F-21 | §2.3, l.169 | "Promptotyping is not tied to GitHub or Semantic Versioning, but the relation among the project knowledge base, artefact, data reference, and grounds of acceptance must be recoverable." | variant-with-increment | Increment: the tool-independence claim (not tied to GitHub or SemVer) | Keep only the increment; the relation is F-13. **Second statement of the relation inside §2.3.** |
| F-22 | §2.3, l.169 | "A repository release, archived deposit, or another durable snapshot can provide this reference." | unique | — | Keep. §2.3. The concrete identification mechanisms. |
| F-23 | §2.3, l.169 | "Re-running the same knowledge documents with another model may produce a different implementation, which should be treated as a new iteration rather than silently identified with the earlier promptotype." | variant-with-increment | Increment: the identity rule, that a re-run is a new promptotype | Keep only the identity rule; the non-determinism premise is L-01. |
| F-24 | §2.3, l.171 | "In the SZD workflow, the accepted promptotype therefore consists neither of the transcription interface alone nor of the code that produces it." | repetition | F-10 | Delete or reduce; also a style defect (double negative apposition). |
| F-25 | §2.3, l.171 | "It connects the maintained account of the source material and transcription purpose with the implemented pipeline and interface, the referenced corpus state, and the documented authority attached to its checked and unchecked outputs." | variant-with-increment | Increment: the case instantiation, which fills each member of the relation with SZD content | Keep. **Third statement of the relation inside §2.3**, but warranted as the only place where the abstract members are given concrete referents. |
| F-26 | §2.3, l.171 | "This relation makes it possible to inspect what the artefact operationalises, how the resulting claims were examined, and on what basis a particular state was accepted." | repetition | F-12 | Delete. |
| F-27 | §3.4, l.221 | "An accepted promptotype is a bounded and identifiable scholarly state rather than a final or universally adequate product." | variant-with-increment | Increment: the epistemic characterisation as a *scholarly state* | Keep the characterisation; the non-finality clause is covered by F-18. |
| F-28 | §3.4, l.221 | "It connects maintained project knowledge, a referenced state of the research data, a functional artefact, and the documented grounds on which responsible contributors judged that state adequate for a specified purpose." | repetition | F-05, F-13 | Delete. **This is one half of the doubled in-section statement the plan directs to be reduced.** |
| F-29 | §3.4, l.221 | "Acceptance stabilises this relation sufficiently for exploration, internal use, comparison, handover, or publication without implying that later sources, corrected data, changed requirements, or alternative interpretations cannot produce another iteration." | repetition | F-17, F-18, F-19 | Delete. |
| F-30 | §3.4, l.221 | "Publication introduces additional obligations because external users must be able to understand the purpose, data basis, limitations, and status of the released artefact." | unique | — | Keep. §3.4. |
| F-31 | §3.4, l.221 | "**The relevant requirement is therefore not the exact reproduction of the generative development process but the reconstructability of the accepted relation among research data, project knowledge, code, artefact, verification evidence, and grounds of acceptance.**" | variant-with-increment | Increment: reconstructability replaces reproducibility as the requirement, and the relation is stated in its six-member form (adding code and verification evidence) | Keep. **This is the statement of the relation that survives in §3.4**, since it carries the section's thesis. |
| F-32 | §3.4, l.221 | "Deterministic components such as preserved transformations, tests, or builds may remain reproducible, while model behaviour and human judgement cannot be replayed exactly." | unique | — | Keep. §3.4. |
| F-33 | §3.4, l.221 | "Reconstructability preserves the basis on which a promptotype can later be understood, criticised, continued, or revised, even though no documentation can capture every interaction, discarded alternative, or element of tacit competence." | unique | — | Keep. §3.4. |
| F-34 | §3.4, l.221 | "Promptotyping thereby organises generative implementation as an accountable part of computer-based research by connecting expanded implementation capacity with inspectable project knowledge, competent verification, bounded claims, and recoverable grounds of acceptance." | repetition | F-31, A-32, B-10 | Delete. **Third enumeration inside §3.4**; a fourth member list in a section that already carries two. **deviation**: the plan names a doubling; the sweep found a tripling. |
| F-35 | §4, l.225 | "What recurs is the attempt to bring maintained project knowledge, a digital research artefact, a referenced data state, and documented grounds of acceptance into an identifiable relation." | repetition | F-05 | Reduce to "What recurs is the attempt to bring these into an identifiable relation" with a back-reference to §2.2, or delete. **deviation**: not named in the plan; found by the sweep. |
| F-36 | §4.3, l.289 | "Across the cases, acceptance remains purpose-specific and depends on the competence and authority appropriate to the intended use." | variant-with-increment | Increment: purpose-specificity as a cross-case empirical finding rather than a definition | Keep. §4.3. |
| F-37 | §5.3, l.339 | "…and each accepted promptotype makes the result inspectable in its relation to that knowledge, the referenced data state, and the grounds of acceptance." | repetition | F-05 | Reduce to "…and each accepted promptotype makes the result inspectable." **deviation**: the plan protects only the Abstract in cluster F; the conclusion's re-enumeration is not needed once the paragraph keeps A-42. |

Notes on cluster F:

- **Terminology drift.** The fourth member of the relation is named "documented grounds of verification and acceptance" (l.5), "documented grounds of acceptance" (l.15, l.85, l.101, l.169, l.225), "verification record" (l.165), "the documented grounds on which responsible contributors judged that state adequate" (l.221) and "verification evidence, and grounds of acceptance" as two separate members (l.221). The rewrite should fix one canonical member list in §2.2 and let every other occurrence use it verbatim or refer to it. This is a precondition for the deduplication, because otherwise a verifier cannot decide whether two occurrences are the same claim.
- **Member count drift.** The relation has four members at l.5, l.85, l.101, l.165, l.169, l.221 and l.225, three at l.103 and l.339, and six at l.221 (reconstructability sentence, adding code and verification evidence). The six-member form in F-31 is the widest; if it is intended as the same relation, say so, and if the additional members are deliberate, say why they enter only there.

**Cluster F totals: 37 components — 16 `unique`, 14 `repetition`, 7 `variant-with-increment`. Of the repetitions, 2 are protected and stay.**

---

# Further clusters found by the full sweep

The clusters below were not part of the brief. Their canonical homes are proposals and need operator confirmation before a rewrite acts on them. They are inventoried to the same standard so that a verifier can use them the same way.

## Cluster G — Externalisation cannot supply competence a project lacks

| ID | Location | Wording (exact or near-exact) | Class | Covered by / Increment | Proposed action |
| :---- | :---- | :---- | :---- | :---- | :---- |
| G-01 | §1.1, l.27 | "This does not replace modelling, software-engineering competence, or critical judgement…" | repetition | G-03 | Delete; see A-04. |
| G-02 | §2.4, l.191 | "Maintained documentation may be incomplete or mistaken, and its adequacy continues to depend on relevant scholarly and technical expertise. The method cannot supply domain competence that a project lacks…" | repetition | G-03, G-05 | Reduce to a clause inside the §2.4 scope paragraph, which is carried by B-08 and B-09. |
| G-03 | §3.3, l.217 | "**What can be externalised is therefore the articulable part of competence rather than competence itself.**" | unique | — | Keep. **Proposed canonical home**: §3.3. |
| G-04 | §3.3, l.217 | "…they cannot fully contain familiarity with a corpus, disciplinary judgement, recognition of exceptional cases, technical diagnosis, or responsibility for scholarly and technical adequacy." | unique | — | Keep. §3.3. The enumeration of the non-articulable remainder exists only here. |
| G-05 | §5.1, l.301 | "**Promptotyping cannot externalise knowledge that a practitioner does not possess or cannot recognise as relevant.** A well-structured template may support articulation, but it cannot supply missing domain competence." | repetition | G-03 | Reduce to a back-reference to §3.3. |
| G-06 | §5.1, l.301 | "Weak or misleading project documents can guide an agent towards an equally weak or misleading implementation." | unique | — | Keep. §5.1. The garbage-in consequence is stated only here. |

**Totals: 6 components — 3 `unique`, 3 `repetition`, 0 `variant-with-increment`.**

## Cluster H — Jaggedness, and benchmarks do not predict practice

| ID | Location | Wording (exact or near-exact) | Class | Covered by / Increment | Proposed action |
| :---- | :---- | :---- | :---- | :---- | :---- |
| H-01 | §2.3, l.157 | "Apparently similar tasks may also differ considerably in reliability, and this boundary cannot be inferred from surface difficulty alone (Dell'Acqua et al. 2023)." | variant-with-increment | Increment: the consequence for the Critical Expert's required competence, which is §2.3's subject | Keep only as the consequence; the jaggedness premise moves to a back-reference to §3. Note the forward reference, since §2.3 precedes the concept's introduction in §3. |
| H-02 | §3 intro, l.199 | "…results in programming, mathematical reasoning, and formal proof demonstrate capabilities that remain highly variable across tasks, benchmarks, and conditions.[^24]" | unique | — | Keep. **Proposed canonical home** for the empirical jaggedness claim: §3 intro. |
| H-03 | §3 intro, l.199 | "This combination of expanding capacity and persistent *jaggedness*…" | unique | — | Keep; see D-01. |
| H-04 | §3.3, l.217 | "The jaggedness observed in model performance reinforces rather than weakens this argument." | unique | — | Keep. §3.3. The argumentative move (jaggedness supports asymmetry) is made only here. |
| H-05 | §3.3, l.217 | "Strong results on some complex tasks do not imply reliable performance on apparently similar ones…" | repetition | H-01, H-02, and fn27 | Delete. |
| H-06 | §3.3, l.217 | "…and benchmark capability does not translate uniformly into productivity within mature projects or demanding research settings.[^27]" | unique | — | Keep. §3.3. This is the Becker-backed claim and the only place the productivity gap appears in the body. |
| H-07 | fn27, l.548 | "The location of this boundary may be difficult for users to predict from superficial task similarity." | repetition | H-01 | Delete from the note; the body carries it at H-01. |

**Totals: 7 components — 4 `unique`, 2 `repetition`, 1 `variant-with-increment`.**

## Cluster I — Every representation is selective

| ID | Location | Wording (exact or near-exact) | Class | Covered by / Increment | Proposed action |
| :---- | :---- | :---- | :---- | :---- | :---- |
| I-01 | §1.1, l.19 | "…structured research data: selective representations in which particular aspects of research material are made computationally explicit and thereby available for defined operations." | unique | — | Keep. **Proposed canonical home** for data selectivity: §1.1, where the term is defined. |
| I-02 | §1.1, l.23 | "Project-specific digital research artefacts do not eliminate selection or constraint, since every model and interface remains selective." | repetition | I-04 | Delete; §3.1 argues it. |
| I-03 | §2.2, l.91 | "It creates a selective representation for particular human and agentic addressees at a particular point in the project…" | variant-with-increment | Increment: selectivity indexed to *addressees* and to a point in time, which is what makes Distillation pragmatic modelling | Keep only the increment. |
| I-04 | §3.1, l.205 | "A project-specific digital research artefact gives functional form to a selective scholarly understanding by determining which entities, relations, uncertainties, comparisons, and actions become available." | unique | — | Keep. **Proposed canonical home** for artefact selectivity: §3.1. |
| I-05 | §3.1, l.205 | "This selectivity remains whether the artefact is implemented manually or through an LLM-based agent, since generated interfaces, transformations, and workflows may reproduce conventions and assumptions that were never deliberately selected or justified." | unique | — | Keep. §3.1. The generative-specific aggravation. |
| I-06 | §3.2, l.213 | "…research data that are already selective, machine-actionable representations shaped by decisions about entities, categories, relations, omissions, and degrees of precision (Owens 2011; Posner 2015)." | repetition | I-01 | Reduce to the premise clause carrying the citations; the enumeration duplicates I-01 and I-04. |

**Totals: 6 components — 3 `unique`, 2 `repetition`, 1 `variant-with-increment`.**

## Cluster J — Generic tools constrain inquiry

| ID | Location | Wording (exact or near-exact) | Class | Covered by / Increment | Proposed action |
| :---- | :---- | :---- | :---- | :---- | :---- |
| J-01 | §1, l.9 | The CSV / *Gephi* / project-specific TEI example, closing "A tool such as *Gephi* can operationalise only the distinctions supported by its own representational model." | unique | — | Keep. **Proposed canonical home**: §1. |
| J-02 | §1, l.13 | "Mapping data into an existing tool may require less implementation effort than developing a project-specific artefact, but it also confines subsequent work to the distinctions, operations, and forms of interaction that the tool provides." | unique | — | Keep. §1. States the trade-off, which J-01 does not. |
| J-03 | §1.1, l.23 | "Generic tools provide predefined representations, operations, and forms of interaction that may not correspond to the distinctions or practices of a particular project, requiring researchers to adapt their inquiry to assumptions that were not developed for their data or purpose." | variant-with-increment | Increment: "requiring researchers to adapt their inquiry to assumptions that were not developed for their data or purpose" | Keep only the increment; the enumeration repeats J-02 verbatim in structure. |
| J-04 | §1.1, l.23 | "Digital tool criticism has accordingly shown that the data models, operations, and interfaces provided by software participate in scholarly knowledge production rather than serving as neutral means of access…" | unique | — | Keep. §1.1. The tool-criticism grounding. See the apparatus section for its citations. |
| J-05 | §5.3, l.339 | "The paper opened with a CSV file that becomes a network in *Gephi* and with project-specific TEI that does not. Working with digital research data has long meant adapting them to the distinctions a generic tool can process, and accepting the loss of what it cannot." | repetition | J-01, J-03 | Keep. **protected** (the conclusion's deliberate return to the opening). |

**Totals: 5 components — 3 `unique`, 1 `repetition` (protected), 1 `variant-with-increment`.**

## Cluster K — LLMs make project-specific artefacts practicable

The phrase "make it more practicable to develop and compare" and its variants recur seven times across five sections.

| ID | Location | Wording (exact or near-exact) | Class | Covered by / Increment | Proposed action |
| :---- | :---- | :---- | :---- | :---- | :---- |
| K-01 | §1, l.13 | "**By reducing parts of the implementation effort, LLM-based code generation can make it more practicable to develop and compare project-specific artefacts that operationalise different scholarly requirements rather than relying exclusively on the categories and interactions provided by generic tools.**" | unique | — | Keep. **Proposed canonical home**: §1. |
| K-02 | §1.1, l.23 | "They can, however, make it more practicable to develop and compare operationalisations derived from a project's research questions, data model, and scholarly practices." | repetition | K-01 | Delete. |
| K-03 | §1.1, l.27 | "LLM-based systems can reduce parts of the implementation work, making it more practicable to develop project-specific digital research artefacts within the research process." | variant-with-increment | Increment: "within the research process", which sets up the argument that implementation becomes part of determining requirements | Keep only the increment clause. |
| K-04 | §1.1, l.27 | "**Implementation thereby becomes part of determining both how researchers wish to work with their data and what those data can warrantably support.**" | unique | — | Keep. §1.1. |
| K-05 | §2.4, l.179 | "Project-specific tools can make research data usable for particular forms of analysis and allow researchers to compare alternative operationalisations…" | repetition | K-01 | Delete; §2.4's paragraph is about the accessibility risk, not the benefit. |
| K-06 | §3, l.201 | "Its epistemic significance therefore lies not simply in producing software more efficiently, but in widening the range of computational forms through which researchers can investigate their material, compare operationalisations, and develop their questions, models, and interpretations." | variant-with-increment | Increment: the epistemic (rather than economic) framing of the same capacity | Keep. §3. |
| K-07 | §3.1, l.209 | "Promptotyping can amplify computer-based research by making more such operational forms practicable and allowing scholarly assumptions to become actionable, examinable, and revisable within the research process." | variant-with-increment | Increment: assumptions become actionable, examinable and revisable, which connects to backtalk | Keep only the increment. |
| K-08 | §5.3, l.341 | "The change this enables is modal rather than economic. Project-specific artefacts, comparisons of alternative operationalisations, and functional demonstrators become practicable in settings that previously could not resource them at all." | variant-with-increment | Increment: the modal-versus-economic distinction and the resourcing threshold | Keep. §5.3. |

**Totals: 8 components — 2 `unique`, 2 `repetition`, 4 `variant-with-increment`.**

## Cluster L — Non-determinism of generative implementation

| ID | Location | Wording (exact or near-exact) | Class | Covered by / Increment | Proposed action |
| :---- | :---- | :---- | :---- | :---- | :---- |
| L-01 | §2.3, l.125 | "Natural-language descriptions retain ambiguity, and different agent runs may realise the same requirement differently. A detailed specification therefore does not guarantee an adequate result." | unique | — | Keep. **Proposed canonical home**: §2.3. |
| L-02 | §2.3, l.169 | "Re-running the same knowledge documents with another model may produce a different implementation…" | repetition | L-01 | Delete the premise, keep the identity rule; see F-23. |
| L-03 | §2.4, l.189 | "…or ensure that another model will interpret the same documents in the same way." | repetition | L-01 | Delete; see E-11. |
| L-04 | §3.4, l.221 | "Since generative implementation is non-deterministic and model-dependent, running the same project documents again may produce different code or another artefact." | variant-with-increment | Increment: names the property (non-deterministic and model-dependent) as the premise of reconstructability | Keep. §3.4, as the premise F-31 needs. |

**Totals: 4 components — 1 `unique`, 2 `repetition`, 1 `variant-with-increment`.**

## Cluster M — Formal checks do not establish scholarly adequacy

The largest undeclared cluster. The claim occurs eight times across six sections.

| ID | Location | Wording (exact or near-exact) | Class | Covered by / Increment | Proposed action |
| :---- | :---- | :---- | :---- | :---- | :---- |
| M-01 | §2.3, l.133 | "Passing validation establishes conformity to the formalised condition, not the scholarly adequacy of that condition." | unique | — | Keep. **Proposed canonical home**: §2.3, inside the definition of deterministic validation. |
| M-02 | §2.3, l.139 | "Such testing can establish conformance to the requirement as written. It cannot establish that the requirement itself adequately represents the scholarly practice from which it was derived." | variant-with-increment | Increment: the object is the *requirement*, not the formalised condition, which is what distinguishes acceptance testing from validation | Keep. §2.3. Warranted because each checking form needs its own limit. |
| M-03 | §2.3, l.155 | "Passing any number of formal checks cannot establish the adequacy of distinctions that were never formalised or determine whether the formalised model is appropriate for the scholarly purpose." | variant-with-increment | Increment: the non-reversibility of the validation/verification conversion, and the never-formalised remainder | Keep only the increment; the "cannot establish adequacy" limb is M-01. |
| M-04 | §2.4, l.185 | "Neither establishes that the formalised condition was appropriate, that the representation remains faithful to the research material, or that the artefact is adequate for its intended scholarly purpose." | repetition | M-01, M-02 | Delete; see A-31. |
| M-05 | §2.4, l.187 | "…passing tests does not establish scholarly adequacy…" | repetition | M-01 | Keep. **protected** (limb of the A-36 triad). |
| M-06 | §3.2, l.213 | "…conformity to a document cannot by itself establish scholarly adequacy." | variant-with-increment | Increment: the object is a *knowledge document*, which is what semi-formality implies | Keep. §3.2. |
| M-07 | §4.2 (teiCrafter), l.273 | "Schema validity can establish formal conformance but not textual, structural, or semantic adequacy, which remains subject to editorial judgement." | variant-with-increment | Increment: the case instance and the three named adequacy dimensions | Keep. §4.2. |
| M-08 | §5.2, l.330 | "Formal checks alone are insufficient because an artefact can pass tests while representing its material inadequately." | variant-with-increment | Increment: the evaluation-design consequence, that artefact quality cannot be measured by formal checks | Keep. §5.2. |

**Totals: 8 components — 1 `unique`, 2 `repetition` (1 protected), 5 `variant-with-increment`.**

## Cluster N — Context Engineering and Agentic Engineering defined twice

Both definitions are given in §1.2 and again in §2.1, near-verbatim, roughly thirty lines apart.

| ID | Location | Wording (exact or near-exact) | Class | Covered by / Increment | Proposed action |
| :---- | :---- | :---- | :---- | :---- | :---- |
| N-01 | §1.2, l.33 | "*Context Engineering* refers here to the systematic maintenance and provision of the information an LLM-based system requires for its work." + the extension of Prompt Engineering (Schulhoff et al. 2024; Mei et al. 2025) | unique | — | Keep. **Proposed canonical home**: §1.2. |
| N-02 | §1.2, l.35 | "*Agentic Engineering* refers here to the systematic organisation of this extended work. It concerns how tasks are decomposed and coordinated, how agents use tools and respond to intermediate results, when human intervention is required, and how their work is inspected and continued." | unique | — | Keep. **Proposed canonical home**: §1.2. |
| N-03 | §2.1, l.67 | "*Context Engineering* comprises the organisation, maintenance, and task-specific provision of this knowledge. It extends beyond composing an individual prompt because the relevant context persists across the work and changes as the project's understanding develops." | repetition | N-01 | Delete. |
| N-04 | §2.1, l.67 | "*Agentic Engineering* structures how an agent acts on that context within an AI harness. It concerns how work is bounded and coordinated, which project resources the agent may use, how it responds to intermediate results, and when human intervention is required." | repetition | N-02 | Delete. |
| N-05 | §2.1, l.67 | "Context Engineering establishes the knowledge available for the task; Agentic Engineering organises how implementation proceeds from it." | unique | — | Keep. **The increment that earns §2.1 its paragraph**: the division of labour between the two. |
| N-06 | §2.1, l.69 | "The two remain interdependent. A carefully maintained knowledge base does not determine how an agent should proceed, while a well-organised agentic workflow cannot compensate for an inadequate account of the data or research purpose." | unique | — | Keep. §2.1. |
| N-07 | §2.2, l.91 | "It is the principal documentary operation of Context Engineering within the method." | unique | — | Keep. §2.2. Locates Distillation inside Context Engineering. |

**Totals: 7 components — 5 `unique`, 2 `repetition`, 0 `variant-with-increment`.**

## Cluster O — Context capacity is no substitute for selection

| ID | Location | Wording (exact or near-exact) | Class | Covered by / Increment | Proposed action |
| :---- | :---- | :---- | :---- | :---- | :---- |
| O-01 | §1.2, l.33 | "Context Engineering does not consist in placing all available material into a context window. It maintains an inspectable body of project knowledge from which task-specific context can be selected and refreshed." | variant-with-increment | Increment: the clause is definitional at this point, marking off Context Engineering from accumulation | Keep as part of N-01. |
| O-02 | §2.1, l.51 | "It neither replaces the research data nor reproduces them in full, but provides a task-relevant account of their meaning and of the conditions under which they can be used." | variant-with-increment | Increment: the knowledge base stands in a defined relation to the data (account of meaning and conditions of use) | Keep only the increment; the "does not reproduce in full" limb is O-04. |
| O-03 | §2.1, l.73 | "This distinction prevents Distillation from becoming a demand to reproduce all relevant source material in Markdown." | repetition | O-01, O-04 | Delete. |
| O-04 | §2.1, l.75 | "Nominal context capacity does not imply that all information placed in a context window will be used uniformly or reliably (Hong, Troynikov, and Huber 2025). Promptotyping therefore treats selection as a necessary part of context design rather than treating accumulation as a substitute for it." | unique | — | Keep. **Proposed canonical home**: §2.1. This is the citation-bearing statement. |
| O-05 | §2.1, l.75 | "The description does not replace the data, and direct access to the data does not replace the knowledge required to interpret them." | unique | — | Keep. §2.1. The bidirectional claim is made only here. |
| O-06 | §2.3, l.115 | "…exposing structural observations without requiring the full collection to be reproduced in the model context." | repetition | O-07 | Delete; §2.3 states the same point twice, two paragraphs apart. |
| O-07 | §2.3, l.117 | "The complete facsimile and metadata collections need not be placed in the model context. The resulting operations can act on project resources through the execution environment supplied by the harness." | variant-with-increment | Increment: the case instantiation, and the role of the execution environment | Keep. §2.3. |
| O-08 | fn16, l.526 | "This separation is configurable. An agent may inspect selected data directly, or generated operations may process the data locally while only a structural and semantic description enters the model context, an arrangement particularly relevant to restricted material." | variant-with-increment | Increment: configurability, and the relevance to restricted material | Keep. |

**Totals: 8 components — 2 `unique`, 2 `repetition`, 4 `variant-with-increment`.**

## Cluster P — The knowledge base as the reference against which implementation is examined

| ID | Location | Wording (exact or near-exact) | Class | Covered by / Increment | Proposed action |
| :---- | :---- | :---- | :---- | :---- | :---- |
| P-01 | §2.1, l.69 | "It provides an inspectable basis from which the agent can carry out bounded work and against which the resulting implementation can be examined." | repetition | P-02 | Delete; see A-09. |
| P-02 | §2.3, l.125 | "The knowledge base provides the maintained reference from which implementation proceeds and against which its consequences can be examined." | unique | — | Keep. **Proposed canonical home**: §2.3, where it follows from L-01. |
| P-03 | §2.4, l.193 | "…they provide an inspectable structure through which technically plausible output can be subjected to scholarly and technical judgement." | variant-with-increment | Increment: the object is technically plausible output, linking the structure to the AI-slop problem of §2.4 | Keep. §2.4. |
| P-04 | §3.2, l.213 | "Their epistemic importance lies in maintaining an inspectable relation between scholarly understanding and functional implementation…" | variant-with-increment | Increment: the epistemic characterisation of the relation | Keep. §3.2. |

**Totals: 4 components — 1 `unique`, 1 `repetition`, 2 `variant-with-increment`.**

## Cluster Q — The method-definition sentence stated three times

| ID | Location | Wording (exact or near-exact) | Class | Covered by / Increment | Proposed action |
| :---- | :---- | :---- | :---- | :---- | :---- |
| Q-01 | Abstract, l.5 | "an iterative, knowledge-driven method for developing project-specific digital research artefacts from structured research data and maintained project knowledge through Context Engineering and Agentic Engineering" | repetition | Q-03 | Keep. **protected** (abstract self-containment). |
| Q-02 | §1, l.15 | "…an iterative, knowledge-driven method for developing project-specific digital research artefacts from structured research data and maintained project knowledge through LLM-based AI agents." | repetition | Q-03 | Reduce to the term introduction. Note the substitution of "LLM-based AI agents" for "Context Engineering and Agentic Engineering", which makes the two statements differ in what the method operates through. |
| Q-03 | §2.1, l.49 | "***Promptotyping*** **is an iterative, knowledge-driven method for developing project-specific digital research artefacts from structured research data and maintained project knowledge through Context Engineering and Agentic Engineering.**" | unique | — | Keep. **Proposed canonical home**: §2.1, where the term is formally defined. |

**Totals: 3 components — 1 `unique`, 2 `repetition` (1 protected).**

## Cluster R — What an AI harness mediates, stated four times

| ID | Location | Wording (exact or near-exact) | Class | Covered by / Increment | Proposed action |
| :---- | :---- | :---- | :---- | :---- | :---- |
| R-01 | §1.2, l.37 | "An *AI harness* is the technical environment through which an agent receives context, accesses project resources, uses tools, and obtains feedback." + "A harness may provide controlled access to project files, execution environments, tests, and running artefacts while maintaining state and permissions." | unique | — | Keep. **Proposed canonical home**: §1.2. |
| R-02 | §1.2, l.39 | "…the agent can inspect and modify files, execute commands, examine outputs, test results, and diffs, and use this feedback to determine subsequent actions." | repetition | R-01 | Delete the capability list; the paragraph's argument is the delegation span (C-02, C-03). |
| R-03 | §2.2, l.95 | "…while the harness mediates its access to project files, execution environments, tools, tests, and the running artefact." | repetition | R-01 | Reduce to "within an AI harness". |
| R-04 | §2.3, l.117 | "For a particular task, the AI harness assembles a working context from the maintained knowledge documents and any additional material needed for that task." | unique | — | Keep. §2.3. Context assembly is a distinct harness function, not in R-01. |
| R-05 | fn11, l.516 | "In each case, however, an AI harness mediates the agent's access to project files, tools, command execution, and the resulting outputs through which subsequent actions are informed." | repetition | R-01 | Delete from the note; keep the examples and the interface-variation claim, which are the note's increment. |

**Totals: 5 components — 2 `unique`, 3 `repetition`.**

## Cluster S — The SZD case told twice (§2.3 worked example against §4.2 case entry)

§2.3 signposts the split at l.107 ("the project's development history and evidential status are examined separately in Section 4.2"), so the two treatments are intended. The material descriptions and the checking-state description are nevertheless repeated rather than divided.

| ID | Location | Wording (exact or near-exact) | Class | Covered by / Increment | Proposed action |
| :---- | :---- | :---- | :---- | :---- | :---- |
| S-01 | §2.3, l.107 | "The pipeline processes an evolving collection of facsimile scans from the Stefan Zweig estate at the Literaturarchiv Salzburg." | unique | — | Keep. **Proposed canonical home** for the material description: §2.3. |
| S-02 | §4.2, l.249 | "The Stefan Zweig Digital HTR pipeline processes heterogeneous facsimile scans from the Stefan Zweig estate at the Literaturarchiv Salzburg." | repetition | S-01 | Reduce to a naming clause with a back-reference to §2.3. |
| S-03 | §2.3, l.109 | "Differences among document types and hands affected which instructions and processing routes were appropriate." | unique | — | Keep. §2.3. |
| S-04 | §4.2, l.249 | "TEI metadata provides object-specific context and determines which instructions and processing routes are applied to different source types.[^28]" | repetition | S-03 and l.107 | Delete; keep only fn28 as the source note. |
| S-05 | §2.3, l.151 | "A *human-checked* transcription has been examined page by page against its facsimile. An *agent-checked* transcription indicates that a vision-language model compared the image and transcription, but it does not carry human authorisation. Material that has undergone neither form of checking remains explicitly marked as *unchecked*. These states are not combined into a generic confidence score…" | unique | — | Keep. **Proposed canonical home** for the three checking states: §2.3. |
| S-06 | §4.2, l.249 | "The implemented environment marks transcriptions as human-checked, agent-checked, or unchecked… The case shows that production-scale verification depends on maintaining the provenance and authority of different checks rather than reducing them to one confidence value." | variant-with-increment | Increment: the case-level finding formulated as a finding | Keep only the finding; delete the restatement of the three states. |
| S-07 | §2.3, l.153 | "Human corrections also preserve the machine-generated transcription in an edit history. This makes the intervention traceable…" | unique | — | Keep. §2.3. |
| S-08 | §4.2, l.249 | "…while human corrections preserve the generated state in an edit history." | repetition | S-07 | Delete. |
| S-09 | §4.2, l.249 | "Exploration across the material showed that the central problem was not only transcription quality but the operational separation of generated output, model-mediated review, and authorised human examination. These findings were distilled into an annotation protocol and verification concept." | unique | — | Keep. §4.2. This is the development-history content the split reserves for §4.2. |

**Totals: 9 components — 5 `unique`, 3 `repetition`, 1 `variant-with-increment`.**

## Cluster T — Single scholar-developer and the evidential limitation

| ID | Location | Wording (exact or near-exact) | Class | Covered by / Increment | Proposed action |
| :---- | :---- | :---- | :---- | :---- | :---- |
| T-01 | Abstract, l.5 | "…a method developed through two years of recorded experimental practice led by a single scholar-developer… its comparative effectiveness and transferability remain to be evaluated." | repetition | T-05 | Keep. **protected** (abstract self-containment). |
| T-02 | §3.3, l.217 | "Since Promptotyping was developed predominantly through the practice of a hybrid scholar-developer, the documented cases demonstrate most directly how existing scholarly and technical competence can be extended; they do not yet establish that researchers without comparable technical experience can independently steer the same range of artefacts." | variant-with-increment | Increment: what the cases *do* demonstrate, namely the extension of existing competence | Keep only the increment plus a forward reference to §5.1. |
| T-03 | §4.1, l.229 | "The selection is also biased towards projects that reached inspectable states and does not provide a systematic record of abandoned work or unsuccessful alternatives." | unique | — | Keep. §4.1. Already cross-referenced from §5.1, so no duplication remains. |
| T-04 | §5, l.295 | "They show that the method is workable within the practice from which it was consolidated, not that it outperforms alternatives or transfers beyond it." | variant-with-increment | Increment: the chapter framing that organises §5.1 to §5.3 | Keep. §5 intro. |
| T-05 | §5.1, l.299 | "The method was consolidated primarily through projects led by one hybrid scholar-developer. There is no control condition, no common evaluation protocol across cases, and no systematic record of failed or abandoned attempts; as noted in Section 4.1, the surviving repositories are biased towards work that reached an inspectable state." | unique | — | Keep. **Proposed canonical home**: §5.1. |
| T-06 | §5.1, l.299 | "Model capabilities also changed during the period in which the projects were developed. Observed improvements cannot therefore be separated cleanly into effects of the method, increased practitioner experience, deeper project attention, or stronger models." | unique | — | Keep. §5.1. The confounding argument is made only here. |
| T-07 | §5.2, l.323 | "**The most important open question is whether a domain expert without a programming background can use the method to produce and verify an artefact of scholarly value without continuing hybrid assistance.**" | variant-with-increment | Increment: turns T-02's limitation into the paper's leading evaluation question | Keep. §5.2. |
| T-08 | §4.3, l.291 | "Collaboration cases show that scholarly and technical responsibility can be distributed, but documented third-party continuation remains limited and must be evaluated through sustained project work rather than workshop completion alone." | variant-with-increment | Increment: the teaching and collaboration evidence base specifically | Keep. §4.3. Note the near-duplicate with §5.2 l.332 ("Transferability should be assessed through independent use rather than workshop completion"); keep the empirical statement in §4.3 and the evaluation criterion in §5.2. |

**Totals: 8 components — 3 `unique`, 1 `repetition` (protected), 4 `variant-with-increment`.**

## Cluster U — The user-stories sentence

| ID | Location | Wording (exact or near-exact) | Class | Covered by / Increment | Proposed action |
| :---- | :---- | :---- | :---- | :---- | :---- |
| U-01 | §2.1, l.55 | "A `requirements.md` connects scholarly practices with expected system behaviour through user stories and acceptance criteria." | repetition | U-02 | Reduce to "A `requirements.md` records user stories and acceptance criteria." |
| U-02 | §2.2, l.87 | "…while user stories and acceptance criteria connect descriptions of scholarly practice with expected system behaviour (Lucassen et al. 2016)." | unique | — | Keep. **Proposed canonical home**: §2.2, where Requirements Engineering is located and the citation sits. |

**Totals: 2 components — 1 `unique`, 1 `repetition`.**

## Redundancy that is warranted and must not be removed

A verifier working through the tables above will encounter these passages and should not flag them:

- **Figure captions.** Captions 1 to 5 (l.85, l.123, l.257, l.263, l.269) restate their surrounding body text by design, because a caption must be readable independently of the running text. One exception needs action, A-45, where a caption carries argumentative content that appears nowhere in the body.
- **The Abstract.** A-01, C-01, E-01, F-01, Q-01 and T-01 all repeat body content. An abstract is self-contained by convention.
- **Table 1 and Table 3.** Both tables restate the surrounding prose in tabular form. That is the point of a table.
- **The §5.3 return to the opening.** J-05 deliberately reprises §1.
- **Per-checking-form limits.** M-01, M-02 and A-19 each state a limit for a different checking form. The similarity is structural, and collapsing them would remove the differentiation that §2.3 exists to establish.

---

# Apparatus defects

Footnote markers were checked mechanically. All 33 footnotes are defined, all are used exactly once, and their use order matches their numbering. No orphan and no duplicate marker exists.

## D1 — Footnotes 22 and 23 are word-identical

Verified by hash: the text of `[^22]` (l.538) and `[^23]` (l.540) is byte-identical, including all four sources (McLoughlin et al., Opara-Martins et al., de Souza et al., Barker et al.).

The proposed split was checked against the two anchoring sentences and holds:

- **l.189**, "Persistent project knowledge may reduce some forms of provider dependence, but it does not guarantee the portability or exact reproducibility of the development process.[^22]" The sentence claims exactly two things, limited transparency and reproducibility under proprietary models, and limited portability. McLoughlin et al. supports the first, Opara-Martins et al. the second. **fn22 keeps McLoughlin and Opara-Martins**, together with the two framing sentences on model internals and on vendor lock-in.
- **l.191**, "Nor does it provide the maintenance, security, operational reliability, resourcing, and continued stewardship required for sustainable research software.[^23]" De Souza et al. supplies maintainability, testability, resourcing, support, governance, shared ownership and stewardship; Barker et al. supplies the FAIR4RS frame. **fn23 keeps de Souza and Barker**, together with the third framing sentence on technical and organisational sustainability.

One residue: "security" and "operational reliability" in the l.191 sentence are covered by neither remaining source. Either widen the note or drop the two items from the claim.

## D2 — Footnotes 12 and 24 both introduce Kwa et al.

fn12 is anchored at l.41 (§1.2) and fn24 at l.199 (§3 intro), so fn12 is first, as the plan assumes.

Shared between the two notes, and therefore removable from fn24:

- the definition of the task-completion time horizon as task duration measured in human expert completion time at a stated reliability;
- the task domains software engineering, machine-learning research engineering, and cybersecurity;
- the exponential increase between 2019 and 2025, approximately doubling every seven months;
- the Kwa et al. citation itself.

Increments that must survive:

- **fn12 only**: "The measure refers to the human time required to complete a task rather than the agent's actual runtime." This clarification appears nowhere else and must stay in the first note.
- **fn24 only**: the external-validity caution ("The authors explicitly caution that the external validity of this trend remains uncertain"); the fourth task domain "general reasoning tasks", which fn12's list omits; and the closing sentence on mathematical-reasoning and formal-proof evaluations with its caution against reading them as a general measure of research automation.

Proposed form of fn24: a cross-reference to n. 12, then the external-validity caution, then the maths and proof sentence.

Terminological drift to fix at the same time: fn12 calls the measure "task-completion time horizon", fn24 "50%-task-completion time horizon", for the same construct.

Unsourced claim inside fn24: "Results from mathematical reasoning and formal-proof evaluations provide additional evidence of rapidly expanding but task-dependent capabilities." The body sentence at l.199 makes the same claim about "programming, mathematical reasoning, and formal proof". Neither carries a source for the maths and proof half. Either add one or restrict the claim to what Kwa et al. supports.

## D3 — Footnotes 17 and 28 share a word-identical sentence

`[^17]` (l.528) and `[^28]` (l.550) both end with "The production pipeline discussed here is a project-specific implementation and should not be inferred solely from the public platform." fn28 additionally carries the platform URL, which fn17 lacks although fn17 is the earlier note.

Proposal: fn17, as the first mention, carries the URL, the access date, and the caveat; fn28 reduces to a cross-reference to n. 17.

## D4 — Mixed citation apparatus for the same works

The manuscript uses author-date in the body and full-note style in the footnotes. Three works appear in both systems, which produces two bibliographic identities for one source:

- **Carver et al. 2022**: author-date at l.27 and a full note in fn18, with a References entry.
- **Dell'Acqua et al. 2023**: author-date at l.157 and a full note in fn27, with a References entry.
- **Pollin 2026b**: full note in fn25 only, although a References entry exists. It should be cited as author-date like the other Pollin items.

Decide one rule (a work listed in References is always cited author-date, wherever it occurs) and apply it.

## D5 — Author-date citation with no bibliographic resolution

`[^15]` (l.524) opens "Karpathy (2026) describes one contemporary arrangement…". This is an author-date citation, but no References entry exists and the note gives no full citation or URL. It resolves nowhere. Add a References entry or convert the note to full-note style.

## D6 — Cited in the text but absent from References

| Citation | Location | Note |
| :---- | :---- | :---- |
| Ciula et al. 2023 | §1.1, l.21 | No entry. |
| Fickers 2020 | §1.1, l.23 | No entry. |
| van Es 2023 | §1.1, l.23 | Year mismatch. References has van Es, Wieringa, and Schäfer 2018. Either correct the year to 2018 or add the 2023 work. |
| Herrmann et al. 2023 | §1.1, l.23 | No entry. |
| Russell and Norvig 2020 | §2.1, l.51 | No entry. |
| Lewis et al. 2020 | §2.1, l.71 | No entry. |
| Schön 1996 | §3.1, l.209 | No entry. |
| Goldschmidt 2003 | §3.1, l.209 | No entry. |

The tool-criticism citation at l.23 deserves separate attention. It cites three works, none of which resolves, while the two obvious tool-criticism entries already in References, Koolen, van Gorp, and van Ossenbruggen 2019 and van Es, Wieringa, and Schäfer 2018, are never cited anywhere. The likeliest reading is that the citation was written from memory and the References list from a different pass.

Two further entries are named without a year, so they carry no author-date link although References entries exist: **Galey and Ruecker** and **Whitelaw**, both in fn26 (l.546). Add the years.

## D7 — Listed in References but never cited

Twenty-nine entries appear in the References list and are cited neither in the body nor in any footnote:

Alenezi 2026; Andorfer 2026; Berners-Lee, Hendler, and Lassila 2001; Berners-Lee with Witt 2025; Broy and Kuhrmann 2021; Cao 2026; Chue Hong et al. 2022; Drucker 2014; Flanders and Jannidis 2015; Gruber 1993; Hinrichs, Forlini, and Moynihan 2019; Holmes and Takeda 2023; Jetter 2022; Koolen, van Gorp, and van Ossenbruggen 2019; Marwick, Boettiger, and Mullen 2018; Miksa et al. 2019; Pierazzo 2015; Pollin 2023; Pollin 2024; Pollin 2025c; Pollin 2026c; Risam and Gil 2022; Roberts 2007; Salinas, Cueva, and Paz 2020; Siemens 2009; Strutz 2025; Strutz 2026; TEI Consortium 2026; Windhager et al. 2019.

Three of these are worth deciding rather than simply deleting:

- **Chue Hong et al. 2022** (the RDA FAIR4RS principles) is listed but never cited, while fn22 and fn23 cite Barker et al. 2022 for the same principles as a full note. One of the two should be the paper's FAIR4RS reference.
- **Drucker 2014** and **Flanders and Jannidis 2015** are second entries for authors whose other work is cited (Drucker 2011, Flanders and Jannidis 2019). Check whether a citation was meant to point at these.
- **Pollin 2024** and **Pollin 2026c** are the same item, the continuously versioned workshop series on Zenodo, listed twice with different identifiers (`zenodo.org/records/20529814` and `doi.org/10.5281/zenodo.10647754`). Merge into one entry or state explicitly why two versions are listed separately.

## D8 — Style defects noticed while inventorying

Not redundancy, but they sit inside passages the rewrite will touch anyway:

- l.345, "The contribution is amplification, not replacement." Trailing negative apposition.
- l.343, "The method's provisions become more consequential, not less." Trailing negative apposition.
- l.171, "…consists neither of the transcription interface alone nor of the code that produces it." Definition by double negation where the positive statement follows immediately.
- l.39, "The methodologically relevant change is not only increased model capability, but also…" Reads more directly as a positive statement.

---

# Totals and verifier checklist

## Component counts

| Cluster | Subject | Components | `unique` | `repetition` | `variant-with-increment` | Protected repetitions |
| :---- | :---- | ----: | ----: | ----: | ----: | ----: |
| A | Responsibility thesis | 46 | 13 | 25 | 8 | 6 |
| B | RSE boundary | 12 | 5 | 6 | 1 | 1 |
| C | Persistence of knowledge | 19 | 9 | 8 | 2 | 3 |
| D | Asymmetry list | 13 | 9 | 1 | 3 | 0 |
| E | Write-back | 16 | 7 | 4 | 5 | 1 |
| F | Promptotype definition | 37 | 16 | 14 | 7 | 2 |
| **A–F subtotal** | | **143** | **59** | **58** | **26** | **13** |
| G | Competence cannot be supplied | 6 | 3 | 3 | 0 | 0 |
| H | Jaggedness and benchmarks | 7 | 4 | 2 | 1 | 0 |
| I | Selectivity of representations | 6 | 3 | 2 | 1 | 0 |
| J | Generic tools constrain inquiry | 5 | 3 | 1 | 1 | 1 |
| K | Artefacts made practicable | 8 | 2 | 2 | 4 | 0 |
| L | Non-determinism | 4 | 1 | 2 | 1 | 0 |
| M | Formal checks and adequacy | 8 | 1 | 2 | 5 | 1 |
| N | CE and AE defined twice | 7 | 5 | 2 | 0 | 0 |
| O | Capacity is not selection | 8 | 2 | 2 | 4 | 0 |
| P | Knowledge base as reference | 4 | 1 | 1 | 2 | 0 |
| Q | Method-definition sentence | 3 | 1 | 2 | 0 | 1 |
| R | What the harness mediates | 5 | 2 | 3 | 0 | 0 |
| S | SZD told twice | 9 | 5 | 3 | 1 | 0 |
| T | Scholar-developer limitation | 8 | 3 | 1 | 4 | 1 |
| U | User-stories sentence | 2 | 1 | 1 | 0 | 0 |
| **G–U subtotal** | | **90** | **37** | **29** | **24** | **4** |
| **Total** | | **233** | **96** | **87** | **50** | **17** |

Seventy repetitions are deletable without loss. Seventeen repetitions are protected by an editorial convention and stay. Ninety-six `unique` components and fifty named increments must survive the rewrite, one hundred and forty-six items in all.

## How to verify the rewritten text

1. For every row classed `unique`, find the claim in the rewritten manuscript, at the canonical home named in the row. A `unique` component that has disappeared is an information loss and must be restored.
2. For every row classed `variant-with-increment`, find the named increment. The repeated part should be gone; the increment must be present, at the same location unless the row says otherwise.
3. For every row classed `repetition` and not flagged **protected**, confirm the passage is gone. A surviving repetition is an incomplete deduplication, not an error of substance.
4. For every row flagged **protected**, confirm the passage is still there. Removing one of these is an over-deduplication.
5. Check the seven rows flagged **deviation** (A-40, A-45, C-09, D-05, F-34, F-35, F-37) against the operator's plan before accepting them. Each states its reason in the row.
6. Work through the eight apparatus defects D1 to D8 separately. They are independent of the prose rewrite and can be verified against the footnote block and References list alone.

## Structural consequences the rewrite must handle

These are not claims and cannot be ticked off, but a rewrite that follows the inventory will produce them and must resolve them:

- Deleting §2.3 l.175 (B-04 to B-07) removes the transition into §2.4. One linking sentence is needed.
- Deleting the responsibility sentences in §2.1 l.49 and §2.3 l.119 (A-05, A-07 or A-15, A-13, A-14) shortens two paragraphs that currently close on them. Both need a new closing sentence.
- A-45 proposes moving a rule out of a figure caption into §2.4. The caption then needs a compressed replacement that still stands alone.
- Cluster F requires fixing one canonical member list for the four-part relation before any occurrence is deleted, because otherwise two occurrences cannot be compared.
- H-01 refers forward to a concept introduced in §3. If §2.3 keeps only the consequence, it needs an explicit forward reference.
