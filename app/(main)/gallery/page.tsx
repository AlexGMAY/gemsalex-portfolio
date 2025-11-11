import React from "react";
import HeroGallery from "@/components/gallery/HeroGallery";
import MemoryHighlights from "@/components/gallery/MemoryHighlights";
import StudentsGallery from "@/components/gallery/StudentsGallery";
import FamilyGallery from "@/components/gallery/FamilyGallery";
import MediaGallery from "@/components/gallery/MediaGallery";
import { getAllGalleryDataServer } from "@/lib/cloudinary-server";

const page = async () => {  

  const galleryData = await getAllGalleryDataServer();

  // Transform the data to ensure it matches CloudinaryResource type
  const transformMediaItem = (item: any) => ({
    public_id: item.public_id,
    secure_url: item.secure_url,
    resource_type: item.resource_type as "image" | "video",
    format: item.format,
    width: item.width,
    height: item.height,
    bytes: item.bytes,
    created_at: item.created_at,
    tags: item.tags || [],
    context: item.context || {},
    // Include other properties that might be needed
    ...item,
  });

  const transformMemoryItem = (item: any) => ({
    public_id: item.public_id,
    secure_url: item.secure_url,
    resource_type: item.resource_type as "image" | "video",
    format: item.format,
    width: item.width,
    height: item.height,
    bytes: item.bytes,
    created_at: item.created_at,
    tags: item.tags || [],
    context: item.context || {},
    ...item,
  });

  const transformFamilyItem = (item: any) => ({
    public_id: item.public_id,
    secure_url: item.secure_url,
    resource_type: item.resource_type as "image" | "video",
    format: item.format,
    width: item.width,
    height: item.height,
    bytes: item.bytes,
    created_at: item.created_at,
    tags: item.tags || [],
    context: item.context || {},
    ...item,
  });

  const combinedMedia = [
    ...(galleryData.galleryMedia.images || []).map(transformMediaItem),
    ...(galleryData.galleryMedia.videos || []).map(transformMediaItem),
  ];

  const memories = (galleryData.memories || []).map(transformMemoryItem);
  const family = (galleryData.family || []).map(transformFamilyItem);
  const students = galleryData.students || [];

  // In your gallery page component - update the debug logs:
  console.log("Gallery Data Summary:", {
    imagesCount: galleryData.galleryMedia.images?.length || 0,
    videosCount: galleryData.galleryMedia.videos?.length || 0,
    memoriesCount: memories.length,
    memoriesImages: memories.filter((m) => m.resource_type === "image").length,
    memoriesVideos: memories.filter((m) => m.resource_type === "video").length,
    studentsCount: students.length,
  });

  return (
    <main className="relative w-full">
      <HeroGallery />
      <div className="w-full sm:px-10 px-5">
        <MediaGallery initialMedia={combinedMedia} />
        <MemoryHighlights initialMemories={memories} />
        <FamilyGallery initialFamily={family} />
        <StudentsGallery initialStudents={students} />
      </div>
    </main>
  );
};

export default page;
