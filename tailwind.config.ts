import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        ink: 'var(--ink)',
        primary: 'var(--primary)',
        accent: 'var(--accent)',
        soft: 'var(--soft)',
        pop: 'var(--pop)',
        paper: 'var(--white)',
        muted: 'var(--muted)',
        border: 'var(--border)',
      },
      fontFamily: {
        display: ['"Archivo Black"', 'sans-serif'],
        script: ['"Yellowtail"', 'cursive'],
        body: ['"Libre Baskerville"', 'serif'],
      },
      boxShadow: {
        sticker: '3px 4px 0px rgba(26, 26, 26, 0.85)',
        'sticker-lg': '6px 8px 0px rgba(26, 26, 26, 0.9)',
        'sticker-xl': '8px 12px 0px rgba(26, 26, 26, 0.9)',
        card: '0 12px 30px -10px rgba(26, 26, 26, 0.12)',
        'card-hover': '0 20px 40px -15px rgba(31, 75, 255, 0.25)',
      },
      borderRadius: {
        '3xl': '24px',
        '4xl': '32px',
      },
      animation: {
        'spin-slow': 'spin 12s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;

