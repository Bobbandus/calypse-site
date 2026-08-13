# Calypse — website

Static landing page for Calypse — white/black, square corners, Segoe UI
throughout (matches the desktop app, no web fonts). Pure HTML/CSS/JS, no
build step.

## Files

- `index.html` — wordmark, tagline, one Download button, and a small "Clicker" link in the header
- `clicker.html` — Calypse Clicker's page, links to `servers.html`
- `Projects.html` — placeholder page for future apps/info (not linked from anywhere yet — visit it directly)
- `servers.html` / `servers.js` — "Tested Minecraft Servers" table. Read-only for visitors; `servers.js` fetches and renders `servers.txt` at load time
- `servers.txt` — the actual data. One line per server: `server | status | notes | detection` (status: `Works` / `Flagged` / `Banned`; notes and detection can be blank). Lines starting with `#` are ignored. **To add a server, just add a line to this file and push** — no HTML editing needed
- `messages.json` — read by the desktop app on startup to show version-targeted messages in its update banner (e.g. "this version is outdated, update from here"). See below
- `style.css` — theme (white bg, black text/borders, no rounded corners; colors mirror `theme.py` in the main Calypse repo where applicable)
- `script.js` — tiny header scroll effect, no dependencies

## Pushing a message to installed apps

`messages.json` is polled by every Calypse app on startup — editing it and
pushing is live within seconds via Vercel, no new app release needed.

```json
{
  "messages": [
    { "versions": "<1.2.0", "text": "This version is outdated. Update from calypse-site.vercel.app.", "url": "https://calypse-site.vercel.app" }
  ]
}
```

`versions` accepts an exact version (`1.1.0`), a comparison (`<1.2.0`,
`<=1.1.0`, `>1.0.0`, `>=1.1.0`), or `*` for everyone. `url` is optional —
if set, the banner gets a "Learn more" button that opens it. Remove the
entry (or narrow its range) once it's no longer relevant; there's no
per-user dismissal, so a message shows every time a matching version
starts up.

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
