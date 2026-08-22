---
title: System Prompts und Skills
slug: skills
status: complete
updated: 2026-08-22
machine-url: https://dhcraft.org/Promptotyping/_content/skills/index.md
---

# System Prompts und Skills

System Prompts und Skills sind wiederverwendbare Bausteine der Action-Layer-Praxis im Promptotyping. Die Knowledge Documents eines Repos tragen projektbezogenes Wissen. System Prompts und Skills übersetzen die Methode in wiederholbare Agentenhandlungen über die vier Arbeitsformen, drei Dokumenttypen und die Verifikationsdisziplin.

Im konkreten Repo liegt diese Schicht in `CLAUDE.md`, in benannten wiederholbaren Operationen und im portablen Methodenkern. `CLAUDE.md` wird bei jedem Sessionstart geladen und routet in die Wissensbasis. Der Methodenkern bleibt über Repositories hinweg wiederverwendbar.

Die [Vorlage Action-Layer](#promptotyping-document-action-layer) trennt den portablen Methodenkern aus Wissensbasis-Routing, Handoff-Verarbeitung, Journal-Provenienz, Verifikationsregeln, Designprinzipien und Scope vom austauschbaren Werkzeug-Block.

## Kanonischer Promptotyping-Skill

Der [kanonische Promptotyping-Skill](#skills-promptotyping) liegt als portables Paket im Methoden-Repository und wird direkt unterhalb dieses Abschnitts gerendert. Seine Quelle ist [`skills/promptotyping/SKILL.md`](https://dhcraft.org/Promptotyping/skills/promptotyping/SKILL.md). Die Schaltflächen an der Skill-Ansicht kopieren oder laden die vollständige Datei einschließlich Frontmatter. Das Paket enthält zusätzlich `agents/openai.yaml` als optionale Codex-Oberflächenmetadaten.

Der Skill führt folgende Operationen:

- `orient` liest nach dem Action-Layer zuerst `knowledge/INDEX.md`, dann `knowledge/handoff.md` und anschließend die aufgabenrelevanten Dokumente. `journal.md` dient der Prüfung von Herkunft und Entscheidungsgründen.
- `handoff` prüft Quelle und aktuelles Ziel, integriert dauerhaften Inhalt zuerst in das zuständige Declarative oder Action Document, hält ausschließlich offene Deltas in der Inbox und schreibt den Journal-Nachweis vor dem gemeinsamen Commit.
- `compact` verwendet die semantische Verdichtungsregel der [Vorlage Journal](#promptotyping-document-journal), disponiert jede substantielle Aussage gegen einen sauberen Git-Ausgangsstand und erzeugt kein Archiv.
- `distill` legt bei einer neuen Promptotyping-Wissensbasis sowohl `knowledge/journal.md` als auch `knowledge/handoff.md` an und wählt weitere Dokumente anhand ihrer Funktionstrigger.

Integration bleibt eine Invariante von `orient`, der laufenden Arbeit und `handoff`. Eine eigene `integrate`-Operation ist nicht Bestandteil des Methodenvertrags.

Für Codex wird der Ordner `promptotyping` unter dem konfigurierten Skills-Verzeichnis abgelegt, gewöhnlich unter `$CODEX_HOME/skills/`. Die `SKILL.md` bleibt plattformneutral; produktspezifische Metadaten liegen getrennt unter `agents/`.

## System Prompts

Zwei System Prompts stehen weiterhin zum Kopieren bereit:

- [Promptotyping System Prompt for Coding](#skills-coding): für Sessions, in denen aus Forschungsdaten ein Forschungsartefakt wie Interface, Datenpipeline, Edition oder Datenmodell gebaut wird.
- [Promptotyping System Prompt for Writing](#skills-writing): für akademische Textproduktion mit überprüfbarer Rückbindung jeder Behauptung an ihre Quelle.

Beide folgen demselben Aufbau mit vier Arbeitsformen, drei Dokumenttypen und einem Diagnoseraster, das Fehlerbilder auf den zuständigen Dokumenttyp zurückführt. Sie sind vollständige Startkontexte für einzelne Sessions. Der Skill steuert dagegen wiederkehrende Operationen über mehrere Aufgaben und Repositories hinweg.
