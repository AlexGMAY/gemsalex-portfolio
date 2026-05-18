"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// Vérifiez d'abord que ces icônes existent
import {
  Code,
  Palette,
  Globe,
  Database,
  Shield,
  BarChart3,
  Layers,
  Sparkles,
  X,
  ChevronRight,
  Clock,
  Target,
  Award,
  Users,
  Zap,
  BookOpen,
  Briefcase,
  TrendingUp,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";

// ... (garde les types et données inchangés)
// Types
interface Course {
  id: string;
  title: string;
  category: "tech" | "business";
  subcategory: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "Expert";
  image: string;
  duration: string;
  projects: number;
  description: string;
  longDescription: string;
  bestFor: string[];
  whatYouWillLearn: string[];
  prerequisites: string[];
  outcomes: string[];
  icon: React.ReactNode;
}

// Données des cours
const coursesData: Course[] = [
  // Tech & Development Courses
  {
    id: "web-dev",
    title: "Web Development",
    category: "tech",
    subcategory: "Development",
    level: "Advanced",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80",
    duration: "8 weeks",
    projects: 4,
    description: "Build modern, responsive websites from scratch",
    longDescription:
      "Master the art of modern web development. This comprehensive course covers everything from HTML/CSS fundamentals to advanced React.js applications. You'll learn to build responsive, performant websites that work flawlessly across all devices.",
    bestFor: [
      "Aspiring developers",
      "Career changers",
      "Entrepreneurs",
      "Designers wanting to code",
    ],
    whatYouWillLearn: [
      "HTML5 & CSS3 mastery",
      "JavaScript ES6+ fundamentals",
      "React.js & Next.js",
      "Responsive design",
      "API integration",
      "Version control with Git",
    ],
    prerequisites: [
      "Basic computer knowledge",
      "No prior coding experience needed",
    ],
    outcomes: [
      "Build full-stack web applications",
      "Create responsive websites",
      "Deploy to production",
      "Portfolio of 4+ projects",
    ],
    icon: <Code className="h-6 w-6" />,
  },
  {
    id: "wordpress",
    title: "WordPress Development",
    category: "tech",
    subcategory: "Development",
    level: "Expert",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80",
    duration: "6 weeks",
    projects: 3,
    description: "Custom themes, plugins, and e-commerce solutions",
    longDescription:
      "Become a WordPress expert. Learn to build custom themes from scratch, develop powerful plugins, and create professional e-commerce solutions with WooCommerce.",
    bestFor: [
      "Freelancers",
      "Agency owners",
      "Bloggers",
      "Small business owners",
    ],
    whatYouWillLearn: [
      "Custom theme development",
      "Plugin architecture",
      "WooCommerce setup",
      "Performance optimization",
      "Security best practices",
      "Headless WordPress",
    ],
    prerequisites: ["Basic PHP knowledge", "HTML/CSS fundamentals"],
    outcomes: [
      "Build custom WordPress sites",
      "Create sellable themes/plugins",
      "Optimize for speed & SEO",
      "Client-ready portfolio",
    ],
    icon: <Globe className="h-6 w-6" />,
  },
  {
    id: "devops",
    title: "DevOps Engineering",
    category: "tech",
    subcategory: "Infrastructure",
    level: "Advanced",
    image:
      "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80",
    duration: "10 weeks",
    projects: 3,
    description: "Automate deployment and infrastructure management",
    longDescription:
      "Master the tools and practices of modern DevOps. Learn to automate deployments, manage cloud infrastructure, and implement CI/CD pipelines.",
    bestFor: [
      "System administrators",
      "Developers wanting DevOps skills",
      "Cloud engineers",
      "Tech leads",
    ],
    whatYouWillLearn: [
      "CI/CD pipelines",
      "Docker containerization",
      "Kubernetes orchestration",
      "AWS/Azure/GCP",
      "Infrastructure as Code",
      "Monitoring & logging",
    ],
    prerequisites: ["Basic Linux knowledge", "Command line experience"],
    outcomes: [
      "Automated deployment workflows",
      "Scalable infrastructure",
      "Monitoring systems",
      "DevOps certification prep",
    ],
    icon: <Layers className="h-6 w-6" />,
  },
  {
    id: "vba",
    title: "VBA Automation",
    category: "tech",
    subcategory: "Automation",
    level: "Advanced",
    image:
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80",
    duration: "5 weeks",
    projects: 5,
    description: "Excel macros and automation for business efficiency",
    longDescription:
      "Transform your Excel workflow with VBA automation. Learn to create powerful macros, automate repetitive tasks, and build interactive dashboards.",
    bestFor: [
      "Financial analysts",
      "Data professionals",
      "Accountants",
      "Business analysts",
    ],
    whatYouWillLearn: [
      "VBA programming fundamentals",
      "Excel automation",
      "UserForm creation",
      "Database integration",
      "Error handling",
      "Custom functions",
    ],
    prerequisites: [
      "Intermediate Excel knowledge",
      "Basic logic understanding",
    ],
    outcomes: [
      "Automate daily reports",
      "Save 10+ hours weekly",
      "Build professional tools",
      "Increased productivity",
    ],
    icon: <Database className="h-6 w-6" />,
  },
  {
    id: "ms-access",
    title: "MS Access Database",
    category: "tech",
    subcategory: "Data",
    level: "Expert",
    image:
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80",
    duration: "6 weeks",
    projects: 3,
    description: "Build robust database solutions for business",
    longDescription:
      "Master Microsoft Access database development. Learn to design normalized databases, create complex queries, build forms and reports, and integrate with other Office applications.",
    bestFor: [
      "Database administrators",
      "Business analysts",
      "IT professionals",
      "Office managers",
    ],
    whatYouWillLearn: [
      "Database design principles",
      "SQL queries",
      "Form & report design",
      "Macro programming",
      "Integration with Excel",
      "Data security",
    ],
    prerequisites: ["Basic computer skills", "Understanding of data concepts"],
    outcomes: [
      "Professional database applications",
      "Data-driven decision making",
      "Improved data management",
      "Business efficiency",
    ],
    icon: <Database className="h-6 w-6" />,
  },
  {
    id: "custom-software",
    title: "Custom Software",
    category: "tech",
    subcategory: "Development",
    level: "Advanced",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80",
    duration: "12 weeks",
    projects: 2,
    description: "Tailored business solutions for specific needs",
    longDescription:
      "Learn to develop custom software solutions tailored to unique business requirements. Master full-stack development and software architecture principles.",
    bestFor: [
      "Software engineers",
      "Technical founders",
      "IT consultants",
      "Solution architects",
    ],
    whatYouWillLearn: [
      "Full-stack architecture",
      "API development",
      "Database design",
      "Security implementation",
      "Testing strategies",
      "Deployment & maintenance",
    ],
    prerequisites: ["Programming experience", "Database knowledge"],
    outcomes: [
      "Custom software applications",
      "Scalable architecture",
      "Production-ready code",
      "Problem-solving skills",
    ],
    icon: <Code className="h-6 w-6" />,
  },
  // Business & Productivity Courses
  {
    id: "ms-office",
    title: "MS Office Suite Mastery",
    category: "business",
    subcategory: "Productivity",
    level: "Expert",
    image:
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80",
    duration: "8 weeks",
    projects: 6,
    description: "Excel, Word, PowerPoint and Access mastery",
    longDescription:
      "Become a Microsoft Office power user. Master Excel for data analysis, Word for professional documents, PowerPoint for compelling presentations, and Access for database management.",
    bestFor: [
      "Office professionals",
      "Administrative staff",
      "Business owners",
      "Students",
    ],
    whatYouWillLearn: [
      "Advanced Excel formulas",
      "Power Query & PivotTables",
      "Professional document formatting",
      "Presentation design",
      "Mail merge & automation",
      "Office integration",
    ],
    prerequisites: ["Basic computer literacy", "Familiarity with Office"],
    outcomes: [
      "Office productivity boost",
      "Professional documents",
      "Data analysis skills",
      "Career advancement",
    ],
    icon: <BarChart3 className="h-6 w-6" />,
  },
  {
    id: "project-management",
    title: "Project Management",
    category: "business",
    subcategory: "Management",
    level: "Advanced",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80",
    duration: "8 weeks",
    projects: 2,
    description: "Plan, execute and track projects effectively",
    longDescription:
      "Master project management methodologies. Learn Agile, Scrum, and Waterfall approaches. Use industry-standard tools like Jira, Trello, and Asana.",
    bestFor: [
      "Team leaders",
      "Project coordinators",
      "Product managers",
      "Aspiring PMs",
    ],
    whatYouWillLearn: [
      "Agile & Scrum methodologies",
      "Risk management",
      "Stakeholder communication",
      "Budgeting & scheduling",
      "Team leadership",
      "Project tracking tools",
    ],
    prerequisites: ["Team experience", "Basic leadership skills"],
    outcomes: [
      "Certification readiness",
      "Project success rate increase",
      "Team efficiency",
      "Career growth",
    ],
    icon: <Target className="h-6 w-6" />,
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    category: "business",
    subcategory: "Marketing",
    level: "Advanced",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80",
    duration: "7 weeks",
    projects: 3,
    description: "Drive traffic and convert leads effectively",
    longDescription:
      "Master modern digital marketing strategies. Learn SEO, content marketing, social media advertising, email campaigns, and analytics to grow your business online.",
    bestFor: [
      "Marketing professionals",
      "Business owners",
      "Entrepreneurs",
      "Freelancers",
    ],
    whatYouWillLearn: [
      "SEO fundamentals",
      "Content strategy",
      "Social media advertising",
      "Email marketing",
      "Google Analytics",
      "Conversion optimization",
    ],
    prerequisites: ["Basic marketing knowledge", "Internet familiarity"],
    outcomes: [
      "Increased website traffic",
      "Lead generation skills",
      "Marketing strategy",
      "ROI measurement",
    ],
    icon: <TrendingUp className="h-6 w-6" />,
  },
  {
    id: "seo-ads",
    title: "SEO & Google Ads",
    category: "business",
    subcategory: "Marketing",
    level: "Expert",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80",
    duration: "6 weeks",
    projects: 2,
    description: "Optimize search presence and ad spend",
    longDescription:
      "Become an SEO and Google Ads expert. Learn to rank websites organically, conduct keyword research, optimize PPC campaigns, and maximize ROI on ad spend.",
    bestFor: [
      "Digital marketers",
      "Small business owners",
      "Agency professionals",
      "E-commerce managers",
    ],
    whatYouWillLearn: [
      "Keyword research",
      "On-page SEO",
      "Link building",
      "Google Ads setup",
      "Campaign optimization",
      "Analytics & reporting",
    ],
    prerequisites: ["Digital marketing basics", "Analytical mindset"],
    outcomes: [
      "Higher search rankings",
      "Lower ad costs",
      "Better conversion rates",
      "Measurable results",
    ],
    icon: <BarChart3 className="h-6 w-6" />,
  },
  {
    id: "business-comm",
    title: "Business Communication",
    category: "business",
    subcategory: "Soft Skills",
    level: "Advanced",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80",
    duration: "6 weeks",
    projects: 3,
    description: "English & French for business professionals",
    longDescription:
      "Master business communication in English and French. Learn professional writing, presentation skills, negotiation tactics, and cross-cultural communication.",
    bestFor: [
      "International professionals",
      "Executives",
      "Sales teams",
      "Customer-facing roles",
    ],
    whatYouWillLearn: [
      "Professional email writing",
      "Presentation skills",
      "Negotiation tactics",
      "Cross-cultural communication",
      "Meeting facilitation",
      "Business vocabulary",
    ],
    prerequisites: ["Intermediate language skills", "Professional experience"],
    outcomes: [
      "Confident communication",
      "Better client relationships",
      "Career opportunities",
      "Professional network",
    ],
    icon: <Users className="h-6 w-6" />,
  },
  {
    id: "ms365",
    title: "MS 365 Integration",
    category: "business",
    subcategory: "Productivity",
    level: "Advanced",
    image:
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80",
    duration: "5 weeks",
    projects: 3,
    description: "Enterprise collaboration with Teams & SharePoint",
    longDescription:
      "Master Microsoft 365 ecosystem. Learn Teams for collaboration, SharePoint for document management, and Power Platform for business automation.",
    bestFor: [
      "IT professionals",
      "Office managers",
      "Team leaders",
      "Business analysts",
    ],
    whatYouWillLearn: [
      "Teams administration",
      "SharePoint sites",
      "Power Automate flows",
      "Power Apps development",
      "Security & compliance",
      "Migration strategies",
    ],
    prerequisites: ["Office 365 familiarity", "Basic IT knowledge"],
    outcomes: [
      "Team productivity boost",
      "Automated workflows",
      "Secure collaboration",
      "Digital transformation",
    ],
    icon: <Shield className="h-6 w-6" />,
  },
];

// Modal Component - Version simplifiée sans classes dynamiques problématiques
const CourseModal = ({
  course,
  onClose,
}: {
  course: Course | null;
  onClose: () => void;
}) => {
  if (!course) return null;

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner":
        return "bg-green-500/20 text-green-400 border-green-400/30";
      case "Intermediate":
        return "bg-blue-500/20 text-blue-400 border-blue-400/30";
      case "Advanced":
        return "bg-orange-500/20 text-orange-400 border-orange-400/30";
      case "Expert":
        return "bg-purple-500/20 text-purple-400 border-purple-400/30";
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-400/30";
    }
  };

  // Couleurs fixes au lieu de dynamiques
  const iconBgClass =
    course.category === "tech" ? "bg-blue-500/20" : "bg-lime-500/20";

  const gradientClass =
    course.category === "tech"
      ? "from-blue-500/10 to-lime-500/10"
      : "from-lime-500/10 to-blue-500/10";

  const outcomesGradient = "from-purple-500/10 to-pink-500/10";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[5000] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 50, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.9, y: 50, opacity: 0 }}
        transition={{ type: "spring", damping: 25 }}
        className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-3xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-800/80 hover:bg-gray-700 transition-all"
        >
          <X className="h-5 w-5 text-white" />
        </button>

        {/* Hero Image */}
        <div className="relative h-56 md:h-72 overflow-hidden rounded-t-3xl">
          <Image
            src={course.image}
            alt={course.title}
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />

          {/* Level Badge */}
          <div className="absolute top-4 left-4">
            <span
              className={`px-3 py-1 rounded-full text-xs font-medium border ${getLevelColor(course.level)}`}
            >
              {course.level}
            </span>
          </div>

          {/* Duration & Projects */}
          <div className="absolute bottom-4 left-4 flex gap-3">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-sm">
              <Clock className="h-3.5 w-3.5 text-lime-400" />
              <span className="text-xs text-white">{course.duration}</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-sm">
              <Briefcase className="h-3.5 w-3.5 text-blue-400" />
              <span className="text-xs text-white">
                {course.projects} Projects
              </span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          {/* Title & Category */}
          <div className="flex items-center gap-3 mb-4">
            <div className={`p-2 rounded-xl bg-gradient-to-br ${iconBgClass}`}>
              {course.icon}
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                {course.title}
              </h3>
              <p className="text-sm text-gray-400">{course.subcategory}</p>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-300 mb-6 leading-relaxed">
            {course.longDescription}
          </p>

          {/* Best For */}
          <div
            className={`mb-6 p-4 rounded-2xl bg-gradient-to-r ${gradientClass} border border-gray-800`}
          >
            <div className="flex items-center gap-2 mb-3">
              <Users className="h-5 w-5 text-lime-400" />
              <h4 className="font-semibold text-white">Best For</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {course.bestFor.map((item, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full bg-gray-800 text-sm text-gray-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* What You'll Learn */}
            <div className="p-4 rounded-2xl bg-gray-800/30 border border-gray-800">
              <div className="flex items-center gap-2 mb-3">
                <Zap className="h-5 w-5 text-blue-400" />
                <h4 className="font-semibold text-white">
                  What You&apos;ll Learn
                </h4>
              </div>
              <ul className="space-y-2">
                {course.whatYouWillLearn.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-sm text-gray-300"
                  >
                    <CheckCircle2 className="h-4 w-4 text-lime-400 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Prerequisites */}
            <div className="p-4 rounded-2xl bg-gray-800/30 border border-gray-800">
              <div className="flex items-center gap-2 mb-3">
                <BookOpen className="h-5 w-5 text-purple-400" />
                <h4 className="font-semibold text-white">Prerequisites</h4>
              </div>
              <ul className="space-y-2">
                {course.prerequisites.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-sm text-gray-300"
                  >
                    <ChevronRight className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Outcomes */}
          <div
            className={`mb-6 p-4 rounded-2xl bg-gradient-to-r ${outcomesGradient} border border-gray-800`}
          >
            <div className="flex items-center gap-2 mb-3">
              <Award className="h-5 w-5 text-yellow-400" />
              <h4 className="font-semibold text-white">Learning Outcomes</h4>
            </div>
            <div className="grid sm:grid-cols-2 gap-2">
              {course.outcomes.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 text-sm text-gray-300"
                >
                  <Sparkles className="h-3.5 w-3.5 text-lime-400" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-800">
            <button className="flex-1 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium hover:from-blue-600 hover:to-blue-700 transition-all">
              Enroll Now
            </button>
            <button className="flex-1 px-6 py-3 rounded-xl bg-gray-800 text-white font-medium hover:bg-gray-700 transition-all flex items-center justify-center gap-2">
              Download Syllabus <ExternalLink className="h-4 w-4" />
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Composant principal - Version simplifiée
const CoursesCat = () => {
  const [activeTab, setActiveTab] = useState<"tech" | "business">("tech");
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const filteredCourses = coursesData.filter(
    (course) => course.category === activeTab,
  );

  // Grouper les cours par sous-catégorie
  const groupedCourses = filteredCourses.reduce(
    (acc, course) => {
      if (!acc[course.subcategory]) {
        acc[course.subcategory] = [];
      }
      acc[course.subcategory].push(course);
      return acc;
    },
    {} as Record<string, Course[]>,
  );

  const getSubcategoryIcon = (subcategory: string) => {
    switch (subcategory) {
      case "Development":
        return <Code className="h-5 w-5" />;
      case "Infrastructure":
        return <Shield className="h-5 w-5" />;
      case "Automation":
        return <Zap className="h-5 w-5" />;
      case "Data":
        return <Database className="h-5 w-5" />;
      case "Productivity":
        return <BarChart3 className="h-5 w-5" />;
      case "Management":
        return <Target className="h-5 w-5" />;
      case "Marketing":
        return <TrendingUp className="h-5 w-5" />;
      case "Soft Skills":
        return <Users className="h-5 w-5" />;
      default:
        return <Layers className="h-5 w-5" />;
    }
  };

  const getTabColor = (tab: "tech" | "business") => {
    if (tab === "tech") {
      return activeTab === "tech"
        ? "bg-gradient-to-r from-blue-500/20 to-blue-600/20 text-blue-400 border-b-2 border-blue-500"
        : "text-gray-400 hover:text-white hover:bg-gray-800/50";
    } else {
      return activeTab === "business"
        ? "bg-gradient-to-r from-lime-500/20 to-lime-600/20 text-lime-400 border-b-2 border-lime-500"
        : "text-gray-400 hover:text-white hover:bg-gray-800/50";
    }
  };

  const getSubcategoryContainerClass = (subcategory: string) => {
    return activeTab === "tech"
      ? "from-blue-500/20 to-cyan-500/20"
      : "from-lime-500/20 to-emerald-500/20";
  };

  const getIconContainerClass = () => {
    return activeTab === "tech"
      ? "from-blue-500/20 to-cyan-500/20"
      : "from-lime-500/20 to-emerald-500/20";
  };

  const getHoverBorderClass = () => {
    return activeTab === "tech"
      ? "hover:border-blue-500/50"
      : "hover:border-lime-500/50";
  };

  const getLearnMoreColor = () => {
    return activeTab === "tech" ? "text-blue-400" : "text-lime-400";
  };

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
                  Hands-On Learning
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                Explore Our{" "}
                <span className="bg-gradient-to-r from-blue-400 to-lime-400 bg-clip-text text-transparent block sm:inline">
                  Course Catalog
                </span>
              </h2>
              <p className="mt-4 text-gray-400 text-sm sm:text-base max-w-2xl">
                Choose from expert-led courses designed to accelerate your
                career and transform your skills
              </p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mb-10 border-b border-gray-800 pb-0 sm:pb-0">
          <button
            onClick={() => setActiveTab("tech")}
            className={`flex items-center gap-2 px-6 py-3 rounded-t-xl font-medium transition-all ${getTabColor("tech")}`}
          >
            <Code className="h-5 w-5" />
            Technology & Development
          </button>
          <button
            onClick={() => setActiveTab("business")}
            className={`flex items-center gap-2 px-6 py-3 rounded-t-xl font-medium transition-all ${getTabColor("business")}`}
          >
            <Palette className="h-5 w-5" />
            Business & Productivity
          </button>
        </div>

        {/* Course Sections by Subcategory */}
        {Object.entries(groupedCourses).map(([subcategory, courses]) => (
          <div key={subcategory} className="mb-12 last:mb-0">
            <div className="flex items-center gap-3 mb-6 pb-2 border-b border-gray-800">
              <div
                className={`p-2 rounded-lg bg-gradient-to-r ${getSubcategoryContainerClass(subcategory)}`}
              >
                {getSubcategoryIcon(subcategory)}
              </div>
              <h3 className="text-xl font-semibold text-white">
                {subcategory}
              </h3>
              <span className="text-xs text-gray-500">
                {courses.length} courses
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course, index) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  onClick={() => setSelectedCourse(course)}
                  className="group cursor-pointer"
                >
                  <div
                    className={`relative overflow-hidden rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900 to-black ${getHoverBorderClass()} transition-all duration-300 h-full`}
                  >
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={course.image}
                        alt={course.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />

                      {/* Level Badge */}
                      <div className="absolute top-3 right-3">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            course.level === "Beginner"
                              ? "bg-green-500/20 text-green-400"
                              : course.level === "Intermediate"
                                ? "bg-blue-500/20 text-blue-400"
                                : course.level === "Advanced"
                                  ? "bg-orange-500/20 text-orange-400"
                                  : "bg-purple-500/20 text-purple-400"
                          }`}
                        >
                          {course.level}
                        </span>
                      </div>

                      {/* Duration & Projects */}
                      <div className="absolute bottom-3 left-3 flex gap-2">
                        <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-black/60 backdrop-blur-sm">
                          <Clock className="h-3 w-3 text-lime-400" />
                          <span className="text-xs text-white">
                            {course.duration}
                          </span>
                        </div>
                        <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-black/60 backdrop-blur-sm">
                          <Briefcase className="h-3 w-3 text-blue-400" />
                          <span className="text-xs text-white">
                            {course.projects} projects
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-2">
                        <div
                          className={`p-1.5 rounded-lg bg-gradient-to-r ${getIconContainerClass()}`}
                        >
                          {course.icon}
                        </div>
                        <span className="text-xs text-gray-500">
                          {course.subcategory}
                        </span>
                      </div>

                      <h4 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                        {course.title}
                      </h4>

                      <p className="text-sm text-gray-400 mb-4">
                        {course.description}
                      </p>

                      {/* Best For Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {course.bestFor.slice(0, 2).map((item, idx) => (
                          <span
                            key={idx}
                            className="text-xs text-gray-500 bg-gray-800/50 px-2 py-0.5 rounded-full"
                          >
                            {item}
                          </span>
                        ))}
                        {course.bestFor.length > 2 && (
                          <span className="text-xs text-gray-500">
                            +{course.bestFor.length - 2}
                          </span>
                        )}
                      </div>

                      {/* Learn More Link */}
                      <div
                        className={`flex items-center gap-1 text-sm ${getLearnMoreColor()} group-hover:gap-2 transition-all`}
                      >
                        <span>Learn More</span>
                        <ChevronRight className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedCourse && (
          <CourseModal
            course={selectedCourse}
            onClose={() => setSelectedCourse(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default CoursesCat;
