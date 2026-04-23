'use client';

import { useEffect, useRef, useState } from 'react';
import { BarChart3, CircleDollarSign, Compass, ShieldCheck } from 'lucide-react';

const trustItems = [
  { value: 'Multiple', label: 'Insurers Compared', icon: BarChart3, countTo: null },
  { value: 'Zero', label: 'Brokerage Fees', icon: CircleDollarSign, countTo: null },
  { value: 'Expert', label: 'Maritime Advice', icon: Compass, countTo: null },
  { value: 'ICNZ', label: 'Registered', icon: ShieldCheck, countTo: null },
];

function CountUp({ target, duration = 1200 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const steps = 30;
    const increment = target / steps;
    const stepTime = duration / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepTime);
    return () => clearInterval(timer);
  }, [started, target, duration]);

  return <span ref={ref}>{count}+</span>;
}

export default function AnimatedTrustBar() {
  const [isVisible, setIsVisible] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );
    if (barRef.current) observer.observe(barRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={barRef} className="relative z-10 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-8 mt-8 sm:mt-0">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`
                  relative overflow-hidden rounded-xl
                  bg-sky-700/90 backdrop-blur-lg border border-sky-400/30
                  px-4 py-4 sm:py-5
                  text-center
                  transition-all duration-700 ease-out
                  hover:bg-sky-600/95 hover:border-sky-300/50 hover:scale-[1.03]
                  group cursor-default shadow-lg shadow-sky-900/20
                  ${isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-6'
                  }
                `}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Shimmer effect on hover */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/15 to-transparent" />

                {/* Icon */}
                <div
                  className={`
                    mx-auto mb-2 w-10 h-10 sm:w-11 sm:h-11
                    rounded-full bg-white/15 border border-white/25
                    flex items-center justify-center
                    transition-all duration-500
                    group-hover:bg-white/25 group-hover:border-white/40 group-hover:scale-110
                    ${isVisible ? 'scale-100' : 'scale-50'}
                  `}
                  style={{ transitionDelay: `${index * 150 + 300}ms` }}
                >
                  <Icon className="w-5 h-5 sm:w-5.5 sm:h-5.5 text-sky-100 group-hover:text-white transition-colors duration-300" />
                </div>

                {/* Value */}
                <p className="text-xl sm:text-2xl font-bold text-white leading-tight">
                  {item.countTo !== null ? (
                    <CountUp target={item.countTo} />
                  ) : (
                    item.value
                  )}
                </p>

                {/* Label */}
                <p className="text-xs sm:text-sm text-sky-100/90 mt-0.5 font-medium tracking-wide">
                  {item.label}
                </p>

                {/* Subtle glow at bottom */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-sky-300/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
