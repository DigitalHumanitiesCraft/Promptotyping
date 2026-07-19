---
section: 6
title: Discussion
anchor: abschnitt-6-discussion
source: Pollin 2026
source-lines: 316-392
subsections:
  - { id: 6.1, anchor: discussion-reproducibility, title: Reproducibility }
  - { id: 6.2, anchor: discussion-delegation, title: Delegation, Control, and Autonomy Zones }
  - { id: 6.3, anchor: discussion-critical-expert, title: The Critical Expert as Precondition }
  - { id: 6.4, anchor: discussion-cognitive-load, title: Cognitive Load }
  - { id: 6.5, anchor: discussion-amplification, title: Cost, Access, and Asymmetric Amplification }
  - { id: 6.6, anchor: discussion-vibe-research, title: Vibe Research and Structural Bias }
  - { id: 6.7, anchor: discussion-pedagogy, title: Pedagogical Evidence }
  - { id: 6.8, anchor: discussion-transferability, title: Transferability and Impact on Digital Humanities }
---

# 6. Discussion

The method raises questions at four levels: scholarly integrity (how to ensure reproducibility, where to draw the line of delegation, and why a Critical Expert is structurally necessary), practical sustainability (cognitive load and cost), epistemological risk (whether LLM-assisted research changes what counts as research), and scope (pedagogical evidence and impact on Digital Humanities).

## 6.1 Reproducibility

A Promptotyping process generates hundreds of thousands of tokens in interaction. Archiving this interaction is neither practical nor meaningful, as LLMs are non-deterministic — identical prompts do not produce identical outputs. What can be documented is not the token sequence but the decision process: what was tried, what was decided, why, and what was discarded. The Promptotyping Documents encode this process. The reproducibility concept thus shifts from "identical repetition" to "documented decision trail", analogous to process documentation in qualitative research. Abdurahman et al. (2025) provide related recommendations for reproducible LLM use in social science, emphasising transparency of prompts, model versions, and parameters.

This is not a claim about traceability of LLM reasoning — that remains opaque. The claim is narrower: the human decisions that shaped the project are documentable and reconstructable from the Promptotyping Documents and the version control history.

## 6.2 Delegation, Control, and Autonomy Zones

A tension runs through the documented projects between speed (delegating more to the agent) and control (maintaining human oversight). The evidence suggests three zones of agent autonomy, distinguished by the verifiability of the task and the consequences of errors.

In the first zone — _full autonomy_ — the agent operates on tasks whose correctness can be verified deterministically: schema validation, test execution, code formatting, build processes, file system operations. Errors are caught automatically and do not propagate. In the ZBZ project, over 30 Python scripts were generated and maintained entirely through Claude Code without manual review; the 381 regression tests in the Medieval Legal Transactions project serve the same function. The agent can work unsupervised because the feedback loop is closed.

In the second zone — _supervised autonomy_ — the agent produces outputs that require expert inspection at defined Verification Milestones: OCR results, TEI annotations, entity reconciliation, data transformations. The Promptotyping Interfaces described in Section 5.3 exist precisely for this zone — they make intermediate results visible so the Critical Expert can evaluate quality before errors propagate downstream. The boundary is not trust in the model but the availability of verification infrastructure.

In the third zone — _human-only tasks_ — interpretation, contextualisation, and judgement remain with the researcher. When a medieval document references a "Ruprecht Plankenfelder," determining whether this is the same person as a "Ruprecht" in another document requires historical contextualisation that the model cannot perform — a boundary the Medieval Legal Transactions project explicitly marks. Formulating research questions, evaluating whether the right questions are being asked, and deciding when a result is "good enough" are tasks that resist delegation because they require the metareflective capacity of the Critical Expert.

The method does not prescribe where these boundaries lie — they depend on the domain, the data, and the consequences of errors. What the method provides is the infrastructure to make the boundaries visible and the reasoning behind them traceable.

The three zones describe what is delegated. In multi-agent mode (Section 3.5), a horizontal dimension is added: what is delegated _to whom_, and how do the outputs of differently zoned tasks interact? The Research Lead Agent operates at the boundary between zones — assigning Sub-Agents to tasks within their respective zones (a formatting Sub-Agent in full autonomy, an annotation Sub-Agent in supervised autonomy), integrating their outputs into the shared vault, and escalating human-only tasks to the Critical Expert with the relevant context already assembled. The autonomy zones thus become a routing rule rather than a personal-attention budget. This shifts the cognitive load described in Section 6.4: the Critical Expert no longer monitors multiple parallel agents directly but reads the Research Lead Agent's structured reports, intervening at the points where the Lead Agent itself escalates. Whether this re-stratification reduces the load or merely displaces it — substituting the strain of monitoring agents with the strain of designing the organisation — is an open empirical question that the documented projects begin to answer but cannot yet settle.

## 6.3 The Critical Expert as Precondition

The Critical Expert in the Loop (Section 2.4) is not an optional quality-assurance step but a structural precondition for the method. The three failure modes described in Section 2.4 — sycophancy, confabulation, and the unexplored possibility space — are not bugs to be fixed but structural properties of the current generation of LLMs. They define the boundary of what can be delegated: anything that requires detecting plausible-but-false outputs, probing for disagreement, or reflecting on which questions were _not_ asked remains irreducibly human. The Stefan Zweig experiment (Section 4.2) illustrates this concretely: Claude proposed AI-assisted features, collaboration, and visualisation unprompted. The Critical Expert's intervention was to reduce complexity — knowing that the research context did not need these capabilities. Without domain judgement, the tool would have been technically functional but epistemically misaligned.

The delegation framework in Section 6.2 operationalises this: the Critical Expert defines the autonomy zones, designs the Verification Milestones, and evaluates outputs at each checkpoint. The method does not work without this role. As the models improve (Section 2.7), the Critical Expert's task shifts — less time correcting syntax, more time evaluating whether the right questions are being asked — but the role itself becomes more important, not less.

## 6.4 Cognitive Load

Parallel agent orchestration is productive but cognitively demanding. The process documentation explicitly characterises monitoring multiple Claude Code instances as "not healthy" as a sustained work practice. The paradigm of acceleration must be confronted with the question of whether the resulting work practices are sustainable.

## 6.5 Cost, Access, and Asymmetric Amplification

Effective Promptotyping requires access to Frontier LLMs, which currently cost approximately $200/month or more for individual subscriptions. Open-source alternatives require substantial computational infrastructure. This creates access inequalities that the method does not resolve. The question of who can afford this research practice is not peripheral but structural (Hao 2025).

Yet the cost calculation has two sides. The coOCR-HTR project — ~17,000 lines of production code, 567 tests, 6 LLM providers, internationalisation, community fork — was produced by a single researcher over two months, with a prototype on the first day. The ZBZ pipeline processed 4,150 pages for less than 10 EUR in OCR costs. These are not automation stories but examples of what a domain expert with methodological literacy can produce at a fraction of the cost of traditional development teams. The $200/month subscription replaces not the researcher but the development infrastructure.

This dynamic is an instance of what we have elsewhere described as _asymmetric amplification_ (Pollin 2026c) — a multi-dimensional phenomenon. The _expertise dimension_: researchers with deeper domain knowledge produce better Promptotyping Documents and therefore better outputs, widening the gap between experts and novices. The _economic dimension_: those who can afford frontier model access benefit disproportionately, while those without access fall further behind. The _domain dimension_: fields characterised by computer-based work with structured data — software development, quantitative research, Digital Humanities — are amplified more strongly than fields where LLM capabilities are weaker, a pattern Dell'Acqua et al. (2025) formalise as the "jagged technological frontier." The _infrastructure dimension_: researchers whose data already follows semantic standards (TEI-XML, RDF, CMIF) can leverage LLMs more effectively than those working with unstructured data, because standards and ontologies provide the shared vocabulary that bridges human intent and machine processing.

Asymmetric amplification is not a feature of Promptotyping specifically but a structural property of LLM-assisted work. The method makes it visible rather than obscuring it.

## 6.6 Vibe Research and Structural Bias

If Vibe Coding generates code without thorough review, _Vibe Research_ would generate research outputs without deep understanding. Promptotyping operates in this border region. In documented experiments, the author generated ontologies, annotation schemas, and data models using LLMs, always verifying and validating the outputs. The question of whether one is still _conducting_ research or merely _commissioning_ it cannot be conclusively answered. What can be offered is the infrastructure to make the process transparent and the decisions traceable.

A related concern is whether shared reliance on the same Frontier models introduces structural biases into research outputs. Since every project brings different data, different research questions, and different Promptotyping Documents, the outputs themselves are not homogeneous. But the model's training and alignment may favour certain solution patterns, code architectures, or reasoning styles over others. This is not epistemic homogenisation in the strong sense but a subtler question about the defaults that shape LLM-assisted work. The Critical Expert's metareflective capacity is one mitigation; diversity of models and tools is another.

## 6.7 Pedagogical Evidence

The method has been taught in structured educational settings, which provides evidence for its communicability and pedagogical transferability, though not for empirical validation of its effectiveness.

At the ACDH-CH AI Winter School (February 2026, full day, DH scholars), participants worked through all four Promptotyping phases with Claude Code: they analysed an Enhancement dataset, created `DATA.md` and `USER-STORY.md` documents, generated a working HTML prototype, and reflected on the process — including where human intervention was necessary and where the model made decisions not derivable from the documents.[^vid-winterschool]

At the Data Steward Graz module (January 2026, 210 minutes, data stewards from university libraries and research services), participants produced `DATA.md` and `USER-STORY.md` from a shared dataset and evaluated the FAIR-data quality prerequisites for effective Promptotyping.

At the Museumsbund Österreich workshop (April 2026, 4.5 hours, museum professionals), Promptotyping is taught as a method for moving from collection data to functional tools, with case studies from documented projects and a live demonstration of the Promptotyping process.

In parallel, the foundational competencies are developed through dedicated curricula. The AI Coding Literacy workshop at the Naturhistorisches Museum Wien (February 2026, 20 museum staff without programming background) established a 7-dimension competency framework — Computational Thinking, Requirement Engineering, Context Engineering, Prompt Engineering, Code Literacy, Review, and Domain Expertise — that describes the prerequisites for effective Promptotyping practice.

The method is also applied in project cooperations where non-developer domain experts use Promptotyping to build research tools. The VetMedAI project at the Veterinärmedizinische Universität Wien produced three Promptotypes for administrative processes (knowledge balance dashboard, reporting system) through a structured cycle of one-pager documentation, initial workshop, development workshop, and coaching sessions.

These observations do not constitute empirical validation. They indicate that the method is communicable, that participants with diverse backgrounds can follow the four phases, and that the resulting Promptotyping Documents and prototypes are produced within the time frames of workshops and project cooperations. The institutional urgency of such training is underlined by the prevalence of Shadow AI, the unauthorised use of LLM tools outside institutional frameworks (Silic et al. 2025). Structured methods like Promptotyping offer an alternative to prohibition by providing accountable workflows.

[^vid-winterschool]: Workshop materials available at https://digitalhumanitiescraft.github.io/ai-coding-literacy

## 6.8 Transferability and Impact on Digital Humanities

All documented projects originate in the Digital Humanities or adjacent fields (economic research data in the wiiw project, social work in the FemPrompt project). The method is designed around structured research data, which makes it most directly applicable in fields where data has explicit schemas, standards, or ontological commitments. Transferability to domains with less structured data or different validation requirements remains to be demonstrated.

The anticipated impact on Digital Humanities research specifically is substantial, for structural reasons. DH is a field characterised by computer-based, data-driven work with semantically enriched formats — precisely the domain where current LLMs are strongest and where the technical trajectory described in Section 2.7 produces the most rapid capability gains. The combination of structured research data (providing machine-readable context), established standards (providing shared vocabularies), and a tradition of interdisciplinary tool building (providing the methodological disposition for human-machine collaboration) makes DH an environment where Promptotyping can operate at full effectiveness.

The 20 documented projects are not hypothetical demonstrations but functional research tools in active use. They span digital scholarly editions, museum collection interfaces, OCR/TEI pipelines, archival exploration systems, literature review infrastructure, and institutional research mapping — covering a significant portion of the DH tool landscape. The progression from a two-hour annotation tool to a six-week pipeline processing 4,150 pages suggests that the method scales with project complexity rather than reaching a ceiling.

This is not a prediction about future capabilities but an observation about the present: the documented projects already show that a single researcher with domain expertise and methodological literacy can produce, in weeks, research interfaces that approximate the output of small development teams working over months. The institutional question — how DH centres, libraries, archives, and research infrastructures respond to this shift — is beyond the scope of this paper but is arguably the most consequential implication of the method.
