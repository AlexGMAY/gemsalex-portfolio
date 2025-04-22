"use client";

import { FaArrowRight, FaCode, FaPalette } from "react-icons/fa";
import { motion, useAnimate, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const Hero = () => {
  const [leftPictureScope, leftPictureAnimate] = useAnimate();
  const [rightPictureScope, rightPictureAnimate] = useAnimate();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Stars effect
  const [stars, setStars] = useState<
    Array<{ id: number; x: number; y: number; size: number; delay: number }>
  >([]);

  // Floating shapes
  const [shapes, setShapes] = useState<
    Array<{
      id: number;
      x: number;
      y: number;
      size: number;
      duration: number;
      delay: number;
    }>
  >([]);

  useEffect(() => {
    // Create stars
    const newStars = Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 0.8 + 0.2,
      delay: Math.random() * 5,
    }));
    setStars(newStars);

    // Create floating shapes
    const newShapes = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 100 + 50,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5,
    }));
    setShapes(newShapes);
  }, []);

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  
  useEffect(() => {
      leftPictureAnimate([
        [leftPictureScope.current, { opacity: 1 }, { duration: 0.5 }],
        [leftPictureScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
      ]);
  
      rightPictureAnimate([
        [
          rightPictureScope.current,
          { opacity: 1 },
          { duration: 0.5, delay: 1.5 },
        ],
        [rightPictureScope.current, { x: 0, y: 0 }, { duration: 0.5 }],
      ]);
    }, [])

  return (
    <section
      ref={containerRef}
      className="relative pb-20 pt-28 w-full overflow-hidden flex items-center justify-center"
    >
      <motion.div
        ref={leftPictureScope}
        initial={{ opacity: 0, y: 100, x: -100 }}
        drag
        className="absolute -left-60 w-[30%] h-[380px] bottom-10 rounded-3xl p-2 hidden lg:block"
      >
        <img
          src="/dashboard.jpeg"
          alt="Web apps development"
          className="w-full md:h-full p-2 bg-black-200 border border-lg border-neutral-700 rounded-3xl shadow-lg relative z-10"
          draggable="false"
        />
      </motion.div>
      <motion.div
        ref={rightPictureScope}
        initial={{ opacity: 0, x: 100, y: 100 }}
        drag
        className="absolute -right-64 w-[30%] h-[380px] top-120 rounded-3xl p-2 hidden lg:block"
      >
        <img
          src="/realestate-dark.jpg"
          alt="Website Development"
          className="w-full md:h-full p-2 bg-black-200 border border-lg border-neutral-700 rounded-3xl shadow-lg relative z-10"
          draggable="false"
        />
      </motion.div>

      {/* Floating shapes background */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {shapes.map((shape) => (
          <motion.div
            key={shape.id}
            className="absolute rounded-full bg-gradient-to-br from-blue-300/10 to-blue-200/10 backdrop-blur-sm"
            style={{
              width: `${shape.size}px`,
              height: `${shape.size}px`,
              left: `${shape.x}%`,
              top: `${shape.y}%`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 100 - 50],
              rotate: [0, 360],
            }}
            transition={{
              duration: shape.duration,
              delay: shape.delay,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Background effects */}
      <motion.div style={{ y: yBg }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-black-200 via-black-100 to-black-100" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3N2Zz4=')] bg-[size:100px_100px] opacity-10" />
      </motion.div>

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

      {/* Centered content */}
      <motion.div
        style={{ y: yText }}
        className="relative z-10 w-full max-w-[89vw] md:max-w-2xl lg:max-w-[70vw] px-6 text-center my-20"
      >
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-[40px] md:text-5xl lg:text-7xl font-bold leading-tight mb-6"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-300">
            Digital Experiences
          </span>{" "}
          <br />
          That{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-lime-400">
            Convert
          </span>{" "}
          &{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-300">
            Inspire
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl max-w-2xl mx-auto mb-8"
        >
          I'm{" "}
          <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-lime-400">
            Merveille Alexander
          </span>
          , crafting high-performance web applications with pixel-perfect design
          and cutting-edge technology.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <a
            href="#work"
            className="flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-blue-200 to-blue-300 text-white font-medium hover:shadow-lg transition-all"
          >
            View My Work <FaArrowRight />
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 px-8 py-4 rounded-full border-2 border-white/20 text-white font-medium hover:bg-white/5 transition-all"
          >
            Let's Collaborate
          </a>
        </motion.div>

        {/* Glass card - now centered below */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
          className="backdrop-blur-lg bg-white/5 rounded-2xl border border-white/10 shadow-xl overflow-hidden p-8 max-w-2xl mx-auto"
        >
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-blue-500/10">
                <FaCode className="text-blue-400 text-xl" />
              </div>
              <h3 className="text-xl font-bold text-white">
                Technical Excellence
              </h3>
            </div>
            <p className="text-neutral-300">
              React, Next.js, Node.js, and modern web technologies to build
              fast, scalable applications.
            </p>

            <div className="flex items-center gap-4 mt-8">
              <div className="p-3 rounded-full bg-purple-500/10">
                <FaPalette className="text-purple-400 text-xl" />
              </div>
              <h3 className="text-xl font-bold text-white">Design Focused</h3>
            </div>
            <p className="text-neutral-300">
              Beautiful interfaces that prioritize user experience and
              conversion optimization.
            </p>
          </div>
        </motion.div> */}
      </motion.div>

      {/* Scroll indicator */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="animate-bounce w-8 h-14 rounded-full border-2 border-white/30 flex justify-center p-1">
          <div className="w-2 h-2 rounded-full bg-white/80 mt-2" />
        </div>
      </motion.div> */}
    </section>
  );
};

export default Hero;
