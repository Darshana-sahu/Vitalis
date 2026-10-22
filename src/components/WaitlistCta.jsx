import React, { useState } from 'react';

export default function WaitlistCta() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setStatus('loading');

    setTimeout(() => {
      setStatus('success');
    }, 350);
  };

  return (
    <section id="waitlist" className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Background radial glow */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          maxWidth: '100vw',
          height: '400px',
          background: 'radial-gradient(circle, rgba(79, 140, 255, 0.2) 0%, rgba(61, 217, 180, 0.1) 40%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
        aria-hidden="true"
      />

      <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '760px' }}>
        <div
          className="glass-panel"
          style={{
            padding: 'clamp(36px, 6vw, 56px) clamp(20px, 5vw, 40px)',
            textAlign: 'center',
            borderRadius: '28px',
            border: '1.5px solid rgba(79, 140, 255, 0.3)',
            boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.7)',
          }}
        >
          <div className="eyebrow" style={{ marginBottom: '16px' }}>
            <span className="eyebrow-dot" />
            <span>Prototype Concept Reservation</span>
          </div>

          <h2 style={{ fontSize: 'clamp(26px, 4vw, 42px)', fontWeight: 800, marginBottom: '16px' }}>
            Experience the future of <br />
            <span className="text-gradient">personal telemetry.</span>
          </h2>

          <p style={{ fontSize: '15.5px', color: '#94A3B8', maxWidth: '520px', margin: '0 auto 32px', lineHeight: 1.6 }}>
            Sign up to preview technical design updates, CAD schematics, and interactive prototype previews. Zero spam, zero newsletters.
          </p>

          {status === 'success' ? (
            <div
              role="status"
              aria-live="polite"
              style={{
                background: 'rgba(61, 217, 180, 0.1)',
                border: '1px solid #3DD9B4',
                borderRadius: '16px',
                padding: '24px',
                textAlign: 'center',
              }}
            >
              <div style={{ fontSize: '18px', fontWeight: 700, color: '#3DD9B4', marginBottom: '8px' }}>
                ✓ Demo Reservation Recorded
              </div>
              <p style={{ fontSize: '14px', color: '#CBD5E1', lineHeight: 1.5 }}>
                Thank you for previewing the VITALIS concept demo! Please note that this is an illustrative portfolio project—no real-world data was transmitted to external servers.
              </p>
              <button
                type="button"
                onClick={() => { setStatus('idle'); setEmail(''); }}
                style={{
                  marginTop: '16px',
                  fontSize: '12px',
                  fontFamily: 'var(--font-mono)',
                  color: '#94A3B8',
                  textDecoration: 'underline',
                  cursor: 'pointer',
                  minHeight: '44px',
                }}
              >
                Reset form demo
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '480px', margin: '0 auto' }}>
              <div className="waitlist-form-row" style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); if (status === 'error') setStatus('idle'); }}
                  placeholder="Enter your email address"
                  aria-label="Email address for concept waitlist"
                  required
                  style={{
                    flex: '1 1 240px',
                    padding: '14px 20px',
                    borderRadius: '999px',
                    background: '#07090D',
                    border: status === 'error' ? '1.5px solid #EF4444' : '1px solid rgba(255, 255, 255, 0.15)',
                    color: '#F8FAFC',
                    fontSize: '14px',
                    outline: 'none',
                    fontFamily: 'inherit',
                    minHeight: '48px',
                  }}
                />
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn btn-teal waitlist-btn"
                  style={{ flex: '0 0 auto', padding: '14px 28px', minHeight: '48px' }}
                >
                  {status === 'loading' ? 'Validating...' : 'Join Waitlist'}
                </button>
              </div>

              {status === 'error' && (
                <div role="alert" aria-live="polite" style={{ fontSize: '12.5px', color: '#EF4444', textAlign: 'left', paddingLeft: '12px' }}>
                  {errorMessage}
                </div>
              )}

              <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginTop: '16px', fontSize: '12px', color: '#64748B', flexWrap: 'wrap' }}>
                <span>🔒 Simulated Client-Side Demo</span>
                <span>•</span>
                <span>No Actual Submission</span>
              </div>
            </form>
          )}

        </div>
      </div>

      <style>{`
        @media (max-width: 480px) {
          .waitlist-form-row {
            flex-direction: column !important;
          }
          .waitlist-btn {
            width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
}
