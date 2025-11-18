# Promptotyping
<p class="subtitle">Ein Praxisbericht zur strukturierten LLM-assistierten Entwicklung in den Digital Humanities</p>

## Abstract

Large Language Models transformieren die Softwareentwicklung fundamental. Während professionelle Entwickler zunehmend GitHub Copilot und ähnliche Tools einsetzen, bleibt der strukturierte Einsatz von LLMs für Nicht-Programmierer in Forschungskontexten unterdokumentiert. Wir präsentieren **Promptotyping**, eine methodische Praxis zur LLM-assistierten Entwicklung digitaler Werkzeuge ohne Programmier-Vorkenntnisse. Die Methode entstand aus konkreter Projekterfahrung in Digital-Humanities-Kontexten und wurde in mehreren Workshops validiert. Das zentrale Konzept ist ein **strukturiertes externes Arbeitsgedächtnis** („Vault"), das als Markdown-Dokumentenset die LLM-Interaktion steuert und gleichzeitig als wissenschaftliche Dokumentation dient. Wir beschreiben die Sechsphasenstruktur (CONTEXT, DATA, EXPLORATION, REQUIREMENTS, IMPLEMENTATION, PROTOTYPE), analysieren die kritische IMPLEMENTATION-Phase mit ihren typischen Fehlerquellen (Halluzination, Context Rot, Sycophancy) und zeigen, wie Promptotyping diese mitigiert. Zwei Fallstudien illustrieren die Praxis: REALonline (Museumskatalog-Visualisierung) und HerData (Netzwerkanalyse Goethe-Briefkorrespondenz). Unsere Evaluation in einem Digital-Humanities-Workshop (n=12) zeigt: Teilnehmer ohne Programmierkenntnisse konnten nach 4h-Training funktionale Prototypen erstellen. Wir verorten Promptotyping zwischen „Vibe Coding" (rein explorativ) und „Promptware Engineering" (vollständig formalisiert) als **strukturierte Rapid-Prototyping-Methode für Forschungskontext**. Der Ansatz ist bewusst niedrigschwellig, verzichtet auf technische Komplexität und priorisiert schnelles Lernen aus Fehlern. Das Paper adressiert die Spannung zwischen wissenschaftlicher Reproduzierbarkeit und agiler Entwicklung: Promptotyping dokumentiert Entwicklungsprozesse nicht nachträglich, sondern macht Dokumentation zum integralen Bestandteil der Prompt-Steuerung.

## 1. Einleitung

Digital Humanities-Forschende benötigen spezialisierte digitale Werkzeuge, deren Entwicklung traditionell externe Expertise voraussetzt. Projektanträge budgetieren Entwicklerressourcen, Forschende formulieren Anforderungen, Entwickler implementieren - ein Prozess, der Monate dauert und häufig an Kommunikationsbarrieren scheitert.

Large Language Models (LLMs) wie GPT-4 oder Claude verändern diese Dynamik fundamental. Nicht-Programmierer können durch präzise Prompts funktionale Softwarekomponenten generieren lassen. Doch die Praxis zeigt: Ohne Methode führt explorative LLM-Nutzung zu instabilen Prototypen, nicht-reproduzierbaren Ergebnissen und frustrierenden Sackgassen.

**Problemstellung:**

Wie können Forschende ohne Programmierkenntnisse LLMs systematisch einsetzen, um:
1. Funktionale digitale Werkzeuge zu entwickeln
2. Den Entwicklungsprozess zu dokumentieren
3. Fehlerquellen (Halluzination, Context Rot, Sycophancy) zu mitigieren

**Unser Beitrag:**

Wir präsentieren Promptotyping, eine aus der Praxis entwickelte Methode für strukturierte LLM-assistierte Entwicklung. Der Ansatz umfasst:

- **Sechsphasenstruktur:** CONTEXT → DATA → EXPLORATION → REQUIREMENTS → IMPLEMENTATION → PROTOTYPE
- **Vault-Konzept:** Strukturiertes externes Arbeitsgedächtnis als Markdown-Dokumentenset
- **Kritische IMPLEMENTATION-Phase:** Explizite Mitigation typischer LLM-Fehler
- **Validierung:** Workshop-Evaluation mit 12 Digital-Humanities-Forschenden

Promptotyping ist keine theoretische Neuentwicklung, sondern eine **dokumentierte Praxis**, die sich in echten Forschungsprojekten bewährt hat.

## 2. Entwicklung des Ansatzes

Promptotyping entstand nicht als theoretisches Konzept, sondern aus der Beobachtung wiederkehrender Probleme in LLM-assistierten Entwicklungsprojekten. Die folgenden Use Cases illustrieren typische Fehlerquellen und die daraus abgeleiteten methodischen Prinzipien.

### 2.1 Praktische Erfahrungen

<div class="use-case-placeholder" data-id="szd"></div>
<div class="use-case-placeholder" data-id="realonline"></div>
<div class="use-case-placeholder" data-id="sarcophag"></div>
<div class="use-case-placeholder" data-id="herdata"></div>
<div class="use-case-placeholder" data-id="goethe-faust-netzwerk"></div>
<div class="use-case-placeholder" data-id="kriminalmuseum-canvas"></div>
<div class="use-case-placeholder" data-id="dha-workshop"></div>

### 2.2 Mustererkennung: Rekurrente Fehlerquellen

Aus diesen Projekten kristallisieren sich fünf Kernprobleme heraus:

**1. Fehlender Kontext führt zu Fehlinterpretation**
LLMs ohne Hintergrundwissen zum Forschungsgegenstand generieren technisch korrekten, aber fachlich sinnlosen Code.

**2. Context Rot bei langen Sitzungen**
Nach 10+ Prompts verlieren LLMs den Überblick über frühere Constraints. Code-Fragmentierung und Inkonsistenzen häufen sich.

**3. Halluzination bei Bibliotheks-Imports**
LLMs „erfinden" nicht-existente APIs, Funktionen oder Datenstrukturen mit hoher Konfidenz.

**4. Unstrukturierte Iteration ohne Lerneffekt**
Trial-and-Error ohne Dokumentation führt zu zyklischem Wiederholen identischer Fehler.

**5. Sycophancy (Bestätigungsbias)**
LLMs tendieren dazu, Nutzerannahmen unkritisch zu bestätigen, selbst wenn diese falsch sind.

**Methodische Konsequenz:**

Promptotyping adressiert diese Probleme durch **explizites externes Gedächtnis** und **phasenbasierte Struktur**. Statt impliziten Kontext in Prompts zu kodieren, wird dieser in persistenten Markdown-Dateien ausgelagert.

## 3. Methode: Promptotyping

Promptotyping folgt einer Sechsphasenstruktur, die Kontext, Daten, Exploration, Anforderungen, Implementation und Prototyp klar voneinander trennt. Jede Phase produziert Markdown-Artefakte, die als „externes Arbeitsgedächtnis" die LLM-Interaktion steuern.

### 3.1 Strukturierte Phasen

Die Methode gliedert sich in sechs Phasen, die iterativ durchlaufen werden:

**Phase 1 - CONTEXT:** Forschungsfrage, Daten, Constraints festlegen
**Phase 2 - DATA:** Datenstrukturen, Schemata, Beispiele definieren
**Phase 3 - EXPLORATION:** LLM-gestützte Optionensondierung ohne Implementierung
**Phase 4 - REQUIREMENTS:** Konkrete, testbare Anforderungen formulieren
**Phase 5 - IMPLEMENTATION:** Kritische Phase mit expliziter Fehlermitigation
**Phase 6 - PROTOTYPE:** Integration, Testing, Iteration

Jede Phase erzeugt mindestens ein Markdown-Dokument, das für nachfolgende LLM-Interaktionen als Referenz dient.

### 3.2 Phasen im Detail

#### Phase 1: CONTEXT

**Ziel:** Den Forschungskontext so präzise beschreiben, dass LLMs fachlich relevante Vorschläge machen können.

**Dokument:** `CONTEXT.md`

**Inhalte:**
- Forschungsfrage in Alltagssprache
- Zielgruppe (Fachcommunity vs. Öffentlichkeit)
- Technologische Constraints (Browser, keine Backend-Infrastruktur)
- Explizite Nicht-Ziele (Was soll das Tool NICHT tun?)

**Typischer Fehler:** Zu vage Beschreibungen („Visualisierung von Netzwerkdaten"). LLMs füllen Lücken mit Standardannahmen (z.B. force-directed graphs), die für den Anwendungsfall ungeeignet sind.

**Promptotyping-Lösung:** CONTEXT.md zwingt zur Explizierung. Beispiel:

```markdown
## Forschungsfrage
Wie veränderten sich Briefnetzwerke im Weimarer Kreis zwischen 1770 und 1832?

## Nicht-Ziele
- KEINE force-directed graphs (überfordert Nutzer)
- KEINE 3D-Visualisierungen (schlecht für Accessibility)
```

#### Phase 2: DATA

**Ziel:** Datenstrukturen, Schemata und Beispiele so dokumentieren, dass LLMs keine „idealen" Daten halluzinieren.

**Dokument:** `DATA.md`

**Inhalte:**
- JSON/CSV-Schemata mit expliziten optionalen Feldern
- Beispiele für unvollständige Datensätze
- Häufigkeit fehlender Daten (z.B. „30% der Briefe haben kein Datum")
- Provenance: Woher kommen die Daten?

**Typischer Fehler:** LLMs gehen von perfekten Daten aus. Generierter Code bricht bei `undefined` oder `null`.

**Promptotyping-Lösung:** DATA.md dokumentiert explizit Lücken:

```markdown
## Brief-Schema
```typescript
interface Letter {
  id: string;
  sender: string;
  receiver: string;
  date?: string; // OPTIONAL! ~30% fehlen
}
```

**Beispiel unvollständiger Eintrag:**
```json
{"id": "L123", "sender": "Goethe", "receiver": "Schiller", "date": null}
```
```

#### Phase 3: EXPLORATION

**Ziel:** Optionen sondieren, ohne Code zu generieren. Welche Visualisierungen sind technisch machbar? Welche Bibliotheken existieren?

**Dokument:** `EXPLORATION.md`

**Inhalte:**
- Vergleich von 3-5 technischen Alternativen
- LLM-generierte Pro/Contra-Listen
- Links zu Dokumentationen (extern validiert)

**Typischer Fehler:** Direkt mit Implementation beginnen. Wenn die Bibliothek nicht passt, ist viel Zeit verschwendet.

**Promptotyping-Lösung:** EXPLORATION.md ist reine Recherche. Kein Code, nur Optionen.

**Prompt-Beispiel:**
```
Du bist ein Technologie-Scout.
Recherchiere 3 JavaScript-Bibliotheken für Netzwerkvisualisierung.
Bewertungskriterien: Bundle-Size, Accessibility, Lernkurve.
Kein Code - nur Überblick.
```

#### Phase 4: REQUIREMENTS

**Ziel:** Testbare Anforderungen formulieren, die später Code-Review ermöglichen.

**Dokument:** `REQUIREMENTS.md`

**Inhalte:**
- MoSCoW-Priorisierung (Must/Should/Could/Won't)
- Akzeptanzkriterien (konkret, messbar)
- Nicht-funktionale Anforderungen (Performance, Accessibility)

**Typischer Fehler:** Vage Anforderungen („Visualisierung soll schön sein"). LLMs interpretieren frei.

**Promptotyping-Lösung:** REQUIREMENTS.md nutzt präzise Sprache:

```markdown
## MUSS-Kriterien
- [x] Netzwerk lädt in < 3 Sekunden (bei 500 Knoten)
- [ ] Farbkontrast ≥ 4.5:1 (WCAG 2.1 Level AA)
- [ ] Keyboard-Navigation für alle Interaktionen
```

#### Phase 5: IMPLEMENTATION

**Kritische Phase.** Hier entstehen die meisten Fehler. Promptotyping nutzt explizite Strategien:

**a) Incremental Prompting:**
Nie gesamte Features auf einmal. Erst Daten laden, dann rendern, dann Interaktionen.

**b) CEIL-Persona:**
„Du bist ein Critical Expert, der Code auf Fehler prüft. Halluzinierst du gerade APIs?"

**c) Fallback-Strategien:**
LLM generiert Code mit explizitem Error-Handling für fehlende Daten.

**d) Code-Review-Checkliste:**
Nach jedem größeren Block: „Prüfe: Sind alle Imports valide? Gibt es hardcoded Annahmen?"

**Dokument:** `IMPLEMENTATION.md` (Journal-Stil)

**Inhalte:**
- Prompt-History mit Versionierung
- Fehlerdokumentation (Was ging schief? Wie gefixt?)
- LLM-generierte vs. manuell angepasste Code-Abschnitte

#### Phase 6: PROTOTYPE

**Ziel:** Integration, Testing, Iteration.

**Dokument:** `PROTOTYPE.md`

**Inhalte:**
- URL zum Live-Prototype (GitHub Pages, etc.)
- Bekannte Bugs
- Nächste Iterationsschritte

**Typischer Fehler:** „Prototype" ist synonym mit „fertig". In Wirklichkeit ist es Startpunkt für echtes Feedback.

**Promptotyping-Lösung:** PROTOTYPE.md ist explizit als Work-in-Progress markiert.

### 3.3 Dokumentation als externes Arbeitsgedächtnis

**Interaktive Exploration:**

Öffnen Sie den Vault-Explorer, um die Struktur des Promptotyping-Vaults zu erkunden. Der Vault funktioniert als **lebende Dokumentation**, die sowohl LLMs als auch Menschen lesen können.

<div class="module-placeholder" data-module="vault-explorer"></div>

**Prompt-Referenzierung:**

Statt Kontext in jedem Prompt zu wiederholen, referenziert man Vault-Dateien:

```
Nutze CONTEXT.md und DATA.md als Kontext.
Implementiere eine Timeline-Visualisierung.
Beachte: 30% der Briefe haben kein Datum (DATA.md).
```

**Vorteile:**

1. **Konsistenz:** LLM erhält immer denselben Kontext
2. **Transparenz:** Dritte können Prompts nachvollziehen
3. **Versionierung:** Git trackt Änderungen am Vault
4. **Mehrfachnutzung:** Vault für verschiedene LLMs nutzbar (Claude, GPT-4, etc.)

**Dokumententypen im Vault:**

| Datei | Zweck | Zielgruppe |
|-------|-------|------------|
| CONTEXT.md | Forschungskontext | LLM + Mensch |
| DATA.md | Datenstrukturen | LLM + Mensch |
| EXPLORATION.md | Optionensondierung | Mensch (Entscheidung) |
| REQUIREMENTS.md | Testbare Anforderungen | LLM + Mensch |
| IMPLEMENTATION.md | Prompt-History | Mensch (Debugging) |
| PROTOTYPE.md | Live-Status | Mensch (Evaluation) |
| JOURNAL.md | Lessons Learned | Mensch (Meta-Reflektion) |

## 4. Fallstudie: REALonline

**REALonline** ist ein etablierter wissenschaftlicher Bildkatalog mit 20.000+ Objekten zur mittelalterlichen Ikonographie. Die Herausforderung: Wie können Forschende ohne SQL-Kenntnisse komplexe Filterabfragen über geografische, zeitliche und thematische Dimensionen durchführen?

### 4.1 Projekt-Kontext

**Ausgangslage:**

- Bestehende Webanwendung mit umfangreichen Metadaten
- Zielgruppe: Kunsthistoriker, Mediävisten, Studierende
- Constraint: Keine Backend-Änderungen möglich (statische JSON-Daten)
- Herausforderung: Intuitive Exploration multipler Dimensionen

**Promptotyping-Ansatz:**

Phase 1 (CONTEXT): Forschungsworkflow dokumentiert („Nutzer sucht Mariendarstellungen in Südtirol, 14. Jahrhundert")
Phase 2 (DATA): JSON-Schema mit 47 Feldern, davon 23 optional
Phase 3 (EXPLORATION): Vergleich von 4 Visualisierungsansätzen (Karte, Timeline, Faceted Browser, Dashboard)
Phase 4 (REQUIREMENTS): 12 MUSS-Kriterien, 8 SOLLTE-Kriterien
Phase 5 (IMPLEMENTATION): 22 Iterationen über 3 Wochen
Phase 6 (PROTOTYPE): GitHub Pages Deployment

### 4.2 Implementierungs-Details

**Kritische Herausforderung:** Multi-dimensionale Filterung

Initiales LLM-Prompt:
```
Implementiere Filter für Ort, Zeit und Thema.
```

**Problem:** LLM generierte 3 separate Filter ohne Koordination. Filter wirkten nicht kombiniert (AND-Logik), sondern überschrieben sich.

**Promptotyping-Intervention:**

1. REQUIREMENTS.md präzisiert:
```markdown
## FR-05: Multi-Filter-Koordination
- MUSS: Alle Filter wirken mit AND-Logik
- MUSS: Filter-State ist in URL-Parameter serialisiert (Shareability)
- MUSS: Reset-Button setzt alle Filter auf Default
```

2. Neuer Prompt mit CEIL-Persona:
```
Du bist ein Critical Expert für State-Management.
Prüfe: Werden Filter korrekt koordiniert?
Referenz: REQUIREMENTS.md → FR-05
```

3. LLM-Output:
```javascript
// Vorher: Jeder Filter überschreibt state
// Nachher: Zentraler FilterState mit Merge-Logik
class FilterState {
  constructor() {
    this.filters = { place: null, time: null, theme: null };
  }

  update(key, value) {
    this.filters[key] = value;
    this.applyAll(); // Kombiniert alle aktiven Filter
  }

  applyAll() {
    const filtered = data.filter(item =>
      this.matchesPlace(item) &&
      this.matchesTime(item) &&
      this.matchesTheme(item)
    );
    this.render(filtered);
  }
}
```

**Lesson Learned:** Ohne explizite Anforderung halluzinierte das LLM „vernünftiges" Verhalten, das der Realität nicht entsprach. REQUIREMENTS.md erzwang Explizierung.

### 4.3 Ergebnisse

**Quantitativ:**

- Entwicklungszeit: 3 Wochen (Teilzeit, Solo)
- LLM-Kosten: ~$12 (Claude Opus + Sonnet)
- Code-Zeilen: 2.847 (davon 70% LLM-generiert)
- Iterationen bis Stabilität: 22

**Qualitativ:**

- Workshop-Feedback (n=8 Kunsthistoriker): „Intuitiver als SQL-Backend"
- Nutzung: 450+ Sessions in ersten 3 Monaten
- Wartungsaufwand: <2h/Monat (Bug-Fixes)

**Anti-Pattern identifiziert:**

„Feature Creep durch LLM-Vorschläge". Das LLM schlug 15+ zusätzliche Features vor („Social Sharing", „3D-Viewer", „AI-Tagging"). Ohne klare REQUIREMENTS.md wäre das Projekt verwässert.

## 5. Validierung: Digital Humanities Workshop

### 5.1 Workshop-Design

**Setting:** Digital Humanities Austria Konferenz, November 2024

**Teilnehmer:** n=12 (8 Forschende, 4 Studierende)

**Vorkenntnisse:**
- Programmiererfahrung: 0/12 („Ich kann HTML lesen")
- LLM-Nutzung: 7/12 („Ich habe ChatGPT für Texte genutzt")

**Ablauf (4 Stunden):**

1. **Einführung (45 Min):** Promptotyping-Methode, Vault-Konzept
2. **Hands-On (120 Min):** Eigenes Mini-Projekt (Datenvisualisierung)
3. **Code-Review (45 Min):** Peer-Feedback mit CEIL-Persona
4. **Reflexion (30 Min):** Lessons Learned dokumentieren

**Material:** Jeder Teilnehmer erhielt Template-Vault mit vorausgefüllten CONTEXT.md und DATA.md-Beispielen.

### 5.2 Aufgabenstellung

**Projekt:** „Mini-Dashboard für Forschungsdaten"

Teilnehmer brachten eigene Datensätze mit (CSV-Format):
- Historische Ortsregister (n=230 Einträge)
- Bibliographische Metadaten (n=180 Publikationen)
- Transkriptions-Statistiken (n=45 Manuskripte)

**Anforderung:**
1. Daten in JSON konvertieren
2. Eine Visualisierung erstellen (Karte, Timeline oder Balkendiagramm)
3. Export-Funktion (CSV oder PNG)

**Constraint:** Nur Browser-basiert, keine Backend-Infrastruktur.

### 5.3 Ergebnisse

**Quantitativ:**

| Metrik | Ergebnis |
|--------|----------|
| Erfolgreiche Prototypen | 10/12 (83%) |
| Durchschnittliche Iterationen | 8 (Range: 4-15) |
| Häufigster Fehler | Halluzinierte Library-Imports (9/12) |
| Durchschnittliche LLM-Kosten | $0.80 (Claude Sonnet) |

**Zwei Abbrüche:**
- Teilnehmer #5: Daten zu komplex (relationale Struktur), Scope-Problem
- Teilnehmer #11: Technische Probleme (Laptop-Kompatibilität)

**Qualitativ (Post-Workshop Survey, n=10):**

| Frage | Zustimmung (%) |
|-------|---------------|
| „Promptotyping half, LLM-Fehler zu vermeiden" | 90% |
| „Ich könnte die Methode eigenständig anwenden" | 70% |
| „Vault-Struktur war hilfreich" | 100% |
| „Ich würde Promptotyping im eigenen Projekt nutzen" | 80% |

**Typische Kommentare:**

> „CONTEXT.md hat mich gezwungen, meine Forschungsfrage präzise zu formulieren - das war schon vor der Programmierung wertvoll."

> „Ohne DATA.md hätte ich nicht gewusst, wie ich dem LLM meine unvollständigen Daten beschreibe."

> „Die CEIL-Persona war ein Game-Changer. Ich habe LLMs vorher blind vertraut."

### 5.4 Beobachtete Anti-Patterns

**1. „Copy-Paste-Coding"**

3 Teilnehmer kopierten LLM-generierten Code, ohne ihn zu lesen. Resultat: Nicht-funktionale Imports (z.B. `import Chart from 'chart.js'` ohne vorherige Installation).

**Intervention:** Workshop-Instruktion ergänzt um „CEIL-Frage: Welche Bibliotheken sind in diesem Code enthalten?"

**2. „Over-Prompting"**

2 Teilnehmer schrieben 500+ Wörter Prompts mit redundanten Details. LLM-Performance sank (Context Rot).

**Intervention:** CONTEXT.md-Template vorgegeben (max. 300 Wörter).

**3. „Feature Creep"**

4 Teilnehmer wollten „Alles auf einmal" (Karte + Timeline + Statistiken). Prototyp blieb unfertig.

**Intervention:** REQUIREMENTS.md mit MoSCoW-Priorisierung.

## 6. Promptotyping im Methodenspektrum

### 6.1 Drei Paradigmen

Promptotyping ist weder „Vibe Coding" (vollständig explorativ) noch „Promptware Engineering" (vollständig formalisiert), sondern ein pragmatischer Mittelweg.

**Vibe Coding** (Karpathy, 2025) repräsentiert den intuitiven Pol. Entwickler beschreiben Projekte in natürlicher Sprache und akzeptieren generierte Lösungen ohne Code-Review.

**Promptware Engineering** (Chen et al., 2025) markiert den formalisierten Pol mit systematischen Testing-Phasen.

**Promptotyping** positioniert sich als pragmatische Brücke. Die Methode kombiniert die explorative Geschwindigkeit des Vibe Coding mit der strukturierten Dokumentation des Promptware Engineering.

### 6.2 Methodenauswahl

Unter vier Wochen Projektdauer favorisiert Promptotyping, über drei Monate erfordert Promptware Engineering. Vibe Coding eignet sich für „Throwaway"-Projekte unter 48 Stunden.

## 7. Diskussion

### 7.1 Grenzen und Einschränkungen

Die dokumentierten Praktiken basieren auf Projekterfahrungen. Browser-basierte Prototypen stoßen bei komplexen Datenmengen an Performance-Grenzen (z.B. 3.892 Objekte im Kriminalmuseum Canvas-Interface). Die optimale Dokumentenanzahl liegt bei 5-7; darüber hinaus verlangsamt die Navigation die Entwicklung.

### 7.2 Anti-Patterns und Fallstricke

**Context Rot**
Bezeichnet die progressive Degradation der LLM-Performance bei zunehmender Input-Länge. LLMs verarbeiten Informationen am Anfang und Ende des Kontexts bevorzugt, während mittlere Abschnitte systematisch übersehen werden („Lost in the Middle").

**Interaktive Simulation:**
Testen Sie hier, wie die Abrufgenauigkeit (Recall) bei steigender Token-Anzahl sinkt.

<div class="module-placeholder" data-module="context-rot-viz"></div>

**Sycophancy**
Bezeichnet die Tendenz von LLMs, Nutzerannahmen unkritisch zu bestätigen. Führende Fragen wie „Ist diese Lösung nicht optimal?" resultieren in affirmativen Antworten unabhängig von der tatsächlichen Qualität.

**Interaktive Simulation:**
Versuchen Sie, das Modell im folgenden Terminal durch suggestive Fragen oder „Bestechung" zu falschen Aussagen zu verleiten.

<div class="module-placeholder" data-module="sycophancy-trap"></div>

**Halluzinationen**
LLMs produzieren konsistent falsche Bibliotheksimporte oder nicht-existente API-Endpoints. Die Mitigation erfolgt durch systematische Verifikation jeder generierten Komponente.

## 8. Verwandte Arbeiten

Zhou et al. (2023) systematisieren Prompt-Optimierung, fokussieren aber auf Einzelprompts statt Entwicklungsprozesse. Chen et al. (2021) evaluieren Codex, Peng et al. (2023) messen GitHub Copilot Produktivität. Drucker (2009) argumentiert für „Rapid Prototyping" in Digital Humanities. Ramsay (2011) fordert „Algorithmic Criticism". Promptotyping operationalisiert diese Konzepte für die LLM-Ära.

## 9. Fazit

Promptotyping bietet einen pragmatischen Ansatz für LLM-assistierte Entwicklung in den Digital Humanities. Die aus der Praxis entwickelte Sechsphasenstruktur mit kritischer IMPLEMENTATION-Phase half in unseren Projekten, typische Fehlerquellen zu vermeiden. Die Methode ermöglicht niedrigschwellige technische Entwicklung ohne Programmier-Vorkenntnisse bei gleichzeitiger Wahrung wissenschaftlicher Standards durch strukturierte Dokumentation.

## Literatur

Boehm, B. (1988). A Spiral Model of Software Development and Enhancement. *Computer*, 21(5), 61-72.
Chen, M., et al. (2021). Evaluating Large Language Models Trained on Code. arXiv:2107.03374.
Chroma (2025). Context Length vs. Performance in Large Language Models: An Empirical Study.
Drucker, J. (2009). *SpecLab: Digital Aesthetics and Projects in Speculative Computing*. University of Chicago Press.
Karpathy, A. (2025). „Vibe Coding". Blog Post.
Peng, S., et al. (2023). *The Impact of AI on Developer Productivity*. Microsoft Research.
Ramsay, S. (2011). *Reading Machines: Toward an Algorithmic Criticism*. University of Illinois Press.
Zhou, Y., et al. (2023). Large Language Models Are Human-Level Prompt Engineers. arXiv:2211.01910.
