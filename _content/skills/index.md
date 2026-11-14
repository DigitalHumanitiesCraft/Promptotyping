---
title: System Prompts und Skills
slug: skills
status: complete
updated: 2026-11-14
machine-url: https://dhcraft.org/Promptotyping/_content/skills/index.md
---

# System Prompts und Skills

System Prompts und Skills sind wiederverwendbare Bausteine der Agent instruction documents im Promptotyping. Die Knowledge Documents eines Repositorys tragen projektbezogenes Wissen. Der Skill und die System Prompts übersetzen die Arbeitspraxis in wiederholbare Handlungen eines Agenten über die vier Arbeitsformen, die drei Dokumenttypen und die Trennung von Verifikation, agentischem Review und fachlicher Validierung.

Im konkreten Repository liegt diese Schicht im Action-Layer, also in `CLAUDE.md` oder `AGENTS.md`, und im Skill. Der Action-Layer wird bei jedem Sessionstart geladen und routet in die Wissensbasis. Der Skill bleibt über Repositories hinweg wiederverwendbar. Die [Vorlage Action-Layer](#promptotyping-document-action-layer) trennt den portablen Praxiskern vom austauschbaren Werkzeug-Block.

## Kanonischer Promptotyping-Skill

Der kanonische Promptotyping-Skill liegt in diesem Repository unter [`skills/promptotyping/`](https://github.com/DigitalHumanitiesCraft/Promptotyping/tree/main/skills/promptotyping). Er folgt dem Agent-Skills-Format, einem Ordner mit einer `SKILL.md`, deren Frontmatter Name und Auslösebeschreibung trägt. Er enthält keine Pfade oder Regeln einer bestimmten Maschine. Die [Skill-Ansicht](#skills-promptotyping) unterhalb dieses Abschnitts rendert die `SKILL.md`. Die Schaltflächen kopieren oder laden die vollständige Datei, und der Paketlink öffnet den Ordner. Die Prüffälle des Skills liegen außerhalb des Pakets unter `tools/skill-evals/` im Repository.

Der Skill hat in Version 2.0.0 fünf Subcommands. `orient` stellt fest, wo das Projekt steht, und ändert keine Datei. `explore` ist die Arbeitsform Exploration, in der das Projekt lernt, was seine Forschungsdaten tragen und wo sie enden. `distill` modelliert die Befunde als Wissensdokumente, einschließlich Epics und User Stories. `curate` pflegt die vorhandenen Wissensdokumente in drei Arten, zwischen denen der Agent wählt, gegen das Projekt selbst, als Grounding gegen Wissen außerhalb und als Review mit frischem Kontext. `handoff` beendet eine Sitzung, schreibt das Journal mit dem Abschnitt `## Open` an seinem Anfang und committet, ohne zu pushen. Das Bauen hat keinen eigenen Aufruf und folgt den Regeln im Kern des Skills. `SKILL.md` trägt Definition, Begriffe und die Regeln für Bauen und Prüfen, und je eine Reference-Datei unter `references/` trägt das Verfahren eines Subcommands, die der Agent erst beim Aufruf lädt. Die Konvention und die Vorlagen beschreiben noch `handoff.md` als Pflichtdokument und werden in einem eigenen Schritt angeglichen.

### Installation

In Claude Code kopieren Sie den Ordner `skills/promptotyping` aus einem Klon dieses Repositorys nach `~/.claude/skills/promptotyping` für alle Projekte oder nach `.claude/skills/promptotyping` im Projektordner für ein einzelnes Projekt.

```sh
git clone https://github.com/DigitalHumanitiesCraft/Promptotyping.git
mkdir -p ~/.claude/skills
cp -r Promptotyping/skills/promptotyping ~/.claude/skills/
```

Codex liest Skills aus seinem Skills-Verzeichnis, üblicherweise `$CODEX_HOME/skills/`. Eine Umgebung, die nur `AGENTS.md` liest, erhält den Skill über eine Zeile im `AGENTS.md` des Projekts, nachdem der Ordner etwa nach `.agents/skills/promptotyping/` kopiert ist.

```markdown
Before working in knowledge/, read .agents/skills/promptotyping/SKILL.md and follow the operation that fits the task.
```

## System Prompts

Zwei System Prompts stehen weiterhin zum Kopieren bereit:

- [Promptotyping System Prompt for Coding](#skills-coding): für Sessions, in denen aus Forschungsdaten ein Forschungsartefakt wie Interface, Datenpipeline, Edition oder Datenmodell gebaut wird.
- [Promptotyping System Prompt for Writing](#skills-writing): für akademische Textproduktion mit überprüfbarer Rückbindung jeder Behauptung an ihre Quelle.

Beide folgen demselben Aufbau mit vier Arbeitsformen, drei Dokumenttypen und einem Diagnoseraster, das Fehlerbilder auf den zuständigen Dokumenttyp zurückführt. Sie sind vollständige Startkontexte für einzelne Sessions. Der Skill steuert dagegen wiederkehrende Operationen über mehrere Aufgaben und Repositories hinweg.
