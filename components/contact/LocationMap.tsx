import { motion } from "framer-motion";
import { FiMapPin, FiPhone, FiMail, FiClock } from "react-icons/fi";
import { useEffect, useRef } from "react";

const LocationMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  // Your location data
  const location = {
    coordinates: { lat: 40.7128, lng: -74.006 }, // Replace with your actual coordinates
    address: "123 Developer Street, Tech City, 10001",
    phone: "+1 (555) 123-4567",
    email: "contact@yourdomain.com",
    hours: "Mon-Fri: 9AM - 5PM (Your Timezone)",
  };

  useEffect(() => {
    // Load Google Maps script
    const loadMap = () => {
      if (!window.google || !mapRef.current) return;

      new window.google.maps.Map(mapRef.current, {
        center: location.coordinates,
        zoom: 14,
        disableDefaultUI: true,
        styles: [
          {
            featureType: "all",
            elementType: "labels",
            stylers: [{ visibility: "off" }],
          },
          {
            featureType: "poi",
            elementType: "all",
            stylers: [{ visibility: "off" }],
          },
          {
            featureType: "road",
            elementType: "geometry",
            stylers: [{ color: "#1e293b" }, { weight: 1.5 }],
          },
          {
            featureType: "water",
            elementType: "geometry",
            stylers: [{ color: "#0f172a" }],
          },
          {
            featureType: "landscape",
            elementType: "geometry",
            stylers: [{ color: "#1e293b" }],
          },
        ],
      });

      new window.google.maps.Marker({
        position: location.coordinates,
        map: mapRef.current,
        icon: {
          url:
            "data:image/svg+xml;charset=UTF-8," +
            encodeURIComponent(
              `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#3b82f6" stroke="#ffffff" stroke-width="2"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>`
            ),
          scaledSize: new window.google.maps.Size(40, 40),
        },
      });
    };

    // Only load if Google Maps API is available
    if (window.google) {
      loadMap();
    } else {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places`;
      script.async = true;
      script.defer = true;
      script.onload = loadMap;
      document.head.appendChild(script);
    }

    return () => {
      // Cleanup if needed
    };
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-black-100 to-black-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
            Find My Location
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Visit my office or get in touch directly
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map Container */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="h-96 lg:h-full rounded-xl overflow-hidden shadow-2xl border border-gray-700"
          >
            <div
              ref={mapRef}
              className="w-full h-full bg-gray-700"
              style={{ minHeight: "400px" }}
            >
              {/* Fallback if maps don't load */}
              <div className="flex items-center justify-center h-full text-gray-500">
                Loading map...
              </div>
            </div>
          </motion.div>

          {/* Location Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-800/70 backdrop-blur-sm rounded-xl p-8 border border-gray-700 shadow-2xl"
          >
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-blue-400/10 text-blue-400">
                  <FiMapPin className="text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">
                    Office Address
                  </h3>
                  <p className="text-gray-300">{location.address}</p>
                  <button
                    className="mt-3 text-blue-400 hover:text-blue-300 transition-colors text-sm flex items-center gap-1"
                    onClick={() =>
                      window.open(
                        `https://www.google.com/maps/dir/?api=1&destination=${location.coordinates.lat},${location.coordinates.lng}`
                      )
                    }
                  >
                    Get Directions
                  </button>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-cyan-400/10 text-cyan-400">
                  <FiPhone className="text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">
                    Direct Contact
                  </h3>
                  <p className="text-gray-300">{location.phone}</p>
                  <p className="text-gray-300 mt-1">{location.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-purple-400/10 text-purple-400">
                  <FiClock className="text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">
                    Working Hours
                  </h3>
                  <p className="text-gray-300">{location.hours}</p>
                  <div className="mt-3 flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
                    </span>
                    <span className="text-green-400 text-sm">
                      Currently available
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-700">
                <h4 className="text-gray-400 text-sm mb-3">
                  PREFERRED CONTACT METHOD
                </h4>
                <div className="flex flex-wrap gap-3">
                  <a href="#scheduler" className="px-4 py-2 bg-blue-600/20 border border-blue-500/30 text-blue-400 rounded-lg hover:bg-blue-600/30 transition-all">
                    Schedule Meeting
                  </a>
                  <a href="#contact-system" className="px-4 py-2 bg-gray-700/50 border border-gray-600/30 text-gray-300 rounded-lg hover:bg-gray-600/50 transition-all">
                    Send Message
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;
