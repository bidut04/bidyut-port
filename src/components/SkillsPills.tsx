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

      {/* Languages Box */}
      <div>
        <h4 className="font-display uppercase text-primary text-sm tracking-widest mb-3 flex items-center gap-2">
          Languages
          <span className="w-2 h-2 rounded-full bg-accent" />
        </h4>
        <div className="flex flex-wrap gap-2.5">
          {resumeData.languages.map((lang, index) => (
            <span
              key={index}
              className="skill-pill inline-flex items-center gap-2 px-3.5 py-1.5 bg-white border border-border rounded-full text-xs font-body font-semibold text-ink shadow-sm"
            >
              <span>{lang.name}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="text-muted text-[11px] font-normal italic">{lang.level}</span>
            </span>
          ))}
        </div>
      </div>

      {/* Skills inside Ice-Blue (#B9CCFF) Rounded Panel */}
      <div className="bg-[#B9CCFF] p-5 sm:p-6 rounded-3xl border-2 border-ink shadow-sticker">
        <h4 className="font-display uppercase text-ink text-sm tracking-widest mb-4 flex items-center justify-between">
          <span>Creative Expertise</span>
          <span className="text-xs bg-pop text-ink px-2.5 py-0.5 rounded-full border border-ink font-bold">
            SKILLS
          </span>
        </h4>
        <div className="flex flex-wrap gap-2">
          {resumeData.skills.map((skill, index) => (
            <span
              key={index}
              className="skill-pill inline-block px-3.5 py-1.5 bg-white border border-ink rounded-full text-xs sm:text-sm font-body font-bold text-ink shadow-[2px_2px_0px_#1A1A1A] hover:bg-pop transition-colors cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

    </div>
  );
};

