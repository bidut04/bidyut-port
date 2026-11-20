import React from 'react';
import { HelpCircle, Sparkles } from 'lucide-react';

export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ_DATA: FAQItem[] = [
  {
    question: 'Who is Bidyut Kumar Bhowmick?',
    answer:
      'Bidyut Kumar Bhowmick is a Full Stack and Mobile Developer from West Bengal, India, specializing in React, Next.js, TypeScript, Node.js, Express.js, React Native, Expo, PostgreSQL, MySQL, and Prisma ORM.'
  },
  {
    question: 'What types of projects has he built?',
    answer:
      'His portfolio spans full-stack web apps, developer documentation systems (Dev Docs), event platforms (Agomoni Sangha), travel booking and clean-energy portals (Travel Booking, SolarNext Energy), and cross-platform iOS/Android mobile apps (Journey Fleet App).'
  },
  {
    question: 'What backend and database technologies does he work with?',
    answer:
      'He builds RESTful APIs with Node.js and Express.js, implements JWT authentication, and works with PostgreSQL, MySQL, Oracle Database, and Prisma ORM.'
  },
  {
    question: 'How can someone hire him or request a custom build?',
    answer:
      'He is currently marked as available for hire and custom web, CRM, or mobile app projects, and can be reached directly via barunbhowmick727@gmail.com or through LinkedIn and GitHub.'
  }
];

export const FAQ: React.FC = () => {
  return (
    <section
      id="faq"
      className="relative w-full py-16 md:py-24 px-4 sm:px-8 md:px-12 lg:px-20 bg-bg border-b-2 border-border"
      aria-label="Frequently Asked Questions and Direct Answers"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-pop border-2 border-ink rounded-full shadow-sticker mb-4">
            <Sparkles className="w-3.5 h-3.5 text-ink" />
            <span className="font-display text-[10px] sm:text-xs uppercase text-ink tracking-widest font-bold">
              DIRECT ANSWERS &amp; KNOWLEDGE BASE
            </span>
          </div>

          <h2 className="font-display font-black text-ink text-3xl sm:text-5xl uppercase tracking-tight">
            Quick <span className="font-script text-primary lowercase text-4xl sm:text-6xl -rotate-3 inline-block">Answers</span>
          </h2>
          <p className="font-body text-xs sm:text-sm text-muted max-w-xl mx-auto mt-2 italic">
            Essential facts, technical capabilities, and direct background answers for search engines and hiring partners.
          </p>
        </div>

        {/* 2x2 Responsive Q&A Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {FAQ_DATA.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 sm:p-7 rounded-3xl border-2 border-ink shadow-sticker transition-transform hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-7 h-7 rounded-full bg-soft border border-ink flex items-center justify-center shrink-0 mt-0.5">
                    <HelpCircle className="w-4 h-4 text-primary" />
                  </div>
                  <h3 className="font-display font-black text-ink text-base sm:text-lg leading-snug">
                    {item.question}
                  </h3>
                </div>
                <p className="font-body text-xs sm:text-[14px] text-[#2A2A2A] leading-relaxed font-medium pl-10">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
