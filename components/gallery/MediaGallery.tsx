"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  FiHeart,
  FiPlay,
  FiImage,
  FiVideo,
  FiGrid,
  FiList,
} from "react-icons/fi";
import { useState, useEffect } from "react";
import Image from "next/image";
import { CloudinaryResource } from "@/types/cloudinary";

// Mock data for images and videos
const mockMedia: CloudinaryResource[] = [
  {
    public_id: "media-1",
    secure_url: "/api/placeholder/800/600",
    resource_type: "image",
    format: "jpg",
    width: 800,
    height: 600,
    bytes: 10240,
    created_at: new Date().toISOString(),
    tags: ["gallery-image"],
    context: {
      custom: {
        alt: "Beautiful landscape with mountains",
        caption: "Sunrise over the mountain range",
      },
    },
  },
  {
    public_id: "media-2",
    secure_url: "/api/placeholder/600/800",
    resource_type: "video",
    format: "mp4",
    width: 600,
    height: 800,
    bytes: 10240,
    created_at: new Date().toISOString(),
    tags: ["gallery-video"],
    context: {
      custom: {
        alt: "City timelapse at night",
        caption: "Urban lights in motion",
      },
    },
  },
  {
    public_id: "media-3",
    secure_url: "/api/placeholder/400/600",
    resource_type: "image",
    format: "jpg",
    width: 400,
    height: 600,
    bytes: 10240,
    created_at: new Date().toISOString(),
    tags: ["gallery-image"],
    context: {
      custom: {
        alt: "Portrait photography",
        caption: "Creative portrait session",
      },
    },
  },
  {
    public_id: "media-4",
    secure_url: "/api/placeholder/700/500",
    resource_type: "video",
    format: "mp4",
    width: 700,
    height: 500,
    bytes: 10240,
    created_at: new Date().toISOString(),
    tags: ["gallery-video"],
    context: {
      custom: {
        alt: "Nature documentary clip",
        caption: "Wildlife in natural habitat",
      },
    },
  },
  {
    public_id: "media-5",
    secure_url: "/api/placeholder/600/400",
    resource_type: "image",
    format: "jpg",
    width: 600,
    height: 400,
    bytes: 10240,
    created_at: new Date().toISOString(),
    tags: ["gallery-image"],
    context: {
      custom: {
        alt: "Architecture design",
        caption: "Modern building structure",
      },
    },
  },
  {
    public_id: "media-6",
    secure_url: "/api/placeholder/500/700",
    resource_type: "image",
    format: "jpg",
    width: 500,
    height: 700,
    bytes: 10240,
    created_at: new Date().toISOString(),
    tags: ["gallery-image"],
    context: {
      custom: {
        alt: "Street photography",
        caption: "Urban life moments",
      },
    },
  },
  {
    public_id: "media-7",
    secure_url: "/api/placeholder/800/400",
    resource_type: "video",
    format: "mp4",
    width: 800,
    height: 400,
    bytes: 10240,
    created_at: new Date().toISOString(),
    tags: ["gallery-video"],
    context: {
      custom: {
        alt: "Travel video highlights",
        caption: "Adventure compilation",
      },
    },
  },
  {
    public_id: "media-8",
    secure_url: "/api/placeholder/400/400",
    resource_type: "image",
    format: "jpg",
    width: 400,
    height: 400,
    bytes: 10240,
    created_at: new Date().toISOString(),
    tags: ["gallery-image"],
    context: {
      custom: {
        alt: "Abstract art piece",
        caption: "Creative expression",
      },
    },
  },
  {
    public_id: "media-9",
    secure_url: "/api/placeholder/600/600",
    resource_type: "video",
    format: "mp4",
    width: 600,
    height: 600,
    bytes: 10240,
    created_at: new Date().toISOString(),
    tags: ["gallery-video"],
    context: {
      custom: {
        alt: "Music performance",
        caption: "Live concert footage",
      },
    },
  },
  {
    public_id: "media-10",
    secure_url: "/api/placeholder/700/800",
    resource_type: "image",
    format: "jpg",
    width: 700,
    height: 800,
    bytes: 10240,
    created_at: new Date().toISOString(),
    tags: ["gallery-image"],
    context: {
      custom: {
        alt: "Food photography",
        caption: "Culinary masterpiece",
      },
    },
  },
];

interface MediaGalleryProps {
  initialMedia?: CloudinaryResource[];
}

type MediaFilter = "all" | "images" | "videos";
type ViewMode = "masonry" | "grid";

// Helper functions for localStorage (for likes)
const getStoredMediaLikes = (): Set<string> => {
  if (typeof window === "undefined") return new Set();
  try {
    const stored = localStorage.getItem("media-likes");
    return stored ? new Set(JSON.parse(stored)) : new Set();
  } catch {
    return new Set();
  }
};

const storeMediaLikes = (likes: Set<string>) => {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem("media-likes", JSON.stringify([...likes]));
  } catch (error) {
    console.error("Failed to store media likes:", error);
  }
};

export default function MediaGallery({ initialMedia }: MediaGalleryProps) {
  const [media] = useState<CloudinaryResource[]>(initialMedia || mockMedia);
  const [selectedMedia, setSelectedMedia] = useState<CloudinaryResource | null>(
    null
  );
  const [likedMedia, setLikedMedia] = useState<Set<string>>(new Set());
  const [activeFilter, setActiveFilter] = useState<MediaFilter>("all");
  const [viewMode, setViewMode] = useState<ViewMode>("masonry");
  const [searchQuery, setSearchQuery] = useState("");

  // Load likes from localStorage
  useEffect(() => {
    setLikedMedia(getStoredMediaLikes());
  }, []);

  const handleLike = (mediaId: string, event: React.MouseEvent) => {
    event.stopPropagation();
    setLikedMedia((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(mediaId)) {
        newSet.delete(mediaId);
      } else {
        newSet.add(mediaId);
      }
      storeMediaLikes(newSet);
      return newSet;
    });
  };

  const isVideo = (item: CloudinaryResource) => item.resource_type === "video";
  const isImage = (item: CloudinaryResource) => item.resource_type === "image";
  const isLiked = (mediaId: string) => likedMedia.has(mediaId);

  // Filter and search media
  const filteredMedia = media.filter((item) => {
    const matchesFilter =
      activeFilter === "all" ||
      (activeFilter === "images" && isImage(item)) ||
      (activeFilter === "videos" && isVideo(item));

    const matchesSearch =
      searchQuery === "" ||
      item.context?.custom?.caption
        ?.toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      item.context?.custom?.alt
        ?.toLowerCase()
        .includes(searchQuery.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  // Masonry layout columns
  const getMasonryColumns = () => {
    const columns: CloudinaryResource[][] = [[], [], []];
    filteredMedia.forEach((item, index) => {
      columns[index % 3].push(item);
    });
    return columns;
  };

  const masonryColumns = getMasonryColumns();

  if (media.length === 0) {
    return (
      <section className="py-16 bg-gray-900 min-h-screen">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="w-24 h-24 mx-auto mb-6 bg-gray-800 rounded-full flex items-center justify-center">
              <span className="text-2xl">🖼️</span>
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Gallery</h2>
            <p className="text-gray-400 mb-8 max-w-md mx-auto">
              No media available yet. Upload images with tag "gallery-image" and
              videos with tag "gallery-video" to Cloudinary.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-gradient-to-b from-black-100 to-black-100 relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-emerald-400 opacity-20"></div>
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-cyan-500/10 blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-emerald-500/10 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
              Media Gallery
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            A visual journey through my favorite images and videos
          </p>
          <div className="mt-4 text-cyan-400">
            <FiHeart className="inline mr-2" />
            {likedMedia.size} media liked
          </div>
        </div>

        {/* Controls */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-12 p-6 bg-gray-800/50 rounded-2xl border border-white/10 backdrop-blur-sm">
          {/* Filter buttons */}
          <div className="flex gap-4">
            {[
              { id: "all" as MediaFilter, label: "All Media", icon: FiGrid },
              { id: "images" as MediaFilter, label: "Images", icon: FiImage },
              { id: "videos" as MediaFilter, label: "Videos", icon: FiVideo },
            ].map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeFilter === filter.id
                    ? "bg-gradient-to-r from-cyan-500 to-emerald-500 text-white shadow-lg shadow-cyan-500/25"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                }`}
              >
                <filter.icon />
                {filter.label}
              </button>
            ))}
          </div>

          {/* Search and view mode */}
          <div className="flex items-center gap-4">
            {/* Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search media..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors w-64"
              />
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                🔍
              </div>
            </div>

            {/* View mode toggle */}
            <div className="flex bg-gray-700 rounded-full p-1">
              <button
                onClick={() => setViewMode("masonry")}
                className={`p-2 rounded-full transition-all ${
                  viewMode === "masonry"
                    ? "bg-cyan-500 text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                <FiGrid size={20} />
              </button>
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-full transition-all ${
                  viewMode === "grid"
                    ? "bg-cyan-500 text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                <FiList size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Results count */}
        <div className="text-center mb-8">
          <p className="text-gray-400">
            Showing {filteredMedia.length} of {media.length} items
            {activeFilter !== "all" && (
              <span>
                {" "}
                • {activeFilter === "images" ? "Images only" : "Videos only"}
              </span>
            )}
            {searchQuery && <span> • Searching for "{searchQuery}"</span>}
          </p>
        </div>

        {/* Media Display */}
        <AnimatePresence mode="wait">
          {viewMode === "masonry" ? (
            /* Masonry Layout */
            <motion.div
              key="masonry"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {masonryColumns.map((column, columnIndex) => (
                <div key={columnIndex} className="flex flex-col gap-6">
                  {column.map((item) => (
                    <motion.div
                      key={item.public_id}
                      layout
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.3 }}
                      className="group relative rounded-2xl overflow-hidden border border-white/10 bg-gray-800/50 backdrop-blur-sm cursor-pointer"
                      onClick={() => setSelectedMedia(item)}
                    >
                      {/* Media container - dynamic height based on aspect ratio */}
                      <div
                        className="relative overflow-hidden"
                        style={{
                          aspectRatio: isVideo(item)
                            ? "16/9"
                            : `${item.width}/${item.height}`,
                          maxHeight: "600px",
                        }}
                      >
                        {item.secure_url.includes("placeholder") ? (
                          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-700 to-gray-900">
                            <div className="text-center">
                              <span className="text-4xl mb-2">
                                {isVideo(item) ? "🎥" : "🖼️"}
                              </span>
                              <p className="text-gray-400 text-sm">
                                Media Preview
                              </p>
                            </div>
                          </div>
                        ) : isVideo(item) ? (
                          <div className="relative w-full h-full bg-gray-700 flex items-center justify-center">
                            <FiPlay className="text-white text-4xl" />
                            <div className="absolute top-3 right-3 bg-black/70 rounded-full p-2">
                              <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center">
                                <FiPlay className="text-white" size={10} />
                              </div>
                            </div>
                          </div>
                        ) : (
                          <Image
                            src={item.secure_url}
                            alt={item.context?.custom?.alt || "Media item"}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                          />
                        )}

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                          <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                            <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">
                              {item.context?.custom?.caption ||
                                (isVideo(item) ? "Video Content" : "Image")}
                            </h3>
                          </div>

                          <div className="flex justify-between items-center translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                            <button
                              onClick={(e) => handleLike(item.public_id, e)}
                              className={`flex items-center gap-2 text-sm px-3 py-1.5 rounded-full border transition-all ${
                                isLiked(item.public_id)
                                  ? "bg-red-500/20 border-red-500 text-red-400"
                                  : "bg-white/10 border-white/20 text-white hover:bg-white/20"
                              }`}
                            >
                              <FiHeart
                                className={
                                  isLiked(item.public_id) ? "fill-current" : ""
                                }
                              />
                              {isLiked(item.public_id) ? "Liked" : "Like"}
                            </button>
                            <div className="text-xs text-gray-300 bg-black/50 px-2 py-1 rounded">
                              {isVideo(item) ? "VIDEO" : "IMAGE"}
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ))}
            </motion.div>
          ) : (
            /* Grid Layout */
            <motion.div
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filteredMedia.map((item) => (
                <motion.div
                  key={item.public_id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="group relative rounded-2xl overflow-hidden border border-white/10 bg-gray-800/50 backdrop-blur-sm cursor-pointer aspect-square"
                  onClick={() => setSelectedMedia(item)}
                >
                  {/* Media container */}
                  {item.secure_url.includes("placeholder") ? (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-700 to-gray-900">
                      <div className="text-center">
                        <span className="text-4xl mb-2">
                          {isVideo(item) ? "🎥" : "🖼️"}
                        </span>
                        <p className="text-gray-400 text-sm">Media Preview</p>
                      </div>
                    </div>
                  ) : isVideo(item) ? (
                    <div className="relative w-full h-full bg-gray-700 flex items-center justify-center">
                      <FiPlay className="text-white text-4xl" />
                      <div className="absolute top-3 right-3 bg-black/70 rounded-full p-2">
                        <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center">
                          <FiPlay className="text-white" size={10} />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Image
                      src={item.secure_url}
                      alt={item.context?.custom?.alt || "Media item"}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  )}

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-sm font-bold text-white mb-1 line-clamp-2">
                        {item.context?.custom?.caption ||
                          (isVideo(item) ? "Video" : "Image")}
                      </h3>
                    </div>

                    <div className="flex justify-between items-center translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                      <button
                        onClick={(e) => handleLike(item.public_id, e)}
                        className={`flex items-center gap-1 text-xs px-2 py-1 rounded-full border transition-all ${
                          isLiked(item.public_id)
                            ? "bg-red-500/20 border-red-500 text-red-400"
                            : "bg-white/10 border-white/20 text-white hover:bg-white/20"
                        }`}
                      >
                        <FiHeart
                          size={12}
                          className={
                            isLiked(item.public_id) ? "fill-current" : ""
                          }
                        />
                        {isLiked(item.public_id) ? "Liked" : "Like"}
                      </button>
                      <div className="text-xs text-gray-300 bg-black/50 px-2 py-1 rounded">
                        {isVideo(item) ? "VIDEO" : "IMAGE"}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Empty state */}
        {filteredMedia.length === 0 && (
          <div className="text-center py-20">
            <div className="w-32 h-32 mx-auto mb-6 bg-gray-800 rounded-full flex items-center justify-center">
              <span className="text-4xl">🔍</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              No media found
            </h3>
            <p className="text-gray-400 max-w-md mx-auto mb-6">
              {searchQuery
                ? `No results found for "${searchQuery}". Try different keywords or clear the search.`
                : `No ${
                    activeFilter === "all" ? "media" : activeFilter
                  } found.`}
            </p>
            {(searchQuery || activeFilter !== "all") && (
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveFilter("all");
                }}
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/30 transition-all"
              >
                Show All Media
              </button>
            )}
          </div>
        )}
      </div>

      {/* Media Detail Modal */}
      {selectedMedia && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedMedia(null)}
        >
          <div
            className="bg-gray-800 rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto border border-gray-700"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-96 bg-gradient-to-br from-gray-700 to-gray-900">
              {selectedMedia.secure_url.includes("placeholder") ? (
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-6xl mb-4">
                      {isVideo(selectedMedia) ? "🎥" : "🖼️"}
                    </span>
                    <p className="text-gray-400 text-lg">Media Preview</p>
                  </div>
                </div>
              ) : isVideo(selectedMedia) ? (
                <div className="w-full h-full flex items-center justify-center bg-gray-700">
                  <div className="text-center">
                    <FiPlay className="text-white text-6xl mb-4" />
                    <p className="text-gray-400">Video Content</p>
                  </div>
                </div>
              ) : (
                <Image
                  src={selectedMedia.secure_url}
                  alt={selectedMedia.context?.custom?.alt || "Media"}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 1200px"
                />
              )}

              <button
                onClick={() => setSelectedMedia(null)}
                className="absolute top-4 right-4 w-8 h-8 bg-gray-900 bg-opacity-90 rounded-full flex items-center justify-center text-gray-300 hover:text-white transition-colors border border-gray-700"
              >
                ✕
              </button>
            </div>

            <div className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-white mb-2">
                    {selectedMedia.context?.custom?.caption ||
                      (isVideo(selectedMedia) ? "Video" : "Image")}
                  </h3>
                  <div className="flex items-center gap-4 text-gray-400">
                    <div
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        isVideo(selectedMedia)
                          ? "bg-red-500/20 text-red-400"
                          : "bg-blue-500/20 text-blue-400"
                      }`}
                    >
                      {isVideo(selectedMedia) ? "VIDEO" : "IMAGE"}
                    </div>
                    <div className="text-sm">
                      Uploaded:{" "}
                      {new Date(selectedMedia.created_at).toLocaleDateString()}
                    </div>
                  </div>
                </div>
                <button
                  onClick={(e) => handleLike(selectedMedia.public_id, e)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full border transition-all duration-300 ${
                    isLiked(selectedMedia.public_id)
                      ? "bg-red-500/20 border-red-500 text-red-400"
                      : "bg-gray-700 text-white border-gray-600 hover:bg-gray-600"
                  }`}
                >
                  <FiHeart
                    className={
                      isLiked(selectedMedia.public_id) ? "fill-current" : ""
                    }
                  />
                  <span>
                    {isLiked(selectedMedia.public_id) ? "Liked" : "Like Media"}
                  </span>
                </button>
              </div>

              {selectedMedia.context?.custom?.alt && (
                <div className="bg-gradient-to-r from-gray-700 to-gray-800 rounded-lg p-6 border border-gray-600">
                  <h4 className="font-semibold text-gray-300 mb-3">
                    Description
                  </h4>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    {selectedMedia.context.custom.alt}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
