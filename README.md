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

The download/repo buttons point at `github.com/Bobbandus/bobware` and its
`/releases/latest` page — no edits needed as long as that's still the repo.

## Push to GitHub

```bash
git remote add origin https://github.com/Bobbandus/bobware-site.git
git push -u origin master
```

(Or push this folder to its own repo — keeping it separate from the app
repo, `Bobbandus/bobware`, is fine either way.)

## Deploy to Vercel

1. Go to [vercel.com/new](https://vercel.com/new) and import the GitHub repo.
2. Framework preset: **Other** (it's static HTML, no build command needed).
3. Root directory: leave as `.`
4. Deploy — Vercel serves `index.html` directly.

Every push to `main` after that auto-deploys.
