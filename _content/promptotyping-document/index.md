---
title: Vorlage Index
slug: index
version: "0.2"
status: complete
source: Vorlage Index
mirrored: 2026-06-10
machine-url: https://dhcraft.org/Promptotyping/_content/promptotyping-document/index.md
---

# Vorlage Index

Diese Vorlage strukturiert das Navigationsdokument einer Promptotyping-Wissensbasis. Das resultierende Dokument heißt typischerweise `INDEX.md` und liegt im `knowledge/`-Ordner des Repos. Es ist der einzige Punkt, an dem ein neuer Leser die Lesereihenfolge der gesamten Wissensbasis erschließen kann.

## Geltungsbereich

Die Vorlage trägt, sobald die Wissensbasis mehr als drei Dokumente enthält. Bei kleineren Repos ist ein Index überflüssig und kann in das Identitätsdokument (`project.md` oder `README.md`) integriert werden. Sie trägt nicht für projektübergreifende Übersichten oder MOCs im Vault; dafür gilt der Vault-Standard.

## Funktion des Dokuments

Das Indexdokument adressiert drei Lesergruppen gleichzeitig: einen menschlichen Reviewer, einen neu aufgesetzten Coding-Agenten und den Projekt-Verantwortlichen, der nach Wochen zurückkommt. Es beantwortet vier Fragen: was liegt hier, in welcher Reihenfolge soll ich lesen, welche Begriffe sind in dieser Wissensbasis konstitutiv und wie sind sie definiert, was bedeutet es wenn ein erwartetes Dokument fehlt. Es ist gleichzeitig Navigationsknoten und Begriffslexikon, das eine Dokument, in dem ein Coding-Agent die für das Projekt definierende Begrifflichkeit findet, ohne dass er die Geschwister-Dokumente vollständig lesen muss.

## Strukturprinzipien

Vier Prinzipien tragen das Dokument.

Erstens speichert der Index nicht, er zeigt. Jede Information, die im Index zusammengefasst wird, muss im verlinkten Geschwister-Dokument selbst stehen, sonst entstehen Wahrheitskonflikte zwischen Index und Quelle. Ausnahme: die Begriffsdefinitionen, die hier kanonisch leben, weil das Glossar zentralisiert ist.

Zweitens liefert der Index Lesepfade, nicht nur eine Liste. Eine flache Aufzählung der Dokumente ist eine Datei-Übersicht, keine Lesehilfe. Lesepfade ordnen Dokumente nach Anliegen ("Onboarding", "Reproduktion", "Architektur-Review") und schicken den Leser durch die Wissensbasis in einer Reihenfolge, die der Aufgabe angemessen ist.

Drittens trägt der Index die kanonischen Begriffe des Projekts. Begriffe sind dort definiert, wo sie gebraucht werden; der Index ist die einzige Stelle, an der die definierenden Begriffe vault-weit konsistent gepflegt sind. Geschwister-Dokumente verlinken auf einzelne Begriffe (`[[INDEX#Erschließungsform]]`), statt sie selbst zu definieren. Bei sehr vielen Begriffen (mehr als 15 bis 20) ist die Auslagerung in ein eigenes `glossar.md` zulässig; in der Regel reicht eine Sektion im Index.

Viertens markiert der Index, was fehlt. Wenn eine Funktion (zum Beispiel Datengrundlage oder Bauweise) für das Projekt nicht relevant ist und kein Dokument dafür existiert, sagt der Index das ausdrücklich. Eine Lücke ohne Erwähnung wirkt wie ein Versehen; eine begründete Lücke ist eine Designentscheidung.

## Frontmatter-Schema

Das Indexdokument folgt dem Frontmatter-Schema aus der [Konvention Promptotyping Documents](#konvention-v0.1) (Pflichtkern: `title, project, method, status, created, updated`). Spezifisch für den Index:

- `topics:` üblicherweise leer; der Index ist Meta-Dokument der Wissensbasis und trägt keine domänen-thematische Verortung.
- `related:` listet alle Geschwister-Dokumente, die der Index anbindet. Dies ist die einzige Stelle in der Wissensbasis, an der `related:` vollständig sein muss.
- `knowledge-sources:` entfällt, weil der Index keine inhaltliche Substanz trägt.

## Abschnitte im Detail

### Lead

Funktion: in zwei bis drei Sätzen klar machen, was die Wissensbasis dokumentiert, für wen sie geschrieben ist, was bewusst nicht enthalten ist. Inhalt: Adressatenkreis, thematische Abdeckung, Verweis auf Operatives (Maintenance, Datenexport-Workflow), das nicht in der Wissensbasis selbst liegt. Keine Marketing-Sätze.

### Dokumentenmatrix

Funktion: tabellarische Übersicht aller Geschwister-Dokumente mit ihrer Funktion. Inhalt: Spalten typischerweise Datei, Funktion, Update-Rhythmus. Die Matrix ist die maschinenlesbare Form der Wissensbasis-Struktur und wird von einem Agenten als erstes konsultiert. Reihenfolge der Zeilen folgt den Funktionen aus der Konvention (Identität, Material, Substanz, Bauweise, Gestalt, Genese), nicht alphabetisch.

### Lesepfade

Funktion: Reihenfolgenempfehlungen für unterschiedliche Anliegen. Inhalt: zwei bis vier Pfade in Prosa oder als Liste, etwa "Onboarding eines neuen Mitarbeiters: project → data → specification → architecture", "Reproduktion eines Datenexports: data → architecture → journal", "Verstehen einer Designentscheidung: specification (Decisions-Sektion) → journal → design". Jeder Pfad ist begründet.

### Konvention

Funktion: Verweis auf die Konvention, nach der die Wissensbasis gepflegt wird. Inhalt: Link auf die [Konvention Promptotyping Documents](#konvention-v0.1) (auf dieser Site oder die Repo-Variante davon), plus ein Satz darüber, was der Verweis dem Leser bringt, typischerweise "die Konvention erklärt das Frontmatter-Schema und die Lese-Heuristik, gegen die jedes Dokument lesbar ist".

### Begriffe

Funktion: kanonische Definitionen der projekt-konstitutiven Begriffe, alphabetisch sortiert. Inhalt: pro Begriff ein Absatz mit Definition, Abgrenzung und gegebenenfalls einer Notiz zu häufigen Verwechslungen. Verwendet wird dort, wo der Begriff in den Geschwister-Dokumenten auftaucht; Wikilinks von dort hierher, nicht andersherum. Begriffe, die nur in einem einzigen Dokument vorkommen, gehören nicht hierher; das Glossar ist für Begriffe, die in mehreren Dokumenten konsistent verwendet werden sollen. Bei mehr als 15 bis 20 Begriffen lohnt die Auslagerung in ein eigenes `glossar.md`, dann verweist der Index nur darauf.

### Was fehlt und warum

Funktion: bewusst nicht abgedeckte Funktionen explizit machen. Inhalt: kurze Liste mit Begründung, etwa "keine `data.md`, weil das Projekt ein reines Tool-Repo ist und die Materialgrundlage in `project.md` selbst beschrieben wird" oder "keine `design.md`, weil das Repo nur eine Pipeline und kein Frontend trägt". Diese Sektion fällt weg, wenn die Wissensbasis alle für das Projekt relevanten Funktionen abdeckt.

## Was nicht reingehört

- Inhaltsabschriften aus den Geschwistern. Der Index zeigt, er speichert nicht. Ausnahme: die Begriffsdefinitionen, die hier kanonisch leben.
- Konkrete Zahlen aus der Anwendung (Coverage, Datensatzgrößen, Testcounts). Diese liegen in der Anwendung selbst und im `persons.json#meta` oder vergleichbar.
- Sessionchronik. Was wann geschah, gehört in `journal.md`, nicht in den Index.
- Methodische Einführungen ins Promptotyping. Dafür ist das Promptotyping-Wissensdokument zuständig; der Index zeigt nur darauf.
- Definitionen für Begriffe, die nur in einem einzigen Geschwister-Dokument vorkommen. Diese leben in der "Begriffe"-Sektion des betreffenden Dokuments, nicht im Index.

## Vorlage zum Befüllen

Der folgende Block ist als Template gedacht. Befüllungshinweise stehen als HTML-Kommentare und verschwinden im gerenderten Markdown.

````markdown
---
title: Index
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
  name: Vorlage Index
  version: 0.1
  url: https://dhcraft.org/Promptotyping/promptotyping-document/index
  alias: https://dhcraft.org/Promptotyping/#promptotyping-document-index
related: [project, data, specification, architecture, design, journal]
---

<!-- Lead: zwei bis drei Sätze. Wer adressiert wird, was abgedeckt ist, was woanders liegt. -->

[Lead-Absatz]

## Dokumente

| Dokument | Funktion | Update-Rhythmus |
|---|---|---|
| [[project]] | Identität: Was ist dieses Projekt | selten |
| [[data]] | Material: Was ist die Datengrundlage | bei jedem Datenexport |
| [[specification]] | Substanz: Was soll das System tun und warum | inkrementell |
| [[architecture]] | Bauweise: Wie ist es technisch realisiert | bei Stackwechsel |
| [[design]] | Gestalt: Wie sieht es aus, wie verhält es sich | bei Designsystem-Refactor |
| [[journal]] | Genese: Wie sind wir hierhin gekommen | pro Session |

<!-- Reihenfolge folgt Funktions-Logik, nicht alphabetisch. Nicht relevante Funktionen weglassen. -->

## Lesepfade

<!-- Zwei bis vier Pfade. Jeder Pfad mit kurzer Begründung. -->

- Onboarding eines neuen Mitarbeiters: [[project]] → [[data]] → [[specification]] → [[architecture]].
- Reproduktion eines Datenexports: [[data]] → [[architecture]] → [[journal]].
- Verstehen einer Designentscheidung: [[specification]] → [[journal]] → [[design]].

## Konvention

Diese Wissensbasis folgt der Konvention für Promptotyping Documents. Sie regelt das Frontmatter-Schema, die Lese-Heuristik und die Strukturprinzipien, gegen die jedes Dokument lesbar ist. Siehe [Konvention auf der Methodik-Site] oder die Repo-Kopie unter `[Pfad falls vorhanden]`.

## Begriffe

<!-- Alphabetisch sortiert. Pro Begriff: Definition, Abgrenzung, optional Notiz zu Verwechslungen. Nur Begriffe, die in mehreren Dokumenten konsistent verwendet werden. Bei mehr als 15-20 Begriffen: in glossar.md auslagern. -->

### [Begriff A]

[Definition. Was der Begriff im Projekt bezeichnet, abgegrenzt von verwandten Begriffen.]

Verwendet in [[document#Sektion]], [[anderes-document]].

### [Begriff B]

[Definition.]

[Abgrenzung gegenüber verwandtem Begriff, falls Verwechslungsgefahr.]

Verwendet in [[document#Sektion]].

## Was fehlt und warum

<!-- Optional. Nur wenn bewusste Lücken bestehen. Pro Lücke ein Satz mit Begründung. -->

- Keine `[Funktion]`, weil [Begründung].
````

## Anwendung als Prompt-Template

Strukturanker beim Setup eines neuen Repos. Der Agent erhält den Template-Block, kopiert ihn als `INDEX.md` in den `knowledge/`-Ordner und füllt die Tabelle aus, sobald die ersten Geschwister-Dokumente angelegt sind. Der Index entsteht parallel zur Wissensbasis und wird mit jeder neuen Datei nachgepflegt, nicht erst zum Schluss.

Review-Folie für eine bestehende Wissensbasis. Ein vorhandener Index wird gegen die Vorlage gehalten, um zu prüfen, ob alle Geschwister gelistet sind, ob Lesepfade tatsächlich Pfade sind und nicht nur Listen, ob die Konvention referenziert ist und ob Lücken benannt sind.

## Beispiel

HerData führt `INDEX.md` mit Lead, Dokumentenmatrix, Lesepfad-Sektionen und Konventionsverweis. Charakteristisch ist der Schlusssatz im Lead: "Konkrete Zahlen erscheinen ausschliesslich in der Anwendung selbst, in den Stat-Cards der Hauptansichten und im Meta-Block der `persons.json`." Diese Negation ist die Praxisform der „Was fehlt und warum"-Sektion. HerData führt die Begriffe-Sektion noch nicht; der Refactor sollte sie ergänzen, weil Termini wie „Erwähnt", „Erwähnung", „Brief", „Person" projekt-konstitutiv sind und in mehreren Dokumenten konsistent verwendet werden.

sugw-Edition trägt das Glossar als eigenständiges Dokument `glossar.md` mit zwölf Begriffen (Erschließungsform, Event, Faksimile, Gesamtnennung, Individuelle Person, Menschen-Event, Quelle, Quellenkorpus, Rechtsgeschäft, Regest, Rolle, Volltext). Das ist die Auslagerungs-Variante, die die Konvention oberhalb von 15 bis 20 Begriffen empfiehlt; bei zwölf wäre eine Index-Sektion auch zulässig, sugw hat sich für die Auslagerung entschieden, weil das Glossar als UI-Tooltip-Quelle im Frontend dient und damit auch maschinen-konsumiert wird.

## Begriffe

- Wissensbasis: die Sammlung aller Markdown-Dokumente im `knowledge/`-Ordner eines Promptotyping-Repos.
- Lesepfad: empfohlene Reihenfolge mehrerer Dokumente, die ein bestimmtes Anliegen am effizientesten beantwortet.
- Dokumentenmatrix: tabellarische Übersicht der Geschwister-Dokumente mit ihrer Funktion und ihrem Update-Rhythmus.
