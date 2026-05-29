import React from 'react';

/**
 * PaperlessSection — CTA section for going paperless.
 * Responsive: stacks vertically on mobile, side-by-side on desktop.
 */
const PaperlessSection = () => (
  <section
    className="relative w-full overflow-hidden py-12 md:py-16 px-5 md:px-10 lg:px-20"
    style={{
      background: '#000D12',
      maxWidth: '1440px',
      margin: '0 auto',
      boxSizing: 'border-box',
    }}
  >
    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-16">
      {/* Left Content: Heading & Paragraph */}
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
            opacity: 0.7,
            margin: 0,
            maxWidth: '463px',
          }}
        >
          CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations
        </p>
      </div>

      {/* Right Content: Buttons */}
      <div className="flex flex-wrap items-center gap-6 md:gap-10">
        {/* Contact Us Button */}
        <div
          className="group hover:bg-white transition-all duration-300 flex items-center justify-center cursor-pointer"
          style={{
            width: '208px',
            height: '49px',
            borderRadius: '10px',
            border: '1px solid #E9F4F9',
            boxSizing: 'border-box',
          }}
        >
          <span
            className="group-hover:text-[#003ACE] transition-colors duration-300"
            style={{
              fontFamily: "'Chivo Mono', monospace",
              fontWeight: 400,
              fontSize: '15px',
              lineHeight: '130%',
              textTransform: 'uppercase',
              color: '#E9F4F9',
              whiteSpace: 'nowrap',
            }}
          >
            Contact Us
          </span>
        </div>

        {/* Request Demo Button */}
        <div
          className="group hover:opacity-90 transition-opacity duration-300 flex items-center justify-center cursor-pointer"
          style={{
            width: '210px',
            height: '49px',
            borderRadius: '10px',
            background: 'linear-gradient(106.53deg, #00B4FD -5.68%, #003ACE 86.98%)',
            boxSizing: 'border-box',
          }}
        >
          <span
            style={{
              fontFamily: "'Chivo Mono', monospace",
              fontWeight: 400,
              fontSize: '15px',
              lineHeight: '130%',
              textTransform: 'uppercase',
              color: '#FFFFFF',
              whiteSpace: 'nowrap',
            }}
          >
            REQUEST DEMO
          </span>
        </div>
      </div>
    </div>
  </section>
);

export default PaperlessSection;
