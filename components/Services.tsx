// "use client";

// import { motion } from "framer-motion";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
// import { Code, BarChart, Globe, Smartphone, Plug, Cloud } from "lucide-react";

// const services = [
//   {
//     id: 1,
//     title: "Revenue-Driving Web Platforms",
//     description:
//       "Convert visitors into customers with high-performance websites engineered for user engagement and conversion optimization.",
//     icon: <Globe className="h-8 w-8" />,
//     color: "text-lime-400",
//     borderColor: "border-lime-400",
//     bgGradient: "from-lime-400/10 to-lime-400/5",
//   },
//   {
//     id: 2,
//     title: "Scalable SaaS Solutions",
//     description:
//       "Transform your business operations with custom software that automates workflows and scales with your growth.",
//     icon: <Code className="h-8 w-8" />,
//     color: "text-blue-300",
//     borderColor: "border-blue-300",
//     bgGradient: "from-blue-300/10 to-blue-300/5",
//   },
//   {
//     id: 3,
//     title: "Cross-Platform Business Applications",
//     description:
//       "Engage your customers anywhere with seamless mobile and web experiences that drive retention and loyalty.",
//     icon: <Smartphone className="h-8 w-8" />,
//     color: "text-blue-400",
//     borderColor: "border-blue-400",
//     bgGradient: "from-blue-400/10 to-blue-400/5",
//   },
//   {
//     id: 4,
//     title: "Cloud Infrastructure & Scalability",
//     description:
//       "Future-proof your technology with robust cloud architecture that ensures reliability, security, and unlimited growth potential.",
//     icon: <Cloud className="h-8 w-8" />,
//     color: "text-indigo-400",
//     borderColor: "border-indigo-400",
//     bgGradient: "from-indigo-400/10 to-indigo-400/5",
//   },
//   {
//     id: 5,
//     title: "Digital Visibility & Performance",
//     description:
//       "Dominate search rankings and accelerate user experience with SEO-optimized, lightning-fast applications.",
//     icon: <BarChart className="h-8 w-8" />,
//     color: "text-yellow-400",
//     borderColor: "border-yellow-400",
//     bgGradient: "from-yellow-400/10 to-yellow-400/5",
//   },
//   {
//     id: 6,
//     title: "Integration & Automation Systems",
//     description:
//       "Connect your business ecosystem with secure APIs and automation that eliminate manual work and data silos.",
//     icon: <Plug className="h-8 w-8" />,
//     color: "text-cyan-400",
//     borderColor: "border-cyan-400",
//     bgGradient: "from-cyan-400/10 to-cyan-400/5",
//   },
// ];

// const Services = () => {
//   return (
//     <section id="services" className="py-16 md:py-24 relative overflow-hidden">
//       {/* Animated background elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         {[...Array(12)].map((_, i) => (
//           <motion.div
//             key={i}
//             initial={{ opacity: 0, y: -20 }}
//             animate={{
//               opacity: [0, 0.3, 0],
//               y: [0, -10, 10, 0],
//               x: [0, 10, -10, 0],
//             }}
//             transition={{
//               duration: 15 + Math.random() * 10,
//               repeat: Infinity,
//               repeatType: "reverse",
//               delay: Math.random() * 5,
//             }}
//             className="absolute text-4xl"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//             }}
//           >
//             <span className={services[i % services.length].color}>✦</span>
//           </motion.div>
//         ))}
//       </div>

//       <div className="container mx-auto px-4 sm:px-6 relative">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="text-center mb-12"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-lime-400">
//               Business Growth Through Technology
//             </span>
//           </h2>
//           <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
//             I deliver custom software solutions that solve real business
//             problems, drive revenue, and create sustainable competitive
//             advantages.
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {services.map((service, index) => (
//             <motion.div
//               key={service.id}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               whileHover={{ y: -5 }}
//               transition={{
//                 duration: 0.5,
//                 delay: index * 0.1,
//                 hover: { duration: 0.2 },
//               }}
//               viewport={{ once: true, margin: "0px 0px -50px 0px" }}
//             >
//               <Card
//                 className={`h-full bg-gradient-to-br ${service.bgGradient} border ${service.borderColor}/20 hover:${service.borderColor}/50 rounded-xl transition-all duration-300 group relative overflow-hidden`}
//               >
//                 {/* Animated border effect */}
//                 <motion.div
//                   initial={{ opacity: 0, scale: 0.95 }}
//                   whileHover={{ opacity: 1, scale: 1 }}
//                   className={`absolute inset-0 border-2 ${service.borderColor}/30 rounded-xl pointer-events-none`}
//                   transition={{ duration: 0.3 }}
//                 />

//                 {/* Floating dots pattern */}
//                 <div className="absolute inset-0 opacity-10 pointer-events-none">
//                   {[...Array(20)].map((_, i) => (
//                     <div
//                       key={i}
//                       className={`absolute rounded-full ${service.color.replace(
//                         "text",
//                         "bg"
//                       )}`}
//                       style={{
//                         width: `${Math.random() * 4 + 1}px`,
//                         height: `${Math.random() * 4 + 1}px`,
//                         left: `${Math.random() * 100}%`,
//                         top: `${Math.random() * 100}%`,
//                       }}
//                     />
//                   ))}
//                 </div>

//                 <CardHeader>
//                   <div className="pb-4 relative z-10">
//                     <motion.div
//                       whileHover={{ rotate: 15, scale: 1.1 }}
//                       transition={{ type: "spring", stiffness: 300 }}
//                       className={`${service.color} mb-4 inline-block`}
//                     >
//                       {service.icon}
//                     </motion.div>
//                     <div className="text-xl">
//                       <CardTitle>{service.title}</CardTitle>
//                     </div>
//                   </div>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="relative z-10">
//                     <motion.p
//                       className="text-neutral-400"
//                       initial={{ opacity: 0 }}
//                       whileInView={{ opacity: 1 }}
//                       transition={{ delay: index * 0.1 + 0.3 }}
//                     >
//                       {service.description}
//                     </motion.p>
//                   </div>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;

"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Code, BarChart, Globe, Smartphone, Plug, Cloud } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const Services = () => {
  const { isFrench } = useLanguage();

  const services = [
    {
      id: 1,
      title: isFrench
        ? "Plateformes Web Génératrices de Revenus"
        : "Revenue-Driving Web Platforms",
      description: isFrench
        ? "Convertissez les visiteurs en clients avec des sites web haute performance conçus pour l'engagement utilisateur et l'optimisation de la conversion."
        : "Convert visitors into customers with high-performance websites engineered for user engagement and conversion optimization.",
      icon: <Globe className="h-8 w-8" />,
      color: "text-lime-400",
      borderColor: "border-lime-400",
      bgGradient: "from-lime-400/10 to-lime-400/5",
    },
    {
      id: 2,
      title: isFrench ? "Solutions SaaS Évolutives" : "Scalable SaaS Solutions",
      description: isFrench
        ? "Transformez vos opérations business avec un logiciel personnalisé qui automatise les workflows et évolue avec votre croissance."
        : "Transform your business operations with custom software that automates workflows and scales with your growth.",
      icon: <Code className="h-8 w-8" />,
      color: "text-blue-300",
      borderColor: "border-blue-300",
      bgGradient: "from-blue-300/10 to-blue-300/5",
    },
    {
      id: 3,
      title: isFrench
        ? "Applications Business Cross-Plateformes"
        : "Cross-Platform Business Applications",
      description: isFrench
        ? "Engagez vos clients partout avec des expériences mobiles et web fluides qui stimulent la rétention et la fidélité."
        : "Engage your customers anywhere with seamless mobile and web experiences that drive retention and loyalty.",
      icon: <Smartphone className="h-8 w-8" />,
      color: "text-blue-400",
      borderColor: "border-blue-400",
      bgGradient: "from-blue-400/10 to-blue-400/5",
    },
    {
      id: 4,
      title: isFrench
        ? "Infrastructure Cloud & Scalabilité"
        : "Cloud Infrastructure & Scalability",
      description: isFrench
        ? "Préparez l'avenir de votre technologie avec une architecture cloud robuste qui garantit fiabilité, sécurité et potentiel de croissance illimité."
        : "Future-proof your technology with robust cloud architecture that ensures reliability, security, and unlimited growth potential.",
      icon: <Cloud className="h-8 w-8" />,
      color: "text-indigo-400",
      borderColor: "border-indigo-400",
      bgGradient: "from-indigo-400/10 to-indigo-400/5",
    },
    {
      id: 5,
      title: isFrench
        ? "Visibilité Digitale & Performance"
        : "Digital Visibility & Performance",
      description: isFrench
        ? "Dominez les classements de recherche et accélérez l'expérience utilisateur avec des applications ultra-rapides optimisées SEO."
        : "Dominate search rankings and accelerate user experience with SEO-optimized, lightning-fast applications.",
      icon: <BarChart className="h-8 w-8" />,
      color: "text-yellow-400",
      borderColor: "border-yellow-400",
      bgGradient: "from-yellow-400/10 to-yellow-400/5",
    },
    {
      id: 6,
      title: isFrench
        ? "Systèmes d'Intégration & Automatisation"
        : "Integration & Automation Systems",
      description: isFrench
        ? "Connectez votre écosystème business avec des APIs sécurisées et l'automatisation qui éliminent le travail manuel et les silos de données."
        : "Connect your business ecosystem with secure APIs and automation that eliminate manual work and data silos.",
      icon: <Plug className="h-8 w-8" />,
      color: "text-cyan-400",
      borderColor: "border-cyan-400",
      bgGradient: "from-cyan-400/10 to-cyan-400/5",
    },
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: -20 }}
            animate={{
              opacity: [0, 0.3, 0],
              y: [0, -10, 10, 0],
              x: [0, 10, -10, 0],
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              repeatType: "reverse",
              delay: Math.random() * 5,
            }}
            className="absolute text-4xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            <span className={services[i % services.length].color}>✦</span>
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-sm font-medium text-cyan-300 tracking-wider uppercase">
              {isFrench ? "Services" : "Services"}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-lime-400">
              {isFrench
                ? "Croissance Business Grâce à la Technologie"
                : "Business Growth Through Technology"}
            </span>
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            {isFrench
              ? "Je livre des solutions logicielles sur mesure qui résolvent de vrais problèmes business, génèrent des revenus et créent des avantages concurrentiels durables."
              : "I deliver custom software solutions that solve real business problems, drive revenue, and create sustainable competitive advantages."}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                hover: { duration: 0.2 },
              }}
              viewport={{ once: true, margin: "0px 0px -50px 0px" }}
            >
              <Card
                className={`h-full bg-gradient-to-br ${service.bgGradient} border ${service.borderColor}/20 hover:${service.borderColor}/50 rounded-xl transition-all duration-300 group relative overflow-hidden`}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  className={`absolute inset-0 border-2 ${service.borderColor}/30 rounded-xl pointer-events-none`}
                  transition={{ duration: 0.3 }}
                />

                <div className="absolute inset-0 opacity-10 pointer-events-none">
                  {[...Array(20)].map((_, i) => (
                    <div
                      key={i}
                      className={`absolute rounded-full ${service.color.replace("text", "bg")}`}
                      style={{
                        width: `${Math.random() * 4 + 1}px`,
                        height: `${Math.random() * 4 + 1}px`,
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                    />
                  ))}
                </div>

                <CardHeader>
                  <div className="pb-4 relative z-10">
                    <motion.div
                      whileHover={{ rotate: 15, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className={`${service.color} mb-4 inline-block`}
                    >
                      {service.icon}
                    </motion.div>
                    <div className="text-xl">
                      <CardTitle>{service.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="relative z-10">
                    <motion.p
                      className="text-neutral-400"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                    >
                      {service.description}
                    </motion.p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
