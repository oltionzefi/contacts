# Contacts

A React + TypeScript single-page application for managing contacts. Runs as a standard web app **and** as a self-contained Web Component.

## Features

- **Contact management** — add, edit, delete contacts
- **Search & filter** — live search with clear button and magnifying glass icon
- **List / Grid view** — toggle between compact list and uniform-height card grid
- **Infinite scroll** — loads 20 contacts at a time, more on scroll
- **Multi-select** — checkbox per contact; Share, Download, Move, Copy toolbar actions are enabled when at least one contact is selected
- **File upload** — drag-and-drop CSV / Excel parsing via `exceljs`
- **i18n** — English, German, French, Spanish, Italian (`i18next` + `react-i18next`)
- **Storybook** — full component stories for every feature
- **Web Component build** — output a standalone `<contacts-app>` custom element

---

## Tech Stack

| Category | Package |
|----------|---------|
| Framework | React 18 + TypeScript 5 (`strict`) |
| UI Library | Fluent UI v8 (`@fluentui/react`) |
| State | Zustand (persisted contact store; non-persisted selection store) |
| Routing | React Router v6 |
| Forms | react-hook-form + zod |
| i18n | i18next 23 + react-i18next |
| Drag & Drop | react-dnd + react-dnd-html5-backend |
| File parsing | exceljs |
| Build | Vite + `@vitejs/plugin-react` |
| Tests | Vitest + Testing Library |
| Storybook | `@storybook/react-vite` v8 |
| Package manager | pnpm |

---

## Getting Started

```bash
pnpm install
pnpm start        # dev server → http://localhost:3000
```

---

## Scripts

| Script | Description |
|--------|-------------|
| `pnpm start` | Dev server (Vite) at `http://localhost:3000` |
| `pnpm build` | Type-check + production build → `build/` |
| `pnpm build:wc` | Type-check + Web Component build → `build-wc/` |
| `pnpm preview` | Preview production build locally |
| `pnpm test` | Run all tests once (Vitest) |
| `pnpm test:watch` | Vitest in watch mode |
| `pnpm coverage` | Test coverage report (opens HTML) |
| `pnpm type-check` | TypeScript check without emit |
| `pnpm format` | Prettier — format all source files |
| `pnpm format:check` | Prettier — check only, no writes |
| `pnpm storybook` | Storybook dev server at `http://localhost:6006` |
| `pnpm build-storybook` | Build Storybook to `.dist/` |
| `pnpm translations-scan` | Sync i18n keys via i18next-scanner |

---

## Project Structure

```
src/
├── contacts/           # Contact entity (list, form, item, state)
│   ├── state/          # Zustand stores (contacts, selection)
│   ├── Contact.tsx     # Add / Edit form (react-hook-form + zod)
│   ├── Contacts.tsx    # List page — search, view toggle, infinite scroll
│   └── ContactItem.tsx # Single contact row or grid card
├── upload/             # Drag-and-drop file upload (ContainerBox, FileList, Message)
├── toolbar/            # Fluent UI CommandBar — context-aware actions
├── footer/             # App footer
├── language/           # Language selector + Zustand language store
├── navbar/             # Top navigation bar
├── sidebar/            # Navigation sidebar
├── content/            # Main content layout wrapper
├── utils/              # Shared utilities
├── types/              # Shared TypeScript types
├── locales/            # i18n JSON files (en, de, fr, es, it)
├── stories/            # Shared Storybook mocks
├── i18n.tsx            # i18next configuration (HTTP backend)
├── i18nForStories.ts   # Synchronous i18n instance for Storybook
├── App.tsx             # Root component
├── Container.tsx       # Layout + i18n provider
├── index.css           # Global design tokens + component styles
└── web-component.ts    # Web Component entry point
```

---

## Web Component

Build and use as a custom element:

```bash
pnpm build:wc
```

Embed in any HTML page:

```html
<script type="module" src="build-wc/assets/index.js"></script>
<contacts-app></contacts-app>
```

---

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md). AI agent instructions are in [AGENTS.md](./AGENTS.md).
