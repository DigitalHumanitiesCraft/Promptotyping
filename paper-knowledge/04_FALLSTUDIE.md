## 4. Fallstudie: REALonline Rauminventare

### 4.1 Projektkontext

Die REALonline-Datenbank der Universität Salzburg dokumentiert materielle Kultur des Mittelalters. Unser Projekt sollte Rauminventare österreichischer Adelssitze von 1432 bis 1602 visualisieren.

### 4.2 Entwicklungsverlauf

Die **CONTEXT-Phase** (30 Min) klärte die Forschungsfrage mit dem Historiker.
Die **DATA-Phase** (1h) analysierte den JSON-Export aus Neo4j und entdeckte inkonsistente Datentypen.
Die **EXPLORATION** (2h) erzwang eine Neukonzeption, da multiple separate Inventare statt einer Sammlung vorlagen.
In der **IMPLEMENTATION** (45 Min) wurden alle Normalisierungen und Transformationen präzise dokumentiert.

### 4.3 Kritische Intervention

Der Historiker korrigierte mehrere technische Annahmen. Die Hierarchie sollte nach Gebäuden erfolgen, nicht nach Objektkategorien. Historische Begriffe waren statt moderner Kategorien zu verwenden. Diese Interventionen waren nur durch kontinuierliche Experteneinbindung möglich.
