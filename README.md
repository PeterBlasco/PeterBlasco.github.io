# Personal website

Static site — plain HTML, CSS, and a few lines of JS. No build step, no dependencies.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | All the content: intro, links, about, projects |
| `styles.css` | Design tokens at the top (`:root`), then layout |
| `main.js` | Theme toggle + footer year |
| `images/` | Site images. `profile.jpg` is the header banner; the rest are project icons |
| `privacy/` | Privacy policies for published apps, linked from their project entries |

## Run locally

Open `index.html` in a browser, or serve it:

```
python -m http.server 8000
```

Then visit http://localhost:8000

## Adding a project

Each project is an `<li class="project">` in the `project-list` in `index.html`: a
`.project-head` with the title and `.year`, a paragraph, then `.tags`. Add `has-icon` and
an `<img class="project-icon">` as its first child to show an app icon beside it — a square
image, since the stylesheet rounds the corners.

Colors live in the `:root` block of `styles.css` — change `--accent` to recolor
the whole site. Dark mode has its own values in the `prefers-color-scheme` block.

## Deploy

**GitHub Pages** — push to a repo, then Settings → Pages → deploy from `main` / root.
For a `USERNAME.github.io` repo it serves at that domain directly.

**Netlify / Vercel / Cloudflare Pages** — drag the folder in, or connect the repo.
No build command, publish directory is the repo root.
