# Promptotyping
<p class="subtitle">Ein Praxisbericht zur strukturierten LLM-assistierten Entwicklung in den Digital Humanities</p>

## Abstract

Large Language Models transformieren die Softwareentwicklung fundamental. Während GitHub Copilot Studien allgemeine Produktivitätssteigerungen dokumentieren und wissenschaftliche Publikationen zu LLM-assistierter Entwicklung von 7 (2020) auf über 160 (2023) stiegen, fehlen strukturierte Methoden für den wissenschaftlichen Einsatz. Das "Vibe Coding" ermöglicht zwar schnelles Prototyping durch vage Prompts, führt jedoch zu undokumentierten Systemen deren spätere Nachvollziehbarkeit problematisch ist.

Dieser Praxisbericht präsentiert Promptotyping als strukturierten Ansatz für explorative Entwicklung. Die Methode entstand iterativ aus sieben Digital Humanities-Projekten über fünf Monate. Sie operiert in sechs dokumentierten Phasen. Jede Phase fungiert als Savepoint mit Expertenvalidierung. Die Phasen produzieren Markdown-Dokumente, die als externes Arbeitsgedächtnis fungieren. Die kritische IMPLEMENTATION-Phase dokumentiert Datentransformationen und half in unseren Projekten, typische Fehlerquellen zu vermeiden.

Die Projekte variierten von zweistündigen Proof-of-Concepts bis zu 25-stündigen digitalen Editionen. In unserer Erfahrung zeigten Projekte mit fünf bis sieben Dokumenten die beste Balance zwischen Struktur und Flexibilität. Workshop-Teilnehmer ohne Programmiererfahrung erstellten funktionale Prototypen in sechs bis acht Stunden.

## 1. Einleitung

Digital Humanities-Forschende benötigen spezialisierte digitale Werkzeuge für hochspezifische Forschungsfragen, verfügen aber selten über Ressourcen für professionelle Softwareentwicklung. Large Language Models versprechen hier niedrigschwellige Code-Generierung. Die Erfahrung zeigt jedoch, dass undokumentierte Entwicklung die spätere Nachvollziehbarkeit erschwert.

Andrej Karpathy prägte den Begriff "Vibe Coding" für diese intuitive Entwicklungspraxis, bei der Code durch vage Prompts generiert und ohne tieferes Verständnis akzeptiert wird. Er warnt, dass man sich regelmäßig ehrlich fragen solle, ob man wirklich noch verstehe, was gerade passiert. Diese Warnung ist besonders relevant für wissenschaftliche Anwendungen, wo Nachvollziehbarkeit und Reproduzierbarkeit zentral sind.

Dieser Praxisbericht präsentiert Promptotyping als pragmatische Alternative. Die Methode entstand iterativ aus der praktischen Arbeit an sieben DH-Projekten. Sie systematisiert die Interaktion mit LLMs ohne den Overhead traditioneller Softwareentwicklung.
