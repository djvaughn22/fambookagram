# fambookagram

Your family's private feed. Photos and moments — no ads, no algorithm, no strangers. (Waitlist)

**Live:** https://fambookagram.com
**Part of:** [Open Mirror LLC](https://openmirrorllc.com)

## Local dev
```bash
npm install
npm run dev
```

## Deploy
Push to `main` — Vercel auto-deploys production.

## Repo map

- **Production:** https://fambookagram.com — branch `main`, auto-deploys on push (Vercel).
- **Framework:** Next.js 16.2.6 (App Router). Build: `npm run build`. No test suite.
- **Routes:** `/` (single page)
- **Family chrome:** `OpenMirrorNav.tsx` / `OpenMirrorFooter.tsx` / `OpenMirrorTheme.tsx` are synced copies — canonical source is the hub repo `packages/openmirror-ui/` + `scripts/sync-ui.sh`. Never edit the local copies.
- **Theme:** family ☀️/🌙 toggle; `om-theme` localStorage key; light mode remaps family hexes (see hub `docs/OPEN_MIRROR_PATTERNS.md`).
- **Protected:** kept intentionally minimal; off the family menus by design.
- **Make changes in:** `app/page.tsx`.
