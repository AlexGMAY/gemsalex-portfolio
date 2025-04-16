import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  FiSend,
  FiUser,
  FiMail,
  FiMessageSquare,
  FiDollarSign,
  FiCalendar,
  FiAlertCircle,
} from "react-icons/fi";

const SmartContactSystem = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    projectType: "general",
    budget: "",
    urgency: "standard",
  });

  const [currentTimezone, setCurrentTimezone] = useState("");
  const [isAvailable, setIsAvailable] = useState(true);
  const [showBudget, setShowBudget] = useState(false);

  // Set timezone and availability
  useEffect(() => {
    setCurrentTimezone(Intl.DateTimeFormat().resolvedOptions().timeZone);
    checkAvailability();
  }, []);

  // Check if working hours (9am-5pm in user's timezone)
  const checkAvailability = () => {
    const now = new Date();
    const hours = now.getHours();
    setIsAvailable(hours >= 9 && hours < 17);
  };

  // Handle project type change
  const handleProjectChange = (e: { target: { value: any; }; }) => {
    const value = e.target.value;
    setFormData({ ...formData, projectType: value });
    setShowBudget(value === "freelance");
  };

  // Calculate response time
  const getResponseTime = () => {
    if (formData.urgency === "urgent") return "1-4 hours";
    if (formData.projectType === "freelance") return "12-24 hours";
    return "24-48 hours";
  };

  // Form submission
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <section
      id="contact-system"
      className="py-20 bg-gradient-to-br from-black-100 to-black-100"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Status Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="bg-gray-800/70 backdrop-blur-sm rounded-xl p-6 border border-gray-700 shadow-2xl h-full">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  My Status
                </span>
              </h3>

              <div className="space-y-6">
                {/* Availability */}
                <div className="flex items-start gap-4">
                  <div
                    className={`p-3 rounded-lg ${
                      isAvailable
                        ? "bg-green-400/10 text-green-400"
                        : "bg-amber-400/10 text-amber-400"
                    }`}
                  >
                    <div
                      className="w-3 h-3 rounded-full animate-pulse"
                      style={{
                        backgroundColor: isAvailable ? "#34D399" : "#F59E0B",
                      }}
                    />
                  </div>
                  <div>
                    <h4 className="text-gray-400 text-sm font-medium">
                      Current Availability
                    </h4>
                    <p className="text-white">
                      {isAvailable ? (
                        <span className="text-green-400">
                          Available for inquiries
                        </span>
                      ) : (
                        <span className="text-amber-400">
                          Responding tomorrow
                        </span>
                      )}
                    </p>
                  </div>
                </div>

                {/* Timezone */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-blue-400/10 text-blue-400">
                    <FiCalendar className="text-xl" />
                  </div>
                  <div>
                    <h4 className="text-gray-400 text-sm font-medium">
                      My Timezone
                    </h4>
                    <p className="text-white">{currentTimezone}</p>
                    <p className="text-gray-400 text-xs mt-1">
                      {new Date().toLocaleTimeString("en-US", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                </div>

                {/* Response Times */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-purple-400/10 text-purple-400">
                    <FiAlertCircle className="text-xl" />
                  </div>
                  <div>
                    <h4 className="text-gray-400 text-sm font-medium">
                      Avg. Response Time
                    </h4>
                    <p className="text-white">General: 24-48 hours</p>
                    <p className="text-white">Freelance: 12-24 hours</p>
                    <p className="text-white">Urgent: 1-4 hours</p>
                  </div>
                </div>

                {/* Current Projects */}
                <div className="pt-4 border-t border-gray-700">
                  <h4 className="text-gray-400 text-sm font-medium mb-2">
                    Current Workload
                  </h4>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-400 to-cyan-400 h-2 rounded-full"
                      style={{ width: "65%" }}
                    />
                  </div>
                  <p className="text-gray-400 text-xs mt-2">
                    Moderate capacity - accepting new projects
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Smart Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="bg-gray-800/70 backdrop-blur-sm rounded-xl p-8 border border-gray-700 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-2">
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Smart Contact Form
                </span>
              </h3>
              <p className="text-gray-400 mb-8">
                Get tailored response based on your inquiry type
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <div className="flex items-center mb-2">
                    <FiUser className="text-blue-400 mr-2" />
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-300"
                    >
                      Your Name
                    </label>
                  </div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="mt-1 block w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400 transition-all"
                    placeholder="John Doe"
                    required
                  />
                </div>

                {/* Email Field */}
                <div>
                  <div className="flex items-center mb-2">
                    <FiMail className="text-blue-400 mr-2" />
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-300"
                    >
                      Email Address
                    </label>
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="mt-1 block w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400 transition-all"
                    placeholder="john@example.com"
                    required
                  />
                </div>

                {/* Project Type */}
                <div>
                  <label
                    htmlFor="projectType"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Inquiry Type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleProjectChange}
                    className="mt-1 block w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white transition-all"
                  >
                    <option value="general">General Question</option>
                    <option value="freelance">Freelance Project</option>
                    <option value="collaboration">Collaboration</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Conditional Budget Field */}
                <AnimatePresence>
                  {showBudget && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div>
                        <div className="flex items-center mb-2">
                          <FiDollarSign className="text-blue-400 mr-2" />
                          <label
                            htmlFor="budget"
                            className="block text-sm font-medium text-gray-300"
                          >
                            Project Budget (USD)
                          </label>
                        </div>
                        <input
                          type="text"
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={(e) =>
                            setFormData({ ...formData, budget: e.target.value })
                          }
                          className="mt-1 block w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400 transition-all"
                          placeholder="$5,000 - $10,000"
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Urgency Selector */}
                <div>
                  <label
                    htmlFor="urgency"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Urgency Level
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { value: "low", label: "Low" },
                      { value: "standard", label: "Standard" },
                      { value: "urgent", label: "Urgent (+$150 fee)" },
                    ].map((option) => (
                      <motion.div
                        key={option.value}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        <input
                          type="radio"
                          id={option.value}
                          name="urgency"
                          value={option.value}
                          checked={formData.urgency === option.value}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              urgency: e.target.value,
                            })
                          }
                          className="hidden peer"
                        />
                        <label
                          htmlFor={option.value}
                          className={`block w-full text-center px-4 py-3 rounded-lg border cursor-pointer transition-all ${
                            formData.urgency === option.value
                              ? "bg-blue-600/20 border-blue-400 text-white"
                              : "bg-gray-700 border-gray-600 text-gray-300 hover:border-gray-500"
                          }`}
                        >
                          {option.label}
                        </label>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <div className="flex items-center mb-2">
                    <FiMessageSquare className="text-blue-400 mr-2" />
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-300"
                    >
                      Your Message
                    </label>
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="mt-1 block w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400 transition-all"
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>

                {/* Response Time Indicator */}
                <div className="bg-gray-700/50 rounded-lg p-4 border border-gray-600">
                  <p className="text-gray-300 text-sm">
                    <span className="text-blue-400">Expected response:</span>{" "}
                    {getResponseTime()}
                  </p>
                </div>

                {/* Hidden Honeypot Field For Form Sécurity */}
                {/* <div>
                  <input
                    type="text"
                    name="website"
                    className="hidden"
                    tabIndex="-1"
                    autoComplete="off"
                    onChange={(e) => {
                      if (e.target.value) {
                        // Bot detected - silently fail
                        formRef.current.submit = () => false;
                      }
                    }}
                  />
                </div> */}

                {/* Submit Button */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="pt-2"
                >
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-4 rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
                  >
                    <FiSend className="text-lg" />
                    <span className="font-medium">Send Message</span>
                  </button>
                </motion.div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SmartContactSystem;
