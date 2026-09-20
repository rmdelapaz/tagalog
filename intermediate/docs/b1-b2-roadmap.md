# Tagalog Intermediate (B1–B2) — Roadmap & Build Guide

This folder (`/intermediate/`) is a **self-contained** intermediate course that
continues the beginner A1–A2 course at the repo root. It shares the same repo,
Netlify site, and visual design, but has its **own engine copy, data, glossary,
Anki deck, and namespaced localStorage** so beginner and intermediate progress
never collide.

- **Live URL (once content ships):** https://rays-tagalog.netlify.app/intermediate/
- **Beginner course:** repo root (`/`) — 16 lessons, complete A1–A2.

## Series structure

A two-tier series, one intermediate site, sequential lesson numbering:

- **B1 (Intermediate):** lessons 1–12 — *build first.*
- **B2 (Upper-Intermediate):** lessons 13–24 — *build after B1.*

### B1 syllabus (lessons 1–12)
1. **The Focus System Revisited** — actor & object focus reviewed; why focus drives naturalness.
2. **Locative Focus (-an)** — spotlight the place/recipient (e.g., *binuksan*, *pinuntahan*).
3. **Benefactive Focus (i-)** — doing things for someone (*ibinili*, *iniluto para kay…*).
4. **Causative Verbs (magpa-/ipa-)** — having things done (*nagpaluto*, *ipinagawa*).
5. **Ability & the Accidental (maka-/ma-)** — can / managed to / happened to (*nakakain, nasira*).
6. **Social & Reciprocal Verbs (maki-/mag-…-an)** — joining in; doing to each other (*makikain, mag-usap, magkita*).
7. **Aspect in Depth** — recently-completed (ka- + redup, *katatapos*), nuance, aspect across speech.
8. **Connecting Ideas** — conjunctions for connected discourse: kaya, kasi/dahil, pero/ngunit, habang, kahit, bago, matapos, samantala.
9. **Conditionals** — kung (if/whenever), kapag (when/whenever), sakali (in case).
10. **Relative Clauses & Rich Description** — na/-ng modification ("the person who…"), intensifiers napaka-, sobrang, masyadong, medyo.
11. **Opinions, Feelings & Reasons** — sa palagay/tingin ko, para sa akin; stating and justifying a view.
12. **Telling Stories** — narrating past experiences with time & sequence; noong, kanina, dati, tapos.

### B2 syllabus (lessons 13–24, planned)
13. **Register & Formality** — deep/formal vs. casual; navigating Taglish.
14. **Advanced Affixes & Nominalization** — pagka-, ka-…-an abstract nouns, pag- gerunds.
15. **Reported Speech** — *sabi niya na…*, *tinanong kung…*.
16. **Hypotheticals & Complex Conditionals** — *kung sakaling*, *sana* + past (unreal/wished-for).
17. **Cause, Result & Concession** — dahil dito, bunga nito, sa kabila ng, gayunpaman.
18. **Idioms & Figurative Language** — sawikain and common idioms.
19. **Opinion & Argument** — agree/disagree, hedge, persuade.
20. **Emotion & Attitude Particles** — nuance of yata, siguro, kaya, naman, pala.
21. **Formal Writing — Letters & Email** — structure, salutations, formal voice.
22. **Understanding Media** — news, songs, longer authentic-style texts.
23. **Abstract Topics** — society, environment, technology, culture.
24. **Fluency & Discourse** — cohesion, fillers, managing natural conversation.

Plus intermediate versions of the **companion pages** (build alongside/after the
lessons): `glossary.html`, `readings.html` (longer B1/B2 passages), `cheatsheet.html`
(optional), `cando.html` (B1 + B2 can-do descriptors), and a `build_anki.py`
producing a separate deck (new DECK_ID/MODEL_ID, own filename).

## Architecture & conventions (match these)

Files in this folder, referenced with absolute `/intermediate/...` paths:
- `learn.js` — a **namespaced copy** of the root engine. localStorage keys are
  `tagalog-int-progress`, `tagalog-int-known`, `tagalog-int-srs`,
  `tagalog-int-journal:<page>`. `TOTAL_LESSONS` is **derived automatically** from
  the `titles` map in `vocab-data.js` — no manual bumping.
- `vocab-data.js` — `window.TAGALOG_VOCAB` keyed "1"…"24" + a `titles` map. Each
  word `{ tl, pron, en, cat }`. Single source for review/quiz/flashcards/glossary/Anki.
- `lesson-content.js` — `window.TAGALOG_LESSON_INFO` keyed "1"…"24":
  `{ objectives:[], summary:[] }`.
- `nav.js` — intermediate nav (links within `/intermediate/` + "← Beginner").
- `index.html` — landing page with the B1/B2 grid (currently "Soon/Planned").
- Shared from root (do **not** copy): `/styles/main.css`, `/styles/shared.css`,
  `/styles/learn.css`, `/audio.js`, `/favicon.png`.

### Lesson file conventions (copy the beginner Lesson 10+ pattern)
- Filename: `tagalog_lesson_N.html` **inside `/intermediate/`** (the engine's
  `tagalog_lesson_(\d+)` regex reads N and looks up `TAGALOG_VOCAB[N]`).
- Head: shared stylesheets + optional Mermaid ESM for diagrams + inline `<style>`.
- Body: hero, teaching sections/tables, `.example-box`es, a `.practice-box` with
  interactive exercises using the **`(Answer: X)`** markup (learn.js auto-upgrades
  them to checkable inputs; `a|b` allows alternatives), cultural notes, footer-nav.
- Script tags at end (note the `/intermediate/` paths):
  ```html
  <script src="/intermediate/nav.js"></script>
  <script src="/audio.js"></script>
  <script src="/intermediate/vocab-data.js"></script>
  <script src="/intermediate/lesson-content.js"></script>
  <script src="/intermediate/learn.js"></script>
  ```
- footer-nav prev/next chains within `/intermediate/` (L1→L2→…); L1 prev links
  back to the beginner course; last lesson next → intermediate reader/glossary.

### To add a lesson (checklist)
1. Write `intermediate/tagalog_lesson_N.html` (pattern above; interactive exercises).
2. Add `TAGALOG_VOCAB["N"]` (categorized words) + the `titles["N"]` label in
   `intermediate/vocab-data.js`.
3. Add `TAGALOG_LESSON_INFO["N"]` (objectives + summary) in
   `intermediate/lesson-content.js`.
4. Replace the matching "Soon/Planned" card in `intermediate/index.html` with a
   real link; update the previous lesson's footer "next" link.
5. Verify locally (serve, browser-check the learning layer + exercises, zero
   console errors), then commit `--no-gpg-sign`, push, verify live.
6. When B1 (1–12) is shippable: add the **forward link** from the beginner course
   (root `index.html` / `cando.html`) and a **second hub entry** in
   `../rayhome/sites.json` ("Tagalog Intermediate (B1–B2)", url `/intermediate/`,
   folder `tagalog`), then run `build_updates.py`.

## Pedagogy
Follow the courseware authoring standard (objectives, journaling, growth-mindset
framing, summary) — same as the beginner course. Recycle A1–A2 vocabulary in B1
examples; introduce B1/B2 vocab in context. Keep Tagalog accurate (verify affix
forms and focus constructions).

## Status
- **Scaffold complete** (this commit): folder, namespaced engine, starter data,
  nav, landing page with roadmap, this doc.
- **Not started:** any B1 lesson content, companion pages, hub wiring, forward
  link from the beginner course. Build **B1 lessons 1–12 first.**
