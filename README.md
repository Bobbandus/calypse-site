# Calypse — website

Static landing page for Calypse — white/black, square corners, Rajdhani
headings + Segoe UI body. Pure HTML/CSS/JS, no build step.

## Files

- `index.html` — just the wordmark, tagline, and one Download button. No app grid or nav — `clicker.html`/`Projects.html`/`servers.html` exist as standalone pages, not linked from here yet
- `clicker.html` — Calypse Clicker's page
- `Projects.html` — placeholder page for future apps/info
- `servers.html` — "Tested Minecraft Servers" table, linked from `clicker.html`. Static and read-only for visitors (tested and submitted by a trusted third party, not Calypse); add or edit rows by editing the `<tbody>` directly and pushing
- `style.css` — theme (white bg, black text/borders, no rounded corners; colors mirror `theme.py` in the main Calypse repo where applicable)
- `script.js` — tiny header scroll effect, no dependencies

## Preview locally

Just open `index.html` in a browser, or serve it:

```bash
npx serve .
```

The download/repo buttons point at `github.com/Bobbandus/calypse` and its
`/releases/latest` page — no edits needed as long as that's still the repo.

## Push to GitHub

```bash
git push -u origin main
```

Remote is already set to `https://github.com/Bobbandus/calypse-site.git`.

## Deploy to Vercel

1. Go to [vercel.com/new](https://vercel.com/new) and import the GitHub repo.
2. Framework preset: **Other** (it's static HTML, no build command needed).
3. Root directory: leave as `.`
4. Deploy — Vercel serves `index.html` directly.

Every push to `main` after that auto-deploys.
