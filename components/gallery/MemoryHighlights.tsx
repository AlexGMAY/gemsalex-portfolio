"use client";

import { motion } from "framer-motion";
import { FiHeart, FiZoomIn, FiPlay } from "react-icons/fi";

const MemoryHighlights = () => {
  const highlights = [
    {
      id: 1,
      title: "Ocean Sunset",
      type: "image",
      image: "/ocean-sunset.jpg",
      featured: true,
      likes: 128,
      date: "2023-07-15",
    },
    {
      id: 2,
      title: "Mountain Hike",
      type: "image",
      image: "/mountain-hike.jpg",
      featured: false,
      likes: 92,
      date: "2023-08-22",
    },
    {
      id: 3,
      title: "City Lights",
      type: "video",
      image: "/city-lights.jpg",
      featured: true,
      likes: 156,
      date: "2023-09-05",
    },
    {
      id: 4,
      title: "Family Dinner",
      type: "image",
      image: "/family-dinner.jpg",
      featured: false,
      likes: 204,
      date: "2023-10-12",
    },
    {
      id: 5,
      title: "Festival Fun",
      type: "video",
      image: "/festival-fun.jpg",
      featured: true,
      likes: 187,
      date: "2023-11-03",
    },
    {
      id: 6,
      title: "Morning Coffee",
      type: "image",
      image: "/morning-coffee.jpg",
      featured: false,
      likes: 76,
      date: "2023-12-18",
    },
  ];

  return (
    <section className="py-24 bg-black-100 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-violet-600 opacity-20"></div>
      <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-pink-500/10 blur-3xl"></div>
      <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-violet-500/10 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-violet-400">
              Memory Highlights
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My most cherished moments captured in pixels and frames
          </p>
        </div>

        {/* Mosaic grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((memory, index) => (
            <motion.div
              key={memory.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative rounded-2xl overflow-hidden border border-white/10 group ${
                memory.featured
                  ? "md:row-span-2 md:col-span-2"
                  : "aspect-square"
              }`}
            >
              {/* Media content */}
              {memory.type === "image" ? (
                <img
                  src={memory.image}
                  alt={memory.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <video
                  src={memory.image.replace(".jpg", ".mp4")}
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                />
              )}

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-bold mb-1">{memory.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">
                    {new Date(memory.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>

                <div className="flex justify-between items-center translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <button className="flex items-center gap-2 text-sm bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/20 hover:bg-white/20 transition">
                    <FiHeart /> {memory.likes}
                  </button>
                  <button className="p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition">
                    {memory.type === "video" ? (
                      <FiPlay className="text-white" />
                    ) : (
                      <FiZoomIn className="text-white" />
                    )}
                  </button>
                </div>
              </div>

              {/* Type indicator */}
              <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm rounded-full p-2">
                {memory.type === "video" ? (
                  <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center">
                    <FiPlay className="text-white" size={10} />
                  </div>
                ) : (
                  <FiZoomIn className="text-white" size={16} />
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* View more button */}
        <div className="text-center mt-12">
          <button className="px-8 py-3.5 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 text-white font-medium hover:shadow-lg hover:shadow-pink-500/30 transition-all flex items-center gap-2 mx-auto">
            Explore All Memories
          </button>
        </div>
      </div>
    </section>
  );
};

export default MemoryHighlights;
