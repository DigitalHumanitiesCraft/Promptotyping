---
title: System Prompts und Skills
slug: skills
mirrored: 2026-06-10
machine-url: https://dhcraft.org/Promptotyping/_content/skills/index.md
---

# System Prompts und Skills

System Prompts und Skills sind die wiederverwendbaren Bausteine der Action-Layer-Praxis im Promptotyping. Waehrend die Knowledge-Dokumente eines Repos das deklarative Wissen tragen (was das Projekt ist, welche Daten es verarbeitet, was es leisten soll), sozialisieren System Prompts den Coding-Agenten auf ein wiederkehrendes Vorgehen: die vier Phasen, die drei Dokumenttypen, die Verifikationsdisziplin. Sie sind nicht projektgebunden, sondern uebertragbar.

Im konkreten Repo lebt diese Schicht an drei Orten. Erstens in der `CLAUDE.md` im Repo-Root, dem Action-Dokument, das der Coding-Agent bei jedem Sessionstart automatisch als Kontext erhaelt: imperative Regeln, die auf die Wissensbasis verweisen und das Verhalten steuern. Zweitens in Custom Commands, also benannten, wiederholbaren Arbeitsschritten, die ein Agent als Werkzeug aufruft. Drittens in System Prompts als portablen Methodenkern, der unabhaengig vom einzelnen Repo gepflegt und in mehrere Projekte uebernommen wird.

Die strukturelle Trennung dieser Schicht von der Wissensbasis ist in der [Vorlage Action-Layer](#promptotyping-document-action-layer) beschrieben: Der Methodenkern (Wissensbasis-Verweis, Journal-Pflicht, Verifikationsregeln, Designprinzipien, Scope-Negativliste) ist portabel, der Werkzeug-Block (Befehle, Hooks, Permissions, Stack-Konventionen) ist austauschbar. Ein System Prompt ist genau ein solcher portabler Methodenkern.

Zwei System Prompts stehen hier zum Kopieren bereit:

- [Promptotyping System Prompt for Coding](#skills-coding): fuer Sessions, in denen aus Forschungsdaten ein Forschungsartefakt (Interface, Pipeline, Edition, Datenmodell) gebaut wird.
- [Promptotyping System Prompt for Writing](#skills-writing): fuer die akademische Textproduktion, in der jede Behauptung an eine Quelle rueckbindbar bleibt.

Beide folgen demselben Aufbau: vier Phasen (Preparation, Exploration und Mapping, Distillation, Implementation), drei Dokumenttypen (Knowledge, Process, Action) und ein Diagnoseraster, das Fehlerbilder auf den jeweils zustaendigen Dokumenttyp zurueckfuehrt.
