import Link from 'next/link';

interface LogoProps {
  variant?: 'default' | 'white' | 'compact';
}

export default function Logo({ variant = 'default' }: LogoProps) {
  const isWhite = variant === 'white';
  const isCompact = variant === 'compact';

  return (
    <Link href="/" className="flex items-center hover:opacity-90 transition-opacity">
      <span className="text-xl sm:text-2xl font-black leading-tight tracking-tight">
        <span className={isWhite ? 'text-sky-300' : 'text-sky-600'}>Yacht</span>
        <span className={isWhite ? 'text-white' : 'text-slate-900'}>Insurance</span>
        {!isCompact && (
          <span className={`font-normal text-sm sm:text-sm ${isWhite ? 'text-sky-400/80' : 'text-slate-400'}`}>.co.nz</span>
        )}
      </span>
    </Link>
  );
}
