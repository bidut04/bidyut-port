import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '../lib/gsap';
import { resumeData } from '../data/resume';

export const SkillsPills: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) return;

      const pills = containerRef.current?.querySelectorAll('.skill-pill');
      if (pills && pills.length > 0) {
        gsap.from(pills, {
          y: 30,
          opacity: 0,
          scale: 0.9,
          stagger: 0.05,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 85%',
          },
        });
      }
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="space-y-6">

      {/* Structured Technical Capabilities */}
      <div className="space-y-4">
        <div className="flex items-center justify-between pb-2 border-b-2 border-border">
          <h4 className="font-display uppercase text-primary text-base sm:text-lg tracking-wider flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-accent" />
            <span>Technical Stack &amp; Capabilities</span>
          </h4>
          <span className="text-[11px] font-display uppercase tracking-widest bg-ink text-white px-2.5 py-0.5 rounded-full shadow-sm">
            6 DOMAINS
          </span>
        </div>

        {/* 6 Category Cards Grid */}
        <div className="space-y-3.5">
          {resumeData.categories.map((cat, i) => (
            <div
              key={i}
              className={`p-4 sm:p-5 rounded-2xl border-2 border-ink shadow-sticker transition-transform hover:-translate-y-0.5 ${
                i % 2 === 0 ? 'bg-[#B9CCFF]' : 'bg-[#FFFDF8]'
              }`}
            >
              {/* Category Header */}
              <div className="flex items-center justify-between gap-2 mb-1.5">
                <h5 className="font-display uppercase text-ink text-xs sm:text-sm font-black tracking-wide">
                  {cat.title}
                </h5>
                <span className="text-[10px] font-display font-bold uppercase tracking-wider bg-pop text-ink px-2 py-0.5 rounded-full border border-ink shadow-sm">
                  {cat.badge}
                </span>
              </div>

              {/* Meaningful Contextual Description */}
              <p className="font-body text-xs text-[#2A2A2A] mb-3 leading-snug">
                {cat.description}
              </p>

              {/* Individual Skill Pills */}
              <div className="flex flex-wrap gap-1.5">
                {cat.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="skill-pill inline-block px-2.5 py-1 bg-white border border-ink rounded-full text-xs font-body font-bold text-ink shadow-[1.5px_1.5px_0px_#1A1A1A] hover:bg-pop transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

