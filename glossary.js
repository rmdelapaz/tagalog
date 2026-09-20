/* glossary.js — builds the course-wide vocabulary glossary from vocab-data.js.

   Aggregates every word across all lessons into one searchable, filterable,
   deduplicated reference. Each unique Tagalog word appears once, linked back to
   every lesson it is taught in, with audio (via audio.js `data-speak`) and a
   one-tap "add to review" that writes to the same spaced-repetition deck the
   lessons use (localStorage `tagalog-srs`). No dependency on learn.js. */
(function () {
    'use strict';

    var VOCAB = window.TAGALOG_VOCAB || {};
    var TITLES = VOCAB.titles || {};
    var K_SRS = 'tagalog-srs';

    /* ---- shared spaced-repetition store (same shape learn.js uses) ---- */
    function srsMap() {
        try { var v = localStorage.getItem(K_SRS); return v ? JSON.parse(v) : {}; }
        catch (_) { return {}; }
    }
    function isTracked(tl) { return !!srsMap()[tl]; }
    function trackWord(tl, on) {
        var m = srsMap();
        if (on) { if (!m[tl]) m[tl] = { box: 1, due: Date.now(), reps: 0 }; }
        else delete m[tl];
        try { localStorage.setItem(K_SRS, JSON.stringify(m)); } catch (_) {}
    }

    function esc(s) {
        return String(s).replace(/[&<>"']/g, function (c) {
            return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
        });
    }
    function debounce(fn, ms) { var t; return function () { var a = arguments, c = this; clearTimeout(t); t = setTimeout(function () { fn.apply(c, a); }, ms); }; }

    /* ---- build the deduplicated word list ---- */
    var byKey = {}, order = [];
    for (var ln = 1; ln <= 9; ln++) {
        var list = VOCAB[String(ln)];
        if (!Array.isArray(list)) continue;
        list.forEach(function (w) {
            var key = w.tl.toLowerCase();
            if (!byKey[key]) { byKey[key] = { tl: w.tl, pron: w.pron || '', en: w.en || '', lessons: [ln] }; order.push(key); }
            else if (byKey[key].lessons.indexOf(ln) < 0) byKey[key].lessons.push(ln);
        });
    }
    var WORDS = order.map(function (k) { return byKey[k]; });

    // strip diacritics for accent-insensitive search and A–Z bucketing
    function fold(s) { return s.toLowerCase().normalize ? s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '') : s.toLowerCase(); }

    var root = document.getElementById('glossary-root');
    if (!root) return;

    root.innerHTML =
        '<div class="g-controls">' +
            '<input type="search" id="g-search" class="g-search" placeholder="Search Tagalog or English…" aria-label="Search vocabulary" autocomplete="off">' +
            '<select id="g-lesson" class="g-select" aria-label="Filter by lesson"></select>' +
            '<select id="g-sort" class="g-select" aria-label="Sort order">' +
                '<option value="tl">Sort: Tagalog A–Z</option>' +
                '<option value="en">Sort: English A–Z</option>' +
                '<option value="lesson">Sort: by lesson</option>' +
            '</select>' +
        '</div>' +
        '<div class="g-azbar" id="g-azbar" aria-label="Jump to letter"></div>' +
        '<p class="g-stats" id="g-stats" aria-live="polite"></p>' +
        '<div class="table-wrap"><table class="g-table"><thead><tr>' +
            '<th>Tagalog</th><th>Pronunciation</th><th>English</th><th>Lesson</th><th class="g-th-act">Review</th>' +
        '</tr></thead><tbody id="g-body"></tbody></table></div>' +
        '<p class="g-empty" id="g-empty" hidden>No words match your search.</p>';

    var searchEl = document.getElementById('g-search');
    var lessonEl = document.getElementById('g-lesson');
    var sortEl = document.getElementById('g-sort');
    var bodyEl = document.getElementById('g-body');
    var statsEl = document.getElementById('g-stats');
    var emptyEl = document.getElementById('g-empty');
    var azEl = document.getElementById('g-azbar');

    // lesson filter options
    var opt = '<option value="">All lessons</option>';
    for (var i = 1; i <= 9; i++) opt += '<option value="' + i + '">Lesson ' + i + (TITLES[i] ? ' — ' + esc(TITLES[i]) : '') + '</option>';
    lessonEl.innerHTML = opt;

    function lessonLinks(lessons) {
        return lessons.slice().sort(function (a, b) { return a - b; }).map(function (n) {
            return '<a class="g-lesson-link" href="tagalog_lesson_' + n + '.html" title="' + esc(TITLES[n] || ('Lesson ' + n)) + '">L' + n + '</a>';
        }).join(' ');
    }

    function rowHTML(w) {
        var on = isTracked(w.tl);
        return '<tr data-tl="' + esc(w.tl) + '">' +
            '<td class="g-tl"><span data-speak="' + esc(w.tl) + '">' + esc(w.tl) + '</span></td>' +
            '<td class="g-pron">' + esc(w.pron) + '</td>' +
            '<td class="g-en">' + esc(w.en) + '</td>' +
            '<td class="g-les">' + lessonLinks(w.lessons) + '</td>' +
            '<td class="g-act"><button type="button" class="g-review' + (on ? ' g-on' : '') + '" ' +
                'aria-pressed="' + on + '" title="Add to spaced-repetition review deck">' + (on ? '✓' : '+') + '</button></td>' +
        '</tr>';
    }

    function currentFiltered() {
        var q = fold(searchEl.value.trim());
        var lf = lessonEl.value;
        var sort = sortEl.value;

        var rows = WORDS.filter(function (w) {
            if (lf && w.lessons.indexOf(parseInt(lf, 10)) < 0) return false;
            if (!q) return true;
            return fold(w.tl).indexOf(q) >= 0 || fold(w.en).indexOf(q) >= 0 || fold(w.pron).indexOf(q) >= 0;
        });

        rows.sort(function (a, b) {
            if (sort === 'en') return a.en.localeCompare(b.en);
            if (sort === 'lesson') {
                var d = Math.min.apply(null, a.lessons) - Math.min.apply(null, b.lessons);
                return d || a.tl.localeCompare(b.tl);
            }
            return fold(a.tl).localeCompare(fold(b.tl));
        });
        return rows;
    }

    function render() {
        var rows = currentFiltered();
        bodyEl.innerHTML = rows.map(rowHTML).join('');
        statsEl.textContent = 'Showing ' + rows.length + ' of ' + WORDS.length + ' words';
        emptyEl.hidden = rows.length > 0;
        azEl.style.display = (sortEl.value === 'tl' && !searchEl.value.trim()) ? '' : 'none';
    }

    // A–Z quick jump (active when sorted by Tagalog with no search)
    (function buildAZ() {
        var letters = {};
        WORDS.forEach(function (w) { var c = fold(w.tl).charAt(0).toUpperCase(); if (/[A-Z]/.test(c)) letters[c] = 1; });
        azEl.innerHTML = Object.keys(letters).sort().map(function (c) {
            return '<button type="button" class="g-az" data-letter="' + c + '">' + c + '</button>';
        }).join('');
        azEl.addEventListener('click', function (e) {
            var b = e.target.closest('.g-az'); if (!b) return;
            var c = b.getAttribute('data-letter').toLowerCase();
            var target = Array.prototype.find.call(bodyEl.querySelectorAll('.g-tl'), function (td) {
                return fold(td.textContent).charAt(0) === c;
            });
            if (target) target.closest('tr').scrollIntoView({ behavior: 'smooth', block: 'center' });
        });
    })();

    // review toggle (delegated)
    bodyEl.addEventListener('click', function (e) {
        var btn = e.target.closest('.g-review');
        if (!btn) return;
        var tl = btn.closest('tr').getAttribute('data-tl');
        var on = !isTracked(tl);
        trackWord(tl, on);
        btn.classList.toggle('g-on', on);
        btn.setAttribute('aria-pressed', String(on));
        btn.textContent = on ? '✓' : '+';
    });

    searchEl.addEventListener('input', debounce(render, 150));
    lessonEl.addEventListener('change', render);
    sortEl.addEventListener('change', render);

    render();
})();
