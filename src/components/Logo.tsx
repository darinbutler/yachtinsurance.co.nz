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
            <linearGradient id="anchorGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0284c7" />
              <stop offset="100%" stopColor="#14b8a6" />
            </linearGradient>
          </defs>
          {/* Anchor design */}
          <circle
            cx="20"
            cy="20"
            r="18"
            fill="none"
            stroke="url(#anchorGradient)"
            strokeWidth="1.5"
            opacity="0.3"
          />
          {/* Anchor shaft */}
          <line
            x1="20"
            y1="6"
            x2="20"
            y2="28"
            stroke="url(#anchorGradient)"
            strokeWidth="2"
            strokeLinecap="round"
          />
          {/* Anchor flukes (anchor arms) */}
          <path
            d="M 20 28 Q 12 28 10 34"
            fill="none"
            stroke="url(#anchorGradient)"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M 20 28 Q 28 28 30 34"
            fill="none"
            stroke="url(#anchorGradient)"
            strokeWidth="2"
            strokeLinecap="round"
          />
          {/* Anchor ring */}
          <circle
            cx="20"
            cy="8"
            r="2.5"
            fill="url(#anchorGradient)"
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
