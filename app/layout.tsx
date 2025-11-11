import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import { FloatingNav } from "@/components/Navbar";
import { navItems } from "@/data";
import ScrollToTop from "@/components/ui/ScrollToTop";
import FooterGrid from "@/components/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Merveille Alexander - Strategic Software Engineer & Business Solution Developer",
    template: "%s | Merveille Alexander"
  },
  description: "Transform your business with custom software solutions. Full-stack developer specializing in SaaS platforms, web applications, and digital growth strategies. Drive ROI with proven technology.",
  keywords: [
    "software engineer",
    "full-stack developer", 
    "SaaS development",
    "custom software solutions",
    "business automation",
    "web application development",
    "React developer",
    "Next.js developer",
    "business growth technology",
    "Website development",
    "Php developer",
    "frontend developer",
    "backend developer",
    "devops developer"
  ].join(", "),
  authors: [{ name: "Merveille Alexander" }],
  creator: "Merveille Alexander",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gemsalex.com",
    title: "Merveille Alexander - Strategic Software Engineer",
    description: "Transform your business with custom software solutions that drive growth and deliver ROI",
    siteName: "Merveille Alexander Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Merveille Alexander - Strategic Software Engineer",
    description: "Custom software solutions for business growth",
    creator: "@themarvelbiz",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured data for rich snippets
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Merveille Alexander",
    jobTitle: "Strategic Software Engineer",
    description:
      "Full-stack developer building custom software solutions that drive business growth and ROI",
    url: "https://gemsalex.com",
    knowsAbout: [
      "Custom Software Development",
      "SaaS Platform Development",
      "Web Application Development",
      "Business Process Automation",
      "SEO Optimization",
      "Cloud Infrastructure",
    ],
  };
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        {/* Structured data script */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <link rel="icon" href="/logo-MA.png" sizes="any" />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <div className="relative bg-black-100 overflow-hidden mx-auto">
            <FloatingNav navItems={navItems} />
            {children}
            <ScrollToTop />
            <div>
              <FooterGrid />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
