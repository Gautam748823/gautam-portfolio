# Phase 12: Terminal Mode

## Files Created

- `src/data/terminalCommands.json`
- `src/data/loaders/terminalLoader.ts`
- `src/types/Terminal.ts`
- `src/features/terminal/TerminalMode.tsx`
- `src/features/terminal/TerminalLauncher.tsx`
- `src/features/terminal/TerminalWindow.tsx`
- `src/features/terminal/TerminalHistory.tsx`
- `src/features/terminal/TerminalInput.tsx`
- `src/features/terminal/commandEngine.ts`
- `src/features/terminal/terminal.css`
- `src/features/terminal/index.ts`
- `docs/Phase-12-Terminal-Mode.md`

## Files Modified

- `src/layouts/AppShell.tsx`
- `src/data/index.ts`
- `src/types/index.ts`

## Architecture Decisions

- Added a dedicated `features/terminal` module without changing existing feature behavior.
- Added `terminalCommands.json` as the local command source for responses and suggestions.
- Added strict TypeScript terminal models in `Terminal.ts`.
- Added `terminalLoader` using the existing async local JSON loader pattern.
- Mounted Terminal Mode globally through `AppShell`.
- Kept terminal state in memory only, with no localStorage, backend, API, database, analytics, or
  package changes.
- Positioned the terminal launcher bottom-left so it coexists with the AI Assistant bottom-right.

## Terminal Engine Design

- `commandEngine.ts` normalizes command input with lowercase trimming and collapsed spacing.
- Commands resolve case-insensitively, so `about`, `ABOUT`, and `About` execute identically.
- Unknown commands return the typed fallback response from `terminalCommands.json`.
- The `clear` command returns a typed clear signal that clears session history without refreshing
  the page.
- Related command chips execute commands immediately through the same command path as typed input.

## Accessibility Review

- Launcher and close controls are native buttons with ARIA labels and expanded state.
- Terminal window is labeled with `aria-labelledby`.
- Command history uses readable articles and an `aria-live` response area.
- Input uses a screen-reader label.
- Focus-visible styles are applied to launcher, input, run button, close button, and command chips.
- Close returns focus to the launcher.
- Reduced-motion preferences disable hover movement and transition-heavy effects.

## Responsive Review

- Desktop uses a compact floating operations console.
- Tablet and mobile keep the terminal constrained to the viewport.
- At narrow widths the input action stacks below the command field.
- Response text wraps and uses preformatted line breaks without horizontal viewport overflow.
- The terminal supports 320px+ widths.

## Validation Results

- `npm.cmd run dev -- --host 127.0.0.1 --port 5179`: Passed. Vite responded with HTTP 200.
- `npm.cmd run build`: Passed.
- `npm.cmd run lint`: Passed.

PowerShell blocks the `npm` script shim on this machine, so validation used `npm.cmd` for the same
package scripts.

## Final Status

Phase 12 is complete. The portfolio now includes a local, data-driven Portfolio Terminal Layer that
works alongside the AI Assistant.
