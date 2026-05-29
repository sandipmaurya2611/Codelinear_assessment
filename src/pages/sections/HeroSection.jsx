import React from 'react';
import heroImg from '../../assets/Pexels Photo by Andrea Piacquadio.jpg';
import Button from '../../components/ui/Button.jsx';
import PartnerLogo from '../../components/ui/PartnerLogo.jsx';
import TotalBalanceCard from '../../components/sections/TotalBalanceCard.jsx';
import RecentActivityCard from '../../components/sections/RecentActivityCard.jsx';
import { PARTNER_LOGOS } from '../../constants/data';

/**
 * HeroSection — full-width landing section.
 * Responsive: stacks vertically on mobile, side-by-side on desktop.
 */
const HeroSection = () => (
  <section className="pt-24 md:pt-32 pb-16 md:pb-24 px-5 md:px-8 relative overflow-hidden">
    {/* Radial gradient ambient light */}
    <div
      className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))]
                 from-[#2979FF]/10 via-transparent to-transparent pointer-events-none"
      aria-hidden="true"
    />

    <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">

      {/* ── Left: Text content ── */}
      <div className="z-10 text-left flex flex-col items-start justify-start w-full lg:w-1/2">

        {/* Headline */}
        <h1
          className="font-archivo font-medium text-[36px] md:text-[50px] lg:text-[67px] leading-[1.2]
                     tracking-[-1%] text-[#E9F4F9] max-w-[608px] text-left"
        >
          The new foundation of modern banking
        </h1>

        {/* Sub-headline */}
        <p
          className="font-archivo font-normal text-[14px] md:text-[16px] leading-[1.3]
                     text-[#E9F4F9] max-w-[356px] text-left mt-4"
          style={{ opacity: 0.8 }}
        >
          We drive innovation and growth, provide seamless customer experience
          and operational excellence
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap gap-4 pt-8 justify-start items-center">
          <Button variant="primary-cta" href="#">
            <span className="gradient-text flex gap-[8px] items-center justify-center">
              <span>REQUEST</span>
              <span>DEMO</span>
            </span>
          </Button>

          <Button variant="contact" href="#">
            <span className="flex gap-[8px] items-center justify-center">
              <span>CONTACT</span>
              <span>US</span>
            </span>
          </Button>
        </div>

        {/* Trusted-by strip */}
        <div className="pt-8 md:pt-12 border-t border-white/10 mt-8 md:mt-12 w-full flex flex-col items-start">

          <p
            style={{
              opacity: 0.7,
              fontFamily: "'Archivo', sans-serif",
              fontWeight: 500,
              fontSize: '16px',
              lineHeight: '130%',
              textTransform: 'capitalize',
              color: '#E9F4F9',
              marginBottom: '24px',
            }}
          >
            trusted by:
          </p>

          {/* Logo strip */}
          <div
            className="flex flex-wrap items-center gap-4 mt-2"
            style={{ opacity: 0.9 }}
          >
            {PARTNER_LOGOS.map((logo) => (
              <PartnerLogo key={logo.id} {...logo} />
            ))}
          </div>
        </div>
      </div>

      {/* ── Right: Hero image + floating cards ── */}
      <div className="relative w-full lg:w-1/2 flex items-center justify-center min-h-[300px] md:min-h-[400px]">
        {/* Blue glow backdrop */}
        <div
          className="absolute rounded-full pointer-events-none z-0"
          aria-hidden="true"
          style={{
            width: 'clamp(200px, 60%, 399px)',
            aspectRatio: '1',
            opacity: 0.5,
            background: 'linear-gradient(103.43deg, #00B4FD -1.02%, #003ACE 83.53%)',
            filter: 'blur(100px)',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />

        {/* Hero photo */}
        <div
          className="relative overflow-hidden border border-white/10 shadow-2xl z-10
                     w-[260px] h-[216px] md:w-[363px] md:h-[301px]"
          style={{ borderRadius: '31px' }}
        >
          <img
            src={heroImg}
            alt="Young woman using phone with laptop"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Card 1 — Total Balance */}
        <div className="hidden md:block">
          <TotalBalanceCard />
        </div>

        {/* Card 2 — Recent Activity */}
        <div className="hidden md:block">
          <RecentActivityCard />
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
