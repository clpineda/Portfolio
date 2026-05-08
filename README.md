# Alex Reyes — Portfolio

A clean, minimal portfolio website built with **Next.js 14**, **Tailwind CSS**, and the App Router.

## Tech Stack

| Layer | Tech |
|---|---|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS |
| Fonts | DM Serif Display + Figtree (via `next/font/google`) |
| Contact API | Next.js Route Handler (`/app/api/contact/route.js`) |
| Deployment | Vercel (recommended) |

## Project Structure

```
app/
├── layout.js            # Root layout: fonts, metadata
├── page.js              # Home page — assembles all sections
├── globals.css          # Tailwind directives + base styles
├── hooks/
│   └── useScrollReveal.js   # IntersectionObserver scroll animations
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
└── api/
    └── contact/
        └── route.js     # POST /api/contact — wire up your email service here
```

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customisation Checklist

- [ ] Replace `Alex Reyes` with your name (in `layout.js`, `Navbar.jsx`, `Footer.jsx`)
- [ ] Update the hero tagline and about blurbs in `Hero.jsx` and `About.jsx`
- [ ] Replace stat numbers in `About.jsx`
- [ ] Edit projects array in `Projects.jsx` with your real projects
- [ ] Update skill tags in `Skills.jsx`
- [ ] Change contact email and social links in `Contact.jsx`
- [ ] Wire up email sending in `app/api/contact/route.js` (see comments inside)
- [ ] Add your `resume.pdf` to the `/public` folder

## Deploying to Vercel

```bash
npm install -g vercel
vercel
```

Or push to GitHub and import the repo at [vercel.com/new](https://vercel.com/new) — zero config needed.

## Adding Email to the Contact Form

1. Install Nodemailer: `npm install nodemailer`
2. Create `.env.local` with your SMTP credentials
3. Follow the commented-out example in `app/api/contact/route.js`
