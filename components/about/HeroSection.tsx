"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { Spotlight } from "../ui/Spotlight";
import { TwinklingStar } from "../ui/TwinklingStar";
import { FloatingElements } from "../projects/Hero";
import Link from "next/link";
import { FiArrowRight, FiCheck, FiCode, FiUsers, FiZap } from "react-icons/fi";

const HeroSection = () => {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  // Parallax effect for video
  const videoY = useTransform(scrollY, [0, 500], [0, 100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.8]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Spotlights - Enhanced for depth */}
      <div className="absolute inset-0">
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight className="h-[80vh] w-[50vw] top-10 right-0" fill="lime" />
        <Spotlight className="left-1/3 top-1/3 h-[60vh] w-[40vw]" fill="blue" />
      </div>

      {/* Video Background with Parallax */}
      <motion.div
        style={{ y: videoY, opacity }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/80 to-black/90 z-10" />
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover scale-105"
        >
          <source src="/videos/web-design-vid.mp4" type="video/mp4" />
        </video>

        {/* Animated overlay grid */}
        <div className="absolute inset-0 z-5 opacity-20">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
                              linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
          />
        </div>
      </motion.div>

      {/* Floating elements */}
      <TwinklingStar />
      <FloatingElements />

      {/* Main Content */}
      <div className="relative z-20 w-full px-4 sm:px-6 lg:px-8 py-20 md:py-0">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Main Message */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left"
            >
              {/* Status badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-lime-500/20"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-500"></span>
                </span>
                <span className="text-sm font-medium text-lime-400">
                  Available for work
                </span>
              </motion.div>

              {/* Main headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
                Engineering{" "}
                <span className="relative">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-lime-400 via-lime-400 to-blue-400">
                    Digital Excellence
                  </span>
                  <motion.span
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-lime-400 to-transparent rounded-full"
                  />
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed max-w-xl">
                Full-stack engineer with 8+ years of turning complex business
                challenges into scalable, high-performance web solutions that
                drive real growth.
              </p>

              {/* Trust indicators */}
              <div className="flex flex-wrap gap-4 mb-10">
                {[
                  { icon: FiCheck, text: "50+ Projects Delivered" },
                  { icon: FiUsers, text: "30+ Happy Clients" },
                  { icon: FiCode, text: "8+ Years Experience" },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + idx * 0.1 }}
                    className="flex items-center gap-2 text-sm text-gray-400"
                  >
                    <item.icon className="text-lime-400" />
                    <span>{item.text}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  href="/projects"
                  className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-black bg-gradient-to-r from-lime-400 to-lime-500 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-lime-500/25"
                >
                  <span className="relative z-10 flex items-center">
                    View My Work
                    <FiArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-lime-500 to-lime-600"
                    initial={{ x: "100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>

                <Link
                  href="#contact"
                  className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                >
                  Schedule a Call
                  <FiZap className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                </Link>
              </motion.div>

              {/* Social proof */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="mt-12 pt-8 border-t border-white/5"
              >
                <p className="text-sm text-gray-500 mb-4">
                  Trusted by companies like
                </p>
                <div className="flex flex-wrap gap-6 items-center">
                  {["Startups", "SaaS", "E-commerce", "Enterprise"].map(
                    (item, idx) => (
                      <span
                        key={idx}
                        className="text-gray-400 font-medium text-sm"
                      >
                        {item}
                      </span>
                    ),
                  )}
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Visual Stats */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative hidden lg:block"
            >
              {/* Stats cards */}
              <div className="relative">
                {/* Main stat card */}
                <motion.div
                  whileHover={{ y: -5 }}
                  className="relative bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8 mb-6"
                >
                  <div className="absolute -top-3 -right-3">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-lime-500"></span>
                    </span>
                  </div>

                  <div className="text-6xl font-bold text-white mb-2">8+</div>
                  <p className="text-gray-400 mb-4">
                    Years of engineering excellence
                  </p>

                  <div className="w-full bg-white/5 rounded-full h-2 mb-4">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "85%" }}
                      transition={{ delay: 1.2, duration: 1 }}
                      className="h-full bg-gradient-to-r from-lime-400 to-blue-400 rounded-full"
                    />
                  </div>
                  <p className="text-sm text-gray-500">
                    85% repeat client rate
                  </p>
                </motion.div>

                {/* Tech stack grid */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    {
                      name: "React/Next.js",
                      value: "50+",
                      color: "from-blue-400 to-blue-500",
                    },
                    {
                      name: "Node.js",
                      value: "40+",
                      color: "from-green-400 to-green-500",
                    },
                    {
                      name: "TypeScript",
                      value: "45+",
                      color: "from-blue-500 to-blue-600",
                    },
                    {
                      name: "AWS/Cloud",
                      value: "30+",
                      color: "from-orange-400 to-orange-500",
                    },
                  ].map((tech, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1 + idx * 0.1 }}
                      whileHover={{ y: -5, scale: 1.02 }}
                      className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/5 hover:border-lime-500/20 transition-all duration-300"
                    >
                      <div
                        className={`text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r ${tech.color}`}
                      >
                        {tech.value}
                      </div>
                      <p className="text-xs text-gray-400">{tech.name}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Floating badge */}
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -bottom-4 -left-4 bg-gradient-to-r from-lime-500 to-blue-500 rounded-full p-4 shadow-xl shadow-lime-500/20"
                >
                  <FiCode className="h-6 w-6 text-white" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-gray-500 uppercase tracking-wider">
            Scroll
          </span>
          <div className="w-5 h-9 border-2 border-white/20 rounded-full flex justify-center">
            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-1 h-2 bg-lime-400 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </motion.div>

      <TwinklingStar />
    </section>
  );
};

export default HeroSection;
