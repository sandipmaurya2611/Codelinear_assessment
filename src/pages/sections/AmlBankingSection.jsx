import React from 'react';
import logoImg from '../../assets/image 1.png';

/**
 * AmlBankingSection — CTA card section with marquee strip.
 * Responsive: card uses flex layout, marquee scales, stacks on mobile.
 */

const AsteriskIcon = () => (
  <svg width="58" height="58" viewBox="0 0 58 58" fill="none" style={{ opacity: 0.3, flexShrink: 0 }}>
    {[0, 22.5, 45, 67.5, 90, 112.5, 135, 157.5].map((deg) => (
      <line
        key={deg}
        x1="29" y1="6" x2="29" y2="52"
        stroke="#000D12" strokeWidth="4.5" strokeLinecap="round"
        transform={`rotate(${deg} 29 29)`}
      />
    ))}
  </svg>
);

const AmlBankingSection = () => (
  <section
    id="aml-banking"
    className="relative w-full overflow-hidden pt-16 md:pt-20 pb-0"
    style={{ background: '#000D12' }}
  >
    {/* Scoped keyframes */}
    <style>{`
      @keyframes aml-marquee {
        0%   { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      .aml-marquee-track {
        animation: aml-marquee 10000ms linear 1ms infinite;
        will-change: transform;
      }
      .aml-grad-text {
        background: linear-gradient(106.53deg, #00B4FD -5.68%, #003ACE 86.98%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
      @keyframes aml-wave {
        0%   { transform: rotate(  0deg); }
        15%  { transform: rotate(-20deg); }
        30%  { transform: rotate( 15deg); }
        45%  { transform: rotate(-15deg); }
        60%  { transform: rotate( 10deg); }
        75%  { transform: rotate( -5deg); }
        100% { transform: rotate(  0deg); }
      }
      .aml-wave-hand {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        transform-origin: 70% 80%;
        animation: aml-wave 1.8s ease-in-out infinite;
      }
    `}</style>

    {/* Rounded gradient card */}
    <div
      className="relative mx-4 md:mx-10 lg:mx-20 rounded-[18px] md:rounded-[27px] overflow-hidden px-6 md:px-10 lg:px-20 py-10 md:py-16"
      style={{
        background: 'linear-gradient(99.21deg, #031E2A -12.22%, #000D12 59.26%)',
      }}
    >
      {/* CB7 outline watermark */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none select-none hidden lg:block"
        style={{
          width: '1141px',
          height: '687px',
          top: '-160.72px',
          right: '-200px',
          fontFamily: "'Archivo', sans-serif",
          fontWeight: 500,
          fontSize: '572.63px',
          lineHeight: '120%',
          textAlign: 'right',
          opacity: 0.5,
          color: 'transparent',
          WebkitTextStroke: '1.59px rgba(0, 105, 176, 0.35)',
          zIndex: 0,
        }}
      >
        CB7
      </div>

      {/* Content — flex column on mobile, row on desktop */}
      <div className="relative z-[3] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-16">
        {/* Left: Headline + sub-copy */}
        <div className="flex flex-col gap-4 w-full lg:w-[55%]">
          <h2
            className="text-[28px] md:text-[40px] lg:text-[53px]"
            style={{
              fontFamily: "'Archivo', sans-serif",
              fontWeight: 400,
              lineHeight: '120%',
              letterSpacing: '-0.01em',
              color: '#E9F4F9',
              margin: 0,
              maxWidth: '608px',
            }}
          >
            Take the full advantage of going paper-less now.
          </h2>

          <p
            style={{
              fontFamily: "'Archivo', sans-serif",
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '130%',
              color: '#E9F4F9',
              opacity: 0.8,
              margin: 0,
              maxWidth: '463px',
            }}
          >
            CB7 helps your financial institution improve the client experience,
            automate and optimize procedures, simplify banking operations
          </p>
        </div>

        {/* Right: CTA buttons */}
        <div className="flex flex-wrap items-center gap-6 md:gap-10">
          <a
            href="#"
            className="inline-flex items-center justify-center hover:bg-[#E9F4F9] hover:text-[#000D12] transition-all duration-300"
            style={{
              width: '208px',
              height: '49px',
              borderRadius: '10px',
              border: '1px solid #E9F4F9',
              background: 'transparent',
              fontFamily: "'Chivo Mono', monospace",
              fontWeight: 400,
              fontSize: '15px',
              lineHeight: '130%',
              textTransform: 'uppercase',
              color: '#E9F4F9',
              textDecoration: 'none',
              boxSizing: 'border-box',
              whiteSpace: 'nowrap',
              cursor: 'pointer',
            }}
          >
            Contact Us
          </a>

          <a
            href="#"
            className="inline-flex items-center justify-center hover:shadow-[0_10px_30px_rgba(0,180,253,0.4)] hover:-translate-y-[2px] transition-all duration-300"
            style={{
              width: '210px',
              height: '49px',
              borderRadius: '10px',
              border: 'none',
              background: 'linear-gradient(106.53deg, #00B4FD -5.68%, #003ACE 86.98%)',
              fontFamily: "'Chivo Mono', monospace",
              fontWeight: 400,
              fontSize: '15px',
              lineHeight: '130%',
              textTransform: 'uppercase',
              color: '#FFFFFF',
              textDecoration: 'none',
              boxSizing: 'border-box',
              whiteSpace: 'nowrap',
              cursor: 'pointer',
            }}
          >
            REQUEST DEMO
          </a>
        </div>
      </div>
    </div>

    {/* Marquee logo strip */}
    <div
      className="w-full mt-8 md:mt-12 overflow-hidden flex items-center"
      style={{
        height: '80px',
        background: '#FFFFFF',
      }}
    >
      <div
        className="aml-marquee-track inline-flex items-center whitespace-nowrap"
        style={{ gap: '0px', flexShrink: 0 }}
      >
        {[0, 1].map((setIdx) => (
          <div
            key={setIdx}
            className="inline-flex items-center gap-5 md:gap-7 flex-shrink-0 pr-5 md:pr-7"
          >
            <AsteriskIcon />
            <span
              className="aml-grad-text"
              style={{
                fontFamily: "'Archivo', sans-serif",
                fontWeight: 500,
                fontSize: 'clamp(28px, 5vw, 47px)',
                lineHeight: '120%',
                flexShrink: 0,
              }}
            >
              N7
            </span>
            <AsteriskIcon />
            <span
              style={{
                fontFamily: "'Archivo', sans-serif",
                fontWeight: 600,
                fontSize: 'clamp(28px, 5vw, 47px)',
                lineHeight: '120%',
                color: '#000D12',
                flexShrink: 0,
              }}
            >
              Say
            </span>
            <span
              className="aml-wave-hand"
              style={{ fontSize: 'clamp(32px, 5vw, 54px)', lineHeight: 1, flexShrink: 0 }}
            >
              👋
            </span>
            <span
              style={{
                fontFamily: "'Archivo', sans-serif",
                fontWeight: 600,
                fontSize: 'clamp(28px, 5vw, 47px)',
                lineHeight: '120%',
                color: '#000D12',
                flexShrink: 0,
                whiteSpace: 'nowrap',
              }}
            >
              to the new way of banking
            </span>
            <AsteriskIcon />
            <span
              className="aml-grad-text"
              style={{
                fontFamily: "'Archivo', sans-serif",
                fontWeight: 500,
                fontSize: 'clamp(28px, 5vw, 47px)',
                lineHeight: '120%',
                flexShrink: 0,
              }}
            >
              CB7
            </span>
            <AsteriskIcon />
            <span
              style={{
                fontFamily: "'Archivo', sans-serif",
                fontWeight: 600,
                fontSize: 'clamp(28px, 5vw, 47px)',
                lineHeight: '120%',
                color: '#000D12',
                flexShrink: 0,
              }}
            >
              Say
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AmlBankingSection;
