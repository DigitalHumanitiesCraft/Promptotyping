---
title: Paper-Gliederung und Einarbeitungsplan
project:
  name: Promptotyping Site
  repository: https://github.com/DigitalHumanitiesCraft/Promptotyping
status: active
language: de
version: 0.1
created: 2026-07-23
updated: 2026-07-23
authors: [Christopher Pollin]
generated-with: Claude Code mit Claude Fable 5
method:
  name: Promptotyping
  url: https://dhcraft.org/Promptotyping/
related: [paper-draft-explorable-2026-07-23, plan, journal, INDEX]
---

# Paper-Gliederung und Einarbeitungsplan

Dieses Dokument steuert die Zusammenführung der zwei Paper-Fassungen zur nächsten Vollfassung. Die Quellen sind die bestehende kanonische Fassung in `_content/paper/00–07` (im Folgenden [Repo]) und der Operator-Draft vom 2026-07-23, gesichert als `paper-draft-explorable-2026-07-23.md` (im Folgenden [Draft]). [Neu] markiert Passagen, die keine der Quellen liefert. Die Diskussionsentscheidungen der Sessions vom 2026-07-23 sind eingearbeitet; der Abschnitt *Entscheidungsstand* hält fest, was der Operator entschieden hat und was als Empfehlung umgesetzt und revidierbar ist.

Verhältnis zu `plan.md`: Dessen Zielbild beschreibt eine additive Revision der Repo-Fassung. Die hier gesteuerte Zusammenführung geht darüber hinaus (neue Sektionsarchitektur, neuer Theorierahmen). Die Milestones M3 (Zahlen geprüft) und M6 (Standardisierungsstufe) bleiben gültig und fließen ein; das Zielbild von `plan.md` ist nach Operator-Freigabe der neuen Fassung anzupassen.

## Arbeitsmodus

Die nächste Vollfassung entsteht als ein einzelnes englisches Markdown-Dokument `paper-v2-draft.md` in diesem Ordner, damit der Operator sie am Stück lesen, nach Google Docs geben und kommentieren kann. Erst nach Operator-Freigabe wird sie in die Site-Sektionen `_content/paper/` zerlegt; bis dahin bleibt die publizierte Site unverändert. Die Provenienz tragender Aussagen liegt im Grounded Vault `vault/` (Claims mit Belegankern); neue tragende Behauptungen der v2 werden dort nachgezogen, bevor die Fassung als einreichfähig gilt.

## Schreibregeln für den Papertext

- Englisch, britische Schreibung, Ausrichtung an der Stimme des Operator-Drafts.
- Keine Superlative (Operator-Entscheidung 2026-07-23); der "hard case"-Superlativ wird durch ein spezifisches Schwierigkeitsprofil ersetzt.
- Zahlen nur in der Form, die die Verifikation lizenziert (`verification-paper-figures.md`, Vault-Claims); Ungeprüftes trägt `[to verify]`.
- Der Effizienz-Disclaimer schrumpft auf einen nüchternen Satz; die kämpferische Ausbaustufe des Drafts entfällt.
- Die Deskilling-Lesart wird aktiv blockiert: die RSE-Profession wird durch die Methode nicht erworben, die fachwissenschaftliche Profession wird vorausgesetzt.

## Gliederung der v2

**Titel:** "Promptotyping. Making Research Data Explorable through Iterative Context and Agentic Engineering" [Draft, Operator-Titel; Alternative "A Context Engineering Method for Building Research Artifacts with Frontier LLMs" bleibt als Option im Entscheidungsstand].

**Abstract** [Neu, zuletzt schreiben].

**1. Introduction**
Möglichkeitsbehauptung in der weichen Form: Einzelforscher und kleine Teams können funktionsfähige explorative Prototypen für ihre strukturierten Forschungsdaten herstellen. Konditionierung auf Datenqualität (Verweis auf 2.3). Ein-Satz-Disclaimer zu Effizienz. Schwierigkeitsprofil geisteswissenschaftlicher Daten statt Superlativ; positionale Begründung (Evidenzbasis ist die dokumentierte Praxis des Autors als DH-Research-Software-Engineer). Antworten des Felds auf das Übersetzungsproblem inklusive RSE. Why-Now-Kern: Frontier-Coding-Fähigkeit plus AI-Harnesses seit Ende 2025 verschieben die Arbeitseinheit vom Prompt zum Dokument. [Draft als Basis, Repo 2.7 für Why-Now, Neu für RSE und Datenkonditionierung]

**2. The Epistemic Frame**
- 2.1 Exploration als Forschung: Whitelaw, Hinrichs, Windhager; Drucker als Prüfstein (LLMs reproduzieren die kritisierten Standardkonventionen; die Dokumente heben Visualisierungsentscheidungen aus den Modell-Defaults in begründete Spezifikationen). [Draft 2.2]
- 2.2 Werkzeuge als epistemische Artefakte: Galey/Ruecker, INKE, Tool Criticism; ausdrückliche Absage an den Tool-Positivismus, das Werkzeug ist abgeleitetes, verzichtbares Artefakt. [Draft 2.1 + Neu]
- 2.3 LLMs und Forschungsdaten (neu): zwei Achsen statt Rangfolge. Achse 1 semantische Explizitheit der Quelldaten (CSV/JSON, Standards wie TEI/LIDO/CMIF, Ontologien/RDF als Idealfall der Modellierung); Achse 2 Tokenökonomie des Arbeitskontexts (RDF und TEI teuer, CSV/JSON billig). Auflösung über Destillation und deterministisch generierte Beschreibungen; Kurzformel: das Modell liest über die Daten und schreibt Code, der die Daten liest. Semantic-Web-Linie: Agenten-Vision (Berners-Lee/Hendler/Lassila 2001), Scheitern am regelbasierten Paradigma, Wiederaufnahme bei Berners-Lee 2025 ("This Is for Everyone", Titel prüfen); Bremse: LLM-Agenten machen keine formale Inferenz, sie profitieren von expliziter Semantik als Kontext. [Neu, Material aus Repo 3.3/3.4 und Operator-Diskussion]
- 2.4 Das Übersetzungsproblem und die Dokumente als boundary objects: Edmond, Siemens, Kemman, dazu RSE als institutionalisierte vierte Antwort (Baxter u.a. 2012, Cohen u.a. 2021, Personallage belegen oder als Inferenz markieren); Star/Griesemer; Verlagerung der Übersetzung vom Gespräch ins versionierte Artefakt. [Draft 2.4 + Neu RSE]
- 2.5 Verortung im KI-Diskurs, auf etwa eine Seite verdichtet: Context Engineering, Abgrenzung Vibe Coding, Context Rot als technische Begründung der Verdichtung, Critical Expert in the Loop. [Repo 2.1–2.4, stark gekürzt]
- 2.6 Genealogie: Dissertation als Ursprung (Scholar-Centred Design, User Stories, RDF-Daten historischer Rechnungsbücher für ein Explorations-Dashboard; füllt den Platzhalter des Drafts), PRISM als Seitenlinie (Konfiguration von Modellverhalten über Kontextdokumente), Workshopreihe 2023 als datierter Wegpunkt (LLM-gestützte Visualisierung biographischer Daten, Juni 2023, Zenodo-DOI prüfen): die Möglichkeit existierte für den hybriden Praktiker, die agentische Stufe seit Ende 2025 verschiebt sie zum spezifizierenden Forscher. Reflexivität: der Autor ist der hybride Praktiker, die Methode externalisiert diese Kompetenz. [Repo 2.6 + Draft 2.3 + Neu]

**3. The Method**
- 3.1 Status und Herkunft: aus der Praxis destilliert, frühe Fälle intuitiv, spätere validieren strenger. [Draft 3.1]
- 3.2 Die vier Phasen Preparation, Exploration, Distillation, Implementation, gestrafft; die Rückkopplungsschleife (Korrekturen gehen in die Dokumente, der Code wird regeneriert) als Signatur der Methode; drei Feedback-Mechanismen (deterministisch, visuell, Experte). [Repo 3.1–3.4 + Draft 3.2 Prozessabsatz]
- 3.3 Die Promptotyping-Dokumente: konkretes Set (`data.md`, `requirements.md` bzw. `specification.md`, `design.md`, `journal.md`, Action-Layer `CLAUDE.md`/`INSTRUCTIONS`) mit Vorlagen; Typologie Knowledge/Process/Action mit Herleitung aus dem Knowledge Engineering (deklarativ, chronologisch, imperativ) [Neu]; diagnostischer Nutzen (falscher Inhalt, falsche Form, unklare Entscheidungslogik); doppelter Adressat (lesbar für den Forscher, ausführbar für den Agenten) [Draft 3.2]; Standardisierungsstufe: Funktionskatalog, Frontmatter-Pflichtkern mit empirischer Korrektur, `template:`-Adresse, Status-Vokabular, Verifikationsdokumente; deterministisch generierte Wissensdokumente. [Repo 3.3, gekürzt]
- 3.4 Worked Example Aldersbach: Zweck, Währungsproblem, DESIGN-Entscheidung gegen falsche Kommensurabilität als konkreter Drucker-Fall, Verifikation per Stichprobe, Korrektur in DATA statt im Code. [Draft 3.2; Fakten gegen das reale Repo prüfen]
- 3.5 Zwei Modi (ein Agent, orchestriertes Team) als kompakter Absatz statt eigener Sektion. [Repo 3.5, stark gekürzt; Kürzungsentscheidung offen]

**4. The Artefact Type**
- 4.1 Statische, selbständige Web-Werkzeuge; Begründung (inspizierbare Ableitung, publizierbar ohne Infrastruktur, langlebig: Minimal Computing, Endings Project); technische Leitlinien inklusive Vendoring-Kompromissregel und Provenienzerklärung im Artefakt. [Draft 4]
- 4.2 Typologie der Promptotyping-Interfaces nach epistemischer Funktion: Verification, Exploration, Edition, Capture, Audit. [Repo 5.3; per Empfehlung als die Typologie des Papers gesetzt, siehe Entscheidungsstand]
- 4.3 Grenzen des Formats (Datenvolumen, keine Kollaboration, keine Persistenz) und der RSE-Übergabepunkt: wo das Projekt dem Prototyping entwächst, beginnt Research Software Engineering. [Draft 4 + Neu]

**5. Evidence: The Documented Projects**
- 5.1 Darstellungsprinzip: geprüfte Projekttabelle als Inventar (Zahlen aus M3/Vault-Claims), im Fließtext je epistemischer Funktion ein ausgearbeitetes Exemplar nach festem Schema (Quelldaten, Dokumente, Artefakt, epistemischer Ertrag, Grenzen). [Repo 4 + Draft 5]
- 5.2 Die Exemplare, geordnet nach der Funktions-Typologie aus 4.2; Kandidaten aus den bisherigen Zuordnungen (Edition: SZD-Proto-Edition oder Lucina; Exploration: Strashun oder CVMA; Verification: ZBZ-Pipeline-Interfaces; Capture: Stefan-Zweig-Annotationstool; Audit: Kandidat prüfen). Zuordnung beim Schreiben gegen die Case-Dokumentation festziehen.
- 5.3 Lehr- und Workshopfälle als Transfertest der Methode mit eigenem Status außerhalb der Funktions-Typologie; stärkste verfügbare Evidenz für die Generalisierungsbehauptung. [Draft 5.2 Typ E]
- 5.4 Lesart: technische Konvergenz der Fälle (teils Leitlinien, plausibel teils Modellbias, als offenes Problem geführt); Artefaktqualität folgt der investierten Fachexpertise. [Draft 5.3]
- 5.5 Companion: `vault/` als publizierte Belegschicht der tragenden Claims. [Draft 5.1/5.4, angepasst auf den real existierenden Grounded Vault]

**6. Discussion**
- 6.1 Wegwerfbarer Prozess, dauerhaftes Artefakt (Sandcastle gegen Endings, aufgelöst über Prozess und Publikation). [Draft 6.1]
- 6.2 Verifikation auf drei Ebenen (Datentreue, Anforderungserfüllung, Designkonformität); Kosten als Preis der Möglichkeitsbehauptung. [Draft 6.2 + Repo-Material]
- 6.3 Reproduzierbarkeit und Modellabhängigkeit; Reproduzierbarkeit hängt an Dokumenten, Prozessprotokoll und deterministischer Pipeline. [Draft 6.3 + Repo 6.1]
- 6.4 Grenzen der Evidenz: Einzelpraktiker, fehlende Kontrollbedingung, Konfundierung von Methoden- und Modelleffekt, Konventionsproblem; Profession-Schutzklausel. [Repo 6 + Draft 6.3 + Neu]
- 6.5 Übertragbarkeit über die Geisteswissenschaften hinaus, argumentiert über das Schwierigkeitsprofil; Dokumentset auch als Übergabeformat an menschliche RSEs. [Draft 6.4 + Repo 6.8 + Neu]

**7. Conclusion** [Neu, kurz]

**References**: Vereinigung beider Listen; neu hinzu kommen RSE (Baxter u.a. 2012; Cohen u.a. 2021), Berners-Lee/Hendler/Lassila 2001, Berners-Lee 2025, Workshopreihe Zenodo 2023, Hong u.a. 2025 (Context Rot).

## Entscheidungsstand

Vom Operator entschieden (Sessions 2026-07-23): Prototypen statt "bauen"; Datenkonditionierung mit Zwei-Achsen-Differenzierung; Effizienz-Disclaimer auf einen Satz; kein Superlativ, Schwierigkeitsprofil und positionale Begründung; RSE einarbeiten (vier Stellen); Tool-Positivismus-Absage; Semantic-Web-Linie mit Inferenz-Bremse; Workshop-2023-Wegpunkt; Profession-Schutzklausel; das Konzept epistemic infrastructure fliegt aus dem Paper (Promptotyping und der `knowledge/`-Ordner sind nur Teil einer epistemischen Infrastruktur, das Konzept bekommt keine eigene Sektion; die Interface-Typologie steht ohne den Infrastruktur-Überbau in 4.2).

Als Empfehlung umgesetzt, revidierbar nach Lektüre der v2:

1. **Titel**: Operator-Titel des Drafts beibehalten; die breitere Methoden-Alternative bleibt benannt. Die Semantic-Web-Linie spricht eher für die breite Lesart; Entscheidung am fertigen Text.
2. **Typologie**: Die Funktions-Typologie (Verification, Exploration, Edition, Capture, Audit) ist die Typologie des Papers; die Gattungs-Typologie A–E des Drafts entfällt als eigenes Ordnungssystem, ihre Lehr-/Workshopkategorie wird eigenständiger Transfertest.
3. **Kürzungen**: Zwei Modi als Absatz; Diskussionsunterkapitel Cognitive Load, Vibe Research, Pedagogy entfallen als eigene Abschnitte (Material bleibt für Blogpost und Site verwertbar); Research-Vault-Selbstbeschreibung in 3.3 gestrafft.

Offen und beim Schreiben zu klären: Aldersbach-Fakten gegen das Projekt-Repo; Zenodo-DOI und Versionsstand der Workshopreihe; Titel des Berners-Lee-Buchs; Zuordnung der Exemplare in 5.2; Audit-Exemplar; RSE-Personallage-Beleg.

Nachträge aus dem Operator-Feedback zur v2 (2026-07-23): Der Metadaten-Header der v2 ist entfernt (Dokument geht direkt nach Google Docs). Der Gedanke "LLMs als Übersetzungsmechanismen" (mündlich von einem Kollegen, Attribution zu klären) ist als theoretischer Kern in Sektion 2.4 eingearbeitet; Promptotyping als organisierte Übersetzungskette mit den Dokumenten als stabilen Zwischengliedern. Titelfrage weiter offen: "iterative" gilt als verzichtbar; "Explorable" ist dem Operator zu eng (Promptotyping mappt Daten auf Möglichkeitsräume, auch Analyse, Pipelines, Editionen); Kandidat in Übersetzungs-Richtung "Promptotyping. Translating Research Data into Research Artefacts with Context and Agentic Engineering". Bei Titel-Umstellung auf die breite Lesart muss die Möglichkeitsbehauptung der Einleitung entsprechend geweitet werden (exploratorische und analytische Instrumente).
