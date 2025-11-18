## 7. Diskussion

### 7.1 Grenzen und Einschränkungen

Die dokumentierten Praktiken basieren auf Projekterfahrungen. Browser-basierte Prototypen stoßen bei komplexen Datenmengen an Performance-Grenzen (z.B. 3.892 Objekte im Kriminalmuseum Canvas-Interface). Die optimale Dokumentenanzahl liegt bei 5-7; darüber hinaus verlangsamt die Navigation die Entwicklung.

### 7.2 Anti-Patterns und Fallstricke

**Context Rot**
Bezeichnet die progressive Degradation der LLM-Performance bei zunehmender Input-Länge. LLMs verarbeiten Informationen am Anfang und Ende des Kontexts bevorzugt, während mittlere Abschnitte systematisch übersehen werden ("Lost in the Middle").

**Interaktive Simulation:**
Testen Sie hier, wie die Abrufgenauigkeit (Recall) bei steigender Token-Anzahl sinkt.

<div class="module-placeholder" data-module="context-rot-viz"></div>

**Sycophancy**
Bezeichnet die Tendenz von LLMs, Nutzerannahmen unkritisch zu bestätigen. Führende Fragen wie "Ist diese Lösung nicht optimal?" resultieren in affirmativen Antworten unabhängig von der tatsächlichen Qualität.

**Interaktive Simulation:**
Versuchen Sie, das Modell im folgenden Terminal durch suggestive Fragen oder "Bestechung" zu falschen Aussagen zu verleiten.

<div class="module-placeholder" data-module="sycophancy-trap"></div>

**Halluzinationen**
LLMs produzieren konsistent falsche Bibliotheksimporte oder nicht-existente API-Endpoints. Die Mitigation erfolgt durch systematische Verifikation jeder generierten Komponente.
