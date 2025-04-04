import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";
import { FloatingNav } from "@/components/Navbar";
import { navItems } from "@/data";
import { PageTransitionWrapper } from "@/components/PageTransition";


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
        <link rel="icon" href="/favicon-MA.png" sizes="any" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <FloatingNav navItems={navItems} />
          {children}
          {/* <PageTransitionWrapper></PageTransitionWrapper> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
