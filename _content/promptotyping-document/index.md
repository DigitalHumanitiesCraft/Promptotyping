---
title: Vorlage Index
slug: index
version: "0.4"
status: complete
source: Vorlage Index
mirrored: 2026-08-21
machine-url: https://dhcraft.org/Promptotyping/_content/promptotyping-document/index.md
---
# Vorlage Index

Diese Vorlage strukturiert das Navigationsdokument einer Promptotyping-Wissensbasis. Das resultierende Dokument heißt `INDEX.md` und liegt im `knowledge/`-Ordner. Die Großschreibung ist die begründete Hub-Ausnahme des Naming Contract. Hier erschließen Menschen und Agents Dokumentregister, Lesereihenfolge, Ablagezonen sowie konstitutive Begriffe und Abkürzungen.

## Geltungsbereich

Die Vorlage trägt, sobald die Wissensbasis mehr als drei Dokumente enthält. Bei kleineren Repos ist ein Index überflüssig und kann in das Charter-Dokument (`project.md` oder `README.md`) integriert werden. Sie trägt nicht für projektübergreifende Übersichten oder MOCs im Vault; dafür gilt der Vault-Standard aus CLAUDE §3.

Lebenszyklus: der Index entsteht, sobald das vierte Dokument die Schwelle reißt, und wird bei jeder neuen, umbenannten oder entfernten Datei nachgepflegt, parallel zur Wissensbasis, nicht erst zum Schluss. Die Konsistenz gegen den realen Ordnerinhalt ist seine einzige Update-Pflicht; ein Index, der sie verliert, ist schlechter als keiner, weil er falsche Sicherheit erzeugt.

## Funktion des Dokuments

Das Indexdokument adressiert einen menschlichen Reviewer, einen neu aufgesetzten Coding-Agenten und den Projekt-Verantwortlichen, der nach Wochen zurückkommt. Es beantwortet, welche Dokumente und Artefaktbereiche existieren, welche Routing Question jeder Pfad bedient, in welcher Reihenfolge gelesen wird und welche Begriffe oder Abkürzungen konstitutiv sind. Es ist zugleich Navigationsknoten und Begriffslexikon.

## Strukturprinzipien

Fünf Prinzipien tragen das Dokument.

Erstens speichert der Index nicht, er zeigt. Jede Information, die im Index zusammengefasst wird, muss im verlinkten Geschwister-Dokument selbst stehen, sonst entstehen Wahrheitskonflikte zwischen Index und Quelle. Ausnahme: die Begriffsdefinitionen, die hier kanonisch leben, weil das Glossar zentralisiert ist.

Zweitens liefert der Index Lesepfade, nicht nur eine Liste. Eine flache Aufzählung der Dokumente ist eine Datei-Übersicht, keine Lesehilfe. Lesepfade ordnen Dokumente nach Anliegen ("Onboarding", "Reproduktion", "Architektur-Review") und schicken den Leser durch die Wissensbasis in einer Reihenfolge, die der Aufgabe angemessen ist.

Drittens trägt der Index die kanonischen Begriffe des Projekts. Begriffe sind dort definiert, wo sie gebraucht werden; der Index ist die einzige Stelle, an der die definierenden Begriffe vault-weit konsistent gepflegt sind. Geschwister-Dokumente verlinken auf einzelne Begriffe (`INDEX`), statt sie selbst zu definieren. Bei sehr vielen Begriffen (mehr als 15 bis 20) ist die Auslagerung in ein eigenes `glossary.md` zulässig; in der Regel reicht eine Sektion im Index.

Viertens ist der Index gegen den realen Ordnerinhalt konsistent. Jede relevante Datei ist gelistet, kein Eintrag zeigt auf eine gelöschte oder geplante Datei. Nicht relevante Funktionen bleiben ohne ausgeschriebene Begründung weg.

Fünftens erklärt der Index jede offizielle oder konstitutive Abkürzung, die in einem Dateinamen vorkommt. Die Dokumentenmatrix führt die echte Schreibweise des Pfads und bestätigt damit das primäre Routing-Signal.

## Frontmatter-Schema

Das Indexdokument folgt dem Frontmatter-Schema aus [Konvention Promptotyping Documents](#konvention-v0.1) (Pflichtkern: `title, project, method, status, created, updated`). Spezifisch für den Index:

- `topics:` üblicherweise leer; der Index ist Meta-Dokument der Wissensbasis und trägt keine domänen-thematische Verortung.
- `related:` listet alle Geschwister-Dokumente, die der Index anbindet. Dies ist die einzige Stelle in der Wissensbasis, an der `related:` vollständig sein muss.
- `knowledge-sources:` entfällt, weil der Index keine inhaltliche Substanz trägt.

## Abschnitte im Detail

### Lead

Funktion: in zwei bis drei Sätzen klar machen, was die Wissensbasis dokumentiert, für wen sie geschrieben ist, was bewusst nicht enthalten ist. Inhalt: Adressatenkreis, thematische Abdeckung, Verweis auf Operatives (Maintenance, Datenexport-Workflow), das nicht in der Wissensbasis selbst liegt. Keine Marketing-Sätze.

### Dokumentenmatrix

Funktion: tabellarische Übersicht aller dauerhaften Promptotyping Documents mit Pfad, Funktion, Routing Question und Aktualisierungsanlass. Die Matrix ist die maschinenlesbare Form der Wissensbasis-Struktur und wird von einem Agenten als erstes konsultiert. Die Reihenfolge folgt der Funktionslogik.

### Ablagezonen

Funktion: die Grenzen zwischen `knowledge/`, `research-artefacts/`, `source-material/`, `snapshots/`, `handoffs/` und `generated/` erklären. Inhalt: pro vorhandener Zone ein Satz zu Artefaktklasse und Lebenszyklus. Repo-spezifische oder domänentypische Ausgabepfade werden hier auf eine dieser Klassen abgebildet.

### Lesepfade

Funktion: Reihenfolgenempfehlungen für unterschiedliche Anliegen. Inhalt: zwei bis vier Pfade in Prosa oder als Liste, etwa "Onboarding eines neuen Mitarbeiters: project → data → specification → architecture", "Reproduktion eines Datenexports: data → architecture → journal", "Verstehen einer Designentscheidung: specification (Decisions-Sektion) → journal → design". Jeder Pfad ist begründet.

### Konvention

Funktion: Verweis auf die Konvention, nach der die Wissensbasis gepflegt wird. Inhalt: Wikilink auf [Konvention Promptotyping Documents](#konvention-v0.1) oder die Repo-Variante und ein Satz dazu, dass sie Naming Contract, Frontmatter-Schema und Routing-Heuristik erklärt.

### Begriffe

Funktion: kanonische Definitionen der projekt-konstitutiven Begriffe und der in Dateinamen verwendeten Abkürzungen, alphabetisch sortiert. Jede Abkürzung wird ausgeschrieben und in ihrer projektbezogenen Bedeutung eingeordnet. Geschwister-Dokumente verlinken bei Bedarf auf die Definition. Bei einem umfangreichen Begriffsbestand kann ein eigenes `glossary.md` übernehmen; die Dateinamen-Abkürzungen bleiben im Index sichtbar.

## Was nicht reingehört

- Inhaltsabschriften aus den Geschwistern. Der Index zeigt, er speichert nicht. Ausnahme: die Begriffsdefinitionen, die hier kanonisch leben.
- Konkrete Zahlen aus der Anwendung (Coverage, Datensatzgrößen, Testcounts). Diese liegen in der Anwendung selbst und im `persons.json#meta` oder vergleichbar; siehe Vault-Regel zu volatilen Quantitäten in CLAUDE §6.
- Sessionprotokolle und Verlaufserzählungen. Sachliche Übergänge werden knapp in `journal.md` nachgewiesen.
- Eine "Was fehlt und warum"-Sektion. Bis zur Regeländerung vom 2026-06-29 gefordert, seitdem untersagt; nicht relevante Funktionen bleiben unkommentiert weg, Verweise auf anderswo liegendes Material stehen positiv am Bedarfsort.
- Methodische Einführungen ins Promptotyping. Dafür ist [Promptotyping](#ueberblick) im Vault zuständig; der Index zeigt nur darauf.
- Definitionen für Begriffe, die nur in einem einzigen Geschwister-Dokument vorkommen. Diese leben in der "Begriffe"-Sektion des betreffenden Dokuments, nicht im Index.

## Vorlage zum Befüllen

Der folgende Block ist als Template gedacht. Befüllungshinweise stehen als HTML-Kommentare und verschwinden im gerenderten Markdown.

````markdown
---
title: Index
project:
  name: [Projektname]
  repository: [Repository-URL]
status: draft
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
  name: Vorlage Index
  version: 0.4
  url: https://dhcraft.org/Promptotyping/promptotyping-document/index
  alias: https://dhcraft.org/Promptotyping/#promptotyping-document-index
related: [project, data, specification, architecture, design, handoff, journal]
---

<!-- Lead: zwei bis drei Sätze. Wer adressiert wird, was abgedeckt ist, was woanders liegt. -->

[Lead-Absatz]

## Dokumente

| Pfad | Funktion | Routing Question | Aktualisierung |
|---|---|---|---|
| [[project]] | Charter | Was ist dieses Projekt? | bei Änderung von Identität oder Scope |
| [[data]] | Material | Was ist die Datengrundlage? | bei Datenexport oder Schemaänderung |
| [[specification]] | Specification | Was soll das System tun und warum? | bei Anforderungs- oder Entscheidungsänderung |
| [[architecture]] | Architecture | Wie ist es technisch realisiert? | bei Architekturänderung |
| [[design]] | Design | Wie sieht es aus und wie verhält es sich? | bei Änderung des Designsystems |
| [[handoff]] | Handoff | Welche Übergabepunkte sind offen? | bei Eingang oder Verarbeitung eines Handoff-Punkts |
| [[journal]] | Provenance | Welche Übergänge wurden integriert, verworfen oder korrigiert? | nach sachlich zusammengehörigen Übergängen |

<!-- Reihenfolge folgt Funktions-Logik, nicht alphabetisch. Nicht relevante Funktionen weglassen. -->

## Ablagezonen

- `knowledge/` enthält dauerhaft gepflegte Promptotyping Documents einschließlich `handoff.md` als Process Inbox.
- `research-artefacts/` enthält wissenschaftliche Arbeitsprodukte.
- `source-material/` enthält übernommene Quellen und Transkripte.
- `snapshots/` enthält datierte Reports und Audits.
- `handoffs/` enthält außergewöhnliche, datierte Übergabe-Snapshots.
- `generated/` enthält reproduzierbar erzeugte Artefakte.

<!-- Nur vorhandene Zonen führen. Domänenspezifische Ausgabeordner ihrer Artefaktklasse zuordnen. -->

## Lesepfade

<!-- Zwei bis vier Pfade. Jeder Pfad mit kurzer Begründung. -->

- Sessionstart: [[INDEX]] → [[handoff]] → [[project]] → [aufgabenrelevantes Dokument].
- Reproduktion eines Datenexports: [[data]] → [[architecture]] → [[verification]].
- Verstehen einer Designentscheidung: [[specification]] → [[journal]] → [[design]].

## Konvention

Diese Wissensbasis folgt der Konvention für Promptotyping Documents. Sie regelt Naming Contract, Frontmatter-Schema, Routing-Heuristik und Strukturprinzipien. Siehe [Konvention im Vault] oder die Repo-Kopie unter `[Pfad falls vorhanden]`.

## Begriffe

<!-- Alphabetisch sortiert. Offizielle oder konstitutive Abkürzungen in Dateinamen immer hier ausschreiben und definieren. Umfangreiche Fachbegriffe können in glossary.md ausgelagert werden. -->

### [Begriff A]

[Definition. Was der Begriff im Projekt bezeichnet, abgegrenzt von verwandten Begriffen.]

Verwendet in [[document#Sektion]], [[anderes-document]].

### [Begriff B]

[Definition.]

[Abgrenzung gegenüber verwandtem Begriff, falls Verwechslungsgefahr.]

Verwendet in [[document#Sektion]].
````

## Anwendung als Prompt-Template

Strukturanker beim Setup eines neuen Repos. Der Agent erhält den Template-Block, kopiert ihn als `INDEX.md` in den `knowledge/`-Ordner und füllt die Tabelle aus, sobald die ersten Geschwister-Dokumente angelegt sind. Der Index entsteht parallel zur Wissensbasis und wird mit jeder neuen Datei nachgepflegt, nicht erst zum Schluss.

Review-Folie für eine bestehende Wissensbasis. Ein vorhandener Index wird gegen die Vorlage gehalten, um zu prüfen, ob alle Geschwister gelistet sind und kein Eintrag auf eine gelöschte Datei zeigt, ob Lesepfade tatsächlich Pfade sind und nicht nur Listen, und ob die Konvention referenziert ist.

## Beispiel

HerData führt `INDEX.md` mit Lead, Dokumentenmatrix, Lesepfad-Sektionen und Konventionsverweis. Charakteristisch ist der Schlusssatz im Lead: "Konkrete Zahlen erscheinen ausschliesslich in der Anwendung selbst, in den Stat-Cards der Hauptansichten und im Meta-Block der `persons.json`." Das ist ein positiver Verweis auf den Ort der Wahrheit für volatile Zahlen und bleibt auch nach der Regeländerung vom 2026-06-29 zulässig, die ausgeschriebene "Was fehlt"-Sektionen abgeschafft hat. HerData führt die Begriffe-Sektion noch nicht; der Refactor sollte sie ergänzen, weil Termini wie „Erwähnt", „Erwähnung", „Brief", „Person" projekt-konstitutiv sind und in mehreren Dokumenten konsistent verwendet werden.

Das wiederkehrende Fehlmuster zeigt das Inhaltsaudit vom Juli (2026-07-19 - Promptotyping-Wissensbasen Inhaltsaudit (Befund)): Indexe, die gegen den Ordnerinhalt driften, ein Index listet nur die Hälfte der real existierenden Dokumente, ein anderer lässt drei Dateien unregistriert, ein dritter verlinkt ein gelöschtes Datenmodell. Der Index ist das Dokument mit der höchsten Drift-Anfälligkeit der Wissensbasis, weil jede Änderung an einer Geschwister-Datei ihn mittelbar betrifft.

sugw-Edition trägt das Glossar als eigenständiges Dokument `glossar.md` mit zwölf Begriffen (Erschließungsform, Event, Faksimile, Gesamtnennung, Individuelle Person, Menschen-Event, Quelle, Quellenkorpus, Rechtsgeschäft, Regest, Rolle, Volltext). Das ist die Auslagerungs-Variante, die die Konvention oberhalb von 15 bis 20 Begriffen empfiehlt; bei zwölf wäre eine Index-Sektion auch zulässig, sugw hat sich für die Auslagerung entschieden, weil das Glossar als UI-Tooltip-Quelle im Frontend dient und damit auch maschinen-konsumiert wird.

## Begriffe

- Wissensbasis: die Sammlung aller Markdown-Dokumente im `knowledge/`-Ordner eines Promptotyping-Repos.
- Lesepfad: empfohlene Reihenfolge mehrerer Dokumente, die ein bestimmtes Anliegen am effizientesten beantwortet.
- Dokumentenmatrix: tabellarische Übersicht der Promptotyping Documents mit Pfad, Funktion, Routing Question und Aktualisierungsanlass.

## Versionshistorie

- 0.4 (2026-08-21): `handoff.md` als verpflichtende Process Inbox in Dokumentenmatrix, Ablagezonen und Lesepfade aufgenommen.
- 0.3 (2026-08-21): Naming Contract übernommen. Dokumentenmatrix um Pfad, Routing Question und Aktualisierungsanlass erweitert; Ablagezonen und Abkürzungsdefinitionen registriert.
- 0.2 (2026-07-19): "Was fehlt und warum"-Sektion entfernt (Propagierung der Regeländerung Keine Selbstbeschreibung vom 2026-06-29), Ordnerinhalts-Konsistenz als viertes Strukturprinzip, englisches Funktionsvokabular, Block-Status auf `draft`, Lebenszyklus-Absatz. Migration: bestehende Indexe entfernen die Sektion beim nächsten Anfassen; begründete Lücken wandern ersatzlos, positive Verweise an den Bedarfsort.
- 0.1 (2026-05-09): Erstfassung.

## Related

- [Vorlagen Promptotyping Documents](#vorlagen)
- [Konvention Promptotyping Documents](#konvention-v0.1)
- [Promptotyping](#ueberblick)
- [Vorlage Projekt-Wissensdokument](#promptotyping-document-project)
- [Vorlage Journal](#promptotyping-document-journal)
- [Vorlage Handoff](#promptotyping-document-handoff)
