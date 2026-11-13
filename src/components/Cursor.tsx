import React, { useEffect, useRef, useState } from 'react';
import { gsap } from '../lib/gsap';

export type CursorMode = 'default' | 'view' | 'sticker' | 'link';

export const Cursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const [mode, setMode] = useState<CursorMode>('default');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Disable on touch devices or reduced motion
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isTouch || prefersReducedMotion) {
      return;
    }

    document.body.classList.add('has-custom-cursor');

    const cursor = cursorRef.current;
    if (!cursor) return;

    // quickTo setters for ultra-smooth 60fps tracking
    const xTo = gsap.quickTo(cursor, 'x', { duration: 0.18, ease: 'power3.out' });
    const yTo = gsap.quickTo(cursor, 'y', { duration: 0.18, ease: 'power3.out' });

    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      xTo(e.clientX);
      yTo(e.clientY);

      // Detect hover target
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const projectCard = target.closest('[data-cursor="view"]');
      const sticker = target.closest('[data-sticker="true"]');
      const isLink = target.closest('a, button, [role="button"]');

      if (projectCard) {
        setMode('view');
      } else if (sticker) {
        setMode('sticker');
      } else if (isLink) {
        setMode('link');
      } else {
        setMode('default');
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.body.classList.remove('has-custom-cursor');
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  // Don't render on touch or reduced motion
  if (typeof window !== 'undefined') {
    if (window.matchMedia('(pointer: coarse)').matches) return null;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return null;
  }

  return (
    <div
      ref={cursorRef}
      className={`fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center transition-opacity duration-300 font-display ${isVisible ? 'opacity-100' : 'opacity-0'
        } ${mode === 'view'
          ? 'w-16 h-16 bg-accent text-white border-2 border-ink shadow-sticker text-[11px] tracking-wider'
          : mode === 'sticker'
            ? 'w-12 h-12 bg-pop text-ink border-2 border-ink shadow-sticker text-base'
            : mode === 'link'
              ? 'w-10 h-10 bg-primary/20 border-2 border-primary scale-110'
              : 'w-4 h-4 bg-primary border-2 border-white shadow-sm'
        }`}
      style={{
        transitionProperty: 'width, height, background-color, border-color, transform, opacity',
        transitionDuration: '0.2s',
      }}
      aria-hidden="true"
    >
      <span ref={textRef} className="select-none font-bold">
        {mode === 'view' && 'VIEW'}
        {mode === 'sticker' && '⚡'}
      </span>
    </div>
  );
};

