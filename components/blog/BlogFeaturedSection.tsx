"use client";

import { motion } from "framer-motion";
import {
  FiCalendar,
  FiClock,
  FiTrendingUp,
  FiEye,
  FiShare2,
  FiArrowRight,
} from "react-icons/fi";
import { BlogPost } from "@/lib/BlogPost";
import { useEffect, useState } from "react";
import { incrementViewCount } from "@/lib/views";
import { shareOnSocial } from "@/lib/socials";

const BlogFeaturedSection = ({ allPosts }: { allPosts: BlogPost[] }) => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [posts, setPosts] = useState<BlogPost[]>(allPosts);
  const [shareCounts, setShareCounts] = useState<Record<number, number>>({});

  // Track view when component mounts
  useEffect(() => {
    // const featuredPostId = allPosts[0]?.id;
    // if (featuredPostId) {
    //   incrementViewCount(featuredPostId.toString()).then((updatedViews: any) => {
    //     setPosts((prev) =>
    //       prev.map((post) =>
    //         post.id === featuredPostId ? { ...post, views: updatedViews } : post
    //       )
    //     );
    //   });
    // }

    // // Load share counts
    // loadShareCounts();
  }, []);

  const loadShareCounts = async () => {
    const counts = await Promise.all(
      allPosts.map(async (post) => {
        const response = await fetch(`/api/shares/${post.id}`);
        const data = await response.json();
        return { id: post.id, count: data.count || 0 };
      })
    );
    setShareCounts(
      Object.fromEntries(counts.map((item) => [item.id, item.count]))
    );
  };

  // Get filtered posts
  const filteredPosts =
    activeCategory === "All"
      ? posts
      : posts.filter((post) => post.tags.includes(activeCategory));

  // Get featured post (most viewed in last 7 days)
  const featuredPost = [...filteredPosts].sort(
    (a, b) => (b.views || 0) - (a.views || 0)
  )[0];

  // Get trending posts (combination of views and shares)
  const trendingPosts = [...filteredPosts]
    .filter((post) => post.id !== featuredPost.id)
    .sort((a, b) => {
      const aScore = (a.views || 0) * 0.7 + (shareCounts[a.id] || 0) * 0.3;
      const bScore = (b.views || 0) * 0.7 + (shareCounts[b.id] || 0) * 0.3;
      return bScore - aScore;
    })
    .slice(0, 3);

  // Unique categories from all posts
  // const categories = ["All", ...new Set(allPosts.flatMap((post) => post.tags))];
  const categories: string[] = [
    "All",
    ...Array.from(
      new Set(
        allPosts.flatMap(
          (post) => (Array.isArray(post.tags) ? post.tags : [post.tags]) // fallback if tags isn't always an array
        )
      )
    ),
  ];

  const handleShare = async (
    postId: any,
    // platform: string,
    // postUrl: string,
    // shareText?: string
  ) => {
    shareOnSocial(postId, "", "");
    setShareCounts((prev) => ({
      ...prev,
      [postId]: (prev[postId] || 0) + 1,
    }));
  };

  return (
    <section className="pt-36 pb-20 bg-gradient-to-b from-black-100 to-black-100 relative">
      <div className="container mx-auto px-4 relative z-10">
        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-12 overflow-x-auto"
        >
          <div className="flex space-x-2 pb-2">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm whitespace-nowrap ${
                  activeCategory === category
                    ? "bg-gradient-to-r from-lime-400 to-emerald-500 text-black font-medium"
                    : "bg-gray-800/50 border border-gray-700 text-gray-300 hover:bg-gray-700"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Featured Post */}
        {featuredPost && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mb-20"
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="w-4 h-4 rounded-full bg-lime-400 animate-pulse" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-emerald-500">
                Featured Article
              </span>
            </h2>

            <div className="relative group h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-lime-400/10 to-emerald-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative h-full flex flex-col md:flex-row gap-6 p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 group-hover:border-lime-400/30 transition-all">
                <div className="md:w-1/2 overflow-hidden rounded-xl">
                  <motion.img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-64 md:h-full object-cover rounded-xl group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="md:w-1/2 flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-3">
                    <span className="flex items-center gap-1">
                      <FiCalendar />{" "}
                      {new Date(featuredPost.date).toLocaleDateString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <FiClock /> {featuredPost.readTime} read
                    </span>
                    <span className="flex items-center gap-1">
                      <FiEye /> {featuredPost.views?.toLocaleString() || "0"}{" "}
                      views
                    </span>
                    <span className="flex items-center gap-1">
                      <FiShare2 />{" "}
                      {shareCounts[featuredPost.id]?.toLocaleString() || "0"}{" "}
                      shares
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-white">
                    {featuredPost.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{featuredPost.excerpt}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredPost.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-700/50 text-xs rounded-full text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <motion.a
                      href={`/blog/${featuredPost.slug}`}
                      className="px-6 py-2 rounded-lg bg-gradient-to-r from-lime-400 to-emerald-500 text-black font-medium hover:shadow-lg hover:shadow-lime-400/20 transition-all"
                      whileHover={{ scale: 1.05 }}
                    >
                      Read Now
                    </motion.a>
                    <motion.button
                      onClick={() => handleShare(featuredPost.id)}
                      className="px-4 py-2 rounded-lg border border-gray-700 text-gray-300 hover:bg-gray-700/50 transition-all flex items-center gap-2"
                      whileHover={{ scale: 1.05 }}
                    >
                      <FiShare2 /> Share
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Trending Posts */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <FiTrendingUp className="text-purple-400" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
              Trending This Week
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trendingPosts.map((post) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="group h-full"
              >
                <div className="h-full flex flex-col bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 group-hover:border-lime-400/30 overflow-hidden transition-all">
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 justify-between">
                      <motion.a
                        href={`/blog/${post.slug}`}
                        className="px-4 py-2 rounded-lg bg-gradient-to-r from-lime-400 to-emerald-500 text-black font-medium text-sm"
                        whileHover={{ scale: 1.05 }}
                      >
                        Read Article
                      </motion.a>
                      <motion.button
                        onClick={() => handleShare(post.id)}
                        className="p-2 rounded-full bg-gray-700/80 text-white"
                        whileHover={{ scale: 1.1 }}
                      >
                        <FiShare2 size={16} />
                      </motion.button>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400 mb-3">
                      <span className="flex items-center gap-1">
                        <FiCalendar />{" "}
                        {new Date(post.date).toLocaleDateString()}
                      </span>
                      <span className="flex items-center gap-1">
                        <FiEye /> {post.views?.toLocaleString() || "0"}
                      </span>
                      <span className="flex items-center gap-1">
                        <FiShare2 />{" "}
                        {shareCounts[post.id]?.toLocaleString() || "0"}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-white group-hover:text-lime-400 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-400 mb-4 text-sm flex-1">
                      {post.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.slice(0, 2).map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gray-700/50 text-xs rounded-full text-gray-300 flex items-center gap-1"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-12 text-center"
        >
          <motion.a
            href={`/blog/all${
              activeCategory !== "All" ? `?category=${activeCategory}` : ""
            }`}
            className="inline-flex items-center px-6 py-3 border border-gray-700 rounded-lg bg-gray-800/50 text-white hover:bg-lime-400/10 hover:border-lime-400/30 hover:text-lime-400 transition-all group"
            whileHover={{ scale: 1.02 }}
          >
            View All {activeCategory !== "All" ? activeCategory : ""} Articles
            <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogFeaturedSection;
