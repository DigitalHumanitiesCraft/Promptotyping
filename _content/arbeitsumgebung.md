---
title: Arbeitsumgebung
slug: arbeitsumgebung
mirrored: 2026-06-10
machine-url: https://dhcraft.org/Promptotyping/_content/arbeitsumgebung.md
---

# Arbeitsumgebung

## Obsidian-Vault als Wissensumgebung

Die Promptotyping Documents leben in einem Markdown-Vault. Die Analyseeinheit ist dabei der Vault als Ganzes, nicht das Einzeldokument: ein Dokument bekommt seine Bedeutung erst aus seiner Funktion im Netz der uebrigen Dokumente. Agenten (etwa Claude Code) und der Critical Expert arbeiten im selben Dateisystem, gesteuert ueber die `CLAUDE.md` als Action Document, das die Regeln, Konventionen und Grenzen der agentischen Arbeit festlegt. Das Dateisystem ist die Schnittstelle. Es braucht keinen Server und keine Datenbank: Wer Wissen ergaenzt, schreibt eine Markdown-Datei; wer den Agenten umkonfiguriert, bearbeitet ein Action Document.

## Promptotyping Agent Interface

Das Promptotyping Agent Interface ist ein experimentelles Browser-Interface fuer drei Taetigkeiten des Critical Experts. Beobachten: nachvollziehen, was der Agent gerade tut und welche Dateien er aendert. Steuern: die `CLAUDE.md` bearbeiten und den Kontext selektieren, der dem Agenten uebergeben wird. Arbeiten: im selben Vault mitschreiben, statt nur zu delegieren. Die zentrale Architekturentscheidung ist, den Vault ins Zentrum zu stellen: das Interface ist eine Sicht auf das Dateisystem, nicht ein eigener Datenspeicher. Status: in Entwicklung, noch nicht oeffentlich.

## AI Harness und Skills

Claude Code dient als AI Harness, in dem die Methode skaliert: die Umgebung, in der ein Agent ueber laengere Strecken an einem Projekt arbeitet, mit Zugriff auf Dateien, Werkzeuge und Ausfuehrung. Die uebertragbaren System Prompts, die diese Arbeit fuer Coding und Schreiben anleiten, stehen in der [Skills](#skills)-Sektion. Prozessvideos, die das Vorgehen in der Umgebung zeigen, liegen auf dem [YouTube-Kanal](https://www.youtube.com/@DigitalHumanitiesCraft).
