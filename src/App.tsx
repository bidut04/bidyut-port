import { useLenis } from './hooks/useLenis';
import { Cursor } from './components/Cursor';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Resume } from './components/Resume';
import { ProjectsGrid } from './components/ProjectsGrid';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  // Initialize Lenis smooth scroll synchronized with GSAP ScrollTrigger
  useLenis();

  return (
    <div className="min-h-screen bg-bg text-ink relative selection:bg-accent selection:text-white">
      {/* Custom Retro Interactive Cursor */}
      <Cursor />

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

        {/* Section 05: Contact ("Let's work together") */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;

