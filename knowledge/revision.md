---
title: Revision
project:
  name: Promptotyping Site
  repository: https://github.com/DigitalHumanitiesCraft/Promptotyping
status: complete
language: de
version: 0.1
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

Konsolidierung der Revisionsrunde, die im Juli 2026 auf dem fertigen Paper-Draft lief. Dieses Dokument hält die tragenden Befunde der neun archivierten Arbeitsprotokolle fest, jeweils mit Quelle und mit dem am 2026-07-26 gegen `paper.md` geprüften Umsetzungsstand. Wer am Paper arbeitet, liest dieses Dokument; die Protokolle sind nur für den Wortlaut einer einzelnen Fundstelle nötig.

## Was der Durchgang war

Ein externer Review-Durchgang im Chat vom 2026-07-23 lieferte fünf Problemfelder als Hypothesen. Daraus entstand eine Vier-Phasen-Revision, Audits ohne Ankerung, Operator-Entscheidung, Implementierung, Konsistenzpass. Phase A lief als sieben parallele Opus-Aufträge, A0 freies Lektorat, A1 Claim-Evidenz, A2 Korpus, A3 redaktionell, A4 Zahlen gegen die Repository-Artefakte, A5 Deckung der Belegschicht, dazu der Rahmenwechsel-Entwurf und die SDD-Recherche. Phase C wurde am 2026-07-24 in acht Commits umgesetzt, ein zweiter Durchgang am 2026-07-25 folgte.

Die in [revision-knowledge.md](revision-knowledge.md) vorgesehene Datei `revision-decisions.md` ist nie in das Repository gelangt. Die Prüfung der git-Historie über alle Branches zeigt für diesen Pfad keinen einzigen Commit. Nach [revision-frame-proposal.md](revision-frame-proposal.md), Abschnitt 6, lag am 2026-07-24 kurzzeitig eine uncommittete Fassung im Working Tree; sie ist nicht erhalten. Die Entscheidungen liegen in den Commit-Nachrichten und im Entscheidungsstand von [paper-writing.md](paper-writing.md). Die dort formulierte Prozessregel, kein Audit-Befund werde ohne dokumentierte Entscheidung in `revision-decisions.md` umgesetzt, hat damit keinen Träger und ist beim nächsten Prüfauftrag entweder mit einer Datei einzulösen oder auf den realen Weg umzuschreiben.

Die drei Prozessregeln der Runde, ankerfreie Audit-Aufträge, freies Lektorat vor dem Kontakt mit den Problemfeldern, Steelman-Pflicht mit harter Operator-Schranke, stehen in [paper-writing.md](paper-writing.md) und binden alle künftigen Prüfaufträge. Die drei nicht verhandelbaren Operator-Vorgaben stehen in [revision-knowledge.md](revision-knowledge.md), Abschnitt 3, und gelten unverändert. Der ÖAW-Fork bleibt Mini-Nebenbemerkung, das Argument stützt sich nicht auf ihn. „Schneller und billiger" kommt nirgends als Argument vor. Ein quantitativ-empirischer Beleganspruch wird nicht erhoben. A1 hat alle drei am Text geprüft und keine Verletzung gefunden.

## Umgesetzte Befunde und ihre Fundstelle im heutigen Text

Alle folgenden Zeilen sind am 2026-07-26 gegen `knowledge/paper.md` geprüft.

| Befund | Quelle | Stand im Text |
|---|---|---|
| Rahmenwechsel, die Übersetzungs-Doppelung ist von der Hauptaussage zur Begründung der Dokumentform herabgestuft | [revision-frame-proposal.md](revision-frame-proposal.md) | umgesetzt, „Translation runs through the method twice" und „LLMs operate as translation mechanisms" kommen nicht mehr vor |
| „disposable" vom Ergebnis auf die Iteration verschoben, RSE-Grenze in 5.3 als technisch markiert | A0, Befund 2 | umgesetzt, Abstract führt die Regenerierbarkeit, 5.3 trägt den Vorschlagssatz wörtlich |
| Komparativ „more than any other variable" in 5.5 gestrichen, markierte Ko-Variation statt Rangschluss | A0 Befund 3, A2 H1-2 | umgesetzt in 5.5 |
| Zweiter Confound in 6.4, Dokumenttiefe und Verifikationsaufwand sind dieselbe Investition | A2, H1-1 | umgesetzt in 6.4, Grenze 1 |
| „failures cluster where documents were vague" ohne dokumentierten Fehlfall gestrichen | A2, Ungefragt 1 | umgesetzt, 5.5 sagt jetzt „documents no outright failure" mit Verweis auf die Aufzeichnungspraxis |
| Modaler Bruch in 2.6 zwischen Tatsachenbehauptung und offener Frage | A1, Befund 1 | umgesetzt im Zuge des Rahmenwechsels, die Passage trägt die Substitutionsbehauptung nicht mehr im Präsens Indikativ |
| SDD-Abgrenzung von der Existenz- auf die Gradform | A3 Befund 3, A5 L1, [revision-research-sdd.md](revision-research-sdd.md) | umgesetzt in 2.5, „no counterpart" ist verschwunden, der Absatz folgt der kompakten Fassung des Rechercheberichts |
| Abrufdatum für die Framework-Aussagen | [revision-research-sdd.md](revision-research-sdd.md), 3.4 | umgesetzt, `[^sdd]` trägt „as retrieved in July 2026" |
| Tessl-Datierung präzisiert auf die Positionsankündigung ohne veröffentlichtes Produkt | [revision-research-sdd.md](revision-research-sdd.md), 6 | umgesetzt in `[^sdd]` |
| Macedo 2026 attribuierend statt behauptend zitiert | [revision-research-sdd.md](revision-research-sdd.md), 5 | umgesetzt in 2.5, „a preprint that has not been peer reviewed offers what it presents as the first process taxonomy" |
| „each traceable through a publicly accessible repository" auf den realen Zustand umgestellt | A4 E3, A5 Punkt 7 | umgesetzt in 5.2, drei geschlossene Repositorien sind benannt |
| Wortgebrauch „verified" auf das umgestellt, was die Prüfung war | A5, M2 und Punkt 8 | umgesetzt in 5.1, der Text nennt den adversarialen Agentendurchlauf und die Commit-Pinnung |
| Zahlkorrekturen aus der Datensatzprüfung, darunter die invertierten CorrespExplorer-Zählungen | A4, Tabellenzeilen 7 bis 12, U2 | umgesetzt, die betroffenen Zählungen sind aus dem Papertext entfernt, der Vault-Claim trägt die korrigierte Richtung |
| „no machine-readable citation metadata" abgeschwächt | A4, Zeile 14 | umgesetzt in 4.1, „the citation metadata has since been added, the identifier gap stands" |
| Kanonisches Deliverable in den Vault-Steuerdokumenten auf `knowledge/paper.md` umgestellt | A5, Punkt 5 | umgesetzt in `vault/knowledge/state.md` |
| Fehlende Testfixtures des Grounded Vault im Companion | A4, U1 | behoben, `vault/examples/minimal` und `vault/examples/broken` existieren, die Testsuite läuft grün |

## Befunde, die eine Belegstelle im Papertext halten

Diese Befunde sind der Grund, warum die Protokolle nicht gelöscht werden. Sie tragen Aussagen, die im Paper stehen.

**Die Zahlenprüfung gegen die Repository-Artefakte.** [revision-audit-a4-record-verification.md](revision-audit-a4-record-verification.md) ist der Prüfstand der gesamten Evidenzsektion. Es führt jede quantitative und jede empirische Aussage der Sektionen 3.3, 3.5, 4.1, 4.2 und 5 einzeln gegen das Artefakt, aus dem sie stammt, mit Zählweise und Werkzeug. Exakt bestätigt sind unter anderem die CMIF-Briefzahl, die Zahl der koordinierten Ansichten, die frauenbezogene Teilmenge des HerData-Bestands, die Objektzahl des Kriminalmuseums mit ihrer Aufteilung auf TEI und LIDO sowie die Testzahl der coOCR-Workbench. Der Notker-Fall hält in allen geprüften Einzelheiten und ist damit der am dichtesten belegte Worked Case. Die Drittnutzungsaussage hält präzise, von drei Forks der coOCR-Workbench trägt genau einer eigene Entwicklung. Wer eine dieser Zahlen ändern, streichen oder gegen eine neuere ersetzen will, prüft dort, worauf sie ruht.

**Die Recherche zur Spec-Driven-Development-Abgrenzung.** [revision-research-sdd.md](revision-research-sdd.md) hält die Datierungen der vier Frameworks gegen Repository-Metadaten und Ankündigungsseiten, dazu die vier Negativbefunde, auf denen die Gradabgrenzung in 2.5 ruht. Datenbeschreibung existiert bei Spec Kit und Kiro und beschreibt in keinem Fall vorgängige externe Quellen. Verifikation existiert überall und prüft überall interne Kohärenz, Abdeckung und Codequalität. Eine über Fachkompetenz definierte Prüfrolle kommt in keiner Dokumentation vor. Die Adressierungs-Prämisse, in Spec-Driven Development seien beide Seiten Entwickler, ist am Material widerlegt, weil die frühen Spec-Kit-Templates Business-Stakeholder ausdrücklich adressieren; der Papertext trägt deshalb die Differenz in der Art der Autorität statt in der Art der Leserschaft. Diese Belege sind ohne Webzugriff nicht reproduzierbar und dürfen nicht neu erraten werden.

**Die Herkunftsgrade der Belegschicht.** [revision-audit-a5-vault-coverage.md](revision-audit-a5-vault-coverage.md) klassifiziert jeden Claim des Grounded Vault nach der Härte seiner Quelle, von der externen publizierten Arbeit bis zur reinen Prozessaufzeichnung. Zwei Ergebnisse binden. Die Literaturachse ist praktisch lückenlos gedeckt, das Register führt jedes zitierte Werk mit Zugangsklasse. Die Lücken liegen auf der Praxisachse, bei den Aussagen des Papers über eigene Projekte, eigene Lehre und eigene Beobachtungen am Modellverhalten.

## Zirkularität in der Belegkette, die der Vault nicht sichtbar macht

Drei Record-Claims der Revisionsrunde ruhen auf Agenten-Lektüren des Papers selbst (A5, M1). Die Kette läuft vom Paper über ein Audit des Papers in die Repräsentation, in das Destillat, in den Claim und zurück in das Paper. Das Schema kann das nicht bemerken, weil ein Audit-Dokument formal eine Quelle vom Typ `document` ist wie jede andere. Betroffen sind die Confound-Nennung in 6.4 und die Ertragspol-Aussage in 5.5, beides Sätze, die sich als Befund am Korpus lesen. Wer diese Sätze gegen einen Gutachtereinwand verteidigen muss, kennt ihre Herkunft. Wer neue Claims aus Audit-Dokumenten baut, verlängert die Kette.

## Negativbefunde, die vor falschen Eingriffen schützen

Ein späterer Durchgang kann diese Stellen für Schwachstellen halten und damit etwas beschädigen, das bereits richtig steht.

- **Die Deskilling-Verteidigung ist vollständig eingebaut** (A0, Ungefragt). Die Profession-Schutzklausel ist an vier Stellen konsistent verankert und nirgends überdehnt. An dieser erwartbaren Schwachstelle gibt es keine Angriffsfläche; eine der vier Stellen zu streichen öffnet sie.
- **Sektion 5.4 behauptet keine Wirksamkeit in dritter Hand** (A1, Befund 3). Sie beschränkt sich ausdrücklich auf Kommunizierbarkeit und Produzierbarkeit. Weitere Hedges an dieser Stelle sind defensive Unterbietung und derselbe Fehler wie Übertreibung.
- **Der Notker-Fall ist Gegenevidenz gegen die starke Zirkularitätslesart** (A2, H1-3). Er ist die einzige Stelle im Record, an der Dokumenttiefe und Verifikation auseinanderfallen, und er fällt zugunsten der Dokument-Primat-These aus. Er gehört in die Argumentation gegen einen Gutachter, der Zirkularität einwendet, und nicht in einen Diff.
- **Die Tokenökonomie ist bereits dedupliziert** (A3, b). Die Erwartung einer Dreifach-Erklärung in 2.3, 3.3 und 3.4 trifft nicht zu, die späteren Stellen tragen markierte Rückverweise.
- **Die TaDiRAH-Abgrenzung ist ehrlich als Teilüberlappung formuliert** (A3, b). Sie ist keine Existenzdichotomie und braucht keine Milderung.
- **Die hohe Querverweisdichte ist im Bau des Papers begründet** (A3, b). Ein pauschaler Abbau beschädigt die Argument-Kohäsion; belastend sind allein die rekapitulierenden Bündelverweise.
- **Journal-Herkunft ist im Vault selten** (A5, Widerspruch 4). Die Vermutung, ein nennenswerter Teil der Belege komme aus agentengeschriebenen Projekt-Journalen, trägt nicht.
- **Der Vault benennt mehrere seiner eigenen Lücken bereits** (A5, Widerspruch 3). `20_claims/MOC-Limitations.md` führt die vier Punkte, die eine Deckungsprüfung sonst neu meldet.
- **Der Rahmenwechsel spart keine Wörter** ([revision-frame-proposal.md](revision-frame-proposal.md), 5). Er kostet, und die Ersparnis durch Wegfall des Verteidigungsapparats ist klein. Wer ihn als Kürzungsmaßnahme begründet, begründet ihn falsch.
- **Kein Literaturverweis ist durch den Rahmenwechsel verwaist** ([revision-frame-proposal.md](revision-frame-proposal.md), 1). Star/Griesemer, Mayr/Thalheim, Stachowiak, Gruber und Miksa bleiben zitiert. Die Claim-Schicht verankert das Übersetzungsproblem; für die Doppelung hält sie keinen Claim, und sie braucht deshalb keine Rücknahme.

## Offene Punkte

Am 2026-07-26 gegen den Dateibestand geprüft und weiterhin offen.

- **Die Selbstanwendung steht als Argument, ohne dass 6.4 die Zirkularität als Grenze nennt** (A0, Befund 5). Der Satz „The companion is thus part of the argument" steht in 5.1. A0 hatte die Rücknahme auf „demonstration" vorgeschlagen und für den Fall der stärkeren Lesart verlangt, dass 6.4 die Zirkularität der Selbstanwendung einmal ausdrücklich als Grenze führt. Die sieben Grenzen in 6.4 nennen sie nicht. Der Zug ist damit ungedeckt.
- **Die Transfer-Evidenz in 5.4 trägt keinen einzigen Claim** (A5, L2). Der Vault enthält zu keiner der Lehrveranstaltungen eine Quelle, ein Destillat oder einen Claim, während das Paper seine Transferbehauptung zweimal ausdrücklich auf diese Passage routet. Entweder werden die öffentlichen Artefakte als Quellen aufgenommen, oder der Anspruch sinkt auf Format, Dauer, Aufgabenstellung und die Existenz produzierter Dokumente.
- **Der Härtegrad der Quellen ist im Vault-Schema nicht sichtbar** (A5, 3.1). Der Vorschlag setzt ein Pflichtfeld an der Repräsentation, eine Ableitungsregel als Minimum über die Anker und eine Validator-Funktion. `vault/knowledge/schema.md` führt derzeit kein solches Feld. Offen ist auch die Teilfrage, ob die publizierte eigene Arbeit einen eigenen Wert bekommt.
- **Die Deckungsprüfung im Validator hat keinen Gegenstand** (A5, Ungefragt 1 und Punkt 4). `_check_chapter` meldet `W-UNANCHORED` für jeden Absatz ohne Fußnotenmarker, und die Deliverable-Schicht ist leer; der Validator gibt entsprechend `W-NO-DELIVERABLE` aus. Die Fähigkeit ist vorhanden und abgeschaltet.
- **Der Verifikationsbegriff des Papers hat vier Referenten** (A5, Ungefragt 4). Dokumentfunktion in 3.3, Interface-Kategorie in 4.2, dreistufige Prüfpraxis in 6.2 und die Kontraktstufe im Vault-Vokabular. Alle vier sind legitim und treffen sich in den Slugs `*-verified-*`.
- **Die Formationsphase in 5.2 ist die dünnste Stelle der Evidenz** (A5, Ungefragt 6). Sie nennt Projekte, Jahreszahlen und eine Prioritätsbehauptung, und der Vault trägt zu keiner der Datierungen einen Anker.
- **Die vergleichende Feldaussage in 4.1** (A5, Stufe C). „few conventional research software projects produce it as completely" steht ohne Anker; der FAIR4RS-Claim deckt nur das eigene Projekt. Der Satz steht unverändert im Text.
- **Der `template:`-Mechanismus ist als erreichter Zustand beschrieben** (A4, U5). Er gilt für die jüngere, refactorierte Generation der Wissensbasen; ein Halbsatz, der das als Reifegrad markiert, kostet nichts am Argument.
- **Der ZBZ-Selbstzertifizierungsbefund bleibt ungenutzt** (A4, U3). Die Pipeline-Dokumentation hält fest, dass die Agent-Screening-Stufe abgeschafft wurde, weil kein Mensch die Freigaben erteilt hatte und der Agent sich selbst zertifiziert hatte. Das ist ein datierter Fall des Versagens agentengestützter Selbstprüfung aus dem eigenen Bestand und genau die Gefahr, gegen die 6.2 die Autoritätsordnung stellt.
- **Die Folgearbeit außerhalb des Papertexts** ([revision-knowledge.md](revision-knowledge.md), 7). Ein öffentlich dokumentierter End-to-End-Fall einer dritten Person ohne den Autor als Operator, und dokumentierte Fehlschläge als eigene Evidenzklasse. Das Paper hält seit der Revision ausdrücklich fest, dass Fehlschläge nicht systematisch dokumentiert wurden.
- **Die Titelfrage** (A0 Restliste, [revision-frame-proposal.md](revision-frame-proposal.md) D1). Der Titel trägt weiter „Translating"; die Ellipse in der früheren Fassung „Context and Agentic Engineering" ist durch „Context Engineering and Agentic Tools" aufgelöst. Ob das Partizip nach dem Rahmenwechsel die richtige Setzung bleibt, ist Positionierung gegenüber dem Venue und liegt beim Operator.

## Herkunft

Die neun Arbeitsprotokolle sind abgeschlossen und tragen `status: archived` mit einem datierten Archivvermerk unter der H1. Sie bleiben an ihrem Pfad im `knowledge/`-Ordner. Ein Verschieben in einen Unterordner bräche vier Verweise in der Belegschicht unter `vault/`, die die Protokolle unter ihrem heutigen Pfad als Quelle und als Beleg führen, und die Vault-Schicht durfte in dieser Sitzung nicht geändert werden. Zwei der Protokolle sind zusätzlich als commit-gepinnte Repräsentation und als Distillat in den Vault aufgenommen.

- [revision-knowledge.md](revision-knowledge.md), das Steuerwissen der Runde mit den Operator-Vorgaben und der Prozessarchitektur
- [revision-audit-a0.md](revision-audit-a0.md), freies Lektorat, fünf Hebelbefunde
- [revision-audit-a1.md](revision-audit-a1.md), Claim-Evidenz-Prüfung der Transferbehauptung mit der gestuften Absenkungstiefe
- [revision-audit-a2.md](revision-audit-a2.md), Korpus-Audit zu Zirkularität und Semantik-Mehrwert
- [revision-audit-a3.md](revision-audit-a3.md), redaktionelles Audit mit Wortzahl-Bilanz
- [revision-audit-a4-record-verification.md](revision-audit-a4-record-verification.md), Prüfung der empirischen Aussagen gegen die Repository-Artefakte
- [revision-audit-a5-vault-coverage.md](revision-audit-a5-vault-coverage.md), Deckung und Herkunftsgrade der Belegschicht
- [revision-frame-proposal.md](revision-frame-proposal.md), Kartierung und Entwürfe des Rahmenwechsels
- [revision-research-sdd.md](revision-research-sdd.md), belegte Prüfung der Spec-Driven-Development-Abgrenzung
