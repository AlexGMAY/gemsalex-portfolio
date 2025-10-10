"use client";

import { motion } from "framer-motion";
import {
  FiCode,
  FiTool,
  FiBookOpen,
  FiPackage,
  FiExternalLink,
  FiSearch,
  FiLink,
} from "react-icons/fi";
import { useState, useEffect } from "react";
import { Resource } from "@/lib/resources";

interface ResourcesLinksSectionProps {
  resources?: Resource[];
}

const ResourcesLinksSection = ({
  resources = [],
}: ResourcesLinksSectionProps) => {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [linkResources, setLinkResources] = useState<Resource[]>([]);

  // Filter to only get link resources
  useEffect(() => {
    const links = Array.isArray(resources)
      ? resources.filter((resource) => resource.type === "links")
      : [];
    setLinkResources(links);
  }, [resources]);

  // Filter resources based on active filter and search query
  const filteredResources = linkResources.filter((resource) => {
    const matchesCategory =
      activeFilter === "all" ||
      (activeFilter === "library" && resource.tags?.includes("library")) ||
      (activeFilter === "tool" && resource.tags?.includes("tool")) ||
      (activeFilter === "book" && resource.tags?.includes("book")) ||
      (activeFilter === "course" && resource.tags?.includes("course"));

    const matchesSearch =
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.tags?.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );

    return matchesCategory && matchesSearch;
  });

  // Get unique categories from tags
  const getCategories = () => {
    const allTags = linkResources.flatMap((resource) => resource.tags || []);
    const categoryTags = ["library", "tool", "book", "course"];
    const availableCategories = categoryTags.filter(
      (tag) =>
        allTags.includes(tag) ||
        linkResources.some((resource) =>
          resource.tags?.some((t) => categoryTags.includes(t))
        )
    );

    return ["all", ...availableCategories];
  };

  const categories = getCategories();

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
        return <FiLink size={18} />;
    }
  };

  // Extract URL from resource content or use a default
  const getResourceUrl = (resource: Resource): string => {
    // Try to extract URL from content (first link found)
    const urlMatch = resource.content.match(/https?:\/\/[^\s]+/);
    if (urlMatch) {
      return urlMatch[0];
    }

    // Fallback URLs based on tags or title
    if (resource.tags?.includes("react")) return "https://react.dev";
    if (resource.tags?.includes("nextjs")) return "https://nextjs.org";
    if (resource.tags?.includes("typescript"))
      return "https://typescriptlang.org";
    if (resource.tags?.includes("tailwind")) return "https://tailwindcss.com";

    return "#";
  };

  // Check if resource is free (default to true for links)
  const isResourceFree = (resource: Resource): boolean => {
    return (
      !resource.tags?.includes("paid") && !resource.tags?.includes("premium")
    );
  };

  // Get primary category from tags
  const getPrimaryCategory = (resource: Resource): string => {
    const categoryTags = ["library", "tool", "book", "course"];
    const foundCategory = resource.tags?.find((tag) =>
      categoryTags.includes(tag)
    );
    return foundCategory || "link";
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
            My curated collection of essential development resources, tools, and
            references
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
            <div className="flex flex-wrap gap-2 justify-center">
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
          {filteredResources.map((resource) => {
            const resourceUrl = getResourceUrl(resource);
            const isFree = isResourceFree(resource);
            const primaryCategory = getPrimaryCategory(resource);

            return (
              <motion.div
                key={`${resource.type}-${resource.slug}`}
                whileHover={{ y: -5 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-amber-400/30 overflow-hidden transition-all h-full"
              >
                <div className="p-6 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`p-3 rounded-full ${
                        primaryCategory === "library"
                          ? "bg-blue-400/10 text-blue-400"
                          : primaryCategory === "tool"
                          ? "bg-green-400/10 text-green-400"
                          : primaryCategory === "book"
                          ? "bg-purple-400/10 text-purple-400"
                          : "bg-amber-400/10 text-amber-400"
                      }`}
                    >
                      {getCategoryIcon(primaryCategory)}
                    </div>
                    <div>
                      <h3 className="font-bold text-white">{resource.title}</h3>
                      {isFree && (
                        <span className="text-xs px-2 py-1 bg-green-400/10 text-green-400 rounded-full">
                          Free
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="text-gray-400 mb-4 flex-1">
                    {resource.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {resource.tags?.slice(0, 4).map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-700/50 text-xs rounded-full text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={resourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-amber-400 hover:text-white transition-colors text-sm font-medium"
                  >
                    Visit Resource <FiExternalLink size={14} />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Empty state */}
        {filteredResources.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <h4 className="text-xl text-gray-400 mb-2">
              {linkResources.length === 0
                ? "No link resources available yet"
                : "No resources match your search"}
            </h4>
            {(searchQuery || activeFilter !== "all") && (
              <button
                onClick={() => {
                  setActiveFilter("all");
                  setSearchQuery("");
                }}
                className="px-4 py-2 rounded-lg border border-gray-700 text-gray-300 hover:bg-gray-700/50 transition-colors"
              >
                Clear filters
              </button>
            )}
          </motion.div>
        )}

        {/* Add resource CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-4">
            Have a great resource to suggest?
          </p>
          <a
            href="mailto:your-email@example.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-amber-400/10 border border-amber-400/20 text-amber-400 hover:bg-amber-400/20 transition-colors"
          >
            <FiExternalLink size={16} />
            Suggest a Resource
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ResourcesLinksSection;
