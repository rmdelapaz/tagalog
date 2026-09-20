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
  }
};
