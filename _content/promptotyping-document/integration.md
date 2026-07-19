---
title: Vorlage Integration
slug: integration
version: "0.1"
status: complete
source: Vorlage Integration
mirrored: 2026-07-19
machine-url: https://dhcraft.org/Promptotyping/_content/promptotyping-document/integration.md
---

# Vorlage Integration

Diese Vorlage strukturiert das Integration-Dokument einer Promptotyping-Wissensbasis. Das resultierende Dokument heißt typischerweise `integration.md` oder, wenn ein Repo mehrere Schnittstellen führt, `{gegenüber}-integration.md`, und liegt im `knowledge/`-Ordner des Repos. Es trägt den Kontrakt zwischen zwei Promptotyping-Projekten oder Lanes: wer liefert was an wen, in welchem Format, unter welchen Abnahmekriterien, und was auf der Schnittstelle noch offen ist. Der erste Absatz unter der H1 trägt den Zweck in einem Satz. Empirische Basis der Vorlage sind teiCrafter (`integration.md` als Drei-Projekt-Referenz) und szd-htr-ocr-pipeline (`teicrafter-integration.md`, `dia-xai-integration.md` als lane-lokale Schnittstellendokumente); Extraktion im Inhaltsaudit vom 2026-07-19.

## Geltungsbereich

Die Vorlage trägt, sobald ein Projekt Daten, Formate oder Zuständigkeiten mit einem anderen Projekt, einem externen System oder einer parallelen Lane teilt und diese Schnittstelle explizit gemacht werden muss. Triggerkriterium ist der projektübergreifende Kontrakt, nicht die bloße Nachbarschaft zweier Repos.

Lebenszyklus: das Dokument entsteht mit dem Kontrakt, idealerweise bevor die erste Lieferung fließt, und wird bei jeder Kontraktänderung auf beiden Seiten der Schnittstelle im selben Zug nachgezogen; eine einseitig aktualisierte Integration ist der teuerste Drift der Wissensbasis, weil er das Gegenüber betrifft. Wird die Schnittstelle stillgelegt, wird das Dokument archiviert, nicht gelöscht, weil der Kontrakt die gelieferten Daten weiter erklärt.

Integration ist von zwei Nachbarfunktionen abgegrenzt. Architecture (`architecture.md`) beschreibt den internen Aufbau des eigenen Projekts, introspektiv; Integration beschreibt den Kontrakt an der Projektgrenze, interfokussiert, und verweist für interne Schichten auf die Architecture. Provenance (`journal.md`) hält den rückwärts gerichteten Entscheidungsverlauf; Integration hält den aktuell gültigen, vorwärts gerichteten Kontrakt, ein empirischer Befund friert den Kontrakt hier ein, die Entscheidungsgeschichte dahinter gehört ins Journal.

Zwei Zuschnitte sind gleichwertig und richten sich nach dem Adressaten. Die Masterreferenz (teiCrafter-Muster) beschreibt ein Mehrprojekt-Geflecht aus einer Hand für alle Beteiligten; das lane-lokale Schnittstellendokument (szd-htr-Muster) beschreibt eine Richtung aus Sicht des eigenen Repos. Beschreiben beide Seiten denselben Kontrakt, muss genau eine Seite als Quelle der Wahrheit deklariert sein und beide müssen aufeinander verweisen; die einseitige Verlinkung war der eine Konsistenzbefund der Extraktion.

## Funktion des Dokuments

Das Dokument beantwortet "was schulden wir dem Gegenüber, was schuldet es uns, in welchem Format, und woran erkennen beide Seiten die Erfüllung". Adressiert sind der Agent des eigenen Repos, der die Schnittstelle implementiert oder betreibt, der Agent des Gegenübers, der konsumiert oder liefert, und der Operator, der bei Kontraktänderungen entscheidet. Im Promptotyping-Kontext ist das Dokument die Stelle, an der zwei Wissensbasen konsistent gehalten werden müssen; implizites Schnittstellenwissen ist hier am teuersten.

## Strukturprinzipien

Erstens Kontrakt vor Implementierung. Das Austauschformat, die Zuständigkeitsgrenze und die Abnahmekriterien sind der stabile Kern; CLI-Details und Pfade sind nachgeordnet und dürfen an die Architecture delegiert werden.

Zweitens deklarierte Quelle der Wahrheit. Wo mehrere Dokumente denselben Kontrakt berühren, benennt jede Seite explizit, welches Dokument verbindlich ist; die anderen positionieren sich als Implementierungs- oder Abnahmedokumentation.

Drittens Richtung explizit. Ob die Schnittstelle liefert, empfängt oder beides, steht im Frontmatter (`direction`) und bestimmt den Zuschnitt; unidirektionale Lieferbeziehungen und bidirektionale Kontrakte haben verschiedene Pflichtsektionen (der Zeitplan gehört nur hinein, wenn eine externe Phase ihn erzwingt).

## Frontmatter-Schema

Pflichtkern der Konvention (`title`, `project`, `method`, `status`, `created`, `updated`), dazu Integration-spezifisch:

- `template:` als Block mit `name: Vorlage Integration`, `version`, `url`, sobald diese Vorlage angewandt wurde.
- `counterpart:` das Gegenüber als Objekt mit `name` und, falls vorhanden, `repository`.
- `direction:` `outbound`, `inbound` oder `bidirectional`.
- `related:` typischerweise `architecture`, `specification`, `journal`.

## Abschnitte im Detail

### Zweck

Funktion: die Schnittstelle in einem Absatz benennen. Inhalt: wer liefert was an wen, der Use Case dahinter und was die Schnittstelle nicht ist (bei szd-htr etwa die Klarstellung, dass DIA-XAI konsumiert und nichts zurückliefert).

### Datenfluss

Funktion: den Übergabepunkt visuell fassbar machen. Inhalt: ein ASCII-Diagramm der beteiligten Systeme, der Richtung(en) und der Übergabepunkte. Alle Belegdokumente führen dieses Diagramm.

### Austauschformat

Funktion: das Format exakt festlegen. Inhalt: Feldliste oder Schema (JSON-Schema, TEI-Skelett, Mapping-Tabelle Quellfeld zu Zielfeld), Pflicht- und optionale Felder, bewusste Auslassungen mit Begründung. Bei tiefen Formaten delegiert die Sektion an ein eigenes Kontrakt-Dokument (teiCrafter delegiert an `converter-reference.md` als frozen contract) und trägt hier nur die Bindungsaussage.

### Zuständigkeiten

Funktion: die Grenze ziehen. Inhalt: wer produziert, wer konsumiert, wo die Trennlinie zwischen den Systemen verläuft, in wenigen Sätzen oder einer Rollen-Tabelle.

### Abnahmekriterien

Funktion: die Erfüllung prüfbar machen. Inhalt: die formalen Bedingungen, unter denen die Schnittstelle als erfüllt gilt, je mit Prüfweg (bei teiCrafter und szd-htr formale Engine-Checks wie Byte-Identität im Round-Trip, mit benannten Prüf-Fallen).

### Offene Punkte und Input-Gaps

Funktion: benennen, was noch nicht geliefert wird oder blockiert. Inhalt: pro Punkt, was fehlt, welche Seite es schuldet und was es blockiert.

### Korrekturen und Fallgruben

Funktion: bekannte Missinterpretationen festhalten, bevor sie sich wiederholen. Inhalt: pro Fallgrube die falsche Annahme und die richtige Lesart (teiCrafter führt eine eigene Corrections-Sektion, szd-htr integriert die Byte-Identitäts-Fallen in die Abnahmekriterien).

### Autoritäre Dokumente

Funktion: die Quellen der Wahrheit auflisten. Inhalt: pro Aspekt des Kontrakts das verbindliche Dokument mit Pfad, auf beiden Seiten der Schnittstelle; hier wird die wechselseitige Verlinkung beider Repos hergestellt.

### Wiedereinstiegs-Kontext (optional)

Funktion: den Handoff-Zustand für die nächste Session oder Lane tragen. Inhalt: aktueller Stand der Schnittstelle, letztes verifiziertes Datum, der eine nächste offene Schritt. In der Praxis lebt dieser Inhalt teils in Action-Layer-Notizen (teiCrafter führt Handoff-Dateien unter `reports/`); die Sektion holt ihn in die Wissensbasis, wo die Schnittstelle selbst der Wiedereinstiegspunkt ist. Volatile Stände sind hier als datierter Snapshot zu führen.

## Was nicht reingehört

- Interner Aufbau. Schichten, Module und Signaturen des eigenen Systems gehören in `architecture.md`; hier steht nur, was an der Grenze sichtbar ist.
- Entscheidungsgeschichte. Warum der Kontrakt so aussieht, gehört in `journal.md` oder `decisions.md`; hier steht der gültige Stand.
- Detailwissen des Gegenübers. Die Pipeline-Internas des anderen Projekts gehören in dessen Wissensbasis; hier stehen sie nur, soweit der Kontrakt sie braucht, sonst als Verweis.
- Zeitpläne ohne externe Phase. Meilenstein-Tabellen veralten unmarkiert; sie gehören nur hinein, wenn eine externe Projektphase sie erzwingt, und dann als datierter Snapshot.

## Vorlage zum Befüllen

````markdown
---
title: "Integration: [Gegenüber oder Funktion]"
project:
  name: [Projektname]
  repository: [Repository-URL]
method:
  name: Promptotyping
  url: https://lisa.gerda-henkel-stiftung.de/digitale_geschichte_pollin
template:
  name: Vorlage Integration
  version: 0.1
  url: https://dhcraft.org/Promptotyping/promptotyping-document/integration
  alias: https://dhcraft.org/Promptotyping/#promptotyping-document-integration
counterpart:
  name: [Gegenüber-Projekt oder -System]
  repository: [URL, falls vorhanden]
direction: [outbound | inbound | bidirectional]
status: draft
language: [de | en]
version: [Repo-Schema-Version]
created: [YYYY-MM-DD]
updated: [YYYY-MM-DD]
related: [architecture, specification, journal]
---

# Integration: [Gegenüber]

<!-- Erster Absatz = Zweck in einem Satz. Wer liefert was an wen, Use Case, was die Schnittstelle nicht ist. -->

[Lead-Absatz]

## Datenfluss

<!-- ASCII-Diagramm: Systeme, Richtung(en), Übergabepunkte. -->

```
[System A] --(Format)--> [System B]
```

## Austauschformat

<!-- Exaktes Schema oder Feldliste, Pflicht/optional, bewusste Auslassungen mit Begründung. Bei tiefen Formaten: Bindungsaussage plus Delegation an das Kontrakt-Dokument. -->

[...]

## Zuständigkeiten

<!-- Wer produziert, wer konsumiert, Trennlinie in einem Satz oder einer Rollen-Tabelle. -->

[...]

## Abnahmekriterien

<!-- Formale Bedingungen der Erfüllung, je mit Prüfweg und bekannten Prüf-Fallen. -->

[...]

## Offene Punkte und Input-Gaps

<!-- Pro Punkt: was fehlt, welche Seite es schuldet, was es blockiert. -->

[...]

## Korrekturen und Fallgruben

<!-- Pro Fallgrube: falsche Annahme, richtige Lesart. -->

[...]

## Autoritäre Dokumente

<!-- Pro Kontrakt-Aspekt das verbindliche Dokument mit Pfad, auf beiden Seiten. Wechselseitige Verlinkung herstellen. -->

| Aspekt | Quelle der Wahrheit | Pfad |
|---|---|---|
| [Aspekt] | [Dokument] | [Pfad] |

<!-- ============================================================ -->
<!-- OPTIONALE SEKTION: vor dem Commit löschen, falls nicht genutzt -->
<!-- ============================================================ -->

## Wiedereinstiegs-Kontext

<!-- Datierter Snapshot: aktueller Stand, letztes verifiziertes Datum, der eine nächste Schritt. -->

[Stand YYYY-MM-DD] [...]
````

## Anwendung als Prompt-Template

Strukturanker beim Aufsetzen einer neuen Schnittstelle. Der Agent erhält den Template-Block, das Format (Schema, Beispieldateien) und die Gegenüber-Wissensbasis; er befüllt Zweck, Datenfluss, Format und Zuständigkeiten, leitet die Abnahmekriterien aus den formalen Eigenschaften des Formats ab und prüft, ob das Gegenüber die Schnittstelle bereits beschreibt. Wenn ja, ist zuerst die Quelle der Wahrheit zu deklarieren und die wechselseitige Verlinkung herzustellen, bevor Inhalt dupliziert wird.

Review-Folie für eine bestehende Integration. Ein vorhandenes Dokument wird gegen die Vorlage gehalten, um zu prüfen, ob die Richtung explizit ist, ob eine Quelle der Wahrheit deklariert und beidseitig verlinkt ist, ob die Abnahmekriterien einen Prüfweg tragen, ob Zeitpläne als datierte Snapshots gekennzeichnet sind und ob Internas des Gegenübers als Verweis statt als Kopie geführt werden.

## Beispiel

teiCrafter (`knowledge/integration.md`, "Three-Project Master Reference") ist die Masterreferenz über drei Projekte: Rollen-Tabelle, Tool-Boundary, Datenfluss-Diagramm, die Kontrakte beider Pipelines, eine eigene Corrections-Sektion gegen wiederkehrende Missinterpretationen und eine Source-Evidence-Sektion als Liste der autoritären Dokumente; die Schichten des eigenen Editors delegiert es ausdrücklich an `architecture.md`. szd-htr-ocr-pipeline führt die Gegenseite lane-lokal: `teicrafter-integration.md` deklariert teiCrafters `converter-reference.md` als verbindlichen Kontrakt und positioniert sich als Implementierungs- und Abnahmedokumentation (CLI, Byte-Identitäts-Fallen, Realitätsabgleich an realen Objekten), `dia-xai-integration.md` beschreibt eine unidirektionale Lieferbeziehung mit Inline-JSON-Schema und externem Phasen-Zeitplan. Die Extraktion fand die beiden Seiten des teiCrafter-Kontrakts inhaltlich konsistent, aber nur einseitig verlinkt; die Autoritäre-Dokumente-Sektion der Vorlage adressiert genau das.

## Begriffe

- Kontrakt: die explizit gemachte Vereinbarung an der Projektgrenze, Format plus Zuständigkeit plus Abnahmekriterien.
- Gegenüber (counterpart): das Projekt, System oder die Lane auf der anderen Seite der Schnittstelle, im Frontmatter benannt.
- Richtung (direction): ob die Schnittstelle liefert (outbound), empfängt (inbound) oder beides (bidirectional).
- Masterreferenz: der Zuschnitt, der ein Mehrprojekt-Geflecht aus einer Hand für alle Beteiligten beschreibt.
- Quelle der Wahrheit: das eine pro Kontrakt-Aspekt als verbindlich deklarierte Dokument; alle anderen verweisen.
- Input-Gap: eine ausstehende Lieferung einer Seite, die die andere blockiert.

## Versionshistorie

- 0.1 (2026-07-19): Erstfassung, empirisch extrahiert aus teiCrafter und szd-htr-ocr-pipeline; Wiedereinstiegs-Kontext als ergänzte Sektion. Freigegeben am 2026-07-19.

## Related

- [Konvention Promptotyping Documents](#konvention-v0.1)
- [Vorlage Architecture](#promptotyping-document-architecture)
- [Vorlage Journal](#promptotyping-document-journal)
- [Vorlage Verification](#promptotyping-document-verification)
