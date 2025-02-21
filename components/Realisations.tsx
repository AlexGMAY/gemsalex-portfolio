"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

// Complete list of 9 projects
const projects = [
  {
    id: 1,
    title: "WordPress Business Site",
    category: "WordPress",
    img: "/b1.svg",
    github: "https://github.com/yourusername/wordpress-business-site",
    live: "https://yourlivewebsite.com",
    techStack: ["/tech-stack/wordpress.svg", "/tech-stack/seo.svg"],
  },
  {
    id: 2,
    title: "E-commerce Platform",
    category: "React",
    img: "/realestate-dark.jpg",
    github: "https://github.com/yourusername/e-commerce-platform",
    live: "https://yourlivewebsite.com",
    techStack: ["/tech-stack/react.svg", "/tech-stack/node.svg"],
  },
  {
    id: 3,
    title: "Next.js SaaS Dashboard",
    category: "Nextjs",
    img: "/dashboard.jpeg",
    github: "https://github.com/yourusername/nextjs-saas-dashboard",
    live: "https://yourlivewebsite.com",
    techStack: ["/next.svg", "/git.svg"],
  },
  {
    id: 4,
    title: "Laravel CRM System",
    category: "Laravel",
    img: "/client-collab-dark.jpg",
    github: "https://github.com/yourusername/laravel-crm",
    live: "https://yourlivewebsite.com",
    techStack: ["/tech-stack/laravel.svg", "/tech-stack/php.svg"],
  },
  {
    id: 5,
    title: "Vue.js Admin Panel",
    category: "Vuejs",
    img: "/p4.svg",
    github: "https://github.com/yourusername/vuejs-admin-panel",
    live: "https://yourlivewebsite.com",
    techStack: ["/tech-stack/vuejs.svg", "/tech-stack/nuxt.svg"],
  },
  {
    id: 6,
    title: "MERN Social Media App",
    category: "Mern",
    img: "/p2.svg",
    github: "https://github.com/yourusername/mern-social-media-app",
    live: "https://yourlivewebsite.com",
    techStack: ["/tech-stack/mern.svg", "/tech-stack/mongodb.svg"],
  },
  {
    id: 7,
    title: "SaaS Marketing Site",
    category: "SaaS",
    img: "/p3.svg",
    github: "https://github.com/yourusername/saas-marketing-site",
    live: "https://yourlivewebsite.com",
    techStack: ["/tech-stack/saas.svg", "/tech-stack/stripe.svg"],
  },
  {
    id: 8,
    title: "WordPress Blog",
    category: "WordPress",
    img: "/p1.svg",
    github: "https://github.com/yourusername/wordpress-blog",
    live: "https://yourlivewebsite.com",
    techStack: ["/tech-stack/wordpress.svg", "/tech-stack/seo.svg"],
  },
  {
    id: 9,
    title: "Next.js Portfolio",
    category: "Nextjs",
    img: "/project-realestate.jpg",
    github: "https://github.com/yourusername/nextjs-portfolio",
    live: "https://yourlivewebsite.com",
    techStack: ["/tech-stack/nextjs.svg", "/tech-stack/css.svg"],
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
    <section className="py-24 text-white">
      <div className="container mx-auto px-6">
        <h2 className="heading font-semibold text-center mb-8">
          My <span className="text-lime-400">Projects</span>
        </h2>
        <p className="text-lg text-center text-neutral-400 mb-10">
          Browse through some of my best work across different technologies.
        </p>

        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={selectedCategory === cat ? "default" : "outline"}
              className={`capitalize px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 ease-in-out ${
                selectedCategory === cat
                  ? "bg-lime-400 text-gray-800 hover:bg-lime-500"
                  : "border border-gray-600 text-white hover:bg-gray-700"
              }`}
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
              <Card className="overflow-hidden bg-black-200 border-gray-700 hover:scale-105 transform transition duration-300 ease-in-out flex flex-col items-center justify-center text-center">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-52 object-cover mb-6 rounded-xl"
                />
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-neutral-400 mb-2 hidden">
                    {project.category}
                  </p>
                  <div className="flex justify-center items-center gap-2 mb-4">
                    {project.techStack.map((tech, index) => (
                      <img
                        key={index}
                        src={tech}
                        alt="tech-stack-icon"
                        className="h-6 w-6 object-contain"
                      />
                    ))}
                  </div>
                  <div className="flex justify-between gap-4 mt-4">
                    <Button
                      variant="link"
                      href={project.github}
                      target="_blank"
                      className={"text-yellow-500 hover:text-lime-400"}
                    >
                      GitHub Repo
                    </Button>
                    <Button variant="link" href={project.live} target="_blank" className={"text-lime-400 hover:text-yellow-500"}>
                      Check Live Site
                    </Button>
                  </div>
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
