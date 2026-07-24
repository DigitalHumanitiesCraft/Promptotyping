---
title: "Paper Argument Map"
project:
  name: "Promptotyping Methodology Site"
  repository: "https://github.com/DigitalHumanitiesCraft/Promptotyping"
method:
  name: Promptotyping
  url: https://dhcraft.org/Promptotyping/
status: draft
created: "2026-07-23"
updated: "2026-07-24"
related: [paper, paper-writing]
---

# Paper Argument Map

Dieses Dokument ist das Konzeptmodell des Papers `paper.md`. Es hält jede tragende Argumentationslinie in kompakter Notation, eine Kette pro Block, mit Status. Es hat zwei Funktionen. Als Prüfinstrument bestätigt oder korrigiert der Operator jede Kette einzeln am Block-Kürzel. Als Generierungsgrundlage kann ein Agent aus dieser Map, den Sprachregeln in `paper-writing.md`, der Evidenztabelle und dem Referenzapparat das Paper neu schreiben; die Map ist die Spezifikation, der Papertext die Ausführung.

Notation: `A ──► B` heißt, B folgt aus A oder wird durch A getragen. `∧` heißt, beide Bedingungen müssen gelten. Jeder Block trägt eine Statuszeile; `bestätigt` vergibt nur der Operator. Jeder Block trägt außerdem eine `Rolle:`-Zeile, die die Hierarchie als gerichteten Graph kodiert: `tragend` = Spine, den ein Abschnitt trägt; `zuliefernd → K-xxx` = liefert dem benannten Block zu.

Stand nach der Revision vom 2026-07-24. Ein Top-Träger, K-1b (Möglichkeits-Claim). Die Blöcke der Sektion 2, die zuvor der Übersetzungs-Doppelung zugeliefert haben, liefern jetzt ihm zu. K-2.4a trägt die Doppelung nicht mehr als These; der Block begründet die Dokumentform und fundiert sie modelltheoretisch. K-2.5a liefert weiterhin der Methodendefinition K-3.2a zu.

## Kernsatz

```
Wer seinen Forschungskontext explizit genug beschreibt, hat spezifiziert;
das Frontier-Modell übernimmt die Formalisierung; der Scholar verifiziert.
```

Das Paper erhebt keine theoretische Leitaussage. Es beschreibt die Methode, ordnet sie ein und erdet sie mit seiner Evidenz. Der Titel steht unverändert und ist Operator-Entscheidung; `Translating` trägt im alltagssprachlichen Sinn, seine dokumentierte Begründung über die Doppelung ist entfallen.

## Sektion 1, Problemaufriss

**K-1a, die Lücke.**

```
Daten nur via Software zugänglich ──► generische Tools bleiben unter dem Datenmodell
──► modellgerechte Forschungsartefakte müssen gebaut werden ──► Baukapazität fehlt
──► dahinter: Übersetzungsproblem Scholar ↔ Programmierer (20 Jahre dokumentiert)
──► alle bisherigen Antworten installieren einen menschlichen Übersetzer
──► keine erreicht Einzelforscher und Kleinprojekte verlässlich   [Inferenz, als solche markiert]
```

Status: unbestätigt
Rolle: zuliefernd → K-1b

**K-1b, die Antwort und ihre Grenze.**

```
Promptotyping = dokumentgetriebenes Context Engineering innerhalb Agentic Engineering
Claim: Einzelforscher übersetzen eigene strukturierte Daten in funktionale Artefakte
Grenze: Prototyp; darüber beginnt Research Software Engineering (4.3)
Beitrag: methodisch und konzeptionell; keine Vergleichsmessung (Limit 6.4)
```

Status: unbestätigt
Rolle: tragend (Claim-Träger)

**K-1c, Capability vor Methode.**

```
2023: Demo möglich, aber nur für Hybrid-Praktiker, Prompt für Prompt
2023–2025: Frontier-Coding ∧ agentische Harnesses konvergieren
──► Arbeitseinheit wandert vom Prompt zum Dokument
──► gegen einen unbeaufsichtigt arbeitenden Agenten ist das Dokument
    die einzige stabile Instanz der Intention
```

Status: unbestätigt
Rolle: zuliefernd → K-1b

**K-1d, Härtetest-Argument.**

```
Evidenzbasis = Humanities-Daten (heterogen, interpretativ, semantisch dicht, unsicher)
──► Methode, die gegen dieses Profil hält, transferiert plausibel
    auf regelmäßigere Daten (Transfer als günstige Inferenz, 6.5)
```

Status: unbestätigt
Rolle: zuliefernd → K-1b

## Sektion 2, epistemischer Rahmen

**K-2.1a, Exploration ist Forschung.**

```
InfoVis-Diskurs der DH: Exploration = Forschungsakt (generous interfaces, sandcastle)
∧ das Feld kann explorative Interfaces selten bauen
──► genau diese Lücke adressiert die Methode
```

Status: unbestätigt
Rolle: zuliefernd → K-1b

**K-2.1b, Drucker als Prüfstein.**

```
Humanities verarbeiten capta, nicht gegebene Daten [lizenzierte Antithese]
∧ LLMs haben die kritisierten Standardkonventionen aus dem Web gelernt
──► generative Methode ohne Gegenmechanismus automatisiert das Problem
Antwort strukturell: Designentscheidungen ──► begründete, versionierte Dokumente
──► ob ein Projekt Druckers Standard erfüllt = inspizierbare Frage an seine Dokumente
```

Status: unbestätigt
Rolle: zuliefernd → K-1b

**K-2.2a, Anti-Tool-Positivismus.**

```
Building as knowing (Prototyp argumentiert)  ∧  Werkzeugkritik als Korrektiv
──► eigenes Korrektiv: Forschungsprobleme sind keine Tooling-Probleme
──► epistemisches Zentrum = modellierte Daten + Dokumente; Tool = abgeleitetes Artefakt
verwerfbar ist die einzelne Iteration, ihr Ertrag geht in die Dokumente zurück (6.1)
```

Status: unbestätigt
Rolle: zuliefernd → K-1b

**K-2.3a, Token-Ökonomie-Arrangement.**

```
Dimension 1: semantische Explizitheit der Daten nützt der Generierung (RDF ideal)
Dimension 2: Tokens kosten; Long-Context degradiert (Context Rot)
──► Spannung. Auflösung:
Modell liest ÜBER die Daten ──► schreibt Code ──► Code liest DIE Daten
Korpus geht nie durchs Kontextfenster, nur Destillate, User Stories, Design, Feedback
```

Status: unbestätigt
Rolle: zuliefernd → K-1b

**K-2.3b, Semantic-Web-Kontinuität.**

```
SW-Vision: Agenten über semantisch beschriebenen Daten; scheiterte am KI-Paradigma ihrer Zeit
LLM-Agenten inferieren nicht formal, profitieren aber von expliziter Semantik als Kontext
──► 20 Jahre Investition in Standards/Ontologien zahlt aus,
    über einen anderen Mechanismus als den vorgesehenen
eigene Trajektorie: Diss produzierte RDF, damit exploriert wird; die Methode liefert die Exploration
```

Status: unbestätigt
Rolle: zuliefernd → K-1b

**K-2.4a, warum die Beschreibung ein versioniertes Dokument ist (Sektion 2.4 nach der Zusammenlegung).**

```
Antworten des Felds installieren je einen menschlichen Übersetzer
──► Dokumente greifen als Boundary Objects ein (K-2.4b)
∧ zweite Last im generativen Setting: das Dokument ist zugleich Quelle der Implementation
──► ein Gespräch mit dem Modell hinterlässt kein prüfbares Objekt,
    dieselbe Aussage über die Quellen muss dem Scholar und dem Agenten vorliegen
──► modelltheoretische Fundierung (K-3.3a, K-3.3b) sitzt hier
──► Formalisierungskosten sinken; die Abbildung läuft stochastisch
    ──► Verification (6.2)
Die Doppelung des Worts Übersetzung begründet nur noch die Dokumentform,
sie ist nicht mehr theoretischer Kern (Operator-Entscheidung 2026-07-24).
```

Status: unbestätigt
Rolle: zuliefernd → K-1b

**K-2.4b, Boundary Objects.**

```
Dokument = plastisch genug für beide Communities ∧ robust genug für Identität
──► Trading Zone bekommt eine schriftliche Verfassung
gilt auch ohne LLM ──► verbesserte Kommunikation auch mit menschlichem RSE (6.5)
generatives Setting macht Dokumente doppelt tragend: dort sind sie zugleich Quelle der Implementation
```

Status: unbestätigt
Rolle: zuliefernd → K-2.4a

**K-2.5a, Positionierung im KI-Diskurs.**

```
Context Engineering: Methode = domänenspezifische Instanz
Vibe Coding: gleiche Prämisse, Differenz = Vorbereitung + Dokumente + Verifikation;
             überlebt intern als explorativer Modus
Spec-Driven Development: Promptotyping gehört zur Bewegung und teilt ihre Kernbindungen;
             die Differenzen sind Gradunterschiede (Datendokument beschreibt vorgängige
             Quellen mit eigener Semantik und Unsicherheit; Review bindet an die
             wissenschaftlichen Prüfpflichten 6.2; Autorität des Adressaten liegt hier
             im Gegenstand, dort im Auftrag)
             Zeitgleichheit bei eigenständiger Genese ist der kleinere Punkt
Context Rot: technische Begründung der Distillation
Critical Expert: vorausgesetzte Rolle; Domänenexpertise ∧ Kenntnis der Fehlermodi
             (Sycophancy, Konfabulation); prüft auch den NICHT explorierten Möglichkeitsraum
```

Status: unbestätigt
Rolle: zuliefernd → K-3.2a

**K-2.6a, Genealogie.**

```
Diss: SCD (UCD + RE) ──► Personas, User Stories ──► Datenmodelle, Bookkeeping Ontology
∧ Erfahrung der Wand: wohlmodellierte Daten, kein Forschungsartefakt (Baukapazität)
──► Frontier-Modelle ändern Kostenstruktur genau dieses letzten Schritts
──► requirements.md = Fortsetzung von SCD; data.md = Fortsetzung der Datenmodellierung
──► Herkunft aus den Humanities; SDD konvergierte später von der anderen Seite
```

Status: unbestätigt
Rolle: zuliefernd → K-1b

**K-2.6b, DIKW-Prämisse (in 2.6 eingebaut 2026-07-23).**

```
Diss-Prämisse: kognitiver Agent im Zentrum der Passage Daten→Wissen;
seine Wissensstrukturen geben Daten Kontext und Bedeutung
──► Promptotyping externalisiert solche Wissensstrukturen in Dokumente
──► Frontier-Modell tritt als zweiter Agent neben den Menschen, beide arbeiten über denselben Strukturen
```

Status: bestätigt (Richtung, 2026-07-23); Formulierung offen
Rolle: zuliefernd → K-3.3a

**K-2.6c, Externalisierungs-These (Pointe).**

```
Hybrid-Kompetenz (Person) ──► externalisiert in Dokumente + Agent-Konfiguration
──► Nicht-Hybride erhalten Substitut für einen begrenzten Teil,
    Hybride multiplizieren Reichweite
ob es für Nicht-Hybride funktioniert = empirische Frage ──► Teaching Cases (5.4)
```

Status: unbestätigt
Rolle: zuliefernd → K-1b

## Sektion 3, die Methode

Sektionsspiegel nach der Revision vom 2026-07-24. Sektion 3 hat vier Untersektionen, 3.1 Status und Provenienz, 3.2 vier Phasen, 3.3 die Promptotyping-Dokumente, 3.4 Worked Example. Die frühere 3.4 (Dokumente als Konzeptmodelle) ist aufgelöst. Ihre Konzeptmodell-Blöcke K-3.3a (Stachowiak) und K-3.3b (Gruber-Identitätsformel) realisiert jetzt Sektion 2.4; K-3.3d (Substrat und Semantic-Web-Inversion) und der DMP-Arm von K-3.3f stehen in 3.3, zusammen mit K-3.3c (Doppel-Adressierung), K-3.3e (Dokumenttypen und Triage) und der Metadatenpraxis. Der RO-Crate-Arm von K-3.3f ist mit dem Absatz gestrichen. Das Worked Example steht in 3.4 und führt weiter das Kürzel K-3.5a; die Blockkürzel bleiben als Bestätigungsanker stehen, ihre Sektionszuordnung folgt diesem Spiegel.

**K-3.1a, Konsolidierungs-Epistemologie.**

```
Methode induktiv aus Praxis destilliert; früheste Projekte intuitiv,
Dokumente teils nachträglich ──► definierte Form = konsolidierte Form
──► normale Epistemologie der Methodenbildung (wie Kodifikation qualitativer Methoden)
──► späte Fälle validieren strenger als frühe; so ist die Evidenz zu lesen
```

Status: unbestätigt
Rolle: zuliefernd → K-5.2a

**K-3.2a, die vier Phasen und die Signatur.**

```
Preparation ──► Exploration ──► Distillation ──► Implementation, rekursiv
Exploration epistemisch: Modell generiert Möglichkeitsraum, Experte prüft;
Sackgassen sind positive Befunde
Signatur-Loop: Artefakt falsch ⇒ Spezifikation war falsch ⇒ Dokumente fixen,
Artefakt regenerieren; neues Wissen fließt in die Dokumente zurück
Exit: Akzeptanzkriterien ∧ Verifikationschecks erfüllt; Stopppunkt bestimmt die Forschungsfrage
```

Status: unbestätigt
Rolle: tragend → K-1b

**K-3.3a, Dokumente als Konzeptmodelle (Stachowiak-Kette; steht in 2.4).**

```
Forschungskontext ──(Mensch: verkürzt)──► Dokumente ──(Modell: generiert)──► Artefakt

(1) Dokumente = semi-formales Konzeptmodell (Mayr/Thalheim; Stachowiak: Abbildung,
    Verkürzung, Pragmatik)
(2) Verkürzung ist Modelleigenschaft ──► Distillation theoretisch lizenziert,
    vor jedem Context-Limit
(3) Pragmatik: gemacht für jemanden (S = {Scholar, Agent}, Doppel-Adressat),
    für eine Zeit (Snapshot/Version), für einen Zweck (Akzeptanzkriterien)
(4) Artefakt = Modell des Modells; die Mapping-These ist diese zweite Abbildung;
    weil das Modell sie stochastisch ausführt, braucht sie Verification (6.2)
```

Status: bestätigt (Richtung, 2026-07-23); Formulierung offen
Rolle: zuliefernd → K-2.4a

**K-3.3b, Identitätsformel mit Gruber-Linie (steht in 2.4).**

```
Beschreibung, explizit genug  =  Spezifikation
Linie: Ontologie = "explicit specification of a conceptualisation" (Gruber 1993)
──► Promptotyping Documents = solche Spezifikation in natürlicher Sprache,
    am semi-formalen Ende des Spektrums, dessen formales Ende (OWL/RDF)
    die eigene frühere Arbeit besetzte
```

Status: bestätigt (Richtung, 2026-07-23); Formulierung offen
Rolle: zuliefernd → K-3.3a

**K-3.3c, Doppel-Adressierung als Schreibdisziplin, und die Deckungsgrenze des `knowledge/`-Ordners.**

```
Dokument muss: lesbar (Scholar, Verifikation) ∧ ausführbar (Agent, Generierung)
──► was dem Modell zu vage ist, ist meist auch als wissenschaftliche
    Dokumentation zu vage; die Maschine erzwingt Qualität, die dem Menschen dient
`knowledge/` = kuratiertes Wissensartefakt (teils Modell, teils Critical Expert),
überdauert die Sitzung, ist lesbar, prüfbar, kritisierbar, zitierbar
Deckungsgrenze: das Bauen nimmt laufend Entscheidungen auf; die Dokumente halten
davon so viel, wie zurückgeschrieben wird ──► Vollständigkeit hängt an dieser Disziplin
(die frühere These Dokumente = primäres Artefakt, Prototyp = regenerierbares
Nebenprodukt ist zurückgenommen, Operator-Entscheidung 2026-07-24)
```

Status: unbestätigt
Rolle: zuliefernd → K-3.3a

**K-3.3d, Substrat und Semantic-Web-Inversion (steht in 3.3).**

```
Markdown-Wissensstrukturen: nativ prozessierbar, menschenlesbar, versionierbar
──► Formatgrenze zwischen Beschreibung des Scholars und Input der Maschine entfällt
    (Token-Ökonomie bleibt: kuratierte Teilmenge)
Inversion: SW verlangte formale Strukturierung für die Maschine;
Frontier-Modelle lesen semi-formale Struktur direkt
──► produktiv bleibt genau die Strukturierungsarbeit, die diese Dokumente tragen
```

Status: bestätigt (Richtung, 2026-07-23); Formulierung offen
Rolle: zuliefernd → K-3.3a

**K-3.3e, Dokumenttypen und Triage.**

```
Knowledge (deklarativ) / Process (chronologisch) / Action (imperativ)
Fundament: KE-Unterscheidung deklarativ/prozedural, älter als die Methode
Diagnostik: Output faktisch falsch ⇒ Knowledge; formal falsch ⇒ Action;
Entscheidungslogik unklar ⇒ Process
zweite Achse: handkuratiert vs. deterministisch generiert
(Distillation = auch Build-Stufe; generierte Docs tragen Frontmatter, keine Handedits)
```

Status: unbestätigt
Rolle: zuliefernd → K-3.3a

**K-3.3f, Verhältnis zur Forschungsdaten-Dokumentschicht.**

```
DMPs enden als Compliance-Dokumente ──► Ruf nach machine-actionable DMPs
Promptotyping Documents sind machine-actionable im stärkeren, operativen Sinn:
ein Agent implementiert daraus in jeder Session;
ein Dokument, mit dem kein Agent arbeiten kann, wird genau deshalb revidiert
Frontmatter → Zitationsmetadaten, die Harvester lesen (4.1)
```

Status: unbestätigt
Rolle: zuliefernd → K-3.3a

**K-3.5a, Worked Example (SZD-HTR; steht in 3.4).**

```
Exploration stellt die Frage, wo die Prüfung der Ausgabe hingehört;
der Record antwortet aus einem zweiten Pipeline-Projekt, dessen agentengestützte
Screening-Stufe per dokumentierter Projektentscheidung abgeschafft wurde,
nachdem kein Mensch die dort verzeichneten Freigaben erteilt hatte
──► Distillation kodiert externe Prüfung in Dokumente
    (Verification-Konzept, Annotationsprotokoll, TEI-gesteuerte Promptvarianten)
──► Drei-Status-Review: human > agent > unchecked (= Autoritätsordnung 6.2 als Praxis)
──► Unsicherheit bleibt sichtbar (mandatiertes Markup, Facsimile daneben) = Drucker-Mechanismus
Arbeitsteilung normativ begründet: Modellieren/Spezifizieren/Verifizieren bleibt beim
Scholar, weil es wissenschaftliche Verantwortung trägt (wie Autorschaft), und weil
Verantwortung sich nicht delegieren lässt; keine Behauptung über Können der Systeme
```

Status: unbestätigt
Rolle: zuliefernd → K-3.2a

## Sektion 4, der Artefakttyp

**K-4.1a, statisch als Default.**

```
Artefakt = self-contained static web tool. Drei Gründe:
in einem Zug generierbar (Ableitung inspizierbar) ∧ ohne Infrastruktur publizierbar
∧ langlebig (minimal computing, Endings)
Richtlinien: Vanilla JS; Vendoring nur unter Kompromissregel; Präcomputation;
offline-fähig; Provenienzdeklaration (Artefakt legt Produktionsbedingungen offen
wie eine Edition ihre Editionsprinzipien)
```

Status: unbestätigt
Rolle: tragend → K-1b

**K-4.1b, FAIR4RS-Messung.**

```
statisches Artefakt: A per Konstruktion erfüllt
                     R überliefert (Provenienz R1.2 fällt als Nebenprodukt an)
                     F scheitert per Default (kein PID, keine Releases, keine Metadaten)
──► Lücke = Publikationsarbeit, von der Methode separierbar
    (Release + DOI + Metadaten deterministisch aus Frontmatter)
Beleg: auditierter Fall 3.4, Verification Document im Repo
```

Status: unbestätigt
Rolle: zuliefernd → K-4.1a

**K-4.2a, Typologie nach epistemischer Funktion.**

```
Ordnungsprinzip: epistemische Funktion (Format und Technik sekundär)
5 Funktionen: Verification, Exploration, Edition, Capture, Audit
Lücke in drei Traditionen; TaDiRAH-Befund: Capture/Exploration/Edition haben
Gegenstücke, Verification/Audit nicht
──► Funktion bestimmt Interface-Design
──► deshalb scheitert das generische One-size-fits-all-Dashboard,
    und fragespezifische generierte Interfaces sind wirksamer
```

Status: unbestätigt
Rolle: zuliefernd → K-4.1a

**K-4.3a, Grenze und Übergabepunkt.**

```
Formatgrenzen (Datenvolumen client-seitig, keine Kollaboration, keine Persistenz)
= Kontur des Artefakttyps
darüber hinaus: Projekt hat Prototyping verlassen ──► RSE-Domäne
Dokumentset verliert an der Grenze nicht seinen Wert ──► es wird das Handover-Paket (6.5)
```

Status: unbestätigt
Rolle: zuliefernd → K-1b

## Sektion 5, Evidenz

**K-5.1a, Präsentationsprinzip.**

```
Evidenz = dokumentierte Projekte, zwei Auflösungen (Tabelle + ein Fall je Funktion,
vier der fünf Funktionen ausgearbeitet)
Auswahlregel: Methode ganz durch das Projekt geführt ∧ Repository mit Dokumenten,
Code und Daten hinterlassen, Öffentlichkeit des Repos nicht gefordert
──► video-dokumentierte Lehrdemonstrationen bleiben draußen
Fehlschläge wurden nicht systematisch dokumentiert; das Schweigen ist eine
Eigenschaft der Aufzeichnung und wird als solche benannt
Zahlen gegen die Repos geprüft (adversarialer Agentendurchlauf, Juli 2026);
Protokoll = eigenes Verification Document, auf den Commit gepinnt
Evidenzschicht = Grounded Vault (Companion); der Companion ist Teil des Arguments,
weil eine kuratierte Wissensschicht genau das ist, was anhaltende Praxis der Methode produziert
```

Status: unbestätigt
Rolle: zuliefernd → K-1b

**K-5.2a, Formationsphase als Gruppe (steht seit der Revision in 2.6).**

```
2023–früh 2025 als Prosagruppe: teiCrafter (Ursprungspunkt, Vibe-Coding ohne Methode),
Wheaton (erster Promptotyp), dazu die Restgruppe (SZD-Metadaten-Experiment, CVMA, imareal)
──► dort traten die Komponenten der späteren Methode zuerst in der Praxis auf,
    ohne Abbildung Komponente → Projekt (das Vokabular postdatiert die Praxis)
──► Evidenzgewicht liegt in der Genealogie
──► konsolidierte Methode wird von den reifen Fällen der Tabelle validiert
```

Status: unbestätigt
Rolle: zuliefernd → K-3.1a

**K-5.4a, Lehr- und Kooperationsfälle als Transfertest.**

```
Workshops zeigen: Methode ist kommunizierbar,
Teilnehmer produzieren reale Dokumente und Prototypen
Kooperationsfälle als eigene Evidenzklasse: dort, wo die Verifikationslast auftritt,
liegt die spezifizierende und verifizierende Rolle bei der Domänenexpertin
(offene Editionsentscheidung; Korpus-Übergabe mit unverifizierten Strömen)
ausdrücklich keine empirische Validierung; die Stütze liegt außerhalb der
Belegschicht (Kursakten; Teilnehmerarbeiten nicht publizierbar)
stärkste Einzelevidenz Dritter = Community-Fork; davon gibt es noch wenig (6.4)
```

Status: unbestätigt
Rolle: zuliefernd → K-1b

**K-5.5a, Querbefunde.**

```
Befund 1: technische Uniformität (teils Guidelines, plausibel teils Modell-Bias; offenes Problem)
Befund 2: Artefaktqualität ko-variiert mit der in die Dokumente investierten
Domänenexpertise, angeboten als Inferenz aus selbst gebauten Fällen;
der Record hält am anderen Pol begrenzten Ertrag bei dünnen Dokumenten
und keinen ausgewiesenen Fehlschlag
──► stützt die Prämisse, dass der Wert beim Modellieren und Spezifizieren entsteht
```

Status: unbestätigt
Rolle: zuliefernd → K-1b

## Sektion 6, Diskussion

**K-6.1a, Prozess und Publikation.**

```
im Prozess ist der Promptotyp verwerfbar in Hinrichs' Sinn (König 2026 als
deutschsprachiger Nachbarbegriff der Unfertigkeit)
was publiziert wird, steht unter anderen Pflichten, weil es in den Record eintritt
──► Endings-konformes Format, Provenienzdeklaration, versionierte Dokumente (4.1)
```

Status: unbestätigt
Rolle: zuliefernd → K-4.1a

**K-6.2a, Verification.**

```
drei Ebenen: Datentreue / Anforderungserfüllung / Designkonformität
sortiert in Autonomiezonen: deterministisch (Agent frei) → Machine Review
(adversarial, unter menschlicher Autorität) → Experte (Interpretation, Kontext)
∧ neue Fundierung: f₂ stochastisch ⇒ Abbildungstreue nicht garantiert
  ⇒ Verification systematisch nötig (aus K-3.3a)
Verification ist nicht automatisierbar ──► ihr Aufwand ist der ehrliche Preis des Possibility-Claims
```

Status: unbestätigt
Rolle: tragend → K-1b

**K-6.3a, Reproduzierbarkeit.**

```
Modelle nicht-deterministisch ──► binäre Artefakt-Identität unerreichbar
Reproduzierbarkeit hängt an: Dokumenten + Entscheidungsspur + deterministischer Schicht
(Skripte und generierte Docs laufen identisch)
Claim reicht genau so weit wie die menschlichen Entscheidungen, die das Projekt
geformt haben; diese macht der Record rekonstruierbar
Gegenposition aus dem Editionsdiskurs (freie, lokal lauffähige Modelle als
Reproduzierbarkeitsbedingung) wird benannt und über diese Verortung beantwortet
FAIR4RS-Relokation: wiederverwendbares Objekt = Dokumentset + Daten (Code = Derivat)
Findability ──► Registry-Anschluss (Wikidata-Registries ernten Frontmatter-Metadaten)
```

Status: unbestätigt
Rolle: zuliefernd → K-6.2a

**K-6.4a, fünf Limits.**

```
1 evidenziell: Einzelpraktiker, keine Kontrollbedingung, Methode ∧ Modellfähigkeit konfundiert
2 Format (4.3)
3 Konventionsproblem nur adressierbar gemacht, nicht gelöst
4 ungleicher Zugang ──► asymmetric amplification, die Methode macht es sichtbar
5 Professions-Klausel: macht keine RSEs; ohne Domänenexpertise sind die
  Dokumente exakt so gut wie das Wissen dahinter
```

Status: unbestätigt
Rolle: zuliefernd → K-1b

**K-6.5a, Transfer.**

```
Mechanik nicht humanities-spezifisch ∧ geschmiedet am schwierigsten Datenprofil
──► Transfer als Inferenz in die günstige Richtung, als solche angeboten
zwei Fälle bereits außerhalb DH; Templates öffentlich zum Nehmen
Handover-Pfad ohne generatives Tooling: Dokumentset als Übergabeformat an RSE
──► Methode ergänzt die RSE-Profession an beiden Enden
    (unterhalb der Grenze Reichweite, an der Grenze bessere Übergabe)
```

Status: unbestätigt
Rolle: zuliefernd → K-1b

## Sektion 7, Konklusion

**K-7a, die zwei Claims.**

```
Claim 1: versionierte Dokumente können die Übersetzung Daten→Artefakt tragen;
         wissenschaftliche Arbeit konzentriert sich, wo Verantwortung liegt
         (Modellieren, Spezifizieren, Verifizieren)
Claim 2: dieselben Dokumente stabilisieren als Boundary Objects die
         interdisziplinäre Übersetzung, gegenüber Agenten wie Menschen
Schluss über die Daten: die 20-Jahres-Investition des Felds wird produktiv,
über einen anderen Mechanismus als das SW ihn vorsah, auf das Ziel hin, das es benannte
```

Status: unbestätigt
Rolle: tragend → K-1b

## Verwendung als Generierungsgrundlage

Ein Agent, der das Paper aus dieser Map neu schreibt, braucht zusätzlich: `paper-writing.md` (Sprachregeln, Prüfkatalog, Entscheidungen), die verifizierte Evidenztabelle und den Referenzapparat aus `paper.md`, die Fußnotenkonvention (jedes exemplarisch genutzte Projekt erhält eine Fußnote mit Repo-URL, Ein-Satz-Funktion und zitierten Dokumentpfaden). Ketten mit Status `unbestätigt` dürfen im Wortlaut variieren, ihre Logik ist bindend; Ketten mit Status `bestätigt` sind inhaltlich fixiert. Der Papertext trägt keinen offenen Marker mehr; die verbliebenen operatorabhängigen Punkte, darunter Titel, Sichtbarkeit der geschlossenen Repositorien und die Attribution der Übersetzungsmechanismus-Anregung, stehen in `paper-writing.md`.
