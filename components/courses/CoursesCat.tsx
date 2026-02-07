import { Code, Palette } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const CoursesCat = () => {
  return (
    <section id='courses' className="px-4 py-24 bg-gradient-to-b from-gray-950 to-black">
              <div className="container mx-auto max-w-7xl">
                <div className="mb-16">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500/20 to-lime-500/20 px-4 py-1 mb-4">
                        <span className="text-xs font-medium text-lime-300">
                          Visual Learning Experience
                        </span>
                      </div>
                      <h2 className="text-4xl font-bold md:text-5xl">
                        See What You'll{" "}
                        <span className="bg-gradient-to-r from-blue-400 to-lime-400 bg-clip-text text-transparent">
                          Master & Build
                        </span>
                      </h2>
                      <p className="mt-4 text-gray-400">
                        Practical, hands-on learning with real project examples and
                        visual demonstrations
                      </p>
                    </div>
                    <div className="hidden rounded-full bg-gradient-to-r from-blue-500/20 to-lime-500/20 px-6 py-3 md:block">
                      <span className="text-sm font-medium text-lime-300">
                        Project-Based Learning
                      </span>
                    </div>
                  </div>
                </div>
    
                <div className="grid gap-8 lg:grid-cols-2">
                  {/* Tech & Development Mastery - With Real Images */}
                  <div className="group relative overflow-hidden rounded-3xl border border-blue-500/30 bg-gradient-to-br from-gray-900 to-black">
                    <div className="relative z-10 p-0 overflow-hidden">
                      {/* Header with Real Image */}
                      <div className="relative h-64 overflow-hidden">
                        {/* Background Image */}
                        <Image
                          src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
                          alt="Technology and development workspace"
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                          quality={85}
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/60 to-transparent" />
    
                        <div className="relative h-full flex items-center p-8">
                          <div>
                            <div className="inline-flex items-center gap-3 mb-4">
                              <div className="rounded-2xl bg-gradient-to-br from-blue-500/30 to-blue-600/30 p-3 backdrop-blur-sm">
                                <Code className="h-10 w-10 text-blue-300" />
                              </div>
                              <h3 className="text-2xl font-bold text-white">
                                Technology & Development
                              </h3>
                            </div>
                            <p className="text-blue-200 max-w-md">
                              Build real applications from day one with expert
                              guidance
                            </p>
                          </div>
                        </div>
    
                        {/* Badge */}
                        <div className="absolute top-4 right-4 rounded-full bg-black/50 backdrop-blur-sm px-3 py-1">
                          <span className="text-xs font-medium text-blue-300">
                            15+ Projects
                          </span>
                        </div>
                      </div>
    
                      {/* Course Grid with Project Images */}
                      <div className="p-8">
                        <div className="grid grid-cols-2 gap-4">
                          {[
                            {
                              skill: "Web Development",
                              level: "Advanced",
                              image:
                                "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200&q=80",
                              project: "Build Full Portfolio Website",
                            },
                            {
                              skill: "WordPress Dev",
                              level: "Expert",
                              image:
                                "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200&q=80",
                              project: "Custom E-commerce Solution",
                            },
                            {
                              skill: "DevOps",
                              level: "Professional",
                              image:
                                "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200&q=80",
                              project: "CI/CD Pipeline Setup",
                            },
                            {
                              skill: "VBA Automation",
                              level: "Advanced",
                              image:
                                "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200&q=80",
                              project: "Excel Dashboard Automation",
                            },
                          ].map((item, index) => (
                            <div
                              key={index}
                              className="group/card relative overflow-hidden rounded-xl border border-gray-800 bg-gradient-to-br from-gray-900/80 to-gray-950/80 backdrop-blur-sm"
                            >
                              {/* Course Image */}
                              <div className="relative h-32 overflow-hidden">
                                <Image
                                  src={item.image}
                                  alt={item.skill}
                                  fill
                                  className="object-cover"
                                  sizes="(max-width: 768px) 50vw, 25vw"
                                  quality={75}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
    
                                {/* Level Badge */}
                                <div className="absolute top-2 right-2 rounded-full bg-black/70 backdrop-blur-sm px-2 py-1">
                                  <span className="text-xs font-medium text-blue-300">
                                    {item.level}
                                  </span>
                                </div>
                              </div>
    
                              {/* Course Info */}
                              <div className="p-4">
                                <div className="flex items-center justify-between mb-2">
                                  <h4 className="font-semibold text-white text-sm">
                                    {item.skill}
                                  </h4>
                                </div>
                                <p className="text-xs text-gray-400 mb-3">
                                  {item.project}
                                </p>
                                <div className="flex items-center gap-1">
                                  <div className="flex-1 h-1 bg-gray-800 rounded-full overflow-hidden">
                                    <div className="h-full bg-gradient-to-r from-blue-500 to-lime-500 w-3/4"></div>
                                  </div>
                                  <span className="text-xs text-gray-500">75%</span>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
    
                        {/* Additional Courses List */}
                        <div className="mt-6 grid grid-cols-2 gap-3">
                          {[
                            { skill: "MS Access Database", level: "Expert" },
                            { skill: "Custom Software", level: "Professional" },
                          ].map((item, index) => (
                            <div
                              key={index}
                              className="flex items-center justify-between rounded-lg border border-gray-800 bg-gray-900/30 p-3"
                            >
                              <span className="text-sm text-gray-300">
                                {item.skill}
                              </span>
                              <span className="rounded-full bg-blue-500/20 px-2 py-1 text-xs font-medium text-blue-300">
                                {item.level}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
    
                  {/* Business & Productivity Excellence - With Real Images */}
                  <div className="group relative overflow-hidden rounded-3xl border border-lime-500/30 bg-gradient-to-br from-gray-900 to-black">
                    <div className="relative z-10 p-0 overflow-hidden">
                      {/* Header with Real Image */}
                      <div className="relative h-64 overflow-hidden">
                        {/* Background Image */}
                        <Image
                          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
                          alt="Business and productivity workspace"
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                          quality={85}
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-lime-900/80 via-lime-800/60 to-transparent" />
    
                        <div className="relative h-full flex items-center p-8">
                          <div>
                            <div className="inline-flex items-center gap-3 mb-4">
                              <div className="rounded-2xl bg-gradient-to-br from-lime-500/30 to-lime-600/30 p-3 backdrop-blur-sm">
                                <Palette className="h-10 w-10 text-lime-300" />
                              </div>
                              <h3 className="text-2xl font-bold text-white">
                                Business & Productivity
                              </h3>
                            </div>
                            <p className="text-lime-200 max-w-md">
                              Master tools that drive real business results
                            </p>
                          </div>
                        </div>
    
                        {/* Badge */}
                        <div className="absolute top-4 right-4 rounded-full bg-black/50 backdrop-blur-sm px-3 py-1">
                          <span className="text-xs font-medium text-lime-300">
                            12+ Tools Mastered
                          </span>
                        </div>
                      </div>
    
                      {/* Course Grid with Project Images */}
                      <div className="p-8">
                        <div className="grid grid-cols-2 gap-4">
                          {[
                            {
                              skill: "MS Office Suite",
                              level: "Expert",
                              image:
                                "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200&q=80",
                              project: "Advanced Excel Dashboards",
                            },
                            {
                              skill: "Project Management",
                              level: "Professional",
                              image:
                                "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200&q=80",
                              project: "Gantt Charts & Timelines",
                            },
                            {
                              skill: "Digital Marketing",
                              level: "Advanced",
                              image:
                                "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200&q=80",
                              project: "Campaign Analytics Setup",
                            },
                            {
                              skill: "SEO & Google Ads",
                              level: "Expert",
                              image:
                                "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200&q=80",
                              project: "Keyword Strategy & PPC",
                            },
                          ].map((item, index) => (
                            <div
                              key={index}
                              className="group/card relative overflow-hidden rounded-xl border border-gray-800 bg-gradient-to-br from-gray-900/80 to-gray-950/80 backdrop-blur-sm"
                            >
                              {/* Course Image */}
                              <div className="relative h-32 overflow-hidden">
                                <Image
                                  src={item.image}
                                  alt={item.skill}
                                  fill
                                  className="object-cover"
                                  sizes="(max-width: 768px) 50vw, 25vw"
                                  quality={75}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
    
                                {/* Level Badge */}
                                <div className="absolute top-2 right-2 rounded-full bg-black/70 backdrop-blur-sm px-2 py-1">
                                  <span className="text-xs font-medium text-lime-300">
                                    {item.level}
                                  </span>
                                </div>
                              </div>
    
                              {/* Course Info */}
                              <div className="p-4">
                                <div className="flex items-center justify-between mb-2">
                                  <h4 className="font-semibold text-white text-sm">
                                    {item.skill}
                                  </h4>
                                </div>
                                <p className="text-xs text-gray-400 mb-3">
                                  {item.project}
                                </p>
                                <div className="flex items-center gap-1">
                                  <div className="flex-1 h-1 bg-gray-800 rounded-full overflow-hidden">
                                    <div className="h-full bg-gradient-to-r from-lime-500 to-blue-500 w-4/5"></div>
                                  </div>
                                  <span className="text-xs text-gray-500">80%</span>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
    
                        {/* Additional Courses List */}
                        <div className="mt-6 grid grid-cols-2 gap-3">
                          {[
                            {
                              skill: "Business Communication",
                              level: "Professional",
                            },
                            { skill: "MS 365 Integration", level: "Advanced" },
                          ].map((item, index) => (
                            <div
                              key={index}
                              className="flex items-center justify-between rounded-lg border border-gray-800 bg-gray-900/30 p-3"
                            >
                              <span className="text-sm text-gray-300">
                                {item.skill}
                              </span>
                              <span className="rounded-full bg-lime-500/20 px-2 py-1 text-xs font-medium text-lime-300">
                                {item.level}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
  )
}

export default CoursesCat