#!/usr/bin/env python3
"""Idempotently wire the learning-experience layer into every INTERMEDIATE page.

Mirrors the root add_learn_assets.py but uses /intermediate/ asset paths and the
intermediate nav. Run from inside the intermediate/ folder.

- Adds <link rel="stylesheet" href="/styles/learn.css"> in <head> (after shared.css).
- Ensures the script chain (nav.js, audio.js, vocab-data.js, lesson-content.js,
  learn.js) is present before </body>.

Safe to re-run: it checks for existing includes and skips them.
"""
import glob

CSS_LINK = '    <link rel="stylesheet" href="/styles/learn.css">\n'
SCRIPTS = (
    '<script src="/intermediate/nav.js"></script>\n'
    '<script src="/audio.js"></script>\n'
    '<script src="/intermediate/vocab-data.js"></script>\n'
    '<script src="/intermediate/lesson-content.js"></script>\n'
    '<script src="/intermediate/learn.js"></script>\n'
)

pages = sorted(glob.glob("tagalog_lesson_*.html")) + ["index.html"]

for path in pages:
    try:
        with open(path, encoding="utf-8") as fh:
            html = fh.read()
    except FileNotFoundError:
        print(f"skip (missing): {path}")
        continue

    changed = False

    if "styles/learn.css" not in html:
        anchor = '<link rel="stylesheet" href="/styles/shared.css">\n'
        if anchor in html:
            html = html.replace(anchor, anchor + CSS_LINK, 1)
        else:
            html = html.replace("</head>", CSS_LINK + "</head>", 1)
        changed = True

    if "/intermediate/learn.js" not in html:
        anchor = '<script src="/audio.js"></script>\n'
        if anchor in html:
            html = html.replace(anchor, SCRIPTS, 1)
        else:
            html = html.replace("</body>", SCRIPTS + "</body>", 1)
        changed = True

    if changed:
        with open(path, "w", encoding="utf-8") as fh:
            fh.write(html)
        print(f"wired: {path}")
    else:
        print(f"ok (already wired): {path}")

print("done")
