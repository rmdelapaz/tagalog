# Tagalog Advanced (C1–C2) — Roadmap & Build Guide

This folder (`/advanced/`) is a **self-contained** advanced course that continues
the intermediate B1–B2 course at `/intermediate/`, which itself continues the
beginner A1–A2 course at the repo root. All three share the same repo, Netlify
site, and visual design, but each has its **own engine copy, data, glossary,
Anki deck, and namespaced localStorage** so progress never collides.

- **Live URL:** https://rays-tagalog.netlify.app/advanced/
- **Intermediate course:** `/intermediate/` — 24 lessons, complete B1–B2.
- **Beginner course:** repo root (`/`) — 16 lessons, complete A1–A2.

## Why 18 lessons (not 24)

The count was chosen from the material, not from symmetry with the intermediate
course. B1–B2 already teaches several topics other curricula park at C1 —
register/Taglish (B2 L13), nominalization (L14), reported speech (L15),
hypotheticals (L16), concession connectors (L17), idioms (L18), argument (L19),
attitude particles (L20), formal letters (L21), media (L22), abstract topics
(L23), discourse & fluency (L24). What remains that is genuinely *new* at C1/C2
is roughly eighteen substantial topics. Stretching to 24 would mean splitting
thin topics or re-treading B2; compressing to 12 would bundle separate grammar
systems into shared lessons. Advanced lessons therefore run **denser and longer**
than intermediate ones rather than more numerous — appropriate to the level.

## Series structure

- **C1 (Effective Operational Proficiency):** lessons 1–10.
- **C2 (Mastery):** lessons 11–18.

### C1 syllabus (lessons 1–10)
1. **The Complete Focus Inventory** — the focus types B1 never covered: instrument (`ipang-`/`pang-`), causal/reason (`ika-`), referential; the full paradigm and how to choose among six.
2. **paN- Morphophonemics & Deep Derivation** — nasal assimilation (`pan-`/`pam-`/`pang-`, `mang-`/`mam-`/`man-`), instrument nouns, `ma-…-an`, `pa-…-in`/`pa-…-an`, `maging`/`magkaroon`.
3. **The ay-Inversion & Marked Syntax** — `ay` in depth, pseudo-cleft (*Ang ginawa ko ay…*), fronting and topicalization, written vs. spoken order.
4. **Embedding & Subordination** — nested `na`/`-ng` clauses, `ang`-clauses as arguments, complementizers (`na` vs. `kung`), building and parsing long noun phrases.
5. **Evidentiality & Modality Gradients** — the certainty scale (`tiyak` → `marahil` → `tila`/`wari` → `baka` → `siguro`/`yata`), source-of-knowledge marking (`daw`/`raw`, `anang`, `ayon kay`), and stacking.
6. **Malalim na Tagalog** — deep/native vocabulary against Spanish and English loans; when depth reads as elegant and when it reads as pompous.
7. **Academic Tagalog** — defining, classifying, citing, hedging; the shape of a `sanaysay` and a `pananaliksik`.
8. **Legal, Government & News Register** — official style, headline grammar, the vocabulary of `batas`, `resolusyon`, and `balita`.
9. **Rhetoric & Persuasion** — argumentation beyond B2's moves: rhetorical questions, parallelism, concession-then-refutation, appeals.
10. **Regional Variation** — Batangas, Bulacan and Southern Tagalog features; influence from other Philippine languages; understanding non-Manila speech.

### C2 syllabus (lessons 11–18)
11. **Literary Tagalog — Tula** — `tugma at sukat`, Balagtas and the `awit`/`korido` tradition, reading verse.
12. **Prose & Archaic Forms** — classical prose, obsolete pronouns and particles, old orthography, reading pre-war Tagalog.
13. **Salawikain & Bugtong** — proverbs and riddles: their structures, their meanings, and how they are actually used.
14. **Talinghaga — Figurative Depth** — metaphor systems, euphemism, `pahiwatig` and the art of indirection.
15. **Translation Craft & Untranslatables** — English↔Tagalog problems: focus mismatch, aspect, and words like `kilig`, `tampo`, `gigil`, `utang na loob`.
16. **Editing & Style** — `ng` vs. `nang`, `rin`/`din`, `kung`/`kapag`, agreement, KWF conventions, proofreading your own Tagalog.
17. **Oratory — Talumpati** — speech structure and delivery; ceremonial, commemorative and persuasive registers.
18. **Language, Identity & Mastery** — the Filipino-vs-Tagalog question, KWF and language policy, diaspora Tagalog, slang layers, and a self-directed maintenance plan.

Plus advanced versions of the **companion pages**: `glossary.html`,
`readings.html` (authentic-style C1/C2 passages), `cheatsheet.html`,
`cando.html` (C1 + C2 can-do descriptors), and a `build_anki.py` producing a
separate deck (its own DECK_ID/MODEL_ID and filename).

## Architecture & conventions (match these)

Files in this folder, referenced with absolute `/advanced/...` paths:
- `learn.js` — a **namespaced copy** of the intermediate engine. localStorage keys
  are `tagalog-adv-progress`, `tagalog-adv-known`, `tagalog-adv-srs`,
  `tagalog-adv-journal:<page>`. `TOTAL_LESSONS` is **derived automatically** from
  the `titles` map in `vocab-data.js` — no manual bumping.
- `vocab-data.js` — `window.TAGALOG_VOCAB` keyed "1"…"18" + a `titles` map. Each
  word `{ tl, pron, en, cat }`. Single source for review/quiz/flashcards/glossary/Anki.
- `lesson-content.js` — `window.TAGALOG_LESSON_INFO` keyed "1"…"18":
  `{ objectives:[], summary:[] }`.
- `nav.js` — advanced nav (links within `/advanced/` + "← Intermediate").
- `index.html` — landing page with the C1/C2 grid.
- Shared from root (do **not** copy): `/styles/main.css`, `/styles/shared.css`,
  `/styles/learn.css`, `/audio.js`, `/favicon.png`.

### Lesson file conventions
- Filename: `tagalog_lesson_N.html` **inside `/advanced/`** (the engine's
  `tagalog_lesson_(\d+)` regex reads N and looks up `TAGALOG_VOCAB[N]`).
- Head: shared stylesheets + optional Mermaid ESM for diagrams + inline `<style>`.
- Body: hero, teaching sections/tables, `.example-box`es, a `.practice-box` with
  interactive exercises using the **`(Answer: X)`** markup, cultural notes,
  footer-nav.
- **Gotcha:** learn.js only upgrades a `<li>` to a checkable input when it has
  **both** `_____` and `(Answer: X)`. An item with only the answer marker leaves
  a raw "(Answer: …)" visible on the page.
- Script tags at the end (note the `/advanced/` paths):
  ```html
  <script src="/advanced/nav.js"></script>
  <script src="/audio.js"></script>
  <script src="/advanced/vocab-data.js"></script>
  <script src="/advanced/lesson-content.js"></script>
  <script src="/advanced/learn.js"></script>
  ```
- footer-nav prev/next chains within `/advanced/`; L1 prev links back to the
  intermediate course; L18 next → `/advanced/cando.html`.

### To add or edit a lesson (checklist)
1. Write/edit `advanced/tagalog_lesson_N.html` (pattern above).
2. Add `TAGALOG_VOCAB["N"]` + the `titles["N"]` label in `advanced/vocab-data.js`.
3. Add `TAGALOG_LESSON_INFO["N"]` (objectives + summary) in
   `advanced/lesson-content.js`.
4. Update the card in `advanced/index.html` and the neighbouring lessons' footer nav.
5. Re-run `python3 build_anki.py` if vocabulary changed.
6. Verify locally (serve, check the learning layer + exercises, zero console
   errors), commit `--no-gpg-sign`, push, verify live.

## Pedagogy
Follows Ray's courseware authoring standard — objectives, journaling,
growth-mindset framing, summary. Recycle B1–B2 grammar in C1 examples; at C2,
examples should look like real Tagalog a native reader would meet (verse, law,
news, proverbs) rather than constructed classroom sentences.
