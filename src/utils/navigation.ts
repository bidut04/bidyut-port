/**
 * Navigation utility for clean HTML5 URL routing without '#' fragments.
 * Supports smooth scrolling with Lenis / window scroll, history pushState,
 * and SEO-friendly clean paths (/projects, /about, /resume, /contact).
 */

export const SECTION_ROUTES: Record<string, string> = {
  hero: '/',
  about: '/about',
  resume: '/resume',
  projects: '/projects',
  contact: '/contact',
};

export const ROUTE_TO_ID: Record<string, string> = {
  '': 'hero-container',
  '/': 'hero-container',
  hero: 'hero-container',
  about: 'about',
  resume: 'resume',
  projects: 'projects',
  contact: 'contact',
};

/**
 * Smoothly scrolls to a section and optionally updates the URL without '#'
 */
export const scrollToSection = (target: string, updateUrl: boolean = true) => {
  // Normalize target
  const cleanKey = target.replace(/^\//, '').replace('#', '').toLowerCase();
  const elementId = ROUTE_TO_ID[cleanKey] || cleanKey;
  const element = document.getElementById(elementId);

  if (element) {
    const lenis = (window as any).lenis;
    if (lenis && typeof lenis.scrollTo === 'function') {
      lenis.scrollTo(element, { offset: 0, duration: 1.2 });
    } else {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  if (updateUrl) {
    const newPath = cleanKey === '' || cleanKey === 'hero' ? '/' : `/${cleanKey}`;
    if (window.location.pathname !== newPath) {
      window.history.pushState(null, '', newPath);
    }
  }
};

/**
 * Click handler for navigation links to prevent default hash jumps
 */
export const handleNavClick = (
  e: React.MouseEvent<HTMLAnchorElement>,
  target: string
) => {
  e.preventDefault();
  scrollToSection(target, true);
};
