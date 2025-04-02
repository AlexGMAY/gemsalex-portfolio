"use client";

import { motion } from "framer-motion";
import { FaCode, FaRocket, FaMedal } from "react-icons/fa";
import { GiTunisia } from "react-icons/gi";

export default function HeroSection() {
  return (
    <section className="relative text-white bg-gradient-to-br from-blue-900 to-gray-900 py-20 overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2 }}
        className="absolute top-0 left-0 w-full h-full overflow-hidden"
      >
        <div className="absolute top-20 left-10 w-40 h-40 bg-blue-600 rounded-full filter blur-3xl opacity-70"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-red-600 rounded-full filter blur-3xl opacity-50"></div>
        <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-yellow-500 rounded-full filter blur-3xl opacity-40"></div>
      </motion.div>

      <div className="container mx-auto px-6 relative z-10 pt-24">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left content */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-6 flex items-center gap-2"
            >
              <div className="flex items-center bg-blue-800/30 border border-blue-600 rounded-full px-4 py-1">
                <GiTunisia className="text-red-500 mr-2" />
                <span className="text-sm font-medium">Tunisian Excellence</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              Premium Development <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
                Fair Pricing
              </span>
            </motion.h1>

            <motion.p
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg"
            >
              With 8+ years of experience, I deliver enterprise-grade solutions
              at freelancer rates. Quality code that scales, tailored to your
              budget.
            </motion.p>

            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg font-medium hover:from-blue-700 hover:to-cyan-600 transition-all shadow-lg">
                View Pricing Plans
              </button>
              <button className="px-8 py-3 border border-blue-400 text-blue-100 rounded-lg font-medium hover:bg-blue-900/30 transition-all">
                Case Studies
              </button>
            </motion.div>
          </div>

          {/* Right content - Value cards */}
          <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-blue-500 transition-all"
            >
              <div className="text-blue-400 mb-4">
                <FaCode className="text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-2">Clean Code</h3>
              <p className="text-gray-300">
                Production-ready code with comprehensive documentation and
                tests.
              </p>
            </motion.div>

            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-red-500 transition-all"
            >
              <div className="text-red-400 mb-4">
                <GiTunisia className="text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-2">Local Advantage</h3>
              <p className="text-gray-300">
                Tunisian quality with international standards at competitive
                rates.
              </p>
            </motion.div>

            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-yellow-500 transition-all"
            >
              <div className="text-yellow-400 mb-4">
                <FaRocket className="text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-2">Fast Delivery</h3>
              <p className="text-gray-300">
                Optimized workflows deliver projects 30% faster than industry
                average.
              </p>
            </motion.div>

            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-green-500 transition-all"
            >
              <div className="text-green-400 mb-4">
                <FaMedal className="text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-2">Proven Results</h3>
              <p className="text-gray-300">
                50+ successful projects with measurable business impact.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Animated scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          y: [0, 10, 0],
        }}
        transition={{
          delay: 1.5,
          duration: 2,
          repeat: Infinity,
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center">
          <motion.div
            animate={{
              y: [0, 5, 0],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
            className="w-1 h-2 bg-blue-400 rounded-full mt-2"
          ></motion.div>
        </div>
      </motion.div>
    </section>
  );
}
