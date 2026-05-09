---
title: INDEX
project:
  name: Promptotyping Site
  repository: https://github.com/DigitalHumanitiesCraft/Promptotyping
status: active
language: de
version: 0.2
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
related: [project, specification, architecture, design, journal]
---

# INDEX

Navigation und Begriffslexikon der Wissensbasis dieses Repos. Das Repo `DigitalHumanitiesCraft/Promptotyping` rendert als interaktives Paper auf https://dhcraft.org/Promptotyping/ und ist die öffentliche Methodik-Site für Promptotyping. Die `knowledge/`-Wissensbasis ist die methodische Selbstanwendung — die Site wird zuerst als Promptotyping-Wissensbasis spezifiziert, dann implementiert.

## Wissensbasis-Inhalt

Sechs Promptotyping-Documents:

- **INDEX** (dieses Dokument) — Navigation und Begriffslexikon
- **[project.md](project.md)** — was die Site werden soll, wer die Adressaten sind, Materialgrundlage, Stand
- **[specification.md](specification.md)** — was die Site können muss: Anker-Schema, `template:`-Auflösung, Phasen-Provenance-Lane, Side-Panels
- **[architecture.md](architecture.md)** — wie die Site technisch gebaut wird: URL-Struktur, Tech-Stack, Modul-Inventar
- **[design.md](design.md)** — wie die Site aussieht und sich verhält: DHCraft-Designsystem, Phasen-Lane-Spezifikation, Typografie
- **[journal.md](journal.md)** — chronologischer Verlauf des Refactors

Eine `data.md` existiert bewusst nicht. Die Vorlage Datengrundlage trägt für Methoden-Repos nicht; die Materialgrundlage steht in `project.md`. Begründung im Eintrag vom 2026-05-09 in [journal.md](journal.md).

## Lese-Reihenfolge

Wer die Wissensbasis zum ersten Mal liest:

1. INDEX (für Orientierung)
2. **project.md** (was die Site werden soll, was als Material einfließt)
3. **specification.md** (was die Site können muss)
4. **architecture.md** (wie sie technisch gebaut wird)
5. **design.md** (wie sie aussieht)
6. **journal.md** (was bisher passiert ist, einschließlich der Vorlagen-Trigger-Korrektur)

Wer einen konkreten Aspekt sucht, geht direkt zum entsprechenden Dokument.

## Begriffslexikon

Begriffe, die in dieser Wissensbasis konstitutiv vorkommen. Die kanonischen Definitionen leben in den verlinkten Vault-Wissensdokumenten; hier nur die für das Refactor-Projekt relevante Kurzform.

**Promptotyping**: Iterative Context-Engineering-Methode in vier Phasen — Preparation, Exploration & Mapping, Distillation, Implementation —, um aus Daten und Frontier-LLMs Forschungsartefakte zu erzeugen. Promptotyping Documents sind das primäre Artefakt; der Prototyp ist ein funktionales Nebenprodukt, das verworfen und aus den Dokumenten regeneriert werden kann.

**Promptotyping Document**: Strukturiertes Markdown-Dokument im `knowledge/`-Ordner eines Promptotyping-Repos. Drei analytische Typen: Knowledge (deklarativ), Process (chronologisch), Action (imperativ).

**Vorlage**: Ausfüllbare Strukturvorgabe für eine spezifische Funktion einer Promptotyping-Wissensbasis (Identität, Material, Substanz, Bauweise, Gestalt, Genese, Navigation). Im Vault leben acht Vorlagen, in der öffentlichen Site werden sie als versionierte Anker zugänglich. Eine Vorlage trägt nur, wenn ihr Trigger erfüllt ist — die Vorlage Datengrundlage trägt z.B. nur, wenn das Projekt Daten verarbeitet oder produziert.

**Konvention Promptotyping Documents**: Beschreibung der Funktionen einer Wissensbasis, des Frontmatter-Schemas und der Strukturprinzipien. Liegt im Vault unter `Vault Operations/Konventionen/`, wird in der öffentlichen Site als externe Spezifikation gespiegelt.

**Phasen-Provenance-Lane**: Ästhetischer Designkniff der neuen Site. Linke Schmalspalte zeigt während des Lesens des Papers an jedem Absatz eine monochrome Markierung (Schwarz bis Hellgrau) entsprechend der Promptotyping-Phase, die der Absatz beschreibt. Macht die methodische Verteilung des Papers visuell ablesbar.

**Anker-Schema**: System der stabilen URL-Anker auf der Single-Page-Site. Pro Vorlage, Konzept, Case Study und Begriff existiert ein permanent stabiler Anker (`#vorlage-data-v0.2`, `#case-herdata`, `#konzept-eil`). Repos, die per Frontmatter-Feld `template:` verlinken, adressieren diese Anker.

**Subpath-Alias**: Maschinenlesbare URL-Form (`/vorlagen/data/v0.2`), die per `404.html`-Routing auf den entsprechenden Anker geleitet wird. Robust für Coding-Agenten, die strukturelle URL-Pfade kennen, lesbar für Menschen.

**Side-Panel**: Rechtes, sliding-in-Panel der Single-Page. Kontextspezifische Tiefe — Glossar-Eintrag, Vorlagen-Spezifikation, Literatur-Detail —, das sich auf Klick öffnet, ohne den Lesefluss zu unterbrechen. Auf Mobile als Bottom-Sheet.

**Frontmatter-Inspector**: Modul auf der Vorlagen-Sektion, das einen `template:`-URI in Echtzeit auflöst und die referenzierte Vorlage live darunter rendert. Demonstriert, wie Repos die Site nutzen.

**Case-Study-Filter**: Modul in der Case-Study-Sektion, das die 24+ Karten nach Genre, Status, Demo-Verfügbarkeit filterbar macht.

**Genre (Case Study)**: Klassifikation einer Case Study nach methodischem Typ: HerData-Genre (eigene Datenproduktion mit Normdaten), Editions-Genre (TEI-Korpus), Externdaten-Genre (fremde Daten als Input), Klawiter-Typ (mehrstufige Rekonstruktion aus Legacy-Systemen), Sonderfall.

**Critical Expert in the Loop (EIL)**: Rolle, die LLM-Output an definierten Stellen verifiziert. Drei Dimensionen: Domänenexpertise, technisches Modellverständnis, metakognitive Wachsamkeit. Im Refactor selbst ist Christopher Pollin der Critical Expert.

**`template:`-Feld**: Frontmatter-Feld in Promptotyping-Documents, das auf die maßgebliche Vorlagen-Spezifikation auf dieser Site zeigt. Format: `template: { name, version, url }`. Die `url` ist ein versionierter Anker oder Subpath-Alias.

## Verhältnis zur Vault-Wissensbasis

Diese Wissensbasis im Repo ist eine **Selbstanwendung** der Methode: das Methodik-Repo wendet die Methode auf sich selbst an. Die Vault-Vorlagen, von denen sie geleitet wird, sind die Source der Vorlagen-Spiegelung. Wenn beim Befüllen Diskrepanzen zwischen Vault-Vorlage und Repo-Mirror auffallen, fließen Korrekturen zuerst in den Vault zurück und dann ins Repo.

Im konkreten Refactor wurde durch die Critical-Expert-Prüfung sichtbar, dass nicht jede Vorlage trägt — die Vorlage Datengrundlage greift nur, wenn das Projekt Daten verarbeitet. Methoden-Repos überspringen sie. Diese Erkenntnis floss als Anlass zur ausdrücklicheren Trigger-Prüfung in der Wissensbasis selbst zurück.

## Related

- Externe Konvention: dhcraft.org/Promptotyping/#konvention-v0.1 (Anker entsteht in Sprint 4)
- Vault-Substrat: das Pollin-2026-Paper, die acht Vault-Vorlagen, die Vault-Konvention
