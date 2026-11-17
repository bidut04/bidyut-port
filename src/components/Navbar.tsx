import React, { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);

      const sections = ['about', 'resume', 'projects', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          return;
        }
      }
      setActiveSection('hero');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      aria-label="Primary Navigation"
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-[94%] max-w-2xl ${
        scrolled ? 'scale-100 opacity-100' : 'scale-[0.98] opacity-95'
      }`}
    >
      <div className="bg-bg/90 backdrop-blur-md border-2 border-ink shadow-sticker rounded-full px-3 sm:px-6 py-2 flex items-center justify-between gap-2 sm:gap-4">
        {/* Brand / Logo */}
        <a
          href="#"
          className="font-display font-black text-xs sm:text-sm tracking-tight text-ink uppercase hover:text-primary transition-colors flex items-center gap-1.5"
          aria-label="Home"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
          <span className="hidden xs:inline">BIDYUT</span>
          <span className="xs:hidden">BKB</span>
        </a>

        {/* Section Links */}
        <div className="flex items-center gap-1 sm:gap-2">
          <a
            href="#about"
            className={`font-display text-[11px] sm:text-xs uppercase tracking-wider px-2 sm:px-3 py-1 rounded-full transition-all ${
              activeSection === 'about'
                ? 'bg-ink text-white shadow-sm'
                : 'text-ink hover:bg-soft'
            }`}
          >
            About
          </a>
          <a
            href="#projects"
            className={`font-display text-[11px] sm:text-xs uppercase tracking-wider px-2 sm:px-3 py-1 rounded-full transition-all ${
              activeSection === 'projects'
                ? 'bg-ink text-white shadow-sm'
                : 'text-ink hover:bg-soft'
            }`}
          >
            Projects
          </a>
          <a
            href="#resume"
            className={`font-display text-[11px] sm:text-xs uppercase tracking-wider px-2 sm:px-3 py-1 rounded-full transition-all ${
              activeSection === 'resume'
                ? 'bg-ink text-white shadow-sm'
                : 'text-ink hover:bg-soft'
            }`}
          >
            Resume
          </a>
          <a
            href="#contact"
            className={`font-display text-[11px] sm:text-xs uppercase tracking-wider px-2 sm:px-3 py-1 rounded-full transition-all ${
              activeSection === 'contact'
                ? 'bg-ink text-white shadow-sm'
                : 'text-ink hover:bg-soft'
            }`}
          >
            Contact
          </a>
        </div>

        {/* Quick Action Button */}
        <a
          href="#contact"
          className="font-display text-[10px] sm:text-xs font-bold uppercase tracking-wider px-3 py-1.5 bg-accent text-white rounded-full border-2 border-ink shadow-sticker hover:bg-pop hover:text-ink transition-all flex items-center gap-1"
        >
          <Sparkles className="w-3 h-3" />
          <span>Hire</span>
        </a>
      </div>
    </nav>
  );
};
