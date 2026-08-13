# PhilNITS Acronym Blitz — Project Context

> A gamified flashcard quiz app for mastering all 118 PhilNITS IT Passport exam acronyms.
> Built to feel like a speed run, not a study session.

---

## What We're Building

A **mobile-first web app** that turns rote acronym memorization into an addictive, high-dopamine game loop. The target user is a Filipino IT student cramming for the PhilNITS (JITEC) IT Passport exam. The core insight: the exam has ~118 acronyms that are pure pattern recognition — perfect for gamified flashcard mechanics.

**Core experience**: fill-in-the-blank speed runs with instant feedback, streaks, score multipliers, and a leaderboard — all in a slick dark-mode UI.

---

## Tech Stack

| Layer | Tech |
|---|---|
| Framework | SvelteKit (Svelte 5 with runes) |
| Adapter | Cloudflare Pages (`@sveltejs/adapter-cloudflare`) |
| Runtime | Cloudflare Workers (edge, D1 for leaderboard) |
| Build | Vite 8 |
| Types | TypeScript |
| Icons | Lucide Svelte |
| Styling | Vanilla CSS (CSS custom properties / design tokens) |

---

## Project Structure

```
acronym-quiz/
├── src/
│   ├── app.css                  # Global styles, design tokens, CSS vars
│   ├── app.html                 # HTML shell
│   ├── lib/
│   │   ├── components/
│   │   │   ├── GameCard.svelte       # Core quiz card — question, answer input, feedback
│   │   │   ├── Navbar.svelte         # Score, streak, multiplier display + nav actions
│   │   │   ├── LeaderboardSheet.svelte  # Bottom sheet — edge leaderboard via D1
│   │   │   └── AcronymListSheet.svelte  # Bottom sheet — full acronym dictionary + mastery status
│   │   ├── data/
│   │   │   └── acronyms.ts       # Static data: all 118 PhilNITS acronyms
│   │   ├── audio.ts              # Web Audio API — sound effects (correct, streak, bonus)
│   │   └── index.ts              # Lib barrel exports
│   └── routes/
│       ├── +layout.svelte        # Root layout
│       ├── +page.svelte          # Main game page — state orchestration
│       └── api/
│           └── leaderboard/      # Edge API route for D1 leaderboard reads/writes
├── research/
│   └── gamification_ux_research.md  # UX/gamification research notes
├── migrations/                   # D1 SQL migrations (leaderboard schema)
├── wrangler.jsonc                # Cloudflare Workers / Pages config
└── CONTEXT.md                   # This file
```

---

## Core Game Loop

```
Pick acronym from unmastered pool
        ↓
Show fill-in-the-blank card
        ↓
User types answer → instant feedback (correct/wrong)
        ↓
  Correct → streak++, score += points × multiplier, mark mastered
  Wrong   → streak = 0
        ↓
Next card (avoids repeat, prioritizes unmastered)
```

**Multipliers** (streak-based):
- 3+ streak → 1.5×
- 5+ streak → 2×
- 10+ streak → 3×

**Mastery** is persisted in `localStorage` (`philnits_mastered`) so it survives sessions.

---

## State (main page)

| Variable | Type | Purpose |
|---|---|---|
| `currentItemIndex` | `number` | Index into ACRONYMS array |
| `score` | `number` | Session score (affected by multiplier) |
| `streak` | `number` | Current correct answer streak |
| `maxStreak` | `number` | Peak streak this session (for leaderboard) |
| `totalAnswered` | `number` | Total questions answered |
| `correctAnswered` | `number` | Correct answers count |
| `masteredIds` | `Set<number>` | IDs of mastered acronyms (persisted) |
| `accuracy` | derived | `correctAnswered / totalAnswered * 100` |
| `multiplier` | derived | Based on current streak |

---

## Key Design Decisions

### Gamification Philosophy
We lean **White Hat** (intrinsic motivation) over Black Hat mechanics. No lives/hearts, no punishment for wrong answers beyond breaking the streak. The loop should feel like mastery, not stress.

See [`research/gamification_ux_research.md`](./research/gamification_ux_research.md) for full UX research.

### Mastery System
- Mastered acronyms are deprioritized (drawn from unmastered pool first)
- When all are mastered, falls back to full pool (infinite replay)
- Mastery persists across sessions via localStorage

### Edge Leaderboard
- Stored in Cloudflare D1 (SQLite at the edge)
- Submitted at end of session (score + maxStreak + accuracy)
- Displayed as a bottom sheet — no page navigation

### Audio
- Web Audio API (no external sound files)
- Synthesized tones for correct answer, streak bonus sounds at 5/10/15
- Designed to be satisfying without being annoying

---

## UX Goals (from research)

1. **Frictionless** — zero config, start playing immediately
2. **Flow state** — difficulty balanced by mastery tracking (unmastered first)
3. **Immediate feedback** — answer confirmed before advancing
4. **Earned celebrations** — streak milestones trigger audio/visual reward
5. **No punishment UX** — wrong answers reset streak, nothing else. No lives.

---

## What's Next / Open TODOs

- [ ] Hint system (Hint 1: category nudge → Hint 2: first letter → Hint 3: full expansion)
- [ ] Streak milestone celebrations (confetti burst at 5/10/15/20)
- [ ] Adaptive difficulty — surface weak spots (wrong answers resurface sooner)
- [ ] Session summary screen (XP earned, accuracy, mastery delta)
- [ ] PWA support (offline, installable)
- [ ] Onboarding flow for first-time users
