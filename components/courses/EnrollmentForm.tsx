"use client";

import { useState, useEffect, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiX,
  FiCalendar,  
  FiUser,
  FiMail,
  FiMessageSquare,
  FiSend,
  FiThumbsUp,
  FiDownload,
} from "react-icons/fi";
import { FaWhatsapp, FaGraduationCap } from "react-icons/fa";
import {
  EnrollmentFormData,
  EnrollmentApiResponse,
  ToastState,
} from "@/types/enrollment";
import CSRFNotice, { useCSRFNotice } from "../ui/CSRFNotice";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import { CheckCircleIcon } from "lucide-react";

interface EnrollmentFormProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedCourse: {
    id: string;
    title: string;
    category: string;
  } | null;
}

const EnrollmentForm = ({
  isOpen,
  onClose,
  preselectedCourse,
}: EnrollmentFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [csrfToken, setCsrfToken] = useState("");
  const [toast, setToast] = useState<ToastState>({
      show: false,
      type: "",
      message: "",
  });
  const [showNotice, setShowNotice] = useState(false);
  const { showCSRFNotice } = useCSRFNotice();
  const [formData, setFormData] = useState<EnrollmentFormData>({
    fullName: "",
    email: "",
    phone: "",
    courseId: "",
    courseTitle: "",
    preferredSchedule: "",
    experienceLevel: "",
    message: "",
    website: "", // Honeypot field
  });

  // Mettre à jour le cours présélectionné
  useEffect(() => {
    if (preselectedCourse) {
      setFormData((prev) => ({
        ...prev,
        courseId: preselectedCourse.id,
        courseTitle: preselectedCourse.title,
      }));
    }
  }, [preselectedCourse]);

  // Fetch CSRF token
  useEffect(() => {
    if (isOpen) {
      fetchCsrfToken();
    }
  }, [isOpen]);

  const fetchCsrfToken = async () => {
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

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.courseId) {
      alert("Please select a course first");
      return;
    }

    if (!csrfToken) {
      showToast(
        "error",
        "Security token missing. Please refresh the page with Ctrl+F5 (Cmd+R on Mac) and try again.",
      );
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/enrollment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          csrfToken,
        }),
      });

      if (response.status === 403) {
        setShowNotice(true);
        showCSRFNotice("enrollment");
        // Clear any existing success state
        sessionStorage.removeItem("enrollment_form_success");
        // Don't proceed further
        return;
      }

      const data: EnrollmentApiResponse = await response.json();

      if (data.success) {        
        showToast("success", "Enrollment appointment sent successfully!");
        // Reset Form
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          courseId: "",
          courseTitle: "",
          preferredSchedule: "",
          experienceLevel: "",
          message: "",
          website: "", // Honeypot field
        });
        // Close modal after success
        setTimeout(() => onClose(), 2000);
      } else {
        if (data.errors) {
          const errorMessage = data.errors.map((err) => err.message).join(", ");
          showToast("error", errorMessage);
        } else {
          showToast(
            "error",
            data.message || "Failed to submit enrollment request.",
          );
        }
      }
    } catch (error) {
      console.error("Submission error:", error);
      showToast(
        "error",
        "Network error. Please check your connection and try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // Fonction pour télécharger le syllabus
  const handleDownloadSyllabus = () => {
    // Créer un lien de téléchargement
    const link = document.createElement("a");
    link.href = `/syllabus/${formData.courseId}.pdf`;
    link.download = `${formData.courseTitle}-Syllabus.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getCategoryGradient = () => {
    if (!preselectedCourse) return "from-blue-500 to-cyan-500";
    switch (preselectedCourse.category) {
      case "tech":
        return "from-blue-500 to-cyan-500";
      case "business":
        return "from-lime-500 to-emerald-500";
      default:
        return "from-blue-500 to-cyan-500";
    }
  };

  return (
    <>
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
              {toast.type === "success" ? (
                <CheckCircleIcon className="w-5 h-5" />
              ) : (
                <ExclamationCircleIcon className="w-5 h-5" />
              )}
              <span className="text-sm font-medium">{toast.message}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
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
              className="relative max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-3xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-800/80 hover:bg-gray-700 transition-all"
              >
                <FiX className="h-5 w-5 text-white" />
              </button>

              <div className="p-6 md:p-8">
                {/* Success Message */}
                {isSuccess ? (
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
                      <FiThumbsUp className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Request Sent!
                    </h3>
                    <p className="text-gray-400 mb-6">
                      Thank you for your interest! We&apos;ll get back to you
                      within 24 hours with a personalized quote.
                    </p>
                    <button
                      onClick={onClose}
                      className="px-6 py-2 rounded-xl bg-gray-800 text-white hover:bg-gray-700 transition-all"
                    >
                      Close
                    </button>
                  </motion.div>
                ) : (
                  <>
                    {/* Header */}
                    <div className="mb-6 text-center">
                      <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500/20 to-lime-500/20 px-4 py-1.5 mb-4">
                        <FiSend className="text-lime-400" size={14} />
                        <span className="text-xs font-medium text-lime-300">
                          Get Your Personalized Quote
                        </span>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-white">
                        Enroll in{" "}
                        <span
                          className={`bg-gradient-to-r ${getCategoryGradient()} bg-clip-text text-transparent`}
                        >
                          {preselectedCourse?.title || "a Course"}
                        </span>
                      </h2>
                      <p className="text-gray-400 text-sm mt-2">
                        Fill out the form below and we&apos;ll send you a
                        detailed quote
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      {/* Course Display (readonly) */}
                      <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-500/10 to-lime-500/10 border border-gray-700">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-xl bg-gradient-to-r from-blue-500/20 to-lime-500/20">
                            <FaGraduationCap className="h-5 w-5 text-lime-400" />
                          </div>
                          <div className="flex-1">
                            <p className="text-xs text-gray-500">
                              Selected Course
                            </p>
                            <p className="font-semibold text-white">
                              {formData.courseTitle || "Not selected"}
                            </p>
                          </div>
                          <button
                            type="button"
                            onClick={handleDownloadSyllabus}
                            disabled={!formData.courseId}
                            className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-gray-800 text-white text-sm hover:bg-gray-700 transition-all disabled:opacity-50"
                          >
                            <FiDownload size={14} />
                            Syllabus
                          </button>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1">
                          Full Name *
                        </label>
                        <div className="relative">
                          <FiUser
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                            size={16}
                          />
                          <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            required
                            className="w-full pl-10 pr-4 py-2.5 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-500"
                            placeholder="John Doe"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1">
                          Email *
                        </label>
                        <div className="relative">
                          <FiMail
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                            size={16}
                          />
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full pl-10 pr-4 py-2.5 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-500"
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1">
                          Phone (Optional)
                        </label>
                        <div className="relative">
                          <FaWhatsapp
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-green-500"
                            size={16}
                          />
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-4 py-2.5 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-500"
                            placeholder="+1234567890"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-1">
                            Experience Level
                          </label>
                          <select
                            name="experienceLevel"
                            value={formData.experienceLevel}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2.5 bg-gray-800/50 border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-lime-500"
                          >
                            <option value="">Select level</option>
                            <option value="beginner">Beginner</option>
                            <option value="intermediate">Intermediate</option>
                            <option value="advanced">Advanced</option>
                            <option value="expert">Expert</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-1">
                            Preferred Schedule
                          </label>
                          <div className="relative">
                            <FiCalendar
                              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                              size={16}
                            />
                            <input
                              type="text"
                              name="preferredSchedule"
                              value={formData.preferredSchedule}
                              onChange={handleInputChange}
                              className="w-full pl-10 pr-4 py-2.5 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-500"
                              placeholder="Evenings, Weekends"
                            />
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1">
                          Additional Message
                        </label>
                        <div className="relative">
                          <FiMessageSquare
                            className="absolute left-3 top-3 text-gray-500"
                            size={16}
                          />
                          <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            rows={3}
                            className="w-full pl-10 pr-4 py-2.5 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-500 resize-none"
                            placeholder="Any specific questions or requirements?"
                          />
                        </div>
                      </div>

                      {/* Hidden honeypot */}
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

                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full py-3 rounded-xl bg-gradient-to-r from-lime-500 to-green-500 text-white font-semibold flex items-center justify-center gap-2 transition-all ${
                          isSubmitting
                            ? "opacity-50 cursor-not-allowed"
                            : "hover:from-lime-600 hover:to-green-600"
                        }`}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                            <span>Sending...</span>
                          </>
                        ) : (
                          <>
                            <FiSend size={18} />
                            <span>Request Quote</span>
                          </>
                        )}
                      </motion.button>

                      <p className="text-xs text-gray-500 text-center">
                        By submitting, you agree to receive a personalized
                        quote. We&apos;ll respond within 24 hours.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CSRF Notice */}
      <CSRFNotice
        type="enrollment"
        autoShow={showNotice}
        onDismiss={() => {
          setShowNotice(false);
          // Optionally refresh CSRF token
          fetchCsrfToken();
        }}
      />
    </>
  );
};

export default EnrollmentForm;
