"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  FiHeart,
  FiArrowUpRight,
  FiMail,
  FiMapPin,
  FiClock,  
  FiZap,
  FiCpu,
} from "react-icons/fi";
import {
  FaReact,
  FaNodeJs,  
  FaGithub,
  FaLinkedin,
  FaXTwitter,
  FaDiscord,  
} from "react-icons/fa6";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiWordpress,
  SiTypescript,  
  SiDocker,  
  SiGraphql,
  SiPrisma,
  SiVercel,
  SiGit,
  SiMysql,
} from "react-icons/si";
import MagicButton from "./MagicButton";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";

const FooterGrid = () => {
  const currentYear = new Date().getFullYear();
  const footerRef = useRef<HTMLDivElement>(null);

  // Parallax scroll effects
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 1, 0.8]);

  // Quick links data
  const quickLinks = [
    {
      href: "/about",
      label: "About Me",
      icon: "👤",
      color: "from-blue-400 to-blue-500",
    },
    {
      href: "/projects",
      label: "Projects",
      icon: "🚀",
      color: "from-lime-400 to-lime-500",
    },
    {
      href: "/solutions",
      label: "Solutions & Pricing",
      icon: "💼",
      color: "from-blue-400 to-lime-500",
    },
    {
      href: "/courses",
      label: "Courses",
      icon: "📚",
      color: "from-lime-400 to-lime-500",
    },
    {
      href: "/products",
      label: "Products",
      icon: "📦",
      color: "from-lime-400 to-blue-500",
    },
    {
      href: "/gallery",
      label: "Gallery",
      icon: "🎨",
      color: "from-blue-400 to-blue-500",
    },
    {
      href: "/resources",
      label: "Resources",
      icon: "📚",
      color: "from-lime-400 to-blue-500",
    },
    {
      href: "/contact",
      label: "Contact",
      icon: "📞",
      color: "from-blue-400 to-lime-500",
    },
  ];

  // Tech stack data with categories
  const techStacks = {
    frontend: [
      { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
    ],
    backend: [
      { name: "Node.js", icon: FaNodeJs, color: "#339933" },
      { name: "Express", icon: SiExpress, color: "#FFFFFF" },
      { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
      { name: "Prisma", icon: SiPrisma, color: "#2D3748" },
    ],
    database: [
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "WordPress", icon: SiWordpress, color: "#21759B" },
    ],
    devops: [
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "CI/CD", icon: FiCpu, color: "#84CC16" },
      { name: "Vercel", icon: SiVercel, color: "#FFFFFF" },
    ],
  };

  // Social links with proper icons
  const socialLinks = [
    {
      icon: FaGithub,
      href: "https://github.com/AlexGMAY",
      label: "GitHub",
      color: "#333",
    },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/alexandre-merveille-may/",
      label: "LinkedIn",
      color: "#0A66C2",
    },
    {
      icon: FaXTwitter,
      href: "https://twitter.com/themarvelbiz",
      label: "X (Twitter)",
      color: "#1DA1F2",
    },
    {
      icon: FaDiscord,
      href: "https://discord.gg/KXfxMWT4G",
      label: "Discord",
      color: "#5865F2",
    },    
  ];

  return (
    <footer
      ref={footerRef}
      className="relative bg-gradient-to-b from-gray-950 via-gray-900 to-black overflow-hidden"
    >
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      {/* Gradient orbs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[128px] opacity-30 animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-lime-500/20 rounded-full blur-[128px] opacity-30 animate-pulse" />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-500/20 rounded-full"
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
              scale: 0,
            }}
            animate={{
              y: [null, "-30%"],
              scale: [0, 1, 0],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 10 + Math.random() * 20,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Contact CTA - Enterprise Grade */}
        <motion.div
          style={{ y, opacity }}
          className="relative py-16 md:py-24 border-b border-white/10"
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-lime-500/10 border border-blue-500/20 mb-8"
            >
              <FiZap className="text-lime-400" />
              <span className="text-sm font-medium text-blue-300">
                Let&apos;s Build Something Great
              </span>
            </motion.div>

            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-lime-400 bg-clip-text text-transparent">
                Ready to transform
              </span>
              <br />
              <span className="text-white">
                your digital vision into reality?
              </span>
            </motion.h2>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto"
            >
              Whether you&apos;re starting a new project, need technical
              consultation, or want to discuss potential opportunities — I&apos;m
              here to help.
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a href="mailto:consultus@gemsalex.com" className="group">
                <MagicButton
                  title="Start a Conversation"
                  icon={<FiMail />}
                  position="left"
                  otherClasses="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-semibold shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/35 transition-all"
                />
              </a>
              <Link href="/contact" className="group">
                <MagicButton
                  title="View Contact Options"
                  icon={<FiArrowUpRight />}
                  position="right"
                  otherClasses="bg-gradient-to-r from-lime-600 to-lime-700 hover:from-lime-700 hover:to-lime-800 text-white px-8 py-4 rounded-xl font-semibold shadow-lg shadow-lime-600/25 hover:shadow-xl hover:shadow-lime-600/35 transition-all"
                />
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Main Footer Grid */}
        <div className="py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand Column - 4 cols */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-16 h-16">
                <Image
                  src="/logo-MA.png"
                  alt="Merveille Alexander - Strategic Software Engineer"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-lime-400 bg-clip-text text-transparent">
                  Merveille Alexander
                </h3>
                <p className="text-sm text-gray-500">
                  Strategic Software Engineer
                </p>
              </div>
            </div>

            <p className="text-gray-400 mb-8 leading-relaxed">
              Engineering high-performance digital solutions with 8+ years of
              enterprise experience. Specializing in scalable architectures,
              performance optimization, and transformative user experiences.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/20 transition-all">
                  <FiMail className="text-blue-400 text-sm" />
                </div>
                <a
                  href="mailto:consultus@gemsalex.com"
                  className="text-sm hover:text-blue-400 transition"
                >
                  consultus@gemsalex.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <div className="w-8 h-8 rounded-lg bg-lime-500/10 border border-lime-500/20 flex items-center justify-center">
                  <FiMapPin className="text-lime-400 text-sm" />
                </div>
                <span className="text-sm">
                  Tunis, Tunisia · Remote Worldwide
                </span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                  <FiClock className="text-blue-400 text-sm" />
                </div>
                <span className="text-sm">Available for new opportunities</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative group"
                  aria-label={social.label}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-lime-500 rounded-lg opacity-0 group-hover:opacity-100 blur transition-opacity" />
                  <div className="relative w-10 h-10 rounded-lg bg-gray-800/50 border border-gray-700 flex items-center justify-center hover:border-transparent transition-all">
                    <social.icon
                      className="text-gray-400 group-hover:text-white transition-colors"
                      size={18}
                    />
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links - 2 cols */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <h4 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
              <span className="w-1 h-5 bg-gradient-to-b from-blue-400 to-lime-400 rounded-full" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className="group flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
                  >
                    <span
                      className={`w-6 h-6 rounded-lg bg-gradient-to-r ${link.color} bg-opacity-10 flex items-center justify-center text-xs group-hover:scale-110 transition-transform`}
                    >
                      {link.icon}
                    </span>
                    <span className="text-sm group-hover:translate-x-1 transition-transform">
                      {link.label}
                    </span>
                    <FiArrowUpRight className="opacity-0 group-hover:opacity-100 transition-all text-xs ml-auto" />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Tech Stack - 6 cols */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6"
          >
            <h4 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
              <span className="w-1 h-5 bg-gradient-to-b from-lime-400 to-blue-400 rounded-full" />
              Enterprise Technology Stack
            </h4>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {/* Frontend */}
              <div className="space-y-3">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                  Frontend
                </p>
                {techStacks.frontend.map((tech, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ x: 5 }}
                    className="group flex items-center gap-2 p-2 rounded-lg hover:bg-white/5 transition-colors"
                  >
                    <tech.icon
                      className="text-lg"
                      style={{ color: tech.color }}
                    />
                    <span className="text-sm text-gray-400 group-hover:text-white transition">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Backend */}
              <div className="space-y-3">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                  Backend
                </p>
                {techStacks.backend.map((tech, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ x: 5 }}
                    className="group flex items-center gap-2 p-2 rounded-lg hover:bg-white/5 transition-colors"
                  >
                    <tech.icon
                      className="text-lg"
                      style={{ color: tech.color }}
                    />
                    <span className="text-sm text-gray-400 group-hover:text-white transition">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Database */}
              <div className="space-y-3">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                  Database
                </p>
                {techStacks.database.map((tech, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ x: 5 }}
                    className="group flex items-center gap-2 p-2 rounded-lg hover:bg-white/5 transition-colors"
                  >
                    <tech.icon
                      className="text-lg"
                      style={{ color: tech.color }}
                    />
                    <span className="text-sm text-gray-400 group-hover:text-white transition">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* DevOps */}
              <div className="space-y-3">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                  DevOps
                </p>
                {techStacks.devops.map((tech, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ x: 5 }}
                    className="group flex items-center gap-2 p-2 rounded-lg hover:bg-white/5 transition-colors"
                  >
                    <tech.icon
                      className="text-lg"
                      style={{ color: tech.color }}
                    />
                    <span className="text-sm text-gray-400 group-hover:text-white transition">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Enterprise Badges */}
            <div className="mt-6 flex flex-wrap gap-3 pt-4 border-t border-white/5">
              <span className="px-3 py-1 text-xs font-medium bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20">
                Scalable Architecture
              </span>
              <span className="px-3 py-1 text-xs font-medium bg-lime-500/10 text-lime-400 rounded-full border border-lime-500/20">
                Performance Optimized
              </span>
              <span className="px-3 py-1 text-xs font-medium bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20">
                Security First
              </span>
              <span className="px-3 py-1 text-xs font-medium bg-lime-500/10 text-lime-400 rounded-full border border-lime-500/20">
                Cloud Native
              </span>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative py-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-sm text-gray-500 order-2 md:order-1">
            © {currentYear} Merveille Alexander. All rights reserved.
          </p>

          <div className="flex items-center gap-6 order-1 md:order-2">
            <Link
              href="/privacy"
              className="text-xs text-gray-500 hover:text-white transition-colors"
            >
              Privacy
            </Link>
            <span className="text-gray-600">•</span>
            <Link
              href="/terms"
              className="text-xs text-gray-500 hover:text-white transition-colors"
            >
              Terms
            </Link>
            <span className="text-gray-600">•</span>
            {/* <Link
              href="/sitemap"
              className="text-xs text-gray-500 hover:text-white transition-colors"
            >
              Sitemap
            </Link> */}
          </div>

          <div className="flex items-center gap-2 text-xs text-gray-600 order-3">
            <span>Built with</span>
            <FiHeart className="text-red-400 animate-pulse" />
            <span>using</span>
            <FaReact className="text-cyan-400" />
            <SiNextdotjs className="text-white" />
          </div>
        </motion.div>
      </div>

      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-lime-500 to-blue-500 origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />
    </footer>
  );
};

export default FooterGrid;
