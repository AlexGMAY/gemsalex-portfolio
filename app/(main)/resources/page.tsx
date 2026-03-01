import ResourcesBlogSection from "@/components/resources/ResourcesBlogSection";
import ResourcesHero from "@/components/resources/ResourcesHero";
import ResourcesLinksSection from "@/components/resources/ResourcesLinksSection";
import ResourcesTutorialsSection from "@/components/resources/ResourcesTutorialsSection";

import { getAllResources, Resource } from "@/lib/resources";
import { Metadata } from "next";


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

type SerializedResource = Omit<Resource, "date"> & {
  date: string; // Override date to be string
};

export default function ResourcesPage() {
  const allResources = getAllResources();

  // Type assertion to tell TypeScript this is intentional
  const serializedResources: SerializedResource[] = allResources.map(
    (resource) => ({
      ...resource,
      date: resource.date.toISOString(),
    }),
  );

  // Filter resources by type
   const blogResources = serializedResources.filter((r) => r.type === "blog");
   const tutorialResources = serializedResources.filter(
     (r) => r.type === "tutorials",
   );
   const linkResources = serializedResources.filter((r) => r.type === "links");

  return (
    <main className="relative w-full">
      <ResourcesHero allResources={serializedResources as any} />

      <div className="w-full flex justify-center items-center flex-col sm:px-10 px-5">
        <ResourcesBlogSection resources={blogResources as any} />
        <ResourcesTutorialsSection resources={tutorialResources as any} />
        <ResourcesLinksSection resources={linkResources as any} />
      </div>
    </main>
  );
}