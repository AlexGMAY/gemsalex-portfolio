import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";
import { FloatingNav } from "@/components/Navbar";
import { navItems } from "@/data";
// import { PageTransitionWrapper } from "@/components/PageTransition";
import ScrollToTop from "@/components/ui/ScrollToTop";
// import Footer from "@/components/Footer";
import FooterGrid from "@/components/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Merveille Alexander",
  description: "FullStack Software Engineer, Web Developer, WordPress Developer and Freelance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo-MA.png" sizes="any" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative bg-black-100 overflow-hidden mx-auto">
            <FloatingNav navItems={navItems} />
            {children}
            <ScrollToTop />
            <div>
              <FooterGrid />
            </div>
          </div>
          {/* <PageTransitionWrapper></PageTransitionWrapper> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
