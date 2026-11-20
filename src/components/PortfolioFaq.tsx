const faqs = [
  {
    q: "Who is Bidyut Kumar Bhowmick?",
    a: "Bidyut Kumar Bhowmick is a Full Stack and Mobile Developer from West Bengal, India, specializing in React, Next.js, TypeScript, Node.js, Express.js, React Native, Expo, PostgreSQL, MySQL, and Prisma ORM.",
  },
  {
    q: "What types of projects has he built?",
    a: "His portfolio spans full-stack web apps, developer documentation systems (Dev Docs), event platforms (Agomoni Sangha), travel booking and clean-energy portals (Travel Booking, SolarNext Energy), and cross-platform iOS/Android mobile apps (Journey Fleet App).",
  },
  {
    q: "What backend and database technologies does he work with?",
    a: "He builds RESTful APIs with Node.js and Express.js, implements JWT authentication, and works with PostgreSQL, MySQL, Oracle Database, and Prisma ORM.",
  },
  {
    q: "Is he available for hire or freelance projects?",
    a: "Yes. He is open to full-time roles as well as custom website, CRM, and mobile app projects via barunbhowmick727@gmail.com.",
  },
];

export function PortfolioFaq() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="relative w-full py-16 md:py-24 px-4 sm:px-8 md:px-12 lg:px-20 bg-bg border-b-2 border-border"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-pop border-2 border-ink rounded-full shadow-sticker mb-4">
            <span className="font-display text-[10px] sm:text-xs uppercase text-ink tracking-widest font-bold">
              DIRECT ANSWERS &amp; KNOWLEDGE BASE
            </span>
          </div>
          <h2 id="faq-heading" className="font-display font-black text-ink text-3xl sm:text-5xl uppercase tracking-tight">
            Frequently Asked <span className="font-script text-primary lowercase text-4xl sm:text-6xl -rotate-3 inline-block">Questions</span>
          </h2>
          <p className="font-body text-xs sm:text-sm text-muted max-w-xl mx-auto mt-2 italic">
            Essential facts, technical capabilities, and direct background answers for search engines and hiring partners.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((item) => (
            <details
              key={item.q}
              open
              className="border-2 border-ink rounded-2xl bg-white p-5 shadow-sticker transition-all hover:-translate-y-0.5"
            >
              <summary className="font-display font-bold text-ink text-base sm:text-lg cursor-pointer select-none">
                {item.q}
              </summary>
              <p className="mt-2.5 font-body text-xs sm:text-[14px] text-[#2A2A2A] leading-relaxed font-medium">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PortfolioFaq;
