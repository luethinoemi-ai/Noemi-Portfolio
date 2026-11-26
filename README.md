# Noemi Lüthi · Portfolio

![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?logo=reactrouter&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

Personal portfolio of **Noemi Lüthi**, apprentice application developer (EFZ) from Switzerland.
It introduces who I am, shows my apprenticeship progress, my motorcycle and drawings, and links to my projects and repositories.

**Live site:** coming soon  
**Site language:** German

## Features

- **Multi-page site** with client-side routing and a burger menu that works on desktop and mobile
- **Hero** with an interactive wordmark ([Tech Text](https://reactbits.dev/text-animations/tech-text)), a soft aurora background and a typewriter tagline
- **About page** with hover and tap cards: words in the text reveal an image or a short note (on touch devices as a bottom card)
- **Apprenticeship progress**: semester overview with modules and status (done, running, planned)
- **Motorcycle and drawings** presented in a 3D image carousel
- **Projects and skills** rendered from data files, so adding a project means adding one entry
- **Contact and social links** with icons, plus an imprint page
- **Responsive** layout and no cookies, tracking or contact forms

## Tech stack

| Area | Choice |
|---|---|
| Framework | React with Vite |
| Routing | React Router (`HashRouter`, works on GitHub Pages without server rules) |
| Effects | [React Bits](https://reactbits.dev): Tech Text, Aurora, Circular Carousel |
| Icons | react-icons |
| Fonts | [Instrument Serif](https://fontsource.org/fonts/instrument-serif), self-hosted via Fontsource |
| Styling | Plain CSS with design tokens as CSS variables |

## Design

Dark, neutral base with a single pink accent. All colors live in `src/styles/variables.css`; components only use the variables.

| Token | Value | Use |
|---|---|---|
| `--bg` | `#0B0B0D` | Page background |
| `--surface` | `#141418` | Cards, footer, menu |
| `--border` | `#2A2A31` | Borders and dividers |
| `--accent` | `#E0708A` | Accent, progress, highlights |
| `--accent-light` | `#F2A7B8` | Links, buttons, effect color |
| `--text` | `#F2F2F4` | Body text |

## Project structure

```text
Noemi-Portfolio/
├── public/
│   └── images/
│       ├── drawings/        # drawings shown in the carousel
│       └── motorcycle/      # motorcycle photos
├── src/
│   ├── components/
│   │   ├── layout/          # Navbar, Footer, ScrollToTop
│   │   ├── sections/        # Hero, About, Progress, Skills, Motorcycle,
│   │   │                    # Drawings, Projects, Contact, Impressum, QuickLinks
│   │   └── ui/              # Typewriter, Reveal, Gallery, ProjectCard,
│   │                        # SkillTag, SocialLinks
│   ├── data/                # all content: about, progress, skills, projects,
│   │                        # drawings, motorcycle, links
│   ├── effects/             # React Bits components (TechText, Aurora, CircularCarousel)
│   ├── styles/              # variables.css (tokens), global.css
│   ├── App.jsx              # routes
│   └── main.jsx             # entry point
└── vite.config.js
```

## Routes

| Path | Page |
|---|---|
| `/` | Home |
| `/about` | About me, apprenticeship progress, skills |
| `/motorcycle` | Motorcycle |
| `/drawings` | Drawings |
| `/projects` | Projects |
| `/contact` | Contact and social links |
| `/impressum` | Imprint |

With hash routing the addresses look like `/#/projects`.

## Getting started

Requirements: Node.js 20.19 or newer and npm.

```bash
git clone https://github.com/luethinoemi-ai/Noemi-Portfolio.git
cd Noemi-Portfolio
npm install
npm run dev
```

The dev server runs on `http://localhost:5173` by default.

| Script | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

## Customizing the content

- **Texts, projects, skills, links:** edit the files in `src/data/`
- **Colors:** edit `src/styles/variables.css`
- **Images:** put files into `public/images/` and reference them in the matching data file

## Deployment

The site is built to be hosted on GitHub Pages. Image paths use `import.meta.env.BASE_URL` and the router uses hash URLs, so only the `base` option in `vite.config.js` needs to match the repository name (for this repository: `/Noemi-Portfolio/`).

## Accessibility and privacy

- Keyboard-friendly menu (focus handling, `Esc` closes it, `aria-expanded`)
- Hover cards also open on focus and on tap
- Animations respect `prefers-reduced-motion`
- The name is available as a real heading for screen readers
- No cookies, no analytics, fonts served locally

## Credits

- [React Bits](https://reactbits.dev) by David Haz: Tech Text, Aurora and Circular Carousel, used under the React Bits license (MIT with Commons Clause)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Instrument Serif](https://fontsource.org/fonts/instrument-serif) (SIL Open Font License)

## License

Texts, images and drawings are © Noemi Lüthi, all rights reserved. Third-party components keep their own licenses. The source code is public so you can see how the site is built; please do not copy the personal content.

## Contact

GitHub: [@luethinoemi-ai](https://github.com/luethinoemi-ai)
