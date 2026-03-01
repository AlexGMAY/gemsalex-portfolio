import { getResource, getResourcesByType } from "@/lib/resources";
import type { ResourceType } from "@/lib/resources";
import { notFound } from "next/navigation";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { MarkdownComponents } from "@/components/MarkdownComponents";
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
  FiBookmark,
  FiShare2,
} from "react-icons/fi";

interface Props {
  params: { type: string; slug: string };
}

/* -------------------------------- */
/* SEO                              */
/* -------------------------------- */
export async function generateMetadata({ params }: Props) {
  const resource = getResource(params.type as ResourceType, params.slug);

  if (!resource) return { title: "Not found" };

  return {
    title: resource.title,
    description: resource.excerpt,
  };
}

/* -------------------------------- */
/* Helpers                          */
/* -------------------------------- */
function getTypeConfig(type: string) {
  const config = {
    blog: {
      icon: FiBook,
      gradient: "from-blue-400 to-lime-500",
      bgGradient: "from-blue-400/10 to-lime-500/10",
      color: "blue",
    },
    tutorials: {
      icon: FiCode,
      gradient: "from-blue-400 to-cyan-500",
      bgGradient: "from-blue-400/10 to-cyan-500/10",
      color: "cyan",
    },
    links: {
      icon: FiLink,
      gradient: "from-amber-400 to-orange-500",
      bgGradient: "from-amber-400/10 to-orange-500/10",
      color: "orange",
    },
  };

  return (
    config[type as keyof typeof config] || {
      icon: FiBook,
      gradient: "from-gray-400 to-gray-500",
      bgGradient: "from-gray-400/10 to-gray-500/10",
      color: "gray",
    }
  );
}

/* -------------------------------- */
/* Page                             */
/* -------------------------------- */
export default function Page({ params }: Props) {
  const { type, slug } = params;

  const resource = getResource(type as ResourceType, slug);
  if (!resource) return notFound();

  const typeConfig = getTypeConfig(type);
  const TypeIcon = typeConfig.icon;

  /* ------------------------------- */
  /* Related (SERVER SIDE)           */
  /* ------------------------------- */
  const relatedResources = getResourcesByType(type as ResourceType)
    .filter(
      (r) =>
        r.slug !== slug && r.tags.some((tag) => resource.tags.includes(tag)),
    )
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-black text-white">
      {/* HERO */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Premium Background with Abstract Shapes */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900">
          {/* Animated gradient orbs */}
          <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-1/4 w-[600px] h-[600px] bg-lime-500/20 rounded-full blur-3xl animate-pulse animation-delay-2000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-3xl animate-pulse animation-delay-4000" />

          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />

          {/* Floating particles (static) */}
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white/10"
              style={{
                width: Math.random() * 4 + 2 + "px",
                height: Math.random() * 4 + 2 + "px",
                top: Math.random() * 100 + "%",
                left: Math.random() * 100 + "%",
                transform: `translate(${Math.random() * 100}px, ${Math.random() * 100}px)`,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          {/* Breadcrumb with glass morphism */}
          <nav className="flex items-center gap-2 text-sm mb-8 bg-gray-800/30 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-700/50 w-fit">
            <Link
              href="/resources"
              className="text-gray-400 hover:text-white transition-colors flex items-center gap-1 group"
            >
              <span className="group-hover:translate-x-[-2px] transition-transform">
                ←
              </span>
              Resources
            </Link>
            <FiArrowRight size={14} className="text-gray-600" />
            <Link
              href={`/resources/${type}`}
              className="text-gray-400 hover:text-white transition-colors capitalize"
            >
              {type}
            </Link>
            <FiArrowRight size={14} className="text-gray-600" />
            <span className="text-white font-medium truncate max-w-[200px]">
              {resource.title}
            </span>
          </nav>

          {/* TYPE BADGE - Enhanced with glass effect */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 mb-8 hover:border-gray-600 transition-colors">
            <div
              className={`p-2.5 rounded-full bg-gradient-to-r ${typeConfig.bgGradient} shadow-lg shadow-${typeConfig.color}-500/20`}
            >
              <TypeIcon className="text-white w-4 h-4" />
            </div>

            <span className="text-sm font-medium capitalize text-gray-200">
              {type}
            </span>

            {resource.level && (
              <span className="text-xs px-3 py-1 rounded-full bg-gray-700/80 text-gray-300 capitalize font-medium border border-gray-600">
                {resource.level}
              </span>
            )}
          </div>

          {/* TITLE - With gradient and text shadow */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              {resource.title}
            </span>
          </h1>

          {/* EXCERPT - Enhanced readability */}
          <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed max-w-3xl border-l-4 border-lime-500/50 pl-6">
            {resource.excerpt}
          </p>

          {/* META INFO - Modern card layout */}
          <div className="flex flex-wrap gap-6 text-sm text-gray-300 mb-8 bg-gray-800/30 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50">
            <div className="flex items-center gap-3 group">
              <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 group-hover:scale-110 transition-transform">
                <FiCalendar size={16} />
              </div>
              <span className="font-medium">
                {new Date(resource.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>

            {resource.readTime && (
              <div className="flex items-center gap-3 group">
                <div className="p-2 rounded-lg bg-lime-500/10 text-lime-400 group-hover:scale-110 transition-transform">
                  <FiClock size={16} />
                </div>
                <span className="font-medium">{resource.readTime}</span>
              </div>
            )}

            {resource.author && (
              <div className="flex items-center gap-3 group">
                <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 group-hover:scale-110 transition-transform">
                  <FiUser size={16} />
                </div>
                <span className="font-medium">{resource.author}</span>
              </div>
            )}
          </div>

          {/* TAGS - Interactive chip design */}
          {resource.tags?.length > 0 && (
            <div className="flex flex-wrap items-center gap-3 mt-8">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-800/50 border border-gray-700/50">
                <FiTag size={14} className="text-gray-400" />
                <span className="text-xs font-medium text-gray-400">Tags:</span>
              </div>
              {resource.tags.map((tag, index) => (
                <Link
                  key={tag}
                  href={`/resources/tag/${tag}`}
                  className="group relative px-4 py-2 bg-gray-800/50 border border-gray-700/50 rounded-full text-sm text-gray-300 hover:text-white transition-all hover:border-lime-500/50 hover:bg-gray-800 overflow-hidden"
                >
                  <span className="relative z-10">#{tag}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-lime-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </div>
          )}

          {/* Action Buttons - Share/Save */}
          <div className="flex items-center gap-4 mt-12 pt-8 border-t border-gray-800">
            <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-800/50 border border-gray-700/50 text-gray-300 hover:text-white hover:border-lime-500/30 hover:bg-gray-800 transition-all group">
              <FiShare2
                size={18}
                className="group-hover:rotate-12 transition-transform"
              />
              <span className="text-sm font-medium">Share</span>
            </button>
            <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-800/50 border border-gray-700/50 text-gray-300 hover:text-white hover:border-blue-500/30 hover:bg-gray-800 transition-all group">
              <FiBookmark
                size={18}
                className="group-hover:scale-110 transition-transform"
              />
              <span className="text-sm font-medium">Save</span>
            </button>
            <div className="flex-1" />
            <Link
              href={`/resources/${type}/${resource.slug}/edit`}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-lime-500 to-blue-500 text-white font-medium hover:shadow-lg hover:shadow-lime-500/20 transition-all group"
            >
              <span>Edit Resource</span>
              <FiArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
        </div>

        {/* Decorative bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
      </section>

      

      {/* CONTENT */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <article className="prose prose-invert max-w-none">
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
          </article>

          {/* AUTHOR */}
          {resource.author && (
            <div className="mt-16 p-6 rounded-2xl bg-gray-800 border border-gray-700">
              <h3 className="text-lg font-semibold">
                Written by {resource.author}
              </h3>
              <p className="text-gray-400 mt-2">
                Software Engineer sharing knowledge and experience.
              </p>
            </div>
          )}

          {/* NAV */}
          <div className="mt-16 flex justify-between items-center border-t border-gray-700 pt-8">
            <Link
              href={`/resources/${type}`}
              className="flex items-center gap-2"
            >
              <FiArrowLeft /> Back to {type}
            </Link>

            <Link href="/resources" className="text-blue-400">
              Explore all
            </Link>
          </div>

          {/* RELATED */}
          {relatedResources.length > 0 && (
            <div className="mt-20">
              <h3 className="text-2xl font-bold mb-8">Related Resources</h3>

              <div className="grid gap-6 md:grid-cols-3">
                {relatedResources.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/resources/${r.type}/${r.slug}`}
                    className="block p-6 bg-gray-800 border border-gray-700 rounded-xl"
                  >
                    <h4 className="font-semibold mb-2">{r.title}</h4>
                    <p className="text-sm text-gray-400 mb-3">{r.excerpt}</p>
                    <span className="text-sm text-blue-400">Read more →</span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
