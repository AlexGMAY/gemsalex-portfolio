"use client";

import { motion } from "framer-motion";
import {
  FiBook,
  FiBookmark,
  FiCode,
  FiBarChart2,
  FiChevronRight,
  FiClock,
} from "react-icons/fi";
import { Resource } from "@/lib/resources";
import { useState } from "react";

interface ResourcesTutorialsSectionProps {
  resources?: Resource[]; // Make it optional and use Resource type
}

const ResourcesTutorialsSection = ({
  resources = [],
}: ResourcesTutorialsSectionProps) => {
  const [knowledgeLevel, setKnowledgeLevel] = useState<string>("All Levels");
  const [expandedResource, setExpandedResource] = useState<string | null>(null);

  // Safe filtering with fallback
  const tutorialResources = Array.isArray(resources)
    ? resources.filter((resource) => resource.type === "tutorials")
    : [];

  // Filter by knowledge level
  const filteredResources =
    knowledgeLevel === "All Levels"
      ? tutorialResources
      : tutorialResources.filter(
          (resource) => resource.level === knowledgeLevel.toLowerCase()
        );

  // Knowledge level options
  const levels = ["All Levels", "Beginner", "Intermediate", "Advanced"];

  // Learning path visualization
  const learningPaths = [
    {
      title: "React Mastery",
      steps: [
        "JS Fundamentals",
        "React Basics",
        "State Management",
        "Advanced Patterns",
      ],
      resources: tutorialResources.filter(
        (resource) =>
          resource.tags?.includes("react") || resource.tags?.includes("React")
      ),
    },
    {
      title: "Fullstack Next.js",
      steps: ["Next.js Basics", "API Routes", "Authentication", "Deployment"],
      resources: tutorialResources.filter(
        (resource) =>
          resource.tags?.includes("nextjs") ||
          resource.tags?.includes("Next.js")
      ),
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black-100 to-black-100 relative">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500">
              Deep Dives & Tutorials
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Step-by-step guides and comprehensive technical explorations
          </p>
        </motion.div>

        {/* Knowledge Level Filter */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mb-12 flex flex-wrap justify-center gap-3"
        >
          {levels.map((level) => (
            <motion.button
              key={level}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setKnowledgeLevel(level)}
              className={`px-4 py-2 rounded-full flex items-center gap-2 ${
                knowledgeLevel === level
                  ? "bg-gradient-to-r from-blue-400 to-cyan-500 text-black font-medium"
                  : "bg-gray-800/50 border border-gray-700 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {level === "Beginner" && <FiBook size={16} />}
              {level === "Intermediate" && <FiBarChart2 size={16} />}
              {level === "Advanced" && <FiCode size={16} />}
              {level}
            </motion.button>
          ))}
        </motion.div>

        {/* Learning Paths Visualization */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500">
              Learning Paths
            </span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {learningPaths.map((path, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 p-6 hover:border-blue-400/30 transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-full bg-blue-400/10 text-blue-400">
                    <FiBookmark size={20} />
                  </div>
                  <h4 className="text-xl font-bold text-white">{path.title}</h4>
                </div>

                <div className="space-y-4">
                  {path.steps.map((step, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="flex flex-col items-center">
                        <div
                          className={`w-6 h-6 rounded-full flex items-center justify-center ${
                            i === 0
                              ? "bg-blue-400 text-black"
                              : "bg-gray-700 text-gray-400"
                          }`}
                        >
                          {i + 1}
                        </div>
                        {i < path.steps.length - 1 && (
                          <div className="w-0.5 h-8 bg-gray-700 my-1" />
                        )}
                      </div>
                      <div>
                        <h5
                          className={`font-medium ${
                            i === 0 ? "text-blue-400" : "text-gray-300"
                          }`}
                        >
                          {step}
                        </h5>
                        {i === 0 &&
                          path.resources.filter((resource) =>
                            resource.tags?.some(
                              (tag) =>
                                step
                                  .toLowerCase()
                                  .includes(tag.toLowerCase()) ||
                                tag
                                  .toLowerCase()
                                  .includes(step.toLowerCase().replace(" ", ""))
                            )
                          ).length > 0 && (
                            <div className="mt-2 flex flex-wrap gap-2">
                              {path.resources
                                .filter((resource) =>
                                  resource.tags?.some(
                                    (tag) =>
                                      step
                                        .toLowerCase()
                                        .includes(tag.toLowerCase()) ||
                                      tag
                                        .toLowerCase()
                                        .includes(
                                          step.toLowerCase().replace(" ", "")
                                        )
                                  )
                                )
                                .slice(0, 2)
                                .map((resource) => (
                                  <a
                                    key={resource.slug}
                                    href={`/resources/${resource.type}/${resource.slug}`}
                                    className="text-xs px-2 py-1 bg-gray-700/50 rounded-full text-gray-300 hover:bg-blue-400/10 hover:text-blue-400 transition-colors"
                                  >
                                    {resource.title}
                                  </a>
                                ))}
                            </div>
                          )}
                      </div>
                    </div>
                  ))}
                </div>

                {path.resources.length > 0 && (
                  <a
                    href={`/resources/tutorials`}
                    className="mt-6 inline-flex items-center text-sm text-blue-400 hover:text-white transition-colors"
                  >
                    Explore all {path.title.split(" ")[0]} tutorials
                    <FiChevronRight className="ml-1" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Tutorials Grid */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredResources.map((resource) => (
              <motion.article
                key={resource.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className={`bg-gray-800/50 backdrop-blur-sm rounded-2xl border ${
                  expandedResource === resource.slug
                    ? "border-blue-400/50"
                    : "border-gray-700 hover:border-blue-400/30"
                } overflow-hidden transition-all`}
              >
                <div
                  className="p-6 cursor-pointer"
                  onClick={() =>
                    setExpandedResource(
                      expandedResource === resource.slug ? null : resource.slug
                    )
                  }
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`p-2 rounded-full ${
                        resource.level === "beginner"
                          ? "bg-green-400/10 text-green-400"
                          : resource.level === "intermediate"
                          ? "bg-blue-400/10 text-blue-400"
                          : "bg-purple-400/10 text-purple-400"
                      }`}
                    >
                      {resource.level === "beginner" && <FiBook size={18} />}
                      {resource.level === "intermediate" && (
                        <FiBarChart2 size={18} />
                      )}
                      {resource.level === "advanced" && <FiCode size={18} />}
                    </div>
                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-gray-700/50 text-gray-300 capitalize">
                      {resource.level}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-2 text-white">
                    {resource.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{resource.excerpt}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {resource.tags?.slice(0, 3).map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-700/50 text-xs rounded-full text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {expandedResource === resource.slug && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-6 pb-6"
                  >
                    <div className="border-t border-gray-700 pt-4">
                      <h4 className="font-medium text-blue-400 mb-2">
                        {`What you'll learn:`}
                      </h4>
                      <ul className="list-disc list-inside text-gray-400 space-y-1 text-sm">
                        {/* You can extract learning points from content or add a new field */}
                        <li>Core concepts and practical applications</li>
                        <li>Step-by-step implementation guide</li>
                        <li>Best practices and optimization tips</li>
                      </ul>

                      <div className="mt-4 flex justify-between items-center">
                        <span className="text-sm text-gray-500 flex items-center gap-1">
                          <FiClock size={14} />{" "}
                          {resource.readTime || "5 min read"}
                        </span>
                        <a
                          href={`/resources/${resource.type}/${resource.slug}`}
                          className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-400 to-cyan-500 text-black font-medium text-sm hover:shadow-lg hover:shadow-blue-400/20 transition-all"
                        >
                          Start Learning
                        </a>
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.article>
            ))}
          </div>

          {filteredResources.length === 0 && (
            <div className="text-center py-12">
              <h4 className="text-xl text-gray-400 mb-2">
                No tutorials found for {knowledgeLevel}
              </h4>
              <button
                onClick={() => setKnowledgeLevel("All Levels")}
                className="px-4 py-2 rounded-lg border border-gray-700 text-gray-300 hover:bg-gray-700/50 transition-colors"
              >
                Show All Tutorials
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ResourcesTutorialsSection;
