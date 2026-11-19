import React from 'react';

/**
 * Native viewBox dimensions for all sticker SVGs to allow the browser
 * to reserve space before image network load and avoid layout shifts.
 */
export const STICKER_DIMENSIONS: Record<string, { width: number; height: number }> = {
  '/stickers/camera.svg': { width: 240, height: 280 },
  '/stickers/cassette.svg': { width: 220, height: 150 },
  '/stickers/controller.svg': { width: 220, height: 180 },
  '/stickers/cool.svg': { width: 180, height: 110 },
  '/stickers/good-mood.svg': { width: 170, height: 200 },
  '/stickers/good-vibes.svg': { width: 200, height: 200 },
  '/stickers/lightning.svg': { width: 200, height: 220 },
  '/stickers/smiley.svg': { width: 160, height: 160 },
  '/stickers/sparkle.svg': { width: 160, height: 160 },
};

export interface StickerProps {
  id?: string;
  src: string;
  alt: string;
  width?: number | string;
  height?: number | string;
  className?: string;
  rotation?: number;
  depth?: number;
  isDraggable?: boolean;
  boundsRef?: string | HTMLElement | null;
  style?: React.CSSProperties;
  loading?: 'eager' | 'lazy';
  svgWidth?: number;
  svgHeight?: number;
}

export const Sticker: React.FC<StickerProps> = ({
  id,
  src,
  alt,
  width = 140,
  height = 'auto',
  className = '',
  rotation = 0,
  depth = 1,
  style = {},
  loading = 'lazy',
  svgWidth,
  svgHeight,
}) => {
  const nativeDims = STICKER_DIMENSIONS[src] || { width: 160, height: 160 };
  const imgWidth = svgWidth ?? nativeDims.width;
  const imgHeight = svgHeight ?? nativeDims.height;

  return (
    <div
      id={id}
      data-sticker="true"
      data-depth={depth}
      className={`absolute select-none pointer-events-auto sticker-element z-20 ${className}`}
      style={{
        width,
        height,
        ...style,
      }}
    >
      {/* Dedicated pop wrapper for entrance scale animation without conflicting with Draggable */}
      <div className="sticker-pop w-full h-full">
        {/* Dedicated inner wrapper for rotation and idle float */}
        <div
          className="sticker-inner w-full h-full will-change-transform"
          style={{
            transform: `rotate(${rotation}deg)`,
            transformOrigin: 'center center',
          }}
        >
          <img
            src={src}
            alt={alt}
            width={imgWidth}
            height={imgHeight}
            className="w-full h-auto object-contain pointer-events-none drop-shadow-[4px_6px_0px_rgba(26,26,26,0.85)]"
            loading={loading}
            draggable={false}
          />
        </div>
      </div>
    </div>
  );
};
