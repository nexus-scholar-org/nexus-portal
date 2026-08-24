# Modern Research Methodologies
*From Absolute Beginner to Automated Researcher in the 21st Century*

This course is designed for brand new PhD students. It takes them from understanding the absolute basics of academic publishing all the way to automating their research pipelines using the **Nexus Scholar Suite**—a powerful ecosystem of 6 open-source Python tools.

---

## PART 1: The Main Curriculum (Learning to Automate)

### Module 0: Ground Zero — Welcome to Academia
*Before touching any tools, students must understand the rules of the game.*
*   **0.1 The Anatomy of a Research Paper:** How to read efficiently (the "Three-Pass" method) and understanding IMRAD.
*   **0.2 Research Methodologies:** Qualitative vs. Quantitative research, and when to use Mixed Methods.
*   **0.3 The Publishing Ecosystem:** Peer review, Journals vs. Conferences vs. Preprints, and flawed metrics (Impact Factor).
*   **0.4 Predatory Publishing:** How to spot scam journals that accept fake papers for money.

### Module 1: Knowledge Management & Citation Formatting
*Building a strong foundation for managing literature.*
*   **1.1 Reference Management 101:** Introduction to Zotero and citation styles (APA, IEEE).
*   **1.2 Automated BibTeX Repair (`scholar-bib-kit`):** Using the first Nexus tool. How to write a Python script that takes a messy `.bib` file, checks Crossref, and automatically fixes broken citations and missing authors.
*   **1.3 Academic Writing:** Structuring arguments and using LaTeX. Note-taking with the Zettelkasten method.

### Module 2: Open Data & Automated Discovery
*Moving away from manual web interfaces to automated data extraction.*
*   **2.1 The Open Academic Ecosystem:** Introduction to the OpenAlex, Crossref, Semantic Scholar, and arXiv APIs.
*   **2.2 Python for Researchers:** Crash course in Python basics for absolute beginners.
*   **2.3 Automated Open Access (`scholar-pdf-kit`):** Scripting your way around paywalls using the Unpaywall API. Downloading PDFs automatically.
*   **2.4 Automated Monitoring (`scholar-monitor-kit`):** Replacing RSS feeds. Setting up cron jobs to monitor arXiv/OpenAlex for new papers and generate summarized markdown alerts.

### Module 3: Mastering Systematic Literature Reviews (SLR)
*Building a reproducible, automated literature pipeline.*
*   **3.1 Introduction to the `scholar-search-kit`:** How the kit standardizes data from different APIs.
*   **3.2 Multi-Source Ingestion & Deduplication:** Running automated searches across OpenAlex and Semantic Scholar, and merging fuzzy titles and DOIs.
*   **3.3 The Local File Provider:** Ingesting manual exports (`.ris` from Scopus/WoS) into your pipeline.

### Module 4: DIY AI, Knowledge Graphs, and Scientometrics
*How to build your own AI research assistant and map out scientific fields.*
*   **4.1 Scientometrics & Bibliometrics (`scholar-graph-kit`):** Using Python and OpenAlex to map citation graphs. Finding the most central, influential papers in a niche and visualizing them in HTML.
*   **4.2 Introduction to Local LLMs:** Running models on your own machine for free using *Ollama*.
*   **4.3 Building a Simple RAG System (`scholar-rag-kit`):** How to query your own folder of downloaded PDFs to extract methodologies automatically and securely.

### Module 5: Sharing Research, Ethics, and Publishing
*Presenting your work to the world while maintaining academic integrity.*
*   **5.1 Presentation Skills & Conferences:** Slide decks (LaTeX Beamer) and networking strategies.
*   **5.2 Ethical AI Usage in Publishing:** The boundary between translation/proofreading versus plagiarism. Journal guidelines on declaring LLM usage.
*   **5.3 Version Control & Open Science Repositories:** Using Git/GitHub to track changes in your research scripts. Pushing your datasets to the Open Science Framework (OSF).

---

## PART 2: The Agentic Curriculum (Delegating to AI)

For students who want to go beyond manual scripts, this track teaches them how to turn the Nexus Scholar Suite into AI Skills.

*   **A.1 Introduction to AI Agents:** What is a Tool/Skill? How LLMs (like Claude or GPT-4) can execute code.
*   **A.2 The Model Context Protocol (MCP):** How to register `scholar-search-kit` and `scholar-pdf-kit` as skills.
*   **A.3 Autonomous Research:** Prompting an AI Agent to map a field, download the top 10 PDFs, and summarize their methodologies while you sleep.

---

## PART 3: The Bonus Curriculum (Under the Hood)

For advanced students (or computer science PhDs) who want to know how the sausage is made, these bonus video tutorials cover the actual software engineering behind the Nexus Scholar Suite.

*   **B.1 Building `scholar-search-kit`:** Protocols, DataClasses, and multi-API asynchronous ingestion.
*   **B.2 Building `scholar-pdf-kit`:** Handling rate limits and parsing raw text with PyMuPDF.
*   **B.3 Building `scholar-graph-kit`:** Calculating network centrality with NetworkX and generating dynamic PyVis maps.
*   **B.4 Building `scholar-rag-kit`:** Embedding text chunks, using ChromaDB, and interfacing with Ollama.
*   **B.5 Building `scholar-bib-kit`:** Regex, Pybtex parsing, and fuzzy matching DOIs against Crossref.
*   **B.6 Building `scholar-monitor-kit`:** Writing CLI interfaces with Typer and formatting rich Markdown reports.
