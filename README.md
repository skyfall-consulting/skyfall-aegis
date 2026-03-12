# Skyfall Aegis

Accessibility-forward, compliance-aware healthcare design system built for trusted digital experiences across patient, provider, and operational workflows.

## Quick Start

```bash
npm install
npm run dev
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Storybook dev server |
| `npm run build` | Build the library for distribution |
| `npm run build:storybook` | Build static Storybook site |
| `npm run typecheck` | Run TypeScript type checking |

## Architecture

```
src/
  tokens/       Design tokens (CSS variables + TypeScript constants)
  components/   React components organized by name
  utils/        Shared utilities
  hooks/        Custom React hooks
  types/        Shared TypeScript types
```

## Design Principles

1. **Clinical clarity** — Clear, structured, easy to scan under pressure
2. **Trust by default** — Confidence, stability, professionalism
3. **Accessibility built in** — Inclusive use by default (WCAG 2.2 AA)
4. **Calm, not cold** — Modern and composed without being sterile
5. **Enterprise-ready flexibility** — Patient-facing to dense operational dashboards

## License

MIT
