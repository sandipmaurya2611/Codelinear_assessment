import React from 'react';

/**
 * RecentActivityCard — floating glassmorphism card (Card 2) with filter pills
 * and a single transaction row.
 *
 * All dimensions match the original Figma spec exactly.
 */

/* ─── Sub-components ───────────────────────────────────────────────────── */

/** Filter pill — inactive (light) or active (navy) variant. */
const Pill = ({ label, width, isActive = false }) => (
  <div
    className="flex items-center justify-center cursor-pointer transition-all duration-200 flex-shrink-0"
    style={{
      width: `${width}px`,
      height: '15.53px',
      borderRadius: '10.1px',
      background: isActive ? '#081E69' : '#F8F8F8',
      boxSizing: 'border-box',
    }}
  >
    <span
      className="font-sans font-medium text-center flex items-center justify-center"
      style={{
        color: isActive ? '#FFFFFF' : '#0D0D0C',
        fontFamily: "'Gilroy-Medium', 'Inter', sans-serif",
        fontSize: '7.58px',
        lineHeight: '12.63px',
        letterSpacing: '0px',
      }}
    >
      {label}
    </span>
  </div>
);

/* ─── Main component ───────────────────────────────────────────────────── */

const RecentActivityCard = () => (
  /* Outer frosted shell */
  <div
    className="absolute z-20 border border-white/20 overflow-visible"
    style={{
      width: '254px',
      height: '117px',
      top: '150px',
      left: '-28px',
      borderRadius: '12px',
      background: '#FFFFFF66',
      backdropFilter: 'blur(16.19px)',
      boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.15)',
    }}
  >
    {/* Inner white layer */}
    <div
      className="absolute overflow-hidden"
      style={{
        width: '246px',
        height: '109px',
        top: '4px',
        left: '4px',
        borderRadius: '11px',
        background: '#FFFFFFB2',
      }}
    >
      {/* Card title */}
      <div
        className="absolute text-left font-sans select-none flex items-center font-bold"
        style={{
          width: '88px',
          height: '18px',
          top: '12px',
          left: '12px',
          color: '#0F0F0F',
          fontFamily: "'Gilroy-Bold', 'Inter', sans-serif",
          fontSize: '12.63px',
          lineHeight: '17.68px',
        }}
      >
        Recent activity
      </div>

      {/* Filter pills */}
      <div
        className="absolute flex items-center justify-between"
        style={{ top: '38px', left: '12px', right: '12px', height: '20px' }}
      >
        <Pill label="This Day"   width={45.15} />
        <Pill label="This Week"  width={51.15} isActive />
        <Pill label="This Month" width={53.15} />
        <Pill label="6 Month"    width={44.15} />
      </div>

      {/* Transaction arrow icon */}
      <div
        className="absolute flex items-center justify-center"
        style={{
          width: '30.3px',
          height: '30.3px',
          top: '64px',
          left: '12px',
          borderRadius: '9px',
          background: '#9281FF',
        }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
             stroke="white" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
          <line x1="7" y1="17" x2="17" y2="7" />
          <polyline points="7 7 17 7 17 17" />
        </svg>
      </div>

      {/* Transaction: recipient + category */}
      <div
        className="absolute text-left font-sans select-none flex items-center gap-[4.5px]"
        style={{ height: '16px', top: '61px', left: '52px' }}
      >
        <span style={{
          color: '#0B0B0B',
          fontFamily: "'Gilroy-Bold', 'Inter', sans-serif",
          fontSize: '10.1px',
          lineHeight: '15.15px',
          fontWeight: 'bold',
        }}>
          To Jin
        </span>
        <span style={{ color: '#0D0D0C', opacity: 0.6, fontSize: '8px', lineHeight: 1, margin: '0 2px' }}>
          •
        </span>
        <span style={{
          color: '#0B0B0B',
          fontFamily: "'Gilroy-Medium', 'Inter', sans-serif",
          fontSize: '10.1px',
          lineHeight: '15.15px',
          opacity: 0.6,
        }}>
          Work
        </span>
      </div>

      {/* Transaction date */}
      <div
        className="absolute text-left font-sans select-none flex items-center"
        style={{
          width: '50px',
          height: '13px',
          top: '77px',
          left: '52px',
          color: '#0B0B0B',
          fontFamily: "'Gilroy-Regular', 'Inter', sans-serif",
          fontSize: '7.58px',
          lineHeight: '12.63px',
          opacity: 0.8,
        }}
      >
        12 jun 2022
      </div>

      {/* Transaction amount */}
      <div
        className="absolute text-right font-sans select-none flex items-center justify-end font-bold"
        style={{
          height: '16px',
          top: '68px',
          right: '12px',
          color: '#0B0B0B',
          fontFamily: "'Gilroy-Bold', 'Inter', sans-serif",
          fontSize: '10.1px',
          lineHeight: '15.15px',
        }}
      >
        -$59
      </div>

      {/* Bottom divider */}
      <div
        className="absolute bg-slate-900/10"
        style={{ width: '100%', height: '1px', bottom: '0px', left: '0px' }}
      />
    </div>
  </div>
);

export default RecentActivityCard;
