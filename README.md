# Chetanya Bansal — Portfolio

A single-page portfolio built with React 19, Vite and Tailwind CSS v4.
Dark, editorial, and built around a four-colour palette.

---

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build into dist/
npm run preview  # serve the built output locally
```

Requires Node 18 or newer.

---

## Updating your details

**Everything lives in one file: `src/data/content.js`.** No component needs editing
for content changes.

```js
export const CONFIG = {
  linkedin:   'https://www.linkedin.com/in/chetanya-javadev90/',
  githubUser: 'Chetanya729',      // username only — URLs are built from this
  email:      'chetanyabansal410@gmail.com',
};
```

Change those three values and every button, `mailto:` link, repository link and the
GitHub stats call updates at once.

The same file also holds:

| Export     | What it controls                                                       |
| ---------- | ---------------------------------------------------------------------- |
| `SKILLS`   | The four skill groups. Add or remove items freely.                      |
| `LEARNING` | The "currently learning" row.                                           |
| `PROJECTS` | Project cards and their detail modals.                                  |
| `REPOS`    | The repository list in the GitHub panel.                                |
| `JOURNEY`  | Timeline entries.                                                       |
| `SECTIONS` | Section ids, nav labels and order.                                      |

### Adding a project

```js
{
  name: 'Project name',
  repo: 'repo-name',        // or null if it isn't public yet
  note: 'Repository not public yet',   // only used when repo is null
  blurb: 'One or two lines shown on the card.',
  tags: ['Java', 'Spring Boot'],
  overview: 'A paragraph shown at the top of the modal.',
  points: ['Bullet one.', 'Bullet two.'],
}
```

### Filling in dates

Every `JOURNEY` entry has a `period` field, currently empty. Leave it empty and the
date line doesn't render at all; fill it in (`'2024 — Present'`) and it appears.

---

## Structure

```
src/
├── data/content.js          all copy, links and project data
├── hooks/
│   ├── useMediaQuery.js     reduced-motion and pointer detection
│   ├── useReveal.js         one-shot IntersectionObserver reveal
│   ├── useActiveSection.js  nav highlighting
│   ├── useScrollProgress.js scroll rail + sticky nav state
│   ├── useMagnetic.js       buttons that lean toward the cursor
│   └── useSpotlight.js      card spotlight, tilt and drift
├── components/
│   ├── ui/                  Button, Reveal, Section, SectionHead
│   ├── Preloader.jsx        Cursor.jsx        Rail.jsx
│   ├── Navbar.jsx           Hero.jsx          About.jsx
│   ├── Skills.jsx           Projects.jsx      ProjectModal.jsx
│   ├── Journey.jsx          Github.jsx        Contact.jsx
│   └── Footer.jsx
├── index.css                theme tokens + the custom CSS layer
├── App.jsx
└── main.jsx
```

---

## Design tokens

Defined once in `src/index.css` under `@theme`, which is how Tailwind v4 handles
configuration — there is no `tailwind.config.js`.

```css
--color-ink:   #000000;   /* page ground        */
--color-bark:  #1F150C;   /* panels and bands   */
--color-ember: #412D15;   /* borders, accents   */
--color-cream: #E1DCC9;   /* type and highlights*/
```

These generate utilities automatically: `bg-ink`, `text-cream/60`, `border-ember`,
and so on. Change a hex here and the whole site follows.

Type is Instrument Serif for display and Space Grotesk for everything technical,
loaded from Google Fonts in `index.html`.

---

## A note on animation

There is no animation library. Reveals use a one-shot `IntersectionObserver`, the
cursor and magnetic effects use `requestAnimationFrame`, and the rest is CSS
transitions. That keeps the bundle to React plus icons rather than adding ~50 kB
for fade-ups. If you later want spring physics or layout animations, `motion` drops
in without disturbing anything else.

Reveals animate the standalone `translate` property rather than `transform`, so the
hover tilt and drift effects can use `transform` without the two fighting.

Every effect is disabled under `prefers-reduced-motion: reduce`, and the cursor,
magnetic and tilt layers never initialise on touch devices.

---

## GitHub stats

The three tiles in the GitHub section read from the public
`https://api.github.com/users/<username>` endpoint. No key, no token, nothing secret
in the bundle. Unauthenticated requests are rate-limited by IP (60/hour), and if the
call fails the tiles simply don't render — the section still reads correctly.

---

## Deploying

The build is static, so any host works.

**Netlify / Vercel** — build command `npm run build`, publish directory `dist`.

**GitHub Pages** — push `dist/` to a `gh-pages` branch. `base: './'` is already set
in `vite.config.js`, so it works from a subfolder too.

**chetanya.co.in** — upload the contents of `dist/` to your web root.
