# Nexus Scholar Suite - Development Progress

The Modern Research Methodologies course relies on the **Nexus Scholar Suite** as its core technological foundation. We paused the curriculum development to build these tools from scratch. 

Below is the final development status of the entire suite.

## The Toolkits
All 6 core toolkits have been successfully developed, refactored into independent repositories, and rigorously hardened for production use.

1. **`scholar-search-kit`** (Module 3): **[COMPLETE]**
   - Standardized multi-source ingestion (OpenAlex, Semantic Scholar, Local RIS files).
   - Rate limiting, automated deduplication, and unified data contracts implemented.

2. **`scholar-bib-kit`** (Module 1): **[COMPLETE]**
   - Regex-based Pybtex parsing and automated BibTeX repair via Crossref fuzzy matching.
   - Fully hardened with comprehensive unit tests.

3. **`scholar-pdf-kit`** (Module 2): **[COMPLETE]**
   - PyMuPDF integration for parsing raw text and Unpaywall API integration for automated open-access PDF downloading.
   - Implemented asynchronous I/O and strict rate limits to prevent API bans.

4. **`scholar-monitor-kit`** (Module 2): **[COMPLETE]**
   - CLI interfaces built with Typer for cron-job-ready execution.
   - Generates rich Markdown reports for new papers alerting.

5. **`scholar-graph-kit`** (Module 4): **[COMPLETE]**
   - NetworkX integration for mapping citation graphs and calculating network centrality.
   - Dynamic HTML visualization generation via PyVis.

6. **`scholar-rag-kit`** (Module 4 & Bonus B.4): **[COMPLETE]**
   - Semantic chunking (respecting paragraph and sentence boundaries) replacing naive character splits.
   - Lightweight default installation using API-based embeddings via LiteLLM, with PyTorch/sentence-transformers moved to a `[local]` optional dependency.
   - ChromaDB integration, rich CLI spinners, and a zero-network deterministic test suite.

## The Portal & Documentation
**`nexus-portal`**: **[COMPLETE]**
- The Next.js 16+ portal has been successfully deployed to GitHub Pages (`nexus.mouadh.org`).
- All 6 toolkits are integrated as Git Submodules (`toolkits/`).
- An automated sync script dynamically pulls the `tutorial.md` and `api_reference.md` from each submodule during the build process, ensuring the portal documentation is always perfectly synchronized with the codebase.

## Agent Skills (Part 2 Curriculum)
**AI Agent Manifests**: **[COMPLETE]**
- `SKILL.md` manifests have been generated for the toolkits.
- The tools are now fully usable by autonomous agents (Model Context Protocol ready) for the Agentic Curriculum (Part 2).

## Next Steps for the Course
With the technological foundation 100% complete, we are now ready to resume writing the actual course materials, video scripts, and student assignments knowing that the underlying software works perfectly as described.

## Course Content Production
- **Sprint 1 (Infrastructure):** **[COMPLETE]**
- **Sprint 2 (Core Tool Lessons):** **[COMPLETE]**
  - Lesson 3.1 (Introduction to scholar-search-kit): **[COMPLETE]**
  - Lesson 2.1 (The Open Academic Ecosystem): **[COMPLETE]**
  - Lesson 1.2 (Automated BibTeX Repair): **[COMPLETE]**
  - Lesson 2.3 (Automated Open Access): **[COMPLETE]**
  - Lesson 2.4 (Automated Monitoring): **[COMPLETE]**
  - Lesson 3.2 (Multi-Source Ingestion & Dedup): **[COMPLETE]**
  - Lesson 4.1 (Scientometrics & Citation Networks): **[COMPLETE]**
  - Lesson 4.3 (Building a RAG System): **[COMPLETE]**
- **Sprint 3 (Academic Foundations):** In Progress
  - Lesson 0.1 (Anatomy of a Research Paper): **[COMPLETE]**
  - Lesson 0.2 (Research Methodologies): **[COMPLETE]**
  - Lesson 0.3 (The Publishing Ecosystem): **[COMPLETE]**
  - Lesson 0.4 (Predatory Publishing): **[COMPLETE]**
