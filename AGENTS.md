# Repository Guidelines

## Project Structure & Module Organization
This repository is a static GitHub Pages site. The landing page lives in `index.html`. Individual tools are standalone pages under `tools/` such as `tools/json.html` and `tools/regex.html`. Shared styling is kept in `css/tailwind.min.css`, and visual assets live in `images/`. Planning, SEO, UI, and release checklists are documented in `docs/`. Deployment workflows are under `.github/workflows/`.

## Build, Test, and Development Commands
There is no required build step for the current static version.

- `python -m http.server 8000` — serve the repository locally for browser testing.
- `npx http-server .` — alternative local static server if Node.js is available.
- `git status` — confirm only intended files changed before opening a PR.

Open `http://localhost:8000` after starting a local server. Validate both the homepage and any edited tool page directly.

## Coding Style & Naming Conventions
Use 2-space indentation in HTML, CSS, and inline JavaScript to match existing files. Keep pages dependency-light and browser-native; most tools are implemented as self-contained HTML files with embedded scripts. Prefer kebab-case for new page filenames, for example `tools/string-diff.html`. Keep CSS class names readable and reuse existing Tailwind utilities where possible. Write concise Chinese comments only when logic is not obvious.

## Testing Guidelines
This repo currently relies on manual verification rather than automated unit tests. Before submitting changes, test navigation, input/output behavior, copy actions, and responsive layout on desktop and mobile widths. Use `docs/网站测试检查表.md` as the release checklist, especially for SEO metadata, broken links, and browser compatibility.

## Commit & Pull Request Guidelines
Recent history uses short Chinese summaries such as `1. 优化sha256` and `1. 增加测试图标`. Keep commit messages brief, imperative, and focused on one change. For pull requests, include:

- a short summary of user-visible changes
- affected paths, such as `index.html` or `tools/sha256.html`
- screenshots for homepage or UI changes
- linked issue or task, if one exists

## Deployment Notes
`main` deploys the repository root directly through `.github/workflows/deploy.yml`. A separate `.github/workflows/deploy-npm.yml` exists for an npm-based build flow on `develop`, but no `package.json` is currently tracked. Do not assume a Node build pipeline unless it is added in the same change.
