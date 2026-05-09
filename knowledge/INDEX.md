---
title: INDEX
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
  name: Vorlage Index
  version: 0.1
  url: https://dhcraft.org/Promptotyping/#vorlage-index-v0.1
related: [project, data, specification, architecture, design, journal]
---

# INDEX

Navigation und Begriffslexikon der Wissensbasis dieses Repos. Das Repo `DigitalHumanitiesCraft/Promptotyping` rendert als interaktives Paper auf https://dhcraft.org/Promptotyping/ und ist die öffentliche Methodik-Site für Promptotyping. Die `knowledge/`-Wissensbasis ist die methodische Selbstanwendung — die Site wird zuerst als Promptotyping-Wissensbasis spezifiziert, dann implementiert.

## Lese-Reihenfolge

Wer die Wissensbasis zum ersten Mal liest, folgt dieser Sequenz:

1. [project.md](project.md) — was die Site werden soll, wer die Adressaten sind, wo das Projekt steht
2. [data.md](data.md) — welches Substrat in die Site einfließt: Pollin 2026, Vault-Vorlagen, Case Studies, Videos
3. [specification.md](specification.md) — was die Site können muss: Anker-Schema, `template:`-Auflösung, Phasen-Provenance-Lane, Side-Panels
4. [architecture.md](architecture.md) — wie die Site technisch gebaut wird: URL-Struktur, Tech-Stack, Modul-Inventar
5. [design.md](design.md) — wie die Site aussieht und sich verhält: DHCraft-Designsystem, Phasen-Lane-Spezifikation, Typografie
6. [journal.md](journal.md) — chronologischer Verlauf des Refactors

Wer einen konkreten Aspekt sucht, geht direkt zum entsprechenden Dokument.

## Begriffslexikon

Begriffe, die in dieser Wissensbasis konstitutiv vorkommen. Die kanonischen Definitionen leben in den verlinkten Vault-Wissensdokumenten; hier nur die für das Refactor-Projekt relevanten Kurzform.

**Promptotyping**: Iterative Context-Engineering-Methode in vier Phasen — Preparation, Exploration & Mapping, Distillation, Implementation —, um aus Daten und Frontier-LLMs Forschungsartefakte zu erzeugen. Promptotyping Documents sind das primäre Artefakt; der Prototyp ist ein funktionales Nebenprodukt, das verworfen und aus den Dokumenten regeneriert werden kann.

**Promptotyping Document**: Strukturiertes Markdown-Dokument im `knowledge/`-Ordner eines Promptotyping-Repos. Drei analytische Typen: Knowledge (deklarativ), Process (chronologisch), Action (imperativ).

**Vorlage**: Ausfüllbare Strukturvorgabe für eine spezifische Funktion einer Promptotyping-Wissensbasis (Identität, Material, Substanz, Bauweise, Gestalt, Genese, Navigation). Im Vault leben acht Vorlagen, in der öffentlichen Site werden sie als versionierte Anker zugänglich.

**Konvention Promptotyping Documents**: Beschreibung der Funktionen einer Wissensbasis, des Frontmatter-Schemas und der Strukturprinzipien. Liegt im Vault unter `Vault Operations/Konventionen/`, wird in der öffentlichen Site als externe Spezifikation gespiegelt.

**Phasen-Provenance-Lane**: Ästhetischer Designkniff der neuen Site. Linke Schmalspalte zeigt während des Lesens des Papers an jedem Absatz eine monochrome Markierung (Schwarz bis Hellgrau) entsprechend der Promptotyping-Phase, die der Absatz beschreibt. Macht die methodische Verteilung des Papers visuell ablesbar.

**Anker-Schema**: System der stabilen URL-Anker auf der Single-Page-Site. Pro Vorlage, Konzept, Case Study und Begriff existiert ein permanent stabiler Anker (`#vorlage-data-v0.2`, `#case-herdata`, `#konzept-eil`). Repos, die per Frontmatter-Feld `template:` verlinken, adressieren diese Anker.

**Side-Panel**: Rechtes, sliding-in-Panel der Single-Page. Kontextspezifische Tiefe — Glossar-Eintrag, Vorlagen-Spezifikation, Literatur-Detail —, das sich auf Klick öffnet, ohne den Lesefluss zu unterbrechen.

**Critical Expert in the Loop (EIL)**: Rolle, die LLM-Output an definierten Stellen verifiziert. Drei Dimensionen: Domänenexpertise, technisches Modellverständnis, metakognitive Wachsamkeit. Im Refactor selbst ist Christopher Pollin der Critical Expert.

## Verhältnis zur Vault-Wissensbasis

Diese Wissensbasis im Repo ist eine **Selbstanwendung** der Methode: das Methodik-Repo wendet die Methode auf sich selbst an. Die Vault-Vorlagen, von denen sie geleitet wird, sind die Source der Vorlagen-Spiegelung. Wenn beim Befüllen Diskrepanzen zwischen Vault-Vorlage und Repo-Mirror auffallen, fließen Korrekturen zuerst in den Vault zurück und dann ins Repo.

## Related

- Externe Konvention: https://dhcraft.org/Promptotyping/#konvention-v0.1 (nach Sprint 4 verfügbar)
- Vault-Substrat: das Pollin-2026-Paper, die acht Vault-Vorlagen, die Vault-Konvention
