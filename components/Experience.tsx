// import React from "react";

// import { workExperience } from "@/data";
// import { Button } from "./ui/MovingBorders";

// const Experience = () => {
//   return (
//     <div className="py-20 w-full">
//       <h1 className="heading">
//         My <span className="text-purple">work experience</span>
//       </h1>

//       <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
//         {workExperience.map((card) => (
//           <Button
//             key={card.id}
//             //   random duration will be fun , I think , may be not
//             duration={Math.floor(Math.random() * 10000) + 10000}
//             borderRadius="1.75rem"
//             style={{
//               //   add these two
//               //   you can generate the color from here https://cssgradient.io/
//               background: "rgb(4,7,29)",
//               backgroundColor:
//                 "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
//               // add this border radius to make it more rounded so that the moving border is more realistic
//               borderRadius: `calc(1.75rem* 0.96)`,
//             }}
//             // remove bg-white dark:bg-slate-900
//             className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
//           >
//             <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
//               <img
//                 src={card.thumbnail}
//                 alt={card.thumbnail}
//                 className="lg:w-32 md:w-20 w-16"
//               />
//               <div className="lg:ms-5">
//                 <h1 className="text-start text-xl md:text-2xl font-bold">
//                   {card.title}
//                 </h1>
//                 <p className="text-start text-white-100 mt-3 font-semibold">
//                   {card.desc}
//                 </p>
//               </div>
//             </div>
//           </Button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Experience;
"use client";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import Image from "next/image";

const experiences = [
  {
    id: 1,
    role: "Senior Frontend Developer",
    company: "Tech Innovations Inc.",
    logo: "/avatars/logo-abcd.jpg",
    period: "2022 - Present",
    description:
      "Leading React architecture for enterprise SaaS platform. Implemented micro-frontend approach that reduced build times by 40%.",
    achievements: [
      "Reduced CI/CD pipeline time by 35%",
      "Implemented design system used by 50+ components",
      "Mentored 4 junior developers",
    ],
    tags: ["React", "TypeScript", "Next.js", "GraphQL"],
  },
  {
    id: 2,
    role: "Frontend Engineer",
    company: "Digital Creations",
    logo: "/avatars/logo-elin.jpg",
    period: "2019 - 2022",
    description:
      "Developed responsive web applications with focus on performance optimization.",
    achievements: [
      "Improved Lighthouse scores by 30+ points",
      "Reduced bundle size by 28%",
      "Implemented SSR for e-commerce platform",
    ],
    tags: ["JavaScript", "Redux", "SCSS", "Webpack"],
  },
  {
    id: 3,
    role: "UI Developer",
    company: "WebSolutions",
    logo: "/avatars/logo-ggte.jpg",
    period: "2017 - 2019",
    description: "Built component libraries and design systems.",
    achievements: [
      "Enhanced accessibility to WCAG 2.1 AA",
      "Created 30+ reusable components",
      "Reduced UI bugs by 45%",
    ],
    tags: ["HTML5", "CSS3", "jQuery", "Bootstrap"],
  },
  {
    id: 4,
    role: "UI Developer",
    company: "Marvelbiz Solutions",
    logo: "/avatars/logo-ggte.jpg",
    period: "2017 - 2019",
    description: "Built component libraries and design systems.",
    achievements: [
      "Enhanced accessibility to WCAG 2.1 AA",
      "Created 30+ reusable components",
      "Reduced UI bugs by 45%",
    ],
    tags: ["HTML5", "CSS3", "jQuery", "Bootstrap"],
  },
  {
    id: 5,
    role: "UI Developer",
    company: "WebSolutions",
    logo: "/avatars/logo-ggte.jpg",
    period: "2017 - 2019",
    description: "Built component libraries and design systems.",
    achievements: [
      "Enhanced accessibility to WCAG 2.1 AA",
      "Created 30+ reusable components",
      "Reduced UI bugs by 45%",
    ],
    tags: ["HTML5", "CSS3", "jQuery", "Bootstrap"],
  },
];

const allTags = Array.from(new Set(experiences.flatMap((exp) => exp.tags)));

export function UltimateTimeline() {
  const [activeTags, setActiveTags] = useState<string[]>([]);
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(3); // Start with 3 items
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  const filteredExperiences =
    activeTags.length > 0
      ? experiences.filter((exp) =>
          exp.tags.some((tag) => activeTags.includes(tag))
        )
      : experiences;

   const visibleExperiences = filteredExperiences.slice(0, visibleCount);

  const toggleTag = (tag: string) => {
    setActiveTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
    // Reset visible count when filters change
    setVisibleCount(3);
  };

  const loadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <div className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-[40px] md:text-5xl lg:text-6xl font-bold mb-4"
            >
              Professional <span className="text-lime-400">Experience</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-blue-300"
            >
              My career progression and key achievements both in{" "}
              <span className="text-lime-400">Office</span> and as a
              <span className="text-yellow-400"> Freelancer</span>
            </motion.p>
          </div>

          {/* Filter Tags Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-3"
          >
            <div className="relative group">
              <button className="px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-white text-sm font-medium transition-colors border border-gray-700 flex items-center gap-2">
                <span>Filter Tags</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                  />
                </svg>
              </button>
              <div className="absolute right-0 mt-2 w-56 origin-top-right rounded-lg bg-gray-800 border border-gray-700 shadow-lg p-2 z-20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none group-hover:pointer-events-auto">
                <div className="flex flex-wrap gap-2">
                  {allTags.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => toggleTag(tag)}
                      className={`px-3 py-1 text-xs rounded-full transition-all ${
                        activeTags.includes(tag)
                          ? "bg-blue-600/90 text-white border-blue-500"
                          : "bg-gray-700/50 text-blue-300 border-gray-600/50"
                      } border`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Vertical Timeline - Mobile & Desktop */}
        <div ref={ref} className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500/30 via-indigo-500/50 to-purple-500/30" />

          {visibleExperiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="mb-12 flex flex-col md:flex-row items-start"
            >
              {/* Timeline dot */}
              <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-indigo-500 ring-4 ring-indigo-500/30 ring-offset-4 ring-offset-gray-900 z-10">
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.8, 1, 0.8],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-2 h-2 rounded-full bg-white"
                />
              </div>

              {/* Content card */}
              <div className="flex-1 md:ml-8 mt-4 md:mt-2 w-full">
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-gray-800/70 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-indigo-500/30 transition-all duration-300 shadow-lg hover:shadow-indigo-500/10"
                >
                  <div className="flex flex-col md:flex-row items-start gap-4">
                    {exp.logo && (
                      <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-gray-700/50 border border-gray-600/50 overflow-hidden">
                        <Image
                          src={exp.logo}
                          alt={`${exp.company} logo`}
                          width={56}
                          height={56}
                          className="object-contain w-full h-full"
                        />
                      </div>
                    )}
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <h3 className="text-lg md:text-xl font-semibold text-white">
                          {exp.role}
                        </h3>
                        <div className="flex items-center gap-2">
                          <span className="text-blue-300 text-sm md:text-base">
                            {exp.company}
                          </span>
                          <span className="text-gray-400 text-sm">|</span>
                          <span className="text-gray-400 text-sm">
                            {exp.period}
                          </span>
                        </div>
                      </div>
                      <p className="mt-3 text-gray-300 text-sm md:text-base">
                        {exp.description}
                      </p>
                      <button
                        onClick={() =>
                          setExpandedId(expandedId === exp.id ? null : exp.id)
                        }
                        className="mt-4 text-blue-400 flex items-center gap-1 text-sm"
                      >
                        {expandedId === exp.id
                          ? "Show less"
                          : "Show achievements"}
                        <svg
                          className={`w-4 h-4 transition-transform ${
                            expandedId === exp.id ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>

                      <AnimatePresence>
                        {expandedId === exp.id && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="mt-4 pt-4 border-t border-gray-700/50">
                              <h4 className="text-sm font-medium text-white mb-3">
                                Key Achievements:
                              </h4>
                              <ul className="space-y-2">
                                {exp.achievements.map((item, i) => (
                                  <li
                                    key={i}
                                    className="flex items-start gap-2"
                                  >
                                    <span className="text-blue-400 mt-0.5">
                                      •
                                    </span>
                                    <span className="text-gray-300 text-sm md:text-base">
                                      {item}
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {exp.tags.map((tag) => (
                          <span
                            key={tag}
                            className={`px-2 py-1 text-xs rounded-full transition-all ${
                              activeTags.includes(tag)
                                ? "bg-blue-600/90 text-white border-blue-500"
                                : "bg-gray-700/50 text-blue-300 border-gray-600/50"
                            } border`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}

          {/* Load More Button */}
          {visibleCount < filteredExperiences.length && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex justify-center mt-8"
            >
              <button
                onClick={loadMore}
                className="px-6 py-3 rounded-lg bg-gray-800 hover:bg-gray-700 text-white font-medium transition-colors border border-gray-700 flex items-center gap-2"
              >
                Load More Experiences
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
                  />
                </svg>
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}