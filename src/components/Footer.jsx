import React from 'react';

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: '#07090C',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        padding: '72px 0 40px',
        color: '#94A3B8',
        fontSize: '14px',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.5fr repeat(3, 1fr)',
            gap: '40px',
            marginBottom: '48px',
          }}
          className="footer-grid"
        >
          {/* BRAND COLUMN */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div style={{
                width: '28px',
                height: '28px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #111827, #182234)',
                border: '1.5px solid #3DD9B4',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                  <path d="M3 12h4l3-7 4 14 3-7h4" stroke="#4F8CFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: 800, color: '#F8FAFC' }}>
                VITALIS
              </span>
            </div>
            <p style={{ fontSize: '13.5px', lineHeight: 1.6, maxWidth: '320px', color: '#94A3B8', marginBottom: '16px' }}>
              Next-generation health telemetry wearable concept crafted in Grade-5 aerospace titanium with continuous multi-spectral biometrics.
            </p>
            <div style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: '#3DD9B4' }}>
              PROTOTYPE SPECIFICATION v2.4
            </div>
          </div>

          {/* NAV COLUMN 1: CONCEPT */}
          <div>
            <h4 style={{ fontSize: '13px', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', color: '#F8FAFC', marginBottom: '16px' }}>
              Architecture
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px' }}>
              <li><a href="#biometrics" style={{ color: '#94A3B8' }}>Biometric Grid</a></li>
              <li><a href="#hardware" style={{ color: '#94A3B8' }}>Titanium Chassis</a></li>
              <li><a href="#customizer" style={{ color: '#94A3B8' }}>Strap Finishes</a></li>
              <li><a href="#companion" style={{ color: '#94A3B8' }}>VITALIS OS</a></li>
            </ul>
          </div>

          {/* NAV COLUMN 2: BENCHMARKS */}
          <div>
            <h4 style={{ fontSize: '13px', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', color: '#F8FAFC', marginBottom: '16px' }}>
              Telemetry
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px' }}>
              <li><a href="#biometrics" style={{ color: '#94A3B8' }}>Cardiac Rhythm (ECG)</a></li>
              <li><a href="#biometrics" style={{ color: '#94A3B8' }}>Sleep Architecture</a></li>
              <li><a href="#comparison" style={{ color: '#94A3B8' }}>Comparative Matrix</a></li>
              <li><a href="#faq" style={{ color: '#94A3B8' }}>Technical FAQ</a></li>
            </ul>
          </div>

          {/* NAV COLUMN 3: PHILOSOPHY */}
          <div>
            <h4 style={{ fontSize: '13px', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', color: '#F8FAFC', marginBottom: '16px' }}>
              Principles
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px' }}>
              <li><span style={{ color: '#64748B' }}>Edge Neural Engine</span></li>
              <li><span style={{ color: '#64748B' }}>Local Biometric Vault</span></li>
              <li><span style={{ color: '#64748B' }}>Zero Subscription Model</span></li>
              <li><a href="#waitlist" style={{ color: '#3DD9B4' }}>Join Waitlist</a></li>
            </ul>
          </div>
        </div>

        {/* PROMINENT CONCEPT DISCLAIMER */}
        <div
          style={{
            background: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '14px',
            padding: '20px 24px',
            marginBottom: '32px',
          }}
        >
          <div style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: '#F59E0B', textTransform: 'uppercase', marginBottom: '6px' }}>
            Conceptual Portfolio Demonstration
          </div>
          <p style={{ fontSize: '12px', lineHeight: 1.6, color: '#94A3B8' }}>
            <strong>DISCLAIMER:</strong> VITALIS is an original fictional smart-health wearable concept created strictly for product design, frontend engineering, and portfolio demonstration purposes. All specifications, sensor capabilities, and battery life claims represent fictional engineering targets and do not represent a manufactured commercial product, medical device, or licensed clinical system.
          </p>
        </div>

        {/* BOTTOM ROW */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px',
            fontSize: '12px',
            color: '#64748B',
            borderTop: '1px solid rgba(255, 255, 255, 0.05)',
            paddingTop: '24px',
          }}
        >
          <div>
            © {new Date().getFullYear()} VITALIS Concept. Built with React & Vite. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <a href="#faq" style={{ color: '#64748B' }}>Privacy Philosophy</a>
            <a href="#hardware" style={{ color: '#64748B' }}>Hardware Specs</a>
            <a href="#" style={{ color: '#64748B' }}>Back to top ↑</a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 800px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 480px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
