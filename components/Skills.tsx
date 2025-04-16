"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiMongodb,
  SiTailwindcss,
  SiGraphql,
  SiFirebase,
  SiRedux,
  SiWordpress,
} from "react-icons/si";
import { FaSearch, FaServer, FaLaptopCode } from "react-icons/fa";

// Define TypeScript interfaces
interface Skill {
  name: string;
  level: number;
  icon: React.ReactNode;
}

const masteredSkills: Skill[] = [
  { name: "React.js", level: 90, icon: <SiReact className="text-[#61DAFB]" /> },
  { name: "Next.js", level: 85, icon: <SiNextdotjs className="text-white" /> },
  {
    name: "TypeScript",
    level: 88,
    icon: <SiTypescript className="text-[#3178C6]" />,
  },
  {
    name: "Node.js",
    level: 82,
    icon: <SiNodedotjs className="text-[#339933]" />,
  },
  {
    name: "MongoDB",
    level: 78,
    icon: <SiMongodb className="text-[#47A248]" />,
  },
  {
    name: "Tailwind CSS",
    level: 92,
    icon: <SiTailwindcss className="text-[#06B6D4]" />,
  },
  {
    name: "GraphQL",
    level: 80,
    icon: <SiGraphql className="text-[#E10098]" />,
  },
  { name: "Redux", level: 85, icon: <SiRedux className="text-[#764ABC]" /> },
  {
    name: "Web Apps",
    level: 88,
    icon: <FaLaptopCode className="text-lime-400" />,
  },
];

const learningSkills: Skill[] = [
  {
    name: "Firebase",
    level: 75,
    icon: <SiFirebase className="text-[#FFCA28]" />,
  },
  { name: "SEO", level: 70, icon: <FaSearch className="text-emerald-400" /> },
  {
    name: "WordPress",
    level: 65,
    icon: <SiWordpress className="text-[#21759B]" />,
  },
  {
    name: "SaaS Development",
    level: 75,
    icon: <FaServer className="text-blue-400" />,
  },
];

interface MarqueeRowProps {
  skills: Skill[];
  reverse?: boolean;
}

const MarqueeRow: React.FC<MarqueeRowProps> = ({ skills, reverse = false }) => {
  return (
    <div className="relative overflow-hidden">
      {/* Gradient fade effect */}
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-black-100 to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-black-100 to-transparent z-10" />

      <motion.div
        className="flex py-4"
        animate={{
          x: reverse ? ["0%", "-100%"] : ["-100%", "0%"],
        }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        }}
      >
        {[...skills, ...skills].map((skill, index) => (
          <div
            key={`${skill.name}-${index}`}
            className="mx-2 flex-shrink-0 px-6 py-3 rounded-xl bg-gradient-to-r from-gray-800 to-gray-700 border border-gray-700 shadow-lg flex items-center gap-3"
          >
            <div className="text-xl">{skill.icon}</div>
            <span className="text-white font-medium">{skill.name}</span>
            <div className="w-2 h-2 rounded-full bg-lime-400 animate-pulse" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const SkillCard: React.FC<{ skill: Skill }> = ({ skill }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-xl border border-gray-700 hover:border-lime-400/30 transition-all group"
    >
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-3">
          <div className="text-2xl group-hover:scale-110 transition-transform">
            {skill.icon}
          </div>
          <span className="font-medium text-white">{skill.name}</span>
        </div>
        <span className="text-lime-400 text-sm font-mono">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 1, delay: 0.2 }}
          className="h-full rounded-full bg-gradient-to-r from-lime-400 to-emerald-500"
        />
      </div>
    </motion.div>
  );
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 overflow-hidden relative">
      {/* Gradient background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-lime-400/30 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 rounded-full bg-blue-400/20 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-emerald-500">
              Expertise
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Technologies I've mastered and those I'm actively improving
          </p>
        </motion.div>

        <div className="space-y-1 mb-20">
          <MarqueeRow skills={[...masteredSkills, ...learningSkills]} />
          <MarqueeRow skills={[...masteredSkills, ...learningSkills]} reverse />
        </div>

        {/* Skill level indicators */}
        <div className="space-y-12">
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-2xl font-bold mb-6 flex items-center gap-3"
            >
              <span className="w-4 h-4 rounded-full bg-lime-400 animate-pulse"></span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-emerald-500">
                Mastered Technologies
              </span>
            </motion.h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {masteredSkills.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </div>
          </div>

          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl font-bold mb-6 flex items-center gap-3"
            >
              <span className="w-4 h-4 rounded-full bg-blue-400 animate-pulse"></span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500">
                Actively Improving
              </span>
            </motion.h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {learningSkills.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </div>
          </div>
        </div>

        {/* Surprise element - Skill level visualization */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-20 bg-gray-800/30 backdrop-blur-md p-6 rounded-2xl border border-gray-700"
        >
          <h4 className="text-xl font-semibold mb-4 text-center text-gray-300">
            Skill Distribution
          </h4>
          <div className="flex flex-wrap justify-center gap-2">
            {[...masteredSkills, ...learningSkills].map((skill) => (
              <motion.div
                key={skill.name}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", bounce: 0.4 }}
                whileHover={{ scale: 1.05 }}
                style={{
                  width: `${skill.level * 0.8}px`,
                  height: `${skill.level * 0.8}px`,
                }}
                className={`rounded-full flex items-center justify-center border-2 ${
                  skill.level > 85
                    ? "border-lime-400 bg-lime-400/10"
                    : skill.level > 75
                    ? "border-emerald-400 bg-emerald-400/10"
                    : "border-blue-400 bg-blue-400/10"
                }`}
                title={`${skill.name}: ${skill.level}%`}
              >
                <span className="text-xs font-bold text-white opacity-80">
                  {skill.level}
                </span>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-gray-400 mt-4 text-sm">
            Bubble size represents proficiency level
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
