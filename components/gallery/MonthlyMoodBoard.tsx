"use client";

import { motion } from "framer-motion";
import { FiHeart, FiZoomIn, FiCalendar, FiMapPin, FiPlay } from "react-icons/fi";
import { useState } from "react";
import Image from "next/image";

const MonthlyMoodBoard = () => {
  const [activeMonth, setActiveMonth] = useState("June");

  const months = [
    {
      name: "January",
      color: "from-blue-500/20 to-blue-600/20",
      dominantColor: "#3B82F6",
    },
    {
      name: "February",
      color: "from-purple-500/20 to-purple-600/20",
      dominantColor: "#8B5CF6",
    },
    {
      name: "March",
      color: "from-pink-500/20 to-pink-600/20",
      dominantColor: "#EC4899",
    },
    {
      name: "April",
      color: "from-red-500/20 to-red-600/20",
      dominantColor: "#EF4444",
    },
    {
      name: "May",
      color: "from-orange-500/20 to-orange-600/20",
      dominantColor: "#F97316",
    },
    {
      name: "June",
      color: "from-amber-500/20 to-amber-600/20",
      dominantColor: "#F59E0B",
    },
    {
      name: "July",
      color: "from-yellow-500/20 to-yellow-600/20",
      dominantColor: "#EAB308",
    },
    {
      name: "August",
      color: "from-lime-500/20 to-lime-600/20",
      dominantColor: "#84CC16",
    },
    {
      name: "September",
      color: "from-green-500/20 to-green-600/20",
      dominantColor: "#10B981",
    },
    {
      name: "October",
      color: "from-emerald-500/20 to-emerald-600/20",
      dominantColor: "#10B981",
    },
    {
      name: "November",
      color: "from-teal-500/20 to-teal-600/20",
      dominantColor: "#14B8A6",
    },
    {
      name: "December",
      color: "from-cyan-500/20 to-cyan-600/20",
      dominantColor: "#06B6D4",
    },
  ];

  // Sample mood board items (replace with your actual images)
  const moodBoardItems = [
    {
      id: 1,
      month: "June",
      type: "image",
      src: "/summer-1.jpg",
      aspect: "square",
    },
    {
      id: 2,
      month: "June",
      type: "image",
      src: "/summer-2.jpg",
      aspect: "portrait",
    },
    {
      id: 3,
      month: "June",
      type: "image",
      src: "/summer-3.jpg",
      aspect: "landscape",
    },
    {
      id: 4,
      month: "June",
      type: "video",
      src: "/summer-4.jpg",
      aspect: "square",
    },
    {
      id: 5,
      month: "June",
      type: "image",
      src: "/summer-5.jpg",
      aspect: "portrait",
    },
    {
      id: 6,
      month: "June",
      type: "image",
      src: "/summer-6.jpg",
      aspect: "landscape",
    },
    {
      id: 7,
      month: "June",
      type: "image",
      src: "/summer-7.jpg",
      aspect: "square",
    },
  ];

  const filteredItems = moodBoardItems.filter(
    (item) => item.month === activeMonth
  );
  const activeMonthData = months.find((month) => month.name === activeMonth);

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-rose-500 opacity-20"></div>
      <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-amber-500/10 blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-64 h-64 rounded-full bg-rose-500/10 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-rose-400">
              Monthly Mood Boards
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A visual representation of each month&apos;s atmosphere and memories
          </p>
        </div>

        {/* Month selector */}
        <div className="flex overflow-x-auto pb-4 gap-2 mb-8 hide-scrollbar">
          {months.map((month) => (
            <button
              key={month.name}
              onClick={() => setActiveMonth(month.name)}
              className={`px-4 py-2 rounded-full flex-shrink-0 transition-all ${
                activeMonth === month.name
                  ? `bg-gradient-to-r from-amber-400 to-rose-500 text-white`
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {month.name}
            </button>
          ))}
        </div>

        {/* Mood board grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className={`relative rounded-xl overflow-hidden border border-white/10 group ${
                item.aspect === "portrait"
                  ? "row-span-2"
                  : item.aspect === "landscape"
                  ? "col-span-2"
                  : ""
              }`}
              style={{ backgroundColor: activeMonthData?.dominantColor }}
            >
              {item.type === "image" ? (
                // <img
                //   src={item.src}
                //   alt={`${activeMonth} memory`}
                //   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                // />
                <Image
                  src={item.src}
                  alt={`${activeMonth} memory`}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <video
                  src={item.src.replace(".jpg", ".mp4")}
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                />
              )}

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2 text-sm">
                    {item.type === "video" ? (
                      <FiPlay className="text-white" size={14} />
                    ) : (
                      <FiZoomIn className="text-white" size={14} />
                    )}
                    <span className="text-white">View</span>
                  </div>
                  <button className="p-1.5 rounded-full bg-white/10 backdrop-blur-sm">
                    <FiHeart className="text-white" size={14} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Month summary */}
        <div className="mt-12 bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-white/10">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <h3 className="text-2xl font-bold mb-4">
                {activeMonth} Highlights
              </h3>
              <div className="flex items-center gap-4 text-gray-300 mb-4">
                <FiCalendar />
                <span>15 memorable moments</span>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <FiMapPin />
                <span>3 different locations</span>
              </div>
            </div>
            <div className="md:w-2/3">
              <p className="text-gray-400">
                {activeMonth} was filled with warm days and joyful gatherings.
                The dominant colors in my photos reflect the golden sunsets and
                vibrant summer energy that characterized this month.
              </p>
              <button className="mt-6 px-6 py-3 rounded-full bg-gradient-to-r from-amber-500 to-rose-500 text-white font-medium hover:shadow-lg hover:shadow-amber-500/30 transition-all">
                View Full {activeMonth} Collection
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MonthlyMoodBoard;
