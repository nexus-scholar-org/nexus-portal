# Module 5.2: Reproducibility & Open Science
**Series:** Modern Research Methodologies
**Module:** Sharing & Defending Your Research

---

## Scene 1: The Hook (≤ 30 seconds)

**[Visual]**
- A student reading a paper. They see the sentence: "Data and code available upon reasonable request."
- They send an email. 
- Fast forward 3 months: No reply. A tumbleweed blows across the screen.

**[Audio / Voiceover]**
"You read an incredible paper and want to build your thesis on it. But the code isn't published, and the data is 'available upon reasonable request.' You email the author. You never hear back. 

Your research hits a dead end, all because someone treated their data like a trade secret instead of a scientific contribution. Today, we're talking about Open Science, and how to ensure your work actually advances the field instead of just sitting on a PDF."

---

## Scene 2: The Context — The Replication Crisis (2–3 minutes)

**[Visual]**
- Headlines from Nature and Science about the reproducibility crisis in psychology, medicine, and machine learning.

**[Audio / Voiceover]**
"Science is experiencing a replication crisis. Across multiple disciplines, independent labs are finding they cannot reproduce the results of landmark studies. 

Why? Sometimes it's fraud, but usually, it's just opaque methodology. Researchers hide messy data, they don't publish the exact scripts they used to clean it, and they only report the experiments that worked. 

The antidote to the replication crisis is Open Science: making your data, your code, and your manuscript freely available to the world."

---

## Scene 3: The Concept — FAIR Data (3–5 minutes)

**[Visual]**
- The acronym F.A.I.R. broken down on screen.

**[Audio / Voiceover]**
"If you publish data, throwing a CSV on a personal website isn't enough. Personal websites die. You need to follow the FAIR principles.

**Findable:** Host your data on a persistent repository like Zenodo or OSF, which assigns it a permanent DOI.
**Accessible:** Even if the data is restricted for privacy, the metadata explaining what the data *is* must be public.
**Interoperable:** Use open formats. Don't use a proprietary software file format; use standard CSVs or JSON.
**Reusable:** Include a data dictionary explaining every column, and attach a clear open-source license."

---

## Scene 4: The Concept — The Reproducible Repository (3–5 minutes)

**[Visual]**
- A GitHub repository structure: `data/`, `notebooks/`, `src/`, `README.md`, `requirements.txt`.

**[Audio / Voiceover]**
"Data is only half the battle. You must also share your code. 

A reproducible repository requires three things:
1. **The Code.** Obviously.
2. **A Toy Dataset.** If your real data is 500 gigabytes or highly confidential, provide a tiny, anonymized sample so people can test your code.
3. **The Environment.** Python code written in 2022 often breaks in 2026 because libraries update. You must include a `requirements.txt`, an `environment.yml`, or a Dockerfile. 

Without the environment, your code has an expiration date of about 18 months."

---

## Scene 5: Open Access Publishing (2 minutes)

**[Visual]**
- Three pathways: Preprints (green arrow, fast), Gold OA (gold arrow, expensive), Green OA (blue arrow, delayed).

**[Audio / Voiceover]**
"Finally, how do you share the paper itself?

**Preprints** (like arXiv or bioRxiv) let you share your manuscript *before* peer review. It's free, it establishes your priority on the idea, and people can start citing you immediately.

**Gold Open Access** is when you pay the journal an Article Processing Charge — sometimes thousands of dollars — to make the final paper free forever.

**Green Open Access** is when you publish behind a paywall for free, but legally upload the accepted manuscript to your university's public repository. 

Never hide your work behind a paywall if you don't have to."

---

## Scene 6: Summary (≤ 30 seconds)

**[Audio / Voiceover]**
"Let's recap:
1. **The Replication Crisis** is solved by transparency.
2. **FAIR Data:** Findable, Accessible, Interoperable, Reusable. Use Zenodo, not Dropbox.
3. **Reproducible Code:** Always include the computing environment (requirements.txt).
4. **Open Access:** Use preprints to get your work out early and freely."

---

## Scene 7: Standout Close

**[Audio / Voiceover]**
"If your research isn't reproducible, it's just an anecdote."
