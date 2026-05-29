import React from 'react';

/**
 * Button — reusable, variant-driven button component.
 *
 * Variants
 * ─────────
 * "primary-cta"  White bg, gradient text; hover → gradient bg, white text.
 *                Matches .btn-primary-cta CSS class.
 * "contact"      Transparent bg, light border; hover → white bg, dark text.
 *                Matches .btn-contact CSS class.
 * "nav-demo"     Slim pill for the navigation bar.
 *                Matches .btn-nav-demo CSS class.
 *
 * @param {object}  props
 * @param {'primary-cta'|'contact'|'nav-demo'} props.variant
 * @param {string}  [props.href]          - Renders <a> when provided, else <button>.
 * @param {string}  [props.className]     - Extra classes appended.
 * @param {Function}[props.onClick]
 * @param {object}  [props.style]
 * @param {React.ReactNode} props.children
 */
const Button = ({ variant = 'primary-cta', href, className = '', onClick, style, children }) => {
  const variantClass = {
    'primary':     'btn-primary',
    'primary-cta': 'btn-primary-cta',
    'contact':     'btn-contact',
    'nav-demo':    'btn-nav-demo',
  }[variant] ?? 'btn-primary-cta';

  const combinedClass = `${variantClass} ${className}`.trim();

  if (href) {
    return (
      <a href={href} className={combinedClass} onClick={onClick} style={style}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={combinedClass} onClick={onClick} style={style}>
      {children}
    </button>
  );
};

export default Button;
