"use client";

import { motion } from "framer-motion";
import {
  FiCalendar,
  FiClock,
  FiVideo,  
  FiAlertCircle,
} from "react-icons/fi";
import { useState, useEffect, useRef } from "react";
import Script from "next/script";

const CalendlyScheduler = () => {
  const [iframeState, setIframeState] = useState<
    "loading" | "loaded" | "error"
  >("loading");
  const [activeTab, setActiveTab] = useState<"inline" | "redirect">("inline");
  const [calendlyLoaded, setCalendlyLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Your actual Calendly configuration
  const calendlyConfig = {
    urls: {
      intro: "https://calendly.com/contact-marvelbiz/30min",
    },
  };

  const meetingOptions = [
    {
      duration: "30 min",
      type: "intro" as const,
      desc: "Quick introduction call",
      ideal: "For new projects and initial discussions",
    },
  ];

  const handleBookMeeting = (eventType: keyof typeof calendlyConfig.urls) => {
    window.open(
      calendlyConfig.urls[eventType],
      "_blank",
      "noopener,noreferrer",
    );
  };

  const handleIframeLoad = () => {
    setIframeState("loaded");
  };

  const handleIframeError = () => {
    setIframeState("error");
  };

  // Generate iframe URL with proper parameters to reduce cookies
  const getIframeUrl = () => {
    const baseUrl = calendlyConfig.urls.intro;
    const domain =
      typeof window !== "undefined" ? window.location.hostname : "localhost";

    // Add parameters to minimize cookie usage and tracking
    return `${baseUrl}?embed_domain=${encodeURIComponent(
      domain,
    )}&embed_type=Inline&hide_event_type_details=1&hide_gdpr_banner=1&hide_landing_page_details=1&hide_landing_page_banner=1&primary_color=3b82f6`;
  };

  // Preconnect to Calendly domains
  useEffect(() => {
    // Add preconnect links
    const preconnectLinks = [
      { rel: "preconnect", href: "https://assets.calendly.com" },
      { rel: "preconnect", href: "https://calendly.com" },
      { rel: "dns-prefetch", href: "https://assets.calendly.com" },
    ];

    preconnectLinks.forEach(({ rel, href }) => {
      const link = document.createElement("link");
      link.rel = rel;
      link.href = href;
      document.head.appendChild(link);
    });

    return () => {
      // Cleanup if needed
    };
  }, []);

  return (
    <section id="scheduler" className="py-20">
      {/* Preload Calendly script with Next.js Script component */}
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
        onLoad={() => setCalendlyLoaded(true)}
      />

      <div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
            Schedule a Meeting
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Book time directly in my calendar for a focused discussion about
            your project
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Calendly Widget Container */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-800/70 backdrop-blur-sm rounded-xl border border-gray-700 shadow-2xl overflow-hidden"
          >
            {/* Tab Navigation */}
            <div className="flex border-b border-gray-700">
              <button
                onClick={() => setActiveTab("inline")}
                className={`flex-1 py-3 px-4 text-sm font-medium transition-colors ${
                  activeTab === "inline"
                    ? "bg-blue-600 text-white"
                    : "text-gray-400 hover:text-white hover:bg-gray-700"
                }`}
              >
                Inline Calendar
              </button>
            </div>

            <div className="p-4 border-b border-gray-700">
              <h3 className="text-white font-semibold flex items-center gap-2">
                <FiCalendar className="text-blue-400" />
                Available Time Slots
              </h3>
              <p className="text-gray-400 text-sm mt-1">
                Select a time that works for you
              </p>
            </div>

            {/* Inline Calendar Tab */}
            <div className="relative min-h-[600px] w-full" ref={containerRef}>
              {iframeState === "loading" && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-800 rounded-b-xl">
                  <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400 mx-auto mb-4"></div>
                    <p className="text-gray-400">
                      Loading scheduling calendar...
                    </p>
                    <p className="text-gray-500 text-sm mt-2">
                      This may take a few moments
                    </p>
                  </div>
                </div>
              )}

              {iframeState === "error" && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-800 rounded-b-xl">
                  <div className="text-center max-w-md p-6">
                    <FiAlertCircle className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                    <h4 className="text-white font-semibold text-lg mb-2">
                      Calendar Not Loading
                    </h4>
                    <p className="text-gray-400 mb-4">
                      There might be a temporary issue with the calendar widget.
                      You can still book meetings using the direct link below.
                    </p>
                    <button
                      onClick={() => handleBookMeeting("intro")}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                    >
                      Book Directly
                    </button>
                  </div>
                </div>
              )}

              <iframe
                src={getIframeUrl()}
                width="100%"
                height="600"
                frameBorder="0"
                onLoad={handleIframeLoad}
                onError={handleIframeError}
                className={`w-full h-[600px] rounded-b-xl ${
                  iframeState !== "loaded" ? "opacity-0" : "opacity-100"
                } transition-opacity duration-300`}
                title="Schedule a meeting with Calendly"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allow="camera; microphone; autoplay; clipboard-write"
              ></iframe>
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-gray-700 bg-gray-900/50">
              <p className="text-gray-400 text-sm text-center">
                Powered by{" "}
                <a
                  href="https://calendly.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  Calendly
                </a>
              </p>
            </div>
          </motion.div>

          {/* Meeting Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-800/70 backdrop-blur-sm rounded-xl p-8 border border-gray-700 shadow-2xl"
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                  <FiClock className="text-blue-400 text-xl" />
                  Meeting Options
                </h3>
                <div className="space-y-4">
                  {meetingOptions.map((item) => (
                    <div
                      key={item.type}
                      className="p-4 rounded-lg border border-gray-600 hover:border-blue-400 transition-colors group"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="text-white font-semibold text-lg">
                            {item.duration} - {item.desc}
                          </h4>
                          <p className="text-gray-400 text-sm mt-1">
                            {item.ideal}
                          </p>
                        </div>
                        <span className="px-3 py-1 bg-blue-400/10 text-blue-400 rounded-full text-sm font-medium">
                          {item.duration}
                        </span>
                      </div>
                      <button
                        onClick={() => handleBookMeeting(item.type)}
                        className="w-full mt-3 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                      >
                        <FiCalendar className="text-sm" />
                        Book {item.duration} Meeting
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-gray-700">
                <div className="flex flex-col md:flex-row items-start gap-4">
                  <div className="p-3 rounded-lg bg-purple-400/10 text-purple-400 flex-shrink-0">
                    <FiVideo className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Video Conferencing
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      All meetings are held via Google Meet, Zoom or MS Teams.
                      The video conference link will be automatically provided
                      in your confirmation email after booking.
                    </p>
                    <div className="mt-3 flex flex-col md:flex-row gap-4 text-sm text-gray-400">
                      <span className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        HD Video Quality
                      </span>
                      <span className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        Screen Sharing
                      </span>
                      <span className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        Recording Available
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-700/50 rounded-lg p-5 border border-gray-600">
                <h4 className="text-gray-300 font-semibold mb-3 flex items-center gap-2">
                  💡 PREPARATION TIPS
                </h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Have your project requirements and goals ready</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Test your audio/video equipment beforehand</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Be in a quiet environment with good lighting</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>
                      Have any relevant documents or links ready to share
                    </span>
                  </li>
                </ul>
              </div>

              {/* Support Section */}
              <div className="text-center pt-4 border-t border-gray-700">
                <p className="text-gray-400 text-sm">
                  Having trouble scheduling?{" "}
                  <a
                    href="mailto:consultus@gemsalex.com"
                    className="text-blue-400 hover:text-blue-300 underline"
                  >
                    Email me directly
                  </a>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CalendlyScheduler;
