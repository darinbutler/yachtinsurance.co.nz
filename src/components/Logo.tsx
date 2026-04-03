import Link from 'next/link';

interface LogoProps {
  variant?: 'default' | 'white' | 'compact';
}

export default function Logo({ variant = 'default' }: LogoProps) {
  const isWhite = variant === 'white';
  const isCompact = variant === 'compact';

  return (
    <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
      <div className="flex-shrink-0">
        <svg
          className={`${isCompact ? 'w-6 h-6 sm:w-8 sm:h-8' : 'w-8 h-8 sm:w-10 sm:h-10'}`}
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="yachtGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0284c7" />
              <stop offset="100%" stopColor="#14b8a6" />
            </linearGradient>
          </defs>
          {/* Yacht hull */}
          <path
            d="M 6 28 Q 8 32 20 32 Q 32 32 34 28 L 32 28 Q 30 30 20 30 Q 10 30 8 28 Z"
            fill="url(#yachtGradient)"
          />
          {/* Mast */}
          <line
            x1="18"
            y1="6"
            x2="18"
            y2="28"
            stroke="url(#yachtGradient)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          {/* Main sail */}
          <path
            d="M 19 7 L 33 25 L 19 27 Z"
            fill="url(#yachtGradient)"
            opacity="0.7"
          />
          {/* Jib sail */}
          <path
            d="M 17 8 L 7 25 L 17 26 Z"
            fill="url(#yachtGradient)"
            opacity="0.5"
          />
          {/* Water line */}
          <path
            d="M 3 34 Q 8 31 13 34 Q 18 37 23 34 Q 28 31 33 34 Q 35 35 37 34"
            fill="none"
            stroke="url(#yachtGradient)"
            strokeWidth="1.2"
            strokeLinecap="round"
            opacity="0.4"
          />
        </svg>
      </div>

      {!isCompact && (
        <div className="flex flex-col gap-0">
          <span
            className={`text-[13px] sm:text-[17px] font-bold tracking-wider leading-tight ${
              isWhite ? 'text-white' : 'text-slate-900'
            }`}
          >
            YACHT
          </span>
          <span
            className={`text-[13px] sm:text-[17px] font-bold tracking-wider leading-tight ${
              isWhite ? 'text-white' : 'text-slate-900'
            }`}
          >
            INSURANCE
          </span>
        </div>
      )}
    </Link>
  );
}
