import React from 'react';
import WatchIllustration from './WatchIllustration';

export default function Hero() {
  return (
    <section className="hero-section" style={{ position: 'relative', overflow: 'hidden', padding: '64px 0 84px' }}>
      {/* Background ambient lighting */}
      <div
        style={{
          position: 'absolute',
          top: '-100px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '750px',
          maxWidth: '100vw',
          height: '500px',
          background: 'radial-gradient(circle, rgba(79, 140, 255, 0.18) 0%, rgba(61, 217, 180, 0.08) 45%, transparent 70%)',
          filter: 'blur(50px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
        aria-hidden="true"
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: '48px', alignItems: 'center' }}>

          {/* LEFT: TEXT & CALL TO ACTIONS */}
          <div className="hero-content">
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              <span>Conceptual Physiological Telemetry</span>
            </div>

            <h1 style={{ fontSize: 'clamp(34px, 5vw, 64px)', fontWeight: 800, lineHeight: 1.08, marginBottom: '22px' }}>
              Intelligence, woven into{' '}
              <span className="text-gradient-blue">every pulse.</span>
            </h1>

            <p style={{ fontSize: '17px', color: '#94A3B8', lineHeight: 1.6, maxWidth: '520px', marginBottom: '32px' }}>
              An original wearable concept envisioned in Grade-5 aerospace titanium.
              Continuous multi-wavelength sensing targets, on-device neural processing, and a conceptual zero-subscription ownership model.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap', marginBottom: '36px' }}>
              <a href="#biometrics" className="btn btn-primary" style={{ padding: '14px 30px', fontSize: '14.5px' }}>
                Explore Biometrics
              </a>
              <a href="#customizer" className="btn btn-secondary" style={{ padding: '14px 26px', fontSize: '14.5px' }}>
                Customize Finish
              </a>
            </div>

            {/* TRUST & CONCEPT CREDENTIALS */}
            <div style={{
              display: 'flex',
              gap: '20px',
              flexWrap: 'wrap',
              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              paddingTop: '20px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#94A3B8' }}>
                <span style={{ color: '#3DD9B4', fontWeight: 'bold' }}>✓</span>
                <span>Local Biometric Vault</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#94A3B8' }}>
                <span style={{ color: '#3DD9B4', fontWeight: 'bold' }}>✓</span>
                <span>Concept 14-Day Battery</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#94A3B8' }}>
                <span style={{ color: '#3DD9B4', fontWeight: 'bold' }}>✓</span>
                <span>Simulated Portfolio Demo</span>
              </div>
            </div>
          </div>

          {/* RIGHT: PRODUCT STAGE WITH SONAR RINGS & FLOATING CARDS */}
          <div className="hero-stage-wrapper" style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>

            <div className="hero-watch-stage" style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', minHeight: '440px' }}>
              {/* SONAR PULSE RINGS */}
              <div
                className="sonar-ring r1"
                style={{
                  position: 'absolute',
                  width: '260px',
                  height: '260px',
                  maxWidth: '85vw',
                  maxHeight: '85vw',
                  borderRadius: '50%',
                  border: '1.5px solid rgba(79, 140, 255, 0.28)',
                  animation: 'sonarPulse 3.6s cubic-bezier(0, 0.2, 0.8, 1) infinite',
                  pointerEvents: 'none',
                }}
                aria-hidden="true"
              />
              <div
                className="sonar-ring r2"
                style={{
                  position: 'absolute',
                  width: '260px',
                  height: '260px',
                  maxWidth: '85vw',
                  maxHeight: '85vw',
                  borderRadius: '50%',
                  border: '1.5px solid rgba(61, 217, 180, 0.28)',
                  animation: 'sonarPulse 3.6s cubic-bezier(0, 0.2, 0.8, 1) infinite',
                  animationDelay: '1.2s',
                  pointerEvents: 'none',
                }}
                aria-hidden="true"
              />
              <div
                className="sonar-ring r3"
                style={{
                  position: 'absolute',
                  width: '260px',
                  height: '260px',
                  maxWidth: '85vw',
                  maxHeight: '85vw',
                  borderRadius: '50%',
                  border: '1.5px solid rgba(79, 140, 255, 0.2)',
                  animation: 'sonarPulse 3.6s cubic-bezier(0, 0.2, 0.8, 1) infinite',
                  animationDelay: '2.4s',
                  pointerEvents: 'none',
                }}
                aria-hidden="true"
              />

              {/* WATCH ILLUSTRATION */}
              <div style={{ animation: 'floatGentle 6s ease-in-out infinite', position: 'relative', zIndex: 2 }}>
                <WatchIllustration colorway="obsidian" bpm={68} idPrefix="hero-watch" />
              </div>

              {/* DESKTOP FLOATING CARDS */}
              <div
                className="glass-panel hero-floating-card hfc-hrv"
                style={{
                  position: 'absolute',
                  top: '12%',
                  left: '0',
                  padding: '12px 16px',
                  borderRadius: '16px',
                  zIndex: 3,
                  boxShadow: '0 16px 32px rgba(0,0,0,0.4)',
                  border: '1px solid rgba(79, 140, 255, 0.3)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '2px' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#3DD9B4' }} />
                  <span style={{ fontSize: '10.5px', fontFamily: 'var(--font-mono)', color: '#94A3B8', textTransform: 'uppercase' }}>
                    Demo HRV
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
                  <span style={{ fontSize: '20px', fontWeight: 700, color: '#F8FAFC' }}>78 ms</span>
                  <span style={{ fontSize: '11.5px', color: '#3DD9B4', fontWeight: 600 }}>+14% vs avg</span>
                </div>
              </div>

              <div
                className="glass-panel hero-floating-card hfc-spo2"
                style={{
                  position: 'absolute',
                  top: '22%',
                  right: '0',
                  padding: '12px 16px',
                  borderRadius: '16px',
                  zIndex: 3,
                  boxShadow: '0 16px 32px rgba(0,0,0,0.4)',
                  border: '1px solid rgba(61, 217, 180, 0.3)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '2px' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#4F8CFF' }} />
                  <span style={{ fontSize: '10.5px', fontFamily: 'var(--font-mono)', color: '#94A3B8', textTransform: 'uppercase' }}>
                    Simulated SpO₂
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
                  <span style={{ fontSize: '20px', fontWeight: 700, color: '#F8FAFC' }}>99%</span>
                  <span style={{ fontSize: '10.5px', color: '#94A3B8' }}>Optical IR</span>
                </div>
              </div>

              <div
                className="glass-panel hero-floating-card hfc-readiness"
                style={{
                  position: 'absolute',
                  bottom: '8%',
                  left: '12px',
                  padding: '12px 18px',
                  borderRadius: '16px',
                  zIndex: 3,
                  boxShadow: '0 16px 32px rgba(0,0,0,0.4)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                }}
              >
                <div style={{ fontSize: '10.5px', fontFamily: 'var(--font-mono)', color: '#3DD9B4', textTransform: 'uppercase', marginBottom: '2px' }}>
                  Recovery Score
                </div>
                <div style={{ fontSize: '19px', fontWeight: 700, color: '#F8FAFC' }}>
                  94 <span style={{ fontSize: '12px', color: '#94A3B8', fontWeight: 400 }}>/ 100 · Prime</span>
                </div>
              </div>
            </div>

            {/* TABLET / MOBILE BIOMETRIC CHIPS ROW */}
            <div className="hero-mobile-chips" style={{ display: 'none', width: '100%', gap: '10px', marginTop: '20px' }}>
              <div className="glass-panel" style={{ flex: 1, padding: '10px 12px', borderRadius: '12px', textAlign: 'center' }}>
                <div style={{ fontSize: '10px', fontFamily: 'var(--font-mono)', color: '#94A3B8' }}>HRV DEMO</div>
                <div style={{ fontSize: '16px', fontWeight: 700, color: '#3DD9B4' }}>78 ms</div>
              </div>
              <div className="glass-panel" style={{ flex: 1, padding: '10px 12px', borderRadius: '12px', textAlign: 'center' }}>
                <div style={{ fontSize: '10px', fontFamily: 'var(--font-mono)', color: '#94A3B8' }}>SpO₂ DEMO</div>
                <div style={{ fontSize: '16px', fontWeight: 700, color: '#4F8CFF' }}>99%</div>
              </div>
              <div className="glass-panel" style={{ flex: 1, padding: '10px 12px', borderRadius: '12px', textAlign: 'center' }}>
                <div style={{ fontSize: '10px', fontFamily: 'var(--font-mono)', color: '#94A3B8' }}>RECOVERY</div>
                <div style={{ fontSize: '16px', fontWeight: 700, color: '#F8FAFC' }}>94/100</div>
              </div>
            </div>

          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
            gap: 36px !important;
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
          .hero-content > div:nth-child(5) {
            justify-content: center;
          }
          .hero-floating-card {
            display: none !important;
          }
          .hero-mobile-chips {
            display: flex !important;
          }
        }
      `}</style>
    </section>
  );
}
