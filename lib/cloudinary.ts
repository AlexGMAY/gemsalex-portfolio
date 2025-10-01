import cloudinary from "./cloudinary-config";
import { CloudinaryResource, CloudinaryApiResponse, MemoryResource } from "@/types/cloudinary";

interface GetResourcesOptions {
  resource_type?: "image" | "video";
  max_results?: number;
  tags?: boolean;
  context?: boolean;
}

/**
 * Generic function to fetch resources by tag from Cloudinary
 */
export async function getResourcesByTag(
  tag: string,
  resourceType: "image" | "video" = "image",
  maxResults: number = 20
): Promise<CloudinaryResource[]> {
  try {
    const result = (await cloudinary.api.resources_by_tag(tag, {
      resource_type: resourceType,
      max_results: maxResults,
      tags: true,
      context: true,
    } as GetResourcesOptions)) as CloudinaryApiResponse;

    return result.resources || [];
  } catch (error) {
    console.error(`Error fetching ${resourceType}s with tag ${tag}:`, error);
    return [];
  }
}

/**
 * Fetch mixed images and videos for the Images & Videos section
 */
export async function getImagesAndVideos(): Promise<CloudinaryResource[]> {
  try {
    const [images, videos] = await Promise.all([
      getResourcesByTag("gallery-image", "image", 10),
      getResourcesByTag("gallery-video", "video", 10),
    ]);

    return [...images, ...videos];
  } catch (error) {
    console.error("Error fetching images and videos:", error);
    return [];
  }
}

/**
 * Fetch student-related images
 */
export async function getStudents(): Promise<CloudinaryResource[]> {
  return await getResourcesByTag("students", "image", 8);
}

/**
 * Fetch family-related images
 */
export async function getFamily(): Promise<CloudinaryResource[]> {
  return await getResourcesByTag("family", "image", 8);
}

/**
 * Fetch memory-related images
 */
// export async function getMemories(): Promise<CloudinaryResource[]> {
//   return await getResourcesByTag("memories", "image", 12);
// }

export async function getMemories(): Promise<MemoryResource[]> {
  return await getResourcesByTag("memories", "image", 12);
}

/**
 * Get all gallery data at once (optional - if you need it)
 */
export async function getAllGalleryData(): Promise<{
  imagesVideos: CloudinaryResource[];
  students: CloudinaryResource[];
  family: CloudinaryResource[];
  memories: CloudinaryResource[];
}> {
  try {
    const [imagesVideos, students, family, memories] = await Promise.all([
      getImagesAndVideos(),
      getStudents(),
      getFamily(),
      getMemories(),
    ]);

    return {
      imagesVideos,
      students,
      family,
      memories,
    };
  } catch (error) {
    console.error("Error fetching all gallery data:", error);
    return {
      imagesVideos: [],
      students: [],
      family: [],
      memories: [],
    };
  }
}

// Utility function to check if resource is a video
export function isVideoResource(resource: CloudinaryResource): boolean {
  return resource.resource_type === 'video';
}

// Utility function to check if resource is an image
export function isImageResource(resource: CloudinaryResource): boolean {
  return resource.resource_type === 'image';
}
