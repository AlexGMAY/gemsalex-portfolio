import { Code, Palette } from "lucide-react";
import Image from "next/image";
import React from "react";

const CoursesCat = () => {
  return (
    <section
      id="courses"
      className="px-4 py-16 md:py-24 bg-gradient-to-b from-gray-950 to-black"
    >
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500/20 to-lime-500/20 px-4 py-1.5 mb-4">
                <span className="text-xs font-medium text-lime-300">
                  Visual Learning Experience
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                See What You&apos;ll{" "}
                <span className="bg-gradient-to-r from-blue-400 to-lime-400 bg-clip-text text-transparent block sm:inline">
                  Master & Build
                </span>
              </h2>
              <p className="mt-4 text-gray-400 text-sm sm:text-base max-w-2xl">
                Practical, hands-on learning with real project examples and
                visual demonstrations
              </p>
            </div>
            <div className="hidden md:block rounded-full bg-gradient-to-r from-blue-500/20 to-lime-500/20 px-6 py-3">
              <span className="text-sm font-medium text-lime-300">
                Project-Based Learning
              </span>
            </div>
          </div>

          {/* Mobile-only badge */}
          <div className="mt-4 md:hidden">
            <span className="inline-block rounded-full bg-gradient-to-r from-blue-500/20 to-lime-500/20 px-4 py-2 text-xs font-medium text-lime-300">
              Project-Based Learning
            </span>
          </div>
        </div>

        <div className="grid gap-8 md:gap-10 lg:grid-cols-2">
          {/* Tech & Development Mastery */}
          <div className="group relative overflow-hidden rounded-2xl md:rounded-3xl border border-blue-500/30 bg-gradient-to-br from-gray-900 to-black">
            <div className="relative z-10 p-0 overflow-hidden">
              {/* Header with Real Image */}
              <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
                  alt="Technology and development workspace"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={85}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/60 to-transparent" />

                <div className="relative h-full flex items-center p-4 md:p-8">
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2 sm:mb-4">
                      <div className="rounded-2xl bg-gradient-to-br from-blue-500/30 to-blue-600/30 p-2 sm:p-3 w-fit backdrop-blur-sm">
                        <Code className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-blue-300" />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white">
                        Technology & Development
                      </h3>
                    </div>
                    <p className="text-sm sm:text-base text-blue-200 max-w-md">
                      Build real applications from day one with expert guidance
                    </p>
                  </div>
                </div>

                <div className="absolute top-3 right-3 md:top-4 md:right-4 rounded-full bg-black/50 backdrop-blur-sm px-2 py-1 md:px-3 md:py-1.5">
                  <span className="text-xs font-medium text-blue-300">
                    15+ Projects
                  </span>
                </div>
              </div>

              {/* Course Cards - Full width on mobile */}
              <div className="p-4 md:p-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    {
                      skill: "Web Development",
                      level: "Advanced",
                      image:
                        "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200&q=80",
                      project: "Build Full Portfolio Website",
                      description:
                        "Create responsive, modern websites from scratch",
                    },
                    {
                      skill: "WordPress Development",
                      level: "Expert",
                      image:
                        "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200&q=80",
                      project: "Custom E-commerce Solution",
                      description:
                        "Build custom themes and plugins for WordPress",
                    },
                    {
                      skill: "DevOps Engineering",
                      level: "Professional",
                      image:
                        "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200&q=80",
                      project: "CI/CD Pipeline Setup",
                      description: "Automate deployment and infrastructure",
                    },
                    {
                      skill: "VBA Automation",
                      level: "Advanced",
                      image:
                        "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200&q=80",
                      project: "Excel Dashboard Automation",
                      description:
                        "Automate repetitive tasks and create powerful macros",
                    },
                    {
                      skill: "MS Access Database",
                      level: "Expert",
                      image:
                        "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200&q=80",
                      project: "Database Design & Management",
                      description:
                        "Build robust database solutions for business",
                    },
                    {
                      skill: "Custom Software",
                      level: "Professional",
                      image:
                        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200&q=80",
                      project: "Tailored Business Solutions",
                      description:
                        "Develop custom software for your specific needs",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="group/card relative overflow-hidden rounded-xl border border-gray-800 bg-gradient-to-br from-gray-900/80 to-gray-950/80 backdrop-blur-sm hover:border-blue-500/50 transition-all"
                    >
                      <div className="relative h-40 sm:h-36 md:h-32 overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.skill}
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
                          quality={75}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                        <div className="absolute top-2 right-2 rounded-full bg-black/70 backdrop-blur-sm px-2 py-1">
                          <span className="text-xs font-medium text-blue-300">
                            {item.level}
                          </span>
                        </div>
                      </div>

                      <div className="p-4">
                        <h4 className="font-semibold text-white text-base mb-1">
                          {item.skill}
                        </h4>
                        <p className="text-sm text-gray-400 mb-2">
                          {item.project}
                        </p>
                        <p className="text-xs text-gray-500 mb-3">
                          {item.description}
                        </p>
                        <div className="flex items-center gap-2">
                          <div className="flex-1 h-1.5 bg-gray-800 rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-blue-500 to-lime-500 w-3/4"></div>
                          </div>
                          <span className="text-xs text-gray-400">
                            75% complete
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Business & Productivity Excellence */}
          <div className="group relative overflow-hidden rounded-2xl md:rounded-3xl border border-lime-500/30 bg-gradient-to-br from-gray-900 to-black">
            <div className="relative z-10 p-0 overflow-hidden">
              {/* Header with Real Image */}
              <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
                  alt="Business and productivity workspace"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={85}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-lime-900/80 via-lime-800/60 to-transparent" />

                <div className="relative h-full flex items-center p-4 md:p-8">
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2 sm:mb-4">
                      <div className="rounded-2xl bg-gradient-to-br from-lime-500/30 to-lime-600/30 p-2 sm:p-3 w-fit backdrop-blur-sm">
                        <Palette className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-lime-300" />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white">
                        Business & Productivity
                      </h3>
                    </div>
                    <p className="text-sm sm:text-base text-lime-200 max-w-md">
                      Master tools that drive real business results
                    </p>
                  </div>
                </div>

                <div className="absolute top-3 right-3 md:top-4 md:right-4 rounded-full bg-black/50 backdrop-blur-sm px-2 py-1 md:px-3 md:py-1.5">
                  <span className="text-xs font-medium text-lime-300">
                    12+ Tools Mastered
                  </span>
                </div>
              </div>

              {/* Course Cards - Full width on mobile */}
              <div className="p-4 md:p-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    {
                      skill: "MS Office Suite Mastery",
                      level: "Expert",
                      image:
                        "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200&q=80",
                      project: "Advanced Excel Dashboards",
                      description: "Master Excel, Word, PowerPoint and Access",
                    },
                    {
                      skill: "Project Management",
                      level: "Professional",
                      image:
                        "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200&q=80",
                      project: "Gantt Charts & Timelines",
                      description:
                        "Plan, execute and track projects effectively",
                    },
                    {
                      skill: "Digital Marketing",
                      level: "Advanced",
                      image:
                        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200&q=80",
                      project: "Campaign Analytics Setup",
                      description: "Drive traffic and convert leads",
                    },
                    {
                      skill: "SEO & Google Ads",
                      level: "Expert",
                      image:
                        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200&q=80",
                      project: "Keyword Strategy & PPC",
                      description: "Optimize search presence and ad spend",
                    },
                    {
                      skill: "Business Communication",
                      level: "Professional",
                      image:
                        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200&q=80",
                      project: "English & French for Business",
                      description: "Professional communication skills",
                    },
                    {
                      skill: "MS 365 Integration",
                      level: "Advanced",
                      image:
                        "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200&q=80",
                      project: "Enterprise Collaboration",
                      description:
                        "Master Teams, SharePoint and Power Platform",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="group/card relative overflow-hidden rounded-xl border border-gray-800 bg-gradient-to-br from-gray-900/80 to-gray-950/80 backdrop-blur-sm hover:border-lime-500/50 transition-all"
                    >
                      <div className="relative h-40 sm:h-36 md:h-32 overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.skill}
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
                          quality={75}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                        <div className="absolute top-2 right-2 rounded-full bg-black/70 backdrop-blur-sm px-2 py-1">
                          <span className="text-xs font-medium text-lime-300">
                            {item.level}
                          </span>
                        </div>
                      </div>

                      <div className="p-4">
                        <h4 className="font-semibold text-white text-base mb-1">
                          {item.skill}
                        </h4>
                        <p className="text-sm text-gray-400 mb-2">
                          {item.project}
                        </p>
                        <p className="text-xs text-gray-500 mb-3">
                          {item.description}
                        </p>
                        <div className="flex items-center gap-2">
                          <div className="flex-1 h-1.5 bg-gray-800 rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-lime-500 to-blue-500 w-4/5"></div>
                          </div>
                          <span className="text-xs text-gray-400">
                            80% complete
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesCat;
