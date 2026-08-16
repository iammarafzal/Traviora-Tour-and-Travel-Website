# 🌍 Traviora — Modern Tour & Travel Web Platform

<p align="center">
  <img src="src/assets/section-banner.webp" alt="Traviora Banner" width="100%" style="border-radius: 12px;" />
</p>

<p align="center">
  <strong>A premium, responsive, and feature-rich Tour & Travel web application built with React 19, Vite, Bootstrap 5, and Swiper.</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19.2.7-blue?logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/Vite-8.1.0-646CFF?logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/React_Router-7.18.0-CA4245?logo=react-router&logoColor=white" alt="React Router" />
  <img src="https://img.shields.io/badge/Bootstrap-5.3.8-7952B3?logo=bootstrap&logoColor=white" alt="Bootstrap" />
  <img src="https://img.shields.io/badge/Swiper-12.2.0-6332F6?logo=swiper&logoColor=white" alt="Swiper" />
  <img src="https://img.shields.io/badge/AOS-2.3.4-orange" alt="AOS" />
</p>

---

## 📖 Table of Contents
- [Project Overview](#-project-overview)
- [Key Features](#-key-features)
- [System Architecture](#-system-architecture)
- [Directory Structure](#-directory-structure)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Development Server](#development-server)
  - [Production Build](#production-build)
- [Available Scripts](#-available-scripts)
- [Pages & Routing](#-pages--routing)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🌟 Project Overview

**Traviora** is a luxury travel agency and destination booking web application. Designed with modern aesthetics, fluid micro-animations, and dynamic carousels, it delivers an engaging experience for travelers exploring tour packages, destinations, and custom itineraries.

---

## ✨ Key Features

- 🏔️ **Immersive Hero Slider**: Full-width Swiper carousel featuring fade transitions, custom navigation controls, pagination, and AOS scroll animations.
- 🔍 **Interactive Tour Search & Filtering**: Multi-criteria sidebar filters (by destination, activity, and trip type) with real-time matching and grid/list view mode switching.
- 🗺️ **Top Destinations Carousel**: Responsive multi-slide carousel showcasing destinations, durations, pricing, and interactive action triggers.
- 🌿 **Nature Gallery & Highlights**: Curated destination photo highlights with hover interactions and active state overlays.
- 📋 **3-Step Booking Journey**: Visual workflow guiding users through destination selection, secure checkout, and trip kickoff.
- 🎁 **Special Offer Banners**: Eye-catching promotional sections with animated elements and discount highlights.
- 💬 **Social Proof & Testimonials**: Verified client reviews, rating indicators, and trusted business partner badges.
- 📱 **Mobile-First Responsive Layout**: Responsive navigation bar with scroll detection, sticky glassmorphic effects, and auto scroll-to-top on route changes.

---

## 🏗️ System Architecture

Traviora follows a modular, component-driven architecture with clean separation between the presentation layer, centralized data layer, and global shared utilities:

```
src/
├── assets/             # Optimized WebP imagery, vectors, and SVG icons
├── components/         # Modular, reusable presentation components
│   ├── AboutCompany/   # Company story and credibility section
│   ├── BlogIntro/      # Blog header and introductory banner
│   ├── BlogNews/       # News grid and travel articles
│   ├── BookingCTA/     # High-conversion booking call-to-action
│   ├── Destinations/   # Swiper-powered top destinations carousel
│   ├── Footer/         # Main site footer with newsletter subscription
│   ├── Hero/           # Full-screen dynamic slider with AOS
│   ├── Navbar/         # Adaptive navigation bar with scroll state
│   ├── NatureGallery/  # Nature showcase grid
│   ├── Shared/         # Cross-page shared components (Image Strip, Quick Links, ScrollToTop)
│   ├── SpecialOffer/   # Promotional discount banner
│   ├── Testimonials/   # Customer reviews and testimonials
│   └── WorkingSteps/   # 3-step booking explanation cards
├── data/               # Centralized static datasets & mock models
│   ├── aboutData.js    # Data for About page sections & packages
│   ├── blogPosts.js    # Blog post entries and metadata
│   ├── destinations.js # Featured destination listings
│   ├── sharedData.js   # Shared gallery strips, quick links, and socials
│   ├── slides.js       # Hero slider datasets and configuration
│   ├── testimonials.js # Client review entries
│   ├── toursData.js    # Filterable tour packages and criteria
│   └── workingSteps.js # Booking workflow step details
├── pages/              # Route entry-point views
│   ├── About/          # Full About Us view & story
│   ├── Tour/           # Interactive Tour Search & filtering view
│   └── Home.jsx        # Landing page orchestrator
├── App.jsx             # Top-level application layout & route definitions
├── index.css           # Global stylesheet and design tokens
└── main.jsx            # React root entry point with BrowserRouter
```

---

## 💻 Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **React 19** | Modern UI component library utilizing functional components and hooks |
| **Vite 8** | Next-generation fast frontend tooling and bundler |
| **React Router v7** | Declarative client-side routing with browser history |
| **Bootstrap 5 & Icons** | Responsive grid utilities and comprehensive icon font set |
| **Swiper 12** | Mobile-touch carousels with fade effects and responsive breakpoints |
| **AOS (Animate On Scroll)** | Scroll-triggered entrance animations |
| **ESLint 10** | Strict static code analysis and linting |

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (version 18.x or later) installed.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/iammarafzal/Traviora-Tour-and-Travel-Website.git
   cd Traviora-Tour-and-Travel-Website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

### Development Server

Start the local Vite development server:
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

### Production Build

Create an optimized production bundle:
```bash
npm run build
```
The compiled output will be generated in the `dist/` directory.

To preview the production build locally:
```bash
npm run preview
```

---

## 📜 Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the Vite development server with Hot Module Replacement (HMR) |
| `npm run build` | Bundles and optimizes assets for production deployment |
| `npm run preview` | Runs a local web server to preview the production build |
| `npm run lint` | Runs ESLint to inspect code for syntax and style issues |

---

## 🧭 Pages & Routing

| Route | Page | Description |
| :--- | :--- | :--- |
| `/` | **Home** | Landing page featuring the hero slider, destinations carousel, nature gallery, booking steps, offers, and testimonials |
| `/about` | **About** | Company journey, top packages, experience highlights, and brand partners |
| `/tour` | **Tour** | Dynamic tour package search with criteria filtering and grid/list view modes |

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/iammarafzal/Traviora-Tour-and-Travel-Website/issues).

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.
