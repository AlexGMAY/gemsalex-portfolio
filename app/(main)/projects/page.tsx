import type { Metadata } from "next";
import Realisations from "@/components/Realisations";
import CallToAction from "@/components/CallToAction";
import Clients from "@/components/Clients";
import { Hero } from "@/components/projects/Hero";
import Skills from "@/components/Skills";

export const metadata: Metadata = {
  title:
    "Projects Portfolio | Merveille Alexander - Software Development Case Studies",
  description:
    "Explore my software development portfolio featuring custom web applications, SaaS platforms, e-commerce solutions, and mobile apps built with Next.js, React, and modern technologies.",
  keywords: [
    "software development portfolio",
    "web development projects",
    "Next.js case studies",
    "React projects",
    "SaaS applications",
    "e-commerce websites",
    "mobile app development",
    "WordPress Website development",
    "full-stack projects",
    "web application examples",
    "software engineer portfolio",
  ],
  authors: [{ name: "Merveille Alexander" }],
  creator: "Merveille Alexander",
  publisher: "Merveille Alexander",
  metadataBase: new URL("https://gemsalex.com"),
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Projects Portfolio | Merveille Alexander - Software Development",
    description:
      "Case studies of custom web applications, SaaS platforms, and mobile apps built with modern technologies.",
    url: "https://gemsalex.com/projects",
    siteName: "Merveille Alexander - Strategic Software Partner",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/api/og?title=Projects%20Portfolio&description=Software%20Development%20Case%20Studies",
        width: 1200,
        height: 630,
        alt: "Merveille Alexander - Projects Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects Portfolio | Software Development Case Studies",
    description:
      "Explore custom web applications, SaaS platforms, and mobile apps built with modern technologies.",
    creator: "@gemsalex",
    images: [
      "/api/og?title=Projects%20Portfolio&description=Software%20Development%20Case%20Studies",
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

// Structured Data for Project Portfolio
const structuredData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Software Development Projects Portfolio",
  description: "Collection of software development projects and case studies",
  url: "https://gemsalex.com/projects",
  numberOfItems: 10,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "CreativeWork",
        name: "Web Application Projects",
        description:
          "Custom web applications built with Next.js and React, TypeScript, Node.js, and more",
        creator: {
          "@type": "Person",
          name: "Merveille Alexander",
        },
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "CreativeWork",
        name: "SaaS Platform Development",
        description: "Scalable Software-as-a-Service solutions",
        creator: {
          "@type": "Person",
          name: "Merveille Alexander",
        },
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "CreativeWork",
        name: "E-commerce Solutions",
        description: "Online stores and shopping platforms",
        creator: {
          "@type": "Person",
          name: "Merveille Alexander",
        },
      },
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "CreativeWork",
        name: "WordPress Development",
        description: "Cross-platform WordPress Website development",
        creator: {
          "@type": "Person",
          name: "Merveille Alexander",
        },
      },
    },
    {
      "@type": "ListItem",
      position: 5,
      item: {
        "@type": "CreativeWork",
        name: "Mobile Applications",
        description: "Cross-platform mobile app development",
        creator: {
          "@type": "Person",
          name: "Merveille Alexander",
        },
      },
    },
  ],
};

const Page = () => {
  return (
    <>
      {/* Structured Data for Project Portfolio */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden">
        <div className="w-full">          
          <Hero />
          <div className="max-w-7xl w-full">
            <Realisations />
            <Skills />
            <Clients />
            <CallToAction />
          </div>
        </div>
      </main>
    </>
  );
};

export default Page;

