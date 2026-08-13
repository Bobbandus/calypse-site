# Calypse — website

Static landing page for Calypse (theme matched to the desktop app: dark
background, purple/cyan gem accent, Rajdhani headings + Segoe UI body).
Pure HTML/CSS/JS, no build step.

## Files

- `index.html` — landing page: download button and a Launchpad-style app grid. Each tile links to that app's own page; "Locked" tiles are inert placeholders for apps that don't exist yet
- `clicker.html` — Calypse Clicker's page, linked from the launchpad grid
- `Projects.html` — placeholder page for future apps/info, linked from the "Projects" tile
- `servers.html` — "Tested Minecraft Servers" table, linked from `clicker.html`. Static and read-only for visitors (tested and submitted by a trusted third party, not Calypse); add or edit rows by editing the `<tbody>` directly and pushing
- `style.css` — theme (colors mirror `theme.py` in the main Calypse repo)
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
