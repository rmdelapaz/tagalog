/* vocab-data.js — curated review vocabulary for the Tagalog course.

   Consumed by learn.js to build each lesson's "Words You Learned" review,
   flashcards, and the spaced-repetition quiz. Keyed by lesson number as a
   string, plus a "titles" map of short lesson labels. Each word is
   { tl, pron, en }:
     tl   — the Tagalog word/phrase (spoken form; audio.js reads it)
     pron — a simple phonetic respelling for learners
     en   — the concise English meaning
   Safe to hand-edit: add, remove, or reword entries freely. */
window.TAGALOG_VOCAB = {
  "titles": {
    "1": "Tagalog Fundamentals",
    "2": "Building Sentences",
    "3": "Mastering Verbs",
    "4": "Numbers & Time",
    "5": "Family & Social Connections",
    "6": "Real Conversations",
    "7": "Parts of Speech",
    "8": "AI Language Learning",
    "9": "Vocabulary Reference",
    "10": "Grammar Essentials",
    "11": "Modals & Pseudo-verbs",
    "12": "Negation",
    "13": "Question Words",
    "14": "Requests & Commands",
    "15": "Colors, Weather & Clothing",
    "16": "Body, Health & Calendar"
  },
  "1": [
    {
      "tl": "kumusta",
      "pron": "koo-MOOS-tah",
      "en": "how are you? / hello",
      "cat": "Greetings"
    },
    {
      "tl": "kumusta ka?",
      "pron": "koo-MOOS-ta ka",
      "en": "how are you?",
      "cat": "Greetings"
    },
    {
      "tl": "magandang gabi",
      "pron": "ma-gan-DANG ga-BEE",
      "en": "good evening",
      "cat": "Greetings"
    },
    {
      "tl": "magandang hapon",
      "pron": "ma-gan-DANG HAH-pon",
      "en": "good afternoon",
      "cat": "Greetings"
    },
    {
      "tl": "magandang umaga",
      "pron": "ma-gan-DANG oo-MAH-ga",
      "en": "good morning",
      "cat": "Greetings"
    },
    {
      "tl": "hindi",
      "pron": "hin-DEE",
      "en": "no / not",
      "cat": "Courtesy & responses"
    },
    {
      "tl": "oo",
      "pron": "OH-oh",
      "en": "yes (casual)",
      "cat": "Courtesy & responses"
    },
    {
      "tl": "opo",
      "pron": "OH-poh",
      "en": "yes (respectful)",
      "cat": "Courtesy & responses"
    },
    {
      "tl": "po",
      "pron": "po",
      "en": "respect particle (adds politeness)",
      "cat": "Courtesy & responses"
    },
    {
      "tl": "salamat",
      "pron": "sah-LAH-mat",
      "en": "thank you",
      "cat": "Courtesy & responses"
    },
    {
      "tl": "hindi pa",
      "pron": "hin-DEE pa",
      "en": "not yet",
      "cat": "Everyday phrases"
    },
    {
      "tl": "kain tayo",
      "pron": "ka-IN TA-yo",
      "en": "let's eat",
      "cat": "Everyday phrases"
    },
    {
      "tl": "kumain ka na?",
      "pron": "koo-MA-in ka na",
      "en": "have you eaten?",
      "cat": "Everyday phrases"
    },
    {
      "tl": "aso",
      "pron": "AH-so",
      "en": "dog",
      "cat": "Animals",
      "img": "aso"
    },
    {
      "tl": "isda",
      "pron": "is-DAH",
      "en": "fish",
      "cat": "Animals",
      "img": "isda"
    },
    {
      "tl": "oso",
      "pron": "OH-so",
      "en": "bear",
      "cat": "Animals",
      "img": "oso"
    },
    {
      "tl": "pusa",
      "pron": "POO-sa",
      "en": "cat",
      "cat": "Animals",
      "img": "pusa"
    },
    {
      "tl": "bahay",
      "pron": "bah-HAY",
      "en": "house",
      "cat": "Everyday words"
    },
    {
      "tl": "pagkain",
      "pron": "pag-KAH-in",
      "en": "food",
      "cat": "Everyday words"
    },
    {
      "tl": "pamilya",
      "pron": "pa-MIL-ya",
      "en": "family",
      "cat": "Everyday words"
    },
    {
      "tl": "tubig",
      "pron": "TOO-big",
      "en": "water",
      "cat": "Everyday words"
    },
    {
      "tl": "ulan",
      "pron": "oo-LAN",
      "en": "rain",
      "cat": "Everyday words"
    },
    {
      "tl": "mabuti",
      "pron": "ma-BOO-ti",
      "en": "good / fine",
      "cat": "Describing"
    },
    {
      "tl": "maganda",
      "pron": "ma-gan-DA",
      "en": "beautiful",
      "cat": "Describing"
    }
  ],
  "2": [
    {
      "tl": "ako",
      "pron": "a-KO",
      "en": "i / me",
      "cat": "Pronouns & markers"
    },
    {
      "tl": "ang",
      "pron": "ang",
      "en": "the (focus marker)",
      "cat": "Pronouns & markers"
    },
    {
      "tl": "ay",
      "pron": "eye",
      "en": "predicate marker (is / are)",
      "cat": "Pronouns & markers"
    },
    {
      "tl": "ba",
      "pron": "ba",
      "en": "question particle",
      "cat": "Pronouns & markers"
    },
    {
      "tl": "ng",
      "pron": "nang",
      "en": "object / possession marker",
      "cat": "Pronouns & markers"
    },
    {
      "tl": "sa",
      "pron": "sa",
      "en": "to / at / in (location marker)",
      "cat": "Pronouns & markers"
    },
    {
      "tl": "ano",
      "pron": "a-NO",
      "en": "what?",
      "cat": "Question words"
    },
    {
      "tl": "kailan",
      "pron": "ka-EE-lan",
      "en": "when?",
      "cat": "Question words"
    },
    {
      "tl": "saan",
      "pron": "sa-AN",
      "en": "where?",
      "cat": "Question words"
    },
    {
      "tl": "sino",
      "pron": "SEE-no",
      "en": "who?",
      "cat": "Question words"
    },
    {
      "tl": "kumakain",
      "pron": "koo-ma-KAH-in",
      "en": "eating",
      "cat": "Verbs"
    },
    {
      "tl": "nag-aaral",
      "pron": "nag-a-A-ral",
      "en": "studying",
      "cat": "Verbs"
    },
    {
      "tl": "naglalaro",
      "pron": "nag-la-la-RO",
      "en": "playing",
      "cat": "Verbs"
    },
    {
      "tl": "nagluluto",
      "pron": "nag-loo-LOO-to",
      "en": "cooking",
      "cat": "Verbs"
    },
    {
      "tl": "nagtatrabaho",
      "pron": "nag-ta-tra-BA-ho",
      "en": "working",
      "cat": "Verbs"
    },
    {
      "tl": "tumutulog",
      "pron": "too-moo-TOO-log",
      "en": "sleeping",
      "cat": "Verbs"
    },
    {
      "tl": "babae",
      "pron": "ba-BA-e",
      "en": "woman",
      "cat": "People"
    },
    {
      "tl": "lalaki",
      "pron": "la-LA-ki",
      "en": "man",
      "cat": "People"
    },
    {
      "tl": "mga bata",
      "pron": "ma-NGA BA-ta",
      "en": "children",
      "cat": "People"
    },
    {
      "tl": "nanay",
      "pron": "na-NAY",
      "en": "mother",
      "cat": "People"
    },
    {
      "tl": "tatay",
      "pron": "ta-TAY",
      "en": "father",
      "cat": "People"
    },
    {
      "tl": "adobo",
      "pron": "a-DO-bo",
      "en": "adobo (filipino dish)",
      "cat": "Everyday nouns",
      "img": "adobo"
    },
    {
      "tl": "aso",
      "pron": "AH-so",
      "en": "dog",
      "cat": "Everyday nouns",
      "img": "aso"
    },
    {
      "tl": "bulaklak",
      "pron": "boo-lak-LAK",
      "en": "flower",
      "cat": "Everyday nouns",
      "img": "bulaklak"
    },
    {
      "tl": "eskwelahan",
      "pron": "es-kwe-la-HAN",
      "en": "school",
      "cat": "Everyday nouns",
      "img": "eskwelahan"
    },
    {
      "tl": "kanin",
      "pron": "KA-nin",
      "en": "rice (cooked)",
      "cat": "Everyday nouns",
      "img": "kanin"
    },
    {
      "tl": "kusina",
      "pron": "koo-SI-na",
      "en": "kitchen",
      "cat": "Everyday nouns",
      "img": "kusina"
    },
    {
      "tl": "libro",
      "pron": "LIB-ro",
      "en": "book",
      "cat": "Everyday nouns",
      "img": "libro"
    },
    {
      "tl": "mansanas",
      "pron": "man-SA-nas",
      "en": "apple",
      "cat": "Everyday nouns",
      "img": "mansanas"
    },
    {
      "tl": "mesa",
      "pron": "ME-sa",
      "en": "table",
      "cat": "Everyday nouns",
      "img": "mesa"
    },
    {
      "tl": "palengke",
      "pron": "pa-leng-KE",
      "en": "market",
      "cat": "Everyday nouns",
      "img": "palengke"
    },
    {
      "tl": "sapatos",
      "pron": "sa-pa-TOS",
      "en": "shoes",
      "cat": "Everyday nouns",
      "img": "sapatos"
    },
    {
      "tl": "gutom",
      "pron": "GOO-tom",
      "en": "hungry",
      "cat": "Describing"
    },
    {
      "tl": "mabait",
      "pron": "ma-BA-it",
      "en": "kind",
      "cat": "Describing"
    },
    {
      "tl": "malaki",
      "pron": "ma-la-KI",
      "en": "big",
      "cat": "Describing"
    },
    {
      "tl": "masaya",
      "pron": "ma-sa-YA",
      "en": "happy",
      "cat": "Describing"
    }
  ],
  "3": [
    {
      "tl": "binili",
      "pron": "bi-ni-LI",
      "en": "bought (object focus)",
      "cat": "Completed (past)"
    },
    {
      "tl": "bumili",
      "pron": "boo-mi-LI",
      "en": "bought",
      "cat": "Completed (past)"
    },
    {
      "tl": "kumain",
      "pron": "koo-MA-in",
      "en": "ate",
      "cat": "Completed (past)"
    },
    {
      "tl": "nag-aral",
      "pron": "nag-A-ral",
      "en": "studied",
      "cat": "Completed (past)"
    },
    {
      "tl": "nagbasa",
      "pron": "nag-BA-sa",
      "en": "read",
      "cat": "Completed (past)"
    },
    {
      "tl": "naglaro",
      "pron": "nag-la-RO",
      "en": "played",
      "cat": "Completed (past)"
    },
    {
      "tl": "nagluto",
      "pron": "nag-LOO-to",
      "en": "cooked",
      "cat": "Completed (past)"
    },
    {
      "tl": "nagtrabaho",
      "pron": "nag-tra-BA-ho",
      "en": "worked",
      "cat": "Completed (past)"
    },
    {
      "tl": "natulog",
      "pron": "na-TOO-log",
      "en": "slept",
      "cat": "Completed (past)"
    },
    {
      "tl": "sumulat",
      "pron": "soo-MOO-lat",
      "en": "wrote",
      "cat": "Completed (past)"
    },
    {
      "tl": "kumakain",
      "pron": "koo-ma-KA-in",
      "en": "eating",
      "cat": "Ongoing (present)"
    },
    {
      "tl": "nag-aaral",
      "pron": "nag-a-A-ral",
      "en": "studying",
      "cat": "Ongoing (present)"
    },
    {
      "tl": "nagbabasa",
      "pron": "nag-ba-BA-sa",
      "en": "reading",
      "cat": "Ongoing (present)"
    },
    {
      "tl": "naglalaro",
      "pron": "nag-la-la-RO",
      "en": "playing",
      "cat": "Ongoing (present)"
    },
    {
      "tl": "nagluluto",
      "pron": "nag-loo-LOO-to",
      "en": "cooking",
      "cat": "Ongoing (present)"
    },
    {
      "tl": "nagtatrabaho",
      "pron": "nag-ta-tra-BA-ho",
      "en": "working",
      "cat": "Ongoing (present)"
    },
    {
      "tl": "nagtuturo",
      "pron": "nag-too-TOO-ro",
      "en": "teaches",
      "cat": "Ongoing (present)"
    },
    {
      "tl": "natutulog",
      "pron": "na-too-TOO-log",
      "en": "sleeping",
      "cat": "Ongoing (present)"
    },
    {
      "tl": "kakain",
      "pron": "KA-ka-in",
      "en": "will eat",
      "cat": "Contemplated (future)"
    },
    {
      "tl": "mag-aaral",
      "pron": "mag-a-A-ral",
      "en": "will study",
      "cat": "Contemplated (future)"
    },
    {
      "tl": "magbabasa",
      "pron": "mag-ba-BA-sa",
      "en": "will read",
      "cat": "Contemplated (future)"
    },
    {
      "tl": "maglalaro",
      "pron": "mag-la-la-RO",
      "en": "will play",
      "cat": "Contemplated (future)"
    },
    {
      "tl": "magluluto",
      "pron": "mag-loo-LOO-to",
      "en": "will cook",
      "cat": "Contemplated (future)"
    },
    {
      "tl": "magtatrabaho",
      "pron": "mag-ta-tra-BA-ho",
      "en": "will work",
      "cat": "Contemplated (future)"
    },
    {
      "tl": "matutulog",
      "pron": "ma-too-TOO-log",
      "en": "will sleep",
      "cat": "Contemplated (future)"
    },
    {
      "tl": "estudyante",
      "pron": "es-tood-YAN-te",
      "en": "student",
      "cat": "People & things"
    },
    {
      "tl": "gulay",
      "pron": "GOO-lay",
      "en": "vegetables",
      "cat": "People & things"
    },
    {
      "tl": "guro",
      "pron": "GOO-ro",
      "en": "teacher",
      "cat": "People & things"
    },
    {
      "tl": "magnanakaw",
      "pron": "mag-na-NA-kaw",
      "en": "thief",
      "cat": "People & things"
    },
    {
      "tl": "matematika",
      "pron": "ma-te-MA-ti-ka",
      "en": "mathematics",
      "cat": "People & things"
    },
    {
      "tl": "pera",
      "pron": "PE-ra",
      "en": "money",
      "cat": "People & things"
    },
    {
      "tl": "silid-aralan",
      "pron": "SI-lid a-ra-LAN",
      "en": "classroom",
      "cat": "People & things"
    },
    {
      "tl": "kain",
      "pron": "ka-IN",
      "en": "eat (root word)",
      "cat": "Other words"
    },
    {
      "tl": "tapos",
      "pron": "TA-pos",
      "en": "done / finished",
      "cat": "Other words"
    }
  ],
  "4": [
    {
      "tl": "isa",
      "pron": "ee-SA",
      "en": "one",
      "cat": "Numbers 1–10"
    },
    {
      "tl": "dalawa",
      "pron": "da-la-WA",
      "en": "two",
      "cat": "Numbers 1–10"
    },
    {
      "tl": "tatlo",
      "pron": "tat-LO",
      "en": "three",
      "cat": "Numbers 1–10"
    },
    {
      "tl": "apat",
      "pron": "A-pat",
      "en": "four",
      "cat": "Numbers 1–10"
    },
    {
      "tl": "lima",
      "pron": "li-MA",
      "en": "five",
      "cat": "Numbers 1–10"
    },
    {
      "tl": "anim",
      "pron": "A-nim",
      "en": "six",
      "cat": "Numbers 1–10"
    },
    {
      "tl": "pito",
      "pron": "pi-TO",
      "en": "seven",
      "cat": "Numbers 1–10"
    },
    {
      "tl": "walo",
      "pron": "wa-LO",
      "en": "eight",
      "cat": "Numbers 1–10"
    },
    {
      "tl": "siyam",
      "pron": "SI-yam",
      "en": "nine",
      "cat": "Numbers 1–10"
    },
    {
      "tl": "sampu",
      "pron": "sam-POO",
      "en": "ten",
      "cat": "Numbers 1–10"
    },
    {
      "tl": "labing-isa",
      "pron": "la-bing-ee-SA",
      "en": "eleven",
      "cat": "Bigger numbers"
    },
    {
      "tl": "labing-dalawa",
      "pron": "la-bing-da-la-WA",
      "en": "twelve",
      "cat": "Bigger numbers"
    },
    {
      "tl": "dalawampu",
      "pron": "da-la-wam-POO",
      "en": "twenty",
      "cat": "Bigger numbers"
    },
    {
      "tl": "isang daan",
      "pron": "I-sang da-AN",
      "en": "one hundred",
      "cat": "Bigger numbers"
    },
    {
      "tl": "isang libo",
      "pron": "I-sang LI-bo",
      "en": "one thousand",
      "cat": "Bigger numbers"
    },
    {
      "tl": "una",
      "pron": "OO-na",
      "en": "first",
      "cat": "Ordinals"
    },
    {
      "tl": "ikalawa",
      "pron": "i-ka-la-WA",
      "en": "second",
      "cat": "Ordinals"
    },
    {
      "tl": "ikatlo",
      "pron": "i-kat-LO",
      "en": "third",
      "cat": "Ordinals"
    },
    {
      "tl": "lunes",
      "pron": "LOO-nes",
      "en": "monday",
      "cat": "Days of the week"
    },
    {
      "tl": "martes",
      "pron": "MAR-tes",
      "en": "tuesday",
      "cat": "Days of the week"
    },
    {
      "tl": "miyerkules",
      "pron": "mi-YER-koo-les",
      "en": "wednesday",
      "cat": "Days of the week"
    },
    {
      "tl": "huwebes",
      "pron": "hoo-WE-bes",
      "en": "thursday",
      "cat": "Days of the week"
    },
    {
      "tl": "biyernes",
      "pron": "bi-YER-nes",
      "en": "friday",
      "cat": "Days of the week"
    },
    {
      "tl": "sabado",
      "pron": "SA-ba-do",
      "en": "saturday",
      "cat": "Days of the week"
    },
    {
      "tl": "linggo",
      "pron": "ling-GO",
      "en": "sunday",
      "cat": "Days of the week"
    },
    {
      "tl": "umaga",
      "pron": "oo-MA-ga",
      "en": "morning",
      "cat": "Times of day"
    },
    {
      "tl": "tanghali",
      "pron": "tang-HA-li",
      "en": "noon",
      "cat": "Times of day"
    },
    {
      "tl": "hapon",
      "pron": "HA-pon",
      "en": "afternoon",
      "cat": "Times of day"
    },
    {
      "tl": "gabi",
      "pron": "ga-BEE",
      "en": "evening / night",
      "cat": "Times of day"
    },
    {
      "tl": "hatinggabi",
      "pron": "ha-ting-ga-BEE",
      "en": "midnight",
      "cat": "Times of day"
    },
    {
      "tl": "anong oras na?",
      "pron": "a-NONG O-ras na",
      "en": "what time is it?",
      "cat": "Telling time & money"
    },
    {
      "tl": "bayad",
      "pron": "BA-yad",
      "en": "payment",
      "cat": "Telling time & money"
    },
    {
      "tl": "kalahati",
      "pron": "ka-la-HA-ti",
      "en": "half past",
      "cat": "Telling time & money"
    },
    {
      "tl": "magkano",
      "pron": "mag-KA-no",
      "en": "how much?",
      "cat": "Telling time & money"
    },
    {
      "tl": "sukli",
      "pron": "sook-LI",
      "en": "change (money back)",
      "cat": "Telling time & money"
    },
    {
      "tl": "edad",
      "pron": "E-dad",
      "en": "age",
      "cat": "Age & dates"
    },
    {
      "tl": "kaarawan",
      "pron": "ka-a-ra-WAN",
      "en": "birthday",
      "cat": "Age & dates"
    }
  ],
  "5": [
    {
      "tl": "ama",
      "pron": "A-ma",
      "en": "father (formal)",
      "cat": "Immediate family"
    },
    {
      "tl": "anak",
      "pron": "a-NAK",
      "en": "child",
      "cat": "Immediate family",
      "img": "anak"
    },
    {
      "tl": "ate",
      "pron": "A-te",
      "en": "older sister",
      "cat": "Immediate family",
      "img": "ate"
    },
    {
      "tl": "bunso",
      "pron": "bun-SO",
      "en": "youngest child",
      "cat": "Immediate family",
      "img": "bunso"
    },
    {
      "tl": "ina",
      "pron": "EE-na",
      "en": "mother (formal)",
      "cat": "Immediate family"
    },
    {
      "tl": "kapatid",
      "pron": "ka-pa-TID",
      "en": "sibling",
      "cat": "Immediate family"
    },
    {
      "tl": "kuya",
      "pron": "KOO-ya",
      "en": "older brother",
      "cat": "Immediate family",
      "img": "kuya"
    },
    {
      "tl": "magulang",
      "pron": "ma-GOO-lang",
      "en": "parents",
      "cat": "Immediate family",
      "img": "magulang"
    },
    {
      "tl": "nanay",
      "pron": "na-NAY",
      "en": "mother",
      "cat": "Immediate family",
      "img": "nanay"
    },
    {
      "tl": "panganay",
      "pron": "pa-nga-NAY",
      "en": "eldest child",
      "cat": "Immediate family"
    },
    {
      "tl": "tatay",
      "pron": "ta-TAY",
      "en": "father",
      "cat": "Immediate family",
      "img": "tatay"
    },
    {
      "tl": "kamag-anak",
      "pron": "ka-mag-A-nak",
      "en": "relatives",
      "cat": "Extended family"
    },
    {
      "tl": "lola",
      "pron": "LO-la",
      "en": "grandmother",
      "cat": "Extended family",
      "img": "lola"
    },
    {
      "tl": "lolo",
      "pron": "LO-lo",
      "en": "grandfather",
      "cat": "Extended family",
      "img": "lolo"
    },
    {
      "tl": "pamangkin",
      "pron": "pa-mang-KIN",
      "en": "niece / nephew",
      "cat": "Extended family"
    },
    {
      "tl": "pinsan",
      "pron": "PIN-san",
      "en": "cousin",
      "cat": "Extended family"
    },
    {
      "tl": "tita",
      "pron": "TI-ta",
      "en": "aunt",
      "cat": "Extended family",
      "img": "tita"
    },
    {
      "tl": "tito",
      "pron": "TI-to",
      "en": "uncle",
      "cat": "Extended family",
      "img": "tito"
    },
    {
      "tl": "asawa",
      "pron": "a-SA-wa",
      "en": "spouse",
      "cat": "In-laws",
      "img": "asawa"
    },
    {
      "tl": "bayaw",
      "pron": "BA-yaw",
      "en": "brother-in-law",
      "cat": "In-laws"
    },
    {
      "tl": "biyenan",
      "pron": "bi-YE-nan",
      "en": "parent-in-law",
      "cat": "In-laws"
    },
    {
      "tl": "hipag",
      "pron": "HI-pag",
      "en": "sister-in-law",
      "cat": "In-laws"
    },
    {
      "tl": "manugang",
      "pron": "ma-noo-GANG",
      "en": "son / daughter-in-law",
      "cat": "In-laws"
    },
    {
      "tl": "inaanak",
      "pron": "i-na-a-NAK",
      "en": "godchild",
      "cat": "Godparents & chosen family"
    },
    {
      "tl": "kumare",
      "pron": "koo-ma-RE",
      "en": "female co-godparent / close friend",
      "cat": "Godparents & chosen family"
    },
    {
      "tl": "kumpare",
      "pron": "koom-pa-RE",
      "en": "male co-godparent / close friend",
      "cat": "Godparents & chosen family"
    },
    {
      "tl": "ninang",
      "pron": "NI-nang",
      "en": "godmother",
      "cat": "Godparents & chosen family",
      "img": "ninang"
    },
    {
      "tl": "ninong",
      "pron": "NI-nong",
      "en": "godfather",
      "cat": "Godparents & chosen family",
      "img": "ninong"
    },
    {
      "tl": "kababayan",
      "pron": "ka-ba-BA-yan",
      "en": "fellow townmate / countryman",
      "cat": "Community & friends"
    },
    {
      "tl": "kaibigan",
      "pron": "ka-i-BI-gan",
      "en": "friend",
      "cat": "Community & friends",
      "img": "kaibigan"
    },
    {
      "tl": "kapitbahay",
      "pron": "ka-pit-BA-hay",
      "en": "neighbor",
      "cat": "Community & friends"
    },
    {
      "tl": "kasama",
      "pron": "ka-SA-ma",
      "en": "companion / housemate",
      "cat": "Community & friends"
    },
    {
      "tl": "ako",
      "pron": "a-KO",
      "en": "i (pronoun)",
      "cat": "Pronouns"
    },
    {
      "tl": "ikaw",
      "pron": "i-KAW",
      "en": "you (singular)",
      "cat": "Pronouns"
    },
    {
      "tl": "siya",
      "pron": "shi-YA",
      "en": "he / she",
      "cat": "Pronouns"
    },
    {
      "tl": "tayo",
      "pron": "TA-yo",
      "en": "we (inclusive)",
      "cat": "Pronouns"
    },
    {
      "tl": "kami",
      "pron": "ka-MI",
      "en": "we (exclusive)",
      "cat": "Pronouns"
    },
    {
      "tl": "kayo",
      "pron": "ka-YO",
      "en": "you (plural / formal)",
      "cat": "Pronouns"
    },
    {
      "tl": "sila",
      "pron": "si-LA",
      "en": "they",
      "cat": "Pronouns"
    },
    {
      "tl": "paggalang",
      "pron": "pag-GA-lang",
      "en": "respect",
      "cat": "Respect"
    }
  ],
  "6": [
    {
      "tl": "hindi ko maintindihan",
      "pron": "HIN-di ko ma-in-tin-di-HAN",
      "en": "i don't understand",
      "cat": "Survival phrases"
    },
    {
      "tl": "nasaan ang...?",
      "pron": "nah-SAH-an ang",
      "en": "where is...?",
      "cat": "Survival phrases"
    },
    {
      "tl": "pwede mo bang ulitin?",
      "pron": "PWEH-de mo bang oo-li-TIN",
      "en": "can you repeat that?",
      "cat": "Survival phrases"
    },
    {
      "tl": "tulong!",
      "pron": "TOO-long",
      "en": "help!",
      "cat": "Survival phrases"
    },
    {
      "tl": "diretso",
      "pron": "di-RET-so",
      "en": "straight ahead",
      "cat": "Getting around",
      "img": "diretso"
    },
    {
      "tl": "kaliwa",
      "pron": "ka-li-WA",
      "en": "left",
      "cat": "Getting around",
      "img": "kaliwa"
    },
    {
      "tl": "kanan",
      "pron": "KA-nan",
      "en": "right",
      "cat": "Getting around",
      "img": "kanan"
    },
    {
      "tl": "malapit",
      "pron": "ma-LA-pit",
      "en": "near",
      "cat": "Getting around",
      "img": "malapit"
    },
    {
      "tl": "malayo",
      "pron": "ma-LA-yo",
      "en": "far",
      "cat": "Getting around",
      "img": "malayo"
    },
    {
      "tl": "pamasahe",
      "pron": "pa-ma-SA-he",
      "en": "fare",
      "cat": "Getting around",
      "img": "pamasahe"
    },
    {
      "tl": "busog",
      "pron": "BOO-sog",
      "en": "full (from eating)",
      "cat": "Food & taste",
      "img": "busog"
    },
    {
      "tl": "inumin",
      "pron": "i-noo-MIN",
      "en": "drink (beverage)",
      "cat": "Food & taste",
      "img": "inumin"
    },
    {
      "tl": "maalat",
      "pron": "ma-A-lat",
      "en": "salty",
      "cat": "Food & taste",
      "img": "maalat"
    },
    {
      "tl": "maanghang",
      "pron": "ma-ang-HANG",
      "en": "spicy",
      "cat": "Food & taste",
      "img": "maanghang"
    },
    {
      "tl": "maasim",
      "pron": "ma-A-sim",
      "en": "sour",
      "cat": "Food & taste",
      "img": "maasim"
    },
    {
      "tl": "malansa",
      "pron": "ma-lan-SA",
      "en": "fishy smell",
      "cat": "Food & taste",
      "img": "malansa"
    },
    {
      "tl": "malinamnam",
      "pron": "ma-li-nam-NAM",
      "en": "savory / flavorful",
      "cat": "Food & taste",
      "img": "malinamnam"
    },
    {
      "tl": "masarap",
      "pron": "ma-sa-RAP",
      "en": "delicious",
      "cat": "Food & taste",
      "img": "masarap"
    },
    {
      "tl": "matamis",
      "pron": "ma-ta-MIS",
      "en": "sweet",
      "cat": "Food & taste",
      "img": "matamis"
    },
    {
      "tl": "ulam",
      "pron": "OO-lam",
      "en": "main dish",
      "cat": "Food & taste",
      "img": "ulam"
    },
    {
      "tl": "bahala na",
      "pron": "ba-HA-la na",
      "en": "come what may",
      "cat": "Cultural values"
    },
    {
      "tl": "kapamilya",
      "pron": "ka-pa-MIL-ya",
      "en": "family-like; treating others as family",
      "cat": "Cultural values"
    },
    {
      "tl": "malasakit",
      "pron": "ma-la-SA-kit",
      "en": "compassionate care",
      "cat": "Cultural values"
    },
    {
      "tl": "pakikipagkapwa",
      "pron": "pa-ki-ki-pag-KAP-wa",
      "en": "shared identity / connectedness",
      "cat": "Cultural values"
    },
    {
      "tl": "utang na loob",
      "pron": "OO-tang na LO-ob",
      "en": "debt of gratitude",
      "cat": "Cultural values"
    },
    {
      "tl": "grabe",
      "pron": "GRA-be",
      "en": "wow! / intense!",
      "cat": "Emotions & reactions"
    },
    {
      "tl": "hay naku",
      "pron": "hay na-KOO",
      "en": "oh my gosh! (exasperation)",
      "cat": "Emotions & reactions"
    },
    {
      "tl": "hindi nga!",
      "pron": "hin-DEE nga",
      "en": "no way!",
      "cat": "Emotions & reactions"
    },
    {
      "tl": "kilig",
      "pron": "KI-lig",
      "en": "giddy / thrilled",
      "cat": "Emotions & reactions"
    },
    {
      "tl": "sayang",
      "pron": "SA-yang",
      "en": "what a waste!",
      "cat": "Emotions & reactions"
    },
    {
      "tl": "talaga?",
      "pron": "ta-la-GA",
      "en": "really?",
      "cat": "Emotions & reactions"
    },
    {
      "tl": "gusto ko",
      "pron": "GOOS-to ko",
      "en": "i want / i'd like",
      "cat": "Everyday expressions"
    },
    {
      "tl": "maraming salamat",
      "pron": "ma-RA-ming sa-LA-mat",
      "en": "thank you very much",
      "cat": "Everyday expressions"
    },
    {
      "tl": "sige",
      "pron": "SI-ge",
      "en": "okay / go ahead",
      "cat": "Everyday expressions"
    },
    {
      "tl": "tara",
      "pron": "ta-RA",
      "en": "let's go",
      "cat": "Everyday expressions"
    },
    {
      "tl": "uso",
      "pron": "OO-so",
      "en": "trending / in style",
      "cat": "Everyday expressions"
    }
  ],
  "7": [
    {
      "tl": "bahay",
      "pron": "BA-hay",
      "en": "house (noun)",
      "cat": "Nouns"
    },
    {
      "tl": "kabaitan",
      "pron": "ka-ba-EE-tan",
      "en": "kindness",
      "cat": "Nouns"
    },
    {
      "tl": "kagandahan",
      "pron": "ka-gan-DA-han",
      "en": "beauty",
      "cat": "Nouns"
    },
    {
      "tl": "kalungkutan",
      "pron": "ka-lung-KOO-tan",
      "en": "sadness",
      "cat": "Nouns"
    },
    {
      "tl": "karunungan",
      "pron": "ka-roo-NOO-ngan",
      "en": "wisdom",
      "cat": "Nouns"
    },
    {
      "tl": "kasiyahan",
      "pron": "ka-si-ya-HAN",
      "en": "happiness",
      "cat": "Nouns"
    },
    {
      "tl": "katapangan",
      "pron": "ka-ta-PA-ngan",
      "en": "bravery",
      "cat": "Nouns"
    },
    {
      "tl": "pag-ibig",
      "pron": "pag-EE-big",
      "en": "love (abstract noun)",
      "cat": "Nouns"
    },
    {
      "tl": "pagkakaibigan",
      "pron": "pag-ka-ka-i-BI-gan",
      "en": "friendship",
      "cat": "Nouns"
    },
    {
      "tl": "asul",
      "pron": "a-SOOL",
      "en": "blue",
      "cat": "Adjectives"
    },
    {
      "tl": "dilaw",
      "pron": "di-LAW",
      "en": "yellow",
      "cat": "Adjectives"
    },
    {
      "tl": "itim",
      "pron": "ee-TIM",
      "en": "black",
      "cat": "Adjectives"
    },
    {
      "tl": "luntian",
      "pron": "loon-ti-YAN",
      "en": "green",
      "cat": "Adjectives"
    },
    {
      "tl": "maliit",
      "pron": "ma-li-IT",
      "en": "small",
      "cat": "Adjectives"
    },
    {
      "tl": "malungkot",
      "pron": "ma-lung-KOT",
      "en": "sad",
      "cat": "Adjectives"
    },
    {
      "tl": "matalino",
      "pron": "ma-ta-LI-no",
      "en": "smart",
      "cat": "Adjectives"
    },
    {
      "tl": "matangkad",
      "pron": "ma-tang-KAD",
      "en": "tall (person)",
      "cat": "Adjectives"
    },
    {
      "tl": "matapang",
      "pron": "ma-ta-PANG",
      "en": "brave",
      "cat": "Adjectives"
    },
    {
      "tl": "napakaganda",
      "pron": "na-pa-ka-gan-DA",
      "en": "very beautiful",
      "cat": "Adjectives"
    },
    {
      "tl": "pangit",
      "pron": "pa-NGIT",
      "en": "ugly",
      "cat": "Adjectives"
    },
    {
      "tl": "pula",
      "pron": "poo-LA",
      "en": "red",
      "cat": "Adjectives"
    },
    {
      "tl": "puti",
      "pron": "poo-TI",
      "en": "white",
      "cat": "Adjectives"
    },
    {
      "tl": "bukas",
      "pron": "boo-KAS",
      "en": "tomorrow",
      "cat": "Adverbs"
    },
    {
      "tl": "dito",
      "pron": "DEE-to",
      "en": "here",
      "cat": "Adverbs"
    },
    {
      "tl": "diyan",
      "pron": "di-YAN",
      "en": "there (near you)",
      "cat": "Adverbs"
    },
    {
      "tl": "doon",
      "pron": "do-ON",
      "en": "there (far)",
      "cat": "Adverbs"
    },
    {
      "tl": "kahapon",
      "pron": "ka-ha-PON",
      "en": "yesterday",
      "cat": "Adverbs"
    },
    {
      "tl": "mabagal",
      "pron": "ma-BA-gal",
      "en": "slow / slowly",
      "cat": "Adverbs"
    },
    {
      "tl": "mabilis",
      "pron": "ma-bi-LIS",
      "en": "fast / quickly",
      "cat": "Adverbs"
    },
    {
      "tl": "maingat",
      "pron": "ma-I-ngat",
      "en": "careful / carefully",
      "cat": "Adverbs"
    },
    {
      "tl": "medyo",
      "pron": "MED-yo",
      "en": "somewhat",
      "cat": "Adverbs"
    },
    {
      "tl": "minsan",
      "pron": "min-SAN",
      "en": "sometimes",
      "cat": "Adverbs"
    },
    {
      "tl": "ngayon",
      "pron": "nga-YON",
      "en": "now",
      "cat": "Adverbs"
    },
    {
      "tl": "palagi",
      "pron": "pa-LA-gi",
      "en": "always",
      "cat": "Adverbs"
    },
    {
      "tl": "at",
      "pron": "at",
      "en": "and",
      "cat": "Conjunctions"
    },
    {
      "tl": "habang",
      "pron": "HA-bang",
      "en": "while",
      "cat": "Conjunctions"
    },
    {
      "tl": "kasi",
      "pron": "ka-SI",
      "en": "because",
      "cat": "Conjunctions"
    },
    {
      "tl": "kung",
      "pron": "koong",
      "en": "if",
      "cat": "Conjunctions"
    },
    {
      "tl": "o",
      "pron": "oh",
      "en": "or",
      "cat": "Conjunctions"
    },
    {
      "tl": "pero",
      "pron": "PE-ro",
      "en": "but",
      "cat": "Conjunctions"
    }
  ],
  "8": [
    {
      "tl": "kumusta",
      "pron": "koo-MOOS-tah",
      "en": "how are you? / hello",
      "cat": "Greetings"
    },
    {
      "tl": "magandang umaga",
      "pron": "ma-gan-DANG oo-MA-ga",
      "en": "good morning",
      "cat": "Greetings"
    },
    {
      "tl": "paalam",
      "pron": "pa-A-lam",
      "en": "goodbye",
      "cat": "Greetings"
    },
    {
      "tl": "hindi",
      "pron": "hin-DEE",
      "en": "no / not",
      "cat": "Courtesy & responses"
    },
    {
      "tl": "mabuti",
      "pron": "ma-BOO-ti",
      "en": "good / fine",
      "cat": "Courtesy & responses"
    },
    {
      "tl": "oo",
      "pron": "OH-oh",
      "en": "yes",
      "cat": "Courtesy & responses"
    },
    {
      "tl": "opo",
      "pron": "OH-po",
      "en": "yes (respectful)",
      "cat": "Courtesy & responses"
    },
    {
      "tl": "salamat",
      "pron": "sah-LAH-mat",
      "en": "thank you",
      "cat": "Courtesy & responses"
    },
    {
      "tl": "gusto",
      "pron": "GOOS-to",
      "en": "want / like",
      "cat": "Useful words"
    },
    {
      "tl": "pwede",
      "pron": "PWEH-de",
      "en": "can / may / possible",
      "cat": "Useful words"
    }
  ],
  "9": [
    {
      "tl": "gusto",
      "pron": "GOOS-toh",
      "en": "want / like",
      "cat": "Greetings & basics"
    },
    {
      "tl": "hindi",
      "pron": "hin-DEE",
      "en": "no / not",
      "cat": "Greetings & basics"
    },
    {
      "tl": "kumusta",
      "pron": "koo-MOOS-tah",
      "en": "hello / how are you?",
      "cat": "Greetings & basics"
    },
    {
      "tl": "opo",
      "pron": "OH-poh",
      "en": "yes (respectful)",
      "cat": "Greetings & basics"
    },
    {
      "tl": "paalam",
      "pron": "pah-AH-lam",
      "en": "goodbye",
      "cat": "Greetings & basics"
    },
    {
      "tl": "pwede",
      "pron": "PWEH-deh",
      "en": "can / may / possible",
      "cat": "Greetings & basics"
    },
    {
      "tl": "salamat",
      "pron": "sah-LAH-mat",
      "en": "thank you",
      "cat": "Greetings & basics"
    },
    {
      "tl": "ano",
      "pron": "ah-NOH",
      "en": "what",
      "cat": "Question words"
    },
    {
      "tl": "magkano",
      "pron": "mag-kah-NOH",
      "en": "how much",
      "cat": "Question words"
    },
    {
      "tl": "kailangan",
      "pron": "kah-ee-lah-NGAN",
      "en": "need / necessary",
      "cat": "Useful words"
    },
    {
      "tl": "lahat",
      "pron": "lah-HAHT",
      "en": "all",
      "cat": "Useful words"
    },
    {
      "tl": "anak",
      "pron": "ah-NAHK",
      "en": "child",
      "cat": "Family",
      "img": "anak"
    },
    {
      "tl": "kaibigan",
      "pron": "kah-ee-bee-GAHN",
      "en": "friend",
      "cat": "Family",
      "img": "kaibigan"
    },
    {
      "tl": "kapatid",
      "pron": "kah-pah-TEED",
      "en": "sibling",
      "cat": "Family"
    },
    {
      "tl": "lola",
      "pron": "loh-LAH",
      "en": "grandmother",
      "cat": "Family",
      "img": "lola"
    },
    {
      "tl": "lolo",
      "pron": "loh-LOH",
      "en": "grandfather",
      "cat": "Family",
      "img": "lolo"
    },
    {
      "tl": "nanay",
      "pron": "nah-NIGH",
      "en": "mother",
      "cat": "Family",
      "img": "nanay"
    },
    {
      "tl": "pamilya",
      "pron": "pah-MEEL-yah",
      "en": "family",
      "cat": "Family",
      "img": "pamilya"
    },
    {
      "tl": "tatay",
      "pron": "tah-TIGH",
      "en": "father",
      "cat": "Family",
      "img": "tatay"
    },
    {
      "tl": "isa",
      "pron": "ee-SAH",
      "en": "one",
      "cat": "Numbers"
    },
    {
      "tl": "dalawa",
      "pron": "dah-lah-WAH",
      "en": "two",
      "cat": "Numbers"
    },
    {
      "tl": "tatlo",
      "pron": "taht-LOH",
      "en": "three",
      "cat": "Numbers"
    },
    {
      "tl": "lima",
      "pron": "lee-MAH",
      "en": "five",
      "cat": "Numbers"
    },
    {
      "tl": "sampu",
      "pron": "sahm-POO",
      "en": "ten",
      "cat": "Numbers"
    },
    {
      "tl": "araw",
      "pron": "ah-RAHW",
      "en": "day / sun",
      "cat": "Time & weather"
    },
    {
      "tl": "bukas",
      "pron": "boo-KAHS",
      "en": "tomorrow",
      "cat": "Time & weather"
    },
    {
      "tl": "gabi",
      "pron": "gah-BEE",
      "en": "night / evening",
      "cat": "Time & weather"
    },
    {
      "tl": "linggo",
      "pron": "leeng-GOH",
      "en": "week / sunday",
      "cat": "Time & weather"
    },
    {
      "tl": "ngayon",
      "pron": "ngah-YOHN",
      "en": "now / today",
      "cat": "Time & weather"
    },
    {
      "tl": "oras",
      "pron": "oh-RAHS",
      "en": "time / hour",
      "cat": "Time & weather"
    },
    {
      "tl": "ulan",
      "pron": "oo-LAHN",
      "en": "rain",
      "cat": "Time & weather"
    },
    {
      "tl": "umaga",
      "pron": "oo-mah-GAH",
      "en": "morning",
      "cat": "Time & weather"
    },
    {
      "tl": "adobo",
      "pron": "ah-doh-BOH",
      "en": "adobo (filipino dish)",
      "cat": "Food & drink",
      "img": "adobo"
    },
    {
      "tl": "gulay",
      "pron": "goo-LIGH",
      "en": "vegetable",
      "cat": "Food & drink",
      "img": "gulay"
    },
    {
      "tl": "isda",
      "pron": "ees-DAH",
      "en": "fish",
      "cat": "Food & drink",
      "img": "isda"
    },
    {
      "tl": "kanin",
      "pron": "kah-NEEN",
      "en": "rice",
      "cat": "Food & drink",
      "img": "kanin"
    },
    {
      "tl": "kape",
      "pron": "kah-PEH",
      "en": "coffee",
      "cat": "Food & drink",
      "img": "kape"
    },
    {
      "tl": "mangga",
      "pron": "mahng-GAH",
      "en": "mango",
      "cat": "Food & drink",
      "img": "mangga"
    },
    {
      "tl": "manok",
      "pron": "mah-NOHK",
      "en": "chicken",
      "cat": "Food & drink",
      "img": "manok"
    },
    {
      "tl": "sinigang",
      "pron": "shee-nee-GAHNG",
      "en": "sour soup",
      "cat": "Food & drink",
      "img": "sinigang"
    },
    {
      "tl": "ulam",
      "pron": "oo-LAHM",
      "en": "main dish / viand",
      "cat": "Food & drink",
      "img": "ulam"
    },
    {
      "tl": "dumating",
      "pron": "doo-mah-TEENG",
      "en": "arrived",
      "cat": "Verbs"
    },
    {
      "tl": "gumising",
      "pron": "goo-mee-SEENG",
      "en": "woke up",
      "cat": "Verbs"
    },
    {
      "tl": "kumain",
      "pron": "koo-mah-IN",
      "en": "ate",
      "cat": "Verbs"
    },
    {
      "tl": "nag-aral",
      "pron": "nahg ah-RAHL",
      "en": "studied",
      "cat": "Verbs"
    },
    {
      "tl": "natulog",
      "pron": "nah-too-LOHG",
      "en": "slept",
      "cat": "Verbs"
    },
    {
      "tl": "pumunta",
      "pron": "poo-moon-TAH",
      "en": "went",
      "cat": "Verbs"
    },
    {
      "tl": "uminom",
      "pron": "oo-mee-NOHM",
      "en": "drank",
      "cat": "Verbs"
    },
    {
      "tl": "mabait",
      "pron": "mah-bah-EET",
      "en": "kind",
      "cat": "Adjectives"
    },
    {
      "tl": "maganda",
      "pron": "mah-gahn-DAH",
      "en": "beautiful",
      "cat": "Adjectives"
    },
    {
      "tl": "mahal",
      "pron": "mah-HAHL",
      "en": "expensive / love",
      "cat": "Adjectives"
    },
    {
      "tl": "mainit",
      "pron": "mah-ee-NEET",
      "en": "hot",
      "cat": "Adjectives"
    },
    {
      "tl": "malaki",
      "pron": "mah-lah-KEE",
      "en": "big",
      "cat": "Adjectives"
    },
    {
      "tl": "masarap",
      "pron": "mah-sah-RAHP",
      "en": "delicious",
      "cat": "Adjectives"
    },
    {
      "tl": "masaya",
      "pron": "mah-sah-YAH",
      "en": "happy",
      "cat": "Adjectives"
    },
    {
      "tl": "bahay",
      "pron": "bah-HIGH",
      "en": "house",
      "cat": "Places & things"
    },
    {
      "tl": "kotse",
      "pron": "koht-SEH",
      "en": "car",
      "cat": "Places & things"
    },
    {
      "tl": "kusina",
      "pron": "koo-shee-NAH",
      "en": "kitchen",
      "cat": "Places & things"
    },
    {
      "tl": "palengke",
      "pron": "pah-lehng-KEH",
      "en": "market",
      "cat": "Places & things"
    },
    {
      "tl": "pera",
      "pron": "peh-RAH",
      "en": "money",
      "cat": "Places & things"
    }
  ],
  "10": [
    {
      "tl": "may",
      "pron": "my",
      "en": "have / there is",
      "cat": "Having & existing"
    },
    {
      "tl": "mayroon",
      "pron": "my-ROH-on",
      "en": "have / there is (full form)",
      "cat": "Having & existing"
    },
    {
      "tl": "wala",
      "pron": "wah-LAH",
      "en": "none / there isn't",
      "cat": "Having & existing"
    },
    {
      "tl": "na",
      "pron": "nah",
      "en": "already / now",
      "cat": "Particles"
    },
    {
      "tl": "pa",
      "pron": "pah",
      "en": "still / yet / more",
      "cat": "Particles"
    },
    {
      "tl": "ba",
      "pron": "bah",
      "en": "question marker",
      "cat": "Particles"
    },
    {
      "tl": "lang",
      "pron": "lahng",
      "en": "only / just",
      "cat": "Particles"
    },
    {
      "tl": "rin",
      "pron": "reen",
      "en": "also / too",
      "cat": "Particles"
    },
    {
      "tl": "daw",
      "pron": "dow",
      "en": "reportedly / they say",
      "cat": "Particles"
    },
    {
      "tl": "nga",
      "pron": "ngah",
      "en": "indeed / please (softener)",
      "cat": "Particles"
    },
    {
      "tl": "pala",
      "pron": "pah-LAH",
      "en": "oh! (realization)",
      "cat": "Particles"
    },
    {
      "tl": "ko",
      "pron": "koh",
      "en": "my / by me",
      "cat": "Pronoun forms"
    },
    {
      "tl": "mo",
      "pron": "moh",
      "en": "your / by you",
      "cat": "Pronoun forms"
    },
    {
      "tl": "niya",
      "pron": "nee-YAH",
      "en": "his / her / by him / by her",
      "cat": "Pronoun forms"
    },
    {
      "tl": "namin",
      "pron": "NAH-min",
      "en": "our / by us (exclusive)",
      "cat": "Pronoun forms"
    },
    {
      "tl": "natin",
      "pron": "NAH-tin",
      "en": "our / by us (inclusive)",
      "cat": "Pronoun forms"
    },
    {
      "tl": "nila",
      "pron": "nee-LAH",
      "en": "their / by them",
      "cat": "Pronoun forms"
    },
    {
      "tl": "akin",
      "pron": "AH-kin",
      "en": "to me / mine",
      "cat": "Pronoun forms"
    },
    {
      "tl": "iyo",
      "pron": "ee-YOH",
      "en": "to you / yours",
      "cat": "Pronoun forms"
    },
    {
      "tl": "kaniya",
      "pron": "kah-nee-YAH",
      "en": "to him / to her",
      "cat": "Pronoun forms"
    },
    {
      "tl": "ito",
      "pron": "ee-TOH",
      "en": "this (near me)",
      "cat": "Pointing words"
    },
    {
      "tl": "iyan",
      "pron": "ee-YAHN",
      "en": "that (near you)",
      "cat": "Pointing words"
    },
    {
      "tl": "iyon",
      "pron": "ee-YOHN",
      "en": "that (over there)",
      "cat": "Pointing words"
    },
    {
      "tl": "mas",
      "pron": "mahs",
      "en": "more",
      "cat": "Comparing"
    },
    {
      "tl": "pinaka",
      "pron": "pee-nah-KAH",
      "en": "the most (prefix)",
      "cat": "Comparing"
    },
    {
      "tl": "kaysa",
      "pron": "KY-sah",
      "en": "than",
      "cat": "Comparing"
    },
    {
      "tl": "na / -ng",
      "pron": "nah / ng",
      "en": "linker (joins words)",
      "cat": "Comparing"
    }
  ],
  "11": [
    {
      "tl": "gusto",
      "pron": "GOOS-toh",
      "en": "want / like",
      "cat": "Pseudo-verbs (modals)"
    },
    {
      "tl": "ayaw",
      "pron": "AH-yaw",
      "en": "don't want / don't like",
      "cat": "Pseudo-verbs (modals)"
    },
    {
      "tl": "kailangan",
      "pron": "kah-ee-LAHN-gan",
      "en": "need",
      "cat": "Pseudo-verbs (modals)"
    },
    {
      "tl": "pwede",
      "pron": "PWEH-deh",
      "en": "can / may (allowed)",
      "cat": "Pseudo-verbs (modals)"
    },
    {
      "tl": "maaari",
      "pron": "mah-ah-AH-ree",
      "en": "can / may (formal)",
      "cat": "Pseudo-verbs (modals)"
    },
    {
      "tl": "dapat",
      "pron": "DAH-pat",
      "en": "should / must / ought to",
      "cat": "Pseudo-verbs (modals)"
    },
    {
      "tl": "kumain",
      "pron": "koo-MAH-in",
      "en": "to eat",
      "cat": "Verbs used with modals"
    },
    {
      "tl": "matulog",
      "pron": "mah-TOO-log",
      "en": "to sleep",
      "cat": "Verbs used with modals"
    },
    {
      "tl": "umalis",
      "pron": "oo-mah-LEES",
      "en": "to leave / go",
      "cat": "Verbs used with modals"
    },
    {
      "tl": "pumunta",
      "pron": "poo-moon-TAH",
      "en": "to go (to)",
      "cat": "Verbs used with modals"
    },
    {
      "tl": "mag-aral",
      "pron": "mag-AH-ral",
      "en": "to study",
      "cat": "Verbs used with modals"
    },
    {
      "tl": "magpahinga",
      "pron": "mag-pah-heeng-AH",
      "en": "to rest",
      "cat": "Verbs used with modals"
    },
    {
      "tl": "magtanong",
      "pron": "mag-tah-NONG",
      "en": "to ask",
      "cat": "Verbs used with modals"
    },
    {
      "tl": "tulong",
      "pron": "TOO-long",
      "en": "help",
      "cat": "Useful words"
    },
    {
      "tl": "tubig",
      "pron": "TOO-big",
      "en": "water",
      "cat": "Useful words"
    }
  ],
  "12": [
    {
      "tl": "hindi",
      "pron": "hin-DEE",
      "en": "not / no (all-purpose)",
      "cat": "Negators"
    },
    {
      "tl": "wala",
      "pron": "wah-LAH",
      "en": "none / there isn't",
      "cat": "Negators"
    },
    {
      "tl": "ayaw",
      "pron": "AH-yaw",
      "en": "don't want / don't like",
      "cat": "Negators"
    },
    {
      "tl": "huwag",
      "pron": "HOO-wag",
      "en": "don't! (command)",
      "cat": "Negators"
    },
    {
      "tl": "hindi pwede",
      "pron": "hin-DEE PWEH-deh",
      "en": "can't / not allowed",
      "cat": "Negative phrases"
    },
    {
      "tl": "hindi kailangan",
      "pron": "hin-DEE kah-ee-LAHN-gan",
      "en": "don't need",
      "cat": "Negative phrases"
    },
    {
      "tl": "hindi dapat",
      "pron": "hin-DEE DAH-pat",
      "en": "shouldn't",
      "cat": "Negative phrases"
    },
    {
      "tl": "wala na",
      "pron": "wah-LAH NAH",
      "en": "none left / gone",
      "cat": "Negative phrases"
    },
    {
      "tl": "hindi pa",
      "pron": "hin-DEE PAH",
      "en": "not yet",
      "cat": "Negative phrases"
    }
  ],
  "13": [
    {
      "tl": "ano",
      "pron": "ah-NOH",
      "en": "what",
      "cat": "Question words"
    },
    {
      "tl": "sino",
      "pron": "SEE-noh",
      "en": "who",
      "cat": "Question words"
    },
    {
      "tl": "saan",
      "pron": "sah-AHN",
      "en": "where",
      "cat": "Question words"
    },
    {
      "tl": "kailan",
      "pron": "ky-LAHN",
      "en": "when",
      "cat": "Question words"
    },
    {
      "tl": "bakit",
      "pron": "BAH-kit",
      "en": "why",
      "cat": "Question words"
    },
    {
      "tl": "paano",
      "pron": "pah-AH-noh",
      "en": "how (in what way)",
      "cat": "Question words"
    },
    {
      "tl": "alin",
      "pron": "ah-LEEN",
      "en": "which",
      "cat": "Question words"
    },
    {
      "tl": "ilan",
      "pron": "ee-LAHN",
      "en": "how many",
      "cat": "Question words"
    },
    {
      "tl": "magkano",
      "pron": "mag-KAH-noh",
      "en": "how much (price)",
      "cat": "Question words"
    },
    {
      "tl": "kanino",
      "pron": "kah-NEE-noh",
      "en": "whose / to whom",
      "cat": "Question words"
    },
    {
      "tl": "kasi",
      "pron": "kah-SEE",
      "en": "because (casual)",
      "cat": "Answering words"
    },
    {
      "tl": "dahil",
      "pron": "DAH-hil",
      "en": "because",
      "cat": "Answering words"
    }
  ],
  "14": [
    {
      "tl": "paki-",
      "pron": "PAH-kee",
      "en": "please (do) — verb prefix",
      "cat": "Polite request words"
    },
    {
      "tl": "pakiabot",
      "pron": "pah-kee-ah-BOT",
      "en": "please pass / hand",
      "cat": "Polite request words"
    },
    {
      "tl": "pakisara",
      "pron": "pah-kee-sah-RAH",
      "en": "please close",
      "cat": "Polite request words"
    },
    {
      "tl": "pakibuksan",
      "pron": "pah-kee-book-SAHN",
      "en": "please open",
      "cat": "Polite request words"
    },
    {
      "tl": "pakitulungan",
      "pron": "pah-kee-too-LOO-ngan",
      "en": "please help",
      "cat": "Polite request words"
    },
    {
      "tl": "pakiusap",
      "pron": "pah-kee-OO-sap",
      "en": "please / a request",
      "cat": "Polite request words"
    },
    {
      "tl": "halika",
      "pron": "hah-lee-KAH",
      "en": "come here",
      "cat": "Common commands"
    },
    {
      "tl": "tara",
      "pron": "tah-RAH",
      "en": "let's go (casual)",
      "cat": "Common commands"
    },
    {
      "tl": "umupo",
      "pron": "oo-moo-POH",
      "en": "sit down",
      "cat": "Common commands"
    },
    {
      "tl": "tumayo",
      "pron": "too-mah-YOH",
      "en": "stand up",
      "cat": "Common commands"
    },
    {
      "tl": "sandali",
      "pron": "san-dah-LEE",
      "en": "a moment / wait",
      "cat": "Courtesy"
    },
    {
      "tl": "paumanhin",
      "pron": "pah-oo-mahn-HEEN",
      "en": "excuse me (formal)",
      "cat": "Courtesy"
    },
    {
      "tl": "pasensya na",
      "pron": "pah-SEN-sha nah",
      "en": "sorry / pardon me",
      "cat": "Courtesy"
    }
  ],
  "15": [
    {
      "tl": "pula",
      "pron": "poo-LAH",
      "en": "red",
      "cat": "Colors",
      "img": "pula"
    },
    {
      "tl": "asul",
      "pron": "ah-SOOL",
      "en": "blue",
      "cat": "Colors",
      "img": "asul"
    },
    {
      "tl": "dilaw",
      "pron": "dee-LOW",
      "en": "yellow",
      "cat": "Colors",
      "img": "dilaw"
    },
    {
      "tl": "berde",
      "pron": "BEHR-deh",
      "en": "green",
      "cat": "Colors",
      "img": "berde"
    },
    {
      "tl": "puti",
      "pron": "poo-TEE",
      "en": "white",
      "cat": "Colors",
      "img": "puti"
    },
    {
      "tl": "itim",
      "pron": "ee-TEEM",
      "en": "black",
      "cat": "Colors",
      "img": "itim"
    },
    {
      "tl": "kahel",
      "pron": "KAH-hel",
      "en": "orange",
      "cat": "Colors",
      "img": "kahel"
    },
    {
      "tl": "kulay-rosas",
      "pron": "KOO-lai ROH-sas",
      "en": "pink",
      "cat": "Colors",
      "img": "kulay-rosas"
    },
    {
      "tl": "kayumanggi",
      "pron": "kah-yoo-mahng-GEE",
      "en": "brown",
      "cat": "Colors",
      "img": "kayumanggi"
    },
    {
      "tl": "mainit",
      "pron": "mah-EE-nit",
      "en": "hot",
      "cat": "Weather & seasons"
    },
    {
      "tl": "malamig",
      "pron": "mah-lah-MEEG",
      "en": "cold / cool",
      "cat": "Weather & seasons"
    },
    {
      "tl": "maaraw",
      "pron": "mah-AH-row",
      "en": "sunny",
      "cat": "Weather & seasons"
    },
    {
      "tl": "maulan",
      "pron": "mah-OO-lan",
      "en": "rainy",
      "cat": "Weather & seasons"
    },
    {
      "tl": "umuulan",
      "pron": "oo-moo-OO-lan",
      "en": "it's raining",
      "cat": "Weather & seasons"
    },
    {
      "tl": "bagyo",
      "pron": "BAG-yoh",
      "en": "storm / typhoon",
      "cat": "Weather & seasons"
    },
    {
      "tl": "tag-init",
      "pron": "tag-EE-nit",
      "en": "hot/dry season",
      "cat": "Weather & seasons"
    },
    {
      "tl": "tag-ulan",
      "pron": "tag-OO-lan",
      "en": "rainy season",
      "cat": "Weather & seasons"
    },
    {
      "tl": "damit",
      "pron": "dah-MEET",
      "en": "clothes / dress",
      "cat": "Clothing",
      "img": "damit"
    },
    {
      "tl": "kamiseta",
      "pron": "kah-mee-SEH-tah",
      "en": "shirt / t-shirt",
      "cat": "Clothing",
      "img": "kamiseta"
    },
    {
      "tl": "pantalon",
      "pron": "pan-tah-LOHN",
      "en": "pants / trousers",
      "cat": "Clothing",
      "img": "pantalon"
    },
    {
      "tl": "sapatos",
      "pron": "sah-PAH-tos",
      "en": "shoes",
      "cat": "Clothing",
      "img": "sapatos"
    },
    {
      "tl": "medyas",
      "pron": "MED-yas",
      "en": "socks",
      "cat": "Clothing",
      "img": "medyas"
    },
    {
      "tl": "sombrero",
      "pron": "som-BREH-roh",
      "en": "hat",
      "cat": "Clothing",
      "img": "sombrero"
    },
    {
      "tl": "bestida",
      "pron": "bes-TEE-dah",
      "en": "dress",
      "cat": "Clothing",
      "img": "bestida"
    },
    {
      "tl": "palda",
      "pron": "PAL-dah",
      "en": "skirt",
      "cat": "Clothing",
      "img": "palda"
    }
  ],
  "16": [
    {
      "tl": "ulo",
      "pron": "OO-loh",
      "en": "head",
      "cat": "The body",
      "img": "ulo"
    },
    {
      "tl": "mata",
      "pron": "mah-TAH",
      "en": "eye(s)",
      "cat": "The body",
      "img": "mata"
    },
    {
      "tl": "ilong",
      "pron": "ee-LOHNG",
      "en": "nose",
      "cat": "The body",
      "img": "ilong"
    },
    {
      "tl": "bibig",
      "pron": "bee-BEEG",
      "en": "mouth",
      "cat": "The body",
      "img": "bibig"
    },
    {
      "tl": "tenga",
      "pron": "TEH-ngah",
      "en": "ear",
      "cat": "The body",
      "img": "tenga"
    },
    {
      "tl": "kamay",
      "pron": "kah-MY",
      "en": "hand",
      "cat": "The body",
      "img": "kamay"
    },
    {
      "tl": "paa",
      "pron": "pah-AH",
      "en": "foot / leg",
      "cat": "The body",
      "img": "paa"
    },
    {
      "tl": "tiyan",
      "pron": "tee-YAHN",
      "en": "stomach",
      "cat": "The body",
      "img": "tiyan"
    },
    {
      "tl": "masakit",
      "pron": "mah-sah-KEET",
      "en": "painful / it hurts",
      "cat": "Health",
      "img": "masakit"
    },
    {
      "tl": "sakit",
      "pron": "sah-KEET",
      "en": "pain / illness",
      "cat": "Health",
      "img": "sakit"
    },
    {
      "tl": "lagnat",
      "pron": "LAG-nat",
      "en": "fever",
      "cat": "Health",
      "img": "lagnat"
    },
    {
      "tl": "ubo",
      "pron": "oo-BOH",
      "en": "cough",
      "cat": "Health",
      "img": "ubo"
    },
    {
      "tl": "sipon",
      "pron": "SEE-pon",
      "en": "cold / runny nose",
      "cat": "Health",
      "img": "sipon"
    },
    {
      "tl": "gamot",
      "pron": "gah-MOHT",
      "en": "medicine",
      "cat": "Health",
      "img": "gamot"
    },
    {
      "tl": "doktor",
      "pron": "dok-TOHR",
      "en": "doctor",
      "cat": "Health",
      "img": "doktor"
    },
    {
      "tl": "ospital",
      "pron": "os-pee-TAHL",
      "en": "hospital",
      "cat": "Health",
      "img": "ospital"
    },
    {
      "tl": "Lunes",
      "pron": "LOO-nes",
      "en": "Monday",
      "cat": "Days of the week"
    },
    {
      "tl": "Martes",
      "pron": "MAR-tes",
      "en": "Tuesday",
      "cat": "Days of the week"
    },
    {
      "tl": "Miyerkules",
      "pron": "mee-YER-koo-les",
      "en": "Wednesday",
      "cat": "Days of the week"
    },
    {
      "tl": "Huwebes",
      "pron": "hoo-WEH-bes",
      "en": "Thursday",
      "cat": "Days of the week"
    },
    {
      "tl": "Biyernes",
      "pron": "bee-YER-nes",
      "en": "Friday",
      "cat": "Days of the week"
    },
    {
      "tl": "Sabado",
      "pron": "SAH-bah-doh",
      "en": "Saturday",
      "cat": "Days of the week"
    },
    {
      "tl": "Linggo",
      "pron": "LING-goh",
      "en": "Sunday / week",
      "cat": "Days of the week"
    },
    {
      "tl": "Enero",
      "pron": "eh-NEH-roh",
      "en": "January",
      "cat": "Months"
    },
    {
      "tl": "Pebrero",
      "pron": "peb-REH-roh",
      "en": "February",
      "cat": "Months"
    },
    {
      "tl": "Marso",
      "pron": "MAR-soh",
      "en": "March",
      "cat": "Months"
    },
    {
      "tl": "Abril",
      "pron": "ab-REEL",
      "en": "April",
      "cat": "Months"
    },
    {
      "tl": "Mayo",
      "pron": "MAH-yoh",
      "en": "May",
      "cat": "Months"
    },
    {
      "tl": "Hunyo",
      "pron": "HOON-yoh",
      "en": "June",
      "cat": "Months"
    },
    {
      "tl": "Hulyo",
      "pron": "HOOL-yoh",
      "en": "July",
      "cat": "Months"
    },
    {
      "tl": "Agosto",
      "pron": "ah-GOS-toh",
      "en": "August",
      "cat": "Months"
    },
    {
      "tl": "Setyembre",
      "pron": "set-YEM-breh",
      "en": "September",
      "cat": "Months"
    },
    {
      "tl": "Oktubre",
      "pron": "ok-TOO-breh",
      "en": "October",
      "cat": "Months"
    },
    {
      "tl": "Nobyembre",
      "pron": "nob-YEM-breh",
      "en": "November",
      "cat": "Months"
    },
    {
      "tl": "Disyembre",
      "pron": "dis-YEM-breh",
      "en": "December",
      "cat": "Months"
    }
  ]
};
