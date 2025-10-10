import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "content");

export interface Resource {
  type: string;
  slug: string;
  title: string;
  date: Date;
  excerpt: string;
  content: string;
  category?: string;
  tags?: string[];
  featured?: boolean;
  image?: string;
  level?: "beginner" | "intermediate" | "advanced";
  readTime?: string;
  author?: string;
}

// Safe function that won't throw during build
export function getAllResources(): Resource[] {
  // Check if directory exists
  if (!fs.existsSync(contentDirectory)) {
    return [];
  }

  try {
    const types = fs.readdirSync(contentDirectory);
    const allResources: Resource[] = [];

    types.forEach((type) => {
      const typePath = path.join(contentDirectory, type);

      // Skip if not a directory
      if (!fs.statSync(typePath).isDirectory()) return;

      try {
        const fileNames = fs.readdirSync(typePath);

        fileNames.forEach((fileName) => {
          if (!fileName.endsWith(".md")) return;

          const slug = fileName.replace(/\.md$/, "");
          const fullPath = path.join(typePath, fileName);

          try {
            const fileContents = fs.readFileSync(fullPath, "utf8");
            const matterResult = matter(fileContents);

            const content = matterResult.content;
            const tags = matterResult.data.tags || [];

            const resource: Resource = {
              type,
              slug,
              title: matterResult.data.title || "Untitled",
              date: new Date(
                matterResult.data.date || new Date().toISOString()
              ),
              excerpt: matterResult.data.excerpt || "",
              content,
              category: matterResult.data.category,
              tags,
              featured:
                matterResult.data.featured ||
                tags.includes("featured") ||
                false,
              image: matterResult.data.image || `/default-${type}-image.jpg`,
              level: matterResult.data.level || getResourceLevel(tags),
              readTime: calculateReadTime(content),
              author: matterResult.data.author || "Merveille Alexander",
            };

            allResources.push(resource);
          } catch (error) {
            console.error(`Error reading file ${fullPath}:`, error);
          }
        });
      } catch (error) {
        console.error(`Error reading type directory ${type}:`, error);
      }
    });

    return allResources.sort((a, b) => {
      return b.date.getTime() - a.date.getTime(); // Newest first
    });
  } catch (error) {
    console.error("Error in getAllResources:", error);
    return [];
  }
}

export function getResourcesByType(type: string): Resource[] {
  const allResources = getAllResources();
  return allResources.filter((resource) => resource.type === type);
}

export function getResource(type: string, slug: string): Resource | null {
  try {
    const fullPath = path.join(contentDirectory, type, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);

    const content = matterResult.content;
    const tags = matterResult.data.tags || [];

    return {
      type,
      slug,
      title: matterResult.data.title || "Untitled",
      date: new Date(matterResult.data.date || new Date().toISOString()),
      excerpt: matterResult.data.excerpt || "",
      content,
      category: matterResult.data.category,
      tags,
      featured:
        matterResult.data.featured || tags.includes("featured") || false,
      image: matterResult.data.image || `/default-${type}-image.jpg`,
      level: matterResult.data.level || getResourceLevel(tags),
      readTime: calculateReadTime(content),
      author: matterResult.data.author || "Merveille Alexander",
    };
  } catch (error) {
    console.error(`Error getting resource ${type}/${slug}:`, error);
    return null;
  }
}

export function getResourceTypes(): string[] {
  if (!fs.existsSync(contentDirectory)) {
    return ["blog", "tutorials", "links"];
  }

  try {
    return fs
      .readdirSync(contentDirectory)
      .filter((item) =>
        fs.statSync(path.join(contentDirectory, item)).isDirectory()
      );
  } catch (error) {
    console.error("Error getting resource types:", error);
    return ["blog", "tutorials", "links"];
  }
}

export function getFeaturedResources(): Resource[] {
  const allResources = getAllResources();
  return allResources.filter((resource) => resource.featured);
}

export function getLatestResources(limit?: number): Resource[] {
  const allResources = getAllResources();
  return limit ? allResources.slice(0, limit) : allResources;
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
