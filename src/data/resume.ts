export interface ResumeItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  description: string;
}

export interface LanguageItem {
  name: string;
  level: string;
}

export interface SoftwareItem {
  name: string;
  percentage: number;
}

export interface TechCategory {
  title: string;
  badge: string;
  description: string;
  skills: string[];
}

export interface ResumeData {
  name: string;
  title: string;
  bio: string;
  contacts: {
    platform: string;
    label: string;
    url: string;
    handle: string;
  }[];
  education: ResumeItem[];
  experience: ResumeItem[];
  languages: LanguageItem[];
  skills: string[];
  categories: TechCategory[];
  software: SoftwareItem[];
}

export const resumeData: ResumeData = {
  name: 'Bidyut Kumar Bhowmick',

  title: 'Full Stack & Mobile Developer',

  bio: "I help founders, businesses, and engineering teams transform complex requirements into fast, reliable digital products. With a solid foundation in computer science and modern software engineering from BITM, I bridge intuitive UI/UX design with scalable, secure backend systems across React, TypeScript, Node.js, and React Native.",

  contacts: [
    {
      platform: 'Email',
      label: 'Direct Email',
      url: 'mailto:barunbhowmick727@gmail.com',
      handle: 'barunbhowmick727@gmail.com'
    },
    {
      platform: 'GitHub',
      label: 'GitHub Profile',
      url: 'https://github.com/bidut04',
      handle: 'github.com/bidut04'
    },
    {
      platform: 'LinkedIn',
      label: 'LinkedIn Network',
      url: 'https://linkedin.com/in/bidyut-kumar-bhowmick-bb4a6a301',
      handle: 'bidyut-kumar-bhowmick'
    },
    {
      platform: 'Portfolio',
      label: 'Live Portfolio',
      url: 'https://bidyut-port-6dmw.vercel.app/',
      handle: 'bidyut-port-6dmw.vercel.app'
    },
    {
      platform: 'Location',
      label: 'Current Location',
      url: 'https://maps.google.com/?q=West+Bengal,+India',
      handle: 'West Bengal, India'
    },
    {
      platform: 'Availability',
      label: 'Current Status',
      url: 'mailto:barunbhowmick727@gmail.com?subject=Project%20Inquiry%20or%20Job%20Opportunity',
      handle: 'Available for Hire'
    }
  ],

  education: [
    {
      id: 'edu-1',
      role: 'Bachelor of Computer Applications (BCA)',
      organization: 'Bengal Institute of Technology & Management (BITM)',
      period: '2021 – 2024',
      description: 'Graduated with core coursework in Data Structures & Algorithms, Object-Oriented Programming, Relational Database Management Systems (RDBMS/SQL), Computer Networks, and Full-Stack Web Architecture.'
    },
    {
      id: 'edu-2',
      role: 'Higher Secondary Education (Science & Computer Application)',
      organization: 'Daspur Vivekananda High School',
      period: '2019 – 2021',
      description: 'Completed Higher Secondary education with specialization in Mathematics, Physics, Chemistry, and Computer Applications, establishing a rigorous analytical, algorithmic, and computational foundation.'
    }
  ],

  experience: [
    {
      id: 'exp-1',
      role: 'Full Stack Web & Application Developer',
      organization: 'Freelance & Production Projects',
      period: '2023 – Present',
      description: 'Engineered and shipped production web and mobile solutions for clients and independent projects. Developed performant RESTful APIs using Node.js and Express, integrated relational databases (PostgreSQL/MySQL) via Prisma ORM, implemented secure JWT authentication, and optimized frontend bundles achieving 95+ performance metrics.'
    },
    {
      id: 'exp-2',
      role: 'Frontend & Mobile Application Engineer',
      organization: 'Production Web & Mobile Solutions',
      period: '2022 – Present',
      description: 'Architected client-facing web portals and native mobile applications, including the Journey Fleet transit booking app with React Native/Expo, the DevDocs developer knowledge platform, and the SolarNext CleanTech telemetry portal with real-time indicators and interactive ROI calculations.'
    }
  ],

  languages: [
    { name: 'Bengali', level: 'Native' },
    { name: 'English', level: 'Professional Working Proficiency' },
    { name: 'Hindi', level: 'Conversational' }
  ],

  skills: [
    'React.js',
    'TypeScript',
    'JavaScript',
    'Node.js',
    'Express.js',
    'React Native',
    'Expo',
    'Next.js',
    'REST API Development',
    'PostgreSQL',
    'MySQL',
    'Oracle Database',
    'Prisma ORM',
    'JWT Authentication',
    'Git & GitHub',
    'Tailwind CSS',
    'GSAP Animations',
    'TanStack Query',
    'HTML5 & CSS3',
    'Problem Solving'
  ],

  categories: [
    {
      title: 'Frontend Engineering',
      badge: 'UI & Architecture',
      description: 'Building responsive, type-safe web applications with optimized Core Web Vitals and component reusability.',
      skills: ['React 18', 'Next.js', 'TypeScript', 'JavaScript (ES6+)', 'Tailwind CSS', 'TanStack Query', 'HTML5 & Semantic Web']
    },
    {
      title: 'Backend & API Architecture',
      badge: 'Server & APIs',
      description: 'Architecting secure, scalable RESTful APIs, webhook handlers, and middleware services with stateless JWT authentication.',
      skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT Auth', 'Middleware Architecture', 'API Security']
    },
    {
      title: 'Mobile Development',
      badge: 'iOS & Android',
      description: 'Engineering cross-platform mobile apps with fluid gesture navigation, offline caching, and responsive native UI.',
      skills: ['React Native', 'Expo', 'Mobile UI Design', 'Cross-Platform Architecture', 'Native Device APIs']
    },
    {
      title: 'Databases & Data Modeling',
      badge: 'Storage & ORM',
      description: 'Designing relational data schemas, managing ACID-compliant transactions, and optimizing query performance.',
      skills: ['PostgreSQL', 'MySQL', 'Prisma ORM', 'Oracle Database', 'Relational Schema Design']
    },
    {
      title: 'UI/UX & Motion Engineering',
      badge: 'Interactive Experience',
      description: 'Crafting tactile digital experiences with 60fps hardware-accelerated animations and accessible interactive states.',
      skills: ['GSAP (ScrollTrigger & Draggable)', 'Lenis Smooth Scroll', 'Canvas 2D Rendering', 'Retro Collage UI', 'Responsive Design']
    },
    {
      title: 'DevOps & Tooling',
      badge: 'Workflow & CI/CD',
      description: 'Employing modern version control workflows, automated type-checking, and continuous deployment across cloud platforms.',
      skills: ['Git', 'GitHub', 'Vite', 'Postman', 'Vercel', 'Netlify', 'npm & Node Tooling']
    }
  ],

  software: [
    { name: 'React.js / Next.js', percentage: 90 },
    { name: 'TypeScript / JavaScript', percentage: 88 },
    { name: 'Node.js / Express.js', percentage: 82 },
    { name: 'React Native / Expo', percentage: 80 },
    { name: 'PostgreSQL / MySQL / Prisma', percentage: 78 }
  ]
};
