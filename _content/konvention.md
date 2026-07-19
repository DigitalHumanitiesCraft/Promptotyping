---
title: Konvention Promptotyping Documents
slug: konvention
version: "0.1"
status: complete
source: Konvention Promptotyping Documents
mirrored: 2026-06-10
machine-url: https://dhcraft.org/Promptotyping/_content/konvention.md
---

# Konvention Promptotyping Documents

## Summary

Promptotyping Documents sind die Markdown-Dokumente im `knowledge/`-Ordner eines Promptotyping-Repos. Diese Konvention beschreibt deskriptiv, welche Funktionen eine solche Wissensbasis abdeckt, welches Frontmatter-Vokabular gilt und welche Strukturprinzipien tragen. Welche und wie viele Dokumente ein konkretes Repo führt, hängt vom Projekt ab und wird vom Agenten anhand der Triggerkriterien pro Funktion entschieden. Sie ist abgeleitet aus der Praxis in HerData (Stand Refactor `13f9880`, 2026-05-09), die als Referenzimplementierung dient. Die ausfüllbaren Vorlagen sind als Promptotyping-Document-Sektionen dieser Site adressierbar (siehe Vorlagen-Katalog unten). Die empirische Belegbasis steht im Vault-Dokument Frontmatter-Praxis in Promptotyping-Repos 2026-05.

## Geltungsbereich

Die Konvention gilt für Markdown-Dateien im `knowledge/`-Ordner (oder gleichwertig benannten Ordner) eines Promptotyping-Repos. Sie gilt nicht für Vault-Spiegeldokumente, die einem getrennten Vault-Standard folgen. Repo-Frontmatter und Vault-Frontmatter sind zwei getrennte Vokabulare; ein Vault-Spiegel eines Repo-Dokuments übernimmt das Repo-Frontmatter nicht ungefiltert.

## Funktionen einer Promptotyping-Wissensbasis

Eine Wissensbasis im `knowledge/`-Ordner deckt eine Reihe von Funktionen ab. Welche Funktionen relevant sind und wie viele Dateien sie tragen, hängt vom Projekt ab. Die Konvention beschreibt diese Funktionen, nicht eine feste Dokumentenliste: ein Agent, der ein neues Repo aufsetzt, prüft das Triggerkriterium pro Funktion und entscheidet, welche Dokumente er anlegt.

Die Funktionsnamen sind seit 2026-07-19 englisch (Navigation, Charter, Material, Specification, Architecture, Domain Knowledge, Design, Quality Assurance, Provenance, Planning, Reporting, Agent Instructions, Verification, Integration). Die Vorlagen-Namen bleiben unverändert, auch wo sie deutsch sind (Vorlage Datengrundlage, Vorlage Domänenwissen), weil reale Repos sie in `template:`-Feldern referenzieren und die Site-Anker auf ihnen stehen; Vorlagen-Namen sind Identifikatoren, keine Funktionsbezeichnungen.

| Funktion | Frage, die sie beantwortet | Trigger | Typischer Träger |
|---|---|---|---|
| Navigation | Was liegt hier, wie lese ich, welche Begriffe sind konstitutiv? | Wissensbasis hat mehr als drei Dokumente oder mehrere konstitutive Begriffe | `INDEX.md` (kombiniert Navigation und Begriffslexikon) |
| Charter | Was ist dieses Projekt, für wen, mit welchem Ziel und welcher Materialgrundlage? | immer | `project.md` oder `README.md` |
| Material | Was ist das verarbeitete oder produzierte Substrat? | Projekt verarbeitet oder produziert Daten | `data.md` |
| Specification | Was soll das System tun und warum? | immer | `specification.md` (Anforderungen, Epics und User Stories, Funktionsumfang, Entscheidungen); ADR/Entscheidungen auslagerbar als `decisions.md`; narrative Szenarien als Sektion in `specification.md`, als separate `user-stories.md` (große Projekte) oder als „Acceptance Scenarios" in der spec (gleichwertig) |
| Architecture | Wie ist es technisch realisiert? | System geht über Static-Site hinaus | `architecture.md` |
| Domain Knowledge | Welches fachmethodische Wissen und welche Vorgaben gelten (das Warum und das fachliche Regelwerk)? | Forschungs-, Editions- oder Datenprojekt mit fachmethodischer Vorgabe- oder Theorieschicht | `editorial-guidelines.md`, `tei-mapping.md`, `methodik.md`, `forschungsrahmen.md`, `ontology.md`; Vorlage [Vorlage Domänenwissen](#promptotyping-document-domain-knowledge) |
| Design | Wie sieht es aus, wie verhält es sich ästhetisch? | Projekt hat eine UI | `design.md` |
| Quality Assurance | Was wird garantiert, was bewusst nicht, und wie wird es geprüft? | Projekt mit Tests, Verifikations- oder Akzeptanzprüfungen | `testing.md` (oder `test-strategy.md`); Vorlage [Vorlage Testing](#promptotyping-document-testing) |
| Verification | Halten die eigenen empirischen und Neuheits-Claims einer adversarialen Prüfung gegen die Rohdaten stand? | Projekt erhebt empirische Befunde oder Neuheitsansprüche, die außenwirksam verwendet werden (Paper, Bericht, Übergabe) | `verification.md` (auch `verifikation.md`, `conformance-*.md`); Vorlage [Vorlage Verification](#promptotyping-document-verification) |
| Provenance | Wie sind wir hierhin gekommen? | immer | `journal.md` |
| Planning | Wohin und in welcher Reihenfolge geht es als Nächstes? | Projekt mit Phasen, Milestones oder Sprint-Steuerung | `plan.md` (oder `roadmap.md`); Vorlage [Vorlage Plan](#promptotyping-document-plan); Vorwärts-Pendant zur Provenance |
| Reporting | Was ist der korrekte Projektstand zum Stichtag X, kommuniziert an einen externen Adressaten? | Projektstatusbericht für externen Empfänger (Auftraggeber, Förderer, Stakeholder); bei Auftragsprojekten Regelfall | `report.md` (oder `status.md`, kollisionsärmer; genre-benannt `zwischenbericht.md`, `abschlussbericht.md`; maschinelle Snapshots dürfen außerhalb `knowledge/` in `reports/` liegen); Vorlage [Vorlage Report](#promptotyping-document-report) |
| Integration | Was liefert dieses Projekt einem anderen (oder erhält von ihm), in welchem Format, und woran wird die Erfüllung gemessen? | Projekt mit Datenaustausch, Kontrakt oder Handoff zu einem anderen Projekt oder einer anderen Lane | `integration.md`, `{gegenüber}-integration.md`; Vorlage [Vorlage Integration](#promptotyping-document-integration) |
| Agent Instructions | Wie soll der Agent sich verhalten, auch ästhetisch? | immer | `CLAUDE.md` (im Repo-Root, nicht in `knowledge/`); referenziert `design.md` als Wertequelle |

Die Funktionen können zusammengefasst werden, wenn das Projekt klein ist (ein triviales Tool-Repo trägt Charter, Material und Specification oft in einer einzigen `project.md`), oder gespalten, wenn das Projekt groß ist (zbz-ocr-tei spaltet die Architecture in Pipeline, Engines, CER-Methodik, TEI-Mapping). Maßgabe ist nicht Vollständigkeit, sondern dass jede für das Projekt relevante Funktion an genau einer auffindbaren Stelle abgedeckt ist.

Standard-Dateinamen sind kleingeschrieben (`project.md`, `data.md`, `specification.md`, `architecture.md`, `design.md`, `journal.md`, `plan.md`, `testing.md`, `verification.md`, `integration.md`, `report.md`), Ausnahme `INDEX.md` als Großbuchstabe-Konvention für Hub-Dokumente. Repos mit anderen Dateinamenskonventionen (zum Beispiel zbz-ocr-tei mit Großbuchstaben-Namen wie `PIPELINE.md`) sind nicht falsch, aber profitieren weniger von der Lese-Heuristik weiter unten.

## Vorlagen-Katalog

Für die Funktionen, die in der Praxis wiederkehren, liegen ausfüllbare Vorlagen als Promptotyping-Document-Sektionen dieser Site. Der Katalog ist offen: eine Vorlage entsteht, sobald ein Funktions-Träger sich in mindestens zwei Repos in vergleichbarer Form wiederholt. Aktuell enthalten:

| Vorlage | Funktion | Empfohlener Dateiname |
|---|---|---|
| [Vorlage Index](#promptotyping-document-index) | Navigation plus Begriffslexikon | `INDEX.md` |
| [Vorlage Projekt-Wissensdokument](#promptotyping-document-project) | Charter (ggf. zusätzlich Material und Specification) | `project.md` oder `README.md` |
| [Vorlage Datengrundlage](#promptotyping-document-data) | Material | `data.md` |
| [Vorlage Specification](#promptotyping-document-specification) | Specification (formale Anforderungen, Epics und User Stories, Funktionsumfang, Entscheidungen) | `specification.md` |
| [Vorlage User Stories](#promptotyping-document-user-stories) | Specification (narrative Anwendungsszenarien als separate Datei; nur dokumentierte Ausnahme) | `user-stories.md` |
| [Vorlage Action-Layer](#promptotyping-document-action-layer) | Agent Instructions | `CLAUDE.md` (Repo-Root) |
| [Vorlage Architecture](#promptotyping-document-architecture) | Architecture (inkl. externe Modelle und Deployment als Sektionen; reguläre Auslagerung `pipeline.md`) | `architecture.md` |
| [Vorlage Domänenwissen](#promptotyping-document-domain-knowledge) | Domain Knowledge (Begründungsschicht und fachliches Regelwerk) | `editorial-guidelines.md`, `methodik.md`, `tei-mapping.md` u. a. |
| [Vorlage Design](#promptotyping-document-design) | Design | `design.md` |
| [Vorlage Testing](#promptotyping-document-testing) | Quality Assurance | `testing.md` |
| [Vorlage Verification](#promptotyping-document-verification) | Verification (adversariale Prüfung eigener Claims gegen die Rohdaten) | `verification.md` |
| [Vorlage Journal](#promptotyping-document-journal) | Provenance | `journal.md` |
| [Vorlage Plan](#promptotyping-document-plan) | Planning (vorwärts) | `plan.md` oder `roadmap.md` |
| [Vorlage Report](#promptotyping-document-report) | Reporting | `report.md` |
| [Vorlage Integration](#promptotyping-document-integration) | Integration (projektübergreifende Kontrakte und Handoffs) | `integration.md`, `{gegenüber}-integration.md` |

Eine Vorlage trägt eine Funktion, nicht einen festen Dateinamen: wer das Repo-Dokument anders nennen will (zum Beispiel `material.md` statt `data.md` oder `corpus.md` für ein Editionsprojekt), nutzt dieselbe Vorlage. Die Frontmatter-Schemas und Strukturprinzipien tragen unabhängig vom konkreten Dateinamen.

Konventionsänderung 2026-05-30: Epics und User Stories ziehen als eigene Sektion in `specification.md`; eine separate `user-stories.md` ist seitdem die dokumentierte Ausnahme für große Projekte (typischerweise Editionsprojekte), deren Specification-Funktion ohnehin gespalten wird. Die [Vorlage Specification](#promptotyping-document-specification) (ab Vorlagen-Version 0.2) trägt die Sektion, die [Vorlage User Stories](#promptotyping-document-user-stories) bleibt für den Ausnahmefall im Katalog.

Wenn ein Repo eine Funktion abdeckt, für die noch keine Vorlage existiert (zum Beispiel `cer-methodik.md` in OCR-Projekten oder `personas.md` als UX-Artefakt), bleibt das Dokument zunächst freihändig; die Konvention liefert das Frontmatter-Vokabular und die Strukturprinzipien, das reicht für den Anfang. Sobald ein zweites Repo dieselbe Funktion in vergleichbarer Form trägt, lohnt sich eine eigene Vorlage.

Verification und Integration waren seit 2026-06-13 Kandidatenfunktionen und sind am 2026-07-19 zu Vollfunktionen mit eigener Vorlage befördert worden, nachdem das Inhaltsaudit die Schwelle von zwei vergleichbaren Vorkommen bestätigt hat (Verification in kisug, FemPrompt und szd-htr-ocr-pipeline; Integration in teiCrafter und szd-htr-ocr-pipeline). Seit 2026-07-19 sind alle Vorlagen des Katalogs freigegeben (`status: complete`); ein Entwurfsstatus einer Vorlage stünde sichtbar in Katalog und Vorlage zugleich.

## Vorlagen-Adressierbarkeit über `template:`-Feld

Jede Vorlage hat eine permanente, öffentliche Adresse auf der Promptotyping-Site (https://dhcraft.org/Promptotyping/). Repos verlinken auf die maßgebliche Vorlagen-Spezifikation über ein `template:`-Feld im Frontmatter. Dadurch wird das Dokument selbst, und nicht der Vorlagen-Spiegel im Vault, die kanonische Quelle: ein Coding-Agent, der einen `template:`-URI sieht, kann die volle Spezifikation aufrufen, ohne den Vault zu kennen.

Das Feld trägt drei Pflicht-Subfelder (`name`, `version`, `url`) und ein optionales (`alias`). Default ist Latest-Adressierung: `url:` und `alias:` zeigen auf die jeweils aktuelle Fassung der Vorlagen-Sektion auf der Site, ohne Versions-Suffix. Zwei URL-Formen sind kanonisch und gleichberechtigt: `url:` ist die Subpath-Form (maschinen-freundlich), `alias:` ist die Hash-Form (browser-nativer Anker auf derselben Seite). Beide werden gleich aufgelöst; Repos können bei Bedarf eine der beiden Formen weglassen.

```yaml
template:
  name: Vorlage Datengrundlage
  version: 0.1
  url: https://dhcraft.org/Promptotyping/promptotyping-document/data
  alias: https://dhcraft.org/Promptotyping/#promptotyping-document-data
```

Snapshot-Adressierung. Falls in Zukunft eine `v0.2` oder höher erscheint, bleiben ältere Fassungen über Hash-Anker auf derselben Vorlagen-Seite erreichbar (`#v0.1`, `#v0.2` usw.). Repos pflegen ihr `template:`-Feld einmalig auf die Vorlage und folgen damit per Default der Latest-Fassung; wer auf eine bestimmte Schnappschuss-Version festnageln will, hängt explizit `#v0.1` an die `url:` und `-v0.1` an den `alias:`.

Das Feld gehört in den Pflichtkern für Repo-`knowledge/`-Dokumente. Vault-Spiegel-Dokumente führen es nicht.

## Action-Layer im Repo-Root

Action-Dokumente liegen im Repo-Root, nicht im `knowledge/`-Ordner. Standard ist `CLAUDE.md` als Agent-Konfiguration; sie sollte explizit auf den `knowledge/`-Ordner verweisen, damit der Agent die Wissensbasis als Kontext nimmt. Struktur und Befüllung beschreibt die [Vorlage Action-Layer](#promptotyping-document-action-layer) (seit 2026-06-09, freigegeben 2026-07-19). `RULES.md`, `INSTRUCTIONS.md`, `cloud-commands.md` sind Forschungsleitstelle-spezifisch (mehrere parallele Agenten mit differenzierten Rollen) und kein Standard für gewöhnliche Promptotyping-Repos.

Auf der ästhetischen Schicht wirkt die Agent-Instructions-Funktion dadurch, dass `CLAUDE.md` das `design.md` als Wertequelle einbindet, etwa über eine Sektion "Designprinzipien" mit imperativ formulierten Sätzen, die aus der Designhaltung abgeleitet sind, oder durch die Anweisung, vor UI-Generierung das `design.md` zu lesen. Das `design.md` selbst bleibt deklaratives Knowledge Document; die imperative Übersetzung gehört in den Action-Layer. Diese Aufgabenteilung folgt der Lese-Heuristik weiter unten und vermeidet, dass ein Knowledge-Dokument seinen analytischen Typ wechselt.

## Klassifikation der Dokumenttypen

Promptotyping unterscheidet drei Dokumenttypen analytisch (Pollin 2026, Sektion 3.3).

Knowledge Documents sind deklarativ. Sie beschreiben Daten, Domäne und Forschungskontext. Beispiele: `README.md`, `project.md`, `data.md`, `requirements.md`, `architecture.md`, `design.md`, `editorial-guidelines.md`. Sie erweitern den epistemischen Horizont des Modells.

Process Documents sind chronologisch oder analytisch. Sie dokumentieren den Arbeitsprozess. Beispiele: `JOURNAL.md`, `learnings.md`, `plan.md`. Sie werden kontinuierlich aktualisiert.

Action Documents sind imperativ. Sie beschreiben, was Agenten tun können. Beispiele: `instructions.md`, `rules.md`, `CLAUDE.md`. Sie steuern das Modellverhalten.

`design.md` ist deklarativ und damit Knowledge: es beschreibt Designhaltung, Designsystem und Interaktionsmuster. Die Sozialisierung des Coding-Agenten auf der ästhetischen Schicht ist ein Lese-Effekt, der entsteht, wenn ein Action-Dokument (typischerweise `CLAUDE.md`) auf das `design.md` verweist und die imperativen Designprinzipien dort führt. Knowledge bleibt Knowledge, Action bleibt Action; die ästhetische Steuerung kommt aus der Komposition zweier Dokumente, nicht aus einem Hybridtyp.

Die Klassifikation ist analytisch, nicht rigide, und wird nicht im Frontmatter geführt. Sie liefert ein Diagnoseraster: Output inhaltlich falsch → Knowledge prüfen. Output formal falsch → Action prüfen. Entscheidungslogik unklar → Process prüfen.

## Lese-Heuristik (Funktion → Typ → Diagnose)

Statt eines `type:`-Feldes im Frontmatter trägt die Funktion eines Dokuments den Typ implizit. Die folgende Heuristik erlaubt einem Agenten, ohne Frontmatter-Lookup zu entscheiden, welches Dokument er bei welchem Fehlerbild zuerst prüft. Die Heuristik verbindet die Funktion mit typischen Dateinamen; wenn ein Repo andere Dateinamen führt, gilt die Funktion, nicht der Name.

| Funktion | Typ | Typische Dateinamen | Bei welchem Fehlerbild zuerst prüfen |
|---|---|---|---|
| Navigation | Knowledge | `INDEX.md`, `00_INDEX.md` | Reihenfolge unklar, Dokument nicht gefunden, Begriff falsch verwendet (Glossar lebt im Index) |
| Charter | Knowledge | `project.md`, `README.md`, `PROJEKT.md` | Output inhaltlich falsch, Projektkontext unklar |
| Material | Knowledge | `data.md`, `DATA.md`, `corpus.md`, `material.md` | Datenfelder verwechselt, Beispiele falsch zitiert |
| Specification (formal) | Knowledge | `specification.md`, `requirements.md`, `features.md`, `decisions.md` | Akzeptanzkriterium ignoriert, frühere Entscheidung revidiert, Funktion falsch dargestellt |
| Specification (narrativ) | Knowledge | `specification.md` (Sektion Epics und User Stories); bei Spaltung `user-stories.md`, `scholar-user-stories.md` | Anwendungsszenario missverstanden, Forschungsoperation ignoriert |
| Architecture | Knowledge | `architecture.md`, `pipeline.md`, `infrastruktur.md` | Falsche Annahmen über Komponenten, Datenfluss, Schichtgrenzen |
| Domain Knowledge | Knowledge | `editorial-guidelines.md`, `tei-mapping.md`, `methodik.md`, `forschungsrahmen.md`, `ontology.md` | Fachregel oder Methode verletzt, Editionsrichtlinie ignoriert, Begründungsschicht fehlt |
| Design | Knowledge | `design.md`, `DESIGN.md` | UI-Inkonsistenz, Designsystem-Bruch, Designhaltung unklar (für Agentenverhalten, das Designwerten widerspricht, zusätzlich `CLAUDE.md` prüfen) |
| Quality Assurance | Knowledge | `testing.md`, `test-strategy.md` | Garantie unklar, Test fehlt oder schlägt fehl, Akzeptanzkriterium nicht geprüft |
| Verification | Knowledge | `verification.md`, `verifikation.md`, `conformance-*.md` | Außenwirksamer Claim unbelegt, Kopfzahl nicht nachrechenbar, Neuheitsanspruch ungeprüft |
| Provenance | Process | `journal.md`, `JOURNAL.md`, `learnings.md` | Entscheidungslogik unklar, Wiederholung früherer Sackgassen |
| Planning | Process | `plan.md`, `roadmap.md` | Reihenfolge oder Phasengrenze unklar, nächster Schritt nicht erkennbar (vorwärts; Provenance ist rückwärts) |
| Reporting | Knowledge (Snapshot) | `report.md`, `status.md`, `zwischenbericht.md`, `abschlussbericht.md` | Externer Stand-Anspruch unklar oder veraltet, Adressat nicht erkennbar, Belege fehlen |
| Integration | Knowledge | `integration.md`, `{gegenüber}-integration.md`, `HANDOFF.md` | Schnittstellenformat missverstanden, Zuständigkeit an der Projektgrenze unklar, beide Seiten beschreiben den Kontrakt widersprüchlich |
| Agent Instructions | Action | `CLAUDE.md`, `RULES.md`, `INSTRUCTIONS.md` (Repo-Root) | Stilbruch, Verbot ignoriert, formal falscher Output |

Bei Repos mit projektsemantisch geprägten Dateinamen (zbz-ocr-tei führt zum Beispiel `TEI-MAPPING.md`, `CER-METHODIK.md`, `EDITION.md`) gilt: Der semantische Inhalt entscheidet über die Funktion, nicht der Dateiname. In der Regel handelt es sich dann um Knowledge Documents, die eine Spezialisierung der Funktionen Material oder Architecture tragen.

## Frontmatter-Schema

Das Frontmatter folgt einem reduzierten Pflichtkern und zwei optionalen Schichten. Der Kern ist so klein wie möglich, weil sich empirisch im HerData-Refactor gezeigt hat, dass weniger Felder konsistenter gepflegt werden.

### Pflichtkern

| Feld | Typ | Zweck |
|---|---|---|
| `title` | string | Menschenlesbarer Dokumenttitel |
| `project` | object | Verschachtelt mit `name` und `repository` |
| `method` | object | Verschachtelt mit `name` und `url`; üblicherweise `Promptotyping` |
| `template` | object | Verschachtelt mit `name`, `version`, `url`, optional `alias`; siehe Sektion *Vorlagen-Adressierbarkeit* |
| `status` | enum | `draft`, `active`, `archived` |
| `created` | date YYYY-MM-DD | Anlagedatum |
| `updated` | date YYYY-MM-DD | Letztes inhaltliches Update |
| `zweck` | string | Ein Klartext-Satz, was das Dokument leistet; verständlich ohne Repo-Kontext |

### Empfohlen

| Feld | Typ | Zweck |
|---|---|---|
| `topics` | list (Wikilinks) | Wissensfelder, die das Dokument-Befüllen oder -Lesen kontextualisieren |
| `language` | string | Sprachcode (`de`, `en`) |
| `version` | string | Repo-Schema-Version, repo-weit gemeinsam erhöht |
| `authors` | list | Personen oder Rollen mit kuratorischer Verantwortung |
| `generated-with` | string | Werkzeug, falls das Dokument LLM-gestützt entstanden ist |
| `related` | list | Querverweise auf Geschwister-Dokumente desselben Repos |

### Kontextabhängig

| Feld | Typ | Zweck |
|---|---|---|
| `knowledge-sources` | nested map | Externe Wissensquellen als URI-Mapping, gruppiert nach Typ (`institutions`, `standards`, `methods`, `vocabularies`) |
| `tags` | list | Optional, nur falls vault-übergreifende domänen-thematische Suche relevant ist; tragen keine strukturelle Information |
| `iteration` | integer | Nur bei iterierten Dokumenten |
| `baseline` | Wikilink | Vorgängerdokument der aktuellen Iteration |
| `feedback-source` | string | Quelle, aus der die Iteration entstand |
| `verification-milestone` | string | Verknüpfter Verification Milestone aus der Pipeline |
| `aliases` | list | Alternative Benennungen für Verlinkung |
| `dependencies` | list (Wikilinks) | Nur bei Repos mit explizitem Vorgängergraph (zbz-ocr-tei-Pattern); sonst entfällt |

### Zur `version:`-Semantik

Der Refactor in HerData (`13f9880`) führt `version: 0.2` durchgängig in allen acht Dokumenten, gleicher Wert über die ganze Wissensbasis hinweg. Damit ist `version:` nicht dokument-individuell zu verstehen, sondern als Repo-weite Schema-Version: alle Dokumente werden gemeinsam auf eine Stufe geliftet, und der Wert markiert den Refactor-Stand. Bei jedem Knowledge-Vault-Refactor wird die Version repo-weit erhöht.

### Zur `knowledge-sources:`-Semantik

`knowledge-sources` ist das Strukturmerkmal, das Promptotyping-Knowledge-Documents von generischen READMEs unterscheidet. Es macht das Dokument LOD-anschlussfähig: Jede aufgelistete Quelle ist durch eine URI eindeutig identifiziert. Die zweite Ebene gruppiert nach Quellentyp, die dritte Ebene listet Label und URI.

Selektive Verwendung. Im HerData-Refactor wird `knowledge-sources:` nur in `project.md`, `data.md` und `architecture.md` geführt, also dort, wo externe Anschlüsse die inhaltliche Substanz tragen. In `design.md`, `decisions.md`, `features.md` und `JOURNAL.md` fehlt es bewusst. Diese Selektivität ist die korrekte Praxis: Das Feld gehört dort hin, wo es trägt, nicht überall.

### Zur `topics:`-Semantik

`topics` ist das Feld, in dem ein Dokument seine Wissensfelder benennt, also die Felder, in denen ein Coding-Agent oder Reviewer beim Lesen und Befüllen kontextuell verortet sein soll. Anders als `tags`, die ein Dokument klassifizieren, richten Topics den Lesekontext aus: sie sagen dem Agenten "in dieser Wissensumgebung lies und arbeite", nicht "so ist dieses Dokument zu sortieren".

Topics werden als Wikilinks zu Vault-Konzepten geschrieben, nicht als Strings. Damit ist die Verlinkung in den Vault-Wissensbestand explizit: ein `design.md` mit `topics: ["[[Information Visualisation]]", "[[Scholar-Centered Design]]"]` schickt den Agenten beim UI-Design-Reasoning in genau diese Konzeptdokumente, statt generische UI-Patterns zu aktivieren. Repos ohne Vault-Spiegel können die Wikilinks als reine Kennungen behandeln; bei Vault-Synchronisation lösen sie sich auf.

Vokabular ist projekt-frei. Eine konvention-weit kontrollierte Topic-Liste gibt es nicht; jedes Repo wählt seine Topics aus dem eigenen Wissensumfeld. Konvention nur: kebab-case oder Capital Case wie der Vault-Dokument-Name.

Verbindlichkeit ist optional. Topics werden geführt, wo ein klares Wissensfeld relevant ist (Datenmodellierung, Information Visualisation, Requirements Engineering); sie entfallen, wo das Dokument keine domänen-thematische Verortung trägt (`INDEX.md`, `journal.md` typischerweise ohne Topics).

## Strukturprinzipien

Drei Prinzipien sollten in jedem Promptotyping Document erkennbar sein.

Trennung Tun, Nicht-Tun, Substanzherkunft. Beschreibung dessen, was das Dokument liefert, ist getrennt von der bewussten Negation und von der Herkunft des verwendeten Materials. Diese Dreiteilung verhindert eine ununterscheidbare Mischung aus Beschreibung, Selbstüberhöhung und Datenherkunft.

Standards als Hauptbestandteil. Eingesetzte Standards, Vokabulare, Ontologien gehören in den Hauptteil eines Knowledge Documents, nicht in einen Anhang. Anschlussfähigkeit an externes Wissen ist Teil der Projektidentität.

Negative Selbstdefinition. Was bewusst nicht geleistet wird, wird genauso explizit benannt wie das, was geleistet wird. Diese Auslassung ist konstitutiv und sollte erhalten bleiben.

## Distillation als Schreibprinzip

Promptotyping Documents folgen dem Distillation-Prinzip aus dem Methoden-Paper: maximale Information mit minimalen Tokens (Hong et al. 2025; Pollin 2026, Sektion 3.3). Konkret bedeutet das:

- Ein Dokument trägt eine abgegrenzte Funktion, kein Sammelsurium.
- Redundanzen zwischen Dokumenten werden über Wikilinks (`related:`) abgebildet, nicht durch Wiederholung.
- Der wichtigste Inhalt steht in den ersten Sätzen und am Schluss, nicht in der Mitte.
- Periodisches Refactoring (Konsolidierung über Prompts) ist erwartet, nicht Ausnahme.

## Anwendung

Beim Aufsetzen eines neuen Promptotyping-Repos:

1. Funktionen prüfen: welche der oben gelisteten Funktionen sind für dieses Projekt relevant (Triggerkriterium pro Funktion anwenden)?
2. Funktionen auf Dokumente abbilden: kleine Projekte fassen mehrere Funktionen in einem Dokument zusammen, große Projekte spalten eine Funktion in mehrere Dokumente.
3. Pro Dokument den passenden Template-Block aus dem Vorlagen-Katalog kopieren und befüllen. Wo keine Vorlage existiert, dient die Konvention als alleinige Richtschnur.

Beim Refactoring eines Knowledge-Ordners, Checkliste:

- Trägt jedes Dokument den Pflichtkern (`title, project, method, status, created, updated`)?
- Ist `version:` repo-weit konsistent?
- Sind verschachtelte Felder (`project:`, `method:`, `knowledge-sources:`) sauber strukturiert (kein flaches `method-url:` etc.)?
- Wird `knowledge-sources:` selektiv eingesetzt, dort, wo externe Anschlüsse tragen, sonst weggelassen?
- Sind die drei Strukturprinzipien (Trennung, Standards-im-Hauptteil, negative Selbstdefinition) im Dokument erkennbar?

## Anmerkung der Site (2026-06-10)

Dieser Abschnitt ist eine Ergänzung der Site, nicht Teil der Vault-Konvention v0.1. Er klärt, wie die Vorlagen-Adressen für Maschinen und für Menschen aufzulösen sind.

Für Maschinen (Coding-Agenten, die per HTTP ohne JavaScript-Ausführung abrufen) ist die kanonische Abrufform jeder Vorlage die statische Markdown-URL unter `_content/`. Sie liefert den rohen Markdown-Text direkt aus dem GitHub-Pages-Repo-Root, ohne dass das Single-Page-JavaScript der Site laufen muss. Muster:

```
https://dhcraft.org/Promptotyping/_content/promptotyping-document/{slug}.md
```

Konkret etwa `https://dhcraft.org/Promptotyping/_content/promptotyping-document/data.md` für die Vorlage Datengrundlage. Diese Adresse ist auch im `machine-url`-Frontmatter-Feld jeder gespiegelten Vorlage hinterlegt.

Die im `template:`-Feld geführten Subpath- und Hash-Formen (`/promptotyping-document/{slug}` und `#promptotyping-document-{slug}`) sind die menschenlesbaren Adressen. Sie führen auf die gerenderte Vorlage in der interaktiven Single-Page. Die Subpath-Auflösung setzt JavaScript voraus: Ein Aufruf von `/promptotyping-document/{slug}` wird über die `404.html` des Repos per JavaScript auf den entsprechenden Hash-Anker umgeschrieben. Ein Agent, der diese Form ohne JavaScript abruft, erhält daher nicht den Vorlagentext, sondern den Routing-Fallback. Wer den Rohtext deterministisch und ohne Browser-Umgebung braucht, verwendet die statische `_content/`-Markdown-URL.

## Verhältnis zum Vault-Frontmatter

Der Vault-Standard schreibt ein eigenes Frontmatter-Minimum mit einer geschlossenen `type:`-Liste fest. Diese Konvention erweitert das Vokabular nur für den Repo-Kontext: Im Repo-`knowledge/`-Ordner gilt der hier beschriebene Pflichtkern statt des Vault-Minimums.

Wenn ein Repo-Dokument als Vault-Spiegel angelegt wird (zum Beispiel eine Methodendokumentation, die im Vault als Wissensdokument geführt wird), wird das Frontmatter angepasst: vault-konformes `type:` wird gesetzt, repo-spezifische Felder (`project`, `version`, `knowledge-sources`) entfallen oder werden in Prosa überführt.
