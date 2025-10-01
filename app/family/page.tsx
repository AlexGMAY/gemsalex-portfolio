import FamilyGallery from '@/components/gallery/FamilyGallery';
import { getFamily } from '@/lib/cloudinary';
import { FamilyResource } from '@/types/cloudinary';

export default async function FamilyPage() {
  let family: FamilyResource[] = [];
  
  try {
    family = await getFamily();
  } catch (error) {
    console.error('Error fetching family:', error);
  }

  return <FamilyGallery initialFamily={family} />;
}