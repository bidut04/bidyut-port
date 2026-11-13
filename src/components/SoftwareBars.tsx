import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '../lib/gsap';
import { resumeData } from '../data/resume';

export const SoftwareBars: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) return;

      const progressBars = containerRef.current?.querySelectorAll<HTMLElement>('.software-progress');

      if (progressBars && progressBars.length > 0) {
        progressBars.forEach((bar) => {
          const targetWidth = bar.getAttribute('data-level') || '0';
          gsap.fromTo(
            bar,
            { width: '0%' },
            {
              width: `${targetWidth}%`,
              duration: 1.2,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 85%',
                once: true,
              },
            }
          );
        });
      }
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="bg-white p-5 sm:p-6 rounded-3xl border-2 border-border shadow-sm">
      <h4 className="font-display uppercase text-primary text-sm tracking-widest mb-5 flex items-center justify-between">
        <span>Software Proficiency</span>
        <span className="font-display text-xs text-accent">LEVEL %</span>
      </h4>

      <div className="space-y-4">
        {resumeData.software.map((item, index) => (
          <div key={index} className="space-y-1.5">
            <div className="flex justify-between items-center text-xs sm:text-sm font-body">
              <span className="font-bold text-ink">{item.name}</span>
              <span className="font-display text-accent font-bold">{item.percentage}%</span>
            </div>

            {/* Track */}
            <div className="w-full h-3 bg-[#E2DFD8] rounded-full overflow-hidden border border-border/80">
              {/* Animated Progress Bar */}
              <div
                className="software-progress h-full bg-accent rounded-full will-change-[width]"
                data-level={item.percentage}
                style={{ width: '0%' }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

