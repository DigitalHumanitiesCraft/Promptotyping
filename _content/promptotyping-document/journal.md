---
title: Vorlage Journal
slug: journal
version: "0.1"
status: complete
source: Vorlage Journal
mirrored: 2026-06-10
machine-url: https://dhcraft.org/Promptotyping/_content/promptotyping-document/journal.md
---

# Vorlage Journal

Diese Vorlage strukturiert das Process-Dokument einer Promptotyping-Wissensbasis. Das resultierende Dokument heißt typischerweise `journal.md` und liegt im `knowledge/`-Ordner des Repos. Es hält den Arbeitsverlauf als zusammenhängende Erzählung der Promptotyping-Iterationen fest und ist die einzige Stelle, an der Entscheidungs-Genese und Sackgassen dokumentiert sind.

## Geltungsbereich

Die Vorlage trägt für jedes Promptotyping-Repo, weil die Genese-Funktion in der [Konvention Promptotyping Documents](#konvention-v0.1) als immer-relevant geführt wird. Sie trägt nicht für reine Veröffentlichungs-Repos ohne aktive Entwicklung — dort ist ein Journal nachträglich rekonstruiert wertlos. Sie trägt auch nicht für Sitzungsprotokolle oder Meeting-Mitschriften; das sind andere Dokumenttypen.

## Funktion des Dokuments

Das Journal ist die Process-Schicht der Wissensbasis. Es beantwortet "wie haben wir uns hierhin gearbeitet, welche Sackgassen sind dokumentiert, welche Entscheidungen wuchsen aus welchem Kontext". Adressiert ist primär der Projekt-Verantwortliche, der nach Wochen zurückkommt, und der Coding-Agent, der eine Session ohne Verlust an Kontext fortsetzen soll. Das Journal trägt die Genese; das Ergebnis liegt in den anderen Dokumenten.

## Strukturprinzipien

Drei Prinzipien tragen das Dokument.

Erstens werden Einträge nicht im Nachhinein umgeschrieben. Wenn eine spätere Erkenntnis zeigt, dass eine frühere Entscheidung falsch war, wird nicht der alte Eintrag geändert, sondern ein neuer Eintrag mit Verweis auf den alten korrigiert. Das Journal ist die einzige Wissensquelle, in der alte Stände verfügbar bleiben — ohne diese Eigenschaft verliert es seinen Process-Charakter.

Zweitens dokumentiert das Journal Sackgassen mit Begründung. Was versucht und verworfen wurde, ist genauso wertvoll wie was umgesetzt wurde — Sackgassen verhindern, dass spätere Sessions denselben Pfad noch einmal gehen. Eine Sackgasse ohne Begründung ist eine vergessene, keine dokumentierte.

Drittens trennt das Journal Genese von Ergebnis. Was am Ende einer Session steht, gehört nicht ins Journal, sondern in `specification.md` oder `architecture.md`. Was am Anfang stand und welche Schritte zum Ergebnis führten, gehört ins Journal. Diese Trennung verhindert Doppelpflege.

## Frontmatter-Schema

Das Journal folgt dem Frontmatter-Schema aus der [Konvention Promptotyping Documents](#konvention-v0.1) (Pflichtkern: `title, project, method, status, created, updated`). Spezifisch für das Journal:

- `topics:` entfällt typischerweise. Das Journal ist Process-Dokument und trägt keine domänen-thematische Verortung; die thematischen Topics leben in den Knowledge-Geschwistern.
- `related:` listet typischerweise `project`, `specification` und gegebenenfalls `decisions`, weil diese Dokumente die im Journal dokumentierte Genese als Ergebnis tragen.
- `knowledge-sources:` entfällt — das Journal trägt keine externen Anschlüsse.
- `updated:` wird bei jedem neuen Eintrag aktualisiert; das Feld ist eines der am häufigsten geänderten in der Wissensbasis.

## Abschnitte im Detail

### Lead

Funktion: in zwei bis drei Sätzen klar machen, was das Journal dokumentiert und was nicht. Inhalt: Charakter als Erzählung der Iterationen, ausdrückliche Negation der Vollständigkeit (einzelne Commits stehen in der Git-History, nicht im Journal), Adressatenkreis. Der Lead positioniert das Journal gegen Git-Log und Sessionprotokoll: es ist weder das eine noch das andere.

### Einträge

Funktion: chronologische Dokumentation des Arbeitsverlaufs. Inhalt: pro Eintrag ein Datum als Heading (`### YYYY-MM-DD Sessiontitel`), darunter Ziel, Verlauf, Ergebnis, Dead Ends. Reihenfolge der Einträge: neueste zuerst oder älteste zuerst — entscheidend ist Konsistenz innerhalb des Journals. Bei langen Projekten kann eine Aggregierung zu monatlichen Zwischenüberschriften die Lesbarkeit verbessern.

Pro Eintrag:

- Datum (kein Uhrzeit-Zusatz, weil Sessions nicht stundengenau geführt werden).
- Ziel der Session in einem Satz.
- Verlauf in zwei bis vier Absätzen Prosa. Was tatsächlich passiert ist, nicht was geplant war.
- Ergebnis in einem Absatz. Was steht am Ende, was ist offen.
- Dead Ends optional. Was wurde versucht und verworfen, mit Begründung.

### Aggregations-Sektionen

Funktion: bei langen Journalen die Lesbarkeit erhalten. Inhalt: Zwischenüberschriften, die mehrere Einträge bündeln (`## Mai 2026`, `## Phase 1: Datenmodellierung`). Wann sinnvoll: ab etwa zwanzig Einträgen oder wenn das Journal sich in inhaltlich abgrenzbare Phasen teilen lässt. Bei kürzeren Journalen entfällt die Sektion.

## Was nicht reingehört

- Spezifikation. Was am Ende einer Session entschieden wurde, gehört in die Decisions-Sektion von `specification.md`, nicht ins Journal.
- Stundengenaue Sessionprotokolle. Das Journal verdichtet, es protokolliert nicht.
- Persönliche Notizen oder Stimmungsbilder. Das Journal ist Repo-Substrat, nicht Tagebuch.
- Code-Diffs oder Commit-Messages. Diese liegen in der Git-History; das Journal verweist gegebenenfalls auf Commits, kopiert sie aber nicht.

## Vorlage zum Befüllen

Der folgende Block ist als Template gedacht.

````markdown
---
title: Journal
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
  name: Vorlage Journal
  version: 0.1
  url: https://dhcraft.org/Promptotyping/promptotyping-document/journal
  alias: https://dhcraft.org/Promptotyping/#promptotyping-document-journal
related: [project, specification]
---

<!-- Lead: zwei bis drei Sätze. Was das Journal dokumentiert, was nicht. Negation gegen Git-Log und Sessionprotokoll. -->

[Lead-Absatz]

## Einträge

<!-- Reihenfolge: neueste zuerst oder älteste zuerst, konsistent halten. Pro Eintrag: Datum, Ziel, Verlauf, Ergebnis, Dead Ends optional. -->

### YYYY-MM-DD Sessiontitel

Ziel. [Ein Satz.]

Verlauf. [Zwei bis vier Absätze Prosa. Was tatsächlich passiert ist, nicht was geplant war.]

Ergebnis. [Ein Absatz. Was steht am Ende, was ist offen.]

Dead Ends. [Optional. Was versucht und verworfen wurde, mit Begründung.]

### YYYY-MM-DD Vorheriger Sessiontitel

[...]
````

## Anwendung als Prompt-Template

Strukturanker pro Session. Am Ende einer Arbeitssession trägt der Agent oder der menschliche Bearbeiter einen neuen Eintrag ein. Beim Wiederaufnehmen einer Session liest der Agent zuerst den letzten Journal-Eintrag, um den Stand zu erfassen, bevor er andere Dokumente konsultiert. Das Journal ist die wichtigste Form von Process-Memory in der Wissensbasis (Context Engineering, siehe Glossar).

Review-Folie für ein bestehendes Journal. Ein vorhandenes Journal wird gegen die Vorlage gehalten, um zu prüfen, ob die Einträge die geforderte Struktur (Ziel, Verlauf, Ergebnis, Dead Ends) tragen, ob die chronologische Reihenfolge konsistent ist, und ob spätere Korrekturen als neue Einträge mit Verweis stehen statt als Edits am alten.

## Beispiel

HerData führt ein Journal, das die Promptotyping-Iterationen als zusammenhängende Erzählung verdichtet. Charakteristisch ist der erste Satz nach dem Lead: "Es ist keine vollständige Session-Chronik — einzelne Commits stehen in der Git-History — sondern ein lesbarer Rückblick." Diese Negation positioniert das Journal explizit gegen Git-Log und gibt dem Leser den richtigen Erwartungshorizont.

## Begriffe

- Eintrag: einzelne datierte Einheit im Journal, deckt eine Session oder eine inhaltlich abgegrenzte Phase ab.
- Dead End: dokumentierter Versuch, der nicht zum Ziel führte, mit Begründung warum er verworfen wurde.
- Process-Memory: Eigenschaft eines Dokuments, vergangene Arbeitsstände auch nach späteren Korrekturen lesbar zu halten — die definierende Eigenschaft eines Journals.

## Related

- [Vorlage Projekt-Wissensdokument](#promptotyping-document-project)
- [Vorlage Specification](#promptotyping-document-specification)
- [Konvention Promptotyping Documents](#konvention-v0.1)
