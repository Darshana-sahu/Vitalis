import React, { useState, useEffect, useRef } from 'react';

const METRICS = [
  { target: 14, prefix: '', suffix: ' Days', label: 'Continuous Endurance Target', note: 'Concept target specification' },
  { target: 50, prefix: '', suffix: 'M', label: 'Immersion Rating (5 ATM)', note: 'Envisioned water resistance' },
  { target: 120, prefix: '', suffix: '+', label: 'Autonomous Profiles', note: 'Conceptual tracking modes' },
  { target: 0.2, prefix: '<', suffix: 's', label: 'Optical Sensor Latency', note: 'Sub-second real-time loop', isFloat: true },
];

export default function MetricStrip() {
  const [animated, setAnimated] = useState(false);
  const stripRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setAnimated(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    if (stripRef.current) {
      observer.observe(stripRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={stripRef}
      style={{
        backgroundColor: '#0D1117',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        padding: '36px 0',
      }}
      aria-label="Key Concept Performance Benchmarks"
    >
      <div className="container">
        <div
          className="metric-strip-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '28px',
            alignItems: 'center',
          }}
        >
          {METRICS.map((item, idx) => (
            <MetricItem key={idx} item={item} startAnimation={animated} />
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '24px' }}>
          <p style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: '#64748B' }}>
            * All stated metrics represent fictional concept benchmarks and target specifications for design demonstration.
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 520px) {
          .metric-strip-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 20px !important;
          }
        }
      `}</style>
    </section>
  );
}

function MetricItem({ item, startAnimation }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!startAnimation) return;

    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setValue(item.target);
      return;
    }

    let startTime;
    const duration = 1200;

    const animate = (time) => {
      if (!startTime) startTime = time;
      const progress = Math.min((time - startTime) / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3);

      if (item.isFloat) {
        setValue((item.target * easeProgress).toFixed(1));
      } else {
        setValue(Math.floor(item.target * easeProgress));
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    const frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [startAnimation, item.target, item.isFloat]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'clamp(26px, 3.5vw, 32px)',
            fontWeight: 700,
            color: '#3DD9B4',
            letterSpacing: '-0.02em',
          }}
        >
          {item.prefix}{startAnimation ? value : 0}{item.suffix}
        </span>
      </div>
      <div style={{ fontSize: '14px', fontWeight: 600, color: '#F8FAFC' }}>
        {item.label}
      </div>
      <div style={{ fontSize: '12px', color: '#94A3B8' }}>
        {item.note}
      </div>
    </div>
  );
}
