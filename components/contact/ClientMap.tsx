'use client';

import { motion } from "framer-motion";
import { FiClock, FiUsers, FiGlobe } from "react-icons/fi";
import { useState, useEffect } from "react";

// Define types for our regions
type RegionKey = "americas" | "europe" | "asia";

interface RegionData {
  clients: number;
  cities: string[];
  timezone: string;
}

const ClientMap = () => {
  const [activeRegion, setActiveRegion] = useState<RegionKey>("americas");
  const [currentTime, setCurrentTime] = useState("");

  // Sample client data by region with proper typing
  const regions: Record<RegionKey, RegionData> = {
    americas: {
      clients: 42,
      cities: ["New York", "Toronto", "São Paulo", "San Francisco"],
      timezone: "America/New_York",
    },
    europe: {
      clients: 28,
      cities: ["London", "Paris", "Berlin", "Madrid"],
      timezone: "Europe/London",
    },
    asia: {
      clients: 19,
      cities: ["Singapore", "Tokyo", "Bangalore", "Dubai"],
      timezone: "Asia/Tokyo",
    },
  };

  // Update time every second
  useEffect(() => {
    const updateTime = () => {
      const time = new Date().toLocaleTimeString("en-US", {
        timeZone: regions[activeRegion].timezone,
        hour: "2-digit",
        minute: "2-digit",
      });
      setCurrentTime(time);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [activeRegion]);

  return (
    <div className="bg-gray-800/50 rounded-xl border border-gray-700 overflow-hidden">
      {/* Header */}
      <div className="p-6 border-b border-gray-700">
        <h3 className="text-xl font-semibold text-white flex items-center gap-2">
          <FiGlobe className="text-blue-400" />
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Global Client Distribution
          </span>
        </h3>
      </div>

      {/* Map Visualization */}
      <div className="relative h-64 md:h-80 bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden">
        {/* World Map SVG (simplified) */}
        <svg
          viewBox="0 0 800 400"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Americas */}
          <motion.path
            d="M150,200 Q180,150 220,190 Q250,220 200,250 Q180,270 150,240 Z"
            fill={
              activeRegion === "americas"
                ? "url(#americasGradient)"
                : "#2d374850"
            }
            stroke={activeRegion === "americas" ? "#3b82f6" : "#4a5568"}
            strokeWidth="1.5"
            whileHover={{ fill: "#1e40af50" }}
            onClick={() => setActiveRegion("americas")}
            className="cursor-pointer transition-colors"
          />

          {/* Europe */}
          <motion.path
            d="M400,150 Q450,120 500,150 Q520,180 480,200 Q440,190 400,170 Z"
            fill={
              activeRegion === "europe" ? "url(#europeGradient)" : "#2d374850"
            }
            stroke={activeRegion === "europe" ? "#3b82f6" : "#4a5568"}
            strokeWidth="1.5"
            whileHover={{ fill: "#1e40af50" }}
            onClick={() => setActiveRegion("europe")}
            className="cursor-pointer transition-colors"
          />

          {/* Asia */}
          <motion.path
            d="M550,180 Q600,150 650,200 Q680,250 620,280 Q580,260 550,220 Z"
            fill={activeRegion === "asia" ? "url(#asiaGradient)" : "#2d374850"}
            stroke={activeRegion === "asia" ? "#3b82f6" : "#4a5568"}
            strokeWidth="1.5"
            whileHover={{ fill: "#1e40af50" }}
            onClick={() => setActiveRegion("asia")}
            className="cursor-pointer transition-colors"
          />

          {/* Gradients */}
          <defs>
            <linearGradient
              id="americasGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0.4" />
            </linearGradient>
            <linearGradient
              id="europeGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.4" />
            </linearGradient>
            <linearGradient
              id="asiaGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#ec4899" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#db2777" stopOpacity="0.4" />
            </linearGradient>
          </defs>
        </svg>

        {/* Floating Dots (Client Locations) */}
        {regions[activeRegion].cities.map((city, index) => (
          <motion.div
            key={city}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className={`absolute w-3 h-3 rounded-full bg-blue-400 shadow-lg`}
            style={{
              left: `${50 + (index % 2 === 0 ? -1 : 1) * (15 + index * 5)}%`,
              top: `${50 + (index % 3 === 0 ? -1 : 1) * (10 + index * 3)}%`,
            }}
          />
        ))}
      </div>

      {/* Info Panel */}
      <div className="p-6 bg-gray-800/30">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
            <div className="flex items-center gap-2 text-gray-400 mb-1">
              <FiUsers className="text-blue-400" />
              <span className="text-sm">Clients</span>
            </div>
            <p className="text-2xl font-bold text-white">
              {regions[activeRegion].clients}
            </p>
          </div>

          <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
            <div className="flex items-center gap-2 text-gray-400 mb-1">
              <FiClock className="text-blue-400" />
              <span className="text-sm">Local Time</span>
            </div>
            <p className="text-2xl font-bold text-white">{currentTime}</p>
          </div>

          <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 md:block hidden">
            <div className="flex items-center gap-2 text-gray-400 mb-1">
              <FiGlobe className="text-blue-400" />
              <span className="text-sm">Major Cities</span>
            </div>
            <p className="text-white truncate">
              {regions[activeRegion].cities.join(", ")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientMap;
