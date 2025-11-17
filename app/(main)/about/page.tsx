import React from "react";
import type { Metadata } from "next";
import HeroSection from "@/components/about/HeroSection";
import AboutSection from "@/components/about/AboutSection";
import EducationCertificationsSection from "@/components/about/EducationCertificationsSection";
import { UltimateTimeline } from "@/components/Experience";
import StatsSection from "@/components/about/StatsSection";
import ClientsSection from "@/components/about/ClientsSection";
import FunFacts from "@/components/about/FunFacts";
import CertificationsCarousel from "@/components/about/CertificationsCarousel";
import BookshelfCarousel from "@/components/about/BookshelfCarousel";
import Clients from "@/components/Clients";
import Skills from "@/components/Skills";

export const metadata: Metadata = {
  title: "About Merveille Alexander | Strategic Software Engineer & Consultant",
  description:
    "Meet Merveille Alexander - Expert full-stack developer specializing in Next.js, React, Typescript, MERN, PHP, MySQL and scalable software solutions. 8+ years of experience building revenue-driving applications for global clients.",
  keywords: [
    "Merveille Alexander",
    "full-stack developer",
    "software engineer",
    "Next.js expert",
    "React developer",
    "web development consultant",
    "SaaS developer",
    "technical consultant",
    "software architect",
    "freelance developer",
    "WordPress Website developer",
  ],
  authors: [{ name: "Merveille Alexander" }],
  creator: "Merveille Alexander",
  publisher: "Merveille Alexander",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://gemsalex.com"),
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Merveille Alexander | Strategic Software Engineer",
    description:
      "Expert full-stack developer specializing in Next.js, React, and scalable software solutions. 4+ years of experience building revenue-driving applications.",
    url: "https://gemsalex.com/about",
    siteName: "Merveille Alexander - Strategic Software Partner",
    locale: "en_US",
    type: "profile",
    images: [
      {
        url: "/api/og?title=About%20Merveille%20Alexander&description=Strategic%20Software%20Engineer%20%26%20Consultant",
        width: 1200,
        height: 630,
        alt: "Merveille Alexander - Software Engineer Profile",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Merveille Alexander | Software Engineer",
    description:
      "Expert full-stack developer specializing in Next.js, React, and scalable software solutions for global clients.",
    creator: "@gemsalex",
    images: [
      "/api/og?title=About%20Merveille%20Alexander&description=Strategic%20Software%20Engineer%20%26%20Consultant",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

// Structured Data for Personal Profile SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Merveille Alexander",
  description:
    "Strategic Software Engineer and Full-Stack Developer specializing in Next.js, React, and scalable web applications.",
  url: "https://gemsalex.com",
  knowsAbout: [
    "Web Development",
    "Software Architecture",
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "Mern",
    "Express.js",
    "PostgreSQL",
    "MongoDB",
    "Php",
    "MySQL",
    "WordPress Website development",
    "Cloud Infrastructure",
    "SaaS Development",
    "Technical Consulting",
    "System Design",
  ],
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      name: "Full-Stack Web Development",
      credentialCategory: "certification",
    },
  ],
  knowsLanguage: ["English", "French"],
  jobTitle: "Strategic Software Engineer",
  worksFor: {
    "@type": "Organization",
    name: "Freelance Consultant",
  },
  alumniOf: [
    {
      "@type": "EducationalOrganization",
      name: "Self-Taught & Continuous Learning",
    },
  ],
  sameAs: [
    "https://github.com/AlexGMAY",
    "https://www.linkedin.com/in/alexandre-merveille-may/",
    "https://twitter.com/@themarvelbiz",
  ],
  image: "https://gemsalex.com/images/profile.jpg",
};

// Additional Structured Data for Professional Service
const serviceStructuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Merveille Alexander - Software Development",
  description:
    "Professional software development and technical consulting services.",
  provider: {
    "@type": "Person",
    name: "Merveille Alexander",
    jobTitle: "Strategic Software Engineer",
  },
  serviceType: [
    "Web Development",
    "Software Consulting",
    "Technical Architecture",
    "SaaS Development",
    "SEO Optimization",
    "Cloud Solutions",
    "Full-Stack Development",
    "DevOps Solutions",
  ],
  areaServed: "Worldwide",
  availableLanguage: ["English", "French"],
};

const Page = () => {
  return (
    <>
      {/* Structured Data for Personal Profile */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Structured Data for Professional Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceStructuredData),
        }}
      />

      <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden">
        <div className="w-full">
          <HeroSection />
          <div className="w-full sm:px-10 px-5">
            <AboutSection />
            <StatsSection />
            <EducationCertificationsSection />
            <CertificationsCarousel />
            <Skills />
            <UltimateTimeline />
            <FunFacts />
            <BookshelfCarousel />
            <Clients />
            <ClientsSection />
          </div>
        </div>
      </main>
    </>
  );
};

export default Page;
