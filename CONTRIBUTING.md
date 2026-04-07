# Contributing

When contributing to this repository, please first discuss the change you wish to make via a GitHub issue or discussion before opening a Pull Request.

Please read [AGENTS.md](./AGENTS.md) for the full technical reference — stack decisions, coding conventions, testing requirements, and project structure are all documented there.

---

## Getting Started

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm start          # http://localhost:3000

# Run Storybook
pnpm storybook      # http://localhost:6006
```

---

## Development Workflow

1. **Create a branch** from `main` — use a descriptive name (`feat/search-icon`, `fix/grid-height`, `chore/update-deps`)
2. **Make your changes** — follow the conventions in [AGENTS.md](./AGENTS.md)
3. **Verify before pushing**:
   ```bash
   pnpm type-check     # no TypeScript errors
   pnpm test           # all tests pass
   pnpm format:check   # code is formatted
   ```
4. **Open a Pull Request** against `main`

---

## Pull Request Checklist

- [ ] `pnpm type-check` passes with no errors
- [ ] `pnpm test` — all existing tests pass; new behaviour is covered
- [ ] New component includes a co-located `*.spec.tsx` test file
- [ ] New component includes a co-located `*.stories.tsx` Storybook file
- [ ] New user-facing strings added to **all 5** locale files (`en`, `de`, `fr`, `es`, `it`) in `src/locales/`
- [ ] `pnpm format` applied (or `pnpm format:check` passes)
- [ ] README updated if the public interface, scripts, or structure changed

---

## Coding Standards (summary)

> Full details: [AGENTS.md](./AGENTS.md)

- **Package manager**: `pnpm` only — never `yarn` or `npm`
- **TypeScript**: `strict: true` — no implicit `any`; no `import React` (automatic JSX transform)
- **State**: Zustand — persisted contacts store, non-persisted selection store
- **Forms**: `react-hook-form` + `zod` schema validation
- **Styling**: CSS custom properties in `index.css`; `mergeStyleSets` for component styles
- **i18n**: `useTranslation` for every user-facing string; update all 5 locale files
- **Tests**: Vitest + Testing Library; `*.spec.tsx` co-located with source
- **Storybook**: CSF3 format; every component needs a `.stories.tsx` file

---

## Versioning

This project uses [SemVer](http://semver.org/). Version bumps are handled via `pnpm release` (powered by `release-it`).

---

## Code of Conduct

### Our Pledge

In the interest of fostering an open and welcoming environment, contributors and maintainers pledge to make participation in this project a harassment-free experience for everyone, regardless of age, body size, disability, ethnicity, gender identity and expression, level of experience, nationality, personal appearance, race, religion, or sexual identity and orientation.

### Our Standards

Behaviour that contributes to a positive environment:

- Using welcoming and inclusive language
- Being respectful of differing viewpoints and experiences
- Gracefully accepting constructive criticism
- Focusing on what is best for the community
- Showing empathy towards other community members

Unacceptable behaviour:

- Use of sexualised language or imagery and unwelcome sexual attention or advances
- Trolling, insulting or derogatory comments, and personal or political attacks
- Public or private harassment
- Publishing others' private information without explicit permission
- Other conduct reasonably considered inappropriate in a professional setting

### Enforcement

Instances of abusive, harassing, or otherwise unacceptable behaviour may be reported by opening a GitHub issue or contacting the project maintainers directly. All complaints will be reviewed and investigated. The project team is obligated to maintain confidentiality with regard to the reporter of an incident.

This Code of Conduct is adapted from the [Contributor Covenant](http://contributor-covenant.org), version 1.4.
