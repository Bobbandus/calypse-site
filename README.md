# BobWare — website

Static landing page for BobWare (theme matched to the desktop app: dark
background, purple/cyan gem accent, Segoe UI). Pure HTML/CSS/JS, no build
step.

## Files

- `index.html` — page content
- `style.css` — theme (colors mirror `theme.py` in the main BobWare repo)
- `script.js` — small scroll/reveal effects, no dependencies

## Preview locally

Just open `index.html` in a browser, or serve it:

```bash
npx serve .
```

## Before you deploy

The download/repo buttons in `index.html` currently point at placeholder
`https://github.com/` links. Update these once your repo is live:

- `#repo-link` (hero "View on GitHub")
- `#download-link` (release download)
- `#source-link` ("View source on GitHub")

Point `#download-link` at your GitHub Releases page (or a direct link to
`BobWareLauncher.exe` in a release) once you've published a build.

## Push to GitHub

```bash
git init
git add .
git commit -m "BobWare landing page"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

## Deploy to Vercel

1. Go to [vercel.com/new](https://vercel.com/new) and import the GitHub repo.
2. Framework preset: **Other** (it's static HTML, no build command needed).
3. Root directory: leave as `.`
4. Deploy — Vercel serves `index.html` directly.

Every push to `main` after that auto-deploys.
