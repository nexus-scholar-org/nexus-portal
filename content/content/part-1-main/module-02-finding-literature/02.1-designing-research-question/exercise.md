# Exercise: The Question Forge
**Module:** 2.1 — Designing Your Research Question
**Estimated Time:** 30 minutes
**Difficulty:** ⭐⭐ Intermediate
**Nexus Tool:** None (methodology), but uses outputs from `scholar-search-kit` and `scholar-graph-kit`

---

## Scenario

> You are 4 months into your PhD. Your advisor has asked you to submit a draft research question for your thesis proposal by next Friday. You have a broad interest area, but no specific question. Today, you will forge one.

---

## Tasks

### Task 1: Start with a Topic
Write down a broad topic you are genuinely interested in. This should be 3–8 words. For example:
- "Artificial intelligence in drug discovery"
- "Climate change adaptation in urban areas"
- "Student motivation in online learning"

**Your Topic:** _______________________________________________

---

### Task 2: Apply a Framework
Based on your discipline, choose the appropriate framework and fill in each component:

**Option A: PICO** (Health Sciences / Clinical)
| Component | Your Answer |
|:---|:---|
| **P**opulation | |
| **I**ntervention | |
| **C**omparison | |
| **O**utcome | |

**Option B: SPIDER** (Qualitative / Social Sciences)
| Component | Your Answer |
|:---|:---|
| **S**ample | |
| **P**henomenon of Interest | |
| **D**esign | |
| **E**valuation | |
| **R**esearch type | |

**Option C: Heilmeier Catechism** (Engineering / CS)
| Question | Your Answer |
|:---|:---|
| What are you trying to do? | |
| How is it done today, and what are the limits? | |
| What's new in your approach? | |
| Who cares? If you succeed, what changes? | |
| What are the risks and payoffs? | |

---

### Task 3: Write the Research Question
Using your framework answers, write a single, precise research question.

**Question 1:** Does your question specify a population/sample, a method, and a measurable outcome? If not, revise it until it does.

---

### Task 4: The FINER Test
Run your question through the FINER checklist:

| Criterion | Pass/Fail | Justification |
|:---|:---|:---|
| **F**easible | | |
| **I**nteresting | | |
| **N**ovel | | |
| **E**thical | | |
| **R**elevant | | |

**Question 2:** Did your question fail any criterion? If so, what would you change to make it pass?

---

### Task 5: The "Future Work" Hack (Optional — if you have access to the tools)
1. Run `scholar-search build --query "YOUR TOPIC"` to gather papers.
2. Run `scholar-graph build --input results.bib --direction backward` to build a citation graph.
3. Find the 3 highest-PageRank papers. Open them and read ONLY the "Future Work" or "Limitations" sections.

**Question 3:** Did any of the "Future Work" sections suggest a gap that aligns with your research question? If so, you have independent confirmation from the field's leading experts that your question is worth pursuing.

---

## Solution / Self-Check

<details>
<summary>Click to reveal self-assessment rubric</summary>

### Task 2 Check
- Did you fill in EVERY component of your chosen framework? If any cell is blank, your question isn't specific enough yet.
- If you used PICO but you're in social sciences, try SPIDER instead. The framework must match your discipline.

### Task 3 Check
- Read your research question aloud. If it sounds like something you could Google and get an answer in 30 seconds, it's too simple. If it sounds like a textbook chapter title, it's too broad. 
- A good research question is uncomfortable — it should make you think "I genuinely don't know the answer, and finding out would be valuable."

### Task 4 Check
- **Feasibility** is the most commonly failed criterion. If you don't have access to the data, the computational resources, or the time, your question is aspirational, not actionable. Scale it down.
- **Novelty** requires actual evidence. "I think this is new" is not enough. You should be able to point to a dedup result or a search showing zero papers that address your exact question.

### The Meta-Lesson
Research question design is iterative. You will refine it 5–10 times before your proposal is accepted. That's normal. The frameworks and FINER criteria are guardrails, not handcuffs.

</details>
