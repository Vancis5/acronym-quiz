# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Filipino IT students actively cramming for the PhilNITS (Philippine NITS) national IT exam. They are under time pressure and need to memorize 118 standardized acronyms quickly. They study in short, focused sessions — on mobile or desktop.

## Product Purpose

A gamified speed-run quiz that drills all 118 PhilNITS acronyms through fill-in-the-blank and tap-to-choose mechanics. Success means a student can recall any acronym cold on exam day. The game loop — instant feedback, streak multipliers, confetti bursts, hint system, and a leaderboard — turns rote memorization into dopamine-driven repetition.

## Positioning

The only app built specifically for the PhilNITS acronym set, with a live edge leaderboard, category filtering, streak scoring, and a dictionary mode — not a generic flashcard tool.

## Operating Context

Short study sessions before the exam. Mobile-first usage (phones), but also desktop. App is used in transit, at home, or in study halls. No authentication required. Progress is persisted in localStorage. Leaderboard is global via Cloudflare D1.

## Capabilities and Constraints

- 118 acronyms across categories: Networking, Security, Hardware, Management, Software, General
- Two input modes: type (letter-by-letter boxes) and tap (4-choice MCQ)
- Streak system with multipliers (1x / 1.5x / 2x / 3x at 3 / 5 / 10 streak)
- Hint system: length, then first letter (costs points)
- Mastery tracking in localStorage
- Global leaderboard via POST to /api/leaderboard (Cloudflare D1)
- Audio feedback (sound effects, can be toggled)
- Confetti on correct answers
- SvelteKit + Cloudflare Workers

## Brand Commitments

None confirmed beyond the name "PhilNITS Acronym Blitz". Visual direction: stark, near-monochrome, typography-driven, almost brutalist. Remove glows, gradients, and cyan/violet accent noise.

## Evidence on Hand

- 118 acronyms in acronyms data file
- Working game loop, leaderboard API, audio, confetti

## Product Principles

1. Speed over decoration — every visual choice accelerates the memorization loop.
2. Feedback is the interface — correct/wrong states and streaks are the primary communication.
3. No friction — the next card must be instantly reachable.
4. Quiet until earned — color and energy appear only when the streak warrants it.
5. Honest difficulty — hints cost points; mastery is earned, not given.
