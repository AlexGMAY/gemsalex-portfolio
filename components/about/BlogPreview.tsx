"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  readTime: string;
  tag: string;
}

const BlogPreview = () => {
  const featuredPosts = [
    {
      id: "1",
      title: "Advanced Next.js Optimization Techniques",
      excerpt:
        "Learn how to achieve 95+ Lighthouse scores with these proven methods.",
      date: "May 15, 2023",
      slug: "/blog/nextjs-optimization",
      readTime: "8 min read",
      tag: "Performance",
    },
    {
      id: "2",
      title: "Building Scalable React Architecture",
      excerpt:
        "Patterns for maintaining large-scale React applications with ease.",
      date: "April 2, 2023",
      slug: "/blog/react-architecture",
      readTime: "10 min read",
      tag: "Frontend",
    },
    {
      id: "5",
      title: "Freelancing Business Strategies",
      excerpt: "How I built a sustainable freelance development business.",
      date: "January 12, 2023",
      slug: "/blog/freelancing-strategies",
      readTime: "12 min read",
      tag: "Business",
    },
  ];

  return (
    <section id="blog-preview" className="py-24">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="heading mb-12"
        >
          Recent <span className="text-lime-400">Articles</span>
        </motion.h2>
        <p className="text-lg text-center text-neutral-400 mb-24">
          Browse through some of my articles accross different categories.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {featuredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-black-200 p-6 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full mb-3">
                {post.tag}
              </span>
              <h3 className="text-xl font-bold mb-6">{post.title}</h3>
              <p className="text-gray-600 mb-6">{post.excerpt}</p>
              <div className="flex justify-between items-center border-t border-gray-800 px-6 py-4">
                <span className="text-sm text-gray-500">{post.date}</span>
                <Link
                  href={post.slug}
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                >
                  Read more →
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center"
        >
          <Link
            href="/blog"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            View All Articles
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogPreview;
