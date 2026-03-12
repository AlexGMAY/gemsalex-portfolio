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
            Crafting digital web solutions that blend innovation with functionality, 
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
                        //asChild
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
                        //asChild
                      >
                        <Link
                          href={project.live}
                          target="_blank"
                          className="flex items-center justify-center gap-2"
                        >
                          <FiExternalLink size={18} />
                          <span>Live site</span>
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
