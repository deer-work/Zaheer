export const CircuitBackground = () => {
  return (
    <div className="fixed inset-0 z-0 opacity-5 pointer-events-none">
      <svg className="h-full w-full" viewBox="0 0 800 800">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="cyan" strokeWidth="0.5" />
          </pattern>
          <linearGradient id="circuit-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(6, 182, 212, 0.3)" />
            <stop offset="100%" stopColor="rgba(168, 85, 247, 0.3)" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />

        {/* Circuit Lines */}
        <path
          d="M 100 100 L 300 100 L 300 300 L 500 300 L 500 500 L 700 500"
          stroke="url(#circuit-gradient)"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M 100 700 L 300 700 L 300 500 L 500 500"
          stroke="url(#circuit-gradient)"
          strokeWidth="2"
          fill="none"
        />
        <path d="M 700 100 L 500 100 L 500 300" stroke="url(#circuit-gradient)" strokeWidth="2" fill="none" />

        {/* Circuit Nodes */}
        <circle cx="100" cy="100" r="5" fill="#06b6d4" />
        <circle cx="300" cy="100" r="5" fill="#06b6d4" />
        <circle cx="300" cy="300" r="5" fill="#06b6d4" />
        <circle cx="500" cy="300" r="5" fill="#06b6d4" />
        <circle cx="500" cy="500" r="5" fill="#06b6d4" />
        <circle cx="700" cy="500" r="5" fill="#06b6d4" />
        <circle cx="100" cy="700" r="5" fill="#a855f7" />
        <circle cx="300" cy="700" r="5" fill="#a855f7" />
        <circle cx="300" cy="500" r="5" fill="#a855f7" />
        <circle cx="700" cy="100" r="5" fill="#a855f7" />
        <circle cx="500" cy="100" r="5" fill="#a855f7" />
      </svg>
    </div>
  );
};

export default CircuitBackground; 