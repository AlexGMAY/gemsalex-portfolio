import MediaGallery from '@/components/gallery/MediaGallery';
import { getImagesAndVideos } from '@/lib/cloudinary';

export default async function GalleryPage() {
  let media = [];
  
  try {
    media = await getImagesAndVideos();
  } catch (error) {
    console.error('Error fetching media:', error);
  }

  return <MediaGallery initialMedia={media} />;
}