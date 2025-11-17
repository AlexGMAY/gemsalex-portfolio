"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import {
  Code,
  BarChart,
  Globe,
  Smartphone,
  Plug,
  Cloud,
  CheckCircle,
  ArrowRight,
  Target,
  Zap,
  Users,
  Shield,
} from "lucide-react";

const detailedServices = [
  {
    id: 1,
    title: "Revenue-Driving Web Platforms",
    shortDescription:
      "Convert visitors into customers with high-performance websites engineered for user engagement and conversion optimization.",
    fullDescription:
      "I architect web platforms that don't just look beautiful—they drive measurable business outcomes. Through strategic user experience design, conversion rate optimization, and performance engineering, we transform casual browsers into loyal customers.",
    icon: <Globe className="h-8 w-8" />,
    color: "text-lime-400",
    borderColor: "border-lime-400",
    bgGradient: "from-lime-400/10 to-lime-400/5",
    features: [
      "Conversion-focused UX/UI design",
      "E-commerce and payment integration",
      "Performance optimization (90+ PageSpeed)",
      "SEO-optimized architecture",
      "Analytics and conversion tracking",
      "Multi-platform responsiveness",
    ],
    deliverables: [
      "Fully responsive web application",
      "SEO-optimized structure",
      "Performance audit report",
      "Analytics dashboard setup",
      "Documentation and training",
    ],
    process: [
      "Discovery & strategy session",
      "UX/UI prototyping",
      "Development sprint",
      "Quality assurance testing",
      "Performance optimization",
      "Launch & analytics setup",
    ],
    idealFor:
      "Businesses looking to establish or upgrade their digital presence with a focus on lead generation and customer conversion",
  },
  {
    id: 2,
    title: "Scalable SaaS Solutions",
    shortDescription:
      "Transform your business operations with custom software that automates workflows and scales with your growth.",
    fullDescription:
      "I build Software-as-a-Service platforms that automate complex business processes, reduce operational costs, and create new revenue streams. From MVP to enterprise-scale, your solution will be architected for scalability from day one.",
    icon: <Code className="h-8 w-8" />,
    color: "text-blue-300",
    borderColor: "border-blue-300",
    bgGradient: "from-blue-300/10 to-blue-300/5",
    features: [
      "Multi-tenant architecture",
      "Subscription and billing management",
      "Real-time data processing",
      "API-first design",
      "Automated workflow engines",
      "Scalable database design",
    ],
    deliverables: [
      "Production-ready SaaS platform",
      "Admin dashboard and analytics",
      "API documentation",
      "Deployment pipeline",
      "Monitoring and alerting systems",
    ],
    process: [
      "Product strategy workshop",
      "Technical architecture planning",
      "Agile development sprints",
      "Security and scalability testing",
      "CI/CD pipeline setup",
      "Launch and iteration planning",
    ],
    idealFor:
      "Startups and established businesses looking to digitize operations or create new software-based revenue streams",
  },
  {
    id: 3,
    title: "Cross-Platform Business Applications",
    shortDescription:
      "Engage your customers anywhere with seamless mobile and web experiences that drive retention and loyalty.",
    fullDescription:
      "In today's multi-device world, your customers expect seamless experiences across all platforms. I develop unified applications that maintain consistency and functionality whether accessed from desktop, tablet, or mobile devices.",
    icon: <Smartphone className="h-8 w-8" />,
    color: "text-blue-400",
    borderColor: "border-blue-400",
    bgGradient: "from-blue-400/10 to-blue-400/5",
    features: [
      "Progressive Web App (PWA) capabilities",
      "Native mobile app development",
      "Offline functionality",
      "Push notifications",
      "Cross-platform state management",
      "Unified design system",
    ],
    deliverables: [
      "Responsive web application",
      "Mobile-optimized PWA",
      "App store deployment (iOS/Android)",
      "Offline capability setup",
      "Performance optimization",
    ],
    process: [
      "Cross-platform strategy session",
      "Unified design system creation",
      "Core platform development",
      "Platform-specific optimization",
      "Testing across devices",
      "App store deployment",
    ],
    idealFor:
      "Businesses needing consistent user experiences across desktop and mobile platforms with offline capabilities",
  },
  {
    id: 4,
    title: "Cloud Infrastructure & Scalability",
    shortDescription:
      "Future-proof your technology with robust cloud architecture that ensures reliability, security, and unlimited growth potential.",
    fullDescription:
      "Your application's foundation determines its future. I design and implement cloud infrastructure that scales effortlessly, maintains 99.9%+ uptime, and adapts to your evolving business needs without technical debt.",
    icon: <Cloud className="h-8 w-8" />,
    color: "text-indigo-400",
    borderColor: "border-indigo-400",
    bgGradient: "from-indigo-400/10 to-indigo-400/5",
    features: [
      "Microservices architecture",
      "Auto-scaling infrastructure",
      "Disaster recovery planning",
      "CI/CD pipeline automation",
      "Security and compliance setup",
      "Performance monitoring",
    ],
    deliverables: [
      "Infrastructure as Code (Terraform)",
      "CI/CD pipeline configuration",
      "Monitoring and alerting dashboard",
      "Security audit report",
      "Scalability documentation",
    ],
    process: [
      "Infrastructure assessment",
      "Architecture design review",
      "Security and scaling planning",
      "Implementation and migration",
      "Load testing and optimization",
      "Monitoring setup and handover",
    ],
    idealFor:
      "Growing businesses needing robust, scalable infrastructure or migrating from legacy systems to cloud-native architecture",
  },
  {
    id: 5,
    title: "Digital Visibility & Performance",
    shortDescription:
      "Dominate search rankings and accelerate user experience with SEO-optimized, lightning-fast applications.",
    fullDescription:
      "Being found online is just as important as having a great product. I engineer applications for maximum visibility and performance, combining technical SEO excellence with blazing-fast user experiences that convert and retain.",
    icon: <BarChart className="h-8 w-8" />,
    color: "text-yellow-400",
    borderColor: "border-yellow-400",
    bgGradient: "from-yellow-400/10 to-yellow-400/5",
    features: [
      "Core Web Vitals optimization",
      "Structured data implementation",
      "Technical SEO audit and fixes",
      "Content delivery network setup",
      "Advanced analytics configuration",
      "Competitive analysis integration",
    ],
    deliverables: [
      "SEO audit and implementation report",
      "Performance optimization certificate",
      "Google Analytics 4 setup",
      "Structured data markup",
      "Ongoing monitoring dashboard",
    ],
    process: [
      "Comprehensive SEO audit",
      "Performance baseline analysis",
      "Technical implementation",
      "Testing and validation",
      "Analytics configuration",
      "Ongoing optimization plan",
    ],
    idealFor:
      "Businesses looking to improve search rankings, page speed, and overall digital marketing performance",
  },
  {
    id: 6,
    title: "Integration & Automation Systems",
    shortDescription:
      "Connect your business ecosystem with secure APIs and automation that eliminate manual work and data silos.",
    fullDescription:
      "Your business tools should work together seamlessly. I design and implement integration systems that connect your CRM, ERP, marketing platforms, and custom software—automating workflows and creating a unified data ecosystem.",
    icon: <Plug className="h-8 w-8" />,
    color: "text-cyan-400",
    borderColor: "border-cyan-400",
    bgGradient: "from-cyan-400/10 to-cyan-400/5",
    features: [
      "Custom API development",
      "Third-party platform integration",
      "Real-time data synchronization",
      "Workflow automation engines",
      "Webhook and event systems",
      "Data transformation pipelines",
    ],
    deliverables: [
      "Custom integration platform",
      "API documentation",
      "Automated workflow diagrams",
      "Data flow documentation",
      "Monitoring and error handling",
    ],
    process: [
      "Business process analysis",
      "Integration architecture design",
      "API and connector development",
      "Testing and data validation",
      "Deployment and monitoring",
      "Documentation and training",
    ],
    idealFor:
      "Businesses using multiple software platforms that need seamless data flow and automated workflows between systems",
  },
];

const DetailedServices = () => {
  const [activeService, setActiveService] = useState(0);

  return (
    <section id="solutions" className="py-16 md:py-24 relative">     

      <div className="container mx-auto px-4 sm:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-lime-400">
              Strategic Digital Solutions
            </span>
          </h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            Beyond code—I deliver comprehensive technology strategies that solve
            core business challenges, drive sustainable growth, and create
            lasting competitive advantages in the digital landscape.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Services Navigation */}
          <div className="lg:w-1/3">
            <div className="sticky top-24 space-y-4">
              {detailedServices.map((service, index) => (
                <motion.button
                  key={service.id}
                  onClick={() => setActiveService(index)}
                  className={`w-full text-left p-6 rounded-xl border transition-all duration-300 group ${
                    activeService === index
                      ? `${service.borderColor} border-2 bg-gradient-to-br ${service.bgGradient} shadow-lg shadow-black/20`
                      : "border-neutral-700 bg-neutral-800/30 hover:bg-neutral-800/50"
                  }`}
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <div className="flex items-center gap-4">
                    <motion.div
                      animate={{
                        rotate: activeService === index ? 0 : 0,
                        scale: activeService === index ? 1.1 : 1,
                      }}
                      className={`${service.color}`}
                    >
                      {service.icon}
                    </motion.div>
                    <div className="flex-1">
                      <h3
                        className={`font-semibold text-lg mb-2 ${
                          activeService === index
                            ? "text-white"
                            : "text-neutral-300"
                        }`}
                      >
                        {service.title}
                      </h3>
                      <p className="hidden text-sm text-neutral-400 leading-relaxed">
                        {service.shortDescription}
                      </p>
                    </div>
                    <motion.div
                      animate={{
                        opacity: activeService === index ? 1 : 0,
                        x: activeService === index ? 0 : -10,
                      }}
                      className={`${service.color}`}
                    >
                      <ArrowRight className="h-5 w-5" />
                    </motion.div>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Service Details */}
          <div className="lg:w-2/3">
            <motion.div
              key={activeService}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <Card
                className={`bg-gradient-to-br ${detailedServices[activeService].bgGradient} border ${detailedServices[activeService].borderColor}/20 rounded-2xl overflow-hidden`}
              >
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4 pb-6">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring" }}
                      className={`p-3 rounded-xl bg-gradient-to-br ${detailedServices[activeService].bgGradient} border ${detailedServices[activeService].borderColor}/30`}
                    >
                      <div className={detailedServices[activeService].color}>
                        {detailedServices[activeService].icon}
                      </div>
                    </motion.div>
                    <div>
                      <CardTitle>
                        <span className="text-2xl md:text-3xl text-white mb-2">
                          {detailedServices[activeService].title}
                        </span>
                      </CardTitle>
                      <p className="text-lg text-neutral-300">
                        {detailedServices[activeService].fullDescription}
                      </p>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="space-y-8">
                    {/* Key Features */}
                    <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Zap className="h-5 w-5 text-yellow-400" />
                      <h4 className="text-xl font-semibold text-white">
                        Key Capabilities
                      </h4>
                    </div>
                    <div className="grid md:grid-cols-2 gap-3">
                      {detailedServices[activeService].features.map(
                        (feature, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 + index * 0.1 }}
                            className="flex items-center gap-3 p-3 rounded-lg bg-black/20 border border-neutral-700/50"
                          >
                            <CheckCircle className="h-4 w-4 text-lime-400 flex-shrink-0" />
                            <span className="text-neutral-300 text-sm">
                              {feature}
                            </span>
                          </motion.div>
                        )
                      )}
                    </div>
                  </div>

                  {/* Process & Deliverables */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <Target className="h-5 w-5 text-blue-400" />
                        <h4 className="text-xl font-semibold text-white">
                          Development Process
                        </h4>
                      </div>
                      <div className="space-y-2">
                        {detailedServices[activeService].process.map(
                          (step, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.5 + index * 0.1 }}
                              className="flex items-center gap-3 text-neutral-300"
                            >
                              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
                                <span className="text-blue-400 text-xs font-bold">
                                  {index + 1}
                                </span>
                              </div>
                              <span className="text-sm">{step}</span>
                            </motion.div>
                          )
                        )}
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <Shield className="h-5 w-5 text-green-400" />
                        <h4 className="text-xl font-semibold text-white">
                          Key Deliverables
                        </h4>
                      </div>
                      <div className="space-y-2">
                        {detailedServices[activeService].deliverables.map(
                          (item, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.7 + index * 0.1 }}
                              className="flex items-center gap-3 text-neutral-300"
                            >
                              <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                              <span className="text-sm">{item}</span>
                            </motion.div>
                          )
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Ideal For */}
                  <div className="p-4 rounded-xl bg-black/30 border border-neutral-700/50">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="h-5 w-5 text-purple-400" />
                      <h4 className="text-lg font-semibold text-white">
                        Ideal For
                      </h4>
                    </div>
                    <p className="text-neutral-300 text-sm leading-relaxed">
                      {detailedServices[activeService].idealFor}
                    </p>
                  </div>
                </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailedServices;
