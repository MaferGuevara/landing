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

const IconWhatsApp = ({ size = 18, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path d="M3.5 20.5l1.3-4.4A8 8 0 1 1 8 19.4l-4.5 1.1z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
    <path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1-1.2c.2-.3.6-.4.9-.2l1.6.8c.4.2.5.7.2 1l-.5.6c-.5.6-1.3.8-2 .6-2.6-.6-4.7-2.7-5.3-5.3-.2-.7 0-1.5.6-2l.6-.5c.3-.3.8-.2 1 .2l.8 1.6c.2.3.1.7-.2.9L9 9.5z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconFacebook = ({ size = 18, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.3" />
    <path d="M14 8.5h1.8V6h-2.2c-1.7 0-2.8 1.1-2.8 2.8V11H8.8v2.6H10.8V20h2.6v-6.4h2.1l.3-2.6h-2.4V9.2c0-.4.3-.7.6-.7z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
  </svg>
);

Object.assign(window, { IconCheck, IconX, IconArrow, IconDot, IconPlus, IconCorner, IconInstagram, IconLinkedIn, IconWhatsApp, IconFacebook });
