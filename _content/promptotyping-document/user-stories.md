---
title: Vorlage User Stories
slug: user-stories
version: "0.2"
status: complete
source: Vorlage User Stories
mirrored: 2026-06-10
machine-url: https://dhcraft.org/Promptotyping/_content/promptotyping-document/user-stories.md
---

# Vorlage User Stories

Diese Vorlage strukturiert das User-Stories-Dokument einer Promptotyping-Wissensbasis für den Ausnahmefall der ausgelagerten Datei. Seit der Konventionsänderung 2026-05-30 ist der Default, Epics und User Stories als eigene Sektion in `specification.md` zu führen ([Vorlage Specification](#promptotyping-document-specification), ab Vorlagen-Version 0.2); die Strukturprinzipien dieser Vorlage gelten dort unverändert. Eine separate Datei (typischerweise `user-stories.md`, alternativ `scholar-user-stories.md` bei Forschungsprojekten) ist die dokumentierte Ausnahme für große Projekte, deren Substanz-Funktion gespalten wird.

## Geltungsbereich

Die Vorlage trägt als separate Datei nur, wenn die Substanz-Funktion des Projekts gespalten wird, typischerweise bei großen Editionsprojekten, deren `specification.md` sonst unlesbar würde (dokumentierte Ausnahme, Konventionsänderung 2026-05-30). Default ist die Sektion Epics und User Stories in `specification.md`. Inhaltliche Voraussetzung bleibt in beiden Formen: Das Projekt hat eine UI und mehrere Nutzer-Personas oder Forschungsoperationen sind unterscheidbar; bei reinen Pipeline- oder Tool-Repos entfällt die Funktion, weil dort kein Anwendungsszenario im Sinne von Forschungsoperationen existiert. Sie trägt nicht für Personas oder Empathy Maps; diese sind eigene UX-Artefakte und gehören gegebenenfalls in eine `personas.md`. Sie trägt auch nicht für formale funktionale Anforderungen; diese gehören in `specification.md`.

## Funktion des Dokuments

Das Dokument beantwortet "wer benutzt das System wie und warum". Es übersetzt die formalen Anforderungen aus `specification.md` in narrative Anwendungsszenarien, Sätze im Format „Als [Rolle] möchte ich [Ziel], damit [Nutzen]". Adressiert sind drei Lesergruppen: ein Forschender oder Anwender, der prüfen will, ob das System sein Anliegen unterstützt; ein UX-Designer, der die Interaktion gegen Szenarien testet; ein Coding-Agent, der eine neue Funktion baut und prüfen muss, welche Szenarien sie betrifft.

Im Promptotyping-Kontext sind User Stories die Brücke zwischen Scholar-Centered Design (siehe Glossar) und Implementation. Sie entstehen typischerweise in der Preparation- oder Exploration-Phase aus Sessions mit Domänenexperten und werden iterativ verfeinert.

## Strukturprinzipien

Vier Prinzipien tragen das Dokument.

Erstens trennt es Anwender-Perspektive von System-Perspektive. Eine User Story sagt, was eine Anwenderin will und warum, nicht was das System leistet. Was das System leistet, gehört in `specification.md`. Diese Trennung verhindert, dass User Stories zu verklausulierten Feature-Listen werden.

Zweitens ist jede Story dreigliedrig: Rolle, Ziel, Nutzen. Eine Story ohne Nutzen ist eine Funktionswunschäußerung; eine Story ohne Rolle ist eine generische Anforderung. Das Dreigliedrige macht Stories untereinander vergleichbar und gegen formale Anforderungen abprüfbar.

Drittens trägt jede Story eine Ableitung. Welche Anforderung in `specification.md` realisiert das Szenario, welche Komponente in `architecture.md` oder `design.md` ist beteiligt, welche Begriffe aus dem INDEX-Glossar werden vorausgesetzt. Diese Ableitung ist die Verlinkung der Story in die Wissensbasis und macht sie maschinenlesbar.

Viertens führt jede Story ihren epistemischen Status. Eine Story ist eine Hypothese über den Anwender, bis der benannte Anwender sie bestätigt hat. Sie ist entweder als validiert markiert (durch wen, wann) oder als Annahme mit Beobachtungspunkt nach dem Muster "Effekt: to be observed", inklusive des Ereignisses, an dem er aufgelöst wird. Stories von Proxies sind als solche gekennzeichnet. Begründung und vollständige Prüfkriterien gehen auf QUS (Lucassen et al. 2016) und den FemPrompt-Fall zurück (siehe Praxis-Sektion, [Epistemischer Status von User Stories](#praxis-user-story-status)).

## Frontmatter-Schema

Das Dokument folgt dem Frontmatter-Schema aus der [Konvention Promptotyping Documents](#konvention-v0.1) (Pflichtkern: `title, project, method, status, created, updated`). Spezifisch für User Stories:

- `topics:` typisch sind Scholar-Centered Design und User Stories. Bei Forschungsprojekten zusätzlich das Forschungsfeld als drittes Topic, soweit es das Befüllen leitet.
- `knowledge-sources:` selten genutzt; User Stories tragen projekt-internes Wissen, nicht externe Anschlüsse.
- `related:` typischerweise `specification`, `design` und gegebenenfalls `architecture`. User Stories sind das Bindeglied dieser drei.

## Abschnitte im Detail

### Lead

Funktion: in zwei bis drei Sätzen den Charakter der Stories und ihre Adressaten benennen. Inhalt: typischerweise „Nutzungsszenarien aus Forscherinnen-Perspektive im Format `Als [Rolle], die …, will ich …, damit …`. Stories sind nach Forschungsoperationen, wissenschaftlicher Absicherung und begrifflicher Orientierung sortiert." Der Lead orientiert den Leser über das Story-Format und die Sortierung.

### Gruppen

Funktion: Stories nach Anliegen-Klassen ordnen. Inhalt: drei bis fünf Gruppen, die das Anliegen-Spektrum strukturieren. Bei Forschungsprojekten typischerweise „Zentrale Forschungsoperationen" (was das System tun soll), „Wissenschaftliche Absicherung" (Zitierbarkeit, Provenienz, Reproduzierbarkeit), „Begriffliche Orientierung" (Tooltip, Glossar-Zugang). Bei Editionsprojekten zusätzlich „Redaktionelle Arbeitsabläufe". Innerhalb jeder Gruppe Stories nach Häufigkeit oder Wichtigkeit sortiert.

### User Stories

Funktion: einzelne Anwendungsszenarien dokumentieren. Inhalt: pro Story eine Überschrift mit kurzem Titel, darunter die Story im Format „Als [Rolle], die [Kontext], will ich [Ziel], damit [Nutzen]." Anschließend die Ableitung als Liste: welche Anforderung, welche Komponente, welche Begriffe.

Pro Story:

- Titel als Überschrift (`### [Operation]`).
- Story im Format „Als [Rolle], die …, will ich …, damit …", in einem Satz oder einem kurzen Absatz.
- Ableitung als Bullet-Liste: Anforderung in `specification.md`, Komponente in `architecture.md` oder `design.md`, Begriffe aus `INDEX.md`.

Die Stories sind nicht durchnummeriert; sie sind nicht IDs, sondern Beschreibungen. Sortierung innerhalb der Gruppen erfolgt nach inhaltlicher Logik, nicht nach Nummer.

## Was nicht reingehört

- Formale funktionale Anforderungen mit FR-IDs und Akzeptanzkriterien. Diese gehören in `specification.md`, Sektion Anforderungen.
- Personas oder Empathy Maps. Diese sind eigene UX-Artefakte mit eigener Methodik.
- Use Cases mit Schritt-für-Schritt-Abläufen. Use Cases sind detaillierter als User Stories; bei Bedarf werden sie als eigene `use-cases.md` geführt.
- Implementations-Details. Wie die Story technisch realisiert ist, gehört in den Code oder in `architecture.md`.

## Vorlage zum Befüllen

Der folgende Block ist als Template gedacht.

````markdown
---
title: User Stories
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
  name: Vorlage User Stories
  version: 0.1
  url: https://dhcraft.org/Promptotyping/promptotyping-document/user-stories
  alias: https://dhcraft.org/Promptotyping/#promptotyping-document-user-stories
topics: ["[[Scholar-Centered Design]]", "[[User Stories]]"]
related: [specification, design, architecture]
---

<!-- Lead: zwei bis drei Sätze. Story-Format und Sortierungs-Gruppen erklären. -->

[Lead-Absatz]

## [Gruppe 1: zum Beispiel Zentrale Forschungsoperationen]

### [Story-Titel]

*Als [Rolle], die [Kontext], will ich [Ziel], damit [Nutzen].*

Validierung: [validiert durch Rolle/Person am YYYY-MM-DD | Annahme (Proxy: wer), Effekt: to be observed, Auflösung: Ereignis]

Ableitung:
- Anforderung [[specification#Anforderung]]
- Komponente [[design#Komponente]] (oder [[architecture#Komponente]])
- Begriffe [[INDEX#Begriff A]], [[INDEX#Begriff B]]

### [Nächster Story-Titel]

[...]

## [Gruppe 2: zum Beispiel Wissenschaftliche Absicherung]

### [Story-Titel]

[...]

## [Gruppe 3: zum Beispiel Begriffliche Orientierung]

### [Story-Titel]

[...]
````

## Anwendung als Prompt-Template

Strukturanker beim Aufsetzen der User Stories. Stories entstehen aus Scholar-Centered-Design-Sessions, Domänen-Workshops oder Requirements-Engineering. Der Agent erhält Sitzungsnotizen oder Forschungsfragen und überführt sie in das dreigliedrige Format. Die Ableitung wird typischerweise nachträglich ergänzt, sobald `specification.md` und `architecture.md` Stand haben.

Review-Folie für eine bestehende User-Stories-Datei. Eine vorhandene Datei wird gegen die Vorlage gehalten, um zu prüfen, ob jede Story dreigliedrig ist (Rolle, Ziel, Nutzen), ob die Ableitung gepflegt ist, und ob die Sortierungs-Gruppen das Anliegen-Spektrum sinnvoll strukturieren.

## Beispiel

sugw-Edition führt `scholar-user-stories.md` mit drei Gruppen (Zentrale Forschungsoperationen, Wissenschaftliche Absicherung, Begriffliche Orientierung). Charakteristisch ist die Ableitungsform unter jeder Story: drei Bullet-Punkte, die Anforderung (`requirements#…`), Komponente (`ui-design#…`) und Begriffe (`glossar#…`) als Wikilinks führen. Diese Ableitung ist die Verlinkung der Story in die Wissensbasis und macht das Dokument zur Brücke zwischen Anwender-Perspektive und System-Perspektive.

Beispielstory aus sugw-Edition:

```markdown
### Verteilung einer Kategorie überblicken

*Als Forscherin, die Häufigkeitsstrukturen in einer Kategorie untersucht, will ich
jederzeit zwischen Gesamtnennung und Individueller Person umschalten, damit ich
Frequenz und Breite sauber voneinander trennen kann.*

Ableitung:
- Anforderung [[requirements#Umschaltbarkeit der Zählebenen]]
- Komponente [[ui-design#Zählebenen-Umschalter]]
- Begriffe [[glossar#Gesamtnennung]], [[glossar#Individuelle Person]]
```

## Begriffe

- User Story: Anwendungsszenario im Format „Als [Rolle], die [Kontext], will ich [Ziel], damit [Nutzen]." Die kanonische Form aus dem agilen Requirements Engineering, hier auf Forschungsoperationen angewandt.
- Rolle: die nutzende Person in einer typisierten Funktion, etwa Forscherin, Editor*in, Reviewer. Nicht ein konkreter Mensch.
- Ableitung: die Verlinkung einer Story in die Wissensbasis. Bestimmt, welche Anforderung, Komponente und Begriffe das Szenario adressiert.
- Anliegen-Gruppe: thematische Sortierung der Stories nach Forschungsoperation, wissenschaftlicher Absicherung oder begrifflicher Orientierung.

## Related

- [Vorlage Specification](#promptotyping-document-specification)
- [Vorlage Design](#promptotyping-document-design)
- [Vorlage Index](#promptotyping-document-index)
- [Konvention Promptotyping Documents](#konvention-v0.1)
