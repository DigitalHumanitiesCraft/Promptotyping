---
title: Praxis und Best Practices
slug: praxis
source: Projects/Promptotyping/Promptotyping MOC.md (Methodenerweiterungen)
mirrored: 2026-06-10
machine-url: https://dhcraft.org/Promptotyping/_content/praxis.md
---

# Praxis und Best Practices

Diese Sektion sammelt empirisch gewachsene Methodenerweiterungen des Promptotyping. Keine wurde am Schreibtisch entworfen; jede entstand in einem konkreten Projekt und trug danach in weitere. Jeder Eintrag nennt seinen dokumentierten Herkunftsfall. Wo dieser Fall in der kuratierten Galerie dieser Site vertreten ist, fuehrt der Verweis zur Fallseite; wo nicht, steht der Projektname im Fliesstext ohne Link.

## Verification Milestones

Verification Milestones sind definierte Checkpoints im Workflow, an denen Domaenenexpertise systematisch angewendet wird. Sie operationalisieren den Critical Expert in the Loop als Prozessschritt statt als blosse Rolle: An einem Milestone haelt der Prozess an, ein Zwischenergebnis wird mit deterministischen Werkzeugen und mit fachlichem Urteil geprueft, und erst dann geht es weiter.

Der Effekt ist, dass die Pruefung nicht dem Zufall ueberlassen bleibt, sondern an den Stellen erzwungen wird, an denen ein Fehler teuer wuerde. Entstanden ist das Muster in der ZBZ OCR/TEI Pipeline ([#case-zbz-ocr-tei](#case-zbz-ocr-tei)), in der jede Pipeline-Stufe einen solchen Pruefpunkt traegt.

## Promptotyping Interfaces

Promptotyping Interfaces sind browser-basierte Validierungstools, die Zwischenergebnisse sichtbar, vergleichbar und korrigierbar machen. Sie machen die epistemische Qualitaet eines Outputs transparent, indem sie ihn nicht als fertiges Ergebnis praesentieren, sondern als pruefbares Material neben seiner Quelle zeigen.

Das Interface ist hier nicht das Endprodukt, sondern ein Instrument der Verifikation. Es macht sichtbar, wo das Modell sicher und wo es unsicher ist, und gibt dem Experten den Ort, an dem er eingreift. Entwickelt wurde das Muster in der ZBZ OCR/TEI Pipeline ([#case-zbz-ocr-tei](#case-zbz-ocr-tei)).

## Subagents und Rollensimulation

Subagent-Definitionen mit Berechtigungsdifferenzierung trennen Rollen voneinander: ein read-only arbeitender Analyse-Agent, ein Implementierungs-Agent mit vollem Schreibzugriff, ein Synthese-Agent. So entsteht innerhalb eines Projekts eine Arbeitsteilung mit unterschiedlichen Rechten und Blickwinkeln.

Echte Subagents werden nur geladen, wenn die Definitionen vor Sessionstart existieren; fehlen sie, laeuft stattdessen eine Rollensimulation innerhalb einer einzigen Session, in der ein Agent die Rollen nacheinander einnimmt. Die Unterscheidung ist methodisch wichtig, weil die echte Trennung Berechtigungen erzwingt, die Simulation nicht. Erprobt wurde das Muster im wiiw-FIGARO-Projekt.

## Skript-vs-LLM-Trennung

Algorithmisch eindeutige Aufgaben gehoeren in Python-Skripte, semantisch interpretierende Aufgaben zum LLM. Tags umbenennen, Statistiken berechnen, Dokumente zusammenfuehren sind eindeutig und deterministisch loesbar; Konzepte zusammenfuehren oder Regeln aus Beispielen ableiten verlangt Interpretation.

Entscheidend ist die Trennlinie: Sie verlaeuft entlang der Eindeutigkeit, nicht entlang der Komplexitaet. Eine komplexe, aber eindeutige Aufgabe gehoert ins Skript; eine einfache, aber interpretierende Aufgabe gehoert zum Modell. Das Muster wurde im Vault-Kurationsprojekt herausgearbeitet.

## Knowledge Curation

Knowledge Curation ist die systematische Pflege des vernetzten Wissensmodells auf zwei Schichten: dem persoenlichen Vault als Second Brain und den projektspezifischen Knowledge-Vaults in den Repos. Drei Operationstypen greifen ineinander: skriptbasierte (deterministische Umbauten), semantische (Zusammenfuehrung und Regelextraktion durch das Modell) und strukturelle (Umordnung des Wissensgraphen).

Links fungieren dabei als navigierbare Kontextpfade fuer agentische Systeme: Ein Agent folgt einem Link, um den Kontext zu laden, den er fuer die naechste Operation braucht. Als Querschnittspraxis ueber die Komponenten der epistemischen Infrastruktur sorgt Knowledge Curation dafuer, dass Promptotyping ueber Sessions hinaus akkumuliert, statt bei jedem Neustart von vorn zu beginnen. Das Muster entstand im Vault-Kurationsprojekt und in der Klawiter Bibliography Rescue ([#case-klawiter-rescue](#case-klawiter-rescue)).

## Demo-Repo-Reduktion in der Schulung

Fuer Promptotyping-Workshops, in denen Teilnehmende die Methode an einem realen Projekt selbst nachbauen, wird das Demo-Repository bewusst nicht vorkonfiguriert. Es startet im Initialzustand mit Rohdaten, einer knappen `idea.md` und einem leeren `knowledge/`-Ordner, ohne `CLAUDE.md`, ohne Custom Commands, ohne Output-Struktur. Die Initial-Prompts liegen auf den Folien als verbrauchbare Uebergabe in den Harness; die persistenten Wissensdokumente entstehen erst im Verlauf im Repository.

Der Lerngewinn entsteht aus dem Aufbau der Promptotyping-Architektur unter Anleitung, nicht aus dem Lesen einer fertigen. Wer die Struktur selbst herstellt, versteht, warum sie so aussieht. Erprobt wurde das Muster im Workshop zur prosopographischen Datenbank mittelalterlicher Wiener Rechtsgeschaefte und im Schulungsteil der ZBZ OCR/TEI Pipeline ([#case-zbz-ocr-tei](#case-zbz-ocr-tei)).

## Claims-Verifikation als Dokumentfunktion

Die adversariale Pruefung der eigenen empirischen und Neuheitsbehauptungen wird zu einer eigenen Funktion der Wissensbasis: eigene Knowledge-Dokumente pruefen die Aussenwirkung des Projekts. Drei Bausteine tragen sie. Erstens die Nachrechnung aller Kopfzahlen aus den Rohdaten durch einen unabhaengigen Agenten, mit Quellpfad-Pflicht pro Zahl. Zweitens eine Webrecherche gegen die eigene Neuheitsbehauptung, deren erklaertes Ziel die Widerlegung ist, nicht die Bestaetigung. Drittens ein Konformitaets-Audit gegen die beanspruchten Standards.

Die Bindungsregel lautet: Aussenwirksame Claims in Paper, Companion oder Bericht duerfen nur in der Form verwendet werden, die die Verifikationsdokumente lizenzieren. Im Herkunftsfall erwies sich eine berichtete Kopfzahl-Divergenz zur Haelfte als Artefakt der Aufgabenstellung, sichtbar nur, weil die Infrastruktur ihre Ausschlussgruende protokolliert hatte; die Infrastruktur korrigierte ihren eigenen Befund. Entstanden ist das Muster in FemPrompt SozArb ([#case-femprompt-sozarb](#case-femprompt-sozarb)).

## Epistemischer Status von User Stories

Jede User Story ist eine Hypothese ueber den Anwender, solange der benannte Anwender sie nicht bestaetigt hat. Im agentischen Kontext entfaellt das implementierende Gespraech, das im klassischen Team falsche Stories korrigieren wuerde. Unvalidierte Stories muessen deshalb als Annahmen markiert sein und einen Beobachtungspunkt tragen, der festhaelt, durch welches Ereignis sich die Annahme aufloest.

Acht Pruefkriterien fuer `user-stories.md` ergeben sich daraus, vier davon maschinell pruefbar, drei nur menschlich einloesbar. Hergeleitet sind sie aus dem QUS-Rahmen (Lucassen et al. 2016) und aus dem Herkunftsfall, in dem Proxy-Stories mit einem falschen Nutzungsmodell dazu fuehrten, dass mehrere Versionen auf einer falschen Annahme aufbauten. Das Muster entstand in FemPrompt SozArb ([#case-femprompt-sozarb](#case-femprompt-sozarb)).

## Vorlagen fuer Promptotyping Documents

Ausfuellbare Vorlagen fuer die Markdown-Dokumente im `knowledge/`-Ordner eines Promptotyping-Repos sind funktionsorientiert konzipiert: Jede Vorlage adressiert eine Funktion (Identitaet, Material, Substanz, Bauweise, Gestalt, Genese, Navigation, Agent-Sozialisierung), nicht einen festen Dateinamen. Welche Vorlagen ein konkretes Repo nutzt, haengt vom Projekt ab; die Konvention beschreibt die Triggerkriterien pro Funktion deskriptiv, sodass ein Coding-Agent selbst entscheiden kann, welche Dokumente er anlegt.

Acht Vorlagen wurden aus dem HerData-Refactor abstrahiert ([#case-herdata](#case-herdata)); eine neunte, die Vorlage Action-Layer, kam aus einem Sweep ueber zahlreiche Repos hinzu und ist noch Entwurf. Die Vorlagen selbst sind als adressierbare Promptotyping-Document-Sektionen dieser Site verfuegbar, die beschreibende Regel als [Konvention Promptotyping Documents](#konvention-v0.1).
