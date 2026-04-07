# CLAUDE.md

> **For full agent instructions, see [AGENTS.md](./AGENTS.md).**

All coding conventions, directory structure, tech stack details, development commands, and agent behavior guidelines are documented in **AGENTS.md**. Read it completely before making any changes to this repository.

## Quick Reference

```bash
pnpm start              # dev server → http://localhost:3000
pnpm build              # type-check + production build
pnpm build:wc           # web component build
pnpm test               # run tests once (Vitest)
pnpm test:watch         # Vitest watch mode
pnpm coverage           # test coverage + open HTML report
pnpm type-check         # TypeScript check without emit
pnpm format             # Prettier — format all source files
pnpm storybook          # Storybook at http://localhost:6006
pnpm translations-scan  # sync i18n keys
```

## Key Decisions

| Concern | Choice |
|---------|--------|
| Package manager | `pnpm` — never `yarn` or `npm` |
| State | Zustand (`contacts.store.ts` persisted; `selection.store.ts` non-persisted) |
| Forms | react-hook-form + zod |
| Tests | Vitest + Testing Library |
| JSX transform | Automatic — do **not** `import React` just for JSX |
| Storybook i18n | `i18nForStories.ts` (synchronous) — not the main `i18n.tsx` |

## Do Not

- Use `yarn` or `npm` — use `pnpm`
- Import `React` solely for JSX (automatic transform is active)
- Convert `Container.tsx` from a class component
- Hardcode user-facing strings — use `useTranslation`
- Add translation keys to only some locale files — update all 5 (`en`, `de`, `fr`, `es`, `it`)
