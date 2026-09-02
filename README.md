# Manish Singh — Cinematic Developer & QA Portfolio

A modern, high-polish developer portfolio landing experience featuring a talking-head video hero section, ambient video lighting bleed, Three.js floating particle/bokeh canvas, GSAP entrance transitions, and CV-driven engineering showcases.

## Tech Stack
- **Framework:** Next.js 14 (App Router)
- **UI & State:** React 18
- **3D Graphics & Bokeh Particles:** Three.js
- **Motion & Staggered Reveals:** GSAP
- **Styling:** CSS Modules
- **Type Safety:** TypeScript

## Setup & Quickstart

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Add Video Asset:**
   - Place your video file in `public/assets/intro-video.mp4`.

3. **Run Development Server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Production Build:**
   ```bash
   npm run build
   npm run start
   ```

## Project Architecture
- `src/components/hero/CinematicLayer.tsx`: Three.js glowing particle system with additive blending, organic sine wave motion, mouse parallax lerping, and automatic resource disposal.
- `src/components/hero/VideoHero.tsx`: Dual-video layer composition (foreground subject + blurred ambient backglow), glassmorphism media controls, auto-hiding sound prompt badge, and GSAP timeline animations.
- `src/components/sections/*`: Modular portfolio sections detailing Manish Singh's professional experience, test automation frameworks, metrics, and core competencies.
