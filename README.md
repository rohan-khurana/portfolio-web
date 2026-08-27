# Rohan Khurana — Portfolio

A modern, static portfolio/resume site built with React, TypeScript, Vite, and Tailwind CSS v4.
Designed to deploy for free on GitHub Pages via GitHub Actions.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview   # preview the production build locally
```

## Deploy to GitHub Pages

1. **Set the repo name** in [`vite.config.ts`](vite.config.ts) — update `REPO_NAME` to match your
   GitHub repository name (e.g. if your repo is `github.com/rohan-khurana/portfolio`, set it to
   `'portfolio'`). If you're deploying to a user/org root site
   (`https://<user>.github.io/`), set `REPO_NAME` to `''`.
2. Push this project to a GitHub repository.
3. In the repo settings, go to **Settings → Pages** and set **Source** to **GitHub Actions**.
4. Push to `main` — the workflow in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)
   will build and deploy automatically.
5. Your site will be live at `https://<username>.github.io/<repo-name>/`.

You can also trigger a deploy manually from the **Actions** tab (`workflow_dispatch`).

## Updating your content

All resume content lives in one place: [`src/data/resume.ts`](src/data/resume.ts). Edit that file
to update:

- **Profile / hero** — `profile` (name, title, tagline, location, links, resume path)
- **About** — `about`
- **Experience** — `experience`
- **Skills** — `skills`
- **Projects** — `projects`
- **AI/Engineering expertise** — `aiExpertise`
- **Architecture & systems** — `architecture`
- **Publications** — `publications`
- **Achievements** — `achievements`
- **Education** — `education`
- **Nav links** — `nav`

## Replacing the résumé PDF

Replace [`public/assets/resume.pdf`](public/assets/resume.pdf) with your latest PDF, keeping the
same filename. The "Resume" buttons across the site point to `assets/resume.pdf` automatically via
`profile.resumeUrl` in `src/data/resume.ts`.

## Updating social links

Edit `profile.linkedin` and `profile.github` in `src/data/resume.ts`.

## Tech stack

- React 19 + TypeScript
- Vite
- Tailwind CSS v4
- Zero backend, zero database, zero paid services — fully static
