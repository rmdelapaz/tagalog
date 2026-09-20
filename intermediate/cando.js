/* cando.js — CEFR B1/B2 "can-do" self-assessment checklist for the INTERMEDIATE
   course. Standalone (like glossary.js / readings.js). Renders the CANDO data
   below, persists ticks in localStorage (tagalog-int-cando — namespaced so it
   never collides with the beginner A1/A2 checklist), and shows live progress
   bars. Each item links to the intermediate lesson(s) that teach it. */
(function () {
    'use strict';

    var CANDO = [
        {
            level: 'B1', title: 'B1 — Intermediate (Threshold)',
            groups: [
                {
                    name: 'The focus system & verbs', items: [
                        { id: 'b1-focus', text: 'Explain why focus — not word order — makes Tagalog sound natural, and choose actor vs. object focus', ln: [[1]] },
                        { id: 'b1-loc', text: 'Spotlight a place or recipient with locative focus (-an)', ln: [[2]] },
                        { id: 'b1-ben', text: 'Say I did something for someone with benefactive focus (i-)', ln: [[3]] },
                        { id: 'b1-caus', text: 'Have something done by someone else with causatives (magpa-/ipa-)', ln: [[4]] },
                        { id: 'b1-abil', text: 'Say I can, managed to, or accidentally did something (maka-/ma-)', ln: [[5]] },
                        { id: 'b1-social', text: 'Join in an activity and do things to each other (maki-/mag-…-an)', ln: [[6]] }
                    ]
                },
                {
                    name: 'Time, connecting & conditions', items: [
                        { id: 'b1-aspect', text: 'Use aspect precisely, including the "just finished" recently-completed form', ln: [[7]] },
                        { id: 'b1-connect', text: 'Connect ideas with kaya, kasi/dahil, pero, habang, and kahit', ln: [[8]] },
                        { id: 'b1-cond', text: 'Talk about if / when / in case with kung, kapag, and sakali', ln: [[9]] }
                    ]
                },
                {
                    name: 'Describing & expressing', items: [
                        { id: 'b1-rel', text: 'Describe with relative clauses ("the person who…") and intensifiers', ln: [[10]] },
                        { id: 'b1-op', text: 'Give and justify an opinion, and name how I feel', ln: [[11]] },
                        { id: 'b1-story', text: 'Tell a story about the past with time words and sequence', ln: [[12]] }
                    ]
                }
            ]
        },
        {
            level: 'B2', title: 'B2 — Upper-Intermediate (Vantage)',
            groups: [
                {
                    name: 'Register & word-building', items: [
                        { id: 'b2-reg', text: 'Match my register — deep, formal, casual, or Taglish — to the situation', ln: [[13]] },
                        { id: 'b2-nom', text: 'Build abstract nouns with ka-…-an, pag-, and pagka-', ln: [[14]] }
                    ]
                },
                {
                    name: 'Reporting & hypotheticals', items: [
                        { id: 'b2-report', text: 'Report what others said (sabi niya na…, daw, tinanong kung…)', ln: [[15]] },
                        { id: 'b2-hypo', text: 'Talk about wishes and unreal "would have" situations with sana', ln: [[16]] }
                    ]
                },
                {
                    name: 'Argument & nuance', items: [
                        { id: 'b2-cause', text: 'Signal cause, result, and concession formally (dahil dito, samakatuwid, sa kabila ng)', ln: [[17]] },
                        { id: 'b2-idiom', text: 'Understand and use common idioms and proverbs (sawikain / kasabihan)', ln: [[18]] },
                        { id: 'b2-arg', text: 'State, defend, concede, and conclude an argument', ln: [[19]] },
                        { id: 'b2-part', text: 'Color my speech with attitude particles (yata, pala, nga, naman)', ln: [[20]] }
                    ]
                },
                {
                    name: 'Writing, media & fluency', items: [
                        { id: 'b2-write', text: 'Write a formal letter or email', ln: [[21]] },
                        { id: 'b2-media', text: 'Read news and follow songs using reading strategies', ln: [[22]] },
                        { id: 'b2-abstract', text: 'Discuss abstract topics — society, environment, technology, and culture', ln: [[23]] },
                        { id: 'b2-fluency', text: 'Keep a conversation flowing with fillers, back-channels, and cohesion', ln: [[24]] }
                    ]
                }
            ]
        }
    ];

    var KEY = 'tagalog-int-cando';

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
