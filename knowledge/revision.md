---
title: Revision
project:
  name: Promptotyping Site
  repository: https://github.com/DigitalHumanitiesCraft/Promptotyping
status: complete
language: de
version: 0.2
created: 2026-07-26
updated: 2026-07-26
authors: [Christopher Pollin]
generated-with: Claude Code (Claude Opus 5)
method:
  name: Promptotyping
  url: https://dhcraft.org/Promptotyping/
related: [INDEX, paper, paper-writing, journal]
---

# Revision

Die Revisionsrunde, die im Juli 2026 auf dem fertigen Paper-Draft lief, hat neun Arbeitsprotokolle hinterlassen. Dieses Dokument ist ihre Verdichtung und tritt an ihre Stelle. Es hält das Steuerwissen, das künftige Prüfaufträge bindet, jeden Befund mit seiner Herkunft und seinem am 2026-07-26 gegen `paper.md` geprüften Umsetzungsstand, die Belegschicht mit ihren Zählweisen und die offenen Punkte.

Die neun Protokolle sind am 2026-07-26 gelöscht worden, nachdem ihr tragender Inhalt hier aufgenommen war. Ihr Wortlaut steht in der git-Historie unter Commit `07a736c`, dem letzten Stand, der sie führt. Zwei von ihnen leben zusätzlich als commit-gepinnte Repräsentation im Grounded Vault, siehe [Herkunft](#herkunft). Die Verdichtung hat umformuliert, zusammengeführt und Wiederholung gestrichen. Sie hat keine Entscheidung, keine Sackgasse, keine Begründung, keinen Dateinamen und keine Zahl mit ihrer Zählweise fallen lassen.

## Was der Durchgang war

Ein externer Review-Durchgang im Chat vom 2026-07-23 lieferte fünf Problemfelder als Hypothesen. Der Reviewer hatte keinen Zugriff auf die Projekt-Journale und auf den Companion, was den Status jeder daraus abgeleiteten Kritik qualifiziert und der Grund ist, warum die Felder als Hypothesen und nicht als Urteile geführt wurden. Seine Gesamteinschätzung nannte die Übersetzungsverdopplung den theoretisch stärksten und die Evidenzbasis den empirisch schwächsten Teil, wegen Einzelpraktiker, fehlender Kontrollbedingung und Konfundierung mit Modellfähigkeit, mit dem Zusatz, dass die Benennung im Paper das Problem nicht neutralisiert. Der erste Teil ist durch den Rahmenwechsel überholt, der zweite trägt weiter.

Daraus entstand eine Vier-Phasen-Revision, Audits ohne Ankerung, Operator-Entscheidung, Implementierung, Konsistenzpass. Phase A lief als vier parallele Opus-Audits mit ankerfreien Briefs, A0 freies Lektorat, A1 Claim-Evidenz, A2 Korpus, A3 redaktionell. Die Prüfung der Zahlen gegen die Repository-Artefakte (A4), die Deckungsprüfung der Belegschicht (A5), der Rahmenwechsel-Entwurf und die SDD-Recherche wurden später und teils gesondert beauftragt. Phase C wurde am 2026-07-24 in acht Commits umgesetzt, ein zweiter Durchgang folgte am 2026-07-25.

In Phase B trägt der Operator die Detailanliegen nach, die ein ankerfreier Auftrag strukturell nicht erreicht; das Beispiel der Runde war die Ergänzung der Acknowledgements um belegte Prüfschritte. Phase D ist eine Gesamtlektüre gegen die Wissensbasis mit der Leitfrage, ob eine Stelle etwas verspricht, das eine andere nicht einlöst, dazu die Gegenprobe aus Gutachterperspektive, ob die Revision selbst neue Schwächen erzeugt hat, also defensive Formulierungen oder einen für die Länge zu kleinen Beitrag. Restspannungen gehen ins Journal statt in stille Glättung.

Die in `revision-knowledge.md` vorgesehene Datei `revision-decisions.md` ist nie in das Repository gelangt. Die Prüfung der git-Historie über alle Branches zeigt für diesen Pfad keinen einzigen Commit; nach dem Rahmenwechsel-Entwurf, Entscheidungspunkt D8, lag am 2026-07-24 kurzzeitig eine uncommittete Fassung im Working Tree, die nicht erhalten ist. Die Entscheidungen liegen in den Commit-Nachrichten und im Entscheidungsstand von [paper-writing.md](paper-writing.md). Die dort formulierte Prozessregel, kein Audit-Befund werde ohne dokumentierte Entscheidung in `revision-decisions.md` umgesetzt, hat damit keinen Träger und ist beim nächsten Prüfauftrag entweder mit einer Datei einzulösen oder auf den realen Weg umzuschreiben.

## Die Zählung der Sektionen hat sich verschoben

A0 bis A3 sind am 2026-07-23 gegen ein Paper geschrieben, dessen Sektion 2 sechs Unterabschnitte hatte. Die Zusammenlegung vom 2026-07-25 hat alle folgenden Nummern der Zwei um eins nach unten gezogen. Wer einen der unten genannten Befunde nachschlägt, braucht diese Übersetzung. Zeilennummern aus den Protokollen sind durchweg ungültig, ebenso die Zeilenangaben von A5 und der Kartierung des Rahmenwechsels, die gegen den Stand vom 2026-07-24 mit 428 Zeilen geschrieben sind.

| Zählung der Audits (2026-07-23) | heutige Zählung |
|---|---|
| 2.4 Übersetzungsmechanismus | 2.3 The Translation Problem, and Documents as Conceptual Models |
| 2.5 Diskursposition, SDD | 2.4 Position in the AI Discourse |
| 2.6 Genealogie, Hybrid-Satz | 2.5 Genealogy |
| 3.4 Konzeptmodelle | aufgelöst am 2026-07-24, Substanz in 2.3 und 3.3 |
| 3.5 Worked Example | 3.4 |

Die Sektionen 4, 5, 6 und 7 sind stabil.

## Was künftige Prüfaufträge bindet

**Die drei nicht verhandelbaren Operator-Vorgaben.** Der ÖAW-Fork bleibt Mini-Nebenbemerkung, das Argument stützt sich nicht auf ihn. „Schneller und billiger" kommt nirgends als Argument vor. Ein quantitativ-empirischer Beleganspruch wird nicht erhoben. A1 hat alle drei am Text geprüft und keine Verletzung gefunden; für die zweite liegt die Deckung darin, dass die Kosten- und Dauerangaben in 5.3 als deterministisch ungeprüfte Erfahrungswerte gekennzeichnet sind und deshalb kein Effizienzargument tragen können.

**Die drei Prozessregeln.** Sie stehen im Volltext in [paper-writing.md](paper-writing.md) und binden alle künftigen Prüfaufträge an diesem Paper. Audit-Aufträge sind ankerfrei; sie nennen Ziel, Kontext und Qualitätsmaßstab und keine Fundstellen, Beispielprojekte oder fertigen Lösungen, damit der Auftrag zugleich testet, ob die Kritik am Text auffindbar ist. Ein freies Lektorat läuft vor jedem Kontakt des Prüfers mit bekannten Problemfeldern, damit der Blick nicht kanalisiert ist. Jeder Änderungsvorschlag trägt einen Steelman des bestehenden Texts, und zwischen Audit und Implementierung steht eine harte Operator-Schranke.

**Die fünf Arbeitsprinzipien.** Kritik ist Hypothese, und ein Widerspruch des Materials ist ein Befund erster Ordnung. Keine Kritik ohne Weg, jeder Befund endet in einem umsetzbaren Vorschlag oder in der begründeten Feststellung, dass die Stelle bleibt. Belegpflicht, jeder Befund mit wörtlichem Zitat und Dateipfad; eine Zusammenfassung ohne Beleg zählt nicht. Negativbefunde sind gleichwertig, und nichts wird erfunden, plausibilisiert oder aufgerundet. Externe Behauptungen über Frameworks oder Werkzeuge außerhalb des Repositoriums nur mit datierter, abrufbarer Quelle; ohne Webzugriff bleibt es bei dem, was das Paper belegt.

**Der Qualitätsmaßstab.** Evidenztreue gilt in beide Richtungen, defensive Unterbietung ist derselbe Fehler wie Übertreibung. Stimmerhalt, britisches Englisch, präzise Prosa, keine Hedging-Floskeln. Nebenwirkungsprüfung, jeder Eingriff wird darauf geprüft, ob er Stellen beschädigt, auf die andere Teile des Arguments bauen. Selbstanwendung, die Revision folgt der eigenen Methode, Audits sind Exploration, Entscheidungen liegen beim Critical Expert, die Implementierung erfolgt aus freigegebenen Dokumenten.

**Das Report-Schema.** Jeder Befund trägt Fundstelle, Beleg, Steelman, Bewertung, wo sinnvoll einen Vorschlag als Diff, und die offene Entscheidung. Jeder Audit-Abschluss fasst drei Gruppen zusammen, die entscheidungsbedürftigen Punkte, die Fälle, in denen das Material einem Problemfeld widersprochen hat, und die ungefragten Befunde.

**Die fünf Blickrichtungen eines freien Lektorats.** Argumentationsarchitektur, Beitragspositionierung, theoretische Tragfähigkeit der Kernfigur selbst, Evidenzpräsentation jenseits der Tabelle, Leserführung. Ausdrücklich Blickrichtungen und keine Checkliste.

**Die Beweisregel der Zahlenprüfung.** Als Beleg zählen Datendateien, Code, Ausgabeverzeichnisse, Testsuiten, git-Historie, GitHub-API-Zustände und öffentlich abrufbare URLs. Journale, Wissensdokumente und READMEs zählen als Herkunftsnachweis und nicht als Beleg für Richtigkeit. Die eine ausgewiesene Ausnahme betrifft Sektion 5.4, wo für die Lehr- und Kooperationsfälle keine Artefakte im Sinn der Regel existieren und das Obsidian-Dokument des Termins die beste verfügbare Aufzeichnung ist.

**Die Grenze zwischen Zahl-misst-Evidenz und Zahl-misst-Aktivität.** Sie ist fallweise gezogen, und ein Gutachter kennt sie nicht. Die Aktivitätsquantitäten sind am 2026-07-24 aus dem Fließtext und den Fallschemata entfernt; die Regel bindet jede künftige Aufnahme einer Zahl.

**Der Alterungsmechanismus.** Eine Aussage über schnell laufende Software wird ohne datierten Abrufanker still falsch. Für die SDD-Frameworks ist das Abrufdatum gesetzt; die Regel gilt für jede künftige Aussage dieser Art.

## Umgesetzte Befunde und ihre Fundstelle im heutigen Text

Alle Zeilen sind am 2026-07-26 gegen `knowledge/paper.md` geprüft. Die Sektionsangaben folgen der heutigen Zählung.

| Befund | Quelle | Stand im Text |
|---|---|---|
| Rahmenwechsel, die Übersetzungs-Doppelung ist von der Hauptaussage zur Begründung der Dokumentform herabgestuft | Rahmenwechsel-Entwurf | umgesetzt, „Translation runs through the method twice" und „LLMs operate as translation mechanisms" kommen nicht mehr vor |
| „disposable" vom Ergebnis auf die Iteration verschoben, RSE-Grenze in 5.3 als technisch markiert | A0, Befund 2 | umgesetzt, das Wort kommt nicht mehr vor, der Abstract führt die Regenerierbarkeit, 5.3 trägt den Vorschlagssatz wörtlich |
| Komparativ „more than any other variable" in 5.5 gestrichen, markierte Ko-Variation statt Rangschluss | A0, Befund 3 | umgesetzt, 5.5 sagt „the quality of the artefacts co-varies with the domain expertise invested in the documents, and I offer that co-variation as an inference from cases I built" |
| Dritter Confound in 6.4, Dokumenttiefe, Verifikationsaufwand und zugewendete Gesamtaufmerksamkeit sind dieselbe Investition | A2, H1-1 | umgesetzt in 6.4, Grenze 1, dreigliedrig |
| Modaler Bruch in 2.5, Substitutionsbehauptung im Präsens Indikativ neben offener empirischer Frage | A1, Befund 1 | umgesetzt punktgenau, 2.5 trägt A1s Minimalvariante mit „can" und „while" |
| Falsifikationssatz für die Nicht-Hybrid-Achse in 6.5 | A1, Befund 5 | umgesetzt, 6.5 trägt „is the prediction the teaching cases open and do not yet close" |
| „failures cluster where documents were vague" ohne dokumentierten Fehlfall gestrichen | A2, Ungefragt 1 | umgesetzt, 5.5 sagt „documents no outright failure, under the recording practice Section 5.1 describes" |
| Fork-Superlativ gesenkt | A2, Ungefragt 3 | umgesetzt, 5.4 sagt „is the one instance in the record" statt „strongest evidence in the set" |
| SDD-Abgrenzung von der Existenz- auf die Gradform | A3, Befund 3; A5, L1; SDD-Recherche | umgesetzt in 2.4, „no counterpart" ist verschwunden, der Absatz folgt der kompakten Fassung des Rechercheberichts |
| Abrufdatum für die Framework-Aussagen | SDD-Recherche | umgesetzt, `[^sdd]` trägt „as retrieved in July 2026" |
| Tessl-Datierung präzisiert auf die Positionsankündigung ohne veröffentlichtes Produkt | SDD-Recherche | umgesetzt in `[^sdd]` |
| Macedo 2026 attribuierend statt behauptend zitiert | SDD-Recherche | umgesetzt in 2.4 |
| „each traceable through a publicly accessible repository" auf den realen Zustand umgestellt | A4, 5.2-a; A5, Punkt 7 | umgesetzt in 5.2, drei geschlossene Repositorien sind benannt |
| Wortgebrauch „verified" auf das umgestellt, was die Prüfung war | A4, 5.1-a; A5, M2 | umgesetzt in 5.1, der Text nennt den adversarialen Agentendurchlauf und die Commit-Pinnung |
| Zahlkorrekturen aus der Datensatzprüfung | A4, sechs Einzelfehler | umgesetzt, die betroffenen Zählungen sind aus dem Papertext entfernt; die Korrekturwerte leben in den Vault-Claims weiter und werden dort gebraucht |
| „no machine-readable citation metadata" abgeschwächt | A4, 4.1-a | umgesetzt in 4.1, „the citation metadata has since been added, the identifier gap stands"; Beleg ist Commit `2641b28` mit `CITATION.cff` (ORCID, SPDX-MIT) und `codemeta.json` nach CodeMeta 3.0 |
| ZBZ-Selbstzertifizierung als datierter Fall agentischer Selbstprüfung aufgenommen | A4, U3 | umgesetzt in 3.4, vierter Absatz, mit der Abschaffung der Screening-Stufe im Mai 2026 |
| ZBZ, „nine verified stages" und die vollzogene Expertenprüfung | A4, 5.2-j und 5.3-a | umgesetzt, beide Bestandteile waren widerlegt |
| SZD-HTR, „tens of thousands of facsimile scans" | A4, 3.5-d | umgesetzt als „some twenty thousand" |
| SZD-HTR, Annotator-Aussage | A4, 3.5-c | umgesetzt, die CER-Messung steht aus |
| Kontextdegradation bei etwa halber Fenstergröße | A4, 5.3-h | umgesetzt, die Zahl stand ausschließlich in Companion-Texten |
| „monitoring several parallel agents as unsustainable" | A4, 6.4-a; A5, L9 | umgesetzt als „an experience the record carries without measurement" |
| Zeitraum der Tabellenprojekte | A4, 5.2-b | umgesetzt als „spring 2025 into mid-2026" |
| Kanonisches Deliverable in den Vault-Steuerdokumenten auf `knowledge/paper.md` umgestellt | A5, Punkt 5 | umgesetzt in `vault/knowledge/state.md`; `vault/knowledge/specification.md` steht noch auf `_content/paper/` |
| Fehlende Testfixtures des Grounded Vault im Companion | A4, U1 | behoben, `vault/examples/minimal` und `vault/examples/broken` existieren, die Testsuite läuft grün |

## Die Belegschicht

Dies ist der Teil, dessen Verlust am teuersten wäre. Er ruht auf Zählungen in dreizehn fremden Repositorien und auf Webabrufen, die ohne erneuten Zugriff nicht rekonstruierbar sind.

### Werkzeuge und Prüfstand der Zahlenprüfung

Python-Einzeiler und kurze Skripte über die Ausgabedateien, `git log` und `git ls-tree` für historische Zustände, `pytest --collect-only -q -p no:cacheprovider` für Testzahlen, wobei die Abschaltung des Cacheproviders einen Schreibvorgang im fremden Repositorium verhindert, die GitHub-API über `gh` für Sichtbarkeit, Forks, Releases und Pages, `curl` und WebFetch für öffentliche URLs. Die Repositorien wurden über das Projektregister im Obsidian-Vault aufgelöst. Bei Beginn stand `knowledge/paper.md` auf Commit `baae1db`, am Ende auf `baff634` mit MD5 `d7a8a3307d8cefde7081a2c6c1301d28`.

### Exakt bestätigte Zahlen mit ihrer Zählweise

| Aussage | Artefakt | Zählweise |
|---|---|---|
| Hans Gross, 3.892 Objekte, TEI plus LIDO | `km_archive/metadata/all_objects.json`, `enhanced_objects_v2.json` | `len(json.load(...))` je 3.892; 1.657 TEI-Karteikarten plus 2.235 LIDO-Objekte |
| CorrespExplorer, 11.576 Briefe | `docs/data/hsa.xml`, `docs/data/hsa-letters.json` | 11.576 `correspDesc`-Elemente, 11.576 Einträge im Array `letters` |
| HerData, 1.793 frauenbezogene Briefe von 15.312 | `data/ra-cmif.xml`, `docs/data/persons.json` | 15.312 `correspDesc`; Summe der `letter_count` über 448 kuratierte Frauen ergibt exakt 1.793; „women-related" meint Korrespondentinnenschaft, daneben steht `mention_count` mit Summe 6.246 |
| coOCR-HTR, 567 Tests, ÖAW-Fork | `docs/tests/*.test.js`, GitHub-API | 567 `it(`- und `test(`-Aufrufe in 18 Dateien und 144 `describe`-Blöcken; drei Forks, zwei ohne Vorsprung, der dritte 43 Commits voraus, zuletzt 2026-06-27, Kontokennung weist die ÖAW aus |
| Medieval, 3.611 TEI-XML, 3.092 freigegeben, 192 Tests | `sources/`, `done`-Unterordner, `pipeline/tests/*.py` | `find sources -name "*.xml"` liefert 3.611, unabhängig bestätigt vom generierten Validierungsreport; Summe über die `done`-Unterordner 3.092; `def test_` ergibt 192 |
| ZBZ, 286 PDFs, 4.152 Seiten | `data/source/`, `data/doc_metadata.json` | Dateizählung; Summe `page_count` über 286 Einträge |
| Klawiter, 6.296 Einträge | `data/output/census-report.json` | Namensraum 0 weist exakt 6.296 Seiten aus; die zweite Zählung von 5.179 Nicht-Redirect-Einträgen im Frontend-JSON erklärt die README |
| Klawiter, ein Tag | `knowledge/journal.md`, git-Historie | Sessions 1, 1b, 2 bis 9 sämtlich unter dem 2026-03-29, 38 Commits an diesem Tag |
| FemPrompt, 326 Papers, 505-Dateien-Vault | `corpus/papers_metadata.csv`, `generated/vault/` | 326 Datenzeilen, 326 Einträge; `find generated/vault -type f` liefert exakt 505 |
| VetMedAI, rund 80 Excel-Dateien, rund 30 Dokumente | Repo-Bestand | `find . -iname "*.xls*"` liefert 77, `find knowledge -name "*.md"` liefert 31 |
| CorrespExplorer, 12 koordinierte Ansichten | `docs/explore.html` | zwölf `data-view`-Buttons |
| CorrespExplorer, 7 Dokumente initial | git-Historie des `knowledge/`-Ordners | am 2025-10-19 Wachstum von 4 über 5 auf 7, Verharren über vierzehn Commits, dann 8 |
| ZBZ, agentengenerierte Codebasis | Commit-Historie | 288 von 306 Commits mit Claude-Trailer, also 94 Prozent; die restlichen sind Merge- und Metadaten-Commits, weshalb „entirely" als vertretbar eingestuft wurde |
| Notker, Psalm 2 mit dreizehn Versen, drei Schichten, drei Slots, fünf Zeugen, IIIF, R-Frage | `data/tei/psalm2.xml`, `docs/index.html`, `knowledge/editorial-guidelines.md` | 33 `seg type="psalm"`, 71 `translation`, 50 `commentary`; genau fünf `witness`-Elemente; Vers 13 liegt in fünf Zeugenlesarten innerhalb des Divs für Vers 12 und ist in den Guidelines dokumentiert; IIIF-Manifest von e-codices |
| Data-Steward-Modul, 210 Minuten | Obsidian, `Teaching/Data Steward Graz/2026-01-09 …` | 09.01.2026, 09:00 bis 12:30, „210 Min. brutto, ca. 180 Min. netto", Modul C.4 |
| Technische Konvergenz auf Vanilla JS | Stichprobe über sieben Frontends | statische Auslieferung aus `docs/` oder dem Wurzelverzeichnis, Bibliotheken vendoriert als Dateien im Repo, `node_modules` nur in coOCR und im Editionsrepo und nicht im ausgelieferten Artefakt |

Der Notker-Fall hält in allen sieben geprüften Einzelheiten und ist damit der am dichtesten belegte Worked Case. Die Drittnutzungsaussage hält präzise; von drei Forks trägt genau einer eigene Entwicklung.

### Widerlegte Zahlen und ihre Korrekturwerte

Diese Werte leben in den Vault-Claims weiter, auch wo sie aus dem Papertext entfernt sind.

| Behauptung | Korrektur | Zählweise |
|---|---|---|
| CorrespExplorer, 34 User Stories | 37 | 37 `### US-`-Überschriften mit lückenlosen Kennungen US-01 bis US-37 |
| CorrespExplorer, 74+ Tests | 69 in fünf Suiten | 74 `name:`-Felder, davon fünf Suite-Namen; aggregation 11, cmif-parser 13, dom-cache 9, formatters 26, state-manager 10 |
| CorrespExplorer, 46 Journal-Phasen | „numbered up to 46" | 49 `## `-Überschriften, davon 42 mit Phasenbezeichnung, Phase 31 fehlt, Phase 7 doppelt vergeben |
| Klawiter, 7-stufige Pipeline | acht | acht nummerierte Skripte in `pipeline/`, `knowledge/pipeline.md` und README sagen beide acht |
| Klawiter, rund 250 Tests | 266 | `def test_` in 22 Dateien; `pytest --collect-only` meldet 413 von 487 gesammelt |
| M³GIM, 49 Entscheidungen als geprüfter Stand | 49 gilt für den 2026-03-19, HEAD trägt 129 | eindeutige E-Kennungen je Commit, `8aa2d9c` 49, `dd48000` 129 |
| Wachstumsvorbehalt „the figures report the verified state" | für zwei Zeilen unhaltbar | die CorrespExplorer-Zahl 34 entspricht keinem Stand des Repositoriums |
| ZBZ, „nine verified stages" | in beiden Bestandteilen widerlegt | eine Neun findet sich in keiner Gliederung; Auszählung der 285 Manifeste ergibt 853 von 855 Strom-Status unverifiziert |
| „the verification protocol is itself a document in this paper's knowledge base" | widerlegt | `knowledge/verification-paper-figures.md` ist durch Commit `ffbd3dd` gelöscht; der Text lebt als Vault-Repräsentation, gepinnt auf Commit `7c209645` |
| teiCrafter „without a standalone code repository" | widerlegt für die Fußnote | das Repository trägt 208 Commits vom 2026-02-05 bis 2026-07-23 und liefert über GitHub Pages aus; der Fließtext war bestätigt |
| „each traceable through a publicly accessible repository" | drei geschlossene Repos | `gh repo view --json visibility` über alle dreizehn Zeilen; privat sind HerData, `db_for_medieval_legal_transactions` und `zbz-ocr-tei`; HerDatas Pages-Adresse liefert 404 und die API kennt für das Repo keine Pages-Site |
| Formationsphase „from 2023 to early 2025" | mindestens zwei Fälle liegen außerhalb | CVMA-Repo angelegt 2025-07-12 mit Commits bis 2025-08-26; der jüngere imareal-Klon trägt fünf Commits vom Oktober 2025 |

### Die Selbsteinschätzung des Modells, ausgezählt

Über alle 2.470 Transkriptionsergebnisse der SZD-HTR-Pipeline, davon 2.452 mit Flash Lite und 18 mit Pro. Das Feld `result.confidence` steht 2.160 Mal auf high, 262 Mal auf medium, 14 Mal auf low und fehlt 34 Mal. Nach TEI-Objekttyp, jeweils Gesamt vor high vor medium vor low, zählt der Zeitungsausschnitt 305/292/5/0, der Typoskriptdurchschlag 117/109/5/0, das Typoskript 104/92/9/1, der Brief 1.527/1.319/187/7, das Manuskript 246/218/22/2 und das Notizbuch 30/5/20/4. Markerstand 8.941 `[?]` und 144 `[...]` über 14.912.326 Zeichen auf 19.068 Seiten in 571 der 2.470 Objekte, während `pipeline/prompts/system.md` in den Regeln 3 und 4 beide Marker fordert. Es gibt keine Gleichverteilung, die Differenzierung nach Objekttyp ist deutlich.

Der Konfabulationsfall, den 3.4 in einer Vorfassung trug, ist widerlegt. Die Postkarte vom 5. Dezember 1901, Signatur SZ-LAS/B3.12, trägt beide fraglichen Wörter mit `[?]`, die Seite drei `[?]`, und die Objektkonfidenz `medium` mit Begründung; die Korrektur stammt aus einem `agent_verified`-Review. Der Fehler entstand aus zwei Stellen in `knowledge/evaluation-results.md`, einer markerlosen Typologiezeile und einer Verallgemeinerung. Fünf weitere Fälle derselben Typologie sind auf ihren Markerstand nicht geprüft; wer die Stelle wieder aufnehmen will, prüft sie zuerst.

### Der Frontmatter-Kern über zwölf Wissensbasen

Grundlage des Satzes in 3.3, der reduzierte Sechser-Kern sei „met in only about half of the documents that carry frontmatter at all". Gezählt hat ein Skript, das je `.md` im `knowledge/`-Ordner das YAML-Frontmatter extrahiert und die sechs Felder per Zeilenanfang-Regex sucht. Der Achter-Kern der Konvention wurde von keinem Repositorium erfüllt und deshalb auf sechs reduziert.

| Repo | md-Dateien | mit Frontmatter | mit allen sechs Feldern |
|---|---|---|---|
| szd-htr | 14 | 14 | 14 |
| zbz-ocr-tei | 14 | 14 | 14 |
| m3gim | 15 | 15 | 14 |
| notker-edition | 11 | 11 | 11 |
| klawiter-rescue | 8 | 8 | 8 |
| teiCrafter | 11 | 11 | 11 |
| FemPrompt_SozArb | 15 | 15 | 15 |
| CorrespExplorer | 15 | 0 | 0 |
| kulturpool-demo | 9 | 0 | 0 |
| wiiw-patent-analysis-demo | 6 | 0 | 0 |
| vetmed-wissensbilanz | 31 | 29 | 0 |
| db_for_medieval_legal_transactions | 7 | 2 | 2 |

Der zugehörige Multi-Agent-Lauf vom 2026-06-13 ging über 98 git-Repositorien, fand rund 53 mit `knowledge/`-Ordner und wertete 43 als echte Wissensbasis. Die Behauptung, generierte Dokumente trügen Frontmatter, das sie als generiert ausweist, ist widerlegt; ein Regex `^generated:` über die `knowledge/`-Ordner von sieben Repositorien ergibt null, und der einzige gefundene generierte Report trägt statt Frontmatter die Prosazeile „Generated: 2026-05-16 / Commit: `5f69ec9afc`".

### Die Dokumenttiefe der Ein-Tages-Builds

Gezählt am 2026-07-23 als Dateien im `knowledge/`-Ordner. Klawiter-Rescue, in 5.2 als Ein-Tages-Build geführt, trägt neun Wissensdokumente, `about`, `data`, `frontend`, `index`, `journal`, `pipeline`, `production-readiness`, `testing` und den Index, dazu ein eigenes `testing.md` und eine LLM-as-a-Judge-Validierung. M³GIM trägt vierzehn samt `testing.md`. Auf beiden Zählungen ruht der Satz, dass ein schneller Build im Record keinen flachen Dokumentsatz bedeutet, und damit die empirische statt bloß logische Geltung der Confound-Nennung in 6.4. Es gibt im Record kein Projekt mit tiefen Dokumenten und belegbar geringer Verifikation und keines umgekehrt.

Zur Semantikfrage arbeitet genau ein Projekt der 5.2-Tabelle auf ontologiebasierter Eingabe, M³GIM auf RiC-O und JSON-LD. Klawiter erzeugt JSON-LD als Ausgabe aus einem Blended Vocabulary, die Eingabe war SQL und BLOB, was ein Fall am niedrigsemantischen Eingang ist. Kein Projekt hält das Quellformat konstant und variiert nur die Semantik.

Die zwei belegten innerprojektlichen Sackgassen, die der Record hergibt, sind die wertlose Selbsteinschätzung des Vision-Modells und das Verwerfen zweier Visualisierungstypen im CorrespExplorer. Beides sind positive Explorationsbefunde und keine Fehlfälle aus vager Dokumentation. Wer künftig nach dokumentierten Fehlschlägen sucht, findet hier das einzige verfügbare Material und zugleich die Begründung, warum es die verlangte Klasse nicht füllt.

### Die Herkunftsgrade der Belegschicht

Der Auftrag nannte vier Grade; die Unterteilung des ersten war am Material nötig, weil sechzehn Claims auf publizierten Arbeiten des Autors ruhen.

| Grad | Definition |
|---|---|
| H1, externe publizierte Quelle | Anker in einem Publikations-Destillat einer Drittautorschaft, mit CSL-Record in `references/` und wörtlichem Quotenbeleg im Destillat |
| H2, publizierte eigene Arbeit | Anker in einem Publikations-Destillat des Autors, zitierfähig, inhaltlich dieselbe Stimme, die das Paper führt |
| H3, gegen Repository-Artefakte geprüfter Stand | Anker in `verification-paper-figures-2026-07-19` oder `szd-htr-fair4rs-audit-2026-07-23` |
| H4, Prozessaufzeichnung | Anker in einem datierten Methoden-, Audit- oder Evaluationsdokument, agenten- oder autorengeschrieben, ohne unabhängige Prüfung |
| H5, Aussage des Autors ohne weiteren Beleg | kommt im Claim-Bestand definitionsgemäß nicht vor, weil das Schema eine Schlussfolgerung ohne Quellstütze als Posit in das Deliverable verweist; im Paper existiert die Klasse in großem Umfang und dort unmarkiert |

Verteilung, maschinell über die `grounding`-Anker aller 119 Claims im Stand vom 2026-07-24, mit Mehrfachzuordnung bei gemischten Ankersets. Rein H1 sind 67, rein H2 16, rein H3 25 und rein H4 8; gemischt sind zwei aus H1 und H2 sowie einer aus H3 und H4.

Die Literaturachse ist praktisch lückenlos. `vault/knowledge/register-paper-sources.md` führt jedes zitierte Werk mit Zugangsklasse und Status; 52 der zitierten Werke tragen mindestens einen Claim, offen sind vier Werke mit Beschaffungsbedarf und Stachowiak 1973 als registrierte Druckquelle, jeweils mit Begründung im Register. Die Lücken liegen auf der Praxisachse, bei den Aussagen des Papers über eigene Projekte, eigene Lehre und eigene Beobachtungen am Modellverhalten.

Neun der 119 Claims ruhen auf Prozessaufzeichnungen, sechs davon mit Commit-Identifier in der Repräsentation, und keiner auf einem laufenden Projekt-Journal. Die Vermutung, ein nennenswerter Teil der Belege komme aus agentengeschriebenen Projekt-Journalen, trägt nicht.

### Der Schemavorschlag für den Härtegrad

In `vault/knowledge/schema.md` eine Vokabelzeile `provenance` mit den Werten `external`, `external-own`, `artefact-checked`, `process-record`. Pflichtfeld an der Frontmatter der Repräsentation; Publikations-Destillate haben keine Repräsentation, für sie gilt die Ableitung aus dem Referenz-Record, `external-own` wenn die CSL-Autorschaft den Paper-Autor nennt, sonst `external`, maschinell entscheidbar aus `references/*.json`. Ableitungsregel im Muster der bestehenden Statusregel, also Provenienz eines Claims als Minimum seiner Anker in der Ordnung `external` über `external-own` über `artefact-checked` über `process-record`. Validator-Funktion entlang des vorhandenen `_resolve_anchor`-Pfads mit Schalter `--provenance`; als Fehler zählt allein ein fehlendes oder unbekanntes `provenance` an einer Repräsentation. Die Slugs `*-verified-YYYY-MM-DD` bleiben unangetastet, weil sie an dreizehn Stellen verlinkt sind; die Konvention wird in `schema.md` umgedeutet, das Datumssuffix markiert den Stichtag und der Härtegrad steht im Feld. Kosten insgesamt dreizehn Frontmatter-Zeilen, eine Vokabelzeile, ein Absatz Regeltext und rund fünfundzwanzig Zeilen Python.

Ein fünfter Grad für unbelegte Autoraussagen ist ausdrücklich nicht vorgesehen, weil solche Aussagen nach dem Schema nicht in die Claim-Schicht gelangen. Ihr Ort ist das Posit im Deliverable.

### Die abgeschaltete Deckungsprüfung

`vault/tools/validate.py`, Funktion `_check_chapter`, meldet `W-UNANCHORED` für jeden Absatz ohne Fußnotenmarker. Sie läuft nie, weil `vault/30_deliverable/` leer ist, und der Grund steht in `vault/knowledge/specification.md`, wonach das Deliverable am Repo-Wurzelpfad kanonisch bleibt. Die Fähigkeit ist vorhanden und abgeschaltet. Drei Ausbaustufen liegen vor.

1. Deterministisch. Ein Skript `tools/coverage.py`, das aus `knowledge/paper.md` alle Sätze mit einer Zahl, einem Datum, einem Projektnamen aus der Tabelle oder einem Prioritäts- und Allquantorwort extrahiert und gegen den Claim-Bestand nach Stichwörtern abgleicht, Ausgabe als Kandidatenliste ohne Verdikt und ohne Wirkung auf den Exit-Code, rund sechzig Zeilen.
2. Editorisch. Das Deliverable führt die Fußnotenkonvention `Grounded in [[claim]]` und `Posit: <Begründung>`, dann arbeitet die vorhandene Prüfung ohne neuen Code. Der Preis ist ein zweiter Fußnotenapparat, der mit dem Einreichungsformat kollidiert; die kollisionsfreie Variante ist eine Schattendatei je Sektion unter `30_deliverable/` und damit die bewusste Rücknahme der Festlegung von 2026-07-19.
3. Nichtdeterministisch. Ein LLM-Durchgang unter dem Anti-Anchoring-Protokoll des Machine-Review-Vertrags, einmal je Revisionsrunde, Ergebnis als Befundliste im Journal.

Empfohlen sind Stufe 1 sofort und Stufe 3 gekoppelt an die Revisionsrunden. Entscheidbar ist formal, ob ein Absatz einen Anker trägt; nicht entscheidbar ist, welcher Satz substanziell ist. Eine Heuristik über Zahlen, Datumsangaben und Prioritätswörter hätte etwa die Hälfte der zwanzig Befunde gefunden und dabei jede Jahreszahl im Referenzapparat gemeldet.

### Die Recherche zur SDD-Abgrenzung

Alle Abrufe am 2026-07-24. Diese Belege sind ohne Webzugriff nicht reproduzierbar und dürfen nicht neu erraten werden.

| Framework | Datierung | Quelle |
|---|---|---|
| GitHub Spec Kit | Repo angelegt 2025-08-21, Ankündigung 2025-09-02 | Ankündigungsposting im GitHub-Blog, Repository-Metadaten der API, Release v0.14.1 vom 2026-07-23 |
| AWS Kiro | 2025-07-14 | Launch-Posting auf `kiro.dev`, Dokumentationsseiten zu Feature Specs und Steering |
| BMAD-METHOD | Repo angelegt 2025-04-13, damit der früheste geprüfte Vertreter | API-Metadaten, README, Referenzseiten zu Agents und Workflow-Map |
| OpenSpec | Repo angelegt 2025-08-05 | API-Metadaten, README |
| Tessl | Finanzierungs- und Positionsankündigung 2024-11-14, damals mit Warteliste und ohne veröffentlichtes Produkt | TechCrunch und Fortune vom selben Tag; eine primäre Framework-Dokumentation mit datiertem Abruf war nicht auffindbar, weshalb Tessl nicht in den Vault aufgenommen wurde |
| Macedo 2026 | Version v1, eingereicht 2026-06-03, Kategorien cs.SE und cs.AI | arXiv-API und Abstract-Seite zu `2606.04967`; der CSL-Datensatz stimmt in Titel, Autor, Jahr, Nummer und URL überein |

Die vier Negativbefunde, auf denen die Gradabgrenzung in 2.4 ruht.

- **Datenbeschreibung** existiert bei Spec Kit und Kiro und beschreibt in beiden Fällen das Entitätenmodell des zu bauenden Systems. Spec Kit führt `data-model.md` als Phase-1-Artefakt und ein Spec-Template mit dem Abschnitt „Key Entities *(include if feature involves data)*". Kiro erzeugt „data flow diagrams, TypeScript interfaces, database schemas, and API endpoints" und führt eine Steering-Schicht aus `product.md`, `tech.md` und `structure.md`, von der keine Datei Datenquellen oder deren Semantik beschreibt. Bei BMAD und OpenSpec fehlt eine Datenschicht ganz. Die Unsicherheitsmarkierung von Spec Kit betrifft die Unterspezifikation der Anforderung und keine Unsicherheit in einer Quelle.
- **Verifikation** existiert überall und prüft überall interne Kohärenz, Abdeckung und Codequalität. Spec Kit sagt „your role isn't just to steer. It's to verify" und liefert `/speckit.analyze` für Cross-Artifact-Konsistenz. Kiro nutzt EARS-Notation und Approval Gates, mit der Ausnahme des Quick-Spec-Modus ohne Gates. BMAD prüft mit `bmad-check-implementation-readiness` gegen die eigene Eingabe. OpenSpec lässt den Plan vor dem Code prüfen.
- **Eine über Fachkompetenz definierte Prüfrolle** kommt in keiner Dokumentation vor. Spec Kit benennt den Entwickler, Kiro nennt Approval Gates ohne den Freigebenden zu qualifizieren, und BMAD als rollenreichstes Framework und damit härtester Test führt Analyst, Product Manager, Architect, Developer, UX Designer und Technical Writer als Agent-Skills, während der Mensch als Partner erscheint. Dies ist die stärkste der drei Behauptungen und hielte auch nahe an der Existenzform; sie wurde nur durch die Nachbarschaft der beiden schwächeren in einem Satz mit entwertet.
- **Die Adressierungs-Prämisse ist widerlegt.** Das Spec-Template trug in den Tags v0.0.1, v0.0.20 und v0.0.55 wörtlich „Written for business stakeholders, not developers" und in der Review-Checkliste „Written for non-technical stakeholders". In v0.14.1 und auf `main` enthält dieselbe Datei keine Adressatenaussage mehr, und ob die Streichung eine bewusste Neupositionierung ist, sagt das Repositorium nicht. Der Papertext trägt deshalb die Differenz in der Art der Autorität statt in der Art der Leserschaft.

Aufgenommen sind vier Quellen als Tripel aus Original, Repräsentation und Distillat, Channel `collection`, Topic `Frame`, Status `grounded`, mit 39 Core Statements und sieben tragenden Ankergruppen für eine spätere Claim-Lane, nämlich Datenschicht bei Spec Kit und Kiro, Datenschicht-Negativbefunde, Verifikationsgegenstand, Rolle, Adressierung und Datierungen. Claims sind absichtlich keine gebaut; die Sperre in `vault/knowledge/state.md` hing an der Operator-Entscheidung über die Gradform, die inzwischen gefallen ist.

## Zirkularität in der Belegkette

Drei Record-Claims der Revisionsrunde ruhen auf Agenten-Lektüren des Papers selbst. Die Kette läuft vom Paper über ein Audit des Papers in die Repräsentation, in das Destillat, in den Claim und zurück in das Paper. Das Schema kann das nicht bemerken, weil ein Audit-Dokument formal eine Quelle vom Typ `document` ist wie jede andere. Betroffen sind die Confound-Nennung in 6.4 und die Ertragspol-Aussage in 5.5, beides Sätze, die sich als Befund am Korpus lesen. Wer sie gegen einen Gutachtereinwand verteidigen muss, kennt ihre Herkunft; wer neue Claims aus Audit-Dokumenten baut, verlängert die Kette.

Vier weitere Herkunftsschwächen stehen daneben. Die Verifikationsquelle hält ihre eigenen Grenzen fest, ein einzelner adversarialer Agentendurchlauf ohne zweiten unabhängigen Pass, und Testzahlen als Testfunktionen im Quelltext gezählt ohne ausgeführte Sammlung; diese Selbstbegrenzung ist als eigener Claim in die Belegschicht gehoben, und alle Claims stehen auf `grounded`, keiner auf `validated` oder `verified`. Die Frontmatter-Praxisnotiz vom 2026-05-09 ist substanziell, weil sie eine Querschau über neunzehn reale `data.md` trägt, und zugleich weder publiziert noch unabhängig geprüft noch commit-gepinnt. Das unveröffentlichte Foliendeck ohne persistenten Identifier steht als Kandidat für eine Aussage über LLM-Eigenschaften bereit, die dann auf den eigenen Folien ruhte. Und zwei formal als H3 geführte Claims sind inhaltlich Negativbefunde, weshalb ein Deckungsmaß, das Claims zählt, sie fälschlich als Deckung verbucht.

## Negativbefunde

Ein späterer Durchgang kann diese Stellen für Schwachstellen halten und damit etwas beschädigen, das bereits richtig steht.

**Am Argument.**

- **Die Deskilling-Verteidigung ist vollständig eingebaut.** Die Profession-Schutzklausel ist an vier Stellen verankert, in Sektion 1, 2.5, 3.4 und 6.4, und nirgends überdehnt. Eine der vier zu streichen öffnet die Angriffsfläche. Drei der vier halten unverändert gegen die neue Rahmung; allein 6.4 brauchte die Nachschärfung gegen die durch sie erzeugte Fehllesart.
- **Sektion 5.4 behauptet keine Wirksamkeit in dritter Hand.** Sie beschränkt sich auf Kommunizierbarkeit und Produzierbarkeit; „real" heißt existent und funktionsfähig, „working prototype" heißt lauffähig, im Workshop, angeleitet. Weitere Hedges sind defensive Unterbietung. Insbesondere gehören „successfully produced" und „valid research artefacts" an diese Stelle nicht.
- **Der Intro-Möglichkeits-Claim braucht keinen weiteren Hedge.** Er ist über die eigene hybride Praxis grundiert und wird vom begrenzenden Satz in Sektion 1 bereits eingehegt, „What it changes is the reach of a specifying and verifying scholar within the prototype boundary".
- **Das „coaching" in 5.4 ist benannt,** also wird keine unassistierte Nutzung behauptet. Wer den Halbsatz als Schwäche liest und streicht, erzeugt genau die Überschreitung, die er vermeiden will.
- **Der Notker-Fall ist Gegenevidenz gegen die starke Zirkularitätslesart.** Er ist die einzige Stelle im Record, an der Dokumenttiefe und Verifikation auseinanderfallen, und er fällt zugunsten der Dokument-Primat-These aus. Er gehört in die Argumentation gegen einen Gutachter, der Zirkularität einwendet, und nicht in einen Diff. Der tragende Wortlaut lautet „this externalisation is also the verification burden. The R-disambiguation is recorded as still awaiting the commissioning scholar's confirmation, and where the guidelines encode a wrong rule, no implementer's intuition catches it."
- **Zu Hypothese 2 gibt es keine Gegenevidenz im Korpus, weil es keine kontrastierende Evidenz gibt.** Das Material ist zur Frage stumm, und das ist ausdrücklich kein Beleg gegen den Semantik-Mehrwert. Wer aus dem Schweigen des Korpus ein Argument dagegen macht, überzieht.
- **Das Qualitätsmaß in 5.5 ist nicht willkürlich.** „Epistemic yield" und „discriminate most finely" sind am Artefakt zeigbar. Der Befund zur Zirkularität greift die Legitimität des Maßes nicht an, allein seine Unabhängigkeit.
- **6.4 benannte den Confound mit der Modellfähigkeit schon vor der Runde,** in der Formel „a single practitioner, without a control condition, and the observed gains confound method effects with LLM capability". Das ist kein Ergebnis der Revision und darf nicht als solches verbucht werden.
- **Die Evidenz-Selbstdeklaration ist an vier Stellen konsistent,** Abstract, Sektion 1, 5.4 und 6.4, und die Beschränkung wird nirgends beschönigt.

**An der theoretischen Anlage.**

- **Der Absatz zu Drucker in 2.1 ist die stärkste Einzelstelle des Papers.** Der naheliegende Einwand, LLMs reproduzierten genau die positivistischen Visualisierungskonventionen, die Drucker kritisiert, ist zum Konstruktionsprinzip gemacht statt abgewehrt. Wer ihn kürzt, nimmt dem Text seine beste Stelle.
- **Die Zugangs- und Ethikgrenze in 6.4 kippt nicht ins Bekenntnishafte.** Sie benennt die Abhängigkeit von proprietären Frontier-Systemen als ungelöst, ohne den Beitrag zu relativieren, und vermeidet den Both-Sides-Schluss.
- **Die Epistemologie der Methodenbildung in 3.1 nimmt den stärksten methodologischen Einwand vorweg,** dass die frühen Fälle die Methode nur retrospektiv tragen, ohne die Evidenz zu entwerten.
- **Die Reproduzierbarkeitspassage in 6.3 ist präzise abgegrenzt** und übertreibt nicht, weil sie die binäre Artefaktidentität ausdrücklich außerhalb verortet.
- **Die Modellabhängigkeit ist bewusst belassen.** Der Text bindet seine Kernbehauptung an einen technischen Moment, der bei Erscheinen überholt sein kann. Die Alternative, Abstraktion vom Modell, opferte die Ehrlichkeit der Bedingung. Ein späterer Durchgang, der die Zeitbindung repariert, macht den Text unehrlicher.
- **Der Rahmenwechsel spart keine Wörter.** Er kostet netto 406, davon rund 220 für die neue Hauptaussage, 158 für die Absicherungen und 110 für die These in Abstract und Konklusion, gegen rund 110 Ersparnis. Wer ihn als Kürzungsmaßnahme begründet, begründet ihn falsch; sein Gewinn ist Leserführung.
- **Kein Literaturverweis ist durch den Rahmenwechsel verwaist.** Star und Griesemer, Mayr und Thalheim, Stachowiak, Gruber und Miksa bleiben zitiert. Die Claim-Schicht verankert das Übersetzungsproblem über vier Claims, nirgends die Doppelung, und braucht deshalb keine Rücknahme.
- **Die neue Hauptaussage stand bereits im Paper,** in der heutigen 2.5, wo Requirements-Dokument und Datendokument als Fortsetzung von Scholar-Centred Design und Datenmodellierung geführt werden. Der Wechsel beförderte eine vorhandene Aussage und importierte keine neue, weshalb er keine neue Evidenzlücke aufriss.
- **Der Steelman der alten Rahmung ist in seiner herabgestuften Rolle gültig.** Die Doppelung leistete fünf Dinge, die Verklammerung zweier Literaturen an einem Gegenstand, die Begründung der Dokumentform, konzeptuelle Sicherheit gegen den empirisch schwächsten Punkt, die Reparierbarkeit des Äquivokationsvorwurfs und die Kohäsion der Konklusion. Der Äquivokationsvorwurf allein hätte den Wechsel nicht getragen; getragen hat ihn der Lastvorwurf, weil eine Aussage über die Artefaktform die Hauptaussage eines Methodenpapers begründen und nicht tragen kann.
- **Der Begriff „translation" hat technische Verwendung** in der maschinellen Übersetzung, in den Translation Studies und in Grubers eigenem Titel von 1993. Das entkräftet den Äquivokationsvorwurf, falls er wiederkommt.

**Am Text und am Bestand.**

- **Die Tokenökonomie ist bereits dedupliziert.** Die Erwartung einer Dreifach-Erklärung trifft nicht zu, die späteren Stellen tragen markierte Rückverweise.
- **Die TaDiRAH-Abgrenzung ist ehrlich als Teilüberlappung formuliert.** Sie ist keine Existenzdichotomie und braucht keine Milderung; die verbleibende Differenz rechtfertigt sich aus dem Objektunterschied zwischen Aktivitäten und Artefakt-Funktionen.
- **maDMP und Vibe Coding sind schon als Gradunterschiede formuliert,** „machine-actionable in a stronger, operative sense" und „Vibe Coding survives inside the method as an exploratory mode". Beide brauchen keine Milderung.
- **Die hohe Querverweisdichte ist im Bau des Papers begründet.** Gezählt wurden am 2026-07-23 rund 15.300 Wörter mit 86 expliziten `Section`-Verweisen. Ein pauschaler Abbau beschädigt die Argument-Kohäsion; belastend sind allein die rekapitulierenden Bündelverweise.
- **Die Wiederkehr des Schwierigkeitsprofils in 6.5 trägt argumentativen Dienst,** weil das Profil die Prämisse des Transferschlusses ist und ohne Rückblättern verfügbar sein muss. Ein Dublettenscan meldet die Stelle als Treffer; ein Eingriff ist marginal und riskant für die Lesbarkeit.
- **Der Refrain „modelling, specifying, and verifying"** in Abstract, Sektion 1, 3.4, 6.4 und 7 ist als Kernclaim gewollt und liegt unter der Schwelle der Parallelismus-Regel. Ein Stilprüfer würde ihn als rhetorischen Dreier beanstanden.
- **Die Semikolon-als-Konnektor-Fälle in den Sektionen 3 bis 7 sind zahlreich und bewusst belassen.**
- **Der Kürzungsspielraum ist klein und dokumentiert.** Die Summe aller neun redaktionellen Kürzungsvorschläge lag bei rund minus 170 bis minus 220 Wörtern, also rund ein bis anderthalb Prozent des Fließtexts, und kein Vorschlag schwächte einen Beleg oder eine Behauptung. Jeder künftige Kürzungsauftrag hat diesen Befund als Ausgangslage; wer mehr herausholen will, greift in Substanz.
- **Der Vault benennt mehrere seiner eigenen Lücken bereits.** `20_claims/MOC-Limitations.md` führt Einzelpraktiker-Korpus, fehlende Kontrollbedingung, Konfundierung mit Modellfähigkeit und die Prototyp-Produkt-Grenze.
- **Claimlose Destillate sind überwiegend Absicht,** vier der fünf betreffen die SDD-Quellen.
- **Die Publikations-Destillate tragen `checked.quote`,** und die Quotenprüfung ist im Validator implementiert. Auf der H1-Achse ist die Kette härter als auf jeder anderen.
- **Die Herkunft ist an der Repräsentation dokumentiert.** Jede Dokument-Repräsentation trägt `metadata.creator` mit Rolle und Institution und unterscheidet sauber zwischen Verifikationsagent, Revisionsaudit-Agent und Autor mit Agentenunterstützung. Die Information ist vorhanden und allein am Claim nicht ablesbar.
- **Die Ankermechanik funktioniert.** Jede Zahl der 5.2-Tabelle außer den unten benannten trug einen Claim, dessen Anker über Destillat und Repräsentation auflöst, und der Validator bestätigt die Auflösung fehlerfrei.
- **Der wiiw-Fall braucht keine Änderung,** obwohl die Quelle ein R-Datensatz ist; die Spalte heißt „Data" und benennt die Quelle. Ebenso hält der Kulturpool-Wert, weil die Spalte die API-Seite benennt, und die Klawiter-Zahl, weil die README beide Zählungen erklärt.
- **Alle Prozessaussagen der Sektion 3.4 halten außer den zwei benannten,** und die Methodenaussagen der Sektion 3.3 halten ebenfalls. Wer dort kürzt, kürzt Belegtes.

## Offene Punkte

Am 2026-07-26 gegen den Dateibestand und den Papertext geprüft.

### Am Papertext

- **Die Selbstanwendung steht als Argument, ohne dass 6.4 die Zirkularität als Grenze nennt.** Der Satz „The companion is thus part of the argument" steht in 5.1. A0 hatte die Rücknahme auf „demonstration" vorgeschlagen und für die stärkere Lesart verlangt, dass 6.4 die Zirkularität einmal ausdrücklich als Grenze führt. Die sieben Grenzen in 6.4 nennen sie nicht. Der Zug ist ungedeckt.
- **Der Konzessionssatz zum Semantik-Mehrwert fehlt.** Innerhalb der Destillations-Architektur konsumiert das LLM eine destillierte Beschreibung, unabhängig vom Quellformat. Ob eine semantisch explizite Eingabe eine materiell bessere oder treuer herstellbare Beschreibung liefert als eine gleich sorgfältige Beschreibung flacher Daten, isoliert das Korpus nicht; belegt ist allein, dass explizite Struktur bequem und treu zu destillieren ist. Für diesen Fall war ein Satz gesetzt, der den Vorteil als offene empirische Frage einräumt. Die Superlativformel „the ideal case of modelling" ist verschwunden und 2.2 sagt neutral „In ontology-based data in RDF the meaning of the data is itself machine-readable", der Konzessionssatz steht nirgends, und die Konklusion trägt weiterhin „the field's sustained investment in standards, ontologies, and semantic modelling … the method renders it productive". Offen sind die Platzierung, entweder am Ort der These oder als eigene Grenze in 6.4, und die Angleichung der Konklusion, für die die Minimalvarianten „is what the method sets out to render productive" und „aims to render productive" vorliegen.
- **Der konstitutive Charakter des Qualitätsmaßes ist nicht benannt.** Das Maß von 5.5 ist überwiegend eine Eigenschaft des Designs, das Design stammt aus den Dokumenten, und beurteilt wird es vom selben Praktiker aus demselben Dokumentsatz. In diesem Teil ist die Korrelation zwischen Dokumenttiefe und Qualität konstitutiv statt unabhängig gemessen, und das ist die Stelle, an der ein Gutachter am härtesten ansetzt. Offen ist, ob 5.5 das ausdrücklich sagt oder es implizit über die Confound-Nennung in 6.4 mitläuft; eine Doppelmarkierung ist zu vermeiden.
- **Die Scope-Verschiebung in 5.4.** Der Satz über Verwaltungsprototypen durch Nicht-Entwickler steht unverändert im Abschnitt, der als Transfer-Test rahmt, obwohl Verwaltungsprototypen keine Forschungsartefakte mit epistemischem Ertrag sind. Der Diff fügt nach „administrative processes" die Kennzeichnung „outside the research-artefact case" ein.
- **Der achsenfremde Hedge in 6.5.** Der Hedge sichert die Feld-Achse und steht unmittelbar neben der Klausel, die die Hybrid-Achse betrifft, sodass ein Leser ihn auf beide bezieht. Der Falsifikationssatz für die zweite Achse ist eingebaut, die Verwechslungsgefahr bleibt.
- **Die tragende Fassung der SDD-Differenz fehlt.** Die Gewichtung ist umgesetzt, die Argumentfigur steht aus. Sie lautet, dass die drei Schichten mehr sind als die Anwendung von SDD auf eine Domäne mit besonderen Daten, weil sie eine andere Arbeitsteilung markieren. Das ist die Antwort auf den Gutachter aus der Software-Engineering-Ecke, der fragt, ob es sich um Domänen-Relabelling handelt. Die naheliegende Formel grenzt an das Verbot der nachgestellten Verneinung; die positive Umformung liegt vor.
- **Kulturpool „Parallel agent orchestration" steht unverändert in Tabelle 1,** obwohl das Repositorium zwei Commits, kein Journal und keine Prozessdokumentation trägt. Das ist die letzte nicht prüfbare Behauptung, die noch als Tabellenzelle im Paper steht.
- **„Every artefact carries a provenance declaration" ist im Indikativ formuliert und hat einen Ausreißer.** Die Stichprobe über sieben ausgelieferte Frontends fand die Erklärung überall außer bei Kulturpool, dessen `index.html` Footer und Lizenz führt und keinen Hinweis auf Erzeugung, Modelle oder Verifikation. Entweder wird der Punkt als Anforderung markiert oder der Ausreißer benannt.
- **`[^winterschool]` behauptet „the workshop dataset is public".** Die OSF-GUID löst auf ein Dateiobjekt von 2023-02-27 in einem fremden öffentlichen Knoten auf. Der Datensatz ist öffentlich und im Workshop nicht entstanden.
- **`[^museum]` ordnet den Screencast dem falschen Halbtag zu.** Der Screencast gehört zum zweiten Halbtag, der Fließtext beschreibt den Promptotyping-Halbtag.
- **„re-run identically" in 6.3 klammert die LLM-Stufen der eigenen Pipelines nur implizit aus.** Der Präzisierungsvorschlag lautet „the deterministic stages of those pipelines re-run identically".
- **Wheaton als erster Promptotype mit Datierung Januar 2025 steht ohne Artefakt.** Weder lokal noch auf GitHub war ein Repositorium oder ein datiertes Artefakt auffindbar; es fehlt ein versioniertes Artefakt oder ein datierter Export.
- **Die Formationsphase in 5.2 ist die dünnste Stelle der Evidenz.** Sie nennt Projekte, Jahreszahlen und eine Prioritätsbehauptung, und der Vault trägt zu keiner der Datierungen einen Anker. Mindestens CVMA und der jüngere imareal-Klon liegen außerhalb des genannten Fensters.
- **Die vergleichende Feldaussage in 4.1** steht ohne Anker; der FAIR4RS-Claim deckt allein das eigene Projekt.
- **Der `template:`-Mechanismus ist als erreichter Zustand beschrieben.** Er gilt für die jüngere, refactorierte Generation der Wissensbasen; ein Halbsatz, der das als Reifegrad markiert, kostet nichts am Argument.
- **Die Erfahrungswerte als Klasse.** „less than 10 EUR", „approximately six weeks", „two-hour experiment", „one day". Für „one day" existiert bei coOCR und Klawiter ein harter Artefaktbeleg, für die übrigen nicht. Für ZBZ liefert die Suche über `knowledge/` und `reports/` allein „API costs are negligible", und die Sechs-Wochen-Angabe steht gegen 74 Commits in den ersten sechs Wochen bei 306 insgesamt und einen deutlich später erreichten Meilenstein M4. Der Vorschlag, den realen Commit-Zeitraum danebenzustellen, ist nicht entschieden.
- **Die Momentaufnahmen-Regel ist nicht formuliert.** Durch das Entfernen der Zahlen aus Tabelle 1 ist der Konflikt entschärft, und 5.2 sagt weiterhin „the table reports the checked state", 5.1 spricht von „the figures in the table", während die Tabelle keine Zahlen mehr trägt.
- **`[^sdd]` steht gegen seine Quelle.** Die Fußnote führt Tessl, BMAD, Kiro, OpenSpec und Spec Kit als Wellenmitglieder; Macedos Vergleichsmenge deckt sechs andere Frameworks ab und weder Kiro noch Tessl. Die Quelle trägt die Taxonomie-Aussage und nicht die Vollständigkeit der Aufzählung.
- **Die offene Leitbegriffsfrage.** Ob „prototype" der richtige Leitbegriff für das Ergebnis bleibt, wenn ein Teil der Fälle vollwertige, dauerhaft betriebene Forschungswerkzeuge sind, ist eine Positionierungsfrage bis in Titel und Abstract hinein.
- **Die Titelfrage.** Der Titel trägt weiter „Translating"; die Ellipse der früheren Fassung ist durch „Context Engineering and Agentic Tools" aufgelöst. Ob das Partizip nach dem Rahmenwechsel die richtige Setzung bleibt, ist Positionierung gegenüber dem Venue. Der nicht verworfene Alternativvorschlag lautet „From Research Data to Research Artefacts with Context Engineering and Agentic Coding".
- **Die Prototyp-Grenze aus 4.3 ist nicht als Grenze der Hauptaussage ausgewiesen.** Empfohlen war eine Halbzeile, weil die These nach dem Rahmenwechsel an ihr hängt.
- **Verifikation als zweite Sammelstelle der früheren Implementierungsarbeit ist in 6.2 nicht benannt.** Ohne diesen Satz steht die stärkste Gegenrede zur Hauptaussage unkommentiert im eigenen Text, denn 6.2 sagt, Verifikation sei „precisely the scholarly labour that the division of responsibility assigns to the human, and its cost is the honest price of the possibility claim".
- **Die arXiv-ID `2606.04967` ist vor der Einreichung an der Quelle zu verifizieren.** Sie datiert auf Juni 2026 und liegt damit knapp vor dem Schreibdatum; die Form ist plausibel. Die Referenz steht an der exponierten SDD-Stelle.
- **Die Findability-Dopplung zwischen 4.1 und 6.3** ist ein Grenzfall mit unterschiedlichen Pointen, den ein späterer Durchgang im Blick behalten soll. Dasselbe gilt für die Fußnote `[^precedent]`, die zwei Gedanken trägt.
- **Das Migrationsziel für Betriebsdetail.** Die Maschinenadresse ist aus 5.1 verschwunden; ihre kanonische Stelle ist die Site, die Grounded-Vault-Mechanik steht im `vault/`-Action-Layer. Der Trade-off zwischen Prüfbarkeit für den Gutachter ohne Site-Besuch und Lesefluss bleibt zu entscheiden.
- **Die Dubletten-Gefahr der Zusammenlegung.** Der Erstentwurf des zusammengelegten Absatzes endete mit einem Satz, der wörtlich schon in 3.3 stand. Die Zusammenlegung erzeugt neue Dubletten, wo bisher Distanz die Wiederholung verdeckte; das ist ein stehender Prüfpunkt für jeden Konsistenzpass.
- **Die Kompensationskandidaten,** falls das Paper netto nicht wachsen soll. Die Wortzahlen sind Schätzungen des redaktionellen Audits vom 2026-07-23.
    - Die wiederholten RSE-Antworten in 2.3, minus 25, mit dem Rahmenwechsel-Entwurf verträglich, wobei sie unter der neuen Rahmung den Engpass-Satz vorbereiten.
    - Die dokumentierende Infrastruktur-Beschreibung in 5.1, minus 60.
    - Der rekapitulierende Schlusssatz in 2.4, minus 25.
    - Der Sektionsanfang 3.3, minus 7.
    - Der auf einen Rückverweis geschrumpfte Doppel-Adressaten-Absatz in 3.3, geschätzt minus 40, der einzige echte Folgegewinn der Zusammenlegung.
    - Die Übersetzungskette in 2.3, minus 65, kostet ein Bild und ist Operator-Entscheidung.

### An der Belegschicht

- **Die Transfer-Evidenz in 5.4 trägt keinen einzigen Claim.** Der Vault enthält zu keiner der Lehrveranstaltungen eine Quelle, ein Destillat oder einen Claim, während das Paper seine Transferbehauptung zweimal ausdrücklich auf diese Passage routet. Suchen nach „winter school", „museum", „data steward" und „210" über die drei Schichten liefern null; einziger Claim zur Sache ist der negative, gestützt auf ein Agenten-Audit. Entweder werden die öffentlichen Artefakte als Quellen aufgenommen oder der Anspruch sinkt auf Format, Dauer, Aufgabenstellung und die Existenz produzierter Dokumente. Zu unterscheiden ist dabei der Obsidian-Vault, aus dem A4 die Termine belegt, vom Grounded Vault, in dem A5 nichts findet.
- **Der Härtegrad der Quellen ist im Vault-Schema nicht sichtbar.** Der Vorschlag steht oben. Offen ist auch die Teilfrage, ob die publizierte eigene Arbeit einen eigenen Wert bekommt.
- **Die Deckungsprüfung im Validator hat keinen Gegenstand.** Die Fähigkeit ist vorhanden und abgeschaltet.
- **Der Ankervertrag ist auf das Paper nirgends angewandt.** `schema.md` fordert für die Deliverable-Schicht, dass jeder tragende Satz einen Fußnotenmarker trägt und jede Fußnote mit einem von zwei Schlüsselwörtern beginnt. `knowledge/paper.md` führt einundzwanzig Fußnoten, sämtlich erläuternd, keine mit `Grounded in` oder `Posit:`. Die Formel „claim-level anchors" in Sektion 7 ist über die Claim-Schicht wahr und über die Sätze des Papers unwahr.
- **Die Vault-Steuerdokumente benennen ein falsches Deliverable.** `vault/knowledge/state.md` ist umgestellt; `vault/knowledge/specification.md` erklärt weiterhin `_content/paper/` für kanonisch, und der Kapitelregister spiegelt einen überholten Sektionsschnitt, während die Tabelle unmittelbar darunter die aktuelle Nummerierung führt. Der Verbleib von `_content/paper/` ist zu entscheiden.
- **Vier Claims sind gegenüber dem Paper verwaist,** `lucina-figures-verified-2026-07-19`, `wheaton-figures-verified-2026-07-19`, `austrian-dashboard-universities-verified-2026-07-19` und seit dem Umbau von 3.4 auch `szd-htr-confabulated-reading-in-hasty-kurrent`. Eine Quelle ist verwaist, `llmdh-summer-school-2025` ist ingestiert und destilliert, trägt keinen Claim, und die zugehörige Paper-Passage existiert nicht mehr; `state.md` führt weiterhin Korrekturkandidaten für eine Fußnote, die es nicht mehr gibt.
- **Claim-Texte sind gegenüber dem Paper gedriftet.** `correspexplorer-knowledge-userstory-count-2026-07-19` zitiert einen Paper-Stand, den es nicht mehr gibt, und reproduziert zugleich die Inversion, die A4 aufgedeckt hat. Das trifft jeden Claim, der den Papertext paraphrasiert.
- **Der Kulturpool-Claim beruht auf einem veralteten Repositoriennamen.** `kulturpool-repo-unresolvable-2026-07-19` nennt `chpollin/vkm-explorer` mit HTTP 404; das Projekt liegt öffentlich unter `chpollin/kulturpool-demo`. Der Claim gehört korrigiert oder zurückgezogen.
- **Der Fork-Claim trägt eine Zahl, die A4 widerspricht.** `coocr-htr-figures-verified-2026-07-19` nennt „67 fork commits", A4 zählt 43 Commits Vorsprung mit letztem Stand 2026-06-27. Derselbe Claim trägt keine Institution, während der Papersatz die Institution nennt, was bei einer Aussage über eine dritte Person die Belegpflicht erhöht.
- **Der gradgemischte Claim als Testfall.** `record-has-no-failure-case-and-a-bounded-yield-pole` bindet einen H3- und einen H4-Anker ohne Kennzeichnung und fiele nach der Minimumregel auf `process-record`.
- **Sieben Lücken sind billig zu schließen.** Die technische Konvergenz auf Vanilla JS ist deterministisch prüfbar und im Paper behauptet. Die Typenverteilung des Dokumentbestands ist aus der vorhandenen Repräsentation nachzuziehen. Die Genealogie-Wegmarke Juni 2023 hat als Quelle das GM-DH-Repositorium, das der Claim selbst benennt. Die HerData-Zahl steht im eigenen Claim als plausibel und ungeprüft. Die Kontextdegradations-Beobachtung hat ihre Quelle vermutlich im CorrespExplorer-Journal der betreffenden Phase. Das Statement zu den drei CorrespExplorer-Zahlen ist zu ergänzen und trägt zudem eine von A4 widerlegte Zahl. Die sieben SDD-Ankergruppen sind claim-reif, und die Sperre ist mit der Operator-Entscheidung gegenstandslos geworden.
- **Machine Review ist für die vier SDD-Distillate nicht gelaufen;** sie stehen auf `grounded`.
- **`vault/30_deliverable/` ist leer,** während `vault/glossary/` inzwischen einunddreißig Begriffsdokumente trägt.

### Außerhalb des Papers

- **Ein öffentlich dokumentierter End-to-End-Fall einer dritten Person ohne den Autor als Operator** und **dokumentierte Fehlschläge als eigene Evidenzklasse** sind die Folgearbeit, die das Paper selbst als offen führt. Zu prüfen ist, ob eine bestehende Projektkooperation sich nachträglich als der gesuchte Fall öffnen lässt. Die Evidenzbasis selbst wird allein durch Zeit und Fremdnutzung besser, weshalb die im Paper richtige Strategie präzise Grenzziehung plus Falsifikationsangebot ist und keine Schließung der Lücke im Text.
- **Ein ungenutzter Datenpunkt.** Der generierte Validierungsreport des Editionsprojekts vom 2026-05-16 meldet, dass 645 von 3.611 Dateien gegen `toolbox.rng` validieren und 2.966 nicht, bei 4.420 Schemafehlern und 2.229 Integritätsbefunden, und ordnet das als bewusst sichtbar gemachte Altlast des Quellkorpus für die redaktionelle Triage ein.

## Herkunft

Die neun Arbeitsprotokolle sind am 2026-07-26 gelöscht worden, nachdem dieses Dokument ihren tragenden Inhalt aufgenommen hatte. Ihr Wortlaut steht in der git-Historie unter Commit `07a736c` an den Pfaden `knowledge/revision-knowledge.md`, `knowledge/revision-audit-a0.md` bis `knowledge/revision-audit-a3.md`, `knowledge/revision-audit-a4-record-verification.md`, `knowledge/revision-audit-a5-vault-coverage.md`, `knowledge/revision-frame-proposal.md` und `knowledge/revision-research-sdd.md`.

Zwei der Protokolle leben unabhängig davon im Grounded Vault weiter, als commit-gepinnte Repräsentation und als Destillat. Beide sind auf Commit `e2da77e484e24675481642211beb211bb3e367e3` gepinnt, über `vault/00_representation/documents/revision-audit-a1-2026-07-23` und `-a2-2026-07-23` erreichbar, und drei Claims stützen sich auf sie. Der Löschung stand das nicht entgegen, weil ein gepinnter Anker auf einen Commit zeigt und nicht auf den heutigen Pfad.

Für den Wortlaut einer einzelnen Fundstelle ist die git-Historie zu befragen. Für jede Arbeit am Paper genügt dieses Dokument.
