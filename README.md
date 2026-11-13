# Retro Sticker-Collage Portfolio Website

A complete, production-quality personal portfolio website built with a 70s/90s "sticker collage" aesthetic. Features cream paper backgrounds, oversized black display typography, handwritten script accents, draggable cartoon stickers, rounded cards with thick colored borders, smooth scrolling with Lenis + GSAP, and a tactile crumpled plastic wrap overlay on the hero.

Inspired by retro printed magazines, 90s sticker collections, Y2K graphic design, and scrapbook paper compositions.

---

## 🎨 Color System (Masculine Retro-Gamer)

Strictly free of pink, magenta, and purple:

- `--bg: #F1EFEA` (Cream paper background)
- `--ink: #1A1A1A` (Near-black display text & borders)
- `--primary: #1F4BFF` (Electric blue for headings, badges, and accents)
- `--accent: #FF6B1A` (Vibrant orange for highlights, numbers, and progress bars)
- `--soft: #B9CCFF` (Ice blue for card borders and skill panels)
- `--pop: #C6FF3D` (Neon lime for starbursts and sticker fills)
- `--white: #FFFFFF` (Card surfaces and die-cut borders)
- `--muted: #77736E` (Vintage editorial secondary text)
- `--border: #D8D3CA` (Subtle divider rules)

---

## 🚀 Tech Stack

- **Vite 6** + **React 18** + **TypeScript** (Strict mode)
- **Tailwind CSS v3** + CSS theme variables
- **GSAP 3** (`ScrollTrigger`, `Draggable`, and `@gsap/react` `useGSAP` hook)
- **Lenis** for 60fps smooth scrolling synchronized with ScrollTrigger
- **Lucide React** for lightweight icons
- **Google Fonts**:
  - *Archivo Black* (Oversized hero display & titles)
  - *Yellowtail* (Handwritten script headings)
  - *Libre Baskerville* (Editorial body copy & descriptions)

---

## 📦 Project Structure

```text
retro-sticker-portfolio/
├── public/
│   ├── images/
│   │   ├── profile.jpg               # Portrait photo (rounded card in About)
│   │   └── projects/                 # 9 Project showcase thumbnails
│   │       ├── project-01.jpg
│   │       ├── project-02.jpg
│   │       └── ... project-09.jpg
│   ├── stickers/                     # Die-cut SVG vector stickers
│   │   ├── camera.svg
│   │   ├── cassette.svg
│   │   ├── controller.svg
│   │   ├── cool.svg
│   │   ├── good-mood.svg
│   │   ├── good-vibes.svg
│   │   ├── lightning.svg
│   │   ├── smiley.svg
│   │   └── sparkle.svg
│   └── textures/
│       └── crumpled-plastic.png      # Hero transparent plastic wrap texture
├── src/
│   ├── components/
│   │   ├── About.tsx                 # "Hello" 2-column editorial bio & contacts
│   │   ├── Contact.tsx               # "LET'S WORK together" CTA & email button
│   │   ├── Cursor.tsx                # Custom interactive cursor (VIEW & Smiley)
│   │   ├── Footer.tsx                # Editorial retro footer
│   │   ├── Hero.tsx                  # 100svh collage hero with letter animation
│   │   ├── PlasticOverlay.tsx        # Wrinkled plastic blend overlay
│   │   ├── ProjectCard.tsx           # Rounded 3px ice-blue card with hover lift
│   │   ├── ProjectDetail.tsx         # Full-screen modal with orange wipe transition
│   │   ├── ProjectsGrid.tsx          # 3x3 responsive grid (1 col / 2 col / 3 col)
│   │   ├── Resume.tsx                # Education, experience & rotating badge
│   │   ├── SkillsPills.tsx           # Skills inside ice-blue panel + languages
│   │   ├── SoftwareBars.tsx          # Animated orange software progress bars
│   │   └── Sticker.tsx               # Draggable, interactive sticker component
│   ├── data/
│   │   ├── projects.ts               # Typed array of 9 editable projects
│   │   └── resume.ts                 # Typed resume, experience, skills & contacts
│   ├── hooks/
│   │   ├── useIsMobile.ts            # Responsive breakpoint detection hook
│   │   └── useLenis.ts               # Lenis smooth-scroll + GSAP ticker sync
│   ├── lib/
│   │   └── gsap.ts                   # Centralized GSAP plugin registration
│   ├── styles/
│   │   └── globals.css               # CSS variables, fonts, die-cut shadows
│   ├── App.tsx                       # Root layout & section order
│   └── main.tsx                      # Entry point
├── index.html
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── vite.config.ts
```

---

## 🛠️ Local Development Setup

### Prerequisites
- Node.js 18+ or 20+
- npm, pnpm, or yarn

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:5173`.

### 3. Build for Production
```bash
npm run build
```
Creates an optimized production bundle inside the `dist/` directory.

### 4. Preview Production Build
```bash
npm run preview
```

---

## ✏️ How to Customize & Replace Content

### 1. Editing Text Content (No JSX editing needed)
All content is separated into typed TypeScript data files:

- **Bio, Name, Contacts, Resume & Skills**:
  Open `src/data/resume.ts`:
  - Change `name` from `"Your Name"` to your name.
  - Modify `bio`, `title`, and social links in `contacts`.
  - Update `experience` and `education` entries.
  - Adjust skill pills and `software` proficiency percentages (0–100).

- **Projects Catalog**:
  Open `src/data/projects.ts`:
  - Edit project titles, numbers, categories, descriptions, tools, and clients.
  - Add or remove gallery image paths.

### 2. Replacing the Profile Portrait
Replace `public/images/profile.jpg` with your own photo.
- Recommended aspect ratio: **4:5** (e.g. 800×1000px or 1200×1500px).
- The component uses `object-fit: cover` with rounded 32px corners.

### 3. Replacing Project Artwork
Place your project images inside `public/images/projects/`:
- `project-01.jpg` through `project-09.jpg`.
- Recommended aspect ratio: **4:3** (e.g. 1200×900px).

### 4. Replacing Stickers
All stickers in `public/stickers/` are standard SVG files with die-cut strokes:
- `camera.svg`
- `good-vibes.svg`
- `cool.svg`
- `good-mood.svg`
- `controller.svg`
- `lightning.svg`
- `sparkle.svg`
- `smiley.svg`
- `cassette.svg`

You can swap these with your own custom SVGs or transparent PNGs.

### 5. Replacing the Hero Plastic Texture
The transparent crumpled plastic wrap texture is stored in `public/textures/crumpled-plastic.png`.
You can swap it with any high-resolution transparent or grayscale wrinkle texture.

---

## 🚀 Deploying to Vercel

### Option 1: Via Vercel CLI
```bash
npm i -g vercel
vercel
```

### Option 2: Via GitHub / Vercel Dashboard
1. Push your repository to GitHub, GitLab, or Bitbucket.
2. Go to [vercel.com](https://vercel.com) and log in.
3. Click **"Add New Project"** and import this repository.
4. Vercel automatically detects **Vite**:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
5. Click **Deploy**.

---

## ♿ Accessibility & Performance

- **Reduced Motion Support**: Detects `prefers-reduced-motion` and skips smooth scroll, mouse parallax, idle floating, and text clip reveals.
- **Touch / Mobile Optimization**: Automatically disables custom cursor, draggable interactions, and mouse parallax on mobile devices while keeping responsive layout intact.
- **Keyboard Navigation**: Project cards can be focused and triggered with `Enter` or `Space`. Project details can be dismissed with `Escape`.
- **Zero Memory Leaks**: All GSAP timelines, Draggable instances, ScrollTriggers, and Lenis tickers are cleaned up properly in `useGSAP` and `useEffect` returns.

---

## 📋 Assumptions Made

1. **Default Name**: Set to `"Your Name"` with typed sample data ready for instant replacement.
2. **Color Replacement**: As strictly requested, all pink/magenta elements from the reference screenshots were converted to **electric blue (`#1F4BFF`)**, **orange (`#FF6B1A`)**, and **neon lime (`#C6FF3D`)**.
3. **No UI Libraries**: All components, modal transitions, and controls were hand-crafted using Tailwind and GSAP without third-party component libraries.
4. **Artwork**: The 9 reference project thumbnails and the crumpled plastic texture were extracted and formatted directly into the project assets for instant fidelity.

#   b i d y u t - p o r t  
 