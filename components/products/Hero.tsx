"use client";

import { motion } from "framer-motion";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { Spotlight } from "../ui/Spotlight";
import { useRouter } from "next/navigation";
import PartnershipForm from "./PartnershipForm";
import { useState } from "react";

export default function Hero() {
    const router = useRouter();
    const [isFormOpen, setIsFormOpen] = useState(false);

    // Scroll to products section
    const scrollToProducts = () => {
      const productsSection = document.getElementById("products");
      productsSection?.scrollIntoView({ behavior: "smooth" });
    };

    // Navigate to partnership page
    const handlePartnerClick = () => {
      router.push("/contact?form=partnership"); // Or your partnership route
    };
  return (
    <section className="w-full relative h-screen flex items-center overflow-hidden bg-gradient-to-br from-black-100 to-black-100">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        {/* <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" /> */}
      </div>

      {/* Enhanced Animated Background */}
      <motion.div
        className="absolute inset-0 w-[200%] h-[200%] overflow-hidden bg-black-100" // Dark bg for contrast
      >
        {/* 🔥 INTENSE CONIC SPIN (Primary Motion) */}
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 6, // Faster spin
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute w-full h-full bg-[conic-gradient(from_0deg,transparent_0%,rgba(59,130,246,0.3)_20%,rgba(59,130,246,0.4)_50%,transparent_60%)]"
        />

        {/* ⚡ PULSING RADIAL GRADIENT (Secondary Motion) */}
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute w-full h-full bg-[radial-gradient(circle,rgba(34,197,94,0.2)_0%,transparent_70%)]"
        />

        {/* 🌟 GLOWING GRID (Subtle Structure) */}
        <motion.div
          animate={{
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 w-full h-full bg-[repeating-linear-gradient(to_right,rgba(234,179,8,0.1)_0px,rgba(234,179,8,0.1)_1px,transparent_1px,transparent_40px),repeating-linear-gradient(to_bottom,rgba(234,179,8,0.1)_0px,rgba(234,179,8,0.1)_1px,transparent_1px,transparent_40px)]"
        />
      </motion.div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold text-white mb-6"
        >
          Pioneering{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-200">
            Tomorrow&apos;s
          </span>{" "}
          Tech
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
        >
          Explore my revolutionary products and sofwares in development. Join on
          the journey from concept to reality.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex gap-4 justify-center"
        >
          {/* View Products Button - Scrolls down */}
          <motion.button
            onClick={scrollToProducts}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-200 px-8 py-3 rounded-full font-semibold flex items-center gap-2"
          >
            View Products <ArrowRightIcon className="w-5 h-5" />
          </motion.button>

          {/* Partner With Us Button - Navigates to contact */}
          <motion.button
            onClick={() => setIsFormOpen(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors"
          >
            Partner With Us
          </motion.button>
        </motion.div>
      </div>
      {/* Partnership Form Modal */}
      <PartnershipForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
      />

      {/* Animated scroll indicator */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="animate-bounce w-8 h-8 text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </motion.div>
    </section>
  );
}
