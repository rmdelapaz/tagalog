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
    "9": "Vocabulary Reference"
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
      "cat": "Animals"
    },
    {
      "tl": "isda",
      "pron": "is-DAH",
      "en": "fish",
      "cat": "Animals"
    },
    {
      "tl": "oso",
      "pron": "OH-so",
      "en": "bear",
      "cat": "Animals"
    },
    {
      "tl": "pusa",
      "pron": "POO-sa",
      "en": "cat",
      "cat": "Animals"
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
      "tl": "kumakain",
      "pron": "koo-ma-KAH-in",
      "en": "eating"
    },
    {
      "tl": "ako",
      "pron": "a-KO",
      "en": "i / me"
    },
    {
      "tl": "ang",
      "pron": "ang",
      "en": "the (focus marker)"
    },
    {
      "tl": "ng",
      "pron": "nang",
      "en": "object / possession marker"
    },
    {
      "tl": "sa",
      "pron": "sa",
      "en": "to / at / in (location marker)"
    },
    {
      "tl": "aso",
      "pron": "AH-so",
      "en": "dog"
    },
    {
      "tl": "tumutulog",
      "pron": "too-moo-TOO-log",
      "en": "sleeping"
    },
    {
      "tl": "naglalaro",
      "pron": "nag-la-la-RO",
      "en": "playing"
    },
    {
      "tl": "malaki",
      "pron": "ma-la-KI",
      "en": "big"
    },
    {
      "tl": "masaya",
      "pron": "ma-sa-YA",
      "en": "happy"
    },
    {
      "tl": "gutom",
      "pron": "GOO-tom",
      "en": "hungry"
    },
    {
      "tl": "babae",
      "pron": "ba-BA-e",
      "en": "woman"
    },
    {
      "tl": "mga bata",
      "pron": "ma-NGA BA-ta",
      "en": "children"
    },
    {
      "tl": "ano",
      "pron": "a-NO",
      "en": "what?"
    },
    {
      "tl": "sino",
      "pron": "SEE-no",
      "en": "who?"
    },
    {
      "tl": "saan",
      "pron": "sa-AN",
      "en": "where?"
    },
    {
      "tl": "kailan",
      "pron": "ka-EE-lan",
      "en": "when?"
    },
    {
      "tl": "palengke",
      "pron": "pa-leng-KE",
      "en": "market"
    },
    {
      "tl": "kanin",
      "pron": "KA-nin",
      "en": "rice (cooked)"
    },
    {
      "tl": "libro",
      "pron": "LIB-ro",
      "en": "book"
    },
    {
      "tl": "nagtatrabaho",
      "pron": "nag-ta-tra-BA-ho",
      "en": "working"
    },
    {
      "tl": "nag-aaral",
      "pron": "nag-a-A-ral",
      "en": "studying"
    },
    {
      "tl": "mabait",
      "pron": "ma-BA-it",
      "en": "kind"
    },
    {
      "tl": "bulaklak",
      "pron": "boo-lak-LAK",
      "en": "flower"
    },
    {
      "tl": "kusina",
      "pron": "koo-SI-na",
      "en": "kitchen"
    },
    {
      "tl": "mesa",
      "pron": "ME-sa",
      "en": "table"
    },
    {
      "tl": "eskwelahan",
      "pron": "es-kwe-la-HAN",
      "en": "school"
    },
    {
      "tl": "nanay",
      "pron": "na-NAY",
      "en": "mother"
    },
    {
      "tl": "tatay",
      "pron": "ta-TAY",
      "en": "father"
    },
    {
      "tl": "lalaki",
      "pron": "la-LA-ki",
      "en": "man"
    },
    {
      "tl": "sapatos",
      "pron": "sa-pa-TOS",
      "en": "shoes"
    },
    {
      "tl": "adobo",
      "pron": "a-DO-bo",
      "en": "adobo (filipino dish)"
    },
    {
      "tl": "mansanas",
      "pron": "man-SA-nas",
      "en": "apple"
    },
    {
      "tl": "ba",
      "pron": "ba",
      "en": "question particle"
    },
    {
      "tl": "ay",
      "pron": "eye",
      "en": "predicate marker (is / are)"
    },
    {
      "tl": "nagluluto",
      "pron": "nag-loo-LOO-to",
      "en": "cooking"
    }
  ],
  "3": [
    {
      "tl": "kumain",
      "pron": "koo-MA-in",
      "en": "ate"
    },
    {
      "tl": "kumakain",
      "pron": "koo-ma-KA-in",
      "en": "eating"
    },
    {
      "tl": "kakain",
      "pron": "KA-ka-in",
      "en": "will eat"
    },
    {
      "tl": "natulog",
      "pron": "na-TOO-log",
      "en": "slept"
    },
    {
      "tl": "natutulog",
      "pron": "na-too-TOO-log",
      "en": "sleeping"
    },
    {
      "tl": "naglaro",
      "pron": "nag-la-RO",
      "en": "played"
    },
    {
      "tl": "nagtrabaho",
      "pron": "nag-tra-BA-ho",
      "en": "worked"
    },
    {
      "tl": "nag-aral",
      "pron": "nag-A-ral",
      "en": "studied"
    },
    {
      "tl": "nagbasa",
      "pron": "nag-BA-sa",
      "en": "read"
    },
    {
      "tl": "sumulat",
      "pron": "soo-MOO-lat",
      "en": "wrote"
    },
    {
      "tl": "nagluto",
      "pron": "nag-LOO-to",
      "en": "cooked"
    },
    {
      "tl": "bumili",
      "pron": "boo-mi-LI",
      "en": "bought"
    },
    {
      "tl": "guro",
      "pron": "GOO-ro",
      "en": "teacher"
    },
    {
      "tl": "estudyante",
      "pron": "es-tood-YAN-te",
      "en": "student"
    },
    {
      "tl": "gulay",
      "pron": "GOO-lay",
      "en": "vegetables"
    },
    {
      "tl": "pera",
      "pron": "PE-ra",
      "en": "money"
    },
    {
      "tl": "matutulog",
      "pron": "ma-too-TOO-log",
      "en": "will sleep"
    },
    {
      "tl": "naglalaro",
      "pron": "nag-la-la-RO",
      "en": "playing"
    },
    {
      "tl": "maglalaro",
      "pron": "mag-la-la-RO",
      "en": "will play"
    },
    {
      "tl": "nagtatrabaho",
      "pron": "nag-ta-tra-BA-ho",
      "en": "working"
    },
    {
      "tl": "magtatrabaho",
      "pron": "mag-ta-tra-BA-ho",
      "en": "will work"
    },
    {
      "tl": "nag-aaral",
      "pron": "nag-a-A-ral",
      "en": "studying"
    },
    {
      "tl": "mag-aaral",
      "pron": "mag-a-A-ral",
      "en": "will study"
    },
    {
      "tl": "nagbabasa",
      "pron": "nag-ba-BA-sa",
      "en": "reading"
    },
    {
      "tl": "magbabasa",
      "pron": "mag-ba-BA-sa",
      "en": "will read"
    },
    {
      "tl": "nagluluto",
      "pron": "nag-loo-LOO-to",
      "en": "cooking"
    },
    {
      "tl": "magluluto",
      "pron": "mag-loo-LOO-to",
      "en": "will cook"
    },
    {
      "tl": "nagtuturo",
      "pron": "nag-too-TOO-ro",
      "en": "teaches"
    },
    {
      "tl": "magnanakaw",
      "pron": "mag-na-NA-kaw",
      "en": "thief"
    },
    {
      "tl": "silid-aralan",
      "pron": "SI-lid a-ra-LAN",
      "en": "classroom"
    },
    {
      "tl": "tapos",
      "pron": "TA-pos",
      "en": "done / finished"
    },
    {
      "tl": "matematika",
      "pron": "ma-te-MA-ti-ka",
      "en": "mathematics"
    },
    {
      "tl": "kain",
      "pron": "ka-IN",
      "en": "eat (root word)"
    },
    {
      "tl": "binili",
      "pron": "bi-ni-LI",
      "en": "bought (object focus)"
    }
  ],
  "4": [
    {
      "tl": "isa",
      "pron": "ee-SA",
      "en": "one"
    },
    {
      "tl": "dalawa",
      "pron": "da-la-WA",
      "en": "two"
    },
    {
      "tl": "tatlo",
      "pron": "tat-LO",
      "en": "three"
    },
    {
      "tl": "apat",
      "pron": "A-pat",
      "en": "four"
    },
    {
      "tl": "lima",
      "pron": "li-MA",
      "en": "five"
    },
    {
      "tl": "anim",
      "pron": "A-nim",
      "en": "six"
    },
    {
      "tl": "pito",
      "pron": "pi-TO",
      "en": "seven"
    },
    {
      "tl": "walo",
      "pron": "wa-LO",
      "en": "eight"
    },
    {
      "tl": "siyam",
      "pron": "SI-yam",
      "en": "nine"
    },
    {
      "tl": "sampu",
      "pron": "sam-POO",
      "en": "ten"
    },
    {
      "tl": "anong oras na?",
      "pron": "a-NONG O-ras na",
      "en": "what time is it?"
    },
    {
      "tl": "umaga",
      "pron": "oo-MA-ga",
      "en": "morning"
    },
    {
      "tl": "tanghali",
      "pron": "tang-HA-li",
      "en": "noon"
    },
    {
      "tl": "hapon",
      "pron": "HA-pon",
      "en": "afternoon"
    },
    {
      "tl": "gabi",
      "pron": "ga-BEE",
      "en": "evening / night"
    },
    {
      "tl": "magkano",
      "pron": "mag-KA-no",
      "en": "how much?"
    },
    {
      "tl": "sukli",
      "pron": "sook-LI",
      "en": "change (money back)"
    },
    {
      "tl": "bayad",
      "pron": "BA-yad",
      "en": "payment"
    },
    {
      "tl": "labing-isa",
      "pron": "la-bing-ee-SA",
      "en": "eleven"
    },
    {
      "tl": "labing-dalawa",
      "pron": "la-bing-da-la-WA",
      "en": "twelve"
    },
    {
      "tl": "dalawampu",
      "pron": "da-la-wam-POO",
      "en": "twenty"
    },
    {
      "tl": "isang daan",
      "pron": "I-sang da-AN",
      "en": "one hundred"
    },
    {
      "tl": "isang libo",
      "pron": "I-sang LI-bo",
      "en": "one thousand"
    },
    {
      "tl": "hatinggabi",
      "pron": "ha-ting-ga-BEE",
      "en": "midnight"
    },
    {
      "tl": "lunes",
      "pron": "LOO-nes",
      "en": "monday"
    },
    {
      "tl": "martes",
      "pron": "MAR-tes",
      "en": "tuesday"
    },
    {
      "tl": "miyerkules",
      "pron": "mi-YER-koo-les",
      "en": "wednesday"
    },
    {
      "tl": "huwebes",
      "pron": "hoo-WE-bes",
      "en": "thursday"
    },
    {
      "tl": "biyernes",
      "pron": "bi-YER-nes",
      "en": "friday"
    },
    {
      "tl": "sabado",
      "pron": "SA-ba-do",
      "en": "saturday"
    },
    {
      "tl": "linggo",
      "pron": "ling-GO",
      "en": "sunday"
    },
    {
      "tl": "kalahati",
      "pron": "ka-la-HA-ti",
      "en": "half past"
    },
    {
      "tl": "una",
      "pron": "OO-na",
      "en": "first"
    },
    {
      "tl": "ikalawa",
      "pron": "i-ka-la-WA",
      "en": "second"
    },
    {
      "tl": "ikatlo",
      "pron": "i-kat-LO",
      "en": "third"
    },
    {
      "tl": "kaarawan",
      "pron": "ka-a-ra-WAN",
      "en": "birthday"
    },
    {
      "tl": "edad",
      "pron": "E-dad",
      "en": "age"
    }
  ],
  "5": [
    {
      "tl": "lolo",
      "pron": "LO-lo",
      "en": "grandfather"
    },
    {
      "tl": "lola",
      "pron": "LO-la",
      "en": "grandmother"
    },
    {
      "tl": "tatay",
      "pron": "ta-TAY",
      "en": "father"
    },
    {
      "tl": "nanay",
      "pron": "na-NAY",
      "en": "mother"
    },
    {
      "tl": "tito",
      "pron": "TI-to",
      "en": "uncle"
    },
    {
      "tl": "tita",
      "pron": "TI-ta",
      "en": "aunt"
    },
    {
      "tl": "kuya",
      "pron": "KOO-ya",
      "en": "older brother"
    },
    {
      "tl": "ate",
      "pron": "A-te",
      "en": "older sister"
    },
    {
      "tl": "bunso",
      "pron": "bun-SO",
      "en": "youngest child"
    },
    {
      "tl": "anak",
      "pron": "a-NAK",
      "en": "child"
    },
    {
      "tl": "kapatid",
      "pron": "ka-pa-TID",
      "en": "sibling"
    },
    {
      "tl": "pinsan",
      "pron": "PIN-san",
      "en": "cousin"
    },
    {
      "tl": "ninong",
      "pron": "NI-nong",
      "en": "godfather"
    },
    {
      "tl": "ninang",
      "pron": "NI-nang",
      "en": "godmother"
    },
    {
      "tl": "asawa",
      "pron": "a-SA-wa",
      "en": "spouse"
    },
    {
      "tl": "kaibigan",
      "pron": "ka-i-BI-gan",
      "en": "friend"
    },
    {
      "tl": "kapitbahay",
      "pron": "ka-pit-BA-hay",
      "en": "neighbor"
    },
    {
      "tl": "magulang",
      "pron": "ma-GOO-lang",
      "en": "parents"
    },
    {
      "tl": "panganay",
      "pron": "pa-nga-NAY",
      "en": "eldest child"
    },
    {
      "tl": "pamangkin",
      "pron": "pa-mang-KIN",
      "en": "niece / nephew"
    },
    {
      "tl": "ama",
      "pron": "A-ma",
      "en": "father (formal)"
    },
    {
      "tl": "ina",
      "pron": "EE-na",
      "en": "mother (formal)"
    },
    {
      "tl": "inaanak",
      "pron": "i-na-a-NAK",
      "en": "godchild"
    },
    {
      "tl": "kumpare",
      "pron": "koom-pa-RE",
      "en": "male co-godparent / close friend"
    },
    {
      "tl": "kumare",
      "pron": "koo-ma-RE",
      "en": "female co-godparent / close friend"
    },
    {
      "tl": "manugang",
      "pron": "ma-noo-GANG",
      "en": "son / daughter-in-law"
    },
    {
      "tl": "biyenan",
      "pron": "bi-YE-nan",
      "en": "parent-in-law"
    },
    {
      "tl": "bayaw",
      "pron": "BA-yaw",
      "en": "brother-in-law"
    },
    {
      "tl": "hipag",
      "pron": "HI-pag",
      "en": "sister-in-law"
    },
    {
      "tl": "kababayan",
      "pron": "ka-ba-BA-yan",
      "en": "fellow townmate / countryman"
    },
    {
      "tl": "kasama",
      "pron": "ka-SA-ma",
      "en": "companion / housemate"
    },
    {
      "tl": "kamag-anak",
      "pron": "ka-mag-A-nak",
      "en": "relatives"
    },
    {
      "tl": "ako",
      "pron": "a-KO",
      "en": "i (pronoun)"
    },
    {
      "tl": "ikaw",
      "pron": "i-KAW",
      "en": "you (singular)"
    },
    {
      "tl": "siya",
      "pron": "shi-YA",
      "en": "he / she"
    },
    {
      "tl": "tayo",
      "pron": "TA-yo",
      "en": "we (inclusive)"
    },
    {
      "tl": "kami",
      "pron": "ka-MI",
      "en": "we (exclusive)"
    },
    {
      "tl": "kayo",
      "pron": "ka-YO",
      "en": "you (plural / formal)"
    },
    {
      "tl": "sila",
      "pron": "si-LA",
      "en": "they"
    },
    {
      "tl": "paggalang",
      "pron": "pag-GA-lang",
      "en": "respect"
    }
  ],
  "6": [
    {
      "tl": "tulong!",
      "pron": "TOO-long",
      "en": "help!"
    },
    {
      "tl": "nasaan ang...?",
      "pron": "nah-SAH-an ang",
      "en": "where is...?"
    },
    {
      "tl": "hindi ko maintindihan",
      "pron": "HIN-di ko ma-in-tin-di-HAN",
      "en": "i don't understand"
    },
    {
      "tl": "pwede mo bang ulitin?",
      "pron": "PWEH-de mo bang oo-li-TIN",
      "en": "can you repeat that?"
    },
    {
      "tl": "bahala na",
      "pron": "ba-HA-la na",
      "en": "come what may"
    },
    {
      "tl": "malasakit",
      "pron": "ma-la-SA-kit",
      "en": "compassionate care"
    },
    {
      "tl": "utang na loob",
      "pron": "OO-tang na LO-ob",
      "en": "debt of gratitude"
    },
    {
      "tl": "masarap",
      "pron": "ma-sa-RAP",
      "en": "delicious"
    },
    {
      "tl": "busog",
      "pron": "BOO-sog",
      "en": "full (from eating)"
    },
    {
      "tl": "ulam",
      "pron": "OO-lam",
      "en": "main dish"
    },
    {
      "tl": "maasim",
      "pron": "ma-A-sim",
      "en": "sour"
    },
    {
      "tl": "matamis",
      "pron": "ma-ta-MIS",
      "en": "sweet"
    },
    {
      "tl": "maalat",
      "pron": "ma-A-lat",
      "en": "salty"
    },
    {
      "tl": "maanghang",
      "pron": "ma-ang-HANG",
      "en": "spicy"
    },
    {
      "tl": "grabe",
      "pron": "GRA-be",
      "en": "wow! / intense!"
    },
    {
      "tl": "talaga?",
      "pron": "ta-la-GA",
      "en": "really?"
    },
    {
      "tl": "sige",
      "pron": "SI-ge",
      "en": "okay / go ahead"
    },
    {
      "tl": "tara",
      "pron": "ta-RA",
      "en": "let's go"
    },
    {
      "tl": "pakikipagkapwa",
      "pron": "pa-ki-ki-pag-KAP-wa",
      "en": "shared identity / connectedness"
    },
    {
      "tl": "kapamilya",
      "pron": "ka-pa-MIL-ya",
      "en": "family-like; treating others as family"
    },
    {
      "tl": "pamasahe",
      "pron": "pa-ma-SA-he",
      "en": "fare"
    },
    {
      "tl": "diretso",
      "pron": "di-RET-so",
      "en": "straight ahead"
    },
    {
      "tl": "kaliwa",
      "pron": "ka-li-WA",
      "en": "left"
    },
    {
      "tl": "kanan",
      "pron": "KA-nan",
      "en": "right"
    },
    {
      "tl": "malayo",
      "pron": "ma-LA-yo",
      "en": "far"
    },
    {
      "tl": "malapit",
      "pron": "ma-LA-pit",
      "en": "near"
    },
    {
      "tl": "gusto ko",
      "pron": "GOOS-to ko",
      "en": "i want / i'd like"
    },
    {
      "tl": "inumin",
      "pron": "i-noo-MIN",
      "en": "drink (beverage)"
    },
    {
      "tl": "malinamnam",
      "pron": "ma-li-nam-NAM",
      "en": "savory / flavorful"
    },
    {
      "tl": "malansa",
      "pron": "ma-lan-SA",
      "en": "fishy smell"
    },
    {
      "tl": "kilig",
      "pron": "KI-lig",
      "en": "giddy / thrilled"
    },
    {
      "tl": "hay naku",
      "pron": "hay na-KOO",
      "en": "oh my gosh! (exasperation)"
    },
    {
      "tl": "sayang",
      "pron": "SA-yang",
      "en": "what a waste!"
    },
    {
      "tl": "hindi nga!",
      "pron": "hin-DEE nga",
      "en": "no way!"
    },
    {
      "tl": "maraming salamat",
      "pron": "ma-RA-ming sa-LA-mat",
      "en": "thank you very much"
    },
    {
      "tl": "uso",
      "pron": "OO-so",
      "en": "trending / in style"
    }
  ],
  "7": [
    {
      "tl": "bahay",
      "pron": "BA-hay",
      "en": "house (noun)"
    },
    {
      "tl": "pag-ibig",
      "pron": "pag-EE-big",
      "en": "love (abstract noun)"
    },
    {
      "tl": "kagandahan",
      "pron": "ka-gan-DA-han",
      "en": "beauty"
    },
    {
      "tl": "kabaitan",
      "pron": "ka-ba-EE-tan",
      "en": "kindness"
    },
    {
      "tl": "pula",
      "pron": "poo-LA",
      "en": "red"
    },
    {
      "tl": "asul",
      "pron": "a-SOOL",
      "en": "blue"
    },
    {
      "tl": "dilaw",
      "pron": "di-LAW",
      "en": "yellow"
    },
    {
      "tl": "luntian",
      "pron": "loon-ti-YAN",
      "en": "green"
    },
    {
      "tl": "itim",
      "pron": "ee-TIM",
      "en": "black"
    },
    {
      "tl": "puti",
      "pron": "poo-TI",
      "en": "white"
    },
    {
      "tl": "ngayon",
      "pron": "nga-YON",
      "en": "now"
    },
    {
      "tl": "kahapon",
      "pron": "ka-ha-PON",
      "en": "yesterday"
    },
    {
      "tl": "bukas",
      "pron": "boo-KAS",
      "en": "tomorrow"
    },
    {
      "tl": "dito",
      "pron": "DEE-to",
      "en": "here"
    },
    {
      "tl": "doon",
      "pron": "do-ON",
      "en": "there (far)"
    },
    {
      "tl": "mabilis",
      "pron": "ma-bi-LIS",
      "en": "fast / quickly"
    },
    {
      "tl": "napakaganda",
      "pron": "na-pa-ka-gan-DA",
      "en": "very beautiful"
    },
    {
      "tl": "at",
      "pron": "at",
      "en": "and"
    },
    {
      "tl": "pero",
      "pron": "PE-ro",
      "en": "but"
    },
    {
      "tl": "kasi",
      "pron": "ka-SI",
      "en": "because"
    },
    {
      "tl": "kasiyahan",
      "pron": "ka-si-ya-HAN",
      "en": "happiness"
    },
    {
      "tl": "kalungkutan",
      "pron": "ka-lung-KOO-tan",
      "en": "sadness"
    },
    {
      "tl": "karunungan",
      "pron": "ka-roo-NOO-ngan",
      "en": "wisdom"
    },
    {
      "tl": "katapangan",
      "pron": "ka-ta-PA-ngan",
      "en": "bravery"
    },
    {
      "tl": "pagkakaibigan",
      "pron": "pag-ka-ka-i-BI-gan",
      "en": "friendship"
    },
    {
      "tl": "pangit",
      "pron": "pa-NGIT",
      "en": "ugly"
    },
    {
      "tl": "maliit",
      "pron": "ma-li-IT",
      "en": "small"
    },
    {
      "tl": "matangkad",
      "pron": "ma-tang-KAD",
      "en": "tall (person)"
    },
    {
      "tl": "malungkot",
      "pron": "ma-lung-KOT",
      "en": "sad"
    },
    {
      "tl": "matalino",
      "pron": "ma-ta-LI-no",
      "en": "smart"
    },
    {
      "tl": "matapang",
      "pron": "ma-ta-PANG",
      "en": "brave"
    },
    {
      "tl": "diyan",
      "pron": "di-YAN",
      "en": "there (near you)"
    },
    {
      "tl": "palagi",
      "pron": "pa-LA-gi",
      "en": "always"
    },
    {
      "tl": "minsan",
      "pron": "min-SAN",
      "en": "sometimes"
    },
    {
      "tl": "mabagal",
      "pron": "ma-BA-gal",
      "en": "slow / slowly"
    },
    {
      "tl": "maingat",
      "pron": "ma-I-ngat",
      "en": "careful / carefully"
    },
    {
      "tl": "medyo",
      "pron": "MED-yo",
      "en": "somewhat"
    },
    {
      "tl": "o",
      "pron": "oh",
      "en": "or"
    },
    {
      "tl": "kung",
      "pron": "koong",
      "en": "if"
    },
    {
      "tl": "habang",
      "pron": "HA-bang",
      "en": "while"
    }
  ],
  "8": [
    {
      "tl": "kumusta",
      "pron": "koo-MOOS-tah",
      "en": "how are you? / hello"
    },
    {
      "tl": "salamat",
      "pron": "sah-LAH-mat",
      "en": "thank you"
    },
    {
      "tl": "paalam",
      "pron": "pa-A-lam",
      "en": "goodbye"
    },
    {
      "tl": "oo",
      "pron": "OH-oh",
      "en": "yes"
    },
    {
      "tl": "hindi",
      "pron": "hin-DEE",
      "en": "no / not"
    },
    {
      "tl": "mabuti",
      "pron": "ma-BOO-ti",
      "en": "good / fine"
    },
    {
      "tl": "opo",
      "pron": "OH-po",
      "en": "yes (respectful)"
    },
    {
      "tl": "magandang umaga",
      "pron": "ma-gan-DANG oo-MA-ga",
      "en": "good morning"
    },
    {
      "tl": "gusto",
      "pron": "GOOS-to",
      "en": "want / like"
    },
    {
      "tl": "pwede",
      "pron": "PWEH-de",
      "en": "can / may / possible"
    }
  ],
  "9": [
    {
      "tl": "kumusta",
      "pron": "koo-MOOS-tah",
      "en": "hello / how are you?"
    },
    {
      "tl": "paalam",
      "pron": "pah-AH-lam",
      "en": "goodbye"
    },
    {
      "tl": "gusto",
      "pron": "GOOS-toh",
      "en": "want / like"
    },
    {
      "tl": "pwede",
      "pron": "PWEH-deh",
      "en": "can / may / possible"
    },
    {
      "tl": "pamilya",
      "pron": "pah-MEEL-yah",
      "en": "family"
    },
    {
      "tl": "kapatid",
      "pron": "kah-pah-TEED",
      "en": "sibling"
    },
    {
      "tl": "kaibigan",
      "pron": "kah-ee-bee-GAHN",
      "en": "friend"
    },
    {
      "tl": "isa",
      "pron": "ee-SAH",
      "en": "one"
    },
    {
      "tl": "sampu",
      "pron": "sahm-POO",
      "en": "ten"
    },
    {
      "tl": "oras",
      "pron": "oh-RAHS",
      "en": "time / hour"
    },
    {
      "tl": "bukas",
      "pron": "boo-KAHS",
      "en": "tomorrow"
    },
    {
      "tl": "kanin",
      "pron": "kah-NEEN",
      "en": "rice"
    },
    {
      "tl": "ulam",
      "pron": "oo-LAHM",
      "en": "main dish / viand"
    },
    {
      "tl": "manok",
      "pron": "mah-NOHK",
      "en": "chicken"
    },
    {
      "tl": "kumain",
      "pron": "koo-mah-IN",
      "en": "ate"
    },
    {
      "tl": "uminom",
      "pron": "oo-mee-NOHM",
      "en": "drank"
    },
    {
      "tl": "pumunta",
      "pron": "poo-moon-TAH",
      "en": "went"
    },
    {
      "tl": "maganda",
      "pron": "mah-gahn-DAH",
      "en": "beautiful"
    },
    {
      "tl": "masaya",
      "pron": "mah-sah-YAH",
      "en": "happy"
    },
    {
      "tl": "bahay",
      "pron": "bah-HIGH",
      "en": "house"
    },
    {
      "tl": "pera",
      "pron": "peh-RAH",
      "en": "money"
    },
    {
      "tl": "palengke",
      "pron": "pah-lehng-KEH",
      "en": "market"
    },
    {
      "tl": "salamat",
      "pron": "sah-LAH-mat",
      "en": "thank you"
    },
    {
      "tl": "opo",
      "pron": "OH-poh",
      "en": "yes (respectful)"
    },
    {
      "tl": "hindi",
      "pron": "hin-DEE",
      "en": "no / not"
    },
    {
      "tl": "ano",
      "pron": "ah-NOH",
      "en": "what"
    },
    {
      "tl": "magkano",
      "pron": "mag-kah-NOH",
      "en": "how much"
    },
    {
      "tl": "kailangan",
      "pron": "kah-ee-lah-NGAN",
      "en": "need / necessary"
    },
    {
      "tl": "nanay",
      "pron": "nah-NIGH",
      "en": "mother"
    },
    {
      "tl": "tatay",
      "pron": "tah-TIGH",
      "en": "father"
    },
    {
      "tl": "anak",
      "pron": "ah-NAHK",
      "en": "child"
    },
    {
      "tl": "lolo",
      "pron": "loh-LOH",
      "en": "grandfather"
    },
    {
      "tl": "lola",
      "pron": "loh-LAH",
      "en": "grandmother"
    },
    {
      "tl": "dalawa",
      "pron": "dah-lah-WAH",
      "en": "two"
    },
    {
      "tl": "tatlo",
      "pron": "taht-LOH",
      "en": "three"
    },
    {
      "tl": "lima",
      "pron": "lee-MAH",
      "en": "five"
    },
    {
      "tl": "lahat",
      "pron": "lah-HAHT",
      "en": "all"
    },
    {
      "tl": "araw",
      "pron": "ah-RAHW",
      "en": "day / sun"
    },
    {
      "tl": "umaga",
      "pron": "oo-mah-GAH",
      "en": "morning"
    },
    {
      "tl": "gabi",
      "pron": "gah-BEE",
      "en": "night / evening"
    },
    {
      "tl": "ngayon",
      "pron": "ngah-YOHN",
      "en": "now / today"
    },
    {
      "tl": "linggo",
      "pron": "leeng-GOH",
      "en": "week / sunday"
    },
    {
      "tl": "adobo",
      "pron": "ah-doh-BOH",
      "en": "adobo (filipino dish)"
    },
    {
      "tl": "sinigang",
      "pron": "shee-nee-GAHNG",
      "en": "sour soup"
    },
    {
      "tl": "kape",
      "pron": "kah-PEH",
      "en": "coffee"
    },
    {
      "tl": "gulay",
      "pron": "goo-LIGH",
      "en": "vegetable"
    },
    {
      "tl": "isda",
      "pron": "ees-DAH",
      "en": "fish"
    },
    {
      "tl": "mangga",
      "pron": "mahng-GAH",
      "en": "mango"
    },
    {
      "tl": "natulog",
      "pron": "nah-too-LOHG",
      "en": "slept"
    },
    {
      "tl": "gumising",
      "pron": "goo-mee-SEENG",
      "en": "woke up"
    },
    {
      "tl": "nag-aral",
      "pron": "nahg ah-RAHL",
      "en": "studied"
    },
    {
      "tl": "dumating",
      "pron": "doo-mah-TEENG",
      "en": "arrived"
    },
    {
      "tl": "malaki",
      "pron": "mah-lah-KEE",
      "en": "big"
    },
    {
      "tl": "mabait",
      "pron": "mah-bah-EET",
      "en": "kind"
    },
    {
      "tl": "masarap",
      "pron": "mah-sah-RAHP",
      "en": "delicious"
    },
    {
      "tl": "mainit",
      "pron": "mah-ee-NEET",
      "en": "hot"
    },
    {
      "tl": "mahal",
      "pron": "mah-HAHL",
      "en": "expensive / love"
    },
    {
      "tl": "kusina",
      "pron": "koo-shee-NAH",
      "en": "kitchen"
    },
    {
      "tl": "kotse",
      "pron": "koht-SEH",
      "en": "car"
    },
    {
      "tl": "ulan",
      "pron": "oo-LAHN",
      "en": "rain"
    }
  ]
};
