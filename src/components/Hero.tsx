import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap, Draggable } from '../lib/gsap';
import { PlasticOverlay } from './PlasticOverlay';
import { Sticker } from './Sticker';
import { useIsMobile } from '../hooks/useIsMobile';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const isMobile = useIsMobile();

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const isTouch = window.matchMedia('(pointer: coarse)').matches;

      // 1. Text split character animation
      const charSpans = containerRef.current?.querySelectorAll('.hero-char');
      const stickers = containerRef.current?.querySelectorAll('[data-sticker="true"]');

      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

      if (charSpans && charSpans.length > 0 && !prefersReducedMotion) {
        tl.from(charSpans, {
          y: '120%',
          rotate: 8,
          opacity: 0,
          stagger: 0.04,
          duration: 1.1,
        });
      }

      // 2. Sticker Pop-in animation (animates .sticker-pop container with fromTo so it cannot freeze at scale 0)
      const popElements = containerRef.current?.querySelectorAll('.sticker-pop');
      if (popElements && popElements.length > 0 && !prefersReducedMotion) {
        tl.fromTo(
          popElements,
          {
            scale: 0,
            opacity: 0,
          },
          {
            scale: 1,
            opacity: 1,
            duration: 0.85,
            stagger: 0.08,
            ease: 'back.out(1.7)',
          },
          '-=0.4'
        );

        // 3. Subtle Idle Float for each sticker (applied to inner element so it doesn't fight Draggable transforms)
        const innerElements = containerRef.current?.querySelectorAll('.sticker-inner');
        innerElements?.forEach((inner, i) => {
          const duration = 2.4 + (i % 4) * 0.5;
          const yDist = 8 + (i % 3) * 4;
          const rotDist = 2.5 + (i % 3) * 1.5;

          gsap.to(inner, {
            y: `+=${yDist}`,
            rotation: `+=${i % 2 === 0 ? rotDist : -rotDist}`,
            duration: duration,
            ease: 'sine.inOut',
            repeat: -1,
            yoyo: true,
            delay: i * 0.15,
          });
        });

        // 4. Draggable Stickers with Hero boundaries (desktop only)
        if (!isTouch && containerRef.current && stickers && stickers.length > 0) {
          Draggable.create(stickers, {
            bounds: containerRef.current,
            inertia: false,
            edgeResistance: 0.65,
            cursor: 'grab',
            activeCursor: 'grabbing',
            onPress: function () {
              gsap.to(this.target, {
                scale: 1.15,
                zIndex: 60,
                duration: 0.2,
                ease: 'power2.out',
              });
            },
            onRelease: function () {
              gsap.to(this.target, {
                scale: 1,
                zIndex: 30,
                duration: 0.45,
                ease: 'back.out(2)',
              });
            },
          });
        }
      }

      // 5. Hero Title Scroll Parallax (moves slower than scroll)
      if (titleRef.current && !prefersReducedMotion) {
        gsap.to(titleRef.current, {
          yPercent: 40,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        });
      }

      // 6. Mouse Parallax on Desktop
      if (!isTouch && !prefersReducedMotion && containerRef.current) {
        const parallaxStickers = containerRef.current.querySelectorAll<HTMLElement>('[data-depth]');
        const mouseSetters = Array.from(parallaxStickers).map((el) => {
          const depth = parseFloat(el.getAttribute('data-depth') || '0.5');
          return {
            el,
            xTo: gsap.quickTo(el, 'x', { duration: 0.8, ease: 'power2.out' }),
            yTo: gsap.quickTo(el, 'y', { duration: 0.8, ease: 'power2.out' }),
            depth,
          };
        });

        const onMouseMove = (e: MouseEvent) => {
          const bounds = containerRef.current?.getBoundingClientRect();
          if (!bounds) return;
          const relX = (e.clientX - bounds.left) / bounds.width - 0.5;
          const relY = (e.clientY - bounds.top) / bounds.height - 0.5;

          mouseSetters.forEach((item) => {
            item.xTo(relX * 60 * item.depth);
            item.yTo(relY * 60 * item.depth);
          });
        };

        const heroEl = containerRef.current;
        heroEl.addEventListener('mousemove', onMouseMove);

        return () => {
          heroEl.removeEventListener('mousemove', onMouseMove);
        };
      }
    },
    { scope: containerRef, dependencies: [isMobile] }
  );

  // Split string into spans for manual SplitText animation without paid plugin
  const renderLetters = (word: string) => {
    return word.split('').map((char, index) => (
      <span
        key={index}
        className="hero-char inline-block will-change-transform transform-gpu select-none"
      >
        {char}
      </span>
    ));
  };

  return (
    <section
      id="hero-container"
      ref={containerRef}
      className="relative w-full min-h-[100svh] h-[100svh] flex flex-col items-center justify-center overflow-hidden bg-bg border-b-4 border-ink"
      aria-label="Portfolio Hero"
    >
      {/* Plastic wrap overlay */}
      <PlasticOverlay opacity={0.52} />

      {/* Decorative Vintage Stamp / Tape in top corner */}
      <div className="absolute top-6 left-6 z-30 flex items-center gap-3">
        <span className="font-display text-xs uppercase tracking-widest bg-ink text-white px-3 py-1 rounded-sm shadow-sticker">
          ISSUE VOL. 74
        </span>
        <span className="font-script text-primary text-xl hidden sm:inline-block">
          Devoloper Edition
        </span>
      </div>

      <div className="absolute top-6 right-6 z-30 flex items-center gap-2">
        <a
          href="#projects"
          className="font-display text-xs uppercase tracking-wider bg-pop text-ink px-4 py-1.5 rounded-full border-2 border-ink shadow-sticker hover:bg-accent hover:text-white transition-colors"
        >
          Explore Work ↓
        </a>
      </div>

      {/* Giant Typography Centerpiece */}
      <div
        ref={titleRef}
        className="relative z-10 flex flex-col items-center justify-center text-center px-4 w-full select-none"
      >
        <h1 className="font-display font-black text-ink text-[clamp(80px,15vw,200px)] leading-[0.72] tracking-[-0.09em] uppercase flex flex-col items-center justify-center m-0 p-0 drop-shadow-sm">          <div className="overflow-hidden py-1">
          <span className="inline-block">{renderLetters('PORT')}</span>
        </div>
          <div className="overflow-hidden py-1">
            <span className="inline-block">{renderLetters('FOLIO')}</span>
          </div>
        </h1>

        {/* Script subtitle overlapping the typography */}
        <p className="font-script text-primary text-3xl sm:text-5xl md:text-6xl -mt-6 sm:-mt-10 md:-mt-14 z-30 drop-shadow-[2px_2px_0px_#ffffff] rotate-[-4deg]">
          creative designer & visual artist
        </p>
      </div>

      {/* Scattered Retro Stickers */}
      {/* 1. Retro Camera Poster Card (Top Left) */}
      <Sticker
        id="sticker-camera"
        src="/stickers/camera.svg"
        alt="Retro Camera Poster Sticker"
        width={isMobile ? 120 : 190}
        rotation={-12}
        depth={0.8}
        boundsRef="#hero-container"
        className="top-[10%] left-[4%] sm:left-[8%] md:left-[10%] z-30"
      />

      {/* 2. GOOD VIBES Neon Lime Starburst (Top Right) */}
      <Sticker
        id="sticker-vibes"
        src="/stickers/good-vibes.svg"
        alt="Good Vibes Starburst Sticker"
        width={isMobile ? 100 : 160}
        rotation={14}
        depth={1.2}
        boundsRef="#hero-container"
        className="top-[12%] right-[4%] sm:right-[10%] z-30"
      />

      {/* 3. COOL Badge (Middle Left overlapping letters) */}
      <Sticker
        id="sticker-cool"
        src="/stickers/cool.svg"
        alt="Cool Badge Sticker"
        width={isMobile ? 95 : 135}
        rotation={-8}
        depth={0.5}
        boundsRef="#hero-container"
        className="top-[46%] left-[3%] sm:left-[6%] z-30"
      />

      {/* 4. Gaming Controller (Bottom Left) */}
      <Sticker
        id="sticker-controller"
        src="/stickers/controller.svg"
        alt="Retro Game Controller Sticker"
        width={isMobile ? 110 : 165}
        rotation={9}
        depth={1.0}
        boundsRef="#hero-container"
        className="bottom-[8%] left-[6%] sm:left-[12%] z-30"
      />

      {/* 5. GOOD MOOD Shield (Bottom Right) */}
      <Sticker
        id="sticker-mood"
        src="/stickers/good-mood.svg"
        alt="Good Mood Shield Sticker"
        width={isMobile ? 100 : 140}
        rotation={-10}
        depth={0.9}
        boundsRef="#hero-container"
        className="bottom-[8%] right-[6%] sm:right-[12%] z-30"
      />

      {/* Desktop-only secondary stickers to prevent mobile clutter */}
      {!isMobile && (
        <>
          {/* 6. Lightning Bolts with eyes (Middle Right) */}
          <Sticker
            id="sticker-lightning"
            src="/stickers/lightning.svg"
            alt="Lightning Bolts with Cartoon Eyes"
            width={140}
            rotation={12}
            depth={1.1}
            boundsRef="#hero-container"
            className="top-[45%] right-[5%] z-30"
          />

          {/* 7. Sparkle Star (Center Top) */}
          <Sticker
            id="sticker-sparkle"
            src="/stickers/sparkle.svg"
            alt="Retro Sparkle Illustration"
            width={90}
            rotation={-5}
            depth={0.4}
            boundsRef="#hero-container"
            className="top-[8%] left-[44%] z-30"
          />

          {/* 8. 70s Smiley Face (Center Bottom) */}
          <Sticker
            id="sticker-smiley"
            src="/stickers/smiley.svg"
            alt="70s Cartoon Smiley Sticker"
            width={110}
            rotation={8}
            depth={0.7}
            boundsRef="#hero-container"
            className="bottom-[12%] left-[45%] z-30"
          />

          {/* 9. Cassette Mixtape (Near top right of title) */}
          <Sticker
            id="sticker-cassette"
            src="/stickers/cassette.svg"
            alt="Retro Mixtape Cassette Sticker"
            width={140}
            rotation={-7}
            depth={0.6}
            boundsRef="#hero-container"
            className="top-[28%] right-[18%] z-30"
          />
        </>
      )}

      {/* Scroll Down Hint at bottom */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center pointer-events-none opacity-70">
        <span className="font-display text-[10px] tracking-widest uppercase text-muted">
          Scroll Down
        </span>
        <div className="w-1.5 h-3 border border-ink rounded-full mt-1 flex justify-center pt-0.5">
          <div className="w-0.5 h-1 bg-accent rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};
