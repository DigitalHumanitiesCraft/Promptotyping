---
title: Glossar
slug: glossar
version: "0.1"
status: complete
source: data/glossar.json (massgebliche Datenquelle), _content/paper, knowledge/INDEX.md, Vault-Konzeptdokumente
mirrored: 2026-06-10
machine-url: https://dhcraft.org/Promptotyping/_content/glossar.md
---

# Glossar

Konstitutive Begriffe des Promptotyping-Papers und der Methodik-Site. Die massgebliche Datenquelle ist `data/glossar.json`; diese Datei ist die lesbare Form derselben Inhalte und inhaltsgleich. Pro Eintrag: Kurzdefinition (ein Satz, fuer Tooltips), Volldefinition (ein Absatz), Quelle.

### Action Document

Imperatives Promptotyping Document, das beschreibt, was Agenten tun koennen.

Ein Action Document ist imperativ und beschreibt, was Agenten tun koennen. Beispiele sind instructions.md, rules.md, cloud-commands.md und CLAUDE.md. Action Documents steuern das Modellverhalten und liegen typischerweise im Repo-Root. Diagnostik: ist der Output formal falsch, wird zuerst das Action Document geprueft.

Quelle: Pollin 2026, Abschnitt 3.3; Konvention Promptotyping Documents

### Action-Layer

Das imperative CLAUDE.md im Repo-Root, das den Coding-Agenten sozialisiert.

Der Action-Layer ist das imperative Dokument im Repo-Root, gewoehnlich CLAUDE.md, das den Coding-Agenten sozialisiert. Er routet zu Wissen und uebersetzt es in Imperative, traegt aber selbst kein Wissen. Er besteht aus einem portablen Methodenkern (Wissensbasis-Routing, Journal-Pflicht, Verifikationsregeln, Designprinzipien, Scope, Wahrheitshierarchie) und einem austauschbaren Werkzeug-Block (Befehle, Hooks, Permissions, Plattform-Konventionen).

Quelle: Vorlage Action-Layer (Entwurf); Konvention Promptotyping Documents

### Agent-Sozialisierung

Aesthetische und verhaltensbezogene Praegung eines Coding-Agenten durch die Komposition aus design.md und CLAUDE.md.

Agent-Sozialisierung bezeichnet die aesthetische und verhaltensbezogene Praegung eines Coding-Agenten, die als Lese-Effekt entsteht, wenn ein Action-Dokument im Repo-Root auf ein deklaratives Designdokument verweist. Das Designrationale wird in dieser Uebersetzung zum Aequivalent von Werten in einem Agent-Profil. Knowledge bleibt Knowledge, Action bleibt Action; die Sozialisierung kommt aus dem Zusammenspiel, nicht aus einem einzelnen Dokument.

Quelle: Vault Agent-Sozialisierung; Promptotyping MOC

### Agentic Coding

LLM-Agenten, die autonom Dateisysteme navigieren, Skripte ausfuehren, Tests laufen lassen und iterieren.

Agentic Coding bezeichnet den Einsatz von LLM-Agenten wie Claude Code, die autonom Dateisysteme navigieren, Skripte ausfuehren, Tests laufen lassen, Fehlermeldungen interpretieren und auf den eigenen Outputs innerhalb eines Repositorys iterieren. Seit Ende 2025 haben solche Werkzeuge eine Faehigkeitsschwelle erreicht, die sie zu Implementierungsinstrumenten innerhalb von Promptotyping macht. Multi-Agent-Systeme sind Werkzeug der Methode, nicht die Methode selbst.

Quelle: Pollin 2026, Abschnitt 2.6; Anthropic 2025; Yang et al. 2024

### Anker-Schema

System stabiler URL-Anker, ueber die Vorlagen, Konzepte, Case Studies und Begriffe der Site adressiert werden.

Das Anker-Schema ist das System der permanent stabilen URL-Anker auf der Single-Page-Site. Pro Vorlage, Konzept, Case Study und Begriff existiert ein stabiler Anker, etwa #promptotyping-document-data, #konzept-eil oder #case-herdata. Jeder adressierbare Inhalt existiert in zwei gleichberechtigten, kanonischen Formen: einem Hash-Anker und einer Subpath-URL. Repos, die per Frontmatter-Feld template: verlinken, adressieren diese Anker; sie duerfen nicht ohne Diskussion umbenannt werden.

Quelle: knowledge/specification.md, Anforderung A4; knowledge/INDEX.md

### Asymmetric Amplification

LLMs automatisieren nicht, sondern verstaerken vorhandene Expertise asymmetrisch.

Asymmetric Amplification benennt den Effekt, dass LLMs Forschende nicht ersetzen, sondern ihre vorhandene Expertise verstaerken, und zwar asymmetrisch: Aufgaben innerhalb der Faehigkeitsgrenze des Modells gewinnen stark an Produktivitaet, Aufgaben ausserhalb verlieren. Dell'Acqua et al. (2025) zeigen empirisch diese jagged frontier mit Produktivitaetsgewinnen innerhalb und Leistungseinbussen ausserhalb der Grenze. Promptotyping amplifiziert Experten, ersetzt sie nicht; die Qualitaet haengt weiter von menschlicher Expertise ab.

Quelle: Pollin 2026, Abschnitt 6 (#konzept-asymmetric-amplification); Dell'Acqua et al. 2025

### Claims-Verifikation als Dokumentfunktion

Adversariale Pruefung der eigenen empirischen und Neuheitsbehauptungen als eigene Knowledge Documents.

Claims-Verifikation als Dokumentfunktion bezeichnet die adversariale Pruefung der eigenen empirischen und Neuheitsbehauptungen in eigenen Knowledge Documents. Drei Bausteine: Nachrechnung aller Kopfzahlen aus den Rohdaten durch einen unabhaengigen Agenten mit Quellpfad-Pflicht pro Zahl, Webrecherche gegen die eigene Neuheitsbehauptung mit dem Ziel der Widerlegung, und ein Konformitaets-Audit gegen die beanspruchten Standards. Aussenwirksame Claims duerfen nur in der Form verwendet werden, die die Verifikationsdokumente lizenzieren. Das Muster entstand in FemPrompt SozArb.

Quelle: Promptotyping MOC, Methodenerweiterungen (femprompt-sozarb)

### Co-Intelligence

Rahmen fuer Mensch-LLM-Zusammenarbeit, der Verstaerkung statt Automatisierung betont.

Co-Intelligence (Mollick 2024) ist ein Rahmen fuer die Zusammenarbeit von Mensch und LLM, der Amplifikation gegenueber Automatisierung betont. Wachter (2025) trifft die parallele Unterscheidung zwischen Automation und Augmentation aus geisteswissenschaftlicher Perspektive und fordert second-order observation, also Reflexion nicht nur ueber Outputs, sondern ueber den Prozess ihrer Erzeugung. Promptotyping operationalisiert diese Ideen ueber den Critical Expert in the Loop.

Quelle: Pollin 2026, Abschnitt 2.4 (#konzept-co-intelligence-eil); Mollick 2024

### Context Engineering

Systematische Gestaltung und Verwaltung der Kontextinformation, die LLMs zur Inferenzzeit erhalten.

Context Engineering bezeichnet die systematische Gestaltung und Verwaltung der kontextuellen Information, die LLMs zur Inferenzzeit bereitgestellt wird (Mei et al. 2025). Es umfasst Context Retrieval, Context Processing, Context Management und die Integration ueber RAG, Memory-Systeme und Multi-Agent-Architekturen. Der Wechsel vom Prompt Engineering zum Context Engineering spiegelt wider, dass produktionsreife LLM-Anwendungen eine systematische Informationsarchitektur statt einzelner Prompt-Optimierung verlangen. Promptotyping ist eine domaenenspezifische Auspraegung des Context Engineering.

Quelle: Pollin 2026, Abschnitt 2.1 (#konzept-context-engineering); Mei et al. 2025

### Context Memory

Zusammenspiel von Journal und Git-Historie, das die Wiederaufnahme von Sessions ermoeglicht.

Context Memory bezeichnet das Zusammenspiel von Journal und Git-Historie, das die zuverlaessige Wiederaufnahme von Promptotyping-Sessions ermoeglicht: das Journal dokumentiert das Warum der Entscheidungen, die Commits fixieren das Was der funktionierenden Zustaende. Das Muster wurde im imareal-room-object-Dashboard beobachtet, wo Claude Code selbststaendig im JOURNAL.md dokumentierte und so die Wiederaufnahme ohne Kontextverlust traegt.

Quelle: Pollin 2026, Abschnitt 4.2 (Insight 4); Vault imareal-room-object

### Context Rot

Abnahme der LLM-Leistung mit wachsender Kontextlaenge, auch bei einfachen Aufgaben.

Context Rot bezeichnet die empirisch belegte Abnahme der LLM-Leistung mit wachsender Eingabelaenge, selbst bei einfachen Aufgaben wie dem Wiederauffinden von Text (Hong et al. 2025). Die Untersuchung ueber 18 Modelle zeigt nicht-uniforme Leistung bei wachsendem Kontext und widerlegt die Annahme, dass mehr Information zu besseren Ergebnissen fuehrt. Context Rot liefert die technische Begruendung fuer die Distillation-Phase, deren Prinzip maximale Information bei minimalen Tokens lautet. In CorrespExplorer wurde der Effekt bei etwa 50 Prozent der beworbenen Kontextfenster-Kapazitaet praktisch beobachtet.

Quelle: Pollin 2026, Abschnitt 2.3 (#konzept-context-rot); Hong et al. 2025

### Critical Expert in the Loop (EIL)

Rolle, die LLM-Output an definierten Stellen verifiziert und Domaenenexpertise mit Wissen ueber LLM-Fehlermodi verbindet.

Der Critical Expert in the Loop ist die Rolle, die LLM-Output an definierten Stellen verifiziert. Anders als der generische Human in the Loop verlangt sie zugleich Domaenenexpertise und Bewusstsein fuer LLM-spezifische Fehlermodi sowie metakognitive Wachsamkeit. Der Critical Expert prueft nicht nur die Korrektheit von Outputs; die folgenreichere blinde Stelle liegt im nicht explorierten Moeglichkeitsraum, also in den nicht gestellten Fragen und nicht erzeugten Alternativen. Diese metareflexive Kapazitaet unterscheidet ihn von einem Reviewer, der nur Korrektheit prueft.

Quelle: Pollin 2026, Abschnitt 2.4 (#konzept-co-intelligence-eil); Pollin 2025c

### Demo-Repo-Reduktion

Didaktisches Muster, in dem das Demo-Repository bewusst nicht vorkonfiguriert ist.

Die Demo-Repo-Reduktion ist ein didaktisches Muster fuer Promptotyping-Workshops, in dem Teilnehmende die Methode an einem realen Projekt selbst nachbauen. Das Demo-Repository ist bewusst nicht vorkonfiguriert: Initialzustand mit Rohdaten, knapper idea.md und leerem knowledge/-Ordner, ohne CLAUDE.md, ohne Custom Commands, ohne Output-Struktur. Der Lerngewinn entsteht aus dem Aufbau der Promptotyping-Architektur unter Anleitung, nicht aus dem Lesen einer fertigen. Erprobt im SuGW- und im ZBZ-Workshop.

Quelle: Promptotyping MOC, Methodenerweiterungen (sugw, zbz-ocr-tei)

### Distillation

Phase und Schreibprinzip der Context Compression: maximale Information bei minimalen Tokens.

Distillation ist die dritte Promptotyping-Phase und zugleich das Schreibprinzip der Promptotyping Documents: Context Compression mit dem Ziel maximale Information bei minimalen Tokens. Sie verdichtet die Erkenntnisse der Exploration in strukturierte Markdown-Dokumente. Die technische Begruendung liefert Context Rot (Hong et al. 2025): gezielte Verdichtung erhoeht die Modellaufmerksamkeit auf das Wesentliche. Konkret traegt ein Dokument eine abgegrenzte Funktion, Redundanzen werden ueber Verweise statt Wiederholung abgebildet, periodisches Refactoring ist erwartet.

Quelle: Pollin 2026, Abschnitt 3.3; Hong et al. 2025

### Epistemic Infrastructure

Integriertes System aus Verification Milestones, Interfaces, Documents, Version Control und Agentic Coding.

Epistemic Infrastructure bezeichnet das integrierte System, das aus komplexen Promptotyping-Pipelines emergiert: Verification Milestones, Promptotyping Interfaces, Promptotyping Documents, Version Control und Agentic Coding greifen ineinander und machen den Erkenntnisprozess nachvollziehbar, pruefbar und ueber Sessions hinweg akkumulierbar. Im ZBZ-OCR-TEI-Projekt und in FemPrompt SozArb wird das Repository selbst als epistemische Infrastruktur behandelt.

Quelle: Pollin 2026, Abschnitt 5 (#konzept-epistemic-infrastructure); Vault Epistemic Infrastructure

### Exploration und Mapping

Zweite Promptotyping-Phase: Schnittstelle zwischen Daten und Forschungskontext sondieren, Sackgassen dokumentieren.

Exploration und Mapping ist die zweite Promptotyping-Phase. Sie sondiert systematisch die Schnittstelle zwischen Rohdaten und Forschungskontext mit der Leitfrage, ob sich die abstrakte Forschungsfrage konkret auf die Datenstruktur abbilden laesst. Die Phase produziert bewusst keine formalen Dokumente; ihr Ergebnis ist Wissen darueber, was moeglich ist, was nicht und warum. Zu verstehen, was die Daten nicht hergeben, ist genauso wertvoll wie zu wissen, was geht. Sackgassen sind positive Erkenntnisse.

Quelle: Pollin 2026, Abschnitt 3; Vault Promptotyping.md

### Frontmatter-Inspector

Site-Modul, das einen template:-URI in Echtzeit aufloest und die referenzierte Vorlage live rendert.

Der Frontmatter-Inspector ist ein Modul der Vorlagen-Sektion, das einen ganzen YAML-Frontmatter-Block entgegennimmt, template.url oder template.alias extrahiert, die URL gegen das Anker-Schema validiert und das Side-Panel mit der gerenderten Vorlage oeffnet. Er demonstriert die Frontmatter-Indirektion konkret: das Einfuegen eines realen Frontmatters aus einem fremden Repo macht sichtbar, wie Repos die Site als maschinenlesbaren Endpunkt nutzen.

Quelle: knowledge/specification.md, Anforderung A11 und ADR-7

### Informed Vibe Coding

Vibe Coding auf der Basis von Computer Literacy und Computational Thinking als Kompetenzvoraussetzung.

Informed Vibe Coding bezeichnet Vibe Coding, das auf einem Drei-Schichten-Kompetenzmodell aufsetzt: Computer Literacy, dann Computational Thinking, dann Informed Vibe Coding. Es grenzt die kompetente, methodisch reflektierte Form der LLM-gestuetzten Entwicklung von der naiven ab. Die untere Schicht traegt die obere: ohne grundlegendes technisches Verstaendnis bleibt Vibe Coding blind gegenueber den Konsequenzen der erzeugten Loesung.

Quelle: Vault Informed Vibe Coding; Promptotyping MOC

### Implementation

Vierte Promptotyping-Phase: iterative Entwicklung mit den Promptotyping Documents als Kontext.

Implementation ist die vierte Promptotyping-Phase. Nach Uebergabe der Promptotyping Documents an das LLM erfolgt iterative Entwicklung: semantische Forschungsdaten als Kontext, Bau von Promptotyping Interfaces, Definition von Verification Milestones, Rueckspeisung von Screenshots, Konsolen-Output und Testergebnissen, Git-Commits an verifizierten Zustaenden. Neues Wissen fliesst zurueck in die Dokumente, die damit lebende Dokumente sind. Multi-Agent-Systeme mit Dateizugriff wie Claude Code integrieren diesen Workflow besonders effektiv.

Quelle: Pollin 2026, Abschnitt 3; Vault Promptotyping.md

### Interface-Typologie

Klassifikation der epistemischen Funktion erzeugter Interfaces: Verification, Exploration, Edition, Capture, Audit.

Die Interface-Typologie klassifiziert die erzeugten Promptotyping-Interfaces nach ihrer epistemischen Funktion und ergaenzt damit die Use-Case-Typologie, die fragt, wo im Forschungsdaten-Lebenszyklus die Methode operiert. Verification-Interfaces pruefen Zwischenergebnisse, Exploration-Interfaces machen Daten aus neuen Perspektiven durchsuchbar, Edition-Interfaces praesentieren wissenschaftliche Editionen, Capture-Interfaces unterstuetzen Annotation und Erfassung, Audit-Interfaces vergleichen und pruefen Bewertungen.

Quelle: Pollin 2026, Abschnitt 5.3 (#abschnitt-5-epistemic-infrastructure)

### Knowledge Curation

Systematische Pflege des vernetzten Wissensmodells auf der Vault- und der Repo-Schicht.

Knowledge Curation ist die systematische Pflege des vernetzten Wissensmodells auf zwei Schichten: dem persoenlichen Vault als Second Brain und den projektspezifischen Knowledge Vaults in Repos. Sie kennt drei Operationstypen (skriptbasiert, semantisch, strukturell) und behandelt Verlinkungen als navigierbare Kontextpfade fuer agentische Systeme. Als Querschnittspraxis sorgt sie dafuer, dass Promptotyping ueber Sessions hinaus akkumuliert.

Quelle: Promptotyping MOC, Methodenerweiterungen (vault-kuration, klawiter-rescue)

### Knowledge Document

Deklaratives Promptotyping Document, das Daten, Domaene und Forschungskontext beschreibt.

Ein Knowledge Document ist deklarativ und beschreibt Daten, Domaene und Forschungskontext eines Projekts. Beispiele sind README.md, project.md, data.md, requirements.md, architecture.md, design.md und editorial-guidelines.md. Knowledge Documents erweitern den epistemischen Horizont des Modells. Diagnostik: ist der Output inhaltlich falsch, wird zuerst das Knowledge Document geprueft.

Quelle: Pollin 2026, Abschnitt 3.3; Konvention Promptotyping Documents

### Knowledge-Action-Komposition

Strukturprinzip, das Knowledge und Action trennt und gemeinsam Coding-Agenten sozialisiert.

Die Knowledge-Action-Komposition ist das Strukturprinzip, mit dem deklaratives Wissen und imperative Steuerung getrennt bleiben und gemeinsam einen Coding-Agenten sozialisieren. Konkret bleibt design.md ein deklaratives Knowledge Document, waehrend CLAUDE.md als Action Document darauf als Wertequelle verweist und die Designhaltung in imperative Prinzipien uebersetzt. Die aesthetische und faktische Steuerung entsteht aus der Komposition zweier Dokumente, nicht aus einem Hybridtyp.

Quelle: Vault Knowledge-Action-Komposition; Konvention Promptotyping Documents

### Konfabulation

Erzeugung plausibler, aber falscher Outputs durch LLMs, gemeinhin Halluzination genannt.

Konfabulation, gemeinhin Halluzination genannt, ist die Erzeugung plausibler, aber falscher Outputs (Summerfield 2025). In Forschungskontexten ist sie besonders gefaehrlich, wenn der Output Kontextualisierung, Periodisierung oder Zuschreibung betrifft, also Domaenen, in denen Plausibilitaet und Korrektheit auseinanderfallen koennen. Konfabulation gehoert neben Sycophancy zu den strukturellen Fehlermodi, die der Critical Expert in the Loop adressiert.

Quelle: Pollin 2026, Abschnitt 2.4; Summerfield 2025

### Konvention Promptotyping Documents

Deskriptive Beschreibung der Funktionen einer Wissensbasis, des Frontmatter-Schemas und der Strukturprinzipien.

Die Konvention Promptotyping Documents beschreibt deskriptiv, welche Funktionen eine Wissensbasis im knowledge/-Ordner abdeckt, welches Frontmatter-Vokabular gilt und welche Strukturprinzipien tragen. Sie schreibt keine feste Dokumentenliste vor, sondern liefert Triggerkriterien pro Funktion, sodass ein Coding-Agent selbst entscheiden kann, welche Dokumente ein Repo braucht. Sie ist aus der HerData-Referenzimplementierung abgeleitet und auf der Site als externe Spezifikation gespiegelt.

Quelle: Konvention Promptotyping Documents (#konvention-v0.1)

### Phasen-Provenance-Lane

Monochrome Randmarkierung der Site, die pro Absatz die beschriebene Promptotyping-Phase anzeigt.

Die Phasen-Provenance-Lane ist ein aesthetischer Designkniff der Site. Eine linke Schmalspalte zeigt waehrend des Lesens an jedem Absatz eine monochrome Markierung in vier Graustufen, entsprechend der Promptotyping-Phase, die der Absatz beschreibt. Sie macht die methodische Verteilung des Papers visuell ablesbar und dient als Navigation: Hover oeffnet einen Tooltip, Klick aktiviert einen Phasen-Filter. Sie bleibt konsequent monochrom.

Quelle: knowledge/specification.md, Anforderung A2 und ADR-4; knowledge/INDEX.md

### Preparation

Erste Promptotyping-Phase: alle Rohmaterialien zusammentragen, bevor technische Entscheidungen fallen.

Preparation ist die erste Promptotyping-Phase. Alle relevanten Rohmaterialien werden zusammengetragen, bevor technische Entscheidungen fallen: Forschungsdaten in ihren Originalformaten, Dokumentation zu Standards und Datenmodellen, erste Forschungsfragen und implizites Domaenenwissen aus Expertengespraechen. Die Materialsammlung erzwingt die praezise Artikulation der Projektziele vor dem LLM-Einsatz.

Quelle: Pollin 2026, Abschnitt 3; Vault Promptotyping.md

### Process Document

Chronologisches oder analytisches Promptotyping Document, das den Arbeitsprozess dokumentiert.

Ein Process Document ist chronologisch oder analytisch und dokumentiert den Arbeitsprozess. Beispiele sind journal.md, learnings.md und plan.md. Process Documents werden kontinuierlich aktualisiert. Diagnostik: ist die Entscheidungslogik unklar, wird zuerst das Process Document geprueft. Die VetMedAI-Wissensbilanz fuehrte Learnings als eigenstaendigen Process-Document-Typ ein.

Quelle: Pollin 2026, Abschnitt 3.3; knowledge/INDEX.md

### Promptotyping

Iterative Context-Engineering-Methode in vier Phasen, um aus Daten und Frontier-LLMs Forschungsartefakte zu erzeugen.

Promptotyping ist eine iterative Context-Engineering-Methode in vier Phasen (Preparation, Exploration und Mapping, Distillation, Implementation), die aus Forschungsdaten und Frontier-LLMs Forschungsartefakte wie Interfaces, Pipelines, Editionen, Datenmodelle oder Tools erzeugt. Promptotyping Documents sind in dieser Methode das primaere Artefakt; der Prototyp ist ein funktionales Nebenprodukt, das verworfen und aus den Dokumenten regeneriert werden kann. Der Unterschied zu Vibe Coding liegt im strukturierten Vorgehen, der aktiven Anforderungsanalyse und der expliziten Wissensdokumentation.

Quelle: Pollin 2026, Abschnitt 3; Vault Promptotyping.md

### Promptotyping Document

Strukturiertes, LLM-optimiertes Markdown-Dokument im knowledge/-Ordner eines Promptotyping-Repos.

Ein Promptotyping Document ist ein strukturiertes, LLM-optimiertes Markdown-Dokument im knowledge/-Ordner eines Promptotyping-Repos, das Kontext verdichtet und destilliert. Es gibt drei analytische Typen: Knowledge (deklarativ), Process (chronologisch oder analytisch) und Action (imperativ). Diese Dokumente sind keine klassische Dokumentation, sondern kontextangepasste Artefakte des Context Engineering, die LLM-gestuetzt erzeugt, aber von Experten kuratiert werden.

Quelle: Pollin 2026, Abschnitt 3.3; knowledge/INDEX.md

### Promptotyping Interface

Browser-basiertes Validierungstool, das Zwischenergebnisse sichtbar, vergleichbar und korrigierbar macht.

Promptotyping Interfaces sind browser-basierte Validierungstools, meist statische HTML/CSS/JS-Werkzeuge, die Zwischenergebnisse einer Pipeline sichtbar, vergleichbar und korrigierbar machen und so epistemische Qualitaet transparent halten. Im ZBZ-OCR-TEI-Projekt rendert ein Pipeline-Viewer Faksimile, Layout-Overlay und OCR/TEI nebeneinander mit Edit-Toggles. Sie sind das Mittel, ueber das Verification Milestones im konkreten Werkzeug greifbar werden.

Quelle: Pollin 2026, Abschnitt 5; Promptotyping MOC (zbz-ocr-tei)

### Scholar-Centered Design

Gestaltungsansatz, bei dem sich das System den Arbeitspraktiken der Forschenden anpasst.

Scholar-Centered Design ist ein in Pollin (2025b) entwickelter Gestaltungsansatz, bei dem sich das System den Arbeitspraktiken der Forschenden anpasst, statt umgekehrt. Es erzeugt User Stories, Personas und Epics aus kollaborativen Sitzungen mit Domaenenexperten und stuetzt sich auf Marchioninis exploratory search und Bates berrypicking model. Im DEPCHA-Projekt fuehrten Deep-Dive-Sitzungen zu strukturierten Anforderungen, die aus den Daten allein nicht ableitbar waren. Es liefert die strukturierten Kontexte, die Promptotyping fuer die LLM-gestuetzte Produktion nutzt.

Quelle: Pollin 2026, Abschnitt 2.5; Pollin 2025b, Kap. 4.6

### Side-Panel

Rechtes, einschiebendes Panel der Single-Page mit kontextspezifischer Tiefe ohne Unterbrechung des Leseflusses.

Das Side-Panel ist das rechte, einschiebende Panel der Single-Page-Site. Es traegt kontextspezifische Tiefe, etwa einen Glossar-Eintrag, eine Vorlagen-Spezifikation, eine Case-Study-Tiefenseite oder ein Literatur-Detail, und oeffnet sich auf Klick, ohne den Lesefluss zu unterbrechen. Auf Mobilgeraeten erscheint es als Bottom-Sheet.

Quelle: knowledge/specification.md; knowledge/INDEX.md

### Skript-vs-LLM-Trennung

Aufteilung von Aufgaben nach Eindeutigkeit: algorithmisch Eindeutiges in Skripte, semantisch Interpretierendes ans LLM.

Die Skript-vs-LLM-Trennung weist algorithmisch eindeutige Aufgaben wie das Umbenennen von Tags, Berechnen von Statistiken oder Mergen von Dokumenten Python-Skripten zu und semantisch interpretierende Aufgaben wie Konzeptzusammenfuehrung oder Regelextraktion dem LLM. Die Trennlinie verlaeuft entlang der Eindeutigkeit, nicht der Komplexitaet. Sie wurde in der Vault-Kuration herausgearbeitet: was programmatisch stabil machbar ist, sollte programmatisch getan werden.

Quelle: Promptotyping MOC, Methodenerweiterungen (vault-kuration)

### Standalone-Forschungsdaten als Promptotyping-Muster

Wiederkehrendes Strukturmerkmal: statische Webseite plus standalone Forschungsdatensatz im Repo.

Standalone-Forschungsdaten als Promptotyping-Muster bezeichnet das wiederkehrende Strukturmerkmal, dass ein Promptotyping-Artefakt aus einer statischen Webseite und einem standalone Forschungsdatensatz im Repo besteht. Es tritt in zwei Spielarten auf: als JSON-LD-Knowledge-Graph mit hoher RDF-Semantik, etwa in M3GIM, oder als Datenstruktur-JSON als reine Datenquelle mit externen IDs als Strings, etwa in HerData. Der Datensatz traegt die Datenhaltung des Projekts vollstaendig.

Quelle: Vault Standalone-Forschungsdaten als Promptotyping-Muster; Promptotyping MOC

### Subagents und Rollensimulation

Spezialisierte Agentenrollen mit differenzierten Berechtigungen oder, ohne vorab definierte Rollen, eine Simulation in einer Session.

Subagents sind in .claude/agents/ definierte Agentenrollen mit Berechtigungsdifferenzierung, etwa read-only Analyse, voller Schreibzugriff fuer Implementierung und eine Syntheserolle. Echte Subagents werden nur geladen, wenn die Definitionen vor Sessionstart existieren; sonst laeuft eine Rollensimulation in einer einzigen Session. Im wiiw-FIGARO-Projekt wurden drei Rollen so getrennt, dass der Analyseagent nur Leserechte hatte.

Quelle: Promptotyping MOC, Methodenerweiterungen (wiiw-figaro)

### Sycophancy

Tendenz von LLMs, Nutzerannahmen zuzustimmen, statt sie zu hinterfragen.

Sycophancy ist die Tendenz von LLMs, den Annahmen der Nutzenden zuzustimmen, statt sie infrage zu stellen (Sharma et al. 2023; Malmqvist 2025). Chen et al. (2025) zeigen Zustimmungsraten bis zu 100 Prozent bei unlogischen medizinischen Anfragen in Frontier-Modellen, Fanous et al. (2025) finden sykophantisches Verhalten in 58 Prozent der Faelle. Der Critical Expert muss erkennen, dass das Ausbleiben von Widerspruch des Modells keine Validierung darstellt. In CorrespExplorer stimmte das Modell suboptimalen Entscheidungen zu, sobald sie als Vorschlag formuliert waren.

Quelle: Pollin 2026, Abschnitt 2.4; Sharma et al. 2023; Malmqvist 2025

### template:-Feld

Frontmatter-Feld in Promptotyping Documents, das auf die massgebliche Vorlagen-Spezifikation auf der Site zeigt.

Das template:-Feld ist ein Frontmatter-Feld in Promptotyping Documents, das auf die massgebliche Vorlagen-Spezifikation auf der Methodik-Site verweist. Es traegt name, version, url (Subpath-Form, kanonisch) und optional alias (Hash-Form, gleichwertig). Dadurch wird das Dokument selbst, nicht der Vault-Spiegel, zur kanonischen Quelle: ein Coding-Agent, der einen template:-URI sieht, kann die volle Spezifikation aufrufen, ohne den Vault zu kennen.

Quelle: knowledge/specification.md, Anforderung A5; Konvention Promptotyping Documents

### User Story (epistemischer Status)

Jede User Story ist eine Hypothese ueber den Anwender, bis der benannte Anwender sie bestaetigt.

Im Promptotyping-Kontext ist jede User Story eine Hypothese ueber den Anwender, bis der benannte Anwender sie bestaetigt hat. Im agentischen Kontext entfaellt das implementierende Gespraech, das falsche Stories im Team korrigieren wuerde; unvalidierte Stories muessen deshalb als Annahmen markiert sein und einen Beobachtungspunkt tragen. Acht Pruefkriterien fuer user-stories.md, vier maschinell pruefbar und drei nur menschlich einloesbar, leiten sich aus QUS (Lucassen et al. 2016) und dem FemPrompt-Fall ab.

Quelle: Promptotyping MOC, Methodenerweiterungen; Lucassen et al. 2016

### Verification Milestone

Definierter Checkpoint im Workflow, an dem Domaenenexpertise systematisch angewendet wird.

Verification Milestones sind definierte Checkpoints im Workflow, an denen Domaenenexpertise systematisch angewendet wird. Sie operationalisieren den Critical Expert in the Loop als Prozessschritt statt als Rolle: an einem Milestone wird angehalten, mit deterministischen Werkzeugen und Expertenurteil verifiziert und erst dann fortgefahren. Die Praxis wurde im ZBZ-OCR-TEI-Projekt herausgearbeitet, wo Interfaces an jeder Pipeline-Stufe als Verification Milestones dienen.

Quelle: Pollin 2026, Abschnitt 5; Promptotyping MOC (zbz-ocr-tei)

### Vibe Coding

Praxis, bei der Code per natuerlicher Sprache erzeugt und ohne gruendliche Pruefung uebernommen wird.

Vibe Coding bezeichnet eine Praxis, bei der Code durch Anweisungen in natuerlicher Sprache erzeugt und ohne gruendliche Pruefung uebernommen wird (Karpathy 2025). Sarkar und Drosos (2025) beschreiben iterative Zielerfuellungszyklen und material disengagement. Promptotyping teilt die Praemisse, dass LLMs aus natuerlicher Sprache funktionalen Code erzeugen koennen, unterscheidet sich aber durch vorgelagerte Preparation- und Exploration-Phasen, persistente Dokumentation und systematische Verifikation. Vibe Coding wird nicht abgelehnt, sondern als explorativer Modus innerhalb von Promptotyping verstanden.

Quelle: Pollin 2026, Abschnitt 2.2 (#konzept-vibe-coding); Sarkar und Drosos 2025

### Vorlage (Promptotyping Document)

Ausfuellbare Strukturvorgabe fuer eine spezifische Funktion einer Promptotyping-Wissensbasis.

Eine Vorlage ist eine ausfuellbare Strukturvorgabe fuer eine spezifische Funktion einer Promptotyping-Wissensbasis: Identitaet, Material, Substanz, Bauweise, Gestalt, Genese, Navigation oder Agent-Sozialisierung. Der Katalog umfasst neun Vorlagen und ist offen; eine Vorlage entsteht, sobald sich ein Funktions-Traeger in mindestens zwei Repos vergleichbar wiederholt. Eine Vorlage traegt eine Funktion, nicht einen festen Dateinamen, und nur, wenn ihr Trigger erfuellt ist.

Quelle: Konvention Promptotyping Documents; knowledge/INDEX.md
