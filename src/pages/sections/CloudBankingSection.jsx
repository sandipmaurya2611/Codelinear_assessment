import React from 'react';
import Button from '../../components/ui/Button.jsx';
import cloudDashboardMainRef from '../../assets/cloud-dashboard-main-ref.png';

/**
 * CloudBankingSection — "A complete cloud-based core banking." feature block.
 * Responsive: stacks vertically on mobile/tablet, side-by-side on desktop.
 */
const CloudBankingSection = () => (
  <section
    id="cloud-banking"
    className="relative w-full overflow-hidden py-16 md:py-20 lg:py-0"
    style={{
      background: '#000D12',
      minHeight: '619px',
    }}
  >
    {/* Watermark text */}
    <div
      className="absolute flex items-center justify-center whitespace-nowrap pointer-events-none select-none"
      style={{
        width: '1141px',
        height: '687px',
        left: '-340px',
        top: '-95px',
        fontFamily: "'Archivo', sans-serif",
        fontWeight: 500,
        fontSize: '572.63px',
        lineHeight: '120%',
        opacity: 0.5,
        color: 'transparent',
        WebkitTextStroke: '1.59px rgba(0, 105, 176, 0.28)',
        padding: '90px',
        zIndex: 0,
      }}
    >
      CB7
    </div>

    {/* Content wrapper — flex column on mobile, row on desktop */}
    <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-0 px-5 md:px-10 lg:px-0 max-w-[1440px] mx-auto h-full">

      {/* ── Left Content (Text & Buttons) ── */}
      <div
        className="flex flex-col w-full lg:w-[45%] lg:absolute lg:left-[150px] lg:top-[130px]"
        style={{ gap: '34px' }}
      >
        {/* Headlines Wrapper */}
        <div className="flex flex-col gap-6">
          <h2
            className="text-[32px] md:text-[43px] lg:text-[53px]"
            style={{
              fontFamily: "'Archivo', sans-serif",
              fontWeight: 400,
              lineHeight: '120%',
              letterSpacing: '-0.01em',
              color: '#E9F4F9',
              margin: 0,
              maxWidth: '560px',
            }}
          >
            A complete cloud-based core banking.
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
            }}
          >
            Faster time to market with our cloud-based core banking services
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-3 mt-2">
          {/* REQUEST DEMO */}
          <Button
            href="#"
            variant="primary-cta"
            className="flex items-center justify-center"
            style={{
              width: '210px',
              height: '49px',
              borderRadius: '10px',
              padding: '15px 51px',
              background: 'linear-gradient(106.53deg, #00B4FD -5.68%, #003ACE 86.98%)',
              border: 'none',
            }}
          >
            <span
              style={{
                display: 'inline-flex',
                gap: '8px',
                alignItems: 'center',
                fontFamily: "'Chivo Mono', monospace",
                fontWeight: 500,
                fontSize: '15px',
                lineHeight: '130%',
                color: '#E9F4F9',
                textTransform: 'uppercase',
                whiteSpace: 'nowrap',
              }}
            >
              REQUEST DEMO
            </span>
          </Button>

          {/* LEARN MORE */}
          <a
            href="#"
            className="inline-flex items-center gap-1"
            style={{
              fontFamily: "'Chivo Mono', monospace",
              fontWeight: 400,
              fontSize: '14px',
              lineHeight: '130%',
              textTransform: 'uppercase',
              color: '#00B4FD',
              borderBottom: '1px solid #00B4FD',
              paddingBottom: '2px',
              width: 'fit-content',
              textDecoration: 'none',
            }}
          >
            LEARN MORE →
          </a>
        </div>
      </div>

      {/* ── Right Content (Dashboard & Screen layout) ── */}
      <div
        className="relative w-full lg:w-[55%] lg:absolute lg:right-[-156px] lg:top-[72px]
                   flex items-center justify-center lg:block"
        style={{ maxWidth: '766px' }}
      >
        <div className="relative" style={{ width: '100%', maxWidth: '651.67px' }}>
          {/* Screen container */}
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
              src={cloudDashboardMainRef}
              alt="AML dashboard preview"
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

          {/* Bottom bezel strip */}
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
    </div>
  </section>
);

export default CloudBankingSection;
