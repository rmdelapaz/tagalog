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
    "1": "The Focus System Revisited",
    "2": "Locative Focus (-an)",
    "3": "Benefactive Focus (i-)",
    "4": "Causative Verbs (magpa-/ipa-)"
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
  ],
  "2": [
    { "tl": "focus sa lugar", "pron": "FOH-kus sa LOO-gar", "en": "locative focus — spotlights the place/recipient", "cat": "Grammar terms" },
    { "tl": "lugar", "pron": "LOO-gar", "en": "place / location", "cat": "Grammar terms" },
    { "tl": "tumatanggap", "pron": "too-mah-tang-GAP", "en": "recipient — the one who receives", "cat": "Grammar terms" },
    { "tl": "sa", "pron": "sa", "en": "location/direction marker (at / to / on)", "cat": "Markers" },
    { "tl": "buksan", "pron": "book-SAN", "en": "open it (locative, -an)", "cat": "Locative verbs (-an)" },
    { "tl": "binuksan", "pron": "bee-nook-SAN", "en": "opened it (completed)", "cat": "Locative verbs (-an)" },
    { "tl": "sarhan", "pron": "sar-HAN", "en": "close it (locative, -an)", "cat": "Locative verbs (-an)" },
    { "tl": "puntahan", "pron": "poon-tah-HAN", "en": "go to (a place)", "cat": "Locative verbs (-an)" },
    { "tl": "pinuntahan", "pron": "pee-noon-tah-HAN", "en": "went to (completed)", "cat": "Locative verbs (-an)" },
    { "tl": "bigyan", "pron": "big-YAN", "en": "give to (someone) — recipient in focus", "cat": "Locative verbs (-an)" },
    { "tl": "binigyan", "pron": "bee-nig-YAN", "en": "gave to (completed)", "cat": "Locative verbs (-an)" },
    { "tl": "lagyan", "pron": "lag-YAN", "en": "put on/into (a place)", "cat": "Locative verbs (-an)" },
    { "tl": "nilagyan", "pron": "nee-lag-YAN", "en": "put on/into (completed)", "cat": "Locative verbs (-an)" },
    { "tl": "hugasan", "pron": "hoo-gah-SAN", "en": "wash (dishes/surfaces)", "cat": "Locative verbs (-an)" },
    { "tl": "hinugasan", "pron": "hee-noo-gah-SAN", "en": "washed (completed)", "cat": "Locative verbs (-an)" },
    { "tl": "linisan", "pron": "lee-nee-SAN", "en": "clean (a place)", "cat": "Locative verbs (-an)" },
    { "tl": "sulatan", "pron": "soo-lah-TAN", "en": "write to (someone)", "cat": "Locative verbs (-an)" },
    { "tl": "pinto", "pron": "peen-TOH", "en": "door", "cat": "Example words" },
    { "tl": "palengke", "pron": "pah-LENG-keh", "en": "market", "cat": "Example words" },
    { "tl": "pinggan", "pron": "ping-GAN", "en": "plate / dishes", "cat": "Example words" },
    { "tl": "asukal", "pron": "ah-SOO-kal", "en": "sugar", "cat": "Example words" },
    { "tl": "kape", "pron": "kah-PEH", "en": "coffee", "cat": "Example words" },
    { "tl": "pera", "pron": "PEH-rah", "en": "money", "cat": "Example words" }
  ],
  "3": [
    { "tl": "focus sa pakinabang", "pron": "FOH-kus sa pah-kee-nah-BANG", "en": "benefactive focus — spotlights the beneficiary", "cat": "Grammar terms" },
    { "tl": "pakinabang", "pron": "pah-kee-nah-BANG", "en": "benefit / gain", "cat": "Grammar terms" },
    { "tl": "benepisyaryo", "pron": "beh-neh-pis-YAR-yoh", "en": "beneficiary — the one you do it for", "cat": "Grammar terms" },
    { "tl": "para kay", "pron": "PAH-rah kai", "en": "for (before a personal name)", "cat": "Analytic 'for'" },
    { "tl": "para sa", "pron": "PAH-rah sa", "en": "for (before a common noun / pronoun)", "cat": "Analytic 'for'" },
    { "tl": "ibili", "pron": "ee-BEE-lee", "en": "buy for (someone) — benefactive, i-", "cat": "Benefactive verbs (i-)" },
    { "tl": "ibinili", "pron": "ee-bee-NEE-lee", "en": "bought for (completed)", "cat": "Benefactive verbs (i-)" },
    { "tl": "iluto", "pron": "ee-LOO-toh", "en": "cook for (someone)", "cat": "Benefactive verbs (i-)" },
    { "tl": "iniluto", "pron": "ee-nee-LOO-toh", "en": "cooked for (completed)", "cat": "Benefactive verbs (i-)" },
    { "tl": "ikuha", "pron": "ee-KOO-hah", "en": "get / fetch for (someone)", "cat": "Benefactive verbs (i-)" },
    { "tl": "ikinuha", "pron": "ee-kee-NOO-hah", "en": "got for (completed)", "cat": "Benefactive verbs (i-)" },
    { "tl": "idala", "pron": "ee-dah-LAH", "en": "bring for (someone)", "cat": "Benefactive verbs (i-)" },
    { "tl": "idinala", "pron": "ee-dee-nah-LAH", "en": "brought for (completed)", "cat": "Benefactive verbs (i-)" },
    { "tl": "ipagluto", "pron": "ee-pag-LOO-toh", "en": "cook for (ipag- variant)", "cat": "Benefactive verbs (i-)" },
    { "tl": "ipinagluto", "pron": "ee-pee-nag-LOO-toh", "en": "cooked for (ipag-, completed)", "cat": "Benefactive verbs (i-)" },
    { "tl": "nanay", "pron": "NAH-nai", "en": "mom / mother", "cat": "Example words" },
    { "tl": "lolo", "pron": "LOH-loh", "en": "grandfather", "cat": "Example words" },
    { "tl": "regalo", "pron": "reh-GAH-loh", "en": "gift", "cat": "Example words" },
    { "tl": "pansit", "pron": "pan-SEET", "en": "pancit (noodles)", "cat": "Example words" },
    { "tl": "bulaklak", "pron": "boo-lak-LAK", "en": "flower", "cat": "Example words" },
    { "tl": "kaibigan", "pron": "kah-ee-BEE-gan", "en": "friend", "cat": "Example words" }
  ],
  "4": [
    { "tl": "pandiwang sanhi", "pron": "pan-DEE-wang san-HEE", "en": "causative verb", "cat": "Grammar terms" },
    { "tl": "sanhi", "pron": "san-HEE", "en": "cause", "cat": "Grammar terms" },
    { "tl": "causer", "pron": "KAW-ser", "en": "causer — the one who has it done", "cat": "Grammar terms" },
    { "tl": "causee", "pron": "kaw-SEE", "en": "causee — the one who actually does it", "cat": "Grammar terms" },
    { "tl": "magpaluto", "pron": "mag-pah-LOO-toh", "en": "have (someone) cook — causer in focus", "cat": "Causative (magpa-)" },
    { "tl": "nagpaluto", "pron": "nag-pah-LOO-toh", "en": "had (someone) cook (completed)", "cat": "Causative (magpa-)" },
    { "tl": "nagpagupit", "pron": "nag-pah-GOO-pit", "en": "got a haircut (had it cut)", "cat": "Causative (magpa-)" },
    { "tl": "nagpagawa", "pron": "nag-pah-gah-WAH", "en": "had (something) made/built/repaired", "cat": "Causative (magpa-)" },
    { "tl": "nagpahinga", "pron": "nag-pah-heeng-AH", "en": "rested (had oneself rest)", "cat": "Causative (magpa-)" },
    { "tl": "ipaluto", "pron": "ee-pah-LOO-toh", "en": "have it cooked — thing in focus", "cat": "Causative (ipa-)" },
    { "tl": "ipinaluto", "pron": "ee-pee-nah-LOO-toh", "en": "had it cooked (completed)", "cat": "Causative (ipa-)" },
    { "tl": "ipinatawag", "pron": "ee-pee-nah-TAH-wag", "en": "had (someone) summoned / sent for", "cat": "Causative (ipa-)" },
    { "tl": "ipinagawa", "pron": "ee-pee-nah-gah-WAH", "en": "had (something) made/fixed", "cat": "Causative (ipa-)" },
    { "tl": "ipinaayos", "pron": "ee-pee-nah-AH-yos", "en": "had (something) fixed/arranged", "cat": "Causative (ipa-)" },
    { "tl": "kusinero", "pron": "koo-see-NEH-roh", "en": "cook / chef", "cat": "Example words" },
    { "tl": "barbero", "pron": "bar-BEH-roh", "en": "barber", "cat": "Example words" },
    { "tl": "karpintero", "pron": "kar-peen-TEH-roh", "en": "carpenter", "cat": "Example words" },
    { "tl": "mekaniko", "pron": "meh-KAH-nee-koh", "en": "mechanic", "cat": "Example words" },
    { "tl": "manok", "pron": "mah-NOK", "en": "chicken", "cat": "Example words" },
    { "tl": "bahay", "pron": "BAH-hai", "en": "house", "cat": "Example words" }
  ]
};
