"use client";

import { motion } from "framer-motion";
import { FiArrowDown, FiSearch, FiX } from "react-icons/fi";
import { Typewriter } from "react-simple-typewriter";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { debounce } from "lodash";
import { BlogPost } from "@/lib/BlogPost";

const BlogHero = ({ allPosts }: { allPosts: BlogPost[] }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<BlogPost[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const router = useRouter();
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const topics = [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "SaaS",
    "Performance",
    "Security",
  ];

  // Debounced search function
  const performSearch = debounce((query: string) => {
    if (query.trim() === "") {
      setSearchResults([]);
      setIsSearching(false);
      return;
    }

    setIsSearching(true);
    const results = allPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(query.toLowerCase()) ||
        post.tags.some((tag) => tag.toLowerCase().includes(query.toLowerCase()))
    );

    setSearchResults(results);
    setIsSearching(false);
  }, 300);

  useEffect(() => {
    performSearch(searchQuery);
    return () => performSearch.cancel();
  }, [searchQuery]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/blog/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  const handleTopicClick = (topic: string) => {
    setSearchQuery(topic);
    inputRef.current?.focus();
  };

  // Close results when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setSearchResults([]);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section className="relative pt-36 h-[85vh] min-h-[600px] flex items-center justify-center bg-gradient-to-b from-black-100 to-black-100 border-b border-gray-800">
      {/* Background elements (same as before) */}
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
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-lime-400/10 blur-3xl"
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
          className="absolute bottom-1/3 right-1/3 w-96 h-96 rounded-full bg-purple-500/10 blur-3xl"
        />
      </div>
      {/* ... */}

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          {/* Animated greeting (same as before) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lime-400 font-mono mb-4"
          >
            <Typewriter
              words={[
                "Welcome to my tech blog",
                "Explore my tutorials",
                "Learn with me",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </motion.div>
          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight"
          >
            <span className="text-white">Insights on </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-emerald-500">
              Modern Web Dev
            </span>
          </motion.h1>
          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto mb-8"
          >
            Tutorials, case studies and best practices for building scalable web
            applications
          </motion.p>
          {/* ... */}
          {/* Search Bar with Results */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="max-w-xl mx-auto mb-10 relative"
            ref={searchRef}
          >
            <form onSubmit={handleSearchSubmit}>
              <div className="relative">
                <input
                  ref={inputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search articles..."
                  className="w-full px-6 py-4 pl-14 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 focus:border-lime-400/50 focus:ring-2 focus:ring-lime-400/20 text-white placeholder-gray-500 outline-none transition-all"
                />
                <FiSearch className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl" />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => {
                      setSearchQuery("");
                      setSearchResults([]);
                    }}
                    className="absolute right-16 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-white transition-colors"
                  >
                    <FiX size={20} />
                  </button>
                )}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-2 rounded-lg bg-gradient-to-r from-lime-400 to-emerald-500 text-black font-medium text-sm hidden sm:block"
                >
                  Search
                </motion.button>
              </div>
            </form>

            {/* Search suggestions */}
            <div className="mt-3 text-xs text-gray-600 text-left ml-2">
              Try: "React hooks", "Next.js auth", or "TypeScript patterns"
            </div>

            {/* Live Search Results */}
            {searchResults.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute top-full left-0 right-0 mt-2 bg-gray-800/90 backdrop-blur-lg rounded-xl border border-gray-700 shadow-2xl z-50 overflow-hidden"
              >
                <div className="max-h-[60vh] overflow-y-auto">
                  {searchResults.map((post) => (
                    <motion.div
                      key={post.id}
                      whileHover={{
                        backgroundColor: "rgba(64, 138, 91, 0.1)",
                      }}
                      className="p-4 border-b border-gray-700 last:border-b-0 cursor-pointer"
                      onClick={() => router.push(`/blog/${post.slug}`)}
                    >
                      <h3 className="font-medium text-white">{post.title}</h3>
                      <p className="text-sm text-gray-400 mt-1 line-clamp-1">
                        {post.excerpt}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-gray-700/50 text-xs rounded-full text-gray-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="p-3 bg-gray-900/50 text-center text-sm text-gray-400 border-t border-gray-700">
                  {searchResults.length} results found
                </div>
              </motion.div>
            )}

            {/* Searching indicator */}
            {isSearching && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute top-full left-0 right-0 mt-2 bg-gray-800/90 backdrop-blur-lg rounded-xl border border-gray-700 p-4 text-center text-gray-400"
              >
                Searching...
              </motion.div>
            )}

            {/* No results found */}
            {searchQuery && searchResults.length === 0 && !isSearching && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute top-full left-0 right-0 mt-2 bg-gray-800/90 backdrop-blur-lg rounded-xl border border-gray-700 p-4 text-center text-gray-400"
              >
                No articles found for "{searchQuery}"
              </motion.div>
            )}
          </motion.div>
          {/* Animated topics */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {topics.map((topic, index) => (
              <motion.span
                key={topic}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                  delay: 1.1 + index * 0.1,
                }}
                onClick={() => handleTopicClick(topic)}
                className="px-4 py-2 bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-700 text-gray-300 hover:bg-lime-400/10 hover:border-lime-400/30 hover:text-lime-400 transition-all cursor-pointer text-sm sm:text-base"
              >
                {topic}
              </motion.span>
            ))}
          </motion.div>
          {/* Scroll indicator (same as before) */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <div className="flex flex-col items-center">
              <span className="text-gray-500 text-sm mb-2">
                Explore Articles
              </span>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              >
                <FiArrowDown className="text-gray-400 text-xl" />
              </motion.div>
            </div>
          </motion.div> */}
          {/* ... */}
        </div>
      </div>

      {/* Floating particles (same as before) */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute rounded-full bg-blue-400"
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

export default BlogHero;




