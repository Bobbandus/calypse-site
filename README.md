# BobWare — website

Static landing page for BobWare (theme matched to the desktop app: dark
background, purple/cyan gem accent, Segoe UI). Pure HTML/CSS/JS, no build
step.

## Files

- `index.html` — landing page: download button and a Launchpad-style app grid. Each tile links to that app's own page
- `clicker.html` — BobWare Clicker's page, linked from the launchpad grid
- `servers.html` / `servers.js` — "Tested Minecraft Servers" spreadsheet, linked from `clicker.html`. Rows are edited in place (contenteditable + a status dropdown) and saved to that browser's `localStorage` — nothing is sent anywhere, so data doesn't sync across devices or visitors
- `style.css` — theme (colors mirror `theme.py` in the main BobWare repo)
- `script.js` — tiny header scroll effect, no dependencies

## Preview locally

Just open `index.html` in a browser, or serve it:

```bash
npx serve .
```

The download/repo buttons point at `github.com/Bobbandus/bobware` and its
`/releases/latest` page — no edits needed as long as that's still the repo.

## Push to GitHub

```bash
git push -u origin main
```

Remote is already set to `https://github.com/Bobbandus/waresite.git`.

## Deploy to Vercel

1. Go to [vercel.com/new](https://vercel.com/new) and import the GitHub repo.
2. Framework preset: **Other** (it's static HTML, no build command needed).
3. Root directory: leave as `.`
4. Deploy — Vercel serves `index.html` directly.

Every push to `main` after that auto-deploys.
