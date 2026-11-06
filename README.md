<div align="center">

# TRUE Granada Experiences

**Granada no se visita, se vive.**
Adventure experiences in Granada guided by locals from the Albaicín — canyoning, vía ferrata and e-bike tours.

[**betrue.es**](https://betrue.es) · [Preview](https://true-granada-next.vercel.app)

![Next.js](https://img.shields.io/badge/Next.js_16-000?logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React_19-149ECA?logo=react&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_4-0F172A?logo=tailwindcss&logoColor=38BDF8)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?logo=framer&logoColor=white)

</div>

---

## About

The website for **TRUE Granada Experiences**, a small adventure tourism brand in Granada, Spain.
Instead of a catalogue of tours, visitors tell us how they want to discover Granada and we design the experience around them.

Brand, content and site are designed and built in-house.

## Features

- **Adventure Planner** — an interactive quiz that suggests the right experience and captures the lead (`/api/quiz-lead`)
- **Experience pages** — canyoning, vía ferrata and e-bike, each with its own journey-style page
- **Bilingual** — Spanish / English via a lightweight language context
- **Blog** with dynamic routes (`/blog/[slug]`)
- **Seasonal landing** — `winter-escape`
- FAQ, contact form, Instagram strip, map of the meeting point and a floating WhatsApp button
- Scroll-driven animations with Framer Motion

## Tech stack

| Area | Tools |
|---|---|
| Framework | Next.js 16 (App Router), React 19 |
| Styling | Tailwind CSS 4 |
| Motion | Framer Motion |
| Hosting | Vercel |

## Project structure

```
src/
├── app/            # Routes: home, experiencias, blog, nosotros, contacto, FAQ, winter-escape, api
├── components/     # Hero, AdventurePlanner, Experiences, Footer, Nav…
├── data/           # Experiences and blog content
└── i18n/           # Language context (ES / EN)
```

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Set `NEXT_PUBLIC_SITE_URL` to override the canonical URL (defaults to `https://betrue.es`).

---

<div align="center">
Made in Granada by <a href="https://github.com/avilalopezesp-cloud">Sebastián Ávila</a>
</div>
