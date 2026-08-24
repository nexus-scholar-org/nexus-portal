# Module 2.1: Designing Your Research Question
**Series:** Modern Research Methodologies
**Module:** Finding Literature — The Search Phase
**Tool:** None (pure methodology, but references `scholar-search-kit` and `scholar-graph-kit`)

---

## Scene 1: The Hook (≤ 30 seconds)

**[Visual]**
- A student sitting across from their advisor. The advisor leans back and says: "So, what exactly is your research question?"
- The student opens their mouth. Closes it. Opens it again.
- Text overlay: *"I'm... working on machine learning in healthcare?"*
- The advisor's expression: polite disappointment.

**[Audio / Voiceover]**
"Six months into your PhD, your advisor asks the most important question you will ever face: 'What exactly is your research question?'

You pause. You thought you had one. You say, 'I'm working on machine learning in healthcare.' 

Your advisor frowns. That's a topic, not a question. And you just realized you've been wandering through the research landscape without a compass."

---

## Scene 2: The Context (2–3 minutes)

**[Visual]**
- Three boxes stacked vertically, like a funnel:
  - Top (widest): "TOPIC — Machine learning in healthcare"
  - Middle: "GAP — No study has compared transformers to RNNs for pediatric ICU readmission"
  - Bottom (narrowest): "QUESTION — How does transformer-based prediction compare to RNN-based models in terms of AUROC?"

**[Audio / Voiceover]**
"Here is the most important distinction in all of academia: a Topic is not a Gap, and a Gap is not a Research Question. They are three different levels of a funnel.

A topic is a broad area you're interested in. It's a conversation. 'Machine learning in healthcare.'

A gap is a specific observation about what has NOT been done in that conversation. 'Nobody has compared transformers to RNNs for this specific clinical prediction task.'

A research question is a precise, answerable query designed to fill that gap. It specifies the population, the method, and the outcome measure.

The single most common mistake of first-year PhD students is confusing a topic for a question. This leads to years of unfocused reading, aimless coding, and a thesis that tries to be about everything and ends up being about nothing."

---

## Scene 3: The Concept — Frameworks (3–5 minutes)

**[Visual]**
- Three framework cards side by side:
  - PICO (with labels: Population, Intervention, Comparison, Outcome)
  - SPIDER (with labels: Sample, Phenomenon of Interest, Design, Evaluation, Research type)
  - Heilmeier Catechism (with the 5 questions)

**[Audio / Voiceover]**
"So how do you craft a precise research question? You use a framework. Let me give you three, depending on your field.

If you're in health sciences or clinical research, use **PICO**. Population: pediatric ICU patients. Intervention: transformer-based model. Comparison: RNN-based model. Outcome: AUROC and calibration. PICO forces you to be specific.

If you're in qualitative or social sciences research, PICO doesn't quite fit because there's no 'intervention.' Use **SPIDER** instead. It replaces Intervention with 'Phenomenon of Interest' and adds 'Design' and 'Evaluation.'

If you're in engineering or computer science, use the **Heilmeier Catechism**, developed by DARPA. It asks five brutal questions: What are you trying to do? How is it done today? What is new in your approach? Who cares? And what are the risks if you fail?"

---

## Scene 4: The Demonstration — Gap Analysis (5–8 minutes)

**[Visual]**
- Terminal window: `scholar-search build --query "transformer ICU readmission"`.
- Then: `scholar-graph build --input results.bib --direction both`.
- Opening the PyVis HTML network. Zooming in on a cluster that has very few connections to the rest of the graph.
- Text overlay: "This disconnected cluster = under-explored intersection = potential gap."

**[Audio / Voiceover]**
"Now let me show you how to find gaps systematically rather than hoping you stumble across one.

First, I run a broad search using `scholar-search-kit`. Then I feed the results into `scholar-graph-kit` to build a citation network. 

I open the interactive HTML visualization. I'm looking for something very specific: clusters that are disconnected or weakly connected to the main body of the graph. These represent under-explored intersections of ideas.

Then I go to the highest-PageRank papers in the main cluster and read their 'Future Work' sections. These sections are literal roadmaps written by the leading experts in the field, telling you exactly what still needs to be done."

---

## Scene 5: The FINER Test (2–3 minutes)

**[Visual]**
- A checklist graphic: F-I-N-E-R with checkmarks appearing one by one.

**[Audio / Voiceover]**
"Before you commit to a research question, run it through the FINER criteria.

**Feasible:** Can I actually answer this? Do I have the data, the compute, the time?
**Interesting:** Will my committee care? Will a journal publish the answer?
**Novel:** Has someone already answered this exact question? Check your dedup results.
**Ethical:** Can I pursue this without harming anyone?
**Relevant:** Does the answer actually matter to the field or to society?

If your question passes all five, you have a thesis. If it fails even one, refine it before investing months of work."

---

## Scene 6: Summary (≤ 30 seconds)

**[Visual]**
- Summary slide with 3 bullet points.

**[Audio / Voiceover]**
"Let's recap:
1. **Topic ≠ Gap ≠ Question.** You need all three, and only the question drives your thesis.
2. **Use a framework:** PICO, SPIDER, or Heilmeier — pick the one that matches your discipline.
3. **Validate with FINER:** Feasible, Interesting, Novel, Ethical, Relevant. If it doesn't pass, refine before you commit."

---

## Scene 7: Standout Close

**[Visual]**
- Dark standout frame, white text.

**[Audio / Voiceover]**
"A good research question is the difference between a thesis that takes three years and one that takes seven."
