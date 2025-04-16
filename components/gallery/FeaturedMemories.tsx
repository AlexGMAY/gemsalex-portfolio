"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowRight, FiCamera, FiHeart, FiMessageSquare } from "react-icons/fi";
import { useRef } from "react";

const FeaturedMemories = () => {
  const featuredItems = [
    {
      id: 1,
      title: "Summer Bliss",
      date: "June 2023",
      location: "Santorini, Greece",
      likes: 42,
      comments: 8,
      image: "/summer-bliss.jpg",
      type: "image",
    },
    {
      id: 2,
      title: "Mountain Escape",
      date: "August 2023",
      location: "Swiss Alps",
      likes: 36,
      comments: 5,
      image: "/mountain-escape.jpg",
      type: "image",
    },
    {
      id: 3,
      title: "Urban Adventures",
      date: "October 2023",
      location: "Tokyo, Japan",
      likes: 58,
      comments: 12,
      image: "/urban-adventures.jpg",
      type: "video",
    },
    {
      id: 4,
      title: "Family Reunion",
      date: "December 2023",
      location: "Home",
      likes: 89,
      comments: 15,
      image: "/family-reunion.jpg",
      type: "image",
    },
    {
      id: 5,
      title: "Beach Sunset",
      date: "July 2023",
      location: "Bali, Indonesia",
      likes: 64,
      comments: 9,
      image: "/beach-sunset.jpg",
      type: "video",
    },
  ];

  const containerRef = useRef(null);
  const { scrollXProgress } = useScroll({ container: containerRef });
  const x = useTransform(scrollXProgress, [0, 1], ["0%", "-50%"]);

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-violet-600 opacity-20"></div>
      <div className="absolute top-20 right-20 w-32 h-32 rounded-full bg-cyan-500/10 blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-40 h-40 rounded-full bg-violet-500/10 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-pink-400">
                Featured Memories
              </span>
            </h2>
            <p className="text-gray-400">
              Curated highlights from my collection
            </p>
          </div>
          {/* <button className="hidden md:flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all mt-6 md:mt-0">
            View all collections <FiArrowRight />
          </button> */}
        </div>

        {/* Carousel container */}
        <div className="relative">
          {/* Scrollable carousel */}
          <motion.div
            ref={containerRef}
            className="flex overflow-x-auto pb-8 gap-6 px-1 hide-scrollbar"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {featuredItems.map((item) => (
              <motion.div
                key={item.id}
                className="flex-shrink-0 w-[85vw] sm:w-[70vw] md:w-[45vw] lg:w-[35vw] xl:w-[30vw] h-[70vh] rounded-3xl overflow-hidden border border-white/10 relative group"
                style={{ scrollSnapAlign: "start" }}
                whileHover={{ scale: 0.98 }}
              >
                {/* Media content */}
                {item.type === "image" ? (
                  <img
                    src={item.image}
                    className="w-full h-full object-cover absolute inset-0 group-hover:scale-105 transition-transform duration-500"
                    alt={item.title}
                  />
                ) : (
                  <video
                    src={item.image.replace(".jpg", ".mp4")}
                    className="w-full h-full object-cover absolute inset-0"
                    autoPlay
                    muted
                    loop
                  />
                )}

                {/* Overlay content */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-8">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-xs text-white mb-2">
                      {item.location}
                    </span>
                    <h3 className="text-2xl font-bold">{item.title}</h3>
                    <p className="text-gray-300">{item.date}</p>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="flex gap-4">
                      <button className="flex items-center gap-1 text-sm hover:text-amber-300 transition-colors">
                        <FiHeart /> {item.likes}
                      </button>
                      <button className="flex items-center gap-1 text-sm hover:text-cyan-300 transition-colors">
                        <FiMessageSquare /> {item.comments}
                      </button>
                    </div>
                    <button className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition flex items-center gap-2 text-sm">
                      View {item.type === "video" ? "Video" : "Photo"}
                    </button>
                  </div>
                </div>

                {/* Type indicator */}
                <div className="absolute top-6 right-6 bg-black/70 backdrop-blur-sm rounded-full p-2 border border-white/10">
                  {item.type === "video" ? (
                    <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center">
                      <FiArrowRight
                        className="text-white rotate-90"
                        size={14}
                      />
                    </div>
                  ) : (
                    <FiCamera className="text-white" size={20} />
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll progress indicator (mobile) */}
          <div className="md:hidden mt-6 px-4">
            <div className="h-1 w-full bg-gray-800 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-amber-400 to-pink-500"
                style={{ width: x }}
              />
            </div>
          </div>
        </div>

        {/* View all button (mobile) */}
        <div className="md:hidden flex justify-center mt-8">
          <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
            View all collections <FiArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMemories;
