"use client";

import BlogFeaturedSection from "@/components/blog/BlogFeaturedSection";
import BlogHero from "@/components/blog/BlogHero";
import BlogResourcesSection from "@/components/blog/BlogResourcesSection";
import BlogTutorialsSection from "@/components/blog/BlogTutorialsSection";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data";
import { BlogPost } from "@/lib/BlogPost";
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
  // Convert date strings to Date objects for proper sorting
  const allPosts: BlogPost[] = blogPosts
    .map((post) => ({
      ...post,
      date: new Date(post.date),
      // Transform single tag to tags array if needed
      tags: post.tag ? [post.tag] : [],
      // Add missing required fields with defaults
      content: post.content || "",
      image: post.image || "/client-collab-dark.jpg",
      type: post.type || "article",
      level: post.level || "intermediate",
      // Ensure featured is always boolean
      featured: post.featured || false,
    }))
    .sort((a, b) => b.date.getTime() - a.date.getTime());
  return (
    <main className="relative w-full ">
      <BlogHero allPosts={allPosts} />
      <div className="w-full flex justify-center items-center flex-col sm:px-10 px-5">
        <BlogFeaturedSection allPosts={allPosts} />
        <BlogSection />
        <BlogTutorialsSection posts={allPosts} />
        <BlogResourcesSection />
      </div>
    </main>
  );
}
