# Human feasibility protocol

Draft for a 4–6-person feasibility pilot after a **real DH research-data task**
and its reference expectations have been prepared and reviewed. The accompanying
synthetic fixture is ineligible for the study. The dating examples below illustrate
the procedure and must be adapted to the chosen real collection. No participants
have been recruited or tested by this package.

## Objective

Can a DH researcher understand the public task, direct an agent to implement the
dating explorer, examine its outputs and make a justified decision about use? Can
the observer measure those events without taking over the work? This small pilot
checks feasibility; it is not a powered estimate of comparative effectiveness.

## Before a session

- Agree recording, consent, retention and anonymisation with participants and the
  responsible institution. Store pseudonymous participant records outside the repo.
- Record DH/data experience, programming experience, familiarity with the chosen
  agent and prior Promptotyping use. Use the same language and tool environment.
- Provide identical tool onboarding and materials. Record additional method-training
  time in B. A may use normal notes, tests and documentation; it receives no ban on
  practices shared with Promptotyping.
- Define allowed assistance and resource ceilings before starting. Record every
  facilitator intervention. The method's originator should not supply unrecorded
  corrective hints. Give identical answers to substantive task-clarification questions.
- Assign a trial ID and prepare an isolated workspace with the organiser CLI. Keep
  answers, evaluator reports, future episodes and participant identities inaccessible
  to the working agent. The participant must be able to stop or reject its work.

## Session procedure

1. Participant reads the research brief, task, protocol and policy. Ask them to
   restate the research purpose and what the data cannot establish. Record this
   before helping. Let them develop and inspect the initial artefact.
2. Participant states whether they would use it for the stated purpose, with reasons.
   Save the artefact, checks, decision and observable trace. Do not reveal grader
   results; the participant can use their own checks.
3. Deliver the same policy amendment via `advance`. Observe diagnosis, correction,
   updated documentation and renewed acceptance/rejection.
4. Use `advance` again and start a fresh agent chat. The same participant performs
   continuation on new records for February 1832. This tests session continuity.
   A later extension hands the saved project to another participant to test human
   transfer; do not conflate the two designs.
5. Ask the participant to explain one assigned record and one unresolved record,
   locate their sources, name one limitation and describe what they would check next.
   Record confidence and rationale; confidence alone is not correctness.
6. An independent reviewer runs the rubric against the saved outputs. Record active
   participant time, tool waiting, training, assistance, failures and abandonment.

Preserve an artefact checkpoint and its cumulative model usage before and after
each substantive intervention where observable. Independently judge which errors
were present, detected, corrected or introduced. Record acceptance decisions against
the reviewed artefact state; report counts and explicit denominators, using N/A
when no error-detection or acceptance opportunity exists. For artefact-use scenarios,
measure correct task completion, errors and evidence-finding time separately from
development and onboarding time. Expert ratings use the rubric's anchored ordinal
scale plus qualitative reasons; they are not unstructured impressions.

Use task-appropriate time ceilings determined by calibration. Budget exhaustion is
an outcome; infrastructure failure is a separately labelled event. Do not repair
the submitted artefact before scoring it. Post-session repairs use a separate copy.

## Feasibility decisions

After the pilot, review whether the task is interpretable, both conditions are
credible, adequate and inadequate artefacts can be distinguished, scoring is
consistent, budget is feasible and meaningful human interventions are observable.
If every initial artefact is perfect, the task may still reveal later failures;
if all stages have a ceiling effect, add a meaningful new case or handover rather
than an arbitrary token burden. If everyone fails due to setup, repair the setup.

For a subsequent comparison, plan randomisation/experience balance, sample size,
learning/carryover, outcome-rater blinding and participant/task-level analysis.
Do not treat repeated tasks from one person as independent participants. Add a
human-only arm only if the research question concerns synergy relative to humans
or agents alone; it is not required to compare two human–agent workflows.
