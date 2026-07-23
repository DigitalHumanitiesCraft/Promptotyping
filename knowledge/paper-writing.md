---
title: Paper Writing
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
related: [INDEX, paper, journal]
---

# Paper Writing

Dieses Dokument trägt das Wissen über das Schreiben des Promptotyping-Papers. Es bildet mit `paper.md` ein Zwei-Dokumente-Modell: `paper.md` hält den vollständigen englischen Papertext, dieses Dokument hält formal und präzise alles, was über diesen Text entschieden, geprüft und noch zu tun ist. Es ersetzt die früheren Steuerdokumente `plan.md`, `paper-outline.md`, `verification-paper-figures.md`, den Draft-Snapshot `paper-draft-explorable-2026-07-23.md` und den Root-`PLAN.md`; deren Stände sind hier zusammengeführt (Operator-Entscheidung 2026-07-23), die Historie und die gelöschten Volltexte trägt die Git-History (letzter Stand vor der Zusammenführung: Commit `7c20964`).

## Arbeitsmodus

Das Paper entsteht als ein einzelnes englisches Markdown-Dokument `paper.md` (britische Schreibung, kein Metadaten-Header, da das Dokument am Stück nach Google Docs geht). Der Operator liest, gibt Feedback im Chat, die Überarbeitung läuft satzgenau in Feedback-Runden. Ungeprüfte Fakten, offene Referenzen und offene Entscheidungen tragen im Text eckige Marker `[...]`. Erst nach inhaltlicher Freigabe durch den Operator wird die Fassung in die Site-Sektionen `_content/paper/` zerlegt; bis dahin bleibt die publizierte Site unverändert. Die Provenienz tragender Claims liegt im Grounded Vault `vault/`; neue tragende Behauptungen werden dort nachgezogen, bevor die Fassung als einreichfähig gilt.

## Titel und Kernaussagen

Titel (Operator-Entscheidung 2026-07-23): **"Promptotyping. Translating Research Data into Research Artefacts with Context and Agentic Engineering"**.

Was der Text aussagen will:

1. Die Übersetzung ist der doppelte theoretische Kern. Das seit zwei Jahrzehnten dokumentierte Übersetzungsproblem zwischen Fachwissenschaft und Programmierung (Edmond, Siemens, Kemman, RSE) und die Charakterisierung von LLMs als Übersetzungsmechanismen treffen sich in denselben Dokumenten. Die Introduction kündigt den Bogen an, Sektion 2.4 führt ihn zusammen.
2. Die Eröffnungsprämisse ist ein Vermittlungs- und Gradientenargument: digitale Forschungsdaten sind nur durch Software zugänglich, deren Affordances bestimmen die stellbaren Fragen, und generische Werkzeuge (bis hin zu Gephi) enden dort, wo Fragen auf das Modellierte zielen. Das Rechnungsbuch-Beispiel (Sozial- gegen Wirtschaftsgeschichte) ist über die Dissertation belegt, ebenso der Ursprung der Methode aus der Flattening-Limitation des DEPCHA-Dashboards (Diss Kapitel 7.4).
3. Scope und Bedingung sind getrennt: "digital" markiert den Scope der Eröffnung, "structured" die Bedingung der Methode (Claim und Sektion 2.3).
4. Der Claim ist ein Möglichkeits-Claim mit drei Grenzen (Prototyp-Grenze mit RSE-Übergabe, Datenbedingung mit Modellierungsgradient, methodologisch-konzeptioneller Beitrag ohne Effizienzmessung). Keine Effizienz- oder Geschwindigkeitsbehauptung.
5. Der Artefaktbegriff ist breit (Exploration, Analyse, Pipelines, Proto-Editionen); Exploration ist Leitfall, kein Gesamtscope.
6. Die menschliche Datenarbeit ist Fundament; die Methode setzt sie und die fachwissenschaftliche Profession voraus und verleiht die RSE-Profession nicht (Deskilling-Lesart aktiv blockiert).
7. Naheliegende Gutachter-Einwände werden präemptiv im Text verhandelt (generische Tools existieren; Gephi ist spezialisiert und bleibt modellrelativ generisch; Geschwindigkeit unbelegt; Einzelpraktiker-Evidenz).
8. Quantitäten sind nie das Argument. Die Evidenz ist eine Auswahl dokumentierter Projekte und Experimente aus rund zwei Jahren, jedes im öffentlichen Repository nachvollziehbar; Zahlen erscheinen nur in verifizierter Form in der Projekttabelle.

## Sektionszwecke

Sektion 2 legitimiert die Voraussetzungen (Exploration als Forschungshandlung, Werkzeuge als epistemische Artefakte, Zwei-Achsen-Verhältnis von LLMs und Forschungsdaten, Übersetzungsthese, Diskursposition, Genealogie). Sektion 3 ist der kanonische Definitionsakt (Phasen, Dokumente, Provenienz, worked example). Sektion 4 begrenzt den Claim (statische Web-Werkzeuge, Funktions-Typologie, RSE-Übergabepunkt). Sektion 5 liefert Existenzbeweise (Projekttabelle, ein Exemplar je epistemischer Funktion, Teaching Cases als Transfertest). Sektion 6 benennt die Angriffsflächen selbst (Verifikation, Reproduzierbarkeit, Grenzen, Übertragbarkeit). Sektion 7 führt die beiden Übersetzungen zusammen. Der Abstract wird zuletzt aus dem finalen Textkörper neu komprimiert.

## Sprachregeln (Prüfkatalog)

Gilt für den gesamten Papertext; die vier Kernverbote der globalen Stilregeln gelten auch im Englischen.

1. Kein Aphorismus als Opener oder Absatzschluss; Pointen nur, wo sie echte Definition oder echtes Bild tragen, und vereinzelt.
2. Keine nachklappende Negation, auch nicht als "X rather than Y"; echte Kontraste als eigener Satz. Lizenzierte Ausnahme: Druckers "capta rather than given data".
3. Keine leeren Etikettsätze (Verdinglichung des Vorangegangenen plus Bewertungsadjektiv, "This gap is systematic", "is real", "matters"). Absatzübergänge tragen sich über die sachliche Beziehung der Aussagen.
4. Keine Ankündigungssätze über den eigenen Text ("Its central claim is a possibility claim", "The word X is chosen deliberately", "Three qualifications define the claim", "A note of reflexivity belongs here"). Direkt tun statt ankündigen; das First/Second/Third-Gerüst entfällt, wo die Aussagen sich selbst tragen.
5. Semikolon nicht als Ersatzkonnektor; zulässig in echten parallelen Reihen (Beispielreihen, die Übersetzungskette in 2.4), sonst eigenständige Sätze. Kein Doppelpunkt als Konnektor.
6. Keine Anaphern und rhetorischen Parallelismen ("they translate, they translate, they translate"); Reihen über ein regierendes Verb führen.
7. Wortwiederholungen in Nachbarsätzen variieren.
8. Durchgängig "I/my" statt "the author".
9. Keine wörtlichen Dubletten zwischen Abstract, Introduction und Sektionsanfängen; Rückverweise statt Wiederholung (Muster: 2.4 verweist auf die Literatur aus Sektion 1).
10. Höchstens eine Aufzählung pro Absatz.
11. Jargon selbsterklärend machen; vage Kategorien durch konkrete Werkzeuge ersetzen, wobei das Beispiel die Kategoriegrenze des Absatzes respektieren oder die Grenzverletzung explizit zum Argument werden muss.
12. Präsens statt Perfekt-Passiv für fortbestehende Bedingungen.
13. Irrelevante Details streichen, die ein fremdes Argument einschmuggeln ("within minutes").
14. Angreifbare Absolutheiten präzisieren; empirische Setzungen ("typically") durch selbsttragende Begründungen ersetzen; Inferenzen mit "I infer" markieren, ohne Doppelmarkierung.
15. Opake Idiome für internationale Reviewer meiden ("answer to" zu "fit").
16. Keine Superlative.
17. Keine volatilen Quantitäten im Fließtext; Zahlen nur in der Projekttabelle in verifizierter Form.
18. Fußnoten-Konvention: jedes namentlich genannte Werkzeug erhält beim Ersterwähnen eine Fußnote mit kompakter Definition und aktueller URL (eingeführt für Gephi und Claude Code; ausstehend für die Werkzeuge in Sektion 4 und 5).
19. Roadmap und Signposts funktional statt inventarisch; nicht jeder Satz beginnt mit "Section N".

## Entscheidungsstand

Vom Operator entschieden (Sessions 2026-07-23):

- Prototypen statt "bauen"; Effizienz-Disclaimer auf einen nüchternen Satz.
- Zwei-Achsen-Datenmodell (semantische Explizitheit gegen Tokenökonomie) mit der Auflösungsformel "das Modell liest über die Daten und schreibt Code, der die Daten liest".
- Schwierigkeitsprofil plus positionale Begründung statt "hardest case".
- RSE als institutionalisierte Antwort und Übergabepunkt; Profession-Schutzklausel.
- Tool-Positivismus-Absage; Semantic-Web-Linie mit Inferenz-Bremse.
- Workshop 2023 als datierter Wegpunkt; Dissertation als Ursprung, PRISM als Seitenlinie.
- Epistemic infrastructure fliegt aus dem Paper (nur Teil einer epistemischen Infrastruktur).
- Funktions-Typologie (Verification, Exploration, Edition, Capture, Audit) statt Gattungs-Typologie A–E; Teaching Cases als eigener Transfertest.
- Kürzungen: Zwei Modi als Absatz; Cognitive Load, Vibe Research, Pedagogy entfallen als eigene Abschnitte (Material bleibt für Blogpost und Site).
- Übersetzungsthese als theoretischer Kern (mündliche Anregung eines Kollegen, Attribution offen); Titel entsprechend.
- Eröffnung über Affordance-Gradient und Rechnungsbuch-Beispiel mit Dissertations-Grounding (siehe Kernaussagen).
- Wissensbasis-Refactor auf das Zwei-Dokumente-Modell (dieses Dokument).
- Positionierungs-Anker entschieden: FAIR (Wilkinson et al. 2016) in 2.3; FAIR4RS (Chue Hong/Katz/Barker et al. 2022, RDA-DOI 10.15497/RDA00068) in Sektion 4 und Discussion, gestützt auf den FAIR4RS-Check des szd-htr-Repos (stark bei R/Provenienz und A, systematisch schwach bei F; Befund noch als Verification Document ins szd-htr-Repo); RO-Crate ein Satz in 3.3 (prospektiv-operativ gegen retrospektiv-deskriptiv); maDMP (Miksa et al. 2019) als Prozessvergleich aus der Forschungsdaten-Welt; CRISP-DM gestrichen.
- FAIR-Infrastruktur-Politik (Operator-Abnahme 2026-07-23): Dual-Licensing MIT für Code, CC BY 4.0 für Dokumentation und Promptotyping-Dokumente, Forschungsdaten Dritter pro Repo mit eigener Rechteangabe ausgenommen. Zitationsidentität Christopher Pollin, Digital Humanities Craft OG, ORCID 0000-0002-4879-129X; ergänzend weitere Identifier-Formen (GitHub-Profil via sameAs/website) mitführen. Releases ohne vorgeschriebene Kadenz, geschnitten wenn der Stand es für das jeweilige Vorhaben trägt; eine Zenodo-DOI setzt mindestens ein Release voraus. Umsetzung als Subagenten-Durchgang über die Repos plus Generator-Skript Frontmatter→CITATION.cff/codemeta.json; Vorlage Publication (Slug-Vorschlag `publication`) vault-first in den Katalog.

## Offene Prüfpunkte

Jeder Punkt entspricht einem `[...]`-Marker im Text oder einer offenen Randbedingung; Auflösung heißt verifiziert, belegt oder gestrichen, mit Prüfvermerk hier.

- Aldersbach-Fakten gegen das Projekt-Repo; Widerspruch zwischen worked example (3.4) und post-hoc-Dokumenten-Aussage (3.1/5).
- Zenodo-DOI und Versionsstand der Workshopreihe 2023 (10.5281/zenodo.10647754).
- Titel und zitierte Passage des Berners-Lee-Buchs 2025.
- RSE-Personallage-Beleg (Community-Survey) oder Inferenz-Markierung in 2.4.
- Attribution der Übersetzungsmechanismus-Charakterisierung (Kollege fragen; keine Namensnennung Dritter im Paper, Rolle statt Name).
- Exemplar-Zuordnungen in 5.2 und Audit-Exemplar.
- Referenzen vervollständigen (Pollin/Steiner 2026, Pollin 2025c, Pollin 2025d, INKE-Referenz).
- Datenvolumen-Grenze in 4.3 `[to verify]`.
- Quantitäten-Bereinigung in Abstract und Sektion 5 (Regel 17).
- Quell-Repos öffentlich nachvollziehbar sichern (Stand zuletzt: KASKADE ohne Historie, slides-generator uncommittet, deepseek-ocr ungepusht); Bedingung der Nachvollziehbarkeits-Aussage in Sektion 5.
- Namensnennung des Fork-Urhebers in Sektion 4 (Zustimmung oder Rolle statt Name).
- Positionierung der Fünf-Funktionen-Typologie (Sektion 4) gegenüber TaDiRAH und Workflow-Schemata (Session 2026-07-23, Web-Recherche verifiziert): TaDiRAH klassifiziert Aktivitäten, unsere Typologie Artefakt-Funktionen; Capture/Exploration/Edition haben partielle Entsprechungen, Verification und Audit fehlen in TaDiRAH, was die Typologie als Ergänzung motiviert. Zitationen: Borek et al. 2016 (DHQ 10.1, TaDiRAH-Grundlagenartikel; v2.0 als SKOS ab 2020/21, genaue v2-Zitation noch festlegen); TaDiRAH-Kritik und Genealogie aus Grallert et al., "Open Tool Registries! Resolving the Directory Paradox with Wikidata", DHQ 2026 (Preprint Zenodo 10.5281/zenodo.15094816), der Quelle des vom Operator eingebrachten Exzerpts. Für 3.2 der CRISP-DM-Kontrast (Chapman et al. 2000, sechs Phasen, De-facto-Standard): kein Äquivalent zur Distillation-Phase, der Verdichtung in eine kuratierte Spezifikation für einen maschinellen Akteur. SSH Open Marketplace als DH-Workflow-Erfassung (Schritte mit TaDiRAH-Annotation, JOHD 10.5334/johd.192), kennt ebenfalls nur Aktivitätsketten, kein Vokabular für steuernde Dokumente.
- Spec-Driven-Development-Welle 2025/26 (GitHub Spec Kit, AWS Kiro, OpenSpec, BMAD, Tessl) für die Novelty-Positionierung sichten: gleiche Grundidee (Spezifikation als Source of Truth für Agenten), aber generisches Software-Engineering ohne Forschungsdaten-, Verifikations- und Epistemik-Schicht; Promptotyping-Definition (Dissertation, Blog Frühjahr 2025) datiert vor bzw. parallel zur SDD-Begriffsbildung. Gehört in die Novelty-Recherche (Weg zur Einreichung, Schritt Novelty) und ggf. als Absatz in 2.5 oder Discussion.

## Evaluationsfragen zum Einbau-Stand 2026-07-23

Prüffragen nach dem Muster von Competency Questions; jede Frage muss mit Ja beantwortbar sein, bevor der Stand als konsolidiert gilt. Beantwortung im Chat oder als Vermerk hier.

1. Trägt jede in den Sessions vom 2026-07-23 neu eingebaute Passage eine Referenz oder einen `[...]`-Marker, keine unbelegte Substanzbehauptung?
2. Widerspricht das Semi-Formalitäts-Argument (3.3) an keiner Stelle der Tokenökonomie von 2.3, insbesondere qualifiziert der Substrat-Absatz "direct processability" gegen "passt in den Kontext"?
3. Sind Identitätsformel (Beschreibung = Spezifikation) und doppelter Adressat als ein Gedanke erzählt, ohne Dopplung zwischen den Absätzen von 3.3?
4. Bleibt der Grounded Vault als "early, documented use" markiert, ohne Overclaim, und reaktiviert die Passage nicht das gestrichene Epistemic-Infrastructure-Kapitel?
5. Stimmen die Fußnoten in Nummerierung, Textreihenfolge und Definition ([^1] Gephi, [^2] Claude Code, [^3] Frontier LLM, [^4] Specification, [^5] Spec Kit, [^6] Grounded Vault), und hat jedes benannte Tool eine Fußnote mit URL?
6. Deckt die Dissertation die Intro-Verankerung wirklich (Wheaton-Persona sozialhistorisch, Basel-Persona wirtschaftshistorisch, dokumentierte User Stories)?
7. Besteht der Gesamttext die Selbstprüfung gegen die Kernverbote auch in den neuen Passagen (Doppelpunkt-Konnektoren, Negativ-Appositionen, Ankündigungssätze, Etikettsätze)?
8. Sind alle neuen Zitationen im Referenzverzeichnis vorhanden (Wilkinson, Chue Hong, Miksa, Soiland-Reyes, Grallert, Mayr/Thalheim, Broy/Kuhrmann, JOHD-Marker, SDD-Marker)?
9. Zeigen 2.4 und 3.3 wechselseitig konsistent aufeinander (Formalisierung als der Schritt, den die Maschine übernimmt)?
10. Sind die bestehenden Faktenmarker unangetastet und keiner durch die Einbauten stillschweigend aufgelöst worden?

## Verifikation der Projektzahlen

Die quantitativen Angaben der Projekttabelle wurden am 2026-07-19 adversarial gegen die realen Repositories geprüft (lokale Clones, Shallow Clones, GitHub API, Einzelagent); die Korrekturen sind in die Tabelle eingearbeitet. Der vollständige Befund ist Quelle im Grounded Vault (`vault/_sources/verification-paper-figures-2026-07-19.md`, Claims im MOC-Evidence). Dauer- und Kostenangaben sind Erfahrungswerte und deterministisch nicht prüfbar; sie bleiben als solche gekennzeichnet. Spätere Repo-Stände weichen ab (Snapshot-Drift); die redaktionelle Regel ist Datierung der Zahl statt Nachführung.

## Weg zur Einreichung

Reihenfolge mit Gates; kein Claim ohne Prüfvermerk, keine Einreichung ohne Operator-Freigabe. Abweichungen mit Begründung ins `journal.md`.

1. Sprachlicher Katalog-Durchgang durch die Sektionen 3 bis 7 (Introduction und Sektion 2 sind durch), danach Abstract-Neufassung aus dem finalen Textkörper.
2. Auflösung der offenen Prüfpunkte.
3. Operator-Freigabe der Fassung (Feedback-Runden laufen).
4. Novelty-Recherche gegen den aktuellen Diskurs; außenwirksame Claims nur in der Form, die die Prüfung lizenziert.
5. Venue-Entscheidung und Einreichung (Operator-gated).
6. Abgeleitete Ausgaben nach Freigabe, unabhängig von der Einreichung: Zerlegung in `_content/paper/` und Site-Sektionen (samt ausstehendem Vorlagen-Sweep-Site-Update), deutscher Blogpost, Obsidian-Vault-Abgleich (echte Vault-Session; Atom Promptotyping, MOC), Grounded-Vault-Nachzug der neuen tragenden Claims (Dissertation als Quelle für Flattening-Ursprung und Schwierigkeitsprofil).

Offene Entscheidungen: **E1** Venue. **E2** PRISM-Deck-Datierung (Zenodo-Snapshot oder GM-DH-Commit genügt). **E3** Blogpost-Einstieg (Alltags-Generalisierungsbeispiel). **E4** Machine-Review-Freigabe im Grounded Vault (Fremdfamilien-Mechanismus laut `vault/knowledge/specification.md`).
