'use client';

import { motion } from "framer-motion";
import { TextGenerateEffect } from "../ui/TextGenerateEffect";
import { Spotlight } from "../ui/Spotlight";
import { TwinklingStar } from "../ui/TwinklingStar";
import { FloatingElements } from "../projects/Hero";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative h-screen py-20 flex items-center justify-center">
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
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          className="w-full h-full object-cover opacity-20" // Reduced opacity for readability
        >
          <source src="/videos/web-design-vid.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black-100 bg-opacity-90"></div>
      </div>

      <TwinklingStar />
      <FloatingElements />

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white px-8 pt-28 max-w-[89vw] md:max-w-2xl lg:max-w-[70vw] flex flex-col items-center justify-center">
        <div className="inline-flex mt-20 py-2 px-3 bg-gradient-to-r from-blue-300 to-blue-200 rounded-full font-semibold">
          <p className="uppercase tracking-widest text-xs text-center text-neutral-950">
            {/* text-blue-100 max-w-82 */}
            About <span className="font-semibold text-blue-100">Me</span>
          </p>
        </div>
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <TextGenerateEffect
            words=" Software Engineer & Fullstack Web Developer"
            className="text-center text-[40px] md:text-5xl lg:text-6xl font-bold mb-4"
          />
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mb-4 text-sm md:text-lg lg:text-2xl"
        >
          Great design is not just how it looks, but how it works. I code with
          purpose, craft with passion, and create experiences that leave an
          impact.
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
              href="/projects"
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
              Hire Me Now
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
      <TwinklingStar />
    </section>
  );
};

export default HeroSection;
