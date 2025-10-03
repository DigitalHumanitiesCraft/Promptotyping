# Promptotyping

<p class="subtitle">Ein Praxisbericht zur strukturierten LLM-assistierten Entwicklung in den Digital Humanities</p>

---

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

<div class="use-case-placeholder" data-id="szd"></div>

**Stefan Zweig Digital** (2h) testete minimalen Ansatz ohne Dokumentation. Das Timeline-Tool für die digitale Nachlassrekonstruktion funktionierte initial, war aber nach zwei Wochen selbst für den Entwickler schwer nachvollziehbar. Dieses Experiment demonstrierte die Grenzen des reinen "Vibe Coding".

<div class="use-case-placeholder" data-id="realonline"></div>

**REALonline Rauminventare** (5h, 6 Dokumente) visualisierte mittelalterliche Objektverteilungen in österreichischen Adelshäusern von 1432 bis 1602. Die strukturierte Dokumentation ermöglichte erfolgreiche Iteration nach Expertenintervention. Der Historiker korrigierte unsere technischen Annahmen über Objekthierarchien und präferierte historische Begriffe statt moderner Kategorien.

<div class="use-case-placeholder" data-id="aldersbach"></div>

**Aldersbach Kloster** (8h, 7 Dokumente) integrierte heterogene Quelltypen in ein Annotationstool. Die systematische DATA-Phase half bei der Normalisierung inkonsistenter Datenformate aus verschiedenen Archivbeständen.

<div class="use-case-placeholder" data-id="cvma"></div>

**CVMA Glasfenster** (8h, 5 Dokumente) demonstrierte erfolgreiche Mensch-KI-Kollaboration beim Corpus Vitrearum Medii Aevi. SPARQL-Queries für den NFDI4Culture Knowledge Graph entstanden in drei Iterationsschleifen zwischen menschlicher Validierung und LLM-Optimierung. Die 29MB JSON-LD Verarbeitung erforderte Python-Preprocessing.

<div class="use-case-placeholder" data-id="km"></div>

**Kriminalmuseum** (10h, 3 Dokumente) entwickelte ein digitales Archiv der Hans Gross Sammlung mit 3.892 Objekten. Mit nur DATA.md, DESIGN.md und README.md entstand zwar ein funktionales Dual-Interface mit traditioneller Suche und Canvas-Explorer, die fehlende IMPLEMENTATION.md erschwerte jedoch spätere Anpassungen.

<div class="use-case-placeholder" data-id="lucina"></div>

**Lucina Edition** (25h, 11+ Dokumente) entwickelte eine TEI-konforme digitale Edition des Madrid BN Mss. 6028 mit 128 neulateinischen Gedichten. Fünf dokumentierte Iterationen führten von der Basis-Konversion bis zur vollständigen Edition mit Prosopographie und metrischer Analyse. Die hohe Dokumentenanzahl machte Koordination zunehmend komplex.

**REALonline Iteration 2** (8h, 7 Dokumente) validierte die verbesserte Methode. Mit vollständigem Dokumentsatz und aktivem JOURNAL.md entstand eine robustere Architektur mit besserer Treemap-Visualisierung.

### 2.2 Kernerkenntnisse aus der Projektpraxis

In unserer Erfahrung zeigten Projekte mit fünf bis sieben Dokumenten optimale Balance zwischen Struktur und Agilität. Unter fünf Dokumenten litt die Nachvollziehbarkeit (Stefan Zweig Digital, Kriminalmuseum), über zehn Dokumente erschwerten die Navigation (Lucina Edition).

Die IMPLEMENTATION-Phase mit expliziter Dokumentation von Datentransformationen half, typische Fehlerquellen zu vermeiden. Im REALonline-Projekt verhinderte die dokumentierte Normalisierung inkonsistenter JSON-Typen spätere Laufzeitfehler. Das JOURNAL.md ermöglichte Wiederaufnahme nach Pausen und Wissenstransfer zwischen Entwicklern.

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

## 9. Fazit

Promptotyping bietet einen pragmatischen Ansatz für LLM-assistierte Entwicklung in den Digital Humanities. Die aus der Praxis entwickelte Sechsphasenstruktur mit kritischer IMPLEMENTATION-Phase half in unseren Projekten, typische Fehlerquellen zu vermeiden. Das Savepoint-System ermöglicht kontrollierte Iteration mit Expertenvalidierung. Mehrstufige Validierung kombiniert menschliche Expertise mit automatisierter Verifikation.

Die Methode ist explizit für explorative Prototypen konzipiert, nicht für Produktivsysteme. Sie ermöglicht niedrigschwellige technische Entwicklung ohne Programmier-Vorkenntnisse bei gleichzeitiger Wahrung wissenschaftlicher Standards durch strukturierte Dokumentation und nachvollziehbare Entscheidungsprozesse.

Die sieben Fallstudien demonstrieren praktische Anwendbarkeit über verschiedene DH-Domänen. Von Timeline-Tools über Treemap-Visualisierungen bis zu digitalen Editionen entstanden funktionale Prototypen. In unserer Erfahrung zeigten Projekte von acht bis zehn Stunden Umfang mit fünf bis sieben Dokumenten eine gute Balance zwischen Struktur und Agilität. Die kritische IMPLEMENTATION-Phase und kontinuierliche Expertenvalidierung an Savepoints erwiesen sich als besonders wertvoll.

Alle entwickelten Prototypen sind als Open Source mit vollständiger Dokumentation verfügbar. Die lauffähigen Demos demonstrieren die Praxistauglichkeit der Methode und dienen als Lernressourcen für eigene Projekte.

Zukünftige Arbeiten könnten den Übergang von Prototypen zu Produktivsystemen systematisieren, automatische Tests aus IMPLEMENTATION-Dokumenten generieren und Kollaborationsmechanismen für größere Teams entwickeln. Eine systematische Evaluation der Methode über verschiedene Domänen hinweg wäre wünschenswert. Die Integration in bestehende IDE-Umgebungen könnte die Adoption erleichtern.