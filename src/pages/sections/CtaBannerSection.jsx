import React from 'react';

/**
 * CtaBannerSection — full-width blue call-to-action band with watermark "N7".
 */
const CtaBannerSection = () => (
  <section
    className="py-24 bg-[#2979FF] relative overflow-hidden flex flex-col items-center text-center px-8"
    id="cta"
  >
    {/* Background watermark */}
    <div
      className="absolute inset-0 opacity-10 flex items-center justify-center select-none pointer-events-none"
      aria-hidden="true"
    >
      <span className="font-bold text-[300px] leading-none text-white mix-blend-overlay">N7</span>
    </div>

    {/* Content */}
    <div className="relative z-10 max-w-3xl space-y-8">
      <h2 className="font-headline-lg text-headline-lg text-white">
        Take the full advantage of going paper-less now.
      </h2>

      <a
        href="#"
        className="inline-block px-8 py-3 rounded-full border-2 border-white
                   text-white font-body-md font-semibold
                   hover:bg-white hover:text-[#2979FF] transition-colors"
      >
        START YOUR TRANSFORMATION
      </a>
    </div>
  </section>
);

export default CtaBannerSection;
