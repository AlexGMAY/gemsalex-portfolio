import { prisma } from "./db"; // or your database client

/**
 * Increments view count for a resource
 * @param resourceId - ID of the resource to track
 */
export async function incrementViewCount(resourceId: string) {
  try {
    await prisma.resource.update({
      where: { id: resourceId },
      data: {
        views: { increment: 1 },
      },
    });
  } catch (error) {
    console.error("Failed to increment view count:", error);
  }
}

/**
 * Gets view count for a resource
 * @param resourceId - ID of the resource
 */
export async function getViewCount(resourceId: string) {
  try {
    const resource = await prisma.resource.findUnique({
      where: { id: resourceId },
      select: { views: true },
    });
    return resource?.views || 0;
  } catch (error) {
    console.error("Failed to get view count:", error);
    return 0;
  }
}
