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
  SiDocker,
  SiGit,
  SiBitbucket,
  SiJira,
  SiSlack,
  SiConfluence,
  SiAsana,
  SiNotion,
} from "react-icons/si";
import {
  FaSearch,
  FaServer,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPhp,
  FaBootstrap,
} from "react-icons/fa";
import { GiJigsawBox } from "react-icons/gi"; // For Prestashop
import { TbBrandEdge } from "react-icons/tb"; // For Lead Pages

// Define TypeScript interfaces
interface Skill {
  name: string;
  level: number;
  icon: React.ReactNode;
}

// Foundational skills - core web fundamentals
const foundationalSkills: Skill[] = [
  { name: "HTML5", level: 98, icon: <FaHtml5 className="text-[#E34F26]" /> },
  { name: "CSS3", level: 95, icon: <FaCss3Alt className="text-[#1572B6]" /> },
  { name: "JavaScript", level: 80, icon: <FaJs className="text-[#F7DF1E]" /> },
  {
    name: "jQuery",
    level: 88,
    icon: <GiJigsawBox className="text-[#0769AD]" />,
  },
  { name: "PHP", level: 85, icon: <FaPhp className="text-[#777BB4]" /> },
  {
    name: "Bootstrap",
    level: 90,
    icon: <FaBootstrap className="text-[#7952B3]" />,
  },
  {
    name: "WordPress",
    level: 95,
    icon: <SiWordpress className="text-[#21759B]" />,
  },
  {
    name: "Prestashop",
    level: 75,
    icon: <GiJigsawBox className="text-[#DF0067]" />,
  },
  {
    name: "Dorik CMS",
    level: 80,
    icon: <GiJigsawBox className="text-[#3B82F6]" />,
  },
  {
    name: "Lead Pages",
    level: 82,
    icon: <TbBrandEdge className="text-[#0FBAFF]" />,
  },
  { name: "SEO", level: 90, icon: <FaSearch className="text-emerald-400" /> },
];

// Modern framework skills
const frameworkSkills: Skill[] = [
  { name: "React.js", level: 90, icon: <SiReact className="text-[#61DAFB]" /> },
  { name: "Next.js", level: 85, icon: <SiNextdotjs className="text-white" /> },
  {
    name: "TypeScript",
    level: 88,
    icon: <SiTypescript className="text-[#3178C6]" />,
  },
  {
    name: "Node.js/Express",
    level: 82,
    icon: <SiNodedotjs className="text-[#339933]" />,
  },
  {
    name: "Tailwind CSS",
    level: 92,
    icon: <SiTailwindcss className="text-[#06B6D4]" />,
  } 
];

// DevOps & Collaboration tools
const devopsSkills: Skill[] = [
  { name: "Docker", level: 75, icon: <SiDocker className="text-[#2496ED]" /> },
  { name: "Git", level: 92, icon: <SiGit className="text-[#F05032]" /> },
  {
    name: "Bitbucket",
    level: 85,
    icon: <SiBitbucket className="text-[#0052CC]" />,
  },
  { name: "Jira", level: 88, icon: <SiJira className="text-[#0052CC]" /> },
  { name: "Slack", level: 90, icon: <SiSlack className="text-[#4A154B]" /> },
  {
    name: "Confluence",
    level: 80,
    icon: <SiConfluence className="text-[#172B4D]" />,
  },
  { name: "Asana", level: 82, icon: <SiAsana className="text-[#F06A6A]" /> },
  { name: "Notion", level: 85, icon: <SiNotion className="text-white" /> },
];

// Actively improving skills
const learningSkills: Skill[] = [
  {
    name: "GraphQL",
    level: 80,
    icon: <SiGraphql className="text-[#E10098]" />,
  },
  {
    name: "MongoDB",
    level: 78,
    icon: <SiMongodb className="text-[#47A248]" />,
  },
  {
    name: "Firebase",
    level: 75,
    icon: <SiFirebase className="text-[#FFCA28]" />,
  },
  {
    name: "PostgreSQL",
    level: 78,
    icon: <FaServer className="text-blue-400" />,
  },
];

// Combine for marquee display
const allSkills = [
  ...foundationalSkills,
  ...frameworkSkills,
  ...devopsSkills,
  ...learningSkills,
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
          duration: 25,
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
            From foundational web technologies to modern frameworks and DevOps
            tools
          </p>
        </motion.div>

        {/* Marquee with all skills */}
        <div className="space-y-1 mb-20">
          <MarqueeRow skills={allSkills} />
          <MarqueeRow skills={allSkills} reverse />
        </div>

        {/* Skill categories */}
        <div className="space-y-12">
          {/* Foundational Skills */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="text-2xl font-bold mb-6 flex items-center gap-3"
            >
              <span className="w-4 h-4 rounded-full bg-orange-400 animate-pulse"></span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500">
                Core Web Fundamentals
              </span>
            </motion.h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {foundationalSkills.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </div>
          </div>

          {/* Modern Frameworks */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-2xl font-bold mb-6 flex items-center gap-3"
            >
              <span className="w-4 h-4 rounded-full bg-blue-400 animate-pulse"></span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500">
                Modern Frameworks
              </span>
            </motion.h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {frameworkSkills.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </div>
          </div>

          {/* DevOps & Collaboration */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="text-2xl font-bold mb-6 flex items-center gap-3"
            >
              <span className="w-4 h-4 rounded-full bg-purple-400 animate-pulse"></span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                DevOps & Collaboration
              </span>
            </motion.h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {devopsSkills.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </div>
          </div>

          {/* Actively Improving */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl font-bold mb-6 flex items-center gap-3"
            >
              <span className="w-4 h-4 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">
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
      </div>
    </section>
  );
};

export default Skills;
