"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Code, BarChart, Globe, Smartphone, Plug, Cloud } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Web Development",
    description:
      "Custom, responsive websites built with modern technologies using React, Next.js, Laravel, and WordPress.",
    icon: <Globe className="h-8 w-8" />,
    color: "text-lime-400",
    borderColor: "border-lime-400",
    bgGradient: "from-lime-400/10 to-lime-400/5",
  },
  {
    id: 2,
    title: "SaaS Development",
    description:
      "Scalable, cloud-based applications tailored to your business needs.",
    icon: <Code className="h-8 w-8" />,
    color: "text-blue-300",
    borderColor: "border-blue-300",
    bgGradient: "from-blue-300/10 to-blue-300/5",
  },
  {
    id: 3,
    title: "Mobile & Web Applications",
    description:
      "Full-stack applications with seamless cross-platform experience using React, Next.js and React Native.",
    icon: <Smartphone className="h-8 w-8" />,
    color: "text-blue-400",
    borderColor: "border-blue-400",
    bgGradient: "from-blue-400/10 to-blue-400/5",
  },
  {
    id: 4,
    title: "Cloud & DevOps",
    description:
      "Docker, containerization, Cloud deployment, CI/CD pipelines, Kubernetes and AWS/Azure solutions.",
    icon: <Cloud className="h-8 w-8" />,
    color: "text-indigo-400",
    borderColor: "border-indigo-400",
    bgGradient: "from-indigo-400/10 to-indigo-400/5",
  },
  {
    id: 5,
    title: "SEO & Performance Optimization",
    description:
      "Boost your online presence and website speed with expert strategies.",
    icon: <BarChart className="h-8 w-8" />,
    color: "text-yellow-400",
    borderColor: "border-yellow-400",
    bgGradient: "from-yellow-400/10 to-yellow-400/5",
  },
  {
    id: 6,
    title: "API Development",
    description:
      "Secure REST & GraphQL APIs, third-party integrations, and backend services.",
    icon: <Plug className="h-8 w-8" />,
    color: "text-cyan-400",
    borderColor: "border-cyan-400",
    bgGradient: "from-cyan-400/10 to-cyan-400/5",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 md:py-24 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: -20 }}
            animate={{
              opacity: [0, 0.3, 0],
              y: [0, -10, 10, 0],
              x: [0, 10, -10, 0],
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              repeatType: "reverse",
              delay: Math.random() * 5,
            }}
            className="absolute text-4xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            <span className={services[i % services.length].color}>✦</span>
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-lime-400">
              My Digital Services
            </span>
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            High-quality development services tailored to your business needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                hover: { duration: 0.2 },
              }}
              viewport={{ once: true, margin: "0px 0px -50px 0px" }}
            >
              <Card
                className={`h-full bg-gradient-to-br ${service.bgGradient} border ${service.borderColor}/20 hover:${service.borderColor}/50 rounded-xl transition-all duration-300 group relative overflow-hidden`}
              >
                {/* Animated border effect */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  className={`absolute inset-0 border-2 ${service.borderColor}/30 rounded-xl pointer-events-none`}
                  transition={{ duration: 0.3 }}
                />

                {/* Floating dots pattern */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                  {[...Array(20)].map((_, i) => (
                    <div
                      key={i}
                      className={`absolute rounded-full ${service.color.replace(
                        "text",
                        "bg"
                      )}`}
                      style={{
                        width: `${Math.random() * 4 + 1}px`,
                        height: `${Math.random() * 4 + 1}px`,
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                    />
                  ))}
                </div>

                <CardHeader className="pb-4 relative z-10">
                  <motion.div
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className={`${service.color} mb-4 inline-block`}
                  >
                    {service.icon}
                  </motion.div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <motion.p
                    className="text-neutral-400"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    {service.description}
                  </motion.p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
