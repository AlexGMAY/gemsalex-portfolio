"use client";

import { motion } from "framer-motion";
import {
  FiArrowLeft,
  FiClock,
  FiCalendar,
  FiTag,
  FiUser,
  FiArrowRight,
  FiBook,
  FiCode,
  FiLink,
} from "react-icons/fi";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useParams } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { MarkdownComponents } from "@/components/MarkdownComponents";

interface Resource {
  type: string;
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  category?: string;
  tags?: string[];
  featured?: boolean;
  image?: string;
  level?: "beginner" | "intermediate" | "advanced";
  readTime?: string;
  author?: string;
}

export default function ResourcePage() {
  const params = useParams();
  const type = params.type as string;
  const slug = params.slug as string;

  const [resource, setResource] = useState<Resource | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [relatedResources, setRelatedResources] = useState<Resource[]>([]);

  useEffect(() => {
    async function loadResource() {
      try {
        // Load main resource
        const resourceResponse = await fetch(`/api/resources/${type}/${slug}`);
        console.log("Resource API Response status:", resourceResponse.status);

        if (!resourceResponse.ok) {
          throw new Error(`Resource not found: ${resourceResponse.status}`);
        }

        const resourceData = await resourceResponse.json();
        console.log("Resource data:", resourceData);

        if (!resourceData.resource) {
          throw new Error("Resource data missing from response");
        }

        setResource(resourceData.resource);

        // Load related resources in parallel for better performance
        try {
          const [relatedResponse] = await Promise.all([
            fetch("/api/resources"),
          ]);

          if (relatedResponse.ok) {
            const allData = await relatedResponse.json();
            const related =
              allData.resources
                ?.filter(
                  (r: Resource) =>
                    r.type === type &&
                    r.slug !== slug &&
                    r.tags?.some((tag) =>
                      resourceData.resource.tags?.includes(tag)
                    )
                )
                .slice(0, 3) || [];
            setRelatedResources(related);
          }
        } catch (relatedError) {
          console.error("Error loading related resources:", relatedError);
          // Don't fail the whole load if related resources fail
        }
      } catch (err) {
        console.error("Error loading resource:", err);
        setError(err instanceof Error ? err.message : "Resource not found");
      } finally {
        setLoading(false);
      }
    }

    loadResource();
  }, [type, slug]);

  const headings = useMemo(() => {
    if (!resource) return [];
    const regex = /^##\s+(.*)$/gm;
    const matches = [...resource.content.matchAll(regex)];
    return matches.map((m) => m[1]);
  }, [resource]);

  // Get type configuration
  const getTypeConfig = (resourceType: string) => {
    const config = {
      blog: {
        icon: FiBook,
        gradient: "from-blue-400 to-lime-500",
        bgGradient: "from-blue-400/10 to-lime-500/10",
      },
      tutorials: {
        icon: FiCode,
        gradient: "from-blue-400 to-cyan-500",
        bgGradient: "from-blue-400/10 to-cyan-500/10",
      },
      links: {
        icon: FiLink,
        gradient: "from-amber-400 to-orange-500",
        bgGradient: "from-amber-400/10 to-orange-500/10",
      },
    };

    return (
      config[resourceType as keyof typeof config] || {
        icon: FiBook,
        gradient: "from-gray-400 to-gray-500",
        bgGradient: "from-gray-400/10 to-gray-500/10",
      }
    );
  };

  const typeConfig = getTypeConfig(type);
  const TypeIcon = typeConfig.icon;
   

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-400">Loading resource...</p>
        </div>
      </div>
    );
  }

  if (error || !resource) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-white">
            Resource not found
          </h1>
          <p className="text-gray-400 mb-8">
            The resource you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-colors"
          >
            <FiArrowLeft size={16} />
            Back to Resources
          </Link>
        </div>
      </div>
    );
  }

  
  return (
    <main className="min-h-screen bg-black-100">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
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
            className={`absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r ${typeConfig.bgGradient} blur-3xl`}
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
            className={`absolute bottom-1/3 right-1/3 w-96 h-96 rounded-full bg-gradient-to-r ${typeConfig.bgGradient} blur-3xl`}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto pt-8">
            {/* Type Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700 mb-6"
            >
              <div
                className={`p-2 rounded-full bg-gradient-to-r ${typeConfig.bgGradient}`}
              >
                <TypeIcon
                  className={`text-lg text-transparent bg-clip-text bg-gradient-to-r ${typeConfig.gradient}`}
                />
              </div>
              <span className="text-sm font-medium text-white capitalize">
                {type}
              </span>
              {resource.level && (
                <span
                  className={`text-xs px-2 py-1 rounded-full capitalize ${
                    resource.level === "beginner"
                      ? "bg-green-400/10 text-green-400"
                      : resource.level === "intermediate"
                        ? "bg-blue-400/10 text-blue-400"
                        : "bg-lime-400/10 text-lime-400"
                  }`}
                >
                  {resource.level}
                </span>
              )}
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight text-white"
            >
              {resource.title}
            </motion.h1>

            {/* Excerpt */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-gray-400 mb-8 leading-relaxed"
            >
              {resource.excerpt}
            </motion.p>

            {/* Meta Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap items-center gap-6 text-sm text-gray-400"
            >
              <div className="flex items-center gap-2">
                <FiCalendar size={16} />
                <span>
                  {new Date(resource.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>

              {resource.readTime && (
                <div className="flex items-center gap-2">
                  <FiClock size={16} />
                  <span>{resource.readTime}</span>
                </div>
              )}

              {resource.author && (
                <div className="flex items-center gap-2">
                  <FiUser size={16} />
                  <span>{resource.author}</span>
                </div>
              )}

              {resource.featured && (
                <span className="px-3 py-1 bg-yellow-400/10 text-yellow-400 rounded-full text-xs font-medium">
                  Featured
                </span>
              )}
            </motion.div>

            {/* Tags */}
            {resource.tags && resource.tags.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-2 mt-6"
              >
                <FiTag className="text-gray-500 mt-1" size={16} />
                {resource.tags.map((tag, index) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-800/50 border border-gray-700 rounded-full text-sm text-gray-300 hover:bg-gray-700 transition-colors cursor-pointer"
                  >
                    #{tag}
                  </span>
                ))}
              </motion.div>
            )}
            {/* Breadcrumb */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-sm text-gray-500 mt-8"
            >
              <Link
                href="/resources"
                className="hover:text-white transition-colors"
              >
                Resources
              </Link>
              <FiArrowRight size={14} />
              <Link
                href={`/resources/${type}`}
                className="hover:text-white transition-colors capitalize"
              >
                {type}
              </Link>
              <FiArrowRight size={14} />
              <span className="text-white line-clamp-1">{resource.title}</span>
            </motion.div>
          </div>
        </div>

        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 6 + 2 + "px",
              height: Math.random() * 6 + 2 + "px",
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
              background: `linear-gradient(to right, ${
                typeConfig.gradient
                  .replace("from-", "")
                  .replace("to-", "")
                  .split(" ")[0]
              }, ${
                typeConfig.gradient
                  .replace("from-", "")
                  .replace("to-", "")
                  .split(" ")[1]
              })`,
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

      {/* Table of Contents */}
      {/* <aside className="hidden lg:block sticky top-32 h-fit w-64">
        <h2 className="text-sm font-semibold text-gray-400 mb-4">
          Table of Contents
        </h2>
        <ul className="space-y-2 text-sm">
          {headings.map((heading) => (
            <li key={heading}>
              <a
                href={`#${heading.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-gray-400 hover:text-white transition"
                aria-label={`Jump to section: ${heading}`}
              >
                {heading}
              </a>
            </li>
          ))}
        </ul>
      </aside> */}

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Markdown Content */}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="prose prose-lg prose-invert max-w-none"
            >
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[
                  rehypeSlug,
                  rehypeAutolinkHeadings,
                  rehypeHighlight,
                ]}
                components={MarkdownComponents}
              >
                {resource.content}
              </ReactMarkdown>
            </motion.article>

            {/* Author Section */}
            {resource.author && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="mt-16 p-6 rounded-2xl bg-gray-800/50 border border-gray-700"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-400 to-cyan-500 flex items-center justify-center">
                    <FiUser className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      Written by {resource.author}
                    </h3>
                    <p className="text-gray-400 mt-1">
                      Software Engineer, Instructor and technical writer sharing
                      knowledge and experiences.
                    </p>
                    <div className="flex space-x-4 mt-2">
                      <Link
                        href="https://github.com/AlexGMAY"
                        aria-label="GitHub"
                        className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                      >
                        <FaGithub size={20} />
                      </Link>
                      <Link
                        href="https://twitter.com/themarvelbiz"
                        aria-label="Twitter"
                        className="text-gray-500 hover:text-blue-500"
                      >
                        <FaTwitter size={20} />
                      </Link>
                      <Link
                        href="https://www.linkedin.com/in/alexandre-merveille-may/"
                        aria-label="LinkedIn"
                        className="text-gray-500 hover:text-blue-700"
                      >
                        <FaLinkedin size={20} />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="mt-16 flex flex-col sm:flex-row gap-4 justify-between items-center pt-8 border-t border-gray-700"
            >
              <Link
                href={`/resources/${type}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white hover:bg-gray-700 transition-colors"
              >
                <FiArrowLeft size={16} />
                Back to {type}
              </Link>

              <Link
                href="/resources"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-400 to-cyan-500 text-black font-medium hover:shadow-lg hover:shadow-blue-400/20 transition-all"
              >
                Explore All Resources
                <FiArrowRight size={16} />
              </Link>
            </motion.div>

            {/* Related Resources */}
            {relatedResources.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="mt-20"
              >
                <h3 className="text-2xl font-bold mb-8 text-white">
                  Related Resources
                </h3>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {relatedResources.map((related, index) => (
                    <Link
                      key={related.slug}
                      href={`/resources/${related.type}/${related.slug}`}
                      className="block group"
                    >
                      <div className="bg-gray-800/50 rounded-xl border border-gray-700 p-6 hover:border-gray-500 transition-all h-full">
                        <h4 className="font-semibold text-white group-hover:text-gray-200 transition-colors mb-2 line-clamp-2">
                          {related.title}
                        </h4>
                        <p className="text-gray-400 text-sm line-clamp-2 mb-3">
                          {related.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-blue-400 text-sm group-hover:text-blue-300 transition-colors">
                            Read more
                          </span>
                          {related.readTime && (
                            <span className="text-xs text-gray-500">
                              {related.readTime}
                            </span>
                          )}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
