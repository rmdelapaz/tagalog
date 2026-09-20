/* cando.js — CEFR A1/A2 "can-do" self-assessment checklist. Standalone
   (like glossary.js / readings.js). Renders the CANDO data below, persists
   ticks in localStorage (tagalog-cando), and shows live progress bars.
   Each item links to the lesson(s) that teach it. */
(function () {
    'use strict';

    var CANDO = [
        {
            level: 'A1', title: 'A1 — Breakthrough (Beginner)',
            groups: [
                {
                    name: 'Getting started', items: [
                        { id: 'a1-greet', text: 'Greet people and say goodbye', ln: [[1]] },
                        { id: 'a1-intro', text: 'Introduce myself and ask someone’s name', ln: [[1], [5]] },
                        { id: 'a1-po', text: 'Use po / opo to show respect to elders', ln: [[1], [5]] },
                        { id: 'a1-yesno', text: 'Say yes, no, and thank you', ln: [[1]] },
                        { id: 'a1-sounds', text: 'Pronounce the vowels, consonants, glottal stop, and stress', ln: [[1]] }
                    ]
                },
                {
                    name: 'Sentences & people', items: [
                        { id: 'a1-sent', text: 'Build simple sentences with the markers ang, ng, and sa', ln: [[2]] },
                        { id: 'a1-family', text: 'Talk about my family members', ln: [[5]] },
                        { id: 'a1-adj', text: 'Describe things with basic adjectives', ln: [[7]] },
                        { id: 'a1-verbs', text: 'Use common verbs in a simple sentence', ln: [[3]] }
                    ]
                },
                {
                    name: 'Numbers & everyday words', items: [
                        { id: 'a1-count', text: 'Count and tell the time', ln: [[4]] },
                        { id: 'a1-money', text: 'Talk about prices and money', ln: [[4], [6]] },
                        { id: 'a1-colors', text: 'Name colors, weather, and clothing', ln: [[15]] },
                        { id: 'a1-body', text: 'Name body parts, days of the week, and months', ln: [[16]] }
                    ]
                },
                {
                    name: 'Getting by', items: [
                        { id: 'a1-have', text: 'Say what I have or don’t have (may / wala)', ln: [[10]] },
                        { id: 'a1-ask', text: 'Ask basic questions — what, where, how much', ln: [[13]] }
                    ]
                }
            ]
        },
        {
            level: 'A2', title: 'A2 — Waystage (Elementary)',
            groups: [
                {
                    name: 'Transactions & conversation', items: [
                        { id: 'a2-market', text: 'Handle a market, restaurant, or jeepney exchange', ln: [[6]] },
                        { id: 'a2-dir', text: 'Ask for and follow simple directions', ln: [[6], [7]] },
                        { id: 'a2-req', text: 'Make polite requests and give commands', ln: [[14]] }
                    ]
                },
                {
                    name: 'Expressing myself', items: [
                        { id: 'a2-modals', text: 'Express wants, needs, ability, and obligation', ln: [[11]] },
                        { id: 'a2-neg', text: 'Negate anything with hindi, wala, ayaw, and huwag', ln: [[12]] },
                        { id: 'a2-compare', text: 'Compare things with mas and pinaka-', ln: [[10]] },
                        { id: 'a2-particles', text: 'Use pronouns and particles (na, pa, lang, rin) naturally', ln: [[10]] },
                        { id: 'a2-reason', text: 'Give a simple reason with kasi / dahil', ln: [[13]] }
                    ]
                },
                {
                    name: 'Everyday topics', items: [
                        { id: 'a2-weather', text: 'Describe the weather and what people are wearing', ln: [[15]] },
                        { id: 'a2-health', text: 'Say what hurts and ask for medicine or a doctor', ln: [[16]] },
                        { id: 'a2-plans', text: 'Talk about days, dates, and plans', ln: [[16], [4]] }
                    ]
                },
                {
                    name: 'Verbs, questions & reading', items: [
                        { id: 'a2-aspect', text: 'Use verbs in completed, ongoing, and future aspect', ln: [[3]] },
                        { id: 'a2-wh', text: 'Ask about who, what, where, when, why, and how', ln: [[13]] },
                        { id: 'a2-read', text: 'Read and understand short dialogues', ln: [['readings', 'Readings']] }
                    ]
                }
            ]
        }
    ];

    var KEY = 'tagalog-cando';

    function load() {
        try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; }
    }
    function save(state) {
        try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) { /* private mode */ }
    }
    function esc(s) {
        return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
            return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
        });
    }

    function lessonLink(spec) {
        // spec is [n] for a lesson number, or ['slug','Label'] for a page
        if (typeof spec[0] === 'number') {
            return '<a class="ck-lesson" href="tagalog_lesson_' + spec[0] + '.html">L' + spec[0] + '</a>';
        }
        return '<a class="ck-lesson" href="' + esc(spec[0]) + '.html">' + esc(spec[1]) + '</a>';
    }

    function allItems() {
        var out = [];
        CANDO.forEach(function (lvl) { lvl.groups.forEach(function (g) { g.items.forEach(function (it) { out.push(it); }); }); });
        return out;
    }

    document.addEventListener('DOMContentLoaded', function () {
        var root = document.getElementById('cando-root');
        if (!root) return;
        var state = load();

        var html = '';
        CANDO.forEach(function (lvl) {
            html += '<section class="ck-level" data-level="' + esc(lvl.level) + '">';
            html += '<div class="ck-level-head"><h2>' + esc(lvl.title) + '</h2>' +
                '<div class="ck-level-meter"><div class="ck-bar"><span class="ck-bar-fill" data-level="' + esc(lvl.level) + '"></span></div>' +
                '<span class="ck-level-count" data-level="' + esc(lvl.level) + '"></span></div></div>';
            lvl.groups.forEach(function (g) {
                html += '<h3 class="ck-group">' + esc(g.name) + '</h3><ul class="ck-list">';
                g.items.forEach(function (it) {
                    var on = !!state[it.id];
                    html += '<li class="ck-item' + (on ? ' ck-on' : '') + '">' +
                        '<label><input type="checkbox" class="ck-box" data-id="' + esc(it.id) + '"' + (on ? ' checked' : '') + '> ' +
                        '<span class="ck-text">' + esc(it.text) + '</span></label> ' +
                        '<span class="ck-lessons">' + it.ln.map(lessonLink).join(' ') + '</span></li>';
                });
                html += '</ul>';
            });
            html += '</section>';
        });
        root.innerHTML = html;

        function refresh() {
            var items = allItems();
            var total = items.length, done = 0;
            items.forEach(function (it) { if (state[it.id]) done++; });
            var overall = document.getElementById('ck-overall');
            if (overall) overall.textContent = done + ' / ' + total + ' can-do statements (' + Math.round(done / total * 100) + '%)';
            var ofill = document.getElementById('ck-overall-fill');
            if (ofill) ofill.style.width = Math.round(done / total * 100) + '%';

            CANDO.forEach(function (lvl) {
                var lt = 0, ld = 0;
                lvl.groups.forEach(function (g) { g.items.forEach(function (it) { lt++; if (state[it.id]) ld++; }); });
                var pct = Math.round(ld / lt * 100);
                var fill = root.querySelector('.ck-bar-fill[data-level="' + lvl.level + '"]');
                var cnt = root.querySelector('.ck-level-count[data-level="' + lvl.level + '"]');
                if (fill) fill.style.width = pct + '%';
                if (cnt) cnt.textContent = ld + '/' + lt + ' (' + pct + '%)';
            });
        }
        refresh();

        root.addEventListener('change', function (e) {
            var box = e.target.closest('.ck-box');
            if (!box) return;
            var id = box.getAttribute('data-id');
            if (box.checked) state[id] = true; else delete state[id];
            box.closest('.ck-item').classList.toggle('ck-on', box.checked);
            save(state);
            refresh();
        });

        var resetBtn = document.getElementById('ck-reset');
        if (resetBtn) resetBtn.addEventListener('click', function () {
            if (!confirm('Clear all your ticks and start fresh?')) return;
            state = {};
            save(state);
            Array.prototype.forEach.call(root.querySelectorAll('.ck-box'), function (b) { b.checked = false; b.closest('.ck-item').classList.remove('ck-on'); });
            refresh();
        });
    });
})();
