# Meridian Studio

A React + Vite marketing site for a boutique architecture & interior design studio.

## Structure

```
src/
  main.jsx              entry point
  App.jsx                page routing (state-based, no router dependency)
  index.css              global styles / design tokens
  data/
    content.js            all copy and project/team data in one place
  components/
    Nav.jsx                header with mobile menu
    Footer.jsx
    RuleLabel.jsx           small "eyebrow" label used across sections
    WorkIndex.jsx           project list with cursor-following image preview
  pages/
    HomePage.jsx
    StudioPage.jsx          about / team / process
    WorkPage.jsx            full project index
    ContactPage.jsx         contact form
```

## Run it

```bash
npm install
npm run dev
```

Then open the printed local URL (typically http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

## Notes

- Routing is a simple `useState` switch in `App.jsx`. Swap in `react-router-dom`
  if the site grows past four pages.
- All project/team/service copy lives in `src/data/content.js` — edit there
  rather than in the components.
- Fonts (Fraunces, Inter) load via Google Fonts `@import` in `index.css`.
