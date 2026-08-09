---
title: Claim Audit against the Promoted Paper
status: snapshot
language: en
created: '2026-07-31'
updated: '2026-07-31'
related:
- state
- register-paper-sources
- journal
---

# Claim Audit against the Promoted Paper (2026-07-31)

Read-only audit of every claim under `30_assertions/` against the five-chapter text promoted to the repository's `knowledge/paper.md` on 2026-07-30. Commissioned by the operator ("sollten wir überprüfen"); run by an audit agent, verified against the vault validator (`0 errors`, schema conform). Verdicts: **CARRIED** (the promoted text still makes a statement the claim supports), **MOVED** (supported statement survives elsewhere or weakened), **ORPHANED** (no supported statement remains), **INTERNAL** (the claim supports the vault's or site's own record; paper changes do not affect it). Nothing was edited; this document routes the follow-up round, which belongs to a vault session.

## Summary

| Verdict | Count |
|---|---|
| CARRIED | 36 |
| MOVED | 36 |
| ORPHANED | 68 |
| INTERNAL | 13 |
| UNDECIDED | 0 |
| Total claims (153 files; the 7 MOCs excluded) | 153 |

An orphaned claim keeps its file per the register rule (checked material stays findable); the verdict bounds what the paper can be said to rest on, and the site's own pages remain a live use for several groups below.

## Per-claim verdicts

`claim-slug | VERDICT | new section | note`

```
a-prototype-can-embody-a-peer-reviewable-argument | CARRIED | 3.1 / fn26 | "Prototypes can function as experiments and arguments because their structures … embody claims"
an-open-tei-encoding-benchmark-exists-for-llm-generated-encodings | ORPHANED | - | no missing-benchmark statement survives anywhere
applied-genai-dh-workshop-series-2024 | ORPHANED | - | 4.3 names workshops without dates; the 2024 deposit dating has no attachment
aqusa-checks-the-criteria-a-rule-can-decide | INTERNAL | - | site script-vs-LLM vocabulary; claim names the site itself
austrian-dashboard-universities-verified-2026-07-19 | INTERNAL | - | claim file already records it as a repository finding, never a paper figure
bookkeeping-ontology-session-driven | ORPHANED | - | 1.1 keeps DEPCHA/Bookkeeping Ontology, drops all class-level detail
boundary-objects-are-plastic-yet-robust-across-communities | ORPHANED | - | concept absent since 2026-07-25; confirmed absent from promoted text
client-side-provenance-tool-is-a-precedent-for-server-free-artefacts | ORPHANED | - | the static-artefact precedent footnote is gone
collections-as-data-are-intentional | ORPHANED | - | no collections-as-data passage
conceptual-model-links-language-and-domain-concepts | CARRIED | 3.2 | "semi-formal conceptual models that abbreviate the project for a particular purpose"
context-engineering-systematic-inference-context | CARRIED | 1.2 | "from individual prompts to the wider informational environment in which they are interpreted"
context-rot-nonuniform-degradation-with-length | CARRIED | 2.1 | "all information placed in a context window will be used uniformly or reliably"
coocr-htr-figures-verified-2026-07-19 | ORPHANED | - | coOCR/HTR survives in 4.2 with no counts at all
coordinated-multiple-views-enable-exploration | MOVED | 4.2 | only a descriptive "coordinated maps, timelines, correspondent views"; the CMV premise is gone
correspexplorer-figures-verified-2026-07-19 | ORPHANED | - | case survives in 4.2, all figures dropped
correspexplorer-knowledge-userstory-count-2026-07-19 | ORPHANED | - | no document or user-story counts in the promoted text
critical-expert-in-the-loop-double-reflection-loop | MOVED | 2.3 | term survives as "specifies what generic human-in-the-loop arrangements leave open"; double loop dropped
deck-characterises-llms-as-jagged-alien | ORPHANED | - | attachment point (a Jagged-Alien passage) was never written; still true of the promoted text
deck-derives-context-and-verification-from-llm-profile | ORPHANED | - | 1.2 argues harness from its own sources; the deck derivation is never reported
deep-dive-process-documented-2019 | MOVED | 1.1 | Pollin 2019 now carries "normalise and publish heterogeneous datasets"; the 2019 dating of the process is gone
dh-intermediary-bridges-researchers-and-technical-staff | MOVED | 1.1 | reduced to the collaboration citation group; the "field answered its translation problem" framing is gone
dh-projects-build-teams-to-hold-competences-together | ORPHANED | - | 3.3 distributes competence but makes no team-building statement
dialogue-agent-behaviour-is-described-as-role-play | INTERNAL | - | site coinage "role simulation"
diataxis-separates-documentation-along-action-and-cognition | CARRIED | 2.1 | declarative / process / action knowledge documents, stated uncited
digital-editing-converges-on-static-self-contained-artefact | ORPHANED | - | the whole static-artefact chapter is gone
digital-edition-is-interface-gui-and-api | ORPHANED | - | no GUI/API statement remains
digital-history-collaboration-is-a-trading-zone | ORPHANED | - | Kemman still cited in 1.1, but "trading zone" appears only in the reference list
digital-tool-criticism-demands-reflection-on-tools | CARRIED | 1.1 | "software participate in scholarly knowledge production rather than serving as neutral means"
discarded-visualisations-retain-epistemic-value | ORPHANED | - | 4.1 mentions abandoned work only as a gap in the record
dissertation-dikw-cognitive-agent-premise | ORPHANED | - | no DIKW passage
dissertation-requirements-feed-built-artifacts | ORPHANED | - | 1.1 states the opposite, that capacity to realise them was lacking
dissertation-requirements-from-deep-dive-sessions | CARRIED | 1.1 | "combines requirements engineering with sustained engagement with scholars, their source material"
do-one-thing-well-favours-small-specialised-tools-over-monolithic-platforms | MOVED | 1.1 | survives only as the generic-tools argument, uncited; the Unix framing and dashboard contrast are gone
duration-cost-figures-experiential | INTERNAL | - | record of what the verification could not decide
edition-ai-benchmarks-lacking-and-reproducibility-favours-local-models | MOVED | 5.1 | only the local-model half: "does not test how far the method remains effective with local or less capable models"
edition-interface-embodies-editorial-decisions | MOVED | 4.2 / 3.1 | "Operationalises an editorial model of texts and their relations", uncited
endings-durability-through-static-no-dependencies | ORPHANED | - | static-artefact chapter dropped
endings-static-artefacts-minimise-maintenance | ORPHANED | - | static-artefact chapter dropped
epistemic-forms-are-target-knowledge-structures | ORPHANED | - | Table 2 now sorts by "dominant scholarly function"; no epistemic-forms grounding
experimental-prototype-yields-knowledge-not-product | MOVED | 3.1 | "The research contribution lies not in the existence of a runnable artefact alone", uncited
expert-role-carries-a-domain-and-a-development-judgement | CARRIED | 2.3 | "a domain specialist may determine whether an encoding … a technical contributor assesses the implementation"
exploration-resumed-inside-an-implementation-milestone | CARRIED | 2.2 | "a changed understanding of what the data can support returns the work to Exploration"
exploratory-collection-visualisation-is-a-rich-design-space | MOVED | fn26 / 4.2 | survives as an uncited gesture to "research on interactive information visualisation and visual analytics"
fair-emphasises-machine-actionability-of-data | CARRIED | 1.1 / fn7 | "supporting the machine-actionability and reuse of research data across systems"
fair-principles-findable-accessible-interoperable-reusable | CARRIED | fn7 | "conditions under which research data should be Findable, Accessible, Interoperable, and Reusable"
fair4rs-provenance-and-identifier-principles | ORPHANED | - | FAIR4RS appears only inside fn23 on sustainability; no promptotype-as-artefact yardstick
fanous-frontier-models-sycophantic-in-most-cases | ORPHANED | - | no rate or majority statement remains
femprompt-figures-verified-2026-07-19 | ORPHANED | - | FemPrompt is not among the seven cases
field-literature-records-llm-code-generation-and-tei-agent-line-by-2024 | MOVED | 4.2 | only "an early Custom GPT experiment"; the 2024 genealogy waypoint is gone
frontmatter-core-reduced-to-six-fields | INTERNAL | - | site template convention; 2.1 says filenames are not constitutive
generalised-dashboard-flattens-context-specific-detail | CARRIED | 1.1 | "did not determine which distinctions should be foregrounded or which operations … either investigation required"
generous-interfaces-reveal-collection-through-browsing | CARRIED | fn26 | "generous interfaces support browsing, overview, and exploration"
glam-practice-layers-llm-extraction-with-deterministic-checks-and-expert-review | MOVED | 2.3 | the three-layer checking architecture survives; the GLAM evidence is uncited
hans-gross-figures-verified-2026-07-19 | ORPHANED | - | project not in the promoted text
herdata-letter-count-2026-07-19 | ORPHANED | - | project not in the promoted text
humanities-data-are-capta-not-given | MOVED | 1.1 | Drucker now carries "become addressable through scholarly modelling decisions"; capta term dropped
humanities-data-is-constructed-not-given | CARRIED | 3.2 | "research data that are already selective, machine-actionable representations"
humanities-data-modelling-is-interpretive-shaping | MOVED | 1.1 | Flanders/Jannidis now carries "which distinctions can be represented and processed computationally"
implementation-plan-cuts-work-into-checkable-milestones | MOVED | 2.2 | "Implementation proceeds through inspectable increments"; the implementation-plan document is gone
inherited-visualisation-conventions-carry-positivist-assumptions | MOVED | 3.1 | only the adjacent uncited "reproduce conventions and assumptions that were never deliberately selected"; Drucker 2014 is no longer in References
institutional-research-software-support-falls-short-of-need | CARRIED | 1.1 / fn18 | "the necessary expertise and resources are not equally available to individual researchers"
interface-defect-is-reported-through-the-element-identifier | ORPHANED | - | no such passage
klawiter-entries-verified-2026-07-19 | ORPHANED | - | project not in the promoted text
klawiter-test-count-2026-07-19 | ORPHANED | - | project not in the promoted text
kulturpool-repo-unresolvable-2026-07-19 | ORPHANED | - | project not in the promoted text
least-privilege-bounds-damage-and-narrows-the-audit | CARRIED | 2.3 | "permissions should follow the principle of least privilege"
llm-agents-plan-reason-and-use-tools-in-dynamic-environments | MOVED | 1.2 | definition survives in substance; carrier swapped to Sapkota 2026 / Wang 2024
llm-assistance-raises-performance-inside-and-lowers-it-outside-a-jagged-frontier | CARRIED | fn27 (3.3) | "improve performance for some tasks while reducing it for tasks outside"
llm-based-agents-for-software-engineering | MOVED | 1.2 | only "LLMs have become increasingly capable of … extended software-development tasks"; the SDD-orchestration mention is gone
llm-generated-tei-alters-content-and-modernises-language | MOVED | 2.3 / 4.2 | "Schema validity can establish formal conformance but not textual, structural, or semantic adequacy"
llm-judgement-approximates-human-preference-and-carries-known-biases | MOVED | 2.3 | "judges agree with domain experts only partially"; carrier is now Krumdick/Szymanski, and the paper is more restrictive
llm-reproducibility-transparency-recommendations | MOVED | 5.2 | "Model and harness should be recorded as experimental variables"; convergence passage rewritten
llm-vocabulary-test-2025-fell-short-of-thesaurus-interoperability | ORPHANED | - | the footnote that carried it is gone
llms-amplify-research-not-automate-it | CARRIED | 3 opening / fn25 | "Generative systems do not automate research as a whole or support every research activity equally"
lucina-figures-verified-2026-07-19 | ORPHANED | - | project left the inventory before the promotion
m3gim-decision-count-2026-07-19 | ORPHANED | - | M³GIM survives in 4.2 with no counts
macedo-first-process-taxonomy-sdd-frameworks | ORPHANED | - | Macedo still cited in 2.3, but the taxonomy-exists statement is gone
madmps-demand-documents-infrastructure-can-act-on | ORPHANED | - | no data-management-plan passage
making-source-data-machine-addressable-is-interpretive-modelling | MOVED | 1.1 / 3.2 | "become addressable through scholarly modelling decisions", uncited
medieval-test-count-2026-07-19 | ORPHANED | - | project not in the promoted text
medieval-xml-count-2026-07-19 | ORPHANED | - | project not in the promoted text
milestone-check-deferred-in-the-recorded-session | ORPHANED | - | no deferral account survives
minimal-computing-reduces-code-and-dependencies | ORPHANED | - | static-artefact chapter dropped
minimal-computing-resists-scale-as-innovation | ORPHANED | - | static-artefact chapter dropped
multi-agent-frameworks-assign-roles-along-an-encoded-procedure | MOVED | 2.3 | "Additional agents may be assigned to separate components or checks"; primary use stays the site sub-agent construct
nanopublication-binds-a-statement-to-the-annotations-that-carry-its-context | INTERNAL | - | prior art for the vault's own claim-document form
notker-figures-verified-2026-07-19 | ORPHANED | - | 4.2 keeps "a deliberately bounded sample from Psalm 2"; verse and control counts dropped
ontologies-are-shared-vocabularies-for-reuse | MOVED | 1.1 | "a shared model of historical accounting transactions to normalise and publish heterogeneous datasets"; Gruber dropped
ontology-derivation-yields-structure-and-exposes-model-defects | ORPHANED | - | 4.2 attributes exposure to interface use, not to ontology formalisation
ontology-is-explicit-specification-of-conceptualization | ORPHANED | - | Gruber is not in the promoted References
operationalisation-develops-a-measurement-for-a-concept | CARRIED | 1 | "depend on the operationalisation of research concepts and modelled distinctions"
overengineering-check-cuts-the-specification-before-implementation | ORPHANED | - | no overengineering check in the promoted text
owens-data-holds-evidentiary-value | ORPHANED | - | Owens still cited in 3.2, but for selectivity, not evidentiary status
promptotyping-documentation-over-software | ORPHANED | - | the genealogy narrative that carried it is reduced to one sentence in 2
promptotyping-documents-are-the-primary-artifact | MOVED | 2.1 | "an evolving and versioned project knowledge base"; the primary-artefact formula stays withdrawn
promptotyping-documents-form-freedom | CARRIED | 2.1 | "Their filenames and distribution are not constitutive of the method"
promptotyping-first-named-in-the-dissertation | CARRIED | 2 | "The term Promptotyping was first used in my dissertation"
promptotyping-is-a-four-phase-context-engineering-technique | MOVED | 2.2 | reframed: "These are recurrent forms of work rather than fixed project stages"
promptotyping-named-first-described-2025-04 | CARRIED | 2 | "subsequently developed in a blog post and a contribution to a scholarly portal"
qus-defines-thirteen-user-story-quality-criteria | MOVED | 2.2 | Lucassen now carries "user stories and acceptance criteria connect descriptions of scholarly practice"; the thirteen criteria are gone
radical-design-request-widens-the-interface-option-space | MOVED | 2.3 | "the possibility space from which it emerged"; the design request itself is gone
record-does-not-separate-document-depth-from-verification-effort | CARRIED | 5.1 | "cannot therefore be separated cleanly into effects of the method, increased practitioner experience"
record-has-no-failure-case-and-a-bounded-yield-pole | CARRIED | 4.1 / 5.1 | "does not provide a systematic record of abandoned work or unsuccessful alternatives"; bounded-yield half unused
reduced-frontmatter-core-met-in-about-half-the-documents-2026-07-26 | INTERNAL | - | dated self-observation of method uptake
reproducibility-shifts-to-documented-justification | CARRIED | 3.4 | "not the exact reproduction of the generative development process but the reconstructability"
research-compendium-separates-data-method-and-output | INTERNAL | - | backs the site's artefact pattern; Marwick pruned from the paper as uncited
research-data-is-defined-by-the-function-it-serves | MOVED | 1.1 | Geiger now carries "depends on the disciplinary and project context"; the functional criteria are gone
research-software-engineers-are-scarce | CARRIED | 1.1 | "not equally available to individual researchers and small projects"
ro-crate-packages-artefacts-with-machine-readable-metadata | ORPHANED | - | already orphaned 2026-07-24; unchanged
rse-institutionalised-intermediary-profession | MOVED | 1.1 | reduced to the collaboration citation group; the institutionalisation-as-answer framing is gone
sarkar-vibe-coding-material-disengagement | CARRIED | 2.3 | "generating code from natural-language instructions while accepting the implementation without thorough review"
schoech-distinguishes-smart-and-big-data | ORPHANED | - | Schöch still cited in 1.1, but for constructed data only
scholarly-primitives-classify-activities-not-interfaces | ORPHANED | - | the delimitation against activity taxonomies is gone
sdd-data-artefacts-describe-the-system-under-construction | CARRIED | 2.3 | "describe not only intended system behaviour but also research data and sources that precede the artefact"
sdd-frameworks-converge-on-specification-over-prompt | CARRIED | 2.3 | "persistent specifications provide a governing reference for agentic software development"
sdd-no-subject-matter-verification-role | CARRIED | 2.3 | "not merely a stakeholder requesting functionality but remains responsible for claims about the material"
sdd-review-examines-internal-coherence | ORPHANED | - | no statement about what SDD review examines
sdd-specifications-address-non-developers | ORPHANED | - | no statement about SDD readership
search-cannot-represent-collection-abundance | MOVED | fn26 | weakened to "where users cannot formulate a prior query"; abundance claim gone
section4-deviations-are-snapshot-drift-2026-07-19 | INTERNAL | - | record of the verification run's own method
section4-verification-single-agent-snapshot-2026-07-19 | INTERNAL | - | record of the verification run's own bounds
semantic-vocabulary-matching-stays-a-human-interpretive-task | MOVED | 2.3 | Table 1 row "Interpretation and contextualisation | Critical Expert verification", uncited
semantic-web-envisioned-agents-over-machine-processable-data | ORPHANED | - | fn6 glosses the Semantic Web via Hitzler; no founding-vision statement
shared-infrastructure-is-the-opposite-longevity-answer-to-the-self-contained-artefact | ORPHANED | - | the precedent footnote is gone
ssh-open-marketplace-models-workflows-as-step-sequences | MOVED | fn5 | "an organised sequence of interrelated operations, tools, decisions, and forms of verification", the paper's own definition
static-client-side-editions-reach-tens-of-thousands-of-units | ORPHANED | - | static-artefact chapter dropped
status-vocabulary-adds-active-and-snapshot | INTERNAL | - | site template convention
sycophancy-agreement-over-truth | CARRIED | 2.3 | "reproduce an assumption embedded in a request rather than challenge it"
szd-experiment-structured-vibe-coding | ORPHANED | - | fn14 lists other early experiments; the two-hour timeline tool is gone
szd-htr-confabulated-reading-in-hasty-kurrent | ORPHANED | - | "Kurrent" does not occur in the promoted text
szd-htr-fair4rs-audit-2026-07-23 | ORPHANED | - | the FAIR4RS passage it grounded is gone
tadirah-classifies-dh-research-activities | MOVED | fn1 | statement survives, carrier swapped from Borek 2016 to Borek et al. 2021
tadirah-most-adopted-yet-under-maintained | ORPHANED | - | no tool-registry or maintenance passage
tadirah-was-formalised-as-a-skos-knowledge-organization-system | CARRIED | fn1 | "the research activities described in TaDiRAH … (Borek et al. 2021)" with vocabs.dariah.eu
tei-evaluation-assigns-its-dimensions-to-different-checking-regimes | MOVED | 2.3 | the layering survives as Table 1, uncited; the claim still names it "Table 2"
tei-permits-several-valid-encodings-of-one-phenomenon | MOVED | 4.2 | "which remains subject to editorial judgement"; the multiplicity argument is gone
the-boundary-of-the-jagged-frontier-is-not-readable-from-a-task-in-advance | CARRIED | 2.3 | "whose boundary the Critical Expert cannot infer from surface difficulty alone"
toulmin-layout-separates-claim-grounds-warrant-and-backing | INTERNAL | - | vocabulary for the vault's own claim document
traditional-dmps-are-unused-compliance-documents | ORPHANED | - | no data-management-plan passage
unassisted-non-hybrid-artefact-production-is-unsupported | CARRIED | 5.2 | "whether a domain expert without a programming background can use the method … without continuing hybrid assistance"
unfinishedness-is-an-epistemic-value-in-the-digital-humanities | MOVED | 2.3 | "Closing an iteration does not imply that the project … has become final"; the disposability tension is gone
verification-promoted-to-document-function | INTERNAL | - | site document typology
vetmedai-excel-count-2026-07-19 | ORPHANED | - | project not in the promoted text
vetmedai-knowledge-doc-count-2026-07-19 | ORPHANED | - | project not in the promoted text
vibe-coding-speed-quality-tradeoff | ORPHANED | - | 2.3 keeps the Vibe-Coding delimitation, drops the speed-quality finding
visual-analytics-process-models-describe-process-not-interfaces | ORPHANED | - | the typology delimitation is gone
visualisation-is-research-process-not-means | CARRIED | 3.1 | "not only as means of presenting findings but also as forms of scholarly investigation"
well-modelled-data-does-not-discharge-critical-data-work | CARRIED | 5.1 | "do not remove the need to examine how the data were constructed, whose interests they represent"
wheaton-figures-verified-2026-07-19 | ORPHANED | - | 1.1 names the Wheaton Day Book without counts
wikidata-tool-registries-as-commons | ORPHANED | - | no tool-registry passage
zbz-commit-count-2026-07-19 | ORPHANED | - | ZBZ survives in 4.2 with no counts
zbz-figures-verified-2026-07-19 | ORPHANED | - | ZBZ survives in 4.2 with no counts
zbz-knowledge-doc-count-2026-07-19 | ORPHANED | - | ZBZ survives in 4.2 with no counts
```

## Orphaned groups and the remaining use of their chains

- **Static-artefact and handover family (10).** All still back the site's specification part 4; `_content/artefakt.md` and the glossary carry the self-contained-static-tool default and link these claims by anchor. The distillates for andorfer-2026, holmes-2023, risam-2022, mariani-2025, leipold-2026 and chuehong-2022 have no other claim.
- **Interface-typology grounding (7).** The epistemic-function typology left the paper but is the site's live vocabulary (operator decision 2026-07-31); the claims stay as the typology's grounding on the site side. Sole-claim distillates: collins-1993, unsworth-2000, sacha-2014; grallert-2026 has both claims orphaned.
- **Project-inventory figure claims (20 incl. the ZBZ three).** Built for the fourteen-project inventory; the promoted text carries no counts. Shared distillate `verification-paper-figures-2026-07-19` keeps a live use through the two INTERNAL `section4-*` claims. Five projects remain as named cases in 4.2 without figures; the rest left the paper entirely.
- **Dropped concepts (10).** Trading zone, boundary objects, DIKW, RO-Crate, maDMP, Semantic-Web vision, Gruber's ontology definition, confabulated Kurrent reading, TEI benchmark existence. Mostly sole-claim distillates; the dissertation distillate keeps many CARRIED claims, so its chain lives.
- **Genealogy and evidence passages (10)** and **reframed statements (9)**: see the notes column; most of their distillates co-ground surviving claims.

Distillates with no remaining use at all: `ke-master-deck-2026-07-19`, `m3gim-vocab-derivation-2026-07-24`, `szd-htr-evaluation-results-2026-06-10`, `szd-htr-fair4rs-audit-2026-07-23`, and the publication distillates for star-1989, soiland-2022, mariani-2025, leipold-2026, chuehong-2022, berners-lee-2001, collins-1993, unsworth-2000, sacha-2014, siemens-2009, fawzy-2025, kemman-2021, holmes-2023, risam-2022, andorfer-2026, grallert-2026, miksa-2019, strutz-2025, pollin-2024.

## Claim files whose own prose contradicts the promoted structure

To be edited in the follow-up vault session; none violates the schema.

1. `context-rot-nonuniform-degradation-with-length` asserts a Distillation principle of "maximum information with minimum tokens"; promoted §2.2 states the opposite ("not reducible to summarisation or token minimisation"). Highest priority.
2. Table-number drift in the three Strutz-derived claims: the checking layering is now **Table 1**, their prose says Table 2.
3. The twenty figure claims plus the two `section4-*` files reference a Section 4/5 role and a 2026-07-25 deliverable state that no longer exist; the filename freeze stays deliberate, the H1/statement prose needs re-keying.
4. `llm-agents-plan-reason-and-use-tools-in-dynamic-environments` calls Yehudai "the first peer-reviewed carrier the paper has for its agent term"; §1.2 now cites Sapkota 2026 and Wang 2024.
5. Four translation-problem claims describe an "answered translation problem" framing that promoted §1.1 does not make.
6. `do-one-thing-well-…` names a paper interface typology the paper no longer carries.
7. `edition-ai-benchmarks-…` and `an-open-tei-encoding-benchmark-…` point at a missing-benchmark argument that is gone.
8. `context-engineering-systematic-inference-context` claims adoption "in its introduction and its genealogy"; there is no genealogy section, and §1.2 says extends rather than supersedes.
9. `unfinishedness-…` names the disposable-process/durable-artefact tension of the dropped static-artefact chapter.
10. The FAIR4RS/static/precedent claims (see orphaned list) name passages that are gone.
11. Dated "checked against the deliverable on 2026-07-25" notes in seven files describe the seven-chapter state; verdicts survive, dates and section references are stale.

Beyond the claim layer: **`knowledge/state.md` § Section register is keyed to the seven-chapter structure** and still carries the 2026-07-29 transitional note about `paper-draft.md`; its claim-coverage-by-section table maps onto sections that no longer exist. That table is now the vault's largest stale artefact and the first target of the follow-up session.

## Follow-up routing

1. Re-key `knowledge/state.md` (section register, claim coverage) to the five-chapter structure.
2. Edit the claim files of the defect list above (prose re-keying; verdicts as recorded here).
3. Decide per orphaned group whether claims are marked with an orphaned note in their files or left to this audit as the record; the register rule keeps every file either way.
4. Re-run `python tools/validate.py .` and `build_site_index.py` after any claim edit.
