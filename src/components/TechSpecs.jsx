import React from 'react';

const PRINCIPLES = [
  {
    icon: '⚡',
    title: 'Adaptive Micro-Watt Sensing',
    desc: 'Optical sensor polling intelligently scales from 1Hz at rest to 100Hz during kinetic strain, optimizing concept battery endurance up to 14 days without missing biometric events.',
  },
  {
    icon: '🧠',
    title: 'Edge Neural Processing',
    desc: 'An on-wrist low-power micro-NPU concept runs physiological machine-learning models locally, delivering instant HRV, strain, and sleep stage analysis with zero network reliance.',
  },
  {
    icon: '🔒',
    title: 'Hardware Secure Enclave',
    desc: 'Your health data is cryptographically protected with AES-256 local storage. No corporate advertising brokers, no cloud database breaches, and no data sales.',
  },
];

export default function TechSpecs() {
  return (
    <section className="section" style={{ backgroundColor: '#0A0D12' }}>
      <div className="container">

        <div className="section-header">
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            <span>Engineering Philosophy</span>
          </div>
          <h2 className="section-title">
            Built on privacy, <br />
            <span className="text-gradient">engineered for endurance.</span>
          </h2>
          <p className="section-subtitle">
            Three foundational architectural principles governing the VITALIS health-tech hardware concept.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: '24px',
          }}
        >
          {PRINCIPLES.map((item, idx) => (
            <div
              key={idx}
              className="glass-panel"
              style={{
                padding: 'clamp(24px, 3.5vw, 36px) clamp(20px, 3vw, 30px)',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div
                style={{
                  fontSize: '26px',
                  marginBottom: '18px',
                  width: '52px',
                  height: '52px',
                  borderRadius: '14px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                aria-hidden="true"
              >
                {item.icon}
              </div>

              <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '12px' }}>
                {item.title}
              </h3>

              <p style={{ fontSize: '14.5px', color: '#94A3B8', lineHeight: 1.6 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
