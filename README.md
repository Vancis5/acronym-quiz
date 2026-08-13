# acronym blitz

a gamified flashcard quiz for mastering all 118 philnits it passport exam acronyms. built to feel like a speed run so that it doesn't feel demanding to keep acronyms in mind

made from sir tse's acronym list in the philnits facebook group

## stack

- **sveltekit** (svelte 5 + runes) — cloudflare pages adapter
- **cloudflare workers + d1** — edge runtime, sqlite leaderboard
- **typescript**, vanilla css, lucide icons

## how it works

fill-in-the-blank speed runs. type the full acronym expansion, get instant feedback. build streaks for score multipliers. mastery is tracked in `localStorage` so it persists across sessions.

**multipliers:**
- 3+ streak → 1.5×
- 5+ streak → 2×
- 10+ streak → 3×

unmastered acronyms are prioritized. once you've mastered all 118, it loops back.

## dev

```sh
npm install
npm run dev
```

**preview with cloudflare workers:**

```sh
npm run preview
```

**build:**

```sh
npm run build
```

## features

- fill-in-the-blank quiz — 118 philnits acronyms
- streak multiplier system
- mastery tracking (localStorage)
- edge leaderboard (cloudflare d1)
- synthesized audio feedback (web audio api, no external files)
- mobile-first dark ui
