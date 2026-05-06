# MBTC ReactJS Training — TRAINOSYS

**Instructor:** Jem Laguda
**Dates:** May 5 – May 8, 2026 (4-day course)

A 4-day introduction to ReactJS for MBTC trainees, delivered in partnership with TRAINOSYS. The course starts with a Git, HTML, and CSS warm-up, then moves into progressively richer React code-alongs — from a "Hello World" first component to a working Todo app.

---

## Folder structure

```
resources-mbtc-2026/
├── activities/               Hands-on exercises for trainees
│   ├── activity-1/           HTML/CSS landing-page activity
│   └── activity-2/           PDF-based assignment
├── code-alongs/              Instructor-led demos
│   ├── HTML and CSS/         Pre-React HTML/CSS examples
│   ├── hello-world/          First React app (Create React App)
│   ├── my-first-react-app/   First Vite + React app
│   └── todo-app/             Todo app (Vite + React, components & state)
└── slides/                   Slide decks for the cohort
```

Quick links:

- [activities/](activities/)
  - [activity-1/](activities/activity-1/)
  - [activity-2/](activities/activity-2/)
- [code-alongs/](code-alongs/)
  - [HTML and CSS/](code-alongs/HTML%20and%20CSS/)
  - [hello-world/](code-alongs/hello-world/)
  - [my-first-react-app/](code-alongs/my-first-react-app/)
  - [todo-app/](code-alongs/todo-app/)
- [slides/](slides/)

---

## Prerequisites

Before the first session, please install:

- **Node.js 18+** (LTS recommended) and **npm**
- **Git**
- A modern browser — Chrome, Edge, or Firefox
- **VS Code** (recommended) with these extensions:
  - ES7+ React/Redux/React-Native snippets
  - Prettier — Code formatter

Sanity-check your setup from a terminal:

```bash
node -v
npm -v
git --version
```

---

## Getting started

Clone the repo and step into this folder:

```bash
git clone <repo-url>
cd MBTC-REACTJS/resources-mbtc-2026
```

The code-along projects use **two different toolchains** — pick the matching commands for whichever project you're running.

### Vite projects (`my-first-react-app`, `todo-app`)

```bash
cd code-alongs/<project-name>
npm install
npm run dev
```

The dev server prints a local URL (typically `http://localhost:5173`).

### Create React App project (`hello-world`)

```bash
cd code-alongs/hello-world
npm install
npm start
```

The dev server opens automatically at `http://localhost:3000`.

> All sub-projects use **React 19.2.5**.

---

## Activities & exercises

Trainee work lives under [activities/](activities/):

- **[activity-1/](activities/activity-1/)** — HTML/CSS landing-page activity. Open the folder and follow the instructions in the included files.
- **[activity-2/](activities/activity-2/)** — PDF-based assignment. Open the PDF and complete the tasks as described.

Work through each activity in your own copy of the repo, and reach out to the instructor if you get stuck.

---

## Resources & links

- React (official docs) — https://react.dev
- Vite — https://vitejs.dev
- Create React App — https://create-react-app.dev
- MDN Web Docs (HTML / CSS / JS) — https://developer.mozilla.org
- Git Handbook — https://docs.github.com/en/get-started/using-git/about-git
- JavaScript.info — https://javascript.info

---

## Instructor

**Jem Laguda** — instructor for this MBTC × TRAINOSYS ReactJS cohort. Reach out during sessions for help with setup, exercises, or course content.
