"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { useRouter } from "next/navigation";
import { projects, categories } from "@/data";

type RealisationsProps = {
  isHomePage?: boolean; // Prop to determine if the component is on the Home page
};

const Realisations = ({ isHomePage = false }: RealisationsProps) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const router = useRouter(); // Initialize the router

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  // Display only 6 projects on the Home page
  const displayedProjects = isHomePage
    ? filteredProjects.slice(0, 6)
    : filteredProjects;

  const handleSeeMore = () => {
    router.push("/projects"); // Redirect to the Projects page
  };

  return (
    <section className="py-24 text-white" id="projects">
      <div className="container mx-auto px-6">
        <h2 className="heading font-semibold text-center mb-8">
          My <span className="text-lime-400">Projects</span>
        </h2>
        <p className="text-lg text-center text-neutral-400 mb-10">
          Browse through some of my best work across different technologies.
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={selectedCategory === cat ? "default" : "outline"}
              className={`capitalize px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 ease-in-out ${
                selectedCategory === cat
                  ? "bg-lime-400 text-gray-800 hover:bg-lime-500"
                  : "border border-gray-600 text-white hover:bg-gray-700"
              }`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8"
        >
          {displayedProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="overflow-hidden bg-black-200 border-gray-700 hover:scale-105 transform transition duration-300 ease-in-out flex flex-col items-center justify-center text-center">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-52 object-cover mb-6 rounded-xl"
                />
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-neutral-400 mb-2 hidden">
                    {project.category}
                  </p>
                  <div className="flex justify-center items-center gap-2 mb-4">
                    {project.techStack.map((tech, index) => (
                      <img
                        key={index}
                        src={tech}
                        alt="tech-stack-icon"
                        className="h-6 w-6 object-contain"
                      />
                    ))}
                  </div>
                  <div className="flex justify-between gap-4 mt-4">
                    <Button
                      variant="link"
                      href={project.github}
                      target="_blank"
                      className={"text-yellow-500 hover:text-lime-400"}
                    >
                      GitHub Repo
                    </Button>
                    <Button
                      variant="link"
                      href={project.live}
                      target="_blank"
                      className={"text-lime-400 hover:text-yellow-500"}
                    >
                      Check Live Site
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* "See More Projects" Button (Only on Home Page) */}
        {isHomePage && (
          <div className="flex justify-center mt-20">
            <Button
              onClick={handleSeeMore}
              className="bg-gradient-to-r from-lime-500 to-yellow-600 text-white px-8 py-3 rounded-lg hover:from-lime-600 hover:to-yellow-700 transition-all transform hover:scale-105"
            >
              See More Projects
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Realisations;