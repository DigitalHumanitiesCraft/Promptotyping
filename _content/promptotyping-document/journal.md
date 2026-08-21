---
title: Vorlage Journal
slug: journal
version: "0.4"
status: complete
source: Vorlage Journal
mirrored: 2026-08-21
machine-url: https://dhcraft.org/Promptotyping/_content/promptotyping-document/journal.md
---
# Vorlage Journal

Diese Vorlage strukturiert den kuratierten rückwärtsgerichteten Provenienzindex einer Promptotyping-Wissensbasis. Das resultierende Dokument heißt `journal.md`, liegt im `knowledge/`-Ordner und weist sachlich zusammengehörige Übergänge nach. Die aktuellen Inhalte bleiben in ihren zuständigen Declarative, Action und Process Documents.

## Geltungsbereich

Die Vorlage trägt für jedes aktive Promptotyping-Projekt. `journal.md` entsteht mit dem ersten nachweiswürdigen Übergang, führt dauerhaft `status: active` und bleibt am Projektende als Provenienzindex erhalten. Einträge entstehen nach integrierten, verworfenen oder korrigierten Übergängen sowie selten nach einer semantischen Verdichtung.

Das Journal wird verdichtet, sobald Wiederholungen, kopiertes Dauerwissen, erledigte Offenlisten, verstreute Entscheidungsgründe oder ein zu teurer regulärer Lesekontext seine Provenienzfunktion beeinträchtigen. Seine Länge oder die Zahl der Einträge löst allein keine Verdichtung aus.

## Funktion des Dokuments

Das Journal beantwortet, welcher sachliche Übergang aus welcher Quelle in welches Ziel führte und welches Ergebnis angenommen, verworfen oder korrigiert wurde. Es ist ein kuratierter Provenienzindex für Menschen und Agents, die Herkunft oder Entscheidungsgrund einer aktuellen Aussage prüfen.

Der aktuelle Projektstatus liegt in der projektspezifischen lebenden Quelle. Dauerhafte Sach- und Handlungsinhalte liegen in Declarative oder Action Documents, angenommene Zukunftsarbeit in `plan.md`, offene Eingänge in `handoff.md` und ausführliche Prüfresultate in `verification.md`. Git bewahrt frühere Wortlaute.

## Strukturprinzipien

Erstens entsteht ein Eintrag pro sachlich zusammengehörigem Übergang. Sessiongrenzen erzeugen keinen eigenen Eintrag, wenn sie keinen solchen Übergang abschließen.

Zweitens führt jeder Eintrag genau einen inhaltlichen Typ. `integriert` weist die Übernahme in ein kanonisches Ziel nach. `verworfen` nennt den geprüften Gegenstand und den Verwerfungsgrund. `korrigiert` referenziert die frühere Aussage und weist die gültige Korrektur nach. Der seltene Wartungstyp `verdichtet` nennt den bearbeiteten Bereich und den Git-Ausgangsstand.

Drittens folgt der Journal-Nachweis der dauerhaften Integration. Bei einem Handoff-Punkt werden zuerst Quelle und aktuelles Ziel geprüft, anschließend wird der dauerhafte Inhalt integriert oder begründet verworfen. Danach entsteht der Journal-Eintrag und der Punkt wird aus `handoff.md` entfernt.

Viertens verdichtet das Journal semantisch. Jede substantielle Aussage des Vorgängerstands erhält eine Disposition, nämlich behalten, in ein kanonisches Ziel integrieren, begründet verwerfen oder ausschließlich über Git bewahren. Eine temporäre Deckungsliste sichert diese Prüfung und wird danach entfernt.

## Frontmatter-Schema

Das Journal folgt dem Pflichtkern aus [Konvention Promptotyping Documents](#konvention-v0.1). Spezifisch für die Provenance-Funktion gelten folgende Felder.

- `status:` ist immer `active`.
- `related:` enthält mindestens `handoff` und typischerweise `project` sowie `specification`.
- `topics:` und `knowledge-sources:` entfallen üblicherweise.
- `updated:` wird nach einem neuen Eintrag oder einer Verdichtung angepasst.

## Abschnitte im Detail

### Lead

Der Lead benennt die Funktion als kuratierten rückwärtsgerichteten Provenienzindex und verweist auf die Zuständigkeit der Geschwister-Dokumente für aktuelle Inhalte.

### Einträge

Die Einträge stehen in konsistenter chronologischer Ordnung. Die Überschrift enthält Datum, Typ und Gegenstand. Der Inhalt nennt Quelle, Ziel und Ergebnis. Ein Verwerfungsgrund ersetzt bei `verworfen` das Zielergebnis; `korrigiert` referenziert zusätzlich die frühere Aussage.

### Verdichtungsnachweis

Ein `verdichtet`-Eintrag nennt Bereich, Git-Ausgangsstand und Ergebnis. Vor der Verdichtung muss ein sauberer Git-Ausgangsstand vorliegen. Pfade, Anker und Hashes werden gegen den resultierenden Stand geprüft. Die temporäre Deckungsliste wird nach der Prüfung gelöscht.

## Was nicht reingehört

- Aktueller Projektstatus und offene Aufgaben.
- Angenommene Zukunftsarbeit, sie liegt in `plan.md`.
- Offene Übergabepunkte, sie liegen in `handoff.md`.
- Ausführliche Prüfresultate, sie liegen in `verification.md`.
- Kopien von dauerhaftem Sachwissen oder Handlungsregeln.
- Sessionprotokolle, Code-Diffs und vollständige Commit-Messages.
- Starre Verdichtungsschwellen, ein Fenster der jüngsten Einträge oder ein `journal-archive.md`.

## Vorlage zum Befüllen

````markdown
---
title: Journal
project:
  name: [Projektname]
  repository: [Repository-URL]
method:
  name: Promptotyping
  url: https://lisa.gerda-henkel-stiftung.de/digitale_geschichte_pollin
status: active
language: [de | en]
version: [Repo-Schema-Version]
created: [YYYY-MM-DD]
updated: [YYYY-MM-DD]
authors: [Autor 1, Autor 2]
generated-with: [Harness (LLM), falls relevant]
template:
  name: Vorlage Journal
  version: 0.4
  url: https://dhcraft.org/Promptotyping/promptotyping-document/journal
  alias: https://dhcraft.org/Promptotyping/#promptotyping-document-journal
related: [project, specification, handoff]
---

# Journal

Dieses Journal ist der kuratierte rückwärtsgerichtete Provenienzindex des Projekts. Aktuelle Sach- und Handlungsinhalte stehen in den zuständigen Declarative oder Action Documents, Zukunftsarbeit in `plan.md`, offene Eingänge in `handoff.md` und Prüfresultate in `verification.md`.

## Einträge

<!-- Ein Eintrag pro sachlich zusammengehörigem Übergang. Zulässige Inhaltstypen sind integriert, verworfen und korrigiert. Verdichtet ist ein seltener Wartungstyp. -->

### YYYY-MM-DD integriert [Gegenstand]

- Quelle: [überprüfbarer Pfad, Nachricht oder Commit]
- Ziel: [kanonisches Declarative oder Action Document]
- Ergebnis: [knapper Nachweis der Integration]

### YYYY-MM-DD verworfen [Gegenstand]

- Quelle: [überprüfbarer Pfad, Nachricht oder Commit]
- Ziel: [geprüftes kanonisches Ziel]
- Verwerfungsgrund: [fachlicher, technischer oder wissenschaftlicher Grund]

### YYYY-MM-DD korrigiert [Gegenstand]

- Quelle: [frühere Aussage und neue Evidenz]
- Ziel: [kanonisches Dokument mit gültiger Fassung]
- Ergebnis: [Korrektur und ihre Auswirkung]

<!-- Seltener Wartungseintrag nach semantischer Verdichtung:

### YYYY-MM-DD verdichtet [Bereich]

- Vorgängerstand: [Git-Commit oder anderer eindeutiger Git-Ausgangsstand]
- Bereich: [geprüfte Einträge oder Sektionen]
- Ergebnis: [behaltene, integrierte, verworfene und ausschließlich über Git bewahrte Aussagen]
-->
````

## Anwendung als Prompt-Template

Bei einem sachlich zusammengehörigen Übergang wird zuerst der dauerhafte Zielinhalt aktualisiert. Danach ergänzt der Agent den passenden Journal-Eintrag. Für einen Handoff-Punkt folgt anschließend dessen vollständige Entfernung aus `handoff.md`.

Eine Verdichtung beginnt auf einem sauberen Git-Ausgangsstand. Der Agent erstellt vorübergehend eine Deckungsliste aller substantiellen Aussagen und weist jeder Aussage eine Disposition zu. Nach der Übernahme werden Pfade, Anker und Hashes geprüft. Die Deckungsliste wird entfernt und ein `verdichtet`-Eintrag referenziert den Vorgängerstand. Ein Archivdokument entsteht dabei nicht.

Der Review prüft, ob jeder Eintrag einen sachlichen Übergang abbildet, ob aktueller Status, Zukunftsarbeit, offene Eingänge und Prüfdetails an ihren zuständigen Orten liegen und ob jeder Verdichtungsnachweis einen überprüfbaren Vorgängerstand nennt.

## Beispiel

Ein offener Handoff-Punkt liefert eine neue Schemainvariante. Nach Prüfung wird die Variante in `data-schema.md` integriert. Das Journal erhält einen Eintrag vom Typ `integriert` mit Quelle, Ziel und Ergebnis; anschließend wird der Handoff-Punkt entfernt.

## Begriffe

- Provenienzindex: kuratierte Rückwärtsreferenz auf sachliche Übergänge und ihre überprüfbaren Quellen.
- Disposition: Entscheidung für eine substantielle Aussage bei der Verdichtung, nämlich behalten, integrieren, verwerfen oder ausschließlich über Git bewahren.
- Vorgängerstand: sauberer Git-Ausgangsstand, gegen den eine Verdichtung vollständig geprüft wird.

## Versionshistorie

- 0.4 (2026-08-21): Journal als kuratierten Provenienzindex gefasst. Inhaltstypen, Handoff-Reihenfolge und semantische Verdichtung ohne Archiv normiert.
- 0.2 (2026-07-19): Englisches Funktionsvokabular (Provenance), Block-Status auf `active`, Lebenszyklus-Absatz.
- 0.1 (2026-05-09): Erstfassung.

## Related

- [Vorlagen Promptotyping Documents](#vorlagen)
- [Konvention Promptotyping Documents](#konvention-v0.1)
- [Promptotyping](#ueberblick)
- Context Engineering
- [Vorlage Handoff](#promptotyping-document-handoff)
- [Vorlage Plan](#promptotyping-document-plan)
- [Vorlage Verification](#promptotyping-document-verification)
