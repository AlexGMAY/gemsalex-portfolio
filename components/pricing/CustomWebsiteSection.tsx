"use client";

import { motion } from "framer-motion";
import {  
  FaCode,
  FaUsers,  
  FaStethoscope,
  FaNewspaper,
  FaRobot,
  FaMobileAlt,
} from "react-icons/fa";

const CustomWebsiteSection = () => {
  const customCategories = [    
    {
      id: "healthcare",
      title: "Healthcare Portals",
      description: "HIPAA-compliant patient management systems",
      icon: <FaStethoscope className="text-teal-500" />,
      features: [
        "Patient portals",
        "Telemedicine",
        "Appointment scheduling",
        "Medical records",
      ],
      startingPrice: "$18,000+",
      complexity: "Very High",
    },
    {
      id: "media",
      title: "Media & News Portals",
      description: "Enterprise publishing platforms",
      icon: <FaNewspaper className="text-yellow-500" />,
      features: [
        "Content management",
        "Subscription paywalls",
        "Multimedia",
        "Analytics",
      ],
      startingPrice: "$12,000+",
      complexity: "High",
    },
    {
      id: "social",
      title: "Social Networks",
      description: "Custom community and social platforms",
      icon: <FaUsers className="text-pink-500" />,
      features: ["User profiles", "Feeds", "Messaging", "Content moderation"],
      startingPrice: "$25,000+",
      complexity: "Very High",
    },
    {
      id: "ai",
      title: "AI Integration",
      description: "Custom AI/ML solutions and integrations",
      icon: <FaRobot className="text-indigo-500" />,
      features: [
        "Chatbots",
        "Recommendation engines",
        "Predictive analytics",
        "Automation",
      ],
      startingPrice: "$15,000+",
      complexity: "Very High",
    },
    {
      id: "mobile",
      title: "Mobile App Development",
      description: "Native iOS and Android applications",
      icon: <FaMobileAlt className="text-cyan-500" />,
      features: [
        "iOS & Android apps",
        "Cross-platform",
        "Push notifications",
        "Offline support",
      ],
      startingPrice: "$20,000+",
      complexity: "High",
    },
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-yellow-400">
              Custom Website Development
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-6">
            Unique solutions for specialized requirements
          </p>
          <div className="inline-flex items-center px-6 py-2 bg-gray-800 rounded-full">
            <FaCode className="text-lime-400 mr-2" />
            <span className="text-gray-300">Tailored to your exact needs</span>
          </div>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {customCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-lime-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-lime-500/10"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-gray-900 rounded-lg">
                  <div className="text-2xl">{category.icon}</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {category.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {category.description}
                  </p>
                </div>
              </div>

              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-400">Starting from</span>
                  <span className="text-lg font-bold text-lime-400">
                    {category.startingPrice}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Complexity</span>
                  <span
                    className={`px-2 py-1 rounded text-xs font-medium ${
                      category.complexity === "Very High"
                        ? "bg-red-900/30 text-red-400"
                        : category.complexity === "High"
                          ? "bg-orange-900/30 text-orange-400"
                          : "bg-blue-900/30 text-blue-400"
                    }`}
                  >
                    {category.complexity}
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-sm text-gray-400">Key Features:</p>
                <ul className="space-y-1">
                  {category.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm text-gray-300"
                    >
                      <span className="text-lime-400 mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-gray-900 to-black border border-gray-800 rounded-2xl p-8 text-center"
        >
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Need something specific?
            </h3>
            <p className="text-gray-300 mb-6">
              Whether it&apos;s a niche platform, enterprise solution, or innovative
              startup idea, we specialize in bringing unique digital concepts to
              life with custom development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-lime-500 to-yellow-500 text-gray-900 font-bold rounded-lg"
                onClick={() => (window.location.href = "/contact")}
              >
                Schedule Free Consultation
              </motion.button>             
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CustomWebsiteSection;
