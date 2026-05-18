"use client"


import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiStar,
  FiChevronLeft,
  FiChevronRight,
  FiBriefcase,
  FiUser,
} from "react-icons/fi";

// Données des témoignages intégrées directement dans le composant
const testimonialsData = [
  {
    id: 1,
    name: "Pascal",
    category: "AMO",
    profession: "CEO",
    company: "Amplitude360",
    testimonial:
      "The AMO training completely transformed how we approach automation. Alexander's expertise helped us streamline our web development workflows, saving countless hours. His 1-on-1 approach is unmatched!",
    image: "",
    rating: 5,
  },
  {
    id: 2,
    name: "Lof Brice",
    category: "English",
    profession: "Pastry Chef",
    testimonial:
      "As a patissier, I never thought English would be important for my career. But thanks to these personalized sessions, I can now communicate with international clients and access global recipes. A game-changer!",
    image: "",
    rating: 5,
  },
  {
    id: 3,
    name: "Bretesche",
    category: "Excel",
    profession: "Business Analyst",
    testimonial:
      "Excel was always intimidating until I took these 1-on-1 sessions. Now I create complex dashboards and automate reports daily. Best investment in my professional development!",
    image: "",
    rating: 5,
  },
  {
    id: 4,
    name: "Herve Meubry",
    category: "English",
    profession: "International Business Developer",
    testimonial:
      "My English has improved dramatically. The personalized approach focused exactly on my business needs. I'm now confident in international meetings and negotiations.",
    image: "",
    rating: 5,
  },
  {
    id: 5,
    name: "Estaban",
    category: "English",
    profession: "Musician",
    testimonial:
      "Alexander understood my unique needs as a musician. The English sessions were tailored to music industry vocabulary and tour communication. Truly transformative!",
    image: "",
    rating: 5,
  },
  {
    id: 6,
    name: "Julien Phillipe",
    category: "English",
    profession: "Marketing Manager",
    testimonial:
      "Exceptional teaching methodology! My team communication has improved significantly since completing these sessions. Highly recommended for professionals.",
    image: "",
    rating: 5,
  },
  {
    id: 7,
    name: "Lakhlifi",
    category: "Excel",
    profession: "Data Analyst",
    testimonial:
      "From basic formulas to advanced Power Query and VBA, this training covered everything. The 1-on-1 format allowed me to learn at my own pace and focus on what mattered most.",
    image: "",
    rating: 5,
  },
  {
    id: 8,
    name: "Anas Harbi",
    category: "VBA",
    profession: "Financier",
    company: "Investment Firm",
    testimonial:
      "VBA has revolutionized my financial modeling. I now automate complex calculations and reporting tasks that used to take hours. Alexander is a patient and knowledgeable instructor.",
    image: "",
    rating: 5,
  },
  {
    id: 9,
    name: "Estelle Moreau",
    category: "English",
    profession: "HR Director",
    testimonial:
      "The improvement in my English fluency has been remarkable. The sessions were engaging, practical, and focused on real-world business scenarios. Merci beaucoup!",
    image: "",
    rating: 5,
  },
  {
    id: 10,
    name: "Abdou Halid",
    category: "English",
    profession: "Project Manager",
    testimonial:
      "These English sessions helped me bridge the communication gap with international teams. My confidence in meetings has grown tremendously. Worth every minute!",
    image: "",
    rating: 5,
  },
  {
    id: 11,
    name: "Celine Herve",
    category: "English",
    profession: "Personal Trainer & Sports Coach",
    testimonial:
      "As a fitness coach, I needed English to work with diverse clients. Alexander tailored the lessons perfectly to my industry. Now I can train international athletes with confidence!",
    image: "",
    rating: 5,
  },
];

// Configuration des couleurs par catégorie
const categoryConfig = {
  AMO: {
    bg: "from-purple-500/20 to-pink-500/20",
    border: "border-purple-400/30",
    text: "text-purple-400",
    badge: "bg-purple-500/20 text-purple-400",
  },
  English: {
    bg: "from-blue-500/20 to-cyan-500/20",
    border: "border-blue-400/30",
    text: "text-blue-400",
    badge: "bg-blue-500/20 text-blue-400",
  },
  Excel: {
    bg: "from-green-500/20 to-emerald-500/20",
    border: "border-green-400/30",
    text: "text-green-400",
    badge: "bg-green-500/20 text-green-400",
  },
  VBA: {
    bg: "from-orange-500/20 to-red-500/20",
    border: "border-orange-400/30",
    text: "text-orange-400",
    badge: "bg-orange-500/20 text-orange-400",
  },
};

// Images d'arrière-plan pour les cartes (images Unsplash professionnelles)
const backgroundImages = [
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
  "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
  "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filtrer les témoignages par catégorie
  const filteredTestimonials =
    selectedCategory === "All"
      ? testimonialsData
      : testimonialsData.filter((t) => t.category === selectedCategory);

  // Auto-slide toutes les 6 secondes
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % filteredTestimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [filteredTestimonials.length, isAutoPlaying]);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) =>
      prev === 0 ? filteredTestimonials.length - 1 : prev - 1,
    );
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % filteredTestimonials.length);
  };

  const currentTestimonial = filteredTestimonials[currentIndex];
  const config =
    categoryConfig[
      currentTestimonial?.category as keyof typeof categoryConfig
    ] || categoryConfig.English;

  // Categories pour le filtre
  const categories = ["All", "AMO", "English", "Excel", "VBA"];

  return (
    <section className="px-4 py-20 bg-gradient-to-b from-black-100 to-black-100 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500/20 to-lime-500/20 px-4 py-1 mb-4">
            <span className="text-xs font-medium text-lime-300">
              Success Stories
            </span>
          </div>
          <h2 className="text-4xl font-bold md:text-5xl">
            Professionals Who{" "}<br />
            <span className="bg-gradient-to-r from-blue-400 to-lime-400 bg-clip-text text-transparent">
              Transformed Their Skills With 1-on-1 Training
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Real-world results from professionals across industries who
            accelerated their careers
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setCurrentIndex(0);
                setIsAutoPlaying(true);
              }}
              className={`relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === cat
                  ? "bg-gradient-to-r from-blue-500 to-lime-500 text-white shadow-lg"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Featured Testimonial Carousel */}
        {filteredTestimonials.length > 0 && (
          <div className="relative mb-20">
            <div className="absolute -top-10 -left-10 text-8xl text-white/5 font-serif select-none">
              ❝
            </div>
            <div className="absolute -bottom-10 -right-10 text-8xl text-white/5 font-serif select-none">
              ❞
            </div>

            <div className="relative overflow-hidden rounded-3xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 p-8 md:p-12">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-6"
                >
                  <div className="flex items-start justify-between flex-wrap gap-4">
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-16 h-16 rounded-full bg-gradient-to-r ${config.bg} flex items-center justify-center text-2xl font-bold text-white shadow-lg border ${config.border}`}
                      >
                        {currentTestimonial.name.charAt(0)}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">
                          {currentTestimonial.name}
                        </h3>
                        <div className="flex items-center gap-2 text-gray-400 text-sm">
                          <span className="flex items-center gap-1">
                            <FiBriefcase size={14} />
                            {currentTestimonial.profession}
                          </span>
                          {currentTestimonial.company && (
                            <>
                              <span>•</span>
                              <span className="text-lime-400">
                                {currentTestimonial.company}
                              </span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                    <div
                      className={`px-3 py-1 rounded-full ${config.badge} text-xs font-medium border ${config.border}`}
                    >
                      {currentTestimonial.category}
                    </div>
                  </div>

                  <div className="flex gap-1 text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <FiStar key={i} size={18} fill="currentColor" />
                    ))}
                  </div>

                  <p className="text-xl md:text-2xl text-gray-200 leading-relaxed italic">
                    &ldquo;{currentTestimonial.testimonial}&rdquo;
                  </p>
                </motion.div>
              </AnimatePresence>

              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-gray-800 hover:bg-gray-700 border border-gray-700 transition-all"
              >
                <FiChevronLeft size={24} className="text-white" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-gray-800 hover:bg-gray-700 border border-gray-700 transition-all"
              >
                <FiChevronRight size={24} className="text-white" />
              </button>
            </div>

            <div className="flex justify-center gap-2 mt-6">
              {filteredTestimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setCurrentIndex(idx);
                    setIsAutoPlaying(false);
                  }}
                  className={`transition-all duration-300 rounded-full ${
                    idx === currentIndex
                      ? "w-8 h-2 bg-gradient-to-r from-blue-400 to-lime-400"
                      : "w-2 h-2 bg-gray-600 hover:bg-gray-500"
                  }`}
                />
              ))}
            </div>
          </div>
        )}

        {/* Testimonials Grid */}
        {/* <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {testimonialsData.slice(0, 8).map((item, index) => {
            const itemConfig =
              categoryConfig[item.category as keyof typeof categoryConfig];
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-3xl border border-gray-800 bg-gradient-to-br from-gray-900 to-black hover:border-lime-400/30 transition-all duration-500"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={backgroundImages[index % backgroundImages.length]}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, 25vw"
                    quality={80}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />

                  <div className="absolute top-4 right-4 rounded-full bg-black/70 backdrop-blur-sm px-3 py-1">
                    <span className={`text-xs font-medium ${itemConfig?.text}`}>
                      {item.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className={`w-10 h-10 rounded-full bg-gradient-to-r ${itemConfig?.bg} flex items-center justify-center text-white font-bold text-sm`}
                    >
                      {item.name.split(" ")[0].charAt(0)}
                    </div>
                    <div>
                      <p className="font-medium text-white">{item.name}</p>
                      <p className="text-xs text-gray-500">{item.profession}</p>
                    </div>
                  </div>

                  <div className="flex gap-0.5 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <FiStar
                        key={i}
                        size={12}
                        fill="#EAB308"
                        className="text-yellow-400"
                      />
                    ))}
                  </div>

                  <p className="text-sm text-gray-400 line-clamp-3">
                    {item.testimonial}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div> */}
      </div>
    </section>
  );
};

export default Testimonial;
