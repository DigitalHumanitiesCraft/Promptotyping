---
title: Revision Frame Proposal
project:
  name: Promptotyping Site
  repository: https://github.com/DigitalHumanitiesCraft/Promptotyping
status: draft
language: de
version: 0.1
created: 2026-07-24
updated: 2026-07-24
authors: [Christopher Pollin]
generated-with: Claude Code mit Claude Opus 5
method:
  name: Promptotyping
  url: https://dhcraft.org/Promptotyping/
related: [paper, paper-writing, revision-knowledge, revision-audit-a0]
---

# Revision Frame Proposal

Entwurf für den Wechsel der Hauptaussage von der Übersetzungs-Doppelung auf die Verschiebung der bindenden Arbeit vom Implementieren zum Beschreiben, mit der Beschreibungskompetenz der Geisteswissenschaften als tragender zweiter Hälfte. Lese-Scope `paper.md`, `paper-writing.md`, `revision-knowledge.md`, `revision-audit-a0.md`, ergänzend die Audits A1 bis A3 und die Claim-Schicht des Grounded Vault zur Nebenwirkungsprüfung. `paper.md` ist unangetastet, kein Commit. Alle Entwürfe britisches Englisch im Register des Textes, geprüft gegen die vier Kernverbote und den Prüfkatalog in `paper-writing.md`.

Zeilenangaben beziehen sich auf `knowledge/paper.md` im Stand 2026-07-24 (428 Zeilen).

---

## 1. Kartierung

Dreizehn Stellen tragen, stützen oder verweisen auf die Doppelung. Vier davon tragen sie (T), fünf stützen sie mit eigenem Material (S), vier verweisen nur (V).

### T1 — Titel (Zeile 1)

> "Promptotyping. Translating Research Data into Research Artefacts with Context and Agentic Engineering"

**Rolle.** Das Partizip `Translating` ist die Doppelung im Titel. Der Titel wurde am 2026-07-23 ausdrücklich nach der Übersetzungsthese gewählt (`paper-writing.md`, Entscheidungsstand).

**Bricht.** Nicht formal. `translate` im alltagssprachlichen Sinn (Daten werden in Artefakte überführt) trägt den Titel auch ohne die Figur. Der Titel verliert aber seine dokumentierte Begründung und wird damit zu einer offenen Frage (siehe Abschnitt 4, Entscheidungspunkt D1).

### T2 — Abstract (Zeile 9, 285 Wörter)

> "Translation runs through the method twice. The field has documented the translation problem between domain scholars and programmers for two decades, and LLMs in turn operate as translation mechanisms; both meet in the documents, which scholars can read and verify and agents can execute."

**Rolle.** Deklariert die Figur an der prominentesten Stelle des Textes als das, was die Methode theoretisch ausmacht.

**Bricht.** Diese zwei Sätze (45 Wörter) entfallen ersatzlos. Der Abstract hat danach eine Lücke genau an der Stelle, an der er sagt, was das Paper theoretisch behauptet; die neue Hauptaussage muss sie füllen, sonst bleibt ein reiner Methodenbeschreibungs-Abstract ohne These.

### T3 — Introduction, Claim-Absatz (Zeile 23, 101 Wörter)

> "A second sense of translation carries the first. LLMs operate as translation mechanisms; they translate natural languages into one another, requirements into code, and research data into research artefacts. Section 2.4 develops this characterisation and connects it to the translation problem above. Both translations meet in the same artefact, the documents."

**Rolle.** Kündigt die Doppelung als Bogen an und liefert die Dreierreihe, auf der A0 die Äquivokation festgestellt hat. Zugleich die einzige Stelle in Sektion 1, die eine Aussage darüber macht, was Sprachmodelle sind.

**Bricht.** Vier Sätze entfallen. Der Absatz verliert seine zweite Hälfte und behält nur den Methoden-Claim ("individual researchers and small teams can translate their own structured research data into functional research artefacts"). Ohne Ersatz steht dieser Claim ohne Begründung da, warum er jetzt gilt.

### T4 — Sektion 2.4, Kernabsatz (Zeile 100, 210 Wörter)

> "That second load is what gives the word translation its mechanistic sense, and the doubling is the paper's theoretical core. LLMs operate as translation mechanisms. They translate natural languages into one another, requirements into code, and, in the arrangement described here, research data and research context into research artefacts. […] The two senses of translation meet exactly here. The interdisciplinary translation problem of Edmond, Siemens, and Kemman is answered by making the machine translation's inputs, the documents, serve simultaneously as the medium of the human translation."

**Rolle.** Der theoretische Kern selbst, ausdrücklich als solcher benannt. Enthält zusätzlich die Übersetzungskette (Scholar-Centred Design, Distillation, Agent, Code) und den Satz, den das Paper wirklich braucht, dass jede Stufe eine versionierte, prüfbare Spur hinterlässt.

**Bricht.** Der Absatz ist nicht als Ganzes verloren. Verloren sind die Kern-Deklaration, die Dreierreihe und der Satz "The two senses of translation meet exactly here" (zusammen rund 90 Wörter). Erhaltenswert und im Entwurf erhalten sind die Kette und der Spur-Satz, unter dem Vokabular der Repräsentation statt der Übersetzung.

### S1 — Introduction, Übersetzungsproblem-Absatz (Zeile 21)

> "Behind the capacity problem lies a translation problem between domain scholars and programmers that the field has documented for two decades. Edmond (2005) … Siemens (2009) … Kemman (2021) … Each of these answers installs a human translator, and the field's own accounts describe the translators as scarce […] I infer that none of these answers reaches the individual researcher or the small project as a matter of course."

**Rolle.** Etabliert den ersten Sinn von Übersetzung und die Scarcity-Inferenz.

**Bricht nichts.** Dieser Absatz gewinnt unter der neuen Rahmung an Gewicht. Er beschreibt genau den alten Engpass, jede der vier Antworten installiert einen Menschen, der implementieren kann, und jede ist knapp. Das ist die "Früher"-Hälfte der neuen Hauptaussage, bereits belegt und im Grounded Vault verankert (vier Claim-Dokumente). Unverändert übernehmen.

### S2 — Sektion 2, Eröffnungsrahmen (Zeile 66, 95 Wörter)

> "Everything this section assembles serves one argument, the doubling of the word translation that Section 2.4 develops. […] Each subsection around 2.4 establishes one of its premises."

**Rolle.** Macht die gesamte Architektur von Sektion 2 der Figur untergeordnet. Am 2026-07-23 in der Hierarchisierungs-Runde bewusst gesetzt.

**Bricht.** Vollständig. Sektion 2 verliert ihre erklärte Achse und braucht eine neue. Das ist der strukturell teuerste Einzelbruch des Wechsels. Entwurf in Abschnitt 3.5.

### S3 — Sektion 2.4, Boundary-Object-Absatz (Zeile 98, 211 Wörter)

> "Promptotyping Documents intervene in this problem as boundary objects in the sense of Star and Griesemer (1989) […] What Kemman describes as negotiation in conversation between two people becomes a versioned, inspectable artefact; the trading zone acquires a written constitution. […] In the generative setting the documents carry a second load. They are also the source from which the implementation is derived."

**Rolle.** Die soziologische Begründung der Doppel-Leserschaft. Der Schlusssatz ist die Naht, über die der Absatz an den Kernabsatz übergibt ("second load", 2026-07-23 sichtbar gemacht).

**Bricht.** Nur die Naht. Das Boundary-Object-Argument steht für sich und wird unter der neuen Rahmung zur ersten von zwei Begründungen der Dokumentform. Der Übergabesatz "second load" wird umgehängt.

### S4 — Sektion 3.4, Absatz 1 (Zeile 178, 245 Wörter)

> "The chain of representations here and the chain of translations of Section 2.4 are the same chain under two vocabularies, the modelling tradition naming as representation what Section 2.4 named as translation."

**Rolle.** Die modelltheoretische Begründung derselben Doppel-Leserschaft, plus Stachowiaks drei Eigenschaften. A0 hat festgestellt, dass diese Stelle die Spannung eher verschiebt als löst, weil sie zugibt, dass "translation" hier eigentlich "representation" heißt.

**Bricht.** Der Brückensatz entfällt (er verbindet zwei Vokabulare, die nach der Zusammenlegung nebeneinander stehen). Stachowiak, Mayr/Thalheim und die Repräsentationskette bleiben vollständig erhalten und rücken in die zusammengelegte Theoriestelle.

### S5 — Sektion 3.4, Absatz 3 (Zeile 182, 92 Wörter)

> "The path from a semi-formal conceptual model to a running system used to pass through formalisation, into data models, schemas, and code, and that formalisation was the human translator's work (Section 2.4). Frontier models operationalise semi-formal conceptual models directly […]"

**Rolle.** Die präziseste Formulierung dessen, was sich geändert hat, und damit bereits die neue Hauptaussage in modelltheoretischem Vokabular. Zugleich die Begründung der Verifikationspflicht (stochastische zweite Abbildung).

**Bricht nichts.** Diese Stelle ist der Kandidat mit dem größten Zugewinn. Unter der neuen Rahmung wird sie zum Mechanismus der Hauptaussage; bisher ist sie eine Fußnote zur Doppelung. Der Klammerverweis "(Section 2.4)" fällt bei Zusammenlegung weg.

### V1 — Introduction, Roadmap (Zeile 33, 128 Wörter)

> "…why the characterisation of LLMs as translation mechanisms answers the field's translation problem. […] Section 7 returns to the two translations and states what they answer."

**Rolle.** Navigation. **Bricht.** Erster und letzter Satz müssen neu; A3 Befund 1 schlägt für denselben Absatz ohnehin eine Straffung vor (Entscheidung zusammenlegen).

### V2 — Sektion 2.6, Genealogie (Zeilen 118, 120, 124)

> "The articulation ran both ways, since the sessions required the historians to make their domain understanding explicit, an early instance of the boundary-object effect of Section 2.4."
> "A requirements document that represents specifications as user stories is the continuation of Scholar-Centred Design by other means; a data document is the continuation of data modelling. In this sense the method generalises a practice that scholarly editing already had, and its lineage runs through the humanities."
> "I am the hybrid scholar-developer on whom the field's existing answers to the translation problem rely."

**Rolle.** Formal nur Verweis. Faktisch der wichtigste Befund der Kartierung. **Der zweite dieser Sätze ist die neue Hauptaussage, bereits im Paper, bereits belegt, an nachgeordneter Stelle.** Der Wechsel importiert also keine neue Behauptung, er befördert eine vorhandene. Das entschärft die Evidenzfrage erheblich, denn 2.6 stützt sich auf die Dissertation, die Deep-Dive-Sessions 2017 bis 2020, die Bookkeeping Ontology und Pollin et al. 2025a.

**Bricht nichts.** 2.6 wird tragend statt stützend und braucht nur einen geänderten Vorwärtsverweis.

### V3 — Sektion 6.5, Handover (Zeile 348)

> "the boundary-object property of the documents holds towards human developers exactly as it holds towards agents."

**Rolle.** Die Transfer-Achse. **Bricht nichts**, solange die Boundary-Object-Stelle in 2.4 bleibt, was der Entwurf vorsieht.

### V4 — Konklusion (Zeile 352, 281 Wörter)

> "The method's claims are two, and they are two faces of one doubling. […] The word translation carries its interdisciplinary sense and its mechanistic sense in the same object, and the method thereby meets a communication problem and a construction problem with one practice."

**Rolle.** Der Schlussakkord der Figur, und die Klammer, die aus zwei Claims einen macht.

**Bricht.** Vollständig, und teurer als es aussieht. Die Doppelung leistet hier eine Kohäsionsarbeit; sie erklärt, warum die zwei Claims des Papers ein Claim sind. Unter der neuen Rahmung sind es wirklich zwei Claims, und ihr Zusammenhang muss argumentiert werden statt durch die Wortgleichheit behauptet. Der Konklusions-Entwurf in 3.6 leistet das über den gemeinsamen Gegenstand (dieselbe Beschreibung trägt beide).

### Steuerdokument (nicht Papertext)

`paper-writing.md` Kernaussage 1 (Zeile 33) und Sektionszwecke (Zeile 44, "Sektion 7 führt die beiden Übersetzungen zusammen") sowie der offene Prüfpunkt zur Attribution der Übersetzungsmechanismus-Charakterisierung (Zeile 132). Der Attributionspunkt **erledigt sich ersatzlos**, weil die Charakterisierung im Entwurf nirgends mehr vorkommt.

### Zusammenfassung, was bricht

| Was | Umfang | Ersatz nötig |
|---|---|---|
| Theoretische These des Papers | Abstract, 1, 2.4, 7 | ja, die neue Hauptaussage |
| Achse von Sektion 2 | Eröffnungsrahmen | ja, neuer Rahmen |
| Kohäsion der zwei Claims in 7 | Konklusion | ja, über den gemeinsamen Gegenstand |
| Begründung des Titels | Titel | Operator-Entscheidung |
| Begründung der Dokumentform | 2.4 Kernabsatz, 3.4 | nein, wird herabgestuft übernommen |
| Boundary Objects, Stachowiak, Gruber, Repräsentationskette | 2.4, 3.4 | nein, alles bleibt |
| Übersetzungsproblem-Literatur | 1, 2.4 | nein, wird tragender |

Kein Literaturverweis wird verwaist. Star/Griesemer, Mayr/Thalheim, Stachowiak, Gruber und Miksa sind jeweils nur in 2.4 oder 3.4 zitiert und bleiben im Entwurf alle zitiert. Die Claim-Schicht des Grounded Vault verankert das Übersetzungs**problem** (vier Claims zu Edmond, Siemens, RSE, Trading Zone), nirgends die Doppelung; sie braucht keine Rücknahme.

---

## 2. Steelman der bestehenden Rahmung

### Die stärkste Verteidigung

Die Doppelung leistet fünf Dinge, die keine andere Figur des Papers gleichzeitig leistet.

**Erstens, sie verklammert zwei Literaturen an einem Gegenstand.** Der DH-Kooperationsdiskurs (Edmond, Siemens, Kemman, RSE, Star/Griesemer) und die generative Gegenwart treffen sich bei einem Objekt, das nachweisbar zwei Lasten trägt. Eine bloße Analogie wäre schwächer. Für ein DH-Venue ist das ein theoretischer Zug, und das Paper positioniert sich damit über der Werkzeugliteratur.

**Zweitens, sie begründet die distinktivste Behauptung des Papers.** Warum ein versioniertes Dokument und kein Gespräch mit dem Modell? Weil dasselbe Objekt von zwei Seiten gelesen werden muss und deshalb Objekt sein muss, stabil, adressierbar, prüfbar. Kein anderes Argument des Papers leistet das so direkt.

**Drittens, sie ist konzeptuell sicher.** Die Doppelung behauptet nichts über die Welt außerhalb des Textes. Sie ist eine Beobachtung über einen Begriff und über die Architektur der Methode, und sie ist deshalb gegen den empirisch schwächsten Punkt des Papers, die Einzelpraktiker-Evidenz, immun.

**Viertens, der Äquivokationsvorwurf ist reparabel.** A0s Vorschlag (drei Sätze, die den Begriff als bewusst graduiert ausweisen und die Einheit im strukturerhaltenden Abbilden verorten) nimmt dem Vorwurf den Angriffspunkt. Der Begriff hat außerdem in drei Feldern technische Verwendung, in der maschinellen Übersetzung, in den Translation Studies und, bezeichnenderweise, in Grubers eigenem Titel ("A Translation Approach to Portable Ontology Specifications", 1993).

**Fünftens, sie erzeugt Kohäsion.** In der Konklusion macht sie aus zwei Claims eine These. Das ist Argumentarchitektur.

### Was das Paper mit dem Wechsel verliert

1. Den einzigen genuin theoretischen Zug. Sektion 2 heißt "The Epistemic Frame" und hatte mit der Doppelung einen Höhepunkt; ohne sie ist Sektion 2 vorbereitend.
2. Die zweistufige Verteidigung. Bisher stehen soziologische (2.4) und modelltheoretische (3.4) Begründung weit auseinander; ein Gutachter, der die eine angreift, trifft die andere nicht. Nach der Zusammenlegung trifft ein Angriff auf die Sektion beide.
3. Die Begründung des Titels.
4. Eine merkfähige Formel ("Translation runs through the method twice"), die im Abstract Aufmerksamkeit bindet.
5. Die Kohäsion der Konklusion, die neu erarbeitet werden muss.

### Bewertung

**Die Verteidigung trägt gegen den Äquivokationsvorwurf und trägt nicht gegen den Lastvorwurf.** Das ist das Ergebnis, und es fällt mit der Empfehlung des Operators zusammen.

Der Grund ist eine Frage, die die Figur nicht beantwortet. Ein Gutachter fragt, was daraus folgt, dass beides Übersetzung heißt. Die ehrliche Antwort ist, dass die Dokumente ein Objekt sein müssen. Das ist eine Aussage über die **Form des Artefakts**, und die Methode, ihre Voraussetzungen und ihr Beitrag bleiben davon unberührt. Eine Aussage über die Artefaktform kann die Hauptaussage eines Methodenpapers nicht tragen, sie kann sie nur begründen. Genau das ist die Rolle, in die der Operator die Figur herabstufen will, und in dieser Rolle ist die Verteidigung vollständig gültig. Ich weiche von der Empfehlung nicht ab.

**Zwei Punkte, die der Operator nicht genannt hat und die den Entwurf mitsteuern.**

**A. Der Rivale des Engpasses.** Sektion 6.2 sagt: "Verification is precisely the scholarly labour that the division of responsibility assigns to the human, and its cost is the honest price of the possibility claim." Wenn die Hauptaussage sagt, der Engpass sei vom Programmieren zum Beschreiben gewandert, antwortet das eigene Paper in Sektion 6, dass zugleich ein zweiter Engpass beim Verifizieren entstanden ist. Eine Hauptaussage, die das verschweigt, wird an der eigenen Diskussion widerlegt. Der Entwurf führt deshalb durchgehend **Beschreiben und Verifizieren** als das Paar, in das sich die frühere Implementierungsarbeit verteilt hat. Das stärkt die zweite Hälfte der These, denn Verifikation ist in den Geisteswissenschaften noch strenger formalisiert als Beschreibung (Editionsapparat, dokumentierte Entscheidung gegen den Beleg), und das Paper hat dafür mit dem Notker-Fall einen eigenen Beleg (5.3, die R-Disambiguierung als ausdrücklich dem Fachwissenschaftler vorbehaltene Entscheidung).

**B. Die Reichweite der Engpass-Behauptung.** Die Operator-Formulierung "Früher brauchte man jemanden, der programmieren kann, jetzt braucht man jemanden, der genau beschreiben kann" ist als **Diagnose der Welt** von der Evidenz des Papers nicht gedeckt; das Paper hat einen Einzelpraktiker-Record ohne Kontrollbedingung, und 5.5 ist auf markierte Ko-Variation zurückgenommen. Als Aussage darüber, **was die Methode verlangt und was ihr Record zeigt**, ist sie vollständig gedeckt. Der Entwurf setzt durchgehend die gedeckte Fassung, formuliert also, was ein Projekt selbst bereithalten muss, und bindet die Behauptung an die Prototyp-Grenze aus 4.3. Das ist die Grenze zwischen einer verteidigbaren und einer angreifbaren Version derselben These.

**Was der Wechsel zusätzlich gewinnt**, über die Originalität hinaus:

- Das Paper trifft keine Aussage mehr darüber, was Sprachmodelle sind oder können. Die Charakterisierung "LLMs operate as translation mechanisms" verschwindet aus Abstract, 1 und 2.4. Das erfüllt die Operator-Vorgabe streng und erledigt den offenen Attributionspunkt.
- Die Sektionen mit der besten Belegdichte, 2.3 (Borgman, Schöch, Owens, Flanders/Jannidis, Posner) und 2.6 (Dissertation, Deep Dives, Bookkeeping Ontology), werden tragend statt stützend.
- Die SDD-Abgrenzung in 2.5 wird schärfer. Dass die beschreibende Kompetenz in diesem Feld bereits formalisiert vorliegt, ist genau der Unterschied, den ein generisches Spec-Driven-Development-Framework nicht behaupten kann.
- Das Paper sagt einem DH-Leser etwas Handlungsleitendes, nämlich dass das Datenmodell und die Editionsrichtlinie, die das Projekt ohnehin schreibt, bereits die Spezifikation sind.

---

## 3. Entwürfe

Jede Passage als Vorher und Nachher im vollen Wortlaut. Wortzahlen in Klammern.

### 3.1 Abstract (Zeile 9)

**Vorher (285 Wörter):**

> Digital research data becomes usable only through software, and generic tools stop where a question targets what a project has itself modelled. An instrument that matches the model has so far required development capacity that individual researchers and small projects rarely command. This paper introduces Promptotyping, an iterative, document-driven method of context engineering for agentic coding tools, through which researchers can translate their structured research data into functional research artefacts. The working material of the method is a set of versioned Markdown documents that hold requirements, data descriptions, and design decisions; an LLM-based agent derives the artefact from them. These Promptotyping Documents are the primary artefact, and the prototype they yield is regenerable from them at any point, which makes each iteration cheap to discard. Translation runs through the method twice. The field has documented the translation problem between domain scholars and programmers for two decades, and LLMs in turn operate as translation mechanisms; both meet in the documents, which scholars can read and verify and agents can execute. Human expertise concentrates where scholarly responsibility lies, in modelling, specifying, and verifying, and the method presupposes that expertise and does not confer it. The resulting artefacts are self-contained static web tools, classified by the epistemic function they serve (Verification, Exploration, Edition, Capture, Audit) and bounded by the handover point at which Research Software Engineering begins. Roughly two years of documented projects, each traceable in its public repository, provide the evidence, and teaching cases probe whether the method carries to scholars without a programming background. The contribution is methodological and conceptual, and the discussion names its limits, among them a single practitioner's evidence base, the missing control condition, and the entanglement of method effects with model capability.

**Nachher (354 Wörter):**

> Digital research data becomes usable only through software, and generic tools stop where a question targets what a project has itself modelled. An instrument that matches the model has so far required development capacity that individual researchers and small projects rarely command. This paper introduces Promptotyping, an iterative, document-driven method of context engineering for agentic coding tools, through which researchers can translate their structured research data into functional research artefacts. Below the boundary at which a project enters software development, the method changes which competence a project must hold itself. What it supplies is a description of its data and of the instrument, explicit enough for the implementation to be derived from it, and a check of what comes back. Description of that kind is a competence the humanities already hold in formalised shape. A data model fixes what the sources are taken to contain, editorial guidelines fix how each phenomenon of a text is to be treated, and both are explicit specifications of a conceptualisation written before any generative tooling enters. The description is held as a set of versioned Markdown documents covering requirements, data, and design decisions, because one object serves two readers, the scholar who reads and verifies it and the LLM-based agent that derives the artefact from it. These Promptotyping Documents are the primary artefact, and the prototype they yield is regenerable from them at any point, which makes each iteration cheap to discard. Human expertise concentrates where scholarly responsibility lies, in modelling, specifying, and verifying, and the method presupposes that expertise and does not confer it. The resulting artefacts are self-contained static web tools, classified by the epistemic function they serve (Verification, Exploration, Edition, Capture, Audit) and bounded by the handover point at which Research Software Engineering begins. Roughly two years of documented projects, each traceable in its public repository, provide the evidence, and teaching cases probe whether the method carries to scholars without a programming background. The contribution is methodological and conceptual, and the discussion names its limits, among them a single practitioner's evidence base, the missing control condition, and the entanglement of method effects with model capability.

**Anmerkungen.** Plus 69 Wörter. Die zwei Sätze der Doppelung (45) entfallen, die neue These kostet rund 115. Die Beschreibung des Arbeitsmaterials und die Begründung der Dokumentform sind zu einem Satz zusammengezogen, weil sie unter der neuen Rahmung dieselbe Aussage machen. Der Abstract trifft keine Aussage mehr darüber, was Sprachmodelle sind. "written before any generative tooling enters" sichert die zweite Claim-Hälfte gegen den Verdacht, sie sei nachträglich auf die Methode zugeschnitten. Für die ZfdG-Einreichfassung (750 Zeichen je Sprache) wird ohnehin separat komprimiert; dieser Abstract ist der papierinterne.

---

### 3.2 Introduction, Claim-Absatz (Zeile 23)

**Vorher (101 Wörter):**

> This paper introduces Promptotyping, an iterative, document-driven context engineering method situated within agentic engineering. With the method, individual researchers and small teams can translate their own structured research data into functional research artefacts, prototypes for exploring and analysing the data, research acts that previously required structures with dedicated development capacity. A second sense of translation carries the first. LLMs operate as translation mechanisms; they translate natural languages into one another, requirements into code, and research data into research artefacts. Section 2.4 develops this characterisation and connects it to the translation problem above. Both translations meet in the same artefact, the documents.

**Nachher (146 Wörter):**

> This paper introduces Promptotyping, an iterative, document-driven context engineering method situated within agentic engineering. With the method, individual researchers and small teams can translate their own structured research data into functional research artefacts, prototypes for exploring and analysing the data, research acts that previously required structures with dedicated development capacity. What the researcher supplies is a description of the data and of the instrument to be built from it, explicit enough for the implementation to be derived, together with the checking of what the derivation returns. Below the boundary at which a project enters software development (Section 4.3), this is where the work binds. Describing a domain that precisely, and checking a rendering of it against its sources, are what the humanities have been formalising the longest, as data models, as editorial guidelines, and as the requirements work of scholar-centred design. Section 2.4 develops what follows.

**Anmerkungen.** Der erste und zweite Satz bleiben wörtlich. Der Rest ist ersetzt. Die Dreierreihe am Ende ist eine sachliche Aufzählung unter einem regierenden Verb (Prüfkatalog Regel 6). "this is where the work binds" vermeidet die verbotene Form "nicht mehr X, sondern Y".

---

### 3.3 Introduction, Professionsklausel (Zeile 31, Verstärkung gegen die Deskilling-Lesart)

**Vorher (Schlusspassage des Absatzes):**

> The method, in turn, presupposes the scholar's profession. Modelling, specifying, and verifying remain the researcher's work throughout, and the method does not confer the experience and judgement of the Research Software Engineering profession on its users. What it changes is the reach of a specifying and verifying scholar within the prototype boundary.

**Nachher (plus 48 Wörter):**

> The method, in turn, presupposes the scholar's profession. Modelling, specifying, and verifying remain the researcher's work throughout, and the method does not confer the experience and judgement of the Research Software Engineering profession on its users. What it changes is the reach of a specifying and verifying scholar within the prototype boundary. Relocating the binding work leaves that profession's competence in place. Above the prototype boundary it continues to decide what can be built at all, and below it, the technical guidelines of Section 4.1 and the verification duties of Section 6.2 are that same competence carried into the prototype.

**Anmerkungen.** Dies ist die erste der drei Verstärkungen gegen Risiko 2. A0 hält fest, dass die Deskilling-Lesart an vier Stellen blockiert ist (1, 2.6, 3.5, 6.4) und nirgends überdehnt. Ich habe alle vier gegen die neue Rahmung geprüft. **Drei halten unverändert, eine braucht Nachschärfung.**

- **2.6** (Zeile 124, "Promptotyping externalises what hybrid practitioners do into documents and agentic tooling, so that non-hybrid scholars can gain a working substitute for a bounded part of the competence they lack") hält, weil "a bounded part" bereits genau die richtige Einschränkung setzt. Unverändert.
- **3.5** (Zeile 192, "I do not claim that modelling, specifying, and verifying are things generative systems cannot do; I claim that they are the work that must remain with scholars because it carries scholarly responsibility") hält und wird unter der neuen Rahmung sogar wichtiger, weil sie die normative statt der Fähigkeitsbegründung gibt. Unverändert.
- **6.4** (Zeile 342, fünfte Grenze) hält inhaltlich, benennt aber die Fehllesart nicht, die die neue Rahmung erzeugt. Nachschärfung in 3.7.
- **1** (Zeile 31) ist die Stelle, an der die neue Behauptung aufgestellt wird, und braucht die Grenzziehung unmittelbar daneben. Entwurf oben.

---

### 3.4 Introduction, Roadmap (Zeile 33)

**Vorher (128 Wörter):**

> Section 2 establishes the ground on which the claim rests, why exploration is a research act, how LLMs relate to research data, and why the characterisation of LLMs as translation mechanisms answers the field's translation problem. The method itself, its phases, its documents, and a worked example follow in Section 3. What the method yields, and where its boundary to Research Software Engineering runs, is the subject of Section 4. The claim is then put to the test, in Section 5 against a selection of documented projects and experiments from roughly the past two years, each traceable in its public repository, and the teaching cases, in Section 6 against its own limits, from verification to reproducibility. Section 7 returns to the two translations and states what they answer.

**Nachher (97 Wörter):**

> The ground of the claim comes first, from exploration as a research act to the descriptive practices the humanities have already formalised and the form the documents take from them (Section 2). The method, its documents, and a worked example follow (Section 3), then the artefact type and where its boundary to Research Software Engineering runs (Section 4), the evidence of the documented projects and the teaching cases from roughly the past two years (Section 5), and the limits from verification to reproducibility (Section 6). Section 7 states what the method answers and what it leaves open.

**Anmerkungen.** Überschneidet sich mit A3 Befund 1 (dort minus 16 Wörter bei gleicher Substanz). Diese Fassung geht weiter (minus 31), weil die Doppelungs-Klammer entfällt. **Eine Entscheidung genügt für beide Vorschläge.**

---

### 3.5 Eröffnungsrahmen Sektion 2 (Zeile 66)

**Vorher (95 Wörter):**

> Everything this section assembles serves one argument, the doubling of the word translation that Section 2.4 develops. The translation problem between domain scholars and programmers, documented in the field for two decades, and the language model that operates as a translation mechanism meet in the Promptotyping Documents. Each subsection around 2.4 establishes one of its premises. Exploration is a research act that lacks its instrument, tools carry epistemic weight and stay disposable at once, well-modelled data is the ground the generation stands on, and the method's genealogy shows the doubling growing out of humanities practice.

**Nachher (109 Wörter):**

> Section 2.4 states what changes when the implementation of a research instrument is derived from a description, and why that description takes the form of a versioned document. Exploration is a research act whose instrument the field can rarely build (2.1); tools carry epistemic weight while staying derived and disposable, which locates the durable object in the description behind them (2.2); and well-modelled data is the ground any generation stands on, with modelling as the discipline in which the humanities have formalised description (2.3). Section 2.5 places the method in the current discourse, and Section 2.6 traces the practice to scholarly editing and requirements engineering before the tooling existed.

**Anmerkungen.** Überschneidet sich mit A3 Befund 2, der denselben Absatz als ankündigend kritisiert und minus 35 bis minus 50 vorschlägt. Meine Fassung ist 14 Wörter länger als die alte, weil sie die neue Achse führen muss; gegenüber A3s Vorschlag also teurer, dafür trägt sie die Rahmung. Die Semikolonreihe ist eine echte parallele Reihe (Prüfkatalog Regel 5). **Eine Entscheidung genügt für beide Vorschläge.**

---

### 3.6 Zusammengelegtes Theoriekapitel (neue Sektion 2.4)

Vorgeschlagen wird, **2.4 zur zusammengelegten Stelle zu machen und 3.4 aufzulösen.** Begründung und Alternative in Abschnitt 4, Entscheidungspunkt D2.

**Neue Überschrift:** `### 2.4 The Descriptive Bottleneck, and Documents as Conceptual Models`

**Vorher: Sektion 2.4 vollständig (498 Wörter, Zeilen 96, 98, 100) plus Sektion 3.4 Absätze 1 bis 3 (410 Wörter, Zeilen 178, 180, 182). Zusammen 908 Wörter.** Wortlaut wie in `paper.md`; die vier tragenden Passagen sind in Abschnitt 1 unter T4, S3, S4 und S5 zitiert.

**Nachher (1.061 Wörter):**

> Section 1 introduced the translation problem between domain scholars and programmers and the field's answers to it, the intermediary, the team, the trading zone, and the Research Software Engineering profession. Every one of these answers installs a person who can implement, and the institutionalisation of Research Software Engineering sharpens the problem as much as it answers it, since RSE capacity concentrates at well-resourced institutions and I take the long tail of small projects and individual researchers to remain underserved.
>
> Under document-driven agentic tooling the competence a project has to hold itself is a different one. The implementation is derived from the documents, and what the project supplies is a description of the data, of the questions it is to answer, and of the instrument, explicit enough for that derivation to proceed, followed by a check of what the derivation returns. Below the boundary at which a project enters software development (Section 4.3), this is where the work binds. Section 5.5 reads the record in that direction, as a co-variation inferred from cases I built.
>
> The humanities have been formalising description of this kind for as long as they have been building digital resources. A data model fixes what the sources are taken to contain and which distinctions a project will maintain. Editorial guidelines fix how each phenomenon of a text is to be treated, and they bind everyone who works on the edition, which is why they are written down and versioned before the work begins. Knowledge engineering has a name for objects of this kind, an explicit specification of a conceptualisation (Gruber 1993). Conceptual models specify requirements and guide system creation, and a document that describes a project explicitly enough is, by that fact, its specification. The formalised descriptive practices of this field are therefore already specifications in the sense the method needs, standing at the semi-formal end of a spectrum whose formal end, ontologies in OWL[^owl] and RDF, my earlier work occupied (Section 2.6). The same holds on the checking side, where the record shows the pattern directly. In the documented edition project the editorial guidelines carry the philological competence, and the one disambiguation they cannot settle is marked in the repository as reserved for the commissioning scholar (Section 5.3).
>
> Two arguments converge on holding that description as a set of versioned documents. The first is social. Promptotyping Documents work as boundary objects in the sense of Star and Griesemer (1989), objects plastic enough to serve the needs of different communities and robust enough to maintain identity across them. A data document is readable by the scholar, who can verify that the description of the sources is right, and actionable for an agentic tool, which derives parsing and interface logic from it. A requirements document phrased as user stories is at once a scholarly statement about research practice and a specification. The method thereby relocates the site of interdisciplinary translation. What Kemman describes as negotiation in conversation between two people becomes a versioned, inspectable artefact; the trading zone acquires a written constitution. A recent research-database project in the same field applies Kemman's trading zone directly to data harmonisation, treating the negotiation of a shared vocabulary as a methodological core (Mähr, Federer, and Kaspar 2026). This holds independently of any generative tooling, and a Promptotyping document set would improve the handover to a human Research Software Engineer too, a point Section 6.5 returns to.
>
> The second argument is epistemic. In the vocabulary of the modelling tradition a Promptotyping Document is a conceptual model of the project, a representation of domain ideas that rests on natural language, transports its semantics through the shared vocabulary of a community of practice, and is semi-formal in the precise sense that it balances practical communication against residual ambiguity (Mayr and Thalheim 2021; Pollin 2025b). The general model theory of Stachowiak (1973), which my dissertation already used to frame modelling, supplies three properties. A model represents an original; it abbreviates, carrying only the attributes relevant to its purpose; and it is pragmatic, made for someone, for a time span, and for a use. Representation is what makes a document set mappable onto a further artefact at all, and the generated artefact is in this strict sense a model of the model, the second link in a chain that begins in the research context. The method organises that chain and leaves it inspectable. Scholar-Centred Design renders research practice as user stories; Distillation renders the data as a token-efficient description; the agent renders the documents as code; the code renders the data in a visible, addressable form. Every step leaves a versioned trace. Abbreviation gives Distillation its theoretical licence, because omitting what is irrelevant to the purpose is constitutive of modelling and precedes any context-window limit. The pragmatic property is where the two arguments meet, since a model made for two addressees is disciplined by both, and Section 3.3 states what that discipline does to the writing.
>
> One word covers both relations. The field's translation problem between scholars and programmers, and the derivation of an artefact from a description, are both called translation, and the coincidence is worth stating because the same object carries them. The senses are graded. Rendering one natural language as another is translation in the literal sense, while deriving an implementation from a specification is translation in the structural sense the modelling tradition calls representation, a source rendered into a target that preserves what the purpose requires. The argument rests on the object that stands at each junction and carries the mapping in a form both sides can read.
>
> What has changed is the cost of the step that follows the description. The path from a semi-formal conceptual model to a running system used to pass through formalisation, into data models, schemas, and code, and that formalisation was the human translator's work. It now proceeds from the semi-formal model directly, and because it proceeds stochastically, its fidelity is not guaranteed by construction. The ambiguity that semi-formality leaves open, and the variance that stochastic execution adds, are what the Critical Expert's verification addresses, and Section 6.2 builds on this ground. The relocation of the binding work is bounded twice over. It holds below the prototype boundary of Section 4.3, and it carries a duty with it, since a description that governs an implementation has to be checked against the sources and against the running artefact.

**Absatzbilanz.** Sieben Absätze, 1.061 Wörter gegen 908 vorher.

| # | Inhalt | Wörter | Herkunft |
|---|---|---|---|
| 1 | Übersetzungsproblem, RSE-Scarcity | 79 | 2.4 Abs. 1 (77) |
| 2 | Verschiebung der bindenden Arbeit | 95 | **neu** |
| 3 | Formalisierte Beschreibung in den Geisteswissenschaften, Gruber-Formel | 198 | 125 neu, 73 aus 3.4 Abs. 2 |
| 4 | Boundary Objects, Trading Zone | 193 | 2.4 Abs. 2 (211) |
| 5 | Konzeptmodell, Stachowiak, Repräsentationskette | 255 | 3.4 Abs. 1 (245) plus Kette aus 2.4 Abs. 3 (65) |
| 6 | herabgestufte Doppelung, graduiert | 106 | ersetzt rund 90 Wörter Kernpassage |
| 7 | Kosten der zweiten Abbildung, doppelte Bindung | 135 | 3.4 Abs. 3 (92) plus 43 neu |

**Was aus dem alten Text wörtlich erhalten bleibt.** Der RSE-Scarcity-Satz, der gesamte Boundary-Object-Absatz bis auf die Naht, die Mayr/Thalheim-Definition, Stachowiaks drei Eigenschaften, die Abbreviation-Lizenz für Distillation, die Gruber-Formel, die Repräsentationskette (Verb `render` statt `translate`) und der Formalisierungs-Kostenabsatz.

**Was entfällt.** "the doubling is the paper's theoretical core", "LLMs operate as translation mechanisms" mit der Dreierreihe, "The two senses of translation meet exactly here", der Brückensatz "same chain under two vocabularies" und die ausbuchstabierte Doppel-Adressaten-Elaboration, die 3.3 ohnehin trägt.

**Was neu ist.** Absatz 2 (Engpass-Verschiebung), der neue Teil von Absatz 3 (Beschreibungskompetenz) und die zwei Bindungssätze am Ende von Absatz 7. Absatz 6 ist die herabgestufte Doppelung in A0s graduierter Form.

**Nicht realisiert.** A3 Befund 5 schlägt vor, die Wiederholung der vier RSE-Antworten in Absatz 1 zu streichen (minus 25). Der Entwurf behält sie, weil sie unter der neuen Rahmung als "jede dieser Antworten installiert jemanden, der implementieren kann" den Engpass-Satz vorbereitet. Der Schnitt bleibt möglich und ist mit dem Entwurf verträglich.

**Verbleibende Teile von 3.4 und ihr Zielort.**

- Substrat-Absatz (Zeile 184, 130 Wörter, Markdown als Format, Tokenökonomie, Formatgrenze) → an das Ende von 3.3, hinter den Absatz über generierte Dokumente. Rein mechanisch, ein Anschlusssatz.
- DMP-Vergleich (Zeile 186, 98 Wörter, Miksa 2019, operative Maschinenlesbarkeit) → in 3.3 direkt hinter den RO-Crate-Absatz (Zeile 174). Beide sind derselbe Zug, eine Positionierung gegen eine benachbarte Dokumentgattung der Forschungsdaten-Welt, und sie stehen bisher grundlos in zwei Sektionen. Rein mechanisch.
- Gruber-Absatz (Zeile 180) → vollständig in das neue 2.4 aufgegangen.

---

### 3.7 Sektion 6.4, fünfte Grenze (Zeile 342, Verstärkung gegen die Deskilling-Lesart)

**Vorher:**

> Fifth, the profession clause bears repeating as a limit. The method does not produce Research Software Engineers, and a practitioner without domain expertise gains little, because the documents such a practitioner can write are exactly as good as the knowledge behind them.

**Nachher (plus 67 Wörter):**

> Fifth, the profession clause bears repeating as a limit. The method does not produce Research Software Engineers, and a practitioner without domain expertise gains little, because the documents such a practitioner can write are exactly as good as the knowledge behind them. The relocation of the binding work invites a reading this paper rejects. Programming competence keeps deciding what is buildable above the prototype boundary, it sets the standards the guidelines of Section 4.1 encode, and within the boundary the specifying scholar remains dependent on it for every judgement about what a generated artefact is doing. What the method redistributes is where a project must hold that competence itself.

**Anmerkungen.** "invites a reading this paper rejects" ist keine Ankündigungsfloskel im Sinn von Regel 4, weil der Satz die Fehllesart benennt und die folgenden Sätze sie sachlich abräumen. Wenn der Operator hier strenger ist, entfällt der Satz und die drei folgenden stehen für sich; die Wirkung bleibt, die Adressierung wird impliziter.

---

### 3.8 Konklusion (Sektion 7, Zeile 352)

**Vorher (281 Wörter):**

> Promptotyping is a methodological answer to a gap the digital humanities have documented for two decades, between scholars who model research data and the interactive instruments through which that data could be explored. The method's claims are two, and they are two faces of one doubling. Versioned documents can carry the translation of research data into research artefacts, concentrating scholarly work where scholarly responsibility lies, in modelling, specifying, and verifying; and the same documents function as boundary objects that stabilise interdisciplinary translation in an inspectable form, towards coding agents and towards human developers alike. What binds the two claims is that one document set does both at once, serving as the medium through which the human translation between scholar and developer now passes and as the source from which the machine derives the artefact, written once and read from both sides. The word translation carries its interdisciplinary sense and its mechanistic sense in the same object, and the method thereby meets a communication problem and a construction problem with one practice. The artefacts are prototypes in the strict sense, disposable in the making, durable in publication, bounded by the handover point at which Research Software Engineering begins. The epistemic centre of the practice is the modelled data; the twenty-year investment of the field in standards, ontologies, and semantic modelling is what the method renders productive, through a different mechanism than the Semantic Web envisioned but towards the end it named. This paper is the method's canonical definition; the evidence layer is published as a versioned companion with claim-level anchors, and the templates are public. The method was distilled from practice, and testing it further, in the humanities and beyond, remains open.

**Nachher (322 Wörter):**

> Promptotyping is a methodological answer to a gap the digital humanities have documented for two decades, between scholars who model research data and the interactive instruments through which that data could be explored. The method's claims are two. Versioned documents can carry the derivation of a research artefact from research data, so that what a project must hold itself, below the boundary at which Research Software Engineering begins, is the description of what is to be built and the verification of what comes back; scholarly work thereby concentrates where scholarly responsibility lies, in modelling, specifying, and verifying. The competence this asks for is one the humanities have already formalised. Data models, editorial guidelines, and the user stories of scholar-centred design each specify a conceptualisation explicitly enough to be worked from, and under the changed cost of implementation they become the documents an instrument is built from. The method continues a practice this field already had, and software engineering reached document-governed agent work by its own route (Section 2.5). The two claims meet in one object. The same document set stabilises the interdisciplinary translation the field's literature describes, towards coding agents and towards human developers alike, and supplies the source from which the artefact is derived, written once and read from both sides. The artefacts are prototypes in the strict sense, disposable in the making, durable in publication, bounded by the handover point at which Research Software Engineering begins. The epistemic centre of the practice is the modelled data; the twenty-year investment of the field in standards, ontologies, and semantic modelling is what the method renders productive, through a different mechanism than the Semantic Web envisioned but towards the end it named. This paper is the method's canonical definition; the evidence layer is published as a versioned companion with claim-level anchors, and the templates are public. The method was distilled from practice, and testing it further, in the humanities and beyond, remains open.

**Anmerkungen.** Der Kohäsionsverlust aus Abschnitt 2 ist hier adressiert. Statt der Wortgleichheit bindet der gemeinsame Gegenstand ("The two claims meet in one object"), und die Bindung wird gezeigt statt behauptet. Die letzten drei Sätze bleiben wörtlich; der Schluss bleibt unaphoristisch.

---

### 3.9 Selbstprüfung der Entwürfe

Gegen die vier Kernverbote, absatzweise gelesen.

- **Gedankenstrich und Doppelpunkt als Konnektor.** Keiner in den Entwürfen. Semikolon nur in echten parallelen Reihen (Repräsentationskette, Prämissenreihe des Sektionsrahmens), zugelassen nach Prüfkatalog Regel 5.
- **Nachklappende Negation.** Sechs Stellen getilgt. Vier beim Schreiben ("not X but Y" in der Engpass-Formulierung, "rather than an import from software engineering", "What the argument rests on is the object, not the word", "an intensification rather than a new obligation") und zwei erst in der Nachprüfung des fertigen Entwurfs ("offered there as an inference from cases I built and not as a controlled finding" in 2.4 Absatz 2, "written down and versioned rather than agreed in conversation" in 2.4 Absatz 3). Die zweite Runde war nötig, die erste Selbstprüfung hatte beide übersehen. Kein "rather than" mehr in den Entwürfen; die im Papertext lizenzierte Ausnahme (Druckers "capta rather than given data", 2.1) ist nicht berührt.
- **Dreierfiguren.** Drei Reihen mit drei Gliedern verbleiben, alle sachlich und über ein regierendes Verb geführt, nämlich die Formalisierungspraktiken (Datenmodell, Editionsrichtlinie, Scholar-Centred Design), Stachowiaks drei Eigenschaften (übernommener Bestand) und die Verantwortungsformel "modelling, specifying, and verifying" (übernommener Bestand). Keine Anapher, kein rhetorischer Parallelismus.
- **Aphoristischer Absatzschluss.** Geprüft für jeden Absatz. Der kritischste Kandidat, der Schlusssatz der herabgestuften Doppelung, ist auf die sachliche Fassung aus A0 zurückgeführt.

Britische Schreibung geprüft (`formalised`, `specialised`, `recognised`), Präsens für fortbestehende Bedingungen, "I/my" durchgehend.

**Eine Dublette gefunden und behoben.** Der Erstentwurf des zusammengelegten Absatzes 5 endete mit "a data description too vague for a model to work against is usually also too vague to count as scholarly documentation", wörtlich derselbe Satz wie das Ende des Doppel-Adressaten-Absatzes in 3.3. Ersetzt durch einen Rückverweis. Das ist zugleich der Beleg dafür, dass die Zusammenlegung neue Dubletten erzeugen kann, wo bisher Distanz die Wiederholung verdeckte; beim Konsistenzpass (Phase D) ist darauf zu achten.

---

## 4. Nebenwirkungen je Sektion

`M` rein mechanisch (Verweis, Umnummerierung, Verschiebung ohne Textänderung), `O` Operator-Entscheidung nötig.

| Ort | Eingriff | Art |
|---|---|---|
| Titel (Z. 1) | `Translating` verliert seine dokumentierte Begründung | **O** (D1) |
| Abstract (Z. 9) | Vollersatz nach 3.1; die Verbatim-Sperre der Freigabe vom 2026-07-23 muss aufgehoben werden | **O** |
| 1, Z. 21 | keiner, der Absatz wird tragender | – |
| 1, Z. 23 | Vollersatz nach 3.2; Verbatim-Sperre aufheben | **O** |
| 1, Z. 25 | keiner; der Satz "The contribution itself is methodological and conceptual" trägt die neue These mit | – |
| 1, Z. 27 | keiner; "documents are the governing specification, the only stable instance of intent" stützt die neue Rahmung stärker als die alte | – |
| 1, Z. 31 | plus 48 Wörter nach 3.3 | **O** |
| 1, Z. 33 | Ersatz nach 3.4, deckt A3 Befund 1 mit ab | **O** |
| 2, Eröffnung (Z. 66) | Ersatz nach 3.5, deckt A3 Befund 2 mit ab | **O** |
| 2.1 | keiner; Verweis auf 3.5 wird zu 3.4, falls D2 auf Auflösung fällt | M |
| 2.2 | keiner nötig. Optional gewinnt der Satz "The tool matters because it makes the data addressable; the scholarship lies in the data and its modelling" durch den Zusatz "and in its description" | **O** (klein) |
| 2.3 | keiner nötig. Empfohlen ein Anschlusssatz, der Modellierung ausdrücklich als die formalisierte Beschreibungspraxis benennt, auf die 2.4 sich stützt; ohne ihn steht die Brücke allein in 2.4 | **O** |
| 2.4 | Vollersatz nach 3.6, neue Überschrift | **O** |
| 2.5 | inhaltlich unberührt, aber der Originalitäts-Hebel sitzt jetzt hier. Die SDD-Abgrenzung sollte den Existenzgrund der zweiten Claim-Hälfte aufnehmen (die beschreibende Kompetenz liegt in diesem Feld formalisiert vor, das ist der Grund für die Datenschicht). Zusammen mit A0 Befund 4 entscheiden | **O**, hohe Priorität |
| 2.6 | Text unverändert. Der Satz "In this sense the method generalises a practice that scholarly editing already had" wird zur Belegstelle der Hauptaussage und braucht einen Rückverweis aus 2.4 | M |
| 3.1 | keiner | – |
| 3.2 | keiner. Falls die Abbreviation-Lizenz in 2.4 wandert (sie tut es im Entwurf), einen Klammerverweis in der Distillation-Beschreibung setzen | M |
| 3.3 | nimmt den Substrat-Absatz und den DMP-Absatz auf; der Doppel-Adressaten-Absatz bekommt einen Rückverweis auf 2.4 statt eigenständiger Begründung | M plus ein Anschlusssatz (**O**, klein) |
| 3.4 | Auflösung oder Verschlankung | **O** (D2) |
| 3.5 | wird zu 3.4, falls D2 auf Auflösung fällt; vier Verweise betroffen (Z. 72, 114, 212, 356) | M |
| 4.1 | keiner | – |
| 4.2 | keiner | – |
| 4.3 | keiner nötig. Empfohlen eine Halbzeile, die die Grenze ausdrücklich auch als Grenze der Engpass-Behauptung ausweist, weil die Hauptaussage jetzt an ihr hängt | **O** |
| 5.1 bis 5.4 | keiner | – |
| 5.5 | keiner. Die Formulierung ist bereits auf markierte Ko-Variation zurückgenommen; der Vorwärtsverweis aus 2.4 erbt diese Härtung wörtlich. Prüfpunkt bei der Umsetzung, kein Eingriff | – |
| 6.1 | keiner | – |
| 6.2 | Verweis "the stochastic second mapping of Section 3.4" wird zu 2.4 | M |
| 6.2 | empfohlen ein Satz, der Verifikation ausdrücklich als die zweite Stelle benennt, an der sich die frühere Implementierungsarbeit sammelt; sonst steht 6.2 als stiller Rivale der Hauptaussage | **O** |
| 6.3 | keiner | – |
| 6.4 | plus 67 Wörter nach 3.7 | **O** |
| 6.5 | keiner; die Handover-Argumentation setzt die Boundary-Object-Stelle voraus und findet sie weiterhin in 2.4 | – |
| 7 | Vollersatz nach 3.8 | **O** |
| References | keiner. Kein Eintrag verwaist, geprüft für Star/Griesemer, Mayr/Thalheim, Stachowiak, Gruber, Miksa | – |
| Fußnoten | `[^owl]` wandert mit dem Gruber-Absatz von 3.4 nach 2.4; Nummerierung `[^1]`–`[^9]` unberührt, weil es ein benanntes Label ist | M |
| `paper-writing.md` | Kernaussage 1 neu, Sektionszwecke für 2 und 7 neu, offener Attributionspunkt (Z. 132) ersatzlos erledigt | M nach Freigabe |
| `revision-audit-a0.md` | Befund 1 und sein Einfügevorschlag werden durch die Herabstufung gegenstandslos; als erledigt vermerken statt umsetzen | M |
| `revision-audit-a3.md` | Befunde 1 und 2 sind in den Entwürfen enthalten, nicht doppelt entscheiden. Befund 5 ist bewusst nicht realisiert und bleibt separat entscheidbar | **O** |
| Grounded Vault | keiner. Die vier Claims zum Übersetzungsproblem und der Star/Griesemer-Distillat behalten ihre Funktion. Nachzuziehen sind nur die neuen tragenden Behauptungen der zweiten Claim-Hälfte, falls sie über 2.6 hinausgehen | **O** vor Einreichfähigkeit |
| `_content/paper/` | erbt beim Neuschnitt nach Freigabe | – |

---

## 5. Wortzahl-Bilanz

Gemessen an `paper.md`, Stand 2026-07-24, Absatz für Absatz, Zählung maschinell über die Entwürfe dieses Dokuments.

| Passage | Vorher | Nachher | Delta |
|---|---|---|---|
| Abstract | 285 | 354 | +69 |
| 1, Claim-Absatz | 101 | 146 | +45 |
| 1, Professionsklausel | 52 | 100 | +48 |
| 1, Roadmap | 128 | 97 | −31 |
| 2, Eröffnungsrahmen | 95 | 109 | +14 |
| 2.4 plus 3.4 (Absätze 1–3) | 908 | 1.061 | +153 |
| 6.4, fünfte Grenze | 42 | 109 | +67 |
| 7, Konklusion | 281 | 322 | +41 |
| **Summe** | 1.892 | 2.298 | **+406** |

Unverändert verschoben und damit nicht eingespart sind der Substrat-Absatz (130) und der DMP-Absatz (98), die von 3.4 nach 3.3 wandern.

**Der Wechsel spart nicht, er kostet.** Das ist das Ergebnis der Bilanz und es widerspricht der Erwartung im Auftrag. Die Zahl aufgeschlüsselt nach den drei Ursachen:

| Posten | Wörter |
|---|---|
| Ersparnis durch Zusammenlegung und Wegfall des Verteidigungsapparats | **rund −110** |
| Kosten der neuen Hauptaussage (Engpass-Absatz plus Beschreibungskompetenz-Absatz) | **+220** |
| Kosten der Absicherungen (Professionsklausel in 1, fünfte Grenze in 6.4, doppelte Bindung in 2.4 Abs. 7) | **+158** |
| Kosten der neuen These im Abstract und in der Konklusion | **+110** |
| Straffung der Roadmap | **−31** |

**Die vom Auftrag verlangte Zahl.** Der Wegfall des Verteidigungsapparats und die Zusammenlegung sparen zusammen **rund 110 Wörter**. Sie verteilen sich auf vier Posten, die Kern-Deklaration mit der Dreierreihe und dem Meet-Satz (rund 90), den Brückensatz zwischen den zwei Vokabularen samt Vorbereitung (rund 30), die ausbuchstabierte Doppel-Adressaten-Begründung, die 3.3 ohnehin trägt (rund 20), und die Naht "second load" (rund 15); dagegen steht die herabgestufte Doppelung mit rund 45 Wörtern Mehraufwand gegenüber dem, was sie ersetzt. Mehr ist im Theorieblock nicht zu holen, ohne Substanz zu schneiden. Die beiden Theoriestellen sind vor der Zusammenlegung schlanker, als ihre Verteilung über 80 Zeilen vermuten lässt; ihre echte Redundanz ist klein.

**Wo die Dichte trotzdem gewinnt.** Der Gewinn liegt darin, dass die theoretische Begründung der Dokumentform einmal statt zweimal geführt wird und der Leser sie nicht über zwei Sektionen hinweg zusammensetzen muss. Das ist ein Leserführungsgewinn, und er sollte nicht als Kürzung ausgegeben werden.

**Kompensationskandidaten**, falls das Paper netto nicht wachsen soll. Sie sind hier nur benannt, nicht ausgearbeitet.

- A3 Befund 5, Streichung der wiederholten RSE-Antworten-Aufzählung im neuen 2.4 Absatz 1 (−25), mit dem Entwurf verträglich.
- A3 Befund 7, dokumentierende Infrastruktur-Beschreibung in 5.1 (−60).
- A3 Befund 4, rekapitulierender Schlusssatz in 2.5 (−25).
- A3 Befund 9, Sektionsanfang 3.3 (−7).
- **Neu durch die Zusammenlegung möglich:** der Doppel-Adressaten-Absatz in 3.3 kann auf einen Rückverweis auf 2.4 schrumpfen, weil die Begründung dort jetzt vollständig steht (geschätzt −40). Dieser Schnitt existiert erst nach der Zusammenlegung und ist der einzige echte Folgegewinn.
- Die Übersetzungskette in 2.4 Absatz 5 ist entbehrlich, wenn 3.2 die Phasen ohnehin einzeln beschreibt (−65). Kostet ein Bild, das der Text bisher bewusst führt; Operator-Entscheidung.

Voll ausgeschöpft ergäbe das rund −220, womit der Wechsel bei etwa plus 190 Wörtern netto landet, rund ein Prozent des Fließtexts. Ohne Kompensation wächst das Paper von rund 15.300 auf rund 15.700 Wörter.

**Zusammen mit A3.** A3 weist minus 170 bis minus 220 aus. Davon sind die Befunde 1, 2 und 5 (zusammen rund minus 76) in den obigen Entwürfen bereits enthalten. Unabhängig bleiben also rund minus 95 bis minus 145. Bei Annahme beider Pakete landet das Paper bei rund minus 200 bis minus 250 Wörtern gegenüber dem heutigen Stand.

---

## 6. Entscheidungsbedürftige Punkte

**D1, Titel.** `Translating` verliert seine dokumentierte Begründung, bleibt aber im alltagssprachlichen Sinn korrekt. Drei Wege. (a) Titel unverändert lassen und die Begründung im Steuerdokument nachziehen. (b) Auf die neue These umstellen, etwa "Promptotyping. Describing Research Data into Research Artefacts" (englisch unsauber) oder "Promptotyping. From Research Data to Research Artefacts with Context Engineering and Agentic Coding", was zugleich A0s Restlisten-Punkt zur Ellipse in "Context and Agentic Engineering" auflöst. (c) Den Untertitel die zweite Claim-Hälfte tragen lassen. Ich empfehle (a) oder (b) und lege mich nicht fest, weil der Titel Positionierung gegenüber dem Venue ist.

**D2, Zielort der Zusammenlegung.** Empfohlen ist die Zusammenlegung **nach 2.4** mit Auflösung von 3.4, wie in 3.6 entworfen. Der Grund ist die Aufgabe von Sektion 2. Sie heißt "The Epistemic Frame" und muss die Legitimation der Methode tragen, bevor die Methode definiert wird; die neue Hauptaussage ist eine Aussage des epistemischen Rahmens. Es kostet, dass der Leser Stachowiak und Gruber trifft, bevor er weiß, wie ein Promptotyping-Dokument konkret aussieht, was Abstract und Introduction abfangen müssen (sie tun es).
Als dokumentierte Alternative bleibt 2.4 schlank als Engpass- und Literaturstelle, die gesamte Zwei-Leser-Begründung samt Boundary Objects wandert in ein zusammengelegtes 3.4 hinter die Dokumentbeschreibung. Das hat den Vorteil, dass der Gegenstand bekannt ist, bevor er theoretisiert wird, und dass keine Umnummerierung nötig wird. Es hat den Nachteil, dass Sektion 2 ohne Auflösung bleibt und die Antwort auf das in Sektion 1 aufgeworfene Problem verschiebt sich um zwanzig Seiten.
Die dritte Variante hat die geringste Eingriffstiefe. 3.4 bleibt als verschlankte Sektion mit Substrat, DMP und einem Rückverweis stehen, dann entfällt jede Umnummerierung. Der Preis ist eine Sektion, die wie ein Rest wirkt.

**D3, Verbatim-Sperren.** Abstract und Introduction sind am 2026-07-23 verbatim freigegeben und gesperrt worden. Der Wechsel bricht diese Sperre an drei Absätzen. Der Operator muss sie ausdrücklich für diese Absätze aufheben, sonst ist die Umsetzung blockiert.

**D4, Reichweite der Engpass-Behauptung.** Die Entwürfe setzen durchgehend die evidenzgedeckte Fassung, also was ein Projekt selbst bereithalten muss, gebunden an die Prototyp-Grenze. Die stärkere Fassung als Diagnose des Feldes ("der Engpass hat sich verschoben") wäre wirkungsvoller und ist von der Evidenz des Papers nicht gedeckt. Ich empfehle die gedeckte Fassung. Wenn der Operator die stärkere will, braucht sie eine ausdrückliche Grenzangabe in 6.4.

**D5, 2.5 und die Originalitätsfrage.** Der Hebel gegen den Vorwurf, das Paper sage nur, was der Spec-Driven-Development-Diskurs ohnehin sagt, sitzt jetzt in 2.5. Zu entscheiden zusammen mit A0 Befund 4, ob die Abgrenzung die zweite Claim-Hälfte ausdrücklich aufnimmt.

**D6, 6.2 und der zweite Engpass.** Ob 6.2 einen Satz bekommt, der Verifikation als die zweite Sammelstelle der früheren Implementierungsarbeit benennt. Ohne ihn steht die stärkste Gegenrede zur Hauptaussage im eigenen Text, unkommentiert.

**D7, Überschneidungen mit A0 und A3.** A0 Befund 1 wird gegenstandslos. A3 Befunde 1 und 2 sind in den Entwürfen enthalten, A3 Befund 5 ist bewusst nicht realisiert. Der Operator sollte die überschneidenden Vorschläge nicht getrennt abnehmen.

**D8, Verhältnis zur parallelen Arbeit im selben Working Tree.** Beim Abschluss dieses Entwurfs liegen uncommittet zwei weitere neue Dokumente vor, `revision-decisions.md` (Phase B, mit bereits freigegebenen Punkten aus A0 bis A3) und `revision-research-sdd.md` (belegte Prüfung der Abgrenzungsformel in 2.5). Beide sind gelesen und berühren diesen Entwurf an zwei Stellen. Die dort freigegebenen Abstract-Änderungen (Verwerfbarkeit an die Iteration binden, "with verified figures" streichen) sind im Vorher-Stand von `paper.md` bereits enthalten und mit dem Abstract-Entwurf verträglich. Die SDD-Recherche ist der sachliche Input für D5 und sollte zusammen mit ihm entschieden werden. Dieser Entwurf ist gegen den Stand von `paper.md` vom 2026-07-24 geschrieben; wenn Phase C vorher Änderungen einspielt, sind die Zeilennummern der Kartierung neu zu ziehen.
