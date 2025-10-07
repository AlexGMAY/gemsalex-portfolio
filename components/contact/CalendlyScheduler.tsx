// import { motion } from "framer-motion";
// import { FiCalendar, FiClock, FiVideo } from "react-icons/fi";
// import { useEffect, useRef, useState } from "react";

// const CalendlyScheduler = () => {
//   const calendlyRef = useRef<HTMLDivElement>(null);
//   const [isLoaded, setIsLoaded] = useState(false);

//   // Your Calendly settings
//   const calendlyConfig = {
//     url: "https://calendly.com/yourusername",
//     eventType: "30min", // Your default event type
//     primaryColor: "3b82f6",
//     textColor: "ffffff",
//     backgroundColor: "1e293b",
//   };

//   useEffect(() => {
//     if (!isLoaded) return;

//     const loadCalendlyWidget = () => {
//       if (window.Calendly) {
//         window.Calendly.initInlineWidget({
//           url: `${calendlyConfig.url}/${calendlyConfig.eventType}?hide_event_type_details=1&primary_color=${calendlyConfig.primaryColor}&text_color=${calendlyConfig.textColor}&background_color=${calendlyConfig.backgroundColor}`,
//           parentElement: calendlyRef.current,
//           prefill: {},
//           utm: {},
//         });
//       }
//     };

//     const script = document.createElement("script");
//     script.src = "https://assets.calendly.com/assets/external/widget.js";
//     script.async = true;
//     script.onload = () => {
//       console.log("Calendly script loaded!");  
//       setIsLoaded(true);
//       loadCalendlyWidget();
//     };
//     script.onerror = () => console.error("Calendly script failed to load");
//     document.body.appendChild(script);

//     return () => {
//       document.body.removeChild(script);
//     };
//   }, [isLoaded, calendlyConfig.eventType]);

//   return (
//     <section id="scheduler" className="py-20 bg-gradient-to-br from-black-100 to-black-100">
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-12"
//         >
//           <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
//             Schedule a Meeting
//           </h2>
//           <p className="text-gray-400 max-w-2xl mx-auto">
//             Book time directly in my calendar for a focused discussion
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
//           {/* Calendly Widget */}
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//             className="bg-gray-800/70 backdrop-blur-sm rounded-xl border border-gray-700 shadow-2xl overflow-hidden"
//           >
//             <div
//               ref={calendlyRef}
//               className="calendly-inline-widget min-h-[550px] w-full"
//               data-auto-load="false"
//             />
//           </motion.div>

//           {/* Meeting Info */}
//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="bg-gray-800/70 backdrop-blur-sm rounded-xl p-8 border border-gray-700 shadow-2xl"
//           >
//             <div className="space-y-6">
//               <div className="flex items-start gap-4">
//                 <div className="p-3 rounded-lg bg-blue-400/10 text-blue-400">
//                   <FiClock className="text-xl" />
//                 </div>
//                 <div>
//                   <h3 className="text-xl font-semibold text-white mb-1">
//                     Meeting Options
//                   </h3>
//                   <ul className="space-y-3 mt-2">
//                     {[
//                       {
//                         duration: "30 min",
//                         type: "intro",
//                         desc: "Quick introduction call",
//                       },
//                       {
//                         duration: "60 min",
//                         type: "consultation",
//                         desc: "In-depth discussion",
//                       },
//                       {
//                         duration: "15 min",
//                         type: "followup",
//                         desc: "Quick follow-up",
//                       },
//                     ].map((item) => (
//                       <li key={item.type} className="flex items-start gap-3">
//                         <span className="text-blue-400 mt-0.5">•</span>
//                         <div>
//                           <p className="text-white">
//                             <span className="font-medium">{item.duration}</span>{" "}
//                             - {item.desc}
//                           </p>
//                           <button
//                             onClick={() => {
//                               if (window.Calendly) {
//                                 window.Calendly.initPopupWidget({
//                                   url: `${calendlyConfig.url}/${item.type}`,
//                                 });
//                               }
//                             }}
//                             className="text-blue-400 hover:text-blue-300 text-sm mt-1 flex items-center gap-1 transition-colors"
//                           >
//                             Book now <FiCalendar className="text-xs" />
//                           </button>
//                         </div>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>

//               <div className="flex items-start gap-4 pt-4 border-t border-gray-700">
//                 <div className="p-3 rounded-lg bg-purple-400/10 text-purple-400">
//                   <FiVideo className="text-xl" />
//                 </div>
//                 <div>
//                   <h3 className="text-xl font-semibold text-white mb-1">
//                     Video Conferencing
//                   </h3>
//                   <p className="text-gray-300">
//                     Meetings are held via Google Meet or Zoom. The link will be
//                     provided after booking.
//                   </p>
//                 </div>
//               </div>

//               <div className="bg-gray-700/50 rounded-lg p-4 border border-gray-600 mt-6">
//                 <h4 className="text-gray-400 text-sm mb-2">PREPARATION TIPS</h4>
//                 <ul className="space-y-2 text-sm text-gray-300">
//                   <li className="flex items-start gap-2">
//                     <span>•</span> Have your project details ready
//                   </li>
//                   <li className="flex items-start gap-2">
//                     <span>•</span> Test your audio/video beforehand
//                   </li>
//                   <li className="flex items-start gap-2">
//                     <span>•</span> Be in a quiet environment
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CalendlyScheduler;

import { motion } from "framer-motion";
import { FiCalendar, FiClock, FiVideo } from "react-icons/fi";
import { useEffect, useRef, useState } from "react";

// Extend Window interface to include Calendly
declare global {
  interface Window {
    Calendly: {
      initInlineWidget: (options: {
        url: string;
        parentElement: HTMLElement | null;
        prefill?: object;
        utm?: object;
      }) => void;
      initPopupWidget: (options: { url: string }) => void;
      showPopupWidget: (url: string) => void;
      closePopupWidget: () => void;
    };
  }
}

const CalendlyScheduler = () => {
  const calendlyRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isScriptLoading, setIsScriptLoading] = useState(false);

  // Calendly settings
  const calendlyConfig = {
    url:
      process.env.NEXT_PUBLIC_CALENDLY_URL ||
      "https://calendly.com/contact-marvelbiz", // Actual Calendly URL
    eventTypes: {
      intro: "30min", // 30-minute meeting type slug
      consultation: "60min", // 60-minute meeting type slug
      followup: "15min", // 15-minute meeting type slug
    },
    primaryColor: "3b82f6",
    textColor: "ffffff",
    backgroundColor: "1e293b",
  };

  useEffect(() => {
    // Don't load if already loading or loaded
    if (isLoaded || isScriptLoading) return;

    const loadCalendlyWidget = () => {
      if (window.Calendly && calendlyRef.current) {
        try {
          window.Calendly.initInlineWidget({
            url: `${calendlyConfig.url}/${calendlyConfig.eventTypes.intro}?hide_event_type_details=1&primary_color=${calendlyConfig.primaryColor}&text_color=${calendlyConfig.textColor}&background_color=${calendlyConfig.backgroundColor}`,
            parentElement: calendlyRef.current,
            prefill: {},
            utm: {},
          });
          console.log("Calendly widget initialized successfully!");
        } catch (error) {
          console.error("Error initializing Calendly widget:", error);
        }
      }
    };

    const loadCalendlyScript = () => {
      setIsScriptLoading(true);

      // Check if script is already loaded
      if (document.querySelector('script[src*="calendly.com"]')) {
        console.log("Calendly script already exists");
        setIsLoaded(true);
        setIsScriptLoading(false);
        setTimeout(loadCalendlyWidget, 100); // Small delay to ensure script is ready
        return;
      }

      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;

      script.onload = () => {
        console.log("Calendly script loaded successfully!");
        setIsLoaded(true);
        setIsScriptLoading(false);
        // Give Calendly a moment to initialize
        setTimeout(loadCalendlyWidget, 500);
      };

      script.onerror = (error) => {
        console.error("Calendly script failed to load:", error);
        setIsScriptLoading(false);
        setIsLoaded(false);
      };

      document.head.appendChild(script);
    };

    loadCalendlyScript();

    return () => {
      // Cleanup: remove any existing Calendly widgets
      const calendlyElements = document.querySelectorAll(
        "[data-calendly-widget]"
      );
      calendlyElements.forEach((el) => el.remove());
    };
  }, [isLoaded, isScriptLoading]);

  const handleBookMeeting = (eventType: string) => {
    if (!window.Calendly) {
      console.error("Calendly not loaded");
      // Fallback: open Calendly in new tab
      window.open(
        `${calendlyConfig.url}/${
          calendlyConfig.eventTypes[
            eventType as keyof typeof calendlyConfig.eventTypes
          ]
        }`,
        "_blank"
      );
      return;
    }

    try {
      window.Calendly.initPopupWidget({
        url: `${calendlyConfig.url}/${
          calendlyConfig.eventTypes[
            eventType as keyof typeof calendlyConfig.eventTypes
          ]
        }`,
      });
    } catch (error) {
      console.error("Error opening Calendly popup:", error);
      // Fallback
      window.open(
        `${calendlyConfig.url}/${
          calendlyConfig.eventTypes[
            eventType as keyof typeof calendlyConfig.eventTypes
          ]
        }`,
        "_blank"
      );
    }
  };

  const meetingOptions = [
    {
      duration: "30 min",
      type: "intro" as const,
      desc: "Quick introduction call",
      ideal: "For new projects and initial discussions",
    },
    {
      duration: "60 min",
      type: "consultation" as const,
      desc: "In-depth technical consultation",
      ideal: "For complex projects and detailed planning",
    },
    {
      duration: "15 min",
      type: "followup" as const,
      desc: "Quick follow-up call",
      ideal: "For existing clients and progress updates",
    },
  ];

  return (
    <section
      id="scheduler"
      className="py-20 bg-gradient-to-br from-black-100 to-black-100"
    >
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
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Book time directly in my calendar for a focused discussion about
            your project
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
            <div className="p-4 border-b border-gray-700">
              <h3 className="text-white font-semibold flex items-center gap-2">
                <FiCalendar className="text-blue-400" />
                Available Time Slots
              </h3>
              <p className="text-gray-400 text-sm mt-1">
                Select a time that works for you
              </p>
            </div>

            <div
              ref={calendlyRef}
              className="calendly-inline-widget min-h-[600px] w-full"
              data-auto-load="false"
            />

            {!isLoaded && (
              <div className="flex items-center justify-center min-h-[600px]">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400 mx-auto mb-4"></div>
                  <p className="text-gray-400">
                    Loading scheduling calendar...
                  </p>
                  <button
                    onClick={() => window.open(calendlyConfig.url, "_blank")}
                    className="mt-4 text-blue-400 hover:text-blue-300 underline text-sm"
                  >
                    Or open Calendly in new tab
                  </button>
                </div>
              </div>
            )}
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
                        disabled={!isLoaded}
                        className="w-full mt-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                      >
                        <FiCalendar className="text-sm" />
                        {!isLoaded
                          ? "Loading..."
                          : `Book ${item.duration} Meeting`}
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-gray-700">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-purple-400/10 text-purple-400 flex-shrink-0">
                    <FiVideo className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Video Conferencing
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      All meetings are held via Google Meet or Zoom. The video
                      conference link will be automatically provided in your
                      confirmation email after booking.
                    </p>
                    <div className="mt-3 flex gap-4 text-sm text-gray-400">
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
                    href="mailto:your-email@example.com"
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
