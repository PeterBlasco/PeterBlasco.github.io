# Personal website

Static site — plain HTML, CSS, and a few lines of JS. No build step, no dependencies.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | All the content: intro, links, about, projects |
| `styles.css` | Design tokens at the top (`:root`), then layout |
| `main.js` | Theme toggle + footer year |
| `resume.pdf` | Drop your resume here — the Resume link points at it |

## Run locally

Open `index.html` in a browser, or serve it:

```
python -m http.server 8000
```

Then visit http://localhost:8000

## Fill in

Search `index.html` for these and replace:

- `Your Name` — appears in the title, `<h1>`, and footer
- `yourhandle` — GitHub, LinkedIn, X URLs
- `you@example.com` — the mailto link
- The tagline, About paragraph, and the three project entries

Colors live in the `:root` block of `styles.css` — change `--accent` to recolor
the whole site. Dark mode has its own values in the `prefers-color-scheme` block.

## Deploy

**GitHub Pages** — push to a repo, then Settings → Pages → deploy from `main` / root.
For a `USERNAME.github.io` repo it serves at that domain directly.

**Netlify / Vercel / Cloudflare Pages** — drag the folder in, or connect the repo.
No build command, publish directory is the repo root.
