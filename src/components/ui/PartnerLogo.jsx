import React from 'react';

/** Shared text style applied to every partner logo label. */
const LOGO_TEXT_STYLE = {
  fontFamily: "'Roboto', 'Inter', sans-serif",
  fontWeight: 700,
  fontSize: '13.8px',
  lineHeight: '110%',
  color: '#586E84',
  letterSpacing: '0',
  verticalAlign: 'middle',
};

/**
 * PartnerLogo — renders a single partner brand in the "trusted by" strip.
 *
 * @param {object}   props
 * @param {number}   props.width       Container width (px).
 * @param {number}   props.height      Container height (px).
 * @param {number}   props.gap         Gap between icon and text (px).
 * @param {Function} props.renderIcon  Returns the brand SVG element.
 * @param {string}   [props.name]      Plain-text label (ignored when renderName is set).
 * @param {Function} [props.renderName] Returns a custom label element (e.g. WAVES MARATHON).
 */
const PartnerLogo = ({ width, height, gap, renderIcon, name, renderName }) => (
  <div
    className="flex items-center flex-shrink-0"
    style={{ width: `${width}px`, height: `${height}px`, gap: `${gap}px` }}
  >
    {renderIcon()}
    <span style={LOGO_TEXT_STYLE}>
      {renderName ? renderName() : name}
    </span>
  </div>
);

export default PartnerLogo;
