/* readings.js — graded INTERMEDIATE (B1–B2) dialogues & reading passages that
   recycle vocabulary and grammar from across the intermediate lessons.
   Standalone (like glossary.js / cheatsheet.js): renders from the DIALOGUES data
   below, wires audio via data-speak (audio.js adds the 🔊 buttons), a hide-English
   comprehension toggle, an optional "Play all" (only when a TTS voice is
   installed), and check-your-understanding questions with a self-contained
   answer checker. Chips link to the intermediate lessons each piece draws on. */
(function () {
    'use strict';

    /* ---- content: each piece recycles earlier intermediate lessons ---- */
    var DIALOGUES = [
        {
            id: 'plano',
            title: 'Ang Plano Namin',
            en_title: 'Our Plan',
            kind: 'Dialogue',
            scene: 'Two friends make a weekend plan. Notice the conditionals (kung / kapag / sakali) and connectors (kasi, pero, habang, kaya).',
            recycles: [8, 9],
            lines: [
                { sp: 'Ana', tl: 'Ano ang plano mo sa Sabado?', en: "What's your plan on Saturday?" },
                { sp: 'Ben', tl: 'Kung maganda ang panahon, pupunta ako sa dagat.', en: "If the weather's nice, I'll go to the beach." },
                { sp: 'Ana', tl: 'Kapag umuulan, nasa bahay lang ako kasi ayaw kong mabasa.', en: "When it rains, I just stay home because I don't want to get wet." },
                { sp: 'Ben', tl: 'Sige, pero sakaling tumigil ang ulan, samahan mo ako, ha?', en: 'Okay, but in case the rain stops, come with me, okay?' },
                { sp: 'Ana', tl: 'Oo naman. Habang naghihintay, magluluto muna ako ng baon.', en: "Of course. While we wait, I'll cook some food to bring." },
                { sp: 'Ben', tl: 'Ang galing! Kaya naman masaya akong kasama ka.', en: "Great! That's why I'm happy to have you along." }
            ],
            questions: [
                { q: 'Where will Ben go if the weather is nice? (Tagalog word)', a: 'dagat|beach', hint: '"Pupunta ako sa ___."' },
                { q: 'Which word means "in case"?', a: 'sakali|sakaling', hint: '"___ tumigil ang ulan…"' }
            ]
        },
        {
            id: 'alaala',
            title: 'Ang Alaala Ko',
            en_title: 'My Memory',
            kind: 'Reading',
            scene: 'A short childhood memory. Watch the time anchors (noong, tuwing, isang araw) and the mix of aspects — including katatapos, the "just finished" form.',
            recycles: [7, 12],
            lines: [
                { tl: 'Noong bata pa ako, nakatira kami sa probinsya.', en: 'When I was a child, we lived in the province.' },
                { tl: 'Tuwing umaga, naglalaro ako sa bukid kasama ang mga kaibigan ko.', en: 'Every morning, I played in the field with my friends.' },
                { tl: 'Isang araw, habang naglalakad ako, bigla akong nadapa.', en: 'One day, while I was walking, I suddenly tripped.' },
                { tl: 'Katatapos ko lang tumayo nang dumating ang nanay ko.', en: 'I had just gotten up when my mother arrived.' },
                { tl: "Tinulungan niya ako, at pagkatapos, umuwi kami nang magkahawak-kamay.", en: 'She helped me, and afterward, we went home holding hands.' },
                { tl: 'Sa wakas, natuto akong mag-ingat. Hindi ko iyon malilimutan.', en: "In the end, I learned to be careful. I'll never forget that." }
            ],
            questions: [
                { q: 'Where did the family live? (Tagalog word)', a: 'probinsya|province', hint: '"Nakatira kami sa ___."' },
                { q: 'Which word means "suddenly"?', a: 'bigla|biglang', hint: '"___ akong nadapa."' }
            ]
        },
        {
            id: 'opinyon',
            title: 'Sa Palagay Ko',
            en_title: 'In My Opinion',
            kind: 'Reading',
            scene: 'A short opinion piece on learning languages. Notice the opinion openers, the concession (maaaring totoo, ngunit), and the conclusion (sa konklusyon).',
            recycles: [11, 17, 19],
            lines: [
                { tl: 'Sa palagay ko, mahalagang matuto ng ibang wika.', en: "In my opinion, it's important to learn other languages." },
                { tl: 'Naniniwala ako na binubuksan nito ang maraming pinto.', en: 'I believe it opens many doors.' },
                { tl: 'Maaaring totoo na mahirap sa umpisa, ngunit sulit ang pagsisikap.', en: "It may be true that it's hard at first, but the effort is worth it." },
                { tl: 'Dahil dito, mas madali tayong makakausap ng ibang tao.', en: 'Because of this, we can talk with other people more easily.' },
                { tl: 'Higit sa lahat, natututo tayo tungkol sa ibang kultura.', en: 'Above all, we learn about other cultures.' },
                { tl: 'Sa konklusyon, dapat nating pahalagahan ang pag-aaral ng wika.', en: 'In conclusion, we should value the study of language.' }
            ],
            questions: [
                { q: 'What phrase opens the opinion? (three Tagalog words for "in my opinion")', a: 'sa palagay ko', hint: 'The very first words.' },
                { q: 'What does "higit sa lahat" mean in English?', a: 'above all', hint: 'It introduces the most important point.' }
            ]
        },
        {
            id: 'barberya',
            title: 'Sa Barberya',
            en_title: 'At the Barbershop',
            kind: 'Dialogue',
            scene: 'Getting a haircut. Notice the causative magpagupit ("have my hair cut"), the social verb nakisakay ("hitched a ride"), and a locative -an verb (gugupitan).',
            recycles: [4, 6],
            lines: [
                { sp: 'Lito', tl: 'Magpapagupit sana ako. Pwede ba?', en: "I'd like to get a haircut. Is that possible?" },
                { sp: 'Barbero', tl: 'Opo, sandali lang po. Maupo muna kayo.', en: 'Yes, just a moment. Please have a seat.' },
                { sp: 'Lito', tl: 'Salamat. Nakisakay pa ako sa kaibigan ko para makarating dito.', en: 'Thanks. I even hitched a ride with my friend to get here.' },
                { sp: 'Barbero', tl: 'Ganun ba? Sige po, gugupitan ko na kayo.', en: "Is that so? All right, I'll cut your hair now." },
                { sp: 'Lito', tl: 'Salamat. Nagpagupit din kasi ako dito noong isang buwan.', en: 'Thanks. I also got a haircut here last month.' },
                { sp: 'Barbero', tl: 'Oo nga, naaalala ko kayo!', en: 'Right, I remember you!' }
            ],
            questions: [
                { q: 'What is Lito there to do? (the causative verb for "get a haircut")', a: 'magpapagupit|magpagupit|nagpagupit', hint: '"___ sana ako."' },
                { q: 'How did Lito get to the shop? (Tagalog verb, "hitched a ride")', a: 'nakisakay', hint: '"___ ako sa kaibigan ko."' }
            ]
        },
        {
            id: 'balita',
            title: 'Balita: Bagong Patakaran',
            en_title: 'News: A New Policy',
            kind: 'Reading',
            scene: 'A short news item in formal register. Notice the attribution (ayon sa), the reportative daw/raw, reported speech (sinabi… na), and a concession (sa kabila ng).',
            recycles: [13, 15, 22],
            lines: [
                { tl: 'Ayon sa pamahalaan, may bagong patakaran kaugnay ng kaligtasan sa kalsada.', en: "According to the government, there's a new policy regarding road safety." },
                { tl: 'Ipinatupad daw ito upang mabawasan ang mga aksidente.', en: 'It was reportedly implemented to reduce accidents.' },
                { tl: 'Sinabi ng opisyal na kailangan ng suporta ng mga mamamayan.', en: "The official said the citizens' support is needed." },
                { tl: 'Sa kabila ng ilang reklamo, marami rin ang sumang-ayon.', en: 'Despite some complaints, many also agreed.' },
                { tl: '"Para sa kabutihan ng lahat ito," ayon sa kaniya.', en: '"This is for everyone\'s good," according to him.' },
                { tl: 'Magsisimula raw ang patakaran sa susunod na buwan.', en: 'The policy will reportedly begin next month.' }
            ],
            questions: [
                { q: 'Which little word marks the information as second-hand ("reportedly")?', a: 'daw|raw', hint: '"Ipinatupad ___ ito."' },
                { q: 'What is the policy about? (Tagalog word for "safety")', a: 'kaligtasan|safety', hint: '"kaugnay ng ___ sa kalsada."' }
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
