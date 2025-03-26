"use client";

import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

// SEO Configuration
// export const metadata: Metadata = {
//   title: "Blog | Merveille Alexander",
//   description:
//     "Explore my latest articles on web development, Next.js, React, and modern frontend techniques.",
//   keywords: ["blog", "web development", "Next.js", "React", "JavaScript"],
//   openGraph: {
//     title: "Blog | My Developer Portfolio",
//     description:
//       "Technical articles and tutorials about modern web development",
//     url: "https://gemsalex.com/blog",
//     type: "website",
//     images: [
//       {
//         url: "https://yourdomain.com/images/blog-og.jpg",
//         width: 1200,
//         height: 630,
//         alt: "Blog page preview",
//       },
//     ],
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Blog | My Developer Portfolio",
//     description:
//       "Technical articles and tutorials about modern web development",
//     images: ["https://yourdomain.com/images/blog-twitter.jpg"],
//   },
// };

export default function BlogPage() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <BlogSection />
        <Footer />
      </div>
    </main>
  );
}
