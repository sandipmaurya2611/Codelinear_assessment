import React from 'react';
import vectorImg from '../../assets/Vector.png';
import iphoneImg from '../../assets/iPhone 13 Pro (1).png';
import iphoneImg2 from '../../assets/iPhone 13 Pro (2).png';
import iphoneImg3 from '../../assets/iPhone 13 Pro (3).png';

const CheckIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
    <circle cx="12" cy="12" r="12" fill="#007AFF" />
    <path d="M7.5 12.5L10.5 15.5L16.5 8.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/** Feature row data */
const FEATURE_ROWS = [
  {
    title: 'Fully compliant with regulatory requirement',
    description: 'The governance of risk management with regulations is achieved by our risk management framework that is fully integrated to work with digital bank\'s operational-risk protocols and procedures.',
    items: ['Pre-integrated Security System', 'Fully Compliant With Regulatory Requirement', 'Digitally Connected Core'],
    image: null, // will use iphoneImg
    imageFirst: true,
  },
  {
    title: 'No legacy IT systems',
    description: 'Our Digital Banking solution and multilayered approach help financial institutions take advantage of digital transformation by ensuring customer trust and regulatory compliance.',
    items: ['Adaptive & Intelligent API monetization', 'Ambient User Experience', 'Cloud-native With lower TCO'],
    image: null,
    imageFirst: false,
  },
  {
    title: 'No traditional branches',
    description: 'Our Digital Banking out-of-the-box helps you to accelerate innovation while reducing risks and optimising operational costs for a seamless branchless experience.',
    items: ['Branchless & Paperless Banking', 'Digital Transformation Capability', 'Optimized, Adoptable and Scalable'],
    image: null,
    imageFirst: true,
  },
];

const images = [iphoneImg, iphoneImg2, iphoneImg3];

/**
 * NewSection — "Digital banking out-of-the-box"
 * Responsive: removes fixed 1440px width, uses flex layouts.
 */
const NewSection = () => (
  <section
    className="relative overflow-hidden w-full py-16 md:py-20 px-5 md:px-10 lg:px-20"
    style={{
      background: '#E9F4F9',
      margin: '0 auto',
      maxWidth: '1440px',
      boxSizing: 'border-box',
    }}
  >
    {/* Watermark "N7" */}
    <div
      aria-hidden="true"
      className="absolute pointer-events-none select-none hidden lg:block"
      style={{
        width: '744px',
        height: '687px',
        top: '-66.74px',
        left: '277px',
        fontFamily: "'Archivo', sans-serif",
        fontWeight: 500,
        fontSize: '572.63px',
        lineHeight: '120%',
        opacity: 0.5,
        color: 'transparent',
        WebkitTextStroke: '1.59px #00B4FD',
        zIndex: 0,
      }}
    >
      N7
    </div>

    {/* Decorative Vector Image */}
    <img
      src={vectorImg}
      alt=""
      aria-hidden="true"
      className="absolute pointer-events-none select-none hidden lg:block"
      style={{
        width: '1243.25px',
        height: '1245.21px',
        top: '418.17px',
        left: '-763.25px',
        opacity: 0.2,
        zIndex: 0,
      }}
    />

    {/* Content Container */}
    <div className="relative z-[1] flex flex-col gap-8 md:gap-12">
      {/* Headline */}
      <h2
        className="text-[32px] md:text-[43px] lg:text-[53px]"
        style={{
          fontFamily: "'Archivo', sans-serif",
          fontWeight: 400,
          lineHeight: '120%',
          letterSpacing: '-0.01em',
          color: '#000D12',
          opacity: 0.95,
          margin: 0,
          maxWidth: '440px',
        }}
      >
        Digital banking out-of-the-box
      </h2>

      {/* Sub-copy */}
      <p
        style={{
          fontFamily: "'Archivo', sans-serif",
          fontWeight: 400,
          fontSize: '16px',
          lineHeight: '130%',
          color: '#000D12',
          opacity: 0.7,
          margin: 0,
          maxWidth: '380px',
        }}
      >
        N7 helps your financial institution improve the client experience, automate and optimize procedures
      </p>

      {/* Buttons Container */}
      <div className="flex flex-wrap items-center gap-4 md:gap-6">
        <a
          href="#"
          className="inline-flex items-center justify-center hover:opacity-90 transition-opacity"
          style={{
            width: '210px',
            height: '49px',
            borderRadius: '10px',
            padding: '15px 51px',
            background: 'linear-gradient(106.53deg, #00B4FD -5.68%, #003ACE 86.98%)',
            textDecoration: 'none',
            boxSizing: 'border-box',
          }}
        >
          <span
            style={{
              fontFamily: "'Chivo Mono', monospace",
              fontWeight: 500,
              fontSize: '15px',
              lineHeight: '130%',
              textTransform: 'uppercase',
              color: '#FFFFFF',
              whiteSpace: 'nowrap',
            }}
          >
            REQUEST DEMO
          </span>
        </a>

        <a
          href="#"
          className="inline-flex items-center gap-1 hover:opacity-80 transition-opacity"
          style={{
            textDecoration: 'none',
          }}
        >
          <span
            style={{
              fontFamily: "'Chivo Mono', monospace",
              fontWeight: 500,
              fontSize: '14px',
              lineHeight: '130%',
              textTransform: 'uppercase',
              background: 'linear-gradient(95.48deg, #00B4FD -79.76%, #003ACE 91.37%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            learn more
          </span>
          <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'rotate(180deg)' }}>
            <path d="M13.5688 7.25231L0.5 7.25231M0.5 7.25231L6.53442 13.7867M0.5 7.25231L6.53442 0.717896" stroke="url(#paint0_linear_ns)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <defs>
              <linearGradient id="paint0_linear_ns" x1="0.5" y1="7.25231" x2="13.5688" y2="7.25231" gradientUnits="userSpaceOnUse">
                <stop stopColor="#00B4FD" />
                <stop offset="1" stopColor="#003ACE" />
              </linearGradient>
            </defs>
          </svg>
        </a>
      </div>
    </div>

    {/* Feature Rows */}
    <div className="relative z-[2] flex flex-col gap-16 md:gap-20 mt-16 md:mt-20">
      {FEATURE_ROWS.map((row, index) => {
        const img = images[index];
        const phoneEl = (
          <div className="flex-shrink-0 flex items-center justify-center w-full md:w-auto">
            <img
              src={img}
              alt={`Feature Demo ${index + 1}`}
              className="w-[180px] md:w-[239px] h-auto object-contain"
              loading="lazy"
            />
          </div>
        );
        const textEl = (
          <div className="flex flex-col gap-8 md:gap-10 max-w-[302px]">
            <div className="flex flex-col gap-4">
              <h3
                style={{
                  fontFamily: "'Archivo', sans-serif",
                  fontWeight: 500,
                  fontSize: '16px',
                  lineHeight: '130%',
                  color: '#000D12',
                  margin: 0,
                }}
              >
                {row.title}
              </h3>
              <p
                style={{
                  fontFamily: "'Archivo', sans-serif",
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '130%',
                  color: '#000D12',
                  opacity: 0.7,
                  margin: 0,
                }}
              >
                {row.description}
              </p>
            </div>
            <div className="flex flex-col gap-3">
              {row.items.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3"
                  style={{
                    fontFamily: "'Archivo', sans-serif",
                    fontWeight: 500,
                    fontSize: '16px',
                    lineHeight: '130%',
                    color: '#000D12',
                    opacity: 0.7,
                  }}
                >
                  <CheckIcon />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        );

        return (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-10 md:gap-16 lg:gap-20 ${
              row.imageFirst ? '' : 'md:flex-row-reverse'
            }`}
          >
            {row.imageFirst ? <>{phoneEl}{textEl}</> : <>{textEl}{phoneEl}</>}
          </div>
        );
      })}
    </div>

    {/* Bottom Banner */}
    <div
      className="relative mt-16 md:mt-20 rounded-[18px] md:rounded-[27px] overflow-hidden px-6 md:px-10 lg:px-20 py-10 md:py-16"
      style={{
        background: 'linear-gradient(99.21deg, #031E2A -12.22%, #000D12 59.26%)',
      }}
    >
      {/* Banner Watermark "N7" */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none select-none hidden lg:block"
        style={{
          width: '744px',
          height: '687px',
          top: '-160.72px',
          right: '0px',
          fontFamily: "'Archivo', sans-serif",
          fontWeight: 500,
          fontSize: '572.63px',
          lineHeight: '120%',
          opacity: 0.5,
          color: 'transparent',
          WebkitTextStroke: '1.59px #00B4FD',
          zIndex: 0,
        }}
      >
        N7
      </div>

      <div className="relative z-[1] flex flex-col gap-4">
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
          N7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations
        </p>
        <div className="flex flex-wrap gap-4 md:gap-6 mt-4">
          <a
            href="#"
            className="inline-flex items-center justify-center hover:bg-white hover:text-[#003ACE] transition-all duration-300"
            style={{
              width: '208px',
              height: '49px',
              borderRadius: '10px',
              border: '1px solid #E9F4F9',
              boxSizing: 'border-box',
              textDecoration: 'none',
              fontFamily: "'Chivo Mono', monospace",
              fontWeight: 500,
              fontSize: '15px',
              lineHeight: '130%',
              textTransform: 'uppercase',
              color: '#E9F4F9',
            }}
          >
            Contact Us
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center hover:opacity-90 transition-opacity"
            style={{
              width: '210px',
              height: '49px',
              borderRadius: '10px',
              background: 'linear-gradient(106.53deg, #00B4FD -5.68%, #003ACE 86.98%)',
              boxSizing: 'border-box',
              textDecoration: 'none',
              fontFamily: "'Chivo Mono', monospace",
              fontWeight: 500,
              fontSize: '15px',
              lineHeight: '130%',
              textTransform: 'uppercase',
              color: '#FFFFFF',
            }}
          >
            REQUEST DEMO
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default NewSection;
