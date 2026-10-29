---
title: System Prompts und Skills
slug: skills
status: complete
updated: 2026-10-19
machine-url: https://dhcraft.org/Promptotyping/_content/skills/index.md
---

# System Prompts und Skills

System Prompts und Skills sind wiederverwendbare Bausteine der Action-Layer-Praxis im Promptotyping. Die Knowledge Documents eines Repos tragen projektbezogenes Wissen. System Prompts und Skills übersetzen die Arbeitspraxis in wiederholbare Agentenhandlungen über die vier Arbeitsformen, drei Dokumenttypen und die Verifikationsdisziplin.

Im konkreten Repo liegt diese Schicht in `CLAUDE.md`, in benannten wiederholbaren Operationen und im portablen Praxiskern. `CLAUDE.md` wird bei jedem Sessionstart geladen und routet in die Wissensbasis. Der Praxiskern bleibt über Repositories hinweg wiederverwendbar.

Die [Vorlage Action-Layer](#promptotyping-document-action-layer) trennt den portablen Praxiskern aus Wissensbasis-Routing, Handoff-Verarbeitung, Journal-Provenienz, Verifikationsregeln, Designprinzipien und Scope vom austauschbaren Werkzeug-Block.

## Kanonischer Promptotyping-Skill

Der kanonische Promptotyping-Skill wird in einem eigenen Repository gepflegt: [DigitalHumanitiesCraft/promptotyping-skill](https://github.com/DigitalHumanitiesCraft/promptotyping-skill). Er folgt dem Agent-Skills-Standard (agentskills.io), ist für Claude Code geschrieben und mit anderen Agenten lauffähig, die diesen Standard unterstützen. Installiert wird der Ordner `promptotyping` aus diesem Repository in das Skills-Verzeichnis des jeweiligen Agenten.

Die [Skill-Ansicht](#skills-promptotyping) direkt unterhalb dieses Abschnitts lädt `promptotyping/SKILL.md` aus dem Skill-Repository und rendert sie. Die Schaltflächen kopieren oder laden die vollständige Datei einschließlich Frontmatter. Die Operationen verweisen auf Referenzdateien im Paket, die nur im Skill-Repository liegen.

Der Vertrag für die Skill-Operationen steht in der Spezifikation: `orient` liest nach dem Action-Layer zuerst `knowledge/INDEX.md`, dann `knowledge/handoff.md`; `handoff` integriert dauerhaften Inhalt vor dem Entfernen eines offenen Deltas; `compact` verdichtet nach der Regel der [Vorlage Journal](#promptotyping-document-journal) ohne Archiv; eine eigene `integrate`-Operation gibt es nicht. Der Skill erfüllt diesen Vertrag in seiner aktuellen Fassung noch nicht vollständig. Die Abweichungen und ihre Klärung führt [promptotyping-skill#2](https://github.com/DigitalHumanitiesCraft/promptotyping-skill/issues/2).

## System Prompts

Zwei System Prompts stehen weiterhin zum Kopieren bereit:

- [Promptotyping System Prompt for Coding](#skills-coding): für Sessions, in denen aus Forschungsdaten ein Forschungsartefakt wie Interface, Datenpipeline, Edition oder Datenmodell gebaut wird.
- [Promptotyping System Prompt for Writing](#skills-writing): für akademische Textproduktion mit überprüfbarer Rückbindung jeder Behauptung an ihre Quelle.

Beide folgen demselben Aufbau mit vier Arbeitsformen, drei Dokumenttypen und einem Diagnoseraster, das Fehlerbilder auf den zuständigen Dokumenttyp zurückführt. Sie sind vollständige Startkontexte für einzelne Sessions. Der Skill steuert dagegen wiederkehrende Operationen über mehrere Aufgaben und Repositories hinweg.
