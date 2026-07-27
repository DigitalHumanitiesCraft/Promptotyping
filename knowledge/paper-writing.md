---
title: Paper Writing
project:
  name: Promptotyping Site
  repository: https://github.com/DigitalHumanitiesCraft/Promptotyping
status: active
language: de
version: 0.2
created: 2026-07-23
updated: 2026-07-27
authors: [Christopher Pollin]
generated-with: Claude Code (Claude Opus 5)
method:
  name: Promptotyping
  url: https://dhcraft.org/Promptotyping/
related: [INDEX, paper, journal, revision, verification]
---

# Paper Writing

Steuerdokument zum Papertext. `paper.md` hält den Text, dieses Dokument hält, was für ihn gilt, also Arbeitsmodus, Kernaussagen, Sprachregeln, tragende Festlegungen, offene Entscheidungen und den Weg zur Einreichung.

Was hier **nicht** steht, ist die Geschichte. Sitzungsverläufe, ausgeführte Durchgänge und erledigte Prüfpunkte stehen in [journal.md](journal.md) und in der Git-History; der Revisionsprozess des fertigen Drafts steht in [revision.md](revision.md), die Prüfgruppen der Site in [verification.md](verification.md). Eine Festlegung wird hier so knapp geführt, dass sie ohne ihre Entstehungsgeschichte anwendbar bleibt, mit dem Entscheidungsdatum in Klammern. Version 0.2 vom 2026-07-27 hat das Dokument von 9.900 auf rund ein Drittel gekürzt und von der Datums- auf die Sachordnung umgestellt; der vorige Stand liegt in der Git-History.

## Arbeitsmodus

Das Paper ist ein einzelnes englisches Markdown-Dokument `paper.md`, britische Schreibung, ohne Metadaten-Header, weil es am Stück nach Google Docs geht. Der Operator liest und gibt Feedback im Chat, die Überarbeitung läuft satzgenau in Feedback-Runden. Ungeprüfte Fakten und offene Entscheidungen tragen im Text eckige Marker `[...]`; der Text ist derzeit markerfrei, und das ist der Zustand, den jede Runde wiederherstellt.

Die Site rendert `paper.md` direkt (seit 2026-07-25). Jede freigegebene Änderung ist damit sofort die publizierte Fassung. Die Provenienz tragender Claims liegt im Grounded Vault `vault/`; neue tragende Behauptungen werden dort nachgezogen, bevor die Fassung als einreichfähig gilt.

## Titel und Kernaussagen

**Titel:** „Promptotyping. Translating Research Data into Research Artefacts through Context Engineering and Agentic Engineering" (2026-07-23, Schlussglied geändert 2026-07-27; die Wortwiederholung Engineering ist der Preis und steht zur Nachentscheidung).

1. Das Paper beschreibt die Methode, ordnet sie ein, stellt sie anwendbar dar und erdet sie mit der vorhandenen schwachen Evidenz. Es erhebt keine theoretische Leitaussage (2026-07-24).
2. `translation` trägt zwei Bedeutungen, die Vermittlung zwischen Fachwissenschaft und Entwicklung (2.3) und den Weg von den Daten zum Artefakt (Titel, Sektion 1). Sie werden an ihrer jeweiligen Ersteinführung ausdrücklich auseinandergehalten; 3.3 und 6.5 verweisen darauf zurück. Ihre Gleichsetzung zu einer theoretischen Leitfigur ist gestrichen (2026-07-24, geschärft 2026-07-26).
3. Die Eröffnung argumentiert genealogisch, vom Affordance-Gradienten über die Bookkeeping Ontology, das DEPCHA-Dashboard und Scholar-Centred Design zu den beiden Forschungsperspektiven, deren Interface-Konzepte ohne Umsetzungskapazität blieben (2026-07-27). Damit hat die Herkunftsbehauptung Provenienz statt Plausibilität.
4. Scope und Bedingung sind getrennt. „Digital" markiert den Scope der Eröffnung, „structured" die Bedingung der Methode.
5. Der Claim ist ein Möglichkeits-Claim mit drei Grenzen, der Prototyp-Grenze mit RSE-Übergabe, der Datenbedingung mit Modellierungsgradient und dem methodologisch-konzeptionellen Beitrag ohne Effizienzmessung. Keine Effizienz- oder Geschwindigkeitsbehauptung.
6. Der Artefaktbegriff ist projektgebundene Software; vorgelagerte Pipeline und gerenderte Beschreibung bleiben als Formen desselben Ableitungsvorgangs (2026-07-25). Exploration ist Leitfall, nicht Gesamtscope.
7. Die menschliche Datenarbeit ist Fundament. Die Methode setzt sie und die fachwissenschaftliche Profession voraus und verleiht die RSE-Profession nicht; die Deskilling-Lesart ist aktiv blockiert.
8. Naheliegende Gutachter-Einwände werden präemptiv im Text verhandelt, dass generische Werkzeuge existieren, dass Gephi spezialisiert und dennoch modellrelativ generisch ist, dass Geschwindigkeit unbelegt bleibt, dass die Evidenz von einem Praktiker stammt.
9. Quantitäten sind nie das Argument. Die Evidenz ist eine Auswahl dokumentierter Projekte und Experimente aus rund zwei Jahren, jedes im öffentlichen Repository nachvollziehbar; Zahlen erscheinen nur in verifizierter Form in der Projekttabelle.

## Sektionsspiegel und Sektionszwecke

Gültiger Stand. Sektion 2 legitimiert die Voraussetzungen, Sektion 3 ist der kanonische Definitionsakt, Sektion 4 begrenzt den Claim, Sektion 5 liefert Existenzbeweise, Sektion 6 benennt die Angriffsflächen, Sektion 7 stellt die beiden Behauptungen nebeneinander und sagt, was offen bleibt.

| Nr. | Überschrift | Zweck |
|---|---|---|
| 1 | Introduction | Problem, Genealogie, Claim mit seinen Grenzen |
| 2 | The Epistemic Frame | |
| 2.1 | Exploration, Building, and Their Correctives | Diskursbefund und Korrektive |
| 2.2 | LLMs and Research Data | Zwei-Achsen-Verhältnis |
| 2.3 | The Translation Problem, and Documents as Conceptual Models | Übersetzungsproblem, Dokumente als Konzeptmodelle |
| 2.4 | Position in the AI Discourse | Diskursposition, Fähigkeitsgrenzen |
| 2.5 | Genealogy | Vorgeschichte der Methode |
| 3 | The Method | |
| 3.1 | Status and Provenance | |
| 3.2 | The Four Phases | |
| 3.3 | The Promptotyping Documents | |
| 3.4 | A Worked Example | |
| 4.1–4.3 | Artefakttyp, Funktions-Typologie, Grenzen und Übergabepunkt | |
| 5.1–5.5 | Evidenzteil | |
| 6.1–6.5 | Verifikation, Reproduzierbarkeit, Grenzen, Übertragbarkeit | |
| 7 | Conclusion | |

## Sprachregeln (Prüfkatalog)

Gilt für den gesamten Papertext; die vier Kernverbote der globalen Stilregeln gelten auch im Englischen.

1. Kein Aphorismus als Opener oder Absatzschluss; Pointen nur, wo sie echte Definition oder echtes Bild tragen, und vereinzelt.
2. Keine nachklappende Negation, auch nicht als „X rather than Y"; echte Kontraste als eigener Satz. Lizenzierte Ausnahme: Druckers „capta rather than given data".
3. Keine leeren Etikettsätze (Verdinglichung des Vorangegangenen plus Bewertungsadjektiv). Absatzübergänge tragen sich über die sachliche Beziehung der Aussagen.
4. Keine Ankündigungssätze über den eigenen Text. Direkt tun statt ankündigen; das First/Second/Third-Gerüst entfällt, wo die Aussagen sich selbst tragen.
5. Semikolon nicht als Ersatzkonnektor; zulässig in echten parallelen Reihen, sonst eigenständige Sätze. Doppelpunkt dosiert (Operator-Lockerung 2026-07-27), zulässig als Explikation des unmittelbar vorangehenden Begriffs, ausgeschlossen als Konnektor zwischen gleichrangigen Aussagen und als Reihenankündigung im Fließtext. Vereinzelt heißt vereinzelt.
6. Keine Anaphern und rhetorischen Parallelismen; Reihen über ein regierendes Verb führen.
7. Wortwiederholungen in Nachbarsätzen variieren.
8. Durchgängig „I/my" statt „the author".
9. Keine wörtlichen Dubletten zwischen Abstract, Introduction und Sektionsanfängen; Rückverweise statt Wiederholung.
10. Höchstens eine Aufzählung pro Absatz.
11. Jargon selbsterklärend machen; vage Kategorien durch konkrete Werkzeuge ersetzen, wobei das Beispiel die Kategoriegrenze des Absatzes respektieren oder die Grenzverletzung explizit zum Argument werden muss.
12. Präsens statt Perfekt-Passiv für fortbestehende Bedingungen.
13. Irrelevante Details streichen, die ein fremdes Argument einschmuggeln.
14. Angreifbare Absolutheiten präzisieren; empirische Setzungen („typically", „often") durch selbsttragende Begründungen ersetzen; Inferenzen mit „I infer" markieren, ohne Doppelmarkierung.
15. Opake Idiome für internationale Reviewer meiden.
16. Keine Superlative.
17. Keine volatilen Quantitäten im Fließtext; Zahlen nur in der Projekttabelle in verifizierter Form.
18. Jedes namentlich genannte Werkzeug erhält eine Fußnote mit kompakter Definition und aktueller URL. Sie sitzt an der Ersterwähnung, es sei denn, die substanzielle Behandlung liegt später; dann sitzt sie dort (Präzedenz teiCrafter, ebenso `[^tei]` und `[^rdf]` in 2.3).
19. Roadmap und Signposts funktional statt inventarisch; kein Satz beginnt mit „Section N" als Aufzählungsglied.
20. Kursiv für übernommene Diskursterme bei ihrer Ersteinführung (die Einträge in 2.5), für die fünf Interface-Kategorien in 4.2 und für die Ersteinführung eigener Termini an ihrer Definitionsstelle (Erweiterung 2026-07-27, etwa *research artefacts* in Sektion 1). Fett nur für strukturelle Label (Phasen in 3.2, Dokumenttypen in 3.3, Fall-Label in 5.3). Ein Term, dessen Ersteinführung vor 2.5 liegt, bleibt an der 2.5-Stelle recte.
21. Technische Standards erhalten bei Ersterwähnung eine Fußnote mit Ein-Satz-Definition und Link (TEI, XML, RDF, OWL, TaDiRAH; RiC-O und CMIF innerhalb der Projekt-Fußnoten). Alltagsformate erhalten keine (CSV, JSON, HTML, CSS, JavaScript, Markdown). Abkürzungen ohne Standard-Charakter werden inline ausgeschrieben nach dem Muster „Vollform (ABK)".
22. „LLM" statt „model", wo ein Sprachmodell gemeint ist (2026-07-25). „Model" ist im Paper dreifach belegt, für das Datenmodell, das konzeptuelle Modell und Stachowiaks Modellbegriff. Nicht betroffen sind eingeführte Fachtermini anderer Herkunft (model checker, reward model, language model, vision-language model, reasoning model) und alle Modellbegriffe der Modellierungstradition.

**Selbstprüfung.** Vor Abgabe einer Runde laufen die Prüfmuster über alle geänderten Sätze, Gedankenstrich- und Doppelpunkt-Konnektoren, „X, not Y", rhetorische Dreier, Aphorismus-Schluss, britische Schreibung. Dazu maschinell die Fußnotenbilanz (jedes Label genau eine Definition und eine Verwendung), die Sektionsverweise gegen die Überschriften und die Suche nach offenen `[...]`-Markern.

## Zitierweise

Autor und Jahr, keine Seitenangaben (2026-07-25). Der Lokator gehört in die Registerzeile des Vaults (`vault/knowledge/register-paper-sources.md`) und, wo ein wörtliches Zitat geprüft wurde, in das Distillat. Der Grund liegt darin, dass das Paper auf der Ebene der Aussage argumentiert, während die Nachweisebene im Companion liegt.

## Festlegungen

### Argument und Anspruch

- Prototypen statt „bauen"; der Effizienz-Disclaimer bleibt ein nüchterner Satz.
- Zwei-Achsen-Datenmodell (semantische Explizitheit gegen Tokenökonomie) mit der Auflösungsformel, das LLM liest über die Daten und schreibt Code, der die Daten liest.
- Schwierigkeitsprofil plus positionale Begründung statt „hardest case". Die Diss-Liste ist viergliedrig (human agency, context sensitivity, multiperspectivity, uncertainty, Diss S. 35) und wird geschlossen zitiert.
- RSE als institutionalisierte Antwort und als Übergabepunkt, mit Profession-Schutzklausel. Die Achsen des Übergangs stehen in 4.3 und werden in Abstract und Sektion 1 gleichlautend genannt.
- Absage an den Tool-Positivismus; Semantic-Web-Linie mit Inferenz-Bremse.
- Der Begriff `epistemic infrastructure` ist aus dem Paper genommen.
- Funktions-Typologie (Verification, Exploration, Edition, Capture, Audit) statt Gattungs-Typologie A–E. Teaching Cases sind ein eigener Transfertest; 5.4 beansprucht nur Kommunizierbarkeit und Lehrbarkeit, die Transferfrage steht ausschließlich in 6.5.
- Kein Negativfall (2026-07-25). Die Offenlegung in 5.1, dass kein Register abgebrochener Versuche existiert, bleibt als Eigenschaft des Records stehen.
- Entfallen als eigene Abschnitte: Cognitive Load, Vibe Research, Pedagogy; die zwei Modi stehen als Absatz. Das Material bleibt für Blogpost und Site.

- Der Numerus ist Plural, „research data are" (2026-07-27, dritte Operator-Fassung in Folge). Der Durchgang über den Gesamttext ist gelaufen; ausgenommen bleiben das Owens-Zitat „Data is always manufactured" und die Stellen, deren Subjekt nicht `data` ist.
- Die Funktionsliste im Abstract entfällt (2026-07-27). Der Abstract nennt die Funktionsspanne in Prosa und überlässt die Klassifikation der Sektion 4, womit der Konflikt zwischen Abstract und 4.2 gegenstandslos ist.
- Der Artefaktbegriff ist wieder weit, von Modellen und Workflows bis zu Interfaces und Anwendungen (2026-07-27, Rücknahme der Einengung vom 2026-07-25). Tragfähig ist er, weil derselbe Absatz den Vorbehalt mitführt, dass die dokumentierte Praxis überwiegend selbstenthaltende statische Werkzeuge hervorgebracht hat.
- Der Begriff `research context` ist in `[^context]` definiert und wird über Scholar-Centred Design und die Promptotyping Documents operationalisiert (2026-07-27).

### Begriffe und Terminologie

- `research artefact` löst `instrument` ab (2026-07-24).
- Verification und Validation sind lokal festgelegt, Verification beim Experten, Validation im formal Entscheidbaren. `[^vv]` benennt die Abweichung von der Software-Engineering-Norm als bewusst und auf dieses Begriffspaar beschränkt; 4.3 und 6.5 rufen die RSE-Standards weiter als bindend an.
- Die Dokumenttypologie in 3.3 ordnet eine Beschreibung des Projektablaufs (`pipeline.md`, `workflow.md`) der deklarativen Klasse zu; Prozessdokumente halten die Arbeit am Projekt. Die Unterscheidung „cuts across the types" gilt ausdrücklich innerhalb der deklarativen Klasse.
- `AGENTS.md` steht in der Action-Layer-Spezifikation neben `CLAUDE.md`, mit Fußnote `[^agents]`.
- Eigenprägungen ohne Fremdquelle, bewusst als solche geführt: `tool positivism` als Gegenbegriff in 2.2, `semantic explicitness` und `token economy` als das gegenläufige Paar in 2.3, `epistemic yield` als feste Schemaspalte der Fallbeschreibungen. Die Belegteile darunter stehen (FAIR, Context Rot, Cremer und Paulmann 2025); die Prägung selbst ist die eigene Leistung und braucht keine Fremdquelle, solange sie als Prägung erkennbar bleibt.
- Aus dem Begriffsdurchgang vom 2026-07-25 aufgelöst: der Ursprung der Trading Zone bei Galison steht über Kemman 2021 im Text, die User Story hat mit dem QUS-Rahmen (Lucassen et al. 2016) ihren Beleg, und das `adversarial machine review` ist in der sechsten Runde zum `LLM review` mit Zheng et al. 2023 geworden.

### Belege und Theorieanker

- Positionierungs-Anker: FAIR (Wilkinson et al. 2016) in 2.3; FAIR4RS (Chue Hong/Katz/Barker et al. 2022) in 4.1 und 6.3, gestützt auf den FAIR4RS-Check des szd-htr-Repos; maDMP (Miksa et al. 2019) als Prozessvergleich. CRISP-DM und RO-Crate sind gestrichen; der RO-Crate-Claim ist im Vault als verwaist geführt.
- Theorieanker Modellierung, aus dem eigenen erarbeiteten Bestand statt über fremde Importe (Minsky, Giere, Morgan/Morrison verworfen). Die Kette führt über Stachowiak 1973 (Abbildung, Verkürzung, Pragmatik) und Gruber 1993 (Ontologie als explizite Spezifikation einer Konzeptualisierung) in 2.3, DIKW-Prämisse der Diss in 2.5, Semantic-Web-Inversion im Substrat-Absatz.
- Forschungsdaten-Definition in 2.3, Borgman 2015 als disziplinneutraler Genus, Schöch 2013 über die Diss als Humanities-Differentia, verbreitert um Owens 2011 und Flanders/Jannidis 2019 im Haupttext, Posner 2015 und das Santa-Barbara-Statement in `[^posner]`. Sektion 1 trägt das Argument, nicht die Definition (Regel 9).
- SDD-Abgrenzung in 2.4, geteilt in Gemeinsamkeiten und drei Unterschiede; das Prioritätsargument steht als Satz in `[^sdd]`, die Framework-Datierungen mit Abrufdatum ebenfalls dort.
- Typologie gegen TaDiRAH: TaDiRAH klassifiziert Aktivitäten, die Typologie Artefakt-Funktionen. Capture, Exploration und Edition haben partielle Entsprechungen, Verification und Audit fehlen, was die Typologie motiviert (Borek et al. 2016; Grallert et al. 2026). Der Grund für das Fehlen, dass beide Funktionen aus der maschinellen Erzeugungsweise entstehen und nicht aus dem Forschungsrepertoire, steht noch nicht im Text.
- Requirements-Engineering-Herkunft des Übersetzungsproblems über Curtis, Krasner und Iscoe 1988 (2026-07-27), Zugangsklasse C im Vault.

- Provenienz des Begriffs, am PDF verifiziert (2026-07-27). Die Dissertation führt Promptotyping ein und widmet ihm Abschnitt 7.4; sie nennt dort auch die Promptotype Documents. Der Blogpost vom 2025-04-24 ist damit die erste öffentliche Beschreibung und nicht die Prägung. Vault-Claim `promptotyping-first-named-in-the-dissertation`, der ältere Claim zum Blogpost ist entsprechend qualifiziert.
- DEPCHA-Flattening, am PDF verifiziert (2026-07-27, Diss S. 217 und S. 204). Vault-Claim `generalised-dashboard-flattens-context-specific-detail`. Sektion 1 darf die Aussage als Ursprungspunkt der Methode führen.
- Der Pivot der Genealogie ist öffentlich, die semantische Markdown-Beschreibung der Bookkeeping Ontology im Repo `chpollin/HistInfo`. Der Begriff „semantic Markdown" ist als eigene Prägung ausgewiesen und nicht als Titel zitiert, weil die Datei ihn nicht trägt.

### Evidenzteil

- Aktivitätsquantitäten sind aus Fließtext und Fallschemata entfernt; Materialumfang und Strukturzahlen bleiben. Die Zahlen der Projekttabelle sind am 2026-07-19 adversarial gegen die realen Repositories geprüft; der Befund ist Quelle im Grounded Vault. Dauer- und Kostenangaben sind gekennzeichnete Erfahrungswerte. Die redaktionelle Regel gegen Snapshot-Drift ist Datierung der Zahl statt Nachführung.
- Der Audit-Fallblock in 5.3 ist entfernt; 5.3 führt vier der fünf epistemischen Funktionen aus, die Audit-Funktion trägt der FemPrompt-Eintrag im 5.2-Inventar.
- Lucina wird nicht verwendet; das Edition-Exemplar in 5.3 ist die Notker-Edition (`DigitalHumanitiesCraft/notker-edition`).
- Die Formationsphase (2023 bis Anfang 2025) ist kollektiv formuliert. Eine Abbildung von Methodenkomponente auf Projekt wird ausdrücklich nicht behauptet, weil das Methoden-Vokabular die Praxis überlagert. teiCrafter 2023 als Ursprungspunkt (Custom GPT, keine geschriebene Software) und Wheaton als erster Promptotype bleiben chronologisch belastbar.
- Selbstanwendung ist auf 5.1 und die Acknowledgements konzentriert.

### Form und Apparat

- Projekt-Fußnoten: jedes im Fließtext exemplarisch verwendete Projekt erhält eine Fußnote mit Repo-URL, einem Satz zur Funktion und den Pfaden der zitierten Promptotyping Documents. Das Tabellen-Inventar 5.2 behält seine URLs im Companion, damit die Fußnoten nicht inflationieren.
- Neue Fußnoten werden als benannte Labels angelegt, damit die Nummerierung `[^1]` bis `[^9]` unberührt bleibt. Jedes Label trägt genau eine Definition und genau eine Verwendung; ein zweiter Bezug auf denselben Sachverhalt läuft über einen Sektionsverweis.
- Autor-Jahr im Text, drei Namen ausgeschrieben, ab vier „et al." (angeglichen 2026-07-27). Das Literaturverzeichnis führt die vollen Autorenlisten und kürzt nur bei großen Kollektiven.
- Der coOCR-HTR-Fork steht in genau einer Fußnote, ohne Nennung des Urhebers und ohne Institution (Operator-Entscheidung 2026-07-27). Damit ist der frühere Prüfpunkt zur Namensnennung erledigt.
- Die Herkunft von Vibe Coding steht im Fließtext von 2.4 mit dem Eröffnungszitat Karpathys, damit der Begriff nicht ohne Ursprung im Text steht (Operator-Entscheidung 2026-07-27). Dass die Praxis vor ihrer Benennung ausgeübt wurde, behauptet das Paper nicht.
- Drei Abbildungen mit ausformulierten Verweisen und Bildunterschriften, Figure 1 in 3.2 (Phasen und Dokumentsatz), Figure 2 in 3.3 (Dokumenttypen), Figure 3 in 6.2 (Autonomiezonen der Prüfung). Die Bilddateien liegen unter `assets/figures/` und werden repo-relativ referenziert.
- Die tragenden Anker von Sektion 1, auf die spätere Sektionen namentlich zurückverweisen, sind als Prüfgruppe V10 in `tools/check_consistency.py` deklariert (siehe [verification.md](verification.md)). Wer die Eröffnung neu schreibt, lässt die Gruppe laufen.

### Infrastruktur und Rechte

- Dual-Licensing, MIT für Code, CC BY 4.0 für Dokumentation und Promptotyping Documents; Forschungsdaten Dritter pro Repo mit eigener Rechteangabe ausgenommen.
- Zitationsidentität Christopher Pollin, Digital Humanities Craft OG, ORCID 0000-0002-4879-129X, ergänzend GitHub-Profil via `sameAs`.
- Releases ohne vorgeschriebene Kadenz, geschnitten wenn der Stand es trägt; eine Zenodo-DOI setzt mindestens ein Release voraus.
- Der Durchgang über die Repos ist ausgeführt (2026-07-23). Beim Operator zur Rechteklärung liegen wiiw-figaro-nam-demo, fortunoff-dashboard, co-ocr-htr, HerData, die drei SuGW-Repos, uc3-vetcore-proteomics, kisug-wissensbasis. Die drei Co-Autorinnen in `FemPrompt/CITATION.cff` trägt der Operator selbst ein (Namensregel).

## Offene Entscheidungen

Stand nach der vierten Fassung der Eröffnung (2026-07-27). Geschlossene Punkte stehen unter Festlegungen.

1. **Sektion 1 gegen Sektion 2.5.** Die tragende Entscheidung, und mit jeder Fassung dringlicher. Sektion 1 trägt die Genealogie, und 2.5 heißt Genealogy und trägt sie an vier Stellen ebenfalls, Scholar-Centred Design als Verbindung von User-Centred Design und Requirements Engineering, die Deep-Dive-Sitzungen bis zur Bookkeeping Ontology, die Umschreibung der Ontologie nach Markdown und die Kostenstruktur-Aussage zu Frontier-LLMs. Die Fußnote `[^genealogy]` erzählt die Markdown-Episode inzwischen ausführlicher als 2.5 im Haupttext. Regel 9 verbietet die Dublette. Ich schlage vor, dass Sektion 1 die Genealogie behält und 2.5 schrumpft auf die Formationsphasen-Projekte, die SDD-Abgrenzung und die Selbstverortung als hybrider Praktiker; `[^genealogy]` ist beim Schnitt nachzuziehen.
2. **TaDiRAH steht jetzt zweimal.** Sektion 1 führt das Vokabular ein und trifft die Unterscheidung zwischen den Aktivitäten der Forschenden und den Operationen des Artefakts; 4.2 tut dasselbe mit Collins/Ferguson und dem Mismatch-Argument. Entweder Sektion 1 führt ein und 4.2 baut auf, oder umgekehrt. Der Fußnotenanker `[^tadirah]` sitzt seit dem 2026-07-27 in Sektion 1.
3. **Analysis als sechste Kategorie** oder als Erweiterung der Exploration-Definition in 4.2. 4.2 definiert Exploration entdeckungsorientiert; das hypothesenprüfende Rechnen fällt derzeit stillschweigend mit hinein. Nicht mehr blockierend für den Abstract, weil dieser keine Liste mehr nennt.
4. **Der Grund für den TaDiRAH-Mismatch** steht noch nicht im Text. Verification und Audit fehlen dort, weil sie aus der maschinellen Erzeugungsweise entstehen und nicht aus dem Forschungsrepertoire. Ein Satz in 4.2 würde die Typologie an die Leitargumentation binden.
5. **Die Abbildungen.** Verweise und Bildunterschriften stehen in 3.2, 3.3 und 6.2, die Bilddateien fehlen. Zu klären ist die Rechtelage für CC BY-SA 4.0, weil die Vorlage für Figure 1 aus einer Folie des Operators stammt.
6. **`submission-zfdg.md` hängt hinterher.** Die beiden Kurz-Abstracts und das Exposé geben den Stand vom 2026-07-25 wieder, also vier Fassungen der Eröffnung zurück. Nachzuziehen, sobald die Eröffnung steht.

## Offene Prüfpunkte

Auflösung heißt verifiziert, belegt oder gestrichen, mit Prüfvermerk hier.

- **Exemplar-Zuordnungen in 5.2** und das Audit-Exemplar.
- **Datierung der Workshopreihe.** Der Text sagt seit dem 2026-07-27 „materials go back to June 2023" und stützt sich damit auf das Anlagedatum des GM-DH-Repositoriums; der zitierte Zenodo-Deposit trägt 2024-02-11 und keine Termine. Die Winter-School-Notizen datieren die Reihe auf Herbst 2023. Wann sie lief, weiß nur der Operator.
- **Volle Autorenlisten für sechs Referenzeinträge.** `chuehong-2022`, `dellacqua-2023`, `lambert-2024`, `mei-2025`, `sharma-2023` und `wilkinson-2016` kürzen mit „et al."; bei den großen Kollektiven ist das üblich, bei Dell'Acqua und Mei sollte die volle Liste stehen.
- **URL-Praxis bei DHQ-Artikeln.** Grallert und Holmes tragen eine URL, Whitelaw, Drucker 2011 und Risam/Gil nicht. Vereinheitlichen.
- **zbz-ocr-tei sichtbar stellen.** Operator-Aktion; danach Fußnote nach dem Muster der übrigen Fallfußnoten.
- **Zenodo-Belege der Teaching Cases** und Video-Transkripte für die Präzision der Thinking-Matrix.
- **Wheaton in der Dissertation.** Der Operator sagt, das Projekt werde dort direkt verwendet; verifizieren, dann als Genealogie-Satz nutzbar.
- **Curtis-Wortlaut.** Zugangsklasse C, Wortlautprüfung an einem Operator-Exemplar steht aus.
- **TaDiRAH-Claim.** Dass Verification und Audit dort keine Entsprechung haben, ist bisher ein Posit. Das Distillat zu Borek et al. 2021 vom 2026-07-27 löst das nicht ein, weil sein Abstract über Formalisierung, SKOS und FAIR spricht und über die Aktivitätsstruktur schweigt. Entweder das SKOS-Vokabular als Datenquelle aufnehmen und die Abwesenheit dort verankern, oder als Posit in eigener Formulierung stehen lassen.
- **Confabulation** steht im Text ohne Beleg; Kandidat Ji et al. 2023, ungeprüft.
- **Herleitung der Dokumenttypologie aus dem Knowledge Engineering.** Der Text ruft die Unterscheidung deklarativ gegen prozedural auf, ohne Fundstelle; Kandidat Studer, Benjamins und Fensel 1998, ungeprüft. Für die Site trägt Diátaxis (Procida) dieselbe Achse belegt, was hier ebenfalls in Frage kommt.
- **Yehudai-Fähigkeitenliste.** Die Agentic-Engineering-Passage nennt fünf Fähigkeiten, das geprüfte Abstract trägt Planung, Schlussfolgern, Werkzeuggebrauch und Umgebungsinteraktion. Entweder auf die belegte Form kürzen oder den Volltext aufnehmen und Memory und Self-Reflection dort verankern.
- **Grallert-Heftangabe** ist gesetzt (DHQ 20/1, 2026); die verbleibende Referenzarbeit ist damit erledigt, Seitenzahlen entfallen generell nach der Zitierweise.

## Weg zur Einreichung

Reihenfolge mit Gates; kein Claim ohne Prüfvermerk, keine Einreichung ohne Operator-Freigabe. Abweichungen mit Begründung ins Journal.

1. Sprachlicher Katalog-Durchgang über den Gesamttext, danach Abstract-Abgleich gegen den finalen Textkörper. *Ausgeführt für Sektionen 1 bis 7; bei jeder Neufassung der Eröffnung zu wiederholen.*
2. Auflösung der offenen Entscheidungen und Prüfpunkte.
3. Operator-Freigabe der Fassung. *Feedback-Runden laufen.*
4. Novelty-Recherche gegen den aktuellen Diskurs; außenwirksame Claims nur in der Form, die die Prüfung lizenziert.
5. Venue-Entscheidung und Einreichung (Operator-gated).
6. Abgeleitete Ausgaben nach Freigabe. Offen sind der deutsche Blogpost, der Obsidian-Vault-Abgleich in einer echten Vault-Session und der Grounded-Vault-Nachzug neuer tragender Claims.

**Venue (2026-07-23): ZfdG**, Zeitschrift für digitale Geisteswissenschaften. Englische Einreichung ist möglich, Diamond OA, mehrstufiges moderiertes Review. Als Fallback dokumentiert sind DHQ, IJDH (mit OA-Kostenvorbehalt), DSH und TGDK-SI Semantic Digital Humanities.

**ZfdG-Formalia als gesetzte Randbedingungen.** Gattung Fachartikel. Zuerst Exposé, höchstens 1.000 Wörter plus Literaturliste und vorläufiges Inhaltsverzeichnis. Zweisprachiges Abstract deutsch und englisch zu je höchstens 750 Zeichen. Zitierweise Fußnoten-Kurzbeleg Autor-Jahr, offizielle CSL-Datei vorhanden. Dezimale Sektionsnummerierung, Zieltiefe zwei Ebenen. Werkzeuge als formale Softwarezitation in die Bibliographie. Artikel-Lizenz CC BY-SA 4.0. Britische Schreibung bleibt (die amerikanische ZfdG-Hauspraxis ist Beobachtung, keine Vorgabe).

Die Formalia sind hier normativ; das angewandte Einreichpaket mit Exposé, den beiden Kurz-Abstracts und der Gliederung steht in [submission-zfdg.md](submission-zfdg.md) und wird von hier abgeleitet.

**Weitere Operator-Punkte** (Review-Modus, Site-Variante, Katalog-Freigabe Technology, zbz-Sichtbarkeit, Bestätigung der Erfahrungswerte) sind zurückgestellt und werden im Forschungsbericht `knowledge/report.md` geführt, dort auch die verifizierten Feinschliff-Kandidaten der Venue- und Novelty-Recherche.

## Revisionsprozess

Die Revision des fertigen Drafts folgt dem Vier-Phasen-Prozess aus [revision.md](revision.md), Audits A0 bis A3, Operator-Entscheidung, Implementierung, Konsistenzpass. Drei Prozessregeln daraus gelten für alle Prüf- und Revisionsaufträge an diesem Paper.

- Audit-Aufträge sind anker-frei. Sie nennen Ziel, Kontext und Qualitätsmaßstab, aber keine Fundstellen, Beispielprojekte oder fertigen Lösungen, damit der Auftrag zugleich testet, ob die Kritik am Text auffindbar ist.
- Ein freies Lektorat (A0) läuft vor jedem Kontakt des Prüfers mit bekannten Problemfeldern.
- Jeder Änderungsvorschlag trägt einen Steelman des bestehenden Texts, und zwischen Audit und Implementierung steht eine harte Operator-Schranke, hinter der kein Audit-Befund ohne dokumentierte Entscheidung umgesetzt wird.

Die vorgesehene Datei `revision-decisions.md` hat nie einen Commit gesehen; die Entscheidungen liegen in Chat, Commit-Nachrichten und diesem Dokument. Ob die Regel einen Dateiträger bekommt oder auf diesen realen Weg umgeschrieben wird, ist offen ([revision.md](revision.md)).
