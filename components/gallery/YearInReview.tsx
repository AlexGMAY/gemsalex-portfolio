"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { FiCalendar, FiMapPin, FiCamera, FiVideo } from "react-icons/fi";
import { useRef, useState } from "react";

const YearInReview = () => {
  const [activeMonth, setActiveMonth] = useState(7); // Default to July
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  // Data for each month
  const months = [
    {
      name: "January",
      photos: 42,
      videos: 8,
      highlight: "New Year's Celebration",
      location: "Home",
      color: "from-blue-500/20 to-blue-600/20",
    },
    {
      name: "February",
      photos: 38,
      videos: 5,
      highlight: "Winter Getaway",
      location: "Aspen, CO",
      color: "from-purple-500/20 to-purple-600/20",
    },
    {
      name: "March",
      photos: 56,
      videos: 12,
      highlight: "Birthday Month",
      location: "Local",
      color: "from-pink-500/20 to-pink-600/20",
    },
    {
      name: "April",
      photos: 47,
      videos: 9,
      highlight: "Spring Roadtrip",
      location: "Coastal Highway",
      color: "from-red-500/20 to-red-600/20",
    },
    {
      name: "May",
      photos: 89,
      videos: 15,
      highlight: "Europe Adventure",
      location: "Paris, France",
      color: "from-orange-500/20 to-orange-600/20",
    },
    {
      name: "June",
      photos: 76,
      videos: 18,
      highlight: "Summer Festival",
      location: "Chicago, IL",
      color: "from-amber-500/20 to-amber-600/20",
    },
    {
      name: "July",
      photos: 112,
      videos: 24,
      highlight: "Beach Vacation",
      location: "Maui, Hawaii",
      color: "from-yellow-500/20 to-yellow-600/20",
    },
    {
      name: "August",
      photos: 94,
      videos: 16,
      highlight: "Family Reunion",
      location: "Grand Canyon",
      color: "from-lime-500/20 to-lime-600/20",
    },
    {
      name: "September",
      photos: 68,
      videos: 11,
      highlight: "Music Festival",
      location: "Austin, TX",
      color: "from-green-500/20 to-green-600/20",
    },
    {
      name: "October",
      photos: 57,
      videos: 9,
      highlight: "Fall Colors",
      location: "Vermont",
      color: "from-emerald-500/20 to-emerald-600/20",
    },
    {
      name: "November",
      photos: 43,
      videos: 7,
      highlight: "Friendsgiving",
      location: "Home",
      color: "from-teal-500/20 to-teal-600/20",
    },
    {
      name: "December",
      photos: 78,
      videos: 14,
      highlight: "Holiday Magic",
      location: "New York City",
      color: "from-cyan-500/20 to-cyan-600/20",
    },
  ];

  // Animated values for scroll effects
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0.5, 1, 1, 0.5]
  );

  // Calculate yearly totals - corrected version
  const yearlyTotals = months.reduce(
    (acc: { photos: number; videos: number; locations: string[] }, month) => ({
      photos: acc.photos + month.photos,
      videos: acc.videos + month.videos,
      locations: [...acc.locations, month.location],
    }),
    { photos: 0, videos: 0, locations: [] }
  );

  // Now this will work properly
  const uniqueLocations = [...new Set(yearlyTotals.locations)].length;

  return (
    <section
      className="py-24 bg-black relative overflow-hidden"
      ref={containerRef}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 opacity-20"></div>
      <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-emerald-500/10 blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-64 h-64 rounded-full bg-cyan-500/10 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <motion.div className="text-center mb-16" style={{ scale, opacity }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              2023 In Review
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A visual journey through my year in moments
          </p>
        </motion.div>

        {/* Stats overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-gradient-to-br from-emerald-900/30 to-gray-900 rounded-2xl p-6 border border-emerald-400/20">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-emerald-500/10">
                <FiCamera className="text-emerald-400" size={24} />
              </div>
              <div>
                <p className="text-3xl font-bold">{yearlyTotals.photos}</p>
                <p className="text-gray-400">Photos Captured</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-cyan-900/30 to-gray-900 rounded-2xl p-6 border border-cyan-400/20">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-cyan-500/10">
                <FiVideo className="text-cyan-400" size={24} />
              </div>
              <div>
                <p className="text-3xl font-bold">{yearlyTotals.videos}</p>
                <p className="text-gray-400">Videos Recorded</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-teal-900/30 to-gray-900 rounded-2xl p-6 border border-teal-400/20">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-teal-500/10">
                <FiMapPin className="text-teal-400" size={24} />
              </div>
              <div>
                <p className="text-3xl font-bold">{uniqueLocations}</p>
                <p className="text-gray-400">Unique Locations</p>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive timeline */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Month selector */}
          <div className="md:w-1/4">
            <div className="sticky top-24 space-y-2">
              {months.map((month, index) => (
                <button
                  key={month.name}
                  onClick={() => setActiveMonth(index)}
                  className={`w-full text-left p-4 rounded-xl transition-all ${
                    activeMonth === index
                      ? "bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-400/30"
                      : "bg-gray-900/50 hover:bg-gray-800/70"
                  }`}
                >
                  <h3 className="font-medium">{month.name}</h3>
                  <p className="text-sm text-gray-400">{month.highlight}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Month details */}
          <div className="md:w-3/4">
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-gray-800 min-h-[500px]">
              <motion.div
                key={activeMonth}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="h-full flex flex-col"
              >
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h3 className="text-2xl font-bold">
                      {months[activeMonth].name}
                    </h3>
                    <p className="text-emerald-400">
                      {months[activeMonth].highlight}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <FiMapPin size={16} />
                    <span>{months[activeMonth].location}</span>
                  </div>
                </div>

                {/* Data visualization */}
                <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-medium mb-4">
                      Media Breakdown
                    </h4>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">Photos</span>
                          <span className="text-sm text-gray-400">
                            {months[activeMonth].photos}
                          </span>
                        </div>
                        <div className="w-full bg-gray-800 rounded-full h-2.5">
                          <div
                            className="bg-emerald-500 h-2.5 rounded-full"
                            style={{
                              width: `${
                                (months[activeMonth].photos / 120) * 100
                              }%`,
                            }}
                          ></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">Videos</span>
                          <span className="text-sm text-gray-400">
                            {months[activeMonth].videos}
                          </span>
                        </div>
                        <div className="w-full bg-gray-800 rounded-full h-2.5">
                          <div
                            className="bg-cyan-500 h-2.5 rounded-full"
                            style={{
                              width: `${
                                (months[activeMonth].videos / 25) * 100
                              }%`,
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium mb-4">
                      Highlight Preview
                    </h4>
                    <div
                      className={`aspect-video rounded-xl overflow-hidden border border-white/10 ${months[activeMonth].color} bg-gradient-to-br`}
                    >
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="text-center p-6">
                          <FiCalendar
                            className="mx-auto text-gray-400 mb-2"
                            size={24}
                          />
                          <p className="text-gray-300">
                            {months[activeMonth].name}&apos;s Highlight
                          </p>
                          <p className="text-sm text-gray-500 mt-1">
                            {months[activeMonth].highlight}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-800">
                  <button className="px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-medium hover:shadow-lg hover:shadow-emerald-500/30 transition-all flex items-center gap-2">
                    Explore {months[activeMonth].name} Memories
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YearInReview;
