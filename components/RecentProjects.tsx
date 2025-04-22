"use client";

import {
  FaArrowRight,
  FaArrowLeft,
  FaExternalLinkAlt,
  FaGithub,
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCreative,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-creative";

import { recentProjects } from "@/data";
import { motion } from "framer-motion";
import { PinContainer } from "./ui/Pin";

const RecentProjects = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-black-100 to-black-100 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-lime-400/20 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 rounded-full bg-purple-500/20 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            The{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-blue-300">
              Inside
            </span>{" "}
            Scoop
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Interactive showcase of my products in development with immersive 3D effects
          </p>
        </motion.div>

        <div className="relative">
          {/* Custom Navigation Buttons - Floating */}
          <div className="absolute -top-16 right-0 z-10 flex gap-3">
            <button className="swiper-button-prev-custom bg-gray-800/50 backdrop-blur-sm p-4 rounded-full border border-gray-700 text-white hover:bg-lime-400 hover:text-black transition-all group">
              <FaArrowLeft
                size={18}
                className="group-hover:-translate-x-1 transition-transform"
              />
            </button>
            <button className="swiper-button-next-custom bg-gray-800/50 backdrop-blur-sm p-4 rounded-full border border-gray-700 text-white hover:bg-lime-400 hover:text-black transition-all group">
              <FaArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </div>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{
              clickable: true,
              el: ".swiper-pagination-custom",
              type: "fraction",
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            className="!pb-16 !overflow-visible"
          >
            {recentProjects.map((item) => (
              <SwiperSlide key={item.id} className="!h-auto py-10">
                <motion.div
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="h-full flex flex items-center justify-center"
                >
                  <PinContainer
                    title={item.title.toUpperCase()}
                    href={item.link}
                    containerClassName="group h-full"
                  >
                    <div className="relative h-full flex flex-col">
                      {/* Project Preview */}
                      <div className="relative flex-1 flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 group-hover:border-lime-400/50 transition-all mb-4">
                        <div className="absolute inset-0 overflow-hidden">
                          <img
                            src="/bg.png"
                            alt="background"
                            className="w-full h-full object-cover opacity-20"
                          />
                        </div>
                        <motion.img
                          src={item.img}
                          alt="project preview"
                          className="z-10 max-h-[80%] object-contain"
                          whileHover={{ scale: 1.05 }}
                          transition={{ type: "spring" }}
                        />
                        {/* Tech stack floating badges */}
                        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                          {item.iconLists.slice(0, 3).map((icon, index) => (
                            <motion.div
                              key={index}
                              initial={{ y: 20, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              transition={{ delay: index * 0.1 }}
                              className="bg-black/80 backdrop-blur-sm border border-gray-700 rounded-full p-2 flex items-center justify-center"
                              whileHover={{ scale: 1.2 }}
                            >
                              <img
                                src={icon}
                                alt="tech icon"
                                className="w-4 h-4"
                              />
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Project Info */}
                      <div className="px-2 flex-1 flex flex-col">
                        <h1 className="font-bold text-xl line-clamp-1 text-white mt-2">
                          {item.title}
                        </h1>

                        <p className="font-normal text-sm line-clamp-2 text-gray-400 my-2">
                          {item.des}
                        </p>

                        {/* Interactive Tech Stack */}
                        <div className="flex flex-wrap gap-2 my-3">
                          {item.iconLists.map((icon, index) => (
                            <motion.div
                              key={index}
                              whileHover={{ y: -5 }}
                              className="tooltip"
                              data-tip={icon.split("/").pop()?.split(".")[0]}
                            >
                              <div className="bg-gray-800/50 border border-gray-700 rounded-full p-2 flex items-center justify-center hover:bg-lime-400/10 hover:border-lime-400/30 transition-all">
                                <img
                                  src={icon}
                                  alt="tech icon"
                                  className="w-3 h-3"
                                />
                              </div>
                            </motion.div>
                          ))}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex justify-between items-center mt-auto mb-2">
                          <motion.a
                            href={item.github || "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm ${
                              item.github
                                ? "bg-gray-800 hover:bg-gray-700"
                                : "bg-gray-800/50 cursor-not-allowed"
                            } text-white transition-all`}
                          >
                            <FaGithub size={12} />
                            <span>Code</span>
                          </motion.a>

                          <motion.a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm bg-gradient-to-r from-lime-400 to-emerald-500 text-black font-medium transition-all"
                          >
                            <span>Live Demo</span>
                            <FaExternalLinkAlt size={10} />
                          </motion.a>
                        </div>
                      </div>
                    </div>
                  </PinContainer>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pagination */}
          <div className="swiper-pagination-custom text-center text-gray-400 mt-8 font-mono text-sm"></div>
        </div>

        {/* Tech Cloud Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 bg-gray-800/20 backdrop-blur-md p-6 rounded-2xl border border-gray-700 overflow-hidden relative"
        >
          <div className="absolute inset-0 overflow-hidden opacity-20">
            {[
              ...recentProjects.flatMap((p) => p.iconLists),
              ...recentProjects.flatMap((p) => p.iconLists),
            ].map((icon, i) => (
              <motion.img
                key={`${icon}-${i}`}
                src={icon}
                alt="tech icon"
                className="absolute opacity-20"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  width: `${Math.random() * 40 + 20}px`,
                  filter: "grayscale(100%)",
                }}
                animate={{
                  y: [0, (Math.random() > 0.5 ? 1 : -1) * 20],
                  x: [0, (Math.random() > 0.5 ? 1 : -1) * 20],
                  rotate: [0, (Math.random() > 0.5 ? 1 : -1) * 15],
                }}
                transition={{
                  duration: Math.random() * 10 + 10,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
          <h3 className="text-xl font-semibold mb-4 text-center text-gray-300 relative z-10">
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-4 relative z-10">
            {Array.from(new Set(recentProjects.flatMap((p) => p.iconLists)))
              .slice(0, 12)
              .map((icon, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.2, y: -5 }}
                  className="bg-gray-800/50 backdrop-blur-sm p-3 rounded-xl border border-gray-700 hover:border-lime-400/50 transition-all"
                >
                  <img src={icon} alt="tech icon" className="w-8 h-8" />
                </motion.div>
              ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RecentProjects;
