const fs = require('fs');
const path = require('path');

const toolkitsDir = path.join(__dirname, '../toolkits');
const docsDestDir = path.join(__dirname, '../src/app/(docs)/docs');

// Map kit directory names to their readable titles
const toolkits = {
  'scholar-search-kit': 'Scholar Search Kit',
  'scholar-bib-kit': 'Scholar Bib Kit',
  'scholar-monitor-kit': 'Scholar Monitor Kit',
  'scholar-graph-kit': 'Scholar Graph Kit',
  'scholar-pdf-kit': 'Scholar PDF Kit',
  'scholar-rag-kit': 'Scholar RAG Kit'
};

// Ensure the destination base directory exists
if (!fs.existsSync(docsDestDir)) {
  fs.mkdirSync(docsDestDir, { recursive: true });
}

for (const [kitFolder, kitTitle] of Object.entries(toolkits)) {
  const kitPath = path.join(toolkitsDir, kitFolder);
  
  if (!fs.existsSync(kitPath)) {
    console.warn(`Warning: Submodule ${kitFolder} not found. Skipping...`);
    continue;
  }

  // Paths to source files
  const tutorialPath = path.join(kitPath, 'docs', 'tutorial.md');
  const apiPath = path.join(kitPath, 'docs', 'api_reference.md');

  let combinedContent = `---
title: ${kitTitle}
---

`;

  // Read tutorial
  if (fs.existsSync(tutorialPath)) {
    combinedContent += fs.readFileSync(tutorialPath, 'utf8') + '\n\n';
  } else {
    console.warn(`Warning: tutorial.md missing in ${kitFolder}`);
  }

  // Read API reference
  if (fs.existsSync(apiPath)) {
    combinedContent += '---\n\n' + fs.readFileSync(apiPath, 'utf8') + '\n';
  } else {
    console.warn(`Warning: api_reference.md missing in ${kitFolder}`);
  }

  // Create destination directory and write file
  const destFolder = path.join(docsDestDir, kitFolder);
  if (!fs.existsSync(destFolder)) {
    fs.mkdirSync(destFolder, { recursive: true });
  }

  const destFile = path.join(destFolder, 'page.md');
  fs.writeFileSync(destFile, combinedContent);
  console.log(`Synced ${kitTitle} docs to ${destFile}`);
}

console.log('Documentation sync complete.');
