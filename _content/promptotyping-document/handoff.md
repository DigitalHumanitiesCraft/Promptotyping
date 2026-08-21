---
title: Vorlage Handoff
slug: handoff
version: "0.1"
status: complete
source: Vorlage Handoff
mirrored: 2026-08-21
machine-url: https://dhcraft.org/Promptotyping/_content/promptotyping-document/handoff.md
---
# Vorlage Handoff

Diese Vorlage strukturiert die verpflichtende Process Inbox eines Promptotyping-Projekts. Das resultierende Dokument heißt `handoff.md`, liegt im `knowledge/`-Ordner und führt ausschließlich offene Übergabepunkte. Ein leerer Zustand bleibt als gültige Inbox bestehen.

## Geltungsbereich

Die Vorlage trägt für jedes Promptotyping-Projekt. `knowledge/handoff.md` entsteht beim Repo-Setup, führt dauerhaft `status: active` und wird bei jedem Sessionstart nach dem Action-Layer und `knowledge/INDEX.md` gelesen. Das Dokument bleibt am Projektende als leere Inbox bestehen oder wird mit der gesamten Wissensbasis archiviert.

Datierte außergewöhnliche Übergaben können zusätzlich als `<scope>-handoff-YYYY-MM-DD.md` unter `handoffs/` liegen. Sie dokumentieren einen eingefrorenen Übergabestand und ersetzen die Process Inbox nicht. Dauerhafte Research-to-Operations-Kontrakte folgen [Vorlage Integration](#promptotyping-document-integration).

## Funktion des Dokuments

Das Handoff-Dokument beantwortet, welche übernommenen Deltas noch geprüft, integriert oder verworfen werden müssen. Die Anwesenheit eines Punkts bedeutet offen. Quelle und aktuelles Ziel werden vor jeder Nutzung geprüft.

## Strukturprinzipien

Erstens führt die Inbox ausschließlich offene Punkte. Ein Punktstatus und eine Closed-Sektion würden denselben Zustand doppelt kodieren und entfallen.

Zweitens besitzt jeder Punkt genau die Pflichtfelder `Received`, `Source`, `Target` und `Context`. `Evidence`, `Next action`, `Blocker` und `Operator point` werden nur geführt, wenn sie Inhalt tragen. Leere optionale Felder werden gelöscht.

Drittens integriert die Bearbeitung dauerhaften Inhalt zuerst in das zuständige Declarative oder Action Document. Danach erhält `knowledge/journal.md` einen knappen Nachweis mit Gegenstand, Quelle, Ziel und Ergebnis oder Verwerfungsgrund. Der bearbeitete Punkt wird anschließend vollständig entfernt.

## Frontmatter-Schema

Der Template-Block verwendet den Pflichtkern aus [Konvention Promptotyping Documents](#konvention-v0.1). Der Status ist immer `active`. Zusätzliche empfohlene Felder der Konvention dürfen ergänzt werden; ein verpflichtendes `function:`-Feld wird nicht eingeführt.

## Abschnitte im Detail

### Lead

Der Lead benennt die Inbox-Funktion und die Verarbeitungsreihenfolge. Er hält fest, dass Quelle und aktuelles Ziel geprüft, dauerhafte Inhalte integriert, das Journal nachgezogen und erledigte Punkte entfernt werden.

### Offene Handoff-Punkte

Die Sektion enthält entweder den exklusiven Empty State „Keine offenen Handoff-Punkte.“ oder einen oder mehrere offene Punkte. Für einen Punkt wird der Empty State entfernt. Nach Bearbeitung des letzten Punkts wird er wieder eingesetzt.

## Was nicht reingehört

- Dauerhaftes Sachwissen, Spezifikationen oder Handlungsregeln. Sie liegen im zuständigen Declarative oder Action Document.
- Angenommene Zukunftsarbeit. Sie liegt in `plan.md`.
- Erledigte Punkte, Punktstatus und Closed-Sektionen. Den Nachweis führt `journal.md`, frühere Wortlaute bewahrt Git.
- Datierte außergewöhnliche Übergabe-Snapshots. Sie liegen unter `handoffs/`.
- Dauerhafte Schnittstellen- und Research-to-Operations-Kontrakte. Sie folgen der Integration-Funktion.

## Vorlage zum Befüllen

````markdown
---
title: Handoff
project:
  name: [Projektname]
  repository: [Repository-URL]
method:
  name: Promptotyping
  url: https://lisa.gerda-henkel-stiftung.de/digitale_geschichte_pollin
status: active
created: [YYYY-MM-DD]
updated: [YYYY-MM-DD]
---

# Handoff

Diese Process Inbox führt ausschließlich offene Übergabepunkte. Prüfe vor der Nutzung die Quelle und das aktuelle Ziel. Integriere dauerhaften Inhalt in das zuständige Declarative oder Action Document, dokumentiere Gegenstand, Quelle, Ziel und Ergebnis oder Verwerfungsgrund knapp in `knowledge/journal.md` und entferne den bearbeiteten Punkt anschließend vollständig.

## Offene Handoff-Punkte

Keine offenen Handoff-Punkte.

<!--
### [Kurzer Gegenstand]

- Received: [YYYY-MM-DD]
- Source: [Repo, Lane, Dokument oder Nachricht mit überprüfbarem Verweis]
- Target: [aktuelles Declarative oder Action Document]
- Context: [für Prüfung und Integration erforderlicher Zusammenhang]
- Evidence: [optional]
- Next action: [optional]
- Blocker: [optional]
- Operator point: [optional]
-->
````

## Anwendung als Prompt-Template

Beim Repo-Setup wird der Block als `knowledge/handoff.md` angelegt. Beim Eingang einer Übergabe prüft der Agent zuerst `Source` und `Target`, übernimmt nur den noch offenen Delta-Kontext und entfernt optionale Felder ohne Inhalt. Nach der fachlichen Verarbeitung schreibt er dauerhafte Inhalte an ihren kanonischen Ort, ergänzt den Journal-Nachweis und löscht den Punkt.

Der Review prüft den exklusiven Empty State, die vier Pflichtfelder jedes offenen Punkts, die Abwesenheit leerer optionaler Felder sowie die vollständige Entfernung erledigter Punkte. Ein datierter Snapshot unter `handoffs/` wird als ergänzendes Artefakt behandelt.

## Beispiel

Eine neue Wissensbasis beginnt mit dem Empty State. Eine Übergabe aus einer parallelen Lane ersetzt diesen Satz durch genau einen Punkt. Nach Prüfung und Integration steht wieder „Keine offenen Handoff-Punkte.“; das Journal weist den Übergang nach.

## Begriffe

- Process Inbox: fortlaufendes Process Document für noch offene, übernommene Deltas.
- Handoff-Punkt: kleinste sachlich zusammengehörige Übergabeeinheit mit überprüfbarer Quelle und aktuellem Ziel.
- Research-to-Operations-Handoff: dauerhafter Vertrag zwischen Forschung und Betrieb, der als Declarative Integration Document geführt wird.

## Versionshistorie

- 0.1 (2026-08-21): Erstfassung als verpflichtende Process Inbox mit exklusivem Empty State und Integrationsnachweis im Journal.

## Related

- [Vorlagen Promptotyping Documents](#vorlagen)
- [Konvention Promptotyping Documents](#konvention-v0.1)
- [Vorlage Index](#promptotyping-document-index)
- [Vorlage Integration](#promptotyping-document-integration)
- [Vorlage Action-Layer](#promptotyping-document-action-layer)
- [Vorlage Journal](#promptotyping-document-journal)
