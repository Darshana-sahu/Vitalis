import React from 'react';

const COMPARISON_ROWS = [
  {
    feature: 'Continuous Battery Endurance',
    vitalis: 'Up to 14 Days (Continuous)',
    fitnessBand: '5 – 7 Days',
    smartwatch: '1 – 2 Days (Requires Daily Charge)',
    highlight: true,
  },
  {
    feature: 'Ownership & Membership Cost',
    vitalis: 'Zero Subscription · Lifetime Included',
    fitnessBand: 'Mandatory $8–$15/mo Cloud Fee',
    smartwatch: 'Optional Paid Cloud Services',
    highlight: true,
  },
  {
    feature: 'Biosensing Telemetry Suite',
    vitalis: 'Optical ECG + Multi-λ SpO₂ + Skin Temp',
    fitnessBand: 'Basic Heart Rate Only',
    smartwatch: 'Standard Heart Rate + Intermittent ECG',
    highlight: false,
  },
  {
    feature: 'Biometric Processing Location',
    vitalis: '100% On-Wrist Micro-NPU (Offline)',
    fitnessBand: 'Cloud-Dependent Processing',
    smartwatch: 'Mixed Cloud & Phone Sync',
    highlight: true,
  },
  {
    feature: 'Chassis Metallurgical Material',
    vitalis: 'Aerospace Grade-5 Titanium Billet',
    fitnessBand: 'Molded Polycarbonate Plastic',
    smartwatch: 'Anodized Aluminum / Zinc Alloy',
    highlight: false,
  },
  {
    feature: 'Water Resistance Standard',
    vitalis: '5 ATM / 50M Hermetic Seal',
    fitnessBand: 'IP67 (Splash & Rain Only)',
    smartwatch: '5 ATM (Water Resistance)',
    highlight: false,
  },
];

export default function ComparisonTable() {
  return (
    <section id="comparison" className="section" style={{ backgroundColor: '#090B0E' }}>
      <div className="container">

        <div className="section-header">
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            <span>Category Comparison</span>
          </div>
          <h2 className="section-title">
            How VITALIS compares. <br />
            <span className="text-gradient">Honest benchmark standards.</span>
          </h2>
          <p className="section-subtitle">
            A comparison of our fictional engineering targets against generic fitness bands and conventional smartwatches.
          </p>
        </div>

        {/* COMPARISON TABLE */}
        <div
          className="glass-panel"
          style={{
            overflowX: 'auto',
            borderRadius: '20px',
            border: '1px solid rgba(255, 255, 255, 0.08)',
          }}
        >
          <table
            style={{
              width: '100%',
              borderCollapse: 'collapse',
              textAlign: 'left',
              fontSize: '14px',
              minWidth: '640px',
            }}
          >
            <thead>
              <tr style={{ background: 'rgba(255, 255, 255, 0.04)', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                <th style={{ padding: '20px 24px', fontFamily: 'var(--font-mono)', fontSize: '12px', color: '#94A3B8', textTransform: 'uppercase' }}>
                  Architecture Feature
                </th>
                <th
                  style={{
                    padding: '20px 24px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '13px',
                    color: '#3DD9B4',
                    background: 'rgba(61, 217, 180, 0.08)',
                    borderLeft: '1px solid rgba(61, 217, 180, 0.2)',
                    borderRight: '1px solid rgba(61, 217, 180, 0.2)',
                    textTransform: 'uppercase',
                  }}
                >
                  ★ VITALIS (Concept Target)
                </th>
                <th style={{ padding: '20px 24px', fontFamily: 'var(--font-mono)', fontSize: '12px', color: '#94A3B8', textTransform: 'uppercase' }}>
                  Basic Fitness Trackers
                </th>
                <th style={{ padding: '20px 24px', fontFamily: 'var(--font-mono)', fontSize: '12px', color: '#94A3B8', textTransform: 'uppercase' }}>
                  Generic Smartwatches
                </th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON_ROWS.map((row, idx) => (
                <tr
                  key={idx}
                  style={{
                    borderBottom: idx === COMPARISON_ROWS.length - 1 ? 'none' : '1px solid rgba(255, 255, 255, 0.06)',
                    background: row.highlight ? 'rgba(79, 140, 255, 0.02)' : 'transparent',
                  }}
                >
                  <td style={{ padding: '18px 24px', fontWeight: 600, color: '#F8FAFC' }}>
                    {row.feature}
                  </td>
                  <td
                    style={{
                      padding: '18px 24px',
                      fontWeight: 700,
                      color: '#3DD9B4',
                      background: 'rgba(61, 217, 180, 0.05)',
                      borderLeft: '1px solid rgba(61, 217, 180, 0.2)',
                      borderRight: '1px solid rgba(61, 217, 180, 0.2)',
                    }}
                  >
                    {row.vitalis}
                  </td>
                  <td style={{ padding: '18px 24px', color: '#94A3B8' }}>
                    {row.fitnessBand}
                  </td>
                  <td style={{ padding: '18px 24px', color: '#94A3B8' }}>
                    {row.smartwatch}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ textAlign: 'center', marginTop: '24px' }}>
          <p style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: '#64748B' }}>
            * Comparison matrix illustrates typical market product category characteristics against VITALIS concept design targets. No proprietary competitor trademark is claimed.
          </p>
        </div>

      </div>
    </section>
  );
}
