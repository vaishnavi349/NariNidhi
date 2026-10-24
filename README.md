# NariNidhi — Smart Savings & Financial Empowerment Platform

A responsive web platform for rural women and Self-Help Groups (SHGs): membership, savings, internal lending records, meetings, government scheme information, small-business guidance, and role-based dashboards (Member, SHG office-bearer, CRP, Admin).

Built with **React 19 (JavaScript)**, **Vite**, **React Router**, **Tailwind CSS v4**, and **shadcn/ui** components. All data shown is realistic demo data (no backend required to run).

## Run the project

You need Node.js 20.19+ (or 22+) and npm.

```sh
npm install
npm run dev
```

Open the printed local URL (http://localhost:8080).

## Build for production

```sh
npm run build      # outputs static files to dist/
npm run preview    # serve the production build locally
```

`dist/` is a plain static site. Because it is a single-page app, configure your host to serve `index.html` for unknown paths (e.g. a rewrite rule on Netlify / Vercel / Nginx).

## Project structure

```
index.html
src/
  main.jsx             # entry: mounts <App /> inside <BrowserRouter>
  App.jsx              # route table (public pages + /dashboard/* layout)
  pages/               # one file per page (Home, Login, Register, ...)
  pages/dashboard/     # role dashboards, rendered inside DashboardLayout
  components/nn/       # NariNidhi shared UI (layout, cards, tables, fields)
  components/ui/       # shadcn/ui primitives
  lib/                 # demo data, auth session store, i18n, page-meta hook
  index.css            # Tailwind + theme tokens (colors, fonts, dark mode)
public/                # static files (favicon, robots.txt)
```

## Notes

- Pages: public homepage, registration flows, help centre, and role dashboards under `/dashboard/*`.
- The dashboard pages use a demo sign-in guard; sample login hints are shown on the login page.
- This is a front-end prototype: form data is not persisted to a server.
- Page titles and SEO tags are set per route with the `usePageMeta` hook (`src/lib/page-meta.js`).
