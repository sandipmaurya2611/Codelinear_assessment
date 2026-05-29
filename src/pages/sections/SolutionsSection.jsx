import React from 'react';
import Button from '../../components/ui/Button.jsx';
import SolutionCard from '../../components/sections/SolutionCard.jsx';
import { SOLUTIONS } from '../../constants/data';

/**
 * SolutionsSection — "All of our solutions are tailor-made to your needs"
 *
 * Layout (Figma spec):
 *   Left block  → heading + "Request Demo" CTA  (433 × 185 px, gap 48 px)
 *   Right block → 2-column solutions grid
 */
const SolutionsSection = () => (
  <section
    className="py-12 px-6 lg:py-[47.09px] lg:px-20 relative"
    style={{ background: '#000D12' }}
    id="solutions"
  >
    <div className="max-w-container-max mx-auto flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-16">

      {/* ── Left: Heading + CTA ──────────────────────────────────────── */}
      <div
        className="flex flex-col text-left justify-between w-full lg:w-[433px] lg:h-[185px]"
        style={{ gap: '48px', flexShrink: 0 }}
      >
        <h2
          className="w-full lg:w-[433px] text-[28px] md:text-[33px] lg:text-[37px]"
          style={{
            fontFamily: "'Archivo', sans-serif",
            fontWeight: 400,
            lineHeight: '120%',
            letterSpacing: '-0.01em',
            color: '#E9F4F9',
            margin: 0,
          }}
        >
          All of our solutions are tailor-made to your needs
        </h2>

        <Button
          variant="primary-cta"
          href="#"
          className="flex items-center justify-center w-[226px] h-[49px]"
          style={{ padding: '15px 59px', boxSizing: 'border-box', textDecoration: 'none' }}
        >
          <span
            className="gradient-text"
            style={{
              width: 'auto',
              height: '19px',
              fontFamily: "'Chivo Mono', monospace",
              fontWeight: 400,
              fontSize: '15px',
              lineHeight: '130%',
              textTransform: 'uppercase',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              whiteSpace: 'nowrap',
            }}
          >
            REQUEST DEMO
          </span>
        </Button>
      </div>

      {/* ── Right: Solutions grid ────────────────────────────────────── */}
      <div
        className="w-full lg:w-auto lg:max-w-[613px] grid grid-cols-1 md:grid-cols-2
                   justify-items-start content-start"
        style={{ rowGap: '48px', columnGap: '48px' }}
      >
        {SOLUTIONS.map((solution) => (
          <SolutionCard key={solution.id} {...solution} />
        ))}
      </div>

    </div>
  </section>
);

export default SolutionsSection;
