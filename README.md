# Isabella Teubal — portfolio site

A plain static website (HTML + CSS, no frameworks), rebuilt from the Figma design.

## How it's organized

| Path | What it is |
|---|---|
| `src/site.mjs` | **All the content**: intro text, home photos, project tiles, project pages, bio, links |
| `build.mjs` | Turns the content into web pages. Run `node build.mjs` |
| `public/styles.css` | The look: fonts, spacing, layout, mobile rules |
| `public/images/` | Photos, already resized for the web |
| `public/isabella-teubal-cv.pdf` | The CV that the "CV" link opens |
| `dist/` | The finished site that gets uploaded (made by the build, don't edit by hand) |

## Adding a new project page

1. Put the photo(s) in `public/images/`.
2. In `src/site.mjs`, add an entry to `projectPages`. There are three page types:
   - `film`: a title, a role line, one big image or YouTube video, and a button
   - `zine`: large spreads stacked, and a button
   - `gallery`: grids of images under headings
3. To show it on the Projects page, add a tile to the right section in `projectSections`, with `href: '/your-slug'`.
4. Run `node build.mjs`, then upload `dist/` (hosting redeploys automatically when connected to GitHub).

## Preview locally

```bash
node build.mjs && python3 -m http.server 8080 -d dist
```

Then open http://localhost:8080
