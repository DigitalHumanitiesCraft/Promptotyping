---
title: Daten
project:
  name: Promptotyping Site
  repository: https://github.com/DigitalHumanitiesCraft/Promptotyping
status: active
language: de
version: 0.1
created: 2026-05-09
updated: 2026-05-09
authors: [Christopher Pollin]
generated-with: Claude Code mit Claude Opus 4.7
method:
  name: Promptotyping
  url: https://dhcraft.org/Promptotyping/
template:
  name: Vorlage Datengrundlage
  version: 0.2
  url: https://dhcraft.org/Promptotyping/#vorlage-data-v0.2
topics: ["[[Promptotyping]]", "[[Context Engineering]]", "[[Information Visualisation]]"]
knowledge-sources:
  institutions:
    Digital Humanities Craft OG: https://dhcraft.org
    University of Graz: https://www.uni-graz.at
  standards:
    Markdown: https://daringfireball.net/projects/markdown/
    YAML Frontmatter: https://yaml.org/spec/1.2.2/
  vocabularies:
    Promptotyping Vorlagen-Katalog: https://dhcraft.org/Promptotyping/#vorlagen
related: [INDEX, project, specification, architecture, design, journal]
---

# Daten

## Gegenstand

Substrat dieses Refactors ist methodisches Wissen: das Pollin-2026-Paper als wissenschaftliche Methodendarstellung, die im Vault gepflegten Promptotyping-Vorlagen und ihre Konvention, eine kuratierte Sammlung dokumentierter Case Studies, fünf konzeptuelle Klammern (Asymmetric Amplification, Epistemic Infrastructure, Critical-Expert-in-the-Loop, Scholar-Centered Design, Context Engineering) und zwei produzierte YouTube-Videos zur Methode. Der Gegenstand ist also kein Datensatz im klassischen Sinn, sondern eine **kuratierte Wissensanordnung**, die in eine adressierbare öffentliche Form gebracht wird.

## Quellen

Vier strukturell unterschiedliche Quelltypen speisen die Site.

**Pollin 2026 Paper.** Der wissenschaftliche Methodentext, im Vault unter [Pollin 2026 - Promptotyping A Context Engineering Method for Building Research Artifacts with Frontier LLMs.md](../../obsidian/Projects/Promptotyping/Pollin%202026%20-%20Promptotyping%20A%20Context%20Engineering%20Method%20for%20Building%20Research%20Artifacts%20with%20Frontier%20LLMs.md) (relativer Vault-Pfad). Status `draft`, Sprache Englisch, sechs Sektionen plus Abstract und Referenzen. Wird als Lesefluss-Substrat ins Repo gespiegelt, sektioniert und mit Phasen-Provenance-Markierung versehen.

**Vault-Vorlagen und Konvention.** Acht Vorlagen unter `Vault Operations/Vorlagen Promptotyping Documents/` (Index, Projekt-Wissensdokument, Datengrundlage, Specification, User Stories, Architecture, Design, Journal) plus die Konvention unter `Vault Operations/Konventionen/Konvention Promptotyping Documents.md`. Erste Vorlage in Version 0.2 (Datengrundlage, refaktoriert 2026-05-09 nach Querschau durch 19 reale `data.md`), die anderen sieben in Version 0.1. Konvention in Version 0.1. Werden ins Repo gespiegelt, beim Spiegeln werden Vault-interne Wikilinks durch Site-Anker oder Inline-Erklärungen ersetzt.

**Case-Study-Sammlung.** 24+ dokumentierte Case Studies, im Vault unter `Projects/Promptotyping/Case Studies/`. Jede Case Study trägt typischerweise: Repo-URL, Live-Demo-URL falls vorhanden, Status (aktiv, abgeschlossen, archiviert), Hauptaussage, methodische Aspekte. Alte Living-Paper-JSON (`prototype/data.json` mit 18 Einträgen) ist als Schablone in `c:\tmp\promptotyping-old-data-schablone.json` gesichert und wird in Sprint 3 als Struktur-Vorlage für die neue `case-studies.json` verwendet — die Inhalte werden aber frisch aus dem Vault generiert, nicht aus der alten JSON übernommen.

**YouTube-Videos zur Methode.** Zwei produzierte Videos zur Promptotyping-Methode:
- Teil 1, Methodik-Erklärung: https://youtu.be/8sUe4Jkh3uQ (42:11, Excel-Daten der österreichischen Hochschulstatistik werden mit Claude Opus 4.5 zu einem `data.md` destilliert; behandelt Destillation, Context Window Management, Context Rot, Promptotyping Documents, Expert-in-the-Loop, Sycophancy, vier Phasen)
- Teil 2, Live-Demo mit Claude Code: https://youtu.be/hd_a-NBO_S4 (vollständiger Workflow von 76 Excel-Dokumenten zu funktionalem Dashboard; behandelt Python-Exploration, Thinking Matrix, Context Compression, iterative Fehlerkorrektur, journal.md und readme.md, spontanes Redesign)

## Modell

Vier Inhaltstypen mit je eigener Render-Logik auf der Site.

**Paper-Sektionen.** Sechs Markdown-Dateien unter `_content/paper/` (`01-introduction.md`, `02-terms-positioning.md`, `03-four-phases.md`, `04-projects.md`, `05-epistemic-infrastructure.md`, `06-discussion.md`). Pro Absatz wird im Spiegel-Schritt eine Phasen-Klasse gesetzt (`{:.phase-preparation}`, `{:.phase-exploration}`, `{:.phase-distillation}`, `{:.phase-implementation}`), die die Phasen-Provenance-Lane bedient. Inline-Begriffe sind als `[[Begriff]]`-Wikilinks markiert und werden beim Render zu Glossar-Trigger-Spans transformiert.

**Vorlagen.** Acht Markdown-Dateien unter `_content/vorlagen/` (`index-v0.1.md`, `project-v0.1.md`, `data-v0.2.md`, `specification-v0.1.md`, `user-stories-v0.1.md`, `architecture-v0.1.md`, `design-v0.1.md`, `journal-v0.1.md`). Jede Vorlage trägt: Frontmatter-Schema, Sektionsstruktur, befüllbarer Block. Beim Render bekommt jede einen versionierten Anker (`#vorlage-{name}-{version}`) und einen Latest-Alias (`#vorlage-{name}`). Subpath-URLs (`/vorlagen/data/v0.2`) werden per `index.html`-Rewrite auf den Anker geleitet.

**Case Studies.** 24+ Markdown-Dateien unter `_content/case-studies/`, eine pro Case Study. Frontmatter trägt: `name`, `genre` (HerData-Genre, Editions-Genre, Externdaten-Genre, Klawiter-Typ, Sonderfall), `status`, `repo-url`, `demo-url`, `vault-doc`. Inhalt: ein bis drei Absätze Charakterisierung, optional Live-Demo-iframe-Embed. Acht Case Studies bekommen Tiefenseiten (Side-Panel-Inhalt), 16 nur Karten im Paper-Lesefluss.

**Glossar und Literatur.** `_content/glossar.md` mit allen Begriffen aus Promptotyping plus den fünf Konzepten, jeder Eintrag mit Kurz- und Volldefinition plus Verweis auf Vault-Quelle. `_content/literatur.md` als geordnete Bibliographie, die im Paper als Anker-Sprung-Ziel dient.

## Grenzen

Vier strukturelle Auslassungen sind dem Material eigen.

**Kein Vault-Zugang von der Site aus.** Die Site rendert nur, was in `_content/` als Markdown liegt. Vault-interne Verlinkungen (`[[CLAUDE]]`, `[[Konvention Promptotyping Documents]]`) sind im Repo nicht aufgelöst und werden beim Spiegeln durch Site-Anker oder Inline-Erklärungen ersetzt. Wer Vault-Tiefe will, muss den Vault selbst öffnen — die Site ist eine kuratierte Spiegelung, keine vollständige Replikation.

**Keine englische Fassung in Phase 1.** Die Site ist deutsch zuerst, das Pollin-Paper liegt im Vault auf Englisch. Beim Spiegeln wird die Sprache nicht übersetzt — der Lesefluss bleibt englisch, das Beiwerk (Vorlagen, Case-Study-Karten, Glossar) wird in Deutsch geschrieben. Vollständige Zweisprachigkeit ist ein eigenes, späteres Projekt.

**Keine Live-Demos eingebettet, wo Embedding nicht möglich ist.** Manche Case-Study-Live-Demos liegen auf Domains, die `X-Frame-Options: DENY` setzen oder kein HTTPS haben. Für diese gibt es nur einen Direktlink, kein iframe.

**Keine `Verzerrungen`-Sektion.** Diese optionale Sektion der Datengrundlage-Vorlage trägt für dieses Projekt nicht. Das Substrat ist methodisches Wissen, kein historisches oder gesellschaftliches Datenmaterial mit erkennbaren systematischen Schiefen, die für die Interpretation relevant wären. Wer eine Verzerrungs-Aussage will, findet sie in der Promptotyping-Methode selbst (Asymmetric Amplification — und das ist dort als Konzept dokumentiert, nicht in dieser `data.md`).

## Verhältnis zur externen Datenquelle

Die Vault-Vorlagen sind im Vault Source of Truth, das Repo spiegelt sie. Was im Repo liegt, wird **nicht zurück in den Vault gespielt**, außer wenn beim Spiegeln Diskrepanzen auffallen, die im Vault korrigiert werden müssen. Die Pipeline ist also einseitig: Vault → Repo, nicht Repo → Vault.

Drei konkrete Konsequenzen: Der Repo-Spiegel kann nicht-Vault-konformen Inhalt enthalten (z.B. Subpath-URL-Aliase, die im Vault keinen Sinn ergeben). Der Vault bleibt für Vault-Operationen autoritativ. Wenn die Vault-Vorlage `data v0.2` refaktoriert wird zu `v0.3`, entsteht im Repo eine zweite Datei `data-v0.3.md` neben `data-v0.2.md` — beide bleiben adressierbar, die alte wird im Vorlagen-Index als "frühere Version" markiert.

## Workflow

Spiegel-Pipeline für jede Vault-Quelle, in fünf Schritten:

1. **Vault-Datei lesen** und prüfen, ob sie für die Site-Spiegelung geeignet ist (manche Vault-Dokumente sind für interne Vault-Arbeit, nicht für externe Lesung)
2. **Wikilinks identifizieren**: jeder `[[Wikilink]]` wird klassifiziert — auflösbar als Site-Anker, durch Inline-Erklärung ersetzbar, oder ersatzlos zu streichen
3. **Frontmatter anpassen**: Vault-Frontmatter (`type:`, `tags:` etc.) wird durch Site-Frontmatter ersetzt; `template:`-Feld bekommt den Site-URI
4. **Markdown-Klassen-Tags setzen** für die Phasen-Provenance-Lane (nur bei Paper-Sektionen)
5. **In `_content/`-Unterordner ablegen** und im Build-Prozess registrieren

Implementation-Details der Pipeline in [architecture.md](architecture.md).

## Beispiele

Beispiel einer Vorlagen-Spiegelung. Vault-Vorlage `Vorlage Datengrundlage.md` enthält im Befüll-Block den Satz *"Die folgende Liste ist als Template gedacht."* Beim Spiegeln nach `_content/vorlagen/data-v0.2.md` wird das beibehalten. Die Vault-Wikilinks `[[CLAUDE]]` (in der Sektion "Strukturprinzipien") wird durch *"siehe [Konvention Promptotyping Documents §6](#konvention-v0.1-strukturprinzipien)"* ersetzt — die Konvention ist auf der Site adressierbar, der Vault-CLAUDE.md nicht.

Beispiel einer Case-Study-Karte. Vault-Dokument `Projects/Promptotyping/Case Studies/herdata.md` enthält Frontmatter mit `repo: https://github.com/chpollin/HerData` und einen Fließtext mit drei Absätzen Charakterisierung. Beim Spiegeln nach `_content/case-studies/herdata.md` wird das Frontmatter umgebaut zu:
```yaml
---
name: HerData
genre: HerData-Genre
status: complete
repo-url: https://github.com/chpollin/HerData
demo-url: https://chpollin.github.io/HerData
vault-doc: https://github.com/.../Projects/Promptotyping/Case%20Studies/herdata.md
---
```
Der Fließtext wird auf einen Absatz Kurzcharakterisierung gekürzt für die Karten-Darstellung; die volle Charakterisierung kommt in das Side-Panel der Tiefenseite.

Beispiel einer Paper-Spiegelung. Pollin-2026-Paper Section 3.1 (`Preparation`) wird gespiegelt nach `_content/paper/03-four-phases.md`. Jeder Absatz dieser Section bekommt die Klasse `{:.phase-preparation}`. Beim Render erscheint links neben jedem Absatz ein vertikaler Strich in `#2a2a2a` (der dunkelste der vier Phasen-Töne) und der Absatz wird beim Phasen-Filter sichtbar bleiben.
