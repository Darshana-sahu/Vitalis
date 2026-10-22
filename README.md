# VITALIS

> **Precision Health. Everyday.**

A conceptual landing page for **VITALIS**, a fictional next-generation smart-health wearable. Engineered as a high-fidelity frontend portfolio project using React, Vite, and Vanilla CSS, VITALIS explores the intersection of aerospace metallurgy, on-wrist biometric telemetry, and a dark health-tech visual language.

* **Live Demo:** [https://vitalis-one-xi.vercel.app/](https://vitalis-one-xi.vercel.app/)
* **Repository:** [https://github.com/Darshana-sahu/Vitalis](https://github.com/Darshana-sahu/Vitalis)

---

## Important Disclaimer

**VITALIS is a conceptual product demonstration.** All specifications, biometric readings, performance targets, sensor capabilities, and hardware descriptions shown on this landing page are illustrative design concepts created solely for portfolio demonstration.

* **Simulated Telemetry:** All biometric indicators (such as heart rate, HRV, SpO2, skin temperature, and sleep stages) are client-side simulations. They do not represent validated medical measurements or real sensor readings.
* **No Medical Claims:** VITALIS is neither a manufactured physical device nor a certified medical product. It has not undergone clinical trials, holds no regulatory approvals (such as FDA or CE-MDR), and is not intended for diagnostic or therapeutic use.
* **Frontend-Only Waitlist:** The waitlist form is strictly an interactive frontend demonstration. It validates email syntax in the browser and displays a mock confirmation state. It does not store email addresses, connect to a database, transmit data to a backend server, or deliver confirmation emails.
* **Conceptual Hardware:** References to Grade-5 titanium unibody architecture, sapphire crystal, and sensor clusters describe an envisioned industrial design concept rather than a manufactured physical device.

---

## Project Overview

VITALIS demonstrates a modern, responsive user experience tailored for a premium health-technology product concept:

* **Dark Health-Tech Palette:** Deep near-black canvas (`#09090B`), slate surface panels (`#111827`), electric blue focus accents (`#4F8CFF`), and bio-teal telemetry highlights (`#3DD9B4`).
* **Clean Visual Hierarchy:** Glassmorphic HUD cards with backdrop filters, subtle radial ambient glows, and a curated typography stack featuring **Space Grotesk** (display headings), **Inter** (interface body copy), and **JetBrains Mono** (telemetry values and technical labels).
* **Pure Vector Product Model:** Handcrafted, scalable SVG and CSS smartwatch illustration featuring animated electrocardiogram (ECG) waveforms, a curved OLED display profile, and a haptic crown model—built without third-party images or copyrighted assets.
* **Modular React Architecture:** Clean separation of concerns with 13 focused, reusable UI components orchestrated through `src/App.jsx`.

---

## Features

### 1. Responsive Navigation & Mobile Drawer
* **Sticky Glass Navbar:** Backdrop-filtered navigation header with an animated live status indicator beacon.
* **Section Anchor Links:** Direct jump links to all page sections (`#biometrics`, `#customizer`, `#hardware`, `#comparison`, `#companion`, `#faq`, `#waitlist`) with CSS `scroll-margin` offsets to account for the fixed header height.
* **Accessible Mobile Drawer:** Collapsible slide-down mobile menu controlled by a hamburger toggle with semantic ARIA attributes (`aria-expanded`, `aria-controls`), keyboard dismissal (`Escape` key listener), and automatic closure upon link navigation.

### 2. Product Hero Stage
* **Wearable Vector Showcase:** Scalable SVG smartwatch model positioned over concentric animated sonar pulse rings.
* **Floating Biometric HUD Chips:** Desktop cards displaying simulated telemetry metrics (HRV resonance `78 ms`, arterial SpO2 `99%`, and recovery score `94/100`).
* **Adaptive Breakpoint Layout:** Automatically reflows floating chips into a balanced horizontal status row beneath the watch stage on mobile and tablet screens, eliminating visual clipping.
* **Call-to-Action Controls:** Quick navigation buttons linking directly to the biometrics suite and strap customizer.

### 3. Animated Metric Benchmark Strip
* **Count-Up Concept Indicators:** Four concept targets animated smoothly when scrolled into view using `IntersectionObserver` and `requestAnimationFrame`:
  * `14 Days` — Conceptual continuous battery endurance target
  * `50M` — Envisioned 5 ATM immersion water resistance rating
  * `120+` — Conceptual kinetic and cardio tracking modes
  * `<0.2s` — Conceptual optical sensor sampling latency
* **Reduced-Motion Support:** Detects the `prefers-reduced-motion` media query and immediately renders final numerical values without triggering animation loops.
* **Design Study Clarification:** All values are fictional design benchmarks presented for UI demonstration.

### 4. Continuous Biometrics Suite
Six interactive cards illustrating conceptual physiological monitoring:
* **Cardiac Rhythm & Simulated ECG:** Interactive mode switcher (`Resting 58 BPM`, `Active 134 BPM`, `Recovery 72 BPM`) that dynamically re-renders simulated heart rate, HRV coherence, and animated SVG electrocardiogram waveforms.
* **Sleep Architecture Model:** Visual distribution breakdown of Deep (24%), REM (28%), Light (41%), and Awake (7%) sleep phases.
* **Simulated Blood Oxygenation (SpO2):** 24-hour optical reflectance telemetry simulation with hourly saturation bars and a 99% optimal reading.
* **Sub-Skin Thermal Drift:** Circadian temperature variation scale showing deviation from a baseline temperature.
* **Neurological Readiness Matrix:** Autonomic recovery score balancing central nervous system fatigue against cardiovascular strain.
* **Respiration & Guided Coherence Pacer:** Guided harmonic 0.1Hz breathing pacer with an expanding and contracting biofeedback animation ring.

### 5. Interactive Strap Customizer
* **Finish & Band Selector:** Four distinct conceptual finishes:
  * **Obsidian Noir:** Matte DLC Grade-5 titanium finish with a ballistic polymer strap
  * **Cyber Cyan:** Anodized electric titanium finish with micro-woven stretch nylon
  * **Bio Teal:** Micro-blasted satin titanium finish with antimicrobial fluoroelastomer
  * **Aurora Titanium:** Raw brushed Grade-5 titanium finish with magnetic Milanese mesh
* **Real-Time Reactive Rendering:** Selecting a finish dynamically updates the watch illustration's case, bezel, buttons, and strap gradients in real time.
* **Scoped Vector Defs:** Unique ID generation for SVG gradient and filter definitions prevents cross-instance rendering collisions.
* **Touch-Friendly Controls:** Buttons adapt into a vertical stack on small screens (<480px) with minimum 48px touch targets for mobile accessibility.

### 6. Industrial Architecture Showcase
* **Conceptual Hardware Pillars:** Visual breakdown of the envisioned engineering specifications:
  * **Aerospace Grade-5 Titanium:** Concept 41mm unibody billet architecture
  * **Micro-Curved Sapphire Crystal:** Envisioned synthetic corundum with Mohs hardness 9
  * **Hexa-Wavelength Biosensor Cluster:** Concept multi-wavelength optical emitter and photodiode alignment
  * **Piezoelectric Solid-State Crown:** Linear resonant haptic detent concept preserving hermetic sealing
* **Design Showcase Only:** Illustrates conceptual industrial design goals; no physical hardware has been manufactured.

### 7. Category Comparison Table
* **Feature Matrix:** Side-by-side comparison illustrating how the VITALIS design concept compares against typical basic activity bands and generic smartwatches across battery endurance, subscription model, telemetry depth, and data privacy.
* **Mobile Touch Scrolling:** Horizontally scrollable container with smooth touch scrolling (`-webkit-overflow-scrolling: touch`) and a visible swipe indicator on screens under 768px.

### 8. VITALIS OS Companion App Preview
* **Device Mockup:** Handcrafted CSS smartphone frame displaying a dark-mode mobile interface concept.
* **Interactive Dashboard Tabs:**
  * **Autonomic Recovery:** Readiness gauge, resting heart rate, and HRV balance
  * **Sleep Laboratory:** Hypnogram stage breakdown and sleep latency metric
  * **Telemetry Stream:** Live simulated BPM readout and local hardware encryption status indicator

### 9. Engineering Philosophy Cards
* **Conceptual Architecture Principles:** Three visual cards presenting the theoretical engineering framework:
  * **Adaptive Micro-Watt Sensing:** Conceptual dynamic polling scaling from 1Hz at rest to 100Hz during exertion
  * **Edge Neural Processing:** Concept of local on-wrist inference for physiological metrics without cloud dependence
  * **Hardware Secure Enclave:** Concept of on-device AES-256 encrypted storage with zero mandatory cloud sync
* **Scope Note:** Outlines the concept's envisioned privacy and power philosophy; no cryptographic functions or ML models execute in the application code.

### 10. Accessible FAQ Accordion
* **Six Expandable Clarifications:** Addresses common questions regarding the project concept, hypothetical battery targets, envisioned mobile platform compatibility (iOS 17+ and Android 14+), privacy architecture, water resistance, and the non-medical disclaimer.
* **Accessible Component Design:** Built with semantic `<button>` elements, dynamic `aria-expanded` attributes, and linked `aria-controls` / `role="region"` content panels for full keyboard and screen-reader usability.

### 11. Prototype Waitlist Demo
* **Client-Side Form Validation:** Validates email format using regex before triggering the submission flow.
* **Interactive State Transition:** Simulates a 350ms verification delay before displaying a success confirmation card with accessible attributes (`role="status"`, `aria-live="polite"`).
* **Reset Capability:** Includes a reset button allowing reviewers to clear the state and re-test the form interaction.
* **Strictly Frontend-Only:** Does not collect or persist data, make network API calls, interact with databases, or send notification emails.

### 12. Complete Footer
* VITALIS emblem, quick section links, return-to-top button, copyright notice, and persistent non-medical concept disclaimer banner.

---

## Technology Stack

The application is built with a lightweight, modern frontend stack with minimal external dependencies:

| Category | Technology | Version | Purpose |
| :--- | :--- | :--- | :--- |
| **UI Library** | [React](https://react.dev/) | `^18.3.1` | Component-based UI architecture, state management (`useState`), and lifecycle hooks (`useEffect`, `useRef`) |
| **DOM Renderer** | [React DOM](https://react.dev/) | `^18.3.1` | Virtual DOM rendering and browser reconciliation |
| **Build Tool** | [Vite](https://vitejs.dev/) | `^5.4.11` | Development server with Hot Module Replacement (HMR) and optimized Rollup production bundler |
| **Vite Plugin** | [`@vitejs/plugin-react`](https://github.com/vitejs/vite-plugin-react) | `^4.3.4` | Fast Refresh and JSX transformation support |
| **Styling** | Vanilla CSS | Standard | Custom design system tokens, CSS variables, glassmorphism, flexbox, CSS grid, and media queries |
| **Typography** | [Google Fonts](https://fonts.google.com/) | Web API | Space Grotesk (display), Inter (interface body), and JetBrains Mono (telemetry) |
| **Graphics** | Handcrafted Inline SVG | Standard | Custom scalable vector smartwatch model, ECG waveforms, and UI iconography |

---

## Getting Started

### Prerequisites

Ensure you have the following installed on your machine:
* **Node.js:** Version `18.0.0` or higher (tested on Node.js `v25.4.0`)
* **npm:** Version `9.0.0` or higher (tested on npm `11.7.0`)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Darshana-sahu/Vitalis.git
   cd Vitalis
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development Server

Start the local Vite development server:
```bash
npm run dev
```

Open your browser to the URL displayed in the terminal (typically `http://localhost:3000` or `http://localhost:5173`).

### Production Build

Create an optimized production bundle:
```bash
npm run build
```

Compiled production assets will be generated in the `dist/` directory.

### Local Production Preview

Preview the production build locally:
```bash
npm run preview
```

---

## Project Structure

```text
Vitalis/
├── .gitignore                     # Git ignore rules for node_modules, build outputs, and caches
├── index.html                     # HTML entry point with typography preconnects and meta tags
├── package.json                   # Project scripts and dependency declarations
├── package-lock.json              # Exact dependency tree lockfile
├── README.md                      # Project documentation and architecture guide
├── vite.config.js                 # Vite bundler and development server configuration
└── src/
    ├── App.jsx                    # Root page orchestrator assembling all landing page sections
    ├── index.css                  # Design system tokens, utilities, and global keyframe animations
    ├── main.jsx                   # React root entry point
    └── components/
        ├── BiometricsGrid.jsx     # 6-card interactive telemetry suite (ECG, SpO2, sleep, coherence)
        ├── CompanionApp.jsx       # Interactive smartphone frame with simulated VITALIS OS tabs
        ├── ComparisonTable.jsx    # Feature benchmark comparison table with mobile horizontal scroll
        ├── FaqAccordion.jsx       # Keyboard-accessible FAQ accordion with ARIA attributes
        ├── Footer.jsx             # Navigation links, back-to-top button, and concept disclaimer
        ├── HardwareShowcase.jsx   # Visual cards detailing conceptual titanium chassis and sensors
        ├── Hero.jsx               # Hero section with vector watch, sonar rings, and biometric chips
        ├── MetricStrip.jsx        # Animated count-up benchmark strip with reduced-motion support
        ├── Navbar.jsx             # Sticky glassmorphic navbar with responsive mobile drawer menu
        ├── StrapCustomizer.jsx    # Interactive 4-colorway watch finish and strap selector
        ├── TechSpecs.jsx          # Conceptual engineering philosophy and architecture cards
        ├── WaitlistCta.jsx        # Client-side prototype waitlist demo with regex email validation
        └── WatchIllustration.jsx  # Scalable vector smartwatch model with dynamic colorway themes
```

---

## Deployment

The project is hosted and deployed on Vercel:
* **Live URL:** [https://vitalis-one-xi.vercel.app/](https://vitalis-one-xi.vercel.app/)

Deployments can be automatically triggered upon pushing commits to the connected repository branch (e.g., `main`), depending on the repository's Vercel integration settings.

---

## License

No license has been specified for this repository. All rights are reserved by the original author.
