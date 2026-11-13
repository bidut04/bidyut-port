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

  title: 'Full Stack Developer',

  bio: "I'm a passionate Full Stack Developer with a strong interest in building scalable, responsive, and user-friendly web applications. I work with modern technologies like React, TypeScript, Node.js, Express.js, and databases. I enjoy solving real-world problems, designing clean user interfaces, and developing efficient backend systems. I'm continuously learning new technologies and improving my skills to build production-ready applications.",

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
      url: 'https://portfolio-alpha-hazel-45.vercel.app/',
      handle: 'portfolio-alpha-hazel-45.vercel.app'
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
      organization: 'BITM',
      period: 'Add your graduation years',
      description: 'Studied computer applications, programming fundamentals, database management, software development, and web technologies.'
    },
    {
      id: 'edu-2',
      role: 'Higher Secondary Education',
      organization: 'Daspur Vivekananda High School',
      period: 'Add your passing years',
      description: 'Completed higher secondary education with an academic foundation for further studies in computer applications.'
    }
  ],

  experience: [
    {
      id: 'exp-1',
      role: 'Full Stack Developer',
      organization: 'Professional Experience',
      period: 'Add your actual employment period',
      description: 'Working with modern frontend and backend technologies to develop web applications, implement REST APIs, manage databases, and build responsive user interfaces.'
    },
    {
      id: 'exp-2',
      role: 'Full Stack Developer',
      organization: 'Personal & Academic Projects',
      period: 'Ongoing',
      description: 'Developed practical applications including multi-tenant queue booking systems, property management solutions, and backend services with authentication, authorization, database management, and API integration.'
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
    'Spring Boot',
    'Java',
    'REST API Development',
    'PostgreSQL',
    'MySQL',
    'Oracle Database',
    'Prisma ORM',
    'JWT Authentication',
    'Git & GitHub',
    'Tailwind CSS',
    'Shadcn UI',
    'TanStack Query',
    'HTML5 & CSS3',
    'Problem Solving'
  ],

  software: [
    { name: 'React.js', percentage: 85 },
    { name: 'TypeScript / JavaScript', percentage: 85 },
    { name: 'Node.js / Express.js', percentage: 80 },
    { name: 'React native', percentage: 80 },
    { name: 'PostgreSQL / MySQL', percentage: 75 }
  ]
};
