import React, { useState } from 'react';

export default function BiometricsGrid() {
  const [ecgMode, setEcgMode] = useState('resting'); // resting | active | recovery

  const ecgProfiles = {
    resting: { bpm: 58, hrv: '82 ms', label: 'Sinus Rhythm · Rest', color: '#3DD9B4', strokeWidth: 2.2 },
    active: { bpm: 134, hrv: '46 ms', label: 'Cardio Threshold Zone', color: '#4F8CFF', strokeWidth: 2.5 },
    recovery: { bpm: 72, hrv: '74 ms', label: 'Vagal Acceleration Zone', color: '#A78BFA', strokeWidth: 2.2 },
  };

  const currentEcg = ecgProfiles[ecgMode];

  return (
    <section id="biometrics" className="section" style={{ position: 'relative' }}>
      <div className="container">

        <div className="section-header">
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            <span>Continuous Biosensing Suite</span>
          </div>
          <h2 className="section-title">
            Comprehensive telemetry, <br />
            <span className="text-gradient">calculated on-wrist.</span>
          </h2>
          <p className="section-subtitle">
            Six synchronized biometric streams processed in real time by an integrated low-power micro-NPU.
            No cloud delays, no subscription tiers.
          </p>
        </div>

        {/* 6-CARD GRID */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '24px',
          }}
        >
          {/* CARD 1: DYNAMIC ECG WAVE */}
          <div className="glass-panel" style={{ padding: '32px', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
              <div>
                <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: currentEcg.color, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  Optical ECG Array
                </span>
                <h3 style={{ fontSize: '20px', fontWeight: 700, marginTop: '4px' }}>Cardiac Rhythm Analysis</h3>
              </div>
              <div style={{ textAlign: 'right' }}>
                <span style={{ fontSize: '24px', fontWeight: 800, fontFamily: 'var(--font-mono)', color: '#F8FAFC' }}>
                  {currentEcg.bpm}
                </span>
                <span style={{ fontSize: '11px', color: '#94A3B8', marginLeft: '4px' }}>BPM</span>
              </div>
            </div>

            <p style={{ fontSize: '13.5px', color: '#94A3B8', marginBottom: '20px', lineHeight: 1.5 }}>
              Continuous single-lead equivalent optical electrocardiogram monitoring baseline HRV and autonomic coherence.
            </p>

            {/* Interactive ECG preview box */}
            <div
              style={{
                background: '#07090D',
                borderRadius: '12px',
                padding: '16px',
                border: '1px solid rgba(255,255,255,0.06)',
                marginBottom: '16px',
              }}
            >
              <svg viewBox="0 0 320 80" style={{ width: '100%', height: '70px', overflow: 'visible' }}>
                <line x1="0" y1="40" x2="320" y2="40" stroke="rgba(255, 255, 255, 0.08)" strokeDasharray="3 3" />
                <path
                  d={
                    ecgMode === 'resting'
                      ? 'M 0 40 L 40 40 L 48 30 L 56 46 L 64 12 L 72 56 L 80 36 L 88 40 L 160 40 L 168 30 L 176 46 L 184 12 L 192 56 L 200 36 L 208 40 L 320 40'
                      : ecgMode === 'active'
                      ? 'M 0 40 L 25 40 L 32 24 L 38 52 L 44 8 L 50 64 L 56 32 L 62 40 L 100 40 L 107 24 L 113 52 L 119 8 L 125 64 L 131 32 L 137 40 L 175 40 L 182 24 L 188 52 L 194 8 L 200 64 L 206 32 L 212 40 L 320 40'
                      : 'M 0 40 L 35 40 L 42 28 L 50 48 L 58 14 L 66 58 L 74 34 L 82 40 L 140 40 L 147 28 L 155 48 L 163 14 L 171 58 L 179 34 L 187 40 L 320 40'
                  }
                  fill="none"
                  stroke={currentEcg.color}
                  strokeWidth={currentEcg.strokeWidth}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{
                    filter: `drop-shadow(0 0 8px ${currentEcg.color}66)`,
                    transition: 'all 0.3s ease',
                  }}
                />
              </svg>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#64748B', fontFamily: 'var(--font-mono)' }}>
                <span>{currentEcg.label}</span>
                <span>HRV: {currentEcg.hrv}</span>
              </div>
            </div>

            {/* Mode toggles */}
            <div style={{ display: 'flex', gap: '8px', marginTop: 'auto' }}>
              {['resting', 'active', 'recovery'].map((mode) => (
                <button
                  key={mode}
                  type="button"
                  onClick={() => setEcgMode(mode)}
                  style={{
                    flex: 1,
                    padding: '8px 12px',
                    borderRadius: '8px',
                    fontSize: '12px',
                    fontWeight: 600,
                    textTransform: 'capitalize',
                    background: ecgMode === mode ? 'rgba(255, 255, 255, 0.12)' : 'rgba(255, 255, 255, 0.03)',
                    color: ecgMode === mode ? '#F8FAFC' : '#94A3B8',
                    border: ecgMode === mode ? '1px solid rgba(255,255,255,0.2)' : '1px solid transparent',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {mode}
                </button>
              ))}
            </div>
          </div>

          {/* CARD 2: SLEEP ARCHITECTURE */}
          <div className="glass-panel" style={{ padding: '32px', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
              <div>
                <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: '#A78BFA', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  Circadian Sensor
                </span>
                <h3 style={{ fontSize: '20px', fontWeight: 700, marginTop: '4px' }}>Sleep Architecture</h3>
              </div>
              <div style={{ textAlign: 'right' }}>
                <span style={{ fontSize: '24px', fontWeight: 800, fontFamily: 'var(--font-mono)', color: '#3DD9B4' }}>
                  96%
                </span>
                <span style={{ fontSize: '11px', color: '#94A3B8', marginLeft: '4px' }}>Restorative</span>
              </div>
            </div>

            <p style={{ fontSize: '13.5px', color: '#94A3B8', marginBottom: '20px', lineHeight: 1.5 }}>
              Precision breakdown of sleep stages via continuous skin temperature, HRV drop, and micro-motion kinetics.
            </p>

            {/* Segmented bar */}
            <div style={{ marginBottom: '16px' }}>
              <div style={{ display: 'flex', height: '14px', borderRadius: '6px', overflow: 'hidden', gap: '3px' }}>
                <div style={{ width: '24%', background: '#4F8CFF' }} title="Deep Sleep 24%" />
                <div style={{ width: '28%', background: '#818CF8' }} title="REM Sleep 28%" />
                <div style={{ width: '41%', background: '#38BDF8' }} title="Light Sleep 41%" />
                <div style={{ width: '7%', background: '#64748B' }} title="Awake 7%" />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '6px', marginTop: '12px', fontSize: '11px', fontFamily: 'var(--font-mono)' }}>
                <div><span style={{ color: '#4F8CFF' }}>● </span>Deep: 1h 58m</div>
                <div><span style={{ color: '#818CF8' }}>● </span>REM: 2h 18m</div>
                <div><span style={{ color: '#38BDF8' }}>● </span>Light: 3h 22m</div>
                <div><span style={{ color: '#64748B' }}>● </span>Awake: 36m</div>
              </div>
            </div>

            <div style={{ marginTop: 'auto', background: 'rgba(255, 255, 255, 0.03)', padding: '12px 14px', borderRadius: '10px', fontSize: '12px', color: '#94A3B8' }}>
              Total Sleep: <strong style={{ color: '#F8FAFC' }}>8 hrs 14 mins</strong> · Latency: <strong style={{ color: '#3DD9B4' }}>9 mins</strong>
            </div>
          </div>

          {/* CARD 3: SPO2 OXYGENATION */}
          <div className="glass-panel" style={{ padding: '32px', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
              <div>
                <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: '#38BDF8', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  Multi-Wavelength IR
                </span>
                <h3 style={{ fontSize: '20px', fontWeight: 700, marginTop: '4px' }}>Blood Oxygenation (SpO₂)</h3>
              </div>
              <div style={{ textAlign: 'right' }}>
                <span style={{ fontSize: '24px', fontWeight: 800, fontFamily: 'var(--font-mono)', color: '#38BDF8' }}>
                  99%
                </span>
                <span style={{ fontSize: '11px', color: '#3DD9B4', marginLeft: '4px' }}>Optimal</span>
              </div>
            </div>

            <p style={{ fontSize: '13.5px', color: '#94A3B8', marginBottom: '20px', lineHeight: 1.5 }}>
              Dual 660nm red and 940nm infrared reflectance measuring capillary pulse saturation throughout day and sleep.
            </p>

            <div style={{ background: '#07090D', borderRadius: '12px', padding: '14px', marginBottom: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#94A3B8', marginBottom: '8px' }}>
                <span>24h Range: 97% – 100%</span>
                <span style={{ color: '#3DD9B4' }}>0 Desaturations</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: '4px', height: '40px' }}>
                {[98, 99, 99, 97, 98, 99, 100, 99, 99, 98, 99, 99, 99, 100, 99].map((val, idx) => (
                  <div
                    key={idx}
                    style={{
                      flex: 1,
                      height: `${(val - 90) * 10}%`,
                      background: val >= 98 ? 'linear-gradient(to top, #0284C7, #38BDF8)' : '#F59E0B',
                      borderRadius: '2px',
                    }}
                    title={`Hour ${idx + 1}: ${val}%`}
                  />
                ))}
              </div>
            </div>

            <div style={{ marginTop: 'auto', fontSize: '12.5px', color: '#64748B' }}>
              Continuous nocturnal desaturation screening with hypoxic event alerting.
            </div>
          </div>

          {/* CARD 4: SUB-SKIN TEMPERATURE DRIFT */}
          <div className="glass-panel" style={{ padding: '32px', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
              <div>
                <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: '#F59E0B', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  Micro-Kelvin Thermistor
                </span>
                <h3 style={{ fontSize: '20px', fontWeight: 700, marginTop: '4px' }}>Sub-Skin Thermal Drift</h3>
              </div>
              <div style={{ textAlign: 'right' }}>
                <span style={{ fontSize: '24px', fontWeight: 800, fontFamily: 'var(--font-mono)', color: '#F8FAFC' }}>
                  -0.1°C
                </span>
                <span style={{ fontSize: '11px', color: '#3DD9B4', marginLeft: '4px' }}>Baseline</span>
              </div>
            </div>

            <p style={{ fontSize: '13.5px', color: '#94A3B8', marginBottom: '20px', lineHeight: 1.5 }}>
              Dual-sensor heat-flux thermistor tracking baseline deviations to detect early immune responses or overtraining.
            </p>

            <div style={{ background: '#07090D', borderRadius: '12px', padding: '16px', marginBottom: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#94A3B8', marginBottom: '10px' }}>
                <span>Personal Baseline: 34.2°C</span>
                <span style={{ color: '#3DD9B4' }}>Normative Range</span>
              </div>
              <div style={{ position: 'relative', height: '24px', display: 'flex', alignItems: 'center' }}>
                <div style={{ width: '100%', height: '4px', background: 'rgba(255,255,255,0.1)', borderRadius: '2px' }} />
                <div style={{ position: 'absolute', left: '46%', width: '12px', height: '12px', borderRadius: '50%', background: '#F59E0B', border: '2px solid #09090B', transform: 'translateX(-50%)' }} />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', color: '#64748B', fontFamily: 'var(--font-mono)' }}>
                <span>-1.5°C</span>
                <span>0.0°C (Baseline)</span>
                <span>+1.5°C</span>
              </div>
            </div>

            <div style={{ marginTop: 'auto', fontSize: '12.5px', color: '#64748B' }}>
              Calibrated for nocturnal circadian rhythms and physiological recovery.
            </div>
          </div>

          {/* CARD 5: NEUROLOGICAL READINESS */}
          <div className="glass-panel" style={{ padding: '32px', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
              <div>
                <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: '#3DD9B4', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  CNS Autonomic Index
                </span>
                <h3 style={{ fontSize: '20px', fontWeight: 700, marginTop: '4px' }}>Neurological Readiness</h3>
              </div>
              <div style={{ textAlign: 'right' }}>
                <span style={{ fontSize: '24px', fontWeight: 800, fontFamily: 'var(--font-mono)', color: '#3DD9B4' }}>
                  94
                </span>
                <span style={{ fontSize: '11px', color: '#94A3B8', marginLeft: '4px' }}>/ 100</span>
              </div>
            </div>

            <p style={{ fontSize: '13.5px', color: '#94A3B8', marginBottom: '20px', lineHeight: 1.5 }}>
              Composite metric balancing autonomic nervous system equilibrium, acute fatigue, and resting heart rate trend.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', background: '#07090D', borderRadius: '12px', padding: '16px', marginBottom: '16px' }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '12px', color: '#94A3B8', marginBottom: '4px' }}>Target Zone</div>
                <div style={{ fontSize: '16px', fontWeight: 700, color: '#F8FAFC' }}>High Performance</div>
                <div style={{ fontSize: '11px', color: '#3DD9B4' }}>Safe for high CNS exertion</div>
              </div>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', border: '4px solid #3DD9B4', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-mono)', fontSize: '14px', fontWeight: 700 }}>
                94
              </div>
            </div>

            <div style={{ marginTop: 'auto', fontSize: '12.5px', color: '#64748B' }}>
              Calculated immediately upon waking via 5-minute quiet autonomic sample.
            </div>
          </div>

          {/* CARD 6: RESPIRATORY COHERENCE PACER */}
          <div className="glass-panel" style={{ padding: '32px', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
              <div>
                <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: '#4F8CFF', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  Vagal Biofeedback
                </span>
                <h3 style={{ fontSize: '20px', fontWeight: 700, marginTop: '4px' }}>Respiration & Coherence</h3>
              </div>
              <div style={{ textAlign: 'right' }}>
                <span style={{ fontSize: '24px', fontWeight: 800, fontFamily: 'var(--font-mono)', color: '#4F8CFF' }}>
                  14
                </span>
                <span style={{ fontSize: '11px', color: '#94A3B8', marginLeft: '4px' }}>RPM</span>
              </div>
            </div>

            <p style={{ fontSize: '13.5px', color: '#94A3B8', marginBottom: '16px', lineHeight: 1.5 }}>
              Continuous acoustic and optical plethysmography estimating respiratory rate and sympathetic tone.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100px', position: 'relative' }}>
              {/* Harmonic breathing circle */}
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(79, 140, 255, 0.4), rgba(61, 217, 180, 0.2))',
                  border: '1.5px solid #4F8CFF',
                  animation: 'breatheAnimation 5s infinite ease-in-out',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              />
              <span style={{ position: 'absolute', fontSize: '11px', fontFamily: 'var(--font-mono)', color: '#F8FAFC' }}>
                Coherence
              </span>
            </div>

            <div style={{ marginTop: 'auto', fontSize: '12.5px', color: '#64748B' }}>
              Harmonic 0.1Hz resonant pacer activates parasympathetic recovery within 3 minutes.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
