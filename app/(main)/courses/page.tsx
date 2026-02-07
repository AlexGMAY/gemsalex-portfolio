import React from "react";
import HeroCourse from "@/components/courses/HeroCourse";
import ValueProp from "@/components/courses/ValueProp";
import { Metadata } from "next";
import CoursesCat from "@/components/courses/CoursesCat";
import Audience from "@/components/courses/Audience";
import Process from "@/components/courses/Process";
import Testimonial from "@/components/courses/Testimonial";
import Cta from "@/components/courses/Cta";
import Footer from "@/components/courses/Footer";

/* eslint-disable @next/next/no-img-element */

// SEO Metadata
export const metadata: Metadata = {
  title: "Professional Training | 1-on-1 Tech & Business Mastery",
  description:
    "Premium personalized training in Web Development, MS Office Suite, Digital Marketing, DevOps, and 15+ elite skills. Transform your career with expert-led, hands-on sessions designed for ambitious professionals.",
  keywords: [
    "elite tech training",
    "1-on-1 programming mentorship",
    "executive development programs",
    "MS Excel advanced training",
    "web development mastery",
    "digital marketing expert training",
    "DevOps professional courses",
    "WordPress development mastery",
    "project management certification",
    "premium online courses",
    "career acceleration training",
    "corporate leadership development",
    "flexible expert-led training",
    "hands-on professional development",
  ].join(", "),
  openGraph: {
    title: "Professional Training | 1-on-1 Tech & Business Mastery",
    description:
      "Premium personalized training for career acceleration. Expert-led, hands-on sessions for ambitious professionals.",
    url: "https://gemsalex.com/courses",
    siteName: "Merveille Alexandre | Professional Technology & Business Training",
    images: [
      {
        url: "/og-courses-dark.png",
        width: 1200,
        height: 630,
        alt: "Professional Training Courses",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Training",
    description: "Premium 1-on-1 courses for career acceleration",
    images: ["/og-courses-dark.png"],
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
  metadataBase: new URL("https://gemsalex.com"),
  alternates: {
    canonical: "https://gemsalex.com/courses",
  },
};

// JSON-LD Structured Data
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Elite Professional Tech & Business Training",
  description:
    "Premium personalized 1-on-1 training courses for professionals seeking career acceleration",
  provider: {
    "@type": "Organization",
    name: "Merveille Alexandre",
    sameAs: "https://gemsalex.com",
  },
  offers: {
    "@type": "Offer",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
  },
};

export default function CoursesPage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="min-h-screen bg-gray-950 text-gray-100 overflow-hidden">
        {/* Glowing Orbs */}
        <div className="fixed top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10" />
        <div className="fixed bottom-1/4 right-1/4 w-96 h-96 bg-lime-500/10 rounded-full blur-3xl -z-10" />
        {/* Hero Section */}        
        <HeroCourse />
        {/* Value Proposition */}        
        <ValueProp />

        {/* Course Categories */}        
        <CoursesCat />

        {/* Target Audience */}        
        <Audience />

        {/* Process */}
        <Process />

        {/* Professional Testimonial */}
        {/* <Testimonial /> */}

        {/* CTA */}
        <Cta />

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}

