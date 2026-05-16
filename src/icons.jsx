// Custom SVG icons — no emoji, all custom

const IconCheck = ({ size = 20, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <circle cx="12" cy="12" r="11" stroke="currentColor" strokeOpacity="0.45" strokeWidth="1" />
    <path d="M7 12.5l3.2 3.2L17 9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconX = ({ size = 20, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <circle cx="12" cy="12" r="11" stroke="currentColor" strokeOpacity="0.35" strokeWidth="1" />
    <path d="M8.5 8.5l7 7M15.5 8.5l-7 7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
  </svg>
);

const IconArrow = ({ size = 16, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconDot = ({ size = 8, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 8 8" className={className} aria-hidden="true">
    <circle cx="4" cy="4" r="3" fill="currentColor" />
  </svg>
);

const IconPlus = ({ size = 16, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

const IconCorner = ({ size = 14, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 14 14" fill="none" className={className} aria-hidden="true">
    <path d="M1 1h5M1 1v5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="square" />
  </svg>
);

const IconInstagram = ({ size = 18, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.3" />
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.3" />
    <circle cx="17.3" cy="6.7" r="1" fill="currentColor" />
  </svg>
);

const IconLinkedIn = ({ size = 18, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.3" />
    <path d="M7 10v7M7 7.5v.01M11 17v-4.5c0-1.4 1-2.5 2.5-2.5S16 11.1 16 12.5V17M11 10v7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
  </svg>
);

Object.assign(window, { IconCheck, IconX, IconArrow, IconDot, IconPlus, IconCorner, IconInstagram, IconLinkedIn });
