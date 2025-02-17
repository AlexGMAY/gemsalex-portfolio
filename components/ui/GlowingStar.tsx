"use client";

import { motion } from "framer-motion";

const GlowingStar = () => {
  return (
    <motion.div
      className="relative flex items-center justify-center"
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.9, 1, 0.9],
        filter: [
          "drop-shadow(0px 0px 8px rgba(253, 224, 71, 0.5))",
          "drop-shadow(0px 0px 20px rgba(253, 224, 71, 1))",
          "drop-shadow(0px 0px 8px rgba(253, 224, 71, 0.5))",
        ],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {/* Star Shape */}
      <div className="relative w-12 h-12">
        <div className="absolute inset-0 flex justify-center items-center">
          <svg
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-yellow-400 drop-shadow-lg"
          >
            <polygon points="12,2 15,9 22,9 16,14 18,22 12,17 6,22 8,14 2,9 9,9" />
          </svg>
        </div>

        {/* Outer Glow */}
        <div className="absolute inset-0 w-full h-full bg-yellow-300 blur-2xl opacity-30"></div>
        <div className="absolute inset-0 w-full h-full bg-yellow-500 blur-lg opacity-50"></div>
        <div className="absolute inset-0 w-full h-full bg-yellow-200 blur-sm opacity-70"></div>

        {/* Radiating Beams */}
        <div className="absolute w-full h-full">
          <div className="absolute w-24 h-0.5 bg-yellow-400 rotate-45 left-1/2 -translate-x-1/2 opacity-60"></div>
          <div className="absolute w-24 h-0.5 bg-yellow-400 -rotate-45 left-1/2 -translate-x-1/2 opacity-60"></div>
          <div className="absolute h-24 w-0.5 bg-yellow-400 top-1/2 -translate-y-1/2 opacity-60"></div>
          <div className="absolute h-24 w-0.5 bg-yellow-400 rotate-90 top-1/2 -translate-y-1/2 opacity-60"></div>
        </div>
      </div>
    </motion.div>
  );
};

export default GlowingStar;
