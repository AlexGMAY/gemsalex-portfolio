import { motion } from "framer-motion";
import { TextGenerateEffect } from "../ui/TextGenerateEffect";
import { Spotlight } from "../ui/Spotlight";

const HeroSection = () => {
  return (
    <section className="relative pb-20 pt-20 h-screen flex items-center justify-center overflow-hidden">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>
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
      <div className="relative z-10 text-center text-white px-8 pt-28 max-w-[89vw] md:max-w-2xl lg:max-w-[70vw] flex flex-col items-center justify-center">
        <div className="inline-flex mt-20 py-2 px-3 bg-gradient-to-r from-blue-300 to-blue-200 rounded-full font-semibold">
          <p className="uppercase tracking-widest text-xs text-center text-neutral-950">
            {/* text-blue-100 max-w-82 */}
            Dynamic Web Excellence with{" "}
            <span className="font-semibold text-blue-100">
              8+ years of Experience
            </span>
          </p>
        </div>
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <TextGenerateEffect
            words=" Software Engineer & Fullstack Web Developer"
            className="text-center text-[40px] md:text-5xl lg:text-6xl font-bold mb-4"
          />
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mb-4 text-sm md:text-lg lg:text-2xl"
        >
          Great design is not just how it looks, but how it works. I code with
          purpose, craft with passion, and create experiences that leave an
          impact.
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
