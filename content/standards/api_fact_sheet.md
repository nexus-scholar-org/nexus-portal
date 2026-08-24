# API & Toolkit Fact Sheet — Nexus Scholar Course

> Verified reference document. All facts here are cross-referenced against the actual toolkit source code and API documentation as of August 2026. This is the ground truth that the Researcher and Critic skills consult.

**Last Verified:** 2026-08-22

---

## 1. Nexus Scholar Toolkit Registry

### 1.1 `scholar-search-kit` (slr-search-kit)
| Field | Value |
|:---|:---|
| **Package** | `scholar_search` |
| **CLI Entry Point** | `scholar-search` → `scholar_search.cli:main` |
| **Source** | `slr-search-kit/src/scholar_search/` |
| **Key Modules** | `models.py`, `cli.py`, `engine.py`, `dedup.py`, `export.py`, `importers.py`, `verifier.py`, `http_client.py`, `query_translator.py`, `config.py`, `exceptions.py`, `providers/` |
| **Key Classes** | `Document`, `Author`, `ExternalIds`, `Query`, `DocumentCluster`, `SearchEngine`, `Deduplicator`, `DocumentVerifier`, `Exporter`, `RISImporter`, `JSONImporter`, `JSONLImporter`, `AcademicHttpClient`, `RateLimiter` |
| **Providers** | `OpenAlexProvider`, `SemanticScholarProvider`, `CrossrefProvider`, `ArxivProvider`, `PubMedProvider`, `BiorxivProvider` |
| **CLI Commands** | `search`, `snowball`, `import`, `dedup`, `export` |
| **Dependencies** | `pydantic>=2.0.0`, `pydantic-settings>=2.0.0`, `requests>=2.31.0`, `requests-cache>=1.1.0`, `typer>=0.9.0` |
| **Python** | `>=3.11` |

### 1.2 `scholar-pdf-kit`
| Field | Value |
|:---|:---|
| **Package** | `scholar_pdf` |
| **CLI Entry Point** | `scholar-pdf` → `scholar_pdf.cli:app` |
| **Source** | `scholar-pdf-kit/src/scholar_pdf/` |
| **Key Modules** | `cli.py`, `downloader.py`, `models.py`, `validator.py`, `config.py` |
| **Key Features** | Unpaywall API integration, async PDF downloads (`aiohttp`), magic byte validation (`%PDF-`), Rich progress bars |
| **Dependencies** | `pydantic>=2.0.0`, `pydantic-settings>=2.0.0`, `aiohttp>=3.9.0`, `typer>=0.9.0`, `requests>=2.31.0`, `rich>=13.0.0` |

### 1.3 `scholar-graph-kit`
| Field | Value |
|:---|:---|
| **Package** | `scholar_graph` |
| **CLI Entry Point** | `scholar-graph` → `scholar_graph.cli:app` |
| **Source** | `scholar-graph-kit/src/scholar_graph/` |
| **Key Modules** | `cli.py`, `builder.py`, `analyzer.py`, `visualizer.py`, `models.py` |
| **Key Features** | Citation network construction, PageRank & in-degree centrality (`NetworkX`, `scipy`, `numpy`), interactive HTML visualization (`PyVis`), configurable direction (forward/backward/both) |
| **Dependencies** | `networkx>=3.0`, `scipy>=1.10.0`, `numpy>=1.24.0`, `pyvis>=0.3.2`, `pydantic>=2.0.0`, `typer>=0.9.0`, `rich>=13.0.0`, `httpx>=0.25.0` |

### 1.4 `scholar-bib-kit`
| Field | Value |
|:---|:---|
| **Package** | `scholar_bib` |
| **CLI Entry Point** | `scholar-bib` → `scholar_bib.cli:app` |
| **Source** | `scholar-bib-kit/src/scholar_bib/` |
| **Key Modules** | `cli.py`, `parser.py`, `validator.py`, `repair.py`, `models.py` |
| **Key Features** | BibTeX parsing (`bibtexparser`), Crossref DOI validation, fuzzy title matching, automated field repair (authors, volume, pages, year), `--overwrite` and `--fuzzy-match` flags |
| **Dependencies** | `bibtexparser>=1.4.0`, `pydantic>=2.0.0`, `typer>=0.9.0`, `rich>=13.0.0`, `httpx>=0.25.0` |

### 1.5 `scholar-rag-kit`
| Field | Value |
|:---|:---|
| **Package** | `scholar_rag` |
| **CLI Entry Point** | `scholar-rag` → `scholar_rag.cli:app` |
| **Source** | `scholar-rag-kit/src/scholar_rag/` |
| **Key Modules** | `cli.py`, `ingestor.py`, `vectorstore.py`, `rag.py`, `models.py` |
| **Key Features** | PDF ingestion via `PyMuPDF`, semantic chunking with overlap, local embeddings via ChromaDB (`all-MiniLM-L6-v2`), LLM-agnostic Q&A via `litellm` (supports OpenAI, Anthropic, Gemini, local via LM Studio), `[local]` optional extra for `sentence-transformers` |
| **Dependencies** | `typer>=0.9.0`, `rich>=13.0.0`, `pymupdf>=1.23.0`, `chromadb>=0.4.0`, `litellm>=1.0.0`, `pydantic>=2.0.0` |
| **Optional** | `sentence-transformers>=2.2.0` (install with `pip install scholar-rag-kit[local]`) |

### 1.6 `scholar-monitor-kit`
| Field | Value |
|:---|:---|
| **Package** | `scholar_monitor` |
| **CLI Entry Point** | `scholar-monitor` → `scholar_monitor.cli:app` |
| **Source** | `scholar-monitor-kit/src/scholar_monitor/` |
| **Key Modules** | `cli.py`, `monitor.py`, `reporter.py`, `state.py`, `models.py` |
| **Key Features** | Persistent state (`.scholar_monitor.json`), OpenAlex date-filtered queries, dual output (Markdown report + CSV), cron-ready CLI, `add`/`run` subcommands |
| **Dependencies** | `pydantic>=2.0.0`, `typer>=0.9.0`, `rich>=13.0.0`, `httpx>=0.25.0` |

---

## 2. External Academic APIs

### 2.1 OpenAlex
| Field | Value |
|:---|:---|
| **Base URL** | `https://api.openalex.org/` |
| **Auth** | API key required since early 2026. Free tier: 100,000 credits/day. Pass `api_key` parameter or set `OPENALEX_API_KEY` env var. |
| **Key Endpoints** | `/works`, `/authors`, `/sources`, `/institutions`, `/topics` |
| **Pagination** | Cursor-based (`cursor=*` for first page, `next_cursor` in response for subsequent) |
| **Rate Limit** | Usage-based credits system. Students should register at `https://openalex.org/` for a key. |
| **Polite Pool** | Pass `mailto=your@email.com` parameter for faster response times |
| **Semantic Search** | New in 2026: supports up to 8KB of text for semantic concept queries |
| **Response Format** | JSON |
| **Used By** | `scholar-search-kit` (OpenAlexProvider), `scholar-monitor-kit`, `scholar-graph-kit` |

### 2.2 Semantic Scholar (S2)
| Field | Value |
|:---|:---|
| **Base URL** | `https://api.semanticscholar.org/graph/v1/` |
| **Bulk Endpoint** | `https://api.semanticscholar.org/graph/v1/paper/search/bulk` |
| **Auth** | API key recommended but not required. Apply at `https://www.semanticscholar.org/product/api` |
| **Key Endpoints** | `/paper/search`, `/paper/search/bulk`, `/paper/{paper_id}`, `/paper/{paper_id}/citations`, `/paper/{paper_id}/references`, `/recommendations` |
| **Pagination** | Continuation tokens (bulk endpoint), offset-based (regular) |
| **Rate Limit** | 1 request/second without key, 10 requests/second with key |
| **Response Format** | JSON |
| **Unique Features** | Citation intents (background/methodology/result), AI-generated TLDR summaries, AI recommendations |
| **Used By** | `scholar-search-kit` (SemanticScholarProvider) |

### 2.3 Crossref
| Field | Value |
|:---|:---|
| **Base URL** | `https://api.crossref.org/` |
| **Auth** | None required. Completely free and open. |
| **Key Endpoints** | `/works`, `/works/{doi}`, `/works?query.bibliographic=...` |
| **Pagination** | Deep cursor-based (pass `cursor=*` for first page) |
| **Rate Limit** | No hard limit, but "Polite Pool" is much faster |
| **Polite Pool** | Pass `mailto:your@email.com` in the `User-Agent` header |
| **Response Format** | JSON |
| **Unique Features** | Official DOI registration agency. Source of truth for DOI metadata. Tracks retractions and corrections. |
| **Used By** | `scholar-search-kit` (CrossrefProvider), `scholar-bib-kit` (for DOI validation and fuzzy search) |

### 2.4 arXiv
| Field | Value |
|:---|:---|
| **Base URL** | `http://export.arxiv.org/api/query` |
| **Auth** | None required. Free and open. |
| **Key Parameters** | `search_query`, `start`, `max_results`, `sortBy`, `sortOrder` |
| **Pagination** | Offset-based (`start` + `max_results`). Hard cap at 10,000 offset. |
| **Rate Limit** | Strict. Maximum ~1 request per 3 seconds. Use the `arxiv` Python library which handles this. |
| **Response Format** | Atom XML (not JSON!) |
| **Python Wrapper** | `arxiv` package (`pip install arxiv`). Handles rate limiting and XML parsing. |
| **Status** | Became an independent nonprofit in July 2026 (spun out of Cornell). Core API unchanged. |
| **Used By** | `scholar-search-kit` (ArxivProvider) |

### 2.5 Unpaywall
| Field | Value |
|:---|:---|
| **Base URL** | `https://api.unpaywall.org/v2/` |
| **Auth** | Email-based. Pass `email=your@email.com` as a query parameter. No API key. |
| **Key Endpoint** | `/{doi}?email=your@email.com` |
| **Rate Limit** | 100,000 requests/day per email |
| **Response Format** | JSON |
| **Key Fields** | `best_oa_location.url_for_pdf`, `oa_status` (gold/green/hybrid/bronze/closed), `is_oa` |
| **Used By** | `scholar-pdf-kit` (UnpaywallClient) |

### 2.6 PubMed (NCBI E-utilities)
| Field | Value |
|:---|:---|
| **Base URL** | `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/` |
| **Auth** | API key optional but recommended. Register at NCBI. Without key: 3 req/s, with key: 10 req/s. |
| **Key Endpoints** | `esearch.fcgi` (search), `efetch.fcgi` (fetch records) |
| **Response Format** | XML |
| **Used By** | `scholar-search-kit` (PubMedProvider) |

### 2.7 bioRxiv
| Field | Value |
|:---|:---|
| **Base URL** | `https://api.biorxiv.org/details/biorxiv/` |
| **Auth** | None required. |
| **Key Parameters** | Date range filtering: `/details/biorxiv/{start_date}/{end_date}` |
| **Rate Limit** | Reasonable use. No published hard limit. |
| **Response Format** | JSON |
| **Used By** | `scholar-search-kit` (BiorxivProvider) |

---

## 3. Supporting Tools & Libraries

| Tool | Purpose | Version |
|:---|:---|:---|
| `uv` | Python package manager (replaces pip) | Latest |
| `Typer` | CLI framework for all Nexus kits | `>=0.9.0` |
| `Rich` | Terminal output formatting (tables, spinners, progress bars) | `>=13.0.0` |
| `Pydantic` | Data validation and settings management | `>=2.0.0` |
| `NetworkX` | Graph analysis algorithms | `>=3.0` |
| `PyVis` | Interactive HTML network visualization | `>=0.3.2` |
| `ChromaDB` | Local vector database for RAG | `>=0.4.0` |
| `LiteLLM` | Universal LLM API wrapper | `>=1.0.0` |
| `PyMuPDF` | PDF text extraction | `>=1.23.0` |
| `bibtexparser` | BibTeX file parsing | `>=1.4.0` |
| `requests-cache` | HTTP response caching (SQLite-backed) | `>=1.1.0` |
| `Ollama` | Local LLM server (for RAG lessons) | Latest |
| `Zotero` | Reference manager (taught in Module 1.1) | Latest |
| `LaTeX` | Document typesetting (Beamer for slides) | TeX Live 2024+ |

---

## 4. Nexus Portal

| Field | Value |
|:---|:---|
| **Framework** | Next.js 16+ |
| **URL** | `nexus.mouadh.org` |
| **Hosting** | GitHub Pages |
| **Toolkit Integration** | Git Submodules in `toolkits/` directory |
| **Doc Sync** | Automated script pulls `tutorial.md` and `api_reference.md` from each submodule during build |
