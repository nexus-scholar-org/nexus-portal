# Nexus Scholar Ecosystem Plan

The goal is to design an ecosystem of open-source Python libraries that aligns with the PhD course. 

## The "Agent-First" Architectural Constraint
Per your requirement, every tool in this suite must be built with a dual-purpose architecture:
1. **Manual Use:** A clean Python API for students to write their own scripts.
2. **LLM/Agent Use:** A CLI layer (e.g., using `Typer`) that outputs structured JSON, and an accompanying `mcp_config.json` or `SKILL.md` so that AI agents (like Antigravity harnesses) can use the tool autonomously. The tools must be highly modular so agents can chain them together.

---

## Proposed Software Modules (The "Scholar Suite")

To cover the entire research pipeline from a computational and agentic perspective, I propose **six** distinct tools:

### 1. `scholar-search-kit` (Already Built)
*   **Purpose:** Metadata retrieval, multi-API ingestion, and deduplication.
*   **Used In:** Course Module 3 (Mastering Literature Search).
*   **Agentic Use:** An LLM can use this skill to run a systematic search across OpenAlex and Semantic Scholar, returning a deduplicated JSON list of papers.

### 2. `scholar-pdf-kit` (To Be Built)
*   **Purpose:** Automated Open Access Discovery and PDF extraction.
*   **Used In:** Course Module 2 (Open Access Automation).
*   **Agentic Use:** An LLM receives a DOI, calls this tool to download the PDF via Unpaywall, and extracts the raw text for further processing.

### 3. `scholar-graph-kit` (To Be Built)
*   **Purpose:** Scientometrics and Citation Network Visualization.
*   **Used In:** Course Module 4 (Knowledge Graphs).
*   **Agentic Use:** An LLM uses this tool to map a research domain. The tool returns a list of the "most central/influential" DOIs in a field, guiding the LLM on which papers to read first.

### 4. `scholar-rag-kit` (To Be Built)
*   **Purpose:** Local AI and Retrieval-Augmented Generation.
*   **Used In:** Course Module 4 (DIY AI Research Assistant).
*   **Agentic Use:** A high-level orchestration tool. It takes PDFs from `scholar-pdf-kit`, embeds them in ChromaDB, and allows an LLM agent to semantically search across a student's entire local library.

### 5. `scholar-bib-kit` (New Proposal)
*   **Purpose:** Citation formatting and `.bib` file linting.
*   **Used In:** Course Module 1 (Knowledge Management).
*   **Capabilities:** Students often have broken BibTeX files. This tool takes a `.bib` file, checks the DOIs against Crossref, and automatically fixes missing page numbers, journal names, and authors.
*   **Agentic Use:** An LLM uses this tool to validate and format references before compiling a LaTeX manuscript.

### 6. `scholar-monitor-kit` (New Proposal)
*   **Purpose:** Automated Literature Monitoring ("Veille Documentaire").
*   **Used In:** Course Module 2 (Replacing RSS feeds).
*   **Capabilities:** A tool designed to be run on a cron job. It checks arXiv, OpenAlex, or bioRxiv for new papers matching a query, and generates a markdown summary report.
*   **Agentic Use:** An agent can run this tool in the background daily, summarizing new literature and sending an alert to the user.

---

## Curriculum Restructuring

If we adopt this 6-tool ecosystem, the course structure changes:
1.  **The Main Curriculum:** Teaches students the methodology, and how to use the tools manually via Python or CLI.
2.  **The Agent Curriculum:** Teaches students how to plug these tools into an LLM framework (like Antigravity or LangChain) so their personal AI can do the research for them.
3.  **The Bonus Curriculum ("Under the Hood"):** Tutorials showing how we built the kits themselves.

## User Review Required
> [!IMPORTANT]
> I have added `scholar-bib-kit` (for reference fixing) and `scholar-monitor-kit` (for automated alerts), and mandated the "Agent-First" architecture. Does this 6-part ecosystem cover everything, or should we refine the list before I update the master course outline?
