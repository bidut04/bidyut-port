import React from 'react';

interface PlasticOverlayProps {
  className?: string;
  opacity?: number;
}

export const PlasticOverlay: React.FC<PlasticOverlayProps> = ({
  className = '',
  opacity = 0.55
}) => {
  return (
    <div
      className={`absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-20 select-none ${className}`}
      aria-hidden="true"
    >
      <div
        className="w-full h-full bg-cover bg-center bg-no-repeat transition-opacity duration-700"
        style={{
          backgroundImage: 'url(/textures/crumpled-plastic.png)',
          mixBlendMode: 'multiply',
          opacity: opacity,
        }}
      />
      {/* Light sheen / gloss highlights */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none opacity-20"
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 40%, rgba(255,255,255,0.2) 65%, rgba(0,0,0,0.05) 100%)',
          mixBlendMode: 'overlay',
        }}
      />
    </div>
  );
};

