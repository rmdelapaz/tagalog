/* cheatsheet.js — renders the printable ADVANCED (C1–C2) grammar & expression
   cheat sheet. A curated quick-reference of the focus affixes, derivation rules,
   formal connectors, certainty markers, figures of speech, and set phrases the
   advanced course drills — grouped by function. Each row gets an audio button
   (via audio.js `data-speak`); the layout is print-optimised. Data lives here
   (var SHEET) so it is easy to hand-edit and so build_anki.py can read it.
   Reuses the .cs-* styles from learn.css. */
(function () {
    'use strict';

    var SHEET = [
        { title: 'The full focus inventory', items: [
            ['kumain', 'koo-MAH-in', 'actor focus (-um-): the doer wears ang'],
            ['kinain', 'kee-NAH-in', 'object focus (-in): the thing wears ang'],
            ['binuksan', 'bee-nook-SAN', 'locative (-an): the place/recipient wears ang'],
            ['ibinili', 'ee-bee-NEE-lee', 'benefactive (i-): the beneficiary wears ang'],
            ['ipinanghiwa', 'ee-pee-nang-HEE-wah', 'instrument (ipang-): the tool wears ang'],
            ['ikinatuwa', 'ee-kee-nah-too-WAH', 'causal (ika-): the cause wears ang'],
            ['tagaganap', 'tah-gah-gah-NAP', 'the role: doer / actor'],
            ['layon', 'LAH-yon', 'the role: object'],
            ['ganapan', 'gah-nah-PAN', 'the role: place of the action'],
            ['kasangkapan', 'kah-sang-KAH-pan', 'the role: instrument'],
            ['sanhi', 'san-HEE', 'the role: cause']
        ]},
        { title: 'paN- / maN- assimilation', items: [
            ['pam- / mam-', 'pam mam', 'before p, b, m — bili gives mamili'],
            ['pan- / man-', 'pan man', 'before d, l, r, s, t, n — tahi gives manahi'],
            ['pang- / mang-', 'pang mang', 'before vowels and k, g, h, w, y, ng — isda gives mangisda'],
            ['panulat', 'pah-NOO-lat', 'pang- + root gives the tool'],
            ['mangingisda', 'mah-ngee-NGIS-dah', 'mang- + reduplication gives the doer'],
            ['maintindihan', 'mah-in-tin-DEE-han', 'ma-…-an: perception that arrives'],
            ['pakainin', 'pah-kah-EE-nin', 'pa-…-in: make someone do it'],
            ['pahiraman', 'pah-hee-RAH-man', 'pa-…-an: direct the action at someone'],
            ['maging', 'mah-GING', 'to become'],
            ['magkaroon', 'mag-kah-roh-ON', 'to come to have']
        ]},
        { title: 'Formal syntax', items: [
            ['ay', 'ai', 'inversion marker — NOT the verb "to be"'],
            ['karaniwang ayos', 'kah-rah-NEE-wang AH-yos', 'usual order: predicate first, no ay'],
            ['di-karaniwang ayos', 'dee kah-rah-NEE-wang AH-yos', 'inverted: subject first, with ay'],
            ['Ang ginawa ko ay…', 'ang gee-nah-WAH koh ai', 'pseudo-cleft: What I did was…'],
            ['kung kaya’t', 'koong kah-YAT', 'and so / which is why'],
            ['na siyang', 'na SHAHNG', 'which is the one that'],
            ['na kung saan', 'na koong sah-AN', 'in which / where'],
            ['bilang', 'BEE-lang', 'as / in the capacity of'],
            ['ukol sa', 'OO-kol sa', 'concerning'],
            ['hinggil sa', 'hing-GIL sa', 'regarding'],
            ['upang', 'OO-pang', 'in order to (formal)'],
            ['maliban kung', 'mah-lee-BAN koong', 'unless'],
            ['hangga’t', 'hang-GAT', 'as long as / until']
        ]},
        { title: 'Certainty & source', items: [
            ['tiyak', 'tee-YAK', 'certain'],
            ['malamang', 'mah-LAH-mang', 'likely'],
            ['marahil', 'mah-RAH-hil', 'probably (formal)'],
            ['tila', 'TEE-lah', 'it seems'],
            ['wari', 'WAH-ree', 'it seems (literary)'],
            ['baka', 'BAH-kah', 'might — carries worry'],
            ['siguro', 'see-GOO-roh', 'probably (casual)'],
            ['yata', 'YAH-tah', 'I think (softest hedge, enclitic)'],
            ['diumano', 'dee-oo-mah-NOH', 'allegedly (news register)'],
            ['ayon kay / ayon sa', 'AH-yon kai / sa', 'according to (person / source)'],
            ['anang', 'AH-nang', 'said (literary speech tag)']
        ]},
        { title: 'Academic & official register', items: [
            ['panimula', 'pah-nee-MOO-lah', 'introduction'],
            ['metodolohiya', 'meh-toh-doh-loh-HEE-yah', 'methodology'],
            ['pagsusuri', 'pag-soo-SOO-ree', 'analysis'],
            ['sanggunian', 'sang-goo-nee-AN', 'references'],
            ['batay sa', 'BAH-tai sa', 'based on'],
            ['Maaaring sabihin na…', 'mah-ah-AH-ring sah-BEE-hin na', 'It may be said that… (hedge)'],
            ['Ipinapakita ng datos na…', 'ee-pee-nah-pah-KEE-tah nang DAH-tos na', 'The data show that…'],
            ['saligang batas', 'sah-LEE-gang bah-TAS', 'constitution'],
            ['hukuman', 'hoo-KOO-man', 'court'],
            ['nasasakdal', 'nah-sah-sak-DAL', 'the accused'],
            ['ibinasura', 'ee-bee-nah-SOO-rah', 'was dismissed (news verb)'],
            ['kinatigan', 'kee-nah-TEE-gan', 'was upheld (news verb)'],
            ['isinusulong', 'ee-see-noo-SOO-long', 'is being pushed for (news verb)']
        ]},
        { title: 'Argument & oratory', items: [
            ['Sa aking paninindigan…', 'sa AH-king pah-nee-nin-DEE-gan', 'It is my position that…'],
            ['Bukod dito', 'boo-KOD DEE-toh', 'Moreover'],
            ['Higit pa rito', 'HEE-git pa REE-toh', 'Furthermore'],
            ['Sa katunayan', 'sa kah-too-NAH-yan', 'In fact'],
            ['Totoo nga na… ngunit', 'toh-TOH-oh ngah na … NGOO-nit', 'concede, then refute'],
            ['Hindi ba’t…', 'hin-DEE bat', 'Is it not the case that…? (rhetorical)'],
            ['Nararapat lamang na', 'nah-rah-RAH-pat LAH-mang na', 'It is only right that…'],
            ['Sa ngalan ng', 'sa NGAH-lan nang', 'On behalf of'],
            ['Nais ko pong pasalamatan', 'nah-IS koh pong pah-sah-lah-mah-TAN', 'I wish to thank'],
            ['Bilang pangwakas', 'BEE-lang pang-WAH-kas', 'In closing… (the ending signal)'],
            ['panauhing pandangal', 'pah-nah-OO-hing pan-DAH-ngal', 'guest of honour']
        ]},
        { title: 'Literature & figures', items: [
            ['taludtod', 'tah-lood-TOD', 'a line of verse'],
            ['saknong', 'sak-NONG', 'stanza'],
            ['tugma', 'toog-MAH', 'rhyme (by sound class)'],
            ['sukat', 'SOO-kat', 'metre (syllables per line)'],
            ['awit', 'AH-wit', '12-syllable narrative verse'],
            ['korido', 'koh-REE-doh', '8-syllable narrative verse'],
            ['tanaga', 'tah-NAH-gah', '4 lines of 7 syllables'],
            ['talinghaga', 'tah-ling-HAH-gah', 'hidden figurative meaning'],
            ['tayutay', 'tah-yoo-TAI', 'figure of speech'],
            ['pagtutulad', 'pag-too-TOO-lad', 'simile'],
            ['pagwawangis', 'pag-wah-WAH-ngis', 'metaphor'],
            ['pagsasatao', 'pag-sah-sah-TAH-oh', 'personification'],
            ['balintuna', 'bah-lin-TOO-nah', 'irony'],
            ['pahiwatig', 'pah-hee-WAH-tig', 'hint / implication'],
            ['salawikain', 'sah-lah-wee-kah-IN', 'proverb'],
            ['bugtong', 'boog-TONG', 'riddle']
        ]},
        { title: 'Editing rules', items: [
            ['ng', 'nang', 'marker: of / by / indefinite object'],
            ['nang', 'nang', 'when / so that / before a manner word'],
            ['rin, raw', 'rin, raw', 'after a vowel or w, y'],
            ['din, daw', 'din, daw', 'after any other consonant'],
            ['-ng', 'ng', 'linker after a vowel: magandang bahay'],
            ['-g', 'g', 'linker after final n: buwang ito'],
            ['na', 'na', 'linker after any other consonant: malakas na hangin'],
            ['kung', 'koong', 'if / whether (uncertain)'],
            ['kapag', 'kah-PAG', 'when / whenever (real, repeated)'],
            ['bantas', 'ban-TAS', 'punctuation'],
            ['gitling', 'GIT-ling', 'hyphen'],
            ['panipi', 'pah-NEE-pee', 'quotation marks'],
            ['Ortograpiyang Pambansa', 'or-toh-grah-PEE-yang pam-BAN-sah', 'the national orthography (KWF)']
        ]},
        { title: 'Archaic forms (reading old texts)', items: [
            ['nguni’t', 'NGOO-nit', 'but (older spelling of ngunit)'],
            ['sapagka’t', 'sah-pag-KAT', 'because (formal / archaic)'],
            ['datapwa’t', 'dah-tap-WAT', 'however (archaic)'],
            ['kata', 'KAH-tah', 'we two (archaic dual pronoun)'],
            ['yaon', 'yah-ON', 'that (archaic form of iyon)'],
            ['ani / aniya', 'AH-nee / ah-nee-YAH', 'said (literary speech tags)'],
            ['aco → ako', 'ah-KOH', 'old c/q are modern k'],
            ['arao → araw', 'AH-raw', 'old -ao is modern -aw']
        ]},
        { title: 'The untranslatables', items: [
            ['kilig', 'KEE-lig', 'the giddy physical thrill of romance'],
            ['tampo', 'TAM-poh', 'affectionate withdrawal that invites coaxing'],
            ['gigil', 'GEE-gil', 'the clenched urge caused by something too cute'],
            ['lambing', 'LAM-bing', 'affection actively shown'],
            ['hiya', 'hee-YAH', 'shame / propriety / social face'],
            ['utang na loob', 'OO-tang na loh-OB', 'a binding, open-ended debt of gratitude'],
            ['bahala na', 'bah-HAH-lah nah', 'acting despite uncertainty'],
            ['pakikiramdam', 'pah-kee-kee-ram-DAM', 'reading a situation by feel before speaking'],
            ['sayang', 'SAH-yang', 'what a waste (of a lost chance)']
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
        return '<section class="cs-card"><h3 class="cs-cat">' + esc(cat.title) +
            '<button type="button" class="cs-cat-practice" data-cat="' + esc(cat.title) + '" ' +
            'aria-label="Practice ' + esc(cat.title) + ' flashcards" title="Practice these">🃏</button>' +
            '</h3>' + rows + '</section>';
    }).join('');

    var total = SHEET.reduce(function (n, c) { return n + c.items.length; }, 0);
    var count = document.getElementById('cs-count');
    if (count) count.textContent = total + ' essential items across ' + SHEET.length + ' groups';

    /* ---------- flashcard practice ----------
       Flip through every item (front = Tagalog + pronunciation, back = English).
       Reuses the .lx-flash modal styles from learn.css. Browse-only. */
    var DECK = [];
    SHEET.forEach(function (cat) { cat.items.forEach(function (it) { DECK.push({ tl: it[0], pron: it[1], en: it[2], cat: cat.title }); }); });

    function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)), t = a[i]; a[i] = a[j]; a[j] = t; } return a; }

    function openFlashcards(deck, title) {
        if (!deck.length) return;
        var i = 0, flipped = false;
        var overlay = document.createElement('div');
        overlay.className = 'lx-modal';
        overlay.innerHTML =
            '<div class="lx-flash" role="dialog" aria-modal="true" aria-label="Flashcard practice">' +
                '<div class="lx-flash-head"><h3>' + esc(title) + '</h3>' +
                    '<button type="button" class="lx-flash-close" aria-label="Close">&times;</button></div>' +
                '<div class="lx-flash-card"><div class="lx-flash-face"></div>' +
                    '<div class="lx-flash-hint">Tap the card to flip</div></div>' +
                '<div class="lx-flash-controls">' +
                    '<button type="button" class="lx-btn lx-flash-prev">← Prev</button>' +
                    '<span class="lx-flash-progress"></span>' +
                    '<button type="button" class="lx-btn lx-flash-next">Next →</button>' +
                '</div>' +
            '</div>';
        document.body.appendChild(overlay);

        var faceEl = overlay.querySelector('.lx-flash-face');
        var progEl = overlay.querySelector('.lx-flash-progress');
        function render() {
            var w = deck[i];
            if (!flipped) {
                faceEl.innerHTML = '<div class="lx-flash-front"><span data-speak="' + esc(w.tl) + '">' + esc(w.tl) + '</span></div>' +
                    (w.pron ? '<div class="lx-flash-pron">' + esc(w.pron) + '</div>' : '') +
                    (w.cat ? '<div class="lx-flash-hint" style="margin-top:.3rem">' + esc(w.cat) + '</div>' : '');
            } else {
                faceEl.innerHTML = '<div class="lx-flash-back">' + esc(w.en) + '</div>';
            }
            progEl.textContent = (i + 1) + ' / ' + deck.length;
        }
        function go(d) { i = (i + d + deck.length) % deck.length; flipped = false; render(); }
        function close() { overlay.remove(); document.removeEventListener('keydown', onKey); }
        overlay.querySelector('.lx-flash-card').addEventListener('click', function () { flipped = !flipped; render(); });
        overlay.querySelector('.lx-flash-next').addEventListener('click', function () { go(1); });
        overlay.querySelector('.lx-flash-prev').addEventListener('click', function () { go(-1); });
        overlay.querySelector('.lx-flash-close').addEventListener('click', close);
        overlay.addEventListener('click', function (e) { if (e.target === overlay) close(); });
        function onKey(e) {
            if (e.key === 'Escape') close();
            else if (e.key === 'ArrowRight') go(1);
            else if (e.key === 'ArrowLeft') go(-1);
            else if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); flipped = !flipped; render(); }
        }
        document.addEventListener('keydown', onKey);
        render();
    }

    var practiceBtn = document.querySelector('.cs-practice');
    if (practiceBtn) practiceBtn.addEventListener('click', function () {
        openFlashcards(shuffle(DECK), 'Cheat sheet · ' + DECK.length + ' items');
    });

    // Per-category practice (delegated on the grid).
    root.addEventListener('click', function (e) {
        var b = e.target.closest('.cs-cat-practice');
        if (!b) return;
        var cat = b.getAttribute('data-cat');
        var deck = DECK.filter(function (w) { return w.cat === cat; });
        if (deck.length) openFlashcards(shuffle(deck), cat + ' · ' + deck.length + ' items');
    });
})();
