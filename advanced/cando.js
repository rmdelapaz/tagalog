/* cando.js — CEFR C1/C2 "can-do" self-assessment checklist for the ADVANCED
   course. Standalone (like glossary.js / readings.js). Renders the CANDO data
   below, persists ticks in localStorage (tagalog-adv-cando — namespaced so it
   never collides with the beginner or intermediate checklists), and shows live
   progress bars. Each item links to the advanced lesson(s) that teach it. */
(function () {
    'use strict';

    var CANDO = [
        {
            level: 'C1', title: 'C1 — Effective Operational Proficiency',
            groups: [
                {
                    name: 'The complete grammar', items: [
                        { id: 'c1-focus', text: 'Use all six focus types, including instrument (ipang-) and causal (ika-), and name the roles in Tagalog', ln: [[1]] },
                        { id: 'c1-pan', text: 'Generate paN-/maN- forms from the assimilation rules instead of memorising them', ln: [[2]] },
                        { id: 'c1-ay', text: 'Use and read the ay-inversion correctly, including pseudo-clefts, and judge when it sounds stilted', ln: [[3]] },
                        { id: 'c1-embed', text: 'Build and unpack multi-clause sentences, and find the main predicate in a long one', ln: [[4]] },
                        { id: 'c1-mod', text: 'Grade my certainty precisely and mark where my information came from', ln: [[5]] }
                    ]
                },
                {
                    name: 'Register', items: [
                        { id: 'c1-deep', text: 'Recognise malalim na Tagalog and choose the native or loan layer deliberately', ln: [[6]] },
                        { id: 'c1-acad', text: 'Define, cite, hedge, and structure a paragraph in academic Filipino', ln: [[7]] },
                        { id: 'c1-legal', text: 'Read a court report, a legal clause, and a Filipino headline and say plainly what they mean', ln: [[8]] },
                        { id: 'c1-rhet', text: 'Build a shaped argument — position, proof, concession, refutation, conclusion', ln: [[9]] }
                    ]
                },
                {
                    name: 'Listening range', items: [
                        { id: 'c1-region', text: 'Follow non-Manila Tagalog, recognise regional markers, and talk about variation accurately', ln: [[10]] }
                    ]
                }
            ]
        },
        {
            level: 'C2', title: 'C2 — Mastery',
            groups: [
                {
                    name: 'Reading the literature', items: [
                        { id: 'c2-tula', text: 'Count sukat, hear tugma by its sound classes, and identify the classical verse forms', ln: [[11]] },
                        { id: 'c2-archaic', text: 'Read pre-war Tagalog prose — old spelling, archaic connectors, literary speech tags', ln: [[12]] },
                        { id: 'c2-salawikain', text: 'Understand and use salawikain, and solve bugtong by reading their metaphors', ln: [[13]] }
                    ]
                },
                {
                    name: 'Reading what is not said', items: [
                        { id: 'c2-talinghaga', text: 'Name the tayutay in Filipino terms and read talinghaga, pahiwatig, and euphemism', ln: [[14]] },
                        { id: 'c2-translate', text: 'Translate in both directions, avoid the focus and aspect traps, and defend my compromises', ln: [[15]] }
                    ]
                },
                {
                    name: 'Producing polished Tagalog', items: [
                        { id: 'c2-edit', text: 'Proofread my own Tagalog for ng/nang, rin/din, linkers, and aspect', ln: [[16]] },
                        { id: 'c2-talumpati', text: 'Structure and deliver a talumpati that a Filipino audience recognises as complete', ln: [[17]] },
                        { id: 'c2-identity', text: 'Discuss the Filipino-vs-Tagalog question, language policy, and slang layers accurately — and maintain my own Tagalog', ln: [[18]] }
                    ]
                }
            ]
        }
    ];

    var KEY = 'tagalog-adv-cando';

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
