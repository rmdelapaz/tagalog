#!/usr/bin/env python3
"""Idempotently wire the learning-experience layer (learn.css / vocab-data.js /
learn.js) into every page of the Tagalog course.

- Adds <link rel="stylesheet" href="/styles/learn.css"> in <head> (after shared.css).
- Adds vocab-data.js + learn.js after the existing audio.js include, before </body>.

Safe to re-run: it checks for existing includes and skips them.
"""
import glob
import re

CSS_LINK = '    <link rel="stylesheet" href="/styles/learn.css">\n'
SCRIPTS = (
    '<script src="/vocab-data.js"></script>\n'
    '<script src="/learn.js"></script>\n'
)

pages = sorted(glob.glob("tagalog_lesson_*.html")) + ["index.html", "tagalog_reader.html"]

for path in pages:
    try:
        with open(path, encoding="utf-8") as fh:
            html = fh.read()
    except FileNotFoundError:
        print(f"skip (missing): {path}")
        continue

    changed = False

    # 1) CSS link after shared.css (or after main.css as a fallback anchor).
    if "styles/learn.css" not in html:
        anchor = '<link rel="stylesheet" href="/styles/shared.css">\n'
        if anchor in html:
            html = html.replace(anchor, anchor + CSS_LINK, 1)
            changed = True
        else:
            # fallback: before </head>
            html = html.replace("</head>", CSS_LINK + "</head>", 1)
            changed = True

    # 2) Scripts after audio.js (which every page already loads last).
    if "/learn.js" not in html:
        anchor = '<script src="/audio.js"></script>\n'
        if anchor in html:
            html = html.replace(anchor, anchor + SCRIPTS, 1)
            changed = True
        else:
            html = html.replace("</body>", SCRIPTS + "</body>", 1)
            changed = True

    if changed:
        with open(path, "w", encoding="utf-8") as fh:
            fh.write(html)
        print(f"updated: {path}")
    else:
        print(f"ok (already wired): {path}")

print("done")
