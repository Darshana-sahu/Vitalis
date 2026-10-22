import React from 'react';
import WatchIllustration from './WatchIllustration';

export default function Hero() {
  return (
    <section className="hero-section" style={{ position: 'relative', overflow: 'hidden', padding: '70px 0 90px' }}>
      {/* Background ambient lighting */}
      <div
        style={{
          position: 'absolute',
          top: '-100px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '750px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(79, 140, 255, 0.18) 0%, rgba(61, 217, 180, 0.08) 45%, transparent 70%)',
          filter: 'blur(50px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '48px', alignItems: 'center' }}>

          {/* LEFT: TEXT & CALL TO ACTIONS */}
          <div className="hero-content">
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              <span>Next-Gen Physiological Telemetry</span>
            </div>

            <h1 style={{ fontSize: 'clamp(38px, 5.2vw, 68px)', fontWeight: 800, lineHeight: 1.05, marginBottom: '24px' }}>
              Intelligence, woven into{' '}
              <span className="text-gradient-blue">every pulse.</span>
            </h1>

            <p style={{ fontSize: '18px', color: '#94A3B8', lineHeight: 1.6, maxWidth: '520px', marginBottom: '36px' }}>
              An original medical-grade wearable concept engineered in Grade-5 aerospace titanium.
              Continuous multi-wavelength sensing, offline neural intelligence, and lifetime zero-subscription ownership.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap', marginBottom: '40px' }}>
              <a href="#biometrics" className="btn btn-primary" style={{ padding: '15px 32px', fontSize: '15px' }}>
                Explore Biometrics
              </a>
              <a href="#customizer" className="btn btn-secondary" style={{ padding: '15px 28px', fontSize: '15px' }}>
                Customize Finish
              </a>
            </div>

            {/* TRUST & CONCEPT CREDENTIALS */}
            <div style={{
              display: 'flex',
              gap: '24px',
              flexWrap: 'wrap',
              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              paddingTop: '24px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#94A3B8' }}>
                <span style={{ color: '#3DD9B4', fontWeight: 'bold' }}>✓</span>
                <span>Zero Cloud Lock-in</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#94A3B8' }}>
                <span style={{ color: '#3DD9B4', fontWeight: 'bold' }}>✓</span>
                <span>14-Day Battery Target</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#94A3B8' }}>
                <span style={{ color: '#3DD9B4', fontWeight: 'bold' }}>✓</span>
                <span>Local Biometric Vault</span>
              </div>
            </div>
          </div>

          {/* RIGHT: PRODUCT STAGE WITH SONAR RINGS & FLOATING CARDS */}
          <div className="hero-stage-wrapper" style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '480px' }}>

            {/* SONAR PULSE RINGS */}
            <div
              className="sonar-ring r1"
              style={{
                position: 'absolute',
                width: '280px',
                height: '280px',
                borderRadius: '50%',
                border: '1.5px solid rgba(79, 140, 255, 0.3)',
                animation: 'sonarPulse 3.6s cubic-bezier(0, 0.2, 0.8, 1) infinite',
                pointerEvents: 'none',
              }}
            />
            <div
              className="sonar-ring r2"
              style={{
                position: 'absolute',
                width: '280px',
                height: '280px',
                borderRadius: '50%',
                border: '1.5px solid rgba(61, 217, 180, 0.3)',
                animation: 'sonarPulse 3.6s cubic-bezier(0, 0.2, 0.8, 1) infinite',
                animationDelay: '1.2s',
                pointerEvents: 'none',
              }}
            />
            <div
              className="sonar-ring r3"
              style={{
                position: 'absolute',
                width: '280px',
                height: '280px',
                borderRadius: '50%',
                border: '1.5px solid rgba(79, 140, 255, 0.2)',
                animation: 'sonarPulse 3.6s cubic-bezier(0, 0.2, 0.8, 1) infinite',
                animationDelay: '2.4s',
                pointerEvents: 'none',
              }}
            />

            {/* WATCH ILLUSTRATION */}
            <div style={{ animation: 'floatGentle 6s ease-in-out infinite', position: 'relative', zIndex: 2 }}>
              <WatchIllustration colorway="obsidian" bpm={68} />
            </div>

            {/* FLOATING BIOMETRIC CHIP 1: HRV */}
            <div
              className="glass-panel floating-card"
              style={{
                position: 'absolute',
                top: '15%',
                left: '-20px',
                padding: '14px 18px',
                borderRadius: '16px',
                zIndex: 3,
                boxShadow: '0 16px 32px rgba(0,0,0,0.4)',
                border: '1px solid rgba(79, 140, 255, 0.3)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#3DD9B4' }} />
                <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: '#94A3B8', textTransform: 'uppercase' }}>
                  HRV Resonance
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                <span style={{ fontSize: '22px', fontWeight: 700, color: '#F8FAFC' }}>78 ms</span>
                <span style={{ fontSize: '12px', color: '#3DD9B4', fontWeight: 600 }}>+14% vs avg</span>
              </div>
            </div>

            {/* FLOATING BIOMETRIC CHIP 2: SpO2 */}
            <div
              className="glass-panel floating-card"
              style={{
                position: 'absolute',
                top: '25%',
                right: '-10px',
                padding: '14px 18px',
                borderRadius: '16px',
                zIndex: 3,
                boxShadow: '0 16px 32px rgba(0,0,0,0.4)',
                border: '1px solid rgba(61, 217, 180, 0.3)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#4F8CFF' }} />
                <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: '#94A3B8', textTransform: 'uppercase' }}>
                  Arterial SpO₂
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                <span style={{ fontSize: '22px', fontWeight: 700, color: '#F8FAFC' }}>99%</span>
                <span style={{ fontSize: '11px', color: '#94A3B8' }}>Optical IR</span>
              </div>
            </div>

            {/* FLOATING BIOMETRIC CHIP 3: Readiness */}
            <div
              className="glass-panel floating-card"
              style={{
                position: 'absolute',
                bottom: '10%',
                left: '20px',
                padding: '14px 20px',
                borderRadius: '16px',
                zIndex: 3,
                boxShadow: '0 16px 32px rgba(0,0,0,0.4)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
              }}
            >
              <div style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: '#3DD9B4', textTransform: 'uppercase', marginBottom: '4px' }}>
                Recovery Score
              </div>
              <div style={{ fontSize: '20px', fontWeight: 700, color: '#F8FAFC' }}>
                94 <span style={{ fontSize: '13px', color: '#94A3B8', fontWeight: 400 }}>/ 100 · Prime</span>
              </div>
            </div>

          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          .hero-content {
            margin: 0 auto;
          }
          .hero-content p {
            margin-left: auto;
            margin-right: auto;
          }
          .hero-content > div:nth-child(4) {
            justify-content: center;
          }
          .hero-stage-wrapper {
            margin-top: 40px;
          }
          .floating-card {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
