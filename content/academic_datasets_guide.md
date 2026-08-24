# The Modern Academic Data Ecosystem
*A Guide to Open Scholarly APIs for the 21st Century Researcher*

Before a student can automate their research pipeline, they must understand the datasets powering modern science. The era of manually searching publisher websites is over. Today, global, interconnected APIs provide programmatic access to hundreds of millions of research outputs.

This document serves as the introductory material for **Module 1**, giving students the critical context on what these datasets are, what they offer, and how they operate in 2026.

---

## 1. OpenAlex
*The massive, fully open catalog of the global research system.*

OpenAlex has positioned itself as the open-source alternative to proprietary databases like Scopus and Web of Science. It indexes over 250 million works.

**What it offers students:**
*   **Massive Scope:** Connects works (papers), authors, sources (journals), institutions, and topics.
*   **Semantic Search (New in 2026):** Allows students to search by *concept* or meaning up to 8kb of text, rather than relying strictly on exact keywords.
*   **Direct PDF Links:** It aggressively indexes Open Access full-text links, allowing scripts to download PDFs directly.

> [!WARNING]
> **Important 2026 Update for Teaching:**
> OpenAlex introduced mandatory API keys and usage-based pricing in early 2026. However, they offer a generous free tier (100,000 credits/day), which is more than enough for a PhD student's literature review. Students must be taught how to register and securely store their API keys in `.env` files.

---

## 2. Semantic Scholar (S2) API
*The AI-powered academic graph.*

Maintained by the Allen Institute for AI (AI2), Semantic Scholar focuses heavily on natural language processing and understanding the *context* of citations.

**What it offers students:**
*   **Citation Intent:** S2 doesn't just count citations; it classifies them (e.g., did paper A cite paper B as background, or did it use paper B's methodology?). This is crucial for students mapping influence.
*   **AI Recommendations:** You can pass a list of "seed" papers to the API, and it will return AI-generated recommendations for similar literature.
*   **Clean JSON Data:** Very developer-friendly, returning detailed metadata including abstracts, fields of study, and author graphs.

> [!TIP]
> **Integration for the Course:**
> S2 is perfect for teaching "Knowledge Graph Visualization" (Module 4). Students can use the Python `semanticscholar` library to pull a paper's citations and graph them in Python to see which papers are most influential.

---

## 3. Crossref REST API
*The backbone of scholarly publishing metadata.*

Crossref is the official DOI (Digital Object Identifier) registration agency. When a publisher releases a paper, they register it with Crossref.

**What it offers students:**
*   **The Source of Truth:** This is the most accurate, foundational metadata available. It is where you find exact publication dates, author ORCID iDs, and funding grant numbers.
*   **ROR IDs (Research Organization Registry):** Allows students to track affiliations precisely (e.g., linking all research coming out of a specific university).
*   **Post-Publication Data:** Tracks retractions and corrections, which is vital for students to ensure they aren't citing debunked research.

> [!NOTE]
> **Best Practice for Students:**
> The Crossref API is entirely free and doesn't require a key, but students must be taught "Polite Usage." They should learn how to pass their email in the `User-Agent` header of their Python requests to access the faster "Polite Pool" of servers.

---

## 4. arXiv API
*The pioneer of preprints and early-stage research.*

arXiv remains the undisputed king of physics, mathematics, and computer science preprints. 

**What it offers students:**
*   **Bleeding Edge Data:** Access to papers months or years before peer-reviewed publication.
*   **Open Access by Default:** Every entry has a freely available PDF and LaTeX source.

> [!IMPORTANT]
> **2026 Ecosystem Context:**
> arXiv spun out of Cornell University into an independent nonprofit in July 2026. While the core API hasn't changed (it still returns older XML/Atom formats rather than modern JSON), rate limiting has become stricter. Students should be taught to use the official Python `arxiv` wrapper, which handles rate limiting gracefully and parses the XML into easy-to-use Python objects.

---

## How to Integrate this into the Course

These four datasets represent the "Four Pillars" of modern automated research. 

1.  **Start with Crossref** to teach them what a DOI is and how metadata is officially registered.
2.  **Move to arXiv** to teach them about preprints and how to parse XML data using Python wrappers.
3.  **Introduce OpenAlex** for massive, SQL-like queries to find broad literature gaps.
4.  **Finish with Semantic Scholar** to introduce AI, embeddings, and citation classification.

By the end of this introductory chapter, students will realize they no longer need to manually type queries into Scopus; they can ask Python to query the entire global research graph for them.
