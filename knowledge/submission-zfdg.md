---
title: Submission ZfdG
project:
  name: Promptotyping Site
  repository: https://github.com/DigitalHumanitiesCraft/Promptotyping
status: draft
language: de
version: 0.2
created: 2026-07-23
updated: 2026-07-24
authors: [Christopher Pollin]
generated-with: Claude Code mit Claude Fable 5
method:
  name: Promptotyping
  url: https://dhcraft.org/Promptotyping/
related: [paper, paper-writing]
---

# Submission ZfdG

Einreichpaket für die Zeitschrift für digitale Geisteswissenschaften, Genre Fachartikel. Der Einstieg läuft über ein Exposé (maximal 1.000 Wörter mit Literaturliste und vorläufiger Gliederung); die beiden Kurz-Abstracts (deutsch und englisch, je maximal 750 Zeichen) werden bei Annahme mit dem Volltext eingereicht. Der Papertext liegt in [paper.md](paper.md), die Steuerung in [paper-writing.md](paper-writing.md).

Stand 2026-07-24. Abstracts, Exposé und Gliederung sind aus dem Papertext nach der Revision vom 2026-07-24 neu gezogen. Der Titel steht unverändert und ist Operator-Entscheidung.

## Abstract deutsch (max. 750 Zeichen)

Digitale Forschungsdaten sind nur durch Software zugänglich, und generische Werkzeuge ebnen ein, was ein Projekt modelliert hat. Der Beitrag führt Promptotyping ein, eine iterative, dokumentgetriebene Methode des Context Engineering für agentische Coding-Werkzeuge, mit der Forschende ihre strukturierten Forschungsdaten in Forschungsartefakte übersetzen. Versionierte Markdown-Dokumente tragen Anforderungen, Datenbeschreibung und Designentscheidungen; ein LLM-Agent leitet daraus das Artefakt ab, Modellieren und Verifizieren bleiben bei den Forschenden. Die Artefakte sind statische Web-Werkzeuge; darüber beginnt Research Software Engineering. Rund zwei Jahre dokumentierter Projekte bilden die Evidenz; die Diskussion benennt die Grenzen.

## Abstract englisch (max. 750 Zeichen)

Digital research data is accessible only through software, and generic tools flatten what a project has modelled into its material. This paper introduces Promptotyping, an iterative, document-driven method of context engineering for agentic coding tools, through which researchers translate their structured research data into functional research artefacts. Versioned Markdown documents hold requirements, data descriptions, and design decisions; an agent derives the artefact from them, while modelling, specifying, and verifying stay with the scholar. The artefacts are static web tools bounded by the handover point to Research Software Engineering. Roughly two years of documented projects provide the evidence; the discussion names the limits.

## Exposé (max. 1.000 Wörter)

**Arbeitstitel:** Promptotyping. Translating Research Data into Research Artefacts with Context and Agentic Engineering

**Genre:** Fachartikel (englischsprachig)

Die digitalen Geisteswissenschaften dokumentieren seit zwei Jahrzehnten ein Übersetzungsproblem zwischen Fachwissenschaft und Softwareentwicklung, vom professionellen Intermediär bei Edmond über die Teamstrukturen bei Siemens bis zu den Trading Zones bei Kemman. Jede dieser Antworten installiert menschliche Übersetzer, und die Literatur beschreibt sie zugleich als knapp, projektgebunden und selten. Für einzelne Forschende und kleine Projekte bleibt die Lücke zwischen sorgfältig modellierten Forschungsdaten und einem Forschungsartefakt, das dieses Modell trägt, im Regelfall offen; das generische Werkzeug reduziert das Datenmodell auf das, was es darstellen kann, und verwirft damit genau die Unterscheidungen, auf denen die Forschungsfragen beruhen.

Der Beitrag führt Promptotyping als kanonische Definition einer Methode ein, die auf diese Lücke antwortet. Promptotyping ist iteratives, dokumentgetriebenes Context Engineering für agentische Coding-Werkzeuge. Das Arbeitsmaterial ist ein kleiner Satz versionierter Markdown-Dokumente, der Anforderungen (als User Stories), Datenbeschreibung und Designentscheidungen trägt; ein LLM-Agent leitet daraus das Forschungsartefakt ab. Die Beschreibung hat die Form eines Dokuments, weil ein Objekt zwei Leser bedient, die Forschenden, die es prüfen und verantworten, und den Agenten, der daraus implementiert. Der `knowledge/`-Ordner eines Projekts ist damit ein kuratiertes Wissensartefakt, dessen Abdeckung dort endet, wo Entscheidungen aus dem Bauen nicht in die Dokumente zurückgeschrieben werden. Die Dokumente werden als Boundary Objects im Sinne von Star und Griesemer gelesen und modellierungstheoretisch als konzeptuelle Modelle nach Stachowiak und Gruber fundiert; der Schritt, den die Maschine übernimmt, ist die Formalisierung, die bisher menschliche Übersetzungsarbeit war.

Der Anspruch des Beitrags ist ein Möglichkeitsanspruch mit benannten Grenzen. Die Methode setzt gut modellierte Daten und fachliche Expertise voraus und vermittelt beides nicht; die menschliche Arbeit konzentriert sich, wo wissenschaftliche Verantwortung liegt, im Modellieren, Spezifizieren und Verifizieren, gefasst in der Rolle des Critical Expert in the Loop. Die erzeugten Artefakte sind selbstgenügsame statische Web-Werkzeuge, klassifiziert nach ihrer epistemischen Funktion (Verification, Exploration, Edition, Capture, Audit) und begrenzt durch den Übergabepunkt, an dem Research Software Engineering beginnt. Die Evidenz besteht aus rund zwei Jahren dokumentierter Projekte; aufgenommen ist ein Projekt, wenn die Methode ganz durch es hindurch geführt wurde und die Arbeit ein Repository mit Dokumenten, Code und Daten hinterlassen hat, die meisten davon öffentlich, drei derzeit geschlossen. Ausgearbeitet werden eine HTR-Pipeline zum Nachlass Stefan Zweigs, eine OCR/TEI-Pipeline mit Verifikations-Interfaces auf jeder Stufe und ein Editionsprototyp, dessen philologischer Ertrag über die Artefakt-Erträge der übrigen Fälle hinausgeht; Lehr- und Kooperationsfälle prüfen, ob die Methode zu Forschenden ohne Programmierhintergrund trägt. Die Diskussion benennt die Grenzen ausdrücklich, die Evidenzbasis eines einzelnen Praktikers, die fehlende Kontrollbedingung, die nicht systematisch dokumentierten Fehlschläge, die Verschränkung von Methoden- und Modelleffekten sowie die ethische Dimension der asymmetrischen Verstärkung durch proprietäre Frontier-Modelle.

Der Beitrag schließt unmittelbar an laufende ZfdG-Diskussionen an. Er teilt mit Andorfer die statische Publikationsform als Nachhaltigkeitsentscheidung, mit Fischer, Kimmel und Puppe die Schichtung von deterministischer Prüfung und Expertenkorrektur, mit Mähr, Federer und Kaspar die Trading-Zone-Perspektive auf Datenharmonisierung und mit Pollin et al. (2025) die Diagnose fehlender Benchmarks für KI-generierte Editionsergebnisse. Methodisch wird der Text selbstanwendend produziert; das Companion-Repository publiziert die Promptotyping-Dokumente des Papers, die Vorlagen und eine quellenfeste Evidenzschicht, sodass der Entstehungsprozess mit Journal und Git-History öffentlich prüfbar ist.

**Vorläufige Gliederung:**

1. Introduction
2. The Epistemic Frame (Exploration als Forschungsakt; Werkzeuge als epistemische Artefakte; LLMs und Forschungsdaten; das Übersetzungsproblem und Dokumente als konzeptuelle Modelle; Position im KI-Diskurs; Genealogie)
3. The Method (Status und Provenienz; die vier Phasen; die Promptotyping Documents; durchgearbeitetes Beispiel)
4. The Artefact Type (statische Web-Werkzeuge; Interface-Typologie; Formatgrenzen und Übergabepunkt)
5. Evidence (Präsentationsprinzip; Projektinventar; ein Fall je epistemischer Funktion; Lehr- und Kooperationsfälle; Lesart der Evidenz)
6. Discussion (Prozess und Publikation; Verifikation; Reproduzierbarkeit und Modellabhängigkeit; Grenzen; Übertragbarkeit)
7. Conclusion

**Literatur (Auswahl):**

- Andorfer, Peter: Digitale Editionen als statische Webseiten. In: Zeitschrift für digitale Geisteswissenschaften (2026). DOI: 10.17175/2026_003
- Drucker, Johanna: Humanities Approaches to Graphical Display. In: Digital Humanities Quarterly 5 (2011), H. 1.
- Edmond, Jennifer: The Role of the Professional Intermediary in Expanding the Humanities Computing Base. In: Literary and Linguistic Computing 20 (2005), H. 3, S. 367–380.
- Fischer, Norbert / Kimmel, Dominik / Puppe, Frank: Semiautomatische Erschließung von Fotografien auf beschrifteten Bildkarten im Archiv. In: Zeitschrift für digitale Geisteswissenschaften (2025). DOI: 10.17175/2025_009
- Gruber, Thomas R.: A Translation Approach to Portable Ontology Specifications. In: Knowledge Acquisition 5 (1993), H. 2, S. 199–220.
- Kemman, Max: Trading Zones of Digital History. Berlin/Boston 2021. DOI: 10.1515/9783110682106
- Mähr, Moritz / Federer, Lucas / Kaspar, Magda: Sexueller Missbrauch im Umfeld der katholischen Kirche in der Schweiz. In: Zeitschrift für digitale Geisteswissenschaften (2026). DOI: 10.17175/2026_006
- Pollin, Christopher: Modelling, Operationalising and Exploring Historical Information. Dissertation, Universität Graz 2025.
- Pollin, Christopher / Fischer, Franz / Sahle, Patrick / Scholger, Martina / Vogeler, Georg: When it was 2024 – Generative AI in the Field of Digital Scholarly Editions. In: Zeitschrift für digitale Geisteswissenschaften (2025). DOI: 10.17175/2025_008
- Siemens, Lynne: "It's a team if you use 'reply all'". In: Literary and Linguistic Computing 24 (2009), H. 2, S. 225–233.
- Stachowiak, Herbert: Allgemeine Modelltheorie. Wien/New York 1973.
- Star, Susan Leigh / Griesemer, James R.: Institutional Ecology, "Translations" and Boundary Objects. In: Social Studies of Science 19 (1989), H. 3, S. 387–420.

## Formalia-Checkliste (Stand paper-writing.md)

- Fachartikel, Einstieg über Exposé an die Redaktion
- Titel offen (Operator-Entscheidung; der Arbeitstitel trägt weiter, seine dokumentierte Begründung über die Übersetzungs-Doppelung ist mit der Revision entfallen)
- Abstracts deutsch und englisch, je max. 750 Zeichen (oben)
- Fußnoten mit Autor-Jahr-Kurzzitaten, offizielle ZfdG-CSL für Zotero bei Endformatierung
- Dezimalgliederung max. zwei Ebenen (erfüllt)
- Softwarezitate in der Bibliographie (erfüllt über Fußnoten- und Referenzpraxis)
- Artikellizenz CC BY-SA 4.0
