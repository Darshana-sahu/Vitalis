# VITALIS — Next-Generation Health Intelligence Wearable Concept

A premium, original dark health-tech landing page for **VITALIS**, a fictional smart-health wearable concept. Engineered in Grade-5 aerospace titanium with continuous multi-spectral optical telemetry, on-wrist edge neural intelligence, and zero subscription paywalls.

> **DISCLAIMER:** VITALIS is an original fictional product concept and design demonstration created for portfolio showcasing. All specifications, sensor capabilities, and battery life claims represent fictional engineering targets and do not represent a manufactured commercial product or medical device.

---

## 🌟 Key Features

* **Dark Health-Tech Aesthetic:** Deep obsidian/near-black theme (`#09090B`), electric cyan/blue (`#4F8CFF`) and bio-teal (`#3DD9B4`) accents, glassmorphic HUD surfaces, and restrained lighting.
* **Interactive Smartwatch Illustration:** Bespoke scalable SVG/CSS smartwatch rendering featuring real-time animated electrocardiogram (ECG) pulse lines, tactile digital crown, and curved OLED display.
* **Sonar Pulse Rings & Floating Biometric Chips:** Concentric pulse animations and floating HUD telemetry cards (HRV, SpO₂, Recovery Readiness).
* **Animated Metric Strip:** Smooth `requestAnimationFrame`-powered count-up benchmarks for 14-day battery life, 50m water resistance, 120+ physiological profiles, and sub-second optical sensor latency.
* **Dynamic Biometrics Suite:** 6 comprehensive physiological telemetry modules (Cardiac Rhythm & ECG with state toggles, Sleep Architecture breakdown, Multi-Wavelength SpO₂, Sub-Skin Thermal Drift, CNS Readiness, and Guided Respiration Pacer).
* **Interactive Strap Customizer:** Live colorway selector (Obsidian Noir, Cyber Cyan, Bio Teal, Aurora Titanium) updating the smartwatch model and finish specs in real time.
* **Hardware Architecture Showcase:** Breakdown of aerospace Grade-5 titanium unibody, curved sapphire crystal lens, hexa-wavelength optical array, and linear resonant haptic crown.
* **Category Comparison Matrix:** Transparent comparison between VITALIS concept targets, basic fitness trackers, and generic smartwatches.
* **Companion OS Mobile Preview:** Interactive smartphone dashboard frame with toggleable views for Recovery Readiness, Sleep Lab, and Encrypted Telemetry stream.
* **Accessible FAQ Accordion:** Accessible, keyboard-friendly accordion answering core questions regarding the concept and data privacy.
* **Waitlist Demo Interaction:** Functional client-side reservation form with regex email validation and instant demo confirmation state.
* **Reference Protection:** The baseline `qorfit-pulse-landing.html` reference file is preserved 100% byte-for-byte untouched.

---

## 🛠 Tech Stack

* **Framework:** React 18
* **Build Tool:** Vite 5
* **Language:** Modern JavaScript (ES Modules)
* **Styling:** Vanilla CSS with custom design system tokens & glassmorphism
* **Typography:** Space Grotesk (Headings), Inter (Body), JetBrains Mono (Telemetry)
* **Assets:** 100% bespoke inline SVGs and vector graphics (zero third-party copyrighted photography or hotlinked CDN assets)

---

## 🚀 Getting Started

### Prerequisites

* Node.js `>= 18.0.0` (Tested on Node v25.4.0)
* npm `>= 9.0.0` (Tested on npm 11.7.0)

### Installation

```bash
# Navigate to project directory
cd C:\Users\achin\.vscode\Vitalis

# Install dependencies
npm install
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
```

Preview production build:
```bash
npm run preview
```

---

## 📁 Project Structure

```
Vitalis/
├── .gitignore                     # Git ignore rules for node_modules, dist, etc.
├── package.json                   # Project metadata and dependencies
├── vite.config.js                 # Vite configuration
├── index.html                     # Entry HTML with Google Fonts & metadata
├── README.md                      # Project documentation
├── qorfit-pulse-landing.html      # UNTOUCHED reference baseline
└── src/
    ├── main.jsx                   # React application mount
    ├── App.jsx                    # Main page layout orchestrator
    ├── index.css                  # Core design tokens, utilities, and animations
    └── components/
        ├── WatchIllustration.jsx  # Bespoke SVG smartwatch illustration with finishes
        ├── Navbar.jsx             # Sticky navigation with mobile menu drawer
        ├── Hero.jsx               # Hero section with sonar rings & floating cards
        ├── MetricStrip.jsx        # Animated count-up benchmark strip
        ├── BiometricsGrid.jsx     # 6-card continuous physiological sensing grid
        ├── StrapCustomizer.jsx    # Interactive 4-colorway strap customizer
        ├── HardwareShowcase.jsx   # Industrial architecture & Grade-5 titanium specs
        ├── ComparisonTable.jsx    # Objective category comparison matrix
        ├── CompanionApp.jsx       # Mobile companion OS preview with tabbed views
        ├── TechSpecs.jsx          # Engineering principles & privacy vault
        ├── FaqAccordion.jsx       # Interactive accessible FAQ accordion
        ├── WaitlistCta.jsx        # Final waitlist form with client-side demo validation
        └── Footer.jsx             # Branding, navigation links & concept disclaimer
```

---

## 📄 License & Attribution

This project is an original concept designed and built as a portfolio demonstration.
