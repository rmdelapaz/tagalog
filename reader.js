/* reader.js — Tagalog pronunciation reader.

   Tagalog really is phonemic: syllabification and a broad transcription fall straight
   out of the spelling, with none of the exception lexicon French needed.

   One thing does NOT fall out of the spelling, and it is the point of this page:
   stress is phonemic but unwritten. `baka` is "cow" (BA-ka) or "maybe" (ba-KA); the
   ordinary orthography marks neither. Dictionaries disambiguate with diacritics, and
   this engine reads them when present:

       (none)  malumay   penultimate stress, no final glottal    baka   "cow"
       ´ acute mabilis   final stress, no final glottal          bakâ?  -> baká "maybe"
       ` grave malumi    penultimate stress, final glottal       batà   "child"
       ^ circ. maragsa   final stress, final glottal             bakâ

   With no diacritic the engine assumes malumay (the default) and says so.

   Speech reuses the audio layer's fallback: no Filipino voice ships with any major OS,
   so a Spanish voice stands in, and the utterance is transliterated into Spanish
   orthography first (see forSpanish below). The page text is never rewritten.

   Exposes window.TagalogReader. */
(function () {
    'use strict';

    /* ------------------------------------------------------------------
       Letters
       ------------------------------------------------------------------ */
    var PLAIN = 'aeiou';
    var ACUTE = 'áéíóú';    // mabilis  — stress this (final) syllable
    var GRAVE = 'àèìòù';    // malumi   — penult stress + final glottal stop
    var CIRC  = 'âêîôû';    // maragsa  — final stress + final glottal stop

    var VOWELS = PLAIN + ACUTE + GRAVE + CIRC;
    var BASE = {};
    [ACUTE, GRAVE, CIRC].forEach(function (set) {
        for (var i = 0; i < set.length; i++) BASE[set[i]] = PLAIN[i];
    });

    var isV = function (c) { return !!c && VOWELS.indexOf(c) >= 0; };
    var baseOf = function (c) { return BASE[c] || c; };

    /* Broad IPA. Loanword letters (c f j q v x z ñ) are mapped to the nearest
       native sound, which is what most speakers do. */
    var CONS = {
        'ng': 'ŋ', 'p': 'p', 'b': 'b', 't': 't', 'd': 'd', 'k': 'k', 'g': 'ɡ',
        'm': 'm', 'n': 'n', 's': 's', 'h': 'h', 'l': 'l', 'r': 'ɾ', 'w': 'w',
        'y': 'j', "'": 'ʔ', '’': 'ʔ',
        'c': 'k', 'f': 'p', 'j': 'dʒ', 'q': 'k', 'v': 'b', 'x': 'ks', 'z': 's', 'ñ': 'ɲ'
    };
    var VOWEL_IPA = { a: 'a', e: 'ɛ', i: 'i', o: 'o', u: 'u' };

    /* Two words are pronounced unlike their spelling. That is the whole lexicon. */
    var LEXICON = { 'ng': 'naŋ', 'mga': 'maˈŋa' };

    /* ------------------------------------------------------------------
       Tokenise. <ng> is one consonant.
       ------------------------------------------------------------------ */
    function units(word) {
        var w = word.toLowerCase();
        var out = [];
        var i = 0;
        while (i < w.length) {
            if (w.substr(i, 2) === 'ng') { out.push({ t: 'C', s: 'ng' }); i += 2; continue; }
            var c = w[i];
            if (isV(c)) out.push({ t: 'V', s: c });
            else out.push({ t: 'C', s: c });
            i += 1;
        }
        return out;
    }

    /* ------------------------------------------------------------------
       Syllabification. Tagalog is (C)V(C): a single consonant between vowels opens
       the next syllable (ma-ta); two consonants split (bas-ta). A w/y after a vowel
       falls out as a coda glide by the same rule (a-raw, ba-hay).
       ------------------------------------------------------------------ */
    function syllabify(us) {
        var nuclei = [];
        us.forEach(function (u, i) { if (u.t === 'V') nuclei.push(i); });
        if (!nuclei.length) return [us.map(function (_, i) { return i; })];

        var cuts = [];
        for (var k = 0; k + 1 < nuclei.length; k++) {
            var a = nuclei[k], b = nuclei[k + 1];
            var between = b - a - 1;
            if (between === 0) cuts.push(a + 1);          // hiatus: ma-a-ga
            else if (between === 1) cuts.push(b - 1);      // V-CV
            else cuts.push(b - 1);                          // VC-CV (coda + onset)
        }
        var out = [], start = 0;
        cuts.forEach(function (cut) {
            out.push(range(start, cut));
            start = cut;
        });
        out.push(range(start, us.length));
        return out;
    }

    function range(a, b) {
        var r = [];
        for (var i = a; i < b; i++) r.push(i);
        return r;
    }

    /* ------------------------------------------------------------------
       Stress and glottal stop, read off the diacritic
       ------------------------------------------------------------------ */
    function marking(word) {
        var w = word.toLowerCase();
        for (var i = 0; i < w.length; i++) {
            var c = w[i];
            if (ACUTE.indexOf(c) >= 0) return { kind: 'mabilis', at: i, glottal: false };
            if (GRAVE.indexOf(c) >= 0) return { kind: 'malumi', at: i, glottal: true };
            if (CIRC.indexOf(c) >= 0) return { kind: 'maragsa', at: i, glottal: true };
        }
        return null;
    }

    var TYPE_NOTE = {
        malumay: 'penultimate stress, no final glottal',
        mabilis: 'final stress, no final glottal',
        malumi: 'penultimate stress, final glottal stop',
        maragsa: 'final stress, final glottal stop'
    };

    /* ------------------------------------------------------------------
       Analysis
       ------------------------------------------------------------------ */
    function analysePart(part) {
        var us = units(part);
        var sylls = syllabify(us);
        var mark = marking(part);

        var stress;
        if (sylls.length === 1) stress = 0;
        else if (mark && mark.kind === 'mabilis') stress = sylls.length - 1;
        else if (mark && mark.kind === 'maragsa') stress = sylls.length - 1;
        else stress = sylls.length - 2;           // malumay and malumi: penultimate

        var kind = mark ? mark.kind : (sylls.length === 1 ? 'monosyllable' : 'malumay');
        return { us: us, sylls: sylls, stress: stress, kind: kind,
                 glottal: !!(mark && mark.glottal) };
    }

    /* Returns bare syllables. Stress is a property of the whole word, not of each
       hyphenated part, so the caller marks it once. */
    function transcribePart(p) {
        return p.sylls.map(function (idx) {
            var piece = '';
            idx.forEach(function (i, k) {
                var u = p.us[i];
                if (u.t === 'V') {
                    /* Every syllable needs an onset; a vowel-initial one takes a
                       glottal stop, which Tagalog spelling never writes. */
                    if (k === 0) piece += 'ʔ';
                    piece += VOWEL_IPA[baseOf(u.s)] || baseOf(u.s);
                } else {
                    piece += (CONS[u.s] !== undefined ? CONS[u.s] : u.s);
                }
            });
            return piece;
        });
    }

    function sylTexts(word, p) {
        /* Slice the original so casing and diacritics survive. */
        var pos = [], at = 0;
        p.us.forEach(function (u) { pos.push(at); at += u.s.length; });
        return p.sylls.map(function (idx) {
            var start = pos[idx[0]];
            var lastI = idx[idx.length - 1];
            var end = pos[lastI] + p.us[lastI].s.length;
            return word.slice(start, end);
        });
    }

    function analyse(word) {
        var key = word.toLowerCase();
        if (Object.prototype.hasOwnProperty.call(LEXICON, key)) {
            return { word: word, syllables: [word], ipa: '/' + LEXICON[key] + '/',
                     stressIndex: 0, kind: 'irregular', kindNote: 'pronounced unlike its spelling',
                     hasNg: /ng/.test(key), glottal: false, fromLexicon: true };
        }

        /* A hyphen is a real morpheme boundary (pag-ibig) and always starts a new
           syllable, so each side is analysed independently. */
        var parts = word.split(/[-‑]/);
        var sylls = [], ipa = [], stressIndex = 0, offset = 0, kind = null, glottal = false;

        parts.forEach(function (part, pi) {
            if (!part) return;
            var p = analysePart(part);
            var texts = sylTexts(part, p);
            if (pi === parts.length - 1) {          // stress belongs to the final root
                stressIndex = offset + p.stress;
                kind = p.kind;
                glottal = p.glottal;
            }
            sylls = sylls.concat(texts);
            ipa = ipa.concat(transcribePart(p));
            offset += texts.length;
        });

        if (ipa.length) {
            ipa[stressIndex] = 'ˈ' + ipa[stressIndex];
            if (glottal) ipa[ipa.length - 1] += 'ʔ';
        }

        return {
            word: word,
            syllables: sylls,
            ipa: '/' + ipa.join('.') + '/',
            stressIndex: stressIndex,
            kind: kind || 'malumay',
            kindNote: TYPE_NOTE[kind] || '',
            hasNg: /ng/.test(key),
            glottal: glottal,
            marked: !!marking(word),
            fromLexicon: false
        };
    }

    /* ------------------------------------------------------------------
       Spanish-voice fallback: rewrite the utterance, never the page.
       Mirrors audio.js's fallbackRules.
       ------------------------------------------------------------------ */
    function forSpanish(text) {
        return text.toLowerCase()
            .replace(/\bmga\b/g, 'manga')
            .replace(/\bng\b/g, 'nang')
            .replace(/[àáâ]/g, 'a').replace(/[èéê]/g, 'e').replace(/[ìíî]/g, 'i')
            .replace(/[òóô]/g, 'o').replace(/[ùúû]/g, 'u')
            .replace(/h/g, 'j')
            .replace(/k(?=[ei])/g, 'qu')
            .replace(/k/g, 'c')
            .replace(/w/g, 'u');
    }

    /* ------------------------------------------------------------------
       Chunking (Chrome truncates utterances past ~15s)
       ------------------------------------------------------------------ */
    var MAX_CHARS = 180;

    function chunk(text) {
        var sentences = text.match(/[^\n.!?]*[.!?]+\s*|[^\n.!?]+|\n+/g) || [];
        var out = [];
        sentences.forEach(function (raw) {
            var s = raw.trim();
            if (!s) return;
            while (s.length > MAX_CHARS) {
                var cut = s.lastIndexOf(',', MAX_CHARS);
                if (cut < MAX_CHARS * 0.4) cut = s.lastIndexOf(' ', MAX_CHARS);
                if (cut <= 0) cut = MAX_CHARS;
                out.push(s.slice(0, cut + 1).trim());
                s = s.slice(cut + 1).trim();
            }
            if (s) out.push(s);
        });
        return out;
    }

    window.TagalogReader = { analyse: analyse, chunk: chunk, forSpanish: forSpanish };

    /* ------------------------------------------------------------------
       Page wiring
       ------------------------------------------------------------------ */
    var WORD_RE = /[A-Za-zÀ-ÿÑñ'’-]+/g;

    function ready(fn) {
        if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fn);
        else fn();
    }

    ready(function () {
        var input = document.getElementById('reader-input');
        if (!input) return;

        var voiceSel = document.getElementById('reader-voice');
        var rate = document.getElementById('reader-rate');
        var rateOut = document.getElementById('reader-rate-value');
        var playBtn = document.getElementById('reader-play');
        var stopBtn = document.getElementById('reader-stop');
        var display = document.getElementById('reader-display');
        var tbody = document.getElementById('reader-analysis');
        var summary = document.getElementById('reader-summary');
        var unsupported = document.getElementById('reader-unsupported');
        var fallbackNote = document.getElementById('reader-fallback');

        var synth = window.speechSynthesis;
        var voices = [];
        var queue = [];

        if (!synth || typeof SpeechSynthesisUtterance === 'undefined') {
            unsupported.hidden = false;
            playBtn.disabled = true;
        }

        function langOf(v) { return v.lang.replace('_', '-').toLowerCase(); }
        function isNative(v) { return /^(fil|tl)/.test(langOf(v)); }

        function loadVoices() {
            if (!synth) return;
            var all = synth.getVoices();
            voices = [];
            ['fil', 'tl', 'es'].forEach(function (p) {
                all.forEach(function (v) { if (langOf(v).indexOf(p) === 0 && voices.indexOf(v) < 0) voices.push(v); });
            });
            voiceSel.innerHTML = '';
            if (!voices.length) {
                unsupported.hidden = false;
                playBtn.disabled = true;
                fallbackNote.hidden = true;
                return;
            }
            unsupported.hidden = true;
            playBtn.disabled = false;
            voices.forEach(function (v, i) {
                var o = document.createElement('option');
                o.value = String(i);
                o.textContent = v.name + ' (' + v.lang + ')' + (isNative(v) ? '' : ' — stand-in');
                voiceSel.appendChild(o);
            });
            fallbackNote.hidden = isNative(voices[0]);
        }

        function currentVoice() { return voices[Number(voiceSel.value)] || voices[0]; }

        function utterance(text) {
            var v = currentVoice();
            var u = new SpeechSynthesisUtterance(isNative(v) ? text : forSpanish(text));
            u.voice = v; u.lang = v.lang; u.rate = Number(rate.value);
            return u;
        }

        function el(tag, cls, text) {
            var n = document.createElement(tag);
            if (cls) n.className = cls;
            if (text != null) n.textContent = text;
            return n;
        }

        function render() {
            var text = input.value;
            display.innerHTML = '';
            tbody.innerHTML = '';
            queue = chunk(text);

            queue.forEach(function (sentence, si) {
                var span = el('span', 'r-sentence');
                span.dataset.i = String(si);
                var last = 0, m;
                WORD_RE.lastIndex = 0;
                while ((m = WORD_RE.exec(sentence))) {
                    if (m.index > last) span.appendChild(document.createTextNode(sentence.slice(last, m.index)));
                    var w = el('span', 'r-word', m[0]);
                    w.dataset.start = String(m.index);
                    w.dataset.end = String(m.index + m[0].length);
                    span.appendChild(w);
                    last = m.index + m[0].length;
                }
                if (last < sentence.length) span.appendChild(document.createTextNode(sentence.slice(last)));
                display.appendChild(span);
                display.appendChild(document.createTextNode(' '));
            });

            var words = text.match(WORD_RE) || [];
            var seen = Object.create(null), rows = 0, unmarked = 0;
            words.forEach(function (w) {
                var key = w.toLowerCase();
                if (seen[key] || rows >= 80) return;
                seen[key] = true; rows++;

                var a = analyse(w);
                if (!a.fromLexicon && !a.marked && a.syllables.length > 1) unmarked++;

                var tr = document.createElement('tr');
                tr.appendChild(el('td', null, w));

                var tdS = document.createElement('td');
                a.syllables.forEach(function (s, i) {
                    if (i) tdS.appendChild(document.createTextNode('·'));
                    tdS.appendChild(el('span', i === a.stressIndex ? 'r-stress' : null, s));
                });
                tr.appendChild(tdS);

                tr.appendChild(el('td', 'r-ipa', a.ipa));

                var tdK = document.createElement('td');
                tdK.appendChild(el('span', 'r-tag r-tag-' + a.kind, a.kind));
                if (!a.fromLexicon && !a.marked && a.syllables.length > 1) {
                    tdK.appendChild(el('span', 'r-tag r-tag-assumed', 'assumed'));
                }
                if (a.hasNg) tdK.appendChild(el('span', 'r-tag r-tag-ng', 'ng = ŋ'));
                if (a.glottal) tdK.appendChild(el('span', 'r-tag r-tag-glottal', 'final ʔ'));
                tr.appendChild(tdK);

                tbody.appendChild(tr);
            });

            summary.textContent = queue.length + ' chunk' + (queue.length === 1 ? '' : 's') +
                ' · ' + words.length + ' words · ' + rows + ' analysed' +
                (unmarked ? ' · ' + unmarked + ' with stress assumed (unmarked)' : '');
        }

        function clearMarks() {
            Array.prototype.forEach.call(display.querySelectorAll('.speaking-word, .speaking-sentence'),
                function (e) { e.classList.remove('speaking-word', 'speaking-sentence'); });
        }

        function speakFrom(i) {
            if (i >= queue.length) { finish(); return; }
            var u = utterance(queue[i]);
            var sEl = display.querySelector('.r-sentence[data-i="' + i + '"]');
            clearMarks();
            if (sEl) sEl.classList.add('speaking-sentence');

            /* charIndex refers to the TRANSLITERATED text when a stand-in voice is used.
               Its length differs from the displayed text (ng -> nang), so word-level
               highlighting is only trustworthy for a native voice. */
            var trackWords = isNative(currentVoice());
            u.onboundary = function (e) {
                if (!trackWords || (e.name && e.name !== 'word')) return;
                if (typeof e.charIndex !== 'number' || !sEl) return;
                Array.prototype.forEach.call(sEl.querySelectorAll('.speaking-word'),
                    function (w) { w.classList.remove('speaking-word'); });
                var ws = sEl.querySelectorAll('.r-word');
                for (var k = 0; k < ws.length; k++) {
                    if (e.charIndex >= +ws[k].dataset.start && e.charIndex < +ws[k].dataset.end) {
                        ws[k].classList.add('speaking-word');
                        break;
                    }
                }
            };
            u.onend = function () { speakFrom(i + 1); };
            u.onerror = function () { finish(); };
            synth.speak(u);
        }

        function finish() {
            clearMarks();
            playBtn.textContent = '▶  Basahin nang malakas';
            stopBtn.disabled = true;
        }

        playBtn.addEventListener('click', function () {
            if (!queue.length || !voices.length) return;
            synth.cancel();
            playBtn.textContent = '⏸  Binabasa…';
            stopBtn.disabled = false;
            speakFrom(0);
        });
        stopBtn.addEventListener('click', function () { synth.cancel(); finish(); });

        display.addEventListener('click', function (e) {
            var w = e.target.closest('.r-word');
            if (!w || !voices.length) return;
            synth.cancel(); finish();
            synth.speak(utterance(w.textContent));
        });

        input.addEventListener('input', render);
        voiceSel.addEventListener('change', function () {
            fallbackNote.hidden = isNative(currentVoice());
        });
        rate.addEventListener('input', function () { rateOut.textContent = Number(rate.value).toFixed(2) + '×'; });

        if (synth) {
            loadVoices();
            synth.addEventListener('voiceschanged', loadVoices);
        }
        rateOut.textContent = Number(rate.value).toFixed(2) + '×';
        render();
    });
})();
