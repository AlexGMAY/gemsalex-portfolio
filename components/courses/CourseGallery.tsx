"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  FiX,
  FiChevronLeft,
  FiChevronRight,
  FiGrid,
  FiZoomIn,
  FiUsers,
} from "react-icons/fi";
import {
  FaLanguage,
  FaFileExcel,
  FaCode,
  FaRobot,
  FaChalkboardTeacher,
} from "react-icons/fa";

// Types
interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  title: string;
  category: "english" | "excel" | "vba" | "amo";
}

interface CourseGalleryProps {
  images: GalleryImage[];
  title?: string;
  subtitle?: string;
}

const CourseGallery = ({
  images,
  title = "Course Gallery",
  subtitle = "Moments from our 1-on-1 training sessions",
}: CourseGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [filter, setFilter] = useState<string>("all");
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Filter images by category
  const filteredImages =
    filter === "all" ? images : images.filter((img) => img.category === filter);

  // Handle keyboard navigation
  const navigate = (direction: number) => {
    const newIndex = currentIndex + direction;
    if (newIndex >= 0 && newIndex < filteredImages.length) {
      setCurrentIndex(newIndex);
      setSelectedImage(filteredImages[newIndex]);
    }
  };

  // Category buttons configuration
  const categories = [
    {
      id: "all",
      label: "All Courses",
      icon: FiGrid,
      gradient: "from-blue-400 to-lime-400",
      color: "blue",
    },
    {
      id: "english",
      label: "English",
      icon: FaLanguage,
      gradient: "from-blue-400 to-cyan-400",
      color: "blue",
    },
    {
      id: "excel",
      label: "Excel",
      icon: FaFileExcel,
      gradient: "from-green-400 to-emerald-400",
      color: "green",
    },
    {
      id: "vba",
      label: "VBA",
      icon: FaCode,
      gradient: "from-purple-400 to-pink-400",
      color: "purple",
    },
    {
      id: "amo",
      label: "AMO",
      icon: FaRobot,
      gradient: "from-orange-400 to-red-400",
      color: "orange",
    },
  ];

  const getCategoryGradient = (category: string) => {
    switch (category) {
      case "english":
        return "from-blue-400 to-cyan-400";
      case "excel":
        return "from-green-400 to-emerald-400";
      case "vba":
        return "from-purple-400 to-pink-400";
      case "amo":
        return "from-orange-400 to-red-400";
      default:
        return "from-gray-400 to-gray-500";
    }
  };

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-black-100 to-black-100 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-lime-500/10 border border-blue-500/20 mb-6">
            <FaChalkboardTeacher className="text-lime-400" size={16} />
            <span className="text-sm font-medium text-blue-300">
              1-on-1 Training Sessions
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-lime-400 to-emerald-400 bg-clip-text text-transparent">
              {title}
            </span>
          </h2>

          <p className="text-lg md:text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
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
            <motion.button
              key={cat.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setFilter(cat.id);
                setCurrentIndex(0);
              }}
              className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 overflow-hidden group ${
                filter === cat.id
                  ? "text-gray-900 shadow-lg"
                  : "text-white hover:text-gray-900"
              }`}
            >
              <span
                className={`absolute inset-0 bg-gradient-to-r ${cat.gradient} transition-all duration-300 ${
                  filter === cat.id
                    ? "opacity-100"
                    : "opacity-0 group-hover:opacity-100"
                }`}
              />
              <span className="absolute inset-0 bg-gray-800 transition-all duration-300 opacity-100 group-hover:opacity-0" />
              <span className="relative z-10 flex items-center gap-2">
                <cat.icon size={14} />
                {cat.label}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="wait">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                onHoverStart={() => setHoveredId(image.id)}
                onHoverEnd={() => setHoveredId(null)}
                className="group cursor-pointer"
                onClick={() => {
                  setCurrentIndex(index);
                  setSelectedImage(image);
                }}
              >
                <div className="relative rounded-2xl overflow-hidden bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-lime-400/30 transition-all duration-500 group">
                  {/* Image Container */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className={`object-cover transition-all duration-700 ${
                        hoveredId === image.id ? "scale-110" : "scale-100"
                      }`}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Zoom Icon */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="p-3 rounded-full bg-black/50 backdrop-blur-sm border border-white/20">
                        <FiZoomIn className="text-white" size={24} />
                      </div>
                    </div>
                  </div>

                  {/* Image Info */}
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-lime-400 transition-colors">
                      {image.title}
                    </h3>

                    {/* 1-on-1 Badge */}
                    <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
                      <FiUsers size={14} />
                      <span>1-on-1 Session</span>
                    </div>

                    {/* Category Badge */}
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryGradient(
                        image.category,
                      )}/20 text-${
                        image.category === "english"
                          ? "blue"
                          : image.category === "excel"
                            ? "green"
                            : image.category === "vba"
                              ? "purple"
                              : "orange"
                      }-400 border border-${
                        image.category === "english"
                          ? "blue"
                          : image.category === "excel"
                            ? "green"
                            : image.category === "vba"
                              ? "purple"
                              : "orange"
                      }-400/30`}
                    >
                      {categories.find((c) => c.id === image.category)?.label}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredImages.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="text-6xl mb-4">📸</div>
            <p className="text-gray-400 text-lg">
              No images found for this category.
            </p>
          </motion.div>
        )}

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[5000] bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all z-10"
              >
                <FiX size={24} className="text-white" />
              </button>

              {/* Navigation Buttons */}
              {filteredImages.length > 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(-1);
                    }}
                    className="absolute left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all z-10"
                  >
                    <FiChevronLeft size={28} className="text-white" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(1);
                    }}
                    className="absolute right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all z-10"
                  >
                    <FiChevronRight size={28} className="text-white" />
                  </button>
                </>
              )}

              {/* Image Container */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative max-w-5xl w-full max-h-[85vh]"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                  <Image
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    fill
                    className="object-contain"
                    sizes="90vw"
                  />
                </div>

                {/* Image Info in Lightbox */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-2xl">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {selectedImage.title}
                  </h3>
                  <div className="flex flex-wrap gap-4 text-gray-300">
                    <div className="flex items-center gap-2">
                      <FiUsers size={16} />
                      <span>1-on-1 Training Session</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryGradient(
                          selectedImage.category,
                        )}/20 text-${
                          selectedImage.category === "english"
                            ? "blue"
                            : selectedImage.category === "excel"
                              ? "green"
                              : selectedImage.category === "vba"
                                ? "purple"
                                : "orange"
                        }-400 border border-${
                          selectedImage.category === "english"
                            ? "blue"
                            : selectedImage.category === "excel"
                              ? "green"
                              : selectedImage.category === "vba"
                                ? "purple"
                                : "orange"
                        }-400/30`}
                      >
                        {
                          categories.find(
                            (c) => c.id === selectedImage.category,
                          )?.label
                        }
                      </span>
                    </div>
                  </div>
                </div>

                {/* Counter */}
                <div className="absolute top-6 left-6 px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm text-white text-sm">
                  {currentIndex + 1} / {filteredImages.length}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default CourseGallery;
