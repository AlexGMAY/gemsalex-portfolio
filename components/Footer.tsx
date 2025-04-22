"use client";

import { motion } from "framer-motion";
import {
  FiGithub,
  FiTwitter,
  FiLinkedin,
  FiMail,
  FiHeart,
} from "react-icons/fi";
import { FaReact, FaNodeJs, FaLocationArrow } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
import MagicButton from "./MagicButton";
import { socialMedia } from "@/data";
import Link from "next/link";

const FooterGrid = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-0 bg-gradient-to-b from-black-100 to-black-200 border-t border-gray-800 overflow-hidden">
      {/* Background elements */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-20"
        />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-lime-400 to-yellow-500 opacity-20"></div>
      <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-cyan-500/10 blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-pink-500/10 blur-3xl"></div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        {/* Contact CTA */}
        <div className="flex flex-col items-center mb-16">
          <motion.h1
            className="heading lg:max-w-[45vw] text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Ready to take <span className="text-lime-400">your</span> digital
            presence to the next level?
          </motion.h1>

          <motion.p
            className="text-gray-400 md:mt-10 my-5 text-center max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Reach out to me today and let&apos;s discuss how I can help you
            achieve your goals.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a href="mailto:contact.marvelbiz@gmail.com">
              <MagicButton
                title="Let's get in touch"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
          </motion.div>
        </div>

        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* About section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2"
          >
            <Link href="/" className="transition flex items-center">
              <img
                src="/logo-MA.png"
                alt="Merveille Alexander"
                className="w-20 h-20"
              />
            </Link>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                About Me
              </span>
            </h3>
            <p className="text-gray-400 mb-6">
              Passionate developer and designer creating beautiful digital
              experiences. I believe in the power of code to bring ideas to
              life.
            </p>
            <div className="flex items-center gap-4">
              {socialMedia.map((info) => {
                const linkProps = {
                  whileHover: { y: -3 },
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className:
                    "w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 hover:bg-white/10 transition",
                  children: (
                    <img
                      src={info.img}
                      alt={info.alt || ""}
                      width={20}
                      height={20}
                    />
                  ),
                };

                return info.link ? (
                  <Link key={info.id} href={info.link} passHref legacyBehavior>
                    <motion.a {...linkProps} />
                  </Link>
                ) : (
                  <motion.div
                    key={info.id}
                    {...linkProps}
                    className={`${linkProps.className} opacity-50 cursor-not-allowed`}
                  />
                );
              })}
            </div>
          </motion.div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-400">
                Quick Links
              </span>
            </h3>
            <ul className="space-y-3">
              <motion.li whileHover={{ x: 5 }}>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-white transition flex items-center gap-2"
                >
                  <span className="w-1 h-1 rounded-full bg-cyan-400"></span>
                  Home
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-white transition flex items-center gap-2"
                >
                  <span className="w-1 h-1 rounded-full bg-yellow-400"></span>
                  About Me
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <Link
                  href="/projects"
                  className="text-gray-400 hover:text-white transition flex items-center gap-2"
                >
                  <span className="w-1 h-1 rounded-full bg-pink-400"></span>
                  Projects
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <Link
                  href="/pricing"
                  className="text-gray-400 hover:text-white transition flex items-center gap-2"
                >
                  <span className="w-1 h-1 rounded-full bg-pink-400"></span>
                  Freelance Pricing
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <Link
                  href="/products"
                  className="text-gray-400 hover:text-white transition flex items-center gap-2"
                >
                  <span className="w-1 h-1 rounded-full bg-pink-400"></span>
                  Products
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white transition flex items-center gap-2"
                >
                  <span className="w-1 h-1 rounded-full bg-blue-400"></span>
                  Contact
                </Link>
              </motion.li>
            </ul>
          </motion.div>

          {/* Tech stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500">
                Tech Stack
              </span>
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 p-3 bg-white/5 rounded-lg border border-white/10"
              >
                <FaReact className="text-cyan-400" size={20} />
                <span className="text-gray-300">React</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 p-3 bg-white/5 rounded-lg border border-white/10"
              >
                <SiNextdotjs className="text-white" size={20} />
                <span className="text-gray-300">Next.js</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 p-3 bg-white/5 rounded-lg border border-white/10"
              >
                <SiTailwindcss className="text-cyan-300" size={20} />
                <span className="text-gray-300">Tailwind</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 p-3 bg-white/5 rounded-lg border border-white/10"
              >
                <FaNodeJs className="text-green-500" size={20} />
                <span className="text-gray-300">Node.js</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom footer */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-gray-500 mb-4 md:mb-0 flex items-center"
          >
            Powered with <FiHeart className="mx-1 text-pink-500" /> ©{" "}
            {currentYear} by Merveille Alexandre
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex gap-6"
          >
            <Link
              href="/privacy"
              className="text-gray-500 hover:text-white transition text-sm"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-gray-500 hover:text-white transition text-sm"
            >
              Terms of Service
            </Link>
            <Link
              href="/cookies"
              className="text-gray-500 hover:text-white transition text-sm"
            >
              Cookies
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Floating particles */}
      {/* Milky Way Starfield */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(60)].map((_, i) => {
          // Random star properties
          const size = Math.random() * 4 + 1;
          const opacity = Math.random() * 0.7 + 0.3;
          const delay = Math.random() * 5;
          const duration = 5 + Math.random() * 15;
          const twinkleIntensity = Math.random() * 0.5 + 0.5;

          return (
            <motion.div
              key={`star-${i}`}
              initial={{
                opacity: 0,
                scale: 0.5,
              }}
              animate={{
                opacity: [opacity * 0.3, opacity, opacity * 0.3],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: duration,
                delay: delay,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
              className="absolute rounded-full bg-white"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                boxShadow: `0 0 ${size * 3}px ${
                  size * 0.5
                }px rgba(255, 255, 255, ${twinkleIntensity})`,
                filter: "blur(0.5px)",
              }}
            />
          );
        })}

        {/* Milky Way cloud effect */}
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0.05 }}
          animate={{ opacity: [0.05, 0.08, 0.05] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            background: `radial-gradient(ellipse at center, 
        rgba(101, 110, 255, 0.1) 0%, 
        rgba(101, 110, 255, 0) 70%)`,
            maskImage: `linear-gradient(to right, 
        rgba(0,0,0,0) 0%, 
        rgba(0,0,0,1) 20%, 
        rgba(0,0,0,1) 80%, 
        rgba(0,0,0,0) 100%)`,
          }}
        />
      </div>
    </footer>
  );
};

export default FooterGrid;
