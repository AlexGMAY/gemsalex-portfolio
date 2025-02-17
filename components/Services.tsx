import React from "react";
import { motion } from "framer-motion";
import { Code, Globe, Layers, BarChart, Server } from "lucide-react";

const services = [
  {
    title: "Website Development",
    icon: <Globe />,
    description: "Custom, responsive websites built with modern technologies.",
  },
  {
    title: "SaaS Development",
    icon: <Server />,
    description:
      "Scalable, cloud-based applications tailored to your business needs.",
  },
  {
    title: "Web Applications",
    icon: <Layers />,
    description: "Full-stack web apps with powerful features and integrations.",
  },
  {
    title: "SEO Optimization",
    icon: <BarChart />,
    description: "Boost your online presence with expert SEO strategies.",
  },
  {
    title: "WordPress Development",
    icon: <Code />,
    description: "Custom WordPress themes, plugins, and optimizations.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold">
          My <span className="text-lime-400">Services</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-800 p-6 rounded-lg shadow-md text-center"
            >
              <div className="text-lime-400 text-5xl mx-auto">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mt-4">{service.title}</h3>
              <p className="text-neutral-300 mt-2">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
