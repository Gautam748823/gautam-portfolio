# Phase 14 - Analytics Command Center

## Architecture Decisions

- `src/data/analyticsDashboard.json` is the single source of truth for section copy, metrics, capabilities, distributions, learning signals, growth signals, focus areas, roadmap stages, recruiter signals, and insights.
- `analyticsLoader` follows the existing asynchronous local-loader pattern and exposes the typed dashboard through `getDashboard()`.
- The feature is isolated under `src/features/analytics` and split into focused presentation components.
- The capability radar is rendered with responsive SVG. Progress, signal, distribution, and circular indicators use semantic HTML and CSS without chart libraries.
- Existing shell tokens, layout primitives, cards, and section headers are reused. No design tokens, services, stores, external APIs, or tracking systems were changed.
- `AppShell` is the only existing application layout modified. Analytics is loaded with the other local datasets and rendered after Recruiter Mode and before Achievements.

## Files Created

- `src/data/analyticsDashboard.json`
- `src/data/loaders/analyticsLoader.ts`
- `src/types/Analytics.ts`
- `src/features/analytics/AnalyticsCommandCenter.tsx`
- `src/features/analytics/AnalyticsMetricsGrid.tsx`
- `src/features/analytics/AnalyticsSummaryCard.tsx`
- `src/features/analytics/AnalyticsSignalPanel.tsx`
- `src/features/analytics/AnalyticsProgressBars.tsx`
- `src/features/analytics/FocusAreasPanel.tsx`
- `src/features/analytics/GrowthSignalsPanel.tsx`
- `src/features/analytics/RoadmapInsightsPanel.tsx`
- `src/features/analytics/AnalyticsRadarView.tsx`
- `src/features/analytics/index.ts`
- `src/features/analytics/analytics.css`
- `docs/Phase-14-Analytics-Command-Center.md`

## Files Modified

- `src/layouts/AppShell.tsx`

## Data Model

The dashboard contract includes:

- Section metadata and panel labels
- Executive analytics summary
- Engineering summary metrics
- Engineering capability scores
- Technology distribution metrics
- Project distribution metrics
- Learning progress metrics
- Growth and trend metrics
- Current focus priorities
- Current, next, and long-term roadmap stages
- Recruiter-facing engineering signals
- Decision insights

All interfaces use strict TypeScript types and readonly arrays. No `any` types are used.

## Accessibility Review

- The command center uses a semantic section with `aria-labelledby`.
- Visual progress bars expose `progressbar`, `aria-valuemin`, `aria-valuemax`, and `aria-valuenow`.
- The SVG radar has an accessible role and label; its detailed values are also available as semantic definition-list content.
- Decorative trend marks are hidden from assistive technology.
- Text contrast and focus behavior inherit the existing command-center system.
- No pointer-only interactions are required to access dashboard information.
- Motion transitions are removed when `prefers-reduced-motion: reduce` is active.

## Responsive Review

- Desktop layouts use bounded multi-column grids for rapid scanning.
- Tablet breakpoints collapse the radar, signal, roadmap, and summary regions to single-column layouts.
- Mobile breakpoints collapse all metric, focus, growth, radar legend, and learning grids.
- Fixed-format radar and circular indicators use stable aspect ratios.
- Cards and grid tracks use `minmax(0, 1fr)` and `min-width: 0` to prevent horizontal overflow.
- Long labels and values wrap within their containers down to the required 320px width.

## Validation Results

- `npm.cmd run build`: Passed. TypeScript project build and Vite production build completed successfully.
- Phase 14 scoped ESLint command: Passed with no errors.
- `git diff --check`: Passed.
- `npm.cmd run dev -- --host 127.0.0.1 --port 5173`: Passed. Vite became ready and the application returned HTTP 200.
- `npm.cmd run lint`: Blocked by one pre-existing `react-hooks/set-state-in-effect` error in `src/features/voice/VoiceMode.tsx:74`. The Phase 14 brief explicitly prohibits modifying the Voice Portfolio System, so the restricted file was left unchanged. No lint errors originate from Phase 14 files.

## Future Enhancement Opportunities

- Derive local analytics automatically from project and skill datasets through an approved shared aggregation layer.
- Add historical snapshots when a local versioned data source is introduced.
- Add optional filtering by target role while preserving the executive-summary default.
- Introduce live repository analytics only in a future phase that explicitly approves external API access.
