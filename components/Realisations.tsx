"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const projects = [
  {
    id: 1,
    title: "WordPress Business Site",
    category: "WordPress",
    img: "/projects/wp1.jpg",
  },
  {
    id: 2,
    title: "E-commerce Platform",
    category: "React",
    img: "/projects/react1.jpg",
  },
  {
    id: 3,
    title: "Next.js SaaS Dashboard",
    category: "Nextjs",
    img: "/projects/next1.jpg",
  },
  {
    id: 4,
    title: "Laravel CRM System",
    category: "Laravel",
    img: "/projects/laravel1.jpg",
  },
  {
    id: 5,
    title: "Vue.js Admin Panel",
    category: "Vuejs",
    img: "/projects/vue1.jpg",
  },
  {
    id: 6,
    title: "MERN Social Media App",
    category: "Mern",
    img: "/projects/mern1.jpg",
  },
  {
    id: 7,
    title: "SaaS Marketing Site",
    category: "SaaS",
    img: "/projects/saas1.jpg",
  },
  {
    id: 8,
    title: "WordPress Blog",
    category: "WordPress",
    img: "/projects/wp2.jpg",
  },
  {
    id: 9,
    title: "Next.js Portfolio",
    category: "Nextjs",
    img: "/projects/next2.jpg",
  },
  {
    id: 10,
    title: "Vue.js E-learning Platform",
    category: "Vuejs",
    img: "/projects/vue2.jpg",
  },
];

const categories = [
  "All",
  "WordPress",
  "React",
  "Nextjs",
  "Laravel",
  "Vuejs",
  "Mern",
  "SaaS",
];

const Realisations = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-8">
          My <span className="text-lime-400">Projects</span>
        </h2>
        <p className="text-lg text-center text-neutral-400 mb-10">
          Browse through some of my best work across different technologies.
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={selectedCategory === cat ? "default" : "outline"}
              className="capitalize"
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="overflow-hidden bg-gray-800 border-gray-700">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-52 object-cover"
                />
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-neutral-400">{project.category}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Realisations;
