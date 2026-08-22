---
title: Scholar Monitor Kit
---

# Scholar Monitor Kit: Tutorial

This tutorial demonstrates how to set up an automated literature monitoring system (veille documentaire) using `scholar-monitor-kit`.

## Command Line Interface

### 1. Add a Monitor
Add a new topic you want to track. The system will start by looking back 30 days.

```bash
scholar-monitor add "machine learning AND healthcare" --alias "ML Health"
```

### 2. List Active Monitors
Check the status of your queries and their `last_run` dates:

```bash
scholar-monitor list
```

### 3. Run Monitors and Generate Reports
Execute the active queries against OpenAlex. It will fetch all papers published since `last_run`, generate a Markdown brief and CSV export, and update the `last_run` timestamp to today.

```bash
scholar-monitor run --output ./reports --format both
```

## Python API

You can script your own monitoring loops:

```python
from scholar_monitor.state import MonitorState
from scholar_monitor.monitor import LiteratureMonitor
from scholar_monitor.reporter import ReportGenerator

state = MonitorState()
monitor = LiteratureMonitor()
reporter = ReportGenerator()

for q in state.get_queries():
    print(f"Checking {q.alias} since {q.last_run}...")
    papers = monitor.fetch_new_papers(q.query, q.last_run)
    
    if papers:
        reporter.generate_markdown(q.alias, papers)
        state.update_last_run(q.query)
```


---

# Scholar Monitor Kit: API Reference

This document provides the API contracts for the core components of `scholar-monitor-kit`.

## `LiteratureMonitor`
Fetches new papers from OpenAlex matching a query and published after a certain date.

```python
from scholar_monitor.monitor import LiteratureMonitor

monitor = LiteratureMonitor()
papers = monitor.fetch_new_papers(
    query="machine learning AND healthcare", 
    from_date="2023-01-01"
)
```

## `MonitorState`
Manages the JSON state file (`.scholar_monitor.json`) containing active queries and their last run dates.

```python
from scholar_monitor.state import MonitorState

state = MonitorState()

# Add a query (defaults to 30 days ago)
state.add_query("CRISPR cas9", alias="CRISPR")

# Update last_run to today
state.update_last_run("CRISPR cas9")

# Get all active queries
queries = state.get_queries()
```

## `ReportGenerator`
Exports strongly-typed `Paper` objects to human-readable Markdown or CSV formats.

```python
from scholar_monitor.reporter import ReportGenerator
from pathlib import Path

reporter = ReportGenerator(output_dir=Path("./reports"))

# Generate files
reporter.generate_markdown("CRISPR", papers)
reporter.generate_csv("CRISPR", papers)
```

## Models (Pydantic v2)
- `Paper`: Strongly typed representation of a literature search result.
- `MonitorQuery`: Represents a specific query string, alias, and the `last_run` date string.
- `MonitorStateModel`: Represents the full JSON schema of the state tracking file.

