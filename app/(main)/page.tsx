import Hero from "@/components/Hero";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import AboutMe from "@/components/AboutMe";
import Services from "@/components/Services";
import TechLogos from "@/components/TechLogos";
import AnimatedQuote from "@/components/AnimatedQuote";
import Platforms from "@/components/Platforms";
import CallToAction from "@/components/CallToAction";
import Faqs from "@/components/Faqs";
import Skills from "@/components/Skills";
import Realisations from "@/components/Realisations";
import NeonMatrix from "@/components/TechnoMosaic";
import SuperPricing from "@/components/pricing/Pricing";
import { Metadata } from "next";

// SEO Metadata for server component
export const metadata: Metadata = {
  title:
    "Merveille Alexander - Strategic Software Engineer & Business Solution Developer",
  description:
    "Transform your business with custom software solutions. Full-stack developer specializing in SaaS platforms, web applications, and digital growth strategies. Drive ROI with proven technology.",
  keywords: [
    "software engineer",
    "full-stack developer",
    "SaaS development",
    "custom software solutions",
    "business automation",
    "web application development",
    "React developer",
    "Next.js developer",
    "freelance software engineer",
    "technical consultant",
    "web development services",
    "WordPress Website developer",    
  ],
  authors: [{ name: "Merveille Alexander" }],
  creator: "Merveille Alexander",
  publisher: "Merveille Alexander",
  metadataBase: new URL("https://gemsalex.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "Merveille Alexander - Strategic Software Engineer & Business Solution Developer",
    description:
      "Transform your business with custom software solutions that drive growth and deliver ROI. Expert in SaaS, web apps, and digital transformation.",
    url: "https://gemsalex.com",
    type: "website",
    locale: "en_US",
    siteName: "Merveille Alexander - Strategic Software Partner",
    images: [
      {
        url: "/api/og?title=Merveille%20Alexander&description=Strategic%20Software%20Engineer",
        width: 1200,
        height: 630,
        alt: "Merveille Alexander - Strategic Software Engineer & Business Solution Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@gemsalex",
    creator: "@gemsalex",
    title: "Merveille Alexander - Strategic Software Engineer",
    description:
      "Custom software solutions for business growth and digital transformation",
    images: [
      "/api/og?title=Merveille%20Alexander&description=Strategic%20Software%20Engineer",
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

// Structured Data for Homepage
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Merveille Alexander",
  description: "Strategic Software Engineer and Business Solution Developer",
  url: "https://gemsalex.com",
  jobTitle: "Strategic Software Engineer",
  knowsAbout: [
    "Web Development",
    "Software Architecture",
    "SaaS Development",
    "Business Automation",
    "Digital Transformation",
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
    "Technical Consulting",
  ],
  hasOccupation: {
    "@type": "Occupation",
    name: "Software Engineer",
    qualifications: "4+ years experience in full-stack development",
  },
  sameAs: [
    "https://github.com/AlexGMAY",
    "https://www.linkedin.com/in/alexandre-merveille-may/",
    "https://twitter.com/@themarvelbiz",
  ],
};

const Home = () => {
  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <main className="relative w-full">
        {/* Semantic HTML structure for SEO */}
        <article itemScope itemType="https://schema.org/Article">
          <meta
            itemProp="name"
            content="Merveille Alexander - Software Engineering Portfolio"
          />
          <meta
            itemProp="description"
            content="Expert full-stack developer building custom software solutions that drive business growth and deliver measurable ROI"
          />

          <Hero />
          <div className="max-w-7xl w-full mx-auto sm:px-10 px-5">
            <TechLogos />
            <AboutMe />
            <Skills />
            <AnimatedQuote />
            <NeonMatrix />
            <Services />
            <Realisations isHomePage={true} />
            <Platforms />
            <SuperPricing pageType="home" />
            <Approach />
            <Clients />
            <Faqs />
            <CallToAction />
          </div>
        </article>
      </main>
    </>
  );
};

export default Home;
