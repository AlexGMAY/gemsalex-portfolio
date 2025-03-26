"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Code, BarChart, Globe, Smartphone, Plug, Server, Cloud, Shield } from "lucide-react";


const services = [
  {
    id: 1,
    title: "Web Development",
    description:
      "Custom, responsive websites built with modern technologies using React, Next.js, Laravel, and WordPress.",
    icon: <Globe size={40} className="text-lime-400" />,
  },
  {
    id: 2,
    title: "SaaS Development",
    description:
      "Scalable, cloud-based applications tailored to your business needs.",
    icon: <Code size={40} className="text-purple-400" />,
  },
  {
    id: 3,
    title: "Mobile & Web Applications",
    description:
      "Full-stack applications with seamless cross-platform experience using React, Next.js and React Native.",
    icon: <Smartphone size={40} className="text-blue-400" />,
  },
  {
    id: 4,
    title: "Cloud & DevOps",
    description: "Docker, containerization, Cloud deployment, CI/CD pipelines, Kubernetes and AWS/Azure solutions.",
    icon: <Cloud size={40} className="text-indigo-400" />,
  },
  {
    id: 5,
    title: "SEO & Performance Optimization",
    description:
      "Boost your online presence and website speed with expert strategies.",
    icon: <BarChart size={40} className="text-yellow-400" />,
  },
  // {
  //   id: 6,
  //   title: "Cybersecurity & Compliance",
  //   description:
  //     "Security audits, threat detection, and regulatory compliance solutions.",
  //   icon: <Shield size={40} className="text-red-400" />,
  // },
  {
    id: 7,
    title: "API Development",
    description:
      "Secure REST & GraphQL APIs, third-party integrations, and backend services.",
    icon: <Plug size={40} className="text-lime-400" />,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="heading font-semibold mb-6">
          My <span className="text-lime-400">Services</span>
        </h2>
        <p className="text-lg text-neutral-400 mb-10">
          High-quality development services tailored to your business needs.
        </p>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
          {services.map((service) => (
            <Card
              key={service.id}
              className="bg-black-200 border-gray-700 hover:shadow-xl transition"              
            >
              <CardHeader className="flex flex-col items-center">
                {service.icon}
                <CardTitle className="mt-4">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-400">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
