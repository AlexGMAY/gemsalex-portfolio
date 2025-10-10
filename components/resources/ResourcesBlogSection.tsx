"use client";

import { motion } from "framer-motion";
import {
  FiBook,
  FiCalendar,
  FiClock,
  FiSearch,
  FiFilter,
  FiArrowRight,
  FiUser,
  FiTag,
  FiChevronDown,
} from "react-icons/fi";
import { Resource } from "@/lib/resources";
import { useState, useMemo } from "react";

interface ResourcesBlogSectionProps {
  resources?: Resource[];
}

const ResourcesBlogSection = ({
  resources = [],
}: ResourcesBlogSectionProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedTag, setSelectedTag] = useState<string>("All");
  const [sortBy, setSortBy] = useState<"newest" | "oldest">("newest");
  const [expandedPost, setExpandedPost] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  // Get unique categories and tags
  const categories = useMemo(() => {
    const allCategories = resources
      .map((resource) => resource.category)
      .filter(Boolean) as string[];
    return ["All", ...Array.from(new Set(allCategories))];
  }, [resources]);

  const tags = useMemo(() => {
    const allTags = resources.flatMap((resource) => resource.tags || []);
    return ["All", ...Array.from(new Set(allTags))];
  }, [resources]);

  // Filter and sort resources
  const filteredResources = useMemo(() => {
    let filtered = resources.filter((resource) => {
      const matchesSearch =
        resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.content.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === "All" || resource.category === selectedCategory;

      const matchesTag =
        selectedTag === "All" || resource.tags?.includes(selectedTag);

      return matchesSearch && matchesCategory && matchesTag;
    });

    // Sort resources
    filtered.sort((a, b) => {
      if (sortBy === "newest") {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      } else {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      }
    });

    return filtered;
  }, [resources, searchQuery, selectedCategory, selectedTag, sortBy]);

  // Featured posts (first 2 featured or first 2 posts)
  const featuredPosts = useMemo(() => {
    const featured = resources.filter((r) => r.featured);
    return featured.length >= 2 ? featured.slice(0, 2) : resources.slice(0, 2);
  }, [resources]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All");
    setSelectedTag("All");
    setSortBy("newest");
  };

  return (
    <section className="py-20 bg-gradient-to-b from-black-100 to-black-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-40">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-lime-500/10 blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
          className="absolute bottom-1/3 right-1/3 w-96 h-96 rounded-full bg-pink-500/10 blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Blog &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-lime-500">
              Articles
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Insights, tutorials, and thoughts on web development, technology
            trends, and best practices.
          </p>
        </motion.div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-lime-500">
                Featured{" "}
              </span>
              Articles
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-blue-400/30 overflow-hidden transition-all hover:transform hover:scale-105"
                >
                  <div className="p-8 h-full flex flex-col">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 rounded-full bg-lime-400/10 text-lime-400">
                        <FiBook size={20} />
                      </div>
                      {post.featured && (
                        <span className="px-3 py-1 bg-yellow-400/10 text-yellow-400 rounded-full text-sm font-medium">
                          Featured
                        </span>
                      )}
                    </div>

                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-gray-200 transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-gray-400 mb-6 flex-grow line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <FiCalendar size={14} />
                          <span>
                            {new Date(post.date).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </span>
                        </div>
                        {post.readTime && (
                          <div className="flex items-center gap-1">
                            <FiClock size={14} />
                            <span>{post.readTime}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <a
                        href={`/resources/${post.type}/${post.slug}`}
                        className="inline-flex items-center gap-2 text-blue-400 hover:text-lime-300 transition-colors font-medium"
                      >
                        Read Article
                        <FiArrowRight size={16} />
                      </a>
                      {post.author && (
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                          <FiUser size={14} />
                          <span>{post.author}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        )}

        {/* Filters and Search */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mb-12"
        >
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
            {/* Search Bar */}
            <div className="flex-1 max-w-md">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search articles..."
                  className="w-full px-4 pl-12 py-3 rounded-xl bg-gray-800/50 border border-gray-700 text-white placeholder-gray-500 outline-none focus:border-blue-400/50 transition-colors"
                />
                <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
              </div>
            </div>

            {/* Filter Toggle */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-800/50 border border-gray-700 text-gray-300 hover:bg-gray-700 transition-colors"
            >
              <FiFilter size={18} />
              Filters
              <FiChevronDown
                className={`transition-transform ${
                  showFilters ? "rotate-180" : ""
                }`}
                size={16}
              />
            </motion.button>

            {/* Sort */}
            <div className="flex items-center gap-3">
              <span className="text-gray-400 text-sm">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) =>
                  setSortBy(e.target.value as "newest" | "oldest")
                }
                className="px-4 py-2 rounded-lg bg-gray-800/50 border border-gray-700 text-white outline-none focus:border-blue-400/50 transition-colors"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
              </select>
            </div>
          </div>

          {/* Expanded Filters */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="mt-6 p-6 rounded-2xl bg-gray-800/50 border border-gray-700"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Category Filter */}
                <div>
                  <h4 className="text-sm font-medium text-gray-300 mb-3">
                    Category
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-4 py-2 rounded-full text-sm transition-colors ${
                          selectedCategory === category
                            ? "bg-blue-500 text-white font-medium"
                            : "bg-gray-700/50 text-gray-300 hover:bg-gray-600"
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Tag Filter */}
                <div>
                  <h4 className="text-sm font-medium text-gray-300 mb-3">
                    Tags
                  </h4>
                  <div className="flex flex-wrap gap-2 max-h-32 overflow-y-auto">
                    {tags.slice(0, 10).map((tag) => (
                      <button
                        key={tag}
                        onClick={() => setSelectedTag(tag)}
                        className={`px-3 py-1 rounded-full text-xs transition-colors ${
                          selectedTag === tag
                            ? "bg-lime-500 text-white font-medium"
                            : "bg-gray-700/50 text-gray-300 hover:bg-gray-600"
                        }`}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Clear Filters */}
              {(searchQuery ||
                selectedCategory !== "All" ||
                selectedTag !== "All") && (
                <div className="mt-4 pt-4 border-t border-gray-700">
                  <button
                    onClick={clearFilters}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    Clear all filters
                  </button>
                </div>
              )}
            </motion.div>
          )}
        </motion.div>

        {/* Results Count */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mb-8"
        >
          <p className="text-gray-400">
            Showing {filteredResources.length} of {resources.length} articles
            {(searchQuery ||
              selectedCategory !== "All" ||
              selectedTag !== "All") && (
              <span className="text-blue-400 ml-2">(filtered)</span>
            )}
          </p>
        </motion.div>

        {/* Blog Posts Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredResources.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group bg-gray-800/50 backdrop-blur-sm rounded-2xl border overflow-hidden transition-all ${
                expandedPost === post.slug
                  ? "border-blue-400/50"
                  : "border-gray-700 hover:border-blue-400/30"
              }`}
            >
              <div
                className="p-6 cursor-pointer"
                onClick={() =>
                  setExpandedPost(expandedPost === post.slug ? null : post.slug)
                }
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-full bg-blue-400/10 text-blue-400">
                      <FiBook size={16} />
                    </div>
                    {post.level && (
                      <span
                        className={`text-xs px-2 py-1 rounded-full capitalize ${
                          post.level === "beginner"
                            ? "bg-green-400/10 text-green-400"
                            : post.level === "intermediate"
                            ? "bg-blue-400/10 text-blue-400"
                            : "bg-lime-400/10 text-lime-400"
                        }`}
                      >
                        {post.level}
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-gray-500">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-gray-200 transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-gray-400 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Tags */}
                {post.tags && post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-gray-700/50 text-xs rounded-full text-gray-300"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <span className="text-blue-400 text-sm group-hover:text-blue-300 transition-colors">
                    Read more
                  </span>
                  {post.readTime && (
                    <span className="text-xs text-gray-500 flex items-center gap-1">
                      <FiClock size={12} />
                      {post.readTime}
                    </span>
                  )}
                </div>
              </div>

              {/* Expanded View */}
              {expandedPost === post.slug && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="px-6 pb-6 border-t border-gray-700"
                >
                  <div className="pt-4">
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                      {post.author && (
                        <div className="flex items-center gap-1">
                          <FiUser size={14} />
                          <span>{post.author}</span>
                        </div>
                      )}
                      {post.category && (
                        <div className="flex items-center gap-1">
                          <FiTag size={14} />
                          <span>{post.category}</span>
                        </div>
                      )}
                    </div>

                    <a
                      href={`/resources/${post.type}/${post.slug}`}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-400 to-lime-500 text-white font-medium text-sm hover:shadow-lg hover:shadow-lime-400/20 transition-all"
                    >
                      Read Full Article
                      <FiArrowRight size={16} />
                    </a>
                  </div>
                </motion.div>
              )}
            </motion.article>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredResources.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="max-w-md mx-auto">
              <div className="p-6 rounded-2xl bg-blue-400/10 mb-6 inline-block">
                <FiBook className="text-4xl text-lime-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                No articles found
              </h3>
              <p className="text-gray-400 mb-6">
                {resources.length === 0
                  ? "No blog articles available yet. Check back soon for new content!"
                  : "No articles match your current filters. Try adjusting your search or filters."}
              </p>
              {(searchQuery ||
                selectedCategory !== "All" ||
                selectedTag !== "All") && (
                <button
                  onClick={clearFilters}
                  className="px-6 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white hover:bg-gray-700 transition-colors"
                >
                  Clear Filters
                </button>
              )}
            </div>
          </motion.div>
        )}
      </div>

      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute rounded-full bg-lime-400"
          style={{
            width: Math.random() * 6 + 2 + "px",
            height: Math.random() * 6 + 2 + "px",
            top: Math.random() * 100 + "%",
            left: Math.random() * 100 + "%",
          }}
          animate={{
            y: [0, (Math.random() - 0.5) * 100],
            x: [0, (Math.random() - 0.5) * 100],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 10 + Math.random() * 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}
    </section>
  );
};

export default ResourcesBlogSection;
