import React from 'react';
import vectorImg from '../../assets/Vector.png';
import frame54Img from '../../assets/Frame 54 (3).png';

/**
 * FintechSection — premium fintech capabilities showcase.
 * Responsive: stacks cards vertically on mobile, side-by-side on desktop.
 */

/** Reusable Insight Card */
const InsightCard = ({ headline, className = '' }) => (
  <div
    className={`relative rounded-[18px] overflow-hidden ${className}`}
    style={{
      background: 'rgba(255,255,255,0.04)',
      boxSizing: 'border-box',
    }}
  >
    <div className="p-6 md:p-8 flex flex-col gap-3">
      <span
        style={{
          fontFamily: "'Chivo Mono', monospace",
          fontWeight: 400,
          fontSize: '12px',
          lineHeight: '130%',
          textTransform: 'uppercase',
          color: '#2490BB',
          opacity: 0.8,
        }}
      >
        Getting Started
      </span>

      <p
        className="text-[20px] md:text-[27px]"
        style={{
          fontFamily: "'Archivo', sans-serif",
          fontWeight: 400,
          lineHeight: '120%',
          color: '#E9F4F9',
          margin: 0,
        }}
      >
        {headline}
      </p>

      <div className="flex items-center gap-3 mt-1">
        <span
          style={{
            fontFamily: "'Archivo', sans-serif",
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '130%',
            color: '#64A8C4',
            opacity: 0.8,
          }}
        >
          David Grohl
        </span>
        <span
          style={{
            fontFamily: "'Archivo', sans-serif",
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '130%',
            color: '#64A8C4',
            opacity: 0.8,
          }}
        >
          17/08/24
        </span>
      </div>
    </div>

    {/* Read More button */}
    <div className="px-6 md:px-8 pb-6">
      <div
        className="group hover:bg-white transition-all duration-300 w-full h-[36px] rounded-[10px] border border-[rgba(233,244,249,0.3)] flex items-center justify-center cursor-pointer"
      >
        <span
          className="text-[rgba(233,244,249,0.5)] group-hover:text-[#003ACE] transition-colors duration-300"
          style={{
            fontFamily: "'Chivo Mono', monospace",
            fontWeight: 400,
            fontSize: '12px',
            lineHeight: '130%',
            textTransform: 'uppercase',
          }}
        >
          Read More
        </span>
      </div>
    </div>
  </div>
);

const FintechSection = () => (
  <section
    id="fintech"
    className="relative w-full overflow-hidden py-16 md:py-20 px-5 md:px-10 lg:px-20"
    style={{
      background: '#000D12',
      maxWidth: '1440px',
      margin: '0 auto',
      boxSizing: 'border-box',
    }}
  >
    {/* Vector decoration */}
    <img
      src={vectorImg}
      alt=""
      aria-hidden="true"
      className="absolute pointer-events-none select-none"
      style={{
        width: '600px',
        height: '600px',
        bottom: '-200px',
        left: '-200px',
        opacity: 0.08,
        zIndex: 0,
      }}
    />

    {/* Gradient glow accent */}
    <div
      aria-hidden="true"
      className="absolute pointer-events-none"
      style={{
        width: '500px',
        height: '500px',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        background: 'radial-gradient(circle, rgba(0,180,253,0.06) 0%, transparent 70%)',
        zIndex: 0,
      }}
    />

    {/* Top border accent */}
    <div
      aria-hidden="true"
      className="absolute top-0 left-0 right-0"
      style={{
        height: '1px',
        background: 'linear-gradient(90deg, transparent 0%, rgba(0,180,253,0.4) 30%, rgba(0,58,206,0.4) 70%, transparent 100%)',
        zIndex: 3,
      }}
    />

    {/* Main content — responsive flex layout */}
    <div className="relative z-[4] flex flex-col lg:flex-row gap-10 lg:gap-16">

      {/* Left column: heading */}
      <div className="flex flex-col gap-8 md:gap-12 w-full lg:w-[40%] lg:max-w-[463px]">
        {/* "Insights" Button */}
        <div
          className="group hover:bg-white transition-all duration-300 w-[190px] h-[49px] rounded-[10px] border border-[#E9F4F9] flex items-center justify-center cursor-pointer"
        >
          <span
            className="text-[#E9F4F9] group-hover:text-[#003ACE] transition-colors duration-300"
            style={{
              fontFamily: "'Chivo Mono', monospace",
              fontWeight: 400,
              fontSize: '15px',
              lineHeight: '130%',
              textTransform: 'uppercase',
            }}
          >
            Insights
          </span>
        </div>

        {/* Headline */}
        <h2
          className="text-[26px] md:text-[32px] lg:text-[37px]"
          style={{
            fontFamily: "'Archivo', sans-serif",
            fontWeight: 400,
            lineHeight: '120%',
            letterSpacing: '-0.01em',
            color: '#E9F4F9',
            margin: 0,
          }}
        >
          Get yourself up-to-speed on all the things happening in fintech
        </h2>
      </div>

      {/* Right column: cards */}
      <div className="flex flex-col gap-6 md:gap-8 w-full lg:w-[60%]">
        {/* Top card — with image */}
        <div
          className="rounded-[18px] overflow-hidden flex flex-col md:flex-row"
          style={{ background: 'rgba(255,255,255,0.04)' }}
        >
          {/* Image */}
          <div className="w-full md:w-[45%] relative">
            <div
              className="m-4 md:m-6 rounded-[8px] overflow-hidden"
              style={{ background: '#07193C' }}
            >
              <img
                src={frame54Img}
                alt="Fintech insight"
                className="w-full h-auto rounded-[8px] object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Text */}
          <div className="w-full md:w-[55%] p-4 md:p-6 flex flex-col justify-between gap-4">
            <div className="flex flex-col gap-3">
              <span
                style={{
                  fontFamily: "'Chivo Mono', monospace",
                  fontWeight: 400,
                  fontSize: '12px',
                  lineHeight: '130%',
                  textTransform: 'uppercase',
                  color: '#2490BB',
                  opacity: 0.8,
                }}
              >
                Getting Started
              </span>
              <p
                className="text-[20px] md:text-[27px]"
                style={{
                  fontFamily: "'Archivo', sans-serif",
                  fontWeight: 400,
                  lineHeight: '120%',
                  color: '#E9F4F9',
                  margin: 0,
                }}
              >
                How to transition from a traditional to a digital bank
              </p>
              <div className="flex items-center gap-3">
                <span style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 400, fontSize: '14px', lineHeight: '130%', color: '#64A8C4', opacity: 0.8 }}>David Grohl</span>
                <span style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 400, fontSize: '14px', lineHeight: '130%', color: '#64A8C4', opacity: 0.8 }}>17/08/24</span>
              </div>
            </div>

            <div
              className="group hover:bg-white transition-all duration-300 w-full h-[36px] rounded-[10px] border border-[rgba(233,244,249,0.3)] flex items-center justify-center cursor-pointer"
            >
              <span
                className="text-[rgba(233,244,249,0.5)] group-hover:text-[#003ACE] transition-colors duration-300"
                style={{
                  fontFamily: "'Chivo Mono', monospace",
                  fontWeight: 400,
                  fontSize: '12px',
                  lineHeight: '130%',
                  textTransform: 'uppercase',
                }}
              >
                Read More
              </span>
            </div>
          </div>
        </div>

        {/* Bottom cards row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-7">
          <InsightCard headline="How to transition from a traditional to a digital bank" />
          <InsightCard
            headline="How to transition from a traditional to a digital bank"
            className="!bg-[#01141B]"
          />
        </div>
      </div>
    </div>

    {/* Read All Insights Link */}
    <div className="relative z-[4] flex justify-end mt-8 md:mt-12">
      <a
        href="#"
        className="group inline-flex items-center gap-1 hover:text-white transition-colors duration-300"
        style={{ textDecoration: 'none' }}
      >
        <span
          className="relative"
          style={{
            fontFamily: "'Chivo Mono', monospace",
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '130%',
            textTransform: 'uppercase',
            color: '#00B4FD',
          }}
        >
          Read all insights
          <span className="absolute left-0 -bottom-1 h-[1.5px] w-[20px] bg-[#00B4FD] transition-all duration-300 group-hover:w-full" />
        </span>
        <svg
          width="14" height="15" viewBox="0 0 14 15" fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ transform: 'rotate(180deg)' }}
          className="text-[#00B4FD]"
        >
          <path d="M13 7.5H1M1 7.5L7 1.5M1 7.5L7 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    </div>
  </section>
);

export default FintechSection;
