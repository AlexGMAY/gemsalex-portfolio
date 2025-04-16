"use client";

import { motion } from "framer-motion";
import {
  FiCode,
  FiTool,
  FiBookOpen,
  FiPackage,
  FiExternalLink,
  FiSearch,
} from "react-icons/fi";
import { useState } from "react";

type Resource = {
  id: number;
  name: string;
  category: "library" | "tool" | "book" | "course";
  description: string;
  url: string;
  tags: string[];
  isFree?: boolean;
};

const BlogResourcesSection = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Sample resources data - replace with your actual recommendations
  const resources: Resource[] = [
    {
      id: 1,
      name: "React Documentation",
      category: "library",
      description: "Official React docs with hooks reference and examples",
      url: "https://react.dev",
      tags: ["react", "frontend", "documentation"],
      isFree: true,
    },
    {
      id: 2,
      name: "Next.js GitHub",
      category: "library",
      description: "Official Next.js repository with examples and issues",
      url: "https://github.com/vercel/next.js",
      tags: ["nextjs", "fullstack", "ssr"],
      isFree: true,
    },
    {
      id: 3,
      name: "TypeScript Handbook",
      category: "book",
      description: "Comprehensive guide to TypeScript features",
      url: "https://www.typescriptlang.org/docs/handbook",
      tags: ["typescript", "documentation"],
      isFree: true,
    },
    {
      id: 4,
      name: "Tailwind CSS",
      category: "library",
      description: "Utility-first CSS framework for rapid UI development",
      url: "https://tailwindcss.com",
      tags: ["css", "frontend", "ui"],
      isFree: true,
    },
    {
      id: 5,
      name: "VSCode",
      category: "tool",
      description: "Lightweight but powerful source code editor",
      url: "https://code.visualstudio.com",
      tags: ["editor", "development"],
      isFree: true,
    },
    {
      id: 6,
      name: "Design Systems for Developers",
      category: "course",
      description: "Learn to build maintainable design systems",
      url: "#",
      tags: ["design", "ui", "components"],
      isFree: false,
    },
  ];

  // Filter resources
  const filteredResources = resources.filter((resource) => {
    const matchesCategory =
      activeFilter === "all" || resource.category === activeFilter;
    const matchesSearch =
      resource.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  // Get unique categories
  const categories = [
    "all",
    ...Array.from(new Set(resources.map((r) => r.category))),
  ];

  // Get icon for each category
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "library":
        return <FiPackage size={18} />;
      case "tool":
        return <FiTool size={18} />;
      case "book":
        return <FiBookOpen size={18} />;
      case "course":
        return <FiCode size={18} />;
      default:
        return <FiCode size={18} />;
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-black-100 to-black-100 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
              Resources & Tools
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My curated collection of essential development resources
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mb-8"
        >
          <div className="flex flex-col items-center justify-center sm:flex-row gap-4">
            {/* Category filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveFilter(category)}
                  className={`px-4 py-2 rounded-full flex items-center gap-2 text-sm ${
                    activeFilter === category
                      ? "bg-gradient-to-r from-amber-400 to-orange-500 text-black font-medium"
                      : "bg-gray-800/50 border border-gray-700 text-gray-300 hover:bg-gray-700"
                  }`}
                >
                  {getCategoryIcon(category)}
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </motion.button>
              ))}
            </div>

            {/* Search input */}
            <div className="flex-1 max-w-md">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search resources..."
                  className="w-full px-4 pl-10 py-2 rounded-full bg-gray-800/50 border border-gray-700 text-white placeholder-gray-500 outline-none focus:border-amber-400/50"
                />
                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Resources Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredResources.map((resource) => (
            <motion.div
              key={resource.id}
              whileHover={{ y: -5 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-amber-400/30 overflow-hidden transition-all h-full"
            >
              <div className="p-6 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`p-3 rounded-full ${
                      resource.category === "library"
                        ? "bg-blue-400/10 text-blue-400"
                        : resource.category === "tool"
                        ? "bg-green-400/10 text-green-400"
                        : resource.category === "book"
                        ? "bg-purple-400/10 text-purple-400"
                        : "bg-amber-400/10 text-amber-400"
                    }`}
                  >
                    {getCategoryIcon(resource.category)}
                  </div>
                  <div>
                    <h3 className="font-bold text-white">{resource.name}</h3>
                    {resource.isFree && (
                      <span className="text-xs px-2 py-1 bg-green-400/10 text-green-400 rounded-full">
                        Free
                      </span>
                    )}
                  </div>
                </div>

                <p className="text-gray-400 mb-4 flex-1">
                  {resource.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {resource.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-700/50 text-xs rounded-full text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-amber-400 hover:text-white transition-colors text-sm font-medium"
                >
                  Visit Resource <FiExternalLink size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty state */}
        {filteredResources.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <h4 className="text-xl text-gray-400 mb-2">No resources found</h4>
            <button
              onClick={() => {
                setActiveFilter("all");
                setSearchQuery("");
              }}
              className="px-4 py-2 rounded-lg border border-gray-700 text-gray-300 hover:bg-gray-700/50 transition-colors"
            >
              Clear filters
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default BlogResourcesSection;
