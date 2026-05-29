// ---------------------------------------------------------------------------
// Static data constants — single source of truth for all content.
// Keeping data separate from UI makes localisation / CMS swaps trivial.
// ---------------------------------------------------------------------------

/** Navigation links rendered in the top-bar. */
export const NAV_LINKS = [
  { label: 'SOLUTIONS', href: '#', hasDropdown: true },
  { label: 'RESOURCES', href: '#', hasDropdown: true },
  { label: 'ABOUT US',  href: '#', hasDropdown: false },
];

/** Partner logos shown in the "trusted by" strip. */
export const PARTNER_LOGOS = [
  {
    id: 'shell',
    name: 'SHELLS',
    width: 72.07742,
    height: 18.3979,
    iconHeight: 18.3979,
    gap: 4.6,
    renderIcon: () => (
      <svg width="18.4" height="18.4" viewBox="0 0 24 24" fill="none"
           stroke="#586E84" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2A10 10 0 1 0 22 12c0-5.52-4.48-10-10-10C7.2 2 3.16 5.3 2.15 9.8" />
        <path d="M12 6a6 6 0 1 0 6 6c0-3.3-2.7-6-6-6" />
        <path d="M12 10a2 2 0 1 0 2 2c0-1.1-.9-2-2-2" />
      </svg>
    ),
  },
  {
    id: 'smartfinder',
    name: 'SmartFinder',
    width: 78,
    height: 15,
    iconHeight: 18.3979,
    gap: 4.6,
    renderIcon: () => (
      <svg width="18.4" height="18.4" viewBox="0 0 24 24" fill="none"
           stroke="#586E84" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 10l20-8-8 20-3-9-9-3z" />
      </svg>
    ),
  },
  {
    id: 'zoomerr',
    name: 'Zoomerr',
    width: 76.9973,
    height: 18.3979,
    iconHeight: 18.3979,
    gap: 4.6,
    renderIcon: () => (
      <svg width="18.4" height="18.4" viewBox="0 0 24 24" fill="#586E84">
        <circle cx="12" cy="12" r="10" />
        <polygon points="12,5 7,13 11,13 10,19 17,11 13,11" fill="white" />
      </svg>
    ),
  },
  {
    id: 'artvenue',
    name: 'ArtVenue',
    width: 95.6862,
    height: 18.3979,
    iconHeight: 18.3979,
    gap: 4.6,
    renderIcon: () => (
      <svg width="18.4" height="18.4" viewBox="0 0 24 24" fill="none"
           stroke="#586E84" strokeWidth="3" strokeLinecap="round">
        <line x1="6" y1="18" x2="18" y2="6" />
        <line x1="11" y1="18" x2="18" y2="11" />
        <line x1="6" y1="13" x2="13" y2="6" />
      </svg>
    ),
  },
  {
    id: 'kontrastr',
    name: 'kontrastr',
    width: 75.2541,
    height: 16.788,
    iconHeight: 16.788,
    gap: 4.6,
    renderIcon: () => (
      <svg width="16.79" height="16.79" viewBox="0 0 24 24" fill="none"
           stroke="#586E84" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2v20A10 10 0 0 0 12 2" fill="#586E84" />
      </svg>
    ),
  },
  {
    id: 'waves',
    name: 'WAVES MARATHON',
    width: 107.6891,
    height: 18.3979,
    iconHeight: 18.3979,
    gap: 4.6,
    renderName: () => (
      <span>
        <span style={{ fontWeight: 700 }}>WAVES</span>
        <span style={{ fontWeight: 400, opacity: 0.85 }}>MARATHON</span>
      </span>
    ),
    renderIcon: () => (
      <svg width="18.4" height="18.4" viewBox="0 0 24 24" fill="#586E84">
        <rect x="2" y="10" width="2" height="4" rx="1" />
        <rect x="6" y="8" width="2" height="8" rx="1" />
        <rect x="10" y="5" width="2" height="14" rx="1" />
        <rect x="14" y="8" width="2" height="8" rx="1" />
        <rect x="18" y="10" width="2" height="4" rx="1" />
      </svg>
    ),
  },
];

/** Solutions shown in the grid on the Solutions section. */
export const SOLUTIONS = [
  {
    id: 'core-banking',
    icon: 'spinner',
    title: 'Core Banking CB7',
    description:
      'CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations for your employees, improve risk management, increase productivity, and ensure full regulatory compliance.',
  },
  {
    id: 'digital-banking',
    icon: 'cross',
    title: 'Digital Banking N7',
    description:
      'N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients',
  },
  {
    id: 'open-banking',
    icon: 'atom',
    title: 'Open Banking',
    description:
      'Our API banking helps you to gain actionable insights, enable account aggregation, streamline customer onboarding, KYC, and payment initiation, offer predictive budgeting tools, and introduce enhanced credit scoring.',
  },
  {
    id: 'loan-origination',
    icon: 'spark',
    title: 'Loan Origination System',
    tag: 'NBFC',
    description:
      'N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients',
  },
  {
    id: 'loan-management',
    icon: 'knot',
    title: 'Loan Management System',
    tag: 'NBFC',
    description:
      'N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients',
  },
];

/** Feature bullets shown in the Cloud Banking section. */
export const CLOUD_FEATURES = [
  'Real-time ledger posting',
  'Multi-currency & multi-entity support',
  'Automated regulatory reporting',
];

/** Footer navigation columns. */
export const FOOTER_LINKS = [
  {
    heading: 'SOLUTIONS',
    links: [
      { label: 'Core Banking',     href: '#' },
      { label: 'Digital Channels', href: '#' },
      { label: 'Open Banking API', href: '#' },
    ],
  },
  {
    heading: 'COMPANY',
    links: [
      { label: 'About Us', href: '#' },
      { label: 'Careers',  href: '#' },
      { label: 'Contact',  href: '#' },
    ],
  },
  {
    heading: 'RESOURCES',
    links: [
      { label: 'Documentation', href: '#' },
      { label: 'Blog',          href: '#' },
      { label: 'Case Studies',  href: '#' },
    ],
  },
];
