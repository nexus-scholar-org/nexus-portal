# Walkthrough: Modernizing the PhD Research Curriculum

## What Was Accomplished
We successfully transformed an outdated, 2015-era PhD research course into a cutting-edge curriculum centered around Python automation, Open Data, and the **Nexus Scholar Suite**.

### 1. Legacy Course Critique
*   We reviewed the original `TIC_Recherche_Documentaire.md` course.
*   **Findings:** While the academic foundation (Boolean logic, Open Access principles) was sound, the tools taught (RSS feeds, Web Directories, manual keyword hunting) were obsolete for the LLM era.

### 2. The New Curriculum Design
We designed a comprehensive, from-scratch curriculum that takes absolute beginners to advanced computational researchers:
*   **Module 0 & 1:** The unwritten rules of academia (IMRAD, peer review, Zotero, Zettelkasten).
*   **Module 2 & 3:** The Open Academic Ecosystem (APIs) and how to run Systematic Literature Reviews using the `scholar-search-kit`.
*   **Module 4 & 5:** Scientometrics, DIY RAG systems (Local LLMs), and presenting research ethically.

### 3. The Nexus Scholar Software Ecosystem
To support the curriculum, we architected a 6-part suite of open-source Python tools. These tools are built with an **"Agent-First"** architecture, meaning they can be used manually by students via Python, or autonomously by LLM Agents as Skills:
1.  `scholar-search-kit`: Multi-API ingestion and deduplication.
2.  `scholar-pdf-kit`: Unpaywall API discovery and automatic PDF extraction.
3.  `scholar-graph-kit`: Citation network mapping using PyVis.
4.  `scholar-rag-kit`: Local AI semantic extraction over downloaded PDFs.
5.  `scholar-bib-kit`: Automated `.bib` file repair and linting via Crossref.
6.  `scholar-monitor-kit`: Automated cron-based literature alerts.

## Recent Progress

### Phase 2: Building `scholar-search-kit` Core Architecture
We have successfully refactored the `scholar-search-kit` from a local-file parser into a robust, multi-API ecosystem. The new architecture includes:
*   **6 Dataset Providers:** `OpenAlexProvider`, `SemanticScholarProvider` (now utilizing the `/bulk` endpoint for large-scale retrieval), `CrossrefProvider`, `ArxivProvider`, `PubMedProvider`, and `BiorxivProvider`.
*   **Snowballing Engine:** API-level support for traversing citation graphs (forward/backward) via OpenAlex, S2, and PubMed.
*   **Query Translation Module:** A central `query_translator.py` that parses complex Boolean queries (e.g. `machine AND (clinical OR medical)`) and field specifiers (e.g., `title:term`) and safely translates them into the precise syntax expected by each unique API provider.
*   **Resilient HTTP Client:** A custom wrapper utilizing `requests-cache` (SQLite-backed) to automatically cache responses (saving API limits) and a TokenBucket rate limiter to ensure polite crawling.
*   **Testing Suite with VCRpy:** Automated test suites integrated with `vcrpy` to capture real API responses into YAML cassettes, allowing deterministic, offline, and rate-limit-free unit testing for all providers.
*   **Provider Blueprint:** Created a definitive guide mapping the capabilities and unique metadata of each API for student reference.

### Phase 3: `scholar-pdf-kit` (Open Access Discovery & Downloader)
Following the Unix philosophy, we built a standalone package called `scholar-pdf-kit` that integrates seamlessly with our search kit. Features include:
*   **Unpaywall Integration:** An asynchronous client (`unpaywall.py`) that queries the Unpaywall API to resolve DOIs into direct Open Access PDF links.
*   **Pydantic Models:** Configured models (`models.py`) to safely deserialize Unpaywall's complex API structure while gracefully ignoring unpredictable extra fields.
*   **Async Download Engine:** A high-performance PDF downloader (`downloader.py`) utilizing `aiohttp` and `asyncio.Semaphore` to fetch PDFs concurrently while respecting connection limits.
*   **Magic Byte Validation:** To prevent saving paywall HTML login pages masquerading as PDFs, `validator.py` inspects the first 5 bytes of every download to guarantee it matches the `%PDF-` signature.
*   **Rich Typer CLI:** A polished command-line interface (`cli.py`) that displays beautiful, interactive progress bars and summary tables of download success, failure, or paywalled statuses.

### Phase 4: `scholar-graph-kit` (Scientometrics and Knowledge Graphs)
We implemented a powerful citation network builder that strictly adheres to the DRY principle by reusing the robust HTTP clients from `scholar-search-kit`. Features include:
*   **Configurable Expansion Strategy:** The `GraphBuilder` can expand networks `--direction backward` (finding foundational references), `--direction forward` (finding future trends through citations), or `both`.
*   **Network Mathematics:** `analyzer.py` utilizes `NetworkX`, `Scipy`, and `Numpy` to calculate sophisticated scientometric scores like global **PageRank** and local In-Degree Centrality.
*   **Interactive Visualizations:** `visualizer.py` utilizes `PyVis` to export standalone, drag-and-drop HTML network maps where nodes scale dynamically based on their PageRank influence and are color-coded by publication year.
*   **Modular Architecture:** By depending on `scholar-search-kit`, this module automatically inherits intelligent rate limiting, sqlite caching, and 429 Retry logic without writing a single line of redundant networking code.

### Phase 5: `scholar-bib-kit` (BibTeX Auto-Repair)
We built an automated "linter" for messy `.bib` files using `bibtexparser` and the Crossref API.
*   **Lossless Parsing:** The `parser.py` safely reads and writes BibTeX libraries without destroying LaTeX syntax or custom comments.
*   **Fuzzy Search Fallback:** The `validator.py` allows a two-tier check. If an entry has a DOI, it fetches the exact metadata. If a DOI is missing, the `--fuzzy-match` CLI flag triggers a bibliographic query against Crossref using the raw Title and Authors to magically find the DOI!
*   **Configurable Data Merging:** The `repair.py` engine standardizes Author formats ("Last, First and Last, First") and safely merges missing fields (Volume, Pages, Year, Publisher). We also added an `--overwrite` flag for users who want to aggressively standardize their entire library against Crossref.

### Phase 6: `scholar-monitor-kit` (Automated Literature Monitoring)
We built an automated "Veille Documentaire" tool designed to replace RSS feeds for students, allowing them to track specific research topics effortlessly.
*   **Persistent State Management:** The `state.py` creates a lightweight `.scholar_monitor.json` file in the user's directory. This remembers the exact date the monitor last checked for papers, ensuring students never receive duplicate alerts.
*   **Automated OpenAlex Queries:** The `monitor.py` automatically injects `from_publication_date` filters into queries against OpenAlex. Because we reused `scholar-search-kit`, all these queries are fully rate-limited and robust.
*   **Dual Reporting Engine:** The `reporter.py` takes the fetched papers and generates two outputs: a beautifully formatted Markdown report (with title, authors, journal, link, and a truncated abstract snippet) for easy reading, and a `.csv` file for importing into Excel or Notion.
*   **Cron-Ready CLI:** The Typer app allows users to easily add queries (`scholar-monitor add "deep learning"`) and execute them (`scholar-monitor run`), which is perfect for hooking up to a daily background job or a simple task scheduler!

### Phase 7: `scholar-rag-kit` (DIY LLM Research Assistant)
We built a completely local, privacy-preserving "Chat with your Data" pipeline for PDFs! This module brings everything together.
*   **Agnostic LLMs (`litellm`):** By leveraging the `litellm` library, this kit doesn't force the student to use a specific model. They can plug in an OpenAI key, Anthropic, Gemini, or point it to a completely free local server (like LM Studio or GPT4All) using the `--model` flag.
*   **Local Embeddings (`chromadb`):** The vector database uses ChromaDB and automatically downloads a tiny `SentenceTransformer` model (`all-MiniLM-L6-v2`) to turn paragraphs into numbers locally on their CPU, keeping their research 100% private. (Cloud embeddings via OpenAI are also supported with a flag).
*   **PDF Ingestion (`ingestor.py`):** The kit uses `PyMuPDF` to parse entire directories of academic papers and uses an overlapping chunking algorithm to ensure no context is lost between paragraphs.

### 4. Curriculum Tracks
The master outline was split into three distinct tracks to cater to all skill levels:
*   **Part 1 (The Main Curriculum):** Teaches students how to *use* the 6 tools via Python or CLI.
*   **Part 2 (The Agentic Curriculum):** Teaches students how to plug these tools into LLMs (like Antigravity) to automate their workflows.
*   **Part 3 (The Bonus Curriculum):** Teaches advanced students how to *build* the tools from scratch.
