"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { FiHeart, FiMessageSquare, FiShare2, FiUser } from "react-icons/fi";
import { SetStateAction, useEffect, useRef, useState } from "react";
import Image from "next/image";

const PeopleSpotlight = () => {
  const people = [
    {
      id: 1,
      name: "Sarah",
      relation: "Best Friend",
      memories: 42,
      image: "/alex-smile.jpg",
      quote: "The one who's always there for my adventures",
    },
    {
      id: 2,
      name: "Mom",
      relation: "Family",
      memories: 87,
      image: "/alex-cute.jpg",
      quote: "My rock through everything",
    },
    {
      id: 3,
      name: "Alex",
      relation: "Partner",
      memories: 156,
      image: "/alex-all.jpg",
      quote: "The love of my life",
    },
    {
      id: 4,
      name: "James",
      relation: "Brother",
      memories: 64,
      image: "/alex-happy.jpg",
      quote: "Partner in crime since childhood",
    },
    {
      id: 5,
      name: "Emma",
      relation: "Friend",
      memories: 35,
      image: "/alex-back.jpg",
      quote: "Work wife and travel buddy",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const rotation = useMotionValue(0);
  const rotateInverse = useTransform(rotation, (value) => -value);
  const carouselRef = useRef(null);

  // Auto-rotate carousel
  useEffect(() => {
    const animation = animate(rotation, 360, {
      duration: 30,
      repeat: Infinity,
      ease: "linear",
    });

    return () => animation.stop();
  }, [rotation]);

  // Update active index on hover
  const handleHover = (index: SetStateAction<number>) => {
    setActiveIndex(index);
    // Pause rotation while hovering
    rotation.stop();
  };

  const handleHoverEnd = () => {
    // Resume rotation
    animate(rotation, 360, {
      duration: 30,
      repeat: Infinity,
      ease: "linear",
    });
  };

  return (
    <section className="py-24 bg-gradient-to-b from-black-100 to-black-100 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-rose-500 opacity-20"></div>
      <div className="absolute top-1/4 right-0 w-64 h-64 rounded-full bg-amber-400/10 blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-64 h-64 rounded-full bg-rose-500/10 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-rose-400">
              My Favorite People
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            The special ones who make my memories meaningful
          </p>
        </div>

        {/* Circular carousel */}
        <div className="relative h-[80vh] max-h-[700px] min-h-[500px] flex items-center justify-center">
          {/* Center profile */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            style={{ rotate: rotateInverse }}
          >
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-amber-400/30 overflow-hidden shadow-2xl">
              {/* <img
                src={people[activeIndex].image}
                alt={people[activeIndex].name}
                className="w-full h-full object-cover"
              /> */}
              <Image
                src={people[activeIndex].image}
                alt={people[activeIndex].name}
                width={256}
                height={256}
                className="w-full h-full object-cover"
              /> 
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-center">
                  {people[activeIndex].name}
                </h3>
                <p className="text-amber-300 text-sm text-center">
                  {people[activeIndex].relation}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Rotating items */}
          <motion.div
            ref={carouselRef}
            className="absolute inset-0"
            style={{ rotate: rotation }}
          >
            {people.map((person, index) => {
              const angle = index * (360 / people.length) - 90;
              const x = 50 + 35 * Math.cos(angle * (Math.PI / 180));
              const y = 50 + 35 * Math.sin(angle * (Math.PI / 180));

              return (
                <motion.div
                  key={person.id}
                  className={`absolute w-24 h-24 md:w-32 md:h-32 rounded-full border-2 ${
                    activeIndex === index
                      ? "border-amber-400 scale-110"
                      : "border-white/20"
                  } overflow-hidden cursor-pointer transition-all duration-300`}
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                    transform: `translate(-50%, -50%) rotate(${rotateInverse.get()}deg)`,
                  }}
                  onMouseEnter={() => handleHover(index)}
                  onMouseLeave={handleHoverEnd}
                  whileHover={{ scale: 1.1 }}
                >
                  {/* <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover"
                  /> */}
                  <Image
                    src={person.image}
                    alt={person.name}
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Active person details */}
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-12 max-w-2xl mx-auto text-center"
        >
          <blockquote className="text-xl italic mb-6">
            &quot;{people[activeIndex].quote}&quot;
          </blockquote>
          <div className="flex justify-center gap-6">
            <div className="flex items-center gap-2 text-amber-300">
              <FiUser size={18} />
              <span>{people[activeIndex].relation}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <FiHeart size={18} />
              <span>{people[activeIndex].memories} shared memories</span>
            </div>
          </div>
        </motion.div>

        {/* Navigation dots */}
        <div className="flex justify-center gap-2 mt-8">
          {people.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveIndex(index);
                // Calculate target rotation to position selected person at top
                const targetRotation = 360 - index * (360 / people.length);
                animate(rotation, targetRotation, { duration: 1 });
              }}
              className={`w-3 h-3 rounded-full transition-all ${
                activeIndex === index ? "bg-amber-400 scale-125" : "bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PeopleSpotlight;


