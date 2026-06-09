# Engineering Foundation Phase 0.2.2

## Theme Architecture

The AI Command Center theme is split into typed token modules under `src/styles/theme`.
Colors, spacing, typography, breakpoints, shadows, and z-index values are immutable constants
exported through a single theme barrel. The modules centralize design values without applying
styles or changing the interface.

## Type Architecture

Domain interfaces live in `src/types` and are exported through `src/types/index.ts`. The types
cover portfolio metadata, projects, skills and categories, achievements, timeline milestones, and
social links. Optional and nullable fields support incomplete starter records without using `any`.

## Data Layer Architecture

Structured JSON files under `src/data` hold starter portfolio content separately from application
code. The records use stable IDs and match the domain interfaces. Placeholder contact and social
values must be replaced with verified Gautam details before production release.

## Loader Architecture

Each domain has a dedicated loader under `src/data/loaders`. Loaders expose asynchronous `getAll`
methods and collection loaders also expose `getById`. Consumers import loaders from
`src/data/index.ts`, keeping JSON imports and storage details behind a pure data-access boundary.

## Future Firebase Migration Strategy

Firebase can replace the local JSON imports inside each loader without changing consumer imports
or method signatures. The asynchronous loader contract already accommodates network access.
Firebase document converters should map remote records to the existing domain interfaces, while
IDs and nullable fields should remain stable to preserve compatibility.
