---
title: Vorlage Plan
slug: plan
version: "0.2"
status: complete
source: Vorlage Plan
mirrored: 2026-07-19
machine-url: https://dhcraft.org/Promptotyping/_content/promptotyping-document/plan.md
---

# Vorlage Plan

Diese Vorlage strukturiert das vorwärts gerichtete Process-Dokument einer Promptotyping-Wissensbasis. Das resultierende Dokument heißt typischerweise `plan.md` oder `roadmap.md` und liegt im `knowledge/`-Ordner des Repos. Es ist das ausdrückliche Gegenstück zum rückblickenden `journal.md`: während das Journal dokumentiert, wie sich das Projekt zum aktuellen Stand gearbeitet hat, ordnet der Plan die noch ausstehende Arbeit in eine Sequenz aus Phasen und Milestones mit Entry- und Exit-Bedingungen, die gegen die `specification.md` verankert sind. Der erste Absatz des resultierenden Dokuments trägt den Zweck in einem Satz; es gibt kein eigenes `zweck:`-Frontmatter-Feld.

## Geltungsbereich

Die Vorlage trägt, sobald ein Projekt eine geordnete, mehrschrittige Sequenz noch ausstehender Arbeit hat, deren Reihenfolge und Abschlussbedingungen festgehalten werden sollen. Das ist der Regelfall für jedes aktiv entwickelte Repo, das über einen einzelnen Arbeitsgang hinausgeht. Triggerkriterium: es existieren mindestens zwei aufeinander aufbauende Arbeitsabschnitte mit prüfbaren Abschlussbedingungen, oder das Projekt steuert auf einen festen Termin (Meeting, Deployment, Abgabe) zu, gegen den die Arbeit getaktet wird.

Sie trägt nicht für triviale Tool-Repos, die in einer Sitzung fertiggestellt werden, und nicht für reine Veröffentlichungs-Repos ohne weitere Entwicklung. Sie trägt nicht als Ersatz für ein Backlog ungeordneter Einzelaufgaben; ein Plan ordnet, ein Backlog sammelt. Die operative Tagesplanung einer einzelnen Sitzung gehört nicht hierher, sondern bleibt im Kopf des Bearbeiters oder im Action-Layer.

Lebenszyklus: der Plan entsteht, sobald die Sequenz erkennbar ist, meist nach der ersten Fassung der `specification.md`, und wird bei jedem Milestone-Abschluss fortgeschrieben; sein Status ist `active`. Am Projektende wird er abgeschlossen (`archived`) oder seine übertragbaren Einsichten wandern in ein `learnings.md`; ein Plan, der nach Projektende unverändert stehen bleibt, wird zur falschen Quelle über den Projektstand.

## Funktion des Dokuments

Das Dokument beantwortet "was ist der nächste Schritt, in welcher Reihenfolge bauen die Schritte aufeinander auf, woran erkenne ich, dass ein Schritt abgeschlossen ist, und was muss vorher wahr sein, damit er beginnen kann". Es ist die vorwärts gerichtete Steuerungsschicht der Wissensbasis. Adressiert sind primär der Projekt-Verantwortliche, der die Arbeit taktet und gegen einen Termin priorisiert, und der Coding-Agent, der eine Session aufnimmt und wissen muss, welcher Milestone als Nächstes dran ist und unter welcher Bedingung er ihn als erledigt markieren darf.

Die Abgrenzung gegen die Nachbardokumente ist scharf und definiert die Funktion. Gegen das `journal.md`: das Journal ist rückblickend und wird nie umgeschrieben, der Plan ist vorwärts gerichtet und wird fortgeschrieben. Was erledigt ist, wandert aus dem aktiven Teil des Plans in den Status-Tracker und verdichtet sich im Journal zu einem Eintrag; der Plan trägt nicht die Genese, sondern die Vorausschau. Gegen die `specification.md`: die Spezifikation sagt, was gebaut wird und warum (Anforderungen, Akzeptanzkriterien, Entscheidungen), der Plan sagt, wann und in welcher Reihenfolge. Die Exit-Bedingungen des Plans verweisen auf die Akzeptanzkriterien und Quality Gates der Spezifikation, dupliziert sie aber nicht.

## Strukturprinzipien

Drei Prinzipien tragen das Dokument.

Erstens ist jeder Milestone gegen die Spezifikation verankert. Eine Phase oder ein Milestone trägt eine Entry-Bedingung (was muss wahr sein, um zu beginnen) und eine Exit-Bedingung (was muss wahr sein, um abzuschließen); die Exit-Bedingung verweist auf die Akzeptanzkriterien, Quality Gates oder Entscheidungen in der `specification.md`, statt sie neu zu formulieren. Ohne diese Verankerung wird der Plan zu einer Wunschliste ohne prüfbares Erledigt-Kriterium. Der Plan ist die Sequenz, die Spezifikation der Maßstab.

Zweitens ist der Plan vorwärts gerichtet und wird fortgeschrieben, nicht angesammelt. Anders als das Journal, in dem alte Stände unverändert lesbar bleiben, wird der Plan beim Abschluss eines Milestones aktualisiert: der Status wandert in den Status-Tracker, neue Erkenntnisse über die nächste Phase fließen ein. Der Plan trägt immer den aktuellen Blick nach vorn, nicht die Historie. Die Historie liegt im Journal und in der Git-History; der Plan verweist darauf, kopiert sie nicht.

Drittens dürfen im Status-Tracker volatile Zahlen stehen. Anders als Wissens-, Strategie- und Überblicksdokumente, die keine flüchtigen Quantitäten tragen, ist der Status-Tracker ein zeitpunktbezogener Snapshot des Arbeitsfortschritts und fällt damit unter die Snapshot-Ausnahme wie der Report. Commit-Hashes, abgeschlossene Anzahl von Artefakten, erreichte Messwerte gehören dort hin, weil der Status-Tracker genau diesen Stand festhält. Außerhalb des Status-Trackers, etwa in der Beschreibung künftiger Phasen, bleibt die Vorausschau frei von Zahlen, die beim nächsten Schritt veralten.

## Frontmatter-Schema

Das Dokument folgt dem reduzierten Pflichtkern aus der [Konvention Promptotyping Documents](#konvention-v0.1) (Stand 2026-06-13): `title`, `project` (Objekt mit `name` und `repository`), `method` (Objekt mit `name` und `url`), `status`, `created`, `updated`. Es gibt kein `zweck:`-Feld mehr; der Zweck lebt als erster Absatz unter der H1, in einem Satz, verständlich ohne Repo-Kontext. Die Vorlage stellt sicher, dass dieser erste Absatz den Zweck trägt.

`status:` meint die Dokument-Maturity (`idea`, `draft`, `stub`, `complete`, `reviewed`, `archived`; seit 2026-07-19 auch `active` für fortlaufende Prozessdokumente und `snapshot` für Stichtagsdokumente), nicht den operativen Projektstatus. Für einen laufend fortgeschriebenen Plan ist `active` der passende Wert; der operative Fortschritt steht im Status-Tracker, nicht im Frontmatter.

`template:` wird empfohlen, sobald diese Vorlage angewandt wurde, als Block mit `name`, `version`, `url` und optional `alias` (siehe Sektion *Vorlagen-Adressierbarkeit* der Konvention). Spezifisch für den Plan:

- `related:` listet typischerweise `specification` (der Maßstab, gegen den die Milestones verankert sind), `journal` (das rückblickende Gegenstück) und `index`, gegebenenfalls `data` und `architecture`, wenn einzelne Milestones dort aufsetzen.
- `topics:` entfällt typischerweise. Der Plan ist Process-Dokument und trägt keine domänen-thematische Verortung; die thematischen Topics leben in den Knowledge-Geschwistern.
- `knowledge-sources:` entfällt; der Plan trägt keine externen Anschlüsse.
- `updated:` wird bei jedem Abschluss eines Milestones aktualisiert; das Feld ist neben dem Journal eines der am häufigsten geänderten in der Wissensbasis.
- Empfohlen zusätzlich `language`, `version` (repo-weit konsistent), `authors` und `generated-with`, falls das Dokument LLM-gestützt entstanden ist.

## Abschnitte im Detail

### Lead

Funktion: in einem Satz den Zweck tragen, dann in zwei bis drei Sätzen die Funktion abgrenzen. Inhalt: was der Plan steuert, ausdrückliche Positionierung als vorwärts gerichtetes Gegenstück zum Journal, Hinweis darauf, dass er fortgeschrieben und nicht angesammelt wird. Das FemPrompt-`plan.md` macht diese Selbstpositionierung mustergültig vor: "This is a process document; it is updated as phases close (mark done with date), and decisions made along the way go into specification as ADRs, not here." Der Lead positioniert den Plan gegen Spezifikation und Journal: er trägt weder das Was-und-Warum noch die Genese.

### Zielbild

Funktion: definieren, was "fertig" bedeutet, bevor die Sequenz beginnt. Inhalt: die Bedingungen, unter denen das Projekt oder die geplante Etappe als abgeschlossen gilt, in zwei bis vier Punkten. Das Zielbild ist der Fixpunkt, auf den alle Phasen zulaufen; ohne es wird die Phasenfolge richtungslos. Das FemPrompt-`plan.md` führt diese Sektion als "Zielbild (what done means)" mit vier prüfbaren Bedingungen. Bei kleineren Plänen kann das Zielbild in den Lead einrücken; bei mehrstufigen Projekten trägt es eine eigene Sektion.

### Phasen und Milestones

Funktion: die Arbeit in eine geordnete Sequenz prüfbarer Etappen gliedern. Inhalt: pro Phase ein Ziel in einem Satz, darunter ein oder mehrere Milestones; pro Milestone eine Entry-Bedingung, die zu leistende Arbeit, eine Exit-Bedingung. Eine Übersichtstabelle (Phase, Milestones, Quality Gate) am Kopf der Sektion gibt den Gesamtblick, wie im `roadmap.md` des DH Developer Skriptums. Reihenfolge stets älteste-Phase-zuerst, weil der Plan die Bauabfolge abbildet.

Pro Milestone:

- Entry-Bedingung. Was muss wahr sein, damit der Milestone beginnen kann; in der Regel der Abschluss eines vorherigen Milestones oder eine externe Voraussetzung.
- Arbeit. Was zu tun ist, als Stichpunkte oder als thematisch geordnete Commit-Blöcke. Konkret genug, dass ein Agent ohne Rückfrage beginnen kann.
- Exit-Bedingung. Woran erkennbar ist, dass der Milestone abgeschlossen ist; verankert gegen ein Akzeptanzkriterium, ein Quality Gate oder eine Entscheidung in der `specification.md`. Formuliert als "Done when", nicht als Absichtserklärung.

Eine optionale eingerückte `Status (YYYY-MM-DD)`-Notiz pro Milestone hält fest, wo dieser Milestone gerade steht, wenn der zentrale Status-Tracker für die Detailtiefe nicht reicht. Das FemPrompt-`plan.md` nutzt diese eingerückten Status-Blöcke pro Phase intensiv.

### Status-Tracker

Funktion: den aktuellen Fortschritt aller Milestones zeitpunktbezogen festhalten. Inhalt: eine Tabelle (Milestone, Status, Notizen), aktualisiert beim Abschluss jedes Milestones. Hier sind volatile Zahlen ausdrücklich erlaubt: Commit-Hashes, abgeschlossene Anzahlen, erreichte Messwerte, weil der Tracker genau diesen Stand einfriert (Snapshot-Ausnahme, vgl. [Vorlage Report](#promptotyping-document-report)). Eine kleine Legende (`completed`, `in progress`, `pending`) hält die Statuswerte konsistent. Das `roadmap.md` führt diese Sektion als "Status Tracker" mit Commit-Refs in der Notizspalte; das `IMPLEMENTATION-PLAN.md` löst dasselbe über Phasentabellen mit `[x]`-Markern und einer Legende.

### Offene Entscheidungen und Abhängigkeiten

Funktion: festhalten, was noch zu entscheiden ist und was die Sequenz blockiert. Inhalt: offene Entscheidungspunkte mit dem Milestone, vor dem sie fallen müssen ("Decide before P3"), und harte Abhängigkeiten zwischen Milestones oder zu externen Ereignissen ("TP4 freeze precedes the B2 screening start"). Das FemPrompt-`plan.md` führt sowohl "Open items" als auch explizite "Hard ordering"-Hinweise. Diese Sektion verhindert, dass eine Phase begonnen wird, deren Vorbedingung noch ungeklärt ist.

### Abweichungen

Funktion: regeln, was passiert, wenn von der geplanten Reihenfolge abgewichen wird. Inhalt: unter welchen Bedingungen die Sequenz neu priorisiert werden darf, wohin die Abweichung dokumentiert wird (in der Regel ins `journal.md` mit Begründung), und welche Bedingungen unabhängig von der Reihenfolge gelten (typischerweise die Quality Gates). Das `roadmap.md` führt diese Sektion als "Deviations" und hält fest, dass die Wellen-Reihenfolge Empfehlung ist, die Gates aber unabhängig gelten. Bei kurzen, fest getakteten Plänen entfällt die Sektion.

## Was nicht reingehört

- Provenance und Sessionchronik. Wie sich das Projekt zum Stand gearbeitet hat, gehört ins `journal.md`; der Plan blickt nach vorn, nicht zurück.
- Anforderungen und Entscheidungsbegründungen. Was gebaut wird und warum, steht in der `specification.md`; der Plan verweist auf ihre Akzeptanzkriterien als Exit-Bedingungen, formuliert sie nicht neu. Entscheidungen, die unterwegs fallen, wandern als ADR in die Spezifikation, nicht in den Plan.
- Volatile Zahlen außerhalb des Status-Trackers. In der Beschreibung künftiger Phasen bleiben flüchtige Quantitäten draußen; sie veralten, bevor die Phase beginnt. Nur der Status-Tracker trägt den eingefrorenen Stand.
- Zeitschätzungen. Die Sequenz ist fixiert, das Tempo offen; der Plan nennt keine Minuten-, Tages- oder Wochenschätzungen ("No time estimates", `roadmap.md`).
- Ein ungeordnetes Backlog. Der Plan ordnet aufeinander aufbauende Schritte; lose gesammelte Einzelideen ohne Sequenz gehören in ein eigenes Backlog-Dokument.

## Vorlage zum Befüllen

Der folgende Block ist als Template gedacht. Der erste Absatz nach dem Frontmatter trägt den Zweck; es gibt kein `zweck:`-Feld.

````markdown
---
title: Plan
project:
  name: [Projektname]
  repository: [Repository-URL]
status: active
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
  name: Vorlage Plan
  version: 0.2
  url: https://dhcraft.org/Promptotyping/promptotyping-document/plan
  alias: https://dhcraft.org/Promptotyping/#promptotyping-document-plan
related: [specification, journal, index]
---

<!-- Lead: erster Absatz trägt den Zweck in einem Satz, dann Abgrenzung. Vorwärts gerichtetes Gegenstück zum Journal, fortgeschrieben statt angesammelt, Entscheidungen wandern in die specification. -->

[Lead-Absatz mit dem Zweck im ersten Satz]

## Zielbild

<!-- Was "fertig" bedeutet, in zwei bis vier prüfbaren Punkten. Der Fixpunkt, auf den alle Phasen zulaufen. -->

[...]

## Phasen und Milestones

<!-- Übersichtstabelle, dann pro Phase ein Ziel und ein oder mehrere Milestones mit Entry, Arbeit, Exit. Reihenfolge: älteste Phase zuerst. -->

| Phase | Milestones | Quality Gate |
|---|---|---|
| Phase 0 — [Name] | M1 [Kurzname] | — |
| Phase 1 — [Name] | M2 [Kurzname] | Gate A |

### Phase 0 — [Name]

**Ziel:** [Ein Satz.]

#### Milestone 1 — [Kurzname]

**Entry-Bedingung:** [Was vorher wahr sein muss.]

[Zu leistende Arbeit als Stichpunkte oder Commit-Blöcke.]

**Exit-Bedingung (M1):** [Done when ..., verankert gegen ein Akzeptanzkriterium oder Quality Gate in specification.md.]

<!-- Optional pro Milestone: -->
Status (YYYY-MM-DD): [Wo dieser Milestone gerade steht.]

## Status-Tracker

<!-- Zeitpunktbezogener Snapshot. Hier sind volatile Zahlen erlaubt (Commit-Hashes, Anzahlen, Messwerte). Aktualisiert beim Abschluss jedes Milestones. -->

| Milestone | Status | Notizen |
|---|---|---|
| M1 — [Kurzname] | pending | |
| M2 — [Kurzname] | pending | |

Legende: completed, in progress, pending.

## Offene Entscheidungen und Abhängigkeiten

<!-- Offene Entscheidungspunkte mit dem Milestone, vor dem sie fallen müssen. Harte Abhängigkeiten zwischen Milestones oder zu externen Ereignissen. -->

[...]

## Abweichungen

<!-- Optional. Unter welchen Bedingungen neu priorisiert werden darf, wohin die Abweichung dokumentiert wird (journal.md), welche Bedingungen unabhängig von der Reihenfolge gelten (Quality Gates). -->

[...]
````

## Anwendung als Prompt-Template

Strukturanker beim Aufsetzen eines Plans. Der Agent erhält den Template-Block und befüllt ihn aus der `specification.md` (die Akzeptanzkriterien und Quality Gates, gegen die er die Exit-Bedingungen verankert) und dem aktuellen Repo-Stand (für den initialen Status-Tracker). Beim Aufnehmen einer Session liest der Agent zuerst den Status-Tracker und die Sektion *Offene Entscheidungen und Abhängigkeiten*, um den nächsten zulässigen Milestone zu bestimmen, bevor er mit der Arbeit beginnt. Beim Abschluss eines Milestones aktualisiert er den Status-Tracker und das `updated:`-Feld und verdichtet die geleistete Arbeit zu einem `journal.md`-Eintrag; der Plan selbst bleibt vorwärts gerichtet.

Review-Folie für einen bestehenden Plan. Ein vorhandenes `plan.md` oder `roadmap.md` wird gegen die Vorlage gehalten, um zu prüfen, ob jeder Milestone eine Entry- und eine Exit-Bedingung trägt, ob die Exit-Bedingungen gegen die Spezifikation verankert sind statt frei formuliert, ob volatile Zahlen ausschließlich im Status-Tracker stehen, und ob erledigte Arbeit aus dem aktiven Plan herausgewandert ist statt sich anzusammeln.

## Beispiel

Das `plan.md` von FemPrompt SozArb (`knowledge/plan.md`, [chpollin/FemPrompt_SozArb](https://github.com/chpollin/FemPrompt_SozArb)) nennt sich im Lead selbst "a process document" und das Gegenstück zum Journal: Entscheidungen, die unterwegs fallen, "go into specification as ADRs, not here". Es trägt ein "Zielbild (what done means)" mit vier prüfbaren Bedingungen, gliedert die Arbeit in Stages A bis C mit nummerierten Milestones (P0 bis P7), und jeder Milestone schließt mit einer "Done when"-Exit-Bedingung. Die eingerückten `Status (2026-06-09)`-Blöcke pro Milestone tragen volatile Stände wie konkrete Dateipfade und Zähldifferenzen (das 292-vs-291-Pairing-Problem), die im Fließtext der künftigen Phasen bewusst fehlen.

Das `roadmap.md` des DH Developer Skriptums (`knowledge/roadmap.md`, [chpollin/Teaching](https://github.com/chpollin/Teaching)) wird im `INDEX.md` ausdrücklich als eigene Funktion "Plan" geführt, mit der Frage "What is the sequence of work, what milestones, what is next?". Es eröffnet mit einer Phasen-Milestone-Tabelle, verankert jeden Milestone gegen die "Quality Gates" der `specification.md`, hält "No time estimates" fest, schließt mit einer "Status Tracker"-Tabelle (Commit-Refs wie `28dd38e` in der Notizspalte) und einer "Deviations"-Sektion, die die Wellen-Reihenfolge als Empfehlung kennzeichnet, die Gates aber als unabhängig geltend.

Das `IMPLEMENTATION-PLAN.md` von co-ocr-htr (`knowledge/IMPLEMENTATION-PLAN.md`, [ResearchTools/co-ocr-htr](https://github.com/chpollin/co-ocr-htr)) zeigt die kompakte Variante: dichte Phasentabellen (Feature, Status, Location) mit `[x]`/`[~]`/`[ ]`-Markern und einer expliziten Legende am Ende. Es belegt, dass der Status-Tracker und die Phasenstruktur in einem einzigen tabellengetragenen Dokument zusammenfallen können, wenn das Projekt klein genug ist; Entry- und Exit-Bedingungen sind dort in die Phasenziele eingerückt statt pro Milestone ausformuliert.

Das Fehlmuster aus dem Inhaltsaudit vom Juli 2026 ist der Plan als Sammelsurium: ein `plan.md`, das Charter, Spezifikation, Status und Session-Protokoll in einem Dokument mischt, verliert die Steuerungsfunktion, weil kein Leser mehr erkennt, welcher Teil vorwärts gerichtet ist.

## Begriffe

- Phase: thematisch abgegrenzter Arbeitsabschnitt mit einem Ziel, der einen oder mehrere Milestones bündelt.
- Milestone: prüfbare Etappe innerhalb einer Phase, mit Entry-Bedingung, zu leistender Arbeit und Exit-Bedingung.
- Entry-Bedingung: was wahr sein muss, damit ein Milestone beginnen darf; in der Regel der Abschluss eines vorherigen Milestones oder eine externe Voraussetzung.
- Exit-Bedingung: woran erkennbar ist, dass ein Milestone abgeschlossen ist; verankert gegen ein Akzeptanzkriterium oder Quality Gate der `specification.md`.
- Status-Tracker: zeitpunktbezogener Snapshot des Milestone-Fortschritts; die einzige Sektion des Plans, in der volatile Zahlen zulässig sind.
- Quality Gate: in der Spezifikation definierter Prüfpunkt aus mechanischen und menschlichen Checks, an den eine Exit-Bedingung gebunden sein kann.

## Versionshistorie

- 0.2 (2026-07-19): Freigabe (status complete), englisches Funktionsvokabular, Block-Status auf `active`, Lebenszyklus-Absatz, Fehlmuster im Beispiel. Keine Migrationspflicht für bestehende Repos.
- 0.1 (2026-06-13): Erstfassung.

## Related

- [Konvention Promptotyping Documents](#konvention-v0.1)
- [Vorlage Journal](#promptotyping-document-journal)
- [Vorlage Specification](#promptotyping-document-specification)
- [Vorlage Report](#promptotyping-document-report)
- [Vorlage Index](#promptotyping-document-index)
- [Vorlage Projekt-Wissensdokument](#promptotyping-document-project)
