// "use client";

// import { useState, useEffect, FormEvent, ChangeEvent } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   FaGlobe,
//   FaShoppingCart,
//   FaLock,
//   FaRocket,
//   FaArrowRight,
//   FaCheckCircle,
//   FaTimesCircle,
// } from "react-icons/fa";
// import { services, Feature, Service } from "@/data";
// import { GiTunisia } from "react-icons/gi";
// import { RiMoneyEuroCircleLine } from "react-icons/ri";
// import Link from "next/link";
// import {
//   PricingFormData,
//   PricingApiResponse,
//   ToastState,
// } from "@/types/pricing";

// // Add EUR to currency types
// type Currency = "USD" | "TND" | "EUR";
// type PricingPageType = "home" | "pricing";

// interface SuperPricingProps {
//   pageType?: PricingPageType;
// }

// export default function SuperPricing({ pageType = "home" }: SuperPricingProps) {
//   // Enhanced state
//   const [currency, setCurrency] = useState<Currency>("USD");
//   const [exchangeRate, setExchangeRate] = useState({
//     TND: 3.1,
//     EUR: 0.92,
//     USD: 1,
//   });
//   const [userLocation, setUserLocation] = useState<{
//     country?: string;
//     city?: string;
//   }>({});
//   const [selectedService, setSelectedService] = useState<Service | null>(null);
//   const [selectedFeatures, setSelectedFeatures] = useState<Feature[]>([]);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [toast, setToast] = useState<ToastState>({
//     show: false,
//     type: "",
//     message: "",
//   });
//   const [csrfToken, setCsrfToken] = useState("");

//   // Filter services based on page type
//   const displayedServices =
//     pageType === "home" ? services.slice(0, 3) : services;

//   // Fetch CSRF token
//   useEffect(() => {
//     fetchCsrfToken();
//   }, []);

//   const fetchCsrfToken = async (): Promise<void> => {
//     try {
//       const response = await fetch("/api/csrf");
//       const data = await response.json();
//       setCsrfToken(data.csrfToken);
//     } catch (error) {
//       console.error("Failed to fetch CSRF token:", error);
//     }
//   };

//   const showToast = (type: "success" | "error", message: string): void => {
//     setToast({ show: true, type, message });
//     setTimeout(() => setToast({ show: false, type: "", message: "" }), 5000);
//   };

//   // Live currency conversion
//   const convertPrice = (usd: number) => {
//     if (currency === "USD") return usd;
//     return Math.round(usd * exchangeRate[currency]);
//   };

//   // Dynamic total calculation
//   const calculateTotal = () => {
//     if (!selectedService) return 0;

//     const base =
//       currency === "USD"
//         ? selectedService.basePrice
//         : convertPrice(selectedService.basePrice);

//     return (
//       base + selectedFeatures.reduce((sum, f) => sum + convertPrice(f.price), 0)
//     );
//   };

//   // Auto-detect location
//   useEffect(() => {
//     const detect = async () => {
//       try {
//         const res = await fetch("https://ipapi.co/json/");
//         const data = await res.json();
//         setUserLocation({ country: data.country_name, city: data.city });

//         // Auto-select currency based on location
//         if (data.country === "TN") setCurrency("TND");
//         else if (data.country_code === "EU" || data.continent_code === "EU")
//           setCurrency("EUR");
//         else setCurrency("USD");
//       } catch {
//         const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
//         if (timezone.includes("Tunis")) setCurrency("TND");
//         else if (timezone.includes("Europe")) setCurrency("EUR");
//       }
//     };
//     detect();
//   }, []);

//   // Handle form submission
//   const handlePricingSubmit = async (
//     e: FormEvent<HTMLFormElement>,
//   ): Promise<void> => {
//     e.preventDefault();

//     if (!selectedService || isSubmitting || !csrfToken) return;

//     setIsSubmitting(true);

//     try {
//       const formData = new FormData(e.currentTarget);

//       const submissionData: PricingFormData = {
//         name: formData.get("name") as string,
//         email: formData.get("email") as string,
//         projectDetails: formData.get("projectDetails") as string,
//         serviceId: selectedService.id,
//         serviceTitle: selectedService.title,
//         basePrice: convertPrice(selectedService.basePrice),
//         currency,
//         totalAmount: calculateTotal(),
//         selectedFeatures: selectedFeatures.map((feature) => ({
//           id: feature.id,
//           name: feature.name,
//           price: convertPrice(feature.price),
//           category: feature.category,
//         })),
//         website: formData.get("website") as string,
//       };

//       const response = await fetch("/api/pricing", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           ...submissionData,
//           csrfToken,
//         }),
//       });

//       const data: PricingApiResponse = await response.json();

//       if (data.success) {
//         showToast("success", `${data.message} `);
//         // Reset form and close modal
//         setSelectedService(null);
//         setSelectedFeatures([]);
//         await fetchCsrfToken();
//       } else {
//         showToast(
//           "error",
//           data.message || "Failed to submit project inquiry. Please try again.",
//         );
//       }
//     } catch (error) {
//       console.error("Submission error:", error);
//       showToast(
//         "error",
//         "Network error. Please check your connection and try again.",
//       );
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   // Surprise Feature 1: Dynamic price suggestions
//   const getPriceHint = (service: Service) => {
//     const base = convertPrice(service.basePrice);

//     if (base > 5000) return "Enterprise-grade";
//     if (base > 3000) return "Best value";
//     return "Starter";
//   };

//   // Surprise Feature 2: Enhanced currency toggle
//   const CurrencyToggle = () => (
//     <motion.div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-0">
//       <div className="flex items-center bg-gray-800 rounded-full p-1">
//         <button
//           type="button"
//           onClick={() => setCurrency("USD")}
//           className={`flex items-center px-4 py-2 rounded-full transition-all ${
//             currency === "USD"
//               ? "bg-blue-600 text-white shadow-lg"
//               : "text-gray-300 hover:text-white"
//           }`}
//         >
//           <FaGlobe className="mr-2" /> USD
//         </button>
//         <button
//           type="button"
//           onClick={() => setCurrency("EUR")}
//           className={`flex items-center px-4 py-2 rounded-full transition-all ${
//             currency === "EUR"
//               ? "bg-gradient-to-r from-yellow-600 to-yellow-700 text-white shadow-lg"
//               : "text-gray-300 hover:text-white"
//           }`}
//         >
//           <RiMoneyEuroCircleLine className="mr-2 text-yellow-400" /> EUR
//         </button>
//         <button
//           type="button"
//           onClick={() => setCurrency("TND")}
//           className={`flex items-center px-4 py-2 rounded-full transition-all ${
//             currency === "TND"
//               ? "bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg"
//               : "text-gray-300 hover:text-white"
//           }`}
//         >
//           <GiTunisia className="text-red-400 mr-2" /> TND
//         </button>
//       </div>

//       {/* Exchange rate info */}
//       <motion.div
//         className="text-xs text-gray-400 mt-2 sm:mt-0 sm:ml-3"
//         animate={{ opacity: 1 }}
//         initial={{ opacity: 0 }}
//       >
//         {currency === "EUR" && "€1 ≈ $1.09"}
//         {currency === "TND" && "1 TND ≈ $0.32"}
//       </motion.div>
//     </motion.div>
//   );

//   // Get currency symbol
//   const getCurrencySymbol = () => {
//     switch (currency) {
//       case "EUR":
//         return "€";
//       case "TND":
//         return "";
//       default:
//         return "$";
//     }
//   };

//   // Get currency suffix
//   const getCurrencySuffix = () => {
//     switch (currency) {
//       case "TND":
//         return " TND";
//       case "EUR":
//         return "";
//       default:
//         return "";
//     }
//   };

//   // Format price display
//   const formatPrice = (usdPrice: number) => {
//     const converted = convertPrice(usdPrice);
//     const symbol = getCurrencySymbol();
//     const suffix = getCurrencySuffix();
//     return `${symbol}${converted.toLocaleString()}${suffix}`;
//   };

//   return (
//     <section id="pricing" className="py-24 px-4">
//       {/* Toast Notification */}
//       <AnimatePresence>
//         {toast.show && (
//           <motion.div
//             initial={{ opacity: 0, y: -50 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -50 }}
//             className={`fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg border ${
//               toast.type === "success"
//                 ? "bg-green-500/20 border-green-400 text-green-400"
//                 : "bg-red-500/20 border-red-400 text-red-400"
//             }`}
//           >
//             <div className="flex items-center gap-2">
//               {toast.type === "success" ? <FaCheckCircle /> : <FaTimesCircle />}
//               <span>{toast.message}</span>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       <div className="max-w-7xl mx-auto">
//         {/* Header with currency toggle */}
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="text-center mb-12"
//         >
//           <h2 className="heading mb-4">
//             <span className="bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-yellow-400">
//               Expert-Level
//             </span>{" "}
//             Development
//           </h2>
//           <p className="text-gray-300 mb-6">
//             8+ years of solving complex problems •{" "}
//             {userLocation.country &&
//               `Detected: ${userLocation.city ? `${userLocation.city}, ` : ""}${
//                 userLocation.country
//               }`}
//           </p>
//           <div className="flex justify-center">
//             <CurrencyToggle />
//           </div>
//         </motion.div>

//         {/* Pricing cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {displayedServices.map((service) => (
//             <motion.div
//               key={service.id}
//               whileHover={{ y: -10 }}
//               whileTap={{ scale: 0.98 }}
//               className="bg-gray-800 rounded-xl shadow-2xl overflow-hidden border border-gray-700"
//             >
//               <div className="p-6">
//                 {/* Service header */}
//                 <div className="flex justify-between items-start">
//                   <h3 className="text-xl font-bold text-white">
//                     {service.title}
//                   </h3>
//                   <span className="px-3 py-1 bg-gray-700 rounded-full text-xs text-lime-400">
//                     {getPriceHint(service)}
//                   </span>
//                 </div>

//                 {/* Price display */}
//                 <div className="my-4">
//                   <p className="text-3xl font-bold text-white">
//                     {formatPrice(service.basePrice)}
//                   </p>
//                   <p className="text-gray-400">{service.description}</p>
//                 </div>

//                 {/* Core features */}
//                 <ul className="space-y-2 mb-6">
//                   {service.features
//                     .filter((f) => f.category === "core")
//                     .map((feature) => (
//                       <li key={feature.id} className="flex items-center">
//                         <span className="text-lime-400 mr-2">✓</span>
//                         <span className="text-gray-300">{feature.name}</span>
//                       </li>
//                     ))}
//                 </ul>

//                 {/* CTA */}
//                 <motion.button
//                   whileHover={{ scale: 1.03 }}
//                   whileTap={{ scale: 0.97 }}
//                   className="w-full mt-6 bg-gradient-to-r from-lime-500 to-yellow-500 text-gray-900 font-bold py-3 rounded-lg flex items-center justify-center gap-2"
//                   onClick={() => setSelectedService(service)}
//                 >
//                   <FaShoppingCart /> Customize
//                 </motion.button>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* View All Services button (only on home page) */}
//         {pageType === "home" && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ delay: 0.4 }}
//             className="text-center mt-16"
//           >
//             <Link href="/solutions" passHref legacyBehavior>
//               <motion.a
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-blue-200 to-blue-300 hover:from-lime-500 hover:to-blue-500 transition-all"
//               >
//                 View All Freelance Services <FaArrowRight className="ml-2" />
//               </motion.a>
//             </Link>
//           </motion.div>
//         )}

//         {/* Customization modal */}
//         <AnimatePresence>
//           {selectedService && (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-[5001]"
//             >
//               <motion.div
//                 initial={{ scale: 0.9, y: 50 }}
//                 animate={{ scale: 1, y: 0 }}
//                 className="bg-gray-800 rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
//               >
//                 <div className="p-6">
//                   {/* Modal header */}
//                   <div className="flex justify-between items-center mb-6">
//                     <h3 className="text-2xl font-bold text-white">
//                       Customize{" "}
//                       <span className="text-lime-400">
//                         {selectedService.title}
//                       </span>
//                     </h3>
//                     <div className="flex items-center gap-4">
//                       <CurrencyToggle />
//                       <button
//                         type="button"
//                         onClick={() => {
//                           setSelectedService(null);
//                           setSelectedFeatures([]);
//                         }}
//                         className="text-gray-400 hover:text-white"
//                       >
//                         ✕
//                       </button>
//                     </div>
//                   </div>

//                   {/* Add-on features */}
//                   <div className="space-y-4 mb-8">
//                     <h4 className="font-bold text-white">Premium Add-Ons</h4>
//                     {selectedService.features
//                       .filter((f) => f.category === "addon")
//                       .map((feature) => (
//                         <motion.div
//                           key={feature.id}
//                           whileHover={{ x: 5 }}
//                           className={`p-4 rounded-lg border cursor-pointer transition-colors ${
//                             selectedFeatures.includes(feature)
//                               ? "border-lime-500 bg-gray-700"
//                               : "border-gray-700 hover:bg-gray-700"
//                           }`}
//                           onClick={() => {
//                             setSelectedFeatures((prev) =>
//                               prev.includes(feature)
//                                 ? prev.filter((f) => f !== feature)
//                                 : [...prev, feature],
//                             );
//                           }}
//                         >
//                           <div className="flex justify-between items-center">
//                             <div>
//                               <p className="font-medium text-white">
//                                 {feature.name}
//                               </p>
//                               <p className="text-sm text-gray-400">
//                                 {formatPrice(feature.price)}
//                               </p>
//                             </div>
//                             <input
//                               type="checkbox"
//                               checked={selectedFeatures.includes(feature)}
//                               readOnly
//                               className="h-5 w-5 text-lime-500 rounded focus:ring-lime-500"
//                             />
//                           </div>
//                         </motion.div>
//                       ))}
//                   </div>

//                   {/* Order summary */}
//                   <div className="p-4 bg-gray-700 rounded-lg mb-6">
//                     <h4 className="font-bold text-white mb-3">Order Summary</h4>
//                     <div className="space-y-2">
//                       <div className="flex justify-between">
//                         <span className="text-gray-300">Base Price:</span>
//                         <span className="font-medium">
//                           {formatPrice(selectedService.basePrice)}
//                         </span>
//                       </div>

//                       {selectedFeatures.map((feature) => (
//                         <div
//                           key={feature.id}
//                           className="flex justify-between text-sm"
//                         >
//                           <span className="text-gray-400">
//                             + {feature.name}
//                           </span>
//                           <span>{formatPrice(feature.price)}</span>
//                         </div>
//                       ))}

//                       <div className="border-t border-gray-600 pt-2 mt-2 flex justify-between font-bold">
//                         <span className="text-white">Total:</span>
//                         <span className="text-lime-400">
//                           {formatPrice(calculateTotal())}
//                         </span>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Trust badges */}
//                   <div className="flex flex-wrap gap-4 mb-6">
//                     <div className="flex items-center gap-2 px-3 py-1 bg-gray-700 rounded-full">
//                       <FaLock className="text-green-500" />
//                       <span className="text-xs">Secure Payment</span>
//                     </div>
//                     <div className="flex items-center gap-2 px-3 py-1 bg-gray-700 rounded-full">
//                       <FaRocket className="text-yellow-500" />
//                       <span className="text-xs">14-Day Delivery</span>
//                     </div>
//                   </div>

//                   {/* Contact form */}
//                   <form onSubmit={handlePricingSubmit} className="space-y-4">
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                       <input
//                         type="text"
//                         name="name"
//                         placeholder="Full Name"
//                         required
//                         disabled={isSubmitting}
//                         className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-lime-500"
//                       />
//                       <input
//                         type="email"
//                         name="email"
//                         placeholder="Email"
//                         required
//                         disabled={isSubmitting}
//                         className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-lime-500"
//                       />
//                     </div>
//                     <textarea
//                       name="projectDetails"
//                       placeholder="Project details (requirements, timeline, etc.)"
//                       rows={3}
//                       required
//                       disabled={isSubmitting}
//                       className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-lime-500"
//                     ></textarea>

//                     {/* Honeypot Field */}
//                     <div className="hidden" aria-hidden="true">
//                       <label htmlFor="website">Website</label>
//                       <input
//                         type="text"
//                         id="website"
//                         name="website"
//                         tabIndex={-1}
//                         autoComplete="off"
//                       />
//                     </div>

//                     <motion.button
//                       whileHover={!isSubmitting ? { scale: 1.02 } : {}}
//                       whileTap={!isSubmitting ? { scale: 0.98 } : {}}
//                       type="submit"
//                       disabled={isSubmitting || !csrfToken}
//                       className={`w-full bg-gradient-to-r from-lime-600 to-yellow-600 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 ${
//                         isSubmitting ? "opacity-50 cursor-not-allowed" : ""
//                       }`}
//                     >
//                       {isSubmitting ? (
//                         <>
//                           <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
//                           <span>Submitting...</span>
//                         </>
//                       ) : (
//                         `Secure My Project (${currency})`
//                       )}
//                     </motion.button>
//                   </form>
//                 </div>
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </section>
//   );
// }

"use client";

import { useState, useEffect, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGlobe,
  FaShoppingCart,
  FaLock,
  FaRocket,
  FaArrowRight,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";
import { services, Feature, Service } from "@/data";
import { GiTunisia } from "react-icons/gi";
import { RiMoneyEuroCircleLine } from "react-icons/ri";
import Link from "next/link";
import {
  PricingFormData,
  PricingApiResponse,
  ToastState,
} from "@/types/pricing";

// Add EUR to currency types
type Currency = "USD" | "TND" | "EUR";
type PricingPageType = "home" | "pricing";

interface SuperPricingProps {
  pageType?: PricingPageType;
}

export default function SuperPricing({ pageType = "home" }: SuperPricingProps) {
  // Enhanced state
  const [currency, setCurrency] = useState<Currency>("USD");
  const [exchangeRate] = useState({
    TND: 3.1,
    EUR: 0.92,
    USD: 1,
  });
  const [userLocation, setUserLocation] = useState<{
    country?: string;
    city?: string;
  }>({});
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedFeatures, setSelectedFeatures] = useState<Feature[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<ToastState>({
    show: false,
    type: "",
    message: "",
  });
  const [csrfToken, setCsrfToken] = useState("");

  // Filter services based on page type
  const displayedServices =
    pageType === "home" ? services.slice(0, 3) : services;

  // Fetch CSRF token
  useEffect(() => {
    fetchCsrfToken();
  }, []);

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

  // Get service price based on currency (uses manual prices first)
  const getServicePrice = (
    service: Service,
    targetCurrency: Currency,
  ): number => {
    switch (targetCurrency) {
      case "USD":
        return service.basePrice;
      case "TND":
        return (
          service.localPrice || Math.round(service.basePrice * exchangeRate.TND)
        );
      case "EUR":
        return (
          service.euroPrice || Math.round(service.basePrice * exchangeRate.EUR)
        );
      default:
        return service.basePrice;
    }
  };

  // Convert feature prices (features only have USD prices)
  const convertFeaturePrice = (
    usdPrice: number,
    targetCurrency: Currency,
  ): number => {
    if (targetCurrency === "USD") return usdPrice;
    return Math.round(usdPrice * exchangeRate[targetCurrency]);
  };

  // Dynamic total calculation using smart conversion
  const calculateTotal = (): number => {
    if (!selectedService) return 0;

    const basePrice = getServicePrice(selectedService, currency);
    const featuresTotal = selectedFeatures.reduce(
      (sum, feature) => sum + convertFeaturePrice(feature.price, currency),
      0,
    );

    return basePrice + featuresTotal;
  };

  // Auto-detect location
  useEffect(() => {
    const detect = async () => {
      try {
        const res = await fetch("https://ipapi.co/json/");
        const data = await res.json();
        setUserLocation({ country: data.country_name, city: data.city });

        // Auto-select currency based on location
        if (data.country === "TN") setCurrency("TND");
        else if (data.country_code === "EU" || data.continent_code === "EU")
          setCurrency("EUR");
        else setCurrency("USD");
      } catch {
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        if (timezone.includes("Tunis")) setCurrency("TND");
        else if (timezone.includes("Europe")) setCurrency("EUR");
      }
    };
    detect();
  }, []);

  // Handle form submission
  const handlePricingSubmit = async (
    e: FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    e.preventDefault();

    if (!selectedService || isSubmitting || !csrfToken) return;

    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);

      const submissionData: PricingFormData = {
        name: formData.get("name") as string,
        email: formData.get("email") as string,
        projectDetails: formData.get("projectDetails") as string,
        serviceId: selectedService.id,
        serviceTitle: selectedService.title,
        basePrice: getServicePrice(selectedService, currency), // FIXED
        currency,
        totalAmount: calculateTotal(),
        selectedFeatures: selectedFeatures.map((feature) => ({
          id: feature.id,
          name: feature.name,
          price: convertFeaturePrice(feature.price, currency), // FIXED
          category: feature.category,
        })),
        website: formData.get("website") as string,
      };

      const response = await fetch("/api/pricing", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...submissionData,
          csrfToken,
        }),
      });

      const data: PricingApiResponse = await response.json();

      if (data.success) {
        showToast("success", `${data.message} `);
        // Reset form and close modal
        setSelectedService(null);
        setSelectedFeatures([]);
        await fetchCsrfToken();
      } else {
        showToast(
          "error",
          data.message || "Failed to submit project inquiry. Please try again.",
        );
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

  // Surprise Feature 1: Dynamic price suggestions
  const getPriceHint = (service: Service) => {
    const base = getServicePrice(service, currency);

    if (base > 5000) return "Enterprise-grade";
    if (base > 3000) return "Best value";
    return "Starter";
  };

  // Surprise Feature 2: Enhanced currency toggle
  const CurrencyToggle = () => (
    <motion.div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-0">
      <div className="flex items-center bg-gray-800 rounded-full p-1">
        <button
          type="button"
          onClick={() => setCurrency("USD")}
          className={`flex items-center px-4 py-2 rounded-full transition-all ${
            currency === "USD"
              ? "bg-blue-600 text-white shadow-lg"
              : "text-gray-300 hover:text-white"
          }`}
        >
          <FaGlobe className="mr-2" /> USD
        </button>
        <button
          type="button"
          onClick={() => setCurrency("EUR")}
          className={`flex items-center px-4 py-2 rounded-full transition-all ${
            currency === "EUR"
              ? "bg-gradient-to-r from-yellow-600 to-yellow-700 text-white shadow-lg"
              : "text-gray-300 hover:text-white"
          }`}
        >
          <RiMoneyEuroCircleLine className="mr-2 text-yellow-400" /> EUR
        </button>
        <button
          type="button"
          onClick={() => setCurrency("TND")}
          className={`flex items-center px-4 py-2 rounded-full transition-all ${
            currency === "TND"
              ? "bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg"
              : "text-gray-300 hover:text-white"
          }`}
        >
          <GiTunisia className="text-red-400 mr-2" /> TND
        </button>
      </div>

      {/* Exchange rate info */}
      <motion.div
        className="text-xs text-gray-400 mt-2 sm:mt-0 sm:ml-3"
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
      >
        {currency === "EUR" && "€1 ≈ $1.09"}
        {currency === "TND" && "1 TND ≈ $0.32"}
      </motion.div>
    </motion.div>
  );

  // Get currency symbol
  const getCurrencySymbol = () => {
    switch (currency) {
      case "EUR":
        return "€";
      case "TND":
        return "";
      default:
        return "$";
    }
  };

  // Get currency suffix
  const getCurrencySuffix = () => {
    switch (currency) {
      case "TND":
        return " TND";
      case "EUR":
        return "";
      default:
        return "";
    }
  };

  // Format service price display (uses manual prices)
  const formatServicePrice = (service: Service): string => {
    const price = getServicePrice(service, currency);
    const symbol = getCurrencySymbol();
    const suffix = getCurrencySuffix();
    return `${symbol}${price.toLocaleString()}${suffix}`;
  };

  // Format feature price display (converts from USD)
  const formatFeaturePrice = (usdPrice: number): string => {
    const price = convertFeaturePrice(usdPrice, currency);
    const symbol = getCurrencySymbol();
    const suffix = getCurrencySuffix();
    return `${symbol}${price.toLocaleString()}${suffix}`;
  };

  return (
    <section id="pricing" className="py-24 px-4">
      {/* Toast Notification */}
      <AnimatePresence>
        {toast.show && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className={`fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg border ${
              toast.type === "success"
                ? "bg-green-500/20 border-green-400 text-green-400"
                : "bg-red-500/20 border-red-400 text-red-400"
            }`}
          >
            <div className="flex items-center gap-2">
              {toast.type === "success" ? <FaCheckCircle /> : <FaTimesCircle />}
              <span>{toast.message}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto">
        {/* Header with currency toggle */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="heading mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-yellow-400">
              Expert-Level
            </span>{" "}
            Development
          </h2>
          <p className="text-gray-300 mb-6">
            8+ years of solving complex problems •{" "}
            {userLocation.country &&
              `Detected: ${userLocation.city ? `${userLocation.city}, ` : ""}${
                userLocation.country
              }`}
          </p>
          <div className="flex justify-center">
            <CurrencyToggle />
          </div>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedServices.map((service) => (
            <motion.div
              key={service.id}
              whileHover={{ y: -10 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gray-800 rounded-xl shadow-2xl overflow-hidden border border-gray-700"
            >
              <div className="p-6">
                {/* Service header */}
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold text-white">
                    {service.title}
                  </h3>
                  <span className="px-3 py-1 bg-gray-700 rounded-full text-xs text-lime-400">
                    {getPriceHint(service)}
                  </span>
                </div>

                {/* Price display - FIXED! */}
                <div className="my-4">
                  <p className="text-3xl font-bold text-white">
                    {formatServicePrice(service)}
                  </p>
                  <p className="text-gray-400">{service.description}</p>
                </div>

                {/* Core features */}
                <ul className="space-y-2 mb-6">
                  {service.features
                    .filter((f) => f.category === "core")
                    .map((feature) => (
                      <li key={feature.id} className="flex items-center">
                        <span className="text-lime-400 mr-2">✓</span>
                        <span className="text-gray-300">{feature.name}</span>
                      </li>
                    ))}
                </ul>

                {/* CTA */}
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full mt-6 bg-gradient-to-r from-lime-500 to-yellow-500 text-gray-900 font-bold py-3 rounded-lg flex items-center justify-center gap-2"
                  onClick={() => setSelectedService(service)}
                >
                  <FaShoppingCart /> Customize
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Services button (only on home page) */}
        {pageType === "home" && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-center mt-16"
          >
            <Link href="/solutions" passHref legacyBehavior>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-blue-200 to-blue-300 hover:from-lime-500 hover:to-blue-500 transition-all"
              >
                View All Freelance Services <FaArrowRight className="ml-2" />
              </motion.a>
            </Link>
          </motion.div>
        )}

        {/* Customization modal */}
        <AnimatePresence>
          {selectedService && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-[5001]"
            >
              <motion.div
                initial={{ scale: 0.9, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                className="bg-gray-800 rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              >
                <div className="p-6">
                  {/* Modal header */}
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-2xl font-bold text-white">
                      Customize{" "}
                      <span className="text-lime-400">
                        {selectedService.title}
                      </span>
                    </h3>
                    <div className="flex items-center gap-4">
                      <CurrencyToggle />
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedService(null);
                          setSelectedFeatures([]);
                        }}
                        className="text-gray-400 hover:text-white"
                      >
                        ✕
                      </button>
                    </div>
                  </div>

                  {/* Add-on features */}
                  <div className="space-y-4 mb-8">
                    <h4 className="font-bold text-white">Premium Add-Ons</h4>
                    {selectedService.features
                      .filter((f) => f.category === "addon")
                      .map((feature) => (
                        <motion.div
                          key={feature.id}
                          whileHover={{ x: 5 }}
                          className={`p-4 rounded-lg border cursor-pointer transition-colors ${
                            selectedFeatures.includes(feature)
                              ? "border-lime-500 bg-gray-700"
                              : "border-gray-700 hover:bg-gray-700"
                          }`}
                          onClick={() => {
                            setSelectedFeatures((prev) =>
                              prev.includes(feature)
                                ? prev.filter((f) => f !== feature)
                                : [...prev, feature],
                            );
                          }}
                        >
                          <div className="flex justify-between items-center">
                            <div>
                              <p className="font-medium text-white">
                                {feature.name}
                              </p>
                              <p className="text-sm text-gray-400">
                                {formatFeaturePrice(feature.price)}
                              </p>
                            </div>
                            <input
                              type="checkbox"
                              checked={selectedFeatures.includes(feature)}
                              readOnly
                              className="h-5 w-5 text-lime-500 rounded focus:ring-lime-500"
                            />
                          </div>
                        </motion.div>
                      ))}
                  </div>

                  {/* Order summary - FIXED! */}
                  <div className="p-4 bg-gray-700 rounded-lg mb-6">
                    <h4 className="font-bold text-white mb-3">Order Summary</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-300">Base Price:</span>
                        <span className="font-medium">
                          {formatServicePrice(selectedService)}
                        </span>
                      </div>

                      {selectedFeatures.map((feature) => (
                        <div
                          key={feature.id}
                          className="flex justify-between text-sm"
                        >
                          <span className="text-gray-400">
                            + {feature.name}
                          </span>
                          <span>{formatFeaturePrice(feature.price)}</span>
                        </div>
                      ))}

                      <div className="border-t border-gray-600 pt-2 mt-2 flex justify-between font-bold">
                        <span className="text-white">Total:</span>
                        <span className="text-lime-400">
                          {getCurrencySymbol()}
                          {calculateTotal().toLocaleString()}
                          {getCurrencySuffix()}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Trust badges */}
                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="flex items-center gap-2 px-3 py-1 bg-gray-700 rounded-full">
                      <FaLock className="text-green-500" />
                      <span className="text-xs">Secure Payment</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1 bg-gray-700 rounded-full">
                      <FaRocket className="text-yellow-500" />
                      <span className="text-xs">Fast Delivery</span>
                    </div>
                  </div>

                  {/* Contact form */}
                  <form onSubmit={handlePricingSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        required
                        disabled={isSubmitting}
                        className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-lime-500"
                      />
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        required
                        disabled={isSubmitting}
                        className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-lime-500"
                      />
                    </div>
                    <textarea
                      name="projectDetails"
                      placeholder="Project details (requirements, timeline, etc.)"
                      rows={3}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-lime-500"
                    ></textarea>

                    {/* Honeypot Field */}
                    <div className="hidden" aria-hidden="true">
                      <label htmlFor="website">Website</label>
                      <input
                        type="text"
                        id="website"
                        name="website"
                        tabIndex={-1}
                        autoComplete="off"
                      />
                    </div>

                    <motion.button
                      whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                      whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                      type="submit"
                      disabled={isSubmitting || !csrfToken}
                      className={`w-full bg-gradient-to-r from-lime-600 to-yellow-600 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 ${
                        isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                          <span>Submitting...</span>
                        </>
                      ) : (
                        `Secure My Project (${currency})`
                      )}
                    </motion.button>
                  </form>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
