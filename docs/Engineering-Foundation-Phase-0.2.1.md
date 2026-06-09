# Engineering Foundation Phase 0.2.1

## What Changed

- Added a single source path alias for `src`.
- Added Prettier and its ESLint compatibility configuration.
- Strengthened unused-variable detection in the existing ESLint flat configuration.
- Updated the application entry point to use alias imports for validation.

## Why It Changed

These changes establish consistent import paths, formatting rules, and static analysis while
preserving the existing application behavior and project structure.

## Alias Architecture

The `@` alias resolves to `src/`.

TypeScript maps `@/*` to `src/*` in `tsconfig.app.json`. Vite maps `@` to the absolute `src`
directory in `vite.config.ts`, so development and production builds use the same resolution.

This supports imports from:

- `@/app`
- `@/assets`
- `@/components`
- `@/data`
- `@/features`
- `@/hooks`
- `@/services`
- `@/store`
- `@/styles`
- `@/types`
- `@/utils`

## ESLint Configuration Summary

The existing Vite, React Hooks, React Refresh, JavaScript, and TypeScript recommended
configurations remain enabled. TypeScript-aware unused-variable checks report unused imports,
variables, parameters, and caught errors while allowing intentionally unused names prefixed with
an underscore. Unused ESLint disable directives are errors.

`eslint-config-prettier` is applied last to disable ESLint formatting rules that could conflict
with Prettier.

## Prettier Configuration Summary

Prettier uses semicolons, single quotes, trailing commas, a 100-character print width, and
two-space indentation. Only `node_modules` and `dist` are ignored.
