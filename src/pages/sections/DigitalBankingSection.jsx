import React from 'react';
import Button from '../../components/ui/Button.jsx';
import dashboardMainImg from '../../assets/Mask group (1).png';

/**
 * DigitalBankingSection — "Run a more efficient, flexible, and digitally
 * connected corebanking system" feature block.
 * Responsive: laptop left + text right on desktop, stacked on mobile.
 */
const FEATURES_LEFT = [
  'Customer-On Boarding',
  'Managing deposits and withdrawals',
  'Transaction management',
  'Interest Calculation',
  'Payments processing (cash, cheques, mandates, NEFT, RTGS etc)',
];

const FEATURES_RIGHT = [
  'CRM Activities',
  'Configuring New Banking Products',
  'Loan disbursal and Loan management',
  'Establishing criteria for minimum balances, interest rates, number of withdrawals allowed and so on.',
];

const CheckIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ flexShrink: 0, marginTop: '2px' }}
  >
    <circle cx="9" cy="9" r="9" fill="url(#check-grad-db)" />
    <path
      d="M5 9.5L7.5 12L13 7"
      stroke="#fff"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient id="check-grad-db" x1="0" y1="0" x2="18" y2="18" gradientUnits="userSpaceOnUse">
        <stop stopColor="#00B4FD" />
        <stop offset="1" stopColor="#003ACE" />
      </linearGradient>
    </defs>
  </svg>
);

const DigitalBankingSection = () => (
  <section
    id="digital-banking"
    className="relative w-full overflow-hidden py-16 md:py-20 lg:py-0"
    style={{
      background: '#000D12',
      minHeight: '681px',
    }}
  >
    {/* Content wrapper — flex column on mobile, row on desktop */}
    <div className="relative z-[3] flex flex-col lg:flex-row items-center gap-10 lg:gap-0 px-5 md:px-10 lg:px-0 max-w-[1440px] mx-auto h-full">

      {/* ── Left: Laptop frame group ── */}
      <div
        className="relative w-full lg:w-[50%] flex items-center justify-center lg:justify-start order-1 lg:order-1"
        style={{ maxWidth: '766px' }}
      >
        <div
          className="relative lg:absolute lg:top-[72px] lg:left-[-56px]"
          style={{ width: '100%', maxWidth: '651.67px' }}
        >
          {/* Screen bezel */}
          <div
            style={{
              width: '100%',
              aspectRatio: '651.67 / 431.99',
              borderTopLeftRadius: '15.77px',
              borderTopRightRadius: '15.77px',
              border: '1.05px solid transparent',
              backgroundImage: 'linear-gradient(#000D12, #000D12), linear-gradient(106.53deg, #00B4FD -5.68%, #003ACE 86.98%)',
              backgroundOrigin: 'border-box',
              backgroundClip: 'padding-box, border-box',
              overflow: 'hidden',
              position: 'relative',
            }}
          >
            <img
              src={dashboardMainImg}
              alt="CKYC dashboard preview"
              className="absolute"
              style={{
                width: '97%',
                top: '1.75%',
                left: '1.57%',
                opacity: 0.8,
              }}
              loading="lazy"
            />
          </div>

          {/* Keyboard / base strip */}
          <div
            aria-hidden="true"
            style={{
              width: '117.5%',
              height: '30.3px',
              marginLeft: '-8.77%',
              borderTopLeftRadius: '5.26px',
              borderTopRightRadius: '5.26px',
              borderBottomRightRadius: '14.72px',
              borderBottomLeftRadius: '14.72px',
              border: '1.05px solid',
              borderImageSource: 'linear-gradient(106.53deg, #00B4FD -5.68%, #003ACE 86.98%)',
              borderImageSlice: 1,
            }}
          />
        </div>
      </div>

      {/* ── Right: Content layer ── */}
      <div
        className="w-full lg:w-[50%] lg:absolute lg:top-[168.68px] lg:left-[770px] flex flex-col order-2 lg:order-2"
        style={{ gap: '34px', maxWidth: '590px' }}
      >
        {/* Headline */}
        <h2
          className="text-[24px] md:text-[27px]"
          style={{
            fontFamily: "'Archivo', sans-serif",
            fontWeight: 400,
            lineHeight: '130%',
            color: '#E9F4F9',
            margin: 0,
            maxWidth: '495px',
          }}
        >
          Run a more efficient, flexible, and digitally connected corebanking system
        </h2>

        {/* "What you will get:" sub-label */}
        <p
          style={{
            fontFamily: "'Archivo', sans-serif",
            fontWeight: 600,
            fontSize: '16px',
            lineHeight: '130%',
            color: '#E9F4F9',
            margin: 0,
          }}
        >
          What you will get:
        </p>

        {/* Two-column feature list */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[10px_24px]">
          {/* Left column */}
          <div className="flex flex-col gap-[10px]">
            {FEATURES_LEFT.map((feat) => (
              <div
                key={feat}
                className="flex items-start gap-2"
              >
                <CheckIcon />
                <span
                  style={{
                    fontFamily: "'Archivo', sans-serif",
                    fontWeight: 400,
                    fontSize: '13px',
                    lineHeight: '150%',
                    color: '#E9F4F9',
                    opacity: 0.85,
                  }}
                >
                  {feat}
                </span>
              </div>
            ))}
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-[10px]">
            {FEATURES_RIGHT.map((feat) => (
              <div
                key={feat}
                className="flex items-start gap-2"
              >
                <CheckIcon />
                <span
                  style={{
                    fontFamily: "'Archivo', sans-serif",
                    fontWeight: 400,
                    fontSize: '13px',
                    lineHeight: '150%',
                    color: '#E9F4F9',
                    opacity: 0.85,
                  }}
                >
                  {feat}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col items-start gap-4 mt-2">
          <Button
            href="#"
            className="flex items-center justify-center bg-white hover:bg-[#00B4FD] text-[#000D12] hover:text-white transition-colors duration-300"
            style={{
              width: '210px',
              height: '49px',
              borderRadius: '10px',
              border: 'none',
              fontFamily: "'Chivo Mono', monospace",
              fontSize: '15px',
              fontWeight: 500,
            }}
          >
            REQUEST DEMO
          </Button>
          <a
            href="#"
            className="inline-flex items-center gap-1 hover:opacity-80 transition-opacity"
            style={{
              fontFamily: "'Chivo Mono', monospace",
              fontWeight: 400,
              fontSize: '14px',
              lineHeight: '130%',
              textTransform: 'uppercase',
              color: '#00B4FD',
              borderBottom: '1px solid #00B4FD',
              paddingBottom: '2px',
              textDecoration: 'none',
            }}
          >
            LEARN MORE →
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default DigitalBankingSection;
