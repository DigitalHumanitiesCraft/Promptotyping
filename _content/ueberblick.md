---
title: Ueberblick
slug: ueberblick
mirrored: 2026-06-10
machine-url: https://dhcraft.org/Promptotyping/_content/ueberblick.md
---

# Ueberblick

Promptotyping ist eine iterative Context-Engineering-Methode in vier Phasen, um aus Forschungsdaten und Frontier-LLMs Forschungsartefakte zu erzeugen: Interfaces, Pipelines, Editionen, Datenmodelle, Tools. Der `knowledge/`-Ordner ist dabei ein kuratiertes Wissensartefakt, teils modellgeneriert, teils von der pruefenden Fachperson kuratiert, gehalten in einem Format, das Agenten unmittelbar verarbeiten. Er haelt das Domaenenwissen und die Spezifikation, aus denen implementiert wird, ueberdauert die einzelne Sitzung und ist der Teil des Prozesses, der geprueft, kritisiert und zitiert werden kann. Was beim Bauen an weiteren Entscheidungen anfaellt, halten die Dokumente so weit, wie es zurueckgeschrieben wird. Der Unterschied zum Vibe Coding liegt im strukturierten Vorgehen, in der aktiven Anforderungsanalyse und in der expliziten Wissensdokumentation.

Diese Seite rendert das Methoden-Paper (Pollin 2026) als durchgehenden Lesefluss; konstitutive Begriffe sind im Text als Glossar-Trigger markiert.

## Die vier Phasen

**Preparation.** Alle Rohmaterialien werden zusammengetragen, bevor technische Entscheidungen fallen: Forschungsdaten in ihren Originalformaten, Dokumentation zu Standards und Datenmodellen, erste Forschungsfragen und implizites Domaenenwissen. Die Materialsammlung erzwingt die praezise Artikulation der Projektziele vor dem LLM-Einsatz.

**Exploration und Mapping.** Die Schnittstelle zwischen Rohdaten und Forschungskontext wird systematisch sondiert, mit der Leitfrage, ob sich die abstrakte Forschungsfrage konkret auf die Datenstruktur abbilden laesst. Die Phase produziert bewusst keine formalen Dokumente; zu verstehen, was die Daten nicht hergeben, ist genauso wertvoll wie zu wissen, was geht. Sackgassen sind positive Erkenntnisse.

**Distillation.** Die Erkenntnisse der Exploration werden in strukturierte Markdown-Dokumente verdichtet, nach dem Prinzip maximale Information bei minimalen Tokens. Die technische Begruendung liefert Context Rot: gezielte Verdichtung erhoeht die Modellaufmerksamkeit auf das Wesentliche. Jedes Dokument traegt eine abgegrenzte Funktion, Redundanzen werden ueber Verweise statt Wiederholung abgebildet.

**Implementation.** Nach Uebergabe der Promptotyping Documents an das LLM erfolgt iterative Entwicklung: semantische Forschungsdaten als Kontext, Bau von Promptotyping Interfaces, Definition von Verification Milestones, Rueckspeisung von Screenshots, Konsolen-Output und Testergebnissen, Git-Commits an verifizierten Zustaenden. Neues Wissen fliesst zurueck in die Dokumente, die damit lebende Dokumente sind.

## Die drei Dokumenttypen

Promptotyping unterscheidet drei analytische Typen von Promptotyping Documents. Knowledge Documents sind deklarativ und beschreiben Daten, Domaene und Forschungskontext (etwa `project.md`, `data.md`, `architecture.md`, `design.md`). Process Documents sind chronologisch oder analytisch und dokumentieren den Arbeitsprozess (etwa `journal.md`, `learnings.md`, `plan.md`). Action Documents sind imperativ und beschreiben, was Agenten tun koennen (etwa `CLAUDE.md`, `rules.md`, `instructions.md`).

Die Klassifikation ist kein Selbstzweck, sondern ein Diagnoseraster. Ist ein Output inhaltlich falsch, wird zuerst das Knowledge Document geprueft. Ist er formal falsch, wird zuerst das Action Document geprueft. Ist die Entscheidungslogik unklar, wird zuerst das Process Document geprueft.

## Artefakte und Skalierung

Die Methode legt sich nicht auf einen Artefakttyp fest. Forschungsartefakte koennen Interfaces sein, Pipelines, Editionen, Datenmodelle, Ontologien oder Werkzeuge. Das Paper beschreibt mit Promptotyping a Tool und Promptotyping a Research Project zwei gut dokumentierte Auspraegungen, keine abschliessende Typologie. Quer dazu liegt die Skalierung: Dieselbe Methode traegt die einzelne Chat-Session mit einem Modell ebenso wie die Arbeit in einem AI Harness, in dem Agenten ueber laengere Strecken an einem Projekt arbeiten. Die Grundannahme dabei: Je komplexer die Domaene, desto mehr Struktur braucht die Wissensorganisation. Der distillierte Dokumentensatz waechst mit dem Projekt, von einer Handvoll Promptotyping Documents bis zur epistemischen Infrastruktur, in der das Repository selbst die Untersuchung traegt. Verbindend bleiben die vier Phasen, die drei Dokumenttypen und die Verifikationsdisziplin durch den Critical Expert in the Loop.

## Wo ansetzen

Wer die Methode im Detail nachvollziehen will, liest das [Paper](#abschnitt-1-introduction) von der Introduction bis zur Conclusion. Wer sie anwenden will, nutzt die [Vorlagen](#vorlagen) fuer die Promptotyping Documents und den Frontmatter-Inspector. Wer Belege sucht, sieht sich die [Use Cases](#use-cases) an, die kuratierte Auswahl oeffentlich dokumentierter Projekte. Die empirisch gewachsenen Methodenerweiterungen stehen unter [Praxis](#praxis), die uebertragbaren System Prompts unter [Skills](#skills). Wie Vault, Agent Interface und AI Harness zusammenspielen, beschreibt die [Arbeitsumgebung](#arbeitsumgebung).
