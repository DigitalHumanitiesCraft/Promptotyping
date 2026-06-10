---
title: Project
project:
  name: Promptotyping Site
  repository: https://github.com/DigitalHumanitiesCraft/Promptotyping
status: active
language: de
version: 0.2
created: 2026-05-09
updated: 2026-06-09
authors: [Christopher Pollin]
generated-with: Claude Code mit Claude Opus 4.7
method:
  name: Promptotyping
  url: https://dhcraft.org/Promptotyping/
template:
  name: Vorlage Projekt-Wissensdokument
  version: 0.1
  url: https://dhcraft.org/Promptotyping/promptotyping-document/project
  alias: https://dhcraft.org/Promptotyping/#promptotyping-document-project
topics: ["[[Promptotyping]]", "[[Context Engineering]]"]
knowledge-sources:
  institutions:
    Digital Humanities Craft OG: https://dhcraft.org
    University of Graz: https://www.uni-graz.at
related: [INDEX, specification, architecture, design, journal]
---

# Project

Refactor des Repos `DigitalHumanitiesCraft/Promptotyping` zu einem interaktiven Paper. Die Site auf https://dhcraft.org/Promptotyping/ wird zur öffentlichen Methodik-Spezifikation für Promptotyping — adressierbar, versioniert, lesbar als Paper-Narrativ und maschinenlesbar als Endpunkt für `template:`-URIs in Promptotyping-Repos.

## Identität

Die Site ist das öffentliche Pendant zur Promptotyping-Methode, wie sie im Pollin-2026-Paper formalisiert ist und im Vault als systematisches Wissen weiterentwickelt wird. Sie ist nicht das Paper selbst — sie ist eine *interaktive Lese- und Adressierungs-Schicht über dem Paper*, in die alle methodischen Bestandteile (Vorlagen, Konvention, Case Studies, Glossar, Literatur) eingelassen sind.

Drei Adressatengruppen:

- **Forschende**, die Promptotyping anwenden wollen. Sie kommen über das Methode-Narrativ, lesen das Paper im Lesefluss, gehen mit konkreten Vorlagen weg.
- **Reviewer und Reproduzierende**, die ein Promptotyping-Repo gegen die Methode prüfen wollen. Sie kommen über die Konvention oder über eine konkrete Vorlagen-Adresse.
- **Coding-Agenten**, die `template:`-URIs aus Repo-Frontmatter-Feldern auflösen. Sie kommen über versionierte Anker und brauchen die Vorlagen als Maschinenlesbar-Endpunkt.

## Materialgrundlage

Das Methodik-Repo verarbeitet keine Forschungsdaten — es spiegelt Wissen. Dadurch entfällt die Vorlage Datengrundlage (siehe [journal.md](journal.md), Eintrag 2026-05-09 zur Vorlagen-Trigger-Korrektur). Die Materialgrundlage steht stattdessen kompakt hier.

Vier Quelltypen speisen die Site:

**Pollin 2026 Paper.** Der wissenschaftliche Methodentext. Seit 2026-06-09 ist die sektionierte Fassung in `_content/paper/01-introduction.md` … `07-conclusion.md` (plus `literatur.md`) die **kanonische Arbeitsfassung**; das Vault-Dokument `Pollin 2026 - Promptotyping A Context Engineering Method for Building Research Artifacts with Frontier LLMs.md` ist Lesefassung mit Verweisbanner. Status `draft`, Sprache Englisch, sieben Sektionen plus Abstract und Referenzen. Wird im Lesefluss gerendert und mit Phasen-Provenance-Markierung pro Absatz versehen.

**Vault-Vorlagen und Konvention.** Acht Vorlagen unter `Vault Operations/Vorlagen Promptotyping Documents/` (Index, Projekt-Wissensdokument, Datengrundlage, Specification, User Stories, Architecture, Design, Journal) plus die Konvention unter `Vault Operations/Konventionen/Konvention Promptotyping Documents.md`. Vorlagen-Versionen: sieben in 0.1, Specification in 0.2 (Konventionsänderung 2026-05-30, im Vault nachgezogen 2026-06-09: Epics und User Stories als Default-Sektion in `specification.md`; Vorlage User Stories bleibt als dokumentierte Ausnahme großer Editionsprojekte). Da v0.1 der Specification nie publiziert wurde, startet die Site mit v0.2 als Latest; ob ein v0.1-Snapshot-Anker angeboten wird, ist Operator-Entscheidung beim Spiegeln. Konvention in Version 0.1. Werden ins Repo gespiegelt, beim Spiegeln werden Vault-interne Wikilinks durch Site-Anker oder Inline-Erklärungen ersetzt.

**Case-Study-Sammlung.** 24+ dokumentierte Case Studies, im Vault unter `Projects/Promptotyping/Case Studies/`. Jede Case Study trägt typischerweise: Repo-URL, Live-Demo-URL falls vorhanden, Status, Hauptaussage, methodische Aspekte. Acht davon werden als Tiefenseiten gerendert (HerData, Klawiter-Rescue, zbz-ocr-tei, M3GIM, Notker-Edition, CorrespExplorer, VetMedAI-Wissensbilanz, Agentic Edition Pipeline), die übrigen als Karten in der Listenübersicht.

**YouTube-Videos zur Methode.**
- Teil 1, Methodik-Erklärung: https://youtu.be/8sUe4Jkh3uQ (42:11, vier Phasen, Distillation, Context Window Management, Promptotyping Documents, EIL, Sycophancy)
- Teil 2, Live-Demo mit Claude Code: https://youtu.be/hd_a-NBO_S4 (76 Excel-Dokumente zu funktionalem Dashboard, Thinking Matrix, Context Compression, iterative Fehlerkorrektur)

Die alte Living-Paper-JSON (`prototype/data.json` mit 18 Case-Studies-Einträgen aus November 2025) ist als Struktur-Schablone in `c:\tmp\promptotyping-old-data-schablone.json` gesichert. Sie dient als Format-Vorlage für die neue `data/case-studies.json`, deren Inhalte aber frisch aus dem Vault generiert werden.

## Worum es im Refactor geht

Der bestehende Stand des Repos (November 2025) ist methodisch überholt: Sechs-Phasen-Modell statt vier, sieben alte Use Cases statt zwanzig, Living Paper v0.2 mit dekorativen interaktiven Modulen, kein adressierbares Vorlagen-System. Der Refactor löscht diesen Stand und baut die Site komplett neu — aus dem Vault-Wissen heraus, mit dem Pollin-2026-Paper als Lesefluss-Substrat, mit acht versionierten Vorlagen als Anker, mit kuratierten Case Studies als Karten im Paper-Text.

## Worum es nicht geht

- **Kein wissenschaftliches Paper neu schreiben**. Das Paper ist im Vault, wird gespiegelt und in Sektionen aufgeteilt, aber inhaltlich nicht verändert.
- **Kein Methode-Refactor**. Die vier Phasen, drei Dokumenttypen, acht Vorlagen, fünf Konzepte sind im Vault festgeschrieben. Die Site spiegelt sie, sie revidiert sie nicht.
- **Kein Vault-Refactor**. Vault-Korrekturen erfolgen nur, wenn beim Spiegeln Diskrepanzen auffallen, und werden im Vault diskutiert, nicht im Repo entschieden.
- **Keine Internationalisierung jetzt**. Site ist deutsch zuerst. Englische Fassung ist ein eigenes, späteres Projekt.

## Stand und Phase

Status: **Phase 4 implementiert** (2026-06-10, orchestrierte Session mit vier Subagenten-Arbeitspaketen auf Operator-Anweisung; ersetzt die geplanten fünf Einzel-Sessions). Site vollständig gebaut: Paper-Lesefluss mit Phasen-Provenance-Lane, neun Vorlagen mit Side-Panels und Frontmatter-Inspector, kuratierte Use-Case-Galerie (18 Cases, 7 Tiefenseiten), Überblick-, Praxis-, Skills-, Glossar- (42 Einträge), Konventions- und Literatur-Sektion, Mobile-Layout, SEO. Spezifikations-Erweiterungen A13 bis A16 und ADR-9/ADR-10 dokumentiert. Offen: Human Review der Phasen-Klassifizierung und der gespiegelten Inhalte (CEIL), Live-Test des 404-Routings nach Deploy, Logo-Optimierung (1.1 MB PNG).

## Beziehung zum Vault

Diese Wissensbasis ist eine **Spiegelung mit Eigenleben**. Die Vault-Vorlagen, von denen sie geleitet wird, sind im Vault Source of Truth. Was hier dokumentiert wird, ist die *Anwendung* dieser Vorlagen auf das konkrete Refactor-Projekt — also welche Trigger ziehen, welche Vorlagen für dieses Projekt gar nicht passen (siehe Vorlagen-Trigger-Korrektur), welche Designentscheidungen für dieses Projekt gefällt werden. Das ist nicht redundant zur Vault-Vorlage, sondern komplementär: die Vorlage beschreibt den Strukturraum, dieses Dokument trägt die Belegung.

## Erwartetes Outcome

- `https://dhcraft.org/Promptotyping/` rendert das Pollin-2026-Paper als scrollbares interaktives Paper mit Phasen-Provenance-Lane
- Neun Vorlagen sind unter Latest-Ankern adressierbar (`#promptotyping-document-data` etc.); Snapshot-Sub-Anker bei späteren Versions-Sprüngen
- Subpath-Aliase (`/promptotyping-document/data`) für Menschen; statische Markdown-URLs unter `_content/` als Maschinenadresse (ADR-10)
- Sieben Case-Study-Tiefenseiten plus filterbare, kuratierte Use-Case-Galerie (18 Cases, A7)
- Glossar als Hover- und Side-Panel-Quelle, Literaturverzeichnis als Anker-Liste
- Repos können `template: { url: "https://dhcraft.org/Promptotyping/promptotyping-document/data" }` in ihre Frontmatters schreiben und damit auf die kanonische Latest-Spezifikation verweisen

## Anschluss

- Vault-Wissensdokument [[Promptotyping]] — methodischer Kern
- Vault-Konvention [[Konvention Promptotyping Documents]] — Strukturprinzipien
- Vault-Vorlagen [[Vorlagen Promptotyping Documents]] — Vorlagen-Katalog
- Pollin 2026 Paper — Lesefluss-Substrat
