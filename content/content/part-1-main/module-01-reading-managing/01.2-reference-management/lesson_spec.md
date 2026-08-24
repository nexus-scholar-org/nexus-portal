# Lesson Specification: Module 1.2

## Metadata
| Field | Value |
|:---|:---|
| **Module** | Module 1.2 |
| **Title** | Reference Management & BibTeX |
| **Part** | Part 1: Main Curriculum |
| **Estimated Duration** | 35 minutes |
| **Nexus Tool(s)** | None |
| **Prerequisites** | None |

---

## Learning Objectives
By the end of this lesson, students will be able to:
1. **Explain** the function of a reference manager in the academic workflow.
2. **Compare** standard reference managers (Zotero, Mendeley, EndNote).
3. **Deconstruct** the structure of a `.bib` (BibTeX) file.
4. **Implement** a workflow for capturing and citing metadata automatically.

---

## Key Concepts

### Concept 1: The End of Manual Citations
- Typing citations manually (e.g., "(Smith et al., 2020)") is a catastrophic waste of time. If a journal rejects your paper and you submit elsewhere, you have to reformat 100 citations by hand.
- **The Solution:** A Reference Manager acts as a database. It stores the metadata once, and generates the bibliography automatically in whatever style is required.

### Concept 2: The Core Managers
- **Zotero:** Open-source, free, highly customizable, best browser extension. (Highly Recommended).
- **Mendeley:** Owned by Elsevier. Good PDF reader, but closed ecosystem.
- **EndNote:** Expensive, legacy standard, often paid for by the university. Clunky UI.

### Concept 3: Understanding BibTeX
- BibTeX is the standard text-based format for storing bibliographic data, used natively by LaTeX and widely supported by other systems (including Nexus Scholar).
- **Structure:** `@article{CitationKey, author = {Smith, J.}, title = {The paper}, year = {2020}}`
- **The Citation Key:** This is how you tell your document which paper you mean. (e.g., `\cite{Smith2020}`). It must be unique.

### Concept 4: The Ingestion Workflow
- Never type metadata. Use browser extensions (e.g., Zotero Connector) to grab the citation and the PDF in one click from the publisher's website.

---

## Suggested Hooks & Motivation
- **Pain Point:** You finish writing a 30-page paper. Now you have to spend 6 hours making sure every comma and italic in your bibliography matches the APA 7th edition manual perfectly.
- **Wow Moment:** Showing how a reference manager can switch an entire 100-citation bibliography from APA to IEEE format in 0.5 seconds.

---

## Sources & Further Reading
1. Zotero Documentation.
2. The LaTeX Project: BibTeX Guide.
