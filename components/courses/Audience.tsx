import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const Audience = () => {
  return (
    <section className="px-4 py-20">
              <div className="container mx-auto max-w-7xl">
                <div className="mb-16 text-center">
                  <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500/20 to-lime-500/20 px-4 py-1 mb-4">
                    <span className="text-xs font-medium text-lime-300">
                      Who Benefit Most
                    </span>
                  </div>
                  <h2 className="text-4xl font-bold md:text-5xl">
                    Designed for{" "}
                    <span className="bg-gradient-to-r from-blue-400 to-lime-400 bg-clip-text text-transparent">
                      Ambitious Professionals
                    </span>
                  </h2>
                  <p className="mx-auto mt-4 max-w-2xl text-gray-400">
                    Our personalized training serves career-focused individuals
                    seeking measurable growth and practical skill development
                  </p>
                </div>
    
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                  {[
                    {
                      image:
                        "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
                      title: "Corporate Professionals",
                      description:
                        "Executives & managers seeking digital transformation and leadership advancement",
                      benefits: [
                        "Strategic upskilling for promotions",
                        "Digital leadership development",
                        "Operational efficiency gains",
                      ],
                      icon: "🏢",
                      idealCourses: [
                        "MS Office Mastery",
                        "Project Management",
                        "Data Analytics",
                      ],
                    },
                    {
                      image:
                        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
                      title: "Tech Career Changers",
                      description:
                        "Professionals transitioning into technology roles or expanding technical expertise",
                      benefits: [
                        "Career transition support",
                        "Practical portfolio building",
                        "Industry-relevant skills",
                      ],
                      icon: "💻",
                      idealCourses: [
                        "Web Development",
                        "DevOps",
                        "Software Engineering",
                      ],
                    },
                    {
                      image:
                        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
                      title: "Business Entrepreneurs",
                      description:
                        "Founders and business owners optimizing operations and scaling digitally",
                      benefits: [
                        "Business automation skills",
                        "Digital marketing mastery",
                        "Data-driven decision making",
                      ],
                      icon: "🚀",
                      idealCourses: [
                        "Digital Marketing",
                        "Excel Automation",
                        "SEO & Analytics",
                      ],
                    },
                    {
                      image:
                        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
                      title: "Productivity Experts",
                      description:
                        "Professionals optimizing workflows and mastering productivity tools",
                      benefits: [
                        "Advanced tool mastery",
                        "Workflow optimization",
                        "Time management systems",
                      ],
                      icon: "⚡",
                      idealCourses: [
                        "MS 365 Suite",
                        "Project Tools",
                        "Automation Scripting",
                      ],
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
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
    
                        {/* Title Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-xl">{item.icon}</span>
                            <h3 className="text-lg font-bold text-white">
                              {item.title}
                            </h3>
                          </div>
                        </div>
    
                        {/* Audience Badge */}
                        <div className="absolute top-4 right-4 rounded-full bg-black/70 backdrop-blur-sm px-3 py-1">
                          <span className="text-xs font-medium text-blue-300">
                            Target Audience
                          </span>
                        </div>
                      </div>
    
                      {/* Content */}
                      <div className="p-6">
                        {/* Description */}
                        <p className="text-sm text-gray-300 mb-6">
                          {item.description}
                        </p>
    
                        {/* Benefits List */}
                        <div className="mb-6">
                          <h4 className="text-sm font-semibold text-lime-300 mb-3 flex items-center gap-2">
                            <span className="text-xs">✓</span> Key Benefits
                          </h4>
                          <ul className="space-y-2">
                            {item.benefits.map((benefit, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-lime-500 mt-1.5 flex-shrink-0" />
                                <span className="text-xs text-gray-400">
                                  {benefit}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
    
                        {/* Ideal Courses */}
                        <div className="pt-4 border-t border-gray-800">
                          <h4 className="text-xs font-semibold text-blue-300 mb-2">
                            Ideal For These Courses:
                          </h4>
                          <div className="flex flex-wrap gap-1.5">
                            {item.idealCourses.map((course, idx) => (
                              <span
                                key={idx}
                                className="inline-block rounded-full bg-blue-500/10 px-2 py-1 text-xs text-blue-300 border border-blue-500/20"
                              >
                                {course}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
    
                {/* Audience Impact Section */}
                <div className="mt-16 rounded-3xl bg-gradient-to-r from-gray-900 to-black border border-gray-800 p-8 md:p-12">
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                      <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500/20 to-lime-500/20 px-4 py-1 mb-6">
                        <span className="text-xs font-medium text-lime-300">
                          Why Choose Personalized Training
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-6">
                        <span className="bg-gradient-to-r from-blue-300 to-lime-300 bg-clip-text text-transparent">
                          Tailored for Your Career Stage
                        </span>
                      </h3>
    
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <div className="rounded-lg bg-gradient-to-r from-blue-500/20 to-lime-500/20 p-2">
                            <span className="text-lg">🎯</span>
                          </div>
                          <div>
                            <h4 className="font-medium text-white mb-1">
                              Custom Learning Paths
                            </h4>
                            <p className="text-sm text-gray-400">
                              Training adapts to your current skill level and
                              specific career objectives
                            </p>
                          </div>
                        </div>
    
                        <div className="flex items-start gap-3">
                          <div className="rounded-lg bg-gradient-to-r from-blue-500/20 to-lime-500/20 p-2">
                            <span className="text-lg">⏱️</span>
                          </div>
                          <div>
                            <h4 className="font-medium text-white mb-1">
                              Flexible Scheduling
                            </h4>
                            <p className="text-sm text-gray-400">
                              Sessions fit around your work commitments and peak
                              productivity hours
                            </p>
                          </div>
                        </div>
    
                        <div className="flex items-start gap-3">
                          <div className="rounded-lg bg-gradient-to-r from-blue-500/20 to-lime-500/20 p-2">
                            <span className="text-lg">📊</span>
                          </div>
                          <div>
                            <h4 className="font-medium text-white mb-1">
                              Practical Application
                            </h4>
                            <p className="text-sm text-gray-400">
                              Learn skills you can immediately apply to real work
                              challenges
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
    
                    {/* Audience Stats */}
                    <div className="grid grid-cols-2 gap-6">
                      {[
                        {
                          icon: "👥",
                          label: "Primary Audience",
                          value: "Professionals 25-60+",                   
                          description: "Career-focused adults",
                        },
                        {
                          icon: "🎓",
                          label: "Education Level",
                          value: "College+",
                          description: "College degree or higher",
                        },
                        {
                          icon: "💼",
                          label: "Work Experience",
                          value: "1+ Years",
                          description: "Junior to senior level",
                        },
                        {
                          icon: "🎯",
                          label: "Training Goal",
                          value: "Career Growth",
                          description: "Promotion & skills",
                        },
                      ].map((stat, index) => (
                        <div
                          key={index}
                          className="relative overflow-hidden rounded-2xl border border-gray-800 bg-gray-900/30 backdrop-blur-sm p-6"
                        >
                          {/* Background Gradient */}
                          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-lime-900/10" />
    
                          {/* Content */}
                          <div className="relative z-10">
                            <div className="text-3xl mb-3">{stat.icon}</div>
                            <p className="text-sm text-gray-400 mb-1">
                              {stat.label}
                            </p>
                            <p className="text-xl font-bold text-white mb-1">
                              {stat.value}
                            </p>
                            <p className="text-xs text-gray-500">
                              {stat.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
    
                {/* CTA for Target Audience */}
                <div className="mt-12 text-center">
                  <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-4 rounded-2xl bg-gradient-to-r from-blue-500/10 to-lime-500/10 border border-gray-800 p-6 max-w-4xl mx-auto">
                    <div className="text-left">
                      <h4 className="font-semibold text-white mb-1">
                        Ready to Advance Your Career?
                      </h4>
                      <p className="text-sm text-gray-400">
                        Schedule a free consultation to discuss your specific goals
                        and ideal learning path
                      </p>
                    </div>
                    <Link
                      href="/contact"
                      className="rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3 font-semibold text-white transition-all hover:shadow-lg hover:shadow-blue-500/25"
                    >
                      Book Free Consultation
                    </Link>
                  </div>
                </div>
              </div>
            </section>
  )
}

export default Audience