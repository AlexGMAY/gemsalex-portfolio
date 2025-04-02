import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="my-story" className="pt-36 pb-24">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="heading mb-12"
        >
          My Story as a <span className="text-lime-400">Developer</span>
        </motion.h2>
        <p className="text-lg text-center text-neutral-400 mb-14">
          Creativity meets functionality - I develop with vision and refine with
          precision.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6 flex flex-col gap-4 items-center justify-center"
          >
            <div className="bg-black-200 p-6 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl text-blue-200 mb-2 font-bold border-b border-gray-700 pb-2">
                Who Am I
              </h3>
              <p className="text-lg text-neutral-400">
                Hello, I’m{" "}
                <span className="text-yellow-400 font-bold">
                  Merveille Alexandre
                </span>
                , a passionate{" "}
                <span className="text-lime-400 font-bold">
                  Fullstack Software Engineer
                </span>{" "}
                with a knack for turning ideas into reality. Over the past{" "}
                <span className="text-white font-bold">08 years</span>, I’ve
                worked with businesses and individuals bring their digital
                visions to life through clean, efficient, and visually stunning
                websites.
              </p>
              <p className="text-lg text-neutral-400">
                My <span className="text-white font-bold">journey</span> began
                with a <span className="text-white font-bold">desire</span> to
                create web pages for the internet. I quickly discovered the
                power of coding to solve{" "}
                <span className="text-white font-bold">
                  real-world problems
                </span>
                . I’ve honed my skills to build seamless solutions.
              </p>
            </div>
            <div className="bg-black-200 p-6 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl text-blue-200 mb-2 font-bold border-b border-gray-700 pb-2">
                My Philosophy
              </h3>
              <p className="text-lg text-neutral-400">
                I believe in a{" "}
                <span className="text-lime-400 font-bold">
                  user-first approach
                </span>{" "}
                to web development. Every line of code I write is aimed at
                creating seamless,{" "}
                <span className="text-white font-bold">
                  intuitive experiences
                </span>{" "}
                for users and{" "}
                <span className="text-white font-bold">measurable results</span>{" "}
                for businesses.
              </p>
            </div>
            <div className="bg-black-200 p-6 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl text-blue-200 mb-2 font-bold border-b border-gray-700 pb-2">
                My Mission
              </h3>
              <p className="text-lg text-neutral-400">
                I believe that a great{" "}
                <span className="font-bold text-white">software</span> is more
                than just code—
                <span className="text-lime-400 font-bold">
                  it’s a gateway to success
                </span>
                . My mission is to create{" "}
                <span className="font-bold text-white">
                  websites, web apps and mobile apps
                </span>{" "}
                that not only look amazing but also drive results, whether it’s{" "}
                <span className="font-bold text-white">
                  boosting sales, increasing engagement, or building brand
                  credibility
                </span>
                .
              </p>
            </div>
          </motion.div>
          {/* Visual Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-blue-300 rounded-2xl transform translate-x-6 translate-y-6"></div>
            <div className="border border-3xl border-blue-300 bg-gray-800 rounded-3xl p-2">
              <img
                src="/gems-may.png"
                alt="My Story"
                className="p-2 bg-black-100 border border-neutral-600 rounded-3xl shadow-lg relative z-10"
              />
              <div className="absolute text-center bottom-4 right-4 bg-blue-800 bg-opacity-90 p-3 shadow-md rounded-br-3xl z-20">
                <h4 className="text-8xl text-lime-400 font-bold pb-2">08 </h4>
                <h5 className="text-center text-white font-bold">
                  Years Of Experience
                </h5>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
