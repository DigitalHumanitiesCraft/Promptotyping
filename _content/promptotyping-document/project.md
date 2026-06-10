---
title: Vorlage Projekt-Wissensdokument
slug: project
version: "0.1"
status: complete
source: Vorlage Projekt-Wissensdokument
mirrored: 2026-06-10
machine-url: https://dhcraft.org/Promptotyping/_content/promptotyping-document/project.md
---

# Vorlage Projekt-Wissensdokument

Diese Vorlage strukturiert das zentrale Projekt-Wissensdokument eines Promptotyping-Projekts. Sie ist abstrahiert aus konkreten Projekt-READMEs und überführt deren Strukturlogik in eine wiederverwendbare Form. Das Dokument erklärt die Struktur, dokumentiert die Funktion jedes Abschnitts und stellt am Ende einen befüllbaren Template-Block bereit.

## Geltungsbereich

Die Vorlage eignet sich für das zentrale Wissensdokument eines Projekts, in der Regel eine Datei mit dem Charakter einer README oder eines Projektüberblicks. Sie trägt für Projekte, die mindestens drei Eigenschaften aufweisen:

- Sie verarbeiten oder produzieren ein abgegrenztes Material, etwa Daten, Korpora, Dokumente.
- Sie sind in einen institutionellen, methodologischen oder technischen Kontext eingebettet, der nicht selbsterklärend ist.
- Sie haben definierte Funktionen, deren Beschreibung sich von der Beschreibung dessen unterscheidet, was bewusst nicht geleistet wird.

Die Vorlage trägt nicht für Aufgaben-, Tagebuch- oder Diskussionsdokumente. Für solche Dokumenttypen sind andere Vorlagen sinnvoll. Sie ist auch nicht als Bibliotheks- oder Tool-README gedacht, bei denen Installation und API-Dokumentation im Vordergrund stehen.

## Strukturprinzipien

Drei Prinzipien tragen die Vorlage und sollten bei der Befüllung erhalten bleiben.

Erstens trennt die Struktur konsequent zwischen dem, was das Projekt tut, dem, was es nicht tut, und dem, woher seine Substanz stammt. Diese Dreiteilung verhindert, dass Beschreibung, Selbstüberhöhung und Datenherkunft zu einer ununterscheidbaren Mischung werden.

Zweitens werden Datenherkunft und Standards als strukturelle Hauptbestandteile geführt, nicht als Anhänge. Das spiegelt eine epistemische Haltung, in der Anschlussfähigkeit an externes Wissen Teil der Projektidentität ist.

Drittens enthält die Struktur eine negative Selbstdefinition. Was bewusst nicht geleistet wird, wird genauso explizit benannt wie das, was geleistet wird. Diese Auslassung ist konstitutiv und sollte erhalten bleiben.

## Aufbau im Überblick

Die Vorlage besteht aus Frontmatter und neun Abschnitten, von denen einige obligatorisch und einige kontextabhängig sind.

Obligatorisch:

- Lead
- Datengrundlage (oder „Materialgrundlage" für nicht-datenzentrierte Projekte)
- Worum es geht
- Funktionsumfang
- Lizenz

Stark empfohlen:

- Standards
- Begriffe

Kontextabhängig:

- Übergeordneter Kontext
- Technische Umsetzung
- Abgrenzungen

## Frontmatter-Schema

Das Frontmatter ist der maschinenlesbare Teil des Dokuments und folgt einem festen Schema. Es trägt fünf Felderfamilien.

Identifikation. `title` als menschenlesbarer Titel; `project` als verschachteltes Feld mit `name` und `repository`.

Status und Versionierung. `status` mit Werten wie `active`, `draft`, `archived`; `language` als Sprachcode; `version` als Versionsnummer; `created` und `updated` als Datumswerte im Format `YYYY-MM-DD`.

Verantwortung. `authors` als Liste; `generated-with` als Werkzeugangabe, falls das Dokument LLM-gestützt entstanden ist.

Methodologie. `method` als verschachteltes Feld mit `name` und `url`, das die methodologische Rahmung benennt.

Wissensquellen. `knowledge-sources` als verschachteltes Mapping, das externe Wissensbestände als URI-Referenzen trägt. Die zweite Ebene gruppiert nach Typ (z. B. `institutions`, `standards`, `methods`, `vocabularies`), die dritte Ebene listet jeweils ein menschenlesbares Label als Schlüssel und eine dereferenzierbare URI als Wert.

Das Feld `knowledge-sources` ist das Strukturmerkmal, das die Vorlage von generischen READMEs unterscheidet. Es macht das Dokument LOD-anschlussfähig: Jede aufgelistete Quelle ist durch eine URI eindeutig identifiziert und beim Auflösen direkt erreichbar. Bei Bedarf kann eine URI auch als Namespace zur semantischen Auszeichnung anderer Inhalte des Dokuments verwendet werden.

Topics. Optional, als Wikilinks zu Vault-Konzepten. Beim Identitätsdokument typischerweise sparsam, etwa Scholar-Centered Design oder das überfachliche Forschungsfeld, soweit es das Projekt-Befüllen leitet. Wenn keine eindeutige Verortung trägt, weglassen.

## Abschnitte im Detail

Jeder Abschnitt erfüllt eine spezifische Funktion. Die folgenden Hinweise erklären, was hineingehört und was nicht.

### Lead

Funktion: schnelle Verständigung über die Identität des Projekts. Inhalt: ein bis zwei Sätze, die das Projekt definieren, die Datengrundlage knapp benennen und die zentralen Komponenten der Anwendung auflisten. Kein Marketing-Ton, keine Versprechen. Wer den Lead liest, soll wissen, worum es geht und wo das Material herkommt.

### Datengrundlage

Funktion: epistemische Verantwortung für die Datenbasis explizit machen. Inhalt: Herkunft der Daten, Auswahl- und Erfassungslogik, Charakter der Datenmenge (vollständig oder kuratiert), Abgrenzung der eigenen Leistung gegenüber der Datenproduktion. Verweis auf ein Detaildokument, falls vorhanden. Keine Personennamen, wenn die Datenproduktion institutionell zugeschrieben werden kann.

### Übergeordneter Kontext

Funktion: Verortung des Projekts im Verhältnis zu größeren Rahmen. Inhalt: institutioneller, akademischer oder methodologischer Rahmen, in den das Projekt eingebettet ist; Klärung, ob das Projekt offizieller Bestandteil dieses Rahmens ist oder eine eigenständige Anwendung darauf. Dieser Abschnitt entfällt, wenn das Projekt isoliert steht.

### Worum es geht

Funktion: Motivation und Werte sichtbar machen. Inhalt: Problemstellung, die das Projekt adressiert; Anliegen, die es verfolgt; programmatische Setzung von Prioritäten, falls einschlägig. Hier darf eine sachlich gefasste Wertaussage stehen, etwa „Das Projekt priorisiert X gegenüber Y".

### Standards

Funktion: technische und methodologische Anschlussfähigkeit dokumentieren. Inhalt: Liste der eingesetzten Standards, Vokabulare, Ontologien oder Frameworks, jeweils mit kurzer Funktionszuweisung. Anschließend ein Reflexionsabsatz, der die Wahl begründet und Verzerrungen oder Begrenzungen des Materials benennt.

### Technische Umsetzung

Funktion: Zurechenbarkeit der technischen Arbeit. Inhalt: wer für die Implementation verantwortlich ist, in welchem methodologischen Rahmen sie steht, wie sie sich gegenüber der inhaltlichen Datenproduktion abgrenzt. Knapper Absatz, keine Lebensläufe.

### Funktionsumfang

Funktion: Verständnis der Anwendung selbst. Inhalt: zentrale Designprinzipien und ihre konkrete Umsetzung, in zwei Absätzen. Erster Absatz: Einstieg, Navigation, Datensichten, Filter, Export. Zweiter Absatz: Designhaltung gegenüber Datenabdeckung und Unsicherheit, also wie mit fehlenden Daten und Provenance umgegangen wird. Keine erschöpfende Feature-Liste; UI-Details gehören in ein Detaildokument.

### Abgrenzungen

Funktion: Erwartungen kalibrieren und Begrenzungen als Designentscheidung markieren. Inhalt: Liste dessen, was bewusst nicht geleistet wird, gefolgt von einem Begründungssatz. Die Liste sollte fünf bis acht Punkte umfassen; weniger wirkt zu beiläufig, mehr wirkt verteidigend.

### Begriffe

Funktion: terminologische Kohärenz im Vault. Inhalt: Glossar projektzentraler Begriffe, jeder Eintrag in einem Satz definiert. Begriffe, die nur in einem einzigen Abschnitt vorkommen, gehören nicht ins Glossar; das Glossar ist für Begriffe, die in mehreren Vault-Dokumenten konsistent verwendet werden sollen.

### Lizenz

Funktion: rechtlicher Anker. Inhalt: knapper Verweis auf das eigentliche Lizenzdokument, mit Andeutung der wichtigsten Lizenzlogik (etwa Code-Lizenz und Datenlizenz, falls sie sich unterscheiden). Drei bis vier Sätze reichen; juristische Details liegen im Lizenzdokument.

## Vorlage zum Befüllen

Der folgende Block ist als Template gedacht. Befüllungshinweise stehen als HTML-Kommentare und verschwinden im gerenderten Markdown.

````markdown
---
title: [Dokumenttitel]
project:
  name: [Projektname]
  repository: [Repository-URL]
status: complete
language: [de | en]
version: 0.1
created: [YYYY-MM-DD]
updated: [YYYY-MM-DD]
authors: [Autor 1, Autor 2]
generated-with: [Werkzeug, falls relevant]
method:
  name: [Methodenname]
  url: [Methodendokumentation]
template:
  name: Vorlage Projekt-Wissensdokument
  version: 0.1
  url: https://dhcraft.org/Promptotyping/promptotyping-document/project
  alias: https://dhcraft.org/Promptotyping/#promptotyping-document-project
# topics: ["[[Wissensfeld]]"]  # optional, nur falls eine Verortung das Befüllen leitet
knowledge-sources:
  institutions:
    [Institution]: [URI]
  standards:
    [Standard]: [URI]
---

<!-- Lead: ein bis zwei Sätze. Was ist das Projekt, woher kommen die Daten, welche Komponenten gehören dazu. -->

[Lead-Absatz]

## Datengrundlage

<!-- Herkunft der Daten, Auswahllogik, Charakter der Datenmenge, Abgrenzung der eigenen Leistung. Verweis auf Detaildokument. Keine Personennamen, wenn Institutionen tragen. -->

[...]

## Übergeordneter Kontext

<!-- Optional. Nur wenn größerer Rahmen besteht. Klärung, ob offizieller Bestandteil oder eigenständig. -->

[...]

## Worum es geht

<!-- Problemstellung, Anliegen, programmatische Prioritäten. -->

[...]

## Standards

<!-- Liste der Standards mit Funktionszuweisung, danach Reflexionsabsatz. -->

Die technische Anschlussfähigkeit folgt etablierten Standards:

- [Funktion]: [Standard mit Kurzbeschreibung]
- [Funktion]: [Standard mit Kurzbeschreibung]

[Reflexionsabsatz]

## Technische Umsetzung

<!-- Optional. Verantwortliche, methodologische Rahmung, Abgrenzung gegenüber inhaltlicher Arbeit. -->

[...]

## Funktionsumfang

<!-- Erster Absatz: Designprinzipien und konkrete Funktionen. Zweiter Absatz: Umgang mit Datenabdeckung und Unsicherheit. -->

[Erster Absatz]

[Zweiter Absatz]

## Abgrenzungen

<!-- Optional, aber empfohlen. Fünf bis acht Negationen, gefolgt von Begründungssatz. -->

Das Projekt leistet nicht:

- [Negativaussage]
- [Negativaussage]

[Begründungssatz]

## Begriffe

<!-- Glossar projektzentraler Begriffe, vault-übergreifend konsistent. -->

- [Begriff]: [Definition].
- [Begriff]: [Definition].

## Lizenz

<!-- Drei bis vier Sätze, Verweis auf [[license]] oder Äquivalent. -->

[...]
````

## Anwendung als Prompt-Template

Die Vorlage kann in einem Promptotyping-Workflow auf zwei Weisen eingesetzt werden.

Erstens als Strukturanker im Preparation-Schritt. Das LLM erhält den Template-Block als Kontext und wird gebeten, die Abschnitte auf Basis bereits vorhandener Materialien (Notizen, Skizzen, Vorgespräche) zu befüllen. Die HTML-Kommentare im Template fungieren dabei als implizite Befüllungsregeln.

Zweitens als Review-Folie für ein bestehendes Dokument. Ein vorhandenes Projektdokument wird gegen die Vorlage gehalten, um zu prüfen, welche Abschnitte fehlen, welche überflüssig sind und welche stilistisch nicht zur Struktur passen.

In beiden Fällen sollte das Befüllen iterativ erfolgen. Ein einmaliges Generieren des gesamten Dokuments aus einem Prompt führt erfahrungsgemäß zu oberflächlichen Befüllungen, weil die einzelnen Abschnitte unterschiedliche Quellen benötigen. Sinnvoller ist eine abschnittsweise Befüllung mit gezielten Rückfragen.

## Begriffe

- Wissensdokument: ein im Promptotyping-Sinn verdichtetes, vault-internes Markdown-Dokument, das Kontext für die Weiterarbeit mit einem LLM bereitstellt.
- Frontmatter: der maschinenlesbare YAML-Block am Anfang eines Markdown-Dokuments, der strukturierte Metadaten trägt.
- knowledge-sources: Frontmatter-Feld, das externe Wissensquellen als URI-Mapping aggregiert, gruppiert nach Quellentyp.
- Negative Selbstdefinition: bewusste, explizite Aufzählung dessen, was ein Projekt nicht leistet, als Teil der Projektbeschreibung.
- Geltungsbereich: Bedingungen, unter denen eine Vorlage trägt; Abgrenzung gegenüber Anwendungsfällen, für die andere Strukturen geeigneter sind.

## Lizenz

Die Vorlage steht unter der Lizenz des umgebenden Vaults oder Projekts und kann frei angepasst werden. Lizenzhinweise zu konkreten Projekten, die diese Vorlage einsetzen, gehören in das jeweilige Projektdokument.
