import React from "react";
import { motion } from "framer-motion";

const skills = [
  "React.js",
  "Next.js",
  "TypeScript",
  "Node.js",
  "MongoDB",
  "Tailwind CSS",
  "GraphQL",
  "Firebase",
  "Redux",
  "SEO",
  "WordPress",
  "SaaS Development",
  "Web Apps",
];

const marqueeVariants = {
  animate: {
    x: ["0%", "-100%"],
    transition: {
      repeat: Infinity,
      repeatType: "loop",
      duration: 10,
      ease: "linear",
    },
  },
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 bg-gray-900 text-white overflow-hidden"
    >
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold">
          My <span className="text-lime-400">Skills</span>
        </h2>
        <div className="mt-10 space-y-6">
          {/* First Row */}
          <motion.div
            variants={marqueeVariants}
            animate="animate"
            className="flex space-x-6 whitespace-nowrap"
          >
            {skills.map((skill, index) => (
              <span
                key={index}
                className="bg-gray-800 px-6 py-2 rounded-lg text-lime-400 font-semibold shadow-lg"
              >
                {skill}
              </span>
            ))}
          </motion.div>

          {/* Second Row (Opposite Direction) */}
          <motion.div
            variants={{
              animate: {
                x: ["-100%", "0%"],
                transition: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 10,
                  ease: "linear",
                },
              },
            }}
            className="flex space-x-6 whitespace-nowrap"
          >
            {skills.map((skill, index) => (
              <span
                key={index}
                className="bg-gray-800 px-6 py-2 rounded-lg text-lime-400 font-semibold shadow-lg"
              >
                {skill}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
