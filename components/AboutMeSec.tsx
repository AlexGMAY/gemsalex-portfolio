import React from "react";
import { motion } from "framer-motion";
import MagicButton from "./MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { useRouter } from "next/navigation";

const AboutMeSec = () => {
  const router = useRouter(); // Initialize the router

  const handleSeeMore = () => {
    router.push("/about"); // Redirect to the Projects page
  };
  return (
    <section id="about" className="py-24 text-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-lime-500 rounded-2xl transform translate-x-6 translate-y-6"></div>
            <div className="border border-3xl border-lime-500 bg-gray-800 rounded-3xl p-2">
              <img
                src="/alex-smile.jpg"
                alt="Merveille Alexander"
                className="p-2 bg-black-100 border border-neutral-600 rounded-3xl shadow-lg relative z-10"
              />
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold">
              Hi, I'm{" "}
              <span className="text-yellow-500">Merveille Alexander</span>
            </h2>
            <p className="text-neutral-300 mt-4 text-lg leading-relaxed">
              Passionate **Web Developer** who loves building modern, scalable,
              and performant applications. I have experience in **React,
              Next.js, Node.js**, and always eager to learn new technologies.
            </p>

            {/* Skills */}
            <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
              {[
                "Good Communicator",
                "Quick Learner",
                "Mindfull",
                "Problem Solver",
                "Easygoing",
                "Friendly Joker",
                "Tech Enthusiast",
                "Passionate",
                "Ambitious Creator",
                "Still-Minded & calm",
              ].map((skill, index) => (
                <motion.span
                  key={index}
                  className="bg-black-200 px-4 py-2 rounded-lg text-neutral-300 hover:text-lime-400 font-semibold"
                  whileHover={{ scale: 1.1 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>

            {/* CTA */}
            <div className="flex items-center justify-between">              
              <motion.button
                onClick={handleSeeMore}
                className="mt-10 bg-gradient-to-r from-lime-500 to-yellow-600 text-white px-8 py-3 rounded-lg hover:from-lime-600 hover:to-yellow-700 transition-all transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
              >
                Read More About Me
              </motion.button>
              <a href="#">
                <MagicButton
                  title="DONWLOAD CV"
                  icon={<FaLocationArrow />}
                  position="left"
                />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSec;