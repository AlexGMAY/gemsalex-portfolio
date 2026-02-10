import type { Metadata } from "next";
import Platforms from "@/components/Platforms";
import Hero from "@/components/products/Hero";
// import Products from "@/components/products/Products";
import TechLogos from "@/components/TechLogos";
// import { productsByCategory } from "@/data/products";
import RecentProjects from "@/components/RecentProjects";

export const metadata: Metadata = {
  title:
    "Innovative Web Apps & Products | Merveille Alexander - Upcoming Projects",
  description:
    "Discover my innovative web applications and upcoming software products. SaaS tools, productivity apps, and creative solutions built with Next.js, React, and cutting-edge technologies.",
  keywords: [
    "innovative web apps",
    "upcoming software products",
    "SaaS development",
    "productivity tools",
    "web application projects",
    "software innovation",
    "Next.js apps",
    "React projects",
    "creative software solutions",
    "tech product development",
  ],
  authors: [{ name: "Merveille Alexander" }],
  creator: "Merveille Alexander",
  publisher: "Merveille Alexander",
  metadataBase: new URL("https://gemsalex.com"),
  alternates: {
    canonical: "/products",
  },
  openGraph: {
    title: "Innovative Web Apps & Products | Merveille Alexander",
    description:
      "Upcoming software products and innovative web applications built with modern technologies.",
    url: "https://gemsalex.com/products",
    siteName: "Merveille Alexander - Strategic Software Partner",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/api/og?title=Innovative%20Web%20Apps&description=Upcoming%20Software%20Products",
        width: 1200,
        height: 630,
        alt: "Merveille Alexander - Innovative Web Apps & Products",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Innovative Web Apps & Products | Upcoming Projects",
    description:
      "Discover innovative software products and web applications in development.",
    creator: "@gemsalex",
    images: [
      "/api/og?title=Innovative%20Web%20Apps&description=Upcoming%20Software%20Products",
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

// Structured Data for Product Showcase
const structuredData = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Innovative Web Applications & Products",
  description:
    "Showcase of upcoming and innovative software products and web applications",
  url: "https://gemsalex.com/products",
  about: {
    "@type": "Thing",
    name: "Software Innovation",
  },
  creator: {
    "@type": "Person",
    name: "Merveille Alexander",
    jobTitle: "Software Engineer",
    knowsAbout: [
      "Web Development",
      "SaaS",
      "Product Development",
      "Innovation",
    ],
  },
};

// Additional structured data for innovation focus
const creativeWorkStructuredData = {
  "@context": "https://schema.org",
  "@type": "CreativeWorkSeries",
  name: "Innovative Software Products",
  description:
    "Series of innovative web applications and software tools in development",
  creator: {
    "@type": "Person",
    name: "Merveille Alexander",
  },
  publisher: {
    "@type": "Person",
    name: "Merveille Alexander",
  },
  genre: ["Technology", "Software", "Web Applications"],
  keywords: "web apps, SaaS, productivity tools, software innovation",
};

const Page = () => {
  return (
    <>
      {/* Structured Data for Product Showcase */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Structured Data for Creative Works */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(creativeWorkStructuredData),
        }}
      />

      <main className="relative w-full bg-black-100 flex justify-center items-center flex-col overflow-hidden">
        <Hero />
        <div className="w-full sm:px-10 px-5">
          <TechLogos />
          <RecentProjects />
          {/* <Products productsByCategory={productsByCategory} /> */}
          <Platforms />
        </div>
      </main>
    </>
  );
};

export default Page;
