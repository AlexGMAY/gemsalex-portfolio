// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import Link from "next/link";
// import Image from "next/image";
// import { Button } from "@/components/ui/Button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
// import { FiGithub, FiExternalLink, FiArrowRight } from "react-icons/fi";
// import { projects, categories } from "@/data";

// type RealisationsProps = {
//   isHomePage?: boolean;
// };

// const Realisations = ({ isHomePage = false }: RealisationsProps) => {
//   const [selectedCategory, setSelectedCategory] = useState("All");

//   const filteredProjects =
//     selectedCategory === "All"
//       ? projects
//       : projects.filter((p) => p.category === selectedCategory);

//   const displayedProjects = isHomePage
//     ? filteredProjects.slice(0, 6)
//     : filteredProjects;

//   return (
//     <section className="py-16 md:py-24 text-white" id="case-studies">
//       <div className="container mx-auto px-4 sm:px-6">
//         <div className="text-center mb-12">
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="text-3xl md:text-5xl font-bold mb-3"
//           >
//             My{" "}
//             <span className="bg-gradient-to-r from-blue-400 to-lime-400 bg-clip-text text-transparent">
//               Creative
//             </span>{" "}
//             Projects
//           </motion.h2>
//           <motion.p
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ delay: 0.2 }}
//             className="text-lg text-neutral-400 max-w-2xl mx-auto"
//           >
//             Proven solutions that drive business growth and solve real-world
//             challenges
//           </motion.p>
//         </div>

//         {/* Filter Chips */}
//         <motion.div
//           className="flex flex-wrap justify-center gap-3 mb-12"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ delay: 0.3 }}
//         >
//           {categories.map((cat) => (
//             <button
//               key={cat}
//               onClick={() => setSelectedCategory(cat)}
//               className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
//                 selectedCategory === cat
//                   ? "bg-lime-400 text-gray-900 shadow-lg shadow-lime-400/20"
//                   : "bg-gray-800 text-white hover:bg-gray-700"
//               }`}
//             >
//               {cat}
//             </button>
//           ))}
//         </motion.div>

//         {/* Projects Grid */}
//         <motion.div
//           layout
//           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
//         >
//           {displayedProjects.map((project) => (
//             <motion.div
//               key={project.id}
//               layout
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.4 }}
//               viewport={{ once: true, margin: "0px 0px -100px 0px" }}
//             >
//               <Card className="h-full bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-lime-400/10 transition-all duration-300 group text-center">
//                 <div className="relative overflow-hidden h-48 mb-4">
//                   {/* <img
//                     src={project.img}
//                     alt={project.title}
//                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//                   /> */}
//                   <Image 
//                     src={project.img}
//                     alt={project.title}
//                     fill
//                     className="object-cover group-hover:scale-105 transition-transform duration-500"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
//                 </div>

//                 <CardHeader>
//                   <CardTitle>{project.title}</CardTitle>
//                 </CardHeader>

//                 <CardContent>
//                   <div className="flex justify-center flex-wrap gap-2 mb-4">
//                     {project.techStack.map((tech, index) => (
//                       <div
//                         key={index}
//                         className="bg-gray-800 rounded-full p-1.5"
//                       >
//                         {/* <img
//                           src={tech}
//                           alt="tech-stack-icon"
//                           className="h-5 w-5 object-contain"
//                         /> */}
//                         <Image
//                           src={tech}
//                           alt="tech-stack-icon"
//                           width={20}
//                           height={20}
//                           className="h-5 w-5 object-contain"
//                          />
//                       </div>
//                     ))}
//                   </div>

//                   <div className="flex justify-between gap-3 mt-4">
//                     <Button
//                       // asChild
//                       variant="ghost"
//                       className="text-sm px-3 py-1.5 hover:bg-gray-800 text-yellow-400 hover:text-yellow-300"
//                     >
//                       <Link
//                         href={project.github}
//                         target="_blank"
//                         className="flex items-center gap-2"
//                       >
//                         <FiGithub size={16} />
//                         <span>Code</span>
//                       </Link>
//                     </Button>
//                     <Button
//                       // asChild
//                       variant="ghost"
//                       className="text-sm px-3 py-1.5 hover:bg-gray-800 text-lime-400 hover:text-lime-300"
//                     >
//                       <Link
//                         href={project.live}
//                         target="_blank"
//                         className="flex items-center gap-2"
//                       >
//                         <FiExternalLink size={16} />
//                         <span>Live Demo</span>
//                       </Link>
//                     </Button>
//                   </div>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* See More Button */}
//         {isHomePage && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ delay: 0.5 }}
//             className="flex justify-center mt-16"
//           >
//             <Button
//               // asChild
//               className="bg-gradient-to-r from-blue-200 to-blue-300 text-white px-8 py-3 rounded-lg hover:from-blue-500 hover:to-lime-500 shadow-lg hover:shadow-lime-500/20 transition-all"
//             >
//               <Link
//                 href="/projects"
//                 className="flex items-center gap-2 transition all group"
//               >
//                 View All Projects
//                 <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
//               </Link>
//             </Button>
//           </motion.div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default Realisations;


"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { FiGithub, FiExternalLink, FiArrowRight } from "react-icons/fi";
import { projects, categories } from "@/data";

type RealisationsProps = {
  isHomePage?: boolean;
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Realisations = ({ isHomePage = false }: RealisationsProps) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = useMemo(
    () =>
      selectedCategory === "All"
        ? projects
        : projects.filter((p) => p.category === selectedCategory),
    [selectedCategory]
  );

  const displayedProjects = isHomePage
    ? filteredProjects.slice(0, 6)
    : filteredProjects;

  return (
    <section className="relative py-20 md:py-28 overflow-hidden" id="case-studies">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-gray-900 pointer-events-none" />
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        {/* Header Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            My{" "}
            <span className="bg-gradient-to-r from-blue-400 via-lime-400 to-emerald-400 bg-clip-text text-transparent bg-size-200 animate-gradient">
              Creative
            </span>{" "}
            <span className="text-white">Projects</span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed"
          >
            Crafting digital experiences that blend innovation with functionality, 
            delivering measurable results for real-world challenges.
          </motion.p>
        </motion.div>

        {/* Filter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`
                relative px-6 py-2.5 rounded-full text-sm font-medium 
                transition-all duration-300 overflow-hidden group
                ${selectedCategory === cat
                  ? "text-gray-900"
                  : "text-white hover:text-gray-900"
                }
              `}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Background with gradient animation */}
              <span className={`
                absolute inset-0 bg-gradient-to-r from-blue-400 to-lime-400 
                transition-all duration-300
                ${selectedCategory === cat 
                  ? "opacity-100" 
                  : "opacity-0 group-hover:opacity-100"
                }
              `} />
              
              {/* Default background */}
              <span className={`
                absolute inset-0 bg-gray-800 transition-all duration-300
                ${selectedCategory === cat 
                  ? "opacity-0" 
                  : "opacity-100 group-hover:opacity-0"
                }
              `} />
              
              <span className="relative z-10">{cat}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {displayedProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                layout
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
                className="h-full"
              >
                <Card className="h-full bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden hover:border-lime-400/30 transition-all duration-500 group relative">
                  {/* Glow effect on hover */}
                  <div className={`
                    absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-lime-400 
                    rounded-2xl opacity-0 group-hover:opacity-20 blur transition-all duration-500
                  `} />
                  
                  {/* Image Container */}
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={project.img}
                      alt={project.title}
                      fill
                      className={`
                        object-cover transition-all duration-700 
                        ${hoveredProject === project.id ? "scale-110" : "scale-100"}
                      `}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    
                    {/* Gradient overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent" />
                    
                    {/* Category badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1.5 bg-black/50 backdrop-blur-sm rounded-full text-xs font-medium text-lime-400 border border-lime-400/30">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <div className="pb-2">
                    <CardHeader>
                      <div className="text-xl font-bold text-white group-hover:text-lime-400 transition-colors">
                        <CardTitle>
                          {project.title}
                        </CardTitle>
                      </div>
                    </CardHeader>
                  </div>

                  <CardContent>
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.techStack.map((tech, index) => (
                        <div
                          key={index}
                          className="bg-gray-800/50 rounded-lg p-2 backdrop-blur-sm border border-gray-700"
                        >
                          <Image
                            src={tech}
                            alt="tech-icon"
                            width={20}
                            height={20}
                            className="w-5 h-5 object-contain"
                          />
                        </div>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex justify-between gap-3 mt-auto">
                      <Button
                        variant="ghost"
                        className="flex-1 text-sm px-4 py-2.5 rounded-xl bg-gray-800/50 hover:bg-gray-800 text-yellow-400 hover:text-yellow-300 transition-all border border-gray-700 hover:border-yellow-400/30"
                        asChild
                      >
                        <Link
                          href={project.github}
                          target="_blank"
                          className="flex items-center justify-center gap-2"
                        >
                          <FiGithub size={18} />
                          <span>Code</span>
                        </Link>
                      </Button>
                      
                      <Button
                        variant="ghost"
                        className="flex-1 text-sm px-4 py-2.5 rounded-xl bg-gray-800/50 hover:bg-gray-800 text-lime-400 hover:text-lime-300 transition-all border border-gray-700 hover:border-lime-400/30"
                        asChild
                      >
                        <Link
                          href={project.live}
                          target="_blank"
                          className="flex items-center justify-center gap-2"
                        >
                          <FiExternalLink size={18} />
                          <span>Demo</span>
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* See More Section */}
        {isHomePage && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="flex justify-center mt-20"
          >
            <Button
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-400 to-lime-400 text-gray-900 font-semibold rounded-xl overflow-hidden transition-all hover:shadow-lg hover:shadow-lime-400/25"
              asChild
            >
              <Link href="/projects" className="flex items-center gap-3">
                <span className="relative z-10">Explore All Projects</span>
                <FiArrowRight className="relative z-10 group-hover:translate-x-2 transition-transform" />
                
                {/* Shine effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              </Link>
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Realisations;
