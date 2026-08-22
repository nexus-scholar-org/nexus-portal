---
title: Scholar Search Kit
---

# Scholar Search Kit Tutorial

A complete walkthrough on how to search, snowball, verify, and export academic literature using `scholar-search-kit`.

## 1. Installation & Environment Setup

```bash
cd slr-search-kit
uv pip install -e .
```

---

## 2. Searching Across Academic Providers

The `scholar-search` command provides a unified interface across OpenAlex, Semantic Scholar, Crossref, PubMed, arXiv, and bioRxiv.

### Example A: Multi-Provider Federated Search
Query across all providers with automatic deduplication:
```bash
uv run scholar-search search "retrieval augmented generation" --limit 20 --output rag_papers.json
```

### Example B: Provider-Specific Search with Year Filters
```bash
uv run scholar-search search "crispr cas9" --provider pubmed --year-min 2022 --limit 15 --output crispr.json
```

---

## 3. Citation Snowballing

Snowballing expands your literature graph from a single seminal paper.

### Example A: Forward Snowballing (Find Citing Papers)
Find papers citing *Attention Is All You Need* (OpenAlex ID: `W2741809807`):
```bash
uv run scholar-search snowball W2741809807 --provider openalex --direction forward --limit 25 --output citing_attention.json
```

### Example B: Backward Snowballing (Find Referenced Papers)
Find the foundational bibliography cited by a paper:
```bash
uv run scholar-search snowball W2741809807 --provider openalex --direction backward --output references_attention.json
```

---

## 4. Ingesting, Verifying, & Hydrating Citations

When working with reference manager exports (`.ris`) or LLM-generated citation lists, verify their authenticity and hydrate missing abstracts.

```bash
# Ingest an RIS export from Zotero, verify against Crossref, and hydrate abstracts from OpenAlex
uv run scholar-search import my_zotero_library.ris --verify --enrich --output verified_library.json
```

**What `--verify` and `--enrich` do:**
1. Cross-references titles and DOIs against Crossref's 150M+ document index.
2. Flags unverified / hallucinated citations with clear warnings.
3. Automatically fetches missing abstracts, publication venues, and citation metrics from OpenAlex.

---

## 5. Deduplicating Existing Collections

Merge duplicate records collected across different search engines while preserving the richest metadata:
```bash
uv run scholar-search dedup raw_scraped_papers.json --output deduped_collection.json
```


---

# API Reference

Technical documentation for developers integrating `scholar-search-kit` into custom Python pipelines and AI agent systems.

---

## `SearchEngine`

```python
from scholar_search import SearchEngine, Query
```

Orchestrates federated queries across multiple academic providers and handles deduplication and snowballing.

### `__init__(providers: Optional[List[SearchProvider]] = None)`
Initializes the engine. If `providers` is `None`, loads the default suite (`OpenAlex`, `SemanticScholar`, `Crossref`, `Arxiv`, `PubMed`, `Biorxiv`).

### `search_all(query: Query, dedup: bool = True) -> List[Document]`
Executes the query across all active providers concurrently/sequentially and returns a deduplicated list of `Document` models.

### `snowball_forward(document_id: str, provider_name: str) -> List[Document]`
Finds papers citing the specified document ID on the target provider.

### `snowball_backward(document_id: str, provider_name: str) -> List[Document]`
Finds references cited by the specified document ID on the target provider.

---

## `DocumentVerifier`

```python
from scholar_search import DocumentVerifier
```

Verifies the authenticity of citations to prevent LLM hallucinations and hydates missing metadata.

### `verify_document(doc: Document) -> Tuple[bool, Document, str]`
Checks if a document exists in Crossref/OpenAlex via DOI or bibliographic matching.

### `hydrate_metadata(doc: Document) -> Document`
Fills in missing abstracts, venues, authors, and citation counts using OpenAlex.

### `process_batch(documents: List[Document], verify: bool = True, enrich: bool = True) -> Tuple[List[Document], List[Dict]]`
Runs batch verification and hydration, returning processed documents alongside an audit report.

---

## `Deduplicator`

```python
from scholar_search import Deduplicator
```

Deterministic clustering and metadata merging.

### `deduplicate(documents: List[Document]) -> List[DocumentCluster]`
Clusters documents by DOI, arXiv ID, PubMed ID, OpenAlex ID, S2 ID, and conservative fuzzy title matching ($\ge 97\%$). Merges metadata into each cluster's representative.

### `get_statistics(clusters: List[DocumentCluster]) -> Dict[str, Union[int, float]]`
Calculates total documents, unique documents, duplicate count, and duplicate rate.

---

## `AcademicHttpClient`

```python
from scholar_search import AcademicHttpClient
```

Thread-safe, rate-limited HTTP client with SQLite response caching and exponential backoff retries.

### `get(url: str, params: Optional[Dict] = None, timeout: float = 30.0, **kwargs) -> requests.Response`
Executes a rate-limited, polite HTTP request.

