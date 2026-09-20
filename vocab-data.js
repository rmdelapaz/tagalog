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
      "tl": "Kumusta",
      "pron": "koo-MOOS-tah",
      "en": "How are you? / Hello"
    },
    {
      "tl": "Salamat",
      "pron": "sah-LAH-mat",
      "en": "Thank you"
    },
    {
      "tl": "Opo",
      "pron": "OH-poh",
      "en": "Yes (respectful)"
    },
    {
      "tl": "Oo",
      "pron": "OH-oh",
      "en": "Yes (casual)"
    },
    {
      "tl": "Hindi",
      "pron": "hin-DEE",
      "en": "No / Not"
    },
    {
      "tl": "Tubig",
      "pron": "TOO-big",
      "en": "Water"
    },
    {
      "tl": "Pagkain",
      "pron": "pag-KAH-in",
      "en": "Food"
    },
    {
      "tl": "Ama",
      "pron": "AH-mah",
      "en": "Father"
    },
    {
      "tl": "Isda",
      "pron": "is-DAH",
      "en": "Fish"
    },
    {
      "tl": "Ulan",
      "pron": "OO-lan",
      "en": "Rain"
    },
    {
      "tl": "Bahay",
      "pron": "BAH-hay",
      "en": "House"
    },
    {
      "tl": "Aso",
      "pron": "AH-so",
      "en": "Dog"
    },
    {
      "tl": "Pusa",
      "pron": "POO-sa",
      "en": "Cat"
    },
    {
      "tl": "Maganda",
      "pron": "ma-GAN-da",
      "en": "Beautiful"
    },
    {
      "tl": "Pamilya",
      "pron": "pa-MIL-ya",
      "en": "Family"
    },
    {
      "tl": "Mabuti",
      "pron": "ma-BOO-ti",
      "en": "Good / Fine"
    },
    {
      "tl": "Magandang umaga",
      "pron": "ma-gan-DANG oo-MAH-ga",
      "en": "Good morning"
    },
    {
      "tl": "Magandang hapon",
      "pron": "ma-gan-DANG HAH-pon",
      "en": "Good afternoon"
    },
    {
      "tl": "Magandang gabi",
      "pron": "ma-gan-DANG ga-BEE",
      "en": "Good evening"
    },
    {
      "tl": "Kumain ka na?",
      "pron": "koo-MA-in ka na",
      "en": "Have you eaten?"
    },
    {
      "tl": "Po",
      "pron": "po",
      "en": "Respect particle (adds politeness)"
    },
    {
      "tl": "Kain tayo",
      "pron": "ka-IN TA-yo",
      "en": "Let's eat"
    },
    {
      "tl": "Hindi pa",
      "pron": "hin-DEE pa",
      "en": "Not yet"
    },
    {
      "tl": "Kumusta ka?",
      "pron": "koo-MOOS-ta ka",
      "en": "How are you?"
    },
    {
      "tl": "Oso",
      "pron": "OH-so",
      "en": "Bear"
    },
    {
      "tl": "Eme",
      "pron": "EH-me",
      "en": "Duck"
    },
    {
      "tl": "Kariton",
      "pron": "ka-RI-ton",
      "en": "Cart"
    },
    {
      "tl": "Papaya",
      "pron": "pah-PAH-yah",
      "en": "Papaya"
    },
    {
      "tl": "Mangga",
      "pron": "MAHN-go",
      "en": "Mango"
    },
    {
      "tl": "Banana",
      "pron": "bah-NAH-nah",
      "en": "Banana"
    }
  ],
  "2": [
    {
      "tl": "Kumakain",
      "pron": "koo-ma-KAH-in",
      "en": "eating"
    },
    {
      "tl": "ako",
      "pron": "a-KO",
      "en": "I / me"
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
      "tl": "Tumutulog",
      "pron": "too-moo-TOO-log",
      "en": "sleeping"
    },
    {
      "tl": "Naglalaro",
      "pron": "nag-la-la-RO",
      "en": "playing"
    },
    {
      "tl": "Malaki",
      "pron": "ma-la-KI",
      "en": "big"
    },
    {
      "tl": "Masaya",
      "pron": "ma-sa-YA",
      "en": "happy"
    },
    {
      "tl": "Gutom",
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
      "tl": "Ano",
      "pron": "a-NO",
      "en": "What?"
    },
    {
      "tl": "Sino",
      "pron": "SEE-no",
      "en": "Who?"
    },
    {
      "tl": "Saan",
      "pron": "sa-AN",
      "en": "Where?"
    },
    {
      "tl": "Kailan",
      "pron": "ka-EE-lan",
      "en": "When?"
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
      "tl": "Nagtatrabaho",
      "pron": "nag-ta-tra-BA-ho",
      "en": "working"
    },
    {
      "tl": "Nag-aaral",
      "pron": "nag-a-A-ral",
      "en": "studying"
    },
    {
      "tl": "Mabait",
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
      "en": "adobo (Filipino dish)"
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
      "tl": "Nagluluto",
      "pron": "nag-loo-LOO-to",
      "en": "cooking"
    }
  ],
  "3": [
    {
      "tl": "Kumain",
      "pron": "koo-MA-in",
      "en": "ate"
    },
    {
      "tl": "Kumakain",
      "pron": "koo-ma-KA-in",
      "en": "eating"
    },
    {
      "tl": "Kakain",
      "pron": "KA-ka-in",
      "en": "will eat"
    },
    {
      "tl": "Natulog",
      "pron": "na-TOO-log",
      "en": "slept"
    },
    {
      "tl": "Natutulog",
      "pron": "na-too-TOO-log",
      "en": "sleeping"
    },
    {
      "tl": "Naglaro",
      "pron": "nag-la-RO",
      "en": "played"
    },
    {
      "tl": "Nagtrabaho",
      "pron": "nag-tra-BA-ho",
      "en": "worked"
    },
    {
      "tl": "Nag-aral",
      "pron": "nag-A-ral",
      "en": "studied"
    },
    {
      "tl": "Nagbasa",
      "pron": "nag-BA-sa",
      "en": "read"
    },
    {
      "tl": "Sumulat",
      "pron": "soo-MOO-lat",
      "en": "wrote"
    },
    {
      "tl": "Nagluto",
      "pron": "nag-LOO-to",
      "en": "cooked"
    },
    {
      "tl": "Bumili",
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
      "tl": "Matutulog",
      "pron": "ma-too-TOO-log",
      "en": "will sleep"
    },
    {
      "tl": "Naglalaro",
      "pron": "nag-la-la-RO",
      "en": "playing"
    },
    {
      "tl": "Maglalaro",
      "pron": "mag-la-la-RO",
      "en": "will play"
    },
    {
      "tl": "Nagtatrabaho",
      "pron": "nag-ta-tra-BA-ho",
      "en": "working"
    },
    {
      "tl": "Magtatrabaho",
      "pron": "mag-ta-tra-BA-ho",
      "en": "will work"
    },
    {
      "tl": "Nag-aaral",
      "pron": "nag-a-A-ral",
      "en": "studying"
    },
    {
      "tl": "Mag-aaral",
      "pron": "mag-a-A-ral",
      "en": "will study"
    },
    {
      "tl": "Nagbabasa",
      "pron": "nag-ba-BA-sa",
      "en": "reading"
    },
    {
      "tl": "Magbabasa",
      "pron": "mag-ba-BA-sa",
      "en": "will read"
    },
    {
      "tl": "Nagluluto",
      "pron": "nag-loo-LOO-to",
      "en": "cooking"
    },
    {
      "tl": "Magluluto",
      "pron": "mag-loo-LOO-to",
      "en": "will cook"
    },
    {
      "tl": "Nagtuturo",
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
      "tl": "Tapos",
      "pron": "TA-pos",
      "en": "done / finished"
    },
    {
      "tl": "matematika",
      "pron": "ma-te-MA-ti-ka",
      "en": "mathematics"
    },
    {
      "tl": "Kain",
      "pron": "ka-IN",
      "en": "eat (root word)"
    },
    {
      "tl": "Binili",
      "pron": "bi-ni-LI",
      "en": "bought (object focus)"
    }
  ],
  "4": [
    {
      "tl": "Isa",
      "pron": "ee-SA",
      "en": "One"
    },
    {
      "tl": "Dalawa",
      "pron": "da-la-WA",
      "en": "Two"
    },
    {
      "tl": "Tatlo",
      "pron": "tat-LO",
      "en": "Three"
    },
    {
      "tl": "Apat",
      "pron": "A-pat",
      "en": "Four"
    },
    {
      "tl": "Lima",
      "pron": "li-MA",
      "en": "Five"
    },
    {
      "tl": "Anim",
      "pron": "A-nim",
      "en": "Six"
    },
    {
      "tl": "Pito",
      "pron": "pi-TO",
      "en": "Seven"
    },
    {
      "tl": "Walo",
      "pron": "wa-LO",
      "en": "Eight"
    },
    {
      "tl": "Siyam",
      "pron": "SI-yam",
      "en": "Nine"
    },
    {
      "tl": "Sampu",
      "pron": "sam-POO",
      "en": "Ten"
    },
    {
      "tl": "Anong oras na?",
      "pron": "a-NONG O-ras na",
      "en": "What time is it?"
    },
    {
      "tl": "Umaga",
      "pron": "oo-MA-ga",
      "en": "Morning"
    },
    {
      "tl": "Tanghali",
      "pron": "tang-HA-li",
      "en": "Noon"
    },
    {
      "tl": "Hapon",
      "pron": "HA-pon",
      "en": "Afternoon"
    },
    {
      "tl": "Gabi",
      "pron": "ga-BEE",
      "en": "Evening / Night"
    },
    {
      "tl": "Magkano",
      "pron": "mag-KA-no",
      "en": "How much?"
    },
    {
      "tl": "Sukli",
      "pron": "sook-LI",
      "en": "Change (money back)"
    },
    {
      "tl": "Bayad",
      "pron": "BA-yad",
      "en": "Payment"
    },
    {
      "tl": "Labing-isa",
      "pron": "la-bing-ee-SA",
      "en": "Eleven"
    },
    {
      "tl": "Labing-dalawa",
      "pron": "la-bing-da-la-WA",
      "en": "Twelve"
    },
    {
      "tl": "Dalawampu",
      "pron": "da-la-wam-POO",
      "en": "Twenty"
    },
    {
      "tl": "Isang daan",
      "pron": "I-sang da-AN",
      "en": "One hundred"
    },
    {
      "tl": "Isang libo",
      "pron": "I-sang LI-bo",
      "en": "One thousand"
    },
    {
      "tl": "Hatinggabi",
      "pron": "ha-ting-ga-BEE",
      "en": "Midnight"
    },
    {
      "tl": "Lunes",
      "pron": "LOO-nes",
      "en": "Monday"
    },
    {
      "tl": "Martes",
      "pron": "MAR-tes",
      "en": "Tuesday"
    },
    {
      "tl": "Miyerkules",
      "pron": "mi-YER-koo-les",
      "en": "Wednesday"
    },
    {
      "tl": "Huwebes",
      "pron": "hoo-WE-bes",
      "en": "Thursday"
    },
    {
      "tl": "Biyernes",
      "pron": "bi-YER-nes",
      "en": "Friday"
    },
    {
      "tl": "Sabado",
      "pron": "SA-ba-do",
      "en": "Saturday"
    },
    {
      "tl": "Linggo",
      "pron": "ling-GO",
      "en": "Sunday"
    },
    {
      "tl": "Kalahati",
      "pron": "ka-la-HA-ti",
      "en": "Half past"
    },
    {
      "tl": "Una",
      "pron": "OO-na",
      "en": "First"
    },
    {
      "tl": "Ikalawa",
      "pron": "i-ka-la-WA",
      "en": "Second"
    },
    {
      "tl": "Ikatlo",
      "pron": "i-kat-LO",
      "en": "Third"
    },
    {
      "tl": "Kaarawan",
      "pron": "ka-a-ra-WAN",
      "en": "Birthday"
    },
    {
      "tl": "Edad",
      "pron": "E-dad",
      "en": "Age"
    }
  ],
  "5": [
    {
      "tl": "Lolo",
      "pron": "LO-lo",
      "en": "Grandfather"
    },
    {
      "tl": "Lola",
      "pron": "LO-la",
      "en": "Grandmother"
    },
    {
      "tl": "Tatay",
      "pron": "ta-TAY",
      "en": "Father"
    },
    {
      "tl": "Nanay",
      "pron": "na-NAY",
      "en": "Mother"
    },
    {
      "tl": "Tito",
      "pron": "TI-to",
      "en": "Uncle"
    },
    {
      "tl": "Tita",
      "pron": "TI-ta",
      "en": "Aunt"
    },
    {
      "tl": "Kuya",
      "pron": "KOO-ya",
      "en": "Older brother"
    },
    {
      "tl": "Ate",
      "pron": "A-te",
      "en": "Older sister"
    },
    {
      "tl": "Bunso",
      "pron": "bun-SO",
      "en": "Youngest child"
    },
    {
      "tl": "Anak",
      "pron": "a-NAK",
      "en": "Child"
    },
    {
      "tl": "Kapatid",
      "pron": "ka-pa-TID",
      "en": "Sibling"
    },
    {
      "tl": "Pinsan",
      "pron": "PIN-san",
      "en": "Cousin"
    },
    {
      "tl": "Ninong",
      "pron": "NI-nong",
      "en": "Godfather"
    },
    {
      "tl": "Ninang",
      "pron": "NI-nang",
      "en": "Godmother"
    },
    {
      "tl": "Asawa",
      "pron": "a-SA-wa",
      "en": "Spouse"
    },
    {
      "tl": "Kaibigan",
      "pron": "ka-i-BI-gan",
      "en": "Friend"
    },
    {
      "tl": "Kapitbahay",
      "pron": "ka-pit-BA-hay",
      "en": "Neighbor"
    },
    {
      "tl": "Magulang",
      "pron": "ma-GOO-lang",
      "en": "Parents"
    },
    {
      "tl": "Panganay",
      "pron": "pa-nga-NAY",
      "en": "Eldest child"
    },
    {
      "tl": "Pamangkin",
      "pron": "pa-mang-KIN",
      "en": "Niece / nephew"
    },
    {
      "tl": "Ama",
      "pron": "A-ma",
      "en": "Father (formal)"
    },
    {
      "tl": "Ina",
      "pron": "EE-na",
      "en": "Mother (formal)"
    },
    {
      "tl": "Inaanak",
      "pron": "i-na-a-NAK",
      "en": "Godchild"
    },
    {
      "tl": "Kumpare",
      "pron": "koom-pa-RE",
      "en": "Male co-godparent / close friend"
    },
    {
      "tl": "Kumare",
      "pron": "koo-ma-RE",
      "en": "Female co-godparent / close friend"
    },
    {
      "tl": "Manugang",
      "pron": "ma-noo-GANG",
      "en": "Son / daughter-in-law"
    },
    {
      "tl": "Biyenan",
      "pron": "bi-YE-nan",
      "en": "Parent-in-law"
    },
    {
      "tl": "Bayaw",
      "pron": "BA-yaw",
      "en": "Brother-in-law"
    },
    {
      "tl": "Hipag",
      "pron": "HI-pag",
      "en": "Sister-in-law"
    },
    {
      "tl": "Kababayan",
      "pron": "ka-ba-BA-yan",
      "en": "Fellow townmate / countryman"
    },
    {
      "tl": "Kasama",
      "pron": "ka-SA-ma",
      "en": "Companion / housemate"
    },
    {
      "tl": "Kamag-anak",
      "pron": "ka-mag-A-nak",
      "en": "Relatives"
    },
    {
      "tl": "Ako",
      "pron": "a-KO",
      "en": "I (pronoun)"
    },
    {
      "tl": "Ikaw",
      "pron": "i-KAW",
      "en": "You (singular)"
    },
    {
      "tl": "Siya",
      "pron": "shi-YA",
      "en": "He / she"
    },
    {
      "tl": "Tayo",
      "pron": "TA-yo",
      "en": "We (inclusive)"
    },
    {
      "tl": "Kami",
      "pron": "ka-MI",
      "en": "We (exclusive)"
    },
    {
      "tl": "Kayo",
      "pron": "ka-YO",
      "en": "You (plural / formal)"
    },
    {
      "tl": "Sila",
      "pron": "si-LA",
      "en": "They"
    },
    {
      "tl": "Paggalang",
      "pron": "pag-GA-lang",
      "en": "Respect"
    }
  ],
  "6": [
    {
      "tl": "Tulong!",
      "pron": "TOO-long",
      "en": "Help!"
    },
    {
      "tl": "Nasaan ang...?",
      "pron": "nah-SAH-an ang",
      "en": "Where is...?"
    },
    {
      "tl": "Hindi ko maintindihan",
      "pron": "HIN-di ko ma-in-tin-di-HAN",
      "en": "I don't understand"
    },
    {
      "tl": "Pwede mo bang ulitin?",
      "pron": "PWEH-de mo bang oo-li-TIN",
      "en": "Can you repeat that?"
    },
    {
      "tl": "Bahala na",
      "pron": "ba-HA-la na",
      "en": "Come what may"
    },
    {
      "tl": "Malasakit",
      "pron": "ma-la-SA-kit",
      "en": "Compassionate care"
    },
    {
      "tl": "Utang na loob",
      "pron": "OO-tang na LO-ob",
      "en": "Debt of gratitude"
    },
    {
      "tl": "Masarap",
      "pron": "ma-sa-RAP",
      "en": "Delicious"
    },
    {
      "tl": "Busog",
      "pron": "BOO-sog",
      "en": "Full (from eating)"
    },
    {
      "tl": "Ulam",
      "pron": "OO-lam",
      "en": "Main dish"
    },
    {
      "tl": "Maasim",
      "pron": "ma-A-sim",
      "en": "Sour"
    },
    {
      "tl": "Matamis",
      "pron": "ma-ta-MIS",
      "en": "Sweet"
    },
    {
      "tl": "Maalat",
      "pron": "ma-A-lat",
      "en": "Salty"
    },
    {
      "tl": "Maanghang",
      "pron": "ma-ang-HANG",
      "en": "Spicy"
    },
    {
      "tl": "Grabe",
      "pron": "GRA-be",
      "en": "Wow! / Intense!"
    },
    {
      "tl": "Talaga?",
      "pron": "ta-la-GA",
      "en": "Really?"
    },
    {
      "tl": "Sige",
      "pron": "SI-ge",
      "en": "Okay / Go ahead"
    },
    {
      "tl": "Tara",
      "pron": "ta-RA",
      "en": "Let's go"
    },
    {
      "tl": "Pakikipagkapwa",
      "pron": "pa-ki-ki-pag-KAP-wa",
      "en": "Shared identity / connectedness"
    },
    {
      "tl": "Kapamilya",
      "pron": "ka-pa-MIL-ya",
      "en": "Family-like; treating others as family"
    },
    {
      "tl": "Pamasahe",
      "pron": "pa-ma-SA-he",
      "en": "Fare"
    },
    {
      "tl": "Diretso",
      "pron": "di-RET-so",
      "en": "Straight ahead"
    },
    {
      "tl": "Kaliwa",
      "pron": "ka-li-WA",
      "en": "Left"
    },
    {
      "tl": "Kanan",
      "pron": "KA-nan",
      "en": "Right"
    },
    {
      "tl": "Malayo",
      "pron": "ma-LA-yo",
      "en": "Far"
    },
    {
      "tl": "Malapit",
      "pron": "ma-LA-pit",
      "en": "Near"
    },
    {
      "tl": "Gusto ko",
      "pron": "GOOS-to ko",
      "en": "I want / I'd like"
    },
    {
      "tl": "Inumin",
      "pron": "i-noo-MIN",
      "en": "Drink (beverage)"
    },
    {
      "tl": "Malinamnam",
      "pron": "ma-li-nam-NAM",
      "en": "Savory / flavorful"
    },
    {
      "tl": "Malansa",
      "pron": "ma-lan-SA",
      "en": "Fishy smell"
    },
    {
      "tl": "Kilig",
      "pron": "KI-lig",
      "en": "Giddy / thrilled"
    },
    {
      "tl": "Hay naku",
      "pron": "hay na-KOO",
      "en": "Oh my gosh! (exasperation)"
    },
    {
      "tl": "Sayang",
      "pron": "SA-yang",
      "en": "What a waste!"
    },
    {
      "tl": "Hindi nga!",
      "pron": "hin-DEE nga",
      "en": "No way!"
    },
    {
      "tl": "Maraming salamat",
      "pron": "ma-RA-ming sa-LA-mat",
      "en": "Thank you very much"
    },
    {
      "tl": "Uso",
      "pron": "OO-so",
      "en": "Trending / in style"
    }
  ],
  "7": [
    {
      "tl": "Bahay",
      "pron": "BA-hay",
      "en": "house (noun)"
    },
    {
      "tl": "Pag-ibig",
      "pron": "pag-EE-big",
      "en": "love (abstract noun)"
    },
    {
      "tl": "Kagandahan",
      "pron": "ka-gan-DA-han",
      "en": "beauty"
    },
    {
      "tl": "Kabaitan",
      "pron": "ka-ba-EE-tan",
      "en": "kindness"
    },
    {
      "tl": "Pula",
      "pron": "poo-LA",
      "en": "red"
    },
    {
      "tl": "Asul",
      "pron": "a-SOOL",
      "en": "blue"
    },
    {
      "tl": "Dilaw",
      "pron": "di-LAW",
      "en": "yellow"
    },
    {
      "tl": "Luntian",
      "pron": "loon-ti-YAN",
      "en": "green"
    },
    {
      "tl": "Itim",
      "pron": "ee-TIM",
      "en": "black"
    },
    {
      "tl": "Puti",
      "pron": "poo-TI",
      "en": "white"
    },
    {
      "tl": "Ngayon",
      "pron": "nga-YON",
      "en": "now"
    },
    {
      "tl": "Kahapon",
      "pron": "ka-ha-PON",
      "en": "yesterday"
    },
    {
      "tl": "Bukas",
      "pron": "boo-KAS",
      "en": "tomorrow"
    },
    {
      "tl": "Dito",
      "pron": "DEE-to",
      "en": "here"
    },
    {
      "tl": "Doon",
      "pron": "do-ON",
      "en": "there (far)"
    },
    {
      "tl": "Mabilis",
      "pron": "ma-bi-LIS",
      "en": "fast / quickly"
    },
    {
      "tl": "Napakaganda",
      "pron": "na-pa-ka-gan-DA",
      "en": "very beautiful"
    },
    {
      "tl": "At",
      "pron": "at",
      "en": "and"
    },
    {
      "tl": "Pero",
      "pron": "PE-ro",
      "en": "but"
    },
    {
      "tl": "Kasi",
      "pron": "ka-SI",
      "en": "because"
    },
    {
      "tl": "Kasiyahan",
      "pron": "ka-si-ya-HAN",
      "en": "happiness"
    },
    {
      "tl": "Kalungkutan",
      "pron": "ka-lung-KOO-tan",
      "en": "sadness"
    },
    {
      "tl": "Karunungan",
      "pron": "ka-roo-NOO-ngan",
      "en": "wisdom"
    },
    {
      "tl": "Katapangan",
      "pron": "ka-ta-PA-ngan",
      "en": "bravery"
    },
    {
      "tl": "Pagkakaibigan",
      "pron": "pag-ka-ka-i-BI-gan",
      "en": "friendship"
    },
    {
      "tl": "Pangit",
      "pron": "pa-NGIT",
      "en": "ugly"
    },
    {
      "tl": "Maliit",
      "pron": "ma-li-IT",
      "en": "small"
    },
    {
      "tl": "Matangkad",
      "pron": "ma-tang-KAD",
      "en": "tall (person)"
    },
    {
      "tl": "Malungkot",
      "pron": "ma-lung-KOT",
      "en": "sad"
    },
    {
      "tl": "Matalino",
      "pron": "ma-ta-LI-no",
      "en": "smart"
    },
    {
      "tl": "Matapang",
      "pron": "ma-ta-PANG",
      "en": "brave"
    },
    {
      "tl": "Diyan",
      "pron": "di-YAN",
      "en": "there (near you)"
    },
    {
      "tl": "Palagi",
      "pron": "pa-LA-gi",
      "en": "always"
    },
    {
      "tl": "Minsan",
      "pron": "min-SAN",
      "en": "sometimes"
    },
    {
      "tl": "Mabagal",
      "pron": "ma-BA-gal",
      "en": "slow / slowly"
    },
    {
      "tl": "Maingat",
      "pron": "ma-I-ngat",
      "en": "careful / carefully"
    },
    {
      "tl": "Medyo",
      "pron": "MED-yo",
      "en": "somewhat"
    },
    {
      "tl": "O",
      "pron": "oh",
      "en": "or"
    },
    {
      "tl": "Kung",
      "pron": "koong",
      "en": "if"
    },
    {
      "tl": "Habang",
      "pron": "HA-bang",
      "en": "while"
    }
  ],
  "8": [
    {
      "tl": "Kumusta",
      "pron": "koo-MOOS-tah",
      "en": "How are you? / Hello"
    },
    {
      "tl": "Salamat",
      "pron": "sah-LAH-mat",
      "en": "Thank you"
    },
    {
      "tl": "Paalam",
      "pron": "pa-A-lam",
      "en": "Goodbye"
    },
    {
      "tl": "Oo",
      "pron": "OH-oh",
      "en": "Yes"
    },
    {
      "tl": "Hindi",
      "pron": "hin-DEE",
      "en": "No / Not"
    },
    {
      "tl": "Mabuti",
      "pron": "ma-BOO-ti",
      "en": "Good / Fine"
    },
    {
      "tl": "Opo",
      "pron": "OH-po",
      "en": "Yes (respectful)"
    },
    {
      "tl": "Magandang umaga",
      "pron": "ma-gan-DANG oo-MA-ga",
      "en": "Good morning"
    },
    {
      "tl": "Gusto",
      "pron": "GOOS-to",
      "en": "Want / like"
    },
    {
      "tl": "Pwede",
      "pron": "PWEH-de",
      "en": "Can / may / possible"
    }
  ],
  "9": [
    {
      "tl": "Kumusta",
      "pron": "koo-MOOS-tah",
      "en": "Hello / How are you?"
    },
    {
      "tl": "Paalam",
      "pron": "pah-AH-lam",
      "en": "Goodbye"
    },
    {
      "tl": "Gusto",
      "pron": "GOOS-toh",
      "en": "Want / Like"
    },
    {
      "tl": "Pwede",
      "pron": "PWEH-deh",
      "en": "Can / May / Possible"
    },
    {
      "tl": "Pamilya",
      "pron": "pah-MEEL-yah",
      "en": "Family"
    },
    {
      "tl": "Kapatid",
      "pron": "kah-pah-TEED",
      "en": "Sibling"
    },
    {
      "tl": "Kaibigan",
      "pron": "kah-ee-bee-GAHN",
      "en": "Friend"
    },
    {
      "tl": "Isa",
      "pron": "ee-SAH",
      "en": "One"
    },
    {
      "tl": "Sampu",
      "pron": "sahm-POO",
      "en": "Ten"
    },
    {
      "tl": "Oras",
      "pron": "oh-RAHS",
      "en": "Time / Hour"
    },
    {
      "tl": "Bukas",
      "pron": "boo-KAHS",
      "en": "Tomorrow"
    },
    {
      "tl": "Kanin",
      "pron": "kah-NEEN",
      "en": "Rice"
    },
    {
      "tl": "Ulam",
      "pron": "oo-LAHM",
      "en": "Main dish / Viand"
    },
    {
      "tl": "Manok",
      "pron": "mah-NOHK",
      "en": "Chicken"
    },
    {
      "tl": "Kumain",
      "pron": "koo-mah-IN",
      "en": "Ate"
    },
    {
      "tl": "Uminom",
      "pron": "oo-mee-NOHM",
      "en": "Drank"
    },
    {
      "tl": "Pumunta",
      "pron": "poo-moon-TAH",
      "en": "Went"
    },
    {
      "tl": "Maganda",
      "pron": "mah-gahn-DAH",
      "en": "Beautiful"
    },
    {
      "tl": "Masaya",
      "pron": "mah-sah-YAH",
      "en": "Happy"
    },
    {
      "tl": "Bahay",
      "pron": "bah-HIGH",
      "en": "House"
    },
    {
      "tl": "Pera",
      "pron": "peh-RAH",
      "en": "Money"
    },
    {
      "tl": "Palengke",
      "pron": "pah-lehng-KEH",
      "en": "Market"
    },
    {
      "tl": "Salamat",
      "pron": "sah-LAH-mat",
      "en": "Thank you"
    },
    {
      "tl": "Opo",
      "pron": "OH-poh",
      "en": "Yes (respectful)"
    },
    {
      "tl": "Hindi",
      "pron": "hin-DEE",
      "en": "No / Not"
    },
    {
      "tl": "Ano",
      "pron": "ah-NOH",
      "en": "What"
    },
    {
      "tl": "Magkano",
      "pron": "mag-kah-NOH",
      "en": "How much"
    },
    {
      "tl": "Kailangan",
      "pron": "kah-ee-lah-NGAN",
      "en": "Need / Necessary"
    },
    {
      "tl": "Nanay",
      "pron": "nah-NIGH",
      "en": "Mother"
    },
    {
      "tl": "Tatay",
      "pron": "tah-TIGH",
      "en": "Father"
    },
    {
      "tl": "Anak",
      "pron": "ah-NAHK",
      "en": "Child"
    },
    {
      "tl": "Lolo",
      "pron": "loh-LOH",
      "en": "Grandfather"
    },
    {
      "tl": "Lola",
      "pron": "loh-LAH",
      "en": "Grandmother"
    },
    {
      "tl": "Dalawa",
      "pron": "dah-lah-WAH",
      "en": "Two"
    },
    {
      "tl": "Tatlo",
      "pron": "taht-LOH",
      "en": "Three"
    },
    {
      "tl": "Lima",
      "pron": "lee-MAH",
      "en": "Five"
    },
    {
      "tl": "Lahat",
      "pron": "lah-HAHT",
      "en": "All"
    },
    {
      "tl": "Araw",
      "pron": "ah-RAHW",
      "en": "Day / Sun"
    },
    {
      "tl": "Umaga",
      "pron": "oo-mah-GAH",
      "en": "Morning"
    },
    {
      "tl": "Gabi",
      "pron": "gah-BEE",
      "en": "Night / Evening"
    },
    {
      "tl": "Ngayon",
      "pron": "ngah-YOHN",
      "en": "Now / Today"
    },
    {
      "tl": "Linggo",
      "pron": "leeng-GOH",
      "en": "Week / Sunday"
    },
    {
      "tl": "Adobo",
      "pron": "ah-doh-BOH",
      "en": "Adobo (Filipino dish)"
    },
    {
      "tl": "Sinigang",
      "pron": "shee-nee-GAHNG",
      "en": "Sour soup"
    },
    {
      "tl": "Kape",
      "pron": "kah-PEH",
      "en": "Coffee"
    },
    {
      "tl": "Gulay",
      "pron": "goo-LIGH",
      "en": "Vegetable"
    },
    {
      "tl": "Isda",
      "pron": "ees-DAH",
      "en": "Fish"
    },
    {
      "tl": "Mangga",
      "pron": "mahng-GAH",
      "en": "Mango"
    },
    {
      "tl": "Natulog",
      "pron": "nah-too-LOHG",
      "en": "Slept"
    },
    {
      "tl": "Gumising",
      "pron": "goo-mee-SEENG",
      "en": "Woke up"
    },
    {
      "tl": "Nag-aral",
      "pron": "nahg ah-RAHL",
      "en": "Studied"
    },
    {
      "tl": "Dumating",
      "pron": "doo-mah-TEENG",
      "en": "Arrived"
    },
    {
      "tl": "Malaki",
      "pron": "mah-lah-KEE",
      "en": "Big"
    },
    {
      "tl": "Mabait",
      "pron": "mah-bah-EET",
      "en": "Kind"
    },
    {
      "tl": "Masarap",
      "pron": "mah-sah-RAHP",
      "en": "Delicious"
    },
    {
      "tl": "Mainit",
      "pron": "mah-ee-NEET",
      "en": "Hot"
    },
    {
      "tl": "Mahal",
      "pron": "mah-HAHL",
      "en": "Expensive / Love"
    },
    {
      "tl": "Kusina",
      "pron": "koo-shee-NAH",
      "en": "Kitchen"
    },
    {
      "tl": "Kotse",
      "pron": "koht-SEH",
      "en": "Car"
    },
    {
      "tl": "Ulan",
      "pron": "oo-LAHN",
      "en": "Rain"
    }
  ]
};
