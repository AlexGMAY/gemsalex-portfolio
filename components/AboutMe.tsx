import React from "react";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <section id="about" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-lime-500 rounded-2xl transform translate-x-6 translate-y-6"></div>
            <img
              src="/me.jpg" // Replace with your actual image
              alt="Merveille Alexander"
              className="rounded-2xl shadow-lg relative z-10"
            />
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold">
              Hi, I'm <span className="text-lime-400">Merveille Alexander</span>
            </h2>
            <p className="text-neutral-300 mt-4 text-lg leading-relaxed">
              Passionate **Web Developer** who loves building modern, scalable,
              and performant applications. I have experience in **React,
              Next.js, Node.js**, and always eager to learn new technologies.
            </p>

            {/* Skills */}
            <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
              {[
                "React.js",
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
                "Node.js",
                "MongoDB",
              ].map((skill, index) => (
                <motion.span
                  key={index}
                  className="bg-gray-800 px-4 py-2 rounded-lg text-lime-400 font-semibold"
                  whileHover={{ scale: 1.1 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>

            {/* CTA */}
            <motion.a
              href="#contact"
              className="inline-block mt-6 bg-lime-500 hover:bg-lime-600 transition px-6 py-3 rounded-lg text-black font-bold"
              whileHover={{ scale: 1.05 }}
            >
              Let's Connect
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
