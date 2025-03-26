import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="my-story" className="py-16">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="heading mb-12"
        >
          My Journey as a <span className="text-blue-200">Software Engineer</span>
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-700">
              Hi, I’m [Your Name], a passionate **Fullstack Web Developer** with
              a knack for turning ideas into reality. Over the past [X years],
              I’ve helped businesses and individuals bring their digital visions
              to life through clean, efficient, and visually stunning websites.
            </p>
            <p className="text-lg text-gray-700">
              My journey into web development began with a curiosity for how
              things work behind the screen. What started as a hobby quickly
              turned into a career as I discovered the power of coding to solve
              real-world problems. From building my first website to working on
              complex e-commerce platforms, I’ve honed my skills to deliver
              top-notch solutions.
            </p>
            <p className="text-lg text-gray-700">
              I believe that a great website is more than just code—it’s a
              gateway to success. My mission is to create websites that not only
              look amazing but also drive results, whether it’s boosting sales,
              increasing engagement, or building brand credibility.
            </p>
          </motion.div>
          {/* Visual Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-lime-500 rounded-2xl transform translate-x-6 translate-y-6"></div>
            <div className="border border-3xl border-lime-500 bg-gray-800 rounded-3xl p-2">
              <img
                src="/alex-back.jpg"
                alt="My Story"
                className="w-full max-w-md h-80 object-cover p-2 bg-black-100 border border-neutral-600 rounded-3xl shadow-lg relative z-10"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
