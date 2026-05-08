# MBTC ReactJS Training — TRAINOSYS

**Instructor:** Jem Laguda
**Dates:** May 5 – May 8, 2026 (4-day course)

A 4-day introduction to ReactJS for MBTC trainees, delivered in partnership with TRAINOSYS. The course starts with a Git, HTML, and CSS warm-up, then moves into progressively richer React code-alongs — from a "Hello World" first component to a working Todo app.

---

## Folder structure

```
resources-mbtc-2026/
├── activities/                 Hands-on exercises for trainees
│   ├── activity-1/             HTML/CSS landing-page activity
│   ├── activity-2/             React JSX — form & product list
│   ├── activity-3/             Reusable components & props
│   ├── activity-4/             React hooks (useState/useEffect/useContext/useReducer)
│   ├── activity-5/             React Router + fetch/axios + Tailwind CSS
│   ├── activity-6/             Redux Toolkit refactor of activity-5
│   └── activity-7/             Vitest tests + Netlify deployment
├── code-alongs/                Instructor-led demos
│   ├── HTML and CSS/           Pre-React HTML/CSS examples
│   ├── git-github-intro/       Git & GitHub warm-up snippets
│   ├── hello-world/            First React app (Create React App)
│   ├── my-first-react-app/     First Vite + React app
│   ├── react-data/             Props, state, and data flow
│   ├── react-hooks/            useState / useEffect / custom hooks
│   ├── react-fetch-api-axios/  Calling APIs with fetch and Axios
│   ├── react-router/           Client-side routing with React Router
│   ├── react-redux/            Global state with Redux Toolkit
│   ├── react-unit-testing-vitest/  Unit testing components with Vitest
│   ├── react-pokedex/          Pokédex demo (API + routing + UI)
│   └── todo-app/               Todo app (Vite + React, components & state)
├── test-project/               Vite + React sandbox project
└── slides/                     Slide decks for the cohort (TBD — added during sessions)
```

Quick links:

- [activities/](activities/)
  - [activity-1/](activities/activity-1/)
  - [activity-2/](activities/activity-2/)
  - [activity-3/](activities/activity-3/)
  - [activity-4/](activities/activity-4/)
  - [activity-5/](activities/activity-5/)
  - [activity-6/](activities/activity-6/)
  - [activity-7/](activities/activity-7/)
- [code-alongs/](code-alongs/)
  - [HTML and CSS/](code-alongs/HTML%20and%20CSS/)
  - [git-github-intro/](code-alongs/git-github-intro/)
  - [hello-world/](code-alongs/hello-world/)
  - [my-first-react-app/](code-alongs/my-first-react-app/)
  - [react-data/](code-alongs/react-data/)
  - [react-hooks/](code-alongs/react-hooks/)
  - [react-fetch-api-axios/](code-alongs/react-fetch-api-axios/)
  - [react-router/](code-alongs/react-router/)
  - [react-redux/](code-alongs/react-redux/)
  - [react-unit-testing-vitest/](code-alongs/react-unit-testing-vitest/)
  - [react-pokedex/](code-alongs/react-pokedex/)
  - [todo-app/](code-alongs/todo-app/)
- [test-project/](test-project/)
- [slides/](slides/) — *decks added during sessions*

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

### Vite projects — `npm run dev`

Applies to: `my-first-react-app`, `react-data`, `react-hooks`, `react-fetch-api-axios`, `react-router`, `react-redux`, `react-unit-testing-vitest`, `react-pokedex`, and the root-level `test-project`.

```bash
cd code-alongs/<project-name>   # or: cd test-project
npm install
npm run dev
```

The dev server prints a local URL (typically `http://localhost:5173`).

### Vite project with `npm start` (`todo-app`)

`todo-app` is also Vite, but its `package.json` aliases the dev server to `start`:

```bash
cd code-alongs/todo-app
npm install
npm start
```

### Create React App project (`hello-world`)

```bash
cd code-alongs/hello-world
npm install
npm start
```

The dev server opens automatically at `http://localhost:3000`.

### Running tests (`react-unit-testing-vitest`)

This code-along ships with sample component tests powered by Vitest and React Testing Library. After the standard Vite install/dev steps above, you can also run:

```bash
cd code-alongs/react-unit-testing-vitest
npm test
```

> All React sub-projects use **React 19.2.5**. The `HTML and CSS/` and `git-github-intro/` folders are plain static files — open them directly in your editor or browser, no install step.

---

## Activities & exercises

Trainee work lives under [activities/](activities/):

- **[activity-1/](activities/activity-1/)** — HTML/CSS landing-page activity. Open the folder and follow the instructions in the included files.
- **[activity-2/](activities/activity-2/)** — React JSX warm-up: build a form (first/last name, email, password) and a product list with images, titles, and prices.
- **[activity-3/](activities/activity-3/)** — Components & props: build reusable `Input`, `Card`, `Alert`, and `Rating` components.
- **[activity-4/](activities/activity-4/)** — React Hooks practice: `useState` (LightSwitch, ColorPicker), `useEffect` (MousePosition, RandomColor), `useContext` (virtual classroom), and `useReducer` (Form).
- **[activity-5/](activities/activity-5/)** — React Router + API + Tailwind: Home/Users/Posts/Post Details/About pages using `fetch` and `axios` against jsonplaceholder.
- **[activity-6/](activities/activity-6/)** — Redux Toolkit refactor of activity-5: slices, `createAsyncThunk`, `useSelector`/`useDispatch`.
- **[activity-7/](activities/activity-7/)** — Vitest + React Testing Library tests, then deploy the app to Netlify.

Work through each activity in your own copy of the repo, and reach out to the instructor if you get stuck.

---

## Session recordings

- **Day 2 (May 6, 2026)** — [Watch recording](https://drive.google.com/file/d/1DOnBP70g6ObicRyh_AYu21bMCCOSG-Z5/view?usp=sharing)
- **Day 3 (May 7, 2026)** — [Watch recording](https://drive.google.com/file/d/1dLeVEPehzL0bTIrz1cUnuUvk2rsPVY_u/view?usp=sharing)
- **Day 4 (May 8, 2026)** — [Watch recording](https://drive.google.com/file/d/1K0kedGD4E23e3TMFBTbDIyz0RJvW5yQQ/view?usp=sharing)

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
