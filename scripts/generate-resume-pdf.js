import fs from 'fs';
import path from 'path';

// Minimal standard PDF-1.4 generator in pure JavaScript (no external dependencies)
function createPdf() {
  const objects = [];

  function addObject(content) {
    objects.push(content);
    return objects.length; // 1-based object number
  }

  // Text lines definition
  const lines = [
    // Header
    { font: 'F2', size: 22, text: 'BIDYUT KUMAR BHOWMICK', x: 50, y: 745 },
    { font: 'F1', size: 12, text: 'Full Stack & Mobile Developer | West Bengal, India', x: 50, y: 728 },
    { font: 'F1', size: 9.5, text: 'Email: barunbhowmick727@gmail.com | Portfolio: bidyut-port-6dmw.vercel.app | GitHub: github.com/bidut04', x: 50, y: 712 },
    { font: 'F1', size: 9.5, text: 'LinkedIn: linkedin.com/in/bidyut-kumar-bhowmick-bb4a6a301', x: 50, y: 698 },

    // Line separator
    // Summary
    { font: 'F2', size: 12, text: 'PROFESSIONAL SUMMARY', x: 50, y: 672 },
    { font: 'F1', size: 9.5, text: 'Passionate Full Stack & Mobile Developer specializing in React, TypeScript, Next.js, Node.js, Express, and React', x: 50, y: 657 },
    { font: 'F1', size: 9.5, text: 'Native. Proven track record building production-grade web platforms, scalable REST APIs, and responsive mobile apps.', x: 50, y: 644 },

    // Technical Skills
    { font: 'F2', size: 12, text: 'TECHNICAL SKILLS', x: 50, y: 620 },
    { font: 'F2', size: 9.5, text: 'Frontend & UI:', x: 50, y: 605 },
    { font: 'F1', size: 9.5, text: 'React.js, Next.js, TypeScript, JavaScript, Tailwind CSS, GSAP Animations, TanStack Query, HTML5, CSS3', x: 135, y: 605 },
    { font: 'F2', size: 9.5, text: 'Backend & APIs:', x: 50, y: 590 },
    { font: 'F1', size: 9.5, text: 'Node.js, Express.js, REST API Development, JWT Authentication, Webhooks, Middleware Engineering', x: 135, y: 590 },
    { font: 'F2', size: 9.5, text: 'Databases & ORM:', x: 50, y: 575 },
    { font: 'F1', size: 9.5, text: 'PostgreSQL, MySQL, Prisma ORM, Relational Database Modeling', x: 135, y: 575 },
    { font: 'F2', size: 9.5, text: 'Mobile & Tooling:', x: 50, y: 560 },
    { font: 'F1', size: 9.5, text: 'React Native, Expo, Git, GitHub, Vite, Postman, Vercel, Netlify', x: 135, y: 560 },

    // Experience
    { font: 'F2', size: 12, text: 'PROFESSIONAL EXPERIENCE', x: 50, y: 535 },
    { font: 'F2', size: 10.5, text: 'Full Stack Web & Application Developer', x: 50, y: 520 },
    { font: 'F1', size: 9.5, text: 'Freelance & Production Projects | 2023 - Present', x: 340, y: 520 },
    { font: 'F1', size: 9.5, text: '- Designed and shipped custom full-stack web applications with React, TypeScript, Node.js, and PostgreSQL.', x: 55, y: 506 },
    { font: 'F1', size: 9.5, text: '- Architected secure REST APIs with JWT authentication, role-based access control, and Prisma ORM data modeling.', x: 55, y: 493 },
    { font: 'F1', size: 9.5, text: '- Implemented high-conversion UI/UX workflows, responsive typography, and sub-second page performance.', x: 55, y: 480 },

    { font: 'F2', size: 10.5, text: 'Frontend & Mobile Application Engineer', x: 50, y: 460 },
    { font: 'F1', size: 9.5, text: 'Production Solutions | 2022 - Present', x: 340, y: 460 },
    { font: 'F1', size: 9.5, text: '- Engineered cross-platform mobile apps using React Native and Expo with native gesture navigation.', x: 55, y: 446 },
    { font: 'F1', size: 9.5, text: '- Developed interactive developer portals, knowledgebases, and festival web platforms with custom audio.', x: 55, y: 433 },

    // Featured Projects
    { font: 'F2', size: 12, text: 'FEATURED PROJECTS', x: 50, y: 408 },
    { font: 'F2', size: 10, text: '1. Journey Fleet Charter App:', x: 50, y: 393 },
    { font: 'F1', size: 9.5, text: 'Cross-platform mobile booking app for bus fleets and charter rentals with Expo & TypeScript.', x: 195, y: 393 },
    { font: 'F2', size: 10, text: '2. Dev Docs Knowledgebase:', x: 50, y: 379 },
    { font: 'F1', size: 9.5, text: 'Developer documentation portal with tech stack guides, instant search, and code reference layout.', x: 195, y: 379 },
    { font: 'F2', size: 10, text: '3. SolarNext Energy Platform:', x: 50, y: 365 },
    { font: 'F1', size: 9.5, text: 'Clean-energy engineering portal with active plant telemetry (50.4 MW), ROI calculators, and consultation.', x: 195, y: 365 },
    { font: 'F2', size: 10, text: '4. Agomoni Sangha Cultural Portal:', x: 50, y: 351 },
    { font: 'F1', size: 9.5, text: 'Festival platform with live countdown timers, pandal directories, and online donation integration.', x: 195, y: 351 },
    { font: 'F2', size: 10, text: '5. Retro Sticker Portfolio:', x: 50, y: 337 },
    { font: 'F1', size: 9.5, text: 'Award-style 90s aesthetic portfolio with 60fps Lenis smooth scroll and interactive GSAP transitions.', x: 195, y: 337 },

    // Education
    { font: 'F2', size: 12, text: 'EDUCATION', x: 50, y: 312 },
    { font: 'F2', size: 10, text: 'Bachelor of Computer Applications (BCA)', x: 50, y: 297 },
    { font: 'F1', size: 9.5, text: 'Bengal Institute of Technology & Management (BITM) | 2021 - 2024', x: 260, y: 297 },
    { font: 'F1', size: 9, text: 'Coursework: Data Structures, Database Systems, Web Application Development, Algorithms, Software Engineering.', x: 55, y: 284 },

    { font: 'F2', size: 10, text: 'Higher Secondary Education (Science & Computer Application)', x: 50, y: 265 },
    { font: 'F1', size: 9.5, text: 'Daspur Vivekananda High School | 2019 - 2021', x: 350, y: 265 },
    { font: 'F1', size: 9, text: 'Specialization in Mathematics, Physics, Chemistry, and Computer Applications.', x: 55, y: 252 },

    // Languages
    { font: 'F2', size: 12, text: 'LANGUAGES', x: 50, y: 227 },
    { font: 'F1', size: 9.5, text: 'English (Professional Working Proficiency)  |  Bengali (Native)  |  Hindi (Conversational)', x: 50, y: 212 }
  ];

  // Draw content stream
  let stream = '';
  
  // Horizontal dividing rules
  const rules = [688, 634, 549, 422, 326, 241];
  rules.forEach(y => {
    stream += `0.75 w 0.2 0.2 0.2 RG 50 ${y} m 560 ${y} l S\n`;
  });

  // Text rendering
  stream += 'BT\n';
  lines.forEach(item => {
    // Escape parentheses
    const safeText = item.text.replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)');
    stream += `/${item.font} ${item.size} Tf\n`;
    stream += `1 0 0 1 ${item.x} ${item.y} Tm\n`;
    stream += `(${safeText}) Tj\n`;
  });
  stream += 'ET\n';

  // Construct PDF objects
  // 1: Catalog
  // 2: Pages
  // 3: Page
  // 4: Font F1 (Helvetica)
  // 5: Font F2 (Helvetica-Bold)
  // 6: Stream
  const obj1 = '<< /Type /Catalog /Pages 2 0 R >>';
  const obj2 = '<< /Type /Pages /Kids [3 0 R] /Count 1 >>';
  const obj4 = '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>';
  const obj5 = '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>';
  const obj6 = `<< /Length ${Buffer.byteLength(stream, 'utf-8')} >>\nstream\n${stream}\nendstream`;
  const obj3 = '<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 6 0 R /Resources << /Font << /F1 4 0 R /F2 5 0 R >> >> >>';

  const rawObjs = [obj1, obj2, obj3, obj4, obj5, obj6];

  let pdf = '%PDF-1.4\n';
  const xrefs = [];

  rawObjs.forEach((content, index) => {
    xrefs.push(Buffer.byteLength(pdf, 'utf-8'));
    pdf += `${index + 1} 0 obj\n${content}\nendobj\n`;
  });

  const startXref = Buffer.byteLength(pdf, 'utf-8');
  pdf += 'xref\n';
  pdf += `0 ${rawObjs.length + 1}\n`;
  pdf += '0000000000 65535 f \n';
  xrefs.forEach(offset => {
    const formatted = String(offset).padStart(10, '0');
    pdf += `${formatted} 00000 n \n`;
  });

  pdf += 'trailer\n';
  pdf += `<< /Size ${rawObjs.length + 1} /Root 1 0 R >>\n`;
  pdf += 'startxref\n';
  pdf += `${startXref}\n`;
  pdf += '%%EOF\n';

  return pdf;
}

const outputPath = path.resolve('public/resume.pdf');
const pdfContent = createPdf();
fs.writeFileSync(outputPath, pdfContent, 'binary');
console.log(`Generated ${outputPath} (${pdfContent.length} bytes)`);
