
// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import { StudentResource } from "@/types/cloudinary";

// // Mock data for English, Web Dev, and MS 365 students
// const mockStudents: StudentResource[] = [
//   {
//     public_id: "student-1",
//     secure_url: "/api/placeholder/400/400",
//     resource_type: "image",
//     format: "jpg",
//     width: 400,
//     height: 400,
//     bytes: 10240,
//     created_at: new Date().toISOString(),
//     tags: ["students"],
//     context: {
//       custom: {
//         studentName: "Sarah Chen",
//         courseName: "Business English Mastery",
//         subject: "english",
//         level: "advanced",
//         progress: "90%",
//         alt: "Sarah during English conversation practice",
//       },
//     },
//   },
//   {
//     public_id: "student-2",
//     secure_url: "/api/placeholder/400/400",
//     resource_type: "image",
//     format: "jpg",
//     width: 400,
//     height: 400,
//     bytes: 10240,
//     created_at: new Date().toISOString(),
//     tags: ["students"],
//     context: {
//       custom: {
//         studentName: "Marcus Rodriguez",
//         courseName: "React & Next.js Pro",
//         subject: "web-dev",
//         level: "intermediate",
//         progress: "65%",
//         alt: "Marcus working on React project",
//       },
//     },
//   },
//   {
//     public_id: "student-3",
//     secure_url: "/api/placeholder/400/400",
//     resource_type: "image",
//     format: "jpg",
//     width: 400,
//     height: 400,
//     bytes: 10240,
//     created_at: new Date().toISOString(),
//     tags: ["students"],
//     context: {
//       custom: {
//         studentName: "Emily Watson",
//         courseName: "MS 365 Workplace Efficiency",
//         subject: "ms-365",
//         level: "beginner",
//         progress: "40%",
//         alt: "Emily learning Excel formulas",
//       },
//     },
//   },
//   {
//     public_id: "student-4",
//     secure_url: "/api/placeholder/400/400",
//     resource_type: "image",
//     format: "jpg",
//     width: 400,
//     height: 400,
//     bytes: 10240,
//     created_at: new Date().toISOString(),
//     tags: ["students"],
//     context: {
//       custom: {
//         studentName: "Alex Thompson",
//         courseName: "JavaScript Fundamentals",
//         subject: "web-dev",
//         level: "beginner",
//         progress: "75%",
//         alt: "Alex coding JavaScript exercises",
//       },
//     },
//   },
//   {
//     public_id: "student-5",
//     secure_url: "/api/placeholder/400/400",
//     resource_type: "image",
//     format: "jpg",
//     width: 400,
//     height: 400,
//     bytes: 10240,
//     created_at: new Date().toISOString(),
//     tags: ["students"],
//     context: {
//       custom: {
//         studentName: "Priya Sharma",
//         courseName: "Academic Writing Excellence",
//         subject: "english",
//         level: "intermediate",
//         progress: "55%",
//         alt: "Priya during writing workshop",
//       },
//     },
//   },
//   {
//     public_id: "student-6",
//     secure_url: "/api/placeholder/400/400",
//     resource_type: "image",
//     format: "jpg",
//     width: 400,
//     height: 400,
//     bytes: 10240,
//     created_at: new Date().toISOString(),
//     tags: ["students"],
//     context: {
//       custom: {
//         studentName: "David Kim",
//         courseName: "Teams & SharePoint Management",
//         subject: "ms-365",
//         level: "advanced",
//         progress: "85%",
//         alt: "David presenting Teams workflow",
//       },
//     },
//   },
// ];

// interface StudentsGalleryProps {
//   initialStudents?: StudentResource[];
// }

// type SubjectFilter = "all" | "english" | "web-dev" | "ms-365";

// export default function StudentsGallery({
//   initialStudents,
// }: StudentsGalleryProps) {
//   const [selectedStudent, setSelectedStudent] =
//     useState<StudentResource | null>(null);
//   const [activeFilter, setActiveFilter] = useState<SubjectFilter>("all");
//   const [students] = useState<StudentResource[]>(
//     initialStudents || mockStudents
//   );

//   // Filter students based on active filter
//   const filteredStudents =
//     activeFilter === "all"
//       ? students
//       : students.filter(
//           (student) => student.context?.custom?.subject === activeFilter
//         );

//   const getInitials = (name: string) => {
//     return name
//       .split(" ")
//       .map((word) => word[0])
//       .join("")
//       .toUpperCase();
//   };

//   const getSubjectIcon = (subject: string) => {
//     switch (subject) {
//       case "english":
//         return "📚";
//       case "web-dev":
//         return "💻";
//       case "ms-365":
//         return "📊";
//       default:
//         return "👨‍🎓";
//     }
//   };

//   const getSubjectColor = (subject: string) => {
//     switch (subject) {
//       case "english":
//         return "from-purple-500 to-pink-500";
//       case "web-dev":
//         return "from-blue-500 to-cyan-500";
//       case "ms-365":
//         return "from-green-500 to-emerald-500";
//       default:
//         return "from-gray-500 to-gray-600";
//     }
//   };

//   const getSubjectTextColor = (subject: string) => {
//     switch (subject) {
//       case "english":
//         return "text-purple-400";
//       case "web-dev":
//         return "text-blue-400";
//       case "ms-365":
//         return "text-green-400";
//       default:
//         return "text-gray-400";
//     }
//   };

//   const getLevelColor = (level: string) => {
//     switch (level) {
//       case "beginner":
//         return "bg-green-900 text-green-300";
//       case "intermediate":
//         return "bg-yellow-900 text-yellow-300";
//       case "advanced":
//         return "bg-red-900 text-red-300";
//       default:
//         return "bg-gray-800 text-gray-300";
//     }
//   };

//   const getProgressColor = (progress: string) => {
//     const percent = parseInt(progress);
//     if (percent >= 80) return "bg-green-500";
//     if (percent >= 60) return "bg-yellow-500";
//     return "bg-red-500";
//   };

//   const filterButtons: { id: SubjectFilter; label: string; emoji: string }[] = [
//     { id: "all", label: "All Students", emoji: "👥" },
//     { id: "english", label: "English", emoji: "📚" },
//     { id: "web-dev", label: "Web Dev", emoji: "💻" },
//     { id: "ms-365", label: "MS 365", emoji: "📊" },
//   ];

//   // Handle filter change
//   const handleFilterChange = (filter: SubjectFilter) => {
//     setActiveFilter(filter);
//   };

//   if (students.length === 0) {
//     return (
//       <section className="py-16 bg-gray-900 min-h-screen">
//         <div className="container mx-auto px-4">
//           <div className="text-center">
//             <div className="w-24 h-24 mx-auto mb-6 bg-gray-800 rounded-full flex items-center justify-center">
//               <span className="text-2xl">👨‍🎓</span>
//             </div>
//             <h2 className="text-3xl font-bold text-white mb-4">My Students</h2>
//             <p className="text-gray-400 mb-8 max-w-md mx-auto">
//               No student photos available yet. Upload images to Cloudinary with
//               the "students" tag to showcase your students here.
//             </p>
//           </div>
//         </div>
//       </section>
//     );
//   }

//   return (
//     <section className="pt-24 pb-28">
//       <div className="container mx-auto px-4">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <h2 className="text-5xl font-bold text-white mb-4">
//            Some Of My{" "}
//             <span className="bg-gradient-to-r from-blue-400 to-lime-400 bg-clip-text text-transparent">
//               Brilliant Students
//             </span>
//           </h2>
//           <p className="text-lg text-gray-400 max-w-2xl mx-auto">
//             Meet the talented individuals I guide in English, Web Development,
//             and Microsoft 365. Each student brings unique potential and
//             dedication to their learning journey.
//           </p>
//         </div>

//         {/* Filter Buttons - FIXED VERSION */}
//         <div className="flex flex-wrap justify-center gap-3 mb-8">
//           {filterButtons.map((filter) => (
//             <button
//               key={filter.id}
//               onClick={() => handleFilterChange(filter.id)}
//               className={`
//                 px-6 py-3 rounded-xl font-semibold transition-all duration-300 
//                 flex items-center gap-3 border-2 cursor-pointer
//                 ${
//                   activeFilter === filter.id
//                     ? "bg-gradient-to-r from-blue-400 to-lime-600 text-white border-transparent shadow-2xl shadow-lime-500/25 transform scale-105"
//                     : "bg-gray-800 text-gray-300 border-gray-600 hover:bg-gray-700 hover:border-gray-500 hover:scale-102"
//                 }
//               `}
//             >
//               <span className="text-lg">{filter.emoji}</span>
//               {filter.label}
//               {activeFilter === filter.id && (
//                 <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
//               )}
//             </button>
//           ))}
//         </div>

//         {/* Results Count */}
//         <div className="text-center mb-8">
//           <p className="text-gray-400">
//             Showing{" "}
//             <span className="text-white font-semibold">
//               {filteredStudents.length}
//             </span>{" "}
//             of{" "}
//             <span className="text-white font-semibold">{students.length}</span>{" "}
//             students
//             {activeFilter !== "all" && (
//               <span>
//                 {" "}
//                 in{" "}
//                 <span className="capitalize text-blue-400">{activeFilter}</span>
//               </span>
//             )}
//           </p>
//         </div>

//         {/* Students Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filteredStudents.map((student, index) => (
//             <div
//               key={student.public_id}
//               className="group bg-gray-800 rounded-xl shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 transform hover:-translate-y-1 overflow-hidden border border-gray-700 hover:border-gray-600"
//             >
//               {/* Image Container */}
//               <div
//                 className="relative h-48 bg-gradient-to-br from-gray-700 to-gray-900 cursor-pointer"
//                 onClick={() => setSelectedStudent(student)}
//               >
//                 {student.secure_url.includes("placeholder") ? (
//                   <div className="w-full h-full flex items-center justify-center">
//                     <div className="text-center">
//                       <div
//                         className={`w-16 h-16 bg-gradient-to-r ${getSubjectColor(
//                           student.context?.custom?.subject || ""
//                         )} rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg`}
//                       >
//                         <span className="text-2xl text-white">
//                           {getSubjectIcon(
//                             student.context?.custom?.subject || ""
//                           )}
//                         </span>
//                       </div>
//                       <p className="text-sm text-gray-400 font-medium">
//                         Student Photo
//                       </p>
//                     </div>
//                   </div>
//                 ) : (
//                   <Image
//                     src={student.secure_url}
//                     alt={student.context?.custom?.alt || `Student ${index + 1}`}
//                     fill
//                     className="object-cover group-hover:scale-105 transition-transform duration-300"
//                     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//                   />
//                 )}

//                 {/* Overlay */}
//                 <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300" />

//                 {/* Level Badge */}
//                 {student.context?.custom?.level && (
//                   <div
//                     className={`absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-semibold ${getLevelColor(
//                       student.context.custom.level
//                     )}`}
//                   >
//                     {student.context.custom.level}
//                   </div>
//                 )}

//                 {/* Subject Badge */}
//                 {student.context?.custom?.subject && (
//                   <div className="absolute top-3 left-3 px-2 py-1 bg-gray-900 bg-opacity-80 rounded-full text-xs font-semibold text-gray-300">
//                     {getSubjectIcon(student.context.custom.subject)}{" "}
//                     {student.context.custom.subject.toUpperCase()}
//                   </div>
//                 )}
//               </div>

//               {/* Student Info */}
//               <div className="p-5">
//                 <div className="flex items-start justify-between mb-3">
//                   <div className="flex-1">
//                     <h3 className="text-lg font-bold text-white mb-1 line-clamp-1">
//                       {student.context?.custom?.studentName ||
//                         `Student ${index + 1}`}
//                     </h3>
//                     <div className="flex items-center gap-2 mb-2">
//                       <span
//                         className={`text-lg ${getSubjectTextColor(
//                           student.context?.custom?.subject || ""
//                         )}`}
//                       >
//                         {getSubjectIcon(student.context?.custom?.subject || "")}
//                       </span>
//                       <p
//                         className={`font-semibold ${getSubjectTextColor(
//                           student.context?.custom?.subject || ""
//                         )}`}
//                       >
//                         {student.context?.custom?.courseName ||
//                           "Professional Course"}
//                       </p>
//                     </div>
//                   </div>
//                   <div className="w-10 h-10 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full flex items-center justify-center text-white font-bold text-sm border border-gray-600">
//                     {getInitials(
//                       student.context?.custom?.studentName || `S${index + 1}`
//                     )}
//                   </div>
//                 </div>

//                 {/* Progress Bar */}
//                 {student.context?.custom?.progress && (
//                   <div className="mb-4">
//                     <div className="flex justify-between text-sm text-gray-400 mb-1">
//                       <span>Course Progress</span>
//                       <span>{student.context.custom.progress}</span>
//                     </div>
//                     <div className="w-full bg-gray-700 rounded-full h-2">
//                       <div
//                         className={`h-2 rounded-full ${getProgressColor(
//                           student.context.custom.progress
//                         )} transition-all duration-500`}
//                         style={{ width: student.context.custom.progress }}
//                       />
//                     </div>
//                   </div>
//                 )}

//                 {/* View Details Button */}
//                 <button
//                   onClick={() => setSelectedStudent(student)}
//                   className="w-full bg-gradient-to-r from-blue-400 to-lime-600 text-white py-2 px-4 rounded-lg font-semibold hover:from-blue-500 hover:to-lime-500 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-lime-500/25"
//                 >
//                   View Progress
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Empty Filter State */}
//         {filteredStudents.length === 0 && (
//           <div className="text-center py-12">
//             <div className="w-24 h-24 mx-auto mb-4 bg-gray-800 rounded-full flex items-center justify-center">
//               <span className="text-3xl">🔍</span>
//             </div>
//             <h3 className="text-xl font-bold text-white mb-2">
//               No students found
//             </h3>
//             <p className="text-gray-400">
//               No students match the selected filter. Try choosing a different
//               subject.
//             </p>
//             <button
//               onClick={() => setActiveFilter("all")}
//               className="mt-4 px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-500 hover:to-purple-500 transition-all duration-200"
//             >
//               Show All Students
//             </button>
//           </div>
//         )}

//         {/* Student Detail Modal */}
//         {selectedStudent && (
//           <div
//             className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4"
//             onClick={() => setSelectedStudent(null)}
//           >
//             <div
//               className="bg-gray-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-700"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <div className="relative h-64 bg-gradient-to-br from-gray-700 to-gray-900">
//                 {selectedStudent.secure_url.includes("placeholder") ? (
//                   <div className="w-full h-full flex items-center justify-center">
//                     <div className="text-center">
//                       <div
//                         className={`w-20 h-20 bg-gradient-to-r ${getSubjectColor(
//                           selectedStudent.context?.custom?.subject || ""
//                         )} rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl`}
//                       >
//                         <span className="text-3xl text-white">
//                           {getSubjectIcon(
//                             selectedStudent.context?.custom?.subject || ""
//                           )}
//                         </span>
//                       </div>
//                       <p className="text-lg text-gray-400 font-medium">
//                         Student Photo
//                       </p>
//                     </div>
//                   </div>
//                 ) : (
//                   <Image
//                     src={selectedStudent.secure_url}
//                     alt={
//                       selectedStudent.context?.custom?.alt || "Student photo"
//                     }
//                     fill
//                     className="object-cover"
//                     sizes="(max-width: 768px) 100vw, 800px"
//                   />
//                 )}

//                 <button
//                   onClick={() => setSelectedStudent(null)}
//                   className="absolute top-4 right-4 w-8 h-8 bg-gray-900 bg-opacity-90 rounded-full flex items-center justify-center text-gray-300 hover:text-white transition-colors border border-gray-700"
//                 >
//                   ✕
//                 </button>
//               </div>

//               <div className="p-8">
//                 <div className="flex items-start justify-between mb-6">
//                   <div>
//                     <h3 className="text-2xl font-bold text-white mb-2">
//                       {selectedStudent.context?.custom?.studentName ||
//                         "Student"}
//                     </h3>
//                     <div className="flex items-center gap-3">
//                       <span
//                         className={`text-xl ${getSubjectTextColor(
//                           selectedStudent.context?.custom?.subject || ""
//                         )}`}
//                       >
//                         {getSubjectIcon(
//                           selectedStudent.context?.custom?.subject || ""
//                         )}
//                       </span>
//                       <p
//                         className={`text-lg font-semibold ${getSubjectTextColor(
//                           selectedStudent.context?.custom?.subject || ""
//                         )}`}
//                       >
//                         {selectedStudent.context?.custom?.courseName ||
//                           "Professional Course"}
//                       </p>
//                     </div>
//                   </div>
//                   {selectedStudent.context?.custom?.level && (
//                     <div
//                       className={`px-4 py-2 rounded-full font-semibold ${getLevelColor(
//                         selectedStudent.context.custom.level
//                       )}`}
//                     >
//                       {selectedStudent.context.custom.level}
//                     </div>
//                   )}
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//                   <div className="bg-gray-700 rounded-lg p-4 border border-gray-600">
//                     <h4 className="font-semibold text-gray-300 mb-2 flex items-center gap-2">
//                       <span>📚</span>
//                       Current Course
//                     </h4>
//                     <p className="text-white">
//                       {selectedStudent.context?.custom?.courseName ||
//                         "Professional Development"}
//                     </p>
//                   </div>

//                   <div className="bg-gray-700 rounded-lg p-4 border border-gray-600">
//                     <h4 className="font-semibold text-gray-300 mb-2 flex items-center gap-2">
//                       <span>⭐</span>
//                       Skill Level
//                     </h4>
//                     <p className="text-white capitalize">
//                       {selectedStudent.context?.custom?.level ||
//                         "Not specified"}
//                     </p>
//                   </div>
//                 </div>

//                 {/* Progress Section */}
//                 {selectedStudent.context?.custom?.progress && (
//                   <div className="bg-gray-700 rounded-lg p-4 border border-gray-600 mb-6">
//                     <h4 className="font-semibold text-gray-300 mb-3 flex items-center gap-2">
//                       <span>📈</span>
//                       Course Progress
//                     </h4>
//                     <div className="flex items-center gap-4">
//                       <div className="flex-1">
//                         <div className="w-full bg-gray-600 rounded-full h-3">
//                           <div
//                             className={`h-3 rounded-full ${getProgressColor(
//                               selectedStudent.context.custom.progress
//                             )} transition-all duration-1000`}
//                             style={{
//                               width: selectedStudent.context.custom.progress,
//                             }}
//                           />
//                         </div>
//                       </div>
//                       <span className="text-white font-semibold text-lg">
//                         {selectedStudent.context.custom.progress}
//                       </span>
//                     </div>
//                   </div>
//                 )}

//                 <div className="bg-gradient-to-r from-gray-700 to-gray-800 rounded-lg p-6 border border-gray-600">
//                   <h4 className="font-semibold text-gray-300 mb-3">
//                     Learning Journey
//                   </h4>
//                   <p className="text-gray-400">
//                     {selectedStudent.context?.custom?.studentName ||
//                       "This student"}{" "}
//                     is making excellent progress in{" "}
//                     {selectedStudent.context?.custom?.courseName?.toLowerCase() ||
//                       "their course"}
//                     . Their dedication to mastering{" "}
//                     {selectedStudent.context?.custom?.subject === "english"
//                       ? "English language skills"
//                       : selectedStudent.context?.custom?.subject === "web-dev"
//                       ? "web development technologies"
//                       : "Microsoft 365 applications"}{" "}
//                     is commendable and shows great potential for future success.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }

// const mockStudents: StudentResource[] = [
//   {
//     public_id: "student-1",
//     secure_url: "/api/placeholder/400/400",
//     resource_type: "image",
//     format: "jpg",
//     width: 400,
//     height: 400,
//     bytes: 10240,
//     created_at: new Date().toISOString(),
//     tags: ["students"],
//     context: {
//       custom: {
//         studentName: "Sarah Chen",
//         courseName: "Business English Mastery",
//         subject: "english",
//         level: "advanced",
//         progress: "90%",
//         alt: "Sarah during English conversation practice",
//       },
//     },
//   },
//   {
//     public_id: "student-2",
//     secure_url: "/api/placeholder/400/400",
//     resource_type: "image",
//     format: "jpg",
//     width: 400,
//     height: 400,
//     bytes: 10240,
//     created_at: new Date().toISOString(),
//     tags: ["students"],
//     context: {
//       custom: {
//         studentName: "Marcus Rodriguez",
//         courseName: "React & Next.js Pro",
//         subject: "web-dev",
//         level: "intermediate",
//         progress: "65%",
//         alt: "Marcus working on React project",
//       },
//     },
//   },
//   {
//     public_id: "student-3",
//     secure_url: "/api/placeholder/400/400",
//     resource_type: "image",
//     format: "jpg",
//     width: 400,
//     height: 400,
//     bytes: 10240,
//     created_at: new Date().toISOString(),
//     tags: ["students"],
//     context: {
//       custom: {
//         studentName: "Emily Watson",
//         courseName: "MS 365 Workplace Efficiency",
//         subject: "ms-365",
//         level: "beginner",
//         progress: "40%",
//         alt: "Emily learning Excel formulas",
//       },
//     },
//   },
//   {
//     public_id: "student-4",
//     secure_url: "/api/placeholder/400/400",
//     resource_type: "image",
//     format: "jpg",
//     width: 400,
//     height: 400,
//     bytes: 10240,
//     created_at: new Date().toISOString(),
//     tags: ["students"],
//     context: {
//       custom: {
//         studentName: "Alex Thompson",
//         courseName: "JavaScript Fundamentals",
//         subject: "web-dev",
//         level: "beginner",
//         progress: "75%",
//         alt: "Alex coding JavaScript exercises",
//       },
//     },
//   },
//   {
//     public_id: "student-5",
//     secure_url: "/api/placeholder/400/400",
//     resource_type: "image",
//     format: "jpg",
//     width: 400,
//     height: 400,
//     bytes: 10240,
//     created_at: new Date().toISOString(),
//     tags: ["students"],
//     context: {
//       custom: {
//         studentName: "Priya Sharma",
//         courseName: "Academic Writing Excellence",
//         subject: "english",
//         level: "intermediate",
//         progress: "55%",
//         alt: "Priya during writing workshop",
//       },
//     },
//   },
//   {
//     public_id: "student-6",
//     secure_url: "/api/placeholder/400/400",
//     resource_type: "image",
//     format: "jpg",
//     width: 400,
//     height: 400,
//     bytes: 10240,
//     created_at: new Date().toISOString(),
//     tags: ["students"],
//     context: {
//       custom: {
//         studentName: "David Kim",
//         courseName: "Teams & SharePoint Management",
//         subject: "ms-365",
//         level: "advanced",
//         progress: "85%",
//         alt: "David presenting Teams workflow",
//       },
//     },
//   },
// ];


"use client";

import { useState } from "react";
import Image from "next/image";
import { StudentResource } from "@/types/cloudinary";

// Mock data for English, Web Dev, and MS 365 students
const mockStudents: StudentResource[] = [
  {
    public_id: "student-1",
    secure_url: "/api/placeholder/400/400",
    resource_type: "image",
    format: "jpg",
    width: 400,
    height: 400,
    bytes: 10240,
    created_at: new Date().toISOString(),
    tags: ["students"],
    context: {
      custom: {
        studentName: "Sarah Chen",
        courseName: "Business English Mastery",
        subject: "english",
        level: "advanced",
        progress: "90%",
        alt: "Sarah during English conversation practice",
      },
    },
  },
  {
    public_id: "student-2",
    secure_url: "/api/placeholder/400/400",
    resource_type: "image",
    format: "jpg",
    width: 400,
    height: 400,
    bytes: 10240,
    created_at: new Date().toISOString(),
    tags: ["students"],
    context: {
      custom: {
        studentName: "Marcus Rodriguez",
        courseName: "React & Next.js Pro",
        subject: "web-dev",
        level: "intermediate",
        progress: "65%",
        alt: "Marcus working on React project",
      },
    },
  },
  {
    public_id: "student-3",
    secure_url: "/api/placeholder/400/400",
    resource_type: "image",
    format: "jpg",
    width: 400,
    height: 400,
    bytes: 10240,
    created_at: new Date().toISOString(),
    tags: ["students"],
    context: {
      custom: {
        studentName: "Emily Watson",
        courseName: "MS 365 Workplace Efficiency",
        subject: "ms-365",
        level: "beginner",
        progress: "40%",
        alt: "Emily learning Excel formulas",
      },
    },
  },
];

interface StudentsGalleryProps {
  initialStudents?: any[]; // Use any[] to handle both formats
}

type SubjectFilter = "all" | "english" | "web-dev" | "ms-365";

export default function StudentsGallery({
  initialStudents,
}: StudentsGalleryProps) {
  const [selectedStudent, setSelectedStudent] = useState<any | null>(null);
  const [activeFilter, setActiveFilter] = useState<SubjectFilter>("all");

  // Transform Cloudinary data to match our expected format
  const transformCloudinaryData = (data: any[]): StudentResource[] => {
    if (!data) return mockStudents;

    return data.map((item) => {
      // Handle both Cloudinary API response format and our mock format
      const isCloudinaryFormat = item.asset_id !== undefined;

      return {
        public_id: item.public_id,
        secure_url: item.secure_url,
        resource_type: item.resource_type,
        format: item.format,
        width: item.width,
        height: item.height,
        bytes: item.bytes,
        created_at: item.created_at,
        tags: item.tags || [],
        context: item.context || { custom: {} },
      };
    });
  };

  // Use Cloudinary data if available, otherwise use mock data
  const students =
    initialStudents && initialStudents.length > 0
      ? transformCloudinaryData(initialStudents)
      : mockStudents;

  // Debug: Check what data we're receiving
  console.log("Cloudinary students:", initialStudents);
  console.log("Transformed students:", students);

  // Get student display name
  const getStudentName = (student: any) => {
    return (
      student.context?.custom?.studentName ||
      student.public_id?.replace("-student", "")?.replace(/_/g, " ") ||
      "Student"
    );
  };

  // Get student course
  const getStudentCourse = (student: any) => {
    return (
      student.context?.custom?.courseName ||
      (student.tags?.includes("english")
        ? "English Course"
        : student.tags?.includes("web-dev")
        ? "Web Development"
        : student.tags?.includes("ms-365")
        ? "Microsoft 365"
        : "Professional Course")
    );
  };

  // Get student subject
  const getStudentSubject = (student: any) => {
    return (
      student.context?.custom?.subject ||
      (student.tags?.includes("english")
        ? "english"
        : student.tags?.includes("web-dev")
        ? "web-dev"
        : student.tags?.includes("ms-365")
        ? "ms-365"
        : "general")
    );
  };

  // Filter students based on active filter
  const filteredStudents =
    activeFilter === "all"
      ? students
      : students.filter(
          (student) => getStudentSubject(student) === activeFilter
        );

  const getInitials = (name: string) => {
    if (!name) return "ST";
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase();
  };

  const getSubjectIcon = (subject: string) => {
    switch (subject) {
      case "english":
        return "📚";
      case "web-dev":
        return "💻";
      case "ms-365":
        return "📊";
      default:
        return "👨‍🎓";
    }
  };

  const getSubjectColor = (subject: string) => {
    switch (subject) {
      case "english":
        return "from-purple-500 to-pink-500";
      case "web-dev":
        return "from-blue-500 to-cyan-500";
      case "ms-365":
        return "from-green-500 to-emerald-500";
      default:
        return "from-gray-500 to-gray-600";
    }
  };

  const getSubjectTextColor = (subject: string) => {
    switch (subject) {
      case "english":
        return "text-purple-400";
      case "web-dev":
        return "text-blue-400";
      case "ms-365":
        return "text-green-400";
      default:
        return "text-gray-400";
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case "beginner":
        return "bg-green-900 text-green-300";
      case "intermediate":
        return "bg-yellow-900 text-yellow-300";
      case "advanced":
        return "bg-red-900 text-red-300";
      default:
        return "bg-gray-800 text-gray-300";
    }
  };

  const getProgressColor = (progress: string) => {
    const percent = parseInt(progress);
    if (percent >= 80) return "bg-green-500";
    if (percent >= 60) return "bg-yellow-500";
    return "bg-red-500";
  };

  const filterButtons: { id: SubjectFilter; label: string; emoji: string }[] = [
    { id: "all", label: "All Students", emoji: "👥" },
    { id: "english", label: "English", emoji: "📚" },
    { id: "web-dev", label: "Web Dev", emoji: "💻" },
    { id: "ms-365", label: "MS 365", emoji: "📊" },
  ];

  // Handle filter change
  const handleFilterChange = (filter: SubjectFilter) => {
    setActiveFilter(filter);
  };

  // Check if image is from Cloudinary
  const isCloudinaryImage = (url: string) => {
    return url && url.includes("res.cloudinary.com");
  };

  // Check if we should show placeholder
  const shouldShowPlaceholder = (student: any) => {
    return (
      !isCloudinaryImage(student.secure_url) ||
      student.secure_url.includes("placeholder")
    );
  };

  // Get student level
  const getStudentLevel = (student: any) => {
    return student.context?.custom?.level || "beginner";
  };

  // Get student progress
  const getStudentProgress = (student: any) => {
    return student.context?.custom?.progress || "50%";
  };

  // Get student alt text
  const getStudentAlt = (student: any) => {
    return student.context?.custom?.alt || `${getStudentName(student)} student`;
  };

  if (students.length === 0) {
    return (
      <section className="py-16 bg-gray-900 min-h-screen">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="w-24 h-24 mx-auto mb-6 bg-gray-800 rounded-full flex items-center justify-center">
              <span className="text-2xl">👨‍🎓</span>
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">My Students</h2>
            <p className="text-gray-400 mb-8 max-w-md mx-auto">
              No student photos available yet. Upload images to Cloudinary with
              the "students" tag to showcase your students here.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="pt-24 pb-28">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-white mb-4">
            Some Of My{" "}
            <span className="bg-gradient-to-r from-blue-400 to-lime-400 bg-clip-text text-transparent">
              Students
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Meet the talented individuals I guide in English, Web Development,
            and Microsoft 365. Each student brings unique potential and
            dedication to their learning journey.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {filterButtons.map((filter) => (
            <button
              key={filter.id}
              onClick={() => handleFilterChange(filter.id)}
              className={`
                px-6 py-3 rounded-xl font-semibold transition-all duration-300 
                flex items-center gap-3 border-2 cursor-pointer
                ${
                  activeFilter === filter.id
                    ? "bg-gradient-to-r from-blue-400 to-lime-600 text-white border-transparent shadow-2xl shadow-lime-500/25 transform scale-105"
                    : "bg-gray-800 text-gray-300 border-gray-600 hover:bg-gray-700 hover:border-gray-500 hover:scale-102"
                }
              `}
            >
              <span className="text-lg">{filter.emoji}</span>
              {filter.label}
              {activeFilter === filter.id && (
                <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
              )}
            </button>
          ))}
        </div>

        {/* Results Count */}
        <div className="text-center mb-8">
          <p className="text-gray-400">
            Showing{" "}
            <span className="text-white font-semibold">
              {filteredStudents.length}
            </span>{" "}
            of{" "}
            <span className="text-white font-semibold">{students.length}</span>{" "}
            students
            {activeFilter !== "all" && (
              <span>
                {" "}
                in{" "}
                <span className="capitalize text-blue-400">{activeFilter}</span>
              </span>
            )}
          </p>
        </div>

        {/* Students Grid - HORIZONTAL CARDS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredStudents.map((student, index) => {
            const studentName = getStudentName(student);
            const studentCourse = getStudentCourse(student);
            const studentSubject = getStudentSubject(student);
            const studentLevel = getStudentLevel(student);
            const studentProgress = getStudentProgress(student);
            const studentAlt = getStudentAlt(student);

            return (
              <div
                key={student.public_id}
                className="group bg-gray-800 rounded-2xl shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 transform hover:-translate-y-1 overflow-hidden border border-gray-700 hover:border-lime-500/30"
              >
                {/* HORIZONTAL LAYOUT */}
                <div className="flex flex-col md:flex-row h-full">
                  {/* Image Container - Left Side */}
                  <div
                    className="relative md:w-2/5 h-64 md:h-auto cursor-pointer flex-shrink-0"
                    onClick={() => setSelectedStudent(student)}
                  >
                    {shouldShowPlaceholder(student) ? (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-700 to-gray-900">
                        <div className="text-center">
                          <div
                            className={`w-20 h-20 bg-gradient-to-r ${getSubjectColor(
                              studentSubject
                            )} rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg`}
                          >
                            <span className="text-3xl text-white">
                              {getSubjectIcon(studentSubject)}
                            </span>
                          </div>
                          <p className="text-sm text-gray-400 font-medium">
                            Student Photo
                          </p>
                        </div>
                      </div>
                    ) : (
                      <Image
                        src={student.secure_url}
                        alt={studentAlt}
                        fill
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 40vw"
                        priority={index < 3}
                      />
                    )}

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />

                    {/* Level Badge */}
                    {studentLevel && (
                      <div
                        className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold ${getLevelColor(
                          studentLevel
                        )}`}
                      >
                        {studentLevel}
                      </div>
                    )}

                    {/* Subject Badge */}
                    {studentSubject && (
                      <div className="absolute top-3 left-3 px-3 py-1 bg-gray-900 bg-opacity-80 rounded-full text-xs font-semibold text-gray-300">
                        {getSubjectIcon(studentSubject)}{" "}
                        {studentSubject.toUpperCase()}
                      </div>
                    )}
                  </div>

                  {/* Student Info - Right Side */}
                  <div className="flex-1 p-6 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-white mb-2">
                            {studentName}
                          </h3>
                          <div className="flex items-center gap-2 mb-3">
                            <span
                              className={`text-lg ${getSubjectTextColor(
                                studentSubject
                              )}`}
                            >
                              {getSubjectIcon(studentSubject)}
                            </span>
                            <p
                              className={`font-semibold text-lg ${getSubjectTextColor(
                                studentSubject
                              )}`}
                            >
                              {studentCourse}
                            </p>
                          </div>
                        </div>
                        <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full flex items-center justify-center text-white font-bold text-sm border border-gray-600">
                          {getInitials(studentName)}
                        </div>
                      </div>

                      {/* Progress Bar */}
                      {studentProgress && (
                        <div className="mb-4">
                          <div className="flex justify-between text-sm text-gray-400 mb-2">
                            <span className="font-semibold">
                              Course Progress
                            </span>
                            <span className="font-bold">{studentProgress}</span>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-3">
                            <div
                              className={`h-3 rounded-full ${getProgressColor(
                                studentProgress
                              )} transition-all duration-500`}
                              style={{ width: studentProgress }}
                            />
                          </div>
                        </div>
                      )}
                    </div>

                    {/* View Details Button */}
                    <button
                      onClick={() => setSelectedStudent(student)}
                      className="w-full bg-gradient-to-r from-blue-500 to-lime-500 text-white py-3 px-4 rounded-xl font-semibold hover:from-blue-600 hover:to-lime-600 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-lime-500/25 mt-4"
                    >
                      View Progress Details
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty Filter State */}
        {filteredStudents.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 mx-auto mb-4 bg-gray-800 rounded-full flex items-center justify-center">
              <span className="text-3xl">🔍</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              No students found
            </h3>
            <p className="text-gray-400">
              No students match the selected filter. Try choosing a different
              subject.
            </p>
            <button
              onClick={() => setActiveFilter("all")}
              className="mt-4 px-6 py-2 bg-gradient-to-r from-blue-500 to-lime-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-lime-600 transition-all duration-200"
            >
              Show All Students
            </button>
          </div>
        )}

        {/* Student Detail Modal - HORIZONTAL LAYOUT */}
        {selectedStudent && (
          <div
            className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedStudent(null)}
          >
            <div
              className="bg-gray-800 rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto border border-gray-700"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col lg:flex-row">
                {/* Image Section - Left Side */}
                <div className="lg:w-2/5 relative h-80 lg:h-auto min-h-80">
                  {shouldShowPlaceholder(selectedStudent) ? (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-700 to-gray-900">
                      <div className="text-center">
                        <div
                          className={`w-24 h-24 bg-gradient-to-r ${getSubjectColor(
                            getStudentSubject(selectedStudent)
                          )} rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl`}
                        >
                          <span className="text-4xl text-white">
                            {getSubjectIcon(getStudentSubject(selectedStudent))}
                          </span>
                        </div>
                        <p className="text-lg text-gray-400 font-medium">
                          Student Photo
                        </p>
                      </div>
                    </div>
                  ) : (
                    <Image
                      src={selectedStudent.secure_url}
                      alt={getStudentAlt(selectedStudent)}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      priority
                    />
                  )}
                </div>

                {/* Content Section - Right Side */}
                <div className="lg:w-3/5 p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-2">
                        {getStudentName(selectedStudent)}
                      </h3>
                      <div className="flex items-center gap-4">
                        <span
                          className={`text-2xl ${getSubjectTextColor(
                            getStudentSubject(selectedStudent)
                          )}`}
                        >
                          {getSubjectIcon(getStudentSubject(selectedStudent))}
                        </span>
                        <p
                          className={`text-xl font-semibold ${getSubjectTextColor(
                            getStudentSubject(selectedStudent)
                          )}`}
                        >
                          {getStudentCourse(selectedStudent)}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedStudent(null)}
                      className="w-10 h-10 bg-gray-900 bg-opacity-90 rounded-full flex items-center justify-center text-gray-300 hover:text-white transition-colors border border-gray-700 lg:hidden"
                    >
                      ✕
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-gray-700 rounded-lg p-6 border border-gray-600">
                      <h4 className="font-semibold text-gray-300 mb-3 flex items-center gap-3 text-lg">
                        <span>📚</span>
                        Current Course
                      </h4>
                      <p className="text-white text-lg">
                        {getStudentCourse(selectedStudent)}
                      </p>
                    </div>

                    <div className="bg-gray-700 rounded-lg p-6 border border-gray-600">
                      <h4 className="font-semibold text-gray-300 mb-3 flex items-center gap-3 text-lg">
                        <span>⭐</span>
                        Skill Level
                      </h4>
                      <p className="text-white capitalize text-lg">
                        {getStudentLevel(selectedStudent)}
                      </p>
                    </div>
                  </div>

                  {/* Progress Section */}
                  {getStudentProgress(selectedStudent) && (
                    <div className="bg-gray-700 rounded-lg p-6 border border-gray-600 mb-6">
                      <h4 className="font-semibold text-gray-300 mb-4 flex items-center gap-3 text-lg">
                        <span>📈</span>
                        Course Progress
                      </h4>
                      <div className="flex items-center gap-6">
                        <div className="flex-1">
                          <div className="w-full bg-gray-600 rounded-full h-4">
                            <div
                              className={`h-4 rounded-full ${getProgressColor(
                                getStudentProgress(selectedStudent)
                              )} transition-all duration-1000`}
                              style={{
                                width: getStudentProgress(selectedStudent),
                              }}
                            />
                          </div>
                        </div>
                        <span className="text-white font-bold text-xl">
                          {getStudentProgress(selectedStudent)}
                        </span>
                      </div>
                    </div>
                  )}

                  <div className="bg-gradient-to-r from-gray-700 to-gray-800 rounded-xl p-8 border border-gray-600">
                    <h4 className="font-semibold text-gray-300 mb-4 text-xl">
                      Learning Journey
                    </h4>
                    <p className="text-gray-400 text-lg leading-relaxed">
                      {getStudentName(selectedStudent)} is making excellent
                      progress in{" "}
                      {getStudentCourse(selectedStudent).toLowerCase()}. Their
                      dedication to mastering{" "}
                      {getStudentSubject(selectedStudent) === "english"
                        ? "English language skills"
                        : getStudentSubject(selectedStudent) === "web-dev"
                        ? "web development technologies"
                        : "Microsoft 365 applications"}{" "}
                      is commendable and shows great potential for future
                      success.
                    </p>
                  </div>
                </div>

                {/* Close button for desktop */}
                <button
                  onClick={() => setSelectedStudent(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-gray-900 bg-opacity-90 rounded-full flex items-center justify-center text-gray-300 hover:text-white transition-colors border border-gray-700 hidden lg:flex"
                >
                  ✕
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}