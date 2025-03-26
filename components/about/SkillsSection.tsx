import { motion } from "framer-motion";
import { useState } from "react";

import { skills } from "@/data";

const categories = [
  "All",
  ...Array.from(new Set(skills.map((skill) => skill.category))),
];

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills =
    activeCategory === "All"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="py-24 ">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Technical Skills
        </motion.h2>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full transition-all ${
                activeCategory === category
                  ? "bg-blue-600 text-white"
                  : "bg-black-200 hover:bg-blue-800"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-black-200 rounded-xl shadow-sm hover:shadow-md transition-shadow p-6"
            >
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3">{skill.icon}</span>
                <h3 className="text-xl font-semibold">{skill.name}</h3>
                <span className="ml-auto text-gray-500">{skill.level}%</span>
              </div>

              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  className="h-2.5 rounded-full bg-gradient-to-r from-blue-500 to-blue-600"
                />
              </div>
              <p className="mt-2 text-sm text-gray-500 capitalize">
                {skill.category}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Visualization */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-2xl font-semibold mb-6">My Tech Stack</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                whileHover={{ y: -5, scale: 1.05 }}
                className="bg-black-200 rounded-lg shadow-md border border-gray-100 flex flex-col items-center p-4"
              >
                <span className="text-3xl mb-2">{skill.icon}</span>
                <span className="font-medium">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
