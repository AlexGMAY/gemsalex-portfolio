import { NextResponse } from "next/server";
import { getAllResources, getResourceTypes } from "@/lib/resources";

export async function GET() {
  try {
    const resources = getAllResources();
    const types = getResourceTypes();

    // Transform resources to include additional fields
    const enhancedResources = resources.map((resource) => ({
      ...resource,
      featured: resource.tags?.includes("featured") || false,
      image: `/images/resources/${resource.type}-${resource.slug}.jpg`,
      readTime: calculateReadTime(resource.content),
      level: getResourceLevel(resource.tags || []),
      author: "Merveille Alexander", // Or make this dynamic
    }));

    return NextResponse.json({
      resources: enhancedResources,
      types,
    });
  } catch (error) {
    console.error("Error in resources API:", error);
    return NextResponse.json(
      {
        resources: [],
        types: ["blog", "tutorials", "links"],
        error: "Failed to load resources",
      },
      { status: 500 }
    );
  }
}

// Helper functions
function calculateReadTime(content: string): string {
  const wordsPerMinute = 200;
  const words = content.split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}

function getResourceLevel(
  tags: string[]
): "beginner" | "intermediate" | "advanced" {
  if (tags.includes("advanced")) return "advanced";
  if (tags.includes("beginner")) return "beginner";
  return "intermediate";
}
