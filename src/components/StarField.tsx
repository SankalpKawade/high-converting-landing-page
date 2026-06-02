import { useMemo } from 'react';

// Generate random box-shadow positions for stars
const generateBoxShadows = (n: number, maxW: number, maxH: number, color: string) => {
  let value = `${Math.floor(Math.random() * maxW)}px ${Math.floor(Math.random() * maxH)}px ${color}`;
  for (let i = 2; i <= n; i++) {
    value += `, ${Math.floor(Math.random() * maxW)}px ${Math.floor(Math.random() * maxH)}px ${color}`;
  }
  return value;
};

interface StarFieldProps {
  /** Speed multiplier. Higher = faster stars. */
  speed?: number;
  /** Number of small stars */
  starsSmall?: number;
  /** Number of medium stars */
  starsMedium?: number;
  /** Number of large stars */
  starsLarge?: number;
  /** Overall opacity of the star field */
  opacity?: number;
  /** Color of the stars */
  starColor?: string;
}

export default function StarField({
  speed = 1,
  starsSmall = 120,
  starsMedium = 50,
  starsLarge = 20,
  opacity = 0.4,
  starColor = '#00f2ff', // Default to bright cyan
}: StarFieldProps) {
  // Use a brighter color and multiply the passed opacity to make it more visible
  const effectiveOpacity = Math.min(1, opacity * 2.5); // Boost opacity significantly

  const shadowsSmall = useMemo(() => generateBoxShadows(starsSmall, 800, 800, starColor), [starsSmall, starColor]);
  const shadowsMedium = useMemo(() => generateBoxShadows(starsMedium, 800, 800, starColor), [starsMedium, starColor]);
  const shadowsLarge = useMemo(() => generateBoxShadows(starsLarge, 800, 800, starColor), [starsLarge, starColor]);

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden" style={{ opacity: effectiveOpacity }}>
      <style>{`
        @keyframes starDrift {
          from { transform: translateY(0px); }
          to { transform: translateY(-800px); }
        }
      `}</style>

      {/* Layer 1 — small stars */}
      <div
        className="absolute left-0 top-0 w-[1px] h-[1px] bg-transparent"
        style={{
          boxShadow: shadowsSmall,
          animation: `starDrift ${50 / speed}s linear infinite`,
          willChange: 'transform',
          transform: 'translateZ(0)',
        }}
      >
        <div
          className="absolute top-[800px] w-[1px] h-[1px] bg-transparent"
          style={{ boxShadow: shadowsSmall }}
        />
      </div>

      {/* Layer 2 — medium stars */}
      <div
        className="hidden sm:block absolute left-0 top-0 w-[2px] h-[2px] bg-transparent"
        style={{
          boxShadow: shadowsMedium,
          animation: `starDrift ${100 / speed}s linear infinite`,
          willChange: 'transform',
          transform: 'translateZ(0)',
        }}
      >
        <div
          className="absolute top-[800px] w-[2px] h-[2px] bg-transparent"
          style={{ boxShadow: shadowsMedium }}
        />
      </div>

      {/* Layer 3 — large stars */}
      <div
        className="hidden sm:block absolute left-0 top-0 w-[3px] h-[3px] bg-transparent"
        style={{
          boxShadow: shadowsLarge,
          animation: `starDrift ${150 / speed}s linear infinite`,
          willChange: 'transform',
          transform: 'translateZ(0)',
        }}
      >
        <div
          className="absolute top-[800px] w-[3px] h-[3px] bg-transparent"
          style={{ boxShadow: shadowsLarge }}
        />
      </div>
    </div>
  );
}
