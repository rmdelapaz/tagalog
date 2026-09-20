/* lesson-content.js — INTERMEDIATE (B1–B2) per-lesson objectives & summary.
 *
 * window.TAGALOG_LESSON_INFO is keyed "1", "2", … Each entry is
 *   { objectives: [ ... ], summary: [ ... ] }
 * learn.js renders "What You'll Learn" below the hero and "Lesson Summary"
 * above the review section.
 *
 * Add entries alongside vocab-data.js as content is authored, e.g.:
 *   "1": { "objectives": [ ... ], "summary": [ ... ] }
 */
window.TAGALOG_LESSON_INFO = {
  "1": {
    "objectives": [
      "Explain what 'focus' means in Tagalog — which participant the verb spotlights, marked by 'ang'",
      "Distinguish actor focus (-um-/mag-) from object focus (-in) and match the affix to the marker",
      "Track how the 'ang' and 'ng' markers trade places on the doer and object when focus changes",
      "Convert an ang-pronoun doer (ako, siya, kami) into its ng-pronoun (ko, niya, namin) when flipping focus",
      "Recognize why focus — not word order — is what makes a Tagalog sentence sound natural",
      "Choose the natural focus from what the conversation spotlights, including definite vs. indefinite objects",
      "Preview locative (-an) and benefactive (i-) focus as further spotlights on the same system"
    ],
    "summary": [
      "Focus is the core of Tagalog grammar: the verb's affix announces which noun is in the spotlight, and that noun wears 'ang'",
      "Actor focus (-um- / mag-) puts the doer in focus; object focus (-in) puts the thing acted upon in focus",
      "The affix and the 'ang' marker always agree — change one and you must change the other",
      "Flipping focus makes 'ang' and 'ng' trade places on the doer and object; the doer pronoun shifts from the ang-set to the ng-set (ako→ko, siya→niya)",
      "Because Tagalog word order is flexible, it's the markers (driven by focus), not position, that tell you who did what",
      "Object focus usually makes the object definite ('the bread'); actor focus leaves it indefinite ('some bread'), so focus often does the work of English 'a' vs. 'the'",
      "Choose focus by what the conversation spotlights — answer 'Sino ang gumawa?' in actor focus, 'Ano ang ginawa?' in object focus",
      "Locative (-an), benefactive (i-), and the rest of B1's verbs are just more focus types built on this same ang↔ng machinery"
    ]
  },
  "2": {
    "objectives": [
      "Recognize locative focus (-an) as a third spotlight that puts 'ang' on the place, direction, or recipient of an action",
      "Conjugate -an verbs across all four aspects (buksan → binuksan / binubuksan / bubuksan; puntahan, bigyan, lagyan, hugasan)",
      "Track how 'ang' lands on the location/recipient while the doer drops to 'ng' — the same ang↔ng swap from Lesson 1",
      "Contrast the same event in actor focus vs. locative focus and choose the one that matches the conversation",
      "Distinguish a recipient (give-to, bigyan) from a beneficiary (do-for), setting up benefactive focus in Lesson 3",
      "Handle the sound shifts: vowel drop before -an (bigay→bigyan) and the ni- prefix for l-initial roots (lagay→nilagyan)"
    ],
    "summary": [
      "Locative focus uses the suffix -an to spotlight the endpoint of an action — a place, a direction/goal, or a recipient",
      "The affix still agrees with the marker: 'ang' moves onto the place/recipient and the doer steps back to 'ng'",
      "-an rides at the end of the word while the familiar -in- infix and reduplication mark aspect (buksan, binuksan, binubuksan, bubuksan)",
      "Expect two sound shifts: some roots drop a vowel before -an (bigay→bigyan, lagay→lagyan), and l/r/w/y-initial roots take the ni- prefix in the completed (nilagyan)",
      "Choosing locative focus tends to make the place/recipient specific and is the natural reply when someone asks 'saan?' (where?)",
      "A recipient (bigyan = give TO, who actually receives) differs from a beneficiary (do FOR, on their behalf) — the latter gets its own affix, benefactive i-, next lesson"
    ]
  },
  "3": {
    "objectives": [
      "Recognize benefactive focus (i-) as the spotlight that puts 'ang' on the beneficiary — the person you act for",
      "Conjugate i- verbs across aspects (ibili → ibinili / ibinibili / ibibili; ikuha, idala, iluto)",
      "Track how 'ang' lands on the beneficiary while both the doer and the thing take 'ng'",
      "Contrast object focus (bought the medicine), locative recipient (gave Mom the medicine), and benefactive (bought medicine FOR Mom)",
      "Handle the ipag- variant on roots that take it (iluto/ipagluto → ipinagluto)",
      "Use the analytic alternative para kay (+ name) / para sa (+ common noun or pronoun) to name a beneficiary"
    ],
    "summary": [
      "Benefactive focus uses the prefix i- to spotlight the beneficiary — the one you do the action for, whether or not they receive anything",
      "i- sits on the front of the word while the -in- infix and reduplication mark aspect inside (ibili, ibinili, ibinibili, ibibili)",
      "In benefactive focus 'ang' marks the beneficiary (si Nanay, ang mga bata); the doer and the thing both drop to 'ng'",
      "Three roles, three spotlights: object focus -in (the thing), locative -an (a recipient who receives), benefactive i- (a beneficiary you act for)",
      "Some roots use the longer ipag- for the benefactive (ipagluto → ipinagluto) — same meaning, just the shape the root prefers",
      "para kay + a personal name and para sa + a common noun/pronoun give an easy analytic way to add 'for someone' to an ordinary sentence"
    ]
  },
  "4": {
    "objectives": [
      "Understand causatives as 'having something done' and identify the three players: causer, causee, and the thing/action",
      "Use magpa- (actor-focus causative) to keep the causer in the spotlight (nagpaluto ako = I had someone cook)",
      "Use ipa- (patient-focus causative) to keep the thing done in the spotlight (ipinaluto ko ang manok)",
      "Conjugate both across aspects (magpa-/nagpa-/nagpapa-/magpapa-; ipa-/ipina-/ipinapa-/ipapa-)",
      "Mark the causee with sa (or kay before a name), and drop it when it's obvious",
      "Produce everyday causatives — nagpagupit, nagpagawa, nagpaluto, ipinatawag, ipinaayos"
    ],
    "summary": [
      "Causative verbs express actions you arrange rather than perform yourself, built on the causative core pa-",
      "magpa- is the actor-focus causative: the causer wears 'ang' (Nagpaluto ako ng adobo sa kusinero)",
      "ipa- is the patient-focus causative: the thing done wears 'ang' and the causer drops to 'ng' (Ipinaluto ko ang manok)",
      "Choose by the spotlight — 'Sino ang nagpaluto?' → magpa-; 'Ano ang ipinaluto?' → ipa- — the focus system at work again",
      "Aspect follows the familiar patterns: magpa-/nagpa-/nagpapa-/magpapa- and ipa-/ipina-/ipinapa-/ipapa-",
      "The causee (who actually does it) is marked with sa or kay and can be left out; causatives cover daily services — haircuts, repairs, cooking, summoning"
    ]
  },
  "5": {
    "objectives": [
      "Understand the maka-/ma- potentive mode and its three meanings: ability ('can'), success ('managed to'), and the accidental ('happened to')",
      "Conjugate maka- (actor focus) across aspects (makabili → nakabili / nakakabili / makakabili)",
      "Conjugate ma- (object focus) across aspects (makita → nakita / nakikita / makikita)",
      "Choose maka- (doer in focus) vs. ma- (thing in focus) — the same AF/OF choice from Lesson 1",
      "Use the accidental ma- to say something happened unintentionally (nasira, nahulog, nabasag) and contrast it with deliberate -in verbs",
      "Recognize the everyday nakaka- 'feeling' words (nakakatawa, nakakainis, nakakapagod) as spin-offs of this mode"
    ],
    "summary": [
      "maka-/ma- form the potentive (ability) mode: 'can', 'was able to / managed to', and the accidental 'happened to'",
      "maka- is the actor-focus version — the doer wears 'ang' (Nakabili ako ng tiket); maka- → naka-, with 'ka' reduplicating for present/future",
      "ma- is the object-focus version — the thing wears 'ang' and the doer drops to 'ng' (Nakita ko ang bahay); ma- → na-, first root syllable reduplicating",
      "Choosing between them is the Lesson 1 AF/OF choice again — Nakakita ako (doer in focus) vs. Nakita ko (thing in focus), with the ako→ko ang↔ng swap",
      "The accidental ma- says something happened without intent (Nabasag ko ang baso = broke it by accident) and often drops the doer (Nasira ang kotse) — a real politeness tool",
      "nakaka- attaches to feeling roots to mean 'causes that feeling' — nakakatawa (funny), nakakainis (annoying), nakakapagod (tiring)"
    ]
  },
  "6": {
    "objectives": [
      "Use maki- to express joining in someone else's action or approaching them with a request (makikain, makisakay, makiusap, makisama)",
      "Conjugate maki- across aspects (makisama → nakisama / nakikisama / makikisama)",
      "Use mag-…-an to express reciprocal 'each other' actions (mag-usap, magkita, magtulungan) with a plural actor",
      "Conjugate the reciprocal across aspects (mag-usap → nag-usap / nag-uusap / mag-uusap)",
      "Contrast reciprocal (both ways, plural subject) with one-directional verbs (one way)",
      "Recognize both patterns as actor focus — participants wear 'ang' — and connect maki- to the beginner course's paki- requests and the value of pakikisama"
    ],
    "summary": [
      "maki- turns an action outward: you take part in another's action or ask a favor; the joiner wears 'ang' and the group/person joined takes 'sa' (or 'kay' before a name)",
      "maki- conjugates maki- → naki-, with 'ki' reduplicating for present/future (nakisama, nakikisama, makikisama)",
      "mag-…-an is reciprocal — two or more people do the action to each other — and needs a plural or joined subject (kami, sila, sina Ana at Ben)",
      "The reciprocal uses the ordinary mag- aspect machine (mag-usap, nag-usap, nag-uusap, mag-uusap) and often adds -an (magtulungan, magmahalan)",
      "Reciprocal (both directions) contrasts with one-directional verbs: Nag-usap kami (we talked, mutually) vs. Kinausap ko siya (I talked to him)",
      "Both maki- and mag-…-an are actor focus — same markers as Lesson 1 — and makisama ('getting along') names a prized Filipino social value"
    ]
  },
  "7": {
    "objectives": [
      "Explain that Tagalog verbs mark aspect (completion), not tense (calendar time), so one form can map to several English tenses",
      "Review the three core aspects (completed, incompleted, contemplated) and the started/reduplicated logic behind them",
      "Recognize the imperfective's double life: it covers both ongoing ('is doing') and habitual ('does regularly') meanings",
      "Form and use the recently-completed aspect (ka- + reduplicated syllable: katatapos, kararating, kakakain) for 'just did it'",
      "Pair aspect with na/pa and time words (kanina, ngayon, tuwing, bukas) to pin down when",
      "Read how aspects flow together across a short narrative"
    ],
    "summary": [
      "Aspect is about completion, not tense: completed (nagluto), incompleted (nagluluto), contemplated (magluluto) — context and time words supply the English tense",
      "Reduplication marks 'not completed'; the started marker (nag-, -in-, na-) marks 'already begun' — completed = started + no reduplication, incompleted = both, contemplated = reduplication only",
      "The incompleted/imperfective does double duty — ongoing (Kumakain ako ngayon) and habitual (Kumakain ako tuwing umaga)",
      "The recently-completed aspect (ka- + reduplicated first syllable + root, doer in the ng-form) means 'just finished': Katatapos ko lang kumain; Kararating ko lang",
      "na ('already', with completed) and pa ('still', with incompleted) sharpen timing, alongside time words like kanina, ngayon, tuwing, and bukas",
      "In real speech aspects string together fluidly, each verb chosen for its completion state — the foundation for storytelling in Lesson 12"
    ]
  },
  "8": {
    "objectives": [
      "Link clauses with cause-and-result connectors: kasi/dahil (because) and kaya (so/therefore)",
      "Contrast ideas with pero/ngunit (but) and kahit (even though)",
      "Sequence events with time connectors: habang (while), bago (before), matapos/pagkatapos (after), samantala (meanwhile)",
      "Choose the casual vs. formal member of a pair (pero vs. ngunit, kasi vs. dahil) to match the setting",
      "Place connectors correctly — kasi between clauses, dahil able to open a sentence, bago/matapos before a bare verb",
      "Combine several connectors to build longer, connected discourse"
    ],
    "summary": [
      "Conjunctions (pangatnig) turn separate sentences into connected discourse; group them by the relationship they signal",
      "Cause & result: kasi/dahil introduce the reason ('because'); kaya introduces the result ('so') — they flip the clause order of the same idea",
      "Contrast: pero (casual) and ngunit/subalit (formal) both mean 'but'; kahit (na) means 'even though / even if'",
      "Time: habang (while), bago (before) + bare verb, matapos/pagkatapos (after), and samantala (meanwhile) order events",
      "Register matters — pero and kasi are the everyday workhorses; save ngunit, subalit, and formal dahil for writing and speeches",
      "Watch placement and note that kaya also means 'can/able' — context tells the two apart; then chain connectors to produce fluent multi-clause sentences"
    ]
  },
  "9": {
    "objectives": [
      "Distinguish kung (if/whether — uncertain), kapag/pag (when/whenever — expected/habitual), and sakali (in case — contingency)",
      "Use kung for hypothetical conditions and for embedded 'whether' questions",
      "Use kapag for real, expected, or repeating conditions",
      "Use sakali/kung sakali for a just-in-case contingency you're preparing for",
      "Apply the certainty test to choose between kung and kapag",
      "Pick verb aspect in each clause — contemplated for one-off futures, imperfective for habits"
    ],
    "summary": [
      "Conditionals in Tagalog split by certainty: kung (if/whether, uncertain), kapag/pag (when/whenever, expected or habitual), sakali (in case, a contingency)",
      "kung marks hypothetical 'if' conditions and also introduces embedded questions ('whether': Hindi ko alam kung darating siya)",
      "kapag treats the condition as real or recurring and pairs naturally with habitual imperfective verbs (Kapag umuulan, nagbabaha)",
      "sakali / sakaling / kung sakali flag a just-in-case possibility you plan for (Sakaling umulan, may payong ako)",
      "The certainty test decides kung vs. kapag — 'might happen' → kung, 'will/does happen' → kapag",
      "For a one-time future put both clauses in the contemplated aspect; for a habit use the imperfective in both (the Lesson 7 choice)"
    ]
  },
  "10": {
    "objectives": [
      "Use the na/-ng linker to attach modifiers, and pick the right form (-ng after vowel/-n, na after other consonants)",
      "Build relative clauses ('the person who…', 'the thing that…') with the linker + a verb phrase",
      "Apply the focus rule: the noun being described must be the focus of the clause verb (actor focus for a doer, object focus for a thing)",
      "Intensify with napaka-, sobrang, masyadong (too/excess), and soften with medyo",
      "Distinguish the attitudes: napaka-/sobrang (strong positive) vs. masyadong (too much) vs. medyo (mild)",
      "Stack a relative clause and an intensifier for rich, precise description"
    ],
    "summary": [
      "The na/-ng linker is the engine of Tagalog description — -ng after a vowel or -n, na after other consonants — and it's reversible (magandang bahay = bahay na maganda)",
      "Swap a single adjective for a verb phrase and the same linker builds a relative clause: ang babaeng kumakanta, ang librong binili ko",
      "The focus rule (from Lesson 1): the described noun must be the clause verb's focus — actor focus to describe a doer (lalaking bumili), object focus to describe a thing (kotseng binili)",
      "Intensifiers scale description: napaka- (prefixed, very), sobrang (extremely), masyadong (too — often a complaint), medyo (somewhat, softening)",
      "napaka-/sobrang read as strong admiration; masyadong signals excess; medyo dials the adjective down",
      "Chaining a relative clause with an intensifier lets you describe exactly what and how much"
    ]
  },
  "11": {
    "objectives": [
      "Open an opinion with sa palagay ko, sa tingin ko, or para sa akin",
      "Express degrees of conviction with naniniwala ako, sigurado ako, and hedges (mukhang, parang, siguro, baka)",
      "Name core feelings using ma-/na- words (masaya, malungkot, natutuwa, nag-aalala)",
      "Justify an opinion or feeling with the reason connectors kasi/dahil and kaya",
      "Agree and disagree naturally (sang-ayon ako, tama ka; hindi ako sang-ayon, the naman pivot)",
      "Combine opener + claim + reason into a complete opinion turn"
    ],
    "summary": [
      "Open opinions with set phrases — sa palagay ko / sa tingin ko (I think), para sa akin (for me), sa pakiramdam ko (I feel)",
      "Signal conviction with naniniwala ako na / sigurado ako na, and soften with hedges mukhang, parang, siguro, baka",
      "Core feelings are mostly ma-/na- words: masaya, malungkot, natutuwa, nag-aalala/nababahala, natatakot",
      "Back a view with a reason using kasi/dahil (because) or kaya (so) — the Lesson 8 connectors",
      "Agree with sang-ayon ako / tama ka / totoo nga; disagree gently with hindi ako sang-ayon or the naman pivot",
      "Hedging (parang, siguro) and the naman pivot keep opinions polite — the pakikisama value at work — and the full move is opener + claim + reason"
    ]
  },
  "12": {
    "objectives": [
      "Structure a spoken story: opening (scene), events (sequence), and ending (wrap-up)",
      "Anchor time with noong (back when), kanina (earlier), dati (used to), minsan (once)",
      "Sequence events with una, tapos/pagkatapos, bigla(ng), and sa wakas/sa huli",
      "Use aspect deliberately — imperfective for the backdrop, completed for main events, recently-completed for vividness",
      "Add drama with bigla(ng) (suddenly) and connect clauses with pero/dahil",
      "Combine all B1 tools to narrate a coherent experience"
    ],
    "summary": [
      "A spoken story has an arc: an opening that sets the scene, a sequence of events, and an ending",
      "Time anchors place the story — noong/nung (back when), kanina (earlier today), dati (used to), minsan (once)",
      "Sequencing words march the events — una (first), tapos/pagkatapos/saka (then), bigla(ng) (suddenly), sa wakas/sa huli (finally)",
      "Aspect carries the narration: imperfective for background (umuulan), completed for what happened (kumain), recently-completed for a fresh 'just happened'",
      "Contrast a backdrop (imperfective) with a punch (completed) to make the story feel alive: Natutulog ako nang tumunog ang telepono",
      "Telling stories weaves together the whole B1 toolkit — the extended focus system, aspect, connectors, conditionals, description, and self-expression — completing B1"
    ]
  }
};
