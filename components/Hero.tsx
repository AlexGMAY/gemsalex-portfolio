"use client";

import { FaArrowRight, FaCode, FaPalette } from "react-icons/fa";
import { motion, useAnimate, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

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
  }, [leftPictureAnimate, rightPictureAnimate, leftPictureScope, rightPictureScope]);

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
        <Image
          src="/dashboard.jpeg"
          alt="Custom Business Dashboard Development - Operational Efficiency Software"
          fill
          className="w-full md:h-full p-2 bg-black-200 border border-lg border-neutral-700 rounded-3xl shadow-lg relative z-10 object-cover"
          draggable="false"
        />
      </motion.div>
      <motion.div
        ref={rightPictureScope}
        initial={{ opacity: 0, x: 100, y: 100 }}
        drag
        className="absolute -right-64 w-[30%] h-[380px] top-120 rounded-3xl p-2 hidden lg:block"
      >
        <Image
          src="/realestate-dark.jpg"
          alt="Real Estate Technology Solutions - Custom Software Development"
          width={383} // EXACT displayed width
          height={383} // EXACT displayed height
          quality={75}
          sizes="100vw"
          className="w-full md:h-full p-2 bg-black-200 border border-lg border-neutral-700 rounded-3xl shadow-lg relative z-10 object-cover"
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
        className="relative z-10 w-full max-w-[89vw] md:max-w-2xl lg:max-w-[73vw] px-6 text-center my-20"
      >
        {/* Headline */}
        <motion.h1
          // initial={{ opacity: 0, y: 20 }}
          // animate={{ opacity: 1, y: 0 }}
          // transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-[40px] md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-300">
            Custom Software Solutions
          </span>{" "}
          <br />
          That{" "}
          <span className="text-[40px] md:text-5xl lg:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-lime-400">
            Drive Growth
          </span>{" "}
          & <br />
          <span className="text-[40px] md:text-5xl lg:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-300">
            Maximize ROI
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="md:tracking-wider mb-4 text-sm md:text-lg lg:text-1xl max-w-4xl mx-auto mb-8"
        >
          I&apos;m{" "}
          <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-lime-400">
            Merveille Alexander
          </span>
          , a strategic software engineer who transforms complex business
          challenges into scalable, revenue-driving applications. I specialize
          in building custom solutions that eliminate operational inefficiencies
          and create competitive advantages.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <Link
            href="#case-studies"
            className="flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-blue-200 to-blue-300 text-white font-medium hover:shadow-lg transition-all"
          >
            See Client Success Stories <FaArrowRight />
          </Link>
          <Link
            href="/contact"
            className="flex items-center gap-2 px-8 py-4 rounded-full border-2 border-white/20 text-white font-medium hover:bg-white/5 transition-all"
          >
            Get Free Technical Audit
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
