/**
 * Brand mark — an orbit: a ring broken by a gap with a satellite dot sitting
 * in it. Uses `currentColor`, so it takes the colour of whatever it sits in.
 */
const LogoMark = ({ className = "" }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" aria-hidden="true">
    <circle
      cx="32"
      cy="32"
      r="20"
      stroke="currentColor"
      strokeWidth="9.5"
      strokeDasharray="98 27.66"
    />
    <circle cx="47" cy="19" r="8" fill="currentColor" />
  </svg>
);

export default LogoMark;
