---
title: Ueberblick
slug: ueberblick
mirrored: 2026-06-10
machine-url: https://dhcraft.org/Promptotyping/_content/ueberblick.md
---

# Ueberblick

Promptotyping ist eine iterative Context-Engineering-Methode in vier Phasen, um aus Forschungsdaten und Frontier-LLMs Forschungsartefakte zu erzeugen, im Regelfall Software, die an die Daten eines Projekts gebunden ist und diese explorierbar, analysierbar oder editierbar macht. Der `knowledge/`-Ordner ist dabei ein kuratiertes Wissensartefakt, teils modellgeneriert, teils von der pruefenden Fachperson kuratiert, gehalten in einem Format, das Agenten unmittelbar verarbeiten. Er haelt das Domaenenwissen und die Spezifikation, aus denen implementiert wird, ueberdauert die einzelne Sitzung und ist der Teil des Prozesses, der geprueft, kritisiert und zitiert werden kann. Was beim Bauen an weiteren Entscheidungen anfaellt, halten die Dokumente so weit, wie es zurueckgeschrieben wird. Der Unterschied zum Vibe Coding liegt im strukturierten Vorgehen, in der aktiven Anforderungsanalyse und in der expliziten Wissensdokumentation.

Diese Seite rendert das Methoden-Paper (Pollin 2026) als durchgehenden Lesefluss; konstitutive Begriffe sind im Text als Glossar-Trigger markiert.

## Die vier Phasen

**Preparation.** Alle Rohmaterialien werden zusammengetragen, bevor technische Entscheidungen fallen: Forschungsdaten in ihren Originalformaten, Dokumentation zu Standards und Datenmodellen, erste Forschungsfragen und implizites Domaenenwissen. Die Materialsammlung erzwingt die praezise Artikulation der Projektziele vor dem LLM-Einsatz.

**Exploration.** Die Schnittstelle zwischen Rohdaten und Forschungskontext wird systematisch sondiert, mit der Leitfrage, ob sich die abstrakte Forschungsfrage konkret auf die Datenstruktur abbilden laesst. Die Forschenden sehen die Daten direkt an, eigens geschriebene Skripte durchlaufen den Korpus und verdichten ihn zu kompakten Aggregationen, und das LLM erzeugt Mapping-Hypothesen darueber, welche Datenfelder welchen analytischen Kategorien entsprechen und wo die Daten fuer den beabsichtigten Zweck nicht ausreichen. Zu verstehen, was die Daten nicht hergeben, ist genauso wertvoll wie zu wissen, was geht. Die Phase endet mit einem dokumentierten Verstaendnis davon, was moeglich ist, was nicht und warum, und sie entfaellt, wo die Daten den Forschenden vertraut sind und die Preparation diese Fragen bereits geklaert hat.

**Distillation.** Die Erkenntnisse der Exploration werden in strukturierte Markdown-Dokumente verdichtet, nach dem Prinzip maximale Information bei minimalen Tokens. Die technische Begruendung liefert Context Rot: gezielte Verdichtung erhoeht die Modellaufmerksamkeit auf das Wesentliche. Jedes Dokument traegt eine abgegrenzte Funktion, Redundanzen werden ueber Verweise statt Wiederholung abgebildet.

**Implementation.** Nach Uebergabe der Promptotyping Documents an das LLM erfolgt iterative Entwicklung: semantische Forschungsdaten als Kontext, Bau von Promptotyping Interfaces, Definition von Verification Milestones, Rueckspeisung von Screenshots, Konsolen-Output und Testergebnissen, Git-Commits an verifizierten Zustaenden. Neues Wissen fliesst zurueck in die Dokumente, die damit lebende Dokumente sind.

## Knowledge Documents und ihre drei Spezialisierungen

Jedes Promptotyping Document ist ein Knowledge Document, ein Dokument, das Wissen so festhaelt, dass Menschen und Agenten es lesen und darauf handeln koennen. Nach der Art des Wissens, das sie tragen, zerfallen sie in drei Spezialisierungen. Declarative Documents halten Sachwissen ueber Daten, Domaene und Forschungskontext (etwa `project.md`, `data.md`, `architecture.md`, `design.md`). Process Documents halten den Verlauf der Arbeit fest (etwa `journal.md`, `learnings.md`, `plan.md`). Action Documents halten Handlungswissen darueber, was Agenten im Projekt tun duerfen und wie (etwa `CLAUDE.md`, die Teststrategie, die Technologie-Baseline).

Die Klassifikation ist kein Selbstzweck, sondern ein Diagnoseraster. Ist ein Output inhaltlich falsch, wird zuerst das Declarative Document geprueft. Ist er formal falsch, wird zuerst das Action Document geprueft. Ist die Entscheidungslogik unklar, wird zuerst das Process Document geprueft.

## Artefakte und Skalierung

Das Artefakt ist im Default ein selbststaendiges statisches Web-Tool, ein Satz aus HTML-, CSS- und JavaScript-Dateien mit eingebetteten oder aus flachen Dateien geladenen Forschungsdaten, lauffaehig aus einem lokalen Ordner und auf jedem statischen Host deploybar. Eine Abweichung von diesem Default ist begruendungspflichtig. Wo ein Verarbeitungsschritt nicht im Browser laeuft, nimmt er die Form einer generierten Pipeline vor dem Artefakt an; wo eine Beschreibung aus den Quelldaten selbst gerendert wird, die Form eines deterministisch erzeugten Dokuments.

Quer dazu liegt die Skalierung. Dieselbe Methode traegt die einzelne Sitzung mit einem Agenten ebenso wie die Arbeit, in der ein fuehrender Agent Subagenten mit definierten Rechten und Wissenszonen koordiniert. Je komplexer die Domaene, desto mehr Struktur braucht die Wissensorganisation, und der destillierte Dokumentensatz waechst mit dem Projekt. Verbindend bleiben die vier Phasen, die drei Dokumenttypen und die Verifikationsdisziplin durch den Critical Expert in the Loop.

## Wo ansetzen

Wer die Methode im Detail nachvollziehen will, liest das [Paper](#abschnitt-1-introduction) von der Introduction bis zur Conclusion. Wer sie anwenden will, nutzt die [Vorlagen](#vorlagen) fuer die Promptotyping Documents und den Frontmatter-Inspector. Wer Belege sucht, sieht sich die [Use Cases](#use-cases) an, die kuratierte Auswahl oeffentlich dokumentierter Projekte. Die empirisch gewachsenen Methodenerweiterungen stehen unter [Praxis](#praxis), die uebertragbaren System Prompts unter [Skills](#skills). Wie Vault, Agent Interface und AI Harness zusammenspielen, beschreibt die [Arbeitsumgebung](#arbeitsumgebung).
