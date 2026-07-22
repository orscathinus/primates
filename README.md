# Branching Origins — Primate Evolution

A complete static educational website about primate evolution. It uses only HTML, CSS, and vanilla JavaScript, so it can be hosted directly on GitHub Pages.

## Pages

- `index.html` — home page and overview
- `tree.html` — zoomable, pannable, collapsible family tree
- `timeline.html` — searchable and filterable evolutionary timeline
- `species.html` — searchable taxon explorer with detailed modal profiles
- `anatomy.html` — interactive adaptation lab
- `sources.html` — bibliography and methodology

## Run locally

Open `index.html` directly, or launch a simple server in this directory:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploy on GitHub Pages

1. Upload every file and folder to the root of a GitHub repository.
2. Open the repository’s **Settings**.
3. Choose **Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Choose your main branch and the `/ (root)` folder, then save.

All links are relative, so the site works both as a user site and a project site.

## Editing content

Most scientific content is stored in `js/data.js`. Add or revise taxa, timeline events, tree nodes, and adaptation panels there.

## Scientific note

The site intentionally treats primate evolution as a branching process. Fossil taxa are not presented as direct ancestors unless that claim is strongly supported, and uncertain relationships are labeled.
