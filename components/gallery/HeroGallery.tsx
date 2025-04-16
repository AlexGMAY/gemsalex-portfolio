"use client";

import { motion } from "framer-motion";
import {
  FiArrowDown,
  FiCamera,
  FiFilm,
  FiHeart,
  FiSmile,
} from "react-icons/fi";
import { useRouter } from "next/navigation";

const HeroGallery = () => {
  const router = useRouter();

  return (
    <div className="relative mb-14 overflow-hidden bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900 h-screen flex items-center justify-center">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, -60, 0],
            rotate: [0, 8, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-cyan-400/10 blur-xl"
        ></motion.div>

        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 80, 0],
            rotate: [0, -8, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5,
          }}
          className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-violet-500/10 blur-xl"
        ></motion.div>

        <motion.div
          animate={{
            x: [0, 120, 0],
            y: [0, 40, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
          className="absolute top-1/3 right-1/3 w-64 h-64 rounded-full bg-pink-500/10 blur-xl"
        ></motion.div>

        <motion.div
          animate={{
            x: [0, -60, 0],
            y: [0, -30, 0],
            rotate: [0, 15, 0],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 7,
          }}
          className="absolute bottom-1/4 left-1/3 w-72 h-72 rounded-full bg-amber-400/10 blur-xl"
        ></motion.div>
      </div>

      {/* Floating media previews */}
      <motion.div
        initial={{ opacity: 0, y: 40, rotate: -5 }}
        animate={{ opacity: 1, y: 0, rotate: 0 }}
        transition={{ delay: 0.2, type: "spring" }}
        className="absolute top-[15%] left-[10%] w-32 h-32 rounded-xl overflow-hidden shadow-2xl border-2 border-white/10 hover:border-cyan-400/50 transition-all duration-300"
      >
        <div className="absolute inset-0 bg-[url('/alex-smile.jpg')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-3">
          <FiSmile className="text-white" size={18} />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40, rotate: 5 }}
        animate={{ opacity: 1, y: 0, rotate: 0 }}
        transition={{ delay: 0.4, type: "spring" }}
        className="absolute bottom-[20%] right-[10%] w-40 h-40 rounded-xl overflow-hidden shadow-2xl border-2 border-white/10 hover:border-violet-400/50 transition-all duration-300"
      >
        <div className="absolute inset-0 bg-[url('/cute-alex.jpg')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-3">
          <FiHeart className="text-white" size={18} />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -40, y: 40 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 0.6, type: "spring" }}
        className="absolute top-[25%] right-[15%] w-28 h-28 rounded-xl overflow-hidden shadow-2xl border-2 border-white/10 hover:border-pink-400/50 transition-all duration-300"
      >
        <div className="absolute inset-0 bg-[url('/alex-laughing.jpg')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-3">
          <FiCamera className="text-white" size={14} />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 40, y: 40 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 0.8, type: "spring" }}
        className="absolute bottom-[25%] left-[15%] w-36 h-36 rounded-xl overflow-hidden shadow-2xl border-2 border-white/10 hover:border-amber-400/50 transition-all duration-300"
      >
        <div className="absolute inset-0 bg-[url('/alex-serious.jpg')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-3">
          <FiFilm className="text-white" size={16} />
        </div>
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 text-center px-6 py-24">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="text-5xl md:text-7xl font-bold mb-6 pt-24"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 animate-gradient">
            My Visual Diary
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-10"
        >
          A canvas of memories painted with light and emotion
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, type: "spring" }}
          className="flex flex-col sm:flex-row justify-center gap-4 mb-16"
        >
          <button
            onClick={() => router.push("#photos")}
            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105"
          >
            <FiCamera size={18} /> View Photos
          </button>
          <button
            onClick={() => router.push("#videos")}
            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-600 text-white font-medium hover:shadow-lg hover:shadow-violet-500/30 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105"
          >
            <FiFilm size={18} /> Watch Videos
          </button>
        </motion.div>

        <motion.div
          animate={{
            y: [0, 15, 0],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute mt-24 bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <FiArrowDown
            className="text-gray-400 hover:text-white transition-colors"
            size={28}
          />
        </motion.div>
      </div>

      {/* Particle background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.4, 0] }}
            transition={{
              duration: 3 + Math.random() * 5,
              delay: Math.random() * 2,
              repeat: Infinity,
              repeatDelay: Math.random() * 5,
            }}
            className="absolute rounded-full bg-white"
            style={{
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Grid overlay with subtle animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ delay: 1 }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="h-full w-full grid grid-cols-12 gap-4 px-4">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.1 }}
              transition={{ delay: 1 + i * 0.05 }}
              className="h-full border-r border-gray-700 last:border-r-0"
            ></motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default HeroGallery;
