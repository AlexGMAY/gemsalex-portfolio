import React from 'react'
import Image from 'next/image'

const Testimonial = () => {
  return (
    <div>
        <section className="px-4 py-20">
                  <div className="container mx-auto max-w-7xl">
                    <div className="mb-16 text-center">
                      <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500/20 to-lime-500/20 px-4 py-1 mb-4">
                        <span className="text-xs font-medium text-lime-300">
                          Success Stories
                        </span>
                      </div>
                      <h2 className="text-4xl font-bold md:text-5xl">
                        Professionals Who{" "}
                        <span className="bg-gradient-to-r from-blue-400 to-lime-400 bg-clip-text text-transparent">
                          Transformed Their Careers With These Courses
                        </span>
                      </h2>
                      <p className="mx-auto mt-4 max-w-2xl text-gray-400">
                        Real-world results from professionals across industries and
                        career stages
                      </p>
                    </div>
        
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                      {[
                        {
                          image:
                            "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
                          title: "Corporate Executives",
                          description:
                            "Strategic upskilling for leadership advancement and organizational impact",
                          name: "Michael R.",
                          role: "Operations Director",
                          result: "65% efficiency increase",
                          course: "MS Excel & Automation",
                        },
                        {
                          image:
                            "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
                          title: "Senior Managers",
                          description:
                            "Team leaders optimizing operations with advanced tools",
                          name: "Sarah L.",
                          role: "Marketing Manager",
                          result: "40% faster reporting",
                          course: "Data Analytics",
                        },
                        {
                          image:
                            "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
                          title: "Enterprise Freelancers",
                          description:
                            "Independent professionals expanding service offerings",
                          name: "David K.",
                          role: "Digital Consultant",
                          result: "2.3x higher rates",
                          course: "Web Development",
                        },
                        {
                          image:
                            "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
                          title: "Career Accelerators",
                          description:
                            "Ambitious professionals transitioning to tech roles",
                          name: "Jessica T.",
                          role: "Project Coordinator",
                          result: "78% career advancement",
                          course: "Project Management",
                        },
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="group relative overflow-hidden rounded-3xl border border-gray-800 bg-gradient-to-br from-gray-900 to-black"
                        >
                          {/* Profile Image */}
                          <div className="relative h-48 overflow-hidden">
                            <Image
                              src={item.image}
                              alt={item.title}
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 50vw, 25vw"
                              quality={80}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        
                            {/* Title Overlay */}
                            <div className="absolute bottom-0 left-0 right-0 p-4">
                              <h3 className="text-lg font-bold text-white">
                                {item.title}
                              </h3>
                            </div>
        
                            {/* Course Badge */}
                            <div className="absolute top-4 right-4 rounded-full bg-black/70 backdrop-blur-sm px-3 py-1">
                              <span className="text-xs font-medium text-lime-300">
                                {item.course}
                              </span>
                            </div>
                          </div>
        
                          {/* Content */}
                          <div className="p-6">
                            {/* Professional Info */}
                            <div className="mb-4">
                              <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-lime-500 flex items-center justify-center text-white font-bold">
                                  {item.name
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                                </div>
                                <div>
                                  <p className="font-medium text-white">{item.name}</p>
                                  <p className="text-sm text-gray-500">{item.role}</p>
                                </div>
                              </div>
                              <p className="text-sm text-gray-400 mb-4">
                                {item.description}
                              </p>
                            </div>
        
                            {/* Results */}
                            <div className="mt-4 pt-4 border-t border-gray-800">
                              <div className="flex items-center justify-between">
                                <div>
                                  <p className="text-xs text-gray-500">Achieved:</p>
                                  <p className="text-sm font-semibold text-lime-400">
                                    {item.result}
                                  </p>
                                </div>
                                <div className="text-right">
                                  <p className="text-xs text-gray-500">Course:</p>
                                  <p className="text-sm font-medium text-blue-300">
                                    {item.course}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
        
                    {/* Success Metrics Section */}
                    <div className="mt-16 rounded-3xl bg-gradient-to-r from-gray-900 to-black border border-gray-800 p-8 md:p-12">
                      <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500/20 to-lime-500/20 px-4 py-1 mb-6">
                            <span className="text-xs font-medium text-lime-300">
                              Impact Metrics
                            </span>
                          </div>
                          <h3 className="text-2xl font-bold text-white mb-6">
                            <span className="bg-gradient-to-r from-blue-300 to-lime-300 bg-clip-text text-transparent">
                              Measurable Career Transformation
                            </span>
                          </h3>
        
                          {/* Testimonial with Image */}
                          <div className="bg-gray-900/50 rounded-2xl p-6 border border-gray-800">
                            <div className="flex items-start gap-4">
                              <Image
                                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80"
                                alt="Student testimonial"
                                width={64}
                                height={64}
                                className="rounded-full object-cover"
                              />
                              <div>
                                <p className="text-gray-300 italic mb-3">
                                  "The visual examples and real project work made
                                  complex concepts immediately understandable. I
                                  automated 10 hours of weekly reporting within the
                                  first month."
                                </p>
                                <div>
                                  <p className="font-medium text-white">
                                    Marketing Director
                                  </p>
                                  <p className="text-sm text-gray-500">
                                    30-hour MS Excel & Automation Course
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
        
                        {/* Stats Grid with Icons */}
                        <div className="grid grid-cols-2 gap-6">
                          {[
                            {
                              icon: "🎓",
                              label: "Certification Rate",
                              value: "98%",
                              image:
                                "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=150&q=80",
                            },
                            {
                              icon: "⏱️",
                              label: "Time Saved Weekly",
                              value: "15+ hours",
                              image:
                                "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=150&q=80",
                            },
                            {
                              icon: "💰",
                              label: "Average ROI",
                              value: "3.2x",
                              image:
                                "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=150&q=80",
                            },
                            {
                              icon: "📈",
                              label: "Career Advancement",
                              value: "78%",
                              image:
                                "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=150&q=80",
                            },
                          ].map((stat, index) => (
                            <div
                              key={index}
                              className="group/stat relative overflow-hidden rounded-2xl border border-gray-800 bg-gray-900/30 backdrop-blur-sm"
                            >
                              {/* Background Image */}
                              <div className="absolute inset-0">
                                <Image
                                  src={stat.image}
                                  alt={stat.label}
                                  fill
                                  className="object-cover opacity-20"
                                  sizes="(max-width: 768px) 50vw, 25vw"
                                  quality={70}
                                />
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-lime-900/30" />
                              </div>
        
                              {/* Content */}
                              <div className="relative z-10 p-6">
                                <div className="text-3xl mb-3">{stat.icon}</div>
                                <p className="text-sm text-gray-400 mb-2">
                                  {stat.label}
                                </p>
                                <p className="text-2xl font-bold text-white">
                                  {stat.value}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
        
    </div>
  )
}

export default Testimonial