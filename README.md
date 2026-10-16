# ATLAS project page

Static project page for **ATLAS: Learning to Adapt LVLM Attention for Reasoning Video Segmentation**.
Plain HTML/CSS/JS, no build step.

```
index.html
css/style.css
js/main.js
assets/figures/atlas_architecture.svg   # architecture diagram, redrawn from Sec. 3 / Appendix B
assets/gifs/                            # ReasonVOS qualitative GIFs
assets/images/                          # poster frames + social preview
```

## Preview locally

```bash
cd project_page
python -m http.server 8000
```

Then open http://localhost:8000

## Publish with GitHub Pages

1. Create a GitHub repository and push the contents of this folder to it (`index.html` at the repo root).
2. Open the repository **Settings**.
3. Open **Pages**.
4. Under *Build and deployment*, choose **Deploy from a branch**, and select your branch (e.g. `main`).
5. Choose `/ (root)` as the folder.
6. Click **Save**.
7. After a minute the site is live at `https://<user>.github.io/<repo>/`.

## Placeholders to replace

Search the repo for these strings:

| Placeholder | Where |
|---|---|
| `PAPER_URL`, `ARXIV_URL`, `CODE_URL`, `CHECKPOINT_URL`, `SUPPLEMENTARY_URL` | hero buttons, resources section, footer |
| `AUTHOR_1..3`, `AFFILIATION_1..2` | hero (the submitted PDF is anonymous) |
| `AUTHOR_LIST`, `VENUE_PLACEHOLDER`, `YEAR_PLACEHOLDER` | BibTeX block |
| `SITE_URL` comment | `og:image` / `twitter:image` need an absolute URL for social previews |

## Optional: use the paper's original figures

`assets/figures/atlas_architecture.svg` is a redrawn diagram. To use the original Figure 2,
export it from the PDF (e.g. `pdftoppm -r 300 -f 3 -l 3 -png paper.pdf fig`, then crop) to
`assets/figures/atlas_architecture.png` and change the `src` in the *ATLAS Overview* section.
Paper Figures 4 and 7–15 can be added to the *More Qualitative Results* section the same way.

The GIFs are 9–28 MB each. GitHub accepts files up to 100 MB, but converting them to MP4
(`<video autoplay loop muted playsinline>`) would make the page load much faster.
