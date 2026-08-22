---
title: Scholar Bib Kit
---

# Scholar Bib Kit: Tutorial

This tutorial shows you how to use `scholar-bib-kit` to automatically repair and standardize messy BibTeX files.

## Command Line Interface

The simplest way to use the kit is via the CLI. It reads a `.bib` file, matches entries against Crossref, and outputs a cleaned `.bib` file.

```bash
scholar-bib fix messy.bib --output fixed.bib
```

### Options

- `--output`, `-o`: Where to save the fixed file. Defaults to `input_file_fixed.bib`.
- `--no-fuzzy`: Disable fuzzy matching (searching by title/author) if a DOI is missing. Speeds up the process if you only want to verify existing DOIs.
- `--overwrite`: Overwrite existing fields with authoritative data from Crossref. By default, it only fills in missing fields.

```bash
scholar-bib fix messy.bib --no-fuzzy --overwrite
```

## Python API

You can also use the kit programmatically:

```python
from pathlib import Path
from scholar_bib.parser import BibParser
from scholar_bib.repair import RepairEngine

parser = BibParser(Path("messy.bib"))
entries = parser.read()

engine = RepairEngine()
for entry in entries:
    engine.repair_entry(entry, fuzzy=True)

parser.write(Path("fixed.bib"))
```


---

# Scholar Bib Kit: API Reference

This document provides the API contracts for the core components of `scholar-bib-kit`.

## `BibParser`
Handles reading and writing BibTeX files safely.

```python
from scholar_bib.parser import BibParser
from pathlib import Path

parser = BibParser(Path("my_library.bib"))
entries = parser.read()
# ... modify entries ...
parser.write(Path("my_library_fixed.bib"))
```

## `CrossrefValidator`
Fetches authoritative metadata from Crossref with rate limiting and timeout handling.

```python
from scholar_bib.validator import CrossrefValidator

validator = CrossrefValidator()

# Get by DOI
data = validator.get_by_doi("10.1234/example")

# Fuzzy match by title and author
data = validator.fuzzy_match("The Title of Paper", "Doe, John")
```

## `RepairEngine`
Merges messy BibTeX entries with authoritative Crossref data.

```python
from scholar_bib.repair import RepairEngine

engine = RepairEngine()

entry = {
    "ID": "doe2023",
    "ENTRYTYPE": "article",
    "title": "Messy Title",
    "author": "John Doe",
    "doi": "10.1234/example"
}

# Repair the entry in-place
success = engine.repair_entry(entry, fuzzy=True, overwrite=False)
```

## Models
Strictly validated data structures.

- `BibEntry`: Validates the structure of a BibTeX entry.
- `RepairStats`: Used to track repair metrics.

