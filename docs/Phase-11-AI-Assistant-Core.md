# Phase 11: AI Assistant Core

## Files Created

- `src/data/assistantKnowledge.json`
- `src/data/loaders/assistantLoader.ts`
- `src/types/Assistant.ts`
- `src/features/assistant/AIAssistantPanel.tsx`
- `src/features/assistant/AssistantHeader.tsx`
- `src/features/assistant/AssistantInput.tsx`
- `src/features/assistant/AssistantLauncher.tsx`
- `src/features/assistant/AssistantMessage.tsx`
- `src/features/assistant/QuickActions.tsx`
- `src/features/assistant/assistantEngine.ts`
- `src/features/assistant/index.ts`
- `src/features/assistant/assistant.css`
- `docs/Phase-11-AI-Assistant-Core.md`

## Files Modified

- `src/layouts/AppShell.tsx`
- `src/data/index.ts`
- `src/types/index.ts`

## Architecture Decisions

- Added a dedicated `features/assistant` module without changing previous feature internals.
- Added `assistantKnowledge.json` as the assistant knowledge source for intents, responses,
  suggested questions, and quick actions.
- Added strict TypeScript assistant models in `Assistant.ts`.
- Added `assistantLoader` following the existing async local JSON loader pattern.
- Mounted the assistant globally in `AppShell` after the boot sequence completes.
- Kept interaction local to the assistant feature with React state only.
- Avoided package, config, service, store, GitHub integration, and existing feature changes.
- Avoided AI APIs, LLM calls, external services, and network-backed responses.

## Knowledge Base Design

The knowledge base is structured around portfolio sections already implemented in earlier phases:

- About and identity
- Projects and AI projects
- Skills graph
- Journey timeline
- Achievement intelligence
- GitHub intelligence
- Recruiter Mode
- Contact and resume access

Each response contains a title, response type, summary, optional bullet list, optional links, and
optional action suggestions. UI components render only data supplied by the knowledge base.

## Intent Matching Strategy

The Phase 11 assistant uses a lightweight rule engine in `assistantEngine.ts`.

- Visitor input is normalized to lowercase alphanumeric tokens.
- Each intent carries keyword phrases in `assistantKnowledge.json`.
- Exact phrase matches receive the strongest score.
- Partial phrase matches receive weighted scores.
- Individual keyword token matches provide a fallback signal.
- Unknown or unsupported queries resolve to the help response.

The matching layer is intentionally isolated so a future AI provider can replace the resolver
without rewriting the assistant panel, message renderer, input, or knowledge loader.

## Assistant Experience

- Floating global launcher.
- Command-center panel with header, conversation area, quick actions, suggested questions, and
  input.
- Supports text responses, structured lists, links, and action suggestions.
- Quick actions include About, Projects, Skills, Achievements, GitHub, Contact, and Recruiter Mode.
- The assistant is keyboard accessible, uses native buttons and links, and exposes ARIA labels plus
  live conversation updates.
- Responsive styles support desktop, tablet, and 320px+ mobile layouts.
- Reduced-motion preferences disable hover movement and transition-heavy behavior.

## Validation Results

- `npm.cmd run dev -- --host 127.0.0.1 --port 5178`: Passed. Vite responded with HTTP 200.
- `npm.cmd run build`: Passed.
- `npm.cmd run lint`: Passed.

PowerShell blocked the `npm` script shim on this machine, so validation used `npm.cmd` for the same
package scripts.

## Future AI Upgrade Path

The assistant is prepared for a later provider-backed AI phase:

- Keep `AssistantKnowledge` as the structured portfolio context contract.
- Replace `resolveAssistantResponse` with a provider or retrieval orchestrator.
- Preserve the existing `AssistantResponse` render contract for text, lists, links, and actions.
- Keep quick actions and deterministic fallback behavior available as safety controls.
- Add external AI providers only in a future approved phase, outside the Phase 11 rule engine.

## Final Status

Phase 11 is complete. The portfolio now includes a globally available, rule-based Digital Assistant
powered only by the local portfolio knowledge base.
