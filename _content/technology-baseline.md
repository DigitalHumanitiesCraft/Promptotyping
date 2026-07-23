---
title: Technology Baseline. Statische Webseite als Forschungstool
slug: technology-baseline
status: draft
language: de
version: 0.1
created: 2026-07-23
updated: 2026-07-23
authors: [Christopher Pollin]
generated-with: Claude Code mit Claude Fable 5
machine-url: https://dhcraft.org/Promptotyping/_content/technology-baseline.md
---

# Technology Baseline. Statische Webseite als Forschungstool

Dieses Dokument trägt das projektunabhängige Technologie-Wissen für den häufigsten Artefakttyp der Methode, das selbstständige statische Web-Tool. Es ist die Begründungsschicht, auf die die `architecture.md` einer Projektinstanz verweist, statt die Stack-Argumentation in jedem Repo neu zu führen; die Instanz dokumentiert dann nur ihre Abweichungen. Die wissenschaftliche Kurzform der Argumentation steht im Methodenpaper (Pollin 2026, Sektion 4); dieses Dokument ist die operative Langform mit den konkreten Regeln.

## Warum die statische Form

Ein Promptotyping-Artefakt ist im Regelfall ein Satz aus HTML-, CSS- und JavaScript-Dateien, mit den Forschungsdaten eingebettet oder aus flachen Dateien geladen, lauffähig aus einem lokalen Ordner und deploybar auf jedem statischen Host. Drei Eigenschaften begründen diesen Default.

Erstens die Generierbarkeit. Statische Artefakte sind für agentische Coding-Werkzeuge in einem Durchgang erzeugbar; die Ableitung von den Promptotyping Documents zum Artefakt bleibt dadurch inspizierbar. Jede zusätzliche Schicht (Build-Kette, Server-Komponente, Datenbank) verlängert die Ableitung und entzieht Teile davon der Prüfung.

Zweitens die Publizierbarkeit. Ein statisches Artefakt braucht keine Infrastruktur. GitHub Pages oder jeder Webspace genügt; das entspricht der Ressourcenlage der Einzelforschenden und kleinen Projekte, die die Methode adressiert.

Drittens die Haltbarkeit. Der Nachhaltigkeitsdiskurs des Feldes, Minimal Computing (Risam/Gil 2022) und die Endings-Prinzipien, kommt zum selben Befund; digitale Artefakte überleben am wahrscheinlichsten mit den wenigsten beweglichen Teilen, ohne serverseitige Abhängigkeiten und ohne Build-Ketten, die verrotten. Ein statisches Artefakt von 2026 rendert auch dann noch, wenn niemand es mehr wartet.

## Die Regeln

### Kein Build-Step

`git clone` und Browser öffnen genügt, um das Artefakt lokal auszuführen; ein lokaler Webserver (`python -m http.server`) ist die einzige zulässige Voraussetzung, weil Browser `fetch` auf `file://`-URLs blockieren. Ausgeschlossen sind npm-Abhängigkeiten, Bundler, Transpiler und CSS-Präprozessoren. Die Begründung liegt im Verfall der Werkzeugketten; eine Build-Konfiguration von heute läuft in wenigen Jahren nicht mehr, und jede Toolchain-Reparatur ist Wartungsarbeit, die ein Forschungsprototyp nicht bekommt. Projektinterne Skripte, die den Vault oder die Daten prüfen, sind davon unberührt; sie bauen nichts für die Auslieferung.

### Vanilla JavaScript als Default

Kein Framework. Frameworks altern schnell, widersetzen sich der Inspektion durch Nachnutzende und bieten nichts, was ein exploratives Forschungsinstrument braucht; natives DOM, `fetch`, ES-Module und `location.hash` decken den Bedarf. Hinzu kommt ein methodenspezifisches Argument. Weil das primäre Artefakt die Promptotyping Documents sind und der Prototyp aus ihnen regeneriert werden kann, muss die Zielsprache der Regeneration langfristig stabil sein; die Browser-Plattform ist die stabilste Laufzeitumgebung, die es gibt, ein Framework-API ist es nicht.

### Kompromissregel für Bibliotheken

Wo ein Problem algorithmisch tief ist, darf eine einzelne Bibliothek lokal vendoriert werden. Vier Kriterien müssen zusammen erfüllt sein:

1. Das Problem liegt ernsthaft außerhalb einer vernünftigen Vanilla-Implementierung (Markdown-Parsing, YAML-Parsing, Kartenrendering, komplexe Diagramme).
2. Die Bibliothek ist selbstständig und ohne Build-Step als einzelne Datei vendorierbar.
3. Die Lizenz erlaubt die Weiterverteilung.
4. Der Entfernungspfad ist dokumentiert; es steht im Repo, was ausfällt, wenn die Bibliothek entfernt wird, und wie das Artefakt dann degradiert.

Vendoriert heißt im Repo liegend, nie per CDN geladen; ein CDN ist eine externe Laufzeitabhängigkeit und verletzt die Offline-Regel. Diese Site selbst führt zwei Bibliotheken unter dieser Regel, marked.js für Markdown-Rendering und js-yaml für das Frontmatter-Parsing des Frontmatter-Inspectors.

### Vorberechnung statt Laufzeitlast

Schwere Berechnung läuft vor der Auslieferung; das Artefakt shippt abgeleitete Daten, typischerweise als JSON, und die Pipelines bleiben upstream im Repo. Der Browser rendert und filtert, er berechnet keine Analysen. Das hält das Artefakt schnell, macht die Berechnung als Skript prüfbar und trennt deterministische Arbeit (Skript) von generativer Arbeit (LLM), eine Trennung, die auch methodisch gilt; was ein Skript deterministisch kann, macht kein Modell.

### Keine externen Aufrufe zur Laufzeit

Das Artefakt funktioniert offline. Keine externen APIs, keine Web-Fonts von Fremdservern, keine Analytics, keine CDN-Ressourcen. Die Regel ist zugleich eine Haltbarkeits-, eine Datenschutz- und eine Sicherheitseigenschaft; jeder externe Endpunkt ist ein Ausfallpunkt, ein Tracking-Vektor und eine Angriffsfläche. Wo eingebettete Fremdinhalte unvermeidlich sind (Videos), gilt Click-to-load mit datenschutzfreundlicher Variante (`youtube-nocookie.com`); vor dem Klick verlässt keine Anfrage die Seite.

### Sicherheit an den Vertrauensgrenzen

Statische Artefakte haben eine kleine, aber reale Angriffsfläche. Keine Secrets, Tokens oder Zugangsdaten im Client-Code, auch nicht in der Git-History. Nutzereingaben (Paste-Felder, URL-Parameter, Hash-Fragmente) werden validiert, bevor sie in DOM oder Routing gelangen; `innerHTML` mit ungeprüftem Input ist ausgeschlossen. Personenbezogene Daten Dritter gehören weder in die ausgelieferten Daten noch in Beispieldatensätze; wo Forschungsdaten Personen betreffen, klärt die Instanz die Rechtslage vor der Publikation.

### Provenienz-Deklaration

Jedes Artefakt legt seine Produktionsbedingungen offen, so wie eine Edition ihre Editionsrichtlinien offenlegt. Es deklariert, dass es generiert wurde, aus welchen Dokumenten, mit welchen Modellen und Werkzeugen, und wie es verifiziert wurde. Träger sind das Frontmatter der Promptotyping Documents (`generated-with`, `method`, `template`) und eine sichtbare Stelle im Artefakt selbst (Footer oder Impressum). Für die Zitierbarkeit kommen `CITATION.cff` und `codemeta.json` ins Repo, deterministisch aus dem Frontmatter ableitbar; eine Zenodo-DOI setzt ein Release voraus.

## Nachhaltigkeit und FAIR4RS

Gegen die FAIR4RS-Prinzipien (Chue Hong et al. 2022) gemessen ist der Artefakttyp ungleichmäßig, und das Muster ist lehrreich. Accessibility hält konstruktionsbedingt; Artefakt und Quelltext sind über HTTPS ohne proprietäre Werkzeuge abrufbar. Reusability ist die Stärke der Methode; die detaillierte Provenienz, die R1.2 verlangt, entsteht in Journal, Dokumenten und Repo-History als Nebenprodukt des Arbeitens. Findability fällt im Default durch; ohne persistenten Identifikator, versionierte Releases und maschinenlesbare Zitationsmetadaten bleibt ein Prototyp unauffindbar. Diese Lücke ist Publikationsarbeit und vom Artefakt trennbar; ein archiviertes Release mit DOI und generierte Zitationsmetadaten schließen sie, ohne das Artefakt anzufassen.

## Grenzen des Formats und Übergabepunkt

Die Grenzen gehören zur Definition des Artefakttyps. Clientseitige Verarbeitung begrenzt das Datenvolumen; mit flachen JSON- oder CSV-Dateien liegt der komfortable Bereich in der Größenordnung von zehntausend Records, spaltenorientierte Formate mit WebAssembly-Query-Engines verschieben ihn um Größenordnungen, um den Preis einer vendorierten Engine, die die Kompromissregel abdecken muss. Kollaborative oder serververmittelte Workflows, Schreib-Persistenz jenseits des Browsers und Authentifizierung liegen außerhalb des Formats. Wo ein Projekt über diese Grenzen hinauswächst, ist es dem Prototyping entwachsen und in der Softwareentwicklung angekommen; ab dort trägt Research Software Engineering mit seinen Standards für Testing, Wartung und Betrieb, und der Dokumentensatz der Methode wird zum Übergabepaket.

## Anwendung in einer Projektinstanz

Die `architecture.md` eines Projekts verweist auf dieses Dokument als Baseline und führt nur, was projektspezifisch ist; den konkreten Stack, die Datenformate, die Modul-Struktur und jede Abweichung von den Regeln mit Begründung. Eine Abweichung ohne dokumentierte Begründung ist ein Befund für das Review. Der Verweis nutzt die Maschinenadresse dieses Dokuments (`machine-url` im Frontmatter), damit auch ein Coding-Agent die Baseline auflösen kann.

## Quellen

- Pollin, Christopher: Promptotyping. Translating Research Data into Research Artefacts with Context and Agentic Engineering. 2026 (in Vorbereitung), Sektion 4.
- Risam, Roopika; Gil, Alex: Introduction. The Questions of Minimal Computing. In: Digital Humanities Quarterly 16,2 (2022). https://www.digitalhumanities.org/dhq/vol/16/2/000646/000646.html
- The Endings Project: Principles for Digital Longevity. https://endings.uvic.ca/principles.html
- Chue Hong, Neil P.; Katz, Daniel S.; Barker, Michelle et al.: FAIR Principles for Research Software (FAIR4RS Principles). Research Data Alliance 2022. https://doi.org/10.15497/RDA00068
