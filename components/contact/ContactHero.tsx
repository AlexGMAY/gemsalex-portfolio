'use client';

import { motion } from "framer-motion";
import { FiChevronDown, FiMail, FiCalendar, FiMessageSquare } from "react-icons/fi";

const ContactHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-black-100 via-black-100 to-black-100 py-28">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-400"
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
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
      {/* Floating particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute rounded-full bg-blue-400"
          style={{
            width: Math.random() * 6 + 2 + "px",
            height: Math.random() * 6 + 2 + "px",
            top: Math.random() * 100 + "%",
            left: Math.random() * 100 + "%",
          }}
          animate={{
            y: [0, (Math.random() - 0.5) * 100],
            x: [0, (Math.random() - 0.5) * 100],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 10 + Math.random() * 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}

      <div className="container mx-auto px-4 relative z-10">
        <div className="pt-20 max-w-4xl mx-auto text-center">
          {/* Headline with animated gradient */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-lime-400"
          >
            Let's Build Something{" "}
            <span className="text-lime-400">Remarkable</span>
          </motion.h1>

          {/* Subheading with subtle animation */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto"
          >
            Whether you have a project or just want to connect — I respond
            within 24 hours
          </motion.p>

          {/* Channel pills with icons */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {[
              {
                icon: <FiMail className="mr-2" />,
                label: "Email",
                color: "bg-blue-600/10 text-blue-400 hover:bg-blue-600/20",
              },
              {
                icon: <FiCalendar className="mr-2" />,
                label: "Schedule Call",
                color:
                  "bg-lime-600/10 text-lime-400 hover:bg-lime-600/20",
              },
              {
                icon: <FiMessageSquare className="mr-2" />,
                label: "Live Chat",
                color: "bg-cyan-600/10 text-cyan-400 hover:bg-cyan-600/20",
              },
            ].map((channel, i) => (
              <motion.a
                key={i}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
                href={
                  i === 0 ? "#contact-system" : i === 1 ? "#scheduler" : "#chat"
                }
                className={`flex items-center px-5 py-3 rounded-full border border-gray-700 ${channel.color} transition-all`}
              >
                {channel.icon}
                {channel.label}
              </motion.a>
            ))}
          </motion.div>

          {/* Animated scroll indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: [0, 1, 0],
              y: [0, 10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: 1.2,
            }}
            className="flex flex-col items-center justify-center mt-12"
          >
            <span className="text-gray-500 text-sm mb-2">
              Explore contact options
            </span>
            <FiChevronDown className="text-gray-600 text-2xl animate-bounce" />
          </motion.div>
        </div>
      </div>

      {/* Floating gradient blob */}
      <motion.div
        className="absolute -bottom-1/3 -left-1/4 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-blue-600/20 to-cyan-600/20 filter blur-sm opacity-20"
        animate={{
          x: [-100, 100, -100],
          y: [0, 100, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </section>
  );
};

export default ContactHero;