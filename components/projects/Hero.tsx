"use client";
import { motion, useAnimate } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Spotlight } from "../ui/Spotlight";
import { TextGenerateEffect } from "../ui/TextGenerateEffect";
import {
  FaArrowRight,
  FaCode,
  FaRocket,
  FaShieldAlt,
  FaChartLine,  
  FaStar,
  FaAward,
} from "react-icons/fa";

export function Hero() {
  const [leftPictureScope, leftPictureAnimate] = useAnimate();
  const [rightPictureScope, rightPictureAnimate] = useAnimate();
  const [statsScope, statsAnimate] = useAnimate();

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

    statsAnimate([
      [statsScope.current, { opacity: 1 }, { duration: 0.5, delay: 2 }],
    ]);
  }, []);

  return (
    <section className="relative min-h-screen py-20 overflow-hidden">
      {/* Background with subtle animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950"
      />

      {/* Left and Right Pictures */}
      <motion.div
        ref={leftPictureScope}
        initial={{ opacity: 0, y: 100, x: -100 }}
        className="absolute -left-60 w-[30%] h-[380px] bottom-10 rounded-3xl p-2 hidden lg:block"
      >
        <div className="relative w-full h-full">
          <img
            src="/dashboard.jpeg"
            alt="Web applications dashboard"
            className="w-full h-full object-cover p-2 bg-gray-800 border border-blue-500/30 rounded-3xl shadow-2xl relative z-10"
            draggable="false"
          />
          <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-lime-500/20 flex items-center justify-center backdrop-blur-sm border border-lime-500/30">
            <FaCode className="text-lime-400 text-lg" />
          </div>
        </div>
      </motion.div>

      <motion.div
        ref={rightPictureScope}
        initial={{ opacity: 0, x: 100, y: 100 }}
        className="absolute -right-64 w-[30%] h-[380px] top-120 rounded-3xl p-2 hidden lg:block"
      >
        <div className="relative w-full h-full">
          <img
            src="/realestate-dark.jpg"
            alt="Modern real estate platform"
            className="w-full h-full object-cover p-2 bg-gray-800 border border-lime-500/30 rounded-3xl shadow-2xl relative z-10"
            draggable="false"
          />
          <div className="absolute -bottom-4 -left-4 w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center backdrop-blur-sm border border-blue-500/30">
            <FaRocket className="text-blue-400 text-lg" />
          </div>
        </div>
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
          {/* Trust badges */}
          <div            
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500/10 to-lime-500/10 px-4 py-1 mb-6 border border-blue-500/20 backdrop-blur-sm"
          >
            <FaStar className="text-yellow-400 text-xs" />
            <span className="text-xs font-medium text-blue-300">
              8+ Years of Excellence
            </span>
            <FaAward className="text-yellow-400 text-xs" />
          </div>

          {/* Animated headline */}
          <h1            
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            <TextGenerateEffect
              words="Transform Your Vision Into Digital Excellence"
              className="text-center text-[40px] md:text-5xl lg:text-6xl font-bold mb-4"
            />
          </h1>

          {/* Animated subtitle */}
          <p            
            className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            I transform complex business challenges into powerful digital
            solutions. With 8+ years of experience, I deliver high-performance
            applications that drive growth, automate operations, and create
            competitive advantages.
          </p>

          {/* Value proposition grid */}
          <div
            ref={statsScope}            
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10"
          >
            {[              
              { icon: FaRocket, label: "Avg. Performance Gain", value: "85%" },
              { icon: FaShieldAlt, label: "Client Satisfaction", value: "98%" },
              { icon: FaChartLine, label: "Revenue Growth", value: "3.2x" },
            ].map((stat, index) => (
              <div
                key={index}                
                className="p-3 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700"
              >
                <stat.icon className="mx-auto mb-2 text-lime-400" />
                <p className="text-lg font-bold text-white">{stat.value}</p>
                <p className="text-xs text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Button group with staggered animation */}
          <div            
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="#projects"
                className="group inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40"
                aria-label="View my projects"
              >
                Explore My Portfolio
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/courses"
                className="group inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white bg-gradient-to-r from-lime-600 to-lime-700 rounded-lg hover:from-lime-700 hover:to-lime-800 transition-all duration-300 shadow-lg shadow-lime-500/25 hover:shadow-lime-500/40"
                aria-label="View my courses"
              >
                Browse Professional Training
                <svg
                  className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-gray-200 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-all duration-300 border border-gray-700 hover:border-blue-500/30 backdrop-blur-sm"
                aria-label="Contact me"
              >
                Discuss Your Project
              </Link>
            </motion.div>
          </div>
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
          150 + Math.random() * 105,
        )}, 255, ${0.3 + Math.random() * 0.7})`,
        position: {
          x: `${Math.random() * 100}%`,
          y: `${Math.random() * 100}%`,
        },
        duration: 10 + Math.random() * 20,
        delay: Math.random() * 5,
        opacity: 0.3 + Math.random() * 0.7,
      }),
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
          boxShadow: "0 0 20px 8px rgba(59, 130, 246, 0.3)",
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
        className="absolute bottom-1/3 right-1/4 w-6 h-6 rounded-full bg-lime-400/40 pointer-events-none"
        style={{
          boxShadow: "0 0 30px 12px rgba(132, 204, 22, 0.2)",
          filter: "blur(1.5px)",
        }}
      />
    </>
  );
};
