import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap, ScrollTrigger } from '../lib/gsap';
import { resumeData } from '../data/resume';
import { SkillsPills } from './SkillsPills';
import { SoftwareBars } from './SoftwareBars';
import { Sticker } from './Sticker';

export const Resume: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) return;

      // 1. Script heading clip-path reveal
      if (headingRef.current) {
        gsap.fromTo(
          headingRef.current,
          { clipPath: 'inset(0 100% 0 0)' },
          {
            clipPath: 'inset(0 0% 0 0)',
            duration: 1.2,
            ease: 'power3.inOut',
            scrollTrigger: {
              trigger: headingRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // 2. Circular badge: continuous 360 rotation over 12s + scroll velocity influence
      if (badgeRef.current) {
        const rotationTween = gsap.to(badgeRef.current, {
          rotation: 360,
          repeat: -1,
          duration: 12,
          ease: 'none',
        });

        // Speed up rotation based on scroll velocity
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          onUpdate: (self) => {
            const velocity = Math.abs(self.getVelocity() / 300);
            if (velocity > 0.1) {
              gsap.to(rotationTween, {
                timeScale: 1 + Math.min(velocity, 4),
                duration: 0.2,
                overwrite: 'auto',
                onComplete: () => {
                  gsap.to(rotationTween, { timeScale: 1, duration: 1 });
                },
              });
            }
          },
        });
      }

      // 3. Staggered reveal for timeline entries
      const timelineEntries = sectionRef.current?.querySelectorAll('.timeline-entry');
      if (timelineEntries && timelineEntries.length > 0) {
        gsap.from(timelineEntries, {
          y: 35,
          opacity: 0,
          stagger: 0.12,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: timelineEntries[0],
            start: 'top 85%',
          },
        });
      }
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="resume"
      ref={sectionRef}
      className="relative w-full py-20 md:py-28 px-4 sm:px-8 md:px-12 lg:px-20 bg-bg overflow-hidden border-b-2 border-border"
      aria-label="Resume and Experience"
    >
      {/* Decorative Overlapping Stickers */}
      <Sticker
        src="/stickers/controller.svg"
        alt="Controller Sticker"
        width={130}
        rotation={15}
        depth={0.7}
        isDraggable={false}
        className="-top-8 right-6 hidden md:block z-20"
      />
      <Sticker
        src="/stickers/lightning.svg"
        alt="Lightning Sticker"
        width={120}
        rotation={-10}
        depth={0.9}
        isDraggable={false}
        className="bottom-10 -left-6 hidden lg:block z-20"
      />

      <div className="max-w-7xl mx-auto">

        {/* Header Row: "Resume" script text + Rotating Circular Badge */}
        <div className="flex flex-wrap items-center gap-6 mb-16 md:mb-20">
          <h2
            ref={headingRef}
            className="font-script text-primary text-7xl sm:text-8xl lg:text-9xl leading-none select-none script-reveal"
          >
            Resume
          </h2>

          {/* Rotating Circular Vintage Badge beside heading */}
          <div className="relative flex items-center justify-center">
            <div
              ref={badgeRef}
              className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-accent border-2 border-ink shadow-sticker flex items-center justify-center select-none cursor-pointer"
            >
              <svg viewBox="0 0 100 100" className="w-full h-full p-1">
                <defs>
                  <path
                    id="circlePath"
                    d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  />
                </defs>
                <text className="font-display text-[9.5px] fill-white uppercase tracking-[1.8px] font-black">
                  <textPath href="#circlePath" startOffset="0%">
                    ★ RETRO DESIGNER ★ VERIFIED PRO
                  </textPath>
                </text>
              </svg>
              {/* Center icon badge */}
              <div className="absolute w-10 h-10 rounded-full bg-pop border-2 border-ink flex items-center justify-center shadow-inner">
                <span className="font-display text-sm text-ink font-black">70s</span>
              </div>
            </div>
          </div>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

          {/* Left Column: EDUCATION and EXPERIENCE (6 cols) */}
          <div className="lg:col-span-6 space-y-12">

            {/* Experience Section */}
            <div>
              <div className="flex items-center gap-3 mb-6 pb-2 border-b-2 border-border">
                <span className="w-3 h-3 rounded-full bg-accent" />
                <h3 className="font-display uppercase text-primary text-xl sm:text-2xl tracking-wider">
                  Experience
                </h3>
              </div>

              <div className="space-y-6">
                {resumeData.experience.map((item) => (
                  <div key={item.id} className="timeline-entry relative pl-6 border-l-2 border-accent">
                    {/* Orange bullet dot on timeline line */}
                    <div className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-accent border-2 border-bg" />

                    <h4 className="font-body font-bold text-ink text-base sm:text-lg">
                      {item.role}
                    </h4>
                    <div className="font-body italic text-muted text-xs sm:text-sm mb-2">
                      <span className="font-semibold text-primary">{item.organization}</span>
                      <span className="mx-2">•</span>
                      <span>{item.period}</span>
                    </div>
                    <p className="font-body text-sm text-[#3A3A3A] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Section */}
            <div>
              <div className="flex items-center gap-3 mb-6 pb-2 border-b-2 border-border">
                <span className="w-3 h-3 rounded-full bg-accent" />
                <h3 className="font-display uppercase text-primary text-xl sm:text-2xl tracking-wider">
                  Education
                </h3>
              </div>

              <div className="space-y-6">
                {resumeData.education.map((item) => (
                  <div key={item.id} className="timeline-entry relative pl-6 border-l-2 border-accent">
                    <div className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-accent border-2 border-bg" />

                    <h4 className="font-body font-bold text-ink text-base sm:text-lg">
                      {item.role}
                    </h4>
                    <div className="font-body italic text-muted text-xs sm:text-sm mb-2">
                      <span className="font-semibold text-primary">{item.organization}</span>
                      <span className="mx-2">•</span>
                      <span>{item.period}</span>
                    </div>
                    <p className="font-body text-sm text-[#3A3A3A] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: LANGUAGES, SKILLS & SOFTWARE (6 cols) */}
          <div className="lg:col-span-6 space-y-8">
            <SkillsPills />
            <SoftwareBars />
          </div>

        </div>

      </div>
    </section>
  );
};

