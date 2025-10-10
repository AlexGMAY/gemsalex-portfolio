import { motion } from "framer-motion";
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiClock,
  FiNavigation,
  FiMessageCircle,
  FiCalendar,
} from "react-icons/fi";
import { useEffect, useRef, useState } from "react";

// Extend Window interface for Google Maps
declare global {
  interface Window {
    google: typeof google;
    initMap?: () => void;
  }
}

const LocationMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [mapError, setMapError] = useState(false);
  const [mapLoading, setMapLoading] = useState(false);

  // Your location data - UPDATE THESE WITH YOUR ACTUAL DETAILS
  const location = {
    coordinates: { lat: 36.8065, lng: 10.1815 }, // Tunis, Tunisia coordinates
    address: "Tunis, Tunisia",
    phone: "+216 12 345 678", // Replace with your actual phone
    email: "contact@marvelbiz.com", // Replace with your actual email
    hours: "Mon-Fri: 9AM - 5PM (CET)",
    timezone: "Central European Time (CET)",
  };

  // Custom map styles for dark theme
  const mapStyles = [
    {
      featureType: "all",
      elementType: "geometry",
      stylers: [{ color: "#1e293b" }],
    },
    {
      featureType: "all",
      elementType: "labels.text.fill",
      stylers: [{ color: "#94a3b8" }],
    },
    {
      featureType: "all",
      elementType: "labels.text.stroke",
      stylers: [{ color: "#1e293b" }],
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [{ color: "#0f172a" }],
    },
    {
      featureType: "water",
      elementType: "labels.text.fill",
      stylers: [{ color: "#64748b" }],
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [{ color: "#334155" }],
    },
    {
      featureType: "road",
      elementType: "geometry.stroke",
      stylers: [{ color: "#475569" }],
    },
    {
      featureType: "poi",
      elementType: "geometry",
      stylers: [{ color: "#334155" }],
    },
    {
      featureType: "poi",
      elementType: "labels.text.fill",
      stylers: [{ color: "#94a3b8" }],
    },
    {
      featureType: "administrative",
      elementType: "geometry",
      stylers: [{ color: "#1e293b" }],
    },
  ];

  // Initialize map function
  const initMap = () => {
    if (!window.google || !mapRef.current) {
      console.error("Google Maps not available or map container not found");
      setMapError(true);
      setMapLoading(false);
      return;
    }

    try {
      const map = new window.google.maps.Map(mapRef.current, {
        center: location.coordinates,
        zoom: 12,
        disableDefaultUI: true,
        styles: mapStyles,
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: true,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: true,
        backgroundColor: "#1e293b",
      });

      // Use AdvancedMarkerElement instead of deprecated Marker
      if (
        window.google.maps.marker &&
        window.google.maps.marker.AdvancedMarkerElement
      ) {
        const markerElement = document.createElement("div");
        markerElement.innerHTML = `
          <div style="
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: #3b82f6;
            border: 2px solid white;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 2px 10px rgba(0,0,0,0.3);
          ">
            <div style="
              width: 12px;
              height: 12px;
              border-radius: 50%;
              background: white;
            "></div>
          </div>
        `;

        new window.google.maps.marker.AdvancedMarkerElement({
          map,
          position: location.coordinates,
          title: "My Location",
          content: markerElement,
        });
      } else {
        // Fallback to traditional Marker if AdvancedMarkerElement is not available
        const markerIcon = {
          url:
            "data:image/svg+xml;charset=UTF-8," +
            encodeURIComponent(`
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
              <circle cx="20" cy="20" r="20" fill="#3b82f6" fill-opacity="0.2"/>
              <circle cx="20" cy="20" r="8" fill="#3b82f6"/>
              <circle cx="20" cy="20" r="4" fill="#ffffff"/>
              <circle cx="20" cy="20" r="20" fill="none" stroke="#3b82f6" stroke-width="2"/>
            </svg>
          `),
          scaledSize: new window.google.maps.Size(40, 40),
          anchor: new window.google.maps.Point(20, 20),
        };

        new window.google.maps.Marker({
          position: location.coordinates,
          map: map,
          icon: markerIcon,
          title: "My Location",
          animation: window.google.maps.Animation.DROP,
        });
      }

      setMapLoaded(true);
      setMapLoading(false);
    } catch (error) {
      console.error("Error loading map:", error);
      setMapError(true);
      setMapLoading(false);
    }
  };

  useEffect(() => {
    // Clean up any existing Google Maps scripts
    const existingScripts = document.querySelectorAll(
      'script[src*="maps.googleapis.com"]'
    );
    existingScripts.forEach((script) => script.remove());

    // Remove any existing initMap function
    if (window.initMap) {
      delete window.initMap;
    }

    setMapLoading(true);
    setMapError(false);

    // Replace with your actual Google Maps API key
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

    if (!apiKey || apiKey === "YOUR_GOOGLE_MAPS_API_KEY") {
      console.error("Google Maps API key not configured");
      setMapError(true);
      setMapLoading(false);
      return;
    }

    // Set up the global initMap function
    window.initMap = initMap;

    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap&loading=async`;
    script.async = true;
    script.defer = true;
    script.onerror = () => {
      console.error("Failed to load Google Maps script");
      setMapError(true);
      setMapLoading(false);
    };

    document.head.appendChild(script);

    return () => {
      // Cleanup
      if (window.initMap) {
        delete window.initMap;
      }
      const scripts = document.querySelectorAll(
        'script[src*="maps.googleapis.com"]'
      );
      scripts.forEach((script) => script.remove());
    };
  }, []);

  const handleGetDirections = () => {
    window.open(
      `https://www.google.com/maps/dir/?api=1&destination=${location.coordinates.lat},${location.coordinates.lng}`,
      "_blank"
    );
  };

  const handleCall = () => {
    window.open(`tel:${location.phone}`);
  };

  const handleEmail = () => {
    window.open(`mailto:${location.email}`);
  };

  const isAvailable = () => {
    const now = new Date();
    const hours = now.getHours();
    const day = now.getDay();
    return day >= 1 && day <= 5 && hours >= 9 && hours < 18;
  };

  return (
    <section
      id="location"
      className="py-20"
    >
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
            My Location & Contact
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Based in Tunisia, working with clients worldwide
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Map Container */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="h-96 lg:h-full rounded-xl overflow-hidden shadow-2xl border border-gray-700 relative min-h-[500px]"
          >
            {mapLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-800 z-10">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400 mx-auto mb-4"></div>
                  <p className="text-gray-400">Loading map...</p>
                </div>
              </div>
            )}

            {mapError && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-800 z-10">
                <div className="text-center max-w-md p-6">
                  <FiMapPin className="w-12 h-12 text-gray-500 mx-auto mb-4" />
                  <h4 className="text-white font-semibold text-lg mb-2">
                    Map Unavailable
                  </h4>
                  <p className="text-gray-400 mb-4">
                    There was an issue loading the map. You can still get
                    directions using the button below.
                  </p>
                  <button
                    onClick={handleGetDirections}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors flex items-center gap-2 mx-auto"
                  >
                    <FiNavigation className="text-sm" />
                    Get Directions
                  </button>
                </div>
              </div>
            )}

            <div
              ref={mapRef}
              className={`w-full h-full bg-gray-700 transition-opacity duration-500 ${
                mapLoaded ? "opacity-100" : "opacity-0"
              }`}
              style={{ minHeight: "500px" }}
            />

            {/* Map Controls Overlay */}
            {mapLoaded && (
              <div className="absolute top-4 right-4 flex gap-2 z-20">
                <button
                  onClick={handleGetDirections}
                  className="bg-white/90 hover:bg-white text-gray-800 p-2 rounded-lg shadow-lg transition-all backdrop-blur-sm"
                  title="Get Directions"
                >
                  <FiNavigation className="w-4 h-4" />
                </button>
              </div>
            )}
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-800/70 backdrop-blur-sm rounded-xl p-8 border border-gray-700 shadow-2xl"
          >
            <div className="space-y-8">
              {/* Location Section */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400 flex-shrink-0">
                  <FiMapPin className="text-xl" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Office Location
                  </h3>
                  <p className="text-gray-300 text-lg mb-3">
                    {location.address}
                  </p>
                  <p className="text-gray-400 text-sm mb-4">
                    Remote-first with availability for local meetings in Tunis
                  </p>
                  <button
                    onClick={handleGetDirections}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors flex items-center gap-2"
                  >
                    <FiNavigation className="text-sm" />
                    Get Directions
                  </button>
                </div>
              </div>

              {/* Contact Section */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-cyan-500/10 text-cyan-400 flex-shrink-0">
                  <FiPhone className="text-xl" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-3">
                    Direct Contact
                  </h3>
                  <div className="space-y-3">
                    <button
                      onClick={handleCall}
                      className="w-full text-left p-3 rounded-lg border border-gray-600 hover:border-cyan-400 transition-colors group"
                    >
                      <p className="text-gray-400 text-sm">Phone</p>
                      <p className="text-gray-300 group-hover:text-cyan-400 transition-colors">
                        {location.phone}
                      </p>
                    </button>
                    <button
                      onClick={handleEmail}
                      className="w-full text-left p-3 rounded-lg border border-gray-600 hover:border-cyan-400 transition-colors group"
                    >
                      <p className="text-gray-400 text-sm">Email</p>
                      <p className="text-gray-300 group-hover:text-cyan-400 transition-colors">
                        {location.email}
                      </p>
                    </button>
                  </div>
                </div>
              </div>

              {/* Availability Section */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-purple-500/10 text-purple-400 flex-shrink-0">
                  <FiClock className="text-xl" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Working Hours
                  </h3>
                  <p className="text-gray-300 mb-1">{location.hours}</p>
                  <p className="text-gray-400 text-sm mb-4">
                    {location.timezone}
                  </p>

                  <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-700/50 border border-gray-600">
                    <span className="relative flex h-3 w-3">
                      <span
                        className={`animate-ping absolute inline-flex h-full w-full rounded-full ${
                          isAvailable() ? "bg-green-400" : "bg-amber-400"
                        } opacity-75`}
                      ></span>
                      <span
                        className={`relative inline-flex rounded-full h-3 w-3 ${
                          isAvailable() ? "bg-green-400" : "bg-amber-400"
                        }`}
                      ></span>
                    </span>
                    <span
                      className={`text-sm font-medium ${
                        isAvailable() ? "text-green-400" : "text-amber-400"
                      }`}
                    >
                      {isAvailable()
                        ? "Currently available"
                        : "Available during business hours"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="pt-6 border-t border-gray-700">
                <h4 className="text-gray-400 text-sm font-medium mb-4 uppercase tracking-wider">
                  Quick Actions
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href="#scheduler"
                    className="p-3 bg-blue-600/20 border border-blue-500/30 text-blue-400 rounded-lg hover:bg-blue-600/30 transition-all flex items-center justify-center gap-2 group"
                  >
                    <FiCalendar className="text-sm group-hover:scale-110 transition-transform" />
                    Schedule Meeting
                  </a>
                  <a
                    href="#contact-system"
                    className="p-3 bg-gray-700/50 border border-gray-600/30 text-gray-300 rounded-lg hover:bg-gray-600/50 transition-all flex items-center justify-center gap-2 group"
                  >
                    <FiMessageCircle className="text-sm group-hover:scale-110 transition-transform" />
                    Send Message
                  </a>
                </div>
              </div>

              {/* Timezone Info */}
              <div className="p-4 bg-gray-700/30 rounded-lg border border-gray-600/50">
                <p className="text-gray-400 text-sm text-center">
                  🌍 Available for remote collaboration worldwide
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;


// BACKUP FALLBACK IF THE API KEEPS BITCHING

// import { motion } from "framer-motion";
// import {
//   FiMapPin,
//   FiPhone,
//   FiMail,
//   FiClock,
//   FiNavigation,
//   FiMessageCircle,
//   FiCalendar,
//   FiGlobe,
// } from "react-icons/fi";
// import { useState } from "react";

// const LocationMap = () => {
//   // Your location data
//   const location = {
//     address: "Tunis, Tunisia",
//     phone: "+216 12 345 678",
//     email: "contact@marvelbiz.com",
//     hours: "Mon-Fri: 9AM - 6PM (CET)",
//     timezone: "Central European Time (CET)",
//     mapUrl:
//       "https://www.google.com/maps/place/Tunis,+Tunisia/@36.8065,10.1815,12z",
//   };

//   const handleGetDirections = () => {
//     window.open(location.mapUrl, "_blank");
//   };

//   const handleCall = () => {
//     window.open(`tel:${location.phone}`);
//   };

//   const handleEmail = () => {
//     window.open(`mailto:${location.email}`);
//   };

//   const isAvailable = () => {
//     const now = new Date();
//     const hours = now.getHours();
//     const day = now.getDay();
//     return day >= 1 && day <= 5 && hours >= 9 && hours < 18;
//   };

//   return (
//     <section
//       id="location"
//       className="py-20 bg-gradient-to-br from-gray-900 to-gray-800"
//     >
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-12"
//         >
//           <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
//             My Location & Contact
//           </h2>
//           <p className="text-gray-400 max-w-2xl mx-auto text-lg">
//             Based in Tunisia, working with clients worldwide
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
//           {/* Location Image/Map Placeholder */}
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//             className="h-96 lg:h-full rounded-xl overflow-hidden shadow-2xl border border-gray-700 relative bg-gradient-to-br from-blue-900/20 to-cyan-900/20"
//           >
//             <div className="absolute inset-0 flex items-center justify-center">
//               <div className="text-center p-8">
//                 <div className="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-blue-400/30">
//                   <FiGlobe className="w-10 h-10 text-blue-400" />
//                 </div>
//                 <h3 className="text-white text-2xl font-bold mb-3">
//                   Tunis, Tunisia
//                 </h3>
//                 <p className="text-gray-300 mb-6">
//                   Remote Full-Stack Developer
//                 </p>
//                 <button
//                   onClick={handleGetDirections}
//                   className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors flex items-center gap-2 mx-auto"
//                 >
//                   <FiNavigation className="text-sm" />
//                   View on Google Maps
//                 </button>
//               </div>
//             </div>

//             {/* Decorative elements */}
//             <div className="absolute top-0 left-0 w-32 h-32 bg-blue-400/10 rounded-full -translate-x-16 -translate-y-16"></div>
//             <div className="absolute bottom-0 right-0 w-24 h-24 bg-cyan-400/10 rounded-full translate-x-12 translate-y-12"></div>
//           </motion.div>

//           {/* Contact Information */}
//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="bg-gray-800/70 backdrop-blur-sm rounded-xl p-8 border border-gray-700 shadow-2xl"
//           >
//             <div className="space-y-8">
//               {/* Location Section */}
//               <div className="flex items-start gap-4">
//                 <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400 flex-shrink-0">
//                   <FiMapPin className="text-xl" />
//                 </div>
//                 <div className="flex-1">
//                   <h3 className="text-xl font-semibold text-white mb-2">
//                     Office Location
//                   </h3>
//                   <p className="text-gray-300 text-lg mb-3">
//                     {location.address}
//                   </p>
//                   <p className="text-gray-400 text-sm mb-4">
//                     Remote-first with availability for local meetings in Tunis
//                   </p>
//                   <button
//                     onClick={handleGetDirections}
//                     className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors flex items-center gap-2"
//                   >
//                     <FiNavigation className="text-sm" />
//                     Get Directions
//                   </button>
//                 </div>
//               </div>

//               {/* Contact Section */}
//               <div className="flex items-start gap-4">
//                 <div className="p-3 rounded-lg bg-cyan-500/10 text-cyan-400 flex-shrink-0">
//                   <FiPhone className="text-xl" />
//                 </div>
//                 <div className="flex-1">
//                   <h3 className="text-xl font-semibold text-white mb-3">
//                     Direct Contact
//                   </h3>
//                   <div className="space-y-3">
//                     <button
//                       onClick={handleCall}
//                       className="w-full text-left p-3 rounded-lg border border-gray-600 hover:border-cyan-400 transition-colors group"
//                     >
//                       <p className="text-gray-400 text-sm">Phone</p>
//                       <p className="text-gray-300 group-hover:text-cyan-400 transition-colors">
//                         {location.phone}
//                       </p>
//                     </button>
//                     <button
//                       onClick={handleEmail}
//                       className="w-full text-left p-3 rounded-lg border border-gray-600 hover:border-cyan-400 transition-colors group"
//                     >
//                       <p className="text-gray-400 text-sm">Email</p>
//                       <p className="text-gray-300 group-hover:text-cyan-400 transition-colors">
//                         {location.email}
//                       </p>
//                     </button>
//                   </div>
//                 </div>
//               </div>

//               {/* Availability Section */}
//               <div className="flex items-start gap-4">
//                 <div className="p-3 rounded-lg bg-purple-500/10 text-purple-400 flex-shrink-0">
//                   <FiClock className="text-xl" />
//                 </div>
//                 <div className="flex-1">
//                   <h3 className="text-xl font-semibold text-white mb-2">
//                     Working Hours
//                   </h3>
//                   <p className="text-gray-300 mb-1">{location.hours}</p>
//                   <p className="text-gray-400 text-sm mb-4">
//                     {location.timezone}
//                   </p>

//                   <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-700/50 border border-gray-600">
//                     <span className="relative flex h-3 w-3">
//                       <span
//                         className={`animate-ping absolute inline-flex h-full w-full rounded-full ${
//                           isAvailable() ? "bg-green-400" : "bg-amber-400"
//                         } opacity-75`}
//                       ></span>
//                       <span
//                         className={`relative inline-flex rounded-full h-3 w-3 ${
//                           isAvailable() ? "bg-green-400" : "bg-amber-400"
//                         }`}
//                       ></span>
//                     </span>
//                     <span
//                       className={`text-sm font-medium ${
//                         isAvailable() ? "text-green-400" : "text-amber-400"
//                       }`}
//                     >
//                       {isAvailable()
//                         ? "Currently available"
//                         : "Available during business hours"}
//                     </span>
//                   </div>
//                 </div>
//               </div>

//               {/* Quick Actions */}
//               <div className="pt-6 border-t border-gray-700">
//                 <h4 className="text-gray-400 text-sm font-medium mb-4 uppercase tracking-wider">
//                   Quick Actions
//                 </h4>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//                   <a
//                     href="#scheduler"
//                     className="p-3 bg-blue-600/20 border border-blue-500/30 text-blue-400 rounded-lg hover:bg-blue-600/30 transition-all flex items-center justify-center gap-2 group"
//                   >
//                     <FiCalendar className="text-sm group-hover:scale-110 transition-transform" />
//                     Schedule Meeting
//                   </a>
//                   <a
//                     href="#contact-system"
//                     className="p-3 bg-gray-700/50 border border-gray-600/30 text-gray-300 rounded-lg hover:bg-gray-600/50 transition-all flex items-center justify-center gap-2 group"
//                   >
//                     <FiMessageCircle className="text-sm group-hover:scale-110 transition-transform" />
//                     Send Message
//                   </a>
//                 </div>
//               </div>

//               {/* Timezone Info */}
//               <div className="p-4 bg-gray-700/30 rounded-lg border border-gray-600/50">
//                 <p className="text-gray-400 text-sm text-center">
//                   🌍 Available for remote collaboration worldwide
//                 </p>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default LocationMap;