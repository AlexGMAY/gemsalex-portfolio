import React from "react";
import type { Metadata } from "next";
import SuperPricing from "@/components/pricing/Pricing";
import Hero from "@/components/pricing/Hero";
import FAQSection from "@/components/pricing/FAQSection";
import Approach from "@/components/Approach";
import Clients from "@/components/Clients";
import Grid from "@/components/Grid";
import CustomWebsiteSection from "@/components/pricing/CustomWebsiteSection";
import TJMPricingSection from "@/components/pricing/TJMPricingSection";
import ServicesGrid from "@/components/pricing/ServicesGrid";

export const metadata: Metadata = {
  title: "Solutions & Pricing | Premium Software Development Services",
  description:
    "Strategic software solutions with transparent pricing. Custom web development, SaaS platforms, mobile apps, and cloud infrastructure. Get clear pricing for revenue-driving digital solutions.",
  keywords: [
    "software development pricing",
    "web development services",
    "SaaS development cost",
    "custom software solutions",
    "mobile app development pricing",
    "cloud infrastructure pricing",
    "technical consulting rates",
    "full-stack developer pricing",
    "Next.js development services",
    "React development cost",
    "WordPress Website development solutions",
    "WordPress Website development",
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
    canonical: "/solutions",
  },
  openGraph: {
    title: "Solutions & Pricing | Premium Software Development Services",
    description:
      "Strategic software solutions with transparent pricing. Custom web development, SaaS platforms, mobile apps, and cloud infrastructure.",
    url: "https://gemsalex.com/solutions",
    siteName: "Merveille Alexander - Strategic Software Partner",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/api/og?title=Solutions%20%26%20Pricing&description=Premium%20Software%20Development%20Services",
        width: 1200,
        height: 630,
        alt: "Merveille Alexander - Solutions & Pricing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Solutions & Pricing | Premium Software Development",
    description:
      "Strategic software solutions with transparent pricing for web, mobile, and cloud development.",
    creator: "@gemsalex",
    images: [
      "/api/og?title=Solutions%20%26%20Pricing&description=Premium%20Software%20Development%20Services",
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

// Structured Data for SEO
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Software Development Solutions',
  description: 'Premium software development services including web applications, SaaS platforms, mobile apps, and cloud infrastructure.',
  provider: {
    '@type': 'Person',
    name: 'Merveille Alexander',
    jobTitle: 'Strategic Software Engineer',
    url: 'https://gemsalex.com'
  },
  areaServed: 'Worldwide',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Software Development Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Custom Web Development',
          description: 'Revenue-driving web platforms and applications'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'SaaS Development',
          description: 'Scalable Software-as-a-Service solutions'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Mobile App Development',
          description: 'Cross-platform mobile applications'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Cloud Infrastructure',
          description: 'Scalable cloud architecture and deployment'
        }
      }
    ]
  }
};

const Page = () => {
  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <main className="relative bg-black-100 w-full">
        <Hero />
        <div className="max-w-8xl w-full sm:px-10 px-5">
          {/* <DetailedServices /> */}
          <ServicesGrid />
          <SuperPricing pageType="pricing" />
          <CustomWebsiteSection />
          <TJMPricingSection />
          <FAQSection />
          <Approach />
          <Grid />
          <Clients />
        </div>
      </main>
    </>
  );
};

export default Page;
