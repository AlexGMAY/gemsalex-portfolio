"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import Image from "next/image";

const experiences = [
  {
    id: 1,
    role: "Remote Consultant",
    company: "ATON PROXY",
    logo: "/avatars/logo-aton.jpg",
    period: "September 2024 - January 2025",
    description:
      "As a remote consultant based in Tunisia, I manage international relations, conduct IT training sessions with our partners in telecommunications networks, obtain certifications in IT domains, and participate in important conferences and meetings on behalf of the company with Innovaphone.",
    achievements: [
      "Managed international partnerships and client relations",
      "Delivered IT training programs to telecom partners",
      "Earned multiple IT certifications",
      "Represented the company at Innovaphone conferences",
    ],
    tags: [
      "International Relations",
      "IT Training",
      "Innovaphone",
      "Telecommunications",
    ],
  },
  {
    id: 2,
    role: "Freelance Senior Fullstack Developer",
    company: "Cyberperformance",
    logo: "/avatars/cyberperformance.png",
    period: "2017 - 2018",
    description:
      "Worked full time as a senior Full Stack Developer on websites redesigns and on a reiew management project for the company.",
    achievements: [
      "Contributed to complete website redesign",
      "Collaborated with startup team on frontend and backend tasks",
      "Gained hands-on experience in full-stack development",
    ],
    tags: ["Fullstack", "SaaS", "Startup", "Web Development"],
  },
  {
    id: 3,
    role: "Freelance Frontend Developer",
    company: "KOUKA",
    logo: "/avatars/logo-kouka.png", 
    period: "July 2018 - March 2020 ",
    description:
      "Responsible for converting Photoshop mockups into frontend code and integrating them into Angular to create Single Page Applications (SPAs) for our clients.",
    achievements: [
      "Converted 20+ Photoshop designs to Angular applications",
      "Developed responsive Single Page Applications for international clients",
      "Ensured pixel-perfect implementation of design mockups",
    ],
    tags: ["Angular", "Photoshop", "SPA", "Frontend"],
  },
  {
    id: 4,
    role: "Prestashop/WordPress Developer",
    company: "NETMARKETING",
    logo: "/avatars/logo-netmarketing.png", 
    period: "January 2020 - October 2020",
    description:
      "Responsible for developing e-commerce and showcase websites using Prestashop and WordPress.",
    achievements: [
      "Developed multiple e-commerce platforms",
      "Created custom WordPress themes for showcase websites",
      "Optimized website performance and user experience",
    ],
    tags: ["Prestashop", "WordPress", "E-commerce", "PHP"],
  },
  {
    id: 5,
    role: "Fullstack Developer",
    company: "CVPT",
    logo: "/avatars/logo-cvpt.png",
    period: "January 2021 - Nov 2021",
    description:
      "Responsible for developing the elearning platform for CVPT with my workmate.",
    achievements: [
      "Built native website from scratch",
      "Developed custom e-commerce solutions",
      "Implemented responsive design ",
    ],
    tags: [
      "Fullstack",
      "E-learning",
      "Native Development",
      "Responsive Design",
    ],
  },
  {
    id: 6,
    role: "Lead Developer & Project Manager",
    company: "JMK&ASSOCIES",
    logo: "/avatars/logo-jmk.jpg", 
    period: "January 2021 - November 2021",
    description:
      "Served as lead developer managing web projects, overseeing both design and development phases.",
    achievements: [
      "Led development team across multiple projects",
      "Managed project timelines and deliverables",
      "Oversaw design-to-development workflow",
      "Coordinated with stakeholders on project requirements",
    ],
    tags: [
      "Project Management",
      "Team Leadership",
      "Web Development",
      "Design Oversight",
    ],
  },
  {
    id: 7,
    role: "Freelance E-commerce Developer",
    company: "ECOPOWER ECEAULO",
    logo: "/avatars/logo-ecopower.webp", 
    period: "September 2021 - November 2022 & September 2023",
    description:
      "Began developing an e-commerce website for Ecopower Eceaulo in September 2021. The project was relaunched in September 2023 with a new design and expanded functionality.",
    achievements: [
      "Developed initial e-commerce platform (2021-2022)",
      "Relaunched project with modern tech stack (2023)",
      "Implemented new design and enhanced features",
      "Maintained long-term client relationship",
    ],
    tags: [
      "E-commerce",
      "Web Development",
      "Client Management",
      "Project Relaunch",
    ],
  },
  {
    id: 8,
    role: "Freelance Web Developer",
    company: "COLLABORATION CAPITAL",
    logo: "/avatars/logo-cca.png",
    period: "December 2021 - July 2023",
    description:
      "Worked as a freelance developer managing web projects, handling design and development for Collaboration Capital in Marseille, France.",
    achievements: [
      "Managed complete web project lifecycle",
      "Handled both design and development phases",
      "Maintained client communication across international borders",
      "Delivered multiple successful web solutions",
    ],
    tags: ["Freelance", "Web Development", "Design", "International Client"],
  },
  {
    id: 9,
    role: "Freelance Fullstack Developer",
    company: "HELLODATI",
    logo: "/avatars/hello_dati_logo.jfif", 
    period: "January 2023 - June 2023",
    description:
      "Collaborated with the Hello Dati team on developing a BUSINESS HOTEL web application. Completed a 6-month mission using ANGULAR, NESTJS, JavaScript, and PHP. Version 1 (PHP/JS/JQuery) is live, and Version 2 (ANGULAR/NESTJS) was completed for 2024.",
    achievements: [
      "Developed BUSINESS HOTEL web application",
      "Worked with ANGULAR, NESTJS, JavaScript, and PHP",
      "Contributed to V1 (live) and V2 (completed) releases",
      "Collaborated effectively in a team environment",
    ],
    tags: [
      "ANGULAR",
      "NESTJS",
      "PHP",
      "JavaScript",
      "JQuery",
      "Team Collaboration",
    ],
  },
  {
    id: 10,
    role: "Freelance Instructor",
    company: "SELF-EMPLOYED",
    logo: "/avatars/logo-MA.png",
    period: "2024 - Present",
    description:
      "Providing personalized 1-on-1 professional training in web development, MS Office Suite, DevOps, digital marketing, and business productivity tools. Creating customized curricula for working professionals, corporate clients, and career accelerators. Conducting live sessions via Google Meet and MS Teams with flexible scheduling tailored to each student's professional commitments and learning objectives.",
    achievements: [
      "Developed personalized curricula for 15+ professionals",
      "Conducted 100+ live training sessions",
      "Helped students achieve measurable career advancement",
      "Created comprehensive training materials for multiple disciplines",
    ],
    tags: [
      "Web Development",
      "MS Office",
      "DevOps",
      "Digital Marketing",
      "1-on-1 Training",
      "Google Meet",
      "MS Teams",
    ],
  },
  {
    id: 11,
    role: "Freelance Remote Instructor",
    company: "LEADERFORMA CENTER",
    logo: "/avatars/logo-leader-forma.png",
    period: "2025 - Present",
    description:
      "Delivering remote professional training courses in collaboration with Leaderforma Center. Specializing in practical, hands-on instruction for professionals seeking to enhance their technical and business skills. Developing and adapting course materials to meet the specific needs of adult learners and working professionals. Conducting interactive training sessions focused on immediate workplace application and measurable skill development.",
    achievements: [
      "Developed customized training programs for corporate clients",
      "Adapted course materials for adult learners",
      "Delivered practical, application-focused instruction",
      "Received positive feedback for teaching methodology",
    ],
    tags: [
      "Remote Training",
      "Professional Development",
      "Curriculum Design",
      "Adult Learning",
      "Corporate Training",
    ],
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