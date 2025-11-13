'use client';

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "John Believe Batubenga",
    role: "CEO, Elongo Investissons - ELIN Sas.",
    content:
      "Working with Alexander was transformative for our digital presence. His WordPress and management expertise helped us increase conversions by 40%.",
    avatar: "/avatars/logo-elin.jpg",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Manager of BigClick Digital, ABC Digitale.",
    content:
      "The business portfolio solution delivered exceeded all expectations. Incredible attention to detail and technical mastery.",
    avatar: "/avatars/logo-abcd.jpg",
  },
  {
    id: 3,
    name: "Dieu Mulundu Tankwe",
    role: "Founder & CEO, GGTE Sarl",
    content:
      "Our new portfolio website has attracted 3x more client inquiries. The animations and performance optimizations made all the difference.",
    avatar: "/avatars/logo-ggte.jpg",
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section id="testimonials" className="py-24 ">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="heading mb-12"
        >
          Client <span className="text-lime-400">Testimonials</span>
        </motion.h2>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Cards */}
          <div className="overflow-hidden">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center bg-black-200 rounded-xl shadow-lg p-8"
            >
              <div className="flex items-center mb-6">
                {/* <img
                  src={testimonials[currentIndex].avatar}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                /> */}
                <Image
                  src={testimonials[currentIndex].avatar}
                  alt={testimonials[currentIndex].name}
                  width={64}
                  height={64}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="text-xl font-semibold">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-yellow-400">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>
              <p className="text-blue-300 italic text-center">
                &quot;{testimonials[currentIndex].content}&quot;
              </p>
            </motion.div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  currentIndex === index ? "bg-blue-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
