import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full py-8 px-4 sm:px-8 md:px-12 bg-bg text-ink border-t border-border">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-body">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-accent" />
          <span className="font-display uppercase text-ink">
            © {new Date().getFullYear()} BIDYUT KUMAR BHOWMICK. ALL RIGHTS RESERVED.
          </span>
        </div>

        <div className="flex items-center gap-4 text-muted">
          <span>Printed on Retro Paper</span>
          <span>•</span>
          <span className="font-script text-primary text-lg">DEVOLOPER</span>
        </div>
      </div>
    </footer>
  );
};

