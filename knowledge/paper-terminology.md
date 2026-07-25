---
title: Paper Terminology
project:
  name: Promptotyping Site
  repository: https://github.com/DigitalHumanitiesCraft/Promptotyping
status: working
language: de
version: 0.1
created: 2026-07-25
updated: 2026-07-25
authors: [Christopher Pollin]
generated-with: Claude Code mit Claude Opus 5
method:
  name: Promptotyping
  url: https://dhcraft.org/Promptotyping/
related: [paper, paper-writing, journal]
---

# Paper Terminology

Arbeitsblatt zur Begriffsklärung am Papertext ([paper.md](paper.md)). Jeder Eintrag führt die englische Originalform, wie sie im Paper steht, die Fundstelle, die Definition im aktuellen Textstand, die Quelle und den Status.

Statuscodes:

- `[G]` geklärt und am 2026-07-25 eingearbeitet
- `[S]` steht im Paper und ist noch nicht besprochen
- `[O]` Entscheidung des Operators steht aus
- `[Q]` Definition steht, Beleg fehlt
- `[E]` Eigenprägung ohne Fremdquelle, bewusst oder ungeprüft

## A. Tragende Termini

**Promptotyping** `[G]`, Titel, Abstract, §1, §3.2. Iterative, dokumentgetriebene Context-Engineering-Methode, verortet im Agentic Engineering, mit der Forschende ihre strukturierten Forschungsdaten in funktionale Forschungsartefakte übersetzen. Arbeitseinheit ist ein kleiner Satz versionierter Markdown-Dokumente, aus denen die Implementierung abgeleitet wird. Quelle: Eigendefinition, dieses Paper als kanonische Fassung, Vorläufer Pollin 2025b, 2025d, 2026b.

**Promptotype** `[G]`, §2.2, §6.1. Das Erzeugnis einer Iteration, ein Forschungsartefakt, das aus den Dokumenten regeneriert statt gepflegt wird. Sein Ertrag ist das Verständnis über die Daten, die Forschungsfrage und den Möglichkeitsraum, und dieses Verständnis nehmen die Dokumente auf. Quelle: Eigendefinition, provisorischer Status über Hinrichs, Forlini und Moynihan 2019 (sandcastle) gedeckt.

**Research Artefact** (Forschungsartefakt) `[G]`, Titel, §1, §4.1. Offene Gattung mit Software als Regelfall, entschieden am 2026-07-25. Das Artefakt ist das, wozu die Dokumente für den Forschungskontext eines Projekts gemacht werden, an dessen Daten gebunden und auf ihnen arbeitend; meist Software, durch die die Daten explorierbar, analysierbar oder editierbar werden, ebenso ein Workflow, ein Datenmodell, ein abgeleiteter Datensatz oder eine aus den Daten generierte Beschreibung. Die Bindung erfolgt an den Forschungskontext und nicht an eine Forschungsfrage, weil der explorative Fall die Frage erst hervorbringt. §4.1 grenzt nur noch gegen das generische Werkzeug ab. Quelle: keine, Eigenprägung.

**Research Data** (Forschungsdaten) `[G]`, §2.3. Repräsentationen von Beobachtungen, Objekten oder anderen Entitäten, die als Evidenz für Phänomene in Forschung verwendet werden (Borgman 2015), funktional geschärft als alle in wissenschaftlicher Arbeit anfallenden oder verwendeten Daten, deren Aufbereitung, Kontextualisierung und Dauerhaftigkeit nötig sind, um Befunde zu begründen, Geltungsansprüche samt Verzerrungen und Provenienz zu prüfen und den Forschungsprozess unter FAIR und CARE reproduzierbar und nachnutzbar zu machen (Geiger 2023). Geisteswissenschaftliche Form nach Schöch 2013, selektiv konstruierte, maschinenverarbeitbare Abstraktion.

**Research Context** (Forschungskontext) `[G]`, §2.5. Die Fragen, die ein Projekt an sein Material stellt, das Domänenwissen dahinter und die Standards, denen seine Daten folgen. Am 2026-07-25 aufgelöst, weil der Begriff vorher nur verwendet wurde. Er trägt seither auch die Bindung des Forschungsartefakts und den Ertrag des Promptotyps, wo zuvor die engere Forschungsfrage stand.

**Context Engineering** `[G]`, §2.5. Systematischer Entwurf und Verwaltung der Kontextinformation, die einem LLM zur Inferenzzeit übergeben wird (Mei et al. 2025). Promptotyping ist eine domänenspezifische Instanz davon.

**Agentic Engineering** und **Agent** `[G]`, §2.5. Entwicklungspraxis, in der LLM-Agenten die ausführende Instanz sind und die menschliche Arbeit sich auf Spezifizieren, Steuern und Verifizieren verschiebt. Ein Agent ist ein Sprachmodell, das über mehrere Schritte auf ein Ziel hinarbeitet, indem es Werkzeuge in einer Umgebung aufruft und deren Antworten in den eigenen Kontext zurücknimmt, ohne schrittweise angewiesen zu werden. Vier Merkmale spannen einen Gradienten, Werkzeugzugriff, Rückmeldung der Umgebung, Zielverfolgung über mehrere Schritte, Autonomiespanne zwischen zwei menschlichen Eingriffen. Methodisch entscheidend ist die Autonomiespanne, weil sie bestimmt, wie viel Intention vor Arbeitsbeginn schriftlich vorliegen muss. Quelle: keine, Branchenusus, im Paper ausdrücklich als solcher markiert.

**Self-Contained Static Web Tool** `[G]`, Abstract, §4.1. Satz aus HTML, CSS und JavaScript mit eingebetteten oder aus Flat Files geladenen Forschungsdaten, auf jedem statischen Host deploybar und aus einem lokalen Ordner lauffähig. Begründeter Default, nicht Wesensmerkmal, mit drei Gründen (einpassige Generierbarkeit, Publizierbarkeit ohne Infrastruktur, Haltbarkeit). Nebenformen sind Pipeline, deterministisch generiertes Dokument, Notebook und Custom GPT, jeweils dort, wo eine Bedingung des Defaults bricht. Quelle: Andorfer 2026 für die Definition von statisch, Risam und Gil 2022, Holmes und Takeda 2023 für die Haltbarkeit.

**Handover Point** (Übergabepunkt) `[G]`, §4.3. Kein Größenmaß, sondern der Wechsel des Verpflichtungsregimes, an dem die Standards des Research Software Engineering greifen. Fünf unabhängig kippende Achsen: Wartungspflicht über die Projektlaufzeit hinaus, Fremdnutzung mit Supporterwartung, Mehrbenutzerbetrieb über geteilten Zustand, Verantwortung für fremde Daten, institutioneller Betrieb mit Verfügbarkeitszusage. Die Standards gelten nach dem, was das Artefakt geworden ist, unabhängig vom Werkzeug seiner Entstehung. Quelle: Eigenprägung, Anschluss an Baxter et al. 2012 und Cohen et al. 2021.

**Research Software Engineering** `[S]`, §1, §4.3, §6.5. Institutionalisierte Vermittlerprofession zwischen fachwissenschaftlichen Anforderungen und technischer Umsetzung (Baxter et al. 2012; Cohen et al. 2021).

**Critical Expert in the Loop** `[G]`, §2.5, §3.4, §6.2. Rolle, die die Methode voraussetzt, vom generischen Human in the Loop unterschieden durch die Verbindung von Domänenexpertise mit Kenntnis der modellspezifischen Fehlermodi. Ihre Aufgabe reicht über die Prüfung von Ausgaben hinaus in den nicht explorierten Möglichkeitsraum. Quelle: Pollin 2025c.

## B. Epistemischer Rahmen

**Generous Interface** `[S]`, §2.1, §4.2. Schnittstelle, die die Sammlung zeigt, zum Browsen einlädt und die Besucherin belohnt, die noch nicht weiß, wonach sie fragen soll (Whitelaw 2015).

**Sandcastle** und das Vorläufige `[G]`, §2.1, §6.1. Visualisierung als eigenständiger Forschungsprozess, dessen Wert im Bauen liegt und dessen Vergänglichkeit zur Gattung gehört (Hinrichs, Forlini und Moynihan 2019); Unfertigkeit als epistemischer Wert (König 2026).

**capta** gegen **data** `[G]`, §2.1. Die Geisteswissenschaften handeln mit capta, dem Aufgezeichneten oder Gesammelten, während data das Gegebene benennt; ererbte visuelle Konventionen schmuggeln positivistische Annahmen in geisteswissenschaftliches Material (Drucker 2011; Drucker 2014). Im Paper wörtlich geführt.

**Prototype as Argument** `[S]`, §2.2. Ein Prototyp kann ein Argument verkörpern, Designentscheidungen behaupten etwas über das Material, das sie organisieren (Galey und Ruecker 2010; Typologie Ruecker 2015).

**Digital Tool Criticism** `[S]`, §2.2, §6.2. Forderung, zu reflektieren, was ein Werkzeug mit dem Material macht, welche Annahmen es einbettet und ob es zur Forschungsfrage passt (Koolen, van Gorp und van Ossenbruggen 2019; van Es, Wieringa und Schäfer 2018).

**Tool Positivism** `[E]`, §2.2. Annahme, Forschungsprobleme ließen sich auf Werkzeugprobleme reduzieren. Gegenbegriff des Papers, ohne Fremdquelle.

**Operationalisation** `[G]`, §2.3, §2.6. Systematische Entwicklung von Messverfahren für abstrakte Konzepte, die diese über definierte Prozeduren in beobachtbare und validierbare Instanzen überführt (Pichler und Reiter 2022).

**Conceptual Model** `[S]`, §2.4. Repräsentation von Domänenideen, die auf natürlicher Sprache ruht, ihre Semantik über das geteilte Vokabular einer Praxisgemeinschaft transportiert und semi-formal ist, weil sie praktische Kommunikation gegen Restambiguität abwägt (Mayr und Thalheim 2021; Pollin 2025b).

**Modelleigenschaften** `[G]`, §2.4. Ein Modell repräsentiert ein Original, es verkürzt und trägt nur die für seinen Zweck relevanten Attribute, und es ist pragmatisch, für jemanden, für eine Zeitspanne und für einen Gebrauch gemacht (Stachowiak 1973, 129–131). Die Verkürzung ist die theoretische Lizenz der Distillation.

**Ontology as explicit specification** `[S]`, §2.4. Ontologie als explizite Spezifikation einer Konzeptualisierung (Gruber 1993); ein Promptotyping-Dokumentensatz ist genau das in natürlicher Sprache, am semi-formalen Ende des Repräsentationsspektrums.

**Boundary Object** `[S]`, §2.4, §6.5, §7. Objekt, plastisch genug für die Bedürfnisse verschiedener Gemeinschaften und robust genug, seine Identität über sie hinweg zu wahren (Star und Griesemer 1989).

**Trading Zone** `[Q]`, §1, §2.4. Zone, in der Historikerinnen und computationale Expertinnen geteilte Bedeutung aushandeln (Kemman 2021). Der Ursprung bei Galison 1997 ist im Paper nicht belegt; Kandidat ungeprüft.

**Translation Problem** `[S]`, §1, §2.4. Zwei Jahrzehnte dokumentierte Vermittlungslücke zwischen Fachwissenschaft und Softwareentwicklung, mit dem professionellen Intermediär (Edmond 2005), den Teamstrukturen (Siemens 2009) und den Trading Zones (Kemman 2021) als den Antworten, die jeweils einen menschlichen Übersetzer installieren.

**FAIR**, **FAIR4RS**, **CARE** `[S]`, §2.3, §4.1, §6.3. Prinzipien für Daten (Wilkinson et al. 2016) und für Forschungssoftware (Chue Hong et al. 2022). Das Paper misst den Artefakttyp daran und findet Accessibility erfüllt, Reusability übererfüllt, Findability standardmäßig verfehlt.

**Context Rot** `[G]`, §2.3, §2.5, §3.2. Nichtuniformer Leistungsabfall von LLMs bei wachsender Eingabelänge (Hong et al. 2025). Technische Begründung der Distillation.

**Vibe Coding** `[S]`, §2.5. Erzeugung von Code aus natürlicher Sprache und Annahme ohne gründliche Prüfung (Karpathy 2025; empirisch Sarkar und Drosos 2025; Fawzy et al. 2025). Im Paper als explorativer Modus innerhalb der Methode erhalten.

**Spec-Driven Development** `[S]`, §2.5. Korrektiv der Softwarebranche gegen ungeprüfte Generierung, Spezifikationen als Source of Truth, aus denen Agenten implementieren (Macedo 2026; Liu et al. 2024). Unterschied zum Promptotyping: das Datendokument beschreibt Quellen, die dem Artefakt vorausgehen, und die Autorität der Leserin ist fachwissenschaftlich statt auftraggebend.

**Sycophancy** `[S]`, §2.5. Neigung, Nutzerannahmen zuzustimmen statt sie zu hinterfragen (Sharma et al. 2023; Fanous et al. 2025).

**Confabulation** `[Q]`, §2.5, §3.2. Erzeugung plausibler, aber falscher Ausgaben. Kein Beleg im Paper; Kandidat Ji et al. 2023 ungeprüft.

**Specification** `[S]`, Fußnote 4. Beschreibung von Daten, Anforderungen und intendiertem Verhalten, explizit und strukturiert genug, um Implementierung anzuleiten (Broy und Kuhrmann 2021), ohne Anspruch auf formale Vollständigkeit.

**Frontier Model** `[S]`, Fußnote 2. Die jeweils aktuelle führende Generation großer Sprachmodelle. Fußnotendefinition ohne Quelle, bewusst.

**Semantic Explicitness** und **Token Economy** `[E]`, §2.3. Die zwei gegenläufigen Dimensionen im Verhältnis von Datenqualität und Generierung. Eigenprägung des Papers; die Belegteile (FAIR, Context Rot, Cremer und Paulmann 2025) stehen.

## C. Die Methode

**Preparation** `[S]`, §3.2. Sammeln und Strukturieren aller Materialien vor technischen Entscheidungen, typischerweise beginnend mit Requirements Engineering. Endet, wenn Repositorystruktur, Datenzugang und dokumentierte Erstanforderungen stehen.

**Exploration** `[G]`, §3.2. Prüft die Schnittstelle zwischen Daten und Forschungskontext. Die Forscherin sichtet die Daten selbst, eigens geschriebene Skripte durchlaufen das Korpus und rendern kompakte Aggregationen, und das Modell erzeugt Mapping-Hypothesen. Endet mit einem dokumentierten Verständnis des Machbaren und entfällt, wo die Daten vertraut sind und die Preparation diese Fragen geklärt hat.

**Distillation** `[G]`, §3.2. Verdichtet das in der Exploration Gelernte in den Dokumentensatz, unter dem Prinzip maximale Information bei minimalen Token. Endet, wenn eine neue Agenteninstanz allein aus Dokumenten und Daten die Projektlogik aufnehmen und ohne zusätzliche Erklärung damit weiterarbeiten könnte.

**Implementation** `[S]`, §3.2. Übergibt die Dokumente an ein agentisches Coding-Werkzeug im Repository und verifiziert das abgeleitete Artefakt, über deterministisches, visuelles und Expertenfeedback. Die Rückschleife zur Distillation ist die Signatur der Methode: ist das Artefakt falsch, war die Spezifikation falsch.

**Promptotyping Document** und **Knowledge Document** (Wissensdokument) `[G]`, §3.3. Ein Promptotyping Document ist ein Wissensdokument, eine strukturierte Wissenseinheit, aus Rohmaterial destilliert und als Kontextartefakt für die zwischen Menschen und Sprachmodellen geteilte Arbeit optimiert, im Vokabular des Context Engineering dauerhaft gemachte Context Compression. Drei Eigenschaften: duale Lesbarkeit, Kompaktheit, Portabilität. Die Promptotyping Documents sind dieser Typ in projektgebundener Form, die versionierten Markdown-Dateien im `knowledge/`-Ordner, versioniert über die git-History. Quelle: Arbeitsdefinition des Operators aus der Context-Engineering-Lehre. Die Namenskollision mit dem deklarativen Untertyp wurde am 2026-07-25 aufgelöst, der Untertyp heißt seither Declarative Documents.

**Dokumenttypologie** `[G]` mit `[Q]`, §3.3. Am 2026-07-25 neu geschnitten. Alle drei Typen sind Wissensdokumente, spezialisiert nach der Art des Wissens, das sie tragen. **Declarative Documents** (vorher Knowledge Documents, umbenannt wegen der Namenskollision mit dem Oberbegriff) tragen Sachwissen über den Gegenstand, darunter `data`, `domain-knowledge`, `project`, `specification`, `user-stories`, `architecture`, `design`, `integration`, `index`, `verification`. **Process Documents** tragen Wissen über den Verlauf der Arbeit, `journal` und `report`. **Action Documents** tragen Wissen darüber, wie zu handeln ist, `action-layer`, `plan`, `testing`, `technology`. Verworfen wurden zwei Ordnungsprinzipien, die Zeitform, weil ein Plan in der Zukunft liegt und trotzdem kein Prozessdokument ist, und die Adressierung, weil sie jede Verbindlichkeit zu einem Action Document macht. Der Beleg für die Herleitung aus dem Knowledge Engineering fehlt weiterhin; Kandidat Studer, Benjamins und Fensel 1998 ungeprüft. Die Diagnosefunktion bleibt, falsche Inhalte verweisen auf die Declarative Documents, falsche Form auf die Action Documents, unklare Entscheidungslogik auf die Process Documents.

**Hand-curated** gegen **deterministically generated** `[S]`, §3.3. Zweite Unterscheidung quer zur Typologie. Deterministisch generierte Dokumente werden aus den Quelldaten durch Skripte gerendert, sind in der Funktion Knowledge Documents und in der Produktion Pipeline-Ausgaben, und sie werden nicht von Hand editiert.

**Action Layer** `[S]`, §3.3. `CLAUDE.md` oder äquivalente Konfiguration im Repository-Root, trägt die Implementierungsdirektiven; in reifen Projekten Agentensozialisation, die Entscheidungen in unvorhergesehenen Situationen leitet.

**Verification Document** `[S]`, §3.3, §4.1, §5.1. Dokumentfunktion, die festhält, welcher Claim gegen welche Evidenz mit welchem Verfahren mit welchem Befund geprüft wurde. Abgrenzung gegen Verification Interface und Verifikationsebenen steht aus.

**Machine-actionable DMP** `[S]`, §3.3. Forderung nach Datenmanagementplänen, auf die Infrastruktur handeln kann (Miksa et al. 2019). Das Paper beansprucht Maschinenhandhabbarkeit in einem stärkeren, operativen Sinn.

**Scholar-Centred Design** `[S]`, §2.6, §3.3. Methodischer Kern der Dissertation, User-Centred Design verbunden mit Requirements Engineering, mit Personas, Epics und User Stories aus Deep-Dive-Sitzungen (Pollin 2025b).

**User Story** `[Q]`, §3.2, §3.3, §6.2. Form, in der Anforderungen als Aussagen über wissenschaftliche Arbeit mit Akzeptanzkriterien dargestellt werden. Kein Beleg; Kandidat Cohn 2004 ungeprüft, ebenso Norman und Draper 1986 für UCD.

**Zwei Betriebsmodi** `[S]`, §3.2. Default eine Forscherin mit einer Agenteninstanz; in komplexen Projekten ein Lead-Agent mit Sub-Agenten unter definierten Rechten und Wissenszonen, wo sich die methodische Last vom Steuern eines Agenten zum Entwerfen eines kleinen Forschungsteams verschiebt.

**Context Memory** `[S]`, §3.3. Journal und git-History zusammen, die zuverlässige Sitzungsfortsetzung ermöglichen; das Journal dokumentiert warum, die Commits dokumentieren was.

## D. Der Artefakttyp

**Minimal Computing** und **Endings Principles** `[S]`, §4.1. Die digitalen Artefakte mit der höchsten Überlebenswahrscheinlichkeit sind die mit den wenigsten beweglichen Teilen (Risam und Gil 2022; Holmes und Takeda 2023).

**Vendoring** `[S]`, §4.1. Eine einzelne Bibliothek lokal ins Repository kopiert und mit ihm versioniert, ohne Paketmanager, unter einer Kompromissregel mit vier Kriterien.

**Provenance Declaration** `[S]`, §4.1. Jedes Artefakt erklärt, dass es generiert wurde, aus welchen Dokumenten, mit welchen Modellen und Werkzeugen und wie es verifiziert wurde, so wie eine Edition ihre Editionsprinzipien offenlegt.

**Interface-Typologie** `[S]`, §4.2. Fünf Kategorien nach epistemischer Funktion, Verification, Exploration, Edition, Capture, Audit. Grundlage sind die epistemic forms von Collins und Ferguson 1993; die Lücke gegen Visual Analytics (Sacha et al. 2014) und TaDiRAH (Borek et al. 2016) ist benannt. Noch nicht besprochen. Das Capture Interface hat seit der Entfernung einer Quelle keinen Fremdbeleg mehr.

**Coordinated Multiple Views** `[S]`, §4.2. Technik der Exploration Interfaces (Roberts 2007).

**Edition als Interface** `[S]`, §4.2. Interface-Entscheidungen in digitalen Editionen sind editorische Entscheidungen (Pierazzo 2015); die Edition selbst ist Interface, GUI für Leser und API für Maschinen (Bleier et al. 2018).

**Do One Thing Well** `[S]`, §4.2. Unix-Prinzip, gegen monolithische Plattformen und für kleine, spezialisierte, über Standardformate verkettete Werkzeuge (Schonhardt 2026).

**Formatgrenzen** `[S]`, §4.3. Clientseitige Verarbeitung begrenzt das Datenvolumen, und die Grenze wandert mit dem Stack; kollaborative oder serververmittelte Workflows und Persistenz jenseits des Browsers liegen außerhalb.

## E. Evidenz und Diskussion

**Epistemic Yield** `[E]`, §5.1, §5.3. Was ein Fall über den Gegenstand oder über die Mittel der Untersuchung erbracht hat. Feste Schemaspalte der Fallbeschreibungen. Eigenprägung ohne Fremdquelle, noch nicht besprochen.

**Verifikation und Validierung** `[G]`, §6.2, entschieden am 2026-07-25. Validierung ist, was eine formale Regel entscheidet, ein Schema, ein Test, ein Constraint, und sie läuft unbeaufsichtigt, weil die Rückkopplung geschlossen ist. Verifikation ist, was der Fachexperte gegen die Quellen und gegen das fachliche Urteil entscheidet, und sie delegiert nicht. Die Festlegung weicht von der Normtradition ab, wo Verifikation gegen die Spezifikation und Validierung gegen den beabsichtigten Gebrauch prüft (ISO 9000:2015; IEEE 1012-2016), und sie steht auch gegen die formalen Methoden und das LLM-Nachtraining, die Verifikation für den deterministischen Fall reservieren. Begründet über die Wortkerne, *verus* für den Wahrheitsanspruch, der ein Urteil verlangt, *validus* für das, was unter einer gesetzten Regel gilt. Offengelegt in einer Fußnote. Die Reichweite ist auf die Prüfung des Erzeugten begrenzt, der gewöhnliche Sinn, in dem Fälle eine Methode validieren, bleibt unberührt. Die drei Ebenen in §6.2, Datentreue, Anforderungserfüllung, Designkonformität, sind seither drei Referenzen unter diesem Paar. Publizierte Arbeiten mit demselben Schnitt gibt es nicht, Negativbefund einer gezielten Recherche.

**Adversarial Machine Review** `[Q]`, §5.1, §6.2. Ein Modell, angewiesen, eine Ausgabe gegen ihre Quellen anzugreifen, in der Autorität unter der menschlichen Verifikation. Kein Beleg; Kandidat Zheng et al. 2023 ungeprüft.

**Reproduzierbarkeit unter Nichtdeterminismus** `[S]`, §6.3. Reproduzierbarkeit haftet an den Dokumenten, dem Prozessprotokoll und den deterministischen Teilen der Pipeline; binäre Artefaktidentität liegt außerhalb.

**Asymmetric Amplification** `[S]`, §6.4. LLMs verstärken computergestützte Forschungsarbeit entlang bestehender Gradienten von Expertise, Zugang und epistemischer Selektivität; dieselbe Technik erzeugt Autonomie, wo Verifikationskompetenz vorhanden ist, und Abhängigkeit, wo sie fehlt (Pollin 2026a).

**Schwierigkeitsprofil geisteswissenschaftlicher Daten** `[S]`, §1, §6.5. Heterogen, selten schemaregulär, interpretativ modelliert, semantisch dicht, mit Unsicherheit als Eigenschaft erster Klasse. Trägt das Transferargument.

**Possibility Space** (Möglichkeitsraum) `[S]`, §2.5, §3.2, §5.3. Die Menge der Optionen, die generiert werden könnten und die zu prüfen Aufgabe des Critical Expert ist. Noch nicht besprochen.

## F. Hilfsbegriffe, noch nicht besprochen

- **Domain Expertise** (Domänenexpertise). Vorausgesetzt und nicht vermittelt, trägt die Grenze in §6.4.
- **Scholarly Responsibility** (wissenschaftliche Verantwortung). Trägt die Arbeitsteilung in §3.4.
- **Context**. Läuft im Paper als Modellkontext, als Forschungskontext und als Kontextfenster.
- **Prototype** im Entwurfssinn, abgegrenzt gegen Promptotyp und gegen Produkt.
- **Tool** generisch, abgegrenzt gegen Artefakt und gegen Interface.
- **Modelling** gegen Operationalisierung, teilweise über Stachowiak und Pichler/Reiter gedeckt.

## Offene Entscheidungen

1. **SUGW**, arbeiten die geschulten Projektbeteiligten selbständig weiter. Entscheidet über einen zweiten Drittnutzungsfall in §5.4 und über die Klausel zu den geschlossenen Repositorien.
2. Fehlende Belege beschaffen oder die Stellen quellenlos führen, Dokumenttypologie aus dem Knowledge Engineering, Confabulation, Trading-Zone-Ursprung, User Story, UCD, Adversarial Machine Review.
3. Fremdquelle für das **Capture Interface**.
4. Ob die drei Verben der Artefaktdefinition, explorieren, analysieren, edieren, mit den Taxonomien wissenschaftlicher Arbeit und mit der Interface-Typologie in §4.2 zusammengeführt werden. Operator-Anregung vom 2026-07-25.

## Nachzuziehen außerhalb des Papers

- `submission-zfdg.md`, beide Kurzabstracts und die Gliederung, die §6.2 noch Verifikation nennt.
- Die Vorlagenseite der Site beschreibt die Dokumenttypologie in der alten Benennung.
- Vault, Distillate und Claims für Geiger 2023 und Pichler/Reiter 2022, beide auf `csl`.
