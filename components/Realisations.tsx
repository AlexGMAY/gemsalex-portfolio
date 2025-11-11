"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { FiGithub, FiExternalLink, FiArrowRight } from "react-icons/fi";
import { projects, categories } from "@/data";

type RealisationsProps = {
  isHomePage?: boolean;
};

const Realisations = ({ isHomePage = false }: RealisationsProps) => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  const displayedProjects = isHomePage
    ? filteredProjects.slice(0, 6)
    : filteredProjects;

  return (
    <section className="py-16 md:py-24 text-white" id="case-studies">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold mb-3"
          >
            My{" "}
            <span className="bg-gradient-to-r from-blue-400 to-lime-400 bg-clip-text text-transparent">
              Creative
            </span>{" "}
            Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-neutral-400 max-w-2xl mx-auto"
          >
            Proven solutions that drive business growth and solve real-world
            challenges
          </motion.p>
        </div>

        {/* Filter Chips */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedCategory === cat
                  ? "bg-lime-400 text-gray-900 shadow-lg shadow-lime-400/20"
                  : "bg-gray-800 text-white hover:bg-gray-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {displayedProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            >
              <Card className="h-full bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-lime-400/10 transition-all duration-300 group text-center">
                <div className="relative overflow-hidden h-48 mb-4">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                </div>

                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>

                <CardContent>
                  <div className="flex justify-center flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech, index) => (
                      <div
                        key={index}
                        className="bg-gray-800 rounded-full p-1.5"
                      >
                        <img
                          src={tech}
                          alt="tech-stack-icon"
                          className="h-5 w-5 object-contain"
                        />
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-between gap-3 mt-4">
                    <Button
                      // asChild
                      variant="ghost"
                      className="text-sm px-3 py-1.5 hover:bg-gray-800 text-yellow-400 hover:text-yellow-300"
                    >
                      <Link
                        href={project.github}
                        target="_blank"
                        className="flex items-center gap-2"
                      >
                        <FiGithub size={16} />
                        <span>Code</span>
                      </Link>
                    </Button>
                    <Button
                      // asChild
                      variant="ghost"
                      className="text-sm px-3 py-1.5 hover:bg-gray-800 text-lime-400 hover:text-lime-300"
                    >
                      <Link
                        href={project.live}
                        target="_blank"
                        className="flex items-center gap-2"
                      >
                        <FiExternalLink size={16} />
                        <span>Live Demo</span>
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* See More Button */}
        {isHomePage && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex justify-center mt-16"
          >
            <Button
              // asChild
              className="bg-gradient-to-r from-blue-200 to-blue-300 text-white px-8 py-3 rounded-lg hover:from-blue-500 hover:to-lime-500 shadow-lg hover:shadow-lime-500/20 transition-all"
            >
              <Link
                href="/projects"
                className="flex items-center gap-2 transition all group"
              >
                View All Projects
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Realisations;