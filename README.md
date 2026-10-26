# KalaKumbh — Coming soon

Three responsive landing pages using the supplied festival posters and their cream, crimson, navy, purple, and gold palette.

## Open the website

Open `index.html` directly in a browser. No installation, build, external fonts, or framework required. Keep the files and `assets` folder together.

- `index.html` — English
- `hindi.html` — Hindi
- `kannada.html` — Kannada
- `styles.css` — shared responsive styling
- `script.js` — shared live countdown
- `assets/` — supplied posters, favicon, and calendar download

For local HTTP preview: `python -m http.server 8080 --bind 127.0.0.1`, then open http://127.0.0.1:8080.

## Event and countdown

Event dates: 3–7 February 2027. Venue: Sandip University, Nashik. Event details are taken from the supplied posters. The Hindi page uses the supplied Devanagari artwork for its wordmark and invitation.

The countdown targets `2027-02-03T00:00:00+05:30` (midnight India Standard Time). An opening time was not supplied; midnight is a date-based countdown, not an announced ceremony time. Change `start` in `script.js` when a confirmed time is available. The timer uses the visitor's device clock, clamps to zero, and changes its message during the festival and after 7 February. The calendar download is an all-day event covering 3–7 February.

All three HTML files contain their own translated content and share the CSS and JavaScript. No registration form, backend, or fabricated programme is included. Have the organizers review the translations before public release.

## Deploy

Upload the three HTML files, `styles.css`, `script.js`, and the complete `assets/` folder to any static web host. No build command is needed.
