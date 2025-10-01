import StudentsGallery from "@/components/gallery/StudentsGallery";
import { getStudents } from "@/lib/cloudinary";
import { StudentResource } from "@/types/cloudinary";

export default async function StudentsPage() {
  let students: StudentResource[] = [];

  try {
    students = await getStudents();
  } catch (error) {
    console.error("Error fetching students:", error);
  }

  return <StudentsGallery initialStudents={students} />;
}
