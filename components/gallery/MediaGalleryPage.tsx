"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FiImage,
  FiVideo,
  FiGrid,
  FiList,
  FiDownload,
  FiPlay,
} from "react-icons/fi";
import { useState } from "react";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

type MediaItem = {
  id: string;
  type: "image" | "video";
  title: string;
  description?: string;
  url: string;
  thumbnail?: string;
  tags: string[];
  date: string;
};

const MediaGalleryPage = () => {
  const [activeFilter, setActiveFilter] = useState<"all" | "image" | "video">(
    "all"
  );
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null);

  // Personal media data - replace with your actual content
  const mediaItems: MediaItem[] = [
    {
      id: "1",
      type: "image",
      title: "My Vacation in Hawaii",
      description: "Beautiful sunset at Waikiki Beach",
      url: "/gallery/hawaii-sunset.jpg",
      tags: ["vacation", "beach", "sunset"],
      date: "2023-05-15",
    },
    {
      id: "2",
      type: "video",
      title: "Birthday Celebration",
      description: "My 30th birthday party with friends",
      url: "YOUR_YOUTUBE_ID_1", // Replace with your YouTube video ID
      thumbnail: "/gallery/birthday-thumb.jpg",
      tags: ["birthday", "celebration", "friends"],
      date: "2023-04-22",
    },
    {
      id: "3",
      type: "image",
      title: "Hiking Adventure",
      description: "Summit view from Mount Rainier",
      url: "/gallery/hiking-view.jpg",
      tags: ["hiking", "nature", "adventure"],
      date: "2023-03-30",
    },
    {
      id: "4",
      type: "video",
      title: "Cooking My Favorite Recipe",
      description: "Making homemade pasta from scratch",
      url: "YOUR_YOUTUBE_ID_2", // Replace with your YouTube video ID
      thumbnail: "/gallery/cooking-thumb.jpg",
      tags: ["cooking", "food", "recipe"],
      date: "2023-02-17",
    },
    {
      id: "5",
      type: "image",
      title: "Family Reunion",
      description: "Annual family gathering at the lake house",
      url: "/gallery/family-reunion.jpg",
      tags: ["family", "reunion", "summer"],
      date: "2022-08-05",
    },
    {
      id: "6",
      type: "video",
      title: "My Dog Playing",
      description: "My golden retriever at the dog park",
      url: "YOUR_YOUTUBE_ID_3", // Replace with your YouTube video ID
      thumbnail: "/gallery/dog-thumb.jpg",
      tags: ["dog", "pet", "fun"],
      date: "2022-07-12",
    },
  ];

  // Filter media items
  const filteredItems =
    activeFilter === "all"
      ? mediaItems
      : mediaItems.filter((item) => item.type === activeFilter);

  // Sort by date (newest first)
  const sortedItems = [...filteredItems].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <section className="py-20 bg-gradient-to-b from-black-100 to-black-100 min-h-screen">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-cyan-400/20 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 rounded-full bg-violet-500/20 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              My Personal Gallery
            </span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A collection of my favorite photos and videos
          </p>
        </motion.div>

        {/* Controls */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8"
        >
          <div className="flex gap-2">
            <button
              onClick={() => setActiveFilter("all")}
              className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
                activeFilter === "all"
                  ? "bg-cyan-400/10 border border-cyan-400/30 text-cyan-400"
                  : "bg-gray-800/50 border border-gray-700 text-gray-300"
              }`}
            >
              All Media
            </button>
            <button
              onClick={() => setActiveFilter("image")}
              className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
                activeFilter === "image"
                  ? "bg-cyan-400/10 border border-cyan-400/30 text-cyan-400"
                  : "bg-gray-800/50 border border-gray-700 text-gray-300"
              }`}
            >
              <FiImage /> Photos
            </button>
            <button
              onClick={() => setActiveFilter("video")}
              className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
                activeFilter === "video"
                  ? "bg-cyan-400/10 border border-cyan-400/30 text-cyan-400"
                  : "bg-gray-800/50 border border-gray-700 text-gray-300"
              }`}
            >
              <FiVideo /> Videos
            </button>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded-lg ${
                viewMode === "grid"
                  ? "bg-cyan-400/10 text-cyan-400"
                  : "bg-gray-800/50 text-gray-300"
              }`}
            >
              <FiGrid />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 rounded-lg ${
                viewMode === "list"
                  ? "bg-cyan-400/10 text-cyan-400"
                  : "bg-gray-800/50 text-gray-300"
              }`}
            >
              <FiList />
            </button>
          </div>
        </motion.div>

        {/* Grid View */}
        {viewMode === "grid" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {sortedItems.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ y: -5 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-cyan-400/30 overflow-hidden transition-all"
              >
                {item.type === "image" ? (
                  <div className="relative group">
                    {/* <img
                      src={item.url}
                      alt={item.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                    /> */}
                    <Image
                      src={item.url}
                      alt={item.title}
                      width={640}
                      height={480}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                      <button
                        onClick={() => setSelectedItem(item)}
                        className="px-3 py-1.5 rounded-lg bg-cyan-400/10 border border-cyan-400/30 text-cyan-400 text-sm hover:bg-cyan-400/20 transition-colors flex items-center gap-1"
                      >
                        <FiImage size={14} /> View
                      </button>
                      <a
                        href={item.url}
                        download
                        className="ml-2 px-3 py-1.5 rounded-lg bg-gray-700/80 text-gray-300 text-sm hover:bg-gray-600 transition-colors flex items-center gap-1"
                      >
                        <FiDownload size={14} /> Download
                      </a>
                    </div>
                  </div>
                ) : (
                  <div className="relative group">
                    <LiteYouTubeEmbed
                      id={item.url}
                      title={item.title}
                      poster="hqdefault"
                      wrapperClass="yt-lite rounded-t-xl overflow-hidden"
                      playerClass="absolute inset-0 w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                      <button
                        onClick={() => setSelectedItem(item)}
                        className="px-3 py-1.5 rounded-lg bg-cyan-400/10 border border-cyan-400/30 text-cyan-400 text-sm hover:bg-cyan-400/20 transition-colors flex items-center gap-1"
                      >
                        <FiPlay size={14} /> Watch
                      </button>
                    </div>
                  </div>
                )}
                <div className="p-4">
                  <h3 className="font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-gray-400 text-sm mb-3">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-700/50 text-xs rounded-full text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* List View */}
        {viewMode === "list" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-4"
          >
            {sortedItems.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ x: 5 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-cyan-400/30 overflow-hidden transition-all"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 relative">
                    {item.type === "image" ? (
                      // <img
                      //   src={item.url}
                      //   alt={item.title}
                      //   className="w-full h-48 md:h-full object-cover"
                      // />
                      <Image
                        src={item.url}
                        alt={item.title}
                        width={480}
                        height={320}
                        className="w-full h-48 md:h-full object-cover"
                      />
                    ) : (
                      <LiteYouTubeEmbed
                        id={item.url}
                        title={item.title}
                        poster="hqdefault"
                        wrapperClass="yt-lite h-full"
                        playerClass="absolute inset-0 w-full h-full"
                      />
                    )}
                  </div>
                  <div className="md:w-2/3 p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-white">{item.title}</h3>
                      <span className="text-xs text-gray-500">
                        {new Date(item.date).toLocaleDateString()}
                      </span>
                    </div>
                    <p className="text-gray-400 mb-4">{item.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-gray-700/50 text-xs rounded-full text-gray-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setSelectedItem(item)}
                        className="px-4 py-2 rounded-lg bg-cyan-400/10 border border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/20 transition-colors flex items-center gap-1 text-sm"
                      >
                        {item.type === "image" ? (
                          <>
                            <FiImage size={14} /> View
                          </>
                        ) : (
                          <>
                            <FiPlay size={14} /> Watch
                          </>
                        )}
                      </button>
                      {item.type === "image" && (
                        <a
                          href={item.url}
                          download
                          className="px-4 py-2 rounded-lg bg-gray-700/50 border border-gray-600 text-gray-300 hover:bg-gray-600 transition-colors flex items-center gap-1 text-sm"
                        >
                          <FiDownload size={14} /> Download
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Empty State */}
        {sortedItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <h3 className="text-xl text-gray-400 mb-4">No media found</h3>
            <p className="text-gray-600 max-w-md mx-auto">
              Try adjusting your filters or check back later for new content
            </p>
          </motion.div>
        )}

        {/* Lightbox Modal */}
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedItem(null)}
          >
            <div className="relative max-w-4xl w-full max-h-[90vh]">
              <button
                className="absolute -top-10 right-0 text-gray-400 hover:text-white transition-colors"
                onClick={() => setSelectedItem(null)}
              >
                Close
              </button>

              <div className="bg-gray-900 rounded-xl overflow-hidden">
                {selectedItem.type === "image" ? (
                  // <img
                  //   src={selectedItem.url}
                  //   alt={selectedItem.title}
                  //   className="w-full max-h-[70vh] object-contain"
                  // />
                  <Image
                    src={selectedItem.url}
                    alt={selectedItem.title}
                    width={960}
                    height={640}
                    className="w-full max-h-[70vh] object-contain"
                  />
                ) : (
                  <div className="aspect-video w-full">
                    <LiteYouTubeEmbed
                      id={selectedItem.url}
                      title={selectedItem.title}
                      activatedClass="rounded-xl"
                      wrapperClass="yt-lite w-full h-full"
                    />
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {selectedItem.title}
                  </h3>
                  <p className="text-gray-400 mb-4">
                    {selectedItem.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {selectedItem.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default MediaGalleryPage;
