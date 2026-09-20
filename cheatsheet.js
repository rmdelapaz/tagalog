/* cheatsheet.js — renders the printable "most common phrases" cheat sheet.

   A curated (not exhaustive) set of the everyday survival phrases a traveller or
   new learner reaches for first, grouped by situation. Each phrase gets an audio
   button (via audio.js `data-speak`); the layout is print-optimised so it prints
   cleanly onto a couple of pages. Data lives here so it is easy to hand-edit. */
(function () {
    'use strict';

    var SHEET = [
        { title: 'Greetings', items: [
            ['Kumusta?', 'koo-MOOS-tah', 'How are you? / Hello'],
            ['Magandang umaga', 'ma-gan-DANG oo-MAH-ga', 'Good morning'],
            ['Magandang hapon', 'ma-gan-DANG HAH-pon', 'Good afternoon'],
            ['Magandang gabi', 'ma-gan-DANG ga-BEE', 'Good evening'],
            ['Mabuti naman', 'ma-BOO-tee NAH-man', "I'm fine"],
            ['Paalam', 'pa-AH-lam', 'Goodbye'],
            ['Ingat', 'EE-ngat', 'Take care']
        ]},
        { title: 'Courtesy', items: [
            ['Salamat', 'sa-LAH-mat', 'Thank you'],
            ['Salamat po', 'sa-LAH-mat po', 'Thank you (polite)'],
            ['Walang anuman', 'wa-LANG a-noo-MAN', "You're welcome"],
            ['Pakiusap', 'pa-kee-OO-sap', 'Please'],
            ['Pasensya na', 'pa-SEN-sya na', 'Sorry / Excuse me'],
            ['Opo', 'OH-po', 'Yes (respectful)'],
            ['Hindi po', 'hin-DEE po', 'No (respectful)']
        ]},
        { title: 'Getting By', items: [
            ['Hindi ko maintindihan', 'hin-DEE ko ma-in-tin-dee-HAN', "I don't understand"],
            ['Marunong ka bang mag-Ingles?', 'ma-ROO-nong ka bang mag-ing-GLES', 'Do you speak English?'],
            ['Pakiulit', 'pa-kee-OO-lit', 'Please repeat'],
            ['Dahan-dahan lang', 'DA-han DA-han lang', 'Slowly, please'],
            ['Ano ang ibig sabihin nito?', 'a-NO ang EE-big sa-bee-HIN nee-TOH', 'What does this mean?'],
            ['Tulong!', 'TOO-long', 'Help!']
        ]},
        { title: 'Questions', items: [
            ['Ano?', 'a-NO', 'What?'],
            ['Sino?', 'SEE-no', 'Who?'],
            ['Saan?', 'sa-AN', 'Where?'],
            ['Kailan?', 'ka-ee-LAN', 'When?'],
            ['Bakit?', 'BA-kit', 'Why?'],
            ['Paano?', 'pa-A-no', 'How?'],
            ['Magkano?', 'mag-KA-no', 'How much?'],
            ['Ilan?', 'ee-LAN', 'How many?']
        ]},
        { title: 'Out & About', items: [
            ['Saan ang banyo?', 'sa-AN ang BAN-yo', 'Where is the bathroom?'],
            ['Magkano ito?', 'mag-KA-no ee-TOH', 'How much is this?'],
            ['Gusto ko ito', 'GOOS-toh ko ee-TOH', 'I want this'],
            ['Ayaw ko', 'A-yaw ko', "I don't want / No thanks"],
            ['Nasaan ang…?', 'na-sa-AN ang', 'Where is the…?'],
            ['Pwede ba?', 'PWE-de ba', 'May I? / Is it okay?'],
            ['Sandali lang', 'san-da-LEE lang', 'Just a moment']
        ]},
        { title: 'Eating', items: [
            ['Gutom na ako', 'GOO-tom na a-KO', "I'm hungry"],
            ['Uhaw ako', 'OO-haw a-KO', "I'm thirsty"],
            ['Masarap', 'ma-sa-RAP', 'Delicious'],
            ['Tubig', 'TOO-big', 'Water'],
            ['Pagkain', 'pag-KA-in', 'Food'],
            ['Kain tayo', 'ka-EEN TA-yo', "Let's eat"],
            ['Ang bill/tseke', 'ang tsyek', 'The check, please']
        ]},
        { title: 'Numbers 1–10', items: [
            ['Isa', 'ee-SA', 'One'],
            ['Dalawa', 'da-la-WA', 'Two'],
            ['Tatlo', 'tat-LO', 'Three'],
            ['Apat', 'A-pat', 'Four'],
            ['Lima', 'lee-MA', 'Five'],
            ['Anim', 'A-nim', 'Six'],
            ['Pito', 'pee-TO', 'Seven'],
            ['Walo', 'wa-LO', 'Eight'],
            ['Siyam', 'SEE-yam', 'Nine'],
            ['Sampu', 'sam-POO', 'Ten']
        ]},
        { title: 'Emergency', items: [
            ['Saklolo!', 'sak-LO-lo', 'Help! (urgent)'],
            ['Tawag ng pulis', 'TA-wag nang poo-LEES', 'Call the police'],
            ['May sakit ako', 'may sa-KIT a-KO', "I'm sick"],
            ['Ospital', 'os-pee-TAL', 'Hospital'],
            ['Nawawala ako', 'na-wa-WA-la a-KO', "I'm lost"],
            ['Emergency ito', 'ee-MER-jen-see ee-TOH', 'This is an emergency']
        ]}
    ];

    function esc(s) {
        return String(s).replace(/[&<>"']/g, function (c) {
            return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
        });
    }

    var root = document.getElementById('cheatsheet-root');
    if (!root) return;

    root.innerHTML = SHEET.map(function (cat) {
        var rows = cat.items.map(function (it) {
            return '<div class="cs-row">' +
                '<div class="cs-tl"><span data-speak="' + esc(it[0]) + '">' + esc(it[0]) + '</span></div>' +
                '<div class="cs-pron">' + esc(it[1]) + '</div>' +
                '<div class="cs-en">' + esc(it[2]) + '</div>' +
            '</div>';
        }).join('');
        return '<section class="cs-card"><h3 class="cs-cat">' + esc(cat.title) + '</h3>' + rows + '</section>';
    }).join('');

    var total = SHEET.reduce(function (n, c) { return n + c.items.length; }, 0);
    var count = document.getElementById('cs-count');
    if (count) count.textContent = total + ' essential phrases across ' + SHEET.length + ' situations';
})();
