// "use client";

// import { motion } from "framer-motion";
// import { FiDownload, FiAward, FiUser, FiCode } from "react-icons/fi";
// import { FaSmileWink } from "react-icons/fa";
// import Image from "next/image";
// import Link from "next/link";
// import { useState, useEffect } from "react";

// const AboutMe = () => {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     setIsMobile(window.innerWidth < 768);
//   }, []);
  
//   const softSkills = [
//     { name: "Problem Solving", icon: "🧩" },
//     { name: "Team Collaboration", icon: "🤝" },
//     { name: "Adaptability", icon: "🔄" },
//     { name: "Communication", icon: "💬" },
//     { name: "Creativity", icon: "🎨" },
//     { name: "Time Management", icon: "⏱️" },
//   ];

//   const stats = [
//     {
//       value: "8+",
//       label: "Years Solving Business Challenges",
//       icon: <FiAward />,
//     },
//     {
//       value: "50+",
//       label: "Successful Client Transformations",
//       icon: <FiCode />,
//     },
//     { value: "100%", label: "Focus On Your ROI", icon: <FiUser /> },
//   ];

//   return (
//     <section
//       id="about"
//       className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black-100 to-black-100"
//     >
//       <div className="max-w-7xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
//             The Mind{" "}
//             <span className="bg-gradient-to-r from-blue-400 to-lime-400 bg-clip-text text-transparent">
//               Behind Your Success
//             </span>
//           </h2>
//           <div className="w-80 h-1 bg-gradient-to-r from-lime-400 to-blue-300 mx-auto rounded-full" />
//         </motion.div>

//         <div className="flex flex-col lg:flex-row gap-16 items-center">
//           {/* Image Section - Full height and width */}
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             viewport={{ once: true }}
//             className="w-full lg:w-1/2 h-auto lg:h-full"
//           >
//             <div className="relative group w-full h-full">
//               {/* Gradient border effect */}
//               <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-teal-400 rounded-2xl opacity-75 blur-sm group-hover:opacity-100 transition-all duration-300" />

//               {/* Image container - now with explicit dimensions */}
//               <div className="relative rounded-xl overflow-hidden border-2 border-gray-700 w-full">
//                 {/* Aspect ratio container for precise control */}
//                 <div className="relative">
//                   {" "}                  
//                   <Image
//                     alt="Merveille Alexandre - Strategic Software Engineer and Instructor"
//                     priority
//                     className="object-cover"
//                     src="/gallery/alex-office.jpg"
//                     width={isMobile ? 400 : 600}
//                     height={isMobile ? 550 : 825}
//                     sizes="(max-width: 768px) 100vw, 50vw"
//                     quality={75}
//                     placeholder="blur"
//                     blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRg..."
//                   />                  
//                 </div>
//                 {/* Gradient overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/30 to-transparent flex items-end justify-end p-6">
//                   <motion.div
//                     animate={{ rotate: [0, 10, -10, 0] }}
//                     transition={{ repeat: Infinity, duration: 3 }}
//                     className="text-yellow-400 text-3xl"
//                   >
//                     <FaSmileWink />
//                   </motion.div>
//                 </div>
//               </div>
//             </div>
//           </motion.div>

//           {/* Content Section */}
//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             viewport={{ once: true }}
//             className="w-full lg:w-1/2 space-y-8"
//           >
//             <div>
//               <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
//                 From Complex Business Problems <br />- To Scalable Technical
//                 Solutions
//               </h3>
//               <p className="text-gray-300 leading-relaxed">
//                 I transform business challenges into competitive advantages
//                 through strategic software engineering. With over 8 years of
//                 experience, I don&apos;t just write code—I solve the operational
//                 inefficiencies, scalability bottlenecks, and revenue-limiting
//                 problems that hold businesses back. My approach combines
//                 technical expertise with deep business understanding to deliver
//                 solutions that drive measurable growth.
//               </p>
//               <p className="text-gray-300 leading-relaxed mt-4">
//                 I also share this expertise through personalized professional
//                 training, helping ambitious individuals and teams master the
//                 exact skills needed to accelerate their careers. Whether
//                 you&apos;re looking to upskill for promotion, transition into
//                 tech, or optimize your business operations, my 1-on-1 training
//                 delivers practical, results-driven learning tailored to your
//                 specific goals and schedule.
//               </p>
//             </div>

//             {/* Soft Skills */}
//             <div>
//               <h4 className="text-xl font-semibold text-white mb-4">
//                 How I Deliver Exceptional Results
//               </h4>
//               <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
//                 {softSkills.map((skill, index) => (
//                   <motion.div
//                     key={index}
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.5, delay: index * 0.1 }}
//                     viewport={{ once: true }}
//                     className="flex items-center gap-2 bg-gray-800/50 backdrop-blur-sm p-3 rounded-lg border border-gray-700"
//                   >
//                     <span className="text-xl">{skill.icon}</span>
//                     <span className="text-gray-200 text-sm">{skill.name}</span>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>

//             {/* CTA */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ delay: 0.8 }}
//               viewport={{ once: true }}
//               className="flex justify-between align-center flex-wrap gap-4 pt-4"
//             >
//               {/* Learn More Button - Links to About Page */}
//               <Link href="/about" passHref legacyBehavior>
//                 <motion.a
//                   whileHover={{ scale: 1.03 }}
//                   whileTap={{ scale: 0.97 }}
//                   className="flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-teal-500 text-white font-medium shadow-lg hover:shadow-blue-500/30 transition-all cursor-pointer"
//                 >
//                   <FiUser /> Get to know me
//                 </motion.a>
//               </Link>

//               {/* Download CV Button - Downloads PDF */}
//               <motion.button
//                 whileHover={{ scale: 1.03 }}
//                 whileTap={{ scale: 0.97 }}
//                 onClick={() => {
//                   // Create a temporary anchor element to trigger download
//                   const link = document.createElement("a");
//                   link.href = "./cv/merveille-alexander-cv-2026.pdf"; // Replace with your actual PDF path
//                   link.download = "Merveille-Alexander-CV.pdf"; // Suggested filename for download
//                   document.body.appendChild(link);
//                   link.click();
//                   document.body.removeChild(link);
//                 }}
//                 className="flex items-center gap-2 px-6 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white font-medium hover:bg-gray-700 transition-all"
//               >
//                 <FiDownload /> Download CV
//               </motion.button>
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutMe;


"use client";

import { motion } from "framer-motion";
import { FiDownload, FiAward, FiUser, FiCode, FiArrowRight } from "react-icons/fi";
import { FaSmileWink } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";

const AboutMe = () => {
  const { isFrench } = useLanguage();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  const softSkills = [
    { name: isFrench ? "Résolution de Problèmes" : "Problem Solving", icon: "🧩" },
    { name: isFrench ? "Collaboration d'Équipe" : "Team Collaboration", icon: "🤝" },
    { name: isFrench ? "Adaptabilité" : "Adaptability", icon: "🔄" },
    { name: isFrench ? "Communication" : "Communication", icon: "💬" },
    { name: isFrench ? "Créativité" : "Creativity", icon: "🎨" },
    { name: isFrench ? "Gestion du Temps" : "Time Management", icon: "⏱️" },
  ];

  const stats = [
    {
      value: "8+",
      label: isFrench ? "Années à Résoudre des Défis Business" : "Years Solving Business Challenges",
      icon: <FiAward className="text-lime-400" />,
    },
    {
      value: "50+",
      label: isFrench ? "Transformations Clients Réussies" : "Successful Client Transformations",
      icon: <FiCode className="text-blue-300" />,
    },
    {
      value: "100%",
      label: isFrench ? "Focus Sur Votre ROI" : "Focus On Your ROI",
      icon: <FiUser className="text-emerald-400" />,
    },
  ];

  return (
    <section
      id="about"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black-100 to-black-100"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-300/10 border border-blue-300/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse" />
            <span className="text-sm font-medium text-blue-200 tracking-wider uppercase">
              {isFrench ? "À Propos" : "About Me"}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            {isFrench ? "L'Esprit" : "The Mind"}{" "}
            <span className="bg-gradient-to-r from-blue-400 to-lime-400 bg-clip-text text-transparent">
              {isFrench ? "Derrière Votre Succès" : "Behind Your Success"}
            </span>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-lime-400 to-blue-300 mx-auto rounded-full" />
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-black-200/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-lime-400/30 transition-all duration-300 text-center"
            >
              <div className="flex justify-center mb-3">
                <div className="p-3 rounded-xl bg-gray-800/50">
                  {stat.icon}
                </div>
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <div className="relative group">
              {/* Gradient border effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-lime-400 rounded-2xl opacity-40 blur-md group-hover:opacity-70 transition-all duration-500 group-hover:blur-lg" />

              <div className="relative rounded-2xl overflow-hidden border-2 border-gray-700/50 group-hover:border-gray-600 transition-colors duration-300">
                <Image
                  alt={isFrench ? "Merveille Alexandre - Ingénieur Logiciel Stratégique et Formateur" : "Merveille Alexandre - Strategic Software Engineer and Instructor"}
                  priority
                  className="object-cover w-full"
                  src="/gallery/alex-office.jpg"
                  width={isMobile ? 400 : 600}
                  height={isMobile ? 550 : 825}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={75}
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-transparent to-transparent flex items-end justify-between p-6">
                  <div className="text-white">
                    <p className="text-sm font-medium opacity-90">
                      {isFrench ? "Merveille Alexandre" : "Merveille Alexandre"}
                    </p>
                    <p className="text-xs opacity-70">
                      {isFrench ? "Ingénieur Logiciel" : "Software Engineer"}
                    </p>
                  </div>
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 3 }}
                    className="text-yellow-400 text-3xl"
                  >
                    <FaSmileWink />
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 space-y-8"
          >
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 leading-snug">
                {isFrench ? (
                  <>Des Problèmes Business Complexes<br />- Aux Solutions Techniques Évolutives</>
                ) : (
                  <>From Complex Business Problems<br />- To Scalable Technical Solutions</>
                )}
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                {isFrench
                  ? "Je transforme les défis business en avantages concurrentiels grâce à l'ingénierie logicielle stratégique. Avec plus de 8 ans d'expérience, je n'écris pas seulement du code—je résous les inefficacités opérationnelles, les goulots d'étranglement de scalabilité et les problèmes qui limitent les revenus. Mon approche combine expertise technique et compréhension business profonde pour livrer des solutions qui génèrent une croissance mesurable."
                  : "I transform business challenges into competitive advantages through strategic software engineering. With over 8 years of experience, I don't just write code—I solve the operational inefficiencies, scalability bottlenecks, and revenue-limiting problems that hold businesses back. My approach combines technical expertise with deep business understanding to deliver solutions that drive measurable growth."}
              </p>
              <p className="text-gray-300 leading-relaxed">
                {isFrench
                  ? "Je partage également cette expertise à travers des formations professionnelles personnalisées, aidant les individus ambitieux et les équipes à maîtriser les compétences exactes nécessaires pour accélérer leur carrière. Que vous cherchiez à monter en compétences pour une promotion, à vous reconvertir dans la tech, ou à optimiser vos opérations business, ma formation 1-on-1 délivre un apprentissage pratique et orienté résultats, adapté à vos objectifs et votre planning."
                  : "I also share this expertise through personalized professional training, helping ambitious individuals and teams master the exact skills needed to accelerate their careers. Whether you're looking to upskill for promotion, transition into tech, or optimize your business operations, my 1-on-1 training delivers practical, results-driven learning tailored to your specific goals and schedule."}
              </p>
            </div>

            {/* Soft Skills */}
            <div>
              <h4 className="text-xl font-semibold text-white mb-5">
                {isFrench ? "Comment Je Livre des Résultats Exceptionnels" : "How I Deliver Exceptional Results"}
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {softSkills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -3 }}
                    className="flex items-center gap-3 bg-gray-800/50 backdrop-blur-sm p-4 rounded-xl border border-gray-700/50 hover:border-lime-400/30 transition-all duration-300"
                  >
                    <span className="text-2xl">{skill.icon}</span>
                    <span className="text-gray-200 text-sm font-medium">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Link href="/about" passHref legacyBehavior>
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="group flex items-center gap-3 px-7 py-3.5 rounded-full bg-gradient-to-r from-blue-500 to-teal-500 text-white font-semibold shadow-lg hover:shadow-blue-500/30 transition-all duration-300 cursor-pointer"
                >
                  <FiUser />
                  {isFrench ? "Apprendre à me connaître" : "Get to know me"}
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </motion.a>
              </Link>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = "./cv/merveille-alexander-cv-2026.pdf";
                  link.download = "Merveille-Alexander-CV.pdf";
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                className="flex items-center gap-3 px-7 py-3.5 rounded-full bg-gray-800 border border-gray-700 text-white font-semibold hover:bg-gray-700 hover:border-gray-600 transition-all duration-300"
              >
                <FiDownload />
                {isFrench ? "Télécharger le CV" : "Download CV"}
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
