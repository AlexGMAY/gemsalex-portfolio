import MemoryHighlights from "@/components/gallery/MemoryHighlights";
import { getMemories } from "@/lib/cloudinary";
import { MemoryResource } from "@/types/cloudinary";

export default async function MemoriesPage() {
  let memories: MemoryResource[] = [];

  try {
    memories = await getMemories();
  } catch (error) {
    console.error("Error fetching memories:", error);
  }

  return <MemoryHighlights initialMemories={memories} />;
}
