import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '../lib/gsap';
import { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
  onSelect: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  onSelect,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const borderRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const card = cardRef.current;
      const img = imageRef.current;
      const borderEl = borderRef.current;
      if (!card || !img || !borderEl) return;

      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const isTouch = window.matchMedia('(pointer: coarse)').matches;
      if (isTouch || prefersReducedMotion) return;

      const randomTilt = index % 2 === 0 ? 1.5 : -1.5;

      const onEnter = () => {
        gsap.to(card, {
          y: -8,
          rotate: randomTilt,
          duration: 0.35,
          ease: 'power2.out',
        });
        gsap.to(img, {
          scale: 1.08,
          duration: 0.45,
          ease: 'power2.out',
        });
        gsap.to(borderEl, {
          borderColor: '#FF6B1A',
          duration: 0.25,
        });
      };

      const onLeave = () => {
        gsap.to(card, {
          y: 0,
          rotate: 0,
          duration: 0.35,
          ease: 'power2.out',
        });
        gsap.to(img, {
          scale: 1,
          duration: 0.4,
          ease: 'power2.out',
        });
        gsap.to(borderEl, {
          borderColor: '#B9CCFF',
          duration: 0.25,
        });
      };

      card.addEventListener('mouseenter', onEnter);
      card.addEventListener('mouseleave', onLeave);

      return () => {
        card.removeEventListener('mouseenter', onEnter);
        card.removeEventListener('mouseleave', onLeave);
      };
    },
    { scope: cardRef }
  );

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onSelect(project);
    }
  };

  return (
    <div
      ref={cardRef}
      data-cursor="view"
      role="button"
      tabIndex={0}
      onClick={() => onSelect(project)}
      onKeyDown={handleKeyDown}
      className="project-card group text-left cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-primary rounded-3xl p-2 transition-shadow"
      aria-label={`View project ${project.number}: ${project.title}`}
    >
      {/* Top Header: Orange number + Title + Subtitle */}
      <div className="mb-3 px-1">
        <div className="flex items-baseline gap-2">
          <span className="font-display font-black text-accent text-base sm:text-lg">
            {project.number}
          </span>
          <h3 className="font-display font-black text-ink text-lg sm:text-xl tracking-tight group-hover:text-primary transition-colors">
            {project.title}
          </h3>
        </div>
        <p className="font-body text-xs sm:text-sm text-muted italic line-clamp-1 mt-0.5">
          {project.category}
        </p>
      </div>

      {/* Rounded Thumbnail Container with 3px border */}
      <div
        ref={borderRef}
        className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden border-[3px] border-[#B9CCFF] bg-soft/20 shadow-md group-hover:shadow-card-hover transition-all"
      >
        <img
          ref={imageRef}
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover object-center filter contrast-[1.02]"
          loading="lazy"
          width={600}
          height={400}
        />

        {/* Vintage Printed Texture overlay inside card */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(0,0,0,0.15) 10%, transparent 10%)',
            backgroundSize: '6px 6px',
          }}
        />

        {/* Bottom Corner Tag */}
        <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-sm border border-ink text-ink font-display text-[10px] uppercase px-2.5 py-1 rounded-full shadow-sm opacity-90 group-hover:opacity-100 transition-opacity flex items-center gap-1.5">
          {project.liveUrl && <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />}
          <span>{project.liveUrl ? 'Live Project' : 'Open Case'}</span>
        </div>
      </div>
    </div>
  );
};

