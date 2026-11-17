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
  software: SoftwareItem[];
}

export const resumeData: ResumeData = {
  name: 'Bidyut Kumar Bhowmick',

  title: 'Full Stack & Mobile Developer',

  bio: "I'm a passionate Full Stack Developer specializing in building scalable, responsive, and user-friendly web and mobile applications. I work with modern technologies like React, TypeScript, Next.js, Node.js, Express.js, React Native, and PostgreSQL/MySQL databases. I enjoy architecting clean, maintainable systems, crafting engaging user interfaces, and delivering production-ready digital products with high performance and accessibility.",

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
      description: 'Graduated with a comprehensive focus on computer science principles, data structures, algorithms, relational database systems, and modern full-stack web engineering.'
    },
    {
      id: 'edu-2',
      role: 'Higher Secondary Education (Science & Computer Application)',
      organization: 'Daspur Vivekananda High School',
      period: '2019 – 2021',
      description: 'Completed Higher Secondary schooling with academic specialization in Mathematics, Physics, Chemistry, and Computer Applications, establishing a strong analytical and programming base.'
    }
  ],

  experience: [
    {
      id: 'exp-1',
      role: 'Full Stack Web & Application Developer',
      organization: 'Freelance & Production Projects',
      period: '2023 – Present',
      description: 'Engineering production web & mobile applications using React, TypeScript, Next.js, Node.js, and PostgreSQL. Architecting RESTful APIs with secure JWT authentication, designing responsive retro & modern UI components, and integrating robust database layers using Prisma ORM.'
    },
    {
      id: 'exp-2',
      role: 'Frontend & Mobile Application Engineer',
      organization: 'Production Web & Mobile Solutions',
      period: '2022 – Present',
      description: 'Built cross-platform solutions including the Journey Fleet mobile booking app (React Native/Expo), DevDocs platform, SolarNext energy portal, and Agomoni cultural festival web application with custom audio players and interactive animations.'
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

  software: [
    { name: 'React.js / Next.js', percentage: 90 },
    { name: 'TypeScript / JavaScript', percentage: 88 },
    { name: 'Node.js / Express.js', percentage: 82 },
    { name: 'React Native / Expo', percentage: 80 },
    { name: 'PostgreSQL / MySQL / Prisma', percentage: 78 }
  ]
};
