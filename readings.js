/* readings.js — graded Tagalog dialogues & reading passages that recycle
   vocabulary from across the lessons. Standalone (like glossary.js /
   cheatsheet.js): renders from the DIALOGUES data below, wires audio via
   data-speak (audio.js adds the 🔊 buttons), a hide-English comprehension
   toggle, an optional "Play all" (only when a TTS voice is installed), and
   check-your-understanding questions with a self-contained answer checker. */
(function () {
    'use strict';

    /* ---- content: each piece recycles earlier lessons' words ---- */
    var DIALOGUES = [
        {
            id: 'greetings',
            title: 'Magandang Umaga!',
            en_title: 'Good Morning!',
            kind: 'Dialogue',
            scene: 'Two people meet for the first time and introduce themselves.',
            recycles: [1, 2],
            lines: [
                { sp: 'Ana', tl: 'Magandang umaga!', en: 'Good morning!' },
                { sp: 'Ben', tl: 'Magandang umaga rin. Kumusta ka?', en: 'Good morning too. How are you?' },
                { sp: 'Ana', tl: 'Mabuti naman, salamat. Ikaw?', en: "I'm fine, thanks. And you?" },
                { sp: 'Ben', tl: 'Mabuti rin. Ano ang pangalan mo?', en: "I'm fine too. What's your name?" },
                { sp: 'Ana', tl: 'Ako si Ana. Ikaw?', en: "I'm Ana. You?" },
                { sp: 'Ben', tl: 'Ako si Ben. Ikinagagalak kong makilala ka.', en: "I'm Ben. Nice to meet you." },
                { sp: 'Ana', tl: 'Ikinagagalak ko rin.', en: 'Nice to meet you too.' }
            ],
            questions: [
                { q: "What is the woman's name?", a: 'ana', hint: 'She introduces herself in line 5.' },
                { q: 'How does Ben say he feels? (one Tagalog word)', a: 'mabuti', hint: '"Fine / good."' }
            ]
        },
        {
            id: 'palengke',
            title: 'Sa Palengke',
            en_title: 'At the Market',
            kind: 'Dialogue',
            scene: 'A shopper buys fruit from a market vendor. Notice the numbers and the word may ("there is / have").',
            recycles: [4, 10],
            lines: [
                { sp: 'Lita', tl: 'Magandang hapon po. Magkano ang mansanas?', en: 'Good afternoon. How much are the apples?' },
                { sp: 'Tindero', tl: 'Magandang hapon. Dalawampung piso bawat isa.', en: 'Good afternoon. Twenty pesos each.' },
                { sp: 'Lita', tl: 'May saging po ba kayo?', en: 'Do you have bananas?' },
                { sp: 'Tindero', tl: 'Opo, may saging kami. Sampung piso lang.', en: 'Yes, we have bananas. Just ten pesos.' },
                { sp: 'Lita', tl: 'Bibili ako ng lima.', en: "I'll buy five." },
                { sp: 'Tindero', tl: 'Sige po. Limampung piso lahat.', en: 'Sure. Fifty pesos in total.' },
                { sp: 'Lita', tl: 'Heto po ang bayad. Salamat!', en: "Here's the payment. Thanks!" },
                { sp: 'Tindero', tl: 'Salamat din po!', en: 'Thank you too!' }
            ],
            questions: [
                { q: 'How much is one apple? (Tagalog number word)', a: 'dalawampu|dalawampung piso|twenty|20', hint: 'Piso bawat isa — the price for each.' },
                { q: 'How many bananas does Lita buy?', a: 'lima|5|five', hint: '"Bibili ako ng ___."' }
            ]
        },
        {
            id: 'pamilya',
            title: 'Ang Pamilya Ko',
            en_title: 'My Family',
            kind: 'Reading',
            scene: 'A short passage describing a family. Watch for the family words and the linker na / -ng joining describing words.',
            recycles: [5, 10],
            lines: [
                { tl: 'Ito ang pamilya ko.', en: 'This is my family.' },
                { tl: 'May tatay, nanay, at dalawang kapatid ako.', en: 'I have a father, a mother, and two siblings.' },
                { tl: 'Ang tatay ko ay guro, at ang nanay ko ay masipag na nars.', en: 'My father is a teacher, and my mother is a hardworking nurse.' },
                { tl: 'May nakatatanda akong kapatid na lalaki at nakababatang kapatid na babae.', en: 'I have an older brother and a younger sister.' },
                { tl: 'Masaya ang pamilya namin.', en: 'Our family is happy.' },
                { tl: "Mahal namin ang isa't isa.", en: 'We love one another.' }
            ],
            questions: [
                { q: "What is the father's job? (Tagalog word)", a: 'guro|teacher', hint: '"Ang tatay ko ay ___."' },
                { q: 'How many siblings are there?', a: 'dalawa|2|two', hint: '"May ___ na kapatid ako."' }
            ]
        },
        {
            id: 'plano',
            title: 'Ano ang Gagawin Mo?',
            en_title: 'What Will You Do?',
            kind: 'Dialogue',
            scene: 'Two friends talk about their plans. Notice the future-aspect verbs and the time words.',
            recycles: [3, 4],
            lines: [
                { sp: 'Ana', tl: 'Ano ang gagawin mo bukas?', en: 'What will you do tomorrow?' },
                { sp: 'Ben', tl: 'Pupunta ako sa palengke sa umaga. Ikaw?', en: "I'll go to the market in the morning. You?" },
                { sp: 'Ana', tl: 'Magluluto ako ng hapunan mamaya.', en: "I'll cook dinner later." },
                { sp: 'Ben', tl: 'Sarap naman! Anong oras?', en: 'Sounds delicious! What time?' },
                { sp: 'Ana', tl: 'Mga alas-sais ng gabi. Gusto mo bang kumain dito?', en: 'Around six in the evening. Do you want to eat here?' },
                { sp: 'Ben', tl: 'Oo naman, salamat!', en: 'Of course, thanks!' }
            ],
            questions: [
                { q: 'Where will Ben go tomorrow? (Tagalog word)', a: 'palengke|market', hint: '"Pupunta ako sa ___."' },
                { q: 'What time is dinner?', a: 'alas-sais|alas sais|6|six', hint: '"Mga ___ ng gabi."' }
            ]
        },
        {
            id: 'bahay',
            title: 'Sa Bahay',
            en_title: 'At Home',
            kind: 'Dialogue',
            scene: 'A parent and child at home. This one leans on the grammar essentials — may / wala, ito / iyan, and the little particles na, pa, po.',
            recycles: [7, 10],
            lines: [
                { sp: 'Nanay', tl: 'Nasaan ka na, anak?', en: 'Where are you now, child?' },
                { sp: 'Bata', tl: 'Nandito po ako sa kusina.', en: "I'm here in the kitchen." },
                { sp: 'Nanay', tl: 'May pagkain pa ba?', en: 'Is there still food?' },
                { sp: 'Bata', tl: 'Wala na po. Ubos na.', en: "There's none left. It's all gone." },
                { sp: 'Nanay', tl: 'Ay, sige. Bibili na lang tayo mamaya. Ano iyan sa kamay mo?', en: "Oh, all right. We'll just buy some later. What's that in your hand?" },
                { sp: 'Bata', tl: 'Ito po ang tsaa ninyo.', en: 'This is your tea.' },
                { sp: 'Nanay', tl: 'Salamat, anak. Napakabait mo.', en: "Thank you, child. You're so kind." }
            ],
            questions: [
                { q: 'Is there still food? (Tagalog word)', a: 'wala|none|no', hint: '"___ na po. Ubos na."' },
                { q: 'What is in the child’s hand? (Tagalog word)', a: 'tsaa|tea', hint: '"Ito po ang ___ ninyo."' }
            ]
        }
    ];

    var TITLES = (window.TAGALOG_VOCAB && window.TAGALOG_VOCAB.titles) || {};

    function esc(s) {
        return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
            return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
        });
    }
    function norm(s) {
        return (s || '').trim().toLowerCase().replace(/[.!?,;:]+$/, '').replace(/\s+/g, ' ');
    }

    function chip(n) {
        var t = TITLES[n] ? ' — ' + TITLES[n] : '';
        return '<a class="rd-chip" href="tagalog_lesson_' + n + '.html" title="Lesson ' + n + esc(t) + '">Lesson ' + n + '</a>';
    }

    function lineHTML(l) {
        var sp = l.sp ? '<span class="rd-sp">' + esc(l.sp) + '</span>' : '';
        return '<div class="rd-line' + (l.sp ? '' : ' rd-line-narr') + '">' +
            sp +
            '<div class="rd-line-body">' +
            '<p class="rd-tl"><span data-speak="' + esc(l.tl) + '">' + esc(l.tl) + '</span></p>' +
            '<p class="rd-en">' + esc(l.en) + '</p>' +
            '</div></div>';
    }

    function qHTML(q, i) {
        return '<li class="rd-q" data-answer="' + esc(q.a) + '">' +
            '<p class="rd-q-text">' + esc(q.q) + '</p>' +
            '<div class="rd-q-row">' +
            '<input type="text" class="rd-q-input" autocomplete="off" autocapitalize="none" spellcheck="false" aria-label="Your answer">' +
            '<button type="button" class="lx-btn lx-btn-primary rd-q-check">Check</button>' +
            '<button type="button" class="lx-btn rd-q-reveal">Show answer</button>' +
            '</div>' +
            '<p class="rd-q-fb" role="status"></p>' +
            (q.hint ? '<p class="rd-q-hint">Hint: ' + esc(q.hint) + '</p>' : '') +
            '</li>';
    }

    function cardHTML(d) {
        return '<article class="rd-card" id="rd-' + esc(d.id) + '">' +
            '<header class="rd-head">' +
            '<span class="rd-kind">' + esc(d.kind) + '</span>' +
            '<h2 class="rd-title"><span data-speak="' + esc(d.title) + '">' + esc(d.title) + '</span>' +
            ' <span class="rd-title-en">' + esc(d.en_title) + '</span></h2>' +
            '<p class="rd-scene">' + esc(d.scene) + '</p>' +
            '<p class="rd-recycles">Recycles: ' + d.recycles.map(chip).join(' ') + '</p>' +
            '<div class="rd-controls">' +
            '<button type="button" class="lx-btn rd-toggle-en" aria-pressed="false">Hide English</button>' +
            '<button type="button" class="lx-btn rd-playall" hidden>&#9654; Play all</button>' +
            '</div>' +
            '</header>' +
            '<div class="rd-lines">' + d.lines.map(lineHTML).join('') + '</div>' +
            '<div class="rd-quiz"><h3 class="rd-quiz-title">Check your understanding</h3>' +
            '<ol class="rd-qs">' + d.questions.map(qHTML).join('') + '</ol></div>' +
            '</article>';
    }

    /* ---- self-contained "Play all" (only if a TTS voice exists) ---- */
    function pickVoice() {
        var synth = window.speechSynthesis;
        if (!synth) return null;
        var voices = synth.getVoices() || [];
        var saved;
        try { saved = localStorage.getItem('tagalog-tts-voice'); } catch (e) { saved = null; }
        if (saved) { var m = voices.filter(function (v) { return v.voiceURI === saved; })[0]; if (m) return m; }
        var order = [/fil/i, /tl[-_]/i, /tagalog/i, /^tl$/i, /es[-_]/i, /spanish/i];
        for (var i = 0; i < order.length; i++) {
            var v = voices.filter(function (vv) { return order[i].test(vv.lang) || order[i].test(vv.name); })[0];
            if (v) return v;
        }
        return null;
    }
    function savedRate() {
        try { return parseFloat(localStorage.getItem('tagalog-tts-rate')) || 0.9; } catch (e) { return 0.9; }
    }
    function playAll(card, btn) {
        var synth = window.speechSynthesis;
        var voice = pickVoice();
        if (!synth || !voice) return;
        synth.cancel();
        var lines = Array.prototype.map.call(card.querySelectorAll('.rd-tl [data-speak]'), function (el) { return el.getAttribute('data-speak'); });
        var rate = savedRate(), i = 0;
        btn.classList.add('rd-playing');
        function next() {
            if (i >= lines.length) { btn.classList.remove('rd-playing'); return; }
            var u = new SpeechSynthesisUtterance(lines[i++]);
            u.voice = voice; u.lang = voice.lang; u.rate = rate;
            u.onend = next; u.onerror = next;
            synth.speak(u);
        }
        next();
    }

    /* ---- boot ---- */
    document.addEventListener('DOMContentLoaded', function () {
        var root = document.getElementById('readings-root');
        if (!root) return;
        root.innerHTML = DIALOGUES.map(cardHTML).join('');

        var count = document.getElementById('rd-count');
        if (count) {
            var qs = DIALOGUES.reduce(function (n, d) { return n + d.questions.length; }, 0);
            count.textContent = DIALOGUES.length + ' passages · ' + qs + ' comprehension questions';
        }

        var audioReady = window.CourseAudio && window.CourseAudio.available && window.CourseAudio.available();
        if (audioReady) {
            Array.prototype.forEach.call(root.querySelectorAll('.rd-playall'), function (b) { b.hidden = false; });
        }

        root.addEventListener('click', function (e) {
            var t = e.target;

            var tog = t.closest('.rd-toggle-en');
            if (tog) {
                var card = tog.closest('.rd-card');
                var hidden = card.classList.toggle('rd-hide-en');
                tog.setAttribute('aria-pressed', String(hidden));
                tog.textContent = hidden ? 'Show English' : 'Hide English';
                return;
            }

            var pa = t.closest('.rd-playall');
            if (pa) { playAll(pa.closest('.rd-card'), pa); return; }

            var chk = t.closest('.rd-q-check');
            if (chk) {
                var li = chk.closest('.rd-q');
                var input = li.querySelector('.rd-q-input');
                var fb = li.querySelector('.rd-q-fb');
                var alts = li.getAttribute('data-answer').split('|').map(norm);
                var ok = alts.indexOf(norm(input.value)) >= 0;
                li.classList.toggle('rd-correct', ok);
                li.classList.toggle('rd-wrong', !ok);
                fb.textContent = ok ? 'Tama! (Correct!) 🎉' : 'Not quite — try again, or reveal the answer.';
                return;
            }

            var rev = t.closest('.rd-q-reveal');
            if (rev) {
                var li2 = rev.closest('.rd-q');
                var ans = li2.getAttribute('data-answer').split('|')[0];
                var input2 = li2.querySelector('.rd-q-input');
                input2.value = ans;
                li2.classList.remove('rd-wrong');
                li2.classList.add('rd-correct');
                li2.querySelector('.rd-q-fb').textContent = 'Answer: ' + ans;
                return;
            }
        });

        root.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' && e.target.classList.contains('rd-q-input')) {
                e.preventDefault();
                var btn = e.target.closest('.rd-q').querySelector('.rd-q-check');
                if (btn) btn.click();
            }
        });
    });
})();
