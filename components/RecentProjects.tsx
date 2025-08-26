"use client";

import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiArrowRight } from "react-icons/fi";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "RDCEMPLOIS Platform",
    description: "High-performance and modern Job board platform",
    tech: ["PHP", "WordPress", "MySQL", "AI", "JavaScript"],
    image: "/projects/rdcemplois.webp",
    github: "#",
    live: "#",
    category: "SaaS",
  },
  {
    id: 2,
    title: "ReviewGenie Platform",
    description: "Online Reputation Management Platform",
    tech: ["React", "React Router", "Node", "TailwindCss", "Express", "MongoDB"],
    image: "/projects/home-reviewgenie.png",
    github: "#",
    live: "#",
    category: "SaaS",
  },
  {
    id: 3,
    title: "SmartPost Optimizer",
    description: "SEO Optimized Content Wordpress Plugin for blogs",
    tech: ["PHP", "MySQL", "WordPress"],
    image: "/favicon-MA.png",
    github: "#",
    live: "#",
    category: "Plugin",
  },
  {
    id: 4,
    title: "UIForge AI Platform",
    description:
      "AI-powered web app that instantly generates high-fidelity, professional-grade UI designs",
    tech: ["Next.js", "React", "Mongodb", "Tailwind", "Express"],
    image: "/favicon-MA.png",
    github: "#",
    live: "#",
    category: "AI Design SaaS",
  },
  {
    id: 5,
    title: "WP CRM Enterprise Plugin",
    description: "AI-powered WordPress CRM Enterprise plugin for business",
    tech: ["PHP", "WordPress", "MySQL"],
    image: "/projects/wp-crm-plugin.webp",
    github: "#",
    live: "#",
    category: "SaaS Plugin",
  },
  {
    id: 6,
    title: "ScreenFlow Pro",
    description:
      "Futuristic Screen Sharing and Video Editing and collaboration App",
    tech: ["Next.js", "React", "Mongodb", "Tailwind", "Express"],
    image: "/favicon-MA.png",
    github: "#",
    live: "#",
    category: "SaaS",
  },
];

export default function RecentProjects() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-black-100 to-black-100"></div>
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 rounded-full bg-lime-500/10 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            The{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-blue-400">
              Inside
            </span>{" "}
            Scoop
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Cutting-edge solutions built with modern technologies
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
              className="group"
            >
              <div className="h-full bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800 hover:border-blue-400/30 transition-all flex flex-col">
                {/* Project image */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 px-3 py-1 bg-gray-900/80 text-xs rounded-full border border-gray-700 text-blue-400">
                    {project.category}
                  </span>
                </div>

                {/* Project content */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-gray-800/50 text-xs rounded border border-gray-700 text-blue-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project links */}
                  <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-800">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      <FiGithub size={16} />
                      <span>Code</span>
                    </motion.a>
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-200 to-blue-300 text-white text-sm font-medium transition-all hover:from-lime-500 hover:to-blue-500"
                    >
                      <FiExternalLink size={16} />
                      <span>Live Demo</span>
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex justify-center"
        >
          <Link
            href="/products"
            className="flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-200 to-blue-300 text-white font-medium hover:from-lime-500 hover:to-blue-500 transition-all group"
          >
            View All Products
            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}