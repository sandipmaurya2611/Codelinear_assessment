import React from 'react';
import cb7Logo from '../../assets/solution-cb7.png';
import n7Logo from '../../assets/solution-n7.png';
import openBankingLogo from '../../assets/solution-open-banking.png';
import loanOriginationLogo from '../../assets/solution-loan-origination.png';
import loanManagementLogo from '../../assets/solution-loan-management.png';

/**
 * SolutionCard — compact fixed-size card for the solutions layout.
 *
 * @param {object} props
 * @param {string} props.icon
 * @param {string} props.title
 * @param {string} props.description
 * @param {string} [props.tag]
 */
const iconImageByType = {
  spinner: cb7Logo,
  cross: n7Logo,
  atom: openBankingLogo,
  spark: loanOriginationLogo,
  knot: loanManagementLogo,
};

const SolutionCard = ({ icon, title, description, tag }) => (
  <article
    className="group relative w-full max-w-[268px] flex flex-col gap-[26px]"
  >
    <div className="h-[26px] w-full flex items-start justify-between">
      <img
        src={iconImageByType[icon] || cb7Logo}
        alt=""
        aria-hidden="true"
        className="w-[26px] h-[26px] object-contain"
      />
      {tag ? (
        <span
          className="uppercase"
          style={{
            fontFamily: "'Archivo', sans-serif",
            fontWeight: 500,
            fontSize: '10px',
            lineHeight: '120%',
            color: '#A7B9C3',
            letterSpacing: '0.04em',
          }}
        >
          {tag}
        </span>
      ) : null}
    </div>

    <h3
      style={{
        fontFamily: "'Archivo', sans-serif",
        fontWeight: 400,
        fontSize: '22px',
        lineHeight: '120%',
        letterSpacing: '0%',
        color: '#E9F4F9',
      }}
    >
      {title}
    </h3>

    <p
      className="w-full"
      style={{
        fontFamily: "'Archivo', sans-serif",
        fontWeight: 400,
        fontSize: '16px',
        lineHeight: '130%',
        letterSpacing: '0%',
        color: '#E9F4F9',
        opacity: 0.7,
      }}
    >
      {description}
    </p>

    <div className="mt-auto">
      <a
        href="#"
        className="inline-flex items-center gap-2 uppercase border-b border-[#00B4FD] pb-[2px]
                   text-[#00B4FD] transition-all duration-300 ease-out group-hover:translate-x-1"
        style={{
          fontFamily: "'Chivo Mono', monospace",
          fontWeight: 400,
          fontSize: '14px',
          lineHeight: '130%',
          letterSpacing: '0%',
        }}
      >
        Learn More
        <span aria-hidden="true">→</span>
      </a>
    </div>
  </article>
);

export default SolutionCard;
