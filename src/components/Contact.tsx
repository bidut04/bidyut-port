import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '../lib/gsap';
import { resumeData } from '../data/resume';
import { Sticker } from './Sticker';
import { ArrowUp, Mail, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) return;

      const title = containerRef.current?.querySelector('.contact-title');
      const emailBtn = containerRef.current?.querySelector('.email-btn');

      if (title) {
        gsap.from(title, {
          y: 40,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: title,
            start: 'top 85%',
          },
        });
      }

      if (emailBtn) {
        gsap.from(emailBtn, {
          scale: 0.85,
          opacity: 0,
          duration: 0.8,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: emailBtn,
            start: 'top 90%',
          },
        });
      }
    },
    { scope: containerRef }
  );

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section
      id="contact"
      ref={containerRef}
      className="relative w-full py-24 md:py-36 px-4 sm:px-8 md:px-12 lg:px-20 bg-bg overflow-hidden border-b-4 border-ink text-center"
      aria-label="Contact Section"
    >
      {/* Decorative Stickers */}
      <Sticker
        src="/stickers/good-mood.svg"
        alt="Good Mood Sticker"
        width={130}
        rotation={-14}
        depth={0.9}
        isDraggable={false}
        className="top-12 left-8 hidden sm:block z-20"
      />
      <Sticker
        src="/stickers/cool.svg"
        alt="Cool Sticker"
        width={135}
        rotation={12}
        depth={0.7}
        isDraggable={false}
        className="bottom-16 right-10 hidden sm:block z-20"
      />

      <div className="max-w-4xl mx-auto relative z-10">

        {/* Main Combined Typography: "LET'S WORK" + "together" */}
        <div className="contact-title relative inline-block mb-10 select-none">
          <h2 className="font-display font-black text-primary text-5xl sm:text-7xl md:text-8xl lg:text-9xl uppercase tracking-tight leading-none">
            LET&apos;S WORK
          </h2>
          <span className="font-script text-accent text-6xl sm:text-8xl md:text-9xl lg:text-[130px] absolute -bottom-6 sm:-bottom-10 left-1/2 -translate-x-1/2 rotate-[-5deg] drop-shadow-[2px_2px_0px_#ffffff] z-20 whitespace-nowrap">
            together
          </span>
        </div>

        {/* Services Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 max-w-xl mx-auto mt-10 mb-5">
          <span className="font-display text-xs sm:text-sm font-bold uppercase tracking-wider px-3.5 py-1.5 bg-pop text-ink border-2 border-ink rounded-full shadow-sticker -rotate-2 hover:rotate-0 transition-transform">
            ⚡ Custom Websites
          </span>
          <span className="font-display text-xs sm:text-sm font-bold uppercase tracking-wider px-3.5 py-1.5 bg-white text-ink border-2 border-ink rounded-full shadow-sticker rotate-1 hover:rotate-0 transition-transform">
            ⚙️ Custom CRMs
          </span>
          <span className="font-display text-xs sm:text-sm font-bold uppercase tracking-wider px-3.5 py-1.5 bg-accent text-ink border-2 border-ink rounded-full shadow-sticker -rotate-1 hover:rotate-0 transition-transform">
            📱 Mobile Apps
          </span>
        </div>

        {/* Short invitation message */}
        <p className="font-body text-base sm:text-lg text-ink/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          Need a blazing-fast custom website, an automated CRM to streamline your workflow, or an intuitive mobile app built from the ground up? From concept &amp; UI/UX to clean, robust code — let&apos;s turn your vision into high-impact digital products.
        </p>

        {/* Large Email Button in Orange */}
        <div className="mb-12">
          <a
            href="mailto:barunbhowmick727@gmail.com?subject=Let's%20Work%20Together"
            className="email-btn inline-flex items-center gap-3 px-8 sm:px-12 py-5 sm:py-6 bg-accent text-ink font-display text-base sm:text-xl uppercase tracking-wider rounded-full border-4 border-ink shadow-sticker-lg hover:bg-pop hover:-rotate-2 hover:scale-105 active:scale-95 transition-all group"
          >
            <Mail className="w-6 h-6 text-ink group-hover:rotate-12 transition-transform" />
            <span>barunbhowmick727@gmail.com</span>
            <Send className="w-5 h-5 text-ink ml-1" />
          </a>
        </div>

        {/* Social Links Row */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 pt-4 pb-8">
          {resumeData.contacts.map((c, i) => (
            <a
              key={i}
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-display text-xs sm:text-sm uppercase tracking-widest text-ink hover:text-primary transition-colors link-wipe"
            >
              {c.label}
            </a>
          ))}
        </div>

        {/* Back to Top Button */}
        <div className="pt-6">
          <button
            onClick={scrollToTop}
            aria-label="Back to Top"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border-2 border-ink text-xs font-display uppercase tracking-widest text-ink shadow-sticker hover:bg-soft transition-all"
          >
            <ArrowUp className="w-4 h-4 text-accent animate-bounce" />
            <span>Back to top</span>
          </button>
        </div>

      </div>
    </section>
  );
};

