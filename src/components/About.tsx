import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '../lib/gsap';
import { resumeData } from '../data/resume';
import { Instagram, Mail, Linkedin, Globe, Sparkles } from 'lucide-react';
import { Sticker } from './Sticker';

export const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) return;

      // Script heading clip-path reveal
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

      // Portrait card fade-up
      const card = sectionRef.current?.querySelector('.about-card');
      if (card) {
        gsap.from(card, {
          y: 40,
          opacity: 0,
          rotate: -2,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
          },
        });
      }

      // Contact items stagger
      const contacts = sectionRef.current?.querySelectorAll('.contact-row');
      if (contacts && contacts.length > 0) {
        gsap.from(contacts, {
          x: -25,
          opacity: 0,
          stagger: 0.1,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: contacts[0],
            start: 'top 90%',
          },
        });
      }
    },
    { scope: sectionRef }
  );

  const getPlatformIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'instagram':
        return <Instagram className="w-5 h-5 text-accent" />;
      case 'email':
        return <Mail className="w-5 h-5 text-accent" />;
      case 'linkedin':
        return <Linkedin className="w-5 h-5 text-accent" />;
      default:
        return <Globe className="w-5 h-5 text-accent" />;
    }
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full py-20 md:py-28 px-4 sm:px-8 md:px-12 lg:px-20 bg-bg overflow-hidden border-b-2 border-border"
      aria-label="About Me"
    >
      {/* Decorative background watermark */}
      <div className="absolute right-[-4%] top-10 select-none pointer-events-none opacity-[0.03] font-display text-[20vw] leading-none text-ink">
        ARTIST
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Portrait Card (42% ~ 5 of 12 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative about-card w-full max-w-[420px]">

              {/* White Portrait Card */}
              <div className="relative bg-white rounded-4xl p-3 sm:p-4 shadow-sticker-lg border-2 border-ink">
                <div className="overflow-hidden rounded-3xl aspect-[4/5] bg-soft/30 border border-border">
                  <img
                    src="/images/profile.jpg"
                    alt={`${resumeData.name} - Portrait`}
                    className="w-full h-full object-cover object-center filter contrast-[1.05]"
                    loading="lazy"
                    width={500}
                    height={625}
                  />
                </div>

                {/* Bottom caption / vintage print stamp */}
                <div className="mt-3 px-2 flex justify-between items-center text-xs">
                  <span className="font-display uppercase text-primary tracking-wider">
                    {resumeData.name}
                  </span>
                  <span className="font-body italic text-muted text-[11px]">
                    {resumeData.title}
                  </span>
                </div>
              </div>

              {/* Overlapping Decorative Sticker Bottom Left */}
              <Sticker
                src="/stickers/good-mood.svg"
                alt="Good Mood Badge"
                width={105}
                rotation={-14}
                depth={0.8}
                isDraggable={false}
                className="-bottom-6 -left-6 z-30"
              />

              {/* Overlapping Sparkle Top Right */}
              <Sticker
                src="/stickers/sparkle.svg"
                alt="Retro Sparkle"
                width={80}
                rotation={12}
                depth={0.6}
                isDraggable={false}
                className="-top-5 -right-5 z-30"
              />
            </div>
          </div>

          {/* Right Column: Introduction (58% ~ 7 of 12 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">

            {/* Script Heading "Hello" */}
            <div className="relative mb-2">
              <h2
                ref={headingRef}
                className="font-script text-primary text-7xl sm:text-8xl lg:text-9xl leading-none select-none script-reveal"
              >
                Hello
              </h2>
              {/* Decorative mini badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-pop border-2 border-ink rounded-full shadow-sticker ml-4 -translate-y-4">
                <Sparkles className="w-3.5 h-3.5 text-ink" />
                <span className="font-display text-[10px] uppercase text-ink tracking-widest">
                  AVAILABLE FOR HIRE
                </span>
              </div>
            </div>

            {/* My name is Your Name */}
            <h3 className="font-body font-bold text-ink text-2xl sm:text-3xl lg:text-4xl tracking-tight mb-6">
              My name is{' '}
              <span className="font-display text-accent underline decoration-primary decoration-4 underline-offset-4">
                {resumeData.name}
              </span>
            </h3>

            {/* Editorial Biography paragraph */}
            <p className="font-body text-ink text-base sm:text-lg leading-relaxed text-left lg:text-justify mb-8 text-[#2A2A2A]">
              {resumeData.bio}
            </p>

            {/* Contacts Section */}
            <div className="pt-4 border-t-2 border-border/80">
              <h4 className="font-display text-primary text-xl uppercase tracking-wider mb-5 flex items-center gap-2">
                Contacts
                <span className="inline-block w-8 h-0.5 bg-accent" />
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {resumeData.contacts.map((contact, i) => (
                  <a
                    key={i}
                    href={contact.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-row flex items-center gap-3 p-3 rounded-2xl bg-white border border-border shadow-sm hover:border-primary hover:shadow-sticker transition-all group"
                  >
                    <div className="w-9 h-9 rounded-xl bg-bg flex items-center justify-center border border-border group-hover:bg-soft transition-colors">
                      {getPlatformIcon(contact.platform)}
                    </div>
                    <div className="flex flex-col">
                      <span className="font-display text-xs text-muted tracking-wider uppercase">
                        {contact.label}
                      </span>
                      <span className="font-body text-sm font-semibold text-ink link-wipe">
                        {contact.handle}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

