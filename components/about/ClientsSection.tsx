'use client';

import { motion } from "framer-motion";
import { useState } from "react";

interface Client {
  name: string;
  logo: string;
  url: string;
  testimonial?: string;
}

const clients: Client[] = [
  {
    name: "ELINsas",
    logo: "/avatars/logo-elin.jpg",
    url: "#",
    testimonial:
      '"Revolutionized our web platform with cutting-edge Next.js optimizations"',
  },
  {
    name: "BigClick Digitale",
    logo: "/avatars/logo-abcd.jpg",
    url: "#",
    testimonial: '"Delivered our design system 2 weeks ahead of schedule"',
  },
  {
    name: "GGTE",
    logo: "/avatars/logo-ggte.jpg",
    url: "#",
    testimonial:
      '"Implemented CI/CD pipeline that reduced deployment times by 70%"',
  },
  {
    name: "Marvelbiz Solutions",
    logo: "/avatars/themarvelbiz.jpeg",
    url: "#",
    testimonial:
      '"Migrated our legacy system to modern React with zero downtime"',
  },
  {
    name: "Collaboration Capital",
    logo: "/avatars/webcraft.svg",
    url: "#",
    testimonial: '"Provided ongoing maintenance that saved us $15k annually"',
  },
];

const ClientCard = ({ client }: { client: Client }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative h-24 w-48 flex items-center justify-center p-4"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
    >
      {/* Client Logo */}
      <motion.img
        src={client.logo}
        alt={client.name}
        className="h-12 object-contain opacity-80"
        initial={{ opacity: 0.7 }}
        animate={{
          opacity: isHovered ? 1 : 0.7,
          filter: isHovered ? "brightness(1.1)" : "brightness(1)",
        }}
        transition={{ duration: 0.3 }}
        loading="lazy"
      />

      {/* Testimonial Tooltip */}
      {client.testimonial && (
        <motion.div
          className="absolute bottom-full mb-2 left-0 right-0 bg-white text-gray-800 p-3 rounded-lg shadow-xl text-sm"
          initial={{ opacity: 0, y: 10 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            y: isHovered ? 0 : 10,
          }}
          transition={{ duration: 0.2 }}
        >
          <p>{client.testimonial}</p>
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rotate-45"></div>
        </motion.div>
      )}
    </motion.div>
  );
};

const ClientsSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12 text-blue-300 text-lg font-medium"
        >
          Trusted by innovative teams worldwide
        </motion.h3>

        <motion.div
          className="flex flex-wrap justify-center gap-4 md:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 },
              }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <ClientCard client={client} />
            </motion.div>
          ))}
        </motion.div>

        {/* Animated Trust Badges */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          {["Google Certified", "AWS Partner", "Top Rated 2023"].map(
            (badge) => (
              <span
                key={badge}
                className="px-4 py-2 bg-white bg-opacity-20 backdrop-blur-sm rounded-full text-sm text-white border border-white border-opacity-30"
              >
                {badge}
              </span>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsSection;
