# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # start dev server (Turbopack) at localhost:3000
npm run build    # production build — also runs the TypeScript check
npm run lint     # ESLint (flat config, eslint.config.mjs)
npm run start    # serve the production build
```

There is no test suite configured in this project.

To type-check without a full build: `npx tsc --noEmit`.

## Architecture

Next.js App Router site (no `src/`), single owner/author portfolio for Panashe M. Chandiwana. Path alias `@/*` maps to the repo root (see `tsconfig.json`).

- `app/` — one route per section: `/`, `/about`, `/skills`, `/projects`, `/projects/[slug]`, `/contact`. Each `page.tsx` exports its own `metadata` and renders a `SectionHeader` (`components/ui/SectionHeader.tsx`) plus the matching section component.
- `components/HomeContent.tsx` — the homepage body specifically: renders `Hero` plus a **hard-coded** 4-card project teaser and a "Technical DNA" skills carousel. These are *not* sourced from `data/projects.ts` or `Skills.tsx` — they're independent copies for the homepage layout, so changes to projects/skills elsewhere do not automatically propagate here.
- `components/sections/` — the reusable section components (`Hero`, `About`, `Skills`, `Projects`, `Contact`), each also mounted standalone on its matching `/about` etc. page.
- `components/Navigation.tsx` / `components/Footer.tsx` — global chrome, mounted once in `app/layout.tsx`.
- `components/ui/` — generic primitives (`button`, `card`, `badge`, `SectionHeader`) — no content, layout/design only.
- `data/projects.ts` — the **only** dedicated content data file in the repo (the `Project` interface + `projects` array). Consumed by `components/sections/Projects.tsx`, `app/projects/[slug]/page.tsx`, and (informally, via manual copies) `HomeContent.tsx`.

**Everything else is content-as-code**: Hero copy, the About timeline, Skills categories, Contact methods, Footer/Nav branding text all live as local `const` arrays/JSX directly inside their component files — there is no `config/site.ts` or `constants.ts`. When updating site content, the component file *is* the source of truth; grep for the string you're changing rather than assuming a shared config exists.

### Project data model (`data/projects.ts`)

`github` and `demo` are optional (`?: string`) — omit them for projects with no real link rather than using a `"#"` placeholder. Consumers must guard with a truthy check (`project.demo && ...`), not `!== "#"`.

`purpose`/`problem`/`description`/`techStack`/`tags` are the only fields the UI renders (project detail page shows `purpose` as "The Vision", `problem` as "The Challenge", `techStack` split by `", "` as architecture chips, `tags` as sidebar "Core Technologies"). There's no list-rendering UI for a separate "achievements" or "key features" array — fold that detail into the prose fields instead of inventing new schema/UI.

`category` is a free-text string like `"Machine Learning | Financial Technology | Full-Stack Development"`, matched by keyword (`.includes(...)`) in the `getIcon()` helper duplicated in three places: `components/sections/Projects.tsx`, `components/HomeContent.tsx`, `app/projects/[slug]/page.tsx`. If you add a genuinely new category type, update the icon matching in all three.

### Design-system constraints

This is a single dark-theme site (`className="dark"` hard-coded on `<html>` in `app/layout.tsx` — there is no light-mode toggle). The brand accent color `#A67B5B` is hand-coded inline across components (not a Tailwind theme token) — grep for it rather than a config file when adjusting brand color. Content-only updates (copy, links, project data) should never touch layout classes, animation variants (`framer-motion`), or these hard-coded color/spacing values — treat those as intentionally fixed unless a redesign is explicitly requested.

### Naming/content conventions

Current identity: **Panashe M. Chandiwana**, `panashechandiwana.vercel.app` (canonical domain used in all metadata/OG tags), CV file at `public/Panashe_Chandiwana_CV.pdf` (the Hero download button links here — keep this exact filename if replacing the CV). Spelling/casing to preserve consistently in new copy: TensorFlow, PyTorch, SQLite, FastAPI, Next.js, GitHub, Wireshark, Zabbix, BioBERT, LightGBM, CatBoost, SHAP, ChiShona, IsiNdebele, OBD-II, CAN bus, full-stack (hyphenated adjective), real-world (hyphenated).
