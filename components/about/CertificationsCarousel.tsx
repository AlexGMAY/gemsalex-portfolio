"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  FiDownload,
  FiChevronLeft,
  FiChevronRight,
  FiAward,
} from "react-icons/fi";
import { useState, useEffect } from "react";

const CertificationsCarousel = () => {
  const certifications = [
    {
      id: 1,
      title: "Acing Project Management",
      issuer: "Udemy",
      date: "September 2020",
      credentialId: "CRED123456",
      image: "/certs/UC-pmp.jpg",
      downloadUrl: "/certs/UC-pmp.pdf",
    },
    {
      id: 2,
      title: "Facebook and Instagram Ads",
      issuer: "Udemy",
      date: "June 2021",
      credentialId: "UXD789012",
      image: "/certs/UC-facebook-ads.jpg",
      downloadUrl: "/certs/UC-facebook-ads.pdf",
    },
    {
      id: 3,
      title: "Ultimate Adobe Photoshop 2021",
      issuer: "Udemy",
      date: "October 2020",
      credentialId: "AWS345678",
      image: "/certs/UC-photoshop.jpg",
      downloadUrl: "/certs/UC-photoshop.pdf",
    },
    {
      id: 4,
      title: "Python BootCamp",
      issuer: "Udemy",
      date: "October 2020",
      credentialId: "DSS901234",
      image: "/certs/UC-python-bootcamp.jpg",
      downloadUrl: "/certs/UC-python-bootcamp.pdf",
    },
    {
      id: 5,
      title: "Advanced React Patterns",
      issuer: "Udemy",
      date: "November 2021",
      credentialId: "REACT5678",
      image: "/certs/UC-react.jpg",
      downloadUrl: "/certs/UC-react.pdf",
    },
    {
      id: 6,
      title: "Cloud Architecture",
      issuer: "AWS",
      date: "March 2022",
      credentialId: "AWS7890",
      image: "/certs/UC-cloud.jpg",
      downloadUrl: "/certs/UC-cloud.pdf",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [visibleCards, setVisibleCards] = useState(1);

  // Handle responsive card count
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setVisibleCards(3); // lg screens
      } else if (window.innerWidth >= 768) {
        setVisibleCards(2); // md screens
      } else {
        setVisibleCards(1); // sm screens
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextCert = () => {
    setDirection("right");
    setCurrentIndex(
      (prev) => (prev + 1) % (certifications.length - visibleCards + 1)
    );
  };

  const prevCert = () => {
    setDirection("left");
    setCurrentIndex(
      (prev) =>
        (prev - 1 + (certifications.length - visibleCards + 1)) %
        (certifications.length - visibleCards + 1)
    );
  };

  // Auto-rotate every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextCert();
    }, 8000);
    return () => clearInterval(interval);
  }, [visibleCards]);

  const goToCert = (index: number) => {
    setDirection(index > currentIndex ? "right" : "left");
    setCurrentIndex(index);
  };

  const variants = {
    enter: (direction: string) => ({
      x: direction === "right" ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
    exit: (direction: string) => ({
      x: direction === "right" ? -1000 : 1000,
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.5 },
    }),
  };

  // Calculate which cards to display based on currentIndex and visibleCards
  const getVisibleCertificates = () => {
    return Array.from({ length: visibleCards }, (_, i) => {
      const index = (currentIndex + i) % certifications.length;
      return certifications[index];
    });
  };

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-blue-400">
              Certifications
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Validated expertise through professional certifications
          </p>
        </div>

        {/* Carousel container */}
        <div className="relative h-[500px] md:h-[550px] lg:h-[500px] flex items-center">
          {/* Navigation arrows */}
          <button
            onClick={prevCert}
            className="absolute left-0 z-20 p-3 rounded-full bg-gray-900 hover:bg-gray-800 transition-all shadow-lg"
            aria-label="Previous certification"
          >
            <FiChevronLeft className="text-white" size={24} />
          </button>

          <button
            onClick={nextCert}
            className="absolute right-0 z-20 p-3 rounded-full bg-gray-900 hover:bg-gray-800 transition-all shadow-lg"
            aria-label="Next certification"
          >
            <FiChevronRight className="text-white" size={24} />
          </button>

          {/* Certificates */}
          <div className="w-full h-full flex items-center justify-center">
            <div
              className={`w-full grid gap-6 ${
                visibleCards === 3
                  ? "grid-cols-3"
                  : visibleCards === 2
                  ? "grid-cols-2"
                  : "grid-cols-1"
              }`}
            >
              <AnimatePresence
                custom={direction}
                mode="popLayout"
                initial={false}
              >
                {getVisibleCertificates().map((cert, idx) => (
                  <motion.div
                    key={`${cert.id}-${currentIndex}`}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="h-full"
                  >
                    <div className="h-full bg-gray-900 rounded-xl overflow-hidden border border-gray-800 shadow-2xl flex flex-col">
                      {/* Certificate image */}
                      <div className="h-2/3 relative overflow-hidden bg-black-100 flex items-center justify-center">
                        <img
                          src={cert.image}
                          alt={cert.title}
                          className="max-w-full max-h-full object-contain p-3"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      </div>

                      {/* Certificate details */}
                      <div className="h-1/3 p-6 flex flex-col justify-between">
                        <div>
                          <h3 className="text-xl font-bold mb-1 text-white line-clamp-2">
                            {cert.title}
                          </h3>
                          <div className="flex flex-wrap gap-4 text-gray-400 text-sm mb-3">
                            <span className="flex items-center gap-1">
                              <FiAward size={14} /> {cert.issuer}
                            </span>
                            <span>{cert.date}</span>
                          </div>
                          <p className="text-xs text-gray-500">
                            Credential ID: {cert.credentialId}
                          </p>
                        </div>

                        <motion.a
                          href={cert.downloadUrl}
                          download
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-full  bg-gradient-to-r from-blue-200 to-blue-300 text-white text-sm font-medium my-4 self-start"
                        >
                          <FiDownload /> Download PDF
                        </motion.a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: certifications.length - visibleCards + 1 }).map(
            (_, index) => (
              <button
                key={index}
                onClick={() => goToCert(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentIndex === index ? "bg-emerald-400 w-6" : "bg-white/30"
                }`}
                aria-label={`Go to certification set ${index + 1}`}
              />
            )
          )}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-emerald-500/10 blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-64 h-64 rounded-full bg-teal-500/10 blur-3xl"></div>
    </section>
  );
};

export default CertificationsCarousel;
