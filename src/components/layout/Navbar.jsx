import React, { useState } from 'react';
import Button from '../ui/Button.jsx';
import { NAV_LINKS } from '../../constants/data';

/**
 * Navbar — floating, glassmorphism navigation bar pinned to the top of the viewport.
 * Fully responsive with a hamburger menu on mobile.
 */
const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className="fixed top-4 md:top-[31px] left-1/2 -translate-x-1/2 z-50
                  flex flex-wrap items-center justify-between
                  w-[calc(100%-2rem)] max-w-[716.46px] h-auto md:h-[47px]
                  bg-[#2F2F2FB2] backdrop-blur-[15px]
                  rounded-[12px] py-2 md:py-[9px] px-3 md:px-[10px]
                  border border-white/10 shadow-2xl"
    >
      {/* Brand logo */}
      <div className="flex items-center pl-1 md:pl-2">
        <a
          href="#"
          className="font-archivo font-medium text-[20px] md:text-[24px] leading-[1.2] text-[#E9F4F9]
                     flex items-center justify-center tracking-normal"
          aria-label="N7 Home"
        >
          N7
        </a>
      </div>

      {/* Hamburger button — mobile only */}
      <button
        type="button"
        className="md:hidden flex flex-col gap-[5px] p-2"
        aria-label="Toggle menu"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        <span className={`block w-5 h-[2px] bg-[#E9F4F9] transition-transform duration-300 ${mobileOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
        <span className={`block w-5 h-[2px] bg-[#E9F4F9] transition-opacity duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
        <span className={`block w-5 h-[2px] bg-[#E9F4F9] transition-transform duration-300 ${mobileOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
      </button>

      {/* Primary navigation links — desktop */}
      <nav className="hidden md:flex items-center space-x-6" aria-label="Primary navigation">
        {NAV_LINKS.map(({ label, href, hasDropdown }) => (
          <a
            key={label}
            href={href}
            className="font-chivo-mono font-normal text-[12px] leading-[1.3]
                       text-[#E9F4F9]/90 hover:text-white uppercase
                       flex items-center gap-[4px] transition-colors duration-200"
          >
            {label}
            {hasDropdown && (
              <span className="material-symbols-outlined text-[11px] font-bold leading-none">
                keyboard_arrow_down
              </span>
            )}
          </a>
        ))}
      </nav>

      {/* CTA — desktop */}
      <div className="hidden md:flex pr-1 items-center">
        <Button variant="nav-demo" href="#">
          <span className="flex gap-[8px] items-center justify-center">
            <span>REQUEST</span>
            <span>DEMO</span>
          </span>
        </Button>
      </div>

      {/* Mobile menu dropdown */}
      {mobileOpen && (
        <nav
          className="md:hidden w-full flex flex-col items-center gap-4 pt-4 pb-3 border-t border-white/10 mt-2"
          aria-label="Mobile navigation"
        >
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="font-chivo-mono font-normal text-[13px] leading-[1.3]
                         text-[#E9F4F9]/90 hover:text-white uppercase
                         transition-colors duration-200"
              onClick={() => setMobileOpen(false)}
            >
              {label}
            </a>
          ))}
          <Button variant="nav-demo" href="#" className="mt-1">
            <span className="flex gap-[8px] items-center justify-center">
              <span>REQUEST</span>
              <span>DEMO</span>
            </span>
          </Button>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
