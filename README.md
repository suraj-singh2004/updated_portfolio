# Suraj Singh — Developer Portfolio

A modern, high-performance portfolio website built with **React 19**, **TypeScript**, **Tailwind CSS v4**, and **Vite**.

![Portfolio Preview](public/images/suraj.jpg)

## ✨ Features

- **Modern Aesthetic**: Dark theme inspired design tokens (`#08090D` background, `#4D9EFF` cyan-blue accent).
- **Smooth Micro-Interactions**: Real-time cursor spotlight effects across cards, viewport scroll reveals, and ambient drift glows.
- **Hero Headshot**: Clean, framed portrait with status indicators and lightbox expander.
- **Interactive Sections**:
  - **About Me**: Interactive code snippet with one-click copy, engineering mindset, and core pillars.
  - **Skills**: Filterable technical skills across Languages, Frontend, Backend, AI/ML, and DevOps.
  - **Featured Projects**: Filterable project gallery with live demo links, source code, and performance metrics.
  - **Milestone Timeline**: Chronological engineering journey with custom timeline nodes.
  - **Education**: Degree details, GPA, coursework badges, and academic distinctions.
  - **Contact**: Interactive messaging form with validation, feedback, and one-click email copy.
  - **Resume Viewer**: Built-in modal with print/export to PDF support.
- **Single-File Distributable**: Bundles everything (including CSS, JS, and image) into a single self-contained `portfolio.html` via `vite-plugin-singlefile`.

---

## 🚀 Quick Start (Run Locally)

### 1. Prerequisites
- [Node.js](https://nodejs.org/) (version 18+ recommended)
- Git

### 2. Installation
```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME

# Install dependencies
npm install
```

### 3. Development Server
Start the local live-reloading dev server:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Production Build
Generate an optimized production build:
```bash
npm run build
```
- Output is generated in `dist/index.html` (and `portfolio.html` in the root).
- Preview the build locally:
  ```bash
  npm run preview
  ```

---

## 🛠️ Customization

- **Profile Info, Projects & Skills**: Edit [`src/data/profile.ts`](src/data/profile.ts) to update your text, stats, links, and projects.
- **Portrait Photo**: Replace [`src/assets/portrait/suraj.jpg`](src/assets/portrait/suraj.jpg) with any photograph.
- **Styling Tokens**: Customize color variables and animation curves in [`src/index.css`](src/index.css).

---

## 🌐 Free 1-Click Deployment

### Deploy to Vercel
1. Push this repository to your GitHub.
2. Go to [vercel.com](https://vercel.com/) and click **"Add New Project"**.
3. Select your GitHub repository and click **Deploy**. Vercel will automatically detect Vite and publish it.

### Deploy to GitHub Pages
1. In `vite.config.ts`, set `base: '/<REPO_NAME>/'`.
2. Run `npm run build`.
3. In your GitHub repository settings, go to **Pages** → Source: **Deploy from branch** → Select branch `gh-pages` or use GitHub Actions.

---

## 📄 License
MIT License. Feel free to use this template for your own developer portfolio!
