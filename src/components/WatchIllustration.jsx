import React from 'react';

export const COLORWAYS = {
  obsidian: {
    id: 'obsidian',
    name: 'Obsidian Noir',
    caseColor: '#1A1D24',
    caseHighlight: '#2A303D',
    caseBorder: '#374151',
    bandColor: '#111317',
    bandTexture: '#1A1E24',
    bandHighlight: '#262D38',
    crownColor: '#2D3442',
    accentColor: '#4F8CFF',
    accentGlow: 'rgba(79, 140, 255, 0.4)',
    material: 'Matte DLC Grade-5 Titanium',
    strapDesc: 'Fluorocarbon-reinforced ballistic polymer engineered for high-intensity training.',
  },
  cyan: {
    id: 'cyan',
    name: 'Cyber Cyan',
    caseColor: '#112238',
    caseHighlight: '#1E3E66',
    caseBorder: '#2563EB',
    bandColor: '#0C2A4A',
    bandTexture: '#133E6E',
    bandHighlight: '#1E5899',
    crownColor: '#265487',
    accentColor: '#38BDF8',
    accentGlow: 'rgba(56, 189, 248, 0.4)',
    material: 'Anodized Electric Grade-5 Titanium',
    strapDesc: 'Micro-woven stretch mono-filament nylon with moisture-expulsion weave.',
  },
  teal: {
    id: 'teal',
    name: 'Bio Teal',
    caseColor: '#0E2923',
    caseHighlight: '#19493E',
    caseBorder: '#059669',
    bandColor: '#083329',
    bandTexture: '#0F4E3F',
    bandHighlight: '#166E5A',
    crownColor: '#185B4E',
    accentColor: '#3DD9B4',
    accentGlow: 'rgba(61, 217, 180, 0.4)',
    material: 'Micro-Blasted Satin Titanium',
    strapDesc: 'Antimicrobial medical-grade fluoroelastomer with ergonomic thermal micro-grooves.',
  },
  titanium: {
    id: 'titanium',
    name: 'Aurora Titanium',
    caseColor: '#333B4A',
    caseHighlight: '#59657A',
    caseBorder: '#94A3B8',
    bandColor: '#475367',
    bandTexture: '#617088',
    bandHighlight: '#7A8CA6',
    crownColor: '#728198',
    accentColor: '#F8FAFC',
    accentGlow: 'rgba(248, 250, 252, 0.35)',
    material: 'Raw Brushed Grade-5 Titanium',
    strapDesc: 'Precision woven magnetic titanium-alloy Milanese mesh with seamless micro-clasp.',
  }
};

export default function WatchIllustration({ colorway = 'obsidian', bpm = 68, className = '' }) {
  const current = COLORWAYS[colorway] || COLORWAYS.obsidian;

  return (
    <div className={`watch-illustration-container ${className}`} style={{ display: 'inline-block', position: 'relative' }}>
      <svg
        viewBox="0 0 320 480"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', maxWidth: '320px', height: 'auto', filter: 'drop-shadow(0 25px 40px rgba(0, 0, 0, 0.75))' }}
        role="img"
        aria-label={`VITALIS smartwatch in ${current.name} finish`}
      >
        <defs>
          <linearGradient id="caseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={current.caseHighlight} />
            <stop offset="50%" stopColor={current.caseColor} />
            <stop offset="100%" stopColor="#0B0D11" />
          </linearGradient>

          <linearGradient id="bezelGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#2E3748" />
            <stop offset="100%" stopColor="#0A0D12" />
          </linearGradient>

          <linearGradient id="bandTopGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={current.bandColor} />
            <stop offset="100%" stopColor={current.bandHighlight} />
          </linearGradient>

          <linearGradient id="bandBottomGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={current.bandHighlight} />
            <stop offset="100%" stopColor={current.bandColor} />
          </linearGradient>

          <linearGradient id="screenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#040609" />
            <stop offset="100%" stopColor="#0A0E17" />
          </linearGradient>

          <filter id="ecgGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* TOP STRAP */}
        <path
          d="M 96 110 L 108 12 C 108 8, 114 4, 120 4 L 200 4 C 206 4, 212 8, 212 12 L 224 110 Z"
          fill="url(#bandTopGrad)"
          stroke="#1F2937"
          strokeWidth="1.5"
        />
        {/* Top strap ribbing lines */}
        {[24, 44, 64, 84].map((y) => (
          <line
            key={y}
            x1="110"
            y1={y}
            x2="210"
            y2={y}
            stroke={current.bandTexture}
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        ))}

        {/* BOTTOM STRAP */}
        <path
          d="M 96 370 L 108 468 C 108 472, 114 476, 120 476 L 200 476 C 206 476, 212 472, 212 468 L 224 370 Z"
          fill="url(#bandBottomGrad)"
          stroke="#1F2937"
          strokeWidth="1.5"
        />
        {/* Bottom strap ribbing lines */}
        {[396, 416, 436, 456].map((y) => (
          <line
            key={y}
            x1="110"
            y1={y}
            x2="210"
            y2={y}
            stroke={current.bandTexture}
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        ))}

        {/* WATCH CHASSIS (Grade-5 Titanium Unibody) */}
        {/* Shadow base */}
        <rect x="56" y="96" width="208" height="288" rx="54" fill="#05070A" />

        {/* Main outer case */}
        <rect
          x="58"
          y="98"
          width="204"
          height="284"
          rx="52"
          fill="url(#caseGrad)"
          stroke={current.caseBorder}
          strokeWidth="2"
        />

        {/* Precision chamfer inner ring */}
        <rect
          x="66"
          y="106"
          width="188"
          height="268"
          rx="44"
          fill="url(#bezelGrad)"
          stroke="rgba(255, 255, 255, 0.15)"
          strokeWidth="1.2"
        />

        {/* SOLID-STATE HAPTIC CROWN */}
        <rect
          x="262"
          y="180"
          width="12"
          height="54"
          rx="4"
          fill={current.crownColor}
          stroke="rgba(255, 255, 255, 0.2)"
          strokeWidth="1"
        />
        <line x1="265" y1="188" x2="271" y2="188" stroke="#111827" strokeWidth="2" />
        <line x1="265" y1="196" x2="271" y2="196" stroke="#111827" strokeWidth="2" />
        <line x1="265" y1="204" x2="271" y2="204" stroke="#111827" strokeWidth="2" />
        <line x1="265" y1="212" x2="271" y2="212" stroke="#111827" strokeWidth="2" />
        <line x1="265" y1="220" x2="271" y2="220" stroke="#111827" strokeWidth="2" />

        {/* SECONDARY SENSOR RECESS */}
        <rect x="262" y="260" width="8" height="32" rx="3" fill="#182234" />

        {/* OLED DISPLAY SURFACE */}
        <rect
          x="74"
          y="114"
          width="172"
          height="252"
          rx="38"
          fill="url(#screenGrad)"
          stroke="#000000"
          strokeWidth="3"
        />

        {/* SCREEN CONTENT */}
        {/* Status bar */}
        <text x="96" y="146" fill="#94A3B8" fontSize="11" fontFamily="'JetBrains Mono', monospace" fontWeight="600">
          09:41
        </text>
        <circle cx="218" cy="142" r="4" fill="#3DD9B4" />
        <text x="206" y="146" fill="#3DD9B4" fontSize="10" fontFamily="'JetBrains Mono', monospace" textAnchor="end">
          88%
        </text>

        {/* Heart Rate Display */}
        <g transform="translate(94, 166)">
          <path
            d="M 12 4 C 8 0, 0 2, 0 9 C 0 16, 12 22, 12 22 C 12 22, 24 16, 24 9 C 24 2, 16 0, 12 4 Z"
            fill={current.accentColor}
            transform="scale(0.85)"
            style={{ filter: `drop-shadow(0 0 6px ${current.accentGlow})` }}
          />
          <text x="26" y="14" fill="#F8FAFC" fontSize="22" fontFamily="'Space Grotesk', sans-serif" fontWeight="700">
            {bpm}
          </text>
          <text x="60" y="13" fill="#94A3B8" fontSize="10" fontFamily="'JetBrains Mono', monospace">
            BPM
          </text>
        </g>

        {/* Continuous Dynamic ECG Wave */}
        <g transform="translate(86, 206)">
          {/* Subtle background grid line */}
          <line x1="0" y1="30" x2="148" y2="30" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="1" strokeDasharray="3 3" />

          {/* Active rhythmic pulse path */}
          <path
            d="M 0 30 L 22 30 L 28 22 L 34 36 L 40 10 L 46 44 L 52 28 L 58 30 L 82 30 L 88 20 L 96 38 L 102 12 L 108 42 L 114 28 L 120 30 L 148 30"
            fill="none"
            stroke={current.accentColor}
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#ecgGlow)"
          />
        </g>

        {/* Biometric Dial Gauges */}
        {/* Recovery / Readiness arc */}
        <g transform="translate(160, 290)">
          {/* Track */}
          <circle cx="0" cy="0" r="32" fill="none" stroke="#1E293B" strokeWidth="5" />
          {/* Value Arc (approx 75% circumference) */}
          <circle
            cx="0"
            cy="0"
            r="32"
            fill="none"
            stroke="#3DD9B4"
            strokeWidth="5"
            strokeDasharray="201"
            strokeDashoffset="48"
            strokeLinecap="round"
            transform="rotate(-90)"
          />
          <text x="0" y="-2" fill="#F8FAFC" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="'Space Grotesk', sans-serif">
            94%
          </text>
          <text x="0" y="11" fill="#94A3B8" fontSize="7.5" fontWeight="600" textAnchor="middle" fontFamily="'JetBrains Mono', monospace">
            RECOVERY
          </text>
        </g>

        {/* Sub-label */}
        <text x="160" y="344" fill={current.accentColor} fontSize="9" fontWeight="600" textAnchor="middle" fontFamily="'JetBrains Mono', monospace" letterSpacing="0.1em">
          OPTICAL TELEMETRY ACTIVE
        </text>

        {/* Subtle glass reflection on sapphire lens */}
        <path
          d="M 78 120 C 130 116, 210 150, 238 210 L 238 128 C 238 120, 230 114, 222 114 L 94 114 C 84 114, 78 116, 78 120 Z"
          fill="rgba(255, 255, 255, 0.04)"
          pointerEvents="none"
        />
      </svg>
    </div>
  );
}
