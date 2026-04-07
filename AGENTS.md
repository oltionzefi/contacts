# AGENTS.md — AI Agent Instructions for `contacts`

This file contains instructions for all AI agents (GitHub Copilot, Claude, Codex, Gemini, etc.) working on this repository. Read this file **completely** before making any changes.

---

## Project Overview

**`contacts`** is a React + TypeScript single-page application for managing contacts. Key capabilities:
- Add, edit, delete contacts
- Search / filter with live debounce, clear button, and inline icon
- List view and uniform-height grid view with view-mode toggle
- Infinite scroll (20 contacts per page, loads more on scroll)
- Multi-select with context-aware toolbar actions (Share, Download, Move, Copy)
- Upload contacts via drag-and-drop (Excel/CSV parsing via `exceljs`)
- i18n (English, German, French, Spanish, Italian) via `i18next` / `react-i18next`
- State management with **Zustand** (persisted contacts store + non-persisted selection store)
- UI with **Fluent UI v8** (`@fluentui/react`)
- Routing via `react-router-dom` v6
- Forms with `react-hook-form` + `zod`
- Drag-and-drop via `react-dnd` + `react-dnd-html5-backend`
- Storybook stories for every component
- Web Component build (`<contacts-app>` custom element)

---

## Directory Structure

```
src/
├── contacts/           # Contact entity (list, form, item, state)
│   ├── state/          # Zustand stores: contacts.store.ts, selection.store.ts
│   ├── Contact.tsx     # Add/Edit form (react-hook-form + zod)
│   ├── Contact.stories.tsx
│   ├── ContactItem.tsx # Single contact row (list) or card (grid)
│   ├── ContactItem.stories.tsx
│   ├── Contacts.tsx    # List page — search, view toggle, infinite scroll
│   └── Contacts.stories.tsx
├── upload/             # Drag-and-drop file upload
│   ├── ContainerBox.tsx / ContainerBox.stories.tsx
│   ├── FileList.tsx / FileList.stories.tsx
│   └── Message.tsx / Message.stories.tsx
├── toolbar/            # Fluent UI CommandBar with selection-aware actions
│   ├── Toolbar.tsx / Toolbar.stories.tsx
├── footer/             # App footer
│   ├── Footer.tsx / Footer.stories.tsx
├── language/           # Language selector
│   ├── LanguageSelector.tsx / LanguageSelector.stories.tsx
├── navbar/             # Top navigation bar
├── sidebar/            # Navigation sidebar
├── content/            # Main content layout wrapper
├── utils/              # Shared utilities
├── types/              # Shared TypeScript types
├── stories/            # Shared Storybook mocks (mocks.ts)
├── locales/            # i18n JSON files (en, de, fr, es, it)
├── i18n.tsx            # i18next configuration (HTTP backend)
├── i18nForStories.ts   # Synchronous i18n instance for Storybook
├── index.stories.tsx   # Design system / Badge component story
├── App.tsx             # Root component
├── Container.tsx       # Layout + I18nextProvider (class component — do not convert)
├── index.css           # Global CSS design tokens + all component styles
└── web-component.ts    # Web Component entry point
```

---

## Tech Stack Reference

| Category | Package | Notes |
|----------|---------|-------|
| Framework | `react` ^18, `react-dom` ^18 | Functional components preferred |
| Language | `typescript` 5.x | `strict: true`, decorators enabled |
| State | `zustand` | `contacts.store.ts` uses `persist`; `selection.store.ts` is non-persisted |
| UI Library | `@fluentui/react` ^8 | Fluent UI v8 |
| Routing | `react-router-dom` ^6 | `BrowserRouter`, `Routes`, `Route` |
| Forms | `react-hook-form` + `zod` | `@hookform/resolvers/zod` for schema validation |
| i18n | `i18next@^23` + `react-i18next@^14` | `useTranslation` hook; 5 locales |
| i18n Backend | `i18next-http-backend` | Loads locale JSON at runtime |
| Drag & Drop | `react-dnd` ^16 | `HTML5Backend` from `react-dnd-html5-backend` |
| File parsing | `exceljs` | Excel/CSV parsing (replaces legacy `xlsx`) |
| Styling | `mergeStyleSets` (Fluent UI) + `index.css` | CSS-in-JS for components; CSS custom properties for tokens |
| Testing | `vitest` + `@testing-library/react` | `*.spec.tsx` co-located with source |
| Build | `vite` + `@vitejs/plugin-react` | Dev at port 3000 |
| WC Build | `vite.wc.config.ts` | Builds `<contacts-app>` web component |
| Storybook | `@storybook/react-vite` ^8 | CSF3 format; global decorators in `.storybook/preview.tsx` |
| Package manager | `pnpm` | Use `pnpm` — **never** `npm` or `yarn` |

---

## Coding Conventions

### TypeScript
- `strict: true` — no implicit `any`, strict null checks enforced
- `experimentalDecorators: true` — kept for compatibility
- Use explicit return types on exported functions
- Prefer `type` aliases over `interface` for models; use `interface` for component props
- Path alias: `baseUrl: "src"` — import from `contacts/state` not `../state`
- Auto JSX transform (`"jsx": "react-jsx"`) — do **not** import React for JSX

### React
- **Functional components** with hooks only — avoid new class components
- Exception: `Container.tsx` is a class component — **do not convert**
- Co-locate component logic in custom hooks
- Each feature folder exports its public API via `index.ts`

### State Management (Zustand)
- **Contacts store** (`contacts/state/contacts.store.ts`): persisted via `zustand/middleware`
- **Selection store** (`contacts/state/selection.store.ts`): non-persisted; holds `selectedIds: string[]`
- Never call store `setState` directly from components — use the exported actions
- Both stores are exported from `contacts/state/index.ts`

### i18n
- All user-facing strings must use `useTranslation` — no hardcoded UI text
- Translation keys: `contacts.<feature>.<key>` (e.g., `contacts.contacts.email`)
- Run `pnpm translations-scan` after adding new keys
- Locales: `src/locales/{en,de,fr,es,it}/translation.json`
- For Storybook: use `i18nForStories.ts` (synchronous, no HTTP) not `i18n.tsx`

### Testing
- Test files: `*.spec.tsx` / `*.spec.ts` co-located with source
- Use `@testing-library/react` — `render`, `screen`, `fireEvent`, `userEvent`
- Components using `useNavigate` must be wrapped in `<MemoryRouter>` in tests
- i18next is mocked via `__mocks__/react-i18next.js`
- Run: `pnpm test` (once) or `pnpm test:watch` (watch mode)

### Styling
- CSS custom properties (tokens) defined in `index.css` under `:root`
- Component-specific styles: use `mergeStyleSets` in a `styles.tsx` file per feature folder
- Global layout and structural styles live in `index.css`
- No inline `style` props for anything beyond dynamic values
- Responsive breakpoints: 480px / 768px / 1024px / 1280px

### Storybook
- All stories use CSF3 format (`Meta<typeof Component>`, `StoryObj`)
- Global decorators (`MemoryRouter`, `I18nextProvider`, `initializeIcons`) in `.storybook/preview.tsx`
- Shared mock data in `src/stories/mocks.ts`
- Seed Zustand stores in story decorators: `useContactsStore.setState({ contacts: mockContacts })`
- `ContainerBox` stories require `<DndProvider backend={HTML5Backend}>` decorator

---

## Development Commands

```bash
pnpm start              # Dev server at http://localhost:3000
pnpm build              # Type-check + production build
pnpm build:wc           # Type-check + Web Component build
pnpm preview            # Preview production build
pnpm test               # Run all tests once (Vitest)
pnpm test:watch         # Vitest watch mode
pnpm coverage           # Coverage report (opens HTML)
pnpm type-check         # TypeScript check without emit
pnpm format             # Prettier format all src files
pnpm format:check       # Check formatting without writing
pnpm translations-scan  # Sync i18n translation keys
pnpm storybook          # Storybook dev server at http://localhost:6006
pnpm build-storybook    # Build Storybook to .dist/
```

---

## File Creation Rules

1. **New feature folder**: Create `<feature>/index.ts` re-exporting the public API
2. **New Zustand store**: Place under `<feature>/state/<name>.store.ts`; export from `<feature>/state/index.ts`
3. **New component**: Always create a co-located `*.spec.tsx` test file AND a `*.stories.tsx` Storybook file
4. **New translation key**: Add to **all 5** locale files: `src/locales/{en,de,fr,es,it}/translation.json`
5. **New route**: Register in `App.tsx` inside `<Routes>`

---

## Known Constraints

- `@fluentui/react` v8 globally augments `HTMLFormElement` types — `Contact.tsx` works around with a type cast
- `Container.tsx` is intentionally kept as a class component for stability
- The `i18next-http-backend` backend requires a running server; Storybook uses `i18nForStories.ts` (inline JSON) instead
- Web Component build (`build:wc`) uses a separate Vite config (`vite.wc.config.ts`)

---

## Security & Data

- No backend — all data is stored in the browser via Zustand `persist` (localStorage)
- `exceljs` parses uploaded files client-side only — no server uploads
- Do **not** commit secrets, credentials, or sensitive data

---

## Agent Behavior Guidelines

1. **Before editing**: Read the relevant feature folder and `index.ts` to understand exports
2. **After editing**: Run `pnpm type-check` and `pnpm test` to verify no regressions
3. **Match existing patterns**: File structure, naming, and code style of adjacent files
4. **No partial upgrades**: If upgrading a package, update all usages atomically
5. **Story for every component**: Every new component needs a `.stories.tsx` file
6. **PR scope**: Keep changes focused — one concern per PR
7. **No yarn / npm**: Always use `pnpm`
