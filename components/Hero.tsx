"use client";

import { FaArrowRight, FaCode, FaPalette } from "react-icons/fa";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, ReactNode, useState, useEffect } from "react";
import React from "react";

interface FloatingShapesProps {
  count?: number;
}

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

interface GradientTextProps {
  children: ReactNode;
  from?: string;
  to?: string;
}

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  magneticStrength?: number;
}

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Sakling stars
  const [stars, setStars] = useState<
      Array<{ id: number; x: number; y: number; size: number; delay: number }>
  >([]);

  // Initialize floating elements
    useEffect(() => {
      const newStars = Array.from({ length: 50 }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 0.8 + 0.2,
        delay: Math.random() * 5,
      }));
      setStars(newStars);
    }, []);

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const FloatingShapes: React.FC<FloatingShapesProps> = ({ count = 15 }) => (
    <div className="absolute inset-0 overflow-hidden z-0">
      {[...Array(count)].map((_, i) => {
        const size = Math.random() * 100 + 50;
        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * 5;
        const x = Math.random() * 100;
        const y = Math.random() * 100;

        return (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-blue-300/10 to-blue-200/10 backdrop-blur-sm"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${x}%`,
              top: `${y}%`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 100 - 50],
              rotate: [0, 360],
            }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        );
      })}
    </div>
  );

  const GlassCard: React.FC<GlassCardProps> = ({
    children,
    className = "",
  }) => (
    <div
      className={`backdrop-blur-lg bg-white/5 rounded-2xl border border-white/10 shadow-xl overflow-hidden ${className}`}
    >
      {children}
    </div>
  );

  const GradientText: React.FC<GradientTextProps> = ({
    children,
    from = "from-blue-200",
    to = "to-blue-300",
  }) => (
    <span
      className={`text-transparent bg-clip-text bg-gradient-to-r ${from} ${to}`}
    >
      {children}
    </span>
  );

  const MagneticButton: React.FC<MagneticButtonProps> = ({
    children,
    className = "",
    magneticStrength = 0.1,
  }) => {
    const ref = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      ref.current.style.transform = `translate(${
        (x - centerX) * magneticStrength
      }px, ${(y - centerY) * magneticStrength}px)`;
    };

    const handleMouseLeave = () => {
      if (!ref.current) return;
      ref.current.style.transform = "translate(0, 0)";
    };

    return (
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`transition-transform duration-300 ease-out ${className}`}
      >
        {children}
      </div>
    );
  };

  return (
    <section
      ref={containerRef}
      className="relative pt-24 pb-36 overflow-hidden"
    >
      {/* w-full bg-black-100 overflow-hidden flex items-center justify-center */}
      <FloatingShapes count={15} />

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

      <motion.div
        style={{ y: yText }}
        className="relative z-10 px-6 md:px-12 w-full max-w-7xl mx-auto"
      >
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-8 pt-20">
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 text-white text-sm font-medium mb-6">
                Full Stack Developer & Designer
              </span>
            </motion.div> */}

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="text-[40px] md:text-5xl lg:text-6xl font-bold"
            >
              {/* text-4xl md:text-6xl lg:text-7xl */}
              <GradientText from="from-blue-200" to="to-blue-300">
                Digital Experiences
              </GradientText>{" "}
              <br />
              That{" "}
              <GradientText from="from-yellow-400" to="to-lime-400">
                Convert
              </GradientText>{" "}
              &{" "}
              <GradientText from="from-blue-200" to="to-blue-300">
                Inspire
              </GradientText>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              className="text-lg md:text-xl text-neutral-300 max-w-2xl"
            >
              I'm{" "}
              <span className="font-semibold text-white">
                Merveille Alexander
              </span>
              , crafting high-performance web applications with pixel-perfect
              design and cutting-edge technology.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
              className="flex flex-wrap gap-4 mt-8"
            >
              <MagneticButton magneticStrength={0.1}>
                <a
                  href="#work"
                  className="flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-blue-200 to-blue-300 text-white font-medium hover:shadow-lg transition-all"
                >
                  View My Work <FaArrowRight />
                </a>
              </MagneticButton>

              <MagneticButton magneticStrength={0.1}>
                <a
                  href="#contact"
                  className="flex items-center gap-2 px-8 py-4 rounded-full border-2 border-white/20 text-white font-medium hover:bg-white/5 transition-all"
                >
                  Let's Collaborate
                </a>
              </MagneticButton>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="flex-1 hidden lg:block"
          >
            <GlassCard className="p-8">
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
                  <h3 className="text-xl font-bold text-white">
                    Design Focused
                  </h3>
                </div>
                <p className="text-neutral-300">
                  Beautiful interfaces that prioritize user experience and
                  conversion optimization.
                </p>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="animate-bounce w-8 h-14 rounded-full border-2 border-white/30 flex justify-center p-1">
          <div className="w-2 h-2 rounded-full bg-white/80 mt-2" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;