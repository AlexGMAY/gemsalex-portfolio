import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useMemo } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';

import { blogPosts } from '@/data'; 

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  readTime: string;
  tag: string;
  category: string;
  featured?: boolean;
  views?: number;
  progress?: number;
}

// Mock data - replace with your CMS/data source
// const blogPosts: BlogPost[] = [
//   {
//     id: "1",
//     title: "Advanced Next.js Optimization Techniques",
//     excerpt:
//       "Learn how to achieve 95+ Lighthouse scores with these proven methods.",
//     date: "May 15, 2023",
//     slug: "/blog/nextjs-optimization",
//     readTime: "8 min read",
//     tag: "Performance",
//     category: "Development",
//     featured: true,
//     views: 1245,
//     progress: 85,
//   },
//   {
//     id: "2",
//     title: "Building Scalable React Architecture",
//     excerpt:
//       "Patterns for maintaining large-scale React applications with ease.",
//     date: "April 2, 2023",
//     slug: "/blog/react-architecture",
//     readTime: "10 min read",
//     tag: "Frontend",
//     category: "Development",
//     featured: true,
//     views: 982,
//     progress: 78,
//   },
//   {
//     id: "3",
//     title: "TypeScript Best Practices for Fullstack Devs",
//     excerpt: "Type-safe patterns I wish I knew when starting with TypeScript.",
//     date: "March 18, 2023",
//     slug: "/blog/typescript-best-practices",
//     readTime: "6 min read",
//     tag: "TypeScript",
//     category: "Development",
//     views: 1560,
//     progress: 92,
//   },
//   {
//     id: "4",
//     title: "UI/UX Design Principles for Developers",
//     excerpt: "Essential design concepts every developer should know.",
//     date: "February 5, 2023",
//     slug: "/blog/design-principles",
//     readTime: "5 min read",
//     tag: "Design",
//     category: "Design",
//     views: 875,
//     progress: 65,
//   },
//   {
//     id: "5",
//     title: "Freelancing Business Strategies",
//     excerpt: "How I built a sustainable freelance development business.",
//     date: "January 12, 2023",
//     slug: "/blog/freelancing-strategies",
//     readTime: "12 min read",
//     tag: "Business",
//     category: "Business",
//     featured: true,
//     views: 2100,
//     progress: 88,
//   },
//   {
//     id: "6",
//     title: "Modern CSS Techniques You Should Know",
//     excerpt: "Explore cutting-edge CSS features for better styling solutions.",
//     date: "December 8, 2022",
//     slug: "/blog/modern-css",
//     readTime: "7 min read",
//     tag: "CSS",
//     category: "Frontend",
//     views: 1320,
//     progress: 72,
//   },
//   {
//     id: "7",
//     title: "Authentication Patterns in Next.js",
//     excerpt: "Comparing different auth strategies for Next.js applications.",
//     date: "November 21, 2022",
//     slug: "/blog/nextjs-auth",
//     readTime: "9 min read",
//     tag: "Security",
//     category: "Development",
//     views: 1450,
//     progress: 81,
//   },
//   {
//     id: "8",
//     title: "Building Accessible Web Applications",
//     excerpt: "Practical accessibility tips for developers.",
//     date: "October 15, 2022",
//     slug: "/blog/web-accessibility",
//     readTime: "11 min read",
//     tag: "Accessibility",
//     category: "Best Practices",
//     featured: true,
//     views: 920,
//     progress: 68,
//   },
// ];

const POSTS_PER_PAGE = 6;

const BlogSection = () => {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(false);

  const pathname = usePathname();
  const searchParams = useSearchParams();

  const current = new URLSearchParams(Array.from(searchParams.entries()));

  // Sync state with URL query parameters
  useEffect(() => {    
    const category = searchParams.get("category") || "All";
    const search = searchParams.get("search") || "";
    const page = searchParams.get("page") || "1";
    const featured = searchParams.get("featured") || "false";

    setActiveCategory(category as string);
    setSearchQuery(search as string);
    setCurrentPage(parseInt(page as string));
    setShowFeaturedOnly(featured === "true");
  }, [searchParams]);

  // Update URL when filters change
  useEffect(() => {
    const params = new URLSearchParams();

    if (activeCategory !== "All") params.set("category", activeCategory);
    if (searchQuery) params.set("search", searchQuery);
    if (currentPage > 1) params.set("page", currentPage.toString());
    if (showFeaturedOnly) params.set("featured", "true");

    // Preserve other existing query params
    Array.from(current.entries()).forEach(([key, value]) => {
      if (!params.has(key)) params.set(key, value);
    });

    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  }, [
    activeCategory,
    searchParams,
    pathname,
    router,
    searchQuery,
    currentPage,
    showFeaturedOnly,
  ]);

  const categories = useMemo(
    () => [
      "All",
      "Featured",
      ...Array.from(new Set(blogPosts.map((post) => post.category))),
    ],
    []
  );

  const filteredPosts = useMemo(() => {
    let results = [...blogPosts];
    
    if (showFeaturedOnly) {
      results = results.filter(post => post.featured);
    }
    
    if (activeCategory !== 'All') {
      if (activeCategory !== 'Featured') {
        results = results.filter(post => post.category === activeCategory);
      }
    }
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      results = results.filter(post => 
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.tag.toLowerCase().includes(query)
      );
    }
    
    return results;
  }, [blogPosts, activeCategory, searchQuery, showFeaturedOnly]);

  // Pagination
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = useMemo(() => {
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
    return filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);
  }, [filteredPosts, currentPage]);

  const handleClearFilters = () => {
    setActiveCategory('All');
    setSearchQuery('');
    setCurrentPage(1);
    setShowFeaturedOnly(false);
  };

  return (
    <section id="blog" className="py-24">
      <div className="container mx-auto px-4">
        <motion.h2 className="heading mb-12">
          Latest <span className="text-blue-200">Articles</span>
        </motion.h2>
        <p className="text-lg text-center text-neutral-400 mb-12">
          Browse through some of my articles accross different categories.
        </p>

        {/* Search and Filter Controls */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-4">
            <div className="relative w-full md:w-96">
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
              />
              <svg className="absolute left-3 top-2.5 h-5 w-5 text-blue-200">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              )}
            </div>

            <div className="flex items-center gap-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={showFeaturedOnly}
                  onChange={(e) => {
                    setShowFeaturedOnly(e.target.checked);
                    setCurrentPage(1);
                  }}
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm">Featured Only</span>
              </label>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 justify-center mt-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setActiveCategory(category);
                  setCurrentPage(1);
                }}
                className={`px-4 py-2 rounded-full text-sm transition-all ${
                  activeCategory === category
                    ? "bg-blue-600 text-white"
                    : "bg-black-200 hover:bg-blue-800"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        {filteredPosts.length === 0 ? (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-gray-500">
              No articles found
            </h3>
            <button
              onClick={handleClearFilters}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Clear all filters
            </button>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence initial={false}>
                {paginatedPosts.map((post) => (
                  <motion.article
                    key={post.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="bg-black-200 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow flex flex-col"
                  >
                    {/* {post.featured && (
                      <div className="bg-blue-600 text-white text-xs font-bold px-3 py-1 absolute top-2 right-2 rounded-full">
                        Featured
                      </div>
                    )} */}

                    <div className="p-6 flex-grow">
                      <div className="flex justify-between items-start mb-3">
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                          {post.tag}
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="text-gray-500 text-sm">
                            {post.readTime}
                          </span>
                          {post.views && (
                            <span className="text-gray-400 text-sm flex items-center">
                              <svg
                                className="w-4 h-4 mr-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                />
                              </svg>
                              {post.views.toLocaleString()}
                            </span>
                          )}
                        </div>
                      </div>

                      <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                      <p className="text-gray-600 mb-4">{post.excerpt}</p>

                      {post.progress && (
                        <div className="mb-4">
                          <div className="h-1 w-full bg-gray-200 rounded-full">
                            <div
                              className="h-1 bg-blue-600 rounded-full"
                              style={{ width: `${post.progress}%` }}
                            />
                          </div>
                          <p className="text-xs text-gray-500 mt-1">
                            {post.progress}% of readers finished
                          </p>
                        </div>
                      )}
                    </div>

                    <div className="px-6 py-4 border-t border-gray-800 flex justify-between items-center">
                      <span className="text-sm text-gray-500">{post.date}</span>
                      <Link
                        href={post.slug}
                        className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
                      >
                        Read more
                        <svg
                          className="w-4 h-4 ml-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </Link>
                    </div>
                  </motion.article>
                ))}
              </AnimatePresence>
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center mt-12">
                <nav className="flex items-center gap-1">
                  <button
                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    className="px-3 py-1 rounded-md disabled:opacity-50"
                  >
                    Previous
                  </button>

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (page) => (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`w-10 h-10 rounded-md ${
                          currentPage === page
                            ? "bg-blue-600 text-white"
                            : "hover:bg-black-200"
                        }`}
                      >
                        {page}
                      </button>
                    )
                  )}

                  <button
                    onClick={() =>
                      setCurrentPage((p) => Math.min(totalPages, p + 1))
                    }
                    disabled={currentPage === totalPages}
                    className="px-3 py-1 rounded-md disabled:opacity-50"
                  >
                    Next
                  </button>
                </nav>
              </div>
            )}

            {/* View All Button */}
            {(activeCategory !== "All" || searchQuery || showFeaturedOnly) && (
              <div className="text-center mt-8">
                <button
                  onClick={handleClearFilters}
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  View all articles
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default BlogSection;