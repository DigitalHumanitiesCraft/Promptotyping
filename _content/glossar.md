---
title: Glossar
slug: glossar
version: "0.2"
status: complete
source: data/glossar.json (massgebliche Datenquelle); erzeugt, nicht von Hand gepflegt
mirrored: 2026-07-25
machine-url: https://dhcraft.org/Promptotyping/_content/glossar.md
---

# Glossar

Begriffe der Promptotyping-Methode und der Methodik-Site. Die massgebliche Datenquelle ist `data/glossar.json`; diese Datei wird daraus erzeugt und ist inhaltsgleich. Pro Eintrag stehen eine Kurzdefinition fuer Tooltips, eine Volldefinition und die Quelle. Begriffe, die der Papertext nicht fuehrt, sind in der Quellenzeile als Site-Vokabular ausgewiesen.

### Action Document

Knowledge Document, das Handlungswissen darueber traegt, was Agenten im Projekt tun duerfen.

Ein Action Document ist die Spezialisierung des Knowledge Document auf Handlungswissen. Es beschreibt, was Agenten im Projekt tun duerfen und wie. Dazu gehoeren der Action-Layer, die Teststrategie, die Technologie-Baseline und in Mehr-Agenten-Projekten die Rollendefinitionen und Orchestrierungsregeln. Beispiele sind instructions.md, rules.md, cloud-commands.md und CLAUDE.md; sie liegen typischerweise im Repo-Root. Diagnostik: ist der Output formal falsch, wird zuerst das Action Document geprueft.

Quelle: Paper, Abschnitt 3.3; Konvention Promptotyping Documents

### Action-Layer

Das imperative CLAUDE.md im Repo-Root, das den Coding-Agenten sozialisiert.

Der Action-Layer ist das imperative Dokument im Repo-Root, gewoehnlich CLAUDE.md, das den Coding-Agenten sozialisiert. Er routet zu Wissen und uebersetzt es in Imperative, traegt aber selbst kein Wissen. Er besteht aus einem portablen Methodenkern (Wissensbasis-Routing, Journal-Pflicht, Verifikationsregeln, Designprinzipien, Scope, Wahrheitshierarchie) und einem austauschbaren Werkzeug-Block (Befehle, Hooks, Permissions, Plattform-Konventionen).

Quelle: Paper, Abschnitt 3.3; Vorlage Action-Layer

### Agent-Sozialisierung

Aesthetische und verhaltensbezogene Praegung eines Coding-Agenten durch die Komposition aus design.md und CLAUDE.md.

Agent-Sozialisierung bezeichnet die aesthetische und verhaltensbezogene Praegung eines Coding-Agenten, die als Lese-Effekt entsteht, wenn ein Action-Dokument im Repositoriums-Wurzelverzeichnis auf ein deklaratives Designdokument verweist. Das Designrationale wird in dieser Uebersetzung zum Aequivalent von Werten in einem Agentenprofil, an denen der Agent auch in unvorhergesehenen Situationen entscheidet. Knowledge bleibt Knowledge und Action bleibt Action; die Sozialisierung entsteht aus dem Zusammenspiel.

Quelle: Paper, Abschnitt 3.3; Vault Agent-Sozialisierung

### Agentic Coding

LLM-Agenten, die autonom Dateisysteme navigieren, Skripte ausfuehren, Tests laufen lassen und iterieren.

Agentic Coding bezeichnet den Einsatz von LLM-Agenten wie Claude Code, die ein Repository navigieren, Skripte ausfuehren, Tests laufen lassen, Fehlermeldungen interpretieren und auf den eigenen Ausgaben iterieren. Zwischen Mitte 2023 und Ende 2025 ist die Codefaehigkeit der Frontier-LLMs mit solchen agentischen Harnessen zusammengelaufen, was die Implementation-Phase der Methode traegt. Was sich damit aendert, ist die Spanne, ueber die ein Agent ohne menschlichen Eingriff arbeitet, und damit, wie viel Absicht vorab schriftlich vorliegen muss. Mehr-Agenten-Betrieb ist ein Werkzeug der Methode und nicht die Methode.

Quelle: Paper, Abschnitt 2.4; Anthropic 2025

### Agentic Engineering

Entwicklungspraxis, in der LLM-Agenten die ausfuehrende Instanz sind und die menschliche Arbeit zu Spezifizieren, Steuern und Verifizieren wird.

Agentic Engineering benennt die Entwicklungspraxis, in der LLM-Agenten die ausfuehrende Instanz sind und die menschliche Arbeit sich auf Spezifizieren, Steuern und Verifizieren verlagert. Ein Agent ist in diesem Sinn ein Sprachmodell, das ueber mehrere Schritte auf ein Ziel hinarbeitet, indem es Werkzeuge in einer Umgebung aufruft und deren Antworten in den eigenen Kontext zurueckninmt, ohne Schritt fuer Schritt angewiesen zu werden. Vier Merkmale spannen einen Gradienten auf, Werkzeugzugriff, Rueckmeldung der Umgebung, Zielverfolgung ueber mehrere Schritte und die Spanne der Autonomie zwischen zwei menschlichen Eingriffen. Chat hat keines davon, Chat mit Werkzeugen die ersten beiden, eine agentische Coding-Umgebung alle vier. Methodisch zaehlt die Spanne der Autonomie, weil sie bestimmt, wie viel Absicht vor Arbeitsbeginn schriftlich vorliegen muss.

Quelle: Paper, Abschnitt 2.4

### Anker-Schema

System stabiler URL-Anker, ueber die Vorlagen, Konzepte, Case Studies und Begriffe der Site adressiert werden.

Das Anker-Schema ist das System der permanent stabilen URL-Anker auf der Single-Page-Site. Pro Vorlage, Konzept, Case Study und Begriff existiert ein stabiler Anker, etwa #promptotyping-document-data, #konzept-eil oder #case-herdata. Jeder adressierbare Inhalt existiert in zwei gleichberechtigten, kanonischen Formen: einem Hash-Anker und einer Subpath-URL. Repos, die per Frontmatter-Feld template: verlinken, adressieren diese Anker; sie duerfen nicht ohne Diskussion umbenannt werden.

Quelle: knowledge/specification.md, Anforderung A4

### Asymmetric Amplification

LLMs verstaerken computergestuetzte Forschungsarbeit entlang bestehender Gefaelle von Expertise, Zugang und epistemischer Selektivitaet.

Asymmetric Amplification benennt die Dynamik, dass LLMs computergestuetzte Forschungsarbeit nicht automatisieren, sondern entlang bestehender Gefaelle verstaerken, entlang von Expertise, Zugang und epistemischer Selektivitaet (Pollin 2026a). Trainingskorpora bevorzugen englischsprachiges, digitalisiertes, gut publiziertes Wissen; dieselbe Technologie erzeugt Autonomie dort, wo Verifikationskompetenz vorhanden ist, und Abhaengigkeit dort, wo sie fehlt. Eine auf diesen Systemen gebaute Methode erbt das Problem und loest es nicht. Im Paper traegt der Begriff die ethische Dimension der Zugangsgrenze.

Quelle: Paper, Abschnitt 6.4; Pollin 2026a

### Claims-Verifikation als Dokumentfunktion

Adversariale Pruefung der eigenen empirischen und Neuheitsbehauptungen als eigene Knowledge Documents.

Claims-Verifikation als Dokumentfunktion bezeichnet die Pruefung der eigenen empirischen und Neuheitsbehauptungen in einem eigenen Dokument, das festhaelt, welche Behauptung gegen welche Evidenz mit welchem Verfahren geprueft wurde und mit welchem Befund. Drei Bausteine tragen sie, das Nachrechnen aller Kopfzahlen aus den Rohdaten durch eine unabhaengige Instanz mit Quellpfad pro Zahl, die Recherche gegen die eigene Neuheitsbehauptung mit dem Ziel der Widerlegung und ein Konformitaets-Audit gegen die beanspruchten Standards. Aussenwirksame Behauptungen duerfen nur in der Form verwendet werden, die diese Dokumente lizenzieren. Das Muster entstand in FemPrompt SozArb und ist inzwischen eine eigene Dokumentfunktion des Katalogs.

Quelle: Paper, Abschnitt 3.3 und 5.1

### Co-Intelligence

Rahmen fuer Mensch-LLM-Zusammenarbeit, der Verstaerkung statt Automatisierung betont.

Co-Intelligence (Mollick 2024) ist ein Rahmen fuer die Zusammenarbeit von Mensch und LLM, der Amplifikation gegenueber Automatisierung betont. Die Site fuehrt den Begriff als Vorlaeufer der eigenen Rollenbestimmung; im Papertext kommt er nicht vor, weil dort der Critical Expert in the Loop und die Asymmetric Amplification die Arbeit uebernehmen, die dieser Rahmen leistet.

Quelle: Site-Vokabular, im Papertext nicht gefuehrt; Mollick 2024

### Context Engineering

Systematische Gestaltung und Verwaltung der Kontextinformation, die LLMs zur Inferenzzeit erhalten.

Context Engineering bezeichnet die systematische Gestaltung und Verwaltung der kontextuellen Information, die LLMs zur Inferenzzeit bereitgestellt wird (Mei et al. 2025). Es umfasst Context Retrieval, Context Processing, Context Management und die Integration ueber RAG, Memory-Systeme und Multi-Agent-Architekturen. Der Wechsel vom Prompt Engineering zum Context Engineering spiegelt wider, dass produktionsreife LLM-Anwendungen eine systematische Informationsarchitektur statt einzelner Prompt-Optimierung verlangen. Promptotyping ist eine domaenenspezifische Auspraegung des Context Engineering.

Quelle: Paper, Abschnitt 2.4; Mei et al. 2025

### Context Memory

Zusammenspiel von Journal und Git-Historie, das die Wiederaufnahme von Sessions ermoeglicht.

Context Memory bezeichnet das Zusammenspiel von Journal und Git-Historie, das die zuverlaessige Wiederaufnahme von Sessions ermoeglicht, wobei das Journal das Warum der Entscheidungen dokumentiert und die Commits das Was festhalten. Die Process Documents der Methode tragen diese Funktion. Beobachtet wurde das Muster unter anderem im imareal-room-object-Dashboard, wo der Agent selbstaendig im Journal dokumentierte.

Quelle: Paper, Abschnitt 3.3

### Context Rot

Abnahme der LLM-Leistung mit wachsender Kontextlaenge, auch bei einfachen Aufgaben.

Context Rot bezeichnet die empirisch belegte Abnahme der LLM-Leistung mit wachsender Eingabelaenge, selbst bei einfachen Aufgaben wie dem Wiederauffinden von Text (Hong et al. 2025). Die Untersuchung ueber achtzehn Modelle zeigt nicht-uniforme Leistung bei wachsendem Kontext und widerlegt die Annahme, dass mehr Information zu besseren Ergebnissen fuehrt. Context Rot liefert die technische Begruendung fuer die Distillation-Phase, deren Prinzip maximale Information bei minimalen Tokens lautet. Im CorrespExplorer wurde die Degradation deutlich innerhalb des beworbenen Kontextfensters beobachtet, qualitativ und ohne Messung.

Quelle: Paper, Abschnitt 2.4; Hong et al. 2025

### Critical Expert in the Loop (EIL)

Rolle, die LLM-Output an definierten Stellen verifiziert und Domaenenexpertise mit Wissen ueber LLM-Fehlermodi verbindet.

Der Critical Expert in the Loop ist die Rolle, die LLM-Output an definierten Stellen verifiziert. Anders als der generische Human in the Loop verlangt sie zugleich Domaenenexpertise und Bewusstsein fuer LLM-spezifische Fehlermodi sowie metakognitive Wachsamkeit. Der Critical Expert prueft nicht nur die Korrektheit von Outputs; die folgenreichere blinde Stelle liegt im nicht explorierten Moeglichkeitsraum, also in den nicht gestellten Fragen und nicht erzeugten Alternativen. Diese metareflexive Kapazitaet unterscheidet ihn von einem Reviewer, der nur Korrektheit prueft.

Quelle: Paper, Abschnitt 2.4; Pollin 2025c

### Declarative Document

Knowledge Document, das Sachwissen ueber Daten, Domaene und Forschungskontext traegt.

Ein Declarative Document ist die Spezialisierung des Knowledge Document auf Sachwissen. Es beschreibt, was ueber Daten, Domaene und Forschungskontext bekannt ist. Beispiele sind README.md, project.md, data.md, requirements.md, architecture.md, design.md, editorial-guidelines.md, Mapping-Regeln und Verifikationsdokumente. Declarative Documents werden vom Critical Expert kuratiert und bilden das bleibende Artefakt des Context Engineering, weil das Wissen, das sie kodieren, Aenderungen an Code, Modellversionen und Werkzeugen ueberdauert. Diagnostik: ist der Output inhaltlich falsch, wird zuerst das Declarative Document geprueft. Die Site fuehrte diesen Typ bis Juli 2026 unter dem Namen Knowledge Document; der Name wanderte auf den Oberbegriff.

Quelle: Paper, Abschnitt 3.3; Konvention Promptotyping Documents

### Demo-Repo-Reduktion

Didaktisches Muster, in dem das Demo-Repository bewusst nicht vorkonfiguriert ist.

Die Demo-Repo-Reduktion ist ein didaktisches Muster fuer Promptotyping-Workshops, in dem Teilnehmende die Methode an einem realen Projekt selbst nachbauen. Das Demo-Repository ist bewusst nicht vorkonfiguriert: Initialzustand mit Rohdaten, knapper idea.md und leerem knowledge/-Ordner, ohne CLAUDE.md, ohne Custom Commands, ohne Output-Struktur. Der Lerngewinn entsteht aus dem Aufbau der Promptotyping-Architektur unter Anleitung, nicht aus dem Lesen einer fertigen. Erprobt im SuGW- und im ZBZ-Workshop.

Quelle: Site-Vokabular, im Papertext nicht gefuehrt; Promptotyping MOC

### Distillation

Phase und Schreibprinzip der Context Compression: maximale Information bei minimalen Tokens.

Distillation ist die dritte Promptotyping-Phase und zugleich das Schreibprinzip der Promptotyping Documents, Context Compression mit dem Ziel maximaler Information bei minimalen Tokens. Sie verdichtet, was die Exploration gelehrt hat, in den Dokumentsatz. Die Verdichtung ist nicht neutral; Kodierungsentscheidungen sind epistemische Entscheidungen, die festlegen, welche Information allen folgenden Schritten zur Verfuegung steht. Die technische Begruendung liefert Context Rot. Die Phase endet, wenn eine neue Agenteninstanz allein aus Dokumenten und Daten die Projektlogik aufnehmen koennte.

Quelle: Paper, Abschnitt 3.2; Hong et al. 2025

### Epistemic Infrastructure

Site-Begriff fuer das Zusammenspiel aus Verifikationsstellen, Interfaces, Dokumenten und Versionsgeschichte in komplexen Pipelines.

Epistemic Infrastructure bezeichnet das Zusammenspiel, das in komplexen Promptotyping-Pipelines entsteht, wenn Verifikationsstellen, Interfaces, Promptotyping Documents, Versionsgeschichte und agentische Werkzeuge ineinandergreifen und den Erkenntnisprozess ueber Sessions hinweg nachvollziehbar halten. Im ZBZ-OCR-TEI-Projekt und in FemPrompt SozArb traegt das Repository selbst diese Funktion. Der Begriff ist aus dem Papertext bewusst entfernt worden, weil die Methode nur einen Teil einer epistemischen Infrastruktur stellt; die Site fuehrt ihn als beschreibendes Vokabular fuer diese Faelle weiter.

Quelle: Site-Vokabular, im Papertext nicht gefuehrt; Vault Epistemic Infrastructure

### Exploration

Zweite Promptotyping-Phase: die Schnittstelle zwischen Daten und Forschungskontext sondieren und Sackgassen dokumentieren.

Exploration ist die zweite Promptotyping-Phase, auf der Site frueher Exploration und Mapping genannt. Sie sondiert die Schnittstelle zwischen Daten und Forschungskontext mit der Leitfrage, ob sich die abstrakte Forschungsfrage konkret auf die verfuegbare Datenstruktur abbilden laesst. Die Forschenden inspizieren die Daten, eigens geschriebene Skripte durchlaufen den Korpus und rendern kompakte Aggregationen, und das LLM erzeugt Mapping-Hypothesen, die an fachlichen Kriterien geprueft werden. Zu verstehen, was die Daten nicht hergeben, ist genauso wertvoll wie zu wissen, was geht. Die Phase endet mit einem dokumentierten Verstaendnis davon, was moeglich ist, was nicht und warum, und sie entfaellt, wo die Daten vertraut sind und Preparation diese Fragen bereits geklaert hat.

Quelle: Paper, Abschnitt 3.2

### Forschungsartefakt

Projektgebundene Software, die auf den eigenen Daten arbeitet und sie explorierbar, analysierbar oder editierbar macht.

Ein Forschungsartefakt im Sinne der Methode ist das, wozu die Dokumente fuer den Forschungskontext eines Projekts gemacht werden, Software, die an die Daten dieses Projekts gebunden ist und auf ihnen arbeitet, sodass sie explorierbar, analysierbar oder editierbar werden. Seine wissenschaftliche Geltung kommt aus dieser Bindung, weil die Unterscheidungen, die es bewahrt, die des Datenmodells dieses Projekts sind. Dieselbe Ableitung bringt die Formen hervor, die daneben stehen, die vorgelagerte Verarbeitungspipeline und die aus den Quelldaten gerenderte Beschreibung. Die Voreinstellung ist ein selbstgenuegsames statisches Web-Werkzeug.

Quelle: Paper, Abschnitt 1 und 4.1

### Frontmatter-Inspector

Site-Modul, das einen template:-URI in Echtzeit aufloest und die referenzierte Vorlage live rendert.

Der Frontmatter-Inspector ist ein Modul der Vorlagen-Sektion, das einen ganzen YAML-Frontmatter-Block entgegennimmt, template.url oder template.alias extrahiert, die URL gegen das Anker-Schema validiert und das Side-Panel mit der gerenderten Vorlage oeffnet. Er demonstriert die Frontmatter-Indirektion konkret: das Einfuegen eines realen Frontmatters aus einem fremden Repo macht sichtbar, wie Repos die Site als maschinenlesbaren Endpunkt nutzen.

Quelle: knowledge/specification.md, Anforderung A11 und ADR-7

### Implementation

Vierte Promptotyping-Phase: iterative Entwicklung mit den Promptotyping Documents als Kontext.

Implementation ist die vierte Promptotyping-Phase. Der Dokumentsatz geht an ein agentisches Coding-Werkzeug, das im Projekt-Repository arbeitet, und die Forschenden steuern die Codeerzeugung ueber strukturierten Kontext und bewertendes Feedback. Drei Mechanismen tragen die Rueckkopplung, deterministisches Feedback aus Schema-Validierung, Testsuiten und Builds, visuelles Feedback aus Screenshots des laufenden Artefakts und Expertenfeedback aus dem fachlichen Urteil. Ist das Artefakt falsch, war die Spezifikation falsch oder unvollstaendig, und korrigiert wird die Spezifikation; neues Wissen fliesst in die Dokumente zurueck, die damit lebende Dokumente bleiben.

Quelle: Paper, Abschnitt 3.2

### Informed Vibe Coding

Vibe Coding auf der Basis von Computer Literacy und Computational Thinking als Kompetenzvoraussetzung.

Informed Vibe Coding bezeichnet Vibe Coding, das auf einem Drei-Schichten-Kompetenzmodell aufsetzt: Computer Literacy, dann Computational Thinking, dann Informed Vibe Coding. Es grenzt die kompetente, methodisch reflektierte Form der LLM-gestuetzten Entwicklung von der naiven ab. Die untere Schicht traegt die obere: ohne grundlegendes technisches Verstaendnis bleibt Vibe Coding blind gegenueber den Konsequenzen der erzeugten Loesung.

Quelle: Site-Vokabular, im Papertext nicht gefuehrt; Vault Informed Vibe Coding

### Interface-Typologie

Klassifikation der epistemischen Funktion erzeugter Interfaces: Verification, Exploration, Edition, Capture, Audit.

Die Interface-Typologie klassifiziert die erzeugten Interfaces nach der epistemischen Funktion, die sie erfuellen, weil Datenformat und Visualisierungstechnik sich als schwaechere Ordnungsprinzipien erwiesen haben. Verification-Interfaces pruefen Zwischenergebnisse einer Pipeline an definierten Stellen. Exploration-Interfaces erschliessen bestehende strukturierte Daten ueber koordinierte Ansichten. Edition-Interfaces praesentieren wissenschaftliche Editionen mit Faksimile-Synchronisation und Korrekturmoeglichkeit. Capture-Interfaces unterstuetzen strukturierte Eingabe, Annotation und Metadatenerzeugung. Audit-Interfaces machen einen ganzen Forschungsprozess nachvollziehbar. Die Kategorien schliessen einander nicht aus; ein Pipeline-Projekt kombiniert sie.

Quelle: Paper, Abschnitt 4.2

### Knowledge Curation

Systematische Pflege des vernetzten Wissensmodells auf der Vault- und der Repo-Schicht.

Knowledge Curation ist die systematische Pflege des vernetzten Wissensmodells auf zwei Schichten: dem persoenlichen Vault als Second Brain und den projektspezifischen Knowledge Vaults in Repos. Sie kennt drei Operationstypen (skriptbasiert, semantisch, strukturell) und behandelt Verlinkungen als navigierbare Kontextpfade fuer agentische Systeme. Als Querschnittspraxis sorgt sie dafuer, dass Promptotyping ueber Sessions hinaus akkumuliert.

Quelle: Site-Vokabular, im Papertext nicht gefuehrt; Promptotyping MOC

### Knowledge Document

Oberbegriff fuer ein Dokument, das Wissen festhaelt; jedes Promptotyping Document ist eines.

Ein Knowledge Document ist ein Dokument, das Wissen so festhaelt, dass Menschen und Agenten es lesen und darauf handeln koennen. Der Begriff ist allgemein und nicht an Promptotyping gebunden; im Promptotyping heissen diese Dokumente Promptotyping Documents, wenn sie im knowledge/-Ordner eines Projekts liegen. Nach der Art des Wissens, das sie tragen, zerfallen sie in drei Spezialisierungen, Declarative Documents fuer Sachwissen, Process Documents fuer Prozesswissen und Action Documents fuer Handlungswissen.

Quelle: Paper, Abschnitt 3.3

### Knowledge-Action-Komposition

Strukturprinzip, das Knowledge und Action trennt und gemeinsam Coding-Agenten sozialisiert.

Die Knowledge-Action-Komposition ist das Strukturprinzip, mit dem deklaratives Wissen und imperative Steuerung getrennt bleiben und gemeinsam einen Coding-Agenten sozialisieren. Konkret bleibt design.md ein Declarative Document, waehrend CLAUDE.md als Action Document darauf als Wertequelle verweist und die Designhaltung in imperative Prinzipien uebersetzt. Die aesthetische und faktische Steuerung entsteht aus der Komposition zweier Dokumente, nicht aus einem Hybridtyp.

Quelle: Site-Vokabular, im Papertext nicht gefuehrt; Konvention Promptotyping Documents

### Konfabulation

Erzeugung plausibler, aber falscher Outputs durch LLMs, gemeinhin Halluzination genannt.

Konfabulation, gemeinhin Halluzination genannt, ist die Erzeugung plausibler, aber falscher Outputs (Summerfield 2025). In Forschungskontexten ist sie besonders gefaehrlich, wenn der Output Kontextualisierung, Periodisierung oder Zuschreibung betrifft, also Domaenen, in denen Plausibilitaet und Korrektheit auseinanderfallen koennen. Konfabulation gehoert neben Sycophancy zu den strukturellen Fehlermodi, die der Critical Expert in the Loop adressiert.

Quelle: Paper, Abschnitt 2.4; Summerfield 2025

### Konvention Promptotyping Documents

Deskriptive Beschreibung der Funktionen einer Wissensbasis, des Frontmatter-Schemas und der Strukturprinzipien.

Die Konvention Promptotyping Documents beschreibt deskriptiv, welche Funktionen eine Wissensbasis im knowledge/-Ordner abdeckt, welches Frontmatter-Vokabular gilt und welche Strukturprinzipien tragen. Sie schreibt keine feste Dokumentenliste vor, sondern liefert Triggerkriterien pro Funktion, sodass ein Coding-Agent selbst entscheiden kann, welche Dokumente ein Repo braucht. Sie ist aus der HerData-Referenzimplementierung abgeleitet und auf der Site als externe Spezifikation gespiegelt.

Quelle: Konvention Promptotyping Documents (#konvention-v0.1)

### Phasen-Provenance-Lane

Entferntes Designelement der Site, das pro Absatz die beschriebene Promptotyping-Phase am Rand markierte.

Die Phasen-Provenance-Lane war ein Designelement des ersten Deploys. Eine linke Schmalspalte zeigte an jedem Absatz eine monochrome Markierung in vier Graustufen, entsprechend der Promptotyping-Phase, die der Absatz beschrieb, und machte die methodische Verteilung des Papers visuell ablesbar. Sie ist im Juni 2026 durch Operator-Entscheidung vollstaendig entfernt worden, samt Legende, Tooltip und Filtermodus (ADR-4). Die Phasen-Tags im Paper-Markdown werden seither beim Rendern nur noch entfernt. Der Eintrag bleibt, damit die Entscheidung nachvollziehbar ist.

Quelle: knowledge/specification.md, ADR-4 (entferntes Feature)

### Preparation

Erste Promptotyping-Phase: alle Rohmaterialien zusammentragen, bevor technische Entscheidungen fallen.

Preparation ist die erste Promptotyping-Phase. Alle relevanten Materialien werden zusammengetragen, bevor technische Entscheidungen fallen, also Forschungsdaten in ihren Originalformaten, Dokumentation zu Standards und Datenmodellen, Forschungsfragen und Domaenenwissen. Die Phase beginnt typischerweise mit Requirements Engineering, dem Artikulieren von User Stories und der Zuordnung von Daten zu Fragen. Unschaerfe an dieser Stelle setzt sich durch alle folgenden Phasen fort. Sie endet, wenn die Repositoriumsstruktur steht, die Quelldaten zugaenglich sind und erste Anforderungen dokumentiert vorliegen.

Quelle: Paper, Abschnitt 3.2

### Process Document

Knowledge Document, das Prozesswissen ueber den Verlauf der Arbeit traegt.

Ein Process Document ist die Spezialisierung des Knowledge Document auf Prozesswissen. Es haelt den Verlauf der Arbeit fest, chronologisch oder analytisch. Beispiele sind journal.md, learnings.md und plan.md. Zusammen mit der git-Historie bilden sie ein Context Memory, das verlaessliche Sitzungsfortsetzung erlaubt, wobei das Journal das Warum dokumentiert und die Commits das Was. Diagnostik: ist die Entscheidungslogik unklar, wird zuerst das Process Document geprueft. Die VetMedAI-Wissensbilanz fuehrte Learnings als eigenstaendigen Process-Document-Typ ein.

Quelle: Paper, Abschnitt 3.3; Konvention Promptotyping Documents

### Promptotyping

Iterative, dokumentgetriebene Context-Engineering-Methode in vier Phasen, die Forschungsdaten in Forschungsartefakte uebersetzt.

Promptotyping ist eine iterative, dokumentgetriebene Context-Engineering-Methode in vier Phasen (Preparation, Exploration, Distillation, Implementation), mit der Forschende ihre strukturierten Forschungsdaten in Forschungsartefakte uebersetzen. Das Arbeitsmaterial ist ein kleiner Satz versionierter Markdown-Dokumente, die Anforderungen, Datenbeschreibungen und Designentscheidungen tragen; aus ihnen leitet ein LLM-gestuetzter Agent das Artefakt ab. Die Dokumente sind das, was die Methode pflegt, und das Artefakt wird aus ihnen regeneriert. Der Unterschied zu Vibe Coding liegt in der strukturierten Vorbereitung, den persistenten Dokumenten und der Verifikation an definierten Pruefpunkten.

Quelle: Paper, Abschnitt 3.2; knowledge/INDEX.md

### Promptotyping Document

Strukturiertes, LLM-optimiertes Markdown-Dokument im knowledge/-Ordner eines Promptotyping-Repos.

Ein Promptotyping Document ist ein strukturiertes, LLM-optimiertes Markdown-Dokument im knowledge/-Ordner eines Promptotyping-Repos, das Kontext verdichtet und destilliert. Jedes Promptotyping Document ist ein Knowledge Document, und drei analytische Typen unterscheiden sich nach der Art des Wissens, das sie tragen, Declarative Documents fuer Sachwissen, Process Documents fuer Prozesswissen und Action Documents fuer Handlungswissen. Diese Dokumente sind keine klassische Dokumentation, sondern kontextangepasste Artefakte des Context Engineering, die LLM-gestuetzt erzeugt, aber von Experten kuratiert werden.

Quelle: Paper, Abschnitt 3.3; knowledge/INDEX.md

### Promptotyping Interface

Browser-basiertes Validierungstool, das Zwischenergebnisse sichtbar, vergleichbar und korrigierbar macht.

Promptotyping Interfaces sind die browser-basierten Artefakte der Methode, in der Regel selbstgenuegsame statische HTML-, CSS- und JavaScript-Werkzeuge mit eingebetteten oder aus Flachdateien geladenen Forschungsdaten. Sie machen Daten und Zwischenergebnisse sichtbar, vergleichbar und korrigierbar. Im ZBZ-OCR-TEI-Projekt rendert ein Pipeline-Viewer Faksimile, Layout-Overlay und OCR/TEI nebeneinander. Nach der epistemischen Funktion, die sie erfuellen, ordnet die Interface-Typologie sie in fuenf Kategorien.

Quelle: Paper, Abschnitt 4.1 und 4.2

### Scholar-Centered Design

Gestaltungsansatz, bei dem sich das System den Arbeitspraktiken der Forschenden anpasst.

Scholar-Centered Design ist ein in Pollin (2025b) entwickelter Gestaltungsansatz, bei dem sich das System den Arbeitspraktiken der Forschenden anpasst, statt umgekehrt. Es erzeugt User Stories, Personas und Epics aus kollaborativen Sitzungen mit Domaenenexperten und stuetzt sich auf Marchioninis exploratory search und Bates berrypicking model. Im DEPCHA-Projekt fuehrten Deep-Dive-Sitzungen zu strukturierten Anforderungen, die aus den Daten allein nicht ableitbar waren. Es liefert die strukturierten Kontexte, die Promptotyping fuer die LLM-gestuetzte Produktion nutzt.

Quelle: Paper, Abschnitt 2.5; Pollin 2025b

### Side-Panel

Rechtes, einschiebendes Panel der Single-Page mit kontextspezifischer Tiefe ohne Unterbrechung des Leseflusses.

Das Side-Panel ist das rechte, einschiebende Panel der Single-Page-Site. Es traegt kontextspezifische Tiefe, etwa einen Glossar-Eintrag, eine Vorlagen-Spezifikation, eine Case-Study-Tiefenseite oder ein Literatur-Detail, und oeffnet sich auf Klick, ohne den Lesefluss zu unterbrechen. Auf Mobilgeraeten erscheint es als Bottom-Sheet.

Quelle: knowledge/specification.md

### Skript-vs-LLM-Trennung

Aufteilung von Aufgaben nach Eindeutigkeit: algorithmisch Eindeutiges in Skripte, semantisch Interpretierendes ans LLM.

Die Skript-vs-LLM-Trennung weist algorithmisch eindeutige Aufgaben Skripten zu und semantisch interpretierende Aufgaben dem LLM. Die Trennlinie verlaeuft entlang der Eindeutigkeit und nicht entlang der Komplexitaet. In der Methode erscheint sie zweimal, als deterministisch generierte Dokumente, die aus den Quelldaten gerendert und neben der kuratierten Schicht committet werden, und als Aufloesung der Token-Oekonomie, bei der das LLM ueber die Daten liest und Code schreibt, der die Daten liest.

Quelle: Paper, Abschnitt 3.3; Promptotyping MOC

### Spec-Driven Development

Korrektiv der Softwareindustrie gegen ungeprueft uebernommene Generierung, mit der Spezifikation als Wahrheitsquelle fuer Agenten.

Spec-Driven Development benennt das Korrektiv, das die Softwareindustrie selbst gegen die Zuverlaessigkeitsprobleme ungeprueft uebernommener Generierung entwickelt hat. Durch 2024 und 2025 sind agentische Coding-Frameworks darauf zusammengelaufen, Spezifikationen als Wahrheitsquelle zu pflegen, aus denen LLM-gestuetzte Agenten implementieren, unter ihnen Tessl, BMAD, AWS Kiro, OpenSpec und GitHub Spec Kit. Promptotyping gehoert zu dieser Bewegung und teilt ihre Kernfestlegungen, den versionierten Dokumentsatz als steuernde Einheit, die Trennung von Absicht und Implementierung und einen menschlichen Pruefpunkt zwischen Erzeugung und Uebernahme. Drei Dinge, die dort am Rand liegen, sind hier konstitutiv. Die Datenschicht beschreibt Quellen, die dem Artefakt vorausgehen und eigene Semantik und eigene Unsicherheit tragen, statt das im Bau befindliche System. Die Spezifikation ist an wissenschaftliche Verifikationspflichten gebunden. Und der Critical Expert in the Loop ist als Rolle installiert, die fachliche Autoritaet ueber den Gegenstand hat.

Quelle: Paper, Abschnitt 2.4

### Standalone-Forschungsdaten als Promptotyping-Muster

Wiederkehrendes Strukturmerkmal: statische Webseite plus standalone Forschungsdatensatz im Repo.

Standalone-Forschungsdaten als Promptotyping-Muster bezeichnet das wiederkehrende Strukturmerkmal, dass ein Promptotyping-Artefakt aus einer statischen Webseite und einem standalone Forschungsdatensatz im Repo besteht. Es tritt in zwei Spielarten auf: als JSON-LD-Knowledge-Graph mit hoher RDF-Semantik, etwa in M3GIM, oder als Datenstruktur-JSON als reine Datenquelle mit externen IDs als Strings, etwa in HerData. Der Datensatz traegt die Datenhaltung des Projekts vollstaendig.

Quelle: Site-Vokabular, im Papertext nicht gefuehrt; Promptotyping MOC

### Subagents und Rollensimulation

Spezialisierte Agentenrollen mit differenzierten Berechtigungen oder, ohne vorab definierte Rollen, eine Simulation in einer Session.

Subagents sind definierte Agentenrollen mit abgestufter Berechtigung, etwa eine nur lesende Analyse, eine schreibende Implementierung und eine Synthese. Sie werden nur geladen, wenn die Definitionen vor Sessionstart existieren; sonst laeuft eine Rollensimulation innerhalb einer Session. Die Methode kennt diesen Mehr-Agenten-Modus als zweiten Betriebsmodus neben der Voreinstellung aus einer forschenden Person und einer Agenteninstanz, und die Belege liegen ueberwiegend beim ersten. Im wiiw-FIGARO-Projekt wurden drei Rollen so getrennt, dass der Analyseagent nur Leserechte hatte.

Quelle: Paper, Abschnitt 3.2; Promptotyping MOC

### Sycophancy

Tendenz von LLMs, Nutzerannahmen zuzustimmen, statt sie zu hinterfragen.

Sycophancy ist die Tendenz von LLMs, den Annahmen der Nutzenden zuzustimmen, statt sie infrage zu stellen (Sharma et al. 2023; Fanous et al. 2025). Sie ist neben Konfabulation einer der beiden strukturellen Fehlermodi, die der Critical Expert in the Loop adressiert. Der Critical Expert muss erkennen, dass ausbleibender Widerspruch des LLM keine Validierung darstellt. Im CorrespExplorer stimmte das LLM suboptimalen Entscheidungen zu, sobald sie als Vorschlag formuliert waren.

Quelle: Paper, Abschnitt 2.4; Sharma et al. 2023; Fanous et al. 2025

### template:-Feld

Frontmatter-Feld in Promptotyping Documents, das auf die massgebliche Vorlagen-Spezifikation auf der Site zeigt.

Das template:-Feld ist ein Frontmatter-Feld in Promptotyping Documents, das auf die massgebliche Vorlagen-Spezifikation auf der Methodik-Site verweist. Es traegt name, version, url (Subpath-Form, kanonisch) und optional alias (Hash-Form, gleichwertig). Ein Coding-Agent, der das Feld antrifft, kann die vollstaendige Vorlage abrufen, ohne das Projekt vorher zu kennen. Dieselben Frontmatter-Felder lassen sich in Zitationsmetadaten rendern, die Harvester lesen.

Quelle: Paper, Abschnitt 3.3; knowledge/specification.md, Anforderung A5

### User Story (epistemischer Status)

Jede User Story ist eine Hypothese ueber den Anwender, bis der benannte Anwender sie bestaetigt.

Im Promptotyping-Kontext ist jede User Story eine Hypothese ueber den Anwender, bis der benannte Anwender sie bestaetigt hat. Im agentischen Kontext entfaellt das implementierende Gespraech, das falsche Stories im Team korrigieren wuerde; unvalidierte Stories muessen deshalb als Annahmen markiert sein und einen Beobachtungspunkt tragen. Acht Pruefkriterien fuer user-stories.md, vier maschinell pruefbar und drei nur menschlich einloesbar, leiten sich aus QUS (Lucassen et al. 2016) und dem FemPrompt-Fall ab.

Quelle: Site-Vokabular, im Papertext nicht gefuehrt; Lucassen et al. 2016

### Verification Milestone

Definierter Checkpoint im Workflow, an dem Domaenenexpertise systematisch angewendet wird.

Verification Milestones sind definierte Checkpoints im Workflow, an denen fachliche Expertise systematisch angewendet wird. Sie machen den Critical Expert in the Loop zum Prozessschritt: an einem Milestone wird angehalten, mit deterministischen Werkzeugen validiert und durch Expertenurteil verifiziert, und erst dann geht es weiter. Die Implementation-Phase schreitet in solchen kleinen, pruefbaren Schritten fort. Wird die Pruefung aufgeschoben, entsteht eine Verifikationsschuld, die vor Nutzung oder Uebergabe zu begleichen ist. Im ZBZ-OCR-TEI-Projekt dient ein Interface an jeder Pipeline-Stufe als solcher Milestone.

Quelle: Paper, Abschnitt 3.2 und 6.2

### Verification und Validation

Verification ist die Pruefung durch die fachliche Expertise, Validation die Pruefung durch eine formale Regel.

Die Methode unterscheidet zwei Pruefarten. Validation ist das, was eine formale Regel entscheidet, ein Schema, ein Test oder eine Constraint, und sie laeuft unbeaufsichtigt, weil die Rueckkopplung geschlossen ist. Verification ist das, was die fachliche Expertise gegen die Quellen und gegen wissenschaftliches Urteil entscheidet, und sie delegiert nicht. Das Paar arbeitet auf drei Ebenen, Datentreue, Anforderungserfuellung und Designkonformitaet, und jede Ebene hat ihre eigene Zone der Agenten-Autonomie. Diese Festlegung weicht bewusst von der Norm des Software Engineering ab, wo Verification die Pruefung gegen die Spezifikation und Validation die Pruefung gegen den beabsichtigten Gebrauch benennt; sie folgt stattdessen den Wortwurzeln, verus fuer einen Wahrheitsanspruch, den ein Urteil tragen muss, und validus fuer das, was unter einer gesetzten Regel gilt.

Quelle: Paper, Abschnitt 6.2

### Vibe Coding

Praxis, bei der Code per natuerlicher Sprache erzeugt und ohne gruendliche Pruefung uebernommen wird.

Vibe Coding bezeichnet eine Praxis, bei der Code durch Anweisungen in natuerlicher Sprache erzeugt und ohne gruendliche Pruefung uebernommen wird (Karpathy 2025). Sarkar und Drosos (2025) beschreiben iterative Zielerfuellungszyklen und material disengagement. Promptotyping teilt die Praemisse, dass LLMs aus natuerlicher Sprache funktionalen Code erzeugen koennen, unterscheidet sich aber durch vorgelagerte Preparation- und Exploration-Phasen, persistente Dokumentation und systematische Verifikation. Vibe Coding wird nicht abgelehnt, sondern als explorativer Modus innerhalb von Promptotyping verstanden.

Quelle: Paper, Abschnitt 2.4; Karpathy 2025; Sarkar und Drosos 2025

### Vorlage (Promptotyping Document)

Ausfuellbare Strukturvorgabe fuer eine spezifische Funktion einer Promptotyping-Wissensbasis.

Eine Vorlage ist eine ausfuellbare Strukturvorgabe fuer eine Funktion einer Promptotyping-Wissensbasis. Die Funktionsnamen sind seit Juli 2026 englisch, unter ihnen Navigation, Charter, Material, Specification, Architecture, Domain Knowledge, Design, Quality Assurance, Verification, Provenance, Planning, Reporting, Integration und Agent Instructions. Der Katalog ist offen; eine Vorlage entsteht, sobald sich ein Funktionstraeger in mindestens zwei Repositorien vergleichbar wiederholt, und ihre Anforderungen werden am empirischen Bestand geprueft statt vorab vorgeschrieben. Eine Vorlage traegt eine Funktion und keinen festen Dateinamen, und sie traegt nur, wo ihr Trigger erfuellt ist.

Quelle: Konvention Promptotyping Documents; knowledge/INDEX.md
