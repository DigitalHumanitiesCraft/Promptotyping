---
title: Vorlage Report
slug: report
version: "0.3"
status: complete
source: Vorlage Report
mirrored: 2026-08-21
machine-url: https://dhcraft.org/Promptotyping/_content/promptotyping-document/report.md
---

# Vorlage Report

Diese Vorlage strukturiert den menschlich kuratierten Projektstatusbericht für einen externen Adressaten. Das resultierende Dokument heißt `<scope>-report-YYYY-MM-DD.md` und liegt unter `snapshots/`. Scope und Datum machen Berichtsgegenstand und Stichtag bereits im Suchtreffer sichtbar. Aus der externen Audience und dem Snapshot-Charakter folgen Lebenszyklus, Struktur und Stil. Die ausführliche Begründung der Funktion liegt in der Konvention Report Document.

## Geltungsbereich

Die Vorlage trägt, sobald ein Projektstand an einen externen Empfänger kommuniziert werden muss: Auftraggeber, Förderer, Stakeholder. Bei Auftragsprojekten ist das der Regelfall, weil Kundinnen und Kunden einen Arbeitsbericht erhalten. Sie entfällt bei reinen Eigenforschungs-Repos ohne externen Berichtsadressaten und bei Tool-Repos ohne Auftragskontext. Sie trägt nicht für interne Stand-Notizen; diese leben im `journal.md`.

Der Naming Contract trennt den kuratierten Report von maschinell erzeugten Prüf- und Vollständigkeitsberichten. Kuratierte Berichte tragen Scope, Funktion und Datum. Generierte Berichte liegen unter `generated/` oder einem in `INDEX.md` erklärten domänenspezifischen Ausgabeordner. Ein generisches `report.md` oder `status.md` wird für neue kuratierte Berichte nicht verwendet.

## Funktion des Dokuments

Das Dokument beantwortet einem Dritten ohne Repo-Vorwissen vier Fragen am Stück: was wurde im Berichtszeitraum getan, wo steht das Projekt am Stichtag, welche belastbaren Ergebnisse liegen vor, was geschieht als Nächstes. Adressiert ist ein identifizierbarer externer Empfänger; das unterscheidet den Report von allen anderen Promptotyping-Dokumenten, deren Adressat der Coding-Agent oder das Projekt selbst ist.

Abgrenzung gegen `journal.md`: nicht der Inhalt unterscheidet, sondern Lebenszyklus und Kuratierungsgrad. Das Journal trägt fortlaufende, chronologische Einträge für interne Adressaten; der Report ist ein einziger, redaktionell verdichteter Stand ohne Verlaufslogik für externe Adressaten. Der Report zitiert aus dem Journal, das Journal verweist nicht auf den Report. Abgrenzung gegen `project.md`: dort steht zeitlos „Was ist dieses Projekt?", im Report steht „Wie steht es am Stichtag X?".

## Strukturprinzipien

Drei Prinzipien tragen das Dokument, und alle drei kehren bewusst die internen Promptotyping-Prinzipien um, weil der Adressat ein anderer ist.

Erstens sind volatile Quantitäten erlaubt und erwünscht. Verarbeitungsstände (X von Y dokumentiert), Genauigkeitswerte (CER, Precision, Recall), Datenmengen, Stundenzahlen gehören in einen Report, weil der eingefrorene Stand genau diese Zahlen ist. Die Regel gegen volatile Quantitäten gilt für Wissens-, Strategie- und Überblicksdokumente, nicht für Snapshots; der Report fällt unter die Snapshot-Ausnahme.

Zweitens sind Tabellen liberaler einsetzbar als das Fließprosa-Default. Eine Tabelle für Meilensteine, Deliverables oder Pipeline-Stufen ist für die Stand-Kommunikation oft das ehrlichere Mittel als ein Absatz, weil der Leser den Status zeilenweise prüfen kann.

Drittens entfällt die negative Selbstdefinition. Ein externer Adressat erwartet, dass kommuniziert wird, was geleistet wurde, nicht was bewusst ausgespart bleibt. Wo Auslassungen relevant sind (out of scope, geplant aber nicht umgesetzt), gehören sie in „Offene Punkte" und „Ausblick", nicht in eine eigene Negationssektion.

Jede inhaltliche Behauptung über fertige Arbeit ist belegbar: über einen Pfad ins Repo, eine URL oder einen Commit-Ref. Das ist nicht Dekoration, sondern der Mechanismus, der den Bericht als korrekten Stand zum Zeitpunkt X tragfähig macht. Erhebt der Bericht empirische Befunde oder Neuheitsansprüche (Genauigkeitswerte, erstmalige Verfahren), verweist er auf das `verification.md` des Projekts ([Vorlage Verification](#promptotyping-document-verification)), in dem diese Claims adversarial gegen die Rohdaten geprüft sind; ein außenwirksamer Claim ohne Verifikationsverweis ist eine Behauptung.

## Lebenszyklus

Der Report trägt `status: snapshot`, weil sein Inhalt ab Erstellung bewusst veraltet. Der Stichtag steht im Dateinamen und im Dokument. Ein sachlich neuer Berichtsstand erzeugt eine neue datierte Datei. Korrekturen am selben eingefrorenen Stand bleiben über git nachvollziehbar. Ein Git-Tag kann zusätzlich das gesamte Repo am Berichtsdatum markieren, wenn Report, Code, Daten und Knowledge Documents gemeinsam referenzierbar bleiben müssen.

Mehrere Adressaten oder Genres erhalten eigene Scope-Werte, etwa `funder-interim-report-2026-08-21.md` und `client-final-report-2026-08-21.md`. `report-genre:` hält die kontrollierte Gattung unabhängig von der Sprache des Dateinamens.

## Frontmatter-Schema

Das Dokument folgt dem Frontmatter-Schema aus der [Konvention Promptotyping Documents](#konvention-v0.1) (Pflichtkern: `title, project, method, status, created, updated`; `template:` empfohlen), erweitert um drei adressaten-bezogene Felder:

- `audience:` verschachtelt mit `type` (`client`, `funder`, `stakeholder`, `public`) und `name` (Adressatenbezeichnung). Der entscheidende Marker, der den Report von allen anderen Promptotyping-Dokumenten unterscheidet.
- `report-period:` verschachtelt mit `from` und `to` (Berichtszeitraum).
- `report-genre:` kontrolliertes Vokabular: `zwischenbericht`, `abschlussbericht`, `stakeholder-update`.

`topics:` entfällt typischerweise; der Report trägt keine domänen-thematische Verortung im Vault-Sinn. `knowledge-sources:` entfällt; der Report verweist auf die internen Knowledge-Dokumente, nicht auf externe Anschlüsse.

## Abschnitte im Detail

### Identifikation

Funktion: den eingefrorenen Stand referenzierbar machen. Inhalt: Projekt, Berichtszeitraum, Adressat, Datum, Autor. Ohne diese fünf Angaben ist ein Stand nicht zitierbar. Steht am Anfang, kurz, gegebenenfalls als Kopf-Tabelle.

### Tätigkeiten im Berichtszeitraum

Funktion: dokumentieren, was geleistet wurde. Inhalt: in Abschlussberichten der gesamte Projektverlauf, in Zwischenberichten der aktuelle Abschnitt. Sachlich, belegbar, ohne Verlaufsdramaturgie.

### Status quo

Funktion: den Stand am Stichtag beschreiben. Inhalt: was ist fertig, was ist in Arbeit, was steht aus. Der Kern der eingefrorenen Aussage. Eine Status-Tabelle (Komponente, Stand, Beleg) ist hier oft das ehrlichste Mittel.

### Ergebnisse

Funktion: die belastbaren Outputs listen. Inhalt: Repository, Edition, Pipeline, Daten, Publikationen. Jedes Ergebnis ist über Pfad, URL oder Commit-Ref nachprüfbar.

### Offene Punkte und nächste Schritte

Funktion: benennen, was nach dem Stichtag folgt. Inhalt: in Abschlussberichten als Ausblick formuliert, in Zwischenberichten als Plan für den nächsten Abschnitt. Hier gehören auch relevante Auslassungen hin (out of scope, geplant aber nicht umgesetzt).

### Anhang mit Belegen

Funktion: Nachweise bündeln, optional. Inhalt: sinnvoll bei Förder- und Auftragsberichten, in denen Stundenzahlen, Meilensteine oder Deliverables-Listen verlangt sind.

Zwischen- und Abschlussbericht unterscheiden sich in der Gewichtung: Zwischenberichte betonen Status quo und nächste Schritte, Abschlussberichte betonen Tätigkeiten und Ergebnisse und schließen mit Ausblick.

## Schreibweise

Selbsterklärend für jemanden ohne Repo-Vorwissen. Fachbegriffe (TEI, OCR-Engine, NER, CER, DTA-Basisformat) werden beim ersten Auftreten erklärt oder verlinkt; ein Glossar am Ende ist akzeptabel, wenn die Begriffsdichte hoch ist. Kein internes Jargon ohne Auflösung: projekteigene Abkürzungen, interne Codenamen, Insider-Verweise auf Sitzungen oder Personen werden für den externen Leser übersetzt oder weggelassen. Stil sachlich, neutral, präzise, ohne Dramatisierung oder emotionalisierende Attribute.

## Was nicht reingehört

- Interne Stand-Notizen und Sessionchronik. Diese leben im `journal.md`; der Report verdichtet daraus, kopiert nicht.
- Negative Selbstdefinition als eigene Sektion. Relevante Auslassungen gehören in „Offene Punkte" und „Ausblick".
- Unbelegte Behauptungen über fertige Arbeit. Jede solche Aussage trägt einen Pfad, eine URL oder einen Commit-Ref.
- Internes Jargon ohne Auflösung.

## Vorlage zum Befüllen

Der folgende Block ist als Template gedacht.

````markdown
---
title: "Projektbericht [Projektname] – [Berichtszeitraum]"
project:
  name: [Projektname]
  repository: [Repository-URL]
status: snapshot
language: [de | en]
version: [Repo-Schema-Version]
created: [YYYY-MM-DD]
updated: [YYYY-MM-DD]
authors: [Autor 1, Autor 2]
generated-with: [Harness (LLM), falls relevant]
method:
  name: Promptotyping
  url: https://lisa.gerda-henkel-stiftung.de/digitale_geschichte_pollin
template:
  name: Vorlage Report
  version: 0.3
  url: https://dhcraft.org/Promptotyping/promptotyping-document/report
  alias: https://dhcraft.org/Promptotyping/#promptotyping-document-report
audience:
  type: [client | funder | stakeholder | public]
  name: [Adressatenbezeichnung]
report-period:
  from: [YYYY-MM-DD]
  to: [YYYY-MM-DD]
report-genre: [zwischenbericht | abschlussbericht | stakeholder-update]
---

<!-- Identifikation: Projekt, Berichtszeitraum, Adressat, Datum, Autor. Kurz, ggf. als Kopf-Tabelle. -->

[Identifikations-Block]

## Tätigkeiten im Berichtszeitraum

<!-- Was wurde geleistet. Abschlussbericht: ganzer Verlauf. Zwischenbericht: aktueller Abschnitt. Belegbar. -->

[...]

## Status quo

<!-- Stand am Stichtag: fertig, in Arbeit, ausstehend. Status-Tabelle oft am ehrlichsten. -->

[...]

## Ergebnisse

<!-- Belastbare Outputs. Jedes über Pfad, URL oder Commit-Ref nachprüfbar. -->

[...]

## Offene Punkte und nächste Schritte

<!-- Was nach dem Stichtag folgt. Abschlussbericht: Ausblick. Zwischenbericht: Plan. Relevante Auslassungen hier. -->

[...]

## Anhang

<!-- Optional. Belege, Stundenzahlen, Meilenstein- und Deliverables-Listen bei Förder- und Auftragsberichten. -->

[...]
````

## Anwendung als Prompt-Template

Strukturanker beim Erstellen eines Berichts. Der Agent erhält den Template-Block und befüllt ihn aus `journal.md` (Tätigkeiten), `specification.md` (Stand der Anforderungen und Entscheidungen), den Ergebnis-Artefakten im Repo (Pfade, Commits) und dem aktuellen Datenstand. Volatile Zahlen werden hier ausdrücklich aus den lebenden Quellen übernommen, nicht aus dem Gedächtnis. Der Bericht wird vor Versand vom Critical Expert gegen den echten Repo-Stand geprüft (Critical Expert in the Loop).

Review-Folie für einen bestehenden Bericht. Ein vorhandener `<scope>-report-YYYY-MM-DD.md` wird gegen die Vorlage gehalten, um Naming, Identifikation, Belegbarkeit, Begriffserklärung und Übereinstimmung mit dem referenzierten Repo-Zustand zu prüfen.

## Beispiel

Das Promptotyping-Methodik-Repo führt den früheren Lane-Bericht als `snapshots/paper-zfdg-submission-report-2026-07-23.md`. Der Pfad signalisiert die Artefaktklasse, der Scope benennt Paper und Einreichkontext, das Datum fixiert den Stand. Inhaltliche Behauptungen verweisen auf die damaligen Repo-Pfade und Commit-Refs.

## Begriffe

- Report: menschlich kuratierter Projektstatusbericht für einen externen Adressaten, der einen Stand zum festen Zeitpunkt einfriert.
- Audience: der externe Empfänger des Berichts; der Marker, der den Report von allen anderen Promptotyping-Dokumenten unterscheidet.
- Snapshot-Serie: Folge eigenständiger, datierter Reports, deren Scope und Stichtag im Dateinamen sichtbar sind.
- Berichtsgenre: Gattung des Berichts (Zwischenbericht, Abschlussbericht, Stakeholder-Update), die Gewichtung und Lebenszyklus prägt.

## Versionshistorie

- 0.3 (2026-08-21): Naming Contract übernommen. Reports liegen als datierte Snapshots unter `snapshots/` und führen Scope, Funktion und Datum im Dateinamen. Generische `report.md`- und `status.md`-Träger entfallen für neue kuratierte Berichte.
- 0.2 (2026-07-19): Freigabe (status complete), Block-Status auf `snapshot` (neu registriertes Vokabular), Verification-Verweis für außenwirksame Claims. Keine Migrationspflicht für bestehende Repos.
- 0.1 (2026-06-13): Erstfassung, Rationale in der Konvention Report Document.

## Related

- [Konvention Promptotyping Documents](#konvention-v0.1)
- [Vorlage Verification](#promptotyping-document-verification)
- [Vorlage Journal](#promptotyping-document-journal)
- [Vorlage Projekt-Wissensdokument](#promptotyping-document-project)
