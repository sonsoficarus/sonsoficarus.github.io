# sonsoficarus.org

Official website of [Sons of Icarus](https://sonsoficarus.org) — "Fly Close, Blaze of Glory."

A static, dependency-free site (plain HTML/CSS/JS) served by GitHub Pages from the `master` branch.

## Pages

| File | Purpose |
| --- | --- |
| `index.html` | Landing page with the team logo |
| `team.html` | Team page: Roster, Sponsors, Championships, Win/Draw/Loss record |
| `nav.html` / `footer.html` | Shared partials injected into every page |
| `scripts.js` | Partials loader, dark/light theme toggle, Google Analytics |
| `styles.css` | All styling, themed via CSS variables |

## How it works

- **Partials** — `scripts.js` fetches `nav.html` and `footer.html` at runtime and injects them into the `#nav` / `#footer` placeholders on each page. Edit those files to change site-wide navigation or footer content.
- **Theming** — Dark (default) and light modes are driven by CSS variables under `:root` and `body.light` in `styles.css`. The toggle in the nav stores the choice in `localStorage` (`soi-theme`).
- **Analytics** — Google Analytics (`G-0KL870ZXLB`) is loaded from `scripts.js` so it applies to every page from one place.
- **Nav bar** — Fixed to the top of the viewport; anchor links offset via `scroll-margin-top`.

## Running locally

Because the partials are loaded with `fetch`, the site must be served over HTTP (opening `index.html` directly from disk won't render the nav/footer):

```
python -m http.server 8000
```

Then visit <http://localhost:8000>.

## Deployment

Pushes to `master` are deployed to GitHub Pages and served at <https://sonsoficarus.org> (custom domain configured via `CNAME`).