---
title: Revision-Audit A5 — Deckung und Herkunftsgrade der Belegschicht
project:
  name: Promptotyping Paper
  repository: https://github.com/DigitalHumanitiesCraft/Promptotyping
method:
  name: Promptotyping
  url: https://dhcraft.org/Promptotyping/
status: draft
language: de
version: 0.1
created: 2026-07-24
updated: 2026-07-24
authors: [Claude Opus 5, im Auftrag Christopher Pollin]
generated-with: Claude Code mit Claude Opus 5
related: [paper, paper-writing, revision-audit-a1, revision-audit-a2]
---

# Revision-Audit A5 — Deckung und Herkunftsgrade der Belegschicht

Auftrag waren zwei strukturelle Prüfungen des Grounded Vault unter `vault/`, die Abdeckung der Paper-Aussagen durch Claims und die Herkunftsqualität der vorhandenen Claims, dazu ein Schema-Vorschlag und eine Selbstanwendungsprüfung. Gelesen wurden `vault/CLAUDE.md`, `vault/README.md`, die sechs Dokumente in `vault/knowledge/` einschließlich `register-paper-sources.md`, `vault/tools/validate.py` vollständig, alle 119 Claims und ihre Frontmatter-Anker maschinell, die dreizehn Dokument-Repräsentationen mit ihren Metadatenblöcken, die Destillate der Dokument-Quellen im Volltext sowie `knowledge/paper.md` vollständig. Geschrieben wurde ausschließlich diese Datei. Kein Claim, keine Quelle, kein Destillat, keine Schemaänderung.

Zustand des Validators. `python tools/validate.py .` aus `vault/` meldet vor und nach dieser Prüfung `0 error(s), 0 warning(s)`.

Parallelarbeit. Während der Prüfung hat eine parallele Lane den Commit `baae1db` gesetzt (`Ground the revision round: ingest the two revision audits and the SZD-HTR error typology, build four claims for the new record statements`). Der Claim-Bestand wuchs unter den Händen von 118 auf 119; `20_claims/szd-htr-confabulated-reading-in-hasty-kurrent.md` existierte zu Beginn der Sitzung nicht und existiert am Ende. Alle Zählungen und Zitate unten beziehen sich auf den Stand nach `baae1db`, `knowledge/paper.md` mit MD5 `f56e42b5cf38d6ecc815f13a6777265b`.

Maßstab vorab. Die Belegschicht ist auf der Literaturachse in einem Zustand, den ich nicht erwartet hatte. 52 der zitierten Werke tragen mindestens einen Claim, die fünf verbleibenden sind mit Zugangsklasse und Begründung registriert. Die Lücken liegen fast vollständig auf der anderen Achse, bei den Aussagen des Papers über die eigene Praxis, die eigenen Projekte und die Lehre. Das ist der Befund, der die Prüfung strukturiert.

---

## Aufgabe 1 — Deckungsprüfung

### Vorgehen und Abgrenzung

Ich bin `knowledge/paper.md` Absatz für Absatz durchgegangen und habe jede Aussage geprüft, die etwas über die Welt, ein Projekt, eine Quelle oder den Forschungsstand behauptet und nach der ein Gutachter einen Beleg verlangen könnte. Nicht gezählt sind definierende Sätze (die vier Phasen, die fünf Interface-Kategorien, die Abgrenzung des Artefakttyps), methodenbeschreibende Passagen und ausgewiesene eigene Schlüsse, die das Paper als Inferenz markiert. Als gedeckt gilt eine Aussage, wenn ein Claim in `vault/20_claims` sie trägt, wobei ich den Claim-Text gegen den Paper-Satz gehalten habe statt nur die Existenz eines thematisch passenden Claims zu zählen.

Die Fundstellen sind selbst identifiziert. Der Abgleich lief maschinell über die Frontmatter-Anker aller Claims und die Volltexte der Destillate, die inhaltliche Zuordnung von Hand.

Die Reihenfolge folgt der Angriffsfläche für einen Gutachter, gemessen daran, wie leicht die Aussage überprüfbar ist, wie tragend sie für das Argument ist und wie stark die Formulierung über das hinausgeht, was die Belegschicht hergibt.

### Stufe A, sechs Lücken mit hoher Angriffsfläche

**L1. Sektion 2.5, die Abgrenzung gegen Spec-Driven Development steht gegen das eigene Destillat.**

Fundstelle `knowledge/paper.md`, Zeile 110.

> "Where these frameworks specify software products from requirements, Promptotyping specifies research artefacts derived from modelled research data, and three layers have no counterpart in them. Promptotyping carries a data layer describing the semantics and uncertainties of the sources, binds the specification to the scholarly verification duties of Section 6.2, and installs the Critical Expert in the Loop as the role that owns those duties."

Der Vault hält die Gegenevidenz bereits vor. `vault/10_distillates/documents/sdd-spec-kit-2026-07-24.md`, Statement `^s3`:

> "Its planning phase produces a dedicated `data-model.md` alongside research, contracts and quickstart artefacts, so a data-describing document exists in the framework's own artefact tree."

`vault/knowledge/state.md`, Zeile 96, benennt das als operator-pflichtigen Punkt und hält den Claim-Bau ausdrücklich an:

> "Two findings there bear on the paper text and need operator decision before any claim is built: Spec Kit's planning phase produces a `data-model.md`, so the paper's 'no counterpart' formula is false as stated for the data layer"

Einschätzung. Die Aussage im Paper ist zu ändern; ein Claim behebt hier nichts. Die Formel "no counterpart" ist für die Datenschicht als Existenzaussage widerlegt und wäre auf eine Gradabgrenzung umzustellen, etwa auf die Semantik- und Unsicherheitsbeschreibung der Quellen gegenüber einem aus der Feature-Spezifikation abgeleiteten Entitätsmodell. Danach sind aus den vier SDD-Destillaten die Claims zu bauen, die `state.md` bereits vorsieht. Dies ist die einzige Lücke im Bestand, bei der eine als falsch erkannte Aussage im Paper steht und der Vault die Widerlegung selbst trägt; ein Gutachter, der Spec Kit kennt, findet sie ohne Suche.

**L2. Sektion 5.4, die gesamte Transfer-Evidenz steht ohne einen einzigen Claim.**

Fundstelle `knowledge/paper.md`, Zeile 306.

> "At a full-day AI winter school for DH scholars (February 2026),[^winterschool] participants worked through all four phases with an agentic tool, produced data and user-story documents, generated a working prototype, and reflected on where human intervention was necessary. A data-steward training module (January 2026, 210 minutes) had participants produce the same document types from a shared dataset and evaluate the FAIR-data prerequisites of the method. A workshop of the Austrian museum association (April 2026)[^museum] taught the path from collection data to functional tools. In project cooperations, non-developer domain experts produced prototypes for administrative processes through a structured cycle of one-pager, workshop, and coaching."

Der Vault enthält zu keinem dieser vier Fälle eine Quelle, ein Destillat oder einen Claim. Suchen über den gesamten Bestand nach "winter school", "museum", "data steward", "210" liefern null Treffer in `00_representation/`, `10_distillates/` und `20_claims/`.

Das Gewicht dieser Lücke ergibt sich aus zwei Verweisen, die das Paper selbst setzt. Sektion 2.6, Zeile 124:

> "Whether the externalisation works for non-hybrid scholars is an empirical question, and the teaching cases of Section 5.4 are where this paper's evidence for it lies."

Und Sektion 5.4, Zeile 306:

> "Whether the method transfers to non-hybrid scholars is a separate question, and the teaching and cooperation cases are where the paper's evidence for it lies."

Das Paper routet also seine tragende Transferbehauptung zweimal ausdrücklich auf eine Passage, hinter der in der Belegschicht nichts liegt. Der einzige Claim zur Sache ist ein negativer, `20_claims/unassisted-non-hybrid-artefact-production-is-unsupported`, und der ruht auf dem Agenten-Audit A1, also auf einer Lektüre des Papers. Material aus den Lehrveranstaltungen selbst liegt dem Vault nirgends vor.

Einschätzung. Claims nachzuziehen, und zwar mit eigener Quellenaufnahme. Aufnahmefähig sind die öffentlichen Artefakte, die das Paper in den Fußnoten `[^winterschool]` und `[^museum]` bereits nennt (Workshop-Datensatz auf OSF, Selbstlernressource, Screencast), dazu Kursbeschreibung und Programm des Data-Steward-Moduls. Was die Teilnehmenden produziert haben, ist der eigentlich tragende Teil und liegt außerhalb dessen, was ohne Zustimmung der Beteiligten in einen öffentlichen Vault kann; hier ist die realistische Lösung, den Anspruch in 5.4 auf das abzusenken, was belegbar ist (Format, Dauer, Aufgabenstellung, Existenz produzierter Dokumente), und die Wirkungsaussage als Posit zu markieren.

**L3. Sektion 5.2, die Zugänglichkeitszusage für die Tabelle wird von einem eigenen Claim widerlegt.**

Fundstelle `knowledge/paper.md`, Zeile 246.

> "The table's projects run from early 2025 to early 2026, each traceable through a publicly accessible repository containing Promptotyping Documents, code, and data"

Dagegen `vault/20_claims/kulturpool-repo-unresolvable-2026-07-19.md`:

> "As verified on 2026-07-19, the linked Kulturpool Explorer repository `chpollin/vkm-explorer` returned a 404, so its state could not be checked."

Und die eigene Fußnote `[^zbz]` des Papers, Zeile 60:

> "The pipeline's verification frontend is public (https://chpollin.github.io/zbz-ocr-tei/); the repository itself is pending release, subject to partner approval."

Einschätzung. Die Aussage im Paper ist zu ändern. Zwei der dreizehn Tabellenzeilen erfüllen die Zusage nicht, eine davon nach dem eigenen Prüfstand, die andere nach der eigenen Fußnote. Ein "each" hält das nicht. Die kleinste tragfähige Korrektur ist eine Einschränkung im Satz mit Verweis auf die beiden Ausnahmen, die das Paper ohnehin an anderer Stelle einräumt.

**L4. Sektion 5.2, die HerData-Zahl steht als Tatsache, der Claim nennt sie undokumentiert.**

Fundstelle `knowledge/paper.md`, Zeile 252.

> "|HerData|TEI/Wikidata, 1,793 women-related letters (of 15,312)|Exploration|Gender-focused network with bias transparency section|"

Dagegen `vault/20_claims/herdata-letter-count-2026-07-19.md`:

> "As verified on 2026-07-19, the HerData repository README states 15,312 letters as the full corpus of letters to Goethe. The paper's 1,793-letter figure is not documented in the repository and is plausibly the women-related subset of that corpus."

Das Destillat führt die Sache als offene Frage: "Whether HerData's 1,793 figure is the women-related subset of the 15,312-letter corpus, which the source marks as plausible but unverified against the frontend filter."

Einschätzung. Entweder nachprüfen und den Claim schärfen oder die Zahl im Paper mit einem Herkunftshinweis versehen. Die Zahl ist die einzige in der Tabelle, bei der die eigene Verifikation ausdrücklich "plausibel, aber ungeprüft" sagt und das Paper gleichwohl im Indikativ formuliert.

**L5. Sektion 5.3, die Kontextdegradations-Beobachtung ist die exakte Wiederholung des Falls, der diese Prüfung ausgelöst hat.**

Fundstelle `knowledge/paper.md`, Zeile 285.

> "The project also produced the record's first empirical observation of context degradation at roughly half the advertised context window."

Kein Claim, kein Destillat, keine Quelle im Vault trägt das. Volltextsuchen nach "advertised context", "half the" und "context degradation" über `00_representation/`, `10_distillates/` und `20_claims/` liefern null Treffer.

Einschätzung. Claim nachzuziehen, und die Quelle dafür existiert vermutlich im CorrespExplorer-Repository (Journal der betreffenden Phase). Die Aussage gehört exakt in die Klasse, die der Prüfungsanlass benennt, eine empirische Behauptung über das Verhalten eines Modells, formuliert mit Priorität ("first") und mit einer quantitativen Angabe ("roughly half"), ohne jeden Anker. Ein Gutachter aus dem NLP-Umfeld greift diesen Satz an, weil er gegen `20_claims/context-rot-nonuniform-degradation-with-length` gelesen werden kann, das genau das Gegenteil einer einfachen Halbwertsgrenze belegt.

**L6. Sektion 5.3, Kosten und Dauer stehen als Zahlen, der Claim belegt nur ihre Unprüfbarkeit.**

Fundstelle `knowledge/paper.md`, Zeile 277.

> "OCR processing cost less than 10 EUR. The initial build took approximately six weeks, and development has continued since."

Dagegen `vault/20_claims/duration-cost-figures-experiential.md`:

> "The duration and cost figures of Section 4 are experiential values that lie outside deterministic checking, so the verification supports no verdict on their accuracy and treats them as reported experience."

Einschätzung. Der Claim ist ein Meta-Claim über die Zahlen und kein Beleg für sie. Formal ist die Passage damit gedeckt, inhaltlich steht sie auf der Aussage des Autors. Sauber wäre, die Zahlen im Paper als Erfahrungswerte zu kennzeichnen, was das Paper an anderer Stelle bereits tut, oder sie über einen Abrechnungs- oder Journalbeleg auf einen prüfbaren Stand zu heben.

### Stufe B, sechs Lücken mittlerer Angriffsfläche

**L7. Sektion 5.5, die technische Konvergenz des Korpus ist eine korpusweite Behauptung ohne Anker.**

`knowledge/paper.md`, Zeile 312:

> "First, the documented cases converge technically on vanilla JavaScript, static deployment, and frontend-only architecture throughout."

Volltextsuche nach "vanilla" über den Vault liefert null Treffer. Das A2-Korpus-Audit hat zwei andere Hypothesen geprüft und diese nicht. Einschätzung: Claim nachzuziehen, deterministisch prüfbar über die Repositorien, damit billig zu belegen.

**L8. Sektion 3.3, die Typen-Verteilung des Dokumentbestands ist nicht destilliert.**

`knowledge/paper.md`, Zeile 164:

> "An inventory across the documented repositories classified their documents into the three types; the distribution shows the primacy of knowledge formalisation in the method"

Die Quelle dazu ist ingestiert, das Destillat `vault/10_distillates/documents/knowledge-base-content-audit-2026-07-19.md` trägt jedoch nur vier Statements zu Funktionsvokabular, Statusvokabular und Verifikationsfunktion. Die Klassifikation in die drei Typen und ihre Verteilung sind in der Destillation nicht mitgekommen. Einschätzung: Claim nachzuziehen aus der bereits vorhandenen Repräsentation, geringer Aufwand.

**L9. Sektion 6.4, die Aussage beruft sich ausdrücklich auf den Record und hat keinen Anker.**

`knowledge/paper.md`, Zeile 342:

> "The documented record explicitly characterises monitoring several parallel agents as unsustainable over extended periods."

Suchen nach "parallel agents" und "unsustainable" über den Vault liefern null Treffer. Einschätzung: Claim nachzuziehen. Die Formulierung "The documented record explicitly characterises" ist eine Belegbehauptung im Satz selbst und lädt die Nachfrage ausdrücklich ein.

**L10. Sektion 1, die Genealogie-Wegmarke von 2023 wird von ihrem Claim ausdrücklich nicht gedeckt.**

`knowledge/paper.md`, Zeile 27:

> "In June 2023, in a workshop series on applied generative AI in the digital humanities, I demonstrated LLM-supported visualisation of research data, biographical data of translators who fled into exile, with Python and Jupyter notebooks (Pollin 2024)."

Der zugehörige Claim `vault/20_claims/applied-genai-dh-workshop-series-2024.md` schließt genau das aus, was der Satz braucht:

> "The claim carries only the existence, title, and versioned-release date of the deposit; the series' content and scope live in the linked GM-DH repository, a separate source."

Gedeckt sind Titel und Release-Datum 2024-02-11. Ungedeckt sind der Monat Juni 2023, der Datensatz der Exil-Übersetzerinnen und -Übersetzer, die Werkzeugkette und damit die Pointe der Passage, dass die Fähigkeit vor der Methode existierte. Einschätzung: Claim nachzuziehen aus dem GM-DH-Repository, das der Claim selbst als separate Quelle benennt.

**L11. Sektion 5.2 und 5.3, drei CorrespExplorer-Zahlen fallen in der Destillation aus.**

`knowledge/paper.md`, Zeile 251 und 283, nennen "7 docs, 46 journal phases, 74+ tests" und "initially 7 documents, 34 user stories, 46 journal phases, 74+ tests". Die Repräsentation kennt zwei davon, `vault/00_representation/documents/verification-paper-figures-2026-07-19.md`, Block `^nv2`:

> "CorrespExplorer's \"46 journal phases\" and \"74+ tests\" are self-documented and plausible."

Das Destillat hat aus diesem Block nur den Kosten- und Dauerteil als `^s22` übernommen; der CorrespExplorer-Teil ist nicht destilliert und damit nicht claimfähig. Ebenfalls ohne Anker ist Zeile 285, "the Exploration phase evaluated six visualisation types and discarded two with documented reasoning". Einschätzung: Statement im Destillat ergänzen und Claim nachziehen, für die sechs Visualisierungstypen eine eigene Quelle aus dem Projekt-Journal.

**L12. Sektion 5.4, die Zuschreibung des Community-Forks an eine Institution ist ungedeckt.**

`knowledge/paper.md`, Zeile 308:

> "Documented third-party use beyond teaching settings, the community fork of the coOCR-HTR workbench by a researcher at the Austrian Academy of Sciences, is the one instance in the record"

Der Claim `vault/20_claims/coocr-htr-figures-verified-2026-07-19.md` trägt "67 fork commits" und keine Institution. Einschätzung: Claim nachzuziehen oder die Zuschreibung streichen. Der Satz ist die einzige Drittnutzungsevidenz des Papers und trägt in 6.4 Gewicht; er nennt zugleich eine dritte Person über Institution, was die Belegpflicht eher erhöht.

### Stufe C, verbleibende Lücken, kompakt

Diese Aussagen sind substanziell im Sinne des Auftrags, aber entweder schwerer angreifbar oder von geringerem Argumentgewicht. Fundstelle, Kern und Einschätzung in einer Zeile.

- Zeile 291, Notker, "a nine-document knowledge base"; die Verifikation prüfte für Notker nur Psalm 2 mit dreizehn Versen und sechs Textebenen-Steuerelemente. Claim nachzuziehen, deterministisch prüfbar.
- Zeile 293, Notker, die Trennung der Funktionsebenen gegen die kritischen Druckausgaben und die Auflösung der Sigle R nach Abschnittstyp. Ohne Anker; philologische Behauptung über fremde Editionen. Claim nachzuziehen aus den Editionsrichtlinien des Projekts, oder Formulierung auf die eigene Modellierungsentscheidung zurückführen.
- Zeile 294, Notker, "The R-disambiguation is recorded as still awaiting the commissioning scholar's confirmation". Ohne Anker, prüfbar im Projekt-Repository.
- Zeile 299 und 300, M³GIM, "25+ sessions" und "an eight-tab archive explorer". Ohne Anker; die Verifikation deckt nur die Entscheidungszahl.
- Zeile 242, Formationsphase, "teiCrafter (2023) is the origin point", "the tool remains in active development today", "The Wheaton network visualisation (January 2025) is the first promptotype". Datierungen und eine Prioritätsbehauptung ohne Anker. Der Wheaton-Claim deckt Transaktions- und Personenzahlen, die im Paper nicht mehr vorkommen, und nicht die Datierung.
- Zeile 168, "Each template was extracted from the recurring form a function takes across at least two repositories". Methodische Selbstauskunft mit Schwellenwert, ohne Anker.
- Zeile 232, "Columnar formats with WebAssembly query engines shift the client-side range by orders of magnitude". Technische Größenordnungsbehauptung ohne Zitat und ohne Claim.
- Zeile 212, "few conventional research software projects produce it as completely". Vergleichende Aussage über das Feld ohne Anker; der FAIR4RS-Claim deckt nur das eigene Projekt.
- Zeile 142, "A fourth form extends the expert feedback and is beginning to be delegated". Praxisaussage über den aktuellen Stand ohne Anker.
- Zeile 190, SZD-HTR, "tens of thousands of facsimile scans", die Konsolidierung des Prüfmodells von vier auf drei Stufen und die Aussage, das Annotationsprotokoll sei präzise genug, "that two annotators working independently produce comparable error rates". Nach `baae1db` trägt nur die konfabulierte Lesart einen Claim; der Rest der Passage ist ungedeckt. Die Annotator-Aussage ist die angreifbarste davon, weil sie eine Reliabilitätsbehauptung ohne berichteten Wert ist.

### Bilanz der Deckungsprüfung

Die Literaturachse ist praktisch vollständig gedeckt. `vault/knowledge/register-paper-sources.md` führt jedes zitierte Werk mit Zugangsklasse und Status; die offenen Fälle sind vier Werke mit Beschaffungsbedarf und Stachowiak 1973 als registrierte Druckquelle, jeweils mit Begründung im Register. Auf dieser Achse habe ich keine unbemerkte Lücke gefunden.

Die Praxisachse trägt die Lücken. Alle zwanzig Befunde oben betreffen Aussagen über eigene Projekte, eigene Lehre, eigene Werkzeugpraxis oder eigene Beobachtungen am Modellverhalten. Das ist strukturell erklärbar, weil die Belegschicht aus zwei Wellen entstanden ist, einer Zahlenverifikation im Juli 2026 und einem Bibliografie-Durchgang am 2026-07-23, und die qualitativen Praxisaussagen zwischen beiden Wellen liegen.

---

## Aufgabe 2 — Herkunftsgrade

### Die verwendeten Grade

Der Auftrag nennt vier Härtegrade. Am Material war eine Unterteilung des ersten nötig, weil sechzehn Claims auf publizierten Arbeiten des Autors selbst ruhen und das ein Gutachter anders liest als eine Fremdquelle.

- **H1, externe publizierte Quelle.** Anker in einem Publikations-Destillat einer Drittautorschaft, mit CSL-Record in `references/` und wörtlichem Quotenbeleg im Destillat.
- **H2, publizierte eigene Arbeit.** Anker in einem Publikations-Destillat des Autors (Dissertation, Blogbeiträge, Zenodo-Deposit, Konferenzbeitrag, Ko-Autorschaft). Publiziert und zitierfähig, inhaltlich jedoch dieselbe Stimme, die das Paper führt.
- **H3, gegen Repository-Artefakte geprüfter Stand.** Anker in `verification-paper-figures-2026-07-19` oder `szd-htr-fair4rs-audit-2026-07-23`, also in einer Prüfung, die Repository-Artefakte gelesen und Zahlen gegen sie gehalten hat.
- **H4, Prozessaufzeichnung.** Anker in einem datierten Methoden-, Audit- oder Evaluationsdokument aus dem Projektumfeld, agenten- oder autorengeschrieben, ohne unabhängige Prüfung.
- **H5, Aussage des Autors ohne weiteren Beleg.** Kommt im Claim-Bestand definitionsgemäß nicht vor, weil das Schema eine Schlussfolgerung ohne Quellstütze als Posit in das Deliverable verweist. Im Paper existiert die Klasse in großem Umfang, sie ist dort nur nicht markiert (siehe Aufgabe 4).

### Verteilung

Ermittelt maschinell über die `grounding`-Anker aller 119 Claims, Mehrfachzuordnung bei gemischten Ankersets.

| Grad | Claims | Anteil |
|---|---|---|
| H1 rein | 67 | 56 % |
| H2 rein | 16 | 13 % |
| H1 plus H2 gemischt | 2 | 2 % |
| H3 rein | 25 | 21 % |
| H4 rein | 8 | 7 % |
| H3 plus H4 gemischt | 1 | 1 % |

Die sechzehn H2-Claims sind `applied-genai-dh-workshop-series-2024`, `bookkeeping-ontology-session-driven`, `critical-expert-in-the-loop-double-reflection-loop`, `deep-dive-process-documented-2019`, `dissertation-dikw-cognitive-agent-premise`, `dissertation-requirements-feed-built-artifacts`, `dissertation-requirements-from-deep-dive-sessions`, `edition-ai-benchmarks-lacking-and-reproducibility-favours-local-models`, `field-literature-records-llm-code-generation-and-tei-agent-line-by-2024`, `llms-amplify-research-not-automate-it`, `promptotyping-documentation-over-software`, `promptotyping-documents-are-the-primary-artifact`, `promptotyping-documents-form-freedom`, `promptotyping-is-a-four-phase-context-engineering-technique`, `promptotyping-named-first-described-2025-04`, `szd-experiment-structured-vibe-coding`. Gemischt H1 plus H2 sind `ontologies-are-shared-vocabularies-for-reuse` und `reproducibility-shifts-to-documented-justification`.

Die neun Claims mit H4-Anteil sind `deck-characterises-llms-as-jagged-alien`, `deck-derives-context-and-verification-from-llm-profile`, `frontmatter-core-reduced-to-six-fields`, `status-vocabulary-adds-active-and-snapshot`, `verification-promoted-to-document-function`, `szd-htr-confabulated-reading-in-hasty-kurrent`, `unassisted-non-hybrid-artefact-production-is-unsupported`, `record-does-not-separate-document-depth-from-verification-effort` sowie `record-has-no-failure-case-and-a-bounded-yield-pole` als einziger gemischter Fall.

### Claims, deren Herkunft schwächer ist als der Papertext nahelegt

**M1. Die drei Record-Claims der Revisionsrunde ruhen auf Agenten-Lektüren des Papers selbst.**

`vault/10_distillates/documents/revision-audit-a2-2026-07-23.md`, Statement `^s1`:

> "Across the documented projects, document depth and verification effort co-vary, and the one-day builds carry deep document sets as well; the audit found no project pairing deep documents with demonstrably low verification, and none the other way round."

Das ist eine empirische Aussage über dreizehn Repositorien, und ihre einzige Stütze ist die Lektüre eines Audit-Agenten, die als Handover-Dokument in den Vault gekommen ist. Die Repräsentation nennt als Creator "revision audit agent under the method author's commission". Im Unterschied zur Zahlenverifikation, die Repository-Artefakte gelesen und Zählungen ausgewiesen hat, führt A2 keine artefaktnahen Belege für diese Aussage.

Die daraus gebauten Claims tragen im Paper Gewicht an zwei Stellen. Sektion 6.4, Zeile 338: "A further confound sits inside the record. Document depth and verification effort are both the same practitioner's investment, and the record separates neither of them from the other". Sektion 5.5, Zeile 312: "At the other pole the record holds bounded yield where the documents stayed thin, and it documents no outright failure." Beides liest sich als Befund am Korpus und ruht auf H4.

Hinzu kommt eine Zirkularität, die der Vault selbst nicht sichtbar macht. Die Kette läuft vom Paper über ein Audit des Papers in die Repräsentation, in das Destillat, in den Claim und zurück in das Paper. Das Schema kann das nicht bemerken, weil ein Audit-Dokument formal eine Quelle vom Typ `document` ist wie jede andere.

**M2. Der Grad H3 ist selbst schwächer, als das Wort "verified" im Paper suggeriert.**

`knowledge/paper.md`, Zeile 238:

> "All quantitative figures were verified against the public repositories in July 2026"

Dagegen `vault/20_claims/section4-verification-single-agent-snapshot-2026-07-19.md` und die Destillat-Statements `^s23` bis `^s25`:

> "The verification ran as a single adversarial agent without a second, independent pass."
> "The verification counted test figures as test functions in source, without executing a pytest collection."

Dazu kommt die Statusdisziplin des Vaults. Alle 119 Claims stehen auf `status: grounded`; kein einziger steht auf `validated` oder `verified`. `vault/knowledge/state.md`, Zeile 95: "Machine review is operator-gated (mechanism per [[knowledge/specification]]); until released, documents stay `grounded` with `checked.validation` dates." Nach dem eigenen Vokabular des Vaults ist damit nichts verifiziert, während das Paper "verified" schreibt und die Slugs der Claims das Wort "verified" im Dateinamen führen. Das ist die schwerste Wortgleichheit bei ungleicher Bedeutung im ganzen Bestand.

**M3. Die drei Methoden-Claims aus 3.3 ruhen auf eigenen, unveröffentlichten Arbeitsnotizen.**

`knowledge/paper.md`, Zeile 170:

> "An earlier specification required eight fields. A survey of the real knowledge bases found that not a single repository satisfied that core in full."

Der Beleg ist `frontmatter-practice-2026-05`, laut Metadatenblock eine Markdown-Notiz des Autors vom 2026-05-09 ohne Identifier. Die Notiz ist substanziell (Querschau über neunzehn reale `data.md`), sie ist aber weder publiziert noch unabhängig geprüft, und die Repräsentation trägt kein Commit-Pinning wie die Audit-Quellen. Gleiches gilt für `status-vocabulary-adds-active-and-snapshot` und `verification-promoted-to-document-function` aus dem Inhaltsaudit vom 2026-07-19. Das Paper formuliert an dieser Stelle im Duktus eines Erhebungsbefunds.

**M4. Die beiden Deck-Claims ruhen auf unveröffentlichtem Lehrmaterial.**

`vault/00_representation/documents/ke-master-deck-2026-07-19.md` beschreibt die Quelle selbst als "unpublished working slide deck; no persistent identifier" mit "all rights reserved by the author; no public license". Aktuell besteht keine Diskrepanz, weil das Paper die Jagged-Alien-Charakterisierung nicht führt. `vault/knowledge/state.md`, Zeile 100, hält die Passage als Kandidat vor. Wird sie geschrieben, entsteht eine Aussage über LLM-Eigenschaften, die auf den eigenen Folien ruht, und das wäre die schwächste Herkunft für die stärkste Art von Behauptung.

**M5. Zwei Claims begrenzen die Aussage des Papers, statt sie zu stützen.**

`kulturpool-repo-unresolvable-2026-07-19` und `duration-cost-figures-experiential` sind formal H3, inhaltlich sind es Negativbefunde. Sie stehen unter der MOC-Rubrik "Not deterministically verifiable" und markieren, wo die Prüfung endet. Für die Deckungsfrage zählen sie als Anker, für die Beleglast des Papers zählen sie gegen die betreffende Aussage. Ein Deckungsmaß, das Claims nur zählt, würde beide als Deckung verbuchen.

### Was der Bestand an dieser Stelle gut macht

Drei Beobachtungen gehören zur Herkunftsfrage, weil sie die Sorge des Prüfungsanlasses eingrenzen.

Erstens sind Journal-gestützte Claims selten. Von 119 Claims ruhen neun auf Prozessaufzeichnungen, und keiner davon auf einem laufenden Projekt-Journal. Es sind datierte Erhebungs-, Audit- und Evaluationsnotizen, sechs davon mit Commit-Identifier in der Repräsentation. Die Vermutung, ein nennenswerter Teil der Belege komme aus agentengeschriebenen Journalen, trägt in dieser Form nicht.

Zweitens ist die Herkunft an der Repräsentation bereits dokumentiert. Jede Dokument-Repräsentation trägt `metadata.creator` mit Rolle und Institution, und die Formulierungen unterscheiden sauber zwischen "verification agent under the method author's direction", "revision audit agent under the method author's commission" und "method author with agent support". Die Information ist vorhanden, sie ist nur nicht am Claim ablesbar und nicht maschinell auswertbar.

Drittens sind die Publikations-Destillate mit `checked.quote` versehen und die Quotenprüfung ist im Validator implementiert. Auf der H1-Achse ist die Kette damit härter als auf jeder anderen.

---

## Aufgabe 3 — Vorschlag

### 3.1 Härtegrad im Schema sichtbar machen

**Der Eingriff gehört an die Repräsentation.** Der Härtegrad ist eine Eigenschaft der Quelle. Trüge ihn der Claim, müssten 119 Dateien angefasst werden, und der Wert könnte von der Quelle wegdriften. An der Repräsentation sind es dreizehn Zeilen, und der Claim-Grad wird berechenbar.

**Vorschlag im Einzelnen.**

1. In `vault/knowledge/schema.md`, Abschnitt "Controlled vocabularies", eine Zeile ergänzen:

   `provenance`: `external` | `external-own` | `artefact-checked` | `process-record`

2. In der Frontmatter der Repräsentation (Typen 1 und 2) ein Pflichtfeld `provenance` ergänzen. Publikations-Destillate haben keine Repräsentation; für sie gilt die Ableitung aus dem Referenz-Record, `external-own` wenn die CSL-Autorschaft den Paper-Autor nennt, sonst `external`. Das ist maschinell entscheidbar aus `references/*.json` und braucht keine Handpflege.

3. Eine Ableitungsregel in `schema.md` neben der bestehenden Statusregel formulieren, im gleichen Muster wie dort. Der Wortlaut der Statusregel ist "A document's status is the minimum of the states of its anchors"; die Parallele lautet, dass die Provenienz eines Claims das Minimum der Provenienzen seiner Anker ist, in der Ordnung `external` > `external-own` > `artefact-checked` > `process-record`. Damit fällt `record-has-no-failure-case-and-a-bounded-yield-pole` automatisch auf `process-record`, was der Sache entspricht.

4. Im Validator eine Funktion ergänzen, die je Claim das Minimum berechnet, und einen Schalter `--provenance`, der eine Übersicht ausgibt. Der Aufwand liegt bei etwa fünfundzwanzig Zeilen entlang des vorhandenen `_resolve_anchor`-Pfads. Als Fehler zählt nur ein fehlendes oder unbekanntes `provenance` an einer Repräsentation, damit der Grün-Zustand nicht von einer Bewertungsfrage abhängt.

**Anschluss an das bestehende Namensmuster.** Die Slugs `*-verified-YYYY-MM-DD` bleiben unangetastet. Sie sind an dreizehn Stellen in MOCs, Destillaten und im Journal verlinkt, und ein Umbenennen bräche Anker ohne Gewinn. Die Konvention wird stattdessen umgedeutet und in `schema.md` unter "Naming" festgeschrieben, das Datumssuffix markiert den Stichtag des geprüften Standes, der Härtegrad steht im Feld. Damit hört das Namensmuster auf, die einzige Trägerin einer Information zu sein, die es nur andeutet.

**Was der Vorschlag ausdrücklich nicht tut.** Er führt keinen fünften Grad für unbelegte Autoraussagen ein, weil solche Aussagen nach dem Schema gar nicht in die Claim-Schicht gelangen. Ihr Ort ist das Posit im Deliverable, und dort liegt das eigentliche Problem (siehe 3.2 und Aufgabe 4).

**Kosten insgesamt.** Dreizehn Frontmatter-Zeilen, eine Vokabelzeile, ein Absatz Regeltext, etwa fünfundzwanzig Zeilen Python, keine Änderung an Claims oder Destillaten. Der Grün-Zustand bleibt erreichbar, weil das neue Pflichtfeld in einem Zug mit der Schemaänderung gesetzt wird.

### 3.2 Deckungsprüfung im Validator

**Der Mechanismus existiert bereits und ist strukturell abgeschaltet.** `vault/tools/validate.py`, Funktion `_check_chapter`, Zeilen 431 bis 443, prüft jeden Absatz eines Kapitels auf einen Fußnotenmarker und meldet andernfalls:

> `report.warn("W-UNANCHORED", doc.rel, f"paragraph without any footnote marker: {text[:60]}")`

Diese Prüfung läuft nie, weil `vault/30_deliverable/` außer `.gitkeep` leer ist. Grund ist die Festlegung in `vault/knowledge/specification.md`, Zeile 47:

> "2026-07-19: The deliverable stays canonical in `_content/paper/` at the root of this repository; `30_deliverable/` holds no copy."

Die Absicht dieser Entscheidung war, Drift zwischen zwei Kopien des Papers zu vermeiden. Ihr Nebeneffekt ist, dass die einzige implementierte Deckungsprüfung des Systems keinen Gegenstand hat. Das ist der präziseste Befund zur Kostenfrage, denn die erste Ausbaustufe kostet nichts an Code.

**Ist Deckung maschinell entscheidbar?** Teilweise, und die Trennlinie ist scharf.

Entscheidbar ist die formale Frage, ob ein Absatz oder ein Satz einen Anker trägt, sobald das Deliverable die Fußnotenkonvention des Schemas führt. Das ist reine Syntax und deterministisch, wie der Validator es verlangt ("deterministic, same input, same verdict").

Nicht entscheidbar ist die inhaltliche Frage, welcher Satz substanziell ist. Das ist ein Urteil über die rhetorische Funktion eines Satzes im Argument. Kein deterministisches Kriterium trennt "Digital research data is accessible only through software" (rahmensetzend, unstrittig) von "the record's first empirical observation of context degradation at roughly half the advertised context window" (empirisch, angreifbar). Eine Heuristik über Zahlen, Datumsangaben und Prioritätswörter hätte in meinem Durchgang etwa die Hälfte der zwanzig Befunde gefunden und zugleich zahlreiche harmlose Sätze gemeldet, darunter jede Jahreszahl im Referenzapparat. Als Gate taugt das nicht.

**Nächstbeste Lösung, drei Stufen nach steigenden Kosten.**

*Stufe 1, sofort und deterministisch.* Ein Skript `tools/coverage.py`, das aus `knowledge/paper.md` alle Sätze extrahiert, die eine Zahl, ein Datum, einen Projektnamen aus der 5.2-Tabelle oder ein Prioritäts- und Allquantorwort ("first", "only", "no", "every", "all", "never") tragen, und diese Liste gegen den Claim-Bestand nach Stichwörtern abgleicht. Ausgabe ist eine Kandidatenliste für die Triage von Hand, ohne Verdikt und ohne Exit-Code-Wirkung. Aufwand etwa sechzig Zeilen. Der Nutzen liegt darin, dass die Liste bei jeder Paper-Revision neu erzeugbar ist und der Mensch nur noch urteilt statt zu suchen.

*Stufe 2, editorisch.* Das Deliverable führt die Fußnotenkonvention des Schemas, also `Grounded in [[claim]]` und `Posit: <Begründung>`. Dann arbeitet die vorhandene Prüfung ohne eine Zeile neuen Code, zusammen mit dem Spiegel-Abgleich gegen `claims` und `posits` in der Frontmatter. Der Preis ist ein zweiter Fußnotenapparat neben dem inhaltlichen, was mit dem Einreichungsformat kollidiert. Die Variante ohne Kollision ist eine Schattendatei je Sektion unter `30_deliverable/`, die ausschließlich die ankertragenden Sätze führt; das ist genau die Kopie, die die Festlegung von 2026-07-19 vermeiden wollte, und wäre daher eine bewusste Rücknahme dieser Entscheidung.

*Stufe 3, nichtdeterministisch.* Ein LLM-Durchgang, der jeden Satz als substanziell oder nicht klassifiziert und gegen den Claim-Bestand matcht. Das ist der Machine-Review-Vertrag in umgekehrter Richtung und passt unter dessen Anti-Anchoring-Protokoll. In den Validierungsvertrag gehört es nicht, weil dieser Determinismus fordert. Sinnvoll einmal je Revisionsrunde, mit dem Ergebnis als Befundliste im Journal.

**Empfehlung.** Stufe 1 bauen, Stufe 3 an die Revisionsrunden koppeln, Stufe 2 nur erwägen, wenn das Publikationsformat sich ohnehin ändert. Zusätzlich, ohne Code, die vorhandene Tabelle "Literature grounding by paper section" in `vault/knowledge/state.md` um eine Spalte für ungedeckte substanzielle Aussagen je Sektion erweitern, damit die Lücke dort registriert wird, wo die Deckung registriert ist.

---

## Aufgabe 4 — Selbstanwendung

### Was das Paper verspricht

`knowledge/paper.md`, Sektion 5.1, Zeile 238:

> "The full evidence layer, with claim-level source anchors for the figures, is maintained in the paper's companion repository (https://github.com/DigitalHumanitiesCraft/Promptotyping) as a Grounded Vault,[^6] published as a versioned companion, and cut as an archived release with a persistent identifier at formal publication."

> "The companion is thus part of the argument, because a curated, versioned knowledge layer is what sustained practice of the method produces, and the companion is that claim made inspectable."

Und Sektion 7, Zeile 352:

> "the evidence layer is published as a versioned companion with claim-level anchors"

### Was der Vault einlöst

**Eingelöst.** Die Formulierung "claim-level source anchors for the figures" trifft zu. Jede Zahl der 5.2-Tabelle außer den in L4 und L11 genannten trägt einen Claim, dessen Anker über Destillat und Repräsentation bis auf einen Block der Prüfquelle auflöst, und der Validator bestätigt die Auflösung aller Anker fehlerfrei. Die Ankermechanik ist real und funktioniert.

Ebenfalls eingelöst ist die Selbstbeschreibung in 3.3, Zeile 172, "The quantitative claims of Section 5 are themselves covered by one" (Verifikationsdokument). Das trifft zu, `verification-paper-figures-2026-07-19` ist genau dieses Dokument und ist als Quelle aufgenommen.

Eingelöst ist auch die Aussage in 5.1, das Repository trage Wissensbasis, gespiegelten Vorlagenkatalog und Papertext; `_content/promptotyping-document/` führt sechzehn Vorlagen als statisches Markdown.

**Nicht eingelöst, sieben Stellen.**

**S1. Zwei der fünf Schichten des eigenen Schichtenmodells sind leer.** `vault/30_deliverable/` enthält nur `.gitkeep`, `vault/glossary/` ist leer. `schema.md` definiert für beide einen Dokumenttyp mit Frontmatter und Sektionsskelett. Das Paper beschreibt den Grounded Vault in 5.1 als Architektur, "in which sources, distillates, and atomic claims form layers whose anchors resolve only downward", und nennt damit korrekt nur die drei realisierten Schichten. Ein Gutachter, der dem Link folgt, sieht dennoch ein Modell mit fünf Schichten, von denen zwei ohne Inhalt sind.

**S2. Der Ankervertrag des Deliverables ist auf das Paper nirgends angewandt.** `schema.md` fordert für die Deliverable-Schicht "every load-bearing sentence carries a footnote marker; every footnote begins with one of two keywords and nothing else counts". `knowledge/paper.md` führt einundzwanzig Fußnoten, sämtlich erläuternd, keine einzige mit `Grounded in` oder `Posit:`. Die Formel "claim-level anchors" ist damit wahr über die Claim-Schicht und unwahr über die Sätze des Papers. Der Satz in 7, "the evidence layer is published as a versioned companion with claim-level anchors", ist so lesbar, dass die Anker am Paper hängen, und das tun sie nicht.

**S3. Die Steuerdokumente des Vaults benennen ein falsches Deliverable.** `vault/knowledge/specification.md` erklärt `_content/paper/` für kanonisch. Der tatsächlich kanonische Text ist `knowledge/paper.md`. Die Datei `_content/paper/05-epistemic-infrastructure.md` trägt eine Sektion 5 "Epistemic Infrastructure", die das Paper nicht mehr hat; die aktuelle Sektion 5 heißt "Evidence: The Documented Projects". Der Kapitelregister in `vault/knowledge/state.md` spiegelt diesen überholten Schnitt, während die Tabelle "Literature grounding by paper section" unmittelbar darunter mit der aktuellen Nummerierung arbeitet. Zwei benachbarte Register desselben Dokuments beziehen sich auf zwei verschiedene Stände des Papers.

**S4. Das Paper behauptet ein Dokument im Präsens, das dort nicht mehr liegt.** `knowledge/paper.md`, Zeile 238: "the verification protocol is itself a document in this paper's knowledge base". `knowledge/verification-paper-figures.md` existiert nicht; `state.md` hält fest, dass die Datei am 2026-07-23 aus `knowledge/` entfernt und der Identifier auf Commit `7c20964` gepinnt wurde. Das Dokument lebt in der Git-Historie und in der Vault-Repräsentation, in der Wissensbasis liegt es nicht.

**S5. Der Statusbegriff des Vaults und das Wort "verified" im Paper sagen Verschiedenes.** Ausgeführt unter M2. Alle Claims stehen auf `grounded`, kein Dokument hat je `checked.machine-review` erhalten, weil die Maschinenprüfung operator-gated ist. Das Paper schreibt "All quantitative figures were verified against the public repositories in July 2026".

**S6. Drei Claims sind gegenüber dem aktuellen Paper verwaist.** `lucina-figures-verified-2026-07-19`, `wheaton-figures-verified-2026-07-19` und `austrian-dashboard-universities-verified-2026-07-19` belegen Zahlen, die in `knowledge/paper.md` nicht mehr vorkommen (Lucina fehlt in der 5.2-Tabelle, Wheatons Transaktions- und Personenzahlen sind aus der Formationsphasen-Passage verschwunden, die zweiundzwanzig Universitäten stehen nirgends). Sie sind über MOC-Evidence erreichbar und damit validatorseitig unauffällig. Ein Register, das Deckung in beide Richtungen führte, würde sie zeigen.

**S7. Eine Quelle ist vollständig verwaist.** `llmdh-summer-school-2025` ist ingestiert und destilliert, trägt keinen Claim, und die Paper-Passage, für die sie aufgenommen wurde, existiert nicht mehr; Suchen nach "summer school", "Advanced Prompt" und "Cologne" in `knowledge/paper.md` liefern null Treffer. `state.md`, Zeile 99, führt weiterhin Korrekturkandidaten für eine Fußnote in 2.6, die es nicht mehr gibt. Die vier SDD-Destillate sind ebenfalls claimlos, das aber durch dokumentierte Entscheidung.

### Beurteilung der Behauptung aus 5.1

Die Behauptung, die Belegschicht sei das, was gelebte Praxis der Methode hervorbringt, trägt für die Literaturachse und für die Zahlenachse der Sektion 5. Dort ist der Vault dicht, die Ketten lösen auf, die Prüfgrenzen sind ausgewiesen, und mehrere Negativbefunde sind als Claims konserviert statt weggelassen. Das ist mehr, als übliche Beleganhänge leisten.

Sie trägt nicht für die drei Stellen, an denen das Paper die stärkste Behauptung über den Companion aufstellt. Der Companion ist nicht in dem Sinn "claim made inspectable", dass ein Leser vom Satz zum Beleg käme; er müsste vom Satz über die Sektionsnummer in eine Tabelle in `state.md` und von dort in die Claims springen, und diese Tabelle deckt nur die Literaturstellen. Die Praxisaussagen des Papers, die der Companion gerade beglaubigen soll, sind die ungedeckten (Aufgabe 1). Und die Steuerdokumente des Vaults selbst weisen auf einen überholten Stand des Deliverables, was die Nachprüfbarkeit für einen externen Leser zusätzlich erschwert.

---

## Entscheidungsbedürftige Punkte

1. **Sektion 2.5, "three layers have no counterpart".** Die Aussage ist durch das eigene Spec-Kit-Destillat für die Datenschicht widerlegt und steht seit dem 2026-07-24 im Paper. `state.md` hält den Claim-Bau bis zur Operator-Entscheidung an. Zu entscheiden ist die Neuformulierung, danach der Claim-Bau aus den vier SDD-Destillaten.
2. **Sektion 5.4, Status der Transfer-Evidenz.** Entweder die Lehrfälle mit ihren öffentlichen Artefakten als Quellen aufnehmen, oder die Passage auf das absenken, was ohne Zustimmung Dritter belegbar ist. Beides ändert die Beweislast des Papers an seiner exponiertesten Stelle.
3. **Provenienzfeld.** Übernahme des Vorschlags aus 3.1, und die Teilfrage, ob `external-own` als eigener Wert geführt wird. Sechzehn Claims fallen darauf, und ein Gutachter wird die Selbstreferenz eher ansprechen als die Agentenherkunft.
4. **`30_deliverable/` und die abgeschaltete Deckungsprüfung.** Die Festlegung von 2026-07-19 bleibt oder wird zugunsten einer Schattendatei zurückgenommen. Davon hängt ab, ob `W-UNANCHORED` je läuft.
5. **Kanonisches Deliverable in den Steuerdokumenten.** `specification.md` und der Kapitelregister in `state.md` sind auf `knowledge/paper.md` umzustellen, und über den Verbleib des überholten Schnitts unter `_content/paper/` ist zu entscheiden.
6. **HerData 1,793.** Gegen den Frontend-Filter nachprüfen oder die Zahl im Paper mit Herkunftshinweis versehen.
7. **"each traceable through a publicly accessible repository".** Formulierung anpassen, solange das ZBZ-Repository unter Partnervorbehalt steht und der Kulturpool-Link ins Leere geht.
8. **Wortgebrauch "verified".** Entweder das Paper übernimmt die Statusstufen des Vaults, oder 5.1 sagt, was die Prüfung war, ein einmaliger adversarialer Agentendurchlauf gegen Repository-Artefakte am 2026-07-19.

---

## Fälle, in denen das Material der Vermutung widersprochen hat

1. **Die im Prüfungsanlass genannte Lücke in 3.5 besteht nicht mehr.** Der Satz zum Vision-Modell wurde in Commit `4a41a48` ersetzt, und Commit `baae1db` hat während dieser Sitzung `20_claims/szd-htr-confabulated-reading-in-hasty-kurrent` angelegt, gestützt auf eine commit-gepinnte Evaluationsquelle aus dem SZD-HTR-Repository. Der Auslöser der Prüfung ist geschlossen; die Klasse, zu der er gehört, ist es nicht (L5).
2. **Die Bibliografie-Achse ist nahezu lückenlos.** Ich hatte eine breite Streuung ungedeckter Literaturaussagen erwartet. `register-paper-sources.md` führt jedes zitierte Werk mit Zugangsklasse und Status, die Publikations-Destillate tragen wörtliche Zitate mit `checked.quote`, und die fünf offenen Fälle sind mit Grund benannt. Auf dieser Achse habe ich keine unbemerkte Lücke gefunden.
3. **Der Vault benennt mehrere seiner eigenen Lücken bereits.** `20_claims/MOC-Limitations.md` führt eine Zeile "Open, awaiting sources or the paper's limitations passage: single-practitioner corpus, missing control condition, confounding of method effects with model capability, prototype-to-product boundary." Vier Punkte, die ich sonst als Deckungslücken berichtet hätte, sind dort registriert.
4. **Journal-Herkunft ist seltener als der Anlass vermutet.** Neun von 119 Claims ruhen auf Prozessaufzeichnungen, keiner davon auf einem laufenden Projekt-Journal. Es sind datierte Erhebungs- und Auditnotizen, überwiegend mit Commit-Identifier. Das eigentliche Herkunftsproblem liegt woanders, in der Zirkularität der drei Record-Claims (M1) und in der Bedeutungsverschiebung des Wortes "verified" (M2).
5. **Claimlose Destillate sind überwiegend Absicht.** Vier der fünf betreffen die SDD-Quellen, deren Claim-Bau `state.md` ausdrücklich bis zur Operator-Entscheidung anhält. Nur `llmdh-summer-school-2025` ist echte Verwaisung, und auch dort ist die Ursache eine Streichung im Paper.
6. **Die Prüfgrenzen sind ehrlich dokumentiert.** Die Verifikationsquelle hält ihre eigenen Schwächen fest (Einzelagent, keine zweite Passage, Testzählung ohne pytest-Lauf), und diese Selbstbegrenzung ist als eigener Claim in die Belegschicht gehoben. Das ist selten und spricht für den Bestand.

---

## Ungefragte Befunde

1. **Die Deckungsprüfung existiert bereits im Code.** `_check_chapter` in `tools/validate.py` meldet `W-UNANCHORED` für jeden Absatz ohne Fußnotenmarker. Sie hat seit dem Aufsetzen des Vaults keinen Gegenstand, weil die Deliverable-Schicht leer ist. Der Prüfungsanlass beschreibt eine fehlende Fähigkeit, die vorhanden und abgeschaltet ist.
2. **Ein Claim-Text ist gegenüber dem Paper gedriftet.** `20_claims/correspexplorer-knowledge-userstory-count-2026-07-19.md` schreibt "The paper's figures of 7 documents and 37 user stories"; `knowledge/paper.md`, Zeile 283, nennt vierunddreißig User Stories. Der Claim zitiert einen Paper-Stand, den es nicht mehr gibt. Das ist die Gegenrichtung der Deckungsdrift und trifft jeden Claim, der den Papertext paraphrasiert.
3. **Der einzige gradgemischte Claim ist der Testfall für den Vorschlag.** `record-has-no-failure-case-and-a-bounded-yield-pole` bindet einen H3-Anker (Zahlenverifikation) und einen H4-Anker (Agenten-Audit) ohne jede Kennzeichnung. Nach der Minimumregel aus 3.1 fiele er auf `process-record`, was seiner Beweiskraft entspricht.
4. **Der Verifikationsbegriff des Papers hat drei verschiedene Referenten.** In 3.3 ist Verification eine Dokumentfunktion, in 4.2 eine Interface-Kategorie, in 6.2 die dreistufige Prüfpraxis, und im Vault-Vokabular ist `verification` die Kontraktstufe, die allein die menschliche Prüfrolle setzen darf. Alle vier sind legitim, sie treffen sich aber im Satz "the verification protocol is itself a document in this paper's knowledge base" und in den Slugs `*-verified-*`. Für die Companion-Lektüre wäre eine Klarstellung in `schema.md` oder im Glossar der Site hilfreich.
5. **Die leere `glossary/`-Schicht ist eine ungenutzte Gelegenheit.** Der Vault definiert einen Glossartyp mit Anker-Möglichkeit, und das Paper führt ein Vokabular (Promptotyping Document, Critical Expert in the Loop, Promptotype, Distillation), dessen Definitionen derzeit im Fließtext liegen. Die Terminologie verweist laut `specification.md` auf das Glossar der Site, das außerhalb des Vaults liegt.
6. **Die Formationsphase in 5.2 ist die dünnste Stelle der Evidenz.** Sie nennt fünf Projekte, drei Jahreszahlen und eine Prioritätsbehauptung ("the first promptotype"), und der Vault trägt zu keinem davon eine Datierung. Zugleich räumt der Absatz selbst ein, "The mapping of one component to one project is deliberately not claimed". Diese Selbstbegrenzung deckt die Komponentenzuordnung und nicht die Datierungen.
