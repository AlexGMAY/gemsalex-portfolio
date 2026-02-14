"use client";

import { motion } from "framer-motion";
import { FiUser, FiTarget } from "react-icons/fi";
import { FaLightbulb, FaRocket } from "react-icons/fa";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section
      id="my-story"
      className="py-24 relative"
    >
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-lime-400"
            style={{
              width: Math.random() * 10 + 5 + "px",
              height: Math.random() * 10 + 5 + "px",
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
            }}
            animate={{
              y: [0, (Math.random() - 0.5) * 100],
              x: [0, (Math.random() - 0.5) * 100],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 15 + Math.random() * 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-emerald-500">
            Beyond the Code
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            From concept to deployment — I turn complex business challenges into
            scalable, maintainable software solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8"
          >
            {/* Who Am I Card */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-black-200 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-lime-400/50 transition-all duration-300 shadow-lg"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-lime-400/10 text-lime-400">
                  <FiUser className="text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-white">Who I Am</h3>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                I&apos;m{" "}
                <span className="text-lime-400 font-semibold">
                  Merveille Alexandre
                </span>
                , a software engineer with{" "}
                <span className="text-white font-semibold">8+ years</span> of
                experience transforming complex business challenges into elegant
                technical solutions. I don&apos;t just build software — I
                architect Websites and web apps that fundamentally change how
                businesses operate, removing perceived limitations and revealing
                possibilities that were always there, waiting to be unlocked.
              </p>
            </motion.div>

            {/* My Philosophy Card - The "No Spoon" Philosophy */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-black-200 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-blue-400/50 transition-all duration-300 shadow-lg"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-blue-400/10 text-blue-400">
                  <FaLightbulb className="text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  The Architecture of Possibility
                </h3>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                Every business constraint you perceive is, in reality, an
                opportunity waiting to be reshaped. My philosophy centers on
                looking beyond surface-level limitations to understand the
                fundamental structure of your challenges. By changing how you
                perceive your technical obstacles, I help you see that what once
                seemed impossible isn&apos;t just possible — it&apos;s already
                within your reach, needing only the right engineering
                perspective to bring it to life.
              </p>
            </motion.div>

            {/* My Mission Card */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-black-200 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-yellow-400/50 transition-all duration-300 shadow-lg"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-purple-400/10 text-purple-400">
                  <FiTarget className="text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Engineering Impact
                </h3>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                My mission is to bridge the gap between what you believe is
                possible and what technology can actually deliver. I work with
                forward-thinking businesses to deconstruct complex problems,
                rebuild them with scalable architecture, and deploy solutions
                that drive measurable growth. Whether optimizing operations,
                scaling user experiences, or building from the ground up — I
                help you reshape the reality of what your business can achieve.
              </p>
            </motion.div>
          </motion.div>

          {/* Visual Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-lime-400 to-emerald-400 rounded-3xl opacity-20 blur-xl"></div>
            <div className="relative bg-gray-800 rounded-3xl overflow-hidden border border-gray-700 shadow-2xl">
              <Image
                src="/gallery/alex-desk.jpg"
                alt="Merveille Alexandre - Senior Software Engineer and Instructor"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
                priority
              />

              {/* Experience Badge */}
              <div className="absolute bottom-6 right-6 bg-gradient-to-br from-lime-600 to-emerald-600 p-6 rounded-2xl shadow-lg text-center backdrop-blur-sm bg-opacity-90">
                <div className="flex items-center justify-center gap-2">
                  <FaRocket className="text-3xl text-white" />
                  <span className="text-5xl font-bold text-white">8+</span>
                </div>
                <p className="text-white font-semibold mt-2 text-lg">
                  Years Engineering Impact
                </p>
              </div>

              {/* Floating philosophy badge */}
              <div className="absolute top-6 left-6">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 }}
                  className="px-4 py-2 bg-black/70 backdrop-blur-sm rounded-full border border-lime-400/30"
                >
                  <span className="text-sm text-lime-400 font-medium">
                    ✦ Architecture without limits
                  </span>
                </motion.div>
              </div>

              {/* Tech stack badges - repositioned */}
              <div className="absolute bottom-6 left-6 flex flex-wrap gap-2 max-w-[200px]">
                {[
                  "React",
                  "Node.js",
                  "TypeScript",
                  "AWS",
                  "System Architecture",
                ].map((tech, i) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9 + i * 0.1 }}
                    className="px-3 py-1 bg-gray-900/80 backdrop-blur-sm rounded-full text-xs text-white border border-gray-700"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Trust-building micro-copy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 text-sm max-w-3xl mx-auto border-t border-gray-800 pt-8">
            <span className="text-lime-400 font-semibold">✦</span> Every system
            I build begins with a simple question: &quots;What would this look
            like if the perceived limitations didn&apos;t exist?&quots; The
            answer reveals the architecture that was always possible — I just
            help you see it.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
