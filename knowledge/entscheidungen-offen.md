---
title: Offene Entscheidungen
project:
  name: Promptotyping
  repository: https://github.com/DigitalHumanitiesCraft/Promptotyping
method:
  name: Promptotyping
  url: https://dhcraft.org/Promptotyping/
template:
  name: Vorlage Planung
  version: "0.2"
  url: https://dhcraft.org/Promptotyping/promptotyping-document/plan
status: active
created: "2026-07-26"
updated: "2026-07-26"
---

# Offene Entscheidungen

Alles, was in Site, Paper und Konvention noch nicht entschieden oder noch nicht ausgeführt ist, ausgearbeitet bis zu dem Punkt, an dem eine Zustimmung genügt. Jeder Eintrag trägt Sachstand mit Beleg, Optionen, Empfehlung und die konkrete Umsetzung.

Die Einträge zerfallen in drei Klassen. Teil A führt, was bereits entschieden ist und nur nicht ausgeführt wurde; dort ist keine neue Entscheidung nötig, sondern eine Reihenfolge. Teil B führt die offenen Punkte an der Site. Teil C führt Paper und Einreichung.

Steuerdokumente bleiben [plan-site.md](plan-site.md) für die Site und [paper-writing.md](paper-writing.md) für das Paper. Dieses Dokument sammelt, was dort verstreut als offen vermerkt ist, und arbeitet es aus.

## Teil A. Entschieden, aber nicht ausgeführt

### A1. Die Site wird vollständig englisch

**Sachstand.** Der Operator hat am 2026-07-25 entschieden, dass die Site vollständig englisch wird (journal.md, Abschnitt „Sprachentscheidung"). Begründet ist das damit, dass Paper, Vault, README, Vorlagen-Slugs und Maschinenadressen bereits englisch sind und die Übertragbarkeitsbehauptung von Abschnitt 6.5 mit einer ausschließlich deutschen Spezifikation nicht einlösbar ist. Deutsch bleiben laut derselben Entscheidung das Unterrichtsmaterial, das als solches ausgewiesen wird, und die Vorlagennamen, die Identifikatoren in fremden Frontmatter-Blöcken sind.

Ausgeführt ist davon nichts. Die `CLAUDE.md` trägt weiterhin die gegenteilige Regel, „Keine englische Fassung in Phase 1. Site ist deutsch". Zwischen der Entscheidung im Journal und dem Action-Layer besteht damit ein Widerspruch, den ein Agent in der nächsten Sitzung auflösen muss, ohne die Belegstelle zu kennen. Das ist die dringendste Stelle in diesem ganzen Dokument, weil sie stillschweigend in die falsche Richtung wirkt.

**Umfang.** Betroffen sind alle vierzehn Seiten. Substanziell zu übersetzen sind die neun Markdown-Dateien unter `_content/`, die beiden Datendateien `data/glossar.json` mit siebenundvierzig Einträgen und `data/case-studies.json`, dazu `data/promptotyping-documents.json` mit den Funktions- und Triggertexten. Formal zu übersetzen sind die Beschriftungen im Seitenregister, die Gruppennamen, die Statuszeile und die Bedienelemente in `app.js`. Nicht betroffen sind der Papertext, der englisch ist, und die Vault-Ansicht, deren Claims englisch sind.

**Was die Entscheidung nicht klärt.** Drei Punkte, die vor der Ausführung festzulegen sind.

1. Die publizierten Anker sind deutsch (`#ueberblick`, `#vorlagen`, `#konvention-v0.1`, `#arbeitsumgebung`). Sie dürfen laut `CLAUDE.md` nicht ohne Diskussion umbenannt werden, weil fremde Repos sie als `template:`-URI führen. Empfehlung: Anker bleiben deutsch, Beschriftungen werden englisch. Ein Anker ist ein Identifikator und kein Text; die Vorlagen-Slugs sind aus demselben Grund bereits englisch, während die Vorlagennamen deutsch geblieben sind. Der Preis ist eine sichtbare Inkonsistenz zwischen Adresse und Beschriftung, der Gewinn ist, dass keine publizierte Adresse bricht.
2. Das Unterrichtsmaterial soll deutsch bleiben und „als solches ausgewiesen" werden. Auf der Site gibt es heute keine Seite, die Unterrichtsmaterial führt. Empfehlung: den Punkt zurückstellen, bis es eine solche Seite gibt, und ihn nicht vorsorglich bauen.
3. Die Konvention ist ein Vault-Spiegel. Eine englische Fassung im Repo, während der Vault deutsch bleibt, ist genau die stillschweigende Divergenz, die die `CLAUDE.md` verbietet. Empfehlung: die Konvention wird zuletzt übersetzt, gemeinsam mit dem Vault-Original in einer echten Vault-Sitzung.

**Empfehlung zur Reihenfolge.** Zuerst die `CLAUDE.md`-Regel auf die Entscheidung ziehen, damit der Widerspruch nicht weiterwirkt. Dann die Shell, also Register, Gruppen, Statuszeile, Bedienelemente, weil das wenig Text und viel sichtbare Wirkung ist. Dann die fünf eigenständig geschriebenen Seiten Einstieg, Anwendung, Artefakt, Verifikation und Beispiel-Workflow, deren Quelle der englische Papertext ohnehin ist. Dann die Datendateien. Zuletzt die Vault-Spiegel Konvention, Praxis und Arbeitsumgebung in einer Vault-Sitzung.

### A2. Der Pflichtkern der Konvention geht auf sechs Felder

**Sachstand.** Der Operator hat am 2026-07-25 entschieden, dass der Pflichtkern von acht auf sechs Felder geht und das Statusvokabular über alle fünfzehn Fülltemplates vereinheitlicht wird (journal.md, „Konvention auf den Paperstand"). Der Papertext führt die sechs bereits namentlich, in Abschnitt 3.3: `title`, `project`, `method`, `status`, `created`, `updated`. Die Begründung steht dort ebenfalls, eine Erhebung der realen Wissensbasen fand kein einziges Repositorium, das den Achter-Kern vollständig erfüllt, und eine Anforderung, die die Praxis stillschweigend übergeht, dokumentiert nichts.

`_content/konvention.md` führt weiterhin acht. Die beiden Felder, die fallen, sind damit `template` und `zweck`.

**Was daran noch zu entscheiden ist.** Der Wegfall von `template` aus dem Pflichtkern ist nicht folgenlos. Das ganze Adressierungskonzept der Site hängt an diesem Feld, ADR-3, der Frontmatter-Inspector und die Maschinenadresse nach ADR-10. Ein Repo ohne `template:` ist für den Inspector unsichtbar. Der Papertext selbst sagt im selben Absatz, eine Wissensbasis erkläre ihre Methode über dieses Feld.

Empfehlung: `template` fällt aus dem Pflichtkern und steht an die Spitze der empfohlenen Schicht, mit einem Satz, der die Folge benennt. Wer das Feld führt, ist über den Inspector adressierbar und maschinell anschließbar; wer es weglässt, verliert diese Eigenschaft und sonst nichts. Damit bleibt die Erhebung respektiert, ohne dass die Adressierbarkeit unbegründet als Beiwerk erscheint. `zweck` fällt ersatzlos, weil sein Inhalt in der Praxis im ersten Absatz des Dokuments steht.

**Umsetzung.** Im Vault-Original der Konvention die Pflichtkern-Tabelle auf sechs Zeilen kürzen, `template` als erste Zeile der empfohlenen Tabelle mit dem Folgesatz aufnehmen, `zweck` streichen. Dann ins Repo spiegeln. Vault-first, also eine echte Vault-Sitzung. Danach die fünfzehn Fülltemplates auf das vereinheitlichte Statusvokabular ziehen, ebenfalls vault-first.

**Prüfstelle nach der Ausführung.** Die sechs Wissensdokumente dieses Repos führen `template:` selbst und demonstrieren die Methode an sich selbst (Akzeptanzkriterium A12). Sie behalten das Feld, es ist dann empfohlen und nicht mehr verlangt.

## Teil B. Offen an der Site

### B1. Die zwei verbleibenden Doppelungen der Startseite

**Sachstand.** Die Startseite trägt nach dem Durchgang vom 2026-07-26 noch zwei Abschnitte, die eine Seite hinter ihr vollständiger führt.

„Knowledge Documents und ihre drei Spezialisierungen" beschreibt die Einteilung in Declarative, Process und Action Documents samt dem Diagnoseraster. Teil 3 der Spezifikation führt dieselbe Sache in zwei Abschnitten, „Klassifikation der Dokumenttypen" und „Lese-Heuristik (Funktion → Typ → Diagnose)", und dort ausführlicher.

„Artefakte und Skalierung" trägt zwei Aussagen. Die erste, das Artefakt sei im Default ein selbstgenügsames statisches Web-Tool mit begründungspflichtiger Abweichung, steht in Teil 4 unter „Die Voreinstellung" und „Grenzen des Formats". Die zweite, dieselbe Methode trage die einzelne Sitzung mit einem Agenten ebenso wie die Arbeit mit koordinierten Subagenten, steht nirgends sonst auf der Site.

**Optionen für den ersten Abschnitt.** Streichen und auf Teil 3 verweisen, oder auf zwei Sätze kürzen. Empfehlung: streichen. Der Spezifikationsindex führt Teil 3 mit der Kurzbeschreibung bereits, und ein Verweissatz im Abschnitt „Wo ansetzen" reicht.

**Optionen für den zweiten Abschnitt.** Die Artefakthälfte streichen ist unstrittig. Für die Skalierungshälfte gibt es drei Wege. Sie bleibt auf der Startseite als eigener kurzer Abschnitt „Skalierung", sie wandert in Teil 1 zu den Phasen, oder sie wandert in Teil 4 zum Artefakt. Empfehlung: nach Teil 1. Skalierung ist eine Eigenschaft der Anwendung und nicht des Artefakts, und Teil 1 führt mit „Zwei Modi" bereits einen Abschnitt, an den sie inhaltlich anschließt.

**Umsetzung.** In `_content/ueberblick.md` beide Abschnitte entfernen, den Absatz zur Skalierung nach `_content/anwendung.md` unter „Zwei Modi" verschieben, in „Wo ansetzen" einen Verweis auf Teil 3 ergänzen. Danach trägt die Startseite Titel, Geltungssatz, Statustabelle, Index, „Was die Methode ist" und „Wo ansetzen". Das ist die Form, die eine Spezifikationsfront hat.

### B2. Das Markenzeichen im Kopf

**Sachstand.** Der Kopf trägt heute die Wortmarke und den Gattungsvermerk, ohne Zeichen. Zwei Zeichen wurden versucht und wieder entfernt, das DHCraft-Aquarell und `assets/promptotyping-logo.png`. Beide sind detailreiche Bilder mit mehreren Farbfeldern, die auf zweiundzwanzig Pixeln zum Fleck werden und als einziger Farbpunkt einer sonst monochromen Seite stehen.

**Optionen.** Es bleibt bei der Wortmarke, oder es entsteht eine einfarbige Marke, die als kleines Zeichen gezeichnet ist.

**Empfehlung.** Es bleibt bei der Wortmarke. Publizierte Spezifikationen führen im Kopf üblicherweise Wortmarke und Gattung, und die Designregel dieses Repos verbietet dekorative Elemente ohne Funktion. Ein Zeichen im Kopf leistet hier nichts, was die Wortmarke nicht leistet.

**Falls doch ein Zeichen gewünscht ist**, ist dies die Spezifikation dafür. Eine SVG-Datei `assets/img/promptotyping-mark.svg`, einfarbig in `currentColor`, gezeichnet auf einem Raster von 24 mal 24 Einheiten mit einer Strichstärke von 2 Einheiten und einem Sicherheitsabstand von 2 Einheiten zum Rand. Kein Text, keine Füllfläche unter 3 Einheiten Kantenlänge, keine Farbe. Motivisch trägt das vorhandene Logo drei Elemente, Dokument, Datenzylinder und Fragezeichen; für eine Marke dieser Größe ist eines davon zu wählen, und das Dokument ist das tragende, weil die Methode dokumentgetrieben ist. Geprüft wird die Marke, indem sie bei 22 Pixeln neben der Wortmarke steht und in Graustufen noch als Form erkennbar ist. Das ist Gestaltungsarbeit und keine Codearbeit; ich kann die Datei anlegen, aber das Urteil über die Form liegt beim Operator.

### B3. Die Vorlagen `technology` und `publication`

**Sachstand.** Der Vorlagenkatalog führt fünfzehn Vorlagen. `knowledge/report.md` nennt unter den Arbeitsschritten für eine echte Vault-Sitzung zwei weitere, `technology` und `publication`; die Freigabe von `technology` steht seit dem 2026-07-23 aus. Der Katalog wird vault-first gepflegt, also existiert die Vorlage erst, wenn sie im Vault existiert.

Material für `technology` liegt im Repo bereits, `_content/technology-baseline.md` mit Status `draft`. Es beschreibt die statische Webseite als Forschungstool und ist inhaltlich der Kern dessen, was die Vorlage tragen soll.

**Was die Vorlage tragen soll.** Ausgearbeitet, damit die Vault-Sitzung nur noch ausführt. Funktion: die verbindliche Technologie-Grundlinie eines Projekts, also welche Technologien gesetzt sind, welche ausgeschlossen, und woran eine Abweichung zu begründen ist. Typ: Action Document, weil sie Handlungswissen darüber trägt, was ein Agent im Projekt bauen darf. Empfohlene Datei: `technology.md`. Auslöser: sobald ein Projekt mehr als eine Implementierungsentscheidung trifft, die über die einzelne Sitzung hinaus gelten soll. Abschnitte: Geltungsbereich, gesetzte Technologien mit Begründung, ausgeschlossene Technologien mit Begründung, Abweichungsregel, Übergabepunkt zum Research Software Engineering.

`publication` ist weniger weit gediehen. Funktion wäre der Weg vom Artefakt zur zitierbaren Veröffentlichung, also Release, persistenter Identifikator und Zitationsmetadaten. Abschnitt 4.1 des Papers beschreibt genau diese Lücke als den Punkt, an dem die Methode gegen FAIR4RS scheitert. Empfehlung: `technology` jetzt, `publication` zurückstellen, bis der FAIR4RS-Weg an einem realen Projekt einmal gegangen ist. Eine Vorlage für einen Weg, den noch niemand gegangen ist, wäre geraten.

**Umsetzung.** Echte Vault-Sitzung, Vorlage anlegen, danach Spiegelung nach `_content/promptotyping-document/technology.md`, Eintrag in `data/promptotyping-documents.json` mit Funktion und Trigger, Zeile in `_content/MANIFEST.md`, Slug `technology` in die Slug-Liste der `CLAUDE.md`.

## Teil C. Offen an Paper und Einreichung

### C1. Das zweisprachige ZfdG-Abstract

**Sachstand.** Die ZfdG verlangt ein Abstract deutsch und englisch zu je höchstens 750 Zeichen (paper-writing.md, Randbedingungen der Einreichfassung). Der Papertext trägt ein englisches Abstract von vier Absätzen, das für den Fließtext gedacht ist und die Grenze deutlich überschreitet. Beide Kurzfassungen fehlen.

**Ausgearbeiteter Vorschlag, englisch.**

> Digital research data is accessible only through software, and a generic tool cannot serve the specific questions a project asks of its own material. This paper introduces Promptotyping, an iterative, document-driven method of context engineering for agentic coding tools, through which researchers translate structured research data into research artefacts. The working material is a small set of versioned Markdown documents holding requirements, data descriptions, and design decisions, from which an LLM-based agent derives the artefact. The documents are what the method maintains, and the artefact is regenerated from them. Documented projects and teaching cases provide the evidence. The contribution is methodological and conceptual.

**Ausgearbeiteter Vorschlag, deutsch.**

> Digitale Forschungsdaten sind nur über Software zugänglich, und ein generisches Werkzeug trägt die spezifischen Fragen nicht, die ein Projekt an sein Material stellt. Der Beitrag führt Promptotyping ein, eine iterative, dokumentgetriebene Methode des Context Engineering für agentische Coding-Werkzeuge, mit der Forschende strukturierte Forschungsdaten in Forschungsartefakte übersetzen. Arbeitsmaterial ist ein kleiner Satz versionierter Markdown-Dokumente mit Anforderungen, Datenbeschreibungen und Designentscheidungen, aus dem ein LLM-gestützter Agent das Artefakt ableitet. Gepflegt werden die Dokumente, das Artefakt wird aus ihnen neu erzeugt. Evidenz sind dokumentierte Projekte und Lehrfälle. Der Beitrag ist methodisch und konzeptuell.

Beide liegen unter der Grenze. Beide verzichten auf volatile Zahlen, halten die britische Schreibung der englischen Fassung und wiederholen keinen Satz des Fließtext-Abstracts wörtlich, was Regel 9 des Prüfkatalogs verlangt.

**Offen bleibt die Entscheidung**, ob die deutsche Fassung eine Übersetzung der englischen ist oder eigenständig formuliert. Der Vorschlag oben ist eine enge Übersetzung. Empfehlung: so belassen. Bei einem Abstract dieser Länge ist Deckungsgleichheit ein Vorzug.

### C2. Das Exposé

**Sachstand.** Die ZfdG verlangt vor dem Artikel ein Exposé von höchstens 1.000 Wörtern samt Literaturliste und vorläufigem Inhaltsverzeichnis. Es ist nicht geschrieben. Die Sprache ist nicht festgelegt.

**Empfehlung.** Englisch, weil der Artikel englisch eingereicht wird und das Exposé den Artikel vertritt. Aufbau in fünf Teilen, Problem und Lücke, Beitrag, Methode und Materialbasis, Evidenz mit ihren Grenzen, Anschluss an die Zeitschrift. Der letzte Teil ist der, den ein Exposé gewinnt oder verliert; die ZfdG-Venue-Analyse liegt vor und nennt die inhaltlichen Anschlussstellen. Das Inhaltsverzeichnis fällt aus der bestehenden Gliederung, die Literaturliste aus dem Referenzverzeichnis.

Das ist Schreibarbeit von etwa einer Sitzung, und sie setzt voraus, dass der Papertext steht. Empfehlung zur Reihenfolge: nach C3 und C4.

### C3. Die verbliebenen Referenzen

**Sachstand.** Aus `paper-writing.md` offen: die Heftangabe zu Grallert (Zenodo-Preprint, die DHQ-Zuweisung existiert noch nicht), Baxter et al. 2012, Bleier et al. 2018, van Es et al. 2018, die Dissertations-Seitenzahlen für Wheaton und Basel sowie die Berners-Lee-Passage.

**Empfehlung.** Die drei nicht beauftragten Referenzen und die beiden Seitenzahlen sind Recherchearbeit ohne Entscheidungsbedarf; ich kann sie in einer Sitzung gegen die Originalquellen füllen. Die Grallert-Heftangabe ist nicht füllbar, solange das Heft nicht existiert. Empfehlung dafür: als Preprint mit DOI und Datum zitieren und die Angabe vor der Einreichung noch einmal prüfen.

### C4. Die Fußnoten-Konvention für Werkzeuge

**Sachstand.** Regel 18 des Prüfkatalogs verlangt, dass jedes namentlich genannte Werkzeug bei seiner Ersterwähnung eine Fußnote mit kompakter Definition und aktueller URL erhält. Eingeführt ist das für Gephi und Claude Code, ausstehend für die Werkzeuge in den Sektionen 4 und 5.

**Empfehlung.** Ausführen, aber mit einer Grenze, die die Regel selbst nicht zieht. Eine Fußnote pro Werkzeug lohnt dort, wo das Werkzeug für die Leserschaft der Zeitschrift nicht selbsterklärend ist. Für in den Digital Humanities eingeführte Werkzeuge genügt der Name. Die Auswahl lege ich vor, bevor ich sie setze, weil eine Fußnote zu viel den Apparat aufbläht und eine zu wenig gegen die eigene Regel verstößt.

### C5. Die sieben zurückgestellten Punkte aus dem Forschungsbericht

`knowledge/report.md` führt sie seit dem 2026-07-23. Sachstand und Empfehlung je Punkt.

1. **Abnahme der Feinschliff-Kandidaten 1–16.** Weitgehend erledigt, eingearbeitet sind alle bis auf den als optional geführten Bayerschmidt-Vorschlag und die Formalia von Punkt 16. Empfehlung: den Punkt schließen und die beiden Reste einzeln entscheiden.
2. **Review-Modus ZfdG, geschlossen oder offen öffentlich.** Reine Operator-Entscheidung ohne Vorarbeit meinerseits. Empfehlung: offen öffentlich, weil der Beitrag Nachvollziehbarkeit zum Thema hat und ein offenes Review dazu passt.
3. **Site-Variante 2 bestätigen, Vorlage Technology freigeben.** Variante 2 ist als Vorlagen-Hub umgesetzt und in `specification.md` A19 spezifiziert; der Punkt ist durch die Umsetzung erledigt. Die Vorlage steht in B3.
4. **zbz-ocr-tei öffentlich stellen.** Operator-Aktion, danach setze ich die Fußnote. Ohne sie trägt das Verifikations-Exemplar in 5.3 ein Repositorium, das niemand prüfen kann.
5. **Attribution der Übersetzungsmechanismus-Anregung.** Die Übersetzungsthese ist der theoretische Kern des Papers und geht auf die mündliche Anregung eines Kollegen zurück. Empfehlung: Danksagung mit Namensnennung nach Rückfrage bei der Person. Ohne Nennung bleibt eine Zuschreibungslücke an der tragenden Stelle des Textes.
6. **Erfahrungswerte bestätigen.** Dauer- und Kostenangaben der Projekttabelle und die Datenvolumen-Grenze in 4.3. Nur der Operator kann sie bestätigen. Empfehlung: bestätigen oder streichen; eine unbestätigte Erfahrungsangabe in einem Beitrag, der Nachvollziehbarkeit fordert, ist eine Angriffsfläche.
7. **Notker-Fußnote mit Repo-URL.** Derzeit fußnotenlos, spiegelbildlich zum ZBZ-Exemplar. Empfehlung: fußnotenlos lassen, damit die beiden Exemplare gleich behandelt sind.

## Reihenfolge über alle Teile

Zuerst A1, aber nur der erste Schritt, die Auflösung des Widerspruchs in der `CLAUDE.md`. Er kostet wenige Minuten und verhindert, dass die nächste Sitzung in die falsche Sprache baut.

Dann B1, weil es die Startseite fertig macht und keine andere Entscheidung berührt.

Dann C3 und C4, weil sie den Papertext einreichfähig machen und ohne Operator-Input laufen, mit Ausnahme der Werkzeugauswahl.

Dann eine echte Vault-Sitzung für A2 und B3, die beide dort hängen.

Dann der Sprachdurchgang der Site nach A1 in der dort genannten Ordnung.

Dann C1 und C2, das Doppelabstract und das Exposé, als letzte Schritte vor der Einreichung.

Operatorabhängig und außerhalb dieser Ordnung bleiben die Punkte 2, 4, 5 und 6 aus C5.
