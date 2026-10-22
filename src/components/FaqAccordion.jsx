import React, { useState } from 'react';

const FAQS = [
  {
    q: 'Is VITALIS a commercially available product?',
    a: 'No. VITALIS is an original fictional product concept and design demonstration created for portfolio showcasing. It explores next-generation industrial wearable aesthetics, privacy-first telemetry, and dark UI frontend architecture.',
  },
  {
    q: 'What is the technological basis for the 14-day battery life target?',
    a: 'The concept posits an adaptive micro-watt sensor polling architecture coupled with an ultra-efficient low-power RISC-V micro-NPU. By processing algorithms on-wrist rather than maintaining power-hungry continuous cellular or Wi-Fi links, energy consumption is dramatically minimized.',
  },
  {
    q: 'Which mobile platforms would the companion app support?',
    a: 'The companion software concept is designed for modern mobile operating systems including iOS 17+ and Android 14+ via Bluetooth Low Energy 5.3, with full local export support for standard health telemetry formats.',
  },
  {
    q: 'How does the on-device biometric privacy model work?',
    a: 'In this concept, biometric telemetry never leaves the wearable without explicit cryptographically signed permission. Raw sensor samples are processed in a local hardware secure enclave (AES-256) rather than streamed to cloud analytics farms.',
  },
  {
    q: 'Can the watch be worn during swimming and water sports?',
    a: 'The industrial architecture targets a hermetic 5 ATM (50-meter equivalent) immersion rating, making it suitable for surface lap swimming, showering, and rigorous workouts.',
  },
  {
    q: 'Are VITALIS metrics intended as medical diagnostic tools?',
    a: 'No. VITALIS is a conceptual product demonstration. Specifications and biometric readings are illustrative and do not represent validated medical measurements. Any real-world diagnostic system requires formal regulatory clearance (such as FDA 510(k) or CE-MDR) before making medical claims.',
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="section" style={{ position: 'relative' }}>
      <div className="container" style={{ maxWidth: '840px' }}>

        <div className="section-header">
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            <span>Inquiries & Clarifications</span>
          </div>
          <h2 className="section-title">
            Frequently asked.
          </h2>
          <p className="section-subtitle">
            Sensible answers detailing the fictional concept architecture, demo data, and technical design decisions.
          </p>
        </div>

        {/* ACCORDION ITEMS */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            const panelId = `faq-panel-${idx}`;
            const buttonId = `faq-btn-${idx}`;

            return (
              <div
                key={idx}
                className="glass-panel"
                style={{
                  borderRadius: '16px',
                  border: isOpen ? '1px solid rgba(79, 140, 255, 0.4)' : '1px solid rgba(255, 255, 255, 0.08)',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                }}
              >
                <button
                  type="button"
                  id={buttonId}
                  onClick={() => toggleFaq(idx)}
                  style={{
                    width: '100%',
                    padding: 'clamp(18px, 3vw, 22px) clamp(18px, 3vw, 26px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '16px',
                    textAlign: 'left',
                    color: '#F8FAFC',
                    fontSize: '16px',
                    fontWeight: 600,
                    minHeight: '48px',
                    cursor: 'pointer',
                  }}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                >
                  <span>{faq.q}</span>
                  <span
                    style={{
                      fontSize: '22px',
                      color: isOpen ? '#3DD9B4' : '#94A3B8',
                      transition: 'transform 0.25s ease',
                      transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                      display: 'inline-block',
                      lineHeight: 1,
                      flexShrink: 0,
                    }}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>

                {isOpen && (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    style={{
                      padding: '0 clamp(18px, 3vw, 26px) 20px',
                      fontSize: '14.5px',
                      color: '#94A3B8',
                      lineHeight: 1.6,
                      borderTop: '1px solid rgba(255, 255, 255, 0.04)',
                      paddingTop: '16px',
                    }}
                  >
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
