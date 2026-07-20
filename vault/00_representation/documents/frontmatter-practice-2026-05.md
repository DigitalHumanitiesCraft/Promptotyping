---
type: representation
source-type: document
source: "[[_sources/frontmatter-practice-2026-05]]"
converter: "Markdown copy; internal Obsidian wikilinks flattened to plain text; block IDs appended for anchoring"
channel: handover
metadata:
  title: "Frontmatter-Praxis in Promptotyping-Repos 2026-05"
  creator: "Christopher Pollin, Digital Humanities Craft"
  date: "2026-05-09"
  format: "text/markdown"
  identifier: ""
  license: "CC BY 4.0 (vault content)"
  confidential: false
created: 2026-05-09
updated: 2026-05-09
checked:
  validation: 2026-07-20
---

# Frontmatter-Praxis in Promptotyping-Repos 2026-05

## Summary

Datierte Bestandsaufnahme der Frontmatter-Praxis in den `knowledge/`-Ordnern aktiver Promptotyping-Repos, Stand Anfang Mai 2026. Belegt die Heterogenität der bestehenden Praxis und liefert die empirische Grundlage für Konvention Promptotyping Documents und Vorlagen Promptotyping Documents. Snapshot, kein evergreen-Dokument; bei Bedarf durch eine neue Bestandsaufnahme ersetzen.

## Untersuchungsgegenstand

Inspiziert wurden die `knowledge/`-Ordner und vergleichbare Wissensbasen folgender Promptotyping-Repos. Die Auswahl deckt die in Promptotyping MOC geführten Case Studies ab, die zum Stichtag aktiv bearbeitet werden oder als Methoden-Referenz dienen.

| Repo | Ordnerpfad | Anzahl Dokumente |
|---|---|---|
| HerData | `docs/knowledge/` | 8 |
| zbz-ocr-tei | `knowledge/` | 24 |
| agentic-edition-pipeline | `knowledge/` | 8 |
| m3gim | `knowledge/` | 12 |
| notker-edition | `knowledge/` | 10 |
| fraktionsprotokolle_web | `knowledge/` | 10 |

Geprüft wurde jeweils das Frontmatter aller `.md`-Dateien (Felder, Werte, Verschachtelung), die Konsistenz innerhalb des Ordners und die Anschlussfähigkeit an das Vault-Frontmatter aus CLAUDE §3.

## Befund

### Spektrum der Frontmatter-Reichhaltigkeit

Die untersuchten Repos verteilen sich entlang einer Skala von „kein Frontmatter" bis „reichhaltiges, semantisch strukturiertes Frontmatter".

| Stufe | Beispiel | Charakterisierung |
|---|---|---|
| Kein Frontmatter | m3gim, fraktionsprotokolle_web | Reine Markdown-Dokumente, alle Metadaten in Prosa |
| Minimal | agentic-edition-pipeline | `title`, `description`, `tags` |
| Vault-konform | zbz-ocr-tei | `type`, `created`, `updated`, `tags`, `status` (entspricht CLAUDE §3) |
| Reichhaltig | HerData | zusätzlich `title`, `language`, `version`, `authors`, `generated-with`, `method`, `method-url`, `related` |
| Semantisch verschachtelt | HerData/project.md, Vorlage | `project: {name, repository}`, `method: {name, url}`, `knowledge-sources: {...}` |

Die Stufe „Semantisch verschachtelt" tritt bisher nur im zentralen Projektdokument von HerData und in der davon abgeleiteten Vorlage auf. Sie ist die Stufe, die LOD-Anschlussfähigkeit über URI-Mappings ermöglicht.

### Wiederkehrende Felder

Über alle Repos mit Frontmatter hinweg kehren folgende Felder mit unterschiedlicher Häufigkeit:

| Feld | Häufigkeit | Verlässlichkeit |
|---|---|---|
| `tags` | sehr häufig | konsistent als Liste |
| `created`, `updated` | häufig | meist im Format `YYYY-MM-DD` |
| `type` | mittel | Werte uneinheitlich (`knowledge`, `journal`, `moc`, `requirements`, `design`) |
| `status` | mittel | meist `active` oder `draft` |
| `title` | selten | nur in HerData und agentic-edition-pipeline |
| `description` | selten | nur in agentic-edition-pipeline |
| `authors`, `generated-with` | sehr selten | nur in HerData |
| `method`, `method-url` | sehr selten | nur in HerData, flach statt verschachtelt |
| `dependencies` | sehr selten | in zbz-ocr-tei nicht im Frontmatter, sondern als Prosa-Zeile unter dem Titel |

### Repo-spezifische Idiosynkrasien

zbz-ocr-tei führt unter dem Titel jedes Dokuments eine Prosa-Zeile `Dependencies: [DOC1](DOC1.md), [DOC2](DOC2.md)`. Diese Information gehört semantisch ins Frontmatter, ist dort aber nicht abgelegt. Refactoring-Kandidat.

notker-edition nutzt projektnahe `type:`-Werte (`requirements`, `design`) statt der Knowledge/Process/Action-Klassifikation aus dem Promptotyping-Paper. Das ist mit der Methode kompatibel, aber nicht ableitbar; `requirements` und `design` sind beide Knowledge bzw. hybrid, die Information geht beim aktuellen Wert verloren.

m3gim und fraktionsprotokolle_web haben kein Frontmatter. Die in Prosa nachgehaltenen Metadaten (Stand, Versionsangaben, Querverweise) sind nicht maschinenlesbar und entkoppeln die Dokumente vom übrigen Frontmatter-Vokabular.

agentic-edition-pipeline ist absichtlich minimalistisch, als forkbares Template mit Platzhalterzeilen (`[TODO]`) gedacht. Das macht das Frontmatter-Inventar entsprechend sparsam, ist aber für ein Methoden-Template eher zu sparsam.

HerData ist der Reichtums-Pol und gleichzeitig die Quelle der hier abstrahierten Vorlage. `docs/knowledge/project.md` führt das verschachtelte `project:`- und `method:`-Schema ein, das keiner anderen Repo-Version vorliegt.

## Synthese

Die heterogene Praxis ist nicht das Ergebnis bewusster projektspezifischer Entscheidungen, sondern emergierter Frontmatter-Inkrement: jedes Repo hat sein Schema in einer eigenen Session definiert, ohne ein gemeinsames Vokabular. Drei Konsequenzen folgen daraus. ^heterogen

Erstens ist die projektübergreifende Lesbarkeit niedrig. Eine LLM-Sitzung, die mehrere Repos kennt, muss für jedes Repo das jeweils eigene Frontmatter-Vokabular rekonstruieren. Das verbraucht Tokens und produziert Fehler.

Zweitens ist die Diagnose-Funktion der Knowledge/Process/Action-Klassifikation nicht maschinenlesbar verankert. Die Klassifikation existiert im Methoden-Paper und im Promptotyping-Wissensdokument, aber nicht in den Frontmatters der Dokumente, die sie betrifft. Ein Agent kann ohne Lektüre des Dokumentinhalts nicht entscheiden, ob ein Dokument Knowledge, Process oder Action ist, obwohl die Diagnostik (Output inhaltlich falsch → Knowledge prüfen, formal falsch → Action prüfen) auf genau dieser Klassifikation aufsetzt.

Drittens ist `knowledge-sources` als verschachteltes URI-Mapping eine echte Innovation gegenüber der bestehenden Praxis. Es konsolidiert die externen Anschlüsse (Methode, Standards, Vokabulare, Institutionen) an einer Stelle und ist im Gegensatz zu flachen `method-url:`-Feldern erweiterbar, ohne das Schema zu brechen.

## Empfehlungen

Aus dem Befund leiten sich drei konkrete Empfehlungen für die in Konvention Promptotyping Documents festgehaltene Konvention ab.

`type:` als Pflichtfeld mit den Werten `knowledge`, `process`, `action`, `hybrid`. Macht die Diagnostik maschinenlesbar und ist mit der Methode konsistent.

`dependencies:` als Frontmatter-Liste statt Prosa-Zeile. Behebt das zbz-ocr-tei-Pattern und macht die Lektüre-Reihenfolge programmatisch zugreifbar.

`knowledge-sources:` als empfohlenes Feld in Knowledge Documents mit institutionellem oder methodischem Anschluss. Konsolidiert die externen Anschlüsse und schafft LOD-Anschlussfähigkeit für die Repo-Wissensbasis.

## Methodische Anmerkung

Diese Bestandsaufnahme ist datiert (2026-05) und nicht evergreen. Frontmatter-Praxis in den genannten Repos ändert sich durch laufende Sessions; insbesondere HerData ist zum Stichtag in aktiver Refactoring-Phase (Branch `fix/feedback-bugs`). Eine Folge-Bestandsaufnahme ist sinnvoll, sobald die in Konvention Promptotyping Documents beschriebenen Empfehlungen in mindestens drei Repos umgesetzt sind.

## Nachtrag 2026-05-09 spätabends — Topics-Wende und Repo-Refactor-Welle

Methodische Wendung. Im Lauf der Vorlagen-Arbeit wurde das `tags:`-Feld der Konvention von einer Empfehlung auf eine kontextabhängige Option zurückgestuft und durch ein neues Feld `topics:` ersetzt. Der Unterschied ist konzeptionell, nicht nur kosmetisch: Tags klassifizieren ein Dokument (Funktion, Charakter, Veränderlichkeit), Topics richten den Lesekontext aus; sie sind als Wikilinks zu Vault-Konzepten formuliert und sagen einem Coding-Agenten, in welchem Wissensfeld er beim Lesen oder Befüllen verortet sein soll. Ein `design.md` mit `topics: ["Information Visualisation", "Scholar-Centered Design"]` schickt den Agenten beim UI-Design-Reasoning in genau diese Konzeptdokumente, statt generische UI-Patterns zu aktivieren.

Methodische Korrektur design.md. Parallel wurde die Klassifikation von `design.md` von „Hybrid (Knowledge/Action)" auf reines Knowledge umgestellt. Die Sozialisierung des Coding-Agenten auf der ästhetischen Schicht entsteht nun durch Komposition: `CLAUDE.md` (Action im Repo-Root) verweist auf `design.md` als Wertequelle und übersetzt die Designhaltung in imperativ formulierte Designprinzipien. Knowledge bleibt deklarativ, Action bleibt imperativ; ein Hybridtyp ist nicht nötig, weil die ästhetische Steuerung aus der Komposition zweier Dokumente entsteht. Diese Korrektur wurde in der Konvention, im Promptotyping-Wissensdokument, im Promptotyping MOC und in Vorlage Design durchgängig nachgezogen.

Querschau über drei zusätzliche Repos. Vor dem Repo-Refactor wurden sugw-Edition, sugw-Pipeline und m3gim strukturell untersucht. Befund: Drei von drei Repos hatten kein Frontmatter, HerData war der Outlier-Pol, nicht der Standard. Zudem führten alle drei Repos die Substanz-Funktion gespalten, sugw-Edition in fünf Dokumente (requirements, scholar-user-stories, decisions, exploration, analyse), sugw-Pipeline in zwei (status, architecture mit teilweiser Substanz), m3gim in mehrere (forschungsrahmen, entscheidungen, tests). Niemand führte eine konsolidierte `specification.md`. Konsequenz für die Konvention: Spaltung wurde explizit als Norm verankert; `specification.md` als Konsolidierungs-Idealbild bleibt, ist aber transparent als Sollform statt Praxisform markiert.

Neue Vorlage user-stories.md. Aus dem Befund, dass sugw-Edition `scholar-user-stories.md` als eigenes Dokument neben `requirements.md` führt, entstand eine neue Vorlage. User Stories sind narrative Anwendungsszenarien, formal getrennt von den prüfbaren Anforderungen in `specification.md`. Format: „Als [Rolle], die [Kontext], will ich [Ziel], damit [Nutzen]" plus Ableitung zu Anforderung, Komponente und Begriffen. Die Vorlage ist im Vorlagen-Katalog der Konvention geführt.

INDEX als Begriffslexikon. Die Vorlage Index wurde um eine Begriffe-Sektion erweitert; das Glossar lebt in der Regel im INDEX, eine Auslagerung in `glossar.md` ist erst ab etwa 15 bis 20 Begriffen oder bei maschineller Konsumption (UI-Tooltip-Quelle) sinnvoll. sugw-Edition mit zwölf Begriffen plus UI-Tooltip-Verwendung ist der dokumentierte Auslagerungs-Fall.

Refactor-Welle 2026-05-09 abend. Drei Repos wurden auf das neue Schema gehoben, Pflichtkern-Frontmatter (title, project, status, version, created, updated, authors, generated-with, method), Topics als Wikilinks, related für Geschwister-Verlinkung:

- sugw-Edition (`db_for_medieval_legal_transactions_edition`): 11/11 Dokumente refaktoriert. Commit `cd42f6cc5`. Topics-Profile etwa Information Visualisation, Scholar-Centered Design, TEI, Prosopography, Decision Records, Requirements Engineering.
- sugw-Pipeline (`db_for_medieval_legal_transactions`): 6/7 Dokumente refaktoriert. Commit `71d86c2a1f`. `data.md` ausgespart wegen pre-existing inhaltlicher Modifikation (linking semantics, mention vs. distinct counts). `system_prompt_tei_annotation.md` mit `type: action` markiert, weil es als Action-Dokument im knowledge-Ordner liegt.
- m3gim: 12/12 Dokumente refaktoriert. Commit `a34e111`. Topics-Profile etwa Mobility Studies, Music History, Gender Studies, RiC-O, AgRelOn. `datenmodell.md` zusätzlich mit `knowledge-sources:` URIs zu RiC-O und AgRelOn.

Empirischer Stand nach der Welle. HerData, sugw-Edition, sugw-Pipeline (teilweise) und m3gim führen jetzt das verschachtelte semantische Frontmatter; die Praxisform, die in der ersten Bestandsaufnahme nur in HerData/project.md vorlag, ist auf vier Repos ausgedehnt. Die Konvention hat sich aus einer post-hoc-Beschreibung von HerData zu einer prescriptiven Norm entwickelt, an der weitere Repos messbar sind. ^norm

## Nachtrag 2026-05-09 17:16 — HerData-Refactor

Wenige Stunden nach Anlage dieser Bestandsaufnahme hat HerData mit Commit `13f9880` ("UI-Konsolidierung und Knowledge-Vault-Refactor") alle acht Knowledge-Dokumente auf das verschachtelte Frontmatter-Vorbild von `project.md` angehoben. Damit erreicht HerData als erstes Repo die Stufe „Semantisch verschachtelt" durchgängig.

Validierte und entkräftete Empfehlungen. Drei Empfehlungen standen oben. Der Refactor entscheidet zwei davon empirisch.

`knowledge-sources:` als verschachteltes URI-Mapping bestätigt sich, selektiv eingesetzt in `project.md`, `data.md`, `architecture.md`, weggelassen in den Dokumenten ohne externe Anschlüsse (`design.md`, `decisions.md`, `features.md`, `JOURNAL.md`). Diese semantisch-korrekte Selektivität ist die Praxisform, die die Konvention beschreibt.

`type:` als Pflichtfeld entkräftet. Der Refactor führt es in keinem Dokument ein. Stattdessen trägt `title:` die menschenlesbare Identität, der Dateiname implizit den Typ (`JOURNAL.md` ist Process, `decisions.md` ist Knowledge). Die Knowledge/Process/Action-Klassifikation bleibt analytisch gültig (Methodenpaper, Promptotyping), wird aber nicht im Frontmatter operationalisiert. Konsequenz: Die Konvention senkt `type:` von Pflicht- auf Lese-Heuristik herab. ^typedemote

`dependencies:` als Frontmatter-Liste entkräftet. Der Refactor nutzt `related:` als flache Liste. `dependencies:` bleibt als Nische für Repos mit explizitem Vorgängergraph (zbz-ocr-tei-Pattern), nicht als Standardempfehlung.

Neue Beobachtungen. Das durchgängige `version: 0.2` über alle acht Dokumente hinweg legt eine bisher nicht beschriebene Praxis offen: `version:` als Repo-weite Schema-Version, gemeinsam erhöht bei jedem Refactor. Kein dokument-individueller Wert.

Korrektur am Stand. Zwei kleine Inkonsistenzen wurden bei der Inspektion gefunden und behoben: `project.repository` in `project.md` enthielt den `[user]`-Platzhalter aus der Vorlage; `tags:` fehlte in `project.md` (in den anderen sieben Dokumenten gepflegt). Beide wurden auf den Stand der Geschwisterdateien gebracht.

Konsequenz für die Konvention. Konvention Promptotyping Documents wird auf Basis dieser Befunde überarbeitet: Pflichtkern reduziert auf `title, created, updated, status, project, method`; `type:` und `dependencies:` aus Empfehlungen gestrichen; `phase:` aus dem Schema entfernt; Lese-Heuristik (Dateiname → Typ → Diagnose) als Prosa-Sektion eingefügt; `version:` als Repo-Schema-Version dokumentiert; `knowledge-sources:` als kontextabhängig empfohlen geführt. ^core6

## Nachtrag 2026-05-09 — design.md als Knowledge, nicht Hybrid

Im Anschluss an den Refactor wurde die analytische Klassifikation von `design.md` korrigiert. Die ältere Praxis hatte das Dokument als Hybrid (Knowledge + Action) geführt, weil es Gestaltungsentscheidungen für Menschen und Verhaltensvorgaben für den Coding-Agenten gleichzeitig zu tragen schien. Diese Lesart kollabiert die Knowledge/Action-Trennung. Tatsächlich ist `design.md` deklarativ; es beschreibt Designhaltung, Designsystem, Interaktionsmuster und Visualisierungslogik. Die ästhetische Sozialisierung des Agenten entsteht durch Komposition: ein Action-Dokument im Repo-Root (typischerweise `CLAUDE.md`) verweist auf `design.md` als Wertequelle und übersetzt die Designhaltung in imperative Designprinzipien. Damit bleibt `design.md` Knowledge, `CLAUDE.md` ist Action, und der Lese-Effekt aus beiden zusammen sozialisiert den Agenten.

Konsequenz für die Konvention. Konvention Promptotyping Documents und Vorlagen Promptotyping Documents führen `design.md` ab 2026-05-09 als Knowledge mit Action-Anschluss in `CLAUDE.md`. Die Vorlage Design beschreibt die Anbindung an den Action-Layer als eigenen Abschnitt; imperative Designprinzipien werden nicht im Designdokument selbst geführt.

## Nachtrag 2026-05-09 — Vorlage Datengrundlage v0.1 auf v0.2

Anlass: Querschau durch 19 reale `data.md` aus den aktiven Promptotyping-Repos und angrenzenden Workspaces (HerData, klawiter-rescue, notker-edition, sugw-Edition, sugw-Pipeline, fraktionsprotokolle_web, ride-static, vetmed-berichtswesen, wiiw-figaro-nam-demo, wiiw-patent-analysis-demo, objekt-bestimmung-workshop-2026, depcha-aldersbach, diged-neolat-demo, Steinwendtner, KASKADE, TEACHING/demo-2 und drei HerData-Worktree-Spiegel als Duplikate). Befund: Die Vorlage in der Fassung v0.1 deckte die HerData-Achse präzise ab, übersah aber drei Genres, standardgebundene Editionsdaten mit Annotationsebenen und Schema-Constraints (notker, sugw, ride-static, fraktionsprotokolle), mehrstufige Daten-Rekonstruktion mit feldweiser Provenance (klawiter-rescue, HerData), und externe Datenquellen, die nur als Input genommen statt erzeugt werden (vetmed-berichtswesen, wiiw-Datasets, objekt-bestimmung-workshop).

Strukturschärfung. Die Vorlage trennt jetzt vier Pflichtsektionen (`Gegenstand → Quellen → Modell → Grenzen`) von sechs optionalen Sektionen mit explizitem Triggerkriterium (`Normdaten und Anschlüsse`, `Verzerrungen`, `Provenance pro Wert`, `Verhältnis zur externen Datenquelle`, `Workflow`, `Beispiele`). Optionale Sektionen ohne Trigger werden vor dem Commit gelöscht, nicht leer geführt.

Umbenennungen. `Lead → Gegenstand` (Funktion statt Journalismus-Sprache), `Datenmodell → Modell` (vereint JSON-Schema-Achse mit TEI-Annotationsebenen-Achse), `Coverage und Lücken → Grenzen` (qualitativ statt quantitativ; die alte Bezeichnung zog Zahlen an, die laut CLAUDE §6 nicht ins Dokument gehören), `Bekannte Verzerrungen → Verzerrungen` (Wegfall des "Bekannte" macht den optionalen Charakter erkennbar). Neu in der Vorlage formal verankert ist die Abgrenzung Grenzen vs. Verzerrungen; Grenzen benennt strukturelle Auslassungen ("Zeitraum 1418–1447 nicht ausgewertet"), Verzerrungen benennt asymmetrische Abdeckungen innerhalb des erfassten Materials.

Neue Sektionen aus der Empirie. `Provenance pro Wert` formalisiert das Muster aus klawiter-rescue (`regex | llm | missing`-Spur pro Feld) und HerData (Debug-JSON mit `_provenance`-Objekt pro Feld). `Verhältnis zur externen Datenquelle` formalisiert das Muster aus den Externdaten-Repos: was geliefert wird, was nicht modifiziert wird (kein Edit-Pfad, kein Re-Upload), wo die Source of Truth bleibt. Die Sektion `Modell` nimmt jetzt explizit Annotationsebenen und Schema-Constraints auf, sodass die Editions-Achse keine eigene Sektion mehr braucht.

Auswirkung auf bestehende Repos. Keine. Die v0.2-Vorlage ist abwärtskompatibel mit den Repos, die der v0.1-Vorlage gefolgt sind (HerData), und benennt die Sektionen jetzt so, dass die Repos, die die Vorlage *nicht* gelesen haben, sich darin trotzdem wiederfinden (Editionsdaten unter `Modell`, Externdaten unter `Verhältnis zur externen Datenquelle`). Eine Refactor-Welle der bestehenden `data.md` ist nicht erzwungen; sie geschieht beim nächsten Touch der Datei. Konsequenz für die Konvention: keine. Die Konvention Promptotyping Documents verweist auf die Vorlage, ohne deren Sektionsstruktur zu duplizieren.

## Related

- Konvention Promptotyping Documents
- Vorlagen Promptotyping Documents
- Vorlage Datengrundlage
- Promptotyping MOC
- Promptotyping
- CLAUDE
