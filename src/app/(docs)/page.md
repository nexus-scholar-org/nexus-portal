---
title: Welcome to Nexus Suite
---

The open-source ecosystem for accelerating academic literature reviews, citation analysis, and PDF workflows. {% .lead %}

{% quick-links %}

{% quick-link title="Search Kit" icon="installation" href="/docs/scholar-search-kit" description="Federated search across OpenAlex, SemanticScholar, Crossref, PubMed, and arXiv." /%}

{% quick-link title="Bib Kit" icon="presets" href="/docs/scholar-bib-kit" description="Automated cleaning and repairing of messy BibTeX files using Crossref APIs." /%}

{% quick-link title="Graph Kit" icon="plugins" href="/docs/scholar-graph-kit" description="Citation snowballing and interactive network visualizations." /%}

{% quick-link title="PDF & RAG Kits" icon="theming" href="/docs/scholar-pdf-kit" description="Automated Open Access PDF retrieval and local RAG QA pipelines." /%}

{% /quick-links %}

---

## Unified Subpath Architecture

The Nexus Suite uses a unified portal architecture, meaning each kit is entirely modular, standalone, and documented right here under this domain. 

Whether you are a developer looking for Python APIs or a researcher using the CLIs, you will find both tutorials and API references inside each toolkit's section.

{% callout type="note" title="Production Ready" %}
Toolkits 1 through 5 (Search, Bib, Monitor, Graph, PDF) have undergone rigorous hardening and test validation. They feature concurrent rate-limiting, SQLite caching, and zero-dependency mock testing.
{% /callout %}

{% callout type="warning" title="RAG Kit Notice" %}
The `scholar-rag-kit` is currently a prototype. It relies on heavy local machine learning dependencies (`sentence-transformers`, `chromadb`) and has not yet been decoupled. Use with caution in production.
{% /callout %}
