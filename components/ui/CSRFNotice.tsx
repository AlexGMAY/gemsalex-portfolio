"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiRefreshCw, FiAlertCircle, FiX } from "react-icons/fi";

type CSRFNoticeProps = {
  type?: "contact" | "pricing" | "partnership";
  onDismiss?: () => void;
  autoShow?: boolean;
};

const CSRFNotice = ({
  type = "contact",
  onDismiss,
  autoShow = false,
}: CSRFNoticeProps) => {
  const [isVisible, setIsVisible] = useState(autoShow);
  const [isMac, setIsMac] = useState(false);

  useEffect(() => {
    // Detect if user is on Mac
    setIsMac(navigator.platform.toUpperCase().indexOf("MAC") >= 0);

    // Check for CSRF error in URL or session storage
    if (autoShow) {
      const hasCSRFError = sessionStorage.getItem("csrf_error") === "true";
      if (hasCSRFError) {
        setIsVisible(true);
      }
    }
  }, [autoShow]);

  const handleDismiss = () => {
    setIsVisible(false);
    sessionStorage.removeItem("csrf_error");
    if (onDismiss) onDismiss();
  };

  const refreshInstructions = isMac ? (
    <span className="font-mono bg-gray-800 px-2 py-1 rounded">⌘ Cmd + R</span>
  ) : (
    <span className="font-mono bg-gray-800 px-2 py-1 rounded">Ctrl + F5</span>
  );

  const formTypeLabels = {
    contact: "contact form",
    pricing: "pricing form",
    partnership: "partnership form",
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-md px-4"
        >
          <div className="relative bg-gradient-to-r from-amber-500/10 to-orange-500/10 backdrop-blur-md border border-amber-500/30 rounded-2xl shadow-2xl overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(251,191,36,0.1),transparent_70%)]" />

            {/* Content */}
            <div className="relative p-5">
              {/* Close button */}
              <button
                onClick={handleDismiss}
                className="absolute top-3 right-3 text-gray-400 hover:text-white transition-colors"
                aria-label="Dismiss"
              >
                <FiX size={18} />
              </button>

              {/* Icon and Title */}
              <div className="flex items-start gap-3 mb-4">
                <div className="p-2 bg-amber-500/20 rounded-lg">
                  <FiAlertCircle className="text-amber-400" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-white">
                    Security Verification Needed
                  </h3>
                  <p className="text-sm text-gray-400 mt-0.5">
                    {formTypeLabels[type]} submission failed
                  </p>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-3">
                <p className="text-sm text-gray-300 leading-relaxed">
                  A security token (CSRF) error occurred. This usually happens
                  when the page has been open for a while.
                </p>

                <div className="bg-gray-900/50 rounded-xl p-4 border border-gray-800">
                  <div className="flex items-center gap-3 mb-3">
                    <FiRefreshCw
                      className="text-amber-400 animate-spin-slow"
                      size={16}
                    />
                    <span className="text-sm font-medium text-white">
                      Quick Fix:
                    </span>
                  </div>

                  <p className="text-sm text-gray-300 mb-2">
                    Press {refreshInstructions} to refresh the page with a clean
                    session, then try submitting again.
                  </p>                  
                </div>

                {/* Alternative method */}
                <details className="text-sm">
                  <summary className="text-amber-400 cursor-pointer hover:text-amber-300 transition-colors">
                    Alternative solution
                  </summary>
                  <div className="mt-3 p-3 bg-gray-900/30 rounded-lg border border-gray-800">
                    <p className="text-gray-400 text-xs leading-relaxed">
                      Try opening the form in an incognito/private window, or
                      clear your browser cache and cookies for this site.
                    </p>
                  </div>
                </details>
              </div>

              {/* Action buttons */}
              <div className="flex gap-2 mt-4 pt-3 border-t border-gray-800">
                <button
                  onClick={() => window.location.reload()}
                  className="flex-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-sm font-medium py-2.5 px-4 rounded-lg hover:from-amber-600 hover:to-orange-600 transition-all shadow-lg shadow-amber-500/25"
                >
                  Refresh Now
                </button>
                <button
                  onClick={handleDismiss}
                  className="flex-1 bg-gray-800 text-gray-300 text-sm font-medium py-2.5 px-4 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  Dismiss
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Toast-style mini notice (alternative version)
export const CSRFMiniNotice = ({
  type = "contact",
}: {
  type?: "contact" | "pricing" | "partnership";
}) => {
  const [isMac, setIsMac] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setIsMac(navigator.platform.toUpperCase().indexOf("MAC") >= 0);
  }, []);

  if (!isVisible) return null;

  const refreshText = isMac ? "⌘ Cmd + R" : "Ctrl + F5";

  const formTypeLabels = {
    contact: "Contact form",
    pricing: "Pricing calculator",
    partnership: "Partnership form",
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="fixed bottom-4 right-4 z-50 max-w-sm"
    >
      <div className="bg-gray-900/95 backdrop-blur-sm border border-amber-500/30 rounded-lg shadow-xl p-4">
        <div className="flex items-start gap-3">
          <div className="p-1.5 bg-amber-500/20 rounded-full shrink-0">
            <FiRefreshCw size={14} className="text-amber-400" />
          </div>
          <div className="flex-1">
            <p className="text-sm text-gray-300">
              <span className="font-medium text-white">
                {formTypeLabels[type]}
              </span>{" "}
              failed due to security token. Press{" "}
              <span className="font-mono text-amber-400 bg-gray-800 px-1.5 py-0.5 rounded text-xs">
                {refreshText}
              </span>{" "}
              to refresh and try again.
            </p>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="text-gray-500 hover:text-gray-400 transition-colors"
          >
            <FiX size={16} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

// Hook to trigger CSRF notice
export const useCSRFNotice = () => {
  const showCSRFNotice = (
    type: "contact" | "pricing" | "partnership" = "contact",
  ) => {
    sessionStorage.setItem("csrf_error", "true");
    sessionStorage.setItem("csrf_form_type", type);
    window.location.reload(); // Or use router.refresh() if using Next.js App Router
  };

  const getCSRFType = (): "contact" | "pricing" | "partnership" => {
    return (sessionStorage.getItem("csrf_form_type") as any) || "contact";
  };

  return { showCSRFNotice, getCSRFType };
};

export default CSRFNotice;
