import React from 'react';
import maskGroupImg from '../../assets/Mask group (3).png';

/**
 * Footer — responsive footer with address columns, link sections, and copyright.
 */

const ArrowIcon = ({ className = '' }) => (
  <svg
    width="14" height="15" viewBox="0 0 14 15" fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`text-[#00B4FD] transition-transform duration-300 group-hover:translate-x-1 flex-shrink-0 ${className}`}
    style={{
      width: '13.568845748901419px',
      height: '14.504626274108942px',
      transform: 'rotate(0deg)',
      opacity: 1
    }}
  >
    <path d="M1 7.5H13M13 7.5L7 1.5M13 7.5L7 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const FooterLink = ({ name, href, arrowPosition = 'right' }) => (
  <a
    href={href || `#${name.replace(/\s+/g, '-').toLowerCase()}`}
    className="group flex items-center justify-between w-full transition-colors duration-300 hover:opacity-100"
    style={{
      fontFamily: "'Archivo', sans-serif",
      fontWeight: 400,
      fontSize: '16px',
      textDecoration: 'none',
    }}
  >
    {arrowPosition === 'left' && <ArrowIcon />}
    <span>{name}</span>
    {arrowPosition === 'right' && <ArrowIcon />}
  </a>
);

const AddressBlock = ({ title, address }) => (
  <div className="flex flex-col gap-4">
    <h4
      style={{
        fontFamily: "'Archivo', sans-serif",
        fontWeight: 500,
        fontSize: '16px',
        lineHeight: '130%',
        color: '#E9F4F9',
        margin: 0,
      }}
    >
      {title}
    </h4>
    <p
      style={{
        fontFamily: "'Archivo', sans-serif",
        fontWeight: 400,
        fontSize: '16px',
        lineHeight: '130%',
        color: '#E9F4F9',
        opacity: 0.7,
        margin: 0,
      }}
    >
      {address}
    </p>
  </div>
);

const LinkColumn = ({ title, links, arrowPosition = 'right' }) => (
  <div
    className="flex flex-col"
    style={{
      width: '164.01904296875px',
      height: '276px',
      gap: '16px',
      opacity: 1,
    }}
  >
    <h4
      style={{
        fontFamily: "'Archivo', sans-serif",
        fontWeight: 500,
        fontSize: '16px',
        lineHeight: '130%',
        color: '#E9F4F9',
        margin: 0,
      }}
    >
      {title}
    </h4>
    <div className="flex flex-col" style={{ gap: '16px' }}>
      {links.map((name) => (
        <FooterLink key={name} name={name} arrowPosition={arrowPosition} />
      ))}
    </div>
  </div>
);

const Footer = () => (
  <footer
    className="relative w-full overflow-hidden py-12 md:py-16 lg:py-20 px-5 md:px-10 lg:px-14"
    style={{
      background: '#000D12',
      maxWidth: '1440px',
      margin: '0 auto',
      boxSizing: 'border-box',
    }}
  >
    <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
      {/* Left: Image */}
      <div className="w-full lg:w-[30%] flex-shrink-0">
        <img
          src={maskGroupImg}
          alt="Footer graphic"
          className="w-full max-w-[440px] h-auto object-cover"
          loading="lazy"
        />
      </div>

      {/* Right: Navigation Columns */}
      <div className="w-full lg:w-[70%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-8">

        {/* Column 1: London + Solutions */}
        <div 
          className="flex flex-col"
          style={{
            width: '268.5060729980469px',
            height: '504px',
            opacity: 1,
            gap: '128px'
          }}
        >
          <AddressBlock
            title="London"
            address="Linktia Infosystems Ltd – CB7, 26 Main Road Sundridge, TN14 6EP, England, United Kingdom."
          />
          <LinkColumn
            title="Solutions"
            links={[
              'Core Banking CB7',
              'Digital Banking N7',
              'Open Banking',
              'Loan Origination System',
              'Loan Management System',
              'Digital Transformation',
            ]}
          />
        </div>

        {/* Column 2: Dubai + N7 Banking */}
        <div className="flex flex-col gap-10 md:gap-16">
          <AddressBlock
            title="Dubai"
            address="Linktia Infosystems Ltd – CB7, Jumeirah Business, Center 5 Cluster W, Jumeirah Lakes Towers, Dubai, United Arab Emirates"
          />
          <LinkColumn
            title="N7 Banking"
            links={[
              'About Us',
              'Solutions',
              'Contact',
              'Company',
              'Careers',
              'Insights',
              'Core Team',
              'Brand Center',
            ]}
          />
        </div>

        {/* Column 3: Pune + Socials */}
        <div className="flex flex-col gap-10 md:gap-16">
          <AddressBlock
            title="Pune"
            address="Linktia Infosystems Ltd – CB7, Nirmal, Anand Nagar, Suncity Road, Pune, Maharashtra, 411041, India"
          />
          <LinkColumn
            title="Our Socials"
            links={['LinkedIn', 'X']}
          />
        </div>
      </div>
    </div>

    {/* Copyright Notice */}
    <div className="mt-10 md:mt-16 pt-6 border-t border-white/10">
      <p
        className="text-[12px] md:text-[14px]"
        style={{
          fontFamily: "'Archivo', sans-serif",
          fontWeight: 400,
          lineHeight: '130%',
          color: '#E9F4F9',
          opacity: 0.3,
          margin: 0,
        }}
      >
        Copyright © 2022 by Linktia Infosystems Limited — [CB7 and N7 as Commercial Brand] — [Registered under the Companies Act 2006 in England and Wales | Number of Incorporation 13100992]
      </p>
    </div>
  </footer>
);

export default Footer;
