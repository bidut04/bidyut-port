import { useEffect } from 'react';
import { useLenis } from './hooks/useLenis';
import { Cursor } from './components/Cursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Resume } from './components/Resume';
import { ProjectsGrid } from './components/ProjectsGrid';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { scrollToSection } from './utils/navigation';

export function App() {
  // Initialize Lenis smooth scroll synchronized with GSAP ScrollTrigger
  useLenis();

  // Handle clean URL routing on initial load and popstate
  useEffect(() => {
    const handleInitialRoute = () => {
      // 1. If loaded with a hash (e.g. /#projects), remove the '#' and update URL to clean /projects
      if (window.location.hash) {
        const hashTarget = window.location.hash.replace('#', '');
        window.history.replaceState(null, '', `/${hashTarget}`);
        scrollToSection(hashTarget, false);
        return;
      }

      // 2. If loaded directly with a clean path (e.g. /projects, /about, /resume, /contact)
      const path = window.location.pathname.replace(/^\//, '').split('/')[0];
      if (path && ['about', 'resume', 'projects', 'contact'].includes(path)) {
        scrollToSection(path, false);
      }
    };

    // Slight delay to ensure Lenis and DOM elements are mounted and laid out
    const timer = setTimeout(handleInitialRoute, 200);

    const handlePopState = () => {
      const currentPath = window.location.pathname.replace(/^\//, '').split('/')[0] || 'hero';
      scrollToSection(currentPath, false);
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  return (
    <div className="min-h-screen bg-bg text-ink relative selection:bg-accent selection:text-white">
      {/* Custom Retro Interactive Cursor */}
      <Cursor />

      {/* Floating Retro Sticky Navigation Pill */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10">
        {/* Section 01: Hero with crumpled plastic overlay & sticker collage */}
        <Hero />

        {/* Section 02: About ("Hello") */}
        <About />

        {/* Section 03: Resume */}
        <Resume />

        {/* Section 04: Projects Grid & Project Detail */}
        <ProjectsGrid />

        {/* Section 05: Direct-Answer FAQ / Knowledge Base for AEO & GEO */}
        <FAQ />

        {/* Section 06: Contact ("Let's work together") */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;

