---
title: System Prompts und Skills
slug: skills
status: complete
updated: 2026-11-10
machine-url: https://dhcraft.org/Promptotyping/_content/skills/index.md
---

# System Prompts und Skills

System Prompts und Skills sind wiederverwendbare Bausteine der Agent instruction documents im Promptotyping. Die Knowledge Documents eines Repositorys tragen projektbezogenes Wissen. Der Skill und die System Prompts übersetzen die Arbeitspraxis in wiederholbare Handlungen eines Agenten über die vier Arbeitsformen, die drei Dokumenttypen und die Trennung von Verifikation, agentischem Review und fachlicher Validierung.

Im konkreten Repository liegt diese Schicht im Action-Layer, also in `CLAUDE.md` oder `AGENTS.md`, und im Skill. Der Action-Layer wird bei jedem Sessionstart geladen und routet in die Wissensbasis. Der Skill bleibt über Repositories hinweg wiederverwendbar. Die [Vorlage Action-Layer](#promptotyping-document-action-layer) trennt den portablen Praxiskern vom austauschbaren Werkzeug-Block.

## Kanonischer Promptotyping-Skill

Der kanonische Promptotyping-Skill liegt in diesem Repository unter [`skills/promptotyping/`](https://github.com/DigitalHumanitiesCraft/Promptotyping/tree/main/skills/promptotyping). Er folgt dem Agent-Skills-Format, einem Ordner mit einer `SKILL.md`, deren Frontmatter Name und Auslösebeschreibung trägt. Er enthält keine Pfade oder Regeln einer bestimmten Maschine. Die [Skill-Ansicht](#skills-promptotyping) unterhalb dieses Abschnitts rendert die `SKILL.md`. Die Schaltflächen kopieren oder laden die vollständige Datei, und der Paketlink öffnet den Ordner mit den Prüffällen unter `evals/`.

Der Skill trägt sieben Operationen in einer Datei. Orient liest Action-Layer, `INDEX.md` und `handoff.md`. Distil, Curate, Synthesise und Prune sind die vier Operationen der Wissenskuration, also das Destillieren, das Wahrhalten gegen Quellen und Projektstand, das Verbinden mehrerer Stücke zu einer neuen Aussage und das Zurückschneiden dessen, was nicht mehr gilt oder niemand braucht. Prune schließt die Verdichtung des Journals ein. Implement baut ein geprüftes Inkrement, Hand off verarbeitet die Process Inbox. Die Operationen teilen Lesepfad, Gegenstand und Grenzen. Deshalb stehen sie als Abschnitte eines Skills und nicht als getrennte Skills, die dieselben Regeln viermal wiederholen und um denselben Auslöser konkurrieren würden.

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
