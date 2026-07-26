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
updated: 2026-07-26
---

# Offene Entscheidungen

Alles, was in Site, Paper und Konvention noch nicht entschieden oder noch nicht ausgeführt ist, ausgearbeitet bis zu dem Punkt, an dem eine Zustimmung genügt. Jeder Eintrag trägt Sachstand mit Beleg, Optionen, Empfehlung und die konkrete Umsetzung.

Die Einträge zerfallen in drei Klassen. Teil A führt, was bereits entschieden und noch nicht oder nur teilweise ausgeführt ist; dort ist keine neue Entscheidung nötig, sondern eine Reihenfolge. Teil B führt die offenen Punkte an der Site. Teil C führt Paper und Einreichung.

Ein ausgeführter Eintrag bleibt mit seiner Begründung stehen und trägt den Ausführungsvermerk im Titel, damit die Entscheidung nachlesbar bleibt, wenn jemand später fragt, warum die Sache so und nicht anders liegt.

Steuerdokumente bleiben [plan-site.md](plan-site.md) für die Site und [paper-writing.md](paper-writing.md) für das Paper. Dieses Dokument sammelt, was dort verstreut als offen vermerkt ist, und arbeitet es aus.

## Teil A. Entschieden, aber nicht ausgeführt

### A1. Die Site wird vollständig englisch

**Sachstand.** Der Operator hat am 2026-07-25 entschieden, dass die Site vollständig englisch wird (journal.md, Abschnitt „Sprachentscheidung"). Begründet ist das damit, dass Paper, Vault, README, Vorlagen-Slugs und Maschinenadressen bereits englisch sind und die Übertragbarkeitsbehauptung von Abschnitt 6.5 mit einer ausschließlich deutschen Spezifikation nicht einlösbar ist. Deutsch bleiben laut derselben Entscheidung das Unterrichtsmaterial, das als solches ausgewiesen wird, und die Vorlagennamen, die Identifikatoren in fremden Frontmatter-Blöcken sind.

Ausgeführt ist davon nichts. Die `CLAUDE.md` trägt weiterhin die gegenteilige Regel, „Keine englische Fassung in Phase 1. Site ist deutsch". Zwischen der Entscheidung im Journal und dem Action-Layer besteht damit ein Widerspruch, den ein Agent in der nächsten Sitzung auflösen muss, ohne die Belegstelle zu kennen. Das ist die dringendste Stelle in diesem ganzen Dokument, weil sie stillschweigend in die falsche Richtung wirkt.

**Umfang.** Betroffen sind alle vierzehn Seiten. Substanziell zu übersetzen sind die neun Markdown-Dateien unter `_content/`, die beiden Datendateien `data/glossar.json` mit siebenundvierzig Einträgen und `data/case-studies.json`, dazu `data/promptotyping-documents.json` mit den Funktions- und Triggertexten. Formal zu übersetzen sind die Beschriftungen im Seitenregister, die Gruppennamen, die Statuszeile und die Bedienelemente in `app.js`. Nicht betroffen sind der Papertext, der englisch ist, und die Vault-Ansicht, deren Claims englisch sind.

**Was die Entscheidung nicht klärt.** Drei Punkte, die vor der Ausführung festzulegen sind.

1. Die publizierten Anker sind deutsch (`#ueberblick`, `#vorlagen`, `#konvention-v0.1`, `#arbeitsumgebung`). Sie dürfen laut `CLAUDE.md` nicht ohne Diskussion umbenannt werden, weil fremde Repos sie als `template:`-URI führen. Empfehlung: Anker bleiben deutsch, Beschriftungen werden englisch. Ein Anker ist ein Identifikator und kein Text; die Vorlagen-Slugs sind aus demselben Grund bereits englisch, während die Vorlagennamen deutsch geblieben sind. Der Preis ist eine sichtbare Inkonsistenz zwischen Adresse und Beschriftung, der Gewinn ist, dass keine publizierte Adresse bricht.
2. Das Unterrichtsmaterial soll deutsch bleiben und „als solches ausgewiesen" werden. Auf der Site gibt es heute keine Seite, die Unterrichtsmaterial führt. Empfehlung: den Punkt zurückstellen, bis es eine solche Seite gibt, und ihn nicht vorsorglich bauen.
3. Die Konvention ist ein Vault-Spiegel. Eine englische Fassung im Repo, während der Vault deutsch bleibt, ist genau die stillschweigende Divergenz, die die `CLAUDE.md` verbietet. Empfehlung: die Konvention wird zuletzt übersetzt, gemeinsam mit dem Vault-Original in einer echten Vault-Sitzung. Seit dem 2026-07-26 divergieren Repo-Spiegel und Vault-Original ohnehin schon inhaltlich (A2), sodass die Vault-Sitzung beide Nachzüge in einem Durchgang erledigt.

**Empfehlung zur Reihenfolge.** Zuerst die `CLAUDE.md`-Regel auf die Entscheidung ziehen, damit der Widerspruch nicht weiterwirkt. Dann die Shell, also Register, Gruppen, Statuszeile, Bedienelemente, weil das wenig Text und viel sichtbare Wirkung ist. Dann die fünf eigenständig geschriebenen Seiten Einstieg, Anwendung, Artefakt, Verifikation und Beispiel-Workflow, deren Quelle der englische Papertext ohnehin ist. Dann die Datendateien. Zuletzt die Vault-Spiegel Konvention, Praxis und Arbeitsumgebung in einer Vault-Sitzung.

### A2. Der Pflichtkern der Konvention geht auf sechs Felder — ausgeführt 2026-07-26, Vault-Nachzug offen

**Sachstand.** Der Operator hat am 2026-07-25 entschieden, dass der Pflichtkern von acht auf sechs Felder geht und das Statusvokabular über alle fünfzehn Fülltemplates vereinheitlicht wird (journal.md, „Konvention auf den Paperstand"). Der Papertext führt die sechs bereits namentlich, in Abschnitt 3.3: `title`, `project`, `method`, `status`, `created`, `updated`. Die Begründung steht dort ebenfalls, eine Erhebung der realen Wissensbasen fand kein einziges Repositorium, das den Achter-Kern vollständig erfüllt, und eine Anforderung, die die Praxis stillschweigend übergeht, dokumentiert nichts.

Die beiden Felder, die fallen, sind `template` und `zweck`.

**Die Begründung für den Verbleib von `template` in der empfohlenen Schicht.** Der Wegfall von `template` aus dem Pflichtkern ist nicht folgenlos. Das ganze Adressierungskonzept der Site hängt an diesem Feld, ADR-3, der Frontmatter-Inspector und die Maschinenadresse nach ADR-10. Ein Repo ohne `template:` ist für den Inspector unsichtbar. Der Papertext selbst sagt im selben Absatz, eine Wissensbasis erkläre ihre Methode über dieses Feld.

Deshalb fällt `template` aus dem Pflichtkern und steht an der Spitze der empfohlenen Schicht, mit einem Satz, der die Folge benennt. Wer das Feld führt, ist über den Inspector adressierbar und maschinell anschließbar; wer es weglässt, verliert diese Eigenschaft und sonst nichts. Damit bleibt die Erhebung respektiert, ohne dass die Adressierbarkeit unbegründet als Beiwerk erscheint. `zweck` fällt ersatzlos, weil sein Inhalt in der Praxis im ersten Absatz des Dokuments steht.

**Ausgeführt am 2026-07-26, repo-first.** `_content/konvention.md` führt die Pflichtkern-Tabelle mit sechs Zeilen, `template` als erste Zeile der empfohlenen Tabelle mit dem Folgesatz zur Inspector-Adressierbarkeit, und einen Satz, der den Zweck des Dokuments auf den ersten Absatz unter der H1 legt. `zweck` kommt in der Datei nicht mehr vor. Die Prüffragen der Konvention nennen den Sechser-Kern. Neu dazugekommen sind in derselben Runde die Sektion zur Provenienz im Frontmatter (`authors` nur für Menschen, `generated-with` im Format `Harness (LLM)`, `output-of` für den erzeugenden Befehl) und der Anschluss der Feldnamen an DCMI Metadata Terms.

Der Sweep über die fünfzehn Fülltemplates entfiel, weil sie den Sechser-Kern bereits korrekt führten. Entfernt wurden stattdessen zwölf historische Rückbezüge auf das entfallene `zweck:`-Feld aus drei Vorlagen. Der Papertext ist in 3.3 mitgezogen, weil er den Sechser-Kern als das führte, was die Praxis trägt; die zweite Erhebung fand ihn in etwa der Hälfte der Dokumente erfüllt, und der Text sagt das jetzt.

**Offen bleibt der Vault-Nachzug.** Konvention und Fülltemplates sind Vault-Spiegel, und der Schreibschutz-Hook blockt eine Repo-Sitzung an den Vault-Originalen. Repo und Vault divergieren damit bis auf Weiteres, was die `CLAUDE.md` nur deshalb nicht verletzt, weil die Divergenz hier benannt ist. Der Nachzug gehört in eine echte Vault-Sitzung, gemeinsam mit der englischen Fassung nach A1, weil beide dieselben Dateien anfassen.

**Prüfstelle nach dem Nachzug.** Die sechs Wissensdokumente dieses Repos führen `template:` selbst und demonstrieren die Methode an sich selbst (Akzeptanzkriterium A12). Sie behalten das Feld, es ist jetzt empfohlen und nicht mehr verlangt.

## Teil B. Offen an der Site

### B1. Die zwei verbleibenden Doppelungen der Startseite

**Sachstand.** Die Startseite trägt nach dem Durchgang vom 2026-07-26 noch zwei Abschnitte, die eine Seite hinter ihr vollständiger führt.

„Knowledge Documents und ihre drei Spezialisierungen" beschreibt die Einteilung in Declarative, Process und Action Documents samt dem Diagnoseraster. Teil 3 der Spezifikation führt dieselbe Sache in zwei Abschnitten, „Klassifikation der Dokumenttypen" und „Lese-Heuristik (Funktion → Typ → Diagnose)", und dort ausführlicher.

„Artefakte und Skalierung" trägt zwei Aussagen. Die erste, das Artefakt sei im Default ein selbstgenügsames statisches Web-Tool mit begründungspflichtiger Abweichung, steht in Teil 4 unter „Die Voreinstellung" und „Grenzen des Formats". Die zweite, dieselbe Methode trage die einzelne Sitzung mit einem Agenten ebenso wie die Arbeit mit koordinierten Subagenten, steht nirgends sonst auf der Site.

**Optionen für den ersten Abschnitt.** Streichen und auf Teil 3 verweisen, oder auf zwei Sätze kürzen. Empfehlung: streichen. Der Spezifikationsindex führt Teil 3 mit der Kurzbeschreibung bereits, und ein Verweissatz im Abschnitt „Wo ansetzen" reicht.

**Optionen für den zweiten Abschnitt.** Die Artefakthälfte streichen ist unstrittig. Für die Skalierungshälfte gibt es drei Wege. Sie bleibt auf der Startseite als eigener kurzer Abschnitt „Skalierung", sie wandert in Teil 1 zu den Phasen, oder sie wandert in Teil 4 zum Artefakt. Empfehlung: nach Teil 1. Skalierung ist eine Eigenschaft der Anwendung und nicht des Artefakts, und Teil 1 führt mit „Zwei Modi" bereits einen Abschnitt, an den sie inhaltlich anschließt.

**Umsetzung.** In `_content/ueberblick.md` beide Abschnitte entfernen, den Absatz zur Skalierung nach `_content/anwendung.md` unter „Zwei Modi" verschieben, in „Wo ansetzen" einen Verweis auf Teil 3 ergänzen. Danach trägt die Startseite Titel, Geltungssatz, Statustabelle, Index, „Was die Methode ist" und „Wo ansetzen". Das ist die Form, die eine Spezifikationsfront hat.

### B2. Das Markenzeichen im Kopf — entschieden 2026-07-26

Der Kopf trägt die Wortmarke und den Gattungsvermerk, ohne Zeichen. Zwei Zeichen wurden versucht und wieder entfernt, das DHCraft-Aquarell und `assets/promptotyping-logo.png`. Beide sind detailreiche Bilder mit mehreren Farbfeldern, die auf zweiundzwanzig Pixeln zum Fleck werden. Nach der Farbentscheidung desselben Tages kommt ein zweites Argument dazu: eine Marke im Kopf wäre ein Farbort, der nichts bedeutet, während die Site Farbe sonst genau einer Sache vorbehält. Die Signaturlinie am Fuß der Kopfzeile nimmt die Rolle des Farbklecks ein.

Falls doch ein Zeichen gewünscht wird, ist dies die Spezifikation. Eine SVG-Datei `assets/img/promptotyping-mark.svg`, einfarbig in `currentColor`, auf einem Raster von 24 mal 24 Einheiten, Strichstärke 2, Sicherheitsabstand 2 zum Rand, kein Text, keine Füllfläche unter 3 Einheiten Kantenlänge. Von den drei Motiven des vorhandenen Logos, Dokument, Datenzylinder, Fragezeichen, trägt das Dokument, weil die Methode dokumentgetrieben ist. Prüfbedingung: die Marke steht bei 22 Pixeln neben der Wortmarke und bleibt in Graustufen als Form erkennbar.

### B3. Die Vorlagen `technology` und `publication`

**Sachstand, korrigiert am 2026-07-26.** Eine frühere Fassung dieses Eintrags hat die Vorlage `technology` als ungeschrieben geführt und ihre Spezifikation ausgearbeitet. Das war falsch. `_content/promptotyping-document/technology.md` existiert seit dem 2026-07-23 als Repo-Erstfassung mit Geltungsbereich, Abgrenzung gegen `architecture.md` und Action-Layer und einem Triggerkriterium. `_content/MANIFEST.md` hält den Zustand korrekt fest, die Datei ist kein Vault-Spiegel, und der Slug ist bewusst nicht in `data/promptotyping-documents.json`, nicht im Anker-Schema der `CLAUDE.md` und nicht in der Vorlagen-Seite verdrahtet.

Offen ist damit nicht das Schreiben, sondern die Aufnahme. Der Katalog wird vault-first gepflegt; solange die Vault-Vorlage fehlt, wäre ein Katalogeintrag im Repo die stillschweigende Divergenz, die die `CLAUDE.md` verbietet.

**Umsetzung.** Echte Vault-Sitzung, Vorlage aus der vorhandenen Repo-Fassung im Vault anlegen, danach die Repo-Fassung dagegen abgleichen und von `draft` auf `complete` ziehen, Eintrag in `data/promptotyping-documents.json` mit Funktion und Trigger, Zeile in der Vorlagen-Tabelle des `MANIFEST`, Slug `technology` in die Slug-Liste der `CLAUDE.md`.

`publication` ist weniger weit gediehen. Funktion wäre der Weg vom Artefakt zur zitierbaren Veröffentlichung, also Release, persistenter Identifikator und Zitationsmetadaten. Abschnitt 4.1 des Papers beschreibt genau diese Lücke als den Punkt, an dem die Methode gegen FAIR4RS scheitert. Empfehlung: zurückstellen, bis der FAIR4RS-Weg an einem realen Projekt einmal gegangen ist. Eine Vorlage für einen Weg, den noch niemand gegangen ist, wäre geraten.

## Teil C. Offen an Paper und Einreichung

### C1 und C2. Abstracts und Exposé — vorhanden, Korrektur vom 2026-07-26

**Korrektur.** Die erste Fassung dieses Dokuments hat beide Punkte als offen geführt und zwei Abstracts neu entworfen. Das war falsch, und der Fehler war vermeidbar: `knowledge/submission-zfdg.md` trägt seit dem 2026-07-25 das vollständige Einreichpaket und ist in `INDEX.md` gelistet. Ich habe es nicht konsultiert.

**Sachstand, gemessen.** Das deutsche Abstract hat 748 Zeichen, das englische 726, beide unter der Grenze von 750. Das Exposé hat 779 Wörter, unter der Grenze von 1.000, mit Literaturauswahl und vorläufiger Gliederung. Dazu führt das Dokument eine Formalia-Checkliste gegen die Vorgaben der Zeitschrift.

**Was daran wirklich offen ist.** Der Stand des Pakets ist der 2026-07-25, also nach der Begriffsarbeit desselben Tages. Der Papertext hat sich danach nicht mehr tragend geändert, die Revision lag davor. Zu prüfen bleibt allein, ob eine spätere Änderung am Papertext die Abstracts einholt; `paper-writing.md` verlangt das ohnehin als Prüfpunkt vor der Einreichung. Ein Neuentwurf ist nicht nötig.

Meine Entwürfe sind ersatzlos gestrichen. Sie waren enger an der Formulierung des Fließtext-Abstracts, was Regel 9 des Prüfkatalogs gerade vermeiden will, während die vorhandenen Fassungen eigenständig komprimieren.

### C3. Die verbliebenen Referenzen

**Sachstand.** Aus `paper-writing.md` offen: die Heftangabe zu Grallert (Zenodo-Preprint, die DHQ-Zuweisung existiert noch nicht), Baxter et al. 2012, Bleier et al. 2018, van Es et al. 2018, die Dissertations-Seitenzahlen für Wheaton und Basel sowie die Berners-Lee-Passage.

**Empfehlung.** Die drei nicht beauftragten Referenzen und die beiden Seitenzahlen sind Recherchearbeit ohne Entscheidungsbedarf; ich kann sie in einer Sitzung gegen die Originalquellen füllen. Die Grallert-Heftangabe ist nicht füllbar, solange das Heft nicht existiert. Empfehlung dafür: als Preprint mit DOI und Datum zitieren und die Angabe vor der Einreichung noch einmal prüfen.

### C4. Die Fußnoten-Konvention für Werkzeuge

**Sachstand.** Regel 18 des Prüfkatalogs verlangt, dass jedes namentlich genannte Werkzeug bei seiner Ersterwähnung eine Fußnote mit kompakter Definition und aktueller URL erhält. Eingeführt ist das für Gephi und Claude Code, ausstehend für die Werkzeuge in den Sektionen 4 und 5.

**Empfehlung.** Ausführen, aber mit einer Grenze, die die Regel selbst nicht zieht. Eine Fußnote pro Werkzeug lohnt dort, wo das Werkzeug für die Leserschaft der Zeitschrift nicht selbsterklärend ist. Für in den Digital Humanities eingeführte Werkzeuge genügt der Name. Die Auswahl lege ich vor, bevor ich sie setze, weil eine Fußnote zu viel den Apparat aufbläht und eine zu wenig gegen die eigene Regel verstößt.

### C5. Die sechs zurückgestellten Punkte aus dem Forschungsbericht

`knowledge/report.md` führt sie seit dem 2026-07-23 unter „Operator-Entscheidungen", dort als Liste von eins bis sechs. Eine frühere Fassung dieses Eintrags sprach von sieben; die Zahl ist gegen die Quelle geprüft und korrigiert. Sachstand und Empfehlung je Punkt.

1. **Abnahme der Feinschliff-Kandidaten 1–16.** Weitgehend erledigt, eingearbeitet sind alle bis auf den als optional geführten Bayerschmidt-Vorschlag und die Formalia von Punkt 16. Empfehlung: den Punkt schließen und die beiden Reste einzeln entscheiden.
2. **Review-Modus ZfdG, geschlossen oder offen öffentlich.** Reine Operator-Entscheidung ohne Vorarbeit meinerseits. Empfehlung: offen öffentlich, weil der Beitrag Nachvollziehbarkeit zum Thema hat und ein offenes Review dazu passt.
3. **Site-Variante 2 bestätigen, Vorlage Technology freigeben.** Variante 2 ist als Vorlagen-Hub umgesetzt und in `specification.md` A19 spezifiziert; der Punkt ist durch die Umsetzung erledigt. Die Vorlage steht in B3.
4. **zbz-ocr-tei öffentlich stellen.** Operator-Aktion, danach setze ich die Fußnote. Ohne sie trägt das Verifikations-Exemplar in 5.3 ein Repositorium, das niemand prüfen kann.
5. **Erfahrungswerte bestätigen.** Dauer- und Kostenangaben der Projekttabelle und die Datenvolumen-Grenze in 4.3. Nur der Operator kann sie bestätigen. Empfehlung: bestätigen oder streichen; eine unbestätigte Erfahrungsangabe in einem Beitrag, der Nachvollziehbarkeit fordert, ist eine Angriffsfläche.
6. **Notker-Fußnote mit Repo-URL.** Derzeit fußnotenlos, spiegelbildlich zum ZBZ-Exemplar. Empfehlung: fußnotenlos lassen, damit die beiden Exemplare gleich behandelt sind.

## Reihenfolge über alle Teile

Zuerst A1, aber nur der erste Schritt, die Auflösung des Widerspruchs in der `CLAUDE.md`. Er kostet wenige Minuten und verhindert, dass die nächste Sitzung in die falsche Sprache baut.

Dann B1, weil es die Startseite fertig macht und keine andere Entscheidung berührt.

Dann C3 und C4, weil sie den Papertext einreichfähig machen und ohne Operator-Input laufen, mit Ausnahme der Werkzeugauswahl.

Dann eine echte Vault-Sitzung, die drei Dinge in einem Durchgang erledigt, den Nachzug der Konvention und der drei geänderten Fülltemplates nach A2, die Aufnahme der Vorlage `technology` nach B3 und die englische Fassung der Vault-Spiegel nach A1.

Dann der Sprachdurchgang der übrigen Site nach A1 in der dort genannten Ordnung.

C1 und C2 sind erledigt; vor der Einreichung ist allein zu prüfen, ob eine spätere Änderung am Papertext die Abstracts einholt.

Operatorabhängig und außerhalb dieser Ordnung bleiben die Punkte 2, 4 und 5 aus C5.
