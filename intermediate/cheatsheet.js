/* cheatsheet.js — renders the printable INTERMEDIATE (B1–B2) grammar & expression
   cheat sheet. A curated quick-reference of the affixes, connectors, particles,
   and set phrases the intermediate course drills — grouped by function. Each row
   gets an audio button (via audio.js `data-speak`); the layout is print-optimised.
   Data lives here (var SHEET) so it is easy to hand-edit and so build_anki.py can
   read it. Reuses the .cs-* styles from learn.css. */
(function () {
    'use strict';

    var SHEET = [
        { title: 'Focus affixes (where ang goes)', items: [
            ['kumain', 'koo-MAH-in', 'actor focus (-um-): the doer wears ang'],
            ['nagluto', 'nag-LOO-toh', 'actor focus (mag-): the doer wears ang'],
            ['kinain', 'kee-NAH-in', 'object focus (-in): the thing wears ang'],
            ['binuksan', 'bee-nook-SAN', 'locative (-an): the place/recipient wears ang'],
            ['ibinili', 'ee-bee-NEE-lee', 'benefactive (i-): the beneficiary wears ang'],
            ['nagpaluto', 'nag-pah-LOO-toh', 'causative (magpa-): I had someone cook'],
            ['ipinaluto', 'ee-pee-nah-LOO-toh', 'causative (ipa-): the thing was had-cooked'],
            ['nakita', 'nah-KEE-tah', 'ability (ma-): was able to see it'],
            ['nakabili', 'nah-kah-BEE-lee', 'ability (maka-): managed to buy'],
            ['nakisama', 'nah-kee-SAH-mah', 'social (maki-): joined in / got along']
        ]},
        { title: 'Connectors', items: [
            ['kasi', 'kah-SEE', 'because (casual)'],
            ['dahil', 'DAH-hil', 'because (formal)'],
            ['kaya', 'kah-YAH', 'so / therefore'],
            ['pero', 'PEH-roh', 'but (casual)'],
            ['ngunit', 'NGOO-nit', 'but / however (formal)'],
            ['habang', 'HAH-bang', 'while'],
            ['bago', 'BAH-goh', 'before'],
            ['pagkatapos', 'pag-kah-TAH-pos', 'after'],
            ['kahit', 'KAH-hit', 'even though'],
            ['gayunpaman', 'gah-yoon-pah-MAN', 'nevertheless'],
            ['samakatuwid', 'sah-mah-kah-TOO-wid', 'therefore (formal)'],
            ['sa kabila ng', 'sa kah-bee-LAH nang', 'despite']
        ]},
        { title: 'Conditionals & wishes', items: [
            ['kung', 'koong', 'if / whether (uncertain)'],
            ['kapag', 'kah-PAG', 'when / whenever (real)'],
            ['sakali', 'sah-kah-LEE', 'in case'],
            ['kung sakaling', 'koong sah-kah-LING', 'in the event that (formal)'],
            ['sana', 'SAH-nah', 'I hope / if only / would that'],
            ['dapat sana', 'DAH-pat SAH-nah', 'should have (but didn’t)']
        ]},
        { title: 'Opinions & feelings', items: [
            ['Sa palagay ko…', 'sa pah-lah-GAI koh', 'I think… / in my opinion'],
            ['Sa tingin ko…', 'sa tee-NGIN koh', 'It seems to me…'],
            ['Naniniwala ako na…', 'nah-nee-nee-WAH-lah', 'I believe that…'],
            ['Para sa akin…', 'PAH-rah sa AH-kin', 'For me / as I see it…'],
            ['Sang-ayon ako.', 'sang-AH-yon ah-KOH', 'I agree.'],
            ['Hindi ako sang-ayon.', 'hin-DEE ah-KOH sang-AH-yon', 'I disagree.']
        ]},
        { title: 'Attitude particles', items: [
            ['yata', 'YAH-tah', 'I think / maybe (mild doubt)'],
            ['siguro', 'see-GOO-roh', 'maybe / probably'],
            ['kaya?', 'kah-YAH', 'I wonder…? (in a question)'],
            ['pala', 'PAH-lah', 'oh, so…! (realization)'],
            ['nga', 'ngah', 'indeed / really'],
            ['naman', 'NAH-man', 'on the other hand / softener'],
            ['daw', 'dow', 'reportedly / they say']
        ]},
        { title: 'Time & aspect', items: [
            ['na', 'na', 'already (with completed)'],
            ['pa', 'pa', 'still / yet (with ongoing)'],
            ['noong', 'noh-ONG', 'back when (past anchor)'],
            ['kanina', 'kah-NEE-nah', 'earlier today'],
            ['mamaya', 'mah-mah-YAH', 'later today'],
            ['katatapos', 'kah-tah-TAH-pos', 'just finished (recently-completed)']
        ]},
        { title: 'Storytelling & fluency', items: [
            ['Noong isang araw…', 'noh-ONG ee-SANG AH-raw', 'One day / the other day…'],
            ['tapos', 'tah-POS', 'then / next'],
            ['bigla', 'big-LAH', 'suddenly'],
            ['sa wakas', 'sa WAH-kas', 'finally'],
            ['Ang ibig kong sabihin…', 'ang EE-big kong sah-BEE-hin', 'What I mean is…'],
            ['Talaga?', 'tah-lah-GAH', 'Really? (back-channel)'],
            ['gaya ng sinabi ko', 'GAH-yah nang see-NAH-bee koh', 'as I said']
        ]},
        { title: 'Formal writing', items: [
            ['Lumiliham ako upang…', 'loo-mee-LEE-ham ah-KOH oo-PANG', 'I am writing in order to…'],
            ['Kagalang-galang na Ginoo,', 'kah-gah-lang-GAH-lang na gee-noh-OH', 'Respected Sir, (salutation)'],
            ['Gumagalang,', 'goo-mah-GAH-lang', 'Respectfully, (sign-off)'],
            ['Paksa:', 'pak-SAH', 'Subject: (email)'],
            ['Magandang araw po.', 'mah-gan-DANG AH-raw poh', 'Good day. (email greeting)']
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
