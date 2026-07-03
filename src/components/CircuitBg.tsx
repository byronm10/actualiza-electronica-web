import { motion } from 'framer-motion';

interface CircuitBgProps {
  intensity?: 'low' | 'medium' | 'high';
  className?: string;
}

export default function CircuitBg({ intensity = 'medium', className = '' }: CircuitBgProps) {
  const blobOpacity = intensity === 'high' ? 0.55 : intensity === 'medium' ? 0.4 : 0.25;

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      {/* Mesh blobs */}
      <div
        className="absolute -top-32 -left-32 h-[36rem] w-[36rem] rounded-full blur-3xl animate-blob"
        style={{ background: `radial-gradient(closest-side, hsl(191 100% 48% / ${blobOpacity}), transparent)` }}
      />
      <div
        className="absolute top-1/4 -right-40 h-[32rem] w-[32rem] rounded-full blur-3xl animate-blob"
        style={{ background: `radial-gradient(closest-side, hsl(275 92% 60% / ${blobOpacity}), transparent)`, animationDelay: '4s' }}
      />
      <div
        className="absolute -bottom-32 left-1/3 h-[30rem] w-[30rem] rounded-full blur-3xl animate-blob"
        style={{ background: `radial-gradient(closest-side, hsl(38 100% 55% / ${blobOpacity * 0.8}), transparent)`, animationDelay: '8s' }}
      />

      {/* Hex/circuit grid */}
      <div className="absolute inset-0 hex-grid opacity-70" />

      {/* Animated circuit lines */}
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
        <defs>
          <linearGradient id="cbg-line" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#2ED0FA" stopOpacity="0" />
            <stop offset="50%" stopColor="#2ED0FA" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#B060FF" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="cbg-line-2" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#B060FF" stopOpacity="0" />
            <stop offset="50%" stopColor="#B060FF" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#FFB010" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[
          'M-50 120 L280 120 L320 160 L560 160 L600 200 L900 200 L940 240 L1260 240',
          'M-50 380 L200 380 L240 340 L520 340 L560 380 L820 380 L860 340 L1260 340',
          'M-50 640 L180 640 L220 600 L440 600 L480 640 L780 640 L820 600 L1260 600',
        ].map((d, i) => (
          <motion.path
            key={i}
            d={d}
            fill="none"
            stroke={i % 2 === 0 ? 'url(#cbg-line)' : 'url(#cbg-line-2)'}
            strokeWidth="1.4"
            strokeDasharray="6 10"
            initial={{ strokeDashoffset: 0 }}
            animate={{ strokeDashoffset: -400 }}
            transition={{ duration: 18 + i * 4, ease: 'linear', repeat: Infinity }}
          />
        ))}

        {[
          [280, 120],
          [560, 160],
          [900, 200],
          [520, 340],
          [820, 380],
          [440, 600],
          [780, 640],
        ].map(([cx, cy], i) => (
          <g key={`node-${i}`}>
            <circle cx={cx} cy={cy} r="6" fill="#0AB6E4" opacity="0.85" />
            <motion.circle
              cx={cx}
              cy={cy}
              r="6"
              fill="none"
              stroke="#2ED0FA"
              strokeWidth="1.5"
              initial={{ opacity: 0.8, r: 6 }}
              animate={{ opacity: 0, r: 22 }}
              transition={{ duration: 2.6, repeat: Infinity, delay: i * 0.35 }}
            />
          </g>
        ))}
      </svg>

      {/* Noise for depth */}
      <div className="absolute inset-0 noise-overlay" />
    </div>
  );
}
