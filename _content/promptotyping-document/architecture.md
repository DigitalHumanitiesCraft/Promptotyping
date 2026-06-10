---
title: Vorlage Architecture
slug: architecture
version: "0.1"
status: complete
source: Vorlage Architecture
mirrored: 2026-06-10
machine-url: https://dhcraft.org/Promptotyping/_content/promptotyping-document/architecture.md
---

# Vorlage Architecture

Diese Vorlage strukturiert das Bauweise-Dokument einer Promptotyping-Wissensbasis. Das resultierende Dokument heißt typischerweise `architecture.md` und liegt im `knowledge/`-Ordner des Repos. Es trägt die technische Realisierung des Systems und beantwortet die Wie-Frage in Abgrenzung zur Was-Frage (Substanz) und zur Aussehen-Frage (Gestalt).

## Geltungsbereich

Die Vorlage trägt, sobald das System mehr als ein triviales Frontend ist — sobald also Pipeline-Stufen, Modulgrenzen, Datenflüsse oder Sicherheitsannahmen dokumentiert werden müssen. Bei einseitigen Static-Site-Repos ohne Build-Schritt entfällt sie; eine knappe Architektur-Sektion in `specification.md` reicht dann. Sie trägt nicht für Code-Dokumentation auf Funktions- oder Klassenebene — diese liegt im Code (Docstrings, Kommentare, JSDoc).

Bei größeren Systemen zerfällt eine monolithische `architecture.md` in mehrere Dokumente. Typische Spaltungen, die in der Praxis vorkommen: `pipeline.md` für den Datenfluss durch Verarbeitungsstufen, `infrastruktur.md` für Deployment und CI/CD, `engines.md` für externe Modelle und APIs (OCR-Modelle, LLM-Endpunkte, NER-Tools). Die Strukturprinzipien und das Frontmatter-Schema dieser Vorlage gelten dann pro Datei; jede Datei trägt einen abgegrenzten Aspekt der Bauweise-Funktion. Maßgabe ist, dass jeder Aspekt an genau einer auffindbaren Stelle abgedeckt ist.

## Funktion des Dokuments

Das Dokument beantwortet "wie ist das System gebaut: welcher Stack, welche Komponenten, welcher Datenfluss, welche externen Modelle und Services, welche Sicherheits- und Barrierefreiheits-Maßnahmen". Adressiert sind drei Lesergruppen: ein neuer Entwickler, der den Code-Aufbau verstehen muss; ein Reviewer, der die Architekturentscheidungen prüft; ein Coding-Agent, der Komponenten erweitert oder umbaut. Im Promptotyping-Kontext ist die dritte Lesergruppe besonders bedeutsam: der Agent liest dieses Dokument, bevor er Code generiert, und seine Modulgrenz-Beschreibungen geben dem Agenten Halt bei der Implementation. Eine zu vage Architekturbeschreibung führt zu Code, der die intendierten Schichten ignoriert.

## Strukturprinzipien

Drei Prinzipien tragen das Dokument.

Erstens trennt es Wie von Was und Aussehen. Welche Anforderungen das System erfüllt, gehört in `specification.md`. Wie die UI gestaltet ist, gehört in `design.md`. Wie es technisch realisiert ist, gehört hier hin. Diese Trennung verhindert, dass eine Architekturänderung auch eine Spec- und Design-Anpassung erzwingt.

Zweitens beschreibt es Modulgrenzen, nicht Implementationen. Was eine Komponente leistet und woran sie aufhört, ist Architektur; wie sie intern arbeitet, ist Code. Eine Beschreibung, die in den Code hineingreift, veraltet schneller als sie nutzt. Im Promptotyping-Kontext ist die Modulgrenze die Stelle, an der der Coding-Agent Hilfe braucht — sie zu beschreiben heißt, dem Agenten zu sagen, wo er aufhören soll, weiterzubauen.

Drittens trägt es Sicherheit und Barrierefreiheit als Hauptbestandteile, nicht als Anhang. Sicherheitsannahmen und Barrierefreiheits-Maßnahmen sind Architekturentscheidungen, nicht nachträgliche Compliance-Sektionen. Sie stehen im Hauptteil oder gar nicht.

## Frontmatter-Schema

Das Dokument folgt dem Frontmatter-Schema aus der [Konvention Promptotyping Documents](#konvention-v0.1) (Pflichtkern: `title, project, method, status, created, updated`). Spezifisch für Architecture:

- `topics:` projektabhängig. Typisch sind Verweise auf Wissensfelder wie Software Architecture, Pipeline Design, Web Architecture, je nach Charakter des Systems. Bei ML- oder OCR-Pipelines zusätzlich Computer Vision oder NLP Pipelines. Topics werden so gewählt, dass der Agent bei Implementations-Reasoning die richtigen Architektur-Standards aktiviert.
- `knowledge-sources:` sinnvoll, wenn das System auf institutionellen Plattformen (GAMS, eXist-db) oder etablierten Architekturmustern (REST, RDF-Triplestore, statische Generatoren) aufbaut. Standards wie WCAG für Barrierefreiheit oder OWASP für Sicherheit als URI hinterlegen.
- `related:` typischerweise `data`, `specification`, `design`.

## Abschnitte im Detail

### Lead

Funktion: in zwei bis drei Sätzen das Architekturmuster benennen. Inhalt: Charakter der Anwendung (statische Webanwendung, Pipeline mit Frontend, RDF-getriebenes System), die wesentliche Designentscheidung im Sinne von "bewusst schlicht/komplex/redundant gehalten weil…", Verweis auf andere Dokumente, in denen das Was und das Aussehen liegen.

### Stack

Funktion: die eingesetzten Technologien benennen und begründen. Inhalt: Sprachen, Frameworks, Build-Tooling, Plattformen. Pro Wahl ein Begründungssatz, soweit nicht trivial — etwa "Vanilla JavaScript ohne Framework, weil das Projekt ein Forschungsfrontend ist und Pflegeaufwand minimiert werden soll". Versionsangaben sparsam: Major-Version reicht, Minor-Versionen sind im `package.json` oder `requirements.txt`.

### Komponenten

Funktion: die Hauptmodule und ihre Verantwortung. Inhalt: pro Komponente Zweck, Schnittstelle, Modulgrenze. Eine kurze Liste oder Tabelle ist meist klarer als ein ausgreifender Prosatext. Komponenten werden so granular benannt, dass ein Entwickler weiß, welche Datei oder welcher Ordner gemeint ist.

### Datenfluss

Funktion: zeigen, wie Daten von Quelle zu Anzeige fließen. Inhalt: Pipeline-Stufen mit klaren Übergängen — etwa "XML-Quellen → Python-Pipeline → JSON-Export → JavaScript-Frontend". Pro Stufe das Format, das produziert wird, und die Stelle, wo die Validierung erfolgt. Bei mehrstufigen Pipelines hilft eine ASCII-Skizze oder ein verlinktes Diagramm. In großen Pipelines kann diese Sektion zu einer eigenen Datei `pipeline.md` ausgelagert werden; Komponenten und Datenfluss verschmelzen dann zu einer Stufentabelle, die pro Stufe Skript, Input-Format, Output-Format und Verantwortung trägt.

### Externe Modelle und Services

Funktion: alle externen Verarbeitungs-Ressourcen dokumentieren, die das System nutzt. Inhalt: pro Modell oder Service Rolle in der Pipeline, Provider, Endpunkt-Format, Authentifizierung, Limits, Output-Form. Relevant typischerweise für OCR-Modelle, LLM-Endpunkte, NER-Tools, Embedding-Modelle, Geocoding-Services. Diese Sektion entfällt, wenn das System keine externen Verarbeitungs-Services nutzt; bei mehrstufigen ML-Pipelines wird sie häufig zu einer eigenen Datei `engines.md` ausgelagert. Begründung der Modellwahl knapp, in einem Satz pro Modell.

### Sicherheit

Funktion: Sicherheitsannahmen und -maßnahmen offenlegen. Inhalt: was schützt das System wovor (Input-Sanitization, Authentifizierung, Datenminimierung), welche Annahmen liegen zugrunde (statische Site ohne Backend hat keine Server-Side-Angriffsfläche), welche Risiken bleiben akzeptiert. Eine Sicherheitssektion ohne Risikoannahme ist eine Sicherheitsbehauptung.

### Barrierefreiheit

Funktion: WCAG-Konformität und Maßnahmen dokumentieren. Inhalt: angestrebte WCAG-Stufe (typischerweise AA), eingesetzte Maßnahmen (semantisches HTML, ARIA-Attribute, Tastaturbedienung, Kontrastwerte, Screenreader-Tests), bekannte Lücken. Verweis auf Audit-Tools und -Berichte falls vorhanden.

### Repository-Struktur

Funktion: Top-Level-Ordner mit Funktionszuweisung erklären. Inhalt: Tabelle oder Liste der Hauptordner mit einem Satz pro Ordner. Reihenfolge folgt der Datenflusslogik, nicht alphabetisch.

### Build und Deployment

Funktion: den Weg vom Repo zur laufenden Anwendung dokumentieren. Inhalt: lokale Entwicklungsumgebung, Build-Schritt, Deployment-Ziel, CI/CD-Konfiguration. Verweis auf die konkreten Workflow-Dateien (`.github/workflows/`, `pyproject.toml`) als Source of Truth.

## Was nicht reingehört

- User-Anforderungen. Welche Funktionalität das System leistet, gehört in `specification.md`.
- Designtokens, UI-Patterns. Wie das System aussieht, gehört in `design.md`.
- Code-Implementation. Wie eine Komponente intern arbeitet, gehört in den Code (Docstrings, Kommentare).
- Testfälle. Konkrete Testsuites werden im Code dokumentiert; Architecture nennt nur die Test-Strategie als ein bis zwei Sätze.

## Vorlage zum Befüllen

Der folgende Block ist als Template gedacht.

````markdown
---
title: Architektur
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
  name: Vorlage Architecture
  version: 0.1
  url: https://dhcraft.org/Promptotyping/promptotyping-document/architecture
  alias: https://dhcraft.org/Promptotyping/#promptotyping-document-architecture
topics: ["[[Software Architecture]]"]  # bei Pipeline-Projekten zusätzlich [[Pipeline Design]]
knowledge-sources:
  standards:
    [Standard, etwa WCAG]: [URI]
related: [data, specification, design]
---

<!-- Lead: zwei bis drei Sätze. Architekturmuster benennen, wesentliche Designentscheidung andeuten, Verweis auf was und aussehen. -->

[Lead-Absatz]

## Stack

<!-- Sprachen, Frameworks, Build-Tooling. Pro Wahl ein Begründungssatz. -->

[...]

## Komponenten

<!-- Hauptmodule mit Zweck, Schnittstelle, Modulgrenze. Tabelle oft klarer als Prosa. -->

| Komponente | Zweck | Schnittstelle |
|---|---|---|
| [Komponente] | [Zweck] | [Schnittstelle] |

## Datenfluss

<!-- Pipeline-Stufen mit Übergängen und Validierungspunkten. ASCII-Skizze hilfreich. Bei großen Pipelines: eigene pipeline.md auslagern. -->

[...]

## Externe Modelle und Services

<!-- Optional. OCR-Modelle, LLM-Endpunkte, NER-Tools, Embeddings, Geocoding. Pro Eintrag: Rolle, Provider, Endpunkt, Authentifizierung, Limits, Output. Bei mehreren ML-Engines: eigene engines.md auslagern. -->

| Modell/Service | Rolle | Provider | Endpunkt |
|---|---|---|---|
| [Modell] | [Rolle in der Pipeline] | [Provider] | [Endpunkt-Format] |

## Sicherheit

<!-- Annahmen, Maßnahmen, akzeptierte Risiken. Keine reine Behauptung. -->

[...]

## Barrierefreiheit

<!-- WCAG-Stufe, Maßnahmen, bekannte Lücken. -->

[...]

## Repository-Struktur

<!-- Top-Level-Ordner mit Funktionszuweisung. -->

| Ordner | Funktion |
|---|---|
| `[ordner/]` | [Funktion] |

## Build und Deployment

<!-- Lokale Entwicklung, Build, Deployment-Ziel. Verweis auf Workflow-Dateien. -->

[...]
````

## Anwendung als Prompt-Template

Strukturanker beim Aufsetzen der Architektur. Der Agent erhält den Template-Block und befüllt ihn aus dem real existierenden Code-Aufbau, dem `package.json` oder `requirements.txt`, der CI/CD-Konfiguration und den Build-Skripten. Sicherheits- und Barrierefreiheits-Sektionen verlangen Domänenwissen und sollten gegebenenfalls vom Critical Expert verifiziert werden.

Review-Folie für eine bestehende Architektur. Ein vorhandenes `architecture.md` wird gegen die Vorlage gehalten, um zu prüfen, ob alle Sektionen tragen, ob die Modulgrenzen sauber sind, ob Sicherheit und Barrierefreiheit als Hauptbestandteile geführt werden und nicht als Anhang, und ob keine Code-Implementation hineingewachsen ist.

## Beispiel

Monolithischer Fall — HerData führt `architecture.md` mit den Sektionen Stack, Komponenten, Datenfluss, Sicherheit, Barrierefreiheit, Repository-Struktur, Build und Deployment. Charakteristisch ist die Lead-Begründung: "HerData ist eine statische Web-Anwendung mit einer Python-Pipeline für die Datenaufbereitung und einem Vanilla-JavaScript-Frontend ohne Framework. Diese Schlichtheit ist bewusst gewählt: sie reduziert Pflegeaufwand, Lade-Komplexität und Fehlerrisiken auf das Minimum, das ein Forschungs-Frontend braucht." Der Lead trägt die wesentliche Architekturentscheidung (bewusste Schlichtheit) und ihre Begründung in zwei Sätzen.

Beispiel-Frontmatter aus HerData/`architecture.md`:

```yaml
---
title: Architektur
project:
  name: HerData
  repository: https://github.com/chpollin/HerData
status: complete
language: de
version: 0.2
tags: [template, promptotyping, vault-operations]
created: 2026-05-05
updated: 2026-05-09
authors: [Christopher Pollin]
generated-with: Claude Code mit Claude Opus 4.7
method:
  name: Promptotyping
  url: https://lisa.gerda-henkel-stiftung.de/digitale_geschichte_pollin
knowledge-sources:
  institutions:
    Goethe- und Schiller-Archiv: https://www.klassik-stiftung.de/goethe-und-schiller-archiv/
    PROPYLÄEN: https://goethe-biographica.de
related: [data, design, features, maintenance]
---
```

Gespaltener Fall — zbz-ocr-tei führt die Bauweise-Funktion in drei Dokumenten: `PIPELINE.md` (7-stufige OCR-zu-TEI-Pipeline mit Skripten, Input- und Output-Pfaden, Stage-Status), `INFRASTRUKTUR.md` (Azure-API-Zugang, Podman-Container, GitLab-CI, ZBZ-Deployment), `ENGINES.md` (Mistral Document AI, DeepSeek, Gemini, Docling als OCR- und Layout-Engines mit Endpunkten und Limits). Diese Spaltung ist die Praxisform des Geltungsbereich-Hinweises oben: bei mehrstufigen ML-Pipelines mit mehreren externen Modellen reicht eine Datei nicht, weil die einzelnen Aspekte je eigenen Aktualisierungsrhythmus tragen.

## Begriffe

- Stack: die Gesamtheit der eingesetzten Technologien (Sprachen, Frameworks, Plattformen, Tooling).
- Modulgrenze: die Schnittstelle, an der eine Komponente endet und eine andere beginnt — die zentrale Information einer Architekturbeschreibung.
- Datenfluss: der Weg, den Daten von der Quelle bis zur Anzeige durchlaufen, mit Formaten und Validierungspunkten an jedem Übergang.

## Related

- [Vorlage Specification](#promptotyping-document-specification)
- [Vorlage Datengrundlage](#promptotyping-document-data)
- [Vorlage Design](#promptotyping-document-design)
- [Konvention Promptotyping Documents](#konvention-v0.1)
