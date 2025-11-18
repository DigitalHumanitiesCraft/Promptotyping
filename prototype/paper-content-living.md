# Jenseits von „Vibe Coding"
## Promptotyping als wissenschaftliche Methode

**Warum KI in den Digital Humanities weniger Intuition und mehr Context Engineering erfordert.**

---

## 1. Einleitung

Die Softwareentwicklung durchläuft einen fundamentalen Wandel. Andrej Karpathy prägte den Begriff „Vibe Coding" für eine Praxis, bei der Code intuitiv und ohne tiefes Verständnis generiert wird. In der Wissenschaft führt dies jedoch zu Problemen mit Reproduzierbarkeit und Halluzinationen.

Wir brauchen einen Gegenentwurf: **Promptotyping**.

<div class="module-placeholder" data-module="code-comparison"></div>

---

## 2. Die epistemische Herausforderung

Large Language Models (LLMs) sind probabilistische Systeme. Sie leiden unter „Context Rot" – dem Vergessen von Informationen in der Mitte langer Eingaben. Einfaches Prompt Engineering reicht nicht aus; es bedarf des **Context Engineering**.

### Was ist Context Rot?

Context Rot beschreibt das Phänomen, dass LLMs Informationen in der Mitte längerer Kontexte schlechter verarbeiten als am Anfang oder Ende. Die Aufmerksamkeitsmechanismen der Transformer-Architektur führen dazu, dass mit steigender Token-Anzahl die mittleren Informationen "vergessen" werden.

<div class="module-placeholder" data-module="context-rot-viz"></div>

**Implikationen für die Wissenschaft:**
- Lange Forschungsdokumente werden unzuverlässig verarbeitet
- Kritische Details in der Mitte gehen verloren
- Reproduzierbarkeit leidet unter variablem Kontextverständnis

---

## 3. Die Methode: Promptotyping

Promptotyping ist ein strukturierter Prozess in vier Phasen:

1. **Preparation**: Domänenwissen dokumentieren
2. **Exploration**: Anforderungen im Dialog entwickeln
3. **Distillation**: Kontext in Markdown-Dateien auslagern
4. **Implementation**: Iterative Umsetzung mit LLM-Unterstützung

### Das externe Gedächtnis

Zentral ist die Auslagerung von Kontext in standardisierte Markdown-Dateien, um dem Modell ein "externes Gedächtnis" zu geben. Diese Dateien folgen einer klaren Struktur:

- **DATA.md**: Datenstruktur und Ontologie
- **REQUIREMENTS.md**: Funktionale Anforderungen
- **DESIGN.md**: UI/UX-Spezifikationen
- **JOURNAL.md**: Entwicklungsdokumentation
- **INSTRUCTIONS.md**: Implementierungsanweisungen

<div class="module-placeholder" data-module="vault-explorer"></div>

### Source Available Literacy

Die Markdown-Dateien sind nicht nur Dokumentation, sondern **epistemische Infrastruktur**. Sie machen den Entstehungsprozess nachvollziehbar und ermöglichen wissenschaftliche Quellenkritik am Code.

---

## 4. Qualitätssicherung: Der Critical Expert in the Loop

Der **Critical Expert in the Loop (CEIL)** ist das zentrale Qualitätssicherungsprinzip. Anders als beim "Human in the Loop" geht es nicht nur um Supervision, sondern um:

- **Deterministische Validierung**: Automatisierte Tests prüfen Korrektheit
- **Fachliche Prüfung**: Domänenexpertise bewertet semantische Korrektheit
- **Iterative Verfeinerung**: Fehler werden systematisch dokumentiert und behoben

### Die Sycophancy-Falle

Ein kritisches Problem ist die Tendenz von LLMs zur **Sycophancy** – dem Versuch, dem Nutzer nach dem Mund zu reden. Dies ist besonders problematisch, wenn Forschende unbewusst fehlerhafte Annahmen einbringen.

<div class="module-placeholder" data-module="sycophancy-trap"></div>

**Gegenmaßnahmen:**
- Explizite Fehlersuche in Prompts verlangen
- Multiple LLMs als "Judges" einsetzen
- Deterministisches Testing erzwingt Korrektheit
- Kritische Distanz zum LLM-Output wahren

---

## 5. Von der Implementierung zur Kontextualisierung

Promptotyping transformiert Softwareentwicklung fundamental:

**Traditionelle Entwicklung:**
- Problem → Design → Implementation → Testing

**Promptotyping:**
- Problem → Kontextualisierung → Requirements Engineering → LLM-Implementation → CEIL-Validierung

Die eigentliche Arbeit verschiebt sich von der Implementierung zur **Anforderungs- und Kontextualisierungsaufgabe**. Der Entwickler wird zum "Context Engineer".

### Context Engineering als neue Quellenkritik

In den Digital Humanities ist Quellenkritik zentral. Context Engineering erweitert dieses Prinzip:

- **Traditionelle Quellenkritik**: Wer hat wann welches Dokument mit welcher Intention erstellt?
- **Context Engineering**: Welcher Kontext wurde dem LLM gegeben? Welche Annahmen sind implizit? Wie wurde validiert?

Die Promptotyping-Dokumente werden zur "digitalen Quellenlage" der Software.

---

## 6. Fallstudien

Die Methode wurde in sieben Digital Humanities-Projekten entwickelt und validiert:

<div data-id="realonline"></div>
<div data-id="lucina"></div>
<div data-id="cvma"></div>
<div data-id="aldersbach"></div>
<div data-id="km"></div>
<div data-id="szd"></div>

---

## 7. Fazit: Jenseits der Intuition

„Vibe Coding" mag für Prototypen funktionieren, aber Wissenschaft braucht Methode. Promptotyping bietet einen strukturierten Ansatz, der:

- **Reproduzierbarkeit** durch externe Kontextdokumentation ermöglicht
- **Qualität** durch Critical Expert in the Loop sichert
- **Transparenz** durch Source Available Literacy schafft
- **Effizienz** durch strukturiertes Requirements Engineering erhöht

Context Engineering ist die neue Kernkompetenz für wissenschaftliche Softwareentwicklung mit LLMs. Es verbindet klassische geisteswissenschaftliche Methoden (Quellenkritik, Hermeneutik) mit moderner KI-Entwicklung.

**Die Zukunft gehört nicht dem intuitive "Vibing", sondern dem methodischen "Promptotyping".**

---

<div class="paper-meta-card">
  <div class="meta-abstract">
    <h3>Paper-Metadaten</h3>
    <p><strong>Autor:</strong> Christopher Pollin</p>
    <p><strong>Institution:</strong> Zentrum für Informationsmodellierung, Universität Graz</p>
    <p><strong>Kontext:</strong> Praxisbericht aus 5 Monaten LLM-assistierter Entwicklung</p>
    <p><strong>Projekte:</strong> 7 Digital Humanities Anwendungen</p>
    <p><strong>Entwicklungszeit:</strong> ~60 Stunden gesamte Implementierung</p>
  </div>
  <div class="meta-actions">
    <a href="https://github.com/DigitalHumanitiesCraft/excellence" class="meta-btn primary" target="_blank">
      <span>💻</span>
      <span class="btn-label">GitHub Repository</span>
    </a>
    <a href="https://dhcraft.org/excellence/" class="meta-btn" target="_blank">
      <span>🌐</span>
      <span class="btn-label">Project Website</span>
    </a>
    <a href="#contact" class="meta-btn">
      <span>📧</span>
      <span class="btn-label">Kontakt</span>
    </a>
  </div>
</div>
