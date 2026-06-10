---
title: Vorlage Datengrundlage
slug: data
version: "0.1"
status: complete
source: Vorlage Datengrundlage
mirrored: 2026-06-10
machine-url: https://dhcraft.org/Promptotyping/_content/promptotyping-document/data.md
---

# Vorlage Datengrundlage

Diese Vorlage strukturiert das Material-Dokument einer Promptotyping-Wissensbasis. Das resultierende Dokument heißt typischerweise `data.md` (alternativ `material.md` oder `corpus.md`, je nach Projektsprache) und liegt im `knowledge/`-Ordner des Repos. Es trägt die epistemische Verantwortung für das verarbeitete oder produzierte Material.

Diese Fassung (v0.1, 2026-05-09) ist auf Basis einer Querschau durch 19 reale `data.md` aus den aktiven Promptotyping-Repos entwickelt. Sie unterscheidet vier Pflichtsektionen von sechs optionalen Sektionen mit Triggerkriterium.

## Geltungsbereich

Die Vorlage trägt, sobald das Projekt Daten verarbeitet oder produziert. Bei reinen Tool-, Bibliotheks- oder Methoden-Repos entfällt sie; das Identitätsdokument trägt die Materialgrundlage dann selbst in einer kompakten Sektion. Die Vorlage trägt nicht für API-Dokumentationen, Datenbankschema-Beschreibungen ohne Inhaltsbezug oder Datenbeispiele ohne Provenienz.

Sie trägt sowohl für Repos, die eigene Daten produzieren (HerData, klawiter-rescue, notker-edition, sugw-Edition), als auch für Repos, die fremde Datensätze nur als Input nehmen (wiiw-figaro-nam, vetmed-berichtswesen, objekt-bestimmung-workshop). Die optionalen Sektionen unterscheiden die Fälle.

## Funktion des Dokuments

Das Dokument beantwortet "was sind die Daten, woher kommen sie, wie sind sie modelliert, wo hört das Material auf zu tragen". Adressiert sind drei Lesergruppen: ein Reviewer, der die Datenqualität beurteilen will; ein Coding-Agent, der die Daten verarbeiten oder transformieren soll; ein Domänenexperte, der die Auswahllogik nachvollziehen will. Das Dokument ist epistemisch verantwortlich — es macht transparent, was die Daten leisten und was nicht.

## Strukturprinzipien

Drei Prinzipien tragen das Dokument.

Erstens trennt es Datenproduktion von Datenverarbeitung. Wer die Daten erfasst hat (Institution, Editionsteam, externe Quelle) trägt eine andere Art von Autorschaft als wer sie hier verarbeitet — diese Trennung muss explizit benannt werden. Die eigene Leistung gegenüber der Datenproduktion abzugrenzen ist eine Grundregel, kein Höflichkeitsgestus.

Zweitens praktiziert das Dokument negative Selbstdefinition. Was bewusst nicht geleistet wird oder nicht abgedeckt ist, wird genauso explizit benannt wie das, was geleistet wird. Diese Auslassung ist konstitutiv und trägt die Sektion `Grenzen`.

Drittens steht im Dokument keine konkrete Zahl, die sich beim nächsten Datenexport ändert. Coverage-Werte, Datensatzgrößen und Verteilungs-Statistiken liegen in der Anwendung selbst (im `persons.json#meta` oder vergleichbar) und in den Stat-Cards der Hauptansichten. Das Dokument verweist auf diese Quellen, dupliziert sie nicht.

## Frontmatter-Schema

Das Dokument folgt dem Frontmatter-Schema aus der [Konvention Promptotyping Documents](#konvention-v0.1) (Pflichtkern: `title, project, method, status, created, updated`). Spezifisch für die Datengrundlage:

- `topics:` typisch sind Verweise auf Wissensfelder wie Data Modelling, Normdata, Controlled Vocabularies. Bei Editions-Repos zusätzlich TEI, Prosopography o.ä. Sie verorten den Agenten in den Wissensfeldern, die für Materialdokumentation tragen.
- `knowledge-sources:` ist hier zentral und sollte gepflegt sein. Mindestens `institutions:` (datenproduzierende Institutionen mit URI) und `standards:` (eingesetzte Datenstandards, Vokabulare, Ontologien mit URI). Optional `vocabularies:` für kontrollierte Vokabulare und `datasets:` für referenzierte externe Datensätze.
- `related:` typischerweise `project`, `architecture`, `specification` — die drei Dokumente, die auf die Datengrundlage aufbauen.
- `updated:` wird bei jedem neuen Datenexport aktualisiert.

## Sektionsstruktur

Vier Pflichtsektionen, sechs optionale Sektionen mit Triggerkriterium. Optionale Sektionen, die nicht zutreffen, werden weggelassen, nicht leer geführt.

```
PFLICHT:    Gegenstand → Quellen → Modell → Grenzen
OPTIONAL:   Normdaten und Anschlüsse
            Verzerrungen
            Provenance pro Wert
            Verhältnis zur externen Datenquelle
            Workflow
            Beispiele
```

## Pflichtsektionen

### Gegenstand

Funktion: was ist das Material überhaupt. Definition: knappe inhaltliche Charakterisierung dessen, was die Daten beschreiben — der historisch-wissenschaftliche Gegenstand, nicht das Format. Eine bis drei Sätze. Beantwortet die Frage, worüber geredet wird, bevor über Strukturen geredet wird. Trägt nicht: Datenformat, Pipeline, Bewertung.

### Quellen

Funktion: woher kommt das Material. Definition: pro Quelle Herkunft, Erfassungslogik, Lizenz, Provenienz, Erfassungszeitraum. Bei mehreren Quellen wird die Beziehung zwischen ihnen erklärt — etwa "Quelle A liefert die Personenliste, Quelle B liefert die Briefmetadaten, Verknüpfung über GND-Identifier". Personenbezogene Erfassung wird in Institutionen-Sprache gesetzt, nicht mit Personennamen; wenn ein Bearbeiterinnen-Team namentlich anerkannt werden soll, geschieht das im eigenen Dokument oder in einer Anerkennungs-Sektion am Ende, nicht im Quellen-Block. Trägt nicht: eigene Bearbeitungslogik.

### Modell

Funktion: wie ist das Material strukturiert. Definition: die Hauptentitäten und ihre Relationen, die Schemata oder Annotationsebenen, kontrollierte Vokabulare. Bei eigener Datenproduktion das semantische Modell der erzeugten Daten (JSON-Schema, RDF-Vokabular). Bei standardgebundener Auszeichnung die Annotationsebenen und Schema-Constraints (TEI-Elemente, RelaxNG-Constraints, ODD-Mismatches mit dem Korpus). Bei externen Datenlieferungen die gelieferte Struktur (Spalten, Typen, Hive-Partitionierung). Verweis auf Schema-Dateien im Repo als Source of Truth — das Dokument paraphrasiert das Schema, ersetzt es nicht. Trägt nicht: Pipeline-Schritte, UI-Logik, Implementations-Details.

### Grenzen

Funktion: was leistet das Material nicht. Definition: was nicht abgedeckt ist und warum. Lücken, Auslassungen, strukturelle Beschränkungen, geschlossene Bestände, nicht digitalisierte Teile, bewusste Selektion. Qualitativ formuliert, nicht in Prozentzahlen — konkrete Coverage-Werte gehören in den `meta`-Block der Datendatei und in die Stat-Cards der Anwendung. Beantwortet, wo das Material aufhört zu tragen. Trägt nicht: Verzerrungen (das ist die optionale Sektion `Verzerrungen`); konkrete Coverage-Zahlen.

## Optionale Sektionen

### Normdaten und Anschlüsse

Trigger: Material verwendet externe Identifier (GND, Wikidata, GeoNames, AGRELON, VIAF, ORCID, IIIF, DOI). Funktion: externe Anschlüsse offenlegen. Definition: welche Identifier-Systeme das Material an externes Wissen anschließen, wie sie eingebunden sind, welche Coverage qualitativ erreicht wird ("vollständig", "lückenhaft", "selektiv"). Verlinkung auf die offiziellen Dokumentationen der Normdaten-Systeme. Bei reinen Editionsdaten ohne Normdaten-Anbindung entfällt die Sektion.

### Verzerrungen

Trigger: Material trägt erkennbare systematische Schiefen, die für die Interpretation relevant sind. Funktion: systematische Schiefen explizit machen. Definition: zwei bis fünf benannte Verzerrungen mit Begründung — etwa "Map Bias: Geodaten konzentrieren sich auf Mitteleuropa, weil die Quelle institutionell dort verankert ist", "Genderverzerrung: Frauen unterrepräsentiert, weil die Quellgrundlage Goethe-zentriert ist", "Sprachbias: deutschsprachige Sekundärliteratur überproportional präsent, weil Sammelschwerpunkt der Bibliothek". Eine Verzerrung ohne Begründung ist eine Vermutung; eine begründete ist eine Designentscheidung. Bei standardisierten Datensätzen ohne erkennbare Schiefen oder bei rein technischen Datenbeständen entfällt die Sektion.

Abgrenzung zu `Grenzen`: `Grenzen` benennt strukturelle Auslassungen ("Zeitraum 1418–1447 ist nicht ausgewertet"), `Verzerrungen` benennt asymmetrische Abdeckungen innerhalb des erfassten Materials ("innerhalb der erfassten Personen sind Frauen mit beruflichen Netzwerken zu Männern überrepräsentiert").

### Provenance pro Wert

Trigger: Werte entstehen mehrstufig — durch Regex, LLM, manuelle Annotation, KI-Korrektur oder Hybrid-Verfahren. Funktion: die Extraktionsspur pro Wert dokumentieren, sodass ein Critical-Expert-Reviewer entscheiden kann, was er prüft. Definition: pro Feldgruppe die Extraktionsmethode (regex / llm / manuell / missing) und qualitative Coverage-Aussage, ohne konkrete Prozentzahlen. Verweis auf maschinell generierte Quality-Report-Datei oder Debug-JSON im Repo als Source of Truth. Bei Daten aus einer einzigen verlässlichen Quelle (Excel-Lieferung, einzelner Export) entfällt die Sektion.

### Verhältnis zur externen Datenquelle

Trigger: Daten werden geliefert, nicht erzeugt. Das Repo nimmt fremde Daten als Input und verändert sie nicht zurück. Funktion: das Verhältnis zur Quelle markieren. Definition: in welcher Form geliefert (Excel, Parquet, RDS, REST-API), was bewusst nicht getan wird (keine Modifikation, kein Edit-Pfad, kein Re-Upload, kein localStorage-Edit), wo die Source of Truth bleibt (Sammlungsmanagementsystem, externe API, Lieferdatei). Bei Repos mit eigener Datenproduktion entfällt die Sektion.

### Workflow

Trigger: Pipeline transformiert die Quelle zu einer Anwendungsdatei. Funktion: den Weg von der Quelle zur Anwendungsdatei dokumentieren. Definition: knapp die Pipeline-Stufen (Import, Bereinigung, Verknüpfung, Export) mit Verweis auf die Skripte im Repo. Nicht die Implementation des Workflows beschreiben — das gehört in `architecture.md`. Bei reinen Lese-Repos ohne Transformation entfällt die Sektion.

### Beispiele

Trigger: das Datenmodell ist ohne konkretes Beispiel schwer greifbar. Funktion: das Datenmodell konkret machen. Definition: ein bis drei kompakte Records (JSON, XML, RDF, je nach Format) im Codeblock, die das Modell exemplarisch zeigen. Die Beispiele sind aus den realen Daten gewählt, nicht erfunden. Bei sehr einfachen Datenmodellen, die im `Modell`-Abschnitt selbsterklärend dargestellt sind, entfällt die Sektion.

## Was nicht in das Dokument gehört

- Konkrete Coverage-Zahlen, Datensatzgrößen, Verteilungs-Statistiken. Diese liegen in der Anwendung und im Meta-Block der Datendatei, nicht im Dokument.
- Pipeline-Implementation. Wie der Workflow gebaut ist, gehört in `architecture.md`.
- UI-Logik. Wie die Daten angezeigt werden, gehört in `specification.md` oder `design.md`.
- Forschungsergebnisse. Was die Daten inhaltlich zeigen, ist Sache der Veröffentlichungen, nicht der Datengrundlage.

## Vorlage zum Befüllen

Der folgende Block ist als Template gedacht. Optionale Sektionen, die nicht zutreffen, werden vor dem Commit gelöscht — nicht leer gelassen.

````markdown
---
title: Daten
project:
  name: [Projektname]
  repository: [Repository-URL]
status: complete
language: [de | en]
version: [Repo-Schema-Version]
created: [YYYY-MM-DD]
updated: [YYYY-MM-DD]
authors: [Autor 1, Autor 2]
generated-with: [Werkzeug, falls relevant]
method:
  name: Promptotyping
  url: https://lisa.gerda-henkel-stiftung.de/digitale_geschichte_pollin
template:
  name: Vorlage Datengrundlage
  version: 0.1
  url: https://dhcraft.org/Promptotyping/promptotyping-document/data
  alias: https://dhcraft.org/Promptotyping/#promptotyping-document-data
topics: ["[[Data Modelling]]", "[[Normdata]]", "[[Controlled Vocabularies]]"]
knowledge-sources:
  institutions:
    [Institution]: [URI]
  standards:
    [Standard]: [URI]
related: [project, architecture, specification]
---

## Gegenstand

<!-- Eine bis drei Sätze. Was beschreibt das Material inhaltlich. Historisch-wissenschaftlicher Gegenstand, nicht Format. Keine Zahlen. -->

[...]

## Quellen

<!-- Pro Quelle: Herkunft, Erfassungslogik, Lizenz, Provenienz, Erfassungszeitraum. Bei mehreren Quellen die Beziehung zwischen ihnen. Personen in Institutionen-Sprache. -->

[...]

## Modell

<!-- Hauptentitäten, Relationen, Annotationsebenen oder gelieferte Struktur. Verweis auf Schema-Datei als Source of Truth, paraphrasieren statt ersetzen. -->

[...]

## Grenzen

<!-- Was nicht abgedeckt ist und warum. Strukturelle Auslassungen, geschlossene Bestände, bewusste Selektion. Qualitativ, keine Prozentzahlen. -->

[...]

<!-- ============================================================ -->
<!-- OPTIONALE SEKTIONEN — vor dem Commit nicht zutreffende löschen -->
<!-- ============================================================ -->

## Normdaten und Anschlüsse

<!-- Trigger: externe Identifier verwendet (GND, Wikidata, GeoNames, AGRELON, VIAF, ORCID, IIIF). -->

[...]

## Verzerrungen

<!-- Trigger: Material trägt systematische Schiefen, die interpretationsrelevant sind. Zwei bis fünf, je mit Begründung. -->

- [Verzerrung]: [Begründung].

## Provenance pro Wert

<!-- Trigger: Werte entstehen mehrstufig (regex, LLM, manuell, KI-korrigiert). Pro Feldgruppe die Extraktionsmethode. Verweis auf Quality-Report. -->

[...]

## Verhältnis zur externen Datenquelle

<!-- Trigger: Daten werden geliefert, nicht erzeugt. In welcher Form geliefert, was nicht getan wird, wo die Source of Truth bleibt. -->

[...]

## Workflow

<!-- Trigger: Pipeline transformiert Quelle zu Anwendungsdatei. Knapp die Stufen, Verweis auf Skripte. Implementation gehört in architecture.md. -->

[...]

## Beispiele

<!-- Trigger: Datenmodell ist ohne konkretes Beispiel schwer greifbar. Ein bis drei reale Records im Codeblock. -->

```json
[...]
```
````

## Anwendung als Prompt-Template

Strukturanker beim Aufsetzen der Datengrundlage. Der Agent erhält den Template-Block und befüllt ihn iterativ aus den Quelldokumenten — Lizenztexte, Schema-Dateien, README der Datenherkunft. Vor dem ersten Befüllen entscheidet der Agent pro optionaler Sektion anhand des Triggers, ob sie trägt; nicht zutreffende werden gelöscht. Die Sektion `Verzerrungen`, falls sie trägt, verlangt Domänenexpertise und sollte vom Critical Expert verifiziert werden (siehe Glossar-Eintrag Critical-Expert-in-the-Loop).

Review-Folie für eine bestehende Datengrundlage. Ein vorhandenes `data.md` wird gegen die Vorlage gehalten, um zu prüfen, ob die vier Pflichtsektionen tragen, ob `knowledge-sources:` im Frontmatter gepflegt ist, ob keine konkreten Zahlen aus der Anwendung dupliziert werden, ob optionale Sektionen ihren Trigger erfüllen und Sektionen ohne Trigger nicht aus Reflex mitgeschleppt werden.

## Genrebeispiele aus der Praxis

HerData (eigene Datenproduktion mit Normdaten-Anbindung). Trägt: Gegenstand, Quellen, Modell, Grenzen, Normdaten und Anschlüsse, Verzerrungen, Provenance pro Wert, Workflow, Beispiele. Charakteristisch ist die explizite Map-Bias-Sektion, die in der Anwendung selbst (Onboarding-Schritt MapBias) sichtbar gemacht wird. `knowledge-sources` führt Goethe- und Schiller-Archiv und PROPYLÄEN als Institutionen, CMIF, GND, GeoNames und AGRELON als Standards.

notker-edition / sugw-Edition (standardgebundene Editionsdaten). Trägt: Gegenstand, Quellen, Modell (mit Annotationsebenen und Schema-Constraints im Modell-Abschnitt), Grenzen, Normdaten und Anschlüsse (IIIF, GND), Beispiele. `Verhältnis zur externen Datenquelle` und `Provenance pro Wert` entfallen — es gibt eine eigene editorische Datenproduktion.

vetmed-berichtswesen / objekt-bestimmung-workshop (externe Datenquelle als Input). Trägt: Gegenstand, Quellen, Modell (gelieferte Struktur), Grenzen, Verhältnis zur externen Datenquelle, Workflow, Beispiele. `Normdaten und Anschlüsse` und `Verzerrungen` entfallen typischerweise.

klawiter-rescue (mehrstufige Daten-Rekonstruktion). Trägt: alle vier Pflichtsektionen, dazu Normdaten und Anschlüsse, Verzerrungen, Provenance pro Wert, Workflow, Beispiele. Das volle Programm — `Provenance pro Wert` ist hier zentral, weil Werte aus Regex, LLM und Wikidata-Reconciliation kombiniert sind.

## Begriffe

- Material: das verarbeitete oder produzierte Substrat eines Promptotyping-Projekts. Daten, Korpus, Dokumentensammlung, Bildbestand.
- Grenzen: was das Material strukturell nicht abdeckt — geschlossene Bestände, nicht digitalisierte Teile, bewusste Selektion.
- Verzerrung: systematische Schiefe innerhalb des erfassten Materials, die durch die Erfassungs- oder Auswahllogik der Quelle bedingt ist.
- Provenienz: Herkunfts- und Bearbeitungsgeschichte einer Datenquelle, einschließlich der Institutionen und Personen, die sie produziert haben.
- Provenance pro Wert: feinkörnige Extraktionsspur pro Datenfeld, die festhält, durch welche Methode (regex, LLM, manuell, KI-korrigiert) ein Wert in das Datenset gelangt ist.
