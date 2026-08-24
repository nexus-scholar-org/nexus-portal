# Module 3.4: Conducting a Systematic Literature Review
**Series:** Modern Research Methodologies
**Module:** Analyzing Literature — Making Sense of It All
**Tool:** Full Nexus Suite (capstone integration)

---

## Scene 1: The Hook (≤ 30 seconds)

**[Visual]**
- A thesis defense. A committee member leans forward and says: "How do we know you didn't cherry-pick these 30 papers to support your hypothesis? What about the studies that contradict you?"
- The student has no answer. Awkward silence.

**[Audio / Voiceover]**
"Your thesis committee asks the most dangerous question in academia: 'How do we know you didn't cherry-pick these papers to support your argument?'

If you did a narrative review — where you selected papers based on personal judgment — you have no defense. But if you did a systematic review — with a pre-registered protocol, reproducible search queries, and documented inclusion criteria — the answer is simple: 'Here is my PRISMA flow diagram. Every step is documented and reproducible.'

Today, we put it all together."

---

## Scene 2: The Context (2–3 minutes)

**[Visual]**
- Split screen:
  - LEFT: "Narrative Review" — An author browsing Google Scholar, picking papers they like. Label: "Subjective."
  - RIGHT: "Systematic Review" — A flowchart with rigid criteria, exact search strings, and documented numbers. Label: "Reproducible."

**[Audio / Voiceover]**
"There are two kinds of literature reviews.

A narrative review is author-driven. You search based on your intuition, include papers you find relevant, and exclude the rest. This is fine for an introduction or a discussion section, but it is fundamentally subjective. A different researcher with different biases might reach a different conclusion.

A systematic review is protocol-driven. You define your research question, your search databases, your exact search strings, and your inclusion and exclusion criteria *before* you read a single paper. Every step is documented. Another researcher could follow your protocol and arrive at the exact same set of papers.

This is considered the highest level of evidence in most fields, and increasingly, top journals expect it."

---

## Scene 3: The Concept — PRISMA 2020 (3–5 minutes)

**[Visual]**
- The classic PRISMA flow diagram, animated step by step.
- Each box fills in with numbers as the voiceover progresses.

**[Audio / Voiceover]**
"The global standard for reporting a systematic review is PRISMA 2020. It defines a flow diagram with four stages.

**Stage 1: Identification.** You report how many records each database returned. OpenAlex: 450. PubMed: 320. Scopus: 280. Total: 1,050.

**Stage 2: Screening.** You remove duplicates — the kit found 310. Now you have 740 unique papers. You screen by title and abstract using your inclusion criteria. 580 are excluded. 160 remain.

**Stage 3: Eligibility.** You read the full text of the 160 papers. 90 don't meet your criteria upon deeper inspection. 70 remain.

**Stage 4: Included.** Your final dataset is 70 papers. This is the body of literature you will synthesize.

Every single number in this diagram must be documented and defensible."

---

## Scene 4: The Demonstration — The Nexus SLR Pipeline (5–8 minutes)

**[Visual]**
- Terminal window showing a rapid sequence of commands, each labeled with the PRISMA stage it maps to.

**[Audio / Voiceover]**
"Here is where everything we've learned clicks together. Let me walk you through the full Nexus SLR pipeline.

**Identification:**
`scholar-search build --query 'transformer AND ICU readmission' --sources openalex,crossref,s2`
`scholar-search import scopus_export.ris`

**Deduplication:**
`scholar-search dedup`
The kit reports: 310 duplicates removed. 740 unique.

**Full-text retrieval:**
`scholar-pdf download --input unique_papers.bib`
The PDF kit finds open-access versions for 520 of the 740 papers.

**Analysis (optional but powerful):**
`scholar-graph build --input included.bib --direction both`
The graph kit reveals the citation structure. You identify 3 foundational papers via PageRank.

`scholar-rag ingest ./pdfs && scholar-rag query 'What methods were used for missing data?'`
The RAG kit lets you ask semantic questions across all 70 included papers.

**Synthesis:**
You build your extraction template and synthesis matrix from Module 3.1.

Every step is a command. Every command has a log. The entire SLR is reproducible."

---

## Scene 5: Exercise Teaser (≤ 30 seconds)

**[Visual]**
- Title card: "Exercise: The Protocol"
- A PRISMA flow diagram template with blank boxes.

**[Audio / Voiceover]**
"In the exercise, you'll draft an SLR protocol for your own research question. You'll define your search strings, your inclusion criteria, and fill in a PRISMA flow diagram template using the Nexus tools."

---

## Scene 6: Summary (≤ 30 seconds)

**[Visual]**
- Summary slide with 3 bullet points.

**[Audio / Voiceover]**
"Let's recap:
1. **Narrative vs. Systematic:** Systematic reviews are reproducible and defensible. Narrative reviews are subjective.
2. **PRISMA 2020:** The four stages — Identification, Screening, Eligibility, Included — with documented numbers at every step.
3. **The Nexus Pipeline:** Every PRISMA stage maps to a specific tool in the suite. The SLR is fully automated and reproducible."

---

## Scene 7: Standout Close

**[Visual]**
- Dark standout frame, white text.

**[Audio / Voiceover]**
"Prove your objectivity. Document your process."
