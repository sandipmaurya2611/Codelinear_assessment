import React from 'react';
import frame54Img from '../../assets/Frame 54 (3).png';

/**
 * CaseStudiesSection — "Our Case Studies" showcase.
 * Responsive: stacks image/text vertically on mobile, side-by-side on desktop.
 */
const CaseStudiesSection = () => (
  <section
    className="relative w-full overflow-hidden py-12 md:py-16 lg:py-20 px-5 md:px-10 lg:px-20"
    style={{
      background: '#000D12',
      maxWidth: '1440px',
      margin: '0 auto',
      boxSizing: 'border-box',
    }}
  >
    {/* Title */}
    <h2
      className="text-[32px] md:text-[43px] lg:text-[53px] text-center mb-10 md:mb-16"
      style={{
        fontFamily: "'Archivo', sans-serif",
        fontWeight: 400,
        lineHeight: '120%',
        letterSpacing: '-0.01em',
        color: '#E9F4F9',
        margin: '0 auto',
      }}
    >
      Our Case Studies
    </h2>

    {/* Main Card Container */}
    <div className="relative max-w-[1015px] mx-auto mt-10 md:mt-16">
      {/* Background Stacked Card */}
      <div
        className="absolute hidden md:block"
        style={{
          width: '80%',
          height: '85%',
          top: '32px',
          right: '0',
          borderRadius: '15.73px',
          background: '#01141B',
          opacity: 0.3,
          zIndex: 0,
        }}
      />

      {/* Inner Card */}
      <div
        className="relative z-[1] rounded-[18px] flex flex-col md:flex-row items-center overflow-hidden"
        style={{ background: 'rgba(255,255,255,0.04)' }}
      >
        {/* Left Image */}
        <div className="w-full md:w-[45%] p-4 md:p-5">
          <div
            className="rounded-[10px] overflow-hidden"
            style={{ background: '#07193C' }}
          >
            <img
              src={frame54Img}
              alt="Case study representation"
              className="w-full h-auto object-cover rounded-[10px]"
              loading="lazy"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full md:w-[55%] p-4 md:p-6 flex flex-col gap-5 md:gap-6">
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
            getting started
          </span>

          <h3
            className="text-[28px] md:text-[36px] lg:text-[43px]"
            style={{
              fontFamily: "'Archivo', sans-serif",
              fontWeight: 400,
              lineHeight: '120%',
              color: '#E9F4F9',
              margin: 0,
            }}
          >
            How we help brand reach out to more people
          </h3>

          {/* Logo block */}
          <div className="flex items-center gap-2">
            <div
              className="w-[30px] h-[30px] rounded-full flex items-center justify-center"
              style={{ background: '#586E84' }}
            >
              <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 6L6.5 6L6.5 0L0 10L5.5 10L5.5 16L12 6Z" fill="white"/>
              </svg>
            </div>
            <span
              style={{
                fontFamily: "'Roboto', sans-serif",
                fontWeight: 700,
                fontSize: '22.51px',
                lineHeight: '110%',
                color: '#586E84',
              }}
            >
              Zoomerr
            </span>
          </div>

          {/* Read More */}
          <div
            className="group hover:bg-white transition-all duration-300 w-full h-[36px] rounded-[10px] border border-[rgba(233,244,249,0.5)] flex items-center justify-center cursor-pointer mt-2"
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

      {/* Carousel Navigation */}
      <div className="flex items-center justify-center gap-6 md:gap-8 mt-8">
        {/* Left Arrow */}
        <div className="flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
          <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="21" cy="21" r="20.5" stroke="#00B4FD" strokeWidth="1"/>
            <path d="M23 15L17 21L23 27" stroke="#00B4FD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <line x1="17" y1="21" x2="27" y2="21" stroke="#00B4FD" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center gap-2">
          <div className="w-[38px] h-[12px] rounded-full" style={{ background: '#0B4B63' }} />
          <div className="w-3 h-3 rounded-full border border-[#0B4B63]" />
          <div className="w-3 h-3 rounded-full border border-[#0B4B63]" />
        </div>

        {/* Right Arrow */}
        <div className="flex items-center justify-center cursor-pointer hover:scale-110 transition-transform" style={{ transform: 'rotate(-180deg)' }}>
          <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="21" cy="21" r="20.5" stroke="#00B4FD" strokeWidth="1"/>
            <path d="M23 15L17 21L23 27" stroke="#00B4FD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <line x1="17" y1="21" x2="27" y2="21" stroke="#00B4FD" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </div>
      </div>

      {/* View All Link */}
      <div className="flex justify-end mt-4">
        <a
          href="#"
          className="group inline-flex items-center gap-1"
          style={{ textDecoration: 'none' }}
        >
          <span
            className="relative group-hover:text-white transition-colors duration-300"
            style={{
              fontFamily: "'Chivo Mono', monospace",
              fontWeight: 400,
              fontSize: '14px',
              lineHeight: '130%',
              textTransform: 'uppercase',
              color: '#00B4FD',
            }}
          >
            view all
            <span className="absolute left-0 -bottom-1 h-[1.5px] w-[15px] bg-[#00B4FD] transition-all duration-300 group-hover:w-full" />
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
    </div>
  </section>
);

export default CaseStudiesSection;
