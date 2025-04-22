"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
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
      title: "Ultimate Facebook and Instagram Ads",
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
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragX = useMotionValue(0);

  const nextCert = () => {
    setCurrentIndex((prev) => (prev + 1) % certifications.length);
  };

  const prevCert = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + certifications.length) % certifications.length
    );
  };

  // Auto-rotate every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDragging) {
        nextCert();
      }
    }, 8000);
    return () => clearInterval(interval);
  }, [isDragging]);

  // Calculate the position of each certificate
  const getPosition = (index: number) => {
    const diff =
      (index - currentIndex + certifications.length) % certifications.length;
    if (diff === 0) return "center";
    if (diff === 1) return "right";
    if (diff === certifications.length - 1) return "left";
    return "hidden";
  };

  // 3D tilt effect
  const x = useTransform(dragX, [-100, 0, 100], [-30, 0, 30]);
  const rotateY = useTransform(dragX, [-100, 0, 100], [15, 0, -15]);

  return (
    <section className="py-24 bg-gradient-to-b from-black-100 to-black-100 relative overflow-hidden">
      {/* Decorative elements */}
      {/* <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600 opacity-20"></div> */}
      <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-64 h-64 rounded-full bg-purple-500/10 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="heading font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-lime-400">
              My Credentials
            </span>
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Validated expertise through certifications and diplomas
          </p>
        </div>

        {/* Carousel container */}
        <div className="relative h-[600px] md:h-[700px] flex items-center justify-center">
          {/* Navigation arrows */}
          <button
            onClick={prevCert}
            className="absolute left-4 md:left-8 z-20 p-3 rounded-full bg-black/50 border border-white/10 hover:bg-white/10 transition-all"
          >
            <FiChevronLeft className="text-white" size={24} />
          </button>

          <button
            onClick={nextCert}
            className="absolute right-4 md:right-8 z-20 p-3 rounded-full bg-black/50 border border-white/10 hover:bg-white/10 transition-all"
          >
            <FiChevronRight className="text-white" size={24} />
          </button>

          {/* Certificates */}
          {certifications.map((cert, index) => {
            const position = getPosition(index);
            const isCenter = position === "center";

            return (
              <motion.div
                key={cert.id}
                className={`absolute w-full max-w-3xl h-full transition-all duration-500 ${
                  position === "left"
                    ? "left-0 md:left-20"
                    : position === "right"
                    ? "right-0 md:right-20"
                    : "left-1/2 transform -translate-x-1/2"
                }`}
                style={{
                  zIndex: isCenter ? 10 : 5,
                  opacity: isCenter ? 1 : 0.6,
                  scale: isCenter ? 1 : 0.85,
                  x: isCenter ? x : 0,
                  rotateY: isCenter ? rotateY : 0,
                  filter: isCenter ? "none" : "blur(2px)",
                }}
                drag={isCenter ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                onDragStart={() => setIsDragging(true)}
                onDragEnd={(_, info) => {
                  setIsDragging(false);
                  if (info.offset.x > 50) prevCert();
                  if (info.offset.x < -50) nextCert();
                }}
                onDrag={(_, info) => dragX.set(info.offset.x)}
              >
                <div
                  className={`h-full bg-gradient-to-br from-gray-900 to-gray-950 rounded-2xl overflow-hidden border ${
                    isCenter ? "border-white/20" : "border-white/10"
                  } shadow-2xl backdrop-blur-sm`}
                >
                  {/* Certificate image */}
                  <div className="h-2/3 relative overflow-hidden">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-contain p-4"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  </div>

                  {/* Certificate details */}
                  <div className="h-1/3 p-6 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold mb-1">{cert.title}</h3>
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

                    {/* Download button (only visible on center card) */}
                    {isCenter && (
                      <motion.a
                        href={cert.downloadUrl}
                        download
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-medium mt-4 self-start"
                      >
                        <FiDownload /> Download PDF
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {certifications.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentIndex === index ? "bg-blue-400 w-6" : "bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsCarousel;
