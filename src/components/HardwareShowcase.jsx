import React from 'react';

const HARDWARE_PILLARS = [
  {
    tag: 'Chassis Metallurgy',
    title: 'Aerospace Grade-5 Titanium',
    desc: 'Milled from a single solid billet of Ti-6Al-4V alloy. Delivers double the tensile strength of aluminum at half the mass of stainless steel.',
    specs: ['41mm Unibody Architecture', 'CNC Diamond Chamfering', 'PVD Ceramic DLC Coating'],
    accent: '#4F8CFF',
  },
  {
    tag: 'Optical Shielding',
    title: 'Micro-Curved Sapphire Crystal',
    desc: 'Synthetic corundum with a Mohs rating of 9, second only to diamond. Multi-layer anti-reflective optical coatings maximize optical sensor transmission.',
    specs: ['Mohs Hardness 9 Resistance', 'Oleophobic Hydrophobic Seal', 'Dual-Bevel Ergonomic Edge'],
    accent: '#3DD9B4',
  },
  {
    tag: 'Sensor Architecture',
    title: 'Hexa-Wavelength Biosensor Cluster',
    desc: 'Six distinct emitter wavelengths (green, amber, 660nm red, 940nm infrared) paired with ultra-sensitive photodiodes to penetrate varying subcutaneous tissue layers.',
    specs: ['Dual Balanced Photodiodes', 'Sub-Micron LED Alignment', 'Stray Light Shielding Baffle'],
    accent: '#38BDF8',
  },
  {
    tag: 'Tactile Interface',
    title: 'Piezoelectric Solid-State Crown',
    desc: 'A linear resonant actuator producing precision micro-vibrations for tactile detents without mechanical chassis penetrations, securing 5 ATM hermetic sealing.',
    specs: ['Zero Mechanical Ingress', 'Sub-Millisecond Haptic Pulse', 'Force-Sensitive Pressure Sensor'],
    accent: '#A78BFA',
  },
];

export default function HardwareShowcase() {
  return (
    <section id="hardware" className="section" style={{ position: 'relative' }}>
      <div className="container">

        <div className="section-header">
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            <span>Industrial Architecture</span>
          </div>
          <h2 className="section-title">
            Engineered for extremes. <br />
            <span className="text-gradient">Forged in Grade-5 Titanium.</span>
          </h2>
          <p className="section-subtitle">
            A cohesive integration of aerospace metallurgy, hermetic acoustic isolation, and sub-surface optical biosensing.
          </p>
        </div>

        {/* 4 HARDWARE PILLARS */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
            gap: '24px',
          }}
        >
          {HARDWARE_PILLARS.map((item, idx) => (
            <div
              key={idx}
              className="glass-panel"
              style={{
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: item.accent }} />
                <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: item.accent, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  {item.tag}
                </span>
              </div>

              <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '12px' }}>
                {item.title}
              </h3>

              <p style={{ fontSize: '14px', color: '#94A3B8', lineHeight: 1.6, marginBottom: '24px' }}>
                {item.desc}
              </p>

              <div style={{ marginTop: 'auto', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '16px' }}>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {item.specs.map((spec, sIdx) => (
                    <li key={sIdx} style={{ fontSize: '12px', color: '#CBD5E1', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ color: item.accent }}>›</span>
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '36px' }}>
          <p style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: '#64748B' }}>
            * Technical hardware specifications represent fictional concept architecture for industrial design demonstration.
          </p>
        </div>

      </div>
    </section>
  );
}
