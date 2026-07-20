---
title: MANIFEST
slug: manifest
mirrored: 2026-06-10
machine-url: https://dhcraft.org/Promptotyping/_content/MANIFEST.md
---

# MANIFEST

Inventar der Inhalts-Substrate, die am 2026-06-10 aus dem Obsidian-Vault (`C:/Users/Chrisi/Documents/obsidian`, nur gelesen) in dieses Repo gespiegelt wurden. Geschrieben wurde ausschliesslich unter `_content/` (ausser `_content/paper/` und `_content/literatur.md`) und `data/`. Inhaltssprache deutsch mit englischen Fachbegriffen; Original-Prompts und Vorlagen-Texte unveraendert.

## Vorlagen (Promptotyping Documents)

Die Vorlagen sind nach `_content/promptotyping-document/{slug}.md` gespiegelt. Quelle jeweils im Vault unter `Vault Operations/Templates/Promptotyping/`. Wikilinks wurden auf Site-Hash-Anker bzw. kurze Inline-Erklaerungen aufgeloest; Wikilinks innerhalb von Vorlagen-eigenen Frontmatter- und Beispielbloecken bleiben als verbatim Vorlagentext erhalten (sie illustrieren die Schreibweise eines Repos, sind keine Navigationslinks).

Nachtrag 2026-07-19 (Vault-Vorlagen-Sweep): Sechs weitere Vorlagen gespiegelt und verankert (Testing, Plan, Report, Domaenenwissen, Verification, Integration), die Funktionsnamen auf das englische Vokabular gezogen (Navigation, Charter, Material, Specification, Architecture, Domain Knowledge, Design, Quality Assurance, Provenance, Planning, Reporting, Agent Instructions, Verification, Integration; Vorlagen-NAMEN bleiben deutsch, sie sind Identifikatoren), die Versionsstaende der bestehenden Spiegel nachgezogen und die Entwurfs-Kennzeichnung des Action-Layers entfernt (freigegeben). Der Domaenenwissen-Slug ist `domain-knowledge`, wie im `template:`-Feld der Vault-Vorlage festgelegt (englischer Slug, ADR-3).

| Datei | Vault-Quelle | Version |
|---|---|---|
| `promptotyping-document/index.md` | Vorlage Index | 0.2 |
| `promptotyping-document/project.md` | Vorlage Projekt-Wissensdokument | 0.2 |
| `promptotyping-document/data.md` | Vorlage Datengrundlage | 0.2 |
| `promptotyping-document/specification.md` | Vorlage Specification | 0.3 |
| `promptotyping-document/user-stories.md` | Vorlage User Stories | 0.2 |
| `promptotyping-document/action-layer.md` | Vorlage Action-Layer | 0.2 |
| `promptotyping-document/architecture.md` | Vorlage Architecture | 0.3 |
| `promptotyping-document/domain-knowledge.md` | Vorlage Domaenenwissen | 0.2 |
| `promptotyping-document/design.md` | Vorlage Design | 0.2 |
| `promptotyping-document/testing.md` | Vorlage Testing | 0.2 |
| `promptotyping-document/verification.md` | Vorlage Verification | 0.1 |
| `promptotyping-document/journal.md` | Vorlage Journal | 0.2 |
| `promptotyping-document/plan.md` | Vorlage Plan | 0.2 |
| `promptotyping-document/report.md` | Vorlage Report | 0.2 |
| `promptotyping-document/integration.md` | Vorlage Integration | 0.1 |

Jede Datei traegt im Frontmatter `title, slug, version, status, source, mirrored, machine-url`.

## Konvention

| Datei | Vault-Quelle | Version |
|---|---|---|
| `konvention.md` | Konvention Promptotyping Documents | 0.1 |

Mit Site-Ergaenzung "Anmerkung der Site (2026-06-10)" zur Maschinen- vs. Menschen-Abrufform der Vorlagen. Dieser Abschnitt ist Site-Ergaenzung, nicht Teil der Vault-Konvention v0.1.

## Glossar

| Datei | Quelle |
|---|---|
| `glossar.md` | data/glossar.json (lesbare Form) |
| `data/glossar.json` | paper/02-terms-positioning, paper/04-projects, paper/05-epistemic-infrastructure, knowledge/INDEX.md, Vault-Konzeptdokumente |

42 Eintraege (Anforderung A6: mindestens 30). `.md` und `.json` inhaltsgleich gehalten; die JSON ist die massgebliche Datenquelle.

## Case Studies

| Datei | Quelle |
|---|---|
| `data/case-studies.json` | Vault Case Studies, MOC-Use-Case-Tabellen, paper/04-projects.md |

18 kuratierte Eintraege, Version 0.3. Klassifiziert nach der Use-Case-Typologie (Pollin 2026, Abschnitt 4.3); das interne Genre-Vokabular erscheint nicht. `diged-neolat` traegt den Anzeigenamen "Lucina Digital Edition".

Sieben Tiefenseiten unter `_content/case-studies/{id}.md`, je aus der zugehoerigen Vault-Case-Study destilliert (Kontext und Forschungsfrage, Daten, Vorgehen, methodischer Beitrag, Links):

| Datei | Vault-Quelle |
|---|---|
| `case-studies/herdata.md` | Case Studies/herdata.md |
| `case-studies/klawiter-rescue.md` | Case Studies/klawiter-rescue.md |
| `case-studies/zbz-ocr-tei.md` | Case Studies/zbz-ocr-tei.md |
| `case-studies/m3gim.md` | Case Studies/m3gim.md |
| `case-studies/notker-edition.md` | Case Studies/notker-edition.md |
| `case-studies/corresp-explorer.md` | Case Studies/corresp-explorer.md |
| `case-studies/coocr-htr.md` | Case Studies/coocr-htr.md |

## Praxis und Skills

| Datei | Vault-Quelle |
|---|---|
| `praxis.md` | Promptotyping MOC, Sektion Methodenerweiterungen |
| `arbeitsumgebung.md` | neu formuliert (Obsidian-Vault als Wissensumgebung, Promptotyping Agent Interface, AI Harness und Skills) |
| `skills/index.md` | neu formuliert (Action-Layer-Praxis), verweist auf coding/writing und Vorlage Action-Layer |
| `skills/coding.md` | kanonisch im Repo (2026-07-20 aus dem Vault uebernommen und optimiert; frueher Vault-Spiegelung) |
| `skills/writing.md` | kanonisch im Repo (2026-07-20 aus dem Vault uebernommen und optimiert; frueher Vault-Spiegelung) |

## Kuratierung: ausgeschlossene Case Studies

Acht im Vault gefuehrte Case Studies sind bewusst nicht in der Galerie. Kuratierungskriterium: fehlende Kundenfreigabe bzw. Vermittlungsformat statt Forschungsartefakt. Sie erscheinen nirgends als Galerie-Eintrag, Link-Ziel `#case-{id}` oder Tiefenseite.

| Ausgeschlossen | Kriterium |
|---|---|
| vetmedai-wissensbilanz | fehlende Kundenfreigabe |
| agentic-edition-pipeline | Meta-Tooling/Template, kein Einzel-Forschungsartefakt fuer die Galerie |
| wiiw-patent-analysis | fehlende Kundenfreigabe |
| wiiw-figaro-subagents | fehlende Kundenfreigabe |
| sugw | fehlende Kundenfreigabe |
| vault-kuration-screencast | Vermittlungsformat (Screencast) |
| wissensorganisation-nano-banana | Vermittlungsformat (Screencast) |
| wissens-projektmanagement-obsidian-claude-code-screencast | Vermittlungsformat (Screencast) |

Die Herkunftsfaelle wiiw-figaro, vault-kuration und sugw treten in `praxis.md` als Methoden-Herkunftsfaelle auf, dort als Projektname im Fliesstext ohne Galerie-Link.

## Luecken und offene Punkte

- Ohne `demo_url`: teicrafter, coocr-htr, kulturpool-explorer, zbz-ocr-tei, austrian-university-dashboard. Diese fuenf haben in den Quellen keine hinterlegte Live-Demo (teiCrafter und coocr-htr nur Repo/Video, zbz-ocr-tei intern, kulturpool nur Video, austrian-university-dashboard nur Video).
- Ohne `repo_url`: austrian-university-dashboard (im Paper ohne Repository-Eintrag gefuehrt).
- Mit `video_url`: diged-neolat, coocr-htr, kulturpool-explorer, klawiter-rescue, austrian-university-dashboard. Alle uebrigen ohne in den Quellen belegtes Video.
- `insight: null`: szd-htr (nicht Teil der Paper-Tabelle 4.1, daher kein dort formulierter methodischer Beitrag). Alle uebrigen 17 tragen einen Beitrag aus Tabelle 4.1.
- Use-Case-Zuordnung szd und stained-glass als data-modelling-capture folgt Paper 4.3 (CVMA und SZD als fruehe Instanzen der Datenmodellierung und Erfassung), waehrend die Interface-Type-Spalte "Capture" lautet; die Galerie trennt useCase (Ort im Datenlebenszyklus) von interfaceTypes (epistemische Funktion). Diese Trennung ist die einzige nicht-triviale Zuordnungsentscheidung.
