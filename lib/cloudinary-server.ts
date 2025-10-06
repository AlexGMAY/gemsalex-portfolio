import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function getStudentsServer() {
  try {
    const result = await cloudinary.api.resources_by_tag("students", {
      max_results: 50,
      context: true,
      tags: true,
    });

    return result.resources || [];
  } catch (error) {
    console.error("Error fetching students from Cloudinary:", error);
    return [];
  }
}

export async function getGalleryImagesServer() {
  try {
    const result = await cloudinary.api.resources_by_tag("gallery-image", {
      max_results: 100,
      context: true,
      tags: true,
    });

    return result.resources || [];
  } catch (error) {
    console.error("Error fetching gallery images from Cloudinary:", error);
    return [];
  }
}

export async function getGalleryVideosServer() {
  try {
    const result = await cloudinary.api.resources_by_tag("gallery-video", {
      max_results: 100,
      resource_type: "video",
      context: true,
      tags: true,
    });

    return result.resources || [];
  } catch (error) {
    console.error("Error fetching gallery videos from Cloudinary:", error);
    return [];
  }
}

// Combined function to get both images and videos
export async function getGalleryMediaServer() {
  try {
    const [images, videos] = await Promise.all([
      getGalleryImagesServer(),
      getGalleryVideosServer(),
    ]);

    return {
      images,
      videos,
    };
  } catch (error) {
    console.error("Error fetching gallery media from Cloudinary:", error);
    return {
      images: [],
      videos: [],
    };
  }
}

// export async function getMemoriesServer() {
//   try {
//     const result = await cloudinary.api.resources_by_tag("memories", {
//       max_results: 50,
//       context: true,
//       tags: true,
//     });

//     return result.resources || [];
//   } catch (error) {
//     console.error("Error fetching memories from Cloudinary:", error);
//     return [];
//   }
// }

export async function getMemoriesServer() {
  try {
    // Fetch both images AND videos with 'memories' tag
    const [imagesResult, videosResult] = await Promise.all([
      // Get images with memories tag
      cloudinary.api.resources_by_tag("memories", {
        max_results: 50,
        context: true,
        tags: true,
        resource_type: "image", // Explicitly get images
      }),
      // Get videos with memories tag
      cloudinary.api.resources_by_tag("memories", {
        max_results: 50,
        context: true,
        tags: true,
        resource_type: "video", // Explicitly get videos
      }),
    ]);

    // Combine both images and videos
    const combinedMemories = [
      ...(imagesResult.resources || []),
      ...(videosResult.resources || []),
    ];

    return combinedMemories;
  } catch (error) {
    console.error("Error fetching memories from Cloudinary:", error);
    return [];
  }
}

export async function getFamilyServer() {
  try {
    const result = await cloudinary.api.resources_by_tag("family", {
      max_results: 50,
      context: true,
      tags: true,
    });

    return result.resources || [];
  } catch (error) {
    console.error("Error fetching family from Cloudinary:", error);
    return [];
  }
}

// Combined function to get all gallery data
export async function getAllGalleryDataServer() {
  try {
    const [students, galleryMedia, memories, family] = await Promise.all([
      getStudentsServer(),
      getGalleryMediaServer(),
      getMemoriesServer(),
      getFamilyServer(),
    ]);
    
    return {
      students,
      galleryMedia,
      memories,
      family
    };
  } catch (error) {
    console.error('Error fetching all gallery data from Cloudinary:', error);
    return {
      students: [],
      galleryMedia: { images: [], videos: [] },
      memories: [],
      family: []
    };
  }
}