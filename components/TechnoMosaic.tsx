"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiArrowUpRight,
  FiCode,
  FiCpu,
  FiDatabase,
  FiLayout,
} from "react-icons/fi";
import Link from "next/link";

const NeonMatrix = () => {
  const [activeId, setActiveId] = useState<number | null>(null);

  const cards = [
    {
      id: 1,
      title: "Dynamic Interfaces",
      description: "Fluid UIs with React & Framer Motion",
      icon: <FiLayout className="text-cyan-400" />,
      color: "border-cyan-500/30 hover:border-cyan-400",
      glow: "hover:shadow-cyan-500/20",
    },
    {
      id: 2,
      title: "System Architecture",
      description: "Scalable backend solutions",
      icon: <FiCpu className="text-lime-400" />,
      color: "border-lime-500/30 hover:border-lime-400",
      glow: "hover:shadow-lime-500/20",
    },
    {
      id: 3,
      title: "Data Engineering",
      description: "Optimized databases & APIs",
      icon: <FiDatabase className="text-emerald-400" />,
      color: "border-emerald-500/30 hover:border-emerald-400",
      glow: "hover:shadow-emerald-500/20",
    },
    {
      id: 4,
      title: "Clean Code",
      description: "TypeScript & maintainable patterns",
      icon: <FiCode className="text-amber-400" />,
      color: "border-amber-500/30 hover:border-amber-400",
      glow: "hover:shadow-amber-500/20",
    },
  ];

  return (
    <div className="relative bg-black-100 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-lime-400">
            Modular Excellence
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => (
            <motion.div
              key={card.id}
              onHoverStart={() => setActiveId(card.id)}
              onHoverEnd={() => setActiveId(null)}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: card.id * 0.1 }}
              className={`relative rounded-xl border-2 p-6 backdrop-blur-sm bg-gradient-to-b from-black/50 to-black/30 ${card.color} ${card.glow} transition-all duration-300`}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
            >
              <div className="flex flex-col h-full">
                <div className="mb-4 p-3 rounded-lg bg-white/5 w-fit">
                  {card.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-400 text-sm mb-6">{card.description}</p>
                <div className="mt-auto">
                  <Link href={'/solutions#solutions'}>
                    <motion.button
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-1 text-sm text-white/80 hover:text-white"
                    >
                      <span>Explore</span>
                      <FiArrowUpRight />
                    </motion.button>
                  </Link>
                </div>
              </div>

              <AnimatePresence>
                {activeId === card.id && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 -z-10"
                  >
                    <div
                      className={`absolute inset-0 rounded-xl bg-gradient-to-br ${card.glow.replace(
                        "hover:",
                        "",
                      )} opacity-20 blur-lg`}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NeonMatrix;
