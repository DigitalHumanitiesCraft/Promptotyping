---
title: Vorlage Testing
slug: testing
version: "0.2"
status: complete
source: Vorlage Testing
mirrored: 2026-07-19
machine-url: https://dhcraft.org/Promptotyping/_content/promptotyping-document/testing.md
---

# Vorlage Testing

Diese Vorlage strukturiert das Quality-Assurance-Dokument einer Promptotyping-Wissensbasis. Das resultierende Dokument heißt typischerweise `testing.md` (alternativ `test-strategy.md` oder `tests.md`, je nach Projektsprache und Schwerpunkt) und liegt im `knowledge/`-Ordner des Repos. Es trägt die Teststrategie: welche Garantien das System nachweislich hält, welche Lücken bewusst offen bleiben, und wie ein Dritter die Tests selbst laufen lässt. Der erste Absatz unter der H1 trägt den Zweck des konkreten Dokuments in einem Satz; bei der teiCrafter-Fassung ist das die Aussage "Testing-first, der Maßstab wird vor den Features gebaut, die er beurteilt". Die Vorlage stellt sicher, dass dieser zweck-tragende erste Absatz vorhanden ist, denn ein eigenes `zweck:`-Frontmatter-Feld gibt es in der reduzierten Konvention (Stand 2026-06-13) nicht mehr.

## Geltungsbereich

Die Vorlage trägt, sobald das System eine automatisierte oder systematische Qualitätssicherung führt und diese dokumentiert werden soll: eine Testsuite, eine Validierungs-Harness, eine Acceptance-Prüfung gegen die Projektziele. Triggerkriterium ist nicht die bloße Existenz einzelner Tests, sondern die Notwendigkeit, die Teststrategie als Ganzes nachvollziehbar zu machen, also was geprüft wird, was bewusst nicht geprüft wird, und welche Garantie daraus folgt.

Bei trivialen Tool-Repos ohne eigene Tests entfällt die Vorlage; ein Satz in `architecture.md` ("keine automatisierten Tests, manuelle Sichtprüfung") reicht dann. Sie trägt nicht für die Dokumentation einzelner Testfälle auf Code-Ebene; diese liegt im Testcode selbst (Testnamen, Assertions, Kommentare). Sie trägt nicht für CI/CD-Infrastruktur als solche; deren Konfiguration liegt in `architecture.md` (Build und Deployment) oder einer eigenen `infrastruktur.md`. Das Testing-Dokument verweist auf die CI nur als Auslöser ("Tests laufen bei jedem Push"), beschreibt sie nicht.

Testing bleibt im Regelfall ein Dokument. Wächst die Suite auf mehrere unabhängige Engines mit eigenen Aktualisierungsrhythmen (eine Node-Engine-Harness und eine getrennte Python/lxml-Validierungs-Harness, wie bei teiCrafter), bleiben diese dennoch Sektionen desselben Dokuments, solange sie eine gemeinsame Teststrategie tragen. Die Spaltung in eine eigene Datei lohnt sich erst, wenn ein Aspekt der Qualitätssicherung (etwa eine CER-Evaluationsmethodik in einem OCR-Projekt) einen eigenen Leser und eigenen Pflegerhythmus entwickelt.

Lebenszyklus: das Dokument entsteht mit der ersten Suite und wird nachgezogen, wenn eine Garantie hinzukommt, eine Lücke sich schließt oder ein Run-Kommando sich ändert, im selben Commit wie die Suite selbst. Der optionale Stand-Block trägt Stichtags-Semantik und veraltet planmäßig; der Rest des Dokuments beschreibt die Strategie und veraltet nur, wenn die Suite umgebaut wird, ohne das Dokument anzufassen.

## Funktion des Dokuments

Das Dokument beantwortet "was garantiert dieses System nachweislich, woran zeigt es das, und was bleibt bewusst ungeprüft". Adressiert sind drei Lesergruppen: ein Reviewer, der entscheiden will, ob er einer Behauptung trauen kann oder sie selbst prüfen muss; ein Coding-Agent, der eine Änderung vornimmt und den passenden Regressionstest mitliefern soll; ein externer Prüfer oder Domänenexperte, der die Reproduzierbarkeit der Ergebnisse beurteilt. Im Promptotyping-Kontext ist die zweite Lesergruppe besonders bedeutsam: das Dokument sagt dem Agenten, in welcher Form eine neue Garantie abzusichern ist, und hebt damit jeden Sign-off von der Behauptung ("die IDs sind weg") zur Messung ("der Test ist grün").

## Strukturprinzipien

Drei Prinzipien tragen das Dokument.

Erstens trennt es Garantie von Lücke. Was das System nachweislich hält, steht getrennt von dem, was es bewusst nicht prüft. Eine Teststrategie, die nur ihre Garantien nennt, verschweigt ihre blinden Flecken und verleitet zu falschem Vertrauen. Die explizite Lücken-Sektion ist konstitutiv, nicht ein Eingeständnis von Unvollständigkeit; sie sagt dem Reviewer genau, wo er selbst hinschauen muss.

Zweitens beschreibt es Garantien, nicht Implementationen. Was ein Proof behauptet und gegen welche Daten er es zeigt, ist Teststrategie; wie der Testcode intern aufgebaut ist, ist Code. Eine Beschreibung, die in den Testcode hineingreift, veraltet schneller als sie nutzt. Die zentrale Information ist die Behauptung pro Proof und ihr Belegstatus, nicht der Code, der sie prüft.

Drittens bindet es Tests an die Projektziele zurück. Eine Testsuite ist kein Selbstzweck, sondern der Maßstab für die Frage, ob das System sein Ziel erreicht. Das Dokument macht diese Bindung über eine Acceptance-Sektion explizit: pro Projektziel die Methode, die es prüft, und der Beleg, dass sie grün ist. Damit unterscheidet sich das Dokument von einer reinen Liste grüner Tests.

## Frontmatter-Schema

Das Dokument folgt dem reduzierten Pflichtkern der aktuellen Konvention (Stand 2026-06-13): `title`, `project` (Objekt mit `name` und `repository`), `method` (Objekt mit `name` und `url`), `status`, `created`, `updated`. Es gibt kein `zweck:`-Feld mehr; der Zweck lebt als erster Absatz unter der H1. Das Dokument deklariert seine Funktion über diesen ersten Absatz, nicht über den Dateinamen; `testing.md`, `test-strategy.md` und `tests.md` sind gleichwertige Träger derselben Funktion.

- `template:` empfohlen, als Block mit `name`, `version`, `url` und optional `alias`, dort wo diese Vorlage angewandt wurde. teiCrafter führt das Feld bereits kanonisch mit der dhcraft.org-URL.
- `status:` meint die Dokument-Maturity (`idea`, `draft`, `stub`, `complete`, `reviewed`, `archived`; seit 2026-07-19 auch `active` für fortlaufende Prozessdokumente und `snapshot` für Stichtagsdokumente), nicht den operativen Projektstatus. Ein Testing-Dokument mit gepflegtem Stand-Block kann `snapshot`-Semantik tragen; maßgeblich ist das Vokabular der Konvention.
- `topics:` typisch sind `[[Software Testing]]`, `[[Regression]]`, `[[Test-Driven Development]]`, `[[Data Validation]]`, `[[Evaluation]]`. Bei Editions- und OCR-Projekten zusätzlich domänennahe Topics wie `[[TEI XML]]`. Sie verorten den Agenten in den Wissensfeldern, in denen Teststrategie reasoning braucht.
- `version:` repo-weit konsistent, gemeinsam mit den Geschwister-Dokumenten erhöht.
- `authors:` plus `generated-with:`, falls LLM-gestützt entstanden.
- `related:` typischerweise `architecture`, `specification`, `data`; die Dokumente, gegen die die Tests messen.

## Abschnitte im Detail

### Lead

Funktion: in ein bis drei Sätzen die Teststrategie in ihrem Kern benennen und damit den Zweck tragen. Inhalt: das tragende Prinzip (Testing-first, Output-testen-statt-Code-testen, vier Säulen), die Architektur der Prüfung (headless Proofs plus Validierungs-Harness, oder pytest plus Verifikations-Set plus manuelle Sichtprüfung), und der eine Satz, der das Dokument zusammenfasst. teiCrafter führt hier "Testing-first. Der Maßstab wird vor den Features gebaut, die er beurteilt"; M3GIM führt "Die Test-Suite validiert den Output der Pipeline, nicht den Pipeline-Code". Dieser Absatz ersetzt das frühere `zweck:`-Feld.

### Teststrategie und Test-Taxonomie

Funktion: die Architektur der Qualitätssicherung benennen, das tragende Ordnungsprinzip der Tests. Inhalt: die Säulen oder Ebenen, in die sich die Tests gliedern, je mit der Fehlerklasse, die sie abdecken und die die anderen nicht sehen. SuGW führt vier komplementäre Säulen (pytest für den Build-Code, Verifikations-Set für die Daten-Konsistenz End-to-End, JS-Tests für die Browser-Logik, manuelle Sichtprüfung); teiCrafter führt zwei Schichten (headless Engine-Proofs und eine Validierungs-Harness mit drei Leveln); co-ocr-htr führt eine Logik-vor-UI-Priorisierung. Die Taxonomie ist der Kern dieser Sektion: jede wiederkehrende Test-Art bekommt einen Namen und eine abgegrenzte Fehlerklasse.

### Was garantiert wird (Proofs)

Funktion: die zentralen Garantien einzeln auflisten, je mit Behauptung und Belegstatus. Inhalt: eine Tabelle mit Spalten Proof, Was behauptet wird, Ergebnis. Bei teiCrafter sind das die Engine Proofs (die zentrale Behauptung "lies beliebiges TEI und speichere es byte-verlustfrei zurück", belegt durch den roundtrip-Sweep) und die Feature Proofs pro Meilenstein. Bei einem Daten-Pipeline-Projekt sind das die Teststufen (Schema-Validierung, String-Integrität, referentielle Integrität, Determinismus). Pro Eintrag steht die Behauptung, nicht der Code; das Ergebnis ist binär (PASS oder Zahlenstand wie 295/295) oder qualitativ (grün, wechselnd). Konkrete Test-Zähler dürfen hier stehen, weil dieses Dokument ein Snapshot-Charakter trägt; die Regel gegen volatile Metriken gilt für Wissens- und Strategiedokumente, nicht für ein Testing-Dokument, das den Belegstand führt.

### Acceptance und Engine-Proofs (Verifikation der Projektziele)

Funktion: die Tests an die Projektziele zurückbinden. Inhalt: pro Projektziel oder Erfolgskriterium die Frage, die zu beantworten ist, die Verifikationsmethode, die Ebene (automatisch, kontextuell, visuell, professionell) und der Beleg. teiCrafter führt diese Verifikationskaskade explizit: "Wurde alles verarbeitet" (Coverage-Sweep, automatisch), "Ist der Output valides TEI" (Schema, automatisch), "Geht nichts verloren und ist die einzige Änderung die beabsichtigte" (Roundtrip-Byte-Identität, kontextuell), "Funktioniert die intendierte Nutzung für einen Menschen" (Browser-Durchlauf, visuell), "Ist es korrekt als Edition" (Domänenexperten-Review, professionell). Der Engine-Proof ist dabei die zentrale Behauptung, die das ganze System trägt; er steht hier, weil er die Brücke zwischen Testsuite und Projektziel ist. Bei kleineren Projekten reduziert sich diese Sektion auf eine kurze Zuordnung der Säulen zu den Akzeptanzfragen.

### Was bewusst nicht geprüft wird (Lücken)

Funktion: die blinden Flecken der Teststrategie explizit machen. Inhalt: pro Lücke, was nicht abgedeckt ist, warum (nicht automatisierbar, nicht lohnend, separater Meilenstein), und wodurch sie aktuell ersatzweise gedeckt ist. SuGW führt "Browser-Visual-Regression" (Screenshot-Vergleich, separater Meilenstein, aktuell durch manuelle Sichtprüfung gedeckt), "JS-rendered DOM-Inhalte" und "Stakeholder-Acceptance". M3GIM führt unter "Abgrenzungen" Pipeline-Internas, Google-Sheets-Content und Performance als bewusst ungetestet. co-ocr-htr führt UI-Komponenten, externe Abhängigkeiten und visuelle Aspekte. Diese Sektion ist konstitutiv: eine Garantie ohne benannte Lücke ist eine Behauptung, keine Strategie.

### How to Run

Funktion: einem Dritten ermöglichen, die Tests selbst zu laufen. Inhalt: die konkreten Kommandos in einem Codeblock, je mit einem Kommentar, was sie prüfen und welchen Zielstand sie haben. teiCrafter führt "node test/tools/run_all.mjs" als das eine Regression-Gate plus die Einzel-Proofs mit Zielständen; M3GIM führt "pytest tests/ -m 'not slow'" plus die Determinismus-Variante; co-ocr-htr führt die npm-test-Kommandos. Dazu gehören gegebenenfalls ENV-Overrides für Pfade und Datenquellen (M3GIM und teiCrafter führen beide solche Overrides). Dies ist der Process-Anteil des sonst deklarativen Knowledge-Dokuments: ausführbare Anweisung, nicht Beschreibung.

### Pattern: Test im selben Commit (optional)

Funktion: das Arbeitsprinzip festhalten, dass jede prüfbare Änderung im selben Commit ihren Regressionstest bekommt. Inhalt: die Regel, ihre Begründung (Tests als Nachgedanke produzieren Lücken), Beispiele und die ausgewiesene Ausnahme (rein visuelle Politur). SuGW führt diese Sektion prominent. Trigger: das Repo praktiziert Test-getriebene oder test-begleitete Entwicklung. Bei Suiten ohne dieses Prinzip entfällt die Sektion.

### TDD-Workflow und Anker-Strategie (optional)

Funktion: dokumentieren, wie neue Garantien entstehen und wie Einzelfall-Fixtures als Living Documentation dienen. Inhalt: der xfail-Workflow (Invariante zuerst als strict-xfail formulieren, dann implementieren, XPASS signalisiert fertige Phase) und die Anker-Record-Strategie (wenige kuratierte Fixtures, die ihre Quell-Herkunft explizit halten und damit die Abbildung Quelle-zu-Output im Test selbst nachlesbar machen). M3GIM führt beides ausführlich. Trigger: das Projekt erweitert ein Datenmodell iterativ. Bei statischen Suiten entfällt die Sektion.

### Bekannte Ausnahmen und Grenzen (optional)

Funktion: dauerhaft tolerierte Abweichungen festhalten. Inhalt: pro Ausnahme der Testname, der Status (xfail, skip), die Ursache und die Bedingung, unter der die Ausnahme aufgehoben wird. M3GIM führt "test_all_record_ids_unique xfail (PL_07 Duplikat aus der Quelle, Fix im Sheet)" und eine skip-Begründung. co-ocr-htr führt unter "Known Limitations" einen konkreten Regex-lastIndex-Bug als gefangene und gefixte Falle. Trigger: die Suite trägt bewusst tolerierte Rot- oder Skip-Zustände.

### Komponenten (optional)

Funktion: die Testdateien und Hilfswerkzeuge auflisten, damit ein Entwickler den Einstieg findet. Inhalt: pro Datei oder Werkzeug ein Satz zur Funktion (der Validator, der Orchestrator, der Negativ-Selbsttest, die Fixture-Generatoren). teiCrafter und M3GIM führen beide eine solche Komponenten- oder Struktur-Auflistung. Trigger: die Suite ist groß genug, dass ihre Struktur selbst Orientierung braucht. Bei kleinen Suiten reicht die How-to-Run-Sektion.

### Aktueller Stand (optional)

Funktion: den Belegstand der Suite zum Stichtag festhalten. Inhalt: eine Tabelle Säule/Stufe, Tests, Status. SuGW und M3GIM führen einen solchen Stand-Block. Dies ist die einzige Stelle, an der volatile Zahlen unkritisch sind, weil das Testing-Dokument ohnehin Snapshot-Charakter trägt. Bei jedem substanziellen Suiten-Stand wird die Tabelle nachgezogen.

## Was nicht reingehört

- Stack und Architecture. Welche Technologien das System einsetzt und wie es aufgebaut ist, gehört in `architecture.md`. Das Testing-Dokument nennt den Test-Runner als Werkzeug (Vitest, pytest, Node-Harness), nicht den Anwendungs-Stack.
- Provenance und Chronik. Wie die Suite über Sessions gewachsen ist, welche Sackgassen es gab, gehört in `journal.md`. Das Testing-Dokument trägt den aktuellen Garantiestand, keine Entwicklungsgeschichte. Meilenstein-Bezüge in Proof-Namen (M3.7, Session 33) sind als stabile IDs erlaubt, nicht als Chronik.
- Anforderungen. Welche Funktionalität das System leisten soll, gehört in `specification.md`. Das Testing-Dokument prüft gegen diese Anforderungen, formuliert sie nicht.
- Code-Implementation des Testcodes. Wie ein Proof intern aufgebaut ist, gehört in den Testcode (Testnamen, Assertions, Kommentare). Das Dokument trägt die Behauptung pro Proof, nicht ihren Code.
- CI/CD-Konfiguration. Die Workflow-Datei ist Source of Truth in `architecture.md` oder `.github/workflows/`. Das Testing-Dokument nennt den Auslöser, nicht die Konfiguration.

## Vorlage zum Befüllen

Der folgende Block ist als Template gedacht. Optionale Sektionen, die nicht zutreffen, werden vor dem Commit gelöscht, nicht leer geführt. Es gibt kein `zweck:`-Feld; der erste Absatz unter der H1 trägt den Zweck in einem Satz.

````markdown
---
title: Testing
project:
  name: [Projektname]
  repository: [Repository-URL]
method:
  name: Promptotyping
  url: https://lisa.gerda-henkel-stiftung.de/digitale_geschichte_pollin
template:
  name: Vorlage Testing
  version: 0.2
  url: https://dhcraft.org/Promptotyping/promptotyping-document/testing
  alias: https://dhcraft.org/Promptotyping/#promptotyping-document-testing
status: draft
created: [YYYY-MM-DD]
updated: [YYYY-MM-DD]
language: [de | en]
version: [Repo-Schema-Version]
authors: [Autor 1, Autor 2]
generated-with: [Werkzeug, falls relevant]
topics: ["[[Software Testing]]", "[[Regression]]"]
related: [architecture, specification, data]
---

# Testing

<!-- Erster Absatz = Zweck in einem Satz. Tragendes Prinzip (Testing-first, Output-testen, vier Säulen), Architektur der Prüfung, der eine zusammenfassende Satz. Ersetzt das frühere zweck-Feld. -->

[Lead-Absatz]

## Teststrategie

<!-- Die Säulen oder Ebenen, je mit der Fehlerklasse, die sie abdecken und die anderen nicht sehen. -->

[...]

## Was garantiert wird

<!-- Tabelle: Proof, Behauptung, Ergebnis. Behauptung statt Code. Zähler erlaubt (Snapshot-Dokument). -->

| Proof | Was behauptet wird | Ergebnis |
|---|---|---|
| [Proof] | [Behauptung] | [PASS / n/n / grün] |

## Acceptance

<!-- Pro Projektziel: Frage, Methode, Ebene (automatisch/kontextuell/visuell/professionell), Beleg. Engine-Proof als zentrale Behauptung. -->

| Frage | Methode | Ebene | Beleg |
|---|---|---|---|
| [Frage] | [Methode] | [Ebene] | [Beleg] |

## Was bewusst nicht geprüft wird

<!-- Pro Lücke: was nicht abgedeckt, warum, wodurch ersatzweise gedeckt. Konstitutiv. -->

[...]

## How to Run

<!-- Konkrete Kommandos mit Zielstand. ENV-Overrides falls relevant. Der Process-Anteil. -->

```
[kommando]                # was es prüft, Zielstand
```

<!-- ============================================================ -->
<!-- OPTIONALE SEKTIONEN: vor dem Commit nicht zutreffende löschen -->
<!-- ============================================================ -->

## Pattern: Test im selben Commit

<!-- Trigger: test-begleitete Entwicklung. Regel, Begründung, Beispiele, ausgewiesene Ausnahme. -->

[...]

## TDD-Workflow und Anker-Strategie

<!-- Trigger: iterative Modell-Erweiterung. xfail-Workflow, Anker-Records als Living Documentation. -->

[...]

## Bekannte Ausnahmen und Grenzen

<!-- Trigger: bewusst tolerierte Rot-/Skip-Zustände. Pro Eintrag: Testname, Status, Ursache, Aufhebungsbedingung. -->

[...]

## Komponenten

<!-- Trigger: große Suite. Pro Datei/Werkzeug ein Funktionssatz. -->

[...]

## Aktueller Stand

<!-- Trigger: Belegstand zum Stichtag gewünscht. Tabelle Säule, Tests, Status. -->

| Säule | Tests | Status |
|---|---|---|
| [Säule] | [n] | [grün] |
````

## Anwendung als Prompt-Template

Strukturanker beim Aufsetzen der Qualitätssicherung. Der Agent erhält den Template-Block und befüllt ihn aus der real existierenden Testsuite, den Testdateinamen, den Assertions und den Run-Skripten. Die Acceptance-Sektion verlangt eine Rückbindung an die Projektziele aus `specification.md`; sie sollte gegen das Spec-Dokument geprüft werden. Die Lücken-Sektion verlangt Ehrlichkeit über das Ungeprüfte und sollte nicht aus Reflex leer bleiben.

Review-Folie für eine bestehende Teststrategie. Ein vorhandenes `testing.md` wird gegen die Vorlage gehalten, um zu prüfen, ob Garantie und Lücke getrennt sind, ob die Proofs ihre Behauptung statt ihren Code tragen, ob eine Acceptance-Bindung an die Projektziele existiert, ob die How-to-Run-Sektion einen Dritten tatsächlich zum Laufen bringt, und ob keine Architecture oder Chronik in das Dokument hineingewachsen ist.

## Beispiel

Der kanonische Träger dieser Funktion ist teiCrafter (`knowledge/testing.md`, "Testing and Evaluation Harness", führt das `template:`-Feld mit der dhcraft.org-URL bereits kanonisch). Es ist Testing-first organisiert: der Lead trägt "Testing-first. Der Maßstab wird vor den Features gebaut, die er beurteilt", dazu die Zwei-Schichten-Architektur (headless Engine-Proofs in Node und eine Validierungs-Harness in Python/lxml) und das eine Regression-Gate `node test/tools/run_all.mjs`. Die zentrale Behauptung ist der Engine-Proof "lies beliebiges TEI und speichere es byte-verlustfrei zurück", belegt durch `roundtrip_sweep.mjs` (byte-identisch über den ganzen realen Korpus). Die Validierungs-Harness führt drei Level (Text-/Wort-Fidelity, Schema-Validität gegen TEI All RelaxNG plus Schematron, strukturelle Invarianten). Die Acceptance-Sektion bindet fünf Projektfragen an Methode und Ebene zurück (automatisch, kontextuell, visuell, professionell) und benennt die visuelle Ebene als Mittelpunkt für "haben wir das Ziel in unserem Sinn erreicht". Die bewusste Lücke ist der Browser-Click-Through der UI, den die headless Proofs nicht abdecken können; er wird durch benannte Browser-Check-Szenarien gedeckt. Die How-to-Run-Sektion listet jeden Proof als Kommando mit Zielstand und ENV-Overrides für die Datenquellen.

Drei komplementäre Genres zeigen die Bandbreite. SuGW (`test-strategy.md`) führt das Vier-Säulen-Modell (pytest für den Build-Code, Verifikations-Set für die Daten-Konsistenz End-to-End in drei Coverage-Stufen, JS-Tests für die Browser-Logik, manuelle Sichtprüfung), das Pattern "Code plus Test im selben Commit" mit ausgewiesener Ausnahme für rein visuelle Politur, und eine explizite Sektion "Lücken, die bewusst offen bleiben" (Browser-Visual-Regression als separater Meilenstein, JS-rendered DOM, Stakeholder-Acceptance). M3GIM (`tests.md`) führt das Prinzip "validiert den Output der Pipeline, nicht den Pipeline-Code", eine durchnummerierte Teststufen-Taxonomie mit bewussten ID-Lücken, den TDD-Workflow mit strict-xfail und die Anker-Record-Strategie als Living Documentation ("Zelle 123 in Objekte.xlsx wird zu diesem Record"), dazu eine "Abgrenzungen"-Sektion mit bewusst Ungetestetem und dokumentierten Ausnahmen (PL_07 xfail, NIM_11 skip). co-ocr-htr (`TESTING.md`) führt die Logik-vor-UI-Priorisierung mit zwei expliziten Listen "What We Test" und "What We Don't Test" und unter "Known Limitations" einen konkret gefangenen Regex-lastIndex-Bug. Alle vier teilen die Grundfigur: Garantie und Lücke werden getrennt geführt, und die Tests sind an die Projektziele zurückgebunden statt als Selbstzweck gelistet.

Das Fehlmuster aus dem Inhaltsaudit vom Juli 2026 ist die doppelt geführte Teststrategie, einmal in `architecture.md` und einmal in `test-strategy.md`, ohne dass eine der beiden als Quelle der Wahrheit deklariert ist; jede Suiten-Änderung muss dann zwei Stellen treffen und verfehlt in der Praxis eine.

## Begriffe

- Teststrategie: das tragende Ordnungsprinzip der Qualitätssicherung, also welche Test-Arten existieren, welche Fehlerklasse jede abdeckt und welche Garantie daraus folgt.
- Proof: eine einzelne, benannte Garantie mit expliziter Behauptung und binärem oder qualitativem Belegstatus; bei teiCrafter ein headless Check, der eine Engine- oder Feature-Eigenschaft gegen reale Daten zeigt.
- Acceptance: die Rückbindung der Tests an die Projektziele, pro Ziel mit Frage, Methode, Verifikationsebene und Beleg.
- Verifikationsebene: die Art der Prüfung in der Promptotyping-Kaskade, automatisch (maschinell), kontextuell (gegen reale Daten und intendierte Änderung), visuell (Browser-Durchlauf durch einen Menschen) oder professionell (Domänenexperten-Review).
- Lücke: ein bewusst ungeprüfter Bereich der Qualitätssicherung, mit Begründung und Angabe der ersatzweisen Deckung; konstitutiver Bestandteil, nicht Eingeständnis.
- xfail: ein Test, der absichtlich rot ist, weil die geprüfte Invariante noch nicht implementiert ist; mit strict-Modus bricht die Suite, sobald er grün wird, was die fertige Phase signalisiert.

## Versionshistorie

- 0.2 (2026-07-19): Freigabe (status complete), englisches Funktionsvokabular (Quality Assurance), Lebenszyklus-Absatz, Fehlmuster im Beispiel. Keine Migrationspflicht für bestehende Repos.
- 0.1 (2026-06-13): Erstfassung, empirisch destilliert aus teiCrafter, SuGW, M3GIM und co-ocr-htr.

## Related

- [Konvention Promptotyping Documents](#konvention-v0.1)
- [Vorlage Architecture](#promptotyping-document-architecture)
- [Vorlage Specification](#promptotyping-document-specification)
- [Vorlage Datengrundlage](#promptotyping-document-data)
- [Vorlage Journal](#promptotyping-document-journal)
