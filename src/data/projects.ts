export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  summary?: string;
  problem?: string;
  features?: string[];
  contribution?: string;
  keywords?: string[];
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
    summary: 'High-performance personal developer portfolio blending an interactive 90s sticker-collage aesthetic with modern web performance.',
    description: 'A responsive, high-performance personal portfolio website engineered with a 90s sticker-collage aesthetic. Features cream paper textures, oversized Archivo Black display typography, handwritten script accents, draggable cartoon SVG stickers, 60fps Lenis smooth scrolling, GSAP interactive animations, and cinematic project transitions.',
    problem: 'Developer portfolios often look identical and template-driven. This project solves portfolio fatigue by pairing tactile, memorable visual interactions with strict 60fps performance and WCAG accessible heading structures.',
    features: [
      'Hardware-accelerated GSAP canvas transitions',
      'Physics-based Draggable cartoon sticker engine',
      'Synchronized Lenis 60fps smooth scrolling',
      'Accessible full-screen project modal viewer',
      'Automated standard PDF resume generator',
      'SEO & GEO semantic structured JSON-LD schema'
    ],
    contribution: 'Designed the complete UI/UX, engineered custom canvas-based hand transitions, integrated Lenis scroll listeners with GSAP ScrollTrigger, and achieved a 100 Performance & SEO audit score.',
    keywords: ['Creative Developer Portfolio', 'React GSAP Portfolio', 'Lenis Smooth Scroll', 'TypeScript Web App', 'Retro Sticker UI'],
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
    title: 'Travel & Flight Booking App',
    category: 'Tours, Flights & Hotel Travel Booking Platform',
    summary: 'Modern React travel booking app featuring interactive tour packages, flight reservations, hotel stays, destination showcases, and an integrated AI travel assistant.',
    description: 'An intuitive, modern React travel booking app featuring interactive tour packages, flight reservations, hotel bookings, destination showcases, and an integrated AI travel assistant (Taxidia AI). Built with clean responsive design, card carousels, and real-time travel booking exploration.',
    problem: 'Travel websites often overwhelm users with cluttered, fragmented booking steps. Taxidia streamlines the journey with intuitive package discovery, real-time pricing cards, and interactive destination guides.',
    features: [
      'Multi-category reservation flow (flights, hotels, tours)',
      'Responsive destination discovery carousels',
      'Integrated conversational AI travel assistant (Taxidia AI)',
      'Real-time filterable package cards and search',
      'Mobile-first responsive booking interface'
    ],
    contribution: 'Built the end-to-end responsive frontend architecture, developed reusable booking card components, integrated asynchronous search filtering, and deployed to Netlify with continuous CI/CD.',
    keywords: ['Travel Booking App', 'React Travel Booking App', 'Flight Reservation React', 'Interactive Travel Platform', 'Tailwind Travel UI'],
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
    title: 'Agomoni Sangha — Cultural Utsab Portal',
    category: 'Durga Puja & Cultural Utsab Platform',
    summary: 'Culturally rich digital portal for Bengal\'s Durga Puja utsab featuring real-time festival countdowns, utsab schedules, and online donation processing.',
    description: 'A vibrant, culturally rich web portal dedicated to Bengal\'s grandest cultural festival and Durga Puja utsab. Features real-time utsab countdown clocks, festival schedules, pandal discovery, cultural competition registrations, online digital Chanda donation integration, and an embedded devotional theme music player.',
    problem: 'Large-scale cultural festivals struggle with centralized information dissemination for pandal visitors, registration management, and transparent digital donation collection.',
    features: [
      'Live real-time festival countdown clocks (days, hours, mins, secs)',
      'Interactive puja ritual schedules & pandal directories',
      'Cultural competition registration forms',
      'Online digital Chanda donation gateway integration',
      'Embedded HTML5 devotional theme music player with persistent state'
    ],
    contribution: 'Engineered the responsive festival portal, built persistent state management for cultural registrations, integrated an embedded HTML5 audio player with background playback, and optimized media delivery for mobile bandwidth.',
    keywords: ['Utsab', 'Cultural Utsab Portal', 'Durga Puja Portal', 'Festival Event Management Web App', 'Donation Chanda Platform', 'React Cultural Portal'],
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
    summary: 'All-in-one developer documentation and knowledge platform combining tech stack guides, code libraries, and instant search.',
    description: 'An all-in-one developer documentation and knowledge platform combining tech stack guides, interactive libraries, and productivity tools. Built with a sleek dark aesthetic, emerald neon accents, instant search, and responsive code reference layouts.',
    problem: 'Developers lose productive hours navigating disparate, slow documentation across fragmented library repositories. Dev Docs centralizes developer guides and syntax references in a low-latency, dark-mode platform.',
    features: [
      'Instant client-side fuzzy search across documentation',
      'Custom syntax-highlighted code blocks with 1-click copy',
      'Responsive sticky side navigation for quick section jumping',
      'Categorized tech stack library indexes and cheat sheets',
      'High-contrast dark mode optimized for long coding sessions'
    ],
    contribution: 'Architected the knowledgebase navigation hierarchy, implemented sub-millisecond search indexing, styled custom accessible syntax-highlighting containers, and engineered keyboard shortcuts for power users.',
    keywords: ['Developer Documentation Platform', 'DevDocs React', 'Code Reference Knowledgebase', 'Tech Stack Guides'],
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
    title: 'SolarNext — Solar Energy & CleanTech Platform',
    category: 'Solar Energy Engineering & CleanTech Platform',
    summary: 'Renewable solar energy platform with active solar plant telemetry monitoring (50.4 MW output, 98.9% efficiency), interactive solar ROI calculator, and clean energy consultation bookings.',
    description: 'A modern solar energy platform engineered for commercial and residential solar installations, smart solar telemetry monitoring, and savings estimation. Features real-time solar plant telemetry metrics, an interactive solar ROI calculator, instant consultation booking, and renewable energy project showcases.',
    problem: 'Prospective solar customers struggle to calculate cost savings and visualize production yield, resulting in low conversion rates for renewable energy engineering firms.',
    features: [
      'Active plant telemetry metrics (50.4 MW output, 98.9% efficiency, 74k T CO2 offset)',
      'Interactive mathematical solar savings and ROI calculator',
      'Commercial and residential clean-energy installation showcases',
      'Instant online consultation and estimate booking workflows',
      'Responsive design with dynamic telemetry indicators'
    ],
    contribution: 'Developed the mathematical ROI estimation algorithms, engineered real-time telemetry dashboard widgets with dynamic indicators, and built responsive lead-generation forms with validation.',
    keywords: ['Solar', 'Solar Energy Platform', 'Solar Telemetry', 'Solar ROI Calculator', 'CleanTech Platform', 'Renewable Solar Energy'],
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
    id: 'journey-bus-app',
    number: '06',
    title: 'Journey Fleet App',
    category: 'Mobile Application (iOS & Android)',
    summary: 'Native-performance mobile application for intercity bus ticketing, seat reservations, and private whole-fleet mountain charters.',
    description: 'An intuitive, modern bus booking and fleet charter mobile application. Features real-time trending fleet exploration, luxury coach & sleeper seat reservation, private full-fleet mountain charters, and seamless passenger booking workflows.',
    problem: 'Regional passenger transport requires flexible booking flows that accommodate individual seat reservations on scheduled routes alongside bespoke, whole-vehicle private fleet charters.',
    features: [
      'Trending fleet exploration with vehicle category filtering',
      'Interactive luxury coach and sleeper berth seat reservation',
      'Bespoke whole-vehicle private mountain charter booking workflows',
      'Travel moments and passenger fleet highlights reel',
      'Custom contained smartphone bezel showcase for web preview'
    ],
    contribution: 'Engineered the cross-platform mobile UI using React Native & Expo, built native touch gesture interactions, handled device-specific aspect ratios, and designed clean passenger reservation workflows.',
    keywords: ['React Native Bus Booking App', 'Fleet Charter Mobile App', 'Expo Mobile Application', 'Cross-Platform Mobile UI'],
    thumbnail: '/images/projects/project-bus-app-thumb.jpg',
    gallery: [
      '/images/projects/project-bus-app-1.jpg',
      '/images/projects/project-bus-app-2.jpg'
    ],
    tools: ['React Native', 'Expo', 'TypeScript', 'Tailwind CSS', 'Mobile UI'],
    year: '2024',
    client: 'Journey Fleet Transport',
    githubUrl: 'https://github.com/bidut04'
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
