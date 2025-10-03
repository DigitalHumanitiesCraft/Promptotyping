# Promptotyping Ein Praxisbericht zur strukturierten LLM assistierten Entwicklung in den Digital Humanities

## Abstract

Large Language Models transformieren die Softwareentwicklung fundamental. Während GitHub Copilot Studien allgemeine Produktivitätssteigerungen dokumentieren und wissenschaftliche Publikationen zu LLM-assistierter Entwicklung von 7 (2020) auf über 160 (2023) stiegen, fehlen strukturierte Methoden für den wissenschaftlichen Einsatz. Das "Vibe Coding" ermöglicht zwar schnelles Prototyping durch vage Prompts, führt jedoch zu undokumentierten Systemen deren spätere Nachvollziehbarkeit problematisch ist.

Dieser Praxisbericht präsentiert Promptotyping als strukturierten Ansatz für explorative Entwicklung. Die Methode entstand iterativ aus sieben Digital Humanities-Projekten über fünf Monate. Sie operiert in sechs dokumentierten Phasen. Jede Phase fungiert als Savepoint mit Expertenvalidierung. Die Phasen produzieren Markdown-Dokumente, die als externes Arbeitsgedächtnis fungieren. Die kritische IMPLEMENTATION-Phase dokumentiert Datentransformationen und half in unseren Projekten, typische Fehlerquellen zu vermeiden.

Die Validierung erfolgte mehrstufig durch technische Expertenprüfung, fachliche Domänenvalidierung sowie automatisierte Verifikation. Verschiedene LLMs wurden entsprechend ihrer beobachteten Stärken eingesetzt. Ein strukturiertes Journal dokumentiert den Entwicklungsprozess und bewahrt erfolgreiche Prompt-Patterns.

Die Projekte variierten von zweistündigen Proof-of-Concepts bis zu 25-stündigen digitalen Editionen. In unserer Erfahrung zeigten Projekte mit fünf bis sieben Dokumenten die beste Balance zwischen Struktur und Flexibilität. Workshop-Teilnehmer ohne Programmiererfahrung erstellten funktionale Prototypen in sechs bis acht Stunden.

Promptotyping adressiert spezifische LLM-Herausforderungen durch phasenweise Dokumentaufteilung und mehrstufige Validierung. Die Methode macht implizites Wissen explizit und teilbar. Sie systematisiert die explorative Entwicklung mit LLMs und ermöglicht niedrigschwellige technische Entwicklung bei gleichzeitiger Wahrung wissenschaftlicher Standards durch strukturierte Dokumentation.

## 1. Einleitung

Digital Humanities-Forschende benötigen spezialisierte digitale Werkzeuge für hochspezifische Forschungsfragen, verfügen aber selten über Ressourcen für professionelle Softwareentwicklung. Large Language Models versprechen hier niedrigschwellige Code-Generierung. Die Erfahrung zeigt jedoch, dass undokumentierte Entwicklung die spätere Nachvollziehbarkeit erschwert.

Andrej Karpathy prägte den Begriff "Vibe Coding" für diese intuitive Entwicklungspraxis, bei der Code durch vage Prompts generiert und ohne tieferes Verständnis akzeptiert wird. Er warnt, dass man sich regelmäßig ehrlich fragen solle, ob man wirklich noch verstehe, was gerade passiert. Diese Warnung ist besonders relevant für wissenschaftliche Anwendungen, wo Nachvollziehbarkeit und Reproduzierbarkeit zentral sind.

Dieser Praxisbericht präsentiert Promptotyping als pragmatische Alternative. Die Methode entstand iterativ aus der praktischen Arbeit an sieben DH-Projekten. Sie systematisiert die Interaktion mit LLMs ohne den Overhead traditioneller Softwareentwicklung.

Als Praxisbericht dokumentiert diese Arbeit bewährte Praktiken aus realen Projekten ohne Anspruch auf empirische Validierung. Die beschriebenen Muster und Beobachtungen entstanden aus der Projektpraxis und sind als Orientierungshilfe für ähnliche Vorhaben gedacht.

## 2. Entwicklung des Ansatzes

### 2.1 Praktische Erfahrungen

Zwischen Oktober 2024 und Januar 2025 entwickelten wir iterativ die Promptotyping-Methode anhand von sieben Digital Humanities-Projekten.

**Stefan Zweig Digital** (2h) testete minimalen Ansatz ohne Dokumentation. Das Timeline-Tool für die digitale Nachlassrekonstruktion funktionierte initial, war aber nach zwei Wochen selbst für den Entwickler schwer nachvollziehbar. Dieses Experiment demonstrierte die Grenzen des reinen "Vibe Coding".

**REALonline Rauminventare** (5h, 6 Dokumente) visualisierte mittelalterliche Objektverteilungen in österreichischen Adelshäusern von 1432 bis 1602. Die strukturierte Dokumentation ermöglichte erfolgreiche Iteration nach Expertenintervention. Der Historiker korrigierte unsere technischen Annahmen über Objekthierarchien und präferierte historische Begriffe statt moderner Kategorien.

**Aldersbach Kloster** (8h, 7 Dokumente) integrierte heterogene Quelltypen in ein Annotationstool. Die systematische DATA-Phase half bei der Normalisierung inkonsistenter Datenformate aus verschiedenen Archivbeständen.

**CVMA Glasfenster** (8h, 5 Dokumente) demonstrierte erfolgreiche Mensch-KI-Kollaboration beim Corpus Vitrearum Medii Aevi. SPARQL-Queries für den NFDI4Culture Knowledge Graph entstanden in drei Iterationsschleifen zwischen menschlicher Validierung und LLM-Optimierung. Die 29MB JSON-LD Verarbeitung erforderte Python-Preprocessing.

**Kriminalmuseum** (10h, 3 Dokumente) entwickelte ein digitales Archiv der Hans Gross Sammlung mit 3.892 Objekten. Mit nur DATA.md, DESIGN.md und README.md entstand zwar ein funktionales Dual-Interface mit traditioneller Suche und Canvas-Explorer, die fehlende IMPLEMENTATION.md erschwerte jedoch spätere Anpassungen.

**Lucina Edition** (25h, 11+ Dokumente) entwickelte eine TEI-konforme digitale Edition des Madrid BN Mss. 6028 mit 128 neulateinischen Gedichten. Fünf dokumentierte Iterationen führten von der Basis-Konversion bis zur vollständigen Edition mit Prosopographie und metrischer Analyse. Die hohe Dokumentenanzahl machte Koordination zunehmend komplex.

**REALonline Iteration 2** (8h, 7 Dokumente) validierte die verbesserte Methode. Mit vollständigem Dokumentsatz und aktivem JOURNAL.md entstand eine robustere Architektur mit besserer Treemap-Visualisierung.

|Projekt|Zeit|Dokumente|Ergebnis|Erkenntnisse|Verfügbarkeit¹| |---|---|---|---|---| |Stefan Zweig Digital|2h|0|Timeline-Tool|Ohne Struktur schwer wartbar|[Demo](https://dhcraft.org/excellence/promptotyping/szd-annotation-timeline/)| |REALonline v1|5h|6|Interaktive Visualisierung|Expertenvalidierung kritisch|[Demo](https://chpollin.github.io/imareal-room-object/)| |Aldersbach Kloster|8h|7|Annotationstool|DATA-Phase zentral für heterogene Quellen|-| |CVMA Glasfenster|8h|5|Viewer mit Metadaten|Co-Intelligence Pattern erfolgreich|[Demo](https://chpollin.github.io/stained-glass-metadata-annotation-tool/)| |Kriminalmuseum|10h|3|Dual-Interface|Minimaldokumentation problematisch|[Demo](https://chpollin.github.io/km/)| |Lucina Edition|25h|11+|Digitale Edition (5 Versionen)|Koordination wird komplex|[Demo](https://chpollin.github.io/diged-neolat/)| |REALonline v2|8h|7|Verbesserte Architektur|JOURNAL.md wertvoll|siehe v1|

¹ Vollständige Repositories und Dokumentation unter github.com/chpollin/

### 2.2 Kernerkenntnisse aus der Projektpraxis

In unserer Erfahrung zeigten Projekte mit fünf bis sieben Dokumenten optimale Balance zwischen Struktur und Agilität. Unter fünf Dokumenten litt die Nachvollziehbarkeit (Stefan Zweig Digital, Kriminalmuseum), über zehn Dokumente erschwerten die Navigation (Lucina Edition).

Die IMPLEMENTATION-Phase mit expliziter Dokumentation von Datentransformationen half, typische Fehlerquellen zu vermeiden. Im REALonline-Projekt verhinderte die dokumentierte Normalisierung inkonsistenter JSON-Typen spätere Laufzeitfehler. Das JOURNAL.md ermöglichte Wiederaufnahme nach Pausen und Wissenstransfer zwischen Entwicklern.

![Abbildung 1: Screenshots der sieben Prototypen zeigen die Bandbreite der entwickelten Interfaces von Timeline-Visualisierungen über Treemaps bis zu Canvas-basierten Explorern]

## 3. Die Promptotyping-Methode

### 3.1 Phasenmodell

Promptotyping strukturiert die Entwicklung in sechs konsekutive Phasen.

**CONTEXT (README.md)** erfasst Projektziele und Constraints. Diese Phase definiert Zielgruppe, Anwendungskontext und technische Rahmenbedingungen.

**DATA (DATA.md)** spezifiziert Datenstrukturen, Schnittstellen und Beziehungen. Bei komplexen Projekten entstehen multiple Datendokumente. Die CVMA-Datenanalyse dokumentierte beispielsweise JSON-LD Strukturen mit verschachtelten Metadaten über 600 Zeilen.

**EXPLORATION** ist eine experimentelle Phase ohne formale Dokumentation. Entwickler testen verschiedene Technologien, UI-Konzepte oder Algorithmen. Diese Phase klärt technische Machbarkeit und identifiziert unerwartete Herausforderungen.

**REQUIREMENTS (REQUIREMENTS.md)** formalisiert funktionale und nicht-funktionale Anforderungen basierend auf den Explorationsergebnissen.

**IMPLEMENTATION (INSTRUCTIONS.md)** entwickelt detaillierte Anweisungen und Designspezifikationen. Diese Phase dokumentiert alle Datentransformationen, Validierungen und Algorithmen. Sie erwies sich in unserer Erfahrung als kritisch für die Fehlervermeidung.

**PROTOTYPE** generiert den finalen Code basierend auf INSTRUCTIONS.md.

Optional kann zwischen Requirements und Implementation eine Design-Phase eingefügt werden, in der Fachexperten visuelle und interaktive Aspekte spezifizieren. Die Phasen können je nach Problemtyp auch fließend ineinander übergehen oder angepasst werden.

### 3.2 Savepoints und Dokumentstruktur

Jede Phase fungiert als Savepoint mit erfolgreich validiertem Meilenstein. Der Übergang zum nächsten Savepoint erfolgt erst nach Expertenfreigabe. Bei Problemen wird die Phase wiederholt, nicht der Savepoint revidiert.

Die Dokumentation operiert auf zwei Ebenen. Ergebnisdokumente dokumentieren was gebaut wurde mit README.md für Projektziele, DATA.md für Datenstrukturen, REQUIREMENTS.md für formale Anforderungen und INSTRUCTIONS.md für Implementierungsanweisungen. Die Prozessdokumentation erfasst wie und warum gebaut wurde durch ein fortlaufendes JOURNAL.md und optional eine kuratierte PROMPTS.md Bibliothek.

### 3.3 Dokumentation als externes Arbeitsgedächtnis

LLMs haben kein persistentes Gedächtnis zwischen Konversationen. Die Markdown-Dokumente fungieren als externes Arbeitsgedächtnis. Jedes Dokument hat einen spezifischen Fokus und vermeidet Redundanz. Querverweise zwischen Dokumenten sind explizit. Die modulare Struktur ermöglicht selektiven Kontext je nach Aufgabe.

### 3.4 Critical Expert in the Loop (CEIL)

Das CEIL-Prinzip bezeichnet die durchgehende Integration von Fachexperten in den Entwicklungsprozess. Im Unterschied zur punktuellen Validierung am Phasenende erfolgt die Experteneinbindung kontinuierlich während der gesamten Entwicklung.

Die Expertenintegration manifestiert sich in zwei komplementären Rollen. Der **Developer in the Loop** kodiert den Promptotyping-Prozess, trifft technische Entscheidungen bezüglich Architektur und Implementierung und validiert die technische Korrektheit der generierten Artefakte. Der **Fachexperte in gemeinsamen Sitzungen** verifiziert die domänenspezifische Korrektheit, klärt fachliche Anforderungen und identifiziert konzeptuelle Fehlinterpretationen.

Interventionsmomente treten in definierten Situationen auf. Während der Prompt-Formulierung entwickeln Experte und Entwickler gemeinsam präzise Anweisungen, die sowohl technisch als auch fachlich korrekt sind. Bei der Output-Bewertung erfolgt eine sofortige fachliche Einschätzung der generierten Inhalte. Vor Phasenübergängen validiert der Experte die Vollständigkeit und Korrektheit für die Savepoint-Freigabe. Bei Komplexitätsentscheidungen vereinfacht der Experte überkomplexe LLM-Vorschläge auf das fachlich Notwendige.

Im Stefan-Zweig-Digital-Projekt reduzierte die CEIL-Intervention beispielsweise ein initial vorgeschlagenes Multi-User-System mit komplexer Rechteverwaltung auf eine fokussierte Single-Page-Application. Diese Vereinfachung basierte auf der Experteneinschätzung, dass individuelle Forschungsarbeit mit lokalem Datenmanagement dem tatsächlichen Nutzungsszenario entspricht.

### 3.5 Das 90-Prozent-Prinzip

Frontier-LLMs erreichen in der Regel schnell einen Lösungsgrad von etwa 90 Prozent. Diese empirisch beobachtete Grenze markiert den Übergang von automatisierter Generierung zu notwendiger manueller Intervention. Die verbleibenden zehn Prozent erfordern typischerweise domänenspezifisches Wissen, kontextuelle Feinabstimmung oder die Auflösung von Edge Cases, die das LLM nicht selbstständig bewältigen kann.

Das Prinzip manifestiert sich konsistent über verschiedene Aufgabentypen. Bei der Datentransformation generiert das LLM funktionierende Grundalgorithmen, übersieht jedoch spezielle Datenformate oder seltene Ausnahmen. In der UI-Entwicklung entstehen funktionale Interfaces, die jedoch Feinheiten der Nutzerführung oder domänenspezifische Konventionen missachten. Bei der Dokumentationserstellung produziert das LLM strukturierte Texte, die aber kritische fachliche Nuancen oder implizite Anforderungen übersehen.

Die praktische Konsequenz besteht in der expliziten Planung dieser finalen Optimierungsphase. Das JOURNAL.md dokumentiert präzise, wo die 90-Prozent-Grenze erreicht wurde und welche manuellen Interventionen erfolgten. Diese Dokumentation ermöglicht die Identifikation wiederkehrender Muster und die Entwicklung spezifischer Prompts für häufige Problembereiche.

### 3.6 Das Promptotyping Journal

Das Journal dokumentiert den kontinuierlichen Entwicklungsprozess als narratives Protokoll. Es wird LLM-unterstützt während der Entwicklung generiert und erfasst die Evolution von Prompts, Modellentscheidungen und Lernerfahrungen. Ein strukturiertes Template gewährleistet Konsistenz über Projekte hinweg. Im REALonline-Projekt dokumentierte das Journal beispielsweise die kritische Entscheidung, Hierarchien nach Gebäuden statt Objektkategorien zu strukturieren.

### 3.7 Mehrstufige Validierung

Die Validierung erfolgte in unseren Projekten auf mehreren Ebenen.

**Technische Validierung** prüft Code-Qualität, Performance und Sicherheit durch den Entwickler.

**Fachliche Validierung** bewertet die inhaltliche Korrektheit durch Domänenexperten. Im REALonline-Projekt korrigierte der Historiker unsere Annahme über Objekthierarchien. Bei CVMA validierte der Kunsthistoriker die korrekte Erfassung ikonographischer Metadaten.

**LLM-as-Judge** nutzt ein zweites Modell zur Prüfung des generierten Codes auf spezifische Probleme.

**Multi-Model Council** konsultiert bei kritischen Entscheidungen mehrere Modelle. Konsens führt zum Proceed, Dissens triggert menschliche Entscheidung.

Im CVMA-Projekt entwickelten wir SPARQL-Queries iterativ durch Co-Intelligence. Der Mensch identifizierte fehlende Felder, das LLM ergänzte die Query, der Mensch validierte gegen die Datenbank. Diese Schleife benötigte drei Iterationen bis zur optimalen Query mit geografischen Daten und Performance-Optimierung.

## 4. Fallstudie: REALonline Rauminventare

### 4.1 Projektkontext

Die REALonline-Datenbank der Universität Salzburg dokumentiert materielle Kultur des Mittelalters. Unser Projekt sollte Rauminventare österreichischer Adelssitze von 1432 bis 1602 visualisieren.

### 4.2 Entwicklungsverlauf

Die **CONTEXT-Phase** (30 Min) klärte die Forschungsfrage mit dem Historiker. Der Fokus lag auf sozialen Hierarchien durch Objektverteilung in Räumen.

Die **DATA-Phase** (1h) analysierte den JSON-Export aus Neo4j. Wir entdeckten inkonsistente Datentypen, bei denen manche Felder sowohl als String als auch als Array auftraten.

Die **EXPLORATION** (2h) brachte eine Überraschung. Statt einer Sammlung fanden wir multiple separate Inventare verschiedener Adelssitze. Eine komplette Neukonzeption war nötig.

In der **REQUIREMENTS-Phase** (45 Min) priorisierte der Historiker Timeline-Visualisierung höher als ursprünglich angenommen.

Die **DESIGN-Phase** (30 Min) brachte spezifische Vorgaben des Historikers. Er präferierte Grautöne statt Farben für wissenschaftliche Publikation, ein dreispaltiges Layout und verzögerte Hover-Effekte.

Die **IMPLEMENTATION** (45 Min) dokumentierte alle Normalisierungen und Transformationen präzise. Dies verhinderte später Fehler bei der Array-String-Konversion.

Der **PROTOTYPE** benötigte vier Iterationen (90 Min). Der Treemap-Algorithmus produzierte zunächst unleserlich schmale Bereiche. Die Lösung war die Aggregation kleiner Gruppen unter "Weitere".

### 4.3 Kritische Intervention

Der Historiker korrigierte mehrere technische Annahmen. Die Hierarchie sollte nach Gebäuden erfolgen, nicht nach Objektkategorien. Historische Begriffe aus nomenclature_original waren statt moderner Kategorien zu verwenden. Die dezente Visualisierung war für wissenschaftliche Publikation essentiell.

Diese Interventionen waren nur durch kontinuierliche Experteneinbindung möglich. Das strukturierte Journal dokumentierte alle Entscheidungen und ermöglichte spätere Nachvollziehbarkeit.

![Abbildung 2: Evolution der REALonline Treemap-Visualisierung über vier Iterationen von unleserlichen schmalen Bereichen zur finalen hierarchischen Darstellung]

## 5. Workshop-Validierung

Drei Workshops mit insgesamt 24 Teilnehmern aus Geschichtswissenschaft, Literaturwissenschaft und Archäologie testeten die Übertragbarkeit. Das Setup umfasste VS Code, Python und kostenlose LLM-Zugänge. Im Zeitrahmen von sechs bis acht Stunden erstellten 20 von 24 Teilnehmern funktionale Prototypen.

Beobachtete Herausforderungen waren die Tendenz, Phasen zu überspringen, besonders die IMPLEMENTATION-Phase. Teilnehmer überforderten LLMs mit zu viel Kontext gleichzeitig und vernachlässigten die Savepoint-Validierung.

Erfolgreiche Strategien umfassten explizite Referenzierung vorheriger Dokumente in Prompts, regelmäßige Zwischenvalidierung an Phasenübergängen und Git-Commits nach jedem validierten Savepoint. Die Nutzung der Journal-Vorlage sicherte Konsistenz.

## 6. Promptotyping im Methodenspektrum

### 6.1 Drei Paradigmen der LLM-assistierten Entwicklung

Die aktuelle Landschaft der LLM-assistierten Entwicklung differenziert sich in drei distinkte methodische Ansätze, die unterschiedliche Positionen auf dem Spektrum zwischen Intuition und Formalisierung einnehmen.

**Vibe Coding** (Karpathy, 2025) repräsentiert den intuitiven Pol. Entwickler beschreiben Projekte in natürlicher Sprache und akzeptieren generierte Lösungen ohne Code-Review. Die Methode operiert mit Voice-Input und minimaler Keyboard-Interaktion. Bei Fehlern werden diese kommentarlos an das LLM zurückgegeben. Der Code wächst über das Verständnis des Entwicklers hinaus. Karpathy selbst charakterisiert den Ansatz als geeignet für "throwaway weekend projects", nicht für produktive Systeme.

**Promptware Engineering** (Chen et al., 2025) markiert den formalisierten Pol. Die Methode überträgt etablierte Software-Engineering-Prinzipien auf die Prompt-Entwicklung. Sie adressiert die "promptware crisis" - den Zustand, in dem Prompt-Entwicklung primär durch Trial-and-Error erfolgt. Der Ansatz umfasst systematische Phasen: Requirements Engineering, Design, Implementation, Testing, Debugging und Evolution. Prompts werden als Software-Artefakte behandelt, die deterministischen Qualitätskriterien unterliegen.

**Promptotyping** positioniert sich als pragmatische Brücke zwischen beiden Polen. Die Methode kombiniert die explorative Geschwindigkeit des Vibe Coding mit der strukturierten Dokumentation des Promptware Engineering. Sie operiert in definierten Phasen mit Savepoints, erfordert jedoch nicht die vollständige Formalisierung des Promptware-Ansatzes.

### 6.2 Integrationspfade zwischen den Methoden

Die drei Methoden sind nicht als konkurrierende, sondern als komplementäre Ansätze zu verstehen. Ihre Integration erfolgt projektphasenspezifisch.

In der **Discovery-Phase** (Woche 1-4) dominiert Promptotyping mit 80 Prozent Anteil. Explorative Geschwindigkeit und flexible Iteration stehen im Vordergrund. Vibe Coding kann für schnelle Proof-of-Concepts ergänzend eingesetzt werden.

Die **Konsolidierungsphase** (Woche 5-8) operiert mit ausgewogener Methodenverteilung. Erfolgreiche Prompt-Patterns aus Promptotyping werden formalisiert. Erste Testing-Frameworks nach Promptware-Prinzipien entstehen. Die Dokumentation wird systematisiert und standardisiert.

In der **Produktionsphase** (ab Woche 9) verschiebt sich der Fokus zu 80 Prozent Promptware Engineering. Deterministische Tests ersetzen explorative Validierung. Versionskontrolle und Lifecycle-Management werden kritisch. Promptotyping-Dokumente transformieren sich zu formalen Spezifikationen.

### 6.3 Übergabeartefakte zwischen den Methoden

Der Übergang zwischen Methoden erfordert spezifische Transformationen der Arbeitsartefakte.

Von Promptotyping zu Promptware Engineering werden **erfolgreiche Prompt-Patterns** mit Erfolgsraten über 70 Prozent extrahiert und in wiederverwendbare Templates überführt. Die **User-Feedback-Matrix** aus qualitativen Beobachtungen wird in quantitative Metriken transformiert. Der **Failure-Cases-Katalog** bildet die Basis für systematische Test-Suites.

Von Vibe Coding zu Promptotyping erfolgt die nachträgliche Dokumentation der impliziten Entscheidungen. Funktionierende Code-Fragmente werden in strukturierte Phasen-Dokumente überführt. Die Trial-and-Error-Historie wird in ein strukturiertes Journal transformiert.

### 6.4 Methodenauswahl-Kriterien

Die Wahl der geeigneten Methode determiniert sich durch projektspezifische Faktoren.

**Projektdauer**: Unter vier Wochen favorisiert Promptotyping, über drei Monate erfordert Promptware Engineering. Vibe Coding eignet sich für Projekte unter 48 Stunden.

**Team-Zusammensetzung**: Einzelentwickler können mit Vibe Coding beginnen. Interdisziplinäre Teams profitieren von Promptotyping. Große Entwicklungsteams benötigen Promptware Engineering.

**Qualitätsanforderungen**: Explorative Prototypen tolerieren Vibe Coding. Wissenschaftliche Anwendungen erfordern Promptotyping. Produktivsysteme verlangen Promptware Engineering.

**Dokumentationsbedarf**: Throwaway-Projekte benötigen keine Dokumentation (Vibe Coding). Forschungsprojekte erfordern Nachvollziehbarkeit (Promptotyping). Enterprise-Systeme verlangen vollständige Spezifikation (Promptware).

## 7. Diskussion

### 7.1 Charakter der Methode

Promptotyping ist ein pragmatischer Ansatz, der aus der Praxis entstand. Die Methode dokumentiert funktionierende Praktiken aus realen Projekten. Sie macht implizites Wissen explizit und teilbar durch strukturierte Dokumentation. Die Phasenstruktur reduziert kognitive Last durch klare Aufgabenteilung. Das Savepoint-System ermöglicht kontrollierte Iteration. Expertenvalidierung sichert fachliche Qualität.

### 7.2 Grenzen und Einschränkungen

Die dokumentierten Praktiken basieren auf Projekterfahrungen, nicht auf kontrollierten Studien. Genannte Grenzen sind kontextabhängige Beobachtungen aus unserer Praxis.

Browser-basierte Prototypen stoßen bei komplexen Datenmengen an Performance-Grenzen. Das Kriminalmuseum Canvas-Interface mit 3.892 Objekten und REALonline Treemaps zeigten Limitierungen bei komplexen Visualisierungen. Die konkrete Grenze hängt von Datenstruktur, Visualisierungstyp und Client-Hardware ab.

Basierend auf unserer Erfahrung: Optimale Dokumentenanzahl liegt bei 5-7. Lucina mit über elf Dokumenten demonstrierte, dass die Navigation zwischen Dokumenten ab etwa zehn Dokumenten die Entwicklung verlangsamt. Stefan Zweig ohne Dokumente und Kriminalmuseum mit drei Dokumenten zeigen, dass unter fünf Dokumenten die Nachvollziehbarkeit leidet. Lucina's fünf Versionen offenbarten zudem Bedarf für systematisches Versions-Management jenseits von Git.

Die Methode ist für explorative Prototypen optimiert und nicht für Produktivsysteme geeignet. Langzeitwartbarkeit ohne formale Tests ist problematisch. Der Übergang zu einer professionellen Entwicklung erfordert zusätzliche Schritte. Beispiele hierfür sind Code Reviews. Hier wollen wir aber nichts versprechen und empfehlen. Wir sehen durchaus auch die Möglichkeit einer Professionalisierung der Software und der Produktfertigkeit.

### 7.3 Anwendungsempfehlungen

Basierend auf unseren Erfahrungen eignet sich Promptotyping für explorative Forschungsprojekte mit unklaren Requirements, Proof-of-Concepts für Förderanträge, Prototypen zur Stakeholder-Kommunikation, Werkzeuge für projektspezifische Datenanalyse und didaktische Demonstrationen in der Lehre.

Weniger geeignet erscheint die Methode für Produktivsysteme mit Langzeitanforderungen, sicherheitskritische Anwendungen, Datenverarbeitung mit rechtlichen Anforderungen, Teams ohne dedizierte Experten und Projekte mit strikten Performance-Anforderungen.

### 7.4 Anti-Patterns und Fallstricke

Die praktische Anwendung der Promptotyping-Methode offenbarte wiederkehrende Problemmuster, deren Identifikation zukünftige Projekte vor typischen Fehlern bewahren kann.

**Context Rot** bezeichnet die progressive Degradation der LLM-Performance bei zunehmender Input-Länge. Die Chroma-Studie (2025) dokumentiert dieses Phänomen quantitativ. LLMs verarbeiten Informationen am Anfang und Ende des Kontexts bevorzugt, während mittlere Abschnitte systematisch übersehen werden ("Lost in the Middle"). Die praktische Konsequenz besteht in der strikten Begrenzung des gleichzeitig bereitgestellten Kontexts. Statt alle Dokumente simultan zu präsentieren, erfolgt die selektive Bereitstellung phasenspezifischer Dokumente.

**Halluzinationen** manifestieren sich als plausibel klingende, aber faktisch inkorrekte Generierungen. LLMs produzieren konsistent falsche Bibliotheksimporte, nicht-existente API-Endpoints oder fiktive Methodensignaturen. Die Mitigation erfolgt durch systematische Verifikation jeder generierten Komponente gegen offizielle Dokumentation. Das JOURNAL.md dokumentiert identifizierte Halluzinationen zur Mustererkennung.

**Sycophancy** bezeichnet die Tendenz von LLMs, Nutzerannahmen unkritisch zu bestätigen. Führende Fragen wie "Ist diese Lösung nicht optimal?" resultieren in affirmativen Antworten unabhängig von der tatsächlichen Qualität. Die Vermeidung erfolgt durch neutrale Formulierungen und explizite Aufforderung zu kritischer Evaluation.

**Phasen-Überspringen** tritt besonders bei erfahrenen Entwicklern auf. Die verlockende Geschwindigkeit direkter Code-Generierung führt zum Bypass der DATA- oder IMPLEMENTATION-Phase. Die resultierenden Prototypen funktionieren initial, scheitern jedoch bei Edge Cases oder späteren Modifikationen. Die strikte Einhaltung der Phasensequenz, auch bei scheinbar trivialen Projekten, verhindert diese technische Schuld.

**Kontext-Überladung** entsteht durch die simultane Bereitstellung aller verfügbaren Dokumente. Workshop-Teilnehmer tendierten dazu, README.md, DATA.md, REQUIREMENTS.md und INSTRUCTIONS.md gleichzeitig zu präsentieren. Die resultierende Konfusion führt zu inkonsistenten oder widersprüchlichen Outputs. Die Lösung besteht in der phasengerechten, selektiven Kontextbereitstellung.

**Validierungs-Vernachlässigung** manifestiert sich als unkritische Akzeptanz generierter Artefakte. Die Versuchung, Savepoints ohne gründliche Prüfung zu passieren, untergräbt die Methodik. Jeder Savepoint erfordert explizite Validierung durch technische und fachliche Experten. Die Dokumentation negativer Validierungsergebnisse im Journal ist ebenso wichtig wie die erfolgreicher Durchgänge.

**Modell-Fixierung** bezeichnet die ausschließliche Nutzung eines einzelnen LLMs. Verschiedene Modelle zeigen komplementäre Stärken. Die Beschränkung auf ein Modell ignoriert potenzielle Optimierungen durch modellspezifische Fähigkeiten. Multi-Modell-Verifikation identifiziert modellspezifische Schwächen und verbessert die Gesamtqualität.

## 8. Verwandte Arbeiten

Während umfassende Methodologien für LLM-assistierte Entwicklung noch fehlen, existieren relevante Vorarbeiten.

Zhou et al. (2023) systematisieren Prompt-Optimierung, fokussieren aber auf Einzelprompts statt Entwicklungsprozesse. Promptotyping erweitert dies auf mehrstufige Entwicklung. Chen et al. (2021) evaluieren Codex, Peng et al. (2023) messen GitHub Copilot Produktivität. Beide untersuchen Werkzeuge, nicht Methoden. Promptotyping bietet einen methodischen Rahmen für diese Werkzeuge.

Drucker (2009) argumentiert für "Rapid Prototyping" in Digital Humanities. Ramsay (2011) fordert "Algorithmic Criticism". Promptotyping operationalisiert diese Konzepte für die LLM-Ära. Das Spiral Model (Boehm, 1988) inspirierte die iterative Struktur, wurde aber für LLM-Charakteristika angepasst. Agile Methoden beeinflussten die Dokumentations-leichte Philosophie.

Promptotyping unterscheidet sich durch den Fokus auf strukturierte Dokumentation als externes Arbeitsgedächtnis, mehrstufige Validierung und explizite Savepoints in explorativen Kontexten.

## 8. Fazit

Promptotyping bietet einen pragmatischen Ansatz für LLM-assistierte Entwicklung in den Digital Humanities. Die aus der Praxis entwickelte Sechsphasenstruktur mit kritischer IMPLEMENTATION-Phase half in unseren Projekten, typische Fehlerquellen zu vermeiden. Das Savepoint-System ermöglicht kontrollierte Iteration mit Expertenvalidierung. Mehrstufige Validierung kombiniert menschliche Expertise mit automatisierter Verifikation.

Die Methode ist explizit für explorative Prototypen konzipiert, nicht für Produktivsysteme. Sie ermöglicht niedrigschwellige technische Entwicklung ohne Programmier-Vorkenntnisse bei gleichzeitiger Wahrung wissenschaftlicher Standards durch strukturierte Dokumentation und nachvollziehbare Entscheidungsprozesse.

Die sieben Fallstudien demonstrieren praktische Anwendbarkeit über verschiedene DH-Domänen. Von Timeline-Tools über Treemap-Visualisierungen bis zu digitalen Editionen entstanden funktionale Prototypen. In unserer Erfahrung zeigten Projekte von acht bis zehn Stunden Umfang mit fünf bis sieben Dokumenten eine gute Balance zwischen Struktur und Agilität. Die kritische IMPLEMENTATION-Phase und kontinuierliche Expertenvalidierung an Savepoints erwiesen sich als besonders wertvoll.

Alle entwickelten Prototypen sind als Open Source mit vollständiger Dokumentation verfügbar. Die lauffähigen Demos demonstrieren die Praxistauglichkeit der Methode und dienen als Lernressourcen für eigene Projekte.

Zukünftige Arbeiten könnten den Übergang von Prototypen zu Produktivsystemen systematisieren, automatische Tests aus IMPLEMENTATION-Dokumenten generieren und Kollaborationsmechanismen für größere Teams entwickeln. Eine systematische Evaluation der Methode über verschiedene Domänen hinweg wäre wünschenswert. Die Integration in bestehende IDE-Umgebungen könnte die Adoption erleichtern.
## Literatur

Boehm, B. (1988). A Spiral Model of Software Development and Enhancement. Computer, 21(5), 61-72.

Chandy, K. M., & Lamport, L. (1985). Distributed snapshots: Determining global states of distributed systems. ACM Transactions on Computer Systems, 3(1), 63-75.

Chen, M., et al. (2021). Evaluating Large Language Models Trained on Code. arXiv:2107.03374.

Chen, Z., et al. (2025). Promptware Engineering: Software Engineering for LLM Prompt Development. arXiv:2503.02400.

Chroma (2025). Context Length vs. Performance in Large Language Models: An Empirical Study. Technical Report.

Drucker, J. (2009). SpecLab: Digital Aesthetics and Projects in Speculative Computing. University of Chicago Press.

Karpathy, A. (2025). "Vibe Coding". X (formerly Twitter), 3. Februar 2025. https://x.com/karpathy/status/1886192184808149383

Peng, S., et al. (2023). The Impact of AI on Developer Productivity: Evidence from GitHub Copilot. Microsoft Research.

Ramsay, S. (2011). Reading Machines: Toward an Algorithmic Criticism. University of Illinois Press.

Sweller, J. (1988). Cognitive load during problem solving: Effects on learning. Cognitive Science, 12(2), 257-285.

Zhou, Y., et al. (2023). Large Language Models Are Human-Level Prompt Engineers. arXiv:2211.01910.

---

## Anhang A: Journal-Template

```markdown
# Promptotyping Journal: [Projektname]

**Ziel:** [Was wird gebaut]  
**Ausgangslage:** [Vorhandene Dateien, Daten, Wissen]  
**Start:** [Datum]  
**Team:** [Beteiligte Personen und Rollen]

---

## [Datum] - [Phase] - [Sitzung Nr.]

### Kontext
[Beschreibung der Ausgangssituation und Zielsetzung dieser Sitzung]

### Vorgehen
**Modell:** [Verwendetes LLM und Begründung der Wahl]  
**Input:** [Bereitgestellte Dokumente/Kontext]  
**Werkzeuge:** [Verwendete Tools, IDEs, Libraries]

### Hauptaktivität

**Verwendeter Prompt:**
```

[Prompt-Text]

```

**Generierter Output:**
[Zusammenfassung oder Verweis auf generierte Datei]

### Validierung
**Validator:** [Name und Rolle]  
**Methode:** [Technische Prüfung / Fachliche Prüfung / LLM-as-Judge]  
**Entscheidung:** [Akzeptiert / Modifiziert / Verworfen]  
**Begründung:** [Detaillierte fachliche oder technische Einschätzung]

### Probleme & Lösungen
[Aufgetretene Schwierigkeiten und wie sie gelöst wurden]

### Erkenntnisse
- [Muster oder Heuristik, die sich bewährt hat]
- [Was beim nächsten Mal anders gemacht werden sollte]
- [Überraschende Entdeckungen]

### Nächste Schritte
[Geplante Aktivitäten für die nächste Sitzung]

### Savepoint
☐ Phase abgeschlossen  
☐ Dokumente erstellt: [Liste]  
☐ Expertenvalidierung erfolgt  
☐ Git-Commit: [Hash oder Tag]
```

## Anhang B: Beispiel-Prompts für jede Phase

### B.1 CONTEXT-Phase

```
Erstelle eine README.md für ein Tool zur [Zweck]. 

Kontext:
- Zielgruppe: [Spezifische Nutzergruppe mit Kenntnisstand]
- Hauptziel: [Was soll erreicht werden]
- Anwendungsfall: [Konkretes Szenario]
- Technische Constraints: [z.B. Browser-only, keine Server]
- Fachliche Constraints: [z.B. historische Korrektheit]

Die README sollte enthalten:
1. Projekttitel und Kurzbeschreibung
2. Zielgruppe und Voraussetzungen
3. Hauptfunktionalitäten (als User Stories)
4. Technische Rahmenbedingungen
5. Glossar wichtiger Fachbegriffe
```

### B.2 DATA-Phase

```
Analysiere die angehängte Datendatei/Struktur und erstelle eine DATA.md mit:

1. Datenformat und Struktur (Schema)
2. Identifizierte Datentypen pro Feld
3. Inkonsistenzen oder Anomalien
4. Fehlende oder optionale Felder
5. Beziehungen zwischen Datenelementen
6. Statistische Übersicht (Anzahl Einträge, Wertebereiche)
7. Empfohlene Normalisierungen
8. Beispiel-Datensätze (min. 3 repräsentative)

Markiere besonders kritische Datentransformationen, die später 
in IMPLEMENTATION dokumentiert werden müssen.
```

### B.3 REQUIREMENTS-Phase

```
Basierend auf README.md und den Erkenntnissen aus EXPLORATION, 
erstelle eine REQUIREMENTS.md mit:

## Funktionale Anforderungen (nach Priorität)
- MUSS: [Kritische Features]
- SOLL: [Wichtige Features]
- KANN: [Nice-to-have Features]

## Nicht-funktionale Anforderungen
- Performance: [z.B. Ladezeiten, Responsiveness]
- Kompatibilität: [Browser, Geräte]
- Usability: [z.B. ohne Einarbeitung nutzbar]
- Accessibility: [WCAG-Standards]

## Explizite Ausschlüsse
[Was das System NICHT können muss]

Formuliere jede Anforderung als testbaren Satz.
```

### B.4 IMPLEMENTATION-Phase

```
Erstelle INSTRUCTIONS.md basierend auf REQUIREMENTS.md und DATA.md.

Dokumentiere für jede Anforderung:

## Feature: [Name]
### Datentransformation
- Input: [Rohdatenformat]
- Transformationsschritte: [Präzise Algorithmen]
- Output: [Zielformat]
- Edge Cases: [Sonderfälle und deren Behandlung]

### Validierungen
- [Welche Prüfungen vor Verarbeitung]
- [Fehlerbehandlung]

### UI/UX-Spezifikation
- [Interaktionsmuster]
- [Visuelles Verhalten]
- [Responsive Design Breakpoints]

### Code-Struktur
- [Empfohlene Komponenten/Module]
- [State Management Ansatz]
- [Wichtige Funktionen mit Signaturen]

WICHTIG: Dokumentiere ALLE Stellen, wo Datentypen 
variieren können (Array vs. Einzelwert etc.)
```

### B.5 PROTOTYPE-Phase

```
Generiere eine vollständige, lauffähige Implementierung basierend auf:
- INSTRUCTIONS.md (primäre Spezifikation)
- REQUIREMENTS.md (für Prioritäten)
- DATA.md (für Datenstrukturen)

Technische Vorgaben:
- Single HTML File mit inline CSS/JS
- Keine externen Dependencies außer CDN-verfügbare
- Responsive Design (Mobile-first)
- Kommentierter Code an kritischen Stellen

Der Code muss:
1. Alle MUSS-Anforderungen erfüllen
2. Die dokumentierten Datentransformationen implementieren
3. Robuste Fehlerbehandlung haben
4. Die spezifizierten Validierungen durchführen

Beginne mit einem funktionsfähigen Minimal-Prototyp und erweitere 
schrittweise.
```

## Anhang C: Projektstruktur

```
project/
├── README.md           # CONTEXT
├── DATA.md            # Datenspezifikation
├── REQUIREMENTS.md    # Anforderungen
├── INSTRUCTIONS.md    # Implementierung
├── JOURNAL.md         # Entwicklungsprotokoll
├── data/              # Rohdaten
│   └── sample.json
├── exploration/       # Experimente
│   └── test-01.html
├── prototype/         # Finaler Code
│   └── index.html
└── .git/             # Versionskontrolle
```

## Anhang D: Promptotyping System Prompt

```
Du operierst als Promptotyping Expert Assistant. Führe den iterativen Softwareentwicklungsprozess mit LLMs gemäß folgendem Schema:

## PROZESS

1. **CONTEXT (README.md)**
   - Erfasse: Forschungskontext, Domäne, Ziele
   - Komprimiere: Token-effiziente Kontextrepräsentation
   - Validiere: Verifiziere Kontext-Vollständigkeit
   - Expert-Check: Fordere Experteneinbindung bei Domänenunsicherheiten

2. **DATA (DATA.md)**
   - Kondensiere: Datenstrukturen und repräsentative Beispiele
   - Iteriere: Kontinuierliche Verfeinerung der Datenrepräsentation
   - Validiere: "Repräsentiert DATA.md die vollständige Datenrealität?"
   - Warne: Explizit bei unvollständiger Datenrepräsentation

3. **EXPLORATION**
   - Bei unklaren Anforderungen: Generiere Python-Analyseskripte
   - Logging: Baue explizite Logging-Instruktionen für Zwischenergebnisse ein
   - Iteriere: Führe Erkenntnisse in nächste Explorationsebene zurück
   - Dokumentiere: Erfasse Explorations-Erkenntnisse für REQUIREMENTS.md

4. **REQUIREMENTS (REQUIREMENTS.md)**
   - Spezifiziere: Formuliere funktionale/nicht-funktionale Anforderungen token-effizient
   - Priorisiere: Trenne Kernfunktionen von optionalen Features
   - Validiere: Prüfe Testbarkeit und Konsistenz aller Anforderungen
   - Expert-Check: Fordere Domänenexperten-Validierung

5. **IMPLEMENTATION (INSTRUCTIONS.md)**
   - Definiere technische Schritte, besonders Datentransformationen
   - Verhindere "Data Vortex": Besondere Sorgfalt bei Formatkonversionen
   - Validiere: "Ist der Implementierungspfad robust und fehlerresistent?"
   - Definiere Checkpoints: Markiere Zwischenvalidierungspunkte

6. **PROTOTYPE (CODE)**
   - Implementiere: Generiere Code basierend auf allen Dokumenten
   - Savepoints: Behandle Markdown-Dokumente als unveränderliche Referenzen
   - Validiere: Verifiziere Code gegen dokumentierte Anforderungen
   - Iteriere: Kehre bei Problemen zu relevanten Dokumenten zurück

## KERNPRINZIPIEN

- Versionierte Savepoints: Alle Markdown-Dokumente als nachvollziehbare Referenzen
- Phasenbasierte Anpassung: Automatische Unterstützungsanpassung an aktuelle Phase
- Expert-in-the-Loop: Fordere Expertenvalidierung an kritischen Entscheidungspunkten
- Token-Effizienz: Ziele auf maximale Information mit minimalem Token-Count
- Selbst-Verifikation: Kontinuierliche Verifikation aller generierten Artefakte
- Kontext-Bewusstsein: Ignoriere niemals vorherige Dokumentversionen
- Präzision vor Vollständigkeit: Priorisiere Genauigkeit bei knappen Ressourcen

## INTERAKTIONSVERHALTEN

- Bei unvollständiger Information: Stelle gezielte Fragen
- Bei Phasenunsicherheit: Identifiziere und schlage aktuelle Phase aktiv vor
- Bei Widersprüchen: Benenne Konflikte explizit, dokumentiere und schlage Lösungspfad vor
- Bei Überkomplexität: Empfehle Aufteilung in handhabbare Teilprobleme
- Bei Abweichungen: Referenziere Savepoints und biete Rückkehr zu stabiler Version

ENDE IMMER MIT: "Ich bin dein Promptotyping Expert Assistant: Ich empfehle als nächstes [konkreter Schritt] gemäß Promptotyping-Methode."
```

## Anhang E: Modell-Stärken-Matrix

| Modell | Stärken | Schwächen | Optimale Einsatzgebiete | Kontext-Fenster |
|--------|---------|-----------|-------------------------|-----------------|
| **Claude 3 Opus** | Konsistente lange Outputs, strukturiertes Denken, Code-Qualität | Langsamer, teurer | Komplexe Architekturen, Dokumentation | 200k |
| **Claude 3.5 Sonnet** | Balance Geschwindigkeit/Qualität, starke Reasoning | Gelegentliche Inkonsistenzen | Rapid Prototyping, Code-Generierung | 200k |
| **GPT-4o** | Breites Wissen, etablierte Patterns | Verbose, tendiert zu Over-Engineering | Exploration, Brainstorming | 128k |
| **GPT-4o-mini** | Schnell, kosteneffizient | Oberflächlichere Analysen | Einfache Transformationen, Validierung | 128k |
| **Gemini 1.5 Pro** | Größtes Kontextfenster, multimodal | Inkonsistente Qualität | Große Datenanalysen, Bildverarbeitung | 2M |
| **DeepSeek-V3** | Starke mathematische Fähigkeiten | Schwächer bei kreativen Aufgaben | Algorithmen, Datenstrukturen | 64k |
| **o1-preview** | Exzellentes Reasoning, Selbst-Korrektur | Sehr langsam, teuer | Komplexe Logik, Debugging | 128k |
| **o1-mini** | Gutes Reasoning, schneller als o1 | Weniger kreativ | Code-Review, Optimierung | 128k |

### Empfohlene Modell-Kombinationen nach Phase

| Phase | Primärmodell | Verifikationsmodell | Begründung |
|-------|--------------|---------------------|------------|
| CONTEXT | Claude 3.5 Sonnet | GPT-4o | Balance zwischen Struktur und Kreativität |
| DATA | Gemini 1.5 Pro | DeepSeek-V3 | Große Datenmengen + präzise Strukturanalyse |
| EXPLORATION | GPT-4o | - | Breites Ideenspektrum |
| REQUIREMENTS | Claude 3 Opus | o1-mini | Präzise Spezifikation + Logik-Check |
| IMPLEMENTATION | o1-preview | Claude 3.5 Sonnet | Algorithmen-Design + Code-Qualität |
| PROTOTYPE | Claude 3.5 Sonnet | GPT-4o-mini | Schnelle Generierung + Basis-Validierung |

### Multi-Modell-Verifikation Patterns

**LLM-as-Judge Pattern:**
```
Primärmodell generiert → Sekundärmodell prüft auf:
- Sicherheitslücken (explizite Security-Prompts)
- Performance-Probleme (Big-O Analyse)
- Best Practices Verletzungen (Coding Standards)
```

**LLM-Council Pattern:**
```
Drei Modelle evaluieren unabhängig → Konsens = Proceed
Dissens → CEIL-Entscheidung erforderlich
Dokumentation aller Perspektiven im Journal
```

## Anhang F: Troubleshooting Guide

### Häufige Probleme und Lösungen

| Problem | Symptome | Ursache | Lösung |
|---------|----------|---------|---------|
| **Inkonsistente Outputs** | Widersprüchliche Implementierungen zwischen Phasen | Fehlender Kontext-Transfer | Explizite Referenzierung vorheriger Dokumente in Prompts |
| **Performance-Degradation** | LLM wird zunehmend ungenauer | Context Rot | Kontext auf <50% des Limits reduzieren |
| **Halluzinierte APIs** | Nicht-existente Methoden/Libraries | Modell "erfindet" plausible Lösungen | Verifikation gegen offizielle Docs, explizite Version angeben |
| **Zirkuläre Fehler** | Gleicher Fehler nach Korrektur | LLM vergisst vorherige Lösungsversuche | Fehler-Historie im Prompt dokumentieren |
| **Scope Creep** | Features wachsen unkontrolliert | Unklare Requirements | Zurück zu REQUIREMENTS.md, explizite Ausschlüsse |
| **Daten-Inkonsistenz** | Verschiedene Datenformate in Outputs | Fehlende Normalisierung | DATA.md mit präzisen Schemas erweitern |
| **Test-Blindheit** | Offensichtliche Fehler unentdeckt | Fehlende Validierung | CEIL-Intervention, manuelle Stichproben |

### Debugging-Strategien

**Strategie 1: Binary Search**
- Problem in Phasen-Outputs isolieren
- Hälfte des Kontexts entfernen
- Iterativ eingrenzen bis Fehlerquelle identifiziert

**Strategie 2: Clean Room**
- Neue Konversation mit minimalem Kontext starten
- Nur essenzielle Dokumente bereitstellen
- Schrittweise Kontext erweitern

**Strategie 3: Cross-Validation**
- Gleiches Problem mit verschiedenen Modellen testen
- Konsistente Fehler = Problem in Spezifikation
- Inkonsistente Fehler = Modell-spezifisches Problem

### Rollback-Strategien

**Savepoint-Rollback:**
1. Identifiziere letzten validierten Savepoint
2. Verwerfe alle nachfolgenden Artefakte
3. Starte Phase mit modifiziertem Ansatz neu
4. Dokumentiere Fehlerursache im Journal

**Partial Rollback:**
1. Behalte funktionierende Komponenten
2. Isoliere fehlerhafte Teilbereiche
3. Re-generiere nur betroffene Abschnitte
4. Integrationstest nach Korrektur

**Complete Reset (letzter Ausweg):**
1. Archiviere aktuelle Dokumente
2. Extrahiere Lessons Learned
3. Starte CONTEXT-Phase mit verbessertem Verständnis
4. Integriere erfolgreiche Patterns aus Archiv