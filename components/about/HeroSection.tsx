import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video autoPlay muted loop className="w-full h-full object-cover">
          <source src="/videos/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black-100 bg-opacity-50"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white px-8 pt-28">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-4 "
        >
          Fullstack Web Developer | Freelancer | Problem Solver
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="md:text-2xl text-lg text-center text-neutral-400 mb-10"
        >
          I design and build scalable, user-friendly websites that help
          businesses grow. Let’s create something amazing together!
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex gap-4 justify-center"
        >
          <a
            href="#projects"
            className="bg-blue-200 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition duration-300"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="bg-transparent border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition duration-300"
          >
            Hire Me
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
