"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Code, Music, Book, Languages, Dumbbell, Clapperboard, Coffee, Film, BrainCircuit } from "lucide-react";

const funFacts = [
  {
    icon: <Code size={32} />,
    title: "Lines of Code",
    description: "I’ve written over 100,000 lines of code and counting.",
  },
  {
    icon: <Book size={32} />,
    title: "Inspirations",
    description:
      "I’m inspired by the works of [Famous Developer/Designer] and the philosophy of [Book/Author].",
  },
  {
    icon: <Coffee size={32} />,
    title: "Tea and Lemonade",
    description:
      "I believe a great cup of tea or a glass of lemonade helps throughout the day.",
  },
  {
    icon: <Film size={32} />,
    title: "Action, Comedy and Sci-fi Genres",
    description:
      "When I’m not coding, I’ll be binging best action, comedy or sci-fy movies.",
  },
  {
    icon: <Dumbbell size={32} />,
    title: "Fitness, Gym & Martial Arts",
    description:
      "I stay active by hitting the gym regularly—it’s my way of recharging and staying fit...Also Self Defence",
  },
  {
    icon: <Languages size={32} />,
    title: "International Languages",
    description:
      "I’m fluent in English and French, and I also learn Mandarin and Spanish which helps me connect with clients worldwide.",
  },
  {
    icon: <Clapperboard size={32} />,
    title: "Movie Buff",
    description:
      "I love cinema and storytelling, always on the lookout for the next great film and TV Show.",
  },
  {
    icon: <BrainCircuit size={32} />,
    title: "Meditation & Mindfullness",
    description: "I practice meditation to maintain focus and mental clarity.",
  },
];

export default function FunFacts() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="py-24 max-w-4xl mx-auto">
      <h2 className="heading mb-14">
        Fun Facts & <span className="text-lime-400">Personal Touch</span>
      </h2>
      <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {funFacts.map((fact, index) => (
          <motion.div
            key={index}
            className="relative bg-black-200 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelected(selected === index ? null : index)}
          >
            <Card className="p-4 flex items-center gap-4 shadow-lg hover:shadow-xl transition-all">
              {fact.icon}
              <div>
                <h3 className="text-xl font-semibold">{fact.title}</h3>
                {selected === index && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-gray-600 mt-2"
                  >
                    {fact.description}
                  </motion.p>
                )}
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
