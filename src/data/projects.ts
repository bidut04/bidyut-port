export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  thumbnail: string;
  gallery: string[];
  tools: string[];
  year: string;
  client?: string;
  liveUrl?: string;
  githubUrl?: string;
}

export const projectsData: Project[] = [
  {
    id: 'retro-portfolio',
    number: '01',
    title: 'Retro Portfolio',
    category: 'Full Stack & Creative Web Application',
    description: 'A responsive, high-performance personal portfolio website engineered with a 90s sticker-collage aesthetic. Features cream paper textures, oversized Archivo Black display typography, handwritten script accents, draggable cartoon SVG stickers, 60fps Lenis smooth scrolling, GSAP interactive animations, and cinematic project transitions.',
    thumbnail: '/images/projects/project-portfolio.jpg',
    gallery: [
      '/images/projects/project-portfolio.jpg',
      '/stickers/controller.svg',
      '/stickers/good-vibes.svg',
      '/stickers/cassette.svg'
    ],
    tools: ['React 18', 'TypeScript', 'Tailwind CSS', 'GSAP', 'Lenis', 'Vite'],
    year: '2024',
    client: 'Personal Production Showcase',
    liveUrl: 'https://bidyut-port-6dmw.vercel.app/',
    githubUrl: 'https://github.com/bidut04'
  },
  {
    id: 'travel-flight-book',
    number: '02',
    title: 'Travel Booking',
    category: 'Tours, Flights & Hotel Booking Platform',
    description: 'An intuitive, modern travel booking web application featuring interactive tour packages, flight reservations, hotel bookings, destination showcases, and an integrated AI assistant (Taxidia AI). Built with clean responsive design, card carousels, and real-time travel exploration.',
    thumbnail: '/images/projects/project-travel.jpg',
    gallery: [
      '/images/projects/project-travel.jpg',
      '/stickers/camera.svg',
      '/stickers/cool.svg',
      '/stickers/good-mood.svg'
    ],
    tools: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Netlify'],
    year: '2024',
    client: 'Taxidia Travel & Booking',
    liveUrl: 'https://travelflightbook.netlify.app/',
    githubUrl: 'https://github.com/bidut04'
  },
  {
    id: 'agomoni-sangha',
    number: '03',
    title: 'Agomoni Sangha',
    category: 'Cultural Festival & Event Platform',
    description: 'A vibrant, culturally rich web portal dedicated to Bengal\'s grandest festival, Durga Puja. Features real-time countdown clocks, festival schedules, pandal discovery, cultural competition registrations, online donation (Chanda) integration, and an embedded devotional theme music player.',
    thumbnail: '/images/projects/project-agomoni.jpg',
    gallery: [
      '/images/projects/project-agomoni.jpg',
      '/stickers/sparkle.svg',
      '/stickers/good-vibes.svg',
      '/stickers/cool.svg'
    ],
    tools: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Vercel'],
    year: '2024',
    client: 'Agomoni Sangha Cultural Club',
    liveUrl: 'https://agomoni-nine.vercel.app/',
    githubUrl: 'https://github.com/bidut04'
  },
  {
    id: 'dev-docs',
    number: '04',
    title: 'Dev Docs',
    category: 'Developer Platform & Documentation System',
    description: 'An all-in-one developer documentation and knowledge platform combining tech stack guides, interactive libraries, and productivity tools. Built with a sleek dark aesthetic, emerald neon accents, instant search, and responsive code reference layouts.',
    thumbnail: '/images/projects/project-devdocs.jpg',
    gallery: [
      '/images/projects/project-devdocs.jpg',
      '/stickers/controller.svg',
      '/stickers/lightning.svg',
      '/stickers/cool.svg'
    ],
    tools: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Vercel'],
    year: '2024',
    client: 'DevDocs Platform',
    liveUrl: 'https://noob-doc-web-oklt.vercel.app/',
    githubUrl: 'https://github.com/bidut04'
  },
  {
    id: 'solarnext-energy',
    number: '05',
    title: 'SolarNext Energy',
    category: 'CleanTech & Energy Engineering Platform',
    description: 'A modern clean-energy web platform engineered for solar power installations, smart telemetry monitoring, and savings estimation. Features real-time plant telemetry metrics, interactive solar ROI calculators, instant consultation booking, and commercial project showcases.',
    thumbnail: '/images/projects/project-solarnext.jpg',
    gallery: [
      '/images/projects/project-solarnext.jpg',
      '/stickers/lightning.svg',
      '/stickers/sparkle.svg',
      '/stickers/good-mood.svg'
    ],
    tools: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Vercel'],
    year: '2024',
    client: 'SolarNext Engineering',
    liveUrl: 'https://soler-energy-two.vercel.app/',
    githubUrl: 'https://github.com/bidut04'
  },
  {
    id: 'upwork',
    number: '06',
    title: 'UpWork',
    category: 'Character design',
    description: 'A bespoke set of whimsical retro tech mascots created for digital marketing campaigns, tutorials, and desktop interfaces. Showcases a joyful vintage camera personified with expressive rubber-hose eyes.',
    thumbnail: '/images/projects/project-05.jpg',
    gallery: [
      '/images/projects/project-05.jpg',
      '/stickers/camera.svg',
      '/stickers/cool.svg'
    ],
    tools: ['Figma', 'Illustrator', 'After Effects'],
    year: '2024',
    client: 'UpWork Creative'
  },
  {
    id: 'logos',
    number: '07',
    title: 'Logos',
    category: 'Logos & Marks',
    description: 'A curated system of retro brand identities and typographic logomarks. Crafted for independent streetwear apparel brands featuring bubble scripts, geometric stamps, and vibrant colorway variations.',
    thumbnail: '/images/projects/project-06.jpg',
    gallery: [
      '/images/projects/project-06.jpg',
      '/stickers/cassette.svg',
      '/stickers/good-vibes.svg'
    ],
    tools: ['Fontself', 'Illustrator', 'Glyphs'],
    year: '2023',
    client: 'No Label Apparel'
  },
  {
    id: 'shein-x',
    number: '08',
    title: 'SHEIN X',
    category: 'Set of prints for SHEIN X',
    description: 'Youth fashion capsule collection prints featuring joyful vintage cartoon food characters. Soft pastel tones paired with bold black ink lines and energetic 90s typography for summer apparel.',
    thumbnail: '/images/projects/project-07.jpg',
    gallery: [
      '/images/projects/project-07.jpg',
      '/stickers/smiley.svg',
      '/stickers/sparkle.svg'
    ],
    tools: ['Procreate', 'Photoshop', 'Pattern Design'],
    year: '2024',
    client: 'SHEIN X Incubator'
  },
  {
    id: 'animation',
    number: '09',
    title: 'Animation',
    category: 'Process',
    description: 'Frame-by-frame 2D animation sequence depicting a late-night creative animator with her curious companion cat under glowing desk lamps. Complete with cozy atmospheric lighting and vintage cel coloring.',
    thumbnail: '/images/projects/project-08.jpg',
    gallery: [
      '/images/projects/project-08.jpg',
      '/stickers/lightning.svg',
      '/stickers/cassette.svg'
    ],
    tools: ['TVPaint', 'After Effects', 'Premiere Pro'],
    year: '2023',
    client: 'Lofi Animation Series'
  }
];
