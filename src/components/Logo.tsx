import Link from 'next/link';

interface LogoProps {
  variant?: 'default' | 'white' | 'compact';
}

export default function Logo({ variant = 'default' }: LogoProps) {
  const isWhite = variant === 'white';
  const isCompact = variant === 'compact';

  return (
    <Link href="/" className="flex items-center gap-2.5 hover:opacity-90 transition-opacity">
      <div className="flex-shrink-0">
        <svg
          className={`${isCompact ? 'w-7 h-7 sm:w-9 sm:h-9' : 'w-9 h-9 sm:w-11 sm:h-11'}`}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="sailGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0284c7" />
              <stop offset="50%" stopColor="#0ea5e9" />
              <stop offset="100%" stopColor="#14b8a6" />
            </linearGradient>
            <linearGradient id="hullGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0369a1" />
              <stop offset="100%" stopColor="#0e7490" />
            </linearGradient>
          </defs>
          {/* Main sail - large, filled with gradient */}
          <path
            d="M 22 5 C 22 5 36 18 36 30 L 22 30 Z"
            fill="url(#sailGrad)"
            opacity="0.85"
          />
          {/* Jib sail - smaller front sail */}
          <path
            d="M 20 10 C 20 10 10 22 8 30 L 20 30 Z"
            fill="url(#sailGrad)"
            opacity="0.55"
          />
          {/* Mast line */}
          <line
            x1="21"
            y1="4"
            x2="21"
            y2="31"
            stroke={isWhite ? '#ffffff' : '#0c4a6e'}
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          {/* Hull - solid, boat-shaped */}
          <path
            d="M 5 32 L 8 30 L 38 30 L 41 32 Q 36 38 24 38 Q 10 38 5 32 Z"
            fill="url(#hullGrad)"
          />
          {/* Hull highlight line */}
          <path
            d="M 10 33 Q 24 36 36 33"
            fill="none"
            stroke="white"
            strokeWidth="0.8"
            opacity="0.4"
          />
          {/* Water waves */}
          <path
            d="M 2 40 Q 7 37.5 12 40 Q 17 42.5 22 40 Q 27 37.5 32 40 Q 37 42.5 42 40 Q 44 39 46 40"
            fill="none"
            stroke="url(#sailGrad)"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.35"
          />
        </svg>
      </div>

      {!isCompact && (
        <div className="flex flex-col gap-0">
          <span
            className={`text-[14px] sm:text-[18px] font-extrabold tracking-[0.15em] leading-tight ${
              isWhite ? 'text-white' : 'text-sky-700'
            }`}
            style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
          >
            YACHT
          </span>
          <span
            className={`text-[10px] sm:text-[12px] font-semibold tracking-[0.25em] leading-tight ${
              isWhite ? 'text-sky-200' : 'text-slate-500'
            }`}
            style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
          >
            INSURANCE
          </span>
        </div>
      )}
    </Link>
  );
}
