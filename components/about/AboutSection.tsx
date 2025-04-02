import { motion } from "framer-motion";
import { FiUser, FiTarget, FiAward } from "react-icons/fi";
import { FaCode, FaLightbulb } from "react-icons/fa";

const AboutSection = () => {
  return (
    <section
      id="my-story"
      className="py-24 relative"
    >
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-400"
            style={{
              width: Math.random() * 10 + 5 + "px",
              height: Math.random() * 10 + 5 + "px",
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
            }}
            animate={{
              y: [0, (Math.random() - 0.5) * 100],
              x: [0, (Math.random() - 0.5) * 100],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 15 + Math.random() * 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-emerald-500">
            My Developer Journey
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Where creativity meets functionality - I develop with vision and
            refine with precision.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8"
          >
            {/* Who Am I Card */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-black-200 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-lime-400/50 transition-all duration-300 shadow-lg"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-lime-400/10 text-lime-400">
                  <FiUser className="text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-white">Who Am I</h3>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                Hello, I'm{" "}
                <span className="text-yellow-300 font-semibold">
                  Merveille Alexandre
                </span>
                , a passionate{" "}
                <span className="text-lime-400 font-semibold">
                  Fullstack Software Engineer
                </span>{" "}
                with
                <span className="text-white font-semibold"> 8 years</span> of
                experience transforming ideas into digital reality. My journey
                began with simple web pages and evolved into crafting complex,
                scalable solutions that solve{" "}
                <span className="text-white font-semibold">
                  real-world problems
                </span>
                .
              </p>
            </motion.div>

            {/* My Philosophy Card */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-black-200 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-blue-400/50 transition-all duration-300 shadow-lg"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-blue-400/10 text-blue-400">
                  <FaLightbulb className="text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-white">My Philosophy</h3>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                I champion a{" "}
                <span className="text-lime-400 font-semibold">
                  user-first approach
                </span>{" "}
                where every line of code serves a purpose. My development
                process balances
                <span className="text-white font-semibold">
                  {" "}
                  aesthetic elegance
                </span>{" "}
                with
                <span className="text-white font-semibold">
                  {" "}
                  functional robustness
                </span>
                , creating experiences that are as intuitive as they are
                impactful.
              </p>
            </motion.div>

            {/* My Mission Card */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-black-200 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-yellow-400/50 transition-all duration-300 shadow-lg"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-purple-400/10 text-purple-400">
                  <FiTarget className="text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-white">My Mission</h3>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                I believe exceptional{" "}
                <span className="text-white font-semibold">software</span> is
                the
                <span className="text-lime-400 font-semibold">
                  {" "}
                  bridge between vision and success
                </span>
                . My mission is to craft solutions that don't just look
                impressive but deliver
                <span className="text-white font-semibold">
                  {" "}
                  measurable results
                </span>{" "}
                - whether boosting engagement, driving conversions, or
                establishing digital credibility.
              </p>
            </motion.div>
          </motion.div>

          {/* Visual Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-blue-400 to-emerald-400 rounded-3xl opacity-20 blur-xl"></div>
            <div className="relative bg-gray-800 rounded-3xl overflow-hidden border border-gray-700 shadow-2xl">
              <img
                src="/gems-may.png"
                alt="Merveille Alexandre"
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-6 right-6 bg-gradient-to-br from-blue-600 to-emerald-600 p-6 rounded-2xl shadow-lg text-center">
                <div className="flex items-center justify-center gap-2">
                  <FaCode className="text-3xl text-white" />
                  <span className="text-5xl font-bold text-white">08</span>
                </div>
                <h5 className="text-white font-semibold mt-2 text-lg">
                  Years of Excellence
                </h5>
              </div>

              {/* Floating tech badges */}
              <div className="absolute top-6 left-6 flex flex-wrap gap-2">
                {["React", "Node.js", "TypeScript", "AWS"].map((tech, i) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + i * 0.1 }}
                    className="px-3 py-1 bg-gray-900/80 backdrop-blur-sm rounded-full text-sm text-white border border-gray-700"
                  >
                    {tech}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
