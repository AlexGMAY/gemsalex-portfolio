import { FiArrowRight, FiBook, FiCode, FiLink, FiTool } from "react-icons/fi";
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
        {/* Background cinématique */}
        <div className="absolute inset-0">
          {/* Gradient de base */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />

          {/* Cercles lumineux animés */}
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/20 to-lime-500/20 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-3xl animate-pulse-slower" />
          <div className="absolute -bottom-40 -left-40 w-[700px] h-[700px] bg-cyan-500/20 rounded-full blur-3xl animate-pulse-slowest" />

          {/* Grille de particules */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-transparent to-black" />
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white/20 rounded-full"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animation: `twinkle ${4 + Math.random() * 6}s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 5}s`,
                }}
              />
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Breadcrumb avec effet glassmorphique */}
          <nav className="flex justify-center items-center gap-3 text-sm mb-12">
            <Link
              href="/resources"
              className="group relative px-4 py-2 bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-full text-gray-300 hover:text-white transition-all overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                <span className="group-hover:-translate-x-1 transition-transform">
                  ←
                </span>
                Resources
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-lime-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>

            <FiArrowRight
              size={14}
              className="text-gray-600 animate-pulse-subtle"
            />

            <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-lime-500 text-black font-medium rounded-full shadow-lg shadow-lime-500/20">
              {type}
            </span>
          </nav>

          {/* Badge principal avec effet 3D */}
          <div className="relative mb-10 group perspective">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-lime-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
            <div className="relative inline-flex items-center gap-5 px-8 py-4 rounded-2xl bg-gray-800/90 backdrop-blur-xl border border-gray-700/50 transform-gpu transition-all duration-300 group-hover:scale-105 group-hover:rotate-x-2 group-hover:shadow-2xl">
              <div
                className={`p-4 rounded-xl bg-gradient-to-r ${typeConfig.bgGradient} shadow-xl`}
              >
                <TypeIcon className="text-3xl text-white transform-gpu group-hover:scale-110 group-hover:rotate-3 transition-all duration-300" />
              </div>
              <div className="text-left">
                <span className="text-sm text-gray-400 font-mono mb-1 block">
                  CATEGORY
                </span>
                <span className="text-2xl font-bold text-white capitalize tracking-wide">
                  {type}
                </span>
              </div>

              {/* Éléments décoratifs */}
              <div className="absolute -top-2 -right-2 w-3 h-3 bg-lime-500 rounded-full animate-ping" />
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-blue-500 rounded-full animate-ping animation-delay-1000" />
            </div>
          </div>

          {/* Titre principal avec effet de texte 3D */}
          <h1 className="text-6xl md:text-7xl font-bold mb-6 relative">
            <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent relative z-10 drop-shadow-2xl">
              {typeConfig.title}
            </span>

            {/* Ombre portée du texte */}
            <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-lime-500 bg-clip-text text-transparent blur-2xl opacity-30">
              {typeConfig.title}
            </span>
          </h1>

          {/* Description avec effet de glass card */}
          <div className="relative max-w-3xl mx-auto mb-10 group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-lime-500/10 rounded-3xl blur-2xl group-hover:blur-3xl transition-all" />
            <p className="relative text-xl md:text-2xl text-gray-300 leading-relaxed px-8 py-6 bg-gray-800/30 backdrop-blur-sm rounded-3xl border border-gray-700/50">
              {typeConfig.description}
            </p>
          </div>

          {/* Compteur de ressources avec animation */}
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 mb-16 group hover:border-lime-500/30 transition-all">
            <div className="relative">
              <div className="w-3 h-3 bg-lime-500 rounded-full group-hover:scale-125 transition-transform" />
              <div className="absolute inset-0 bg-lime-500 rounded-full animate-ping opacity-50" />
            </div>
            <span className="text-gray-300">
              <span className="text-2xl font-bold text-white group-hover:text-lime-400 transition-colors">
                {resources.length}
              </span>{" "}
              ressources disponibles
            </span>
          </div>

          {/* Navigation des types - Design moderne avec cartes flottantes */}
          <div className="relative mt-20">
            {/* Ligne décorative */}
            <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />

            <div className="relative flex flex-wrap justify-center gap-4">
              {/* Bouton "All" avec effet spécial */}
              <Link href="/resources" className="group relative px-8 py-4">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-800 rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity" />
                <div
                  className={`relative px-6 py-3 rounded-full border-2 transition-all duration-300 ${
                    !type
                      ? "border-lime-500 bg-gradient-to-r from-lime-500/20 to-blue-500/20 shadow-lg shadow-lime-500/20"
                      : "border-gray-700 bg-gray-800/50 hover:border-gray-600"
                  }`}
                >
                  <span
                    className={`text-lg font-medium ${!type ? "text-white" : "text-gray-300"}`}
                  >
                    Tous
                  </span>
                </div>
              </Link>

              {types.map((t) => {
                const tConfig = getTypeConfig(t);
                const TIcon = tConfig.icon;
                const isActive = t === type;

                return (
                  <Link
                    key={t}
                    href={`/resources/${t}`}
                    className="group relative perspective"
                  >
                    {/* Effet de lueur */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${tConfig.gradient} rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity ${isActive ? "opacity-75" : ""}`}
                    />

                    {/* Carte principale */}
                    <div
                      className={`relative px-8 py-4 rounded-full transition-all duration-300 transform-gpu group-hover:scale-105 group-hover:shadow-2xl ${
                        isActive
                          ? `bg-gradient-to-r ${tConfig.gradient} text-black shadow-xl`
                          : "bg-gray-800/80 backdrop-blur-sm border border-gray-700 text-gray-300 hover:border-gray-600"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <TIcon
                          className={`text-xl transition-transform group-hover:rotate-12 ${isActive ? "text-black" : ""}`}
                        />
                        <span className="text-lg font-medium capitalize">
                          {t}
                        </span>
                      </div>

                      {/* Indicateur actif */}
                      {isActive && (
                        <>
                          <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full animate-ping" />
                          <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-white rounded-full animate-ping animation-delay-500" />
                        </>
                      )}
                    </div>

                    {/* Badge de compteur (optionnel) */}
                    <div className="absolute -top-2 -right-2 min-w-[24px] h-6 px-1.5 bg-lime-500 rounded-full text-xs font-bold text-black flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                      {resources.filter((r) => r.type === t).length}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Éléments décoratifs flottants */}
          <div className="absolute -top-20 -left-20 w-40 h-40 border border-lime-500/10 rounded-full animate-float" />
          <div className="absolute -bottom-20 -right-20 w-60 h-60 border border-blue-500/10 rounded-full animate-float animation-delay-2000" />
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

