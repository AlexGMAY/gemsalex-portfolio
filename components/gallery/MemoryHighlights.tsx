"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import {
  FiHeart,
  FiZoomIn,
  FiPlay,
  FiCalendar,
  FiMapPin,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { MemoryResource } from "@/types/cloudinary";

// Mock data for memories
const mockMemories: MemoryResource[] = [
  {
    public_id: "memory-1",
    secure_url: "/api/placeholder/400/600",
    resource_type: "image",
    format: "jpg",
    width: 400,
    height: 600,
    bytes: 10240,
    created_at: new Date().toISOString(),
    tags: ["memories"],
    context: {
      custom: {
        memoryTitle: "Ocean Sunset",
        memoryDate: "2023-07-15",
        location: "Bali, Indonesia",
        description: "The most breathtaking sunset I have ever witnessed",
        featured: true,
        alt: "Ocean sunset in Bali",
      },
    },
  },
  {
    public_id: "memory-2",
    secure_url: "/api/placeholder/600/400",
    resource_type: "video",
    format: "mp4",
    width: 600,
    height: 400,
    bytes: 10240,
    created_at: new Date().toISOString(),
    tags: ["memories"],
    context: {
      custom: {
        memoryTitle: "Mountain Summit",
        memoryDate: "2023-08-22",
        location: "Swiss Alps",
        description: "Reached the peak after 6 hours of hiking",
        featured: true,
        alt: "Mountain summit view",
      },
    },
  },
  {
    public_id: "memory-3",
    secure_url: "/api/placeholder/500/500",
    resource_type: "image",
    format: "jpg",
    width: 500,
    height: 500,
    bytes: 10240,
    created_at: new Date().toISOString(),
    tags: ["memories"],
    context: {
      custom: {
        memoryTitle: "City Lights",
        memoryDate: "2023-09-05",
        location: "Tokyo, Japan",
        description: "Night view from the observation deck",
        featured: false,
        alt: "Tokyo city lights",
      },
    },
  },
  {
    public_id: "memory-4",
    secure_url: "/api/placeholder/600/600",
    resource_type: "image",
    format: "jpg",
    width: 600,
    height: 600,
    bytes: 10240,
    created_at: new Date().toISOString(),
    tags: ["memories"],
    context: {
      custom: {
        memoryTitle: "Family Celebration",
        memoryDate: "2023-10-12",
        location: "Home",
        description: "Annual family dinner with everyone together",
        featured: true,
        alt: "Family dinner celebration",
      },
    },
  },
  {
    public_id: "memory-5",
    secure_url: "/api/placeholder/800/400",
    resource_type: "video",
    format: "mp4",
    width: 800,
    height: 400,
    bytes: 10240,
    created_at: new Date().toISOString(),
    tags: ["memories"],
    context: {
      custom: {
        memoryTitle: "Festival Experience",
        memoryDate: "2023-11-03",
        location: "Berlin, Germany",
        description: "Incredible music and atmosphere",
        featured: false,
        alt: "Music festival experience",
      },
    },
  },
  {
    public_id: "memory-6",
    secure_url: "/api/placeholder/400/700",
    resource_type: "image",
    format: "jpg",
    width: 400,
    height: 700,
    bytes: 10240,
    created_at: new Date().toISOString(),
    tags: ["memories"],
    context: {
      custom: {
        memoryTitle: "Morning Serenity",
        memoryDate: "2023-12-18",
        location: "Kyoto, Japan",
        description: "Peaceful morning at the bamboo forest",
        featured: true,
        alt: "Bamboo forest morning",
      },
    },
  },
  {
    public_id: "memory-7",
    secure_url: "/api/placeholder/600/500",
    resource_type: "image",
    format: "jpg",
    width: 600,
    height: 500,
    bytes: 10240,
    created_at: new Date().toISOString(),
    tags: ["memories"],
    context: {
      custom: {
        memoryTitle: "Beach Day",
        memoryDate: "2024-01-15",
        location: "Maldives",
        description: "Crystal clear waters and white sand",
        featured: false,
        alt: "Maldives beach",
      },
    },
  },
  {
    public_id: "memory-8",
    secure_url: "/api/placeholder/500/600",
    resource_type: "video",
    format: "mp4",
    width: 500,
    height: 600,
    bytes: 10240,
    created_at: new Date().toISOString(),
    tags: ["memories"],
    context: {
      custom: {
        memoryTitle: "Northern Lights",
        memoryDate: "2024-02-20",
        location: "Norway",
        description: "Dancing colors in the Arctic sky",
        featured: true,
        alt: "Northern lights spectacle",
      },
    },
  },
];

interface MemoriesGalleryProps {
  initialMemories?: MemoryResource[];
}

// Helper functions for localStorage
const getStoredLikes = (): Set<string> => {
  if (typeof window === "undefined") return new Set();
  try {
    const stored = localStorage.getItem("memory-likes");
    return stored ? new Set(JSON.parse(stored)) : new Set();
  } catch {
    return new Set();
  }
};

const storeLikes = (likes: Set<string>) => {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem("memory-likes", JSON.stringify([...likes]));
  } catch (error) {
    console.error("Failed to store likes:", error);
  }
};

export default function MemoriesGallery({
  initialMemories,
}: MemoriesGalleryProps) {
  const [memories] = useState<MemoryResource[]>(
    initialMemories || mockMemories
  );
  const [selectedMemory, setSelectedMemory] = useState<MemoryResource | null>(
    null
  );
  const [likedMemories, setLikedMemories] = useState<Set<string>>(new Set());
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollX = useMotionValue(0);
  const sliderWidth = useTransform(scrollX, [0, 1], [0, 100]);

  // Load likes from localStorage on component mount
  useEffect(() => {
    setLikedMemories(getStoredLikes());
  }, []);

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        const nextIndex = (currentIndex + 1) % memories.length;
        setCurrentIndex(nextIndex);
        scrollToIndex(nextIndex);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex, memories.length]);

  const scrollToIndex = (index: number) => {
    if (sliderRef.current) {
      const scrollAmount = index * 320; // Card width + gap
      sliderRef.current.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleLike = (memoryId: string, event: React.MouseEvent) => {
    event.stopPropagation();
    setLikedMemories((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(memoryId)) {
        newSet.delete(memoryId);
      } else {
        newSet.add(memoryId);
      }
      // Store updated likes in localStorage
      storeLikes(newSet);
      return newSet;
    });
  };

  const isVideo = (memory: MemoryResource) => memory.resource_type === "video";
  const isLiked = (memoryId: string) => likedMemories.has(memoryId);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const getMemoryYear = (memory: MemoryResource) => {
    const date = memory.context?.custom?.memoryDate || memory.created_at;
    return new Date(date).getFullYear();
  };

  // Group memories by year
  const memoriesByYear = memories.reduce((acc, memory) => {
    const year = getMemoryYear(memory);
    if (!acc[year]) acc[year] = [];
    acc[year].push(memory);
    return acc;
  }, {} as Record<number, MemoryResource[]>);

  const years = Object.keys(memoriesByYear)
    .map(Number)
    .sort((a, b) => b - a);

  if (memories.length === 0) {
    return (
      <section className="py-16 bg-gray-900 min-h-screen">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="w-24 h-24 mx-auto mb-6 bg-gray-800 rounded-full flex items-center justify-center">
              <span className="text-2xl">📸</span>
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">My Memories</h2>
            <p className="text-gray-400 mb-8 max-w-md mx-auto">
              No memories available yet. Upload images and videos to Cloudinary
              with the "memories" tag to showcase your moments here.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-gradient-to-b from-black-100 to-black-100 relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-lime-400 opacity-20"></div>
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-blue-500/10 blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-lime-500/10 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-lime-400">
              Memory Timeline
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Scroll through my journey - each moment tells a story
          </p>
          {/* Show liked count */}
          <div className="mt-4 text-blue-400">
            <FiHeart className="inline mr-2" />
            {likedMemories.size} memories liked
          </div>
        </div>

        {/* Year Navigation */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {years.map((year) => (
            <button
              key={year}
              onClick={() => {
                const firstMemoryOfYear = memories.findIndex(
                  (m) => getMemoryYear(m) === year
                );
                if (firstMemoryOfYear !== -1) {
                  setCurrentIndex(firstMemoryOfYear);
                  scrollToIndex(firstMemoryOfYear);
                }
              }}
              className="px-6 py-3 rounded-full bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-600 hover:border-blue-400 transition-all duration-300 font-semibold"
            >
              {year}
            </button>
          ))}
        </div>

        {/* Horizontal Timeline Slider */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={() => {
              const newIndex =
                currentIndex > 0 ? currentIndex - 1 : memories.length - 1;
              setCurrentIndex(newIndex);
              scrollToIndex(newIndex);
            }}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-gray-800/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white border border-gray-600 hover:bg-blue-500 hover:border-blue-400 transition-all duration-300"
          >
            <FiChevronLeft size={24} />
          </button>

          <button
            onClick={() => {
              const newIndex = (currentIndex + 1) % memories.length;
              setCurrentIndex(newIndex);
              scrollToIndex(newIndex);
            }}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-gray-800/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white border border-gray-600 hover:bg-blue-500 hover:border-blue-400 transition-all duration-300"
          >
            <FiChevronRight size={24} />
          </button>

          {/* Timeline Slider */}
          <div
            ref={sliderRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory py-8 px-4"
            style={{ scrollBehavior: "smooth" }}
            onScroll={() => {
              if (sliderRef.current) {
                const scrollPos = sliderRef.current.scrollLeft;
                const newIndex = Math.round(scrollPos / 320);
                if (newIndex !== currentIndex) {
                  setCurrentIndex(newIndex);
                }
              }
            }}
          >
            {memories.map((memory, index) => (
              <motion.div
                key={memory.public_id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex-shrink-0 w-80 snap-center"
              >
                {/* Memory Card */}
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="relative rounded-2xl overflow-hidden border border-white/10 bg-gray-800/50 backdrop-blur-sm group cursor-pointer h-96"
                  onClick={() => setSelectedMemory(memory)}
                >
                  {/* Media container */}
                  <div className="relative h-48 overflow-hidden">
                    {memory.secure_url.includes("placeholder") ? (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-700 to-gray-900">
                        <div className="text-center">
                          <span className="text-4xl mb-2">
                            {isVideo(memory) ? "🎥" : "📷"}
                          </span>
                          <p className="text-gray-400 text-sm">Memory Photo</p>
                        </div>
                      </div>
                    ) : isVideo(memory) ? (
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
                        src={memory.secure_url}
                        alt={memory.context?.custom?.alt || "Memory"}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        sizes="320px"
                      />
                    )}

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                      <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-lg font-bold text-white mb-1 line-clamp-1">
                          {memory.context?.custom?.memoryTitle ||
                            "Special Memory"}
                        </h3>
                        <div className="flex items-center gap-3 text-xs text-gray-300">
                          {memory.context?.custom?.memoryDate && (
                            <div className="flex items-center gap-1">
                              <FiCalendar size={12} />
                              <span>
                                {formatDate(memory.context.custom.memoryDate)}
                              </span>
                            </div>
                          )}
                          {memory.context?.custom?.location && (
                            <div className="flex items-center gap-1">
                              <FiMapPin size={12} />
                              <span className="line-clamp-1">
                                {memory.context.custom.location}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Featured badge */}
                    {memory.context?.custom?.featured && (
                      <div className="absolute top-3 left-3 bg-gradient-to-r from-blue-500 to-lime-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                        Featured
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex-1">
                        <h3 className="font-bold text-white text-lg mb-1 line-clamp-1">
                          {memory.context?.custom?.memoryTitle ||
                            "Special Memory"}
                        </h3>
                        <p className="text-gray-400 text-sm line-clamp-2">
                          {memory.context?.custom?.description ||
                            "A beautiful memory worth remembering"}
                        </p>
                      </div>
                    </div>

                    {/* Like button and date */}
                    <div className="flex justify-between items-center">
                      <button
                        onClick={(e) => handleLike(memory.public_id, e)}
                        className={`flex items-center gap-2 text-sm px-3 py-1.5 rounded-full border transition-all duration-300 ${
                          isLiked(memory.public_id)
                            ? "bg-red-500/20 border-red-500 text-red-400"
                            : "bg-white/10 border-white/20 text-gray-300 hover:bg-white/20"
                        }`}
                      >
                        <FiHeart
                          className={
                            isLiked(memory.public_id) ? "fill-current" : ""
                          }
                        />
                        <span>
                          {isLiked(memory.public_id) ? "Liked" : "Like"}
                        </span>
                      </button>

                      {memory.context?.custom?.memoryDate && (
                        <div className="text-xs text-gray-500">
                          {formatDate(memory.context.custom.memoryDate)}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Progress indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {memories.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  scrollToIndex(index);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-gradient-to-r from-blue-400 to-lime-400 scale-125"
                    : "bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Current memory indicator */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400">
            Showing memory {currentIndex + 1} of {memories.length}
            {memories[currentIndex]?.context?.custom?.memoryDate && (
              <span>
                {" "}
                • {formatDate(memories[currentIndex].context.custom.memoryDate)}
              </span>
            )}
          </p>
        </motion.div>
      </div>

      {/* Memory Detail Modal */}
      {selectedMemory && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedMemory(null)}
        >
          <div
            className="bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-700"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-96 bg-gradient-to-br from-gray-700 to-gray-900">
              {selectedMemory.secure_url.includes("placeholder") ? (
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-6xl mb-4">
                      {isVideo(selectedMemory) ? "🎥" : "📷"}
                    </span>
                    <p className="text-gray-400 text-lg">Memory Preview</p>
                  </div>
                </div>
              ) : isVideo(selectedMemory) ? (
                <div className="w-full h-full flex items-center justify-center bg-gray-700">
                  <div className="text-center">
                    <FiPlay className="text-white text-6xl mb-4" />
                    <p className="text-gray-400">Video Memory</p>
                  </div>
                </div>
              ) : (
                <Image
                  src={selectedMemory.secure_url}
                  alt={selectedMemory.context?.custom?.alt || "Memory"}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 800px"
                />
              )}

              <button
                onClick={() => setSelectedMemory(null)}
                className="absolute top-4 right-4 w-8 h-8 bg-gray-900 bg-opacity-90 rounded-full flex items-center justify-center text-gray-300 hover:text-white transition-colors border border-gray-700"
              >
                ✕
              </button>
            </div>

            <div className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">
                    {selectedMemory.context?.custom?.memoryTitle ||
                      "Special Memory"}
                  </h3>
                  <div className="flex items-center gap-6 text-gray-400">
                    {selectedMemory.context?.custom?.memoryDate && (
                      <div className="flex items-center gap-2">
                        <FiCalendar />
                        <span>
                          {formatDate(selectedMemory.context.custom.memoryDate)}
                        </span>
                      </div>
                    )}
                    {selectedMemory.context?.custom?.location && (
                      <div className="flex items-center gap-2">
                        <FiMapPin />
                        <span>{selectedMemory.context.custom.location}</span>
                      </div>
                    )}
                  </div>
                </div>
                <button
                  onClick={(e) => handleLike(selectedMemory.public_id, e)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full border transition-all duration-300 ${
                    isLiked(selectedMemory.public_id)
                      ? "bg-red-500/20 border-red-500 text-red-400"
                      : "bg-gray-700 text-white border-gray-600 hover:bg-gray-600"
                  }`}
                >
                  <FiHeart
                    className={
                      isLiked(selectedMemory.public_id) ? "fill-current" : ""
                    }
                  />
                  <span>
                    {isLiked(selectedMemory.public_id)
                      ? "Liked"
                      : "Like Memory"}
                  </span>
                </button>
              </div>

              {selectedMemory.context?.custom?.description && (
                <div className="bg-gradient-to-r from-gray-700 to-gray-800 rounded-lg p-6 border border-gray-600 mb-6">
                  <h4 className="font-semibold text-gray-300 mb-3">
                    About This Memory
                  </h4>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    {selectedMemory.context.custom.description}
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
