"use client";
import { ReactNode, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tilt } from "react-tilt";
import { useTheme } from "next-themes";
import {
  ArrowRightIcon,
  XMarkIcon,
  SunIcon,
  MoonIcon,
  BoltIcon,
  ClockIcon,
  CodeBracketIcon,
  CpuChipIcon,
  PaperAirplaneIcon,
  AcademicCapIcon,
  ArrowPathIcon,
  ChatBubbleBottomCenterTextIcon,
  FaceSmileIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import { LeafIcon, BrainIcon } from "lucide-react";

/**
 * Represents a single milestone in a product's development timeline
 */
interface ProductTimelineItem {
  /** The date of the milestone (e.g., "Q1 2023") */
  date: string;
  /** Description of what was achieved */
  milestone: string;
}

/**
 * Represents a product in development
 */
interface Product {
  /** Unique identifier for the product */
  id: number;
  /** Name of the product */
  name: string;
  /** Short description of the product */
  description: string;
  /** Current development stage */
  stage:
    | "Concept"
    | "Prototyping"
    | "Alpha Testing"
    | "Beta Testing"
    | "Pre-Launch"
    | string;
  /** Completion percentage (0-100) */
  progress: number;
  /** Path to product image */
  image: string;
  /** Array of detailed features/statuses */
  details: string[];
  /** Development timeline with major milestones */
  timeline: ProductTimelineItem[];
  /** React icon component for visual representation */
  icon: ReactNode;
  /** Optional category for additional filtering */
  category?: string;
  /** Optional technical specifications */
  specs?: Record<string, string>;
  /** Optional array of team members working on this */
  team?: Array<{
    name: string;
    role: string;
    avatar?: string;
  }>;
}

/**
 * Main data structure organizing products by category
 */
interface ProductsByCategory {
  [category: string]: Product[];
}

// Example usage with your data
const productsByCategory: ProductsByCategory = {
  "AI Solutions": [
    {
      id: 1,
      name: "Neural Analytics Platform",
      description: "Real-time decision intelligence with deep learning",
      stage: "Beta Testing",
      progress: 75,
      image: "/images/ai-platform.jpg",
      details: [
        "Multi-modal data processing (text, image, video)",
        "Predictive analytics dashboard",
        "API integration for enterprise systems",
        "Currently in closed beta with Fortune 500 companies",
      ],
      timeline: [
        { date: "Q1 2023", milestone: "Concept validation" },
        { date: "Q3 2023", milestone: "Alpha prototype" },
        { date: "Q1 2024", milestone: "First enterprise deployment" },
        { date: "Q3 2024", milestone: "Public beta launch (current)" },
      ],
      icon: <BoltIcon className="w-6 h-6 text-blue-500" />,
      specs: {
        "Processing Speed": "5ms latency",
        Accuracy: "99.2%",
      },
    },
    {
      id: 3,
      name: "Personal AI Assistant",
      description:
        "Context-aware digital companion that learns and adapts to user behavior",
      stage: "Alpha Testing",
      progress: 45,
      image: "/images/personal-ai.jpg",
      details: [
        "Natural language understanding with emotional intelligence",
        "Automates routine tasks and schedules",
        "Privacy-focused local processing",
        "Cross-device synchronization",
      ],
      timeline: [
        { date: "Q2 2023", milestone: "Core NLP engine developed" },
        { date: "Q4 2023", milestone: "Behavioral learning implemented" },
        { date: "Q1 2024", milestone: "Closed alpha with 100 users" },
      ],
      icon: (
        <ChatBubbleBottomCenterTextIcon className="w-6 h-6 text-green-500" />
      ),
      specs: {
        "Languages Supported": "12",
        "Response Time": "<1s",
      },
    },
  ],
  "Health Tech": [
    {
      id: 4,
      name: "Smart Health Monitor",
      description:
        "Wearable that predicts health issues before symptoms appear",
      stage: "Prototyping",
      progress: 30,
      image: "/images/health-monitor.jpg",
      details: [
        "Continuous blood analysis through skin sensors",
        "AI-powered anomaly detection",
        "Emergency alert system",
        "FDA approval in process",
      ],
      timeline: [
        { date: "Q3 2022", milestone: "Sensor technology patented" },
        { date: "Q1 2023", milestone: "First working prototype" },
        { date: "Now", milestone: "Clinical trials phase 1" },
      ],
      icon: <HeartIcon className="w-6 h-6 text-red-500" />,
      specs: {
        "Biomarkers Tracked": "27",
        "Battery Life": "7 days",
      },
    },
    {
      id: 5,
      name: "Mental Health Companion",
      description: "AI therapist with CBT and mindfulness techniques",
      stage: "Beta Testing",
      progress: 65,
      image: "/images/mental-health.jpg",
      details: [
        "Voice-based emotional state analysis",
        "Personalized therapy programs",
        "Crisis detection and intervention",
        "HIPAA compliant",
      ],
      timeline: [
        { date: "Q1 2023", milestone: "Therapy modules developed" },
        { date: "Q3 2023", milestone: "University partnership trials" },
        { date: "Q1 2024", milestone: "Public beta launch" },
      ],
      icon: <FaceSmileIcon className="w-6 h-6 text-yellow-500" />,
      team: [{ name: "Dr. Sarah Johnson", role: "Clinical Psychologist" }],
    },
  ],
  Sustainability: [
    {
      id: 6,
      name: "Urban Vertical Farms",
      description: "Modular farming units for food production in cities",
      stage: "Pilot Deployment",
      progress: 55,
      image: "/images/vertical-farm.jpg",
      details: [
        "90% less water than traditional farming",
        "IoT-controlled growth environments",
        "Year-round production",
        "First installations in Tokyo and Singapore",
      ],
      timeline: [
        { date: "2021", milestone: "Prototype testing" },
        { date: "2022", milestone: "First commercial installation" },
        { date: "Now", milestone: "Scaling production" },
      ],
      icon: <LeafIcon className="w-6 h-6 text-green-600" />,
      specs: {
        Yield: "100x traditional farming",
        "Energy Use": "Solar-powered",
      },
    },
    {
      id: 7,
      name: "Plastic-to-Fuel Converter",
      description: "Compact device that converts plastic waste into clean fuel",
      stage: "Prototyping",
      progress: 25,
      image: "/images/plastic-converter.jpg",
      details: [
        "Processes most plastic types",
        "No toxic byproducts",
        "Community-scale solution",
        "Designed for developing nations",
      ],
      timeline: [
        { date: "Q2 2023", milestone: "Chemical process perfected" },
        { date: "Q4 2023", milestone: "First working prototype" },
      ],
      icon: <ArrowPathIcon className="w-6 h-6 text-emerald-500" />,
      specs: {
        Output: "1 liter fuel/kg plastic",
        Capacity: "100kg/day",
      },
    },
  ],
  Education: [
    {
      id: 8,
      name: "Adaptive Learning Platform",
      description: "AI that customizes educational content in real-time",
      stage: "Beta Testing",
      progress: 70,
      image: "/images/learning-platform.jpg",
      details: [
        "Personalized learning paths",
        "Automated knowledge gap detection",
        "Works with existing curricula",
        "Piloted in 50 schools",
      ],
      timeline: [
        { date: "2020", milestone: "Initial algorithm development" },
        { date: "2022", milestone: "School pilot programs" },
        { date: "Now", milestone: "Expanding subject coverage" },
      ],
      icon: <AcademicCapIcon className="w-6 h-6 text-indigo-500" />,
      specs: {
        "Subjects Covered": "Math, Science, Languages",
        "Improvement Rate": "2.3x traditional methods",
      },
    },
  ],
  "Future Tech": [
    {
      id: 9,
      name: "Neural Interface Headset",
      description: "Non-invasive brain-computer interface for AR/VR control",
      stage: "Research",
      progress: 15,
      image: "/images/neural-interface.jpg",
      details: [
        "Thought-controlled interfaces",
        "Medical rehabilitation applications",
        "Consumer electronics integration",
        "Ethical use framework",
      ],
      timeline: [
        { date: "Q1 2024", milestone: "Basic signal interpretation" },
        { date: "Now", milestone: "Accuracy improvement phase" },
      ],
      icon: <BrainIcon className="w-6 h-6 text-purple-500" />,
      specs: {
        Channels: "256 EEG",
        Latency: "50ms",
      },
    },
    {
      id: 10,
      name: "Autonomous Delivery Drones",
      description: "Last-mile delivery system for urban areas",
      stage: "Regulatory Approval",
      progress: 60,
      image: "/images/delivery-drones.jpg",
      details: [
        "5kg payload capacity",
        "10km range",
        "AI-powered obstacle avoidance",
        "Partnerships with major retailers",
      ],
      timeline: [
        { date: "2021", milestone: "Prototype flights" },
        { date: "2023", milestone: "FAA certification process" },
      ],
      icon: <PaperAirplaneIcon className="w-6 h-6 text-blue-400" />,
      specs: {
        Speed: "60km/h",
        "Noise Level": "<55dB",
      },
    },
  ],
};

export default function ProductsPage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const openModal = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProduct(null), 300);
    document.body.style.overflow = "auto";
  };

  const categories = ["All", ...Object.keys(productsByCategory)];
  const filteredProducts =
    activeCategory === "All"
      ? Object.values(productsByCategory).flat()
      : productsByCategory[activeCategory] || [];

  return (
    <main className="relative">
      <div
        className={`min-h-screen transition-colors duration-300 ${
          theme === "dark" ? "bg-gray-900" : "bg-black-100"
        }`}
      >
        {/* Theme toggle */}
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="fixed top-6 right-6 z-50 p-2 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur shadow-lg"
          aria-label="Toggle theme"
        >
          {mounted &&
            (theme === "dark" ? (
              <SunIcon className="w-5 h-5 text-yellow-400" />
            ) : (
              <MoonIcon className="w-5 h-5 text-gray-700" />
            ))}
        </button>

        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-900 dark:from-gray-800 dark:to-gray-900 z-0" />

          {/* Animated gradient elements */}
          <motion.div
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-0 left-0 w-[200%] h-[200%] bg-[radial-gradient(circle,transparent_0%,transparent_70%,rgba(255,255,255,0.05)_70%,rgba(255,255,255,0.05)_100%)] dark:bg-[radial-gradient(circle,transparent_0%,transparent_70%,rgba(0,0,0,0.1)_70%,rgba(0,0,0,0.1)_100%)]"
          />

          <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold text-white dark:text-gray-100 mb-6"
            >
              Pioneering{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-200">
                Tomorrow&apos;s
              </span>{" "}
              Tech
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-blue-100 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
            >
              Explore our revolutionary products in development. Join us on the
              journey from concept to reality.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex gap-4 justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold flex items-center gap-2"
              >
                View Products <ArrowRightIcon className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold"
              >
                Partner With Us
              </motion.button>
            </motion.div>
          </div>

          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <div className="animate-bounce w-8 h-8 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </motion.div>
        </section>

        {/* Products Section */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Innovation Pipeline
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Filter by category to explore our development projects
            </p>

            {/* Category filter */}
            <div className="flex flex-wrap gap-3 mb-12">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === category
                      ? "bg-blue-600 text-white shadow-md"
                      : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>

            {/* Products grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <Tilt
                  key={product.id}
                  options={{ max: 15, scale: 1.03, speed: 500 }}
                >
                  <motion.div
                    whileHover={{ y: -5 }}
                    className={`h-full rounded-xl overflow-hidden border transition-all ${
                      theme === "dark"
                        ? "bg-gray-800 border-gray-700 hover:border-blue-500"
                        : "bg-white border-gray-200 hover:border-blue-300"
                    }`}
                  >
                    <div className="h-48 relative overflow-hidden">
                      {/* Product image placeholder with gradient */}
                      <div
                        className={`absolute inset-0 flex items-center justify-center ${
                          product.category === "AI Solutions"
                            ? "bg-gradient-to-br from-blue-500 to-cyan-500"
                            : "bg-gradient-to-br from-purple-600 to-indigo-700"
                        }`}
                      >
                        <div className="text-white text-center p-4">
                          {product.icon}
                          <h3 className="text-xl font-bold mt-2">
                            {product.name}
                          </h3>
                        </div>
                      </div>

                      {/* Progress bar */}
                      <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gray-700/20">
                        <div
                          className="h-full bg-gradient-to-r from-green-400 to-blue-500 transition-all duration-1000 ease-out"
                          style={{ width: `${product.progress}%` }}
                        />
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {product.name}
                        </h3>
                        <span
                          className={`text-xs px-2 py-1 rounded-full ${
                            product.stage === "Beta Testing"
                              ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                              : "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400"
                          }`}
                        >
                          {product.stage}
                        </span>
                      </div>

                      <p
                        className={`mb-4 ${
                          theme === "dark" ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        {product.description}
                      </p>

                      <div className="flex justify-between items-center">
                        <button
                          onClick={() => openModal(product)}
                          className="text-blue-600 dark:text-blue-400 font-medium flex items-center gap-1 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                        >
                          View details <ArrowRightIcon className="w-4 h-4" />
                        </button>

                        <div className="text-xs text-gray-500 dark:text-gray-400">
                          {product.progress}% complete
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </Tilt>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Modal */}
        <AnimatePresence>
          {isModalOpen && selectedProduct && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 md:p-6 backdrop-blur-sm"
              onClick={closeModal}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                transition={{ type: "spring", damping: 25 }}
                onClick={(e) => e.stopPropagation()}
                className={`relative rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl ${
                  theme === "dark" ? "bg-gray-800" : "bg-white"
                }`}
              >
                <button
                  onClick={closeModal}
                  className={`absolute top-4 right-4 p-2 rounded-full z-10 transition-colors ${
                    theme === "dark"
                      ? "bg-gray-700 hover:bg-gray-600 text-gray-300"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-600"
                  }`}
                >
                  <XMarkIcon className="w-5 h-5" />
                </button>

                <div className="h-64 md:h-80 relative overflow-hidden">
                  <div
                    className={`absolute inset-0 flex items-center justify-center ${
                      selectedProduct.category === "AI Solutions"
                        ? "bg-gradient-to-br from-blue-500 to-cyan-500"
                        : "bg-gradient-to-br from-purple-600 to-indigo-700"
                    }`}
                  >
                    <div className="text-white text-center p-6">
                      {selectedProduct.icon}
                      <h2 className="text-3xl font-bold mt-4">
                        {selectedProduct.name}
                      </h2>
                      <p className="text-lg opacity-90 mt-2">
                        {selectedProduct.description}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:justify-between gap-6 mb-8">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                          {selectedProduct.name}
                        </h2>
                        <span
                          className={`text-sm px-3 py-1 rounded-full ${
                            selectedProduct.stage === "Beta Testing"
                              ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                              : "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400"
                          }`}
                        >
                          {selectedProduct.stage}
                        </span>
                      </div>

                      <div
                        className={`prose max-w-none ${
                          theme === "dark" ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        <ul className="space-y-2">
                          {selectedProduct.details.map((detail, index) => (
                            <li key={index} className="flex items-start">
                              <span className="mr-2 mt-1">•</span>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="md:w-1/3">
                      <h3 className="font-semibold text-lg mb-4 text-gray-900 dark:text-white flex items-center gap-2">
                        <ClockIcon className="w-5 h-5" />
                        Development Timeline
                      </h3>
                      <div className="space-y-4 relative">
                        <div
                          className={`absolute left-4 top-0 h-full w-0.5 ${
                            theme === "dark" ? "bg-gray-600" : "bg-gray-200"
                          }`}
                        />
                        {selectedProduct.timeline.map((item, index) => (
                          <div key={index} className="relative pl-8">
                            <div
                              className={`absolute left-4 top-1 w-3 h-3 rounded-full ${
                                index === selectedProduct.timeline.length - 1
                                  ? "bg-blue-500 ring-4 ring-blue-200 dark:ring-blue-900/50"
                                  : theme === "dark"
                                  ? "bg-gray-500"
                                  : "bg-gray-400"
                              }`}
                            />
                            <h4
                              className={`font-medium ${
                                theme === "dark"
                                  ? "text-gray-100"
                                  : "text-gray-900"
                              }`}
                            >
                              {item.date}
                            </h4>
                            <p
                              className={`text-sm ${
                                theme === "dark"
                                  ? "text-gray-400"
                                  : "text-gray-600"
                              }`}
                            >
                              {item.milestone}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Progress and CTA */}
                  <div
                    className={`p-6 rounded-lg border ${
                      theme === "dark"
                        ? "bg-gray-700/50 border-gray-600"
                        : "bg-blue-50 border-blue-100"
                    }`}
                  >
                    <div className="flex flex-col md:flex-row md:items-center gap-6">
                      <div className="flex-1">
                        <h3
                          className={`font-semibold mb-2 ${
                            theme === "dark" ? "text-blue-300" : "text-blue-800"
                          }`}
                        >
                          Development Progress
                        </h3>
                        <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5">
                          <div
                            className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${selectedProduct.progress}%` }}
                          />
                        </div>
                        <p
                          className={`text-sm mt-1 ${
                            theme === "dark" ? "text-gray-400" : "text-gray-600"
                          }`}
                        >
                          {selectedProduct.progress}% complete •{" "}
                          {selectedProduct.stage}
                        </p>
                      </div>

                      <div className="md:w-80">
                        <h3
                          className={`font-semibold mb-2 ${
                            theme === "dark" ? "text-blue-300" : "text-blue-800"
                          }`}
                        >
                          Stay Updated
                        </h3>
                        <div className="flex gap-2">
                          <input
                            type="email"
                            placeholder="Your email address"
                            className={`flex-1 px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 ${
                              theme === "dark"
                                ? "bg-gray-700 border-gray-600 focus:ring-blue-500 text-white"
                                : "bg-white border-blue-200 focus:ring-blue-500 text-gray-900"
                            }`}
                          />
                          <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
                          >
                            Subscribe
                          </motion.button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
