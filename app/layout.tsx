// @ts-nocheck
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bidyut Kumar Bhowmick — Full Stack & Mobile Developer",
  description:
    "Full Stack & Mobile Developer from West Bengal, India specializing in React, Next.js, TypeScript, Node.js, React Native, PostgreSQL, and Prisma ORM.",
  metadataBase: new URL("https://bidyut-port-6dmw.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Bidyut Kumar Bhowmick — Full Stack & Mobile Developer",
    description:
      "Building scalable web apps, cross-platform mobile apps, APIs, and custom digital products.",
    url: "https://bidyut-port-6dmw.vercel.app",
    siteName: "Bidyut Kumar Bhowmick Portfolio",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://bidyut-port-6dmw.vercel.app/#person",
      name: "Bidyut Kumar Bhowmick",
      jobTitle: "Full Stack & Mobile Developer",
      url: "https://bidyut-port-6dmw.vercel.app/",
      email: "mailto:barunbhowmick727@gmail.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Asansol",
        addressRegion: "West Bengal",
        addressCountry: "IN",
      },
      alumniOf: {
        "@type": "EducationalOrganization",
        name: "Bengal Institute of Technology & Management (BITM)",
      },
      knowsLanguage: ["Bengali", "English", "Hindi"],
      knowsAbout: [
        "React.js",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "Node.js",
        "Express.js",
        "React Native",
        "Expo",
        "PostgreSQL",
        "MySQL",
        "Oracle Database",
        "Prisma ORM",
        "REST APIs",
        "JWT Authentication",
        "Tailwind CSS",
        "GSAP",
      ],
      sameAs: [
        "https://github.com/bidut04",
        "https://www.linkedin.com/in/bidyut-kumar-bhowmick/",
      ],
    },
    {
      "@type": "ProfilePage",
      "@id": "https://bidyut-port-6dmw.vercel.app/#profilepage",
      url: "https://bidyut-port-6dmw.vercel.app/",
      name: "Bidyut Kumar Bhowmick — Full Stack & Mobile Developer Portfolio",
      mainEntity: {
        "@id": "https://bidyut-port-6dmw.vercel.app/#person",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
