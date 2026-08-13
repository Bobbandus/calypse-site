# Calypse — website

Static landing page for Calypse — white/black, square corners, Rajdhani
headings + Segoe UI body. Pure HTML/CSS/JS, no build step.

## Files

- `index.html` — wordmark, tagline, one Download button, and a small "Clicker" link in the header
- `clicker.html` — Calypse Clicker's page, links to `servers.html`
- `Projects.html` — placeholder page for future apps/info (not linked from anywhere yet — visit it directly)
- `servers.html` / `servers.js` — "Tested Minecraft Servers" table. Read-only for visitors; `servers.js` fetches and renders `servers.txt` at load time
- `servers.txt` — the actual data. One line per server: `server | status | notes` (status: `Works` / `Flagged` / `Banned`). Lines starting with `#` are ignored. **To add a server, just add a line to this file and push** — no HTML editing needed
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
