import { FiArrowRight, FiBook, FiCode, FiGrid, FiLink, FiTool } from "react-icons/fi";
import Link from "next/link";
import { getResourcesByType, getAllResources, ResourceType } from "@/lib/resources";

interface Props {
  params: { type: string };
}

export default function ResourceTypePage({ params }: Props) {
  const type = params.type as ResourceType;

  const resources = getResourcesByType(type);
  const allResources = getAllResources();

  const types = ["blog", "tutorials", "links"];

  if (!types.includes(type)) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Resource type not found
      </div>
    );
  }

  const getTypeConfig = (resourceType: string) => {
    const config = {
      blog: {
        icon: FiBook,
        title: "Blog Posts & Articles",
        description:
          "In-depth articles, insights, and thoughts on web development.",
        gradient: "from-blue-400 to-lime-500",
        bgGradient: "from-blue-400/10 to-lime-500/10",
      },
      tutorials: {
        icon: FiCode,
        title: "Tutorials & Guides",
        description: "Step-by-step tutorials and hands-on learning materials.",
        gradient: "from-blue-400 to-cyan-500",
        bgGradient: "from-blue-400/10 to-cyan-500/10",
      },
      links: {
        icon: FiLink,
        title: "Resources & Tools",
        description: "Curated collection of tools, libraries, and resources.",
        gradient: "from-amber-400 to-orange-500",
        bgGradient: "from-amber-400/10 to-orange-500/10",
      },
    };

    return (
      config[resourceType as keyof typeof config] || {
        icon: FiTool,
        title: `${resourceType} Resources`,
        description: `Explore ${resourceType} resources.`,
        gradient: "from-gray-400 to-gray-500",
        bgGradient: "from-gray-400/10 to-gray-500/10",
      }
    );
  };

  const typeConfig = getTypeConfig(type);
  const TypeIcon = typeConfig.icon;

  return (
    <main className="min-h-screen bg-black-100">
      {/* HERO */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background sophistiqué */}
        <div className="absolute inset-0">
          {/* Gradient de base */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />

          {/* Overlay texture */}
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay" />

          {/* Cercles lumineux */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-gradient-to-r from-blue-500/10 to-lime-500/10 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl animate-pulse-slower" />
          <div className="absolute -bottom-40 -left-40 w-[700px] h-[700px] bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slowest" />

          {/* Lignes de grille */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />
        </div>

        <div className="container mx-auto pt-8 px-4 relative z-10">
          {/* Header centré */}
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge principal */}
            <div className="inline-flex items-center gap-4 px-6 py-3 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 mb-8 hover:border-lime-500/30 transition-all group">
              <div
                className={`p-3 rounded-xl bg-gradient-to-r ${typeConfig.bgGradient} shadow-lg group-hover:scale-110 transition-transform`}
              >
                <TypeIcon className="text-2xl text-white" />
              </div>
              <div className="text-left">
                <span className="text-xs text-gray-400 font-mono block">
                  CATEGORY
                </span>
                <span className="text-xl font-bold text-white capitalize">
                  {type}
                </span>
              </div>
            </div>

            {/* Titre avec effet de glow */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 relative">
              <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                {typeConfig.title}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-lime-500/20 blur-3xl -z-10" />
            </h1>

            {/* Description */}
            <p className="text-xl md:text-2xl text-gray-400 leading-relaxed mb-10 max-w-3xl mx-auto">
              {typeConfig.description}
            </p>

            {/* Statistiques */}
            <div className="flex items-center justify-center gap-8 mb-16">
              <div className="text-center group">
                <div className="text-4xl font-bold text-white group-hover:text-lime-400 transition-colors">
                  {resources.length}
                </div>
                <div className="text-sm text-gray-500 uppercase tracking-wider mt-2">
                  Ressources
                </div>
              </div>
              <div className="w-px h-12 bg-gradient-to-b from-transparent via-gray-700 to-transparent" />
              <div className="text-center group">
                <div className="text-4xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  {types.length}
                </div>
                <div className="text-sm text-gray-500 uppercase tracking-wider mt-2">
                  Catégories
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-wrap justify-center gap-3 p-2 bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700/50">
              {/* All button */}
              <Link
                href="/resources"
                className={`group relative px-6 py-3 rounded-xl transition-all duration-300 ${
                  !type
                    ? "bg-gradient-to-r from-lime-500 to-blue-500 text-black shadow-lg shadow-lime-500/20"
                    : "text-gray-400 hover:text-white hover:bg-gray-700/50"
                }`}
              >
                <span className="relative z-10 font-medium flex items-center gap-2">
                  <FiGrid size={18} />
                  Tous
                </span>
              </Link>

              {/* Type buttons */}
              {types.map((t) => {
                const tConfig = getTypeConfig(t);
                const TIcon = tConfig.icon;
                const isActive = t === type;

                return (
                  <Link
                    key={t}
                    href={`/resources/${t}`}
                    className={`group relative px-6 py-3 rounded-xl transition-all duration-300 ${
                      isActive
                        ? `bg-gradient-to-r ${tConfig.gradient} text-black shadow-lg`
                        : "text-gray-400 hover:text-white hover:bg-gray-700/50"
                    }`}
                  >
                    <span className="relative z-10 font-medium flex items-center gap-2">
                      <TIcon size={18} />
                      <span className="capitalize">{t}</span>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-black/20 text-black/70">
                        {resources.filter((r) => r.type === t).length}
                      </span>
                    </span>

                    {/* Active indicator */}
                    {isActive && (
                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full" />
                    )}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Quick filters row (optional) */}
          <div className="max-w-2xl mx-auto mt-8">
            <div className="flex flex-wrap justify-center gap-2">
              <span className="text-xs text-gray-600 px-3 py-1">Popular:</span>
              {["React", "Next.js", "TypeScript", "Beginner"].map((tag) => (
                <Link
                  key={tag}
                  href={`/resources/tag/${tag.toLowerCase()}`}
                  className="text-xs px-3 py-1 rounded-full bg-gray-800/30 border border-gray-700/50 text-gray-400 hover:text-white hover:border-lime-500/30 transition-all"
                >
                  #{tag}
                </Link>
              ))}
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-20 left-10 w-32 h-32 border border-lime-500/10 rounded-full animate-float" />
          <div className="absolute bottom-20 right-10 w-40 h-40 border border-blue-500/10 rounded-full animate-float animation-delay-2000" />
        </div>
      </section>

      {/* GRID */}
      <section className="py-20">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {resources.map((resource) => (
              <article
                key={resource.slug}
                className="group bg-gray-800 rounded-2xl border border-gray-700 hover:border-gray-500 transition"
              >
                <Link href={`/resources/${resource.type}/${resource.slug}`}>
                  <div className="p-6 flex flex-col h-full">
                    <div className="flex justify-between mb-4 text-sm text-gray-500">
                      <span>
                        {new Date(resource.date).toLocaleDateString()}
                      </span>
                      <span>{resource.readTime}</span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3">
                      {resource.title}
                    </h3>

                    <p className="text-gray-400 mb-4">{resource.excerpt}</p>

                    <span className="text-blue-400 mt-auto flex items-center gap-1">
                      Read more <FiArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          {resources.length === 0 && (
            <div className="max-w-md mx-auto">
              <div
                className={`p-6 rounded-2xl bg-gradient-to-r ${typeConfig.bgGradient} mb-6 inline-block`}
              >
                <TypeIcon className="text-4xl text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                No {type} resources yet
              </h3>
              <p className="text-gray-400 mb-6">
                We&apos;re working on creating amazing {type} content. Check
                back soon for new resources!
              </p>
              <Link
                href="/resources"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white hover:bg-gray-700 transition-colors"
              >
                Explore Other Resources
              </Link>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

