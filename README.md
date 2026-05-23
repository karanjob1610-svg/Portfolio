# Python Full Stack Developer Portfolio

A modern, professional, fully responsive personal portfolio website built with React.js, Tailwind CSS, and Framer Motion.

## Features

- Dark/Light mode toggle
- Sticky navbar with active section highlighting
- Typing animation in hero section
- Scroll animations with Framer Motion
- Loading screen animation
- Responsive hamburger menu
- Glassmorphism cards and gradient accents
- All 9 portfolio sections (Hero, About, Skills, Projects, Experience, Certifications, Resume, Contact, Footer)

## Tech Stack

- React.js (Vite)
- Tailwind CSS v4
- Framer Motion
- React Icons

## Getting Started

```bash
cd portfolio
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build for Production

```bash
npm run build
npm run preview
```

## Customization

Edit files in `src/data/` to update your personal information:

- `personal.js` — Name, contact, social links, intro
- `skills.js` — Skill categories and progress levels
- `projects.js` — Project cards
- `experience.js` — Timeline entries
- `certifications.js` — Certificate cards
- `navigation.js` — Nav and footer links

Place your resume PDF at `public/resume.pdf` for the download button.

## Folder Structure

```
src/
├── components/     # Reusable UI and section components
├── pages/          # Page-level components
├── assets/         # Static assets
├── data/           # Portfolio content data
├── context/        # Theme context
├── hooks/          # Custom hooks
├── App.jsx
└── main.jsx
```

## License

MIT
