import { motion } from "framer-motion";
import { FiCalendar, FiClock, FiVideo } from "react-icons/fi";
import { useEffect, useRef, useState } from "react";

const CalendlyScheduler = () => {
  const calendlyRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Your Calendly settings
  const calendlyConfig = {
    url: "https://calendly.com/yourusername",
    eventType: "30min", // Your default event type
    primaryColor: "3b82f6",
    textColor: "ffffff",
    backgroundColor: "1e293b",
  };

  useEffect(() => {
    if (!isLoaded) return;

    const loadCalendlyWidget = () => {
      if (window.Calendly) {
        window.Calendly.initInlineWidget({
          url: `${calendlyConfig.url}/${calendlyConfig.eventType}?hide_event_type_details=1&primary_color=${calendlyConfig.primaryColor}&text_color=${calendlyConfig.textColor}&background_color=${calendlyConfig.backgroundColor}`,
          parentElement: calendlyRef.current,
          prefill: {},
          utm: {},
        });
      }
    };

    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.onload = () => {
      console.log("Calendly script loaded!");  
      setIsLoaded(true);
      loadCalendlyWidget();
    };
    script.onerror = () => console.error("Calendly script failed to load");
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [isLoaded, calendlyConfig.eventType]);

  return (
    <section id="scheduler" className="py-20 bg-gradient-to-br from-black-100 to-black-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
            Schedule a Meeting
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Book time directly in my calendar for a focused discussion
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Calendly Widget */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-800/70 backdrop-blur-sm rounded-xl border border-gray-700 shadow-2xl overflow-hidden"
          >
            <div
              ref={calendlyRef}
              className="calendly-inline-widget min-h-[550px] w-full"
              data-auto-load="false"
            />
          </motion.div>

          {/* Meeting Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-800/70 backdrop-blur-sm rounded-xl p-8 border border-gray-700 shadow-2xl"
          >
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-blue-400/10 text-blue-400">
                  <FiClock className="text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">
                    Meeting Options
                  </h3>
                  <ul className="space-y-3 mt-2">
                    {[
                      {
                        duration: "30 min",
                        type: "intro",
                        desc: "Quick introduction call",
                      },
                      {
                        duration: "60 min",
                        type: "consultation",
                        desc: "In-depth discussion",
                      },
                      {
                        duration: "15 min",
                        type: "followup",
                        desc: "Quick follow-up",
                      },
                    ].map((item) => (
                      <li key={item.type} className="flex items-start gap-3">
                        <span className="text-blue-400 mt-0.5">•</span>
                        <div>
                          <p className="text-white">
                            <span className="font-medium">{item.duration}</span>{" "}
                            - {item.desc}
                          </p>
                          <button
                            onClick={() => {
                              if (window.Calendly) {
                                window.Calendly.initPopupWidget({
                                  url: `${calendlyConfig.url}/${item.type}`,
                                });
                              }
                            }}
                            className="text-blue-400 hover:text-blue-300 text-sm mt-1 flex items-center gap-1 transition-colors"
                          >
                            Book now <FiCalendar className="text-xs" />
                          </button>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4 border-t border-gray-700">
                <div className="p-3 rounded-lg bg-purple-400/10 text-purple-400">
                  <FiVideo className="text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">
                    Video Conferencing
                  </h3>
                  <p className="text-gray-300">
                    Meetings are held via Google Meet or Zoom. The link will be
                    provided after booking.
                  </p>
                </div>
              </div>

              <div className="bg-gray-700/50 rounded-lg p-4 border border-gray-600 mt-6">
                <h4 className="text-gray-400 text-sm mb-2">PREPARATION TIPS</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <span>•</span> Have your project details ready
                  </li>
                  <li className="flex items-start gap-2">
                    <span>•</span> Test your audio/video beforehand
                  </li>
                  <li className="flex items-start gap-2">
                    <span>•</span> Be in a quiet environment
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CalendlyScheduler;
