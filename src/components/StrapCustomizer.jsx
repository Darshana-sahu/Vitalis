import React, { useState } from 'react';
import WatchIllustration, { COLORWAYS } from './WatchIllustration';

export default function StrapCustomizer() {
  const [selectedColor, setSelectedColor] = useState('obsidian');
  const current = COLORWAYS[selectedColor];

  const colorwayList = Object.values(COLORWAYS);

  return (
    <section id="customizer" className="section" style={{ backgroundColor: '#0A0D12' }}>
      <div className="container">

        <div className="section-header">
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            <span>Industrial Ergonomics</span>
          </div>
          <h2 className="section-title">
            Tailored to your wrist. <br />
            <span className="text-gradient">Four elemental finishes.</span>
          </h2>
          <p className="section-subtitle">
            Every finish is conceptualized in Grade-5 aerospace titanium and paired with specialized technical straps.
          </p>
        </div>

        <div
          className="customizer-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '48px',
            alignItems: 'center',
            background: 'rgba(17, 24, 39, 0.6)',
            borderRadius: '24px',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            padding: 'clamp(24px, 4vw, 48px)',
          }}
        >
          {/* LEFT: INTERACTIVE LIVE WATCH PREVIEW */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              minHeight: '400px',
              width: '100%',
            }}
          >
            <div
              style={{
                position: 'absolute',
                width: '280px',
                height: '280px',
                maxWidth: '90%',
                borderRadius: '50%',
                background: current.accentGlow,
                filter: 'blur(70px)',
                pointerEvents: 'none',
                transition: 'all 0.5s ease',
              }}
              aria-hidden="true"
            />

            <div style={{ position: 'relative', zIndex: 2, maxWidth: '100%', display: 'flex', justifyContent: 'center' }}>
              <WatchIllustration colorway={selectedColor} bpm={68} idPrefix={`customizer-${selectedColor}`} />
            </div>

            <div style={{ marginTop: '20px', textAlign: 'center' }}>
              <span style={{ fontSize: '13px', fontFamily: 'var(--font-mono)', color: '#94A3B8' }}>
                CURRENTLY VIEWING: <strong style={{ color: current.accentColor }}>{current.name.toUpperCase()}</strong>
              </span>
            </div>
          </div>

          {/* RIGHT: SELECTOR & FINISH SPECS */}
          <div>
            <h3 style={{ fontSize: 'clamp(22px, 3vw, 28px)', fontWeight: 700, marginBottom: '8px' }}>
              {current.name}
            </h3>
            <div style={{ fontSize: '13px', fontFamily: 'var(--font-mono)', color: '#3DD9B4', marginBottom: '18px' }}>
              {current.material}
            </div>

            <p style={{ fontSize: '15px', color: '#94A3B8', lineHeight: 1.6, marginBottom: '28px' }}>
              {current.strapDesc}
            </p>

            {/* COLORWAY PILL BUTTONS */}
            <div style={{ marginBottom: '32px' }}>
              <label style={{ display: 'block', fontSize: '12px', fontFamily: 'var(--font-mono)', color: '#64748B', textTransform: 'uppercase', marginBottom: '12px' }}>
                Select Concept Finish:
              </label>

              <div className="colorway-buttons-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
                {colorwayList.map((c) => {
                  const isActive = selectedColor === c.id;
                  return (
                    <button
                      key={c.id}
                      type="button"
                      onClick={() => setSelectedColor(c.id)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        padding: '12px 16px',
                        borderRadius: '12px',
                        background: isActive ? 'rgba(255, 255, 255, 0.12)' : 'rgba(255, 255, 255, 0.03)',
                        border: isActive ? `1.5px solid ${c.accentColor}` : '1px solid rgba(255, 255, 255, 0.08)',
                        textAlign: 'left',
                        transition: 'all 0.2s ease',
                        cursor: 'pointer',
                        minHeight: '48px',
                      }}
                      aria-pressed={isActive}
                      aria-label={`Select ${c.name} finish`}
                    >
                      <span
                        style={{
                          width: '20px',
                          height: '20px',
                          borderRadius: '50%',
                          background: c.bandColor,
                          border: `2px solid ${c.accentColor}`,
                          boxShadow: isActive ? `0 0 10px ${c.accentGlow}` : 'none',
                          flexShrink: 0,
                        }}
                      />
                      <div>
                        <div style={{ fontSize: '13px', fontWeight: 600, color: '#F8FAFC' }}>
                          {c.name}
                        </div>
                        <div style={{ fontSize: '10px', color: '#94A3B8', fontFamily: 'var(--font-mono)' }}>
                          {c.id}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* TECHNICAL STRAP ATTRIBUTES */}
            <div
              className="strap-specs-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '16px',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                paddingTop: '20px',
              }}
            >
              <div>
                <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: '#64748B', display: 'block' }}>
                  CHASSIS WEIGHT
                </span>
                <span style={{ fontSize: '15px', fontWeight: 700, color: '#F8FAFC' }}>
                  28.4g (Concept Target)
                </span>
              </div>
              <div>
                <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: '#64748B', display: 'block' }}>
                  WATER IMMERSION
                </span>
                <span style={{ fontSize: '15px', fontWeight: 700, color: '#3DD9B4' }}>
                  5 ATM / 50M Target
                </span>
              </div>
              <div>
                <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: '#64748B', display: 'block' }}>
                  CLASP MECHANISM
                </span>
                <span style={{ fontSize: '15px', fontWeight: 700, color: '#F8FAFC' }}>
                  Micro-Adjust Pin & Loop
                </span>
              </div>
              <div>
                <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: '#64748B', display: 'block' }}>
                  SKIN COMPATIBILITY
                </span>
                <span style={{ fontSize: '15px', fontWeight: 700, color: '#F8FAFC' }}>
                  Hypoallergenic Grade-1
                </span>
              </div>
            </div>

            <div style={{ marginTop: '28px' }}>
              <a href="#waitlist" className="btn btn-teal" style={{ width: '100%', textAlign: 'center', minHeight: '48px' }}>
                Reserve in {current.name}
              </a>
            </div>

          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .customizer-grid {
            grid-template-columns: 1fr !important;
            padding: 24px !important;
            gap: 32px !important;
          }
        }
        @media (max-width: 480px) {
          .colorway-buttons-grid {
            grid-template-columns: 1fr !important;
          }
          .strap-specs-grid {
            grid-template-columns: 1fr !important;
            gap: 12px !important;
          }
        }
      `}</style>
    </section>
  );
}
