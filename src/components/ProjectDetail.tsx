import React, { useEffect, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '../lib/gsap';
import { Project } from '../data/projects';
import { X, ArrowLeft, Calendar, Tag, Layers, ExternalLink, Github, Globe } from 'lucide-react';

interface ProjectDetailProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetail: React.FC<ProjectDetailProps> = ({
  project,
  onClose,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const flashOverlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Keyboard Escape listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };

    if (project) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
      (window as any).lenis?.stop();
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
      (window as any).lenis?.start();
    };
  }, [project]);

  // Transition Animation on Open
  useGSAP(
    () => {
      if (!project) return;

      const flash = flashOverlayRef.current;
      const content = contentRef.current;
      if (!content) return;

      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      if (prefersReducedMotion) {
        gsap.set(content, { opacity: 1 });
        return;
      }

      const tl = gsap.timeline();

      // Smooth dissolve from the bright hands-touch light flash
      if (flash) {
        tl.set(flash, { opacity: 1, display: 'block' })
          .set(content, { opacity: 0.95 })
          .to(flash, {
            opacity: 0,
            duration: 0.45,
            ease: 'power2.out',
            onComplete: () => {
              if (flash) flash.style.display = 'none';
            },
          });
      }

      tl.from(
        '.detail-animate',
        {
          y: 30,
          opacity: 0,
          stagger: 0.07,
          duration: 0.55,
          ease: 'power3.out',
        },
        '-=0.2'
      );
    },
    { scope: containerRef, dependencies: [project] }
  );

  const handleClose = () => {
    const content = contentRef.current;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !content) {
      onClose();
      return;
    }

    gsap.to(content, {
      opacity: 0,
      y: 20,
      duration: 0.25,
      ease: 'power2.in',
      onComplete: onClose,
    });
  };

  if (!project) return null;

  // Split title for editorial overlap: "RETRO" in Archivo Black blue + "Portfolio" in script orange
  const titleWords = project.title.split(' ');
  const primaryWord = titleWords[0] || 'PROJECT';
  const scriptWord = titleWords.slice(1).join(' ') || project.category.split(' ')[0] || 'case';

  return (
    <div
      ref={containerRef}
      data-lenis-prevent="true"
      className="fixed inset-0 z-50 block overflow-y-auto overflow-x-hidden bg-bg select-text overscroll-contain"
      style={{ WebkitOverflowScrolling: 'touch' }}
      role="dialog"
      aria-modal="true"
      aria-label={`Project Details: ${project.title}`}
    >
      {/* Radiant Light Dissolve Overlay (dissolves the hands-touch light burst) */}
      <div
        ref={flashOverlayRef}
        className="fixed inset-0 z-50 bg-[#F1EFEA] w-full h-full pointer-events-none"
        style={{ willChange: 'opacity' }}
      />

      {/* Main Content Modal Container */}
      <div
        ref={contentRef}
        className="relative w-full min-h-screen bg-bg px-4 sm:px-8 md:px-12 lg:px-20 py-10 md:py-16 text-ink"
      >
        {/* Top Navigation Bar */}
        <div className="max-w-6xl mx-auto flex items-center justify-between pb-6 mb-8 border-b-2 border-ink">
          <button
            onClick={handleClose}
            className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border-2 border-ink font-display text-xs uppercase tracking-wider text-ink shadow-sticker hover:bg-pop transition-all group"
          >
            <ArrowLeft className="w-4 h-4 text-ink group-hover:-translate-x-1 transition-transform" />
            <span>Back to Projects</span>
          </button>

          <div className="flex items-center gap-3">
            <span className="font-display font-black text-accent text-xl">
              #{project.number}
            </span>
            <button
              onClick={handleClose}
              aria-label="Close Project Modal"
              className="w-10 h-10 rounded-full bg-white border-2 border-ink flex items-center justify-center shadow-sticker hover:bg-accent hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Big Editorial Project Title */}
          <div className="detail-animate relative mb-6">
            <div className="relative inline-block">
              <h1 className="font-display font-black text-primary text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight leading-none uppercase">
                {primaryWord}
              </h1>
              {/* Overlapping handwritten script word in orange */}
              <span className="font-script text-accent text-5xl sm:text-7xl md:text-8xl lg:text-9xl absolute -bottom-4 sm:-bottom-6 md:-bottom-8 right-[-10%] sm:right-[-5%] rotate-[-6deg] drop-shadow-[2px_2px_0px_#ffffff] z-10">
                {scriptWord}
              </span>
            </div>
            <p className="font-body italic text-muted text-lg sm:text-xl mt-4 max-w-2xl">
              {project.category}
            </p>
          </div>

          {/* Action Links Bar (Prominent Live Project URL and Repository) */}
          {(project.liveUrl || project.githubUrl) && (
            <div className="detail-animate flex flex-wrap items-center gap-3 sm:gap-4 my-6">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-pop text-ink font-display font-black text-xs sm:text-sm uppercase tracking-wider rounded-full border-2 border-ink shadow-sticker hover:bg-accent hover:text-white transition-all transform hover:-translate-y-1 active:translate-y-0 group"
                >
                  <ExternalLink className="w-4 h-4 text-ink group-hover:text-white transition-colors" />
                  <span>Visit Live Website</span>
                  <span className="font-mono text-[11px] lowercase bg-white/70 text-ink px-2.5 py-0.5 rounded-full border border-ink">
                    {(() => {
                      try {
                        return new URL(project.liveUrl).hostname;
                      } catch {
                        return project.liveUrl;
                      }
                    })()}
                  </span>
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-white text-ink font-display font-black text-xs sm:text-sm uppercase tracking-wider rounded-full border-2 border-ink shadow-sticker hover:bg-soft transition-all transform hover:-translate-y-1 active:translate-y-0"
                >
                  <Github className="w-4 h-4 text-ink" />
                  <span>View Source Code</span>
                </a>
              )}
            </div>
          )}

          {/* Project Meta Details Bar */}
          <div className="detail-animate grid grid-cols-2 md:grid-cols-4 gap-4 p-5 sm:p-6 bg-white rounded-3xl border-2 border-ink shadow-sticker my-8">
            <div className="space-y-1">
              <span className="font-display text-[11px] uppercase text-muted tracking-widest flex items-center gap-1.5">
                <Tag className="w-3.5 h-3.5 text-accent" />
                Category
              </span>
              <p className="font-body text-sm font-bold text-ink">
                {project.category}
              </p>
            </div>

            <div className="space-y-1">
              <span className="font-display text-[11px] uppercase text-muted tracking-widest flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-accent" />
                Year
              </span>
              <p className="font-body text-sm font-bold text-ink">
                {project.year}
              </p>
            </div>

            <div className="space-y-1">
              <span className="font-display text-[11px] uppercase text-muted tracking-widest flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-accent" />
                Client
              </span>
              <p className="font-body text-sm font-bold text-ink">
                {project.client || 'Commissioned Project'}
              </p>
            </div>

            <div className="space-y-1">
              <span className="font-display text-[11px] uppercase text-muted tracking-widest flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-accent" />
                Project Link
              </span>
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-sm font-bold text-primary underline truncate block hover:text-accent"
                >
                  Open Live Demo ↗
                </a>
              ) : (
                <p className="font-body text-sm font-bold text-primary">
                  Completed & Shipped
                </p>
              )}
            </div>
          </div>

          {/* Project Narrative & Tools */}
          <div className="detail-animate grid grid-cols-1 lg:grid-cols-12 gap-8 my-10">
            <div className="lg:col-span-8">
              <h2 className="font-display uppercase text-ink text-xl tracking-wider mb-4">
                Overview & Engineering
              </h2>
              <p className="font-body text-ink text-base sm:text-lg leading-relaxed text-justify">
                {project.description}
              </p>
            </div>

            <div className="lg:col-span-4 bg-[#B9CCFF] p-6 rounded-3xl border-2 border-ink shadow-sticker">
              <h3 className="font-display uppercase text-ink text-sm tracking-wider mb-3">
                Technologies & Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool, i) => (
                  <span
                    key={i}
                    className="font-body text-xs font-bold bg-white text-ink px-3 py-1.5 rounded-full border border-ink shadow-sm"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Project Visuals */}
          <div className="detail-animate space-y-8 my-12">
            <h2 className="font-display uppercase text-primary text-2xl tracking-wider flex items-center gap-3">
              <span>Project Visuals</span>
              <span className="flex-1 h-0.5 bg-border" />
            </h2>

            {project.id === 'journey-bus-app' ? (
              /* Mobile App 2-Screen Showcase (Contained Side-by-Side Mobile Mockups) */
              <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 max-w-4xl mx-auto py-4">
                {project.gallery.map((imgUrl, i) => (
                  <div
                    key={i}
                    className="relative flex flex-col items-center transition-transform hover:-translate-y-1.5 duration-300"
                  >
                    {/* Realistic Rounded Mobile Device Bezel */}
                    <div className="relative rounded-[40px] p-2 bg-[#1A1A1A] border-4 border-ink shadow-sticker-lg">
                      {/* Top Speaker / Camera Notch */}
                      <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-14 h-2.5 bg-black rounded-full z-20 opacity-80" />

                      {/* Fully Contained Phone Screen Container */}
                      <div className="relative rounded-[32px] overflow-hidden bg-white h-[480px] sm:h-[540px] md:h-[580px] aspect-[458/1024] flex items-center justify-center shadow-inner">
                        <img
                          src={imgUrl}
                          alt={`${project.title} - Screen ${i + 1}`}
                          className="w-full h-full object-contain filter contrast-[1.02]"
                          loading="lazy"
                        />
                      </div>
                    </div>

                    <span className="font-display font-black text-xs uppercase tracking-wider text-muted mt-4 bg-white px-3.5 py-1 rounded-full border border-ink shadow-sm">
                      {i === 0 ? 'Home & Fleet Selection' : 'Full Fleet Charter'}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              /* Standard Desktop/Web Project Showcase */
              <>
                {/* Main Featured Showcase */}
                <div className="relative rounded-3xl overflow-hidden border-4 border-ink shadow-sticker-lg bg-white">
                  <img
                    src={project.thumbnail}
                    alt={`${project.title} - Main Showcase`}
                    className="w-full h-auto object-cover max-h-[750px] filter contrast-[1.02]"
                    width={1200}
                    height={800}
                  />
                </div>

                {/* Additional gallery items stacked */}
                {project.gallery.slice(1).map((imgUrl, i) => (
                  <div
                    key={i}
                    className="relative rounded-3xl overflow-hidden border-2 border-ink shadow-sticker bg-white p-6 sm:p-10 flex items-center justify-center min-h-[300px]"
                  >
                    <img
                      src={imgUrl}
                      alt={`${project.title} - Detail ${i + 1}`}
                      className="max-h-[320px] max-w-full object-contain filter drop-shadow-md"
                      loading="lazy"
                    />
                  </div>
                ))}
              </>
            )}
          </div>

          {/* Bottom Action Bar */}
          <div className="detail-animate flex flex-wrap items-center justify-center gap-4 pt-8 pb-16">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-4 bg-pop text-ink font-display font-black text-sm uppercase tracking-wider rounded-full border-2 border-ink shadow-sticker hover:bg-accent hover:text-white transition-all hover:scale-105"
              >
                <ExternalLink className="w-5 h-5" />
                <span>Launch Project URL</span>
              </a>
            )}

            <button
              onClick={handleClose}
              className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-white font-display uppercase tracking-wider text-sm rounded-full border-2 border-ink shadow-sticker hover:bg-primary transition-all hover:scale-105"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to all projects</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
