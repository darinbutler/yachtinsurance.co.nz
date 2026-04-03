'use client';

import { useEffect, useRef, useState } from 'react';

interface StatItem {
  value: string;
  label: string;
  target: number;
}

const stats: StatItem[] = [
  {
    value: '12,000+',
    label: 'NZ Vessels Covered',
    target: 12000,
  },
  {
    value: '$2.5M+',
    label: 'Average Claims Paid Annually',
    target: 2500000,
  },
  {
    value: '15+',
    label: 'Insurance Partners',
    target: 15,
  },
  {
    value: '4.8/5',
    label: 'Customer Rating',
    target: 48,
  },
];

function CountUpStat({ target, isMoney = false, isRating = false, isPercent = false }: { target: number; isMoney?: boolean; isRating?: boolean; isPercent?: boolean }) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const duration = 2500;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const easeOutQuad = (t: number) => t * (2 - t);
      const easedProgress = easeOutQuad(progress);

      start = Math.floor(easedProgress * target);
      setCount(start);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(animate);
  }, [hasStarted, target]);

  const formatValue = () => {
    if (isPercent) {
      return `${count}%`;
    }
    if (isRating) {
      return (count / 10).toFixed(1);
    }
    if (isMoney) {
      if (count >= 1000000) {
        return `$${(count / 1000000).toFixed(1)}M+`;
      }
      if (count >= 1000) {
        return `$${(count / 1000).toFixed(0)}K+`;
      }
    }
    if (count >= 1000000) {
      return `${(count / 1000000).toFixed(1)}M+`;
    }
    return count.toLocaleString() + '+';
  };

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold text-sky-600">
      {formatValue()}
    </div>
  );
}

export default function AnimatedStats() {
  return (
    <section className="py-12 md:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Why Choose Yacht Insurance?
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            New Zealand has 1.6 million recreational vessels and the highest boat ownership per capita in the world — yet insurance isn't compulsory. We help Kiwi boat owners find the right cover.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {/* Stat 1: NZ Recreational Vessels */}
          <div className="bg-white rounded-xl p-6 sm:p-8 text-center shadow-sm hover:shadow-md transition-shadow border border-slate-100">
            <CountUpStat target={1600000} />
            <p className="text-slate-600 mt-3 font-medium text-sm">NZ Recreational Vessels</p>
          </div>

          {/* Stat 2: Boat Owners Insured */}
          <div className="bg-white rounded-xl p-6 sm:p-8 text-center shadow-sm hover:shadow-md transition-shadow border border-slate-100">
            <CountUpStat target={87} isPercent />
            <p className="text-slate-600 mt-3 font-medium text-sm">Of Boat Owners Insured</p>
          </div>

          {/* Stat 3: Insurance Partners */}
          <div className="bg-white rounded-xl p-6 sm:p-8 text-center shadow-sm hover:shadow-md transition-shadow border border-slate-100">
            <CountUpStat target={15} />
            <p className="text-slate-600 mt-3 font-medium text-sm">NZ Insurance Partners</p>
          </div>

          {/* Stat 4: NZ Boat Ownership Per Capita */}
          <div className="bg-white rounded-xl p-6 sm:p-8 text-center shadow-sm hover:shadow-md transition-shadow border border-slate-100">
            <CountUpStat target={21} isPercent />
            <p className="text-slate-600 mt-3 font-medium text-sm">NZ Boat Ownership Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
}
