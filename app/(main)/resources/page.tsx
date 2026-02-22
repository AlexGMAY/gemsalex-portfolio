"use client";

import ResourcesBlogSection from "@/components/resources/ResourcesBlogSection";
import ResourcesHero from "@/components/resources/ResourcesHero";
import ResourcesLinksSection from "@/components/resources/ResourcesLinksSection";
import ResourcesTutorialsSection from "@/components/resources/ResourcesTutorialsSection";
import { getResourcesByType } from "@/lib/resources-utils";
import { Resource } from "@/lib/resources";
import type { Metadata } from "next";
import { useState, useEffect } from "react";

// SEO Configuration - We'll need to handle this differently for client components
// For now, we'll set it up for when we convert back to server components
/*
export const metadata: Metadata = {
  title: "Resources | Merveille Alexander",
  description: "Explore my comprehensive collection of blog posts, tutorials, guides, and curated resources for web developers.",
  keywords: ["resources", "tutorials", "guides", "web development", "Next.js", "React", "JavaScript", "learning materials"],
  openGraph: {
    title: "Developer Resources | Merveille Alexander",
    description: "Comprehensive collection of tutorials, blog posts, and development resources",
    url: "https://gemsalex.com/resources",
    type: "website",
    images: [
      {
        url: "https://gemsalex.com/images/resources-og.jpg",
        width: 1200,
        height: 630,
        alt: "Developer Resources preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Developer Resources | Merveille Alexander",
    description: "Comprehensive collection of tutorials, blog posts, and development resources",
    images: ["https://gemsalex.com/images/resources-twitter.jpg"],
  },
};
*/

// Helper functions similar to your blog structure
// export function getFeaturedResources(resources: Resource[]) {
//   return resources.filter((resource) => resource.featured);
// }

// export function getResourcesByType(resources: Resource[], type: string) {
//   return resources.filter((resource) => resource.type === type);
// }

// export function getLatestResources(resources: Resource[], limit?: number) {
//   const sorted = resources.sort(
//     (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
//   );
//   return limit ? sorted.slice(0, limit) : sorted;
// }

export default function ResourcesPage() {
  const [resources, setResources] = useState<Resource[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadResources() {
      try {
        const res = await fetch("/api/resources");
        const data = await res.json();

        const transformedResources: Resource[] = (data.resources || []).map(
          (resource: any) => ({
            ...resource,
            date: new Date(resource.date),
            tags: resource.tags || [],
            featured: resource.featured || false,
            category: resource.category || resource.type,
            image: resource.image || `/default-${resource.type}-image.jpg`,
            level: resource.level || "intermediate",
            readTime: resource.readTime || "5 min read",
          })
        );

        setResources(transformedResources);
      } catch (error) {
        console.error("Error loading resources:", error);
      } finally {
        setLoading(false);
      }
    }

    loadResources();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p>Loading resources...</p>
        </div>
      </div>
    );
  }

  // Transform and categorize resources
  const allResources: Resource[] = resources.sort(
    (a, b) => b.date.getTime() - a.date.getTime()
  );
 
  const blogResources = getResourcesByType(allResources, "blog");
  const tutorialResources = getResourcesByType(allResources, "tutorials");
  const linkResources = getResourcesByType(allResources, "links"); 

  return (
    <main className="relative w-full">
      <ResourcesHero allResources={allResources} />
      <div className="w-full flex justify-center items-center flex-col sm:px-10 px-5">        
        <ResourcesBlogSection resources={blogResources} />
        <ResourcesTutorialsSection resources={tutorialResources} />
        <ResourcesLinksSection resources={linkResources} />
      </div>
    </main>
  );
}
