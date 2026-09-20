/* vocab-data.js — INTERMEDIATE (B1–B2) course vocabulary.
 *
 * window.TAGALOG_VOCAB holds per-lesson review words keyed "1", "2", …,
 * plus a "titles" map of short lesson labels. Each word is
 * { tl, pron, en, cat }. This is the single source for the review grid,
 * self-check quiz, flashcards, glossary, and Anki deck — safe to hand-edit.
 *
 * Add lessons as B1 content is authored, e.g.:
 *   "1": [ { "tl": "...", "pron": "...", "en": "...", "cat": "..." }, ... ]
 * and register the label under "titles". Keep this namespaced separately
 * from the beginner course (its own file, its own localStorage).
 */
window.TAGALOG_VOCAB = {
  "titles": {
    "1": "The Focus System Revisited"
    // "2": "Locative Focus (-an)",
    // ...
  },
  "1": [
    { "tl": "focus", "pron": "FOH-kus", "en": "focus — which noun the verb spotlights", "cat": "Grammar terms" },
    { "tl": "aktor", "pron": "AK-tor", "en": "actor / the doer of the action", "cat": "Grammar terms" },
    { "tl": "layon", "pron": "LAH-yon", "en": "object — the thing acted upon", "cat": "Grammar terms" },
    { "tl": "pananda", "pron": "pah-nan-DAH", "en": "marker (ang / ng / sa)", "cat": "Grammar terms" },
    { "tl": "ang", "pron": "ang", "en": "focus/subject marker (spotlight)", "cat": "Markers" },
    { "tl": "ng", "pron": "nang", "en": "non-focus marker (of / by)", "cat": "Markers" },
    { "tl": "kumain", "pron": "koo-MAH-in", "en": "to eat (actor focus, -um-)", "cat": "Actor focus (-um-/mag-)" },
    { "tl": "uminom", "pron": "oo-MEE-nom", "en": "to drink (actor focus, -um-)", "cat": "Actor focus (-um-/mag-)" },
    { "tl": "umalis", "pron": "oo-mah-LEES", "en": "to leave (actor focus, -um-)", "cat": "Actor focus (-um-/mag-)" },
    { "tl": "bumili", "pron": "boo-MEE-lee", "en": "to buy (actor focus, -um-)", "cat": "Actor focus (-um-/mag-)" },
    { "tl": "magluto", "pron": "mag-LOO-toh", "en": "to cook (actor focus, mag-)", "cat": "Actor focus (-um-/mag-)" },
    { "tl": "maglinis", "pron": "mag-LEE-nees", "en": "to clean (actor focus, mag-)", "cat": "Actor focus (-um-/mag-)" },
    { "tl": "mag-aral", "pron": "mag-AH-ral", "en": "to study (actor focus, mag-)", "cat": "Actor focus (-um-/mag-)" },
    { "tl": "kainin", "pron": "kah-EE-nin", "en": "to eat it (object focus, -in)", "cat": "Object focus (-in)" },
    { "tl": "kinain", "pron": "kee-NAH-in", "en": "ate it (object focus, completed)", "cat": "Object focus (-in)" },
    { "tl": "binili", "pron": "bee-NEE-lee", "en": "bought it (object focus, completed)", "cat": "Object focus (-in)" },
    { "tl": "binasa", "pron": "bee-NAH-sah", "en": "read it (object focus, completed)", "cat": "Object focus (-in)" },
    { "tl": "ininom", "pron": "ee-NEE-nom", "en": "drank it (object focus, completed)", "cat": "Object focus (-in)" },
    { "tl": "definite", "pron": "DEF-i-nit", "en": "definite — a specific, known 'the' object", "cat": "Choosing focus" },
    { "tl": "indefinite", "pron": "in-DEF-i-nit", "en": "indefinite — a vague 'a / some' object", "cat": "Choosing focus" },
    { "tl": "mangga", "pron": "MANG-gah", "en": "mango", "cat": "Example words" },
    { "tl": "tinapay", "pron": "tee-NAH-pie", "en": "bread", "cat": "Example words" },
    { "tl": "libro", "pron": "LEE-broh", "en": "book", "cat": "Example words" },
    { "tl": "liham", "pron": "LEE-ham", "en": "letter", "cat": "Example words" },
    { "tl": "gamot", "pron": "gah-MOT", "en": "medicine", "cat": "Example words" }
  ]
};
