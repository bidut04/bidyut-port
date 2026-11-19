import React, { useRef, useState, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '../lib/gsap';
import { projectsData, Project } from '../data/projects';
import { ProjectCard } from './ProjectCard';
import { Sticker } from './Sticker';

// Dynamically code-split heavy interactive modals and 2D canvas particle physics
const HandsTransition = React.lazy(() =>
  import('./HandsTransition').then((m) => ({ default: m.HandsTransition }))
);
const ProjectDetail = React.lazy(() =>
  import('./ProjectDetail').then((m) => ({ default: m.ProjectDetail }))
);

// Predictive preloader to pre-fetch chunks on hover / section entry with 0ms click latency
const preloadProjectAssets = () => {
  import('./HandsTransition');
  import('./ProjectDetail');
};

export const ProjectsGrid: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  
  // Project selection & cinematic hands transition states
  const [pendingProject, setPendingProject] = useState<Project | null>(null);
  const [isTransitionActive, setIsTransitionActive] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Preload chunks when user scrolls into the projects section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          preloadProjectAssets();
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSelectProject = (project: Project) => {
    setPendingProject(project);
    setIsTransitionActive(true);
  };

  const handleTransitionComplete = () => {
    if (pendingProject?.liveUrl) {
      setIsTransitionActive(false);
      window.location.href = pendingProject.liveUrl;
      return;
    }
    setSelectedProject(pendingProject);
    setIsTransitionActive(false);
  };

  const handleTransitionCancel = () => {
    // If skipped or cancelled, redirect to live URL or open modal
    if (pendingProject?.liveUrl) {
      setIsTransitionActive(false);
      window.location.href = pendingProject.liveUrl;
      return;
    }
    setSelectedProject(pendingProject);
    setIsTransitionActive(false);
  };

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

      // Stagger reveal of project cards per row
      const cards = sectionRef.current?.querySelectorAll('.project-card');
      if (cards && cards.length > 0) {
        gsap.from(cards, {
          y: 60,
          opacity: 0,
          rotate: 2,
          stagger: 0.1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cards[0],
            start: 'top 85%',
          },
        });
      }
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative w-full py-20 md:py-32 px-4 sm:px-8 md:px-12 lg:px-20 bg-bg overflow-hidden border-b-2 border-border"
      aria-label="Selected Projects"
    >
      {/* Decorative Overlapping Stickers around Project Grid */}
      <Sticker
        src="/stickers/good-vibes.svg"
        alt="Good Vibes"
        width={130}
        rotation={-12}
        depth={0.8}
        isDraggable={false}
        className="-top-6 left-6 hidden md:block z-20"
      />
      <Sticker
        src="/stickers/cassette.svg"
        alt="Cassette"
        width={140}
        rotation={10}
        depth={0.7}
        isDraggable={false}
        className="top-24 right-4 hidden lg:block z-20"
      />
      <Sticker
        src="/stickers/smiley.svg"
        alt="Smiley"
        width={100}
        rotation={-15}
        depth={0.9}
        isDraggable={false}
        className="bottom-12 right-8 hidden md:block z-20"
      />

      <div className="max-w-7xl mx-auto">

        {/* Section Heading "Projects" Centered in Yellowtail */}
        <div className="text-center mb-16 md:mb-24 relative select-none">
          <div className="inline-block relative">
            <h2
              ref={headingRef}
              className="font-script text-primary text-5xl sm:text-6xl md:text-7xl lg:text-[85px] leading-none script-reveal"
            >
              Projects
            </h2>
            {/* Playful mini label */}
            <span className="font-display text-[10px] sm:text-xs uppercase bg-pop text-ink px-3 py-1 rounded-full border-2 border-ink shadow-sticker absolute -top-3 -right-6 sm:-top-4 sm:-right-8 rotate-12">
              VOL. 2026
            </span>
          </div>
          <p className="font-body italic text-muted text-sm sm:text-base mt-2 max-w-2xl mx-auto">
            Production full-stack web applications, REST APIs, and cross-platform mobile apps engineered with React, TypeScript, Node.js, and React Native.
          </p>
        </div>

        {/* 3x3 Project Cards Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12"
          onMouseEnter={preloadProjectAssets}
        >
          {projectsData.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onSelect={handleSelectProject}
            />
          ))}
        </div>

      </div>

      {/* Cinematic Michelangelo Hands-Touch Transition (Lazy Loaded) */}
      {isTransitionActive && (
        <React.Suspense fallback={null}>
          <HandsTransition
            isActive={isTransitionActive}
            onComplete={handleTransitionComplete}
            onCancel={handleTransitionCancel}
          />
        </React.Suspense>
      )}

      {/* Full Screen Project Detail Experience (Lazy Loaded) */}
      {selectedProject && (
        <React.Suspense fallback={null}>
          <ProjectDetail
            project={selectedProject}
            onClose={() => {
              setSelectedProject(null);
              setPendingProject(null);
            }}
          />
        </React.Suspense>
      )}
    </section>
  );
};
