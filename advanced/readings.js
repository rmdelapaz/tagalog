/* readings.js — authentic-style ADVANCED (C1–C2) reading passages. Each piece
   imitates a real register the advanced course teaches — a news item, an
   academic paragraph, classical verse, a speech, and a conversation that runs
   on implication — rather than a constructed classroom dialogue.
   Standalone (like glossary.js / cheatsheet.js): renders from the DIALOGUES data
   below, wires audio via data-speak (audio.js adds the 🔊 buttons), a hide-English
   comprehension toggle, an optional "Play all" (only when a TTS voice is
   installed), and check-your-understanding questions with a self-contained
   answer checker. Chips link to the advanced lessons each piece draws on. */
(function () {
    'use strict';

    /* ---- content: each piece recycles earlier advanced lessons ---- */
    var DIALOGUES = [
        {
            id: 'balita',
            title: 'Ibinasura ng Hukuman ang Petisyon',
            en_title: 'The Court Dismissed the Petition',
            kind: 'News item',
            scene: 'A news report in the official register. Notice that almost every verb is object focus with the actor demoted or absent, and watch for the journalist’s hedge diumano.',
            recycles: [5, 8],
            lines: [
                { tl: 'Ibinasura kahapon ng hukuman ang petisyon ng isang grupong sibiko laban sa bagong kautusan.', en: 'The court yesterday dismissed a civic group’s petition against the new directive.' },
                { tl: 'Ayon sa hatol, walang sapat na batayan upang ituloy ang usapin.', en: 'According to the ruling, there was no sufficient basis to proceed with the case.' },
                { tl: 'Diumano ay hindi naisumite ng mga nagsakdal ang kinakailangang dokumento.', en: 'The complainants allegedly failed to submit the required document.' },
                { tl: 'Kinatigan naman ng hukom ang panig ng pamahalaan hinggil sa pagpapatupad ng patakaran.', en: 'The judge, for his part, sided with the government regarding the policy’s implementation.' },
                { tl: 'Isinusulong pa rin ng grupo ang panibagong panukala ukol sa karapatang pantao.', en: 'The group is still pushing a new measure concerning human rights.' },
                { tl: 'Inihain ito sa Kongreso noong nakaraang buwan at nakabinbin pa hanggang ngayon.', en: 'It was filed in Congress last month and remains pending to this day.' }
            ],
            questions: [
                { q: 'Which verb means "was dismissed"?', a: 'ibinasura', hint: 'The first word of the passage.' },
                { q: 'Which single word marks the allegation the paper is not asserting?', a: 'diumano', hint: 'It opens the third sentence.' },
                { q: 'Which verb means "was upheld / sided with"?', a: 'kinatigan', hint: 'Fourth sentence.' }
            ]
        },
        {
            id: 'sanaysay',
            title: 'Ang Wika at ang Pagkatuto',
            en_title: 'Language and Learning',
            kind: 'Academic paragraph',
            scene: 'A paragraph of academic Filipino. Watch the four moves: define, cite, present data, hedge. Note how often the ay-inversion appears.',
            recycles: [3, 7],
            lines: [
                { tl: 'Ang unang wika ay tinutukoy sa pag-aaral na ito bilang wikang natutuhan ng bata sa tahanan.', en: 'The first language is defined in this study as the language a child learns at home.' },
                { tl: 'Ayon kay Santos (2019), mahigpit ang ugnayan ng wika at pagkakakilanlan ng mag-aaral.', en: 'According to Santos (2019), there is a close relationship between a learner’s language and identity.' },
                { tl: 'Ipinapakita ng datos na mas mataas ang partisipasyon kapag ginagamit ang unang wika sa silid-aralan.', en: 'The data show that participation is higher when the first language is used in the classroom.' },
                { tl: 'Maaaring sabihin na nakatutulong ito sa maagang pagkatuto ng pagbasa.', en: 'It may be said that this helps with early reading acquisition.' },
                { tl: 'Gayunpaman, nangangailangan pa ng karagdagang pag-aaral upang matiyak ang ugnayang ito.', en: 'Nevertheless, further study is needed to confirm this relationship.' },
                { tl: 'Sa madaling salita, malinaw ang tanda ngunit hindi pa tiyak ang sanhi.', en: 'In short, the sign is clear but the cause is not yet certain.' }
            ],
            questions: [
                { q: 'Which verb introduces the definition ("is referred to")?', a: 'tinutukoy', hint: 'First sentence.' },
                { q: 'What phrase hedges the conclusion ("it may be said")? Give two words.', a: 'maaaring sabihin', hint: 'Fourth sentence.' },
                { q: 'Which phrase means "in short"? Give three words.', a: 'sa madaling salita', hint: 'The last sentence opens with it.' }
            ]
        },
        {
            id: 'tula',
            title: 'Katitibay, Ka Tulos',
            en_title: 'Stand Firm, O Stake',
            kind: 'Classical verse',
            scene: 'A classical tanaga — four lines, seven syllables each, monorhyme. Count the sukat as you read, and notice that the poem never states what it is about.',
            recycles: [11, 14],
            lines: [
                { tl: 'Katitibay, ka tulos,', en: 'Stand firm, O stake,' },
                { tl: 'sakaling datnang agos!', en: 'should the flood come!' },
                { tl: 'Ako’y mumunting lumot,', en: 'I am only a little moss,' },
                { tl: 'sa iyo’y pupulupot.', en: 'I will wind myself around you.' },
                { tl: 'Ang tugma: tulos, agos, lumot, pulupot — pawang nagtatapos sa malakas na katinig.', en: 'The rhyme: tulos, agos, lumot, pulupot — all end in hard consonants.' },
                { tl: 'Ang talinghaga: hindi ito tungkol sa lumot kundi sa pag-ibig at pagtitiwala.', en: 'The talinghaga: this is not about moss but about love and trust.' }
            ],
            questions: [
                { q: 'How many syllables does each line have?', a: '7|pito|seven', hint: 'Count: Ka-ti-ti-bay-ka-tu-los.' },
                { q: 'Which rhyme class do tulos and lumot belong to?', a: 'malakas|hard', hint: 'They end in s and t.' },
                { q: 'What is the Tagalog term for the poem’s hidden meaning?', a: 'talinghaga', hint: 'The last line names it.' }
            ]
        },
        {
            id: 'talumpati',
            title: 'Talumpati sa Pagtatapos',
            en_title: 'A Graduation Speech',
            kind: 'Speech',
            scene: 'An excerpt from a talumpati. Listen for the ceremonial opening, the concede-then-refute move, the three-part parallelism, and the closing signal.',
            recycles: [9, 13, 17],
            lines: [
                { tl: 'Magandang umaga po sa inyong lahat.', en: 'Good morning to you all.' },
                { tl: 'Sa ating panauhing pandangal, sa mga guro, magulang, at kapwa ko mag-aaral — isang mapagpalang umaga.', en: 'To our guest of honour, to the teachers, parents, and my fellow students — a blessed morning.' },
                { tl: 'Nais ko pong ibahagi ang isang simpleng paniniwala: ang edukasyon ay hindi pribilehiyo, kundi karapatan.', en: 'I wish to share a simple belief: education is not a privilege but a right.' },
                { tl: 'Totoo nga na mahirap ang landas na ito, ngunit hindi ba’t tayo rin ang makikinabang?', en: 'It is true that this path is hard, but are we not the very ones who will benefit?' },
                { tl: 'Para sa bata. Para sa magulang. Para sa bayan.', en: 'For the child. For the parent. For the nation.' },
                { tl: 'Bilang pangwakas — ang hindi lumingon sa pinanggalingan ay hindi makararating sa paroroonan.', en: 'In closing — one who does not look back at where they came from will never reach their destination.' },
                { tl: 'Maraming salamat po at magandang umaga.', en: 'Thank you very much and good morning.' }
            ],
            questions: [
                { q: 'What two-word phrase signals that the speech is ending?', a: 'bilang pangwakas', hint: 'Second-to-last line.' },
                { q: 'Which concession phrase opens the fourth line? Give three words.', a: 'totoo nga na', hint: 'It grants the point before reversing it.' },
                { q: 'What genre is the quoted closing line?', a: 'salawikain|proverb', hint: 'It is the most-quoted one in the language.' }
            ]
        },
        {
            id: 'pahiwatig',
            title: 'Hindi Naman Sinabi',
            en_title: 'Nobody Actually Said It',
            kind: 'Conversation',
            scene: 'Two colleagues. Almost nothing here is said directly. Read what each line means, not what it states — and notice that no one is ever refused out loud.',
            recycles: [14, 15],
            lines: [
                { sp: 'Mila', tl: 'Uy, ang aga mo ngayon, ah.', en: '(You’re late again.)' },
                { sp: 'Ben', tl: 'Grabe ang traffic, eh. Pasensya na.', en: '(I know. Sorry.)' },
                { sp: 'Mila', tl: 'Sige, wala ’yon. Pwede ka ba sa Sabado? May extra shift kasi.', en: 'It’s fine. Are you free Saturday? There’s an extra shift.' },
                { sp: 'Ben', tl: 'Ay, titingnan ko pa, ha? Medyo marami akong ginagawa nitong linggo.', en: '(No — but neither of us has to say so.)' },
                { sp: 'Mila', tl: 'Sige, sige. Baka next time na lang.', en: '(Understood. I won’t ask again.)' },
                { sp: 'Ben', tl: 'Salamat, ha. Utang na loob ko ’to sa ’yo.', en: '(Thank you — and I acknowledge I owe you.)' },
                { sp: 'Mila', tl: 'Naku, wala ’yon. Basta mag-ingat ka sa mga kasama mo.', en: '(There is someone there I do not trust.)' }
            ],
            questions: [
                { q: 'What does "Ang aga mo ngayon" actually mean?', a: 'late|you are late|he is late', hint: 'It says the opposite of what it means.' },
                { q: 'Does "Titingnan ko pa" mean yes or no?', a: 'no', hint: 'Nobody refuses out loud.' },
                { q: 'What is the Tagalog term for communicating by implication like this?', a: 'pahiwatig|pagpapahiwatig', hint: 'Lesson 14.' },
                { q: 'Which phrase names a binding debt of gratitude? Give three words.', a: 'utang na loob', hint: 'Ben says it near the end.' }
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
