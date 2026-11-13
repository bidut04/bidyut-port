import React from 'react';

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
}) => {
  return (
    <div
      id={id}
      data-sticker="true"
      data-depth={depth}
      className={`absolute select-none pointer-events-auto sticker-element z-30 ${className}`}
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
            className="w-full h-auto object-contain pointer-events-none drop-shadow-[4px_6px_0px_rgba(26,26,26,0.85)]"
            loading="eager"
            draggable={false}
          />
        </div>
      </div>
    </div>
  );
};
