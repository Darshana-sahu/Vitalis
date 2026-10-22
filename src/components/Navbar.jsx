import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Biometrics', href: '#biometrics' },
    { label: 'Customizer', href: '#customizer' },
    { label: 'Architecture', href: '#hardware' },
    { label: 'Comparison', href: '#comparison' },
    { label: 'Companion App', href: '#companion' },
    { label: 'FAQ', href: '#faq' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={`site-nav ${scrolled ? 'nav-scrolled' : ''}`}
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        backgroundColor: scrolled ? 'rgba(9, 9, 11, 0.94)' : 'rgba(9, 9, 11, 0.75)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        transition: 'all 0.3s ease',
      }}
      aria-label="Primary navigation"
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>
        {/* LOGO */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '10px' }} aria-label="VITALIS Concept Home">
          <div style={{
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #111827, #182234)',
            border: '1.5px solid #3DD9B4',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 12px rgba(61, 217, 180, 0.3)',
            flexShrink: 0
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M3 12h4l3-7 4 14 3-7h4" stroke="#4F8CFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <span style={{
            fontFamily: "var(--font-display)",
            fontSize: '22px',
            fontWeight: 800,
            letterSpacing: '0.04em',
            color: '#F8FAFC'
          }}>
            VITALIS
          </span>
          <span className="nav-badge-concept" style={{
            fontFamily: "var(--font-mono)",
            fontSize: '9.5px',
            color: '#3DD9B4',
            background: 'rgba(61, 217, 180, 0.12)',
            padding: '2px 8px',
            borderRadius: '999px',
            border: '1px solid rgba(61, 217, 180, 0.25)',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            whiteSpace: 'nowrap'
          }}>
            Concept v2.4
          </span>
        </a>

        {/* DESKTOP LINKS */}
        <div className="desktop-nav-links" style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontSize: '14px',
                fontWeight: 500,
                color: '#94A3B8',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#F8FAFC')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#94A3B8')}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA BUTTON & MOBILE TOGGLE */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <a
            href="#waitlist"
            className="btn btn-primary nav-cta-desktop"
            style={{ padding: '9px 20px', fontSize: '13px' }}
          >
            Early Access Demo
          </a>

          {/* MOBILE MENU TOGGLE */}
          <button
            type="button"
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-drawer"
            style={{
              display: 'none',
              alignItems: 'center',
              justifyContent: 'center',
              width: '44px',
              height: '44px',
              borderRadius: '8px',
              color: '#F8FAFC',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              cursor: 'pointer',
            }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              {mobileMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="4" y1="6" x2="20" y2="6" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="18" x2="20" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          style={{
            backgroundColor: 'rgba(9, 9, 11, 0.98)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '20px 24px 28px',
            display: 'flex',
            flexDirection: 'column',
            gap: '14px',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              style={{
                fontSize: '16px',
                fontWeight: 500,
                color: '#E2E8F0',
                padding: '12px 0',
                borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                minHeight: '44px',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#waitlist"
            onClick={handleLinkClick}
            className="btn btn-teal"
            style={{ marginTop: '8px', width: '100%', textAlign: 'center', minHeight: '46px' }}
          >
            Join Prototype Waitlist
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav-links {
            display: none !important;
          }
          .mobile-toggle-btn {
            display: flex !important;
          }
        }
        @media (max-width: 580px) {
          .nav-cta-desktop {
            display: none !important;
          }
          .nav-badge-concept {
            display: none !important;
          }
        }
      `}</style>
    </nav>
  );
}
