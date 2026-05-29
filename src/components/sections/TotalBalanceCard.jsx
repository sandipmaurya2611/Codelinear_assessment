import React from 'react';
import avatarImg from '../../assets/8bd31b71a379644a52221930303daba4b56c660f.jpg';

/**
 * TotalBalanceCard — floating glassmorphism card (Card 1) overlaid on the hero image.
 *
 * All pixel values match the original Figma spec exactly.
 * The component is self-contained so it can be repositioned by its parent
 * via the absolute positioning wrapper in HeroSection.
 */
const TotalBalanceCard = () => (
  /* Outer frosted-glass shell */
  <div
    className="absolute z-20 border border-white/20 overflow-visible"
    style={{
      width: '208px',
      height: '177px',
      top: '23px',
      left: '353px',
      borderRadius: '12px',
      background: '#FFFFFF66',
      boxShadow: '0px 0px 27.57px 8.92px #00000040',
      backdropFilter: 'blur(12px)',
    }}
  >
    {/* Inner white layer */}
    <div
      className="absolute flex flex-col justify-between"
      style={{
        width: '199px',
        height: '168px',
        top: '4.5px',
        left: '5px',
        borderRadius: '11px',
        background: '#FFFFFFB2',
        padding: '12px 10px 10px 10px',
      }}
    >
      {/* Avatar */}
      <div
        className="absolute overflow-hidden border border-white/60 shadow-sm z-10"
        style={{
          width: '25.83px',
          height: '25.83px',
          top: '21.01px',
          left: '7.4px',
          borderRadius: '8.61px',
        }}
      >
        <img src={avatarImg} alt="Toni Kross" className="w-full h-full object-cover" />
      </div>

      {/* Name + greeting */}
      <div
        className="absolute flex flex-col justify-center text-left"
        style={{ width: '45px', height: '22.53px', top: '22.62px', left: '39.68px' }}
      >
        <span className="text-[9px] font-bold leading-none whitespace-nowrap" style={{ color: '#0D0D0C' }}>
          Toni Kross
        </span>
        <span className="text-[7px] text-slate-500 mt-[2px] leading-none font-medium whitespace-nowrap">
          Good Morning
        </span>
      </div>

      {/* Notification bell */}
      <div
        className="absolute flex items-center justify-center hover:scale-105 transition-transform duration-200 cursor-pointer"
        style={{ width: '12.91px', height: '12.91px', top: '27.46px', left: '176.34px' }}
      >
        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none"
             stroke="#334155" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
          <path d="M13.73 21a2 2 0 0 1-3.46 0" />
        </svg>
      </div>

      {/* Total balance label */}
      <div
        className="absolute text-left font-sans select-none flex items-center"
        style={{
          width: '48px',
          height: '12px',
          top: '59.75px',
          left: '7.4px',
          opacity: 0.6,
          color: '#1D1D1D',
          fontFamily: "'Gilroy-Regular', 'Inter', sans-serif",
          fontSize: '7.53px',
          lineHeight: '11.84px',
          letterSpacing: '0px',
        }}
      >
        Total balance
      </div>

      {/* Balance amount */}
      <div
        className="absolute text-left font-sans select-none flex items-baseline gap-[2px]"
        style={{
          width: '109px',
          height: '20px',
          top: '75.89px',
          left: '7.4px',
          color: '#081E69',
          fontFamily: "'Gilroy-Bold', 'Inter', sans-serif",
          fontSize: '15.07px',
          lineHeight: '19.37px',
          fontWeight: 'bold',
        }}
      >
        <span>$42,295.00</span>
        <span className="text-[10px]">USD</span>
      </div>

      {/* Action buttons row */}
      <ActionButton top="114.63px" left="14.93px" label="Fund Transfer">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
             stroke="#0D0D0C" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 15V3m0 0l-4 4m4-4l4 4" />
          <path d="M4 14v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4" />
        </svg>
      </ActionButton>

      <ActionButton top="114.63px" left="90.79px" label="Add Money" labelLeft="87.03px" labelWidth="40px">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
             stroke="#0D0D0C" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" />
          <path d="M11 7v8M13.5 9.5h-2.5a1.5 1.5 0 0 0 0 3h1.5a1.5 1.5 0 0 1 0 3H8.5" />
          <path d="M18 15v4m0 0l-2-2m2 2l2-2" strokeWidth="2.2" />
        </svg>
      </ActionButton>

      <ActionButton top="114.63px" left="159.13px" label="More" labelLeft="166.12px" labelWidth="18px">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
             stroke="#0D0D0C" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="7" height="7" rx="1.5" />
          <rect x="14" y="3" width="7" height="7" rx="1.5" />
          <rect x="3" y="14" width="7" height="7" rx="1.5" />
          <circle cx="17.5" cy="17.5" r="3.5" />
        </svg>
      </ActionButton>

    </div>
  </div>
);

/* ─── Internal helper ───────────────────────────────────────────────────── */

/**
 * ActionButton — small frosted square icon button + label used inside the card.
 * Not exported; intentionally scoped to TotalBalanceCard.
 */
const ActionButton = ({
  top,
  left,
  label,
  labelLeft,
  labelWidth = '48px',
  children,
}) => (
  <>
    <div
      className="absolute flex items-center justify-center hover:scale-105 transition-transform duration-200 cursor-pointer border border-white/10"
      style={{
        width: '32.28px',
        height: '32.28px',
        top,
        left,
        borderRadius: '9px',
        background: '#FFFAFA33',
        backdropFilter: 'blur(53.8px)',
      }}
    >
      {children}
    </div>
    <div
      className="absolute text-center select-none flex items-center justify-center font-sans"
      style={{
        width: labelWidth,
        height: '12px',
        top: '151.21px',
        left: labelLeft ?? left,
        color: '#0D0D0C',
        fontFamily: "'Gilroy-Bold', 'Inter', sans-serif",
        fontSize: '7.53px',
        lineHeight: '11.84px',
        fontWeight: 'bold',
      }}
    >
      {label}
    </div>
  </>
);

export default TotalBalanceCard;
