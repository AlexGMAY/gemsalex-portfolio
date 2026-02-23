import type { Metadata } from "next";
import CalendlyScheduler from "@/components/contact/CalendlyScheduler";
import ClientMap from "@/components/contact/ClientMap";
import ContactHero from "@/components/contact/ContactHero";
import ContactMethodMatrix from "@/components/contact/ContactMethodMatrix";
import LocationMap from "@/components/contact/LocationMap";
import SmartContactSystem from "@/components/contact/SmartContactSystem";

export const metadata: Metadata = {
  title: "Contact Merveille Alexander | Get Your Project Started Today",
  description:
    "Ready to start your project? Schedule a free consultation, call, or message directly. Global software development services with flexible contact options.",
  keywords: [
    "contact software developer",
    "hire web developer",
    "schedule consultation",
    "software development quote",
    "freelance developer contact",
    "project discussion",
    "technical consultation",
    "get project estimate",
    "web development services",
    "SaaS development consultation",
    "Contact WordPress Website developer",
  ],
  authors: [{ name: "Merveille Alexander" }],
  creator: "Merveille Alexander",
  publisher: "Merveille Alexander",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  metadataBase: new URL("https://gemsalex.com"),
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Merveille Alexander | Start Your Project",
    description:
      "Schedule a free consultation for your software project. Multiple contact methods available for global clients.",
    url: "https://gemsalex.com/contact",
    siteName: "Merveille Alexander - Strategic Software Partner",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/api/og?title=Contact%20Merveille%20Alexander&description=Start%20Your%20Software%20Project%20Today",
        width: 1200,
        height: 630,
        alt: "Contact Merveille Alexander - Software Development Consultation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Merveille Alexander | Software Development",
    description:
      "Ready to start your project? Schedule a free consultation or get in touch directly.",
    creator: "@gemsalex",
    images: [
      "/api/og?title=Contact%20Merveille%20Alexander&description=Start%20Your%20Software%20Project%20Today",
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
  category: "business",
};

// Structured Data for Contact Page
const structuredData = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Merveille Alexander",
  description:
    "Contact page for software development services and project consultations.",
  url: "https://gemsalex.com/contact",
  mainEntity: {
    "@type": "Person",
    name: "Merveille Alexander",
    jobTitle: "Strategic Software Engineer",
    description:
      "Full-stack developer specializing in web applications, SaaS platforms, and technical consulting.",
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
      "Cloud Infrastructure",
      "SaaS Development",
      "Technical Consulting",
      "System Design",
      "WordPress Website development",
    ],
    availableLanguage: ["English", "French"],
    areaServed: "Worldwide",
    telephone: "+216-53-369-451",
    email: "consultus@gemsalex.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Tunis",
      addressRegion: "Tunis",
      addressCountry: "Tunisia",
    },
  },
  potentialAction: {
    "@type": "ContactPoint",
    contactType: "customer service",
    telephone: "+216-53-369-451",
    email: "consultus@gemsalex.com",
    availableLanguage: ["English", "French"],
    areaServed: "Worldwide",
  },
};

// Additional Structured Data for Appointment Booking
const appointmentStructuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Software Development Consultation",
  description: "Free initial consultation for software development projects.",
  provider: {
    "@type": "Person",
    name: "Merveille Alexander",
  },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    description: "Free initial consultation",
  },
  availableChannel: {
    "@type": "ServiceChannel",
    serviceUrl: "https://gemsalex.com/contact",
    serviceLocation: {
      "@type": "VirtualLocation",
      name: "Online Meeting",
    },
  },
};

const Page = () => {
  return (
    <>
      {/* Structured Data for Contact Page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Structured Data for Appointment Booking */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(appointmentStructuredData),
        }}
      />

      <main className="relative w-full bg-black-100 overflow-hidden">
        <ContactHero />
        <div className="w-full sm:px-10 px-5 lg:max-w-7xl lg:mx-auto">          
          <ContactMethodMatrix />
          <SmartContactSystem />
          <CalendlyScheduler />
          <ClientMap />
          <LocationMap />
        </div>
      </main>
    </>
  );
};

export default Page;

