---
title: Project
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
  name: Vorlage Projekt-Wissensdokument
  version: 0.1
  url: https://dhcraft.org/Promptotyping/#vorlage-project-v0.1
topics: ["[[Promptotyping]]", "[[Context Engineering]]", "[[Information Visualisation]]"]
knowledge-sources:
  institutions:
    Digital Humanities Craft OG: https://dhcraft.org
    University of Graz: https://www.uni-graz.at
  standards:
    Markdown: https://daringfireball.net/projects/markdown/
related: [INDEX, data, specification, architecture, design, journal]
---

# Project

Refactor des Repos `DigitalHumanitiesCraft/Promptotyping` zu einem interaktiven Paper. Die Site auf https://dhcraft.org/Promptotyping/ wird zur öffentlichen Methodik-Spezifikation für Promptotyping — adressierbar, versioniert, lesbar als Paper-Narrativ und maschinenlesbar als Endpunkt für `template:`-URIs in Promptotyping-Repos.

## Identität

Die Site ist das öffentliche Pendant zur Promptotyping-Methode, wie sie im Pollin-2026-Paper formalisiert ist und im Vault als systematisches Wissen weiterentwickelt wird. Sie ist nicht das Paper selbst — sie ist eine *interaktive Lese- und Adressierungs-Schicht über dem Paper*, in die alle methodischen Bestandteile (Vorlagen, Konvention, Case Studies, Glossar, Literatur) eingelassen sind.

Drei Adressatengruppen:

- **Forschende**, die Promptotyping anwenden wollen. Sie kommen über das Methode-Narrativ, lesen das Paper im Lesefluss, gehen mit konkreten Vorlagen weg.
- **Reviewer und Reproduzierende**, die ein Promptotyping-Repo gegen die Methode prüfen wollen. Sie kommen über die Konvention oder über eine konkrete Vorlagen-Adresse.
- **Coding-Agenten**, die `template:`-URIs aus Repo-Frontmatter-Feldern auflösen. Sie kommen über versionierte Anker und brauchen die Vorlagen als Maschinenlesbar-Endpunkt.

## Worum es im Refactor geht

Der bestehende Stand des Repos (November 2025) ist methodisch überholt: Sechs-Phasen-Modell statt vier, sieben alte Use Cases statt zwanzig, Living Paper v0.2 mit dekorativen interaktiven Modulen, kein adressierbares Vorlagen-System. Der Refactor löscht diesen Stand und baut die Site komplett neu — aus dem Vault-Wissen heraus, mit dem Pollin-2026-Paper als Lesefluss-Substrat, mit acht versionierten Vorlagen als Anker, mit kuratierten Case Studies als Karten im Paper-Text.

## Worum es nicht geht

- **Kein wissenschaftliches Paper neu schreiben**. Das Paper ist im Vault, wird gespiegelt und in Sektionen aufgeteilt, aber inhaltlich nicht verändert.
- **Kein Methode-Refactor**. Die vier Phasen, drei Dokumenttypen, acht Vorlagen, fünf Konzepte sind im Vault festgeschrieben. Die Site spiegelt sie, sie revidiert sie nicht.
- **Kein Vault-Refactor**. Vault-Korrekturen erfolgen nur, wenn beim Spiegeln Diskrepanzen auffallen, und werden im Vault diskutiert, nicht im Repo entschieden.
- **Keine Internationalisierung jetzt**. Site ist deutsch zuerst. Englische Fassung ist ein eigenes, späteres Projekt.

## Stand und Phase

Status: **Phase 2 abgeschlossen** (Repo-Inventur, Altmaterial gelöscht, knowledge/-Ordner angelegt). Phase 3 (knowledge/-Wissensbasis befüllen) läuft mit Anlage dieses Dokuments. Phase 4 (Implementation in fünf Sprints) folgt.

## Beziehung zum Vault

Diese Wissensbasis ist eine **Spiegelung mit Eigenleben**. Die Vault-Vorlagen, von denen sie geleitet wird, sind im Vault Source of Truth. Was hier dokumentiert wird, ist die *Anwendung* dieser Vorlagen auf das konkrete Refactor-Projekt — also welche Trigger ziehen, welche optionalen Sektionen relevant sind, welche Designentscheidungen für dieses Projekt gefällt werden. Das ist nicht redundant zur Vault-Vorlage, sondern komplementär: die Vorlage beschreibt den Strukturraum, dieses Dokument trägt die Belegung.

## Erwartetes Outcome

- `https://dhcraft.org/Promptotyping/` rendert das Pollin-2026-Paper als scrollbares interaktives Paper
- Phasen-Provenance-Lane macht die methodische Verteilung des Papers visuell ablesbar
- Acht Vorlagen sind unter versionierten Ankern adressierbar (`#vorlage-data-v0.2` etc.)
- Subpath-Aliase (`/vorlagen/data/v0.2`) für Maschinenlesbarkeit
- Acht Case-Study-Tiefenseiten plus Listenübersicht aller 24+ Case Studies
- Glossar als Hover- und Side-Panel-Quelle
- Literaturverzeichnis als Anker-Liste
- Repos können `template: { url: "https://dhcraft.org/Promptotyping/#vorlage-data-v0.2" }` in ihre Frontmatters schreiben und damit auf eine permanente, versionierte Spezifikation verweisen

## Anschluss

- Vault-Wissensdokument [[Promptotyping]] — methodischer Kern
- Vault-Konvention [[Konvention Promptotyping Documents]] — Strukturprinzipien
- Vault-Vorlagen [[Vorlagen Promptotyping Documents]] — Vorlagen-Katalog
- Pollin 2026 Paper — Lesefluss-Substrat
