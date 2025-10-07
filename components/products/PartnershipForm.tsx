// "use client";

// import { useState } from "react";
// import { XMarkIcon } from "@heroicons/react/24/outline";

// type PartnershipFormProps = {
//   isOpen: boolean;
//   onClose: () => void;
// };

// export default function PartnershipForm({
//   isOpen,
//   onClose,
// }: PartnershipFormProps) {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     company: "",
//     message: "",
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitSuccess, setSubmitSuccess] = useState(false);

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     try {
//       // Replace with your actual submission logic
//       await fetch("/api/partnership", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       setSubmitSuccess(true);
//       setTimeout(() => {
//         setSubmitSuccess(false);
//         onClose();
//       }, 2000);
//     } catch (error) {
//       console.error("Submission error:", error);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
//       <div className="relative bg-gray-900 border border-gray-700 rounded-xl p-6 max-w-md w-full mx-4">
//         <button
//           onClick={onClose}
//           className="absolute top-4 right-4 text-gray-400 hover:text-white"
//         >
//           <XMarkIcon className="w-6 h-6" />
//         </button>

//         <h2 className="text-2xl font-bold text-white mb-4">
//           Partnership Inquiry
//         </h2>

//         {submitSuccess ? (
//           <div className="text-center py-8">
//             <div className="text-green-400 text-lg font-medium mb-2">
//               Thank you for your interest!
//             </div>
//             <p className="text-gray-300">
//               We'll get back to you within 2 business days.
//             </p>
//           </div>
//         ) : (
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div>
//               <label
//                 htmlFor="name"
//                 className="block text-sm font-medium text-gray-300 mb-1"
//               >
//                 Your Name
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 required
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               />
//             </div>

//             <div>
//               <label
//                 htmlFor="email"
//                 className="block text-sm font-medium text-gray-300 mb-1"
//               >
//                 Email Address
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 required
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               />
//             </div>

//             <div>
//               <label
//                 htmlFor="company"
//                 className="block text-sm font-medium text-gray-300 mb-1"
//               >
//                 Company (Optional)
//               </label>
//               <input
//                 type="text"
//                 id="company"
//                 name="company"
//                 value={formData.company}
//                 onChange={handleChange}
//                 className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               />
//             </div>

//             <div>
//               <label
//                 htmlFor="message"
//                 className="block text-sm font-medium text-gray-300 mb-1"
//               >
//                 How can we collaborate?
//               </label>
//               <textarea
//                 id="message"
//                 name="message"
//                 rows={4}
//                 required
//                 value={formData.message}
//                 onChange={handleChange}
//                 className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               />
//             </div>

//             <button
//               type="submit"
//               disabled={isSubmitting}
//               className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
//             >
//               {isSubmitting ? "Sending..." : "Submit Partnership Request"}
//             </button>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// }


"use client";

import { useState, useEffect, FormEvent, ChangeEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  XMarkIcon,
  BuildingOfficeIcon,
  UserIcon,
  EnvelopeIcon,
  ChatBubbleLeftRightIcon,
  HandRaisedIcon,
  ClockIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline";
import {
  PartnershipFormData,
  PartnershipApiResponse,
  ToastState,
} from "@/types/partnership";

type PartnershipType = "strategic" | "technical" | "commercial" | "other";
type CompanySize = "startup" | "small" | "medium" | "enterprise" | "agency";

interface PartnershipFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PartnershipForm({
  isOpen,
  onClose,
}: PartnershipFormProps) {
  const [formData, setFormData] = useState<PartnershipFormData>({
    name: "",
    email: "",
    company: "",
    companySize: "startup",
    partnershipType: "strategic",
    projectDescription: "",
    timeline: "",
    budget: "",
    website: "", // Honeypot
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [csrfToken, setCsrfToken] = useState("");
  const [toast, setToast] = useState<ToastState>({
    show: false,
    type: "",
    message: "",
  });

  // Fetch CSRF token
  useEffect(() => {
    if (isOpen) {
      fetchCsrfToken();
    }
  }, [isOpen]);

  const fetchCsrfToken = async (): Promise<void> => {
    try {
      const response = await fetch("/api/csrf");
      const data = await response.json();
      setCsrfToken(data.csrfToken);
    } catch (error) {
      console.error("Failed to fetch CSRF token:", error);
    }
  };

  const showToast = (type: "success" | "error", message: string): void => {
    setToast({ show: true, type, message });
    setTimeout(() => setToast({ show: false, type: "", message: "" }), 5000);
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (isSubmitting || !csrfToken) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/partnership", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          csrfToken,
        }),
      });

      const data: PartnershipApiResponse = await response.json();

      if (data.success) {
        showToast(
          "success",
          "Partnership request sent successfully! We'll contact you within 24 hours."
        );
        // Reset form
        setFormData({
          name: "",
          email: "",
          company: "",
          companySize: "startup",
          partnershipType: "strategic",
          projectDescription: "",
          timeline: "",
          budget: "",
          website: "",
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
            data.message || "Failed to submit partnership request."
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

  if (!isOpen) return null;

  return (
    <>
      {/* Toast Notification */}
      <AnimatePresence>
        {toast.show && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className={`fixed top-4 right-4 z-60 p-4 rounded-lg shadow-lg border ${
              toast.type === "success"
                ? "bg-green-500/20 border-green-400 text-green-400"
                : "bg-red-500/20 border-red-400 text-red-400"
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

      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        >
          {/* Header */}
          <div className="relative p-6 border-b border-gray-700">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-500/10 rounded-lg">
                  <HandRaisedIcon className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">
                    Strategic Partnership
                  </h2>
                  <p className="text-gray-400 text-sm">
                    Let's build something amazing together
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg transition-colors"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
                    <UserIcon className="w-4 h-4" />
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full bg-gray-800 border border-gray-600 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    disabled={isSubmitting}
                  />
                </div>

                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
                    <EnvelopeIcon className="w-4 h-4" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    className="w-full bg-gray-800 border border-gray-600 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              {/* Company Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
                    <BuildingOfficeIcon className="w-4 h-4" />
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Company"
                    className="w-full bg-gray-800 border border-gray-600 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    disabled={isSubmitting}
                  />
                </div>

                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
                    <BuildingOfficeIcon className="w-4 h-4" />
                    Company Size
                  </label>
                  <select
                    name="companySize"
                    value={formData.companySize}
                    onChange={handleChange}
                    className="w-full bg-gray-800 border border-gray-600 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    disabled={isSubmitting}
                  >
                    <option value="startup">Startup (1-10)</option>
                    <option value="small">Small Business (11-50)</option>
                    <option value="medium">Medium Business (51-200)</option>
                    <option value="enterprise">Enterprise (201+)</option>
                    <option value="agency">Agency</option>
                  </select>
                </div>
              </div>

              {/* Partnership Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
                    🤝 Partnership Type
                  </label>
                  <select
                    name="partnershipType"
                    value={formData.partnershipType}
                    onChange={handleChange}
                    className="w-full bg-gray-800 border border-gray-600 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    disabled={isSubmitting}
                  >
                    <option value="strategic">Strategic Partnership</option>
                    <option value="technical">Technical Collaboration</option>
                    <option value="commercial">Commercial Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
                    <ClockIcon className="w-4 h-4" />
                    Project Timeline
                  </label>
                  <input
                    type="text"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    placeholder="e.g., 3 months, ASAP, Q2 2024"
                    className="w-full bg-gray-800 border border-gray-600 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              {/* Budget */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
                  💰 Budget Range
                </label>
                <input
                  type="text"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  placeholder="e.g., $10,000 - $25,000, To be discussed"
                  className="w-full bg-gray-800 border border-gray-600 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  disabled={isSubmitting}
                />
              </div>

              {/* Project Description */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
                  <ChatBubbleLeftRightIcon className="w-4 h-4" />
                  Project Description & Collaboration Ideas *
                </label>
                <textarea
                  name="projectDescription"
                  rows={5}
                  required
                  value={formData.projectDescription}
                  onChange={handleChange}
                  placeholder="Tell us about your project, goals, and how you envision our collaboration. What specific expertise are you looking for?"
                  className="w-full bg-gray-800 border border-gray-600 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  disabled={isSubmitting}
                />
              </div>

              {/* Honeypot Field */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input
                  type="text"
                  id="website"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-4 p-4 bg-gray-800/50 rounded-xl">
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span>Response within 24 hours</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                  <span>Strict confidentiality</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                  <span>No obligation consultation</span>
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting || !csrfToken}
                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                className={`w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 ${
                  isSubmitting || !csrfToken
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:from-blue-700 hover:to-purple-700"
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                    <span>Submitting Partnership Request...</span>
                  </>
                ) : (
                  <>
                    <HandRaisedIcon className="w-5 h-5" />
                    <span>Submit Partnership Proposal</span>
                  </>
                )}
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </>
  );
}