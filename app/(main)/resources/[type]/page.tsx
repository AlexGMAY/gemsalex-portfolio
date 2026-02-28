// "use client";

// import { motion } from "framer-motion";
// import { FiArrowRight, FiBook, FiCode, FiLink, FiTool } from "react-icons/fi";
// import Link from "next/link";
// import { useEffect, useState } from "react";
// import { useParams } from "next/navigation";

// interface Resource {
//   type: string;
//   slug: string;
//   title: string;
//   date: string;
//   excerpt: string;
//   tags?: string[];
//   level?: string;
//   readTime?: string;
// }

// export default function ResourceTypePage() {
//   const params = useParams();
//   const type = params.type as string;

//   const [resources, setResources] = useState<Resource[]>([]);
//   const [types, setTypes] = useState<string[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function loadData() {
//       try {
//         const res = await fetch("/api/resources");
//         const data = await res.json();
//         setResources(data.resources.filter((r: Resource) => r.type === type));
//         setTypes(data.types || []);
//       } catch (error) {
//         console.error("Error loading resources:", error);
//       } finally {
//         setLoading(false);
//       }
//     }

//     loadData();
//   }, [type]);

//   // Get icon and description for each type
//   const getTypeConfig = (resourceType: string) => {
//     const config = {
//       blog: {
//         icon: FiBook,
//         title: "Blog Posts & Articles",
//         description:
//           "In-depth articles, insights, and thoughts on web development, technology trends, and best practices.",
//         gradient: "from-blue-400 to-lime-500",
//         bgGradient: "from-blue-400/10 to-lime-500/10",
//         count: resources.length,
//       },
//       tutorials: {
//         icon: FiCode,
//         title: "Tutorials & Guides",
//         description:
//           "Step-by-step tutorials, comprehensive guides, and hands-on learning materials for developers of all levels.",
//         gradient: "from-blue-400 to-cyan-500",
//         bgGradient: "from-blue-400/10 to-cyan-500/10",
//         count: resources.length,
//       },
//       links: {
//         icon: FiLink,
//         title: "Resources & Tools",
//         description:
//           "Curated collection of essential development tools, libraries, documentation, and valuable resources.",
//         gradient: "from-amber-400 to-orange-500",
//         bgGradient: "from-amber-400/10 to-orange-500/10",
//         count: resources.length,
//       },
//     };

//     return (
//       config[resourceType as keyof typeof config] || {
//         icon: FiTool,
//         title: `${
//           resourceType.charAt(0).toUpperCase() + resourceType.slice(1)
//         } Resources`,
//         description: `Explore all ${resourceType} resources and find helpful content.`,
//         gradient: "from-gray-400 to-gray-500",
//         bgGradient: "from-gray-400/10 to-gray-500/10",
//         count: resources.length,
//       }
//     );
//   };

//   const typeConfig = getTypeConfig(type);
//   const TypeIcon = typeConfig.icon;

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
//           <p className="text-gray-400">Loading {type} resources...</p>
//         </div>
//       </div>
//     );
//   }

//   if (!types.includes(type)) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="text-center">
//           <h1 className="text-4xl font-bold mb-4 text-white">
//             Resource type not found
//           </h1>
//           <p className="text-gray-400 mb-8">
//             The resource type &quot;{type}&quot; doesn&apos;t exist.
//           </p>
//           <Link
//             href="/resources"
//             className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-colors"
//           >
//             Back to Resources
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <main className="min-h-screen bg-black-100">
//       {/* Hero Section */}
//       <section className="relative pt-32 pb-20 overflow-hidden">
//         {/* Background Elements */}
//         <div className="absolute inset-0 overflow-hidden opacity-40">
//           <motion.div
//             animate={{
//               x: [0, 100, 0],
//               y: [0, -50, 0],
//               rotate: [0, 5, 0],
//             }}
//             transition={{
//               duration: 20,
//               repeat: Infinity,
//               repeatType: "reverse",
//               ease: "linear",
//             }}
//             className={`absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r ${typeConfig.bgGradient} blur-3xl`}
//           />
//           <motion.div
//             animate={{
//               x: [0, -100, 0],
//               y: [0, 50, 0],
//               rotate: [0, -5, 0],
//             }}
//             transition={{
//               duration: 25,
//               repeat: Infinity,
//               repeatType: "reverse",
//               ease: "linear",
//             }}
//             className={`absolute bottom-1/3 right-1/3 w-96 h-96 rounded-full bg-gradient-to-r ${typeConfig.bgGradient} blur-3xl`}
//           />
//         </div>

//         <div className="container mx-auto px-4 relative z-10">
//           <div className="text-center pt-8">
//             {/* Breadcrumb */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="flex justify-center items-center gap-2 text-sm text-gray-500 mb-8"
//             >
//               <Link
//                 href="/resources"
//                 className="hover:text-white transition-colors"
//               >
//                 Resources
//               </Link>
//               <FiArrowRight size={14} />
//               <span className="text-white capitalize">{type}</span>
//             </motion.div>

//             {/* Main Header */}
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="mb-8"
//             >
//               <div className="inline-flex items-center gap-4 px-6 py-3 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 mb-6">
//                 <div
//                   className={`p-3 rounded-full bg-gradient-to-r ${typeConfig.bgGradient}`}
//                 >
//                   <TypeIcon
//                     className={`text-2xl text-transparent bg-clip-text bg-gradient-to-r ${typeConfig.gradient}`}
//                   />
//                 </div>
//                 <span className="text-lg font-medium text-white capitalize">
//                   {type}
//                 </span>
//               </div>

//               <h1 className="text-5xl sm:text-6xl md:text-6xl font-bold mb-6 leading-tight">
//                 <span className="text-white">
//                   {typeConfig.title.split(" ")[0]}
//                 </span>{" "}
//                 <span
//                   className={`text-transparent bg-clip-text bg-gradient-to-r ${typeConfig.gradient}`}
//                 >
//                   {typeConfig.title.split(" ").slice(1).join(" ")}
//                 </span>
//               </h1>

//               <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
//                 {typeConfig.description}
//               </p>

//               <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/50 border border-gray-700 text-gray-300">
//                 <span className="text-sm">
//                   {resources.length} resources available
//                 </span>
//               </div>
//             </motion.div>

//             {/* Type Navigation */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.3 }}
//               className="flex flex-wrap justify-center gap-3"
//             >
//               <Link
//                 href="/resources"
//                 className="px-6 py-3 rounded-full bg-gray-800/50 border border-gray-700 text-white hover:bg-gray-700 transition-colors flex items-center gap-2"
//               >
//                 All Resources
//               </Link>
//               {types.map((t) => {
//                 const tConfig = getTypeConfig(t);
//                 const TIcon = tConfig.icon;
//                 return (
//                   <Link
//                     key={t}
//                     href={`/resources/${t}`}
//                     className={`px-6 py-3 rounded-full border transition-all flex items-center gap-2 ${
//                       t === type
//                         ? `bg-gradient-to-r ${tConfig.gradient} text-black font-medium`
//                         : "bg-gray-800/50 border-gray-700 text-gray-300 hover:bg-gray-700"
//                     }`}
//                   >
//                     <TIcon size={18} />
//                     {t.charAt(0).toUpperCase() + t.slice(1)}
//                   </Link>
//                 );
//               })}
//             </motion.div>
//           </div>
//         </div>

//         {/* Floating particles */}
//         {[...Array(8)].map((_, i) => (
//           <motion.div
//             key={`particle-${i}`}
//             className="absolute rounded-full"
//             style={{
//               width: Math.random() * 6 + 2 + "px",
//               height: Math.random() * 6 + 2 + "px",
//               top: Math.random() * 100 + "%",
//               left: Math.random() * 100 + "%",
//               background: `linear-gradient(to right, ${
//                 typeConfig.gradient
//                   .replace("from-", "")
//                   .replace("to-", "")
//                   .split(" ")[0]
//               }, ${
//                 typeConfig.gradient
//                   .replace("from-", "")
//                   .replace("to-", "")
//                   .split(" ")[1]
//               })`,
//             }}
//             animate={{
//               y: [0, (Math.random() - 0.5) * 100],
//               x: [0, (Math.random() - 0.5) * 100],
//               opacity: [0.2, 0.8, 0.2],
//             }}
//             transition={{
//               duration: 10 + Math.random() * 20,
//               repeat: Infinity,
//               repeatType: "reverse",
//             }}
//           />
//         ))}
//       </section>

//       {/* Resources Grid Section */}
//       <section className="py-20">
//         <div className="container max-w-6xl mx-auto px-4">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-3xl font-bold mb-4 text-white">
//               All{" "}
//               <span
//                 className={`text-transparent bg-clip-text bg-gradient-to-r ${typeConfig.gradient}`}
//               >
//                 {type}
//               </span>{" "}
//               Resources
//             </h2>
//             <p className="text-gray-400 max-w-2xl mx-auto">
//               Browse through all available {type} resources and find exactly
//               what you need.
//             </p>
//           </motion.div>

//           {/* Resources Grid */}
//           <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//             {resources.map((resource, index) => (
//               <motion.article
//                 key={resource.slug}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-gray-500 overflow-hidden transition-all hover:transform hover:scale-105"
//               >
//                 <Link
//                   href={`/resources/${resource.type}/${resource.slug}`}
//                   className="block h-full"
//                 >
//                   <div className="p-6 h-full flex flex-col">
//                     {/* Header */}
//                     <div className="flex items-center justify-between mb-4">
//                       <span className="text-sm text-gray-500">
//                         {new Date(resource.date).toLocaleDateString()}
//                       </span>
//                       {resource.level && (
//                         <span
//                           className={`text-xs px-2 py-1 rounded-full capitalize ${
//                             resource.level === "beginner"
//                               ? "bg-green-400/10 text-green-400"
//                               : resource.level === "intermediate"
//                               ? "bg-blue-400/10 text-blue-400"
//                               : "bg-purple-400/10 text-purple-400"
//                           }`}
//                         >
//                           {resource.level}
//                         </span>
//                       )}
//                     </div>

//                     {/* Content */}
//                     <h3 className="text-xl font-bold mb-3 text-white group-hover:text-gray-200 transition-colors line-clamp-2">
//                       {resource.title}
//                     </h3>

//                     <p className="text-gray-400 mb-4 flex-grow line-clamp-3">
//                       {resource.excerpt}
//                     </p>

//                     {/* Footer */}
//                     <div className="flex items-center justify-between mt-auto">
//                       <span className="text-blue-400 group-hover:text-blue-300 transition-colors flex items-center gap-1">
//                         Read more <FiArrowRight size={14} />
//                       </span>
//                       {resource.readTime && (
//                         <span className="text-xs text-gray-500">
//                           {resource.readTime}
//                         </span>
//                       )}
//                     </div>

//                     {/* Tags */}
//                     {resource.tags && resource.tags.length > 0 && (
//                       <div className="flex flex-wrap gap-1 mt-4">
//                         {resource.tags.slice(0, 3).map((tag) => (
//                           <span
//                             key={tag}
//                             className="px-2 py-1 bg-gray-700/50 text-xs rounded-full text-gray-300"
//                           >
//                             #{tag}
//                           </span>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                 </Link>
//               </motion.article>
//             ))}
//           </div>

//           {/* Empty State */}
//           {resources.length === 0 && !loading && (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               className="text-center py-20"
//             >
//               <div className="max-w-md mx-auto">
//                 <div
//                   className={`p-6 rounded-2xl bg-gradient-to-r ${typeConfig.bgGradient} mb-6 inline-block`}
//                 >
//                   <TypeIcon className="text-4xl text-white" />
//                 </div>
//                 <h3 className="text-2xl font-bold text-white mb-4">
//                   No {type} resources yet
//                 </h3>
//                 <p className="text-gray-400 mb-6">
//                   We&apos;re working on creating amazing {type} content. Check back
//                   soon for new resources!
//                 </p>
//                 <Link
//                   href="/resources"
//                   className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white hover:bg-gray-700 transition-colors"
//                 >
//                   Explore Other Resources
//                 </Link>
//               </div>
//             </motion.div>
//           )}
//         </div>
//       </section>
//     </main>
//   );
// }

import { FiArrowRight, FiBook, FiCode, FiLink, FiTool } from "react-icons/fi";
import Link from "next/link";
import { getResourcesByType, getAllResources, ResourceType } from "@/lib/resources";

interface Props {
  params: { type: string };
}

export default function ResourceTypePage({ params }: Props) {
  const type = params.type as ResourceType;

  const resources = getResourcesByType(type);
  const allResources = getAllResources();

  const types = ["blog", "tutorials", "links"];

  if (!types.includes(type)) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Resource type not found
      </div>
    );
  }

  const getTypeConfig = (resourceType: string) => {
    const config = {
      blog: {
        icon: FiBook,
        title: "Blog Posts & Articles",
        description:
          "In-depth articles, insights, and thoughts on web development.",
        gradient: "from-blue-400 to-lime-500",
        bgGradient: "from-blue-400/10 to-lime-500/10",
      },
      tutorials: {
        icon: FiCode,
        title: "Tutorials & Guides",
        description: "Step-by-step tutorials and hands-on learning materials.",
        gradient: "from-blue-400 to-cyan-500",
        bgGradient: "from-blue-400/10 to-cyan-500/10",
      },
      links: {
        icon: FiLink,
        title: "Resources & Tools",
        description: "Curated collection of tools, libraries, and resources.",
        gradient: "from-amber-400 to-orange-500",
        bgGradient: "from-amber-400/10 to-orange-500/10",
      },
    };

    return (
      config[resourceType as keyof typeof config] || {
        icon: FiTool,
        title: `${resourceType} Resources`,
        description: `Explore ${resourceType} resources.`,
        gradient: "from-gray-400 to-gray-500",
        bgGradient: "from-gray-400/10 to-gray-500/10",
      }
    );
  };

  const typeConfig = getTypeConfig(type);
  const TypeIcon = typeConfig.icon;

  return (
    <main className="min-h-screen bg-black-100">
      {/* HERO */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 text-center">
          {/* Breadcrumb */}
          <div className="flex justify-center items-center gap-2 text-sm text-gray-500 mb-8">
            <Link href="/resources" className="hover:text-white">
              Resources
            </Link>
            <FiArrowRight size={14} />
            <span className="text-white capitalize">{type}</span>
          </div>

          {/* Header */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-4 px-6 py-3 rounded-2xl bg-gray-800 border border-gray-700 mb-6">
              <div
                className={`p-3 rounded-full bg-gradient-to-r ${typeConfig.bgGradient}`}
              >
                <TypeIcon className={`text-2xl`} />
              </div>
              <span className="text-lg font-medium text-white capitalize">
                {type}
              </span>
            </div>

            <h1 className="text-5xl font-bold mb-6 text-white">
              {typeConfig.title}
            </h1>

            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
              {typeConfig.description}
            </p>

            <div className="text-sm text-gray-400">
              {resources.length} resources available
            </div>
          </div>

          {/* NAV */}
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/resources"
              className="px-6 py-3 bg-gray-800 border border-gray-700 text-white rounded-full"
            >
              All
            </Link>

            {types.map((t) => {
              const tConfig = getTypeConfig(t);
              const TIcon = tConfig.icon;

              return (
                <Link
                  key={t}
                  href={`/resources/${t}`}
                  className={`px-6 py-3 rounded-full flex items-center gap-2 ${
                    t === type
                      ? `bg-gradient-to-r ${tConfig.gradient} text-black`
                      : "bg-gray-800 text-gray-300 border border-gray-700"
                  }`}
                >
                  <TIcon size={18} />
                  {t}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* GRID */}
      <section className="py-20">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {resources.map((resource) => (
              <article
                key={resource.slug}
                className="group bg-gray-800 rounded-2xl border border-gray-700 hover:border-gray-500 transition"
              >
                <Link href={`/resources/${resource.type}/${resource.slug}`}>
                  <div className="p-6 flex flex-col h-full">
                    <div className="flex justify-between mb-4 text-sm text-gray-500">
                      <span>
                        {new Date(resource.date).toLocaleDateString()}
                      </span>
                      <span>{resource.readTime}</span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3">
                      {resource.title}
                    </h3>

                    <p className="text-gray-400 mb-4">{resource.excerpt}</p>

                    <span className="text-blue-400 mt-auto flex items-center gap-1">
                      Read more <FiArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          {resources.length === 0 && (
            <div className="max-w-md mx-auto">
                <div
                  className={`p-6 rounded-2xl bg-gradient-to-r ${typeConfig.bgGradient} mb-6 inline-block`}
                >
                  <TypeIcon className="text-4xl text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  No {type} resources yet
                </h3>
                <p className="text-gray-400 mb-6">
                  We&apos;re working on creating amazing {type} content. Check back
                  soon for new resources!
                </p>
                <Link
                  href="/resources"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white hover:bg-gray-700 transition-colors"
                >
                  Explore Other Resources
                </Link>
           </div>
          )}
        </div>
      </section>
    </main>
  );
}

