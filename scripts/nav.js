// Auto-inject site nav + prev/next + dark mode toggle
(function () {
  const lessons = [
    { file: 'index.html', title: 'Home' },
    { file: 'tagalog_lesson_1.html', title: 'Lesson 1: Tagalog Fundamentals' },
    { file: 'tagalog_lesson_2.html', title: 'Lesson 2: Building Sentences' },
    { file: 'tagalog_lesson_3.html', title: 'Lesson 3: Mastering Verbs' },
    { file: 'tagalog_lesson_4.html', title: 'Lesson 4: Numbers & Time' },
    { file: 'tagalog_lesson_5.html', title: 'Lesson 5: Family & Social' },
    { file: 'tagalog_lesson_6.html', title: 'Lesson 6: Real Conversations' },
    { file: 'tagalog_lesson_7.html', title: 'Lesson 7: Parts of Speech' },
    { file: 'tagalog_lesson_8.html', title: 'Lesson 8: AI Language Learning' },
    { file: 'tagalog_lesson_9.html', title: 'Lesson 9: Vocabulary Reference' },
  ];

  // Determine current page
  const path = window.location.pathname;
  const currentFile = path.substring(path.lastIndexOf('/') + 1) || 'index.html';
  const currentIndex = lessons.findIndex(l => l.file === currentFile);

  // --- Theme ---
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

  // Left: brand + links
  const links = document.createElement('div');
  links.className = 'nav-links';
  links.innerHTML = `
    <a href="/index.html" class="nav-brand">Tagalog Lessons</a>
    <span class="nav-sep">·</span>
    <a href="https://rays-home.netlify.app/">Ray's House of Fun</a>
    <span class="nav-sep">·</span>
    <a href="https://rays-home.netlify.app/contact">Contact</a>
  `;

  // Right: toggle
  const toggle = document.createElement('button');
  toggle.className = 'theme-toggle';
  toggle.setAttribute('aria-label', 'Toggle dark mode');
  toggle.setAttribute('title', 'Toggle dark mode');
  toggle.addEventListener('click', toggleTheme);

  nav.appendChild(links);
  nav.appendChild(toggle);
  document.body.prepend(nav);

  // --- Prev / Next (only on lesson pages, not index) ---
  if (currentIndex > 0) {
    const footer = document.createElement('div');
    footer.className = 'lesson-nav';

    const prev = currentIndex > 1
      ? `<a href="/${lessons[currentIndex - 1].file}">← ${lessons[currentIndex - 1].title}</a>`
      : `<a href="/index.html">← All Lessons</a>`;

    const next = currentIndex < lessons.length - 1
      ? `<a href="/${lessons[currentIndex + 1].file}">${lessons[currentIndex + 1].title} →</a>`
      : '';

    footer.innerHTML = prev + '<span class="spacer"></span>' + next;
    document.body.appendChild(footer);
  }
})();
