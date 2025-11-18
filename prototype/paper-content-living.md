# Promptotyping
<p class="subtitle">Ein Praxisbericht zur strukturierten LLM-assistierten Entwicklung in den Digital Humanities</p>

---

## Abstract

Large Language Models transformieren die Softwareentwicklung fundamental. Während GitHub Copilot Studien allgemeine Produktivitätssteigerungen dokumentieren, fehlen strukturierte Methoden für den wissenschaftlichen Einsatz. Das von Karpathy (2025) geprägte "Vibe Coding" ermöglicht zwar schnelles Prototyping, führt jedoch oft zu unwartbaren Systemen.

Dieser Praxisbericht präsentiert **Promptotyping** als strukturierten Gegenentwurf. Die Methode entstand iterativ aus sieben Digital Humanities-Projekten und operiert in sechs dokumentierten Phasen. Sie adressiert spezifische LLM-Risiken wie **Context Rot** und **Sycophancy** durch systematische Dokumentation ("Source Available Literacy") und den **Critical Expert in the Loop**.

---

## 1. Einleitung

Digital Humanities-Forschende benötigen spezialisierte Werkzeuge, verfügen aber selten über Ressourcen für professionelle Softwareentwicklung. Generative KI verspricht hier Abhilfe, birgt aber epistemische Risiken. Andrej Karpathy beschreibt "Vibe Coding" als Praxis, bei der Code intuitiv ("based on vibes") generiert wird. In der Wissenschaft, wo Reproduzierbarkeit zentral ist, ist dieser Ansatz problematisch.

Wir schlagen **Promptotyping** vor: Eine Methode, die die Geschwindigkeit von Vibe Coding mit der Struktur von Software-Engineering verbindet.

---

## 2. Die epistemische Herausforderung

LLMs sind keine Wissensdatenbanken, sondern probabilistische Systeme. Sie leiden unter spezifischen Schwächen, die wir nicht ignorieren dürfen, sondern methodisch abfangen müssen.

### 2.1 Context Rot ("Lost in the Middle")

Aktuelle Studien (Chroma, 2025; Hong et al., 2025) belegen, dass die Leistung von LLMs bei langen Eingaben nicht linear bleibt. Informationen in der Mitte des Kontextfensters werden mit höherer Wahrscheinlichkeit ignoriert oder halluziniert.

**Interaktive Simulation:**
Testen Sie hier, wie die Abrufgenauigkeit (Recall) bei steigender Token-Anzahl sinkt und warum wir Projekte in kleine Markdown-Dateien zerlegen müssen.

<div class="module-placeholder" data-module="context-rot-viz"></div>

### 2.2 Sycophancy (Das "Yes-Man"-Problem)

Modelle tendieren dazu, Nutzerannahmen unkritisch zu bestätigen, um "hilfreich" zu wirken (Chen et al., 2025). Dies ist fatal, wenn Forschende mit falschen Hypothesen in den Dialog treten.

**Interaktive Simulation:**
Versuchen Sie im folgenden Terminal, das Modell durch suggestive Fragen ("Bestechung" oder Autoritäts-Bias) zu falschen Aussagen zu verleiten.

<div class="module-placeholder" data-module="sycophancy-trap"></div>

---

## 3. Die Methode: Promptotyping

Promptotyping strukturiert die Entwicklung in sechs konsekutive Phasen. Jede Phase endet mit einem **Savepoint** (validiertes Artefakt).

### 3.1 Das Phasenmodell

1. **CONTEXT (README.md)**: Erfasst Projektziele und Constraints.
2. **DATA (DATA.md)**: Spezifiziert Datenstrukturen und Ontologien.
3. **EXPLORATION**: Experimentelle Phase zur technischen Klärung (Wegwerf-Code).
4. **REQUIREMENTS**: Formalisierung der Anforderungen basierend auf Exploration.
5. **IMPLEMENTATION (INSTRUCTIONS.md)**: Detaillierte Anweisungen. Kritischste Phase zur Vermeidung von Fehlern.
6. **PROTOTYPE**: Generierung des finalen Codes.

### 3.2 Dokumentation als externes Gedächtnis

Da LLMs kein persistentes Gedächtnis haben, fungieren die Markdown-Dokumente als "externer Hippocampus".

**Interaktive Exploration:**
Untersuchen Sie hier die Struktur eines realen "Promptotyping Vaults" und navigieren Sie durch die Dokumente, die als Context Injection dienen.

<div class="module-placeholder" data-module="vault-explorer"></div>

---

## 4. Fallstudien

Die Methode wurde in sieben Projekten validiert. Hier eine Auswahl der Ergebnisse:

<div class="use-case-placeholder" data-id="realonline"></div>
<div class="use-case-placeholder" data-id="lucina"></div>
<div class="use-case-placeholder" data-id="cvma"></div>

In unserer Erfahrung zeigten Projekte mit **5 bis 7 Dokumenten** die beste Balance. Weniger führte zu Chaos (siehe Stefan Zweig Digital), mehr zu administrativem Overhead (siehe Lucina).

---

## 5. Methodische Einordnung

### 5.1 Vibe Coding vs. Agentic Coding

Die aktuelle Forschung unterscheidet zwei Pole:
* **Vibe Coding** (Karpathy, 2025): Intuitiv, schnell, menschzentriert, aber fehleranfällig.
* **Agentic Coding** (Sapkota et al., 2025): Autonome Agenten planen und testen selbstständig.

**Promptotyping** positioniert sich als pragmatische Brücke. Es nutzt die Geschwindigkeit von Vibe Coding in der *Exploration*, verlangt aber die Strenge von Agentic Coding in der *Implementation* durch den **Critical Expert in the Loop**.

---

## 6. Fazit

Promptotyping ist keine Software, sondern eine Haltung. Es verschiebt die Kompetenz von "Code schreiben" zu "Kontext kuratieren" (**Context Engineering**).

Die Zukunft der Digital Humanities liegt nicht im blinden Vertrauen auf KI ("Vibe"), sondern in der Fähigkeit, KI durch strukturierte Sprache präzise zu steuern.

---

## Literatur

* Bamman, D., et al. (2024). *The Impact of Language Models on the Humanities, and Vice-Versa*. IDEALS.
* Chen, W., et al. (2025). *From Yes-Men to Truth-Tellers: Addressing Sycophancy in Large Language Models*. arXiv preprint.
* Chen, Z., et al. (2025). *Promptware Engineering: Software Engineering for LLM Prompt Development*. arXiv:2503.02400.
* Chroma (2025). *Context Rot: How Increasing Input Tokens Impacts LLM Performance*. Technical Report.
* Karpathy, A. (2025). "Vibe Coding". Blog Post, Feb 2025.
* MDPI (2025). *AI-Driven Innovations in Software Engineering: A Review of Current Practices and Future Directions*. Applied Sciences, 15(3).
* Pollin, C. (2025). *Promptotyping: Von der Idee zur Anwendung*. Digital Humanities Craft Blog.
* Sapkota, R., et al. (2025). *Vibe Coding vs. Agentic Coding: Fundamentals and Practical Implications of Agentic AI*. arXiv:2505.19443.
