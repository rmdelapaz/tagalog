// Auto-inject site nav + dark mode toggle — ADVANCED (C1–C2) course.
// Mirrors /intermediate/nav.js but links within /advanced/ and back to the
// intermediate course. Theme key ('tagalog-theme') is shared so dark mode
// carries across all three courses. Prev/Next nav lives as static HTML in
// each lesson.
(function () {
  'use strict';

  // --- Theme (shared with the beginner & intermediate courses) ---
  const saved = localStorage.getItem('tagalog-theme');
  if (saved) document.documentElement.setAttribute('data-theme', saved);
  else if (window.matchMedia('(prefers-color-scheme: dark)').matches)
    document.documentElement.setAttribute('data-theme', 'dark');

  function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('tagalog-theme', next);
  }

  // --- Build nav ---
  const nav = document.createElement('nav');
  nav.className = 'site-nav';
  nav.setAttribute('aria-label', 'Site navigation');

  const links = document.createElement('div');
  links.className = 'nav-links';
  links.innerHTML = `
    <a href="/advanced/index.html" class="nav-brand">Tagalog Advanced</a>
    <span class="nav-sep">·</span>
    <a href="/advanced/glossary.html">Glossary</a>
    <span class="nav-sep">·</span>
    <a href="/advanced/readings.html">Readings</a>
    <span class="nav-sep">·</span>
    <a href="/advanced/cheatsheet.html">Cheat Sheet</a>
    <span class="nav-sep">·</span>
    <a href="/advanced/cando.html">Can-Do</a>
    <span class="nav-sep">·</span>
    <a href="/intermediate/index.html">&larr; Intermediate (B1–B2)</a>
    <span class="nav-sep">·</span>
    <a href="https://rays-home.netlify.app/">Ray's House of Fun</a>
  `;

  const toggle = document.createElement('button');
  toggle.className = 'theme-toggle';
  toggle.setAttribute('aria-label', 'Toggle dark mode');
  toggle.setAttribute('title', 'Toggle dark mode');
  toggle.addEventListener('click', toggleTheme);

  nav.appendChild(links);
  nav.appendChild(toggle);
  document.body.prepend(nav);
})();
