# Vocabulary Art Guide — Tagalog course

Manga-style vocabulary illustrations, generated in ChatGPT and shipped per-course
(self-contained; no cross-origin references). This file is the source of truth for
**how images are made, sized, named, and wired** so the look stays consistent as the
set grows past the pilot.

Status: **pilot = Food & drink** (Lessons 6 & 9). Wiring goes live after the pilot
images are approved.

---

## 1. Sizing

Two render contexts set the ceiling (see `styles/learn.css`):

| Context | Rendered width | Source |
|---|---|---|
| Review grid card (`.lx-word`) | `minmax(210px, 1fr)` → ~210–290px desktop; 2-up (~160px) on phones | learn.css `.lx-vocab-grid` |
| Flashcard modal (`.lx-flash-card`) | max-width 460px → ~410px interior, 190px min-height | learn.css `.lx-flash` |

Largest display ≈ **410 CSS px**. Therefore:

- **Generate 1024×1024 (square)** in ChatGPT — native size; square fits both contexts.
- **Ship 512×512 WebP** (2× the ~256px slot → crisp on retina, ~20–40 KB each).
- **Archive the 1024 PNG source** in gitignored `_art_src/vocab/` (ship small, keep originals — same pattern as the Mirros asset workflow).
- **No text baked into the image** — the card supplies `tl` / `pron` / `en`.

---

## 2. Style bible (paste before EVERY word, verbatim)

> **STYLE (keep identical every time):** A clean modern anime/manga illustration,
> cel-shaded with bold even black outlines of consistent medium weight. Two-tone soft
> cel shading, no photorealism, no heavy gradients. Bright, cheerful, lightly saturated
> colors. Soft light coming from the top-left. **Background: a single flat pastel
> warm-cream tint (#FFF3E0) with one subtle soft radial highlight behind the subject —
> no scene, no patterns, no gradient bands.** **Composition: one single subject,
> centered, fully visible, with about 10% empty margin on all sides, square 1:1 framing,
> eye-level straight-on or slight 3/4 angle.** No text, no letters, no numbers, no
> labels, no speech bubbles, no watermark, no border or frame. Simple, appetizing,
> friendly. **Output a square 1024×1024 image.**
>
> **SUBJECT:** ‹subject line goes here›

### Consistency workflow (matters most)

1. **Lock the look first:** generate a 3-image trial (e.g. `adobo`, `mangga`,
   `maanghang`) and approve it before running the rest.
2. From then on, prepend one line to every prompt:
   *"Same manga style, palette, line weight and cream background as the previous images."*
   This reference-to-prior is what holds consistency across a long batch.
3. **One image per ChatGPT turn — never parallel tabs.** Review each; regenerate misses.
4. Keep the flat cream background (#FFF3E0) fixed for the entire set so cards read
   consistently in both light and dark themes.
5. **Set Thinking effort to Medium** (the composer's effort slider). On **High** the
   model stalls for minutes on "Thinking" before it ever calls the image tool; Medium
   produces each image in ~50s. Note the effort slider resets to the account default
   (High) on a page reload — re-set it to Medium after any reload.

**Pilot trial (2026-09-20):** adobo, mangga, maanghang generated and confirmed
consistent on Medium effort. Trials saved in `_art_src/vocab/*_trial.png`.

---

## 3. What to illustrate

**Concrete, picturable words only** — nouns and clear verbs. Skip function words
(conjunctions, negators, answering words, most adverbs, courtesy phrases). Taste/quality
adjectives are illustrated **symbolically** via a single representative object.

Roll-out order after the pilot (all concrete categories): Animals, Family, Clothing,
Colors, Body & Health, common action verbs, then remaining Everyday nouns.

---

## 4. Pilot prompt list — Food & drink (Lessons 6 & 9)

19 entries, **18 unique** (`ulam` appears in L6 and L9 → one image). Paste
style bible + the SUBJECT line, one image per turn. Filename = the slug column.

### Concrete food nouns (10)

| tl | en | SUBJECT line | slug |
|---|---|---|---|
| adobo | filipino dish | a bowl of Filipino chicken adobo, dark savory sauce, garnish, appetizing | `adobo` |
| sinigang | sour soup | a steaming bowl of Filipino sinigang sour soup with vegetables and shrimp | `sinigang` |
| ulam | main dish / viand | a plated savory Filipino main dish (viand) beside a small mound of rice | `ulam` |
| kanin | rice | a bowl of steaming white rice | `kanin` |
| gulay | vegetable | a small colorful pile of fresh mixed vegetables | `gulay` |
| isda | fish | a single whole fresh fish on a plate | `isda` |
| manok | chicken | a whole roasted/cooked chicken on a plate | `manok` |
| mangga | mango | one ripe yellow mango, whole, with a leaf | `mangga` |
| kape | coffee | a warm cup of coffee with a little steam, on a saucer | `kape` |
| inumin | drink (beverage) | a tall glass of a cold refreshing beverage with a straw | `inumin` |

### Taste adjectives — symbolic object (8)

| tl | en | SUBJECT line | slug |
|---|---|---|---|
| masarap | delicious | a delicious dish with rising steam and small sparkle marks around it | `masarap` |
| matamis | sweet | a sweet dessert (leche flan slice) with a drizzle of syrup | `matamis` |
| maasim | sour | a bright halved calamansi/lime, juicy, with small sour sparkle marks | `maasim` |
| maalat | salty | a simple classic salt shaker (glass body, metal top with holes) | `maalat` |
| maanghang | spicy | a red chili pepper (siling labuyo) with a subtle warm heat glow | `maanghang` |
| malansa | fishy smell | a raw fish with wavy stink lines + a small scrunched nose wrinkling in disgust beside it | `malansa` |
| malinamnam | savory / flavorful | a rich savory stew in a bowl with steam, deep appetizing color | `malinamnam` |
| busog | full (from eating) | a cheerful chubby man sitting cross-legged, patting his round full tummy with both hands, big satisfied grin | `busog` |

---

## 5. Naming & drop-in spec

- **Source (gitignored):** save the 1024 PNG → `_art_src/vocab/<slug>_1024.png`
- **Ship asset:** downscale to 512×512 WebP → `images/vocab/<slug>.webp`
- **Cache-busting (at wire-up):** build appends a short content hash →
  `images/vocab/adobo.a1b2c3.webp`; the hash is stored in the `img` field.
- **Data field (added at wire-up, backward-compatible):** each `vocab-data.js` entry
  gets `"img": "adobo"` (slug only; `learn.js` resolves path + hash). Entries without
  `img` render exactly as today.
- **Render points to change at wire-up:** `cardHTML()` (review grid) and `renderCard()`
  (flashcard modal) in `learn.js`, plus a small image-slot rule in `styles/learn.css`.
- **Budget:** ~18 files, ~20–40 KB each → well under 1 MB for the pilot category.

### Convert command (Pillow — no cwebp/ffmpeg needed on this box)

```bash
# from tagalog/ — 1024 PNG sources -> 512 WebP ship assets
python3 - <<'PY'
import glob, os
from PIL import Image
os.makedirs("images/vocab", exist_ok=True)
for f in glob.glob("_art_src/vocab/*_1024.png"):
    slug = os.path.basename(f)[:-len("_1024.png")]
    Image.open(f).convert("RGB").resize((512,512), Image.LANCZOS)\
        .save(f"images/vocab/{slug}.webp", "WEBP", quality=82, method=6)
PY
```

## WIRED (pilot done, 2026-09-20)

The Food & drink pilot is fully wired and verified locally (Lessons 6 & 9):

- **Sources:** `_art_src/vocab/<slug>_1024.png` (18, gitignored) — downloaded full-res
  (1254px) via the ChatGPT lightbox Save button.
- **Shipped:** `images/vocab/<slug>.webp` (18, 512px, ~458 KB total).
- **Data:** each Food entry in `vocab-data.js` has `"img": "<slug>"` (19 entries incl.
  `ulam` in both L6 and L9). Entries without `img` render unchanged.
- **Render:** `learn.js` has a `vocabImg(w)` helper + `VOCAB_IMG_VER` constant; called
  in `cardHTML()` (review grid, image above the word) and `renderCard()` (flashcard
  front, image above the word). CSS: `.lx-word-img` / `.lx-flash-img` in `styles/learn.css`.
- **Cache strategy (pilot):** path is `/images/vocab/<slug>.webp?v=<VOCAB_IMG_VER>`.
  To refresh any image, overwrite the WebP and bump `VOCAB_IMG_VER` in `learn.js`.
  (Simpler than per-file content hashes; revisit if the set grows to many
  independently-changing files.)
- To scale to other categories, repeat the generate → download → convert → add `img`
  flow; no code changes needed.

### Roll-out progress
- **Food & Drink** (L6, L9) — 18 illustrations — committed `6a18fe3`.
- **Animals** (L1) — 3 new (aso, oso, pusa) + `isda` reused — committed `cf37c9f`.
- **Family** (L5, L9) — 16 roles — committed `1bd655a`.
  - **Scoping rule for people-heavy categories:** illustrate only roles with a clear
    visual (age/gender/grouping/cultural cue). Skip terms an image can't distinguish
    (e.g. kapatid "sibling", pinsan "cousin", pamangkin, the in-laws, kababayan).
    Use Filipino subjects and role cues (tita w/ pasalubong, ninong in barong).
- **Body & Health** (L16) — 16 (all concrete) — committed `49293c8`.
  - Body parts as clear close-ups (mata=eyes, bibig=mouth, tenga=ear profile,
    kamay=hand, paa=foot, tiyan=child holding belly). Health terms need
    **distinguishing cues** so near-synonyms don't collide: sakit=person in bed,
    lagnat=upright with ice pack + thermometer + flushed cheeks, masakit=wincing
    clutching a spot; plus ubo (cough), sipon (tissue), gamot (bottle+pills),
    doktor (white coat/stethoscope), ospital (building + red cross + ambulance).
- Slugs are shared across lessons/categories, so an image made once is reused
  everywhere the word appears (e.g. `isda` in both Food and Animals).
- Not yet: git push + Netlify deploy (Ray pushes via SSH).
