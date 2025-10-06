"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { FiHeart, FiUser, FiMessageSquare, FiShare2 } from "react-icons/fi";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FamilyResource } from "@/types/cloudinary";

// Mock data for family members
const mockFamily: FamilyResource[] = [
  {
    public_id: "family-1",
    secure_url: "/api/placeholder/400/400",
    resource_type: "image",
    format: "jpg",
    width: 400,
    height: 400,
    bytes: 10240,
    created_at: new Date().toISOString(),
    tags: ["family"],
    context: {
      custom: {
        memberName: "Alexander May",
        relationship: "Myself",
        role: "Web Developer & Educator",
        description: "The one who brings all these amazing people together",
        alt: "Alexander May portrait",
      },
    },
  },
  {
    public_id: "family-2",
    secure_url: "/api/placeholder/400/400",
    resource_type: "image",
    format: "jpg",
    width: 400,
    height: 400,
    bytes: 10240,
    created_at: new Date().toISOString(),
    tags: ["family"],
    context: {
      custom: {
        memberName: "Sarah May",
        relationship: "Spouse",
        role: "Graphic Designer",
        description: "My partner in crime and biggest supporter",
        alt: "Sarah May smiling",
      },
    },
  },
  {
    public_id: "family-3",
    secure_url: "/api/placeholder/400/400",
    resource_type: "image",
    format: "jpg",
    width: 400,
    height: 400,
    bytes: 10240,
    created_at: new Date().toISOString(),
    tags: ["family"],
    context: {
      custom: {
        memberName: "Emily May",
        relationship: "Daughter",
        role: "Student & Artist",
        description: "Our creative soul who fills the house with joy",
        alt: "Emily May with her artwork",
      },
    },
  },
  {
    public_id: "family-4",
    secure_url: "/api/placeholder/400/400",
    resource_type: "image",
    format: "jpg",
    width: 400,
    height: 400,
    bytes: 10240,
    created_at: new Date().toISOString(),
    tags: ["family"],
    context: {
      custom: {
        memberName: "James May",
        relationship: "Son",
        role: "Young Explorer",
        description: "Curious mind always discovering new wonders",
        alt: "James May building LEGO",
      },
    },
  },
  {
    public_id: "family-5",
    secure_url: "/api/placeholder/400/400",
    resource_type: "image",
    format: "jpg",
    width: 400,
    height: 400,
    bytes: 10240,
    created_at: new Date().toISOString(),
    tags: ["family"],
    context: {
      custom: {
        memberName: "Robert & Mary",
        relationship: "Parents",
        role: "Retired Educators",
        description: "The foundation of our family wisdom and love",
        alt: "Robert and Mary May together",
      },
    },
  },
];

interface FamilyGalleryProps {
  initialFamily?: FamilyResource[];
}

export default function FamilyGallery({ initialFamily }: FamilyGalleryProps) {
  const [familyMembers] = useState<FamilyResource[]>(
    initialFamily || mockFamily
  );
  const [activeIndex, setActiveIndex] = useState(0);
  const rotation = useMotionValue(0);
  const rotateInverse = useTransform(rotation, (value) => -value);
  const carouselRef = useRef(null);

  // Auto-rotate carousel
  useEffect(() => {
    const animation = animate(rotation, 360, {
      duration: 40,
      repeat: Infinity,
      ease: "linear",
    });

    return () => animation.stop();
  }, []);

  // Update active index on hover
  const handleHover = (index: number) => {
    setActiveIndex(index);
    rotation.stop();
  };

  const handleHoverEnd = () => {
    animate(rotation, 360, {
      duration: 40,
      repeat: Infinity,
      ease: "linear",
    });
  };

  const getRelationshipIcon = (relationship: string) => {
    switch (relationship.toLowerCase()) {
      case "myself":
        return "👨‍💼";
      case "spouse":
        return "💑";
      case "daughter":
        return "👧";
      case "son":
        return "👦";
      case "parents":
        return "👴👵";
      case "siblings":
        return "👫";
      default:
        return "❤️";
    }
  };

  const getRelationshipColor = (relationship: string) => {
    switch (relationship.toLowerCase()) {
      case "myself":
        return "from-blue-400 to-cyan-400";
      case "spouse":
        return "from-purple-400 to-pink-400";
      case "daughter":
      case "son":
        return "from-green-400 to-emerald-400";
      case "parents":
        return "from-orange-400 to-red-400";
      default:
        return "from-amber-400 to-rose-400";
    }
  };

  if (familyMembers.length === 0) {
    return (
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="w-24 h-24 mx-auto mb-6 bg-gray-800 rounded-full flex items-center justify-center">
              <span className="text-2xl">👨‍👩‍👧‍👦</span>
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">My Family</h2>
            <p className="text-gray-400 mb-8 max-w-md mx-auto">
              No family photos available yet. Upload images to Cloudinary with
              the "family" tag to showcase your family here.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-28 bg-gradient-to-b from-black-100 to-black-100 relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-rose-500 opacity-20"></div>
      <div className="absolute top-1/4 right-0 w-64 h-64 rounded-full bg-amber-400/10 blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-64 h-64 rounded-full bg-rose-500/10 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-rose-400">
              My Family Circle
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Some incredible people who are family
          </p>
        </div>

        {/* Circular carousel */}
        <div className="relative h-[70vh] max-h-[600px] min-h-[500px] flex items-center justify-center">
          {/* Center profile - MAIN CIRCLE */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            style={{ rotate: rotateInverse }}
          >
            <div
              className={`relative w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full border-4 bg-gradient-to-r ${getRelationshipColor(
                familyMembers[activeIndex].context?.custom?.relationship || ""
              )} border-amber-400/30 overflow-hidden shadow-2xl`}
            >
              {familyMembers[activeIndex].secure_url.includes("placeholder") ? (
                <div className="w-full h-full flex items-center justify-center bg-gray-800">
                  <div className="text-center">
                    <span className="text-4xl lg:text-5xl">
                      {getRelationshipIcon(
                        familyMembers[activeIndex].context?.custom
                          ?.relationship || ""
                      )}
                    </span>
                    <p className="text-sm text-gray-400 mt-2">Family Photo</p>
                  </div>
                </div>
              ) : (
                // FULL RESPONSIVE IMAGE - NO CROPPING
                <div className="relative w-full h-full">
                  <Image
                    src={familyMembers[activeIndex].secure_url}
                    alt={
                      familyMembers[activeIndex].context?.custom?.alt ||
                      "Family member"
                    }
                    fill
                    className="object-contain scale-105" // Changed to object-contain for full image display
                    sizes="(max-width: 768px) 192px, (max-width: 1024px) 224px, 256px"
                    priority
                  />
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4 lg:p-6">
                <h3 className="text-lg lg:text-xl font-bold text-white text-center line-clamp-1">
                  {familyMembers[activeIndex].context?.custom?.memberName ||
                    "Family Member"}
                </h3>
                <p className="text-amber-300 text-sm lg:text-base text-center">
                  {familyMembers[activeIndex].context?.custom?.relationship ||
                    "Family"}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Rotating items - SMALLER CIRCLES */}
          <motion.div
            ref={carouselRef}
            className="absolute inset-0"
            style={{ rotate: rotation }}
          >
            {familyMembers.map((member, index) => {
              const angle = index * (360 / familyMembers.length) - 90;
              const radius = familyMembers.length <= 4 ? 40 : 35;
              const x = 50 + radius * Math.cos(angle * (Math.PI / 180));
              const y = 50 + radius * Math.sin(angle * (Math.PI / 180));

              return (
                <motion.div
                  key={member.public_id}
                  className={`absolute w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full border-2 ${
                    activeIndex === index
                      ? "border-amber-400 scale-110 shadow-lg shadow-amber-400/50"
                      : "border-white/20"
                  } overflow-hidden cursor-pointer transition-all duration-300 bg-gray-800`}
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                    transform: `translate(-50%, -50%) rotate(${rotateInverse.get()}deg)`,
                  }}
                  onMouseEnter={() => handleHover(index)}
                  onMouseLeave={handleHoverEnd}
                  whileHover={{ scale: 1.15 }}
                  onClick={() => {
                    setActiveIndex(index);
                    const targetRotation =
                      360 - index * (360 / familyMembers.length);
                    animate(rotation, targetRotation, { duration: 1 });
                  }}
                >
                  {member.secure_url.includes("placeholder") ? (
                    <div className="w-full h-full flex items-center justify-center bg-gray-700">
                      <span className="text-xl lg:text-2xl">
                        {getRelationshipIcon(
                          member.context?.custom?.relationship || ""
                        )}
                      </span>
                    </div>
                  ) : (
                    // FULL RESPONSIVE IMAGE IN SMALL CIRCLES - NO CROPPING
                    <div className="relative w-full h-full">
                      <Image
                        src={member.secure_url}
                        alt={
                          member.context?.custom?.alt ||
                          `Family member ${index + 1}`
                        }
                        fill
                        className="object-contain scale-110" // Changed to object-contain for full image display
                        sizes="(max-width: 768px) 80px, (max-width: 1024px) 96px, 112px"
                      />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Active member details */}
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-12 max-w-2xl mx-auto text-center px-4"
        >
          <blockquote className="text-lg md:text-xl lg:text-2xl italic mb-6 text-gray-300 font-light leading-relaxed">
            "
            {familyMembers[activeIndex].context?.custom?.description ||
              "A special part of our family story"}
            "
          </blockquote>

          <div className="flex justify-center gap-6 lg:gap-8 flex-wrap">
            <div className="flex items-center gap-2 lg:gap-3 text-amber-300">
              <FiUser size={18} className="flex-shrink-0" />
              <span className="font-semibold text-sm lg:text-base">
                {familyMembers[activeIndex].context?.custom?.relationship ||
                  "Family Member"}
              </span>
            </div>
            <div className="flex items-center gap-2 lg:gap-3 text-gray-400">
              <FiHeart size={18} className="flex-shrink-0" />
              <span className="text-sm lg:text-base">
                {familyMembers[activeIndex].context?.custom?.role ||
                  "Loved One"}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Navigation dots */}
        <div className="flex justify-center gap-3 mt-8 px-4">
          {familyMembers.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveIndex(index);
                const targetRotation =
                  360 - index * (360 / familyMembers.length);
                animate(rotation, targetRotation, { duration: 1 });
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? "bg-amber-400 scale-125 shadow-lg shadow-amber-400/50"
                  : "bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`View ${familyMembers[index].context?.custom?.memberName}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
