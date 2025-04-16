"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaSmileWink, FaCode, FaDownload, FaStar } from "react-icons/fa";

const AboutMe = () => {
  const [emojis, setEmojis] = useState<
    Array<{
      id: number;
      emoji: string;
      x: number;
      y: number;
      size: number;
      speed: number;
    }>
  >([]);
  const [stars, setStars] = useState<
    Array<{ id: number; x: number; y: number; size: number; delay: number }>
  >([]);

  // Initialize floating elements
  useEffect(() => {
    const emojiList = ["💻", "✨", "🚀", "🧠", "🔗", "👨‍💻", "🎯", "⚡"];
    const newEmojis = Array.from({ length: 12 }).map((_, i) => ({
      id: i,
      emoji: emojiList[Math.floor(Math.random() * emojiList.length)],
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 20 + 10,
      speed: Math.random() * 2 + 1,
    }));
    setEmojis(newEmojis);

    const newStars = Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 0.8 + 0.2,
      delay: Math.random() * 5,
    }));
    setStars(newStars);
  }, []);

  const skills = [
    { name: "Quick Learner", emoji: "🚀" },
    { name: "Problem Solver", emoji: "🧩" },
    { name: "Tech Enthusiast", emoji: "💻" },
    { name: "Clean Coder", emoji: "🧹" },
    { name: "Team Player", emoji: "🤝" },
    { name: "Detail Oriented", emoji: "🔍" },
  ];

  return (
    <section
      id="about"
      className="relative py-20 overflow-hidden min-h-screen flex items-center"
    >
      {/* Floating emojis background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {emojis.map((e) => (
          <motion.div
            key={e.id}
            initial={{ x: `${e.x}%`, y: `${e.y}%`, opacity: 0 }}
            animate={{
              y: [`${e.y}%`, `${e.y + 10}%`, `${e.y}%`],
              opacity: [0, 1, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: e.speed * 10,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
              delay: e.speed * 2,
            }}
            className="absolute text-2xl"
            style={{ fontSize: `${e.size}px` }}
          >
            {e.emoji}
          </motion.div>
        ))}
      </div>

      {/* Sparkle stars background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: star.delay,
              repeatDelay: Math.random() * 5,
            }}
            className="absolute rounded-full bg-blue-300"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              boxShadow: "0 0 10px 2px rgba(147, 197, 253, 0.8)",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-lg rounded-3xl border border-blue-200/20 p-8 md:p-12 shadow-xl relative overflow-hidden"
        >
          {/* Floating decoration */}
          <motion.div
            animate={{
              y: [0, -10, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute -top-5 -right-5 text-4xl text-blue-300/30"
          >
            <FaStar />
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Enhanced image container */}
            <motion.div
              whileHover={{ rotate: 1, scale: 1.02 }}
              transition={{ type: "spring" }}
              className="relative group flex-shrink-0 w-full lg:w-auto"
            >
              <div className="absolute -inset-3 bg-gradient-to-r from-blue-200 to-blue-300 rounded-3xl opacity-50 blur-lg group-hover:opacity-70 transition-all duration-300"></div>
              <div className="relative rounded-2xl overflow-hidden border-2 border-blue-200/30 w-full h-80 lg:h-96 lg:w-72">
                <img
                  src="/alex-smile.jpg"
                  alt="Merveille Alexander smiling"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent flex items-end p-4">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 3 }}
                    className="text-blue-200 text-2xl"
                  >
                    <FaSmileWink />
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <div className="space-y-6 w-full">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                className="flex items-center gap-3"
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="text-blue-300"
                >
                  <FaStar />
                </motion.div>
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-200 to-blue-300 bg-clip-text text-transparent">
                  Hello There! I'm Alex
                </h2>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
                className="text-lg text-blue-100/80 leading-relaxed"
              >
                I'm a{" "}
                <span className="font-bold text-blue-200">
                  full-stack developer
                </span>{" "}
                specializing in building high-performance applications. When I'm
                not architecting solutions, you'll find me optimizing workflows,
                exploring new tech, or mentoring fellow developers.
              </motion.p>

              {/* Skills with emojis */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4"
              >
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    className="flex items-center gap-2 bg-blue-900/20 rounded-full px-4 py-2 border border-blue-200/20 hover:border-blue-300/50 transition-all"
                  >
                    <span className="text-xl">{skill.emoji}</span>
                    <span className="text-sm font-medium text-blue-100">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                viewport={{ once: true }}
                className="flex flex-wrap gap-4 pt-8"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-200 to-blue-300 text-blue-900 font-medium shadow-lg hover:shadow-blue-300/30 transition-all"
                >
                  <FaCode /> My Projects
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-6 py-3 rounded-full bg-blue-900/20 border border-blue-200/30 text-blue-100 font-medium hover:bg-blue-900/30 transition-all"
                >
                  <FaDownload /> Download CV
                </motion.button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;