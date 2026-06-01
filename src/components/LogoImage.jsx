
export default function LogoImage() {
  return (
    <svg
      width="180"
      height="48"
      viewBox="0 0 180 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="select-none cursor-pointer filter drop-shadow-[0_0_15px_rgba(93,202,165,0.12)]"
    >
      <defs>
        {/* Glowing Linear Gradients for Depth */}
        <linearGradient id="rks-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f0f4f8" />
          <stop offset="60%" stopColor="#5DCAA5" />
          <stop offset="100%" stopColor="#EF9F27" />
        </linearGradient>
        <linearGradient id="accent-glow" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#5DCAA5" stopOpacity="1" />
          <stop offset="100%" stopColor="#5DCAA5" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Complex Abstract Geometric Badge Background */}
      <path d="M6 14 L14 6 H38 L46 14 V34 L38 42 H14 L6 34 Z" fill="#0b1322" stroke="url(#rks-grad)" strokeWidth="1.5" />

      {/* Decorative Grid Hatching Marks */}
      <line x1="8" y1="12" x2="12" y2="8" stroke="#5DCAA5" strokeWidth="1" opacity="0.4" />
      <line x1="40" y1="40" x2="44" y2="36" stroke="#EF9F27" strokeWidth="1" opacity="0.4" />

      {/* Stylized Interlocking R-K-S Vector Line Structure */}
      {/* The Unified Vertical Column */}
      <rect x="17" y="13" width="3.5" height="22" rx="1" fill="#f0f4f8" />
      {/* The R Loop & Kick */}
      <path d="M20.5 13 H28 C31 13 32 15 32 18 C32 21 30 22 27 22 H20.5" stroke="#f0f4f8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      {/* The Interlocking K Arm & S Swipe */}
      <path d="M24 22 L31.5 14.5" stroke="#5DCAA5" strokeWidth="3" strokeLinecap="round" />
      <path d="M24.5 21.5 L33 31 C35 33 31 35 28.5 35 C25 35 24 33.5 24 33.5" stroke="url(#rks-grad)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

      {/* Premium Typography Brand Label */}
      <text x="60" y="24" fill="#f0f4f8" fontFamily="'Fira Code', monospace" fontSize="16" fontWeight="700" letterSpacing="1.5">RKS</text>
      <text x="60" y="37" fill="#64748b" fontFamily="'Fira Code', monospace" fontSize="9" fontWeight="500" letterSpacing="2">ENGINEER</text>

      {/* Sleek Horizontal Accent Rule */}
      <path d="M106 20 H150" stroke="url(#accent-glow)" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
