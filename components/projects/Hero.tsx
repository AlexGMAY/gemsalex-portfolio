"use client";
import { motion, useAnimate } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Spotlight } from "../ui/Spotlight";
import { TextGenerateEffect } from "../ui/TextGenerateEffect";

export function Hero() {
  const [leftPictureScope, leftPictureAnimate] = useAnimate();
      const [rightPictureScope, rightPictureAnimate] = useAnimate();

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
      }, []);
  return (
    <section className="relative py-20">
      {/* Background with subtle animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-gradient-to-br from-black-100 to-black-100"
      />
      {/* Left and Right Pictures */}
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
      {/* Spotlights */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/* Floating Elements */}
      <FloatingElements />

      <div className="container mx-auto px-6 py-24 md:py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Animated headline */}
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            <TextGenerateEffect
              words=" Crafting Digital Excellence Through Innovative Projects"
              className="text-center text-[40px] md:text-5xl lg:text-6xl font-bold mb-4"
            />
          </motion.h1>

          {/* Animated subtitle */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl mx-auto"
          >
            I build both minimalist and immersive web experiences that combine
            aesthetic elegance with technical precision.
          </motion.p>

          {/* Button group with staggered animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1, delayChildren: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="#projects"
                className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30"
                aria-label="View my projects"
              >
                Explore My Work
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-blue-100 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/30 backdrop-blur-sm"
                aria-label="Contact me"
              >
                Start Your Project
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Floating decorative elements */}
      <FloatingElements />
    </section>
  );
}

export const FloatingElements = () => {
  const [elements, setElements] = useState<
    Array<{
      id: number;
      size: number;
      color: string;
      position: { x: string; y: string };
      duration: number;
      delay: number;
      opacity: number;
    }>
  >([]);

  useEffect(() => {
    // Generate 12-15 floating elements with random properties
    const generatedElements = Array.from(
      { length: 12 + Math.floor(Math.random() * 4) },
      (_, i) => ({
        id: i,
        size: 1 + Math.random() * 4,
        color: `rgba(${Math.floor(100 + Math.random() * 155)}, ${Math.floor(
          150 + Math.random() * 105
        )}, 255, ${0.3 + Math.random() * 0.7})`,
        position: {
          x: `${Math.random() * 100}%`,
          y: `${Math.random() * 100}%`,
        },
        duration: 10 + Math.random() * 20,
        delay: Math.random() * 5,
        opacity: 0.3 + Math.random() * 0.7,
      })
    );
    setElements(generatedElements);
  }, []);

  return (
    <>
      {elements.map((element) => (
        <motion.div
          key={element.id}
          initial={{
            opacity: 0,
            x: element.position.x,
            y: element.position.y,
          }}
          animate={{
            opacity: [
              element.opacity * 0.3,
              element.opacity,
              element.opacity * 0.3,
            ],
            x: [
              element.position.x,
              `${parseFloat(element.position.x) + (Math.random() * 20 - 10)}%`,
              element.position.x,
            ],
            y: [
              element.position.y,
              `${parseFloat(element.position.y) + (Math.random() * 20 - 10)}%`,
              element.position.y,
            ],
          }}
          transition={{
            duration: element.duration,
            delay: element.delay,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: `${element.size}px`,
            height: `${element.size}px`,
            backgroundColor: element.color,
            boxShadow: `0 0 ${element.size * 2}px ${element.size}px ${
              element.color
            }`,
            filter: "blur(1px)",
          }}
        />
      ))}

      {/* Special larger animated elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0.2, 0.8, 0.2],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/5 w-4 h-4 rounded-full bg-blue-400/70 pointer-events-none"
        style={{
          boxShadow: "0 0 20px 8px rgba(100, 200, 255, 0.5)",
          filter: "blur(1px)",
        }}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0.1, 0.5, 0.1],
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
        className="absolute bottom-1/3 right-1/4 w-6 h-6 rounded-full bg-indigo-400/50 pointer-events-none"
        style={{
          boxShadow: "0 0 30px 12px rgba(150, 100, 255, 0.4)",
          filter: "blur(1.5px)",
        }}
      />
    </>
  );
};