"use client";

import { motion } from "framer-motion";
import { FiDownload, FiAward, FiUser, FiCode } from "react-icons/fi";
import { FaSmileWink } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const AboutMe = () => {
  const softSkills = [
    { name: "Problem Solving", icon: "🧩" },
    { name: "Team Collaboration", icon: "🤝" },
    { name: "Adaptability", icon: "🔄" },
    { name: "Communication", icon: "💬" },
    { name: "Creativity", icon: "🎨" },
    { name: "Time Management", icon: "⏱️" },
  ];

  const stats = [
    {
      value: "8+",
      label: "Years Solving Business Challenges",
      icon: <FiAward />,
    },
    {
      value: "50+",
      label: "Successful Client Transformations",
      icon: <FiCode />,
    },
    { value: "100%", label: "Focus On Your ROI", icon: <FiUser /> },
  ];

  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black-100 to-black-100"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            The Mind{" "}
            <span className="bg-gradient-to-r from-blue-400 to-lime-400 bg-clip-text text-transparent">
              Behind Your Success
            </span>
          </h2>
          <div className="w-80 h-1 bg-gradient-to-r from-lime-400 to-blue-300 mx-auto rounded-full" />
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Image Section - Full height and width */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 h-full"
          >
            <div className="relative group w-full h-full min-h-[500px] lg:min-h-[650px]">
              {/* Gradient border effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-teal-400 rounded-2xl opacity-75 blur-sm group-hover:opacity-100 transition-all duration-300" />

              {/* Image container - now with explicit dimensions */}
              <div className="relative rounded-xl overflow-hidden border-2 border-gray-700 w-full h-full min-h-[500px] lg:min-h-[650px]">
                <Image
                  src="/gallery/alex-office.jpg"
                  alt="Strategic Software Engineer & Business Problem Solver - Merveille Alexandre"
                  width={580} // EXACT displayed width
                  height={700}
                  className="object-cover object-center" // Changed from object-top to center
                  quality={75}
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw" // Added responsive sizing
                />
                {/* Gradient overlay with smile icon */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/30 to-transparent flex items-end justify-end p-6">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 3 }}
                    className="text-yellow-400 text-3xl"
                  >
                    <FaSmileWink />
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 space-y-8"
          >
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                From Complex Business Problems <br />- To Scalable Technical
                Solutions
              </h3>
              <p className="text-gray-300 leading-relaxed">
                I transform business challenges into competitive advantages
                through strategic software engineering. With over 8 years of
                experience, I don&apos;t just write code—I solve the operational
                inefficiencies, scalability bottlenecks, and revenue-limiting
                problems that hold businesses back. My approach combines
                technical expertise with deep business understanding to deliver
                solutions that drive measurable growth.
              </p>
            </div>

            {/* Soft Skills */}
            <div>
              <h4 className="text-xl font-semibold text-white mb-4">
                How I Deliver Exceptional Results
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {softSkills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2 bg-gray-800/50 backdrop-blur-sm p-3 rounded-lg border border-gray-700"
                  >
                    <span className="text-xl">{skill.icon}</span>
                    <span className="text-gray-200 text-sm">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Stats */}
            {/* <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                  viewport={{ once: true }}
                  className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg border border-gray-700 text-center"
                >
                  <div className="text-blue-400 text-2xl mb-2 flex justify-center">
                    {stat.icon}
                  </div>
                  <h4 className="text-white text-xl font-bold">{stat.value}</h4>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div> */}

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-4 pt-4"
            >
              {/* Learn More Button - Links to About Page */}
              <Link href="/about" passHref legacyBehavior>
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-teal-500 text-white font-medium shadow-lg hover:shadow-blue-500/30 transition-all cursor-pointer"
                >
                  <FiUser /> Get to know me
                </motion.a>
              </Link>

              {/* Download CV Button - Downloads PDF */}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => {
                  // Create a temporary anchor element to trigger download
                  const link = document.createElement("a");
                  link.href = "/placeholder-cv.pdf"; // Replace with your actual PDF path
                  link.download = "Your-Name-CV.pdf"; // Suggested filename for download
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                className="flex items-center gap-2 px-6 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white font-medium hover:bg-gray-700 transition-all"
              >
                <FiDownload /> Download CV
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;