# Exercise: The Mock Response Letter
**Module:** 4.4 — Responding to Peer Review
**Estimated Time:** 25 minutes
**Difficulty:** ⭐⭐ Intermediate

---

## Scenario
> You submitted a paper on "Deep Learning for Medical Image Classification." You received Major Revisions with the following 3 reviewer comments. Write a professional point-by-point response letter.

---

## Reviewer Comments

**Reviewer 1, Comment 1:**
*"The sample size of 500 images is too small to draw generalizable conclusions. How do the authors justify this?"*

**Reviewer 2, Comment 1:**
*"The authors claim their model outperforms all existing approaches, but they only compare against two baselines. This is an overclaim."*

**Reviewer 2, Comment 2:**
*"Smith et al. (2019) already published a very similar study using the same dataset. The novelty of this work is unclear."*

---

## Tasks

### Task 1: Write the Response
For each comment, write a response in this format:

> **Reviewer X, Comment Y:**
> *[Quote the comment]*
> 
> **Response:** [Your professional response]
> 
> **Changes Made:** [Describe the specific edits, with page/line numbers if applicable]

### Task 2: Self-Evaluate
After writing, check each response against these criteria:
- [ ] Did I thank the reviewer?
- [ ] Did I address the concern directly (not dodge it)?
- [ ] Did I specify exactly what I changed in the manuscript?
- [ ] Is my tone professional, not defensive?

---

## Solution
<details>
<summary>Click to reveal sample responses</summary>

**Reviewer 1, Comment 1:**
> **Response:** We thank the reviewer for this important concern. We acknowledge that our dataset of 500 images is limited in size. To address this, we have (1) added a 5-fold cross-validation analysis to demonstrate robustness (Table 3, p. 8), (2) added a discussion of this limitation (p. 12, lines 245–252), and (3) included a comparison with augmented datasets (Appendix B). We acknowledge that further validation on larger, multi-site datasets is needed and have stated this as future work.

**Reviewer 2, Comment 1:**
> **Response:** We appreciate this feedback and agree that our original claim was too strong. We have (1) revised the language from "outperforms all existing approaches" to "outperforms the compared baselines in this evaluation" (p. 9, line 178), and (2) added two additional baselines (ResNet-50 and EfficientNet-B0) to strengthen the comparison (Table 2, p. 7).

**Reviewer 2, Comment 2:**
> **Response:** We thank the reviewer for this reference. While Smith et al. (2019) applied CNNs to the same dataset, our work differs in three key ways: (1) we use a Transformer architecture, (2) we evaluate on a temporally held-out test set, and (3) we assess algorithmic fairness across demographic subgroups, which Smith et al. did not. We have added a paragraph explicitly differentiating our contribution from Smith et al. (p. 3, lines 62–71) and cite their work appropriately.

</details>
