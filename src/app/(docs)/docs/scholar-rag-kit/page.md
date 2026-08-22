---
title: Scholar RAG Kit
---

# Scholar RAG Kit: Tutorial

> [!WARNING]  
> **Status: Needs Hardening**  
> This toolkit is an unhardened prototype. It relies on massive local machine learning libraries (`sentence-transformers`, `chromadb`) that may consume significant memory and CPU. The dependency tree is heavy and has not been audited for conflicts.

This tutorial demonstrates how to perform Retrieval-Augmented Generation (RAG) over the PDFs downloaded by `scholar-pdf-kit`.

## Command Line Interface

### 1. Ingest PDFs
Point the kit at a directory containing PDFs. It will extract the text, chunk it, embed it using a local SentenceTransformer model, and store it in a local ChromaDB instance.

```bash
scholar-rag ingest --pdf-dir ../scholar-pdf-kit/downloads
```

### 2. Chat with the Literature
Start an interactive chat loop with your ingested literature. You can configure which LLM backend `litellm` routes to via environment variables (e.g. `OPENAI_API_KEY`).

```bash
scholar-rag chat --model gpt-4o
```
*Example Interaction:*
> **User**: How did the authors handle sample contamination in the CRISPR paper?  
> **Bot**: Based on the retrieved context (10.1234_crispr.pdf), the authors used a double-blinded wash process...

## Python API

You can script custom QA pipelines:

```python
from scholar_rag.vectorstore import VectorStore
from scholar_rag.engine import RAGEngine
from scholar_rag.processor import DocumentProcessor

# 1. Ingest
chunks = DocumentProcessor().extract_chunks("paper.pdf")
store = VectorStore(persist_directory="./db")
store.add_documents(chunks)

# 2. Query
engine = RAGEngine(vector_store=store, model="gpt-4o-mini")
print(engine.chat("What are the limitations of this study?"))
```


---

# Scholar RAG Kit: API Reference

> [!WARNING]  
> **Status: Needs Hardening**  
> This toolkit is currently in a prototype phase and relies on heavy local dependencies (`chromadb`, `sentence-transformers`, `pymupdf`, `litellm`). Its architecture has not yet been decoupled or audited for edge cases. Use with caution in production environments.

This document provides the intended API contracts for `scholar-rag-kit`.

## `DocumentProcessor`
Extracts and chunks text from academic PDFs using `pymupdf`.

```python
from scholar_rag.processor import DocumentProcessor

processor = DocumentProcessor(chunk_size=500, chunk_overlap=50)
# Process a local PDF downloaded via scholar-pdf-kit
chunks = processor.extract_chunks("downloads/10.1234_test.pdf")
```

## `VectorStore`
Manages the local `chromadb` instance and creates embeddings using `sentence-transformers`.

```python
from scholar_rag.vectorstore import VectorStore

store = VectorStore(persist_directory="./chroma_db")
store.add_documents(chunks)

# Retrieve top-k relevant chunks
relevant_chunks = store.similarity_search(query="What is the methodology?", k=3)
```

## `RAGEngine`
Orchestrates the retrieval and generation using `litellm` (which supports OpenAI, Anthropic, Gemini, local models, etc.).

```python
from scholar_rag.engine import RAGEngine

engine = RAGEngine(vector_store=store, model="gpt-4o")
answer = engine.chat("Summarize the findings on CRISPR.")
print(answer)
```

