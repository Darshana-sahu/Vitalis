import React, { useState } from 'react';

export default function CompanionApp() {
  const [activeTab, setActiveTab] = useState('recovery');

  return (
    <section id="companion" className="section" style={{ position: 'relative' }}>
      <div className="container">

        <div className="section-header">
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            <span>VITALIS OS Companion</span>
          </div>
          <h2 className="section-title">
            Your physiological command center. <br />
            <span className="text-gradient">Zero cloud mandatory.</span>
          </h2>
          <p className="section-subtitle">
            Concept software designed to connect via Bluetooth 5.3 directly to your smartphone. Your biometric data is modeled for local on-device retention.
          </p>
        </div>

        <div
          className="companion-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '0.9fr 1.1fr',
            gap: '48px',
            alignItems: 'center',
          }}
        >
          {/* LEFT: PHONE MOCKUP */}
          <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
            <div
              className="phone-mockup"
              style={{
                width: '100%',
                maxWidth: '320px',
                height: '600px',
                background: '#090B0E',
                borderRadius: '40px',
                border: '5px solid #1E293B',
                boxShadow: '0 30px 60px -15px rgba(0, 0, 0, 0.8), 0 0 40px rgba(79, 140, 255, 0.15)',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Notch */}
              <div
                style={{
                  position: 'absolute',
                  top: '12px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '90px',
                  height: '18px',
                  background: '#1E293B',
                  borderRadius: '12px',
                  zIndex: 10,
                }}
                aria-hidden="true"
              />

              {/* Status bar */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '16px 20px 8px',
                  fontSize: '11px',
                  fontFamily: 'var(--font-mono)',
                  color: '#94A3B8',
                  marginTop: '8px',
                }}
              >
                <span>09:41</span>
                <span>BLE 5.3 ● 88%</span>
              </div>

              {/* Screen Content based on tab */}
              <div style={{ padding: '14px 18px', flex: 1, display: 'flex', flexDirection: 'column', gap: '14px', overflowY: 'auto' }}>

                {/* Header widget */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div style={{ fontSize: '10px', fontFamily: 'var(--font-mono)', color: '#3DD9B4' }}>
                      SIMULATED TELEMETRY FEED
                    </div>
                    <div style={{ fontSize: '18px', fontWeight: 700, color: '#F8FAFC' }}>
                      Daily Biometrics
                    </div>
                  </div>
                  <div
                    style={{
                      width: '30px',
                      height: '30px',
                      borderRadius: '50%',
                      background: 'rgba(61, 217, 180, 0.15)',
                      border: '1px solid #3DD9B4',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '12px',
                      color: '#3DD9B4',
                      flexShrink: 0,
                    }}
                  >
                    V
                  </div>
                </div>

                {activeTab === 'recovery' && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <div style={{ background: '#111827', borderRadius: '16px', padding: '16px', border: '1px solid rgba(255,255,255,0.06)' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                        <span style={{ fontSize: '12px', color: '#94A3B8' }}>Recovery Readiness</span>
                        <span style={{ fontSize: '12px', color: '#3DD9B4', fontWeight: 600 }}>Prime Zone</span>
                      </div>
                      <div style={{ fontSize: '30px', fontWeight: 800, color: '#F8FAFC', fontFamily: 'var(--font-mono)' }}>
                        94%
                      </div>
                      <div style={{ width: '100%', height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '3px', marginTop: '8px', overflow: 'hidden' }}>
                        <div style={{ width: '94%', height: '100%', background: 'linear-gradient(to right, #4F8CFF, #3DD9B4)' }} />
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                      <div style={{ background: '#111827', borderRadius: '14px', padding: '12px', border: '1px solid rgba(255,255,255,0.06)' }}>
                        <div style={{ fontSize: '10px', color: '#94A3B8' }}>RESTING HR</div>
                        <div style={{ fontSize: '17px', fontWeight: 700, color: '#F8FAFC', margin: '3px 0' }}>52 bpm</div>
                        <div style={{ fontSize: '10px', color: '#3DD9B4' }}>-3 bpm baseline</div>
                      </div>
                      <div style={{ background: '#111827', borderRadius: '14px', padding: '12px', border: '1px solid rgba(255,255,255,0.06)' }}>
                        <div style={{ fontSize: '10px', color: '#94A3B8' }}>HRV BALANCE</div>
                        <div style={{ fontSize: '17px', fontWeight: 700, color: '#F8FAFC', margin: '3px 0' }}>82 ms</div>
                        <div style={{ fontSize: '10px', color: '#3DD9B4' }}>+12% optimal</div>
                      </div>
                    </div>

                    <div style={{ background: 'rgba(79, 140, 255, 0.08)', borderRadius: '12px', padding: '12px', border: '1px solid rgba(79, 140, 255, 0.2)', fontSize: '11px', color: '#CBD5E1', lineHeight: 1.4 }}>
                      💡 Demo Insight: Parasympathetic dominance indicated in concept simulation.
                    </div>
                  </div>
                )}

                {activeTab === 'sleep' && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <div style={{ background: '#111827', borderRadius: '16px', padding: '16px', border: '1px solid rgba(255,255,255,0.06)' }}>
                      <div style={{ fontSize: '12px', color: '#94A3B8' }}>Sleep Quality Score</div>
                      <div style={{ fontSize: '30px', fontWeight: 800, color: '#A78BFA', fontFamily: 'var(--font-mono)', margin: '4px 0' }}>
                        96 <span style={{ fontSize: '14px', color: '#94A3B8', fontWeight: 400 }}>/ 100</span>
                      </div>
                      <div style={{ fontSize: '12px', color: '#F8FAFC' }}>
                        8h 14m Total · 9m Onset Latency
                      </div>
                    </div>

                    <div style={{ background: '#111827', borderRadius: '14px', padding: '12px', border: '1px solid rgba(255,255,255,0.06)' }}>
                      <div style={{ fontSize: '10.5px', color: '#94A3B8', marginBottom: '8px' }}>STAGE ARCHITECTURE</div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '11px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <span style={{ color: '#4F8CFF' }}>Deep Sleep</span>
                          <span>1h 58m (24%)</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <span style={{ color: '#818CF8' }}>REM Sleep</span>
                          <span>2h 18m (28%)</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <span style={{ color: '#38BDF8' }}>Light Sleep</span>
                          <span>3h 22m (41%)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'telemetry' && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <div style={{ background: '#111827', borderRadius: '16px', padding: '16px', border: '1px solid rgba(255,255,255,0.06)' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontSize: '10.5px', color: '#3DD9B4', fontFamily: 'var(--font-mono)' }}>LIVE SENSING DEMO</span>
                        <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#3DD9B4', animation: 'pulseBeacon 1.2s infinite' }} />
                      </div>
                      <div style={{ fontSize: '26px', fontWeight: 800, color: '#F8FAFC', fontFamily: 'var(--font-mono)', marginTop: '6px' }}>
                        68 BPM
                      </div>
                      <div style={{ fontSize: '11px', color: '#94A3B8' }}>
                        Real-time PPG optical stream active
                      </div>
                    </div>

                    <div style={{ background: '#090D14', borderRadius: '12px', padding: '12px', border: '1px solid rgba(255,255,255,0.06)' }}>
                      <div style={{ fontSize: '10px', fontFamily: 'var(--font-mono)', color: '#64748B', marginBottom: '4px' }}>
                        LOCAL ENCRYPTION KEY
                      </div>
                      <div style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: '#4F8CFF', wordBreak: 'break-all' }}>
                        0x7F9B...4D82 (AES-256 ENCLAVE)
                      </div>
                    </div>
                  </div>
                )}

              </div>

              {/* Bottom app navigation bar */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-around',
                  padding: '12px 16px 18px',
                  borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                  background: '#0D1117',
                  fontSize: '10px',
                  color: '#94A3B8',
                }}
              >
                <span style={{ color: '#3DD9B4', fontWeight: 600 }}>Overview</span>
                <span>Trends</span>
                <span>Workouts</span>
                <span>Vault</span>
              </div>
            </div>
          </div>

          {/* RIGHT: FEATURE EXPLANATION & VIEW SWITCHER */}
          <div>
            <h3 style={{ fontSize: 'clamp(24px, 3.5vw, 32px)', fontWeight: 700, marginBottom: '16px' }}>
              Designed around data sovereignty.
            </h3>
            <p style={{ fontSize: '16px', color: '#94A3B8', lineHeight: 1.6, marginBottom: '28px' }}>
              Unlike traditional health platforms that monetize user telemetry in the cloud, VITALIS processes and holds your biometrics directly on-device. Zero third-party tracker scripts.
            </p>

            {/* TAB SWITCHERS */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '28px' }} role="tablist" aria-label="Companion app feature views">
              {[
                { id: 'recovery', title: 'Autonomic Recovery Matrix', desc: 'Combines resting heart rate, HRV trends, and sleep debt into an actionable readiness indicator.' },
                { id: 'sleep', title: 'Circadian Sleep Laboratory', desc: 'Analyzes thermoregulation and hypnogram stages to identify restorative sleep opportunities.' },
                { id: 'telemetry', title: 'Encrypted Telemetry Stream', desc: 'Secure direct peer-to-peer sync via Bluetooth Low Energy 5.3 with zero cloud mandate.' }
              ].map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveTab(tab.id)}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                      padding: '16px 20px',
                      borderRadius: '14px',
                      background: isActive ? 'rgba(79, 140, 255, 0.1)' : 'rgba(255, 255, 255, 0.03)',
                      border: isActive ? '1.5px solid #4F8CFF' : '1px solid rgba(255, 255, 255, 0.06)',
                      textAlign: 'left',
                      transition: 'all 0.2s ease',
                      cursor: 'pointer',
                      minHeight: '48px',
                    }}
                  >
                    <div style={{ fontSize: '15px', fontWeight: 700, color: isActive ? '#F8FAFC' : '#CBD5E1', marginBottom: '4px' }}>
                      {tab.title}
                    </div>
                    <div style={{ fontSize: '13px', color: '#94A3B8', lineHeight: 1.5 }}>
                      {tab.desc}
                    </div>
                  </button>
                );
              })}
            </div>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <div style={{ fontSize: '13px', color: '#94A3B8', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ color: '#3DD9B4' }}>●</span> iOS 17+ & Android 14+ Concept Support
              </div>
              <div style={{ fontSize: '13px', color: '#94A3B8', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ color: '#4F8CFF' }}>●</span> Export raw CSV / Apple Health / Health Connect
              </div>
            </div>

          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .companion-grid {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
        }
      `}</style>
    </section>
  );
}
