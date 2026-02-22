'use client';

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, FormEvent, ChangeEvent } from "react";
import {
  FiSend,
  FiUser,
  FiMail,
  FiMessageSquare,
  FiDollarSign,
  FiCalendar,
  FiAlertCircle,
  FiCheckCircle,
  FiXCircle,
} from "react-icons/fi";
import {
  ContactFormData,
  ApiResponse,
  CsrfResponse,
  ToastState,
} from "@/types/contact";

const SmartContactSystem = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
    projectType: "general",
    budget: "",
    urgency: "standard",
    website: "", // Honeypot field
  });

  const [currentTimezone, setCurrentTimezone] = useState<string>("");
  const [isAvailable, setIsAvailable] = useState<boolean>(true);
  const [showBudget, setShowBudget] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [toast, setToast] = useState<ToastState>({
    show: false,
    type: "",
    message: "",
  });
  const [csrfToken, setCsrfToken] = useState<string>("");

  // Fetch CSRF token on component mount
  useEffect(() => {
    fetchCsrfToken();
    setCurrentTimezone(Intl.DateTimeFormat().resolvedOptions().timeZone);
    checkAvailability();
  }, []);

  const fetchCsrfToken = async (): Promise<void> => {
    try {
      const response = await fetch("/api/csrf");
      const data = await response.json();

      if (!response.ok) {
        // Show the refresh message from the API
        showToast(
          "error",
          data.message ||
            "Failed to fetch security token. Please refresh the page with Ctrl+F5.",
        );
        return;
      }

      setCsrfToken(data.csrfToken);
    } catch (error) {
      console.error("Failed to fetch CSRF token:", error);
      showToast(
        "error",
        "Connection error. Please refresh the page with Ctrl+F5 and try again.",
      );
    }
  };

  const showToast = (type: "success" | "error", message: string): void => {
    setToast({ show: true, type, message });
    setTimeout(() => setToast({ show: false, type: "", message: "" }), 5000);
  };

  const checkAvailability = (): void => {
    const now = new Date();
    const hours = now.getHours();
    setIsAvailable(hours >= 9 && hours < 17);
  };

  const handleProjectChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    const value = e.target.value as ContactFormData["projectType"];
    setFormData({ ...formData, projectType: value });
    setShowBudget(value === "freelance");
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRadioChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value as ContactFormData["urgency"],
    }));
  };

  const getResponseTime = (): string => {
    if (formData.urgency === "urgent") return "1-4 hours";
    if (formData.projectType === "freelance") return "12-24 hours";
    return "24-48 hours";
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    if (isSubmitting || !csrfToken) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          csrfToken: csrfToken,
        }),
      });

      const data: ApiResponse = await response.json();

      if (data.success) {
        showToast("success", `Message sent! ${data.message}`);
        // Reset form
        setFormData({
          name: "",
          email: "",
          message: "",
          projectType: "general",
          budget: "",
          urgency: "standard",
          website: "",
        });
        setShowBudget(false);
        // Refresh CSRF token after successful submission
        await fetchCsrfToken();
      } else {
        if (data.errors) {
          const errorMessage = data.errors.map((err) => err.message).join(", ");
          showToast("error", errorMessage);
        } else {
          showToast(
            "error",
            data.message || "Failed to send message. Please try again."
          );
        }
      }
    } catch (error) {
      console.error("Submission error:", error);
      showToast(
        "error",
        "Network error. Please check your connection and try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact-system"
      className="py-20 bg-gradient-to-br from-black-100 to-black-100"
    >
      {/* Toast Notification */}
      <AnimatePresence>
        {toast.show && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className={`fixed top-4 right-4 z-[5001] p-4 rounded-lg shadow-lg border ${
              toast.type === "success"
                ? "bg-green-700/80 border-green-600 text-green-400"
                : "bg-red-700/80 border-red-600 text-red-400"
            }`}
          >
            <div className="flex items-center gap-2">
              {toast.type === "success" ? <FiCheckCircle /> : <FiXCircle />}
              <span>{toast.message}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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
                      style={{ width: "35%" }}
                    />
                  </div>
                  <p className="text-gray-400 text-xs mt-2">
                    Low capacity - accepting new projects
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
                  Smart Contact
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
                    onChange={handleInputChange}
                    className="mt-1 block w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400 transition-all"
                    placeholder="John Doe"
                    required
                    disabled={isSubmitting}
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
                    onChange={handleInputChange}
                    className="mt-1 block w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400 transition-all"
                    placeholder="john@example.com"
                    required
                    disabled={isSubmitting}
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
                    disabled={isSubmitting}
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
                          onChange={handleInputChange}
                          className="mt-1 block w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400 transition-all"
                          placeholder="$5,000 - $10,000"
                          disabled={isSubmitting}
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
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
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
                          onChange={handleRadioChange}
                          className="hidden peer"
                          disabled={isSubmitting}
                        />
                        <label
                          htmlFor={option.value}
                          className={`block w-full text-center px-4 py-3 rounded-lg border cursor-pointer transition-all ${
                            formData.urgency === option.value
                              ? "bg-blue-600/20 border-blue-400 text-white"
                              : "bg-gray-700 border-gray-600 text-gray-300 hover:border-gray-500"
                          } ${
                            isSubmitting ? "opacity-50 cursor-not-allowed" : ""
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
                    onChange={handleInputChange}
                    className="mt-1 block w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400 transition-all"
                    placeholder="Tell me about your project..."
                    required
                    disabled={isSubmitting}
                  />
                </div>

                {/* Honeypot Field - Hidden from users but visible to bots */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="website">Website</label>
                  <input
                    type="text"
                    id="website"
                    name="website"
                    value={formData.website}
                    onChange={handleInputChange}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                {/* Response Time Indicator */}
                <div className="bg-gray-700/50 rounded-lg p-4 border border-gray-600">
                  <p className="text-gray-300 text-sm">
                    <span className="text-blue-400">Expected response:</span>{" "}
                    {getResponseTime()}
                  </p>
                </div>

                {/* Submit Button */}
                <motion.div
                  whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  className="pt-2"
                >
                  <button
                    type="submit"
                    disabled={isSubmitting || !csrfToken}
                    className={`w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg ${
                      isSubmitting || !csrfToken
                        ? "opacity-50 cursor-not-allowed"
                        : "hover:from-blue-700 hover:to-cyan-700"
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span className="font-medium">Sending...</span>
                      </>
                    ) : (
                      <>
                        <FiSend className="text-lg" />
                        <span className="font-medium">Send Message</span>
                      </>
                    )}
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