import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MetricStrip from './components/MetricStrip';
import BiometricsGrid from './components/BiometricsGrid';
import StrapCustomizer from './components/StrapCustomizer';
import HardwareShowcase from './components/HardwareShowcase';
import ComparisonTable from './components/ComparisonTable';
import CompanionApp from './components/CompanionApp';
import TechSpecs from './components/TechSpecs';
import FaqAccordion from './components/FaqAccordion';
import WaitlistCta from './components/WaitlistCta';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="vitalis-app" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <main style={{ flex: 1 }}>
        <Hero />
        <MetricStrip />
        <BiometricsGrid />
        <StrapCustomizer />
        <HardwareShowcase />
        <ComparisonTable />
        <CompanionApp />
        <TechSpecs />
        <FaqAccordion />
        <WaitlistCta />
      </main>
      <Footer />
    </div>
  );
}
