# Conversion notes: TypeScript + TanStack Start  →  JavaScript + Vite + React Router + Tailwind

## What changed

| Area | Before | After |
| --- | --- | --- |
| Language | TypeScript (`.ts` / `.tsx`) | JavaScript (`.js` / `.jsx`) — all types, interfaces, generics, `as` / `!` / `satisfies` removed; formatting and comments kept |
| Framework | TanStack Start (SSR, Nitro, Cloudflare target) | Plain Vite single-page app (`index.html` → `src/main.jsx`) |
| Routing | TanStack Router, file-based (`src/routes/*.tsx`, generated `routeTree.gen.ts`) | React Router v6, explicit route table in `src/App.jsx` |
| Styling | Tailwind v4 via `@lovable.dev/vite-tanstack-config` | Tailwind v4 via `@tailwindcss/vite` in `vite.config.js` (theme CSS unchanged, now `src/index.css`) |
| UI components | shadcn/ui `.tsx` | same components as `.jsx` (`components.json` now `"tsx": false`) |
| Page `<head>` | route `head()` option | `usePageMeta()` hook (`src/lib/page-meta.js`), driven by the route table |
| Path alias | `vite-tsconfig-paths` | `@` alias in `vite.config.js` + `jsconfig.json` |

## Route file → page file

`src/routes/index.tsx` → `src/pages/Home.jsx`, `about` → `About`, `login` → `Login`, `register` → `Register`, `help` → `Help`, `how-it-works` → `HowItWorks`, `states` → `States`, `access-denied` → `AccessDenied`, `session-expired` → `SessionExpired`, `forgot-password` → `ForgotPassword`, `registration-status` → `RegistrationStatus`, `shg-register` → `ShgRegister`, `schemes.index` → `Schemes`, `schemes.$id` → `SchemeDetail`, `business-ideas.index` → `BusinessIdeas`, `business-ideas.$id` → `BusinessIdeaDetail`.

`src/routes/dashboard.tsx` → `src/pages/dashboard/DashboardLayout.jsx`, and every `dashboard.<name>.tsx` → `src/pages/dashboard/<Name>.jsx`.

## Behaviour mapping

- `loader` + `notFound()` (scheme / business-idea detail) → `useParams()` lookup; unknown ids render the 404 screen.
- `validateSearch` + `Route.useSearch()` (registration status, CRP review) → `useSearchParams()` with the same defaults.
- `<Link search={…} params={…} hash="…">` → plain URLs (`/registration-status?ref=…&status=…`, `/schemes/${id}`, `/help#privacy`).
- `activeProps` / `activeOptions` → `NavLink` (public nav uses `end`).
- `useNavigate()({ to })` → `navigate(path)`.
- Root `errorComponent` → `ErrorBoundary` (resets on navigation); root `notFoundComponent` → `pages/NotFound.jsx` and a `*` route.
- TanStack scroll restoration → `ScrollManager` (scroll to top on page change, or to the `#anchor`).

## Removed (not needed for a Vite SPA)

`routeTree.gen.ts`, `router.tsx`, `server.ts`, `start.ts`, `lib/error-capture.ts`, `lib/error-page.ts`, `lib/lovable-error-reporting.ts`, `routes/README.md`, `tsconfig.json`, `bun.lock`, `bunfig.toml`.

Dependencies removed: `@tanstack/react-start`, `@tanstack/react-router`, `@tanstack/router-plugin`, `@tanstack/react-query` (it was only mounted at the root and never used by a page), `vite-tsconfig-paths`, `@lovable.dev/vite-tanstack-config`, `nitro`, `typescript`, `typescript-eslint`, `@types/*`.
Dependency added: `react-router-dom`.

## Not verified here

The sandbox used to do this conversion had no network access, so `npm install`, `npm run dev`, `npm run build` and `npm test` were **not** run. What was checked: every file parses as JavaScript/JSX, every `@/…` and relative import resolves with the right named/default exports, and no undefined identifiers remain. Please run `npm install && npm run dev` once and click through the pages.
