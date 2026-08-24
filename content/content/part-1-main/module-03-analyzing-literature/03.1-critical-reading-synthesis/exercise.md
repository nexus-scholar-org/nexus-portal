# Exercise: The Synthesis Matrix Builder
**Module:** 3.1 — Critical Reading & Synthesis
**Estimated Time:** 30 minutes
**Difficulty:** ⭐⭐ Intermediate
**Nexus Tool:** None (pure methodology)

---

## Scenario

> You are writing the literature review chapter of your thesis proposal. Your advisor has explicitly told you: "I don't want a list of summaries. I want to see themes, patterns, and gaps." You have 5 papers in front of you. Your job is to build a Synthesis Matrix and produce one paragraph of genuine synthesis.

---

## Provided Abstracts

Below are 5 fictional but realistic abstracts. Read each one as if performing a Pass 2 (from Module 1.1).

**Paper 1: Smith et al. (2020)**
*"We trained a CNN on 500 chest X-rays to detect pneumonia. Our model achieved 92% accuracy. Limitations: small dataset, single hospital."*

**Paper 2: Jones et al. (2021)**
*"Using an RNN on 1,200 electronic health records from three hospitals, we predicted ICU readmission with an AUROC of 0.85. We did not assess algorithmic fairness across demographic groups."*

**Paper 3: Lee et al. (2022)**
*"We applied a Transformer model to 300 radiology reports for automated diagnosis. Accuracy was 94%. The dataset was limited to English-language reports from a single academic center."*

**Paper 4: Patel et al. (2023)**
*"We replicated the CNN approach of Smith (2020) on 8,000 chest X-rays across five countries. Our accuracy was only 78%, suggesting the original result was inflated by single-site bias. We also found significant performance disparities across racial groups."*

**Paper 5: Garcia et al. (2024)**
*"A systematic review of 15 studies on AI in medical imaging. We found that 12 of 15 studies used single-site data, and only 2 addressed algorithmic fairness. We call for mandatory multi-site validation and bias audits."*

---

## Tasks

### Task 1: Build the Extraction Template
Create a table with 7 columns (Author/Year, Research Question, Methodology, Sample, Key Findings, Limitations, Relevance) and fill in one row per paper.

**Question 1:** Which column was hardest to fill in consistently? Why?

---

### Task 2: Identify Themes
Look across your 5 rows. What recurring topics or issues appear across multiple papers?

List at least 3 themes. (Hint: look at limitations and findings for patterns.)

**Question 2:** Write down your 3+ themes.

---

### Task 3: Build the Synthesis Matrix
Create a new table where rows = your themes and columns = the 5 papers. Fill in each cell.

**Question 3:** Which cells are empty? What does the emptiness tell you about the state of the field?

---

### Task 4: Write a Synthesis Paragraph
Using your matrix, write ONE paragraph (4–6 sentences) that uses at least 3 of the 4 synthesis moves (Convergence, Divergence, Gap, Evolution).

**Question 4:** Does your paragraph read like a conversation between studies, or like a list of summaries? Be honest.

---

## Solution / Self-Check

<details>
<summary>Click to reveal solution</summary>

### Likely Themes
1. **Single-site vs. Multi-site Data** (Smith, Lee = single-site; Patel, Garcia = argue for multi-site)
2. **Algorithmic Fairness / Bias** (Only Patel and Garcia address it; Smith, Jones, Lee do not)
3. **Model Architecture Evolution** (CNN → RNN → Transformer over 2020–2022)

### Sample Synthesis Paragraph
"Early work on AI in medical imaging demonstrated promising accuracy using CNNs (Smith 2020) and Transformers (Lee 2022), with reported accuracies above 90%. **[Convergence]** However, Patel et al. (2023) challenged these results by replicating the CNN approach on a multi-site, multi-national dataset, finding that accuracy dropped to 78% — suggesting that single-site training inflates performance metrics. **[Divergence]** Critically, a systematic review by Garcia et al. (2024) found that only 2 of 15 studies addressed algorithmic fairness, revealing a significant ethical gap in the literature. **[Gap]** The field appears to be evolving from a focus on raw accuracy toward questions of generalizability and equity. **[Evolution]**"

### Matrix Check
If your matrix has an entire row of blanks for "Algorithmic Fairness" for Papers 1–3, you've correctly identified a systematic gap — most early studies ignored this issue entirely.

</details>
