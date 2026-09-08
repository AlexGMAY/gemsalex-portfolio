// "use client";

// import React from 'react'
// import PlatformsColumn from './ui/PlatformsColumn';

// const platforms = [
//   {
//     id: 1,
//     name: "Cloudinary",
//     img: "/cloud.svg",
//     nameImg: "/cloudName.svg",
//     description: "Lightning-fast media delivery for better user experiences",
//   },
//   {
//     id: 2,
//     name: "Appwrite",
//     img: "/app.svg",
//     nameImg: "/appName.svg",
//     description: "Secure backend infrastructure that scales with your growth",
//   },
//   {
//     id: 3,
//     name: "Hostinger",
//     img: "/host.svg",
//     nameImg: "/hostName.svg",
//     description: "Global hosting for maximum uptime and performance",
//   },
//   {
//     id: 4,
//     name: "Stream",
//     img: "/s.svg",
//     nameImg: "/streamName.svg",
//     description: "Real-time engagement to keep users connected",
//   },
//   {
//     id: 5,
//     name: "Docker",
//     img: "/dock.svg",
//     nameImg: "/dockerName.svg",
//     description: "Consistent deployment for reliable applications",
//   },
//   {
//     id: 6,
//     name: "Vercel",
//     img: "/vercel.png",
//     nameImg: "/vercelName.svg",
//     description: "Instant global deployment for faster delivery",
//   },
// ];

// export type PlatformsType = typeof platforms;

// const Platforms = () => {

//   return (
//     <section className="py-24 overflow-hidden">
//       <div className="container">
//         <div className="grid lg:grid-cols-2 items-center lg:gap-16 ">
//           <div>
//             <div className="inline-flex border border-lime-400 gap-2 text-lime-500 px-3 py-1 rounded-full items-center text-sm uppercase font-semibold">
//               <span>&#10038;</span>
//               <span>Industry Technology Stack</span>
//             </div>
//             <div className="">
//               <h2 className="text-3xl md:text-5xl font-bold lg:text-left mt-4">
//                 Built With{" "}
//                 <span className="bg-gradient-to-r from-blue-400 to-lime-400 bg-clip-text text-transparent">
//                   Industry-Leading Technology
//                 </span>{" "}
//                 That Delivers Results
//               </h2>
//               <p className="mt-4 text-lg text-neutral-300">
//                 I leverage proven, enterprise-ready platforms to build solutions
//                 that scale with your business, ensure maximum uptime, and
//                 deliver exceptional performance for your customers. Every
//                 technology is chosen for its ability to solve real business
//                 challenges effectively.
//               </p>
//             </div>
//           </div>
//           <div>
//             <div className="h-[400px] lg:h-[800px] mt-8 lg:mt-0 overflow-hidden grid md:grid-cols-2 gap-4 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
//               <PlatformsColumn platforms={platforms} />
//               <PlatformsColumn
//                 platforms={platforms.slice().reverse()}
//                 reversed
//                 className="hidden md:flex"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Platforms

"use client";

import React from "react";
import PlatformsColumn from "./ui/PlatformsColumn";
import { useLanguage } from "@/context/LanguageContext";

const Platforms = () => {
  const { isFrench } = useLanguage();

  const platforms = [
    {
      id: 1,
      name: "Cloudinary",
      img: "/cloud.svg",
      nameImg: "/cloudName.svg",
      description: isFrench
        ? "Diffusion média ultra-rapide pour de meilleures expériences utilisateur"
        : "Lightning-fast media delivery for better user experiences",
    },
    {
      id: 2,
      name: "Appwrite",
      img: "/app.svg",
      nameImg: "/appName.svg",
      description: isFrench
        ? "Infrastructure backend sécurisée qui évolue avec votre croissance"
        : "Secure backend infrastructure that scales with your growth",
    },
    {
      id: 3,
      name: "Hostinger",
      img: "/host.svg",
      nameImg: "/hostName.svg",
      description: isFrench
        ? "Hébergement global pour une disponibilité et des performances maximales"
        : "Global hosting for maximum uptime and performance",
    },
    {
      id: 4,
      name: "Stream",
      img: "/s.svg",
      nameImg: "/streamName.svg",
      description: isFrench
        ? "Engagement en temps réel pour garder les utilisateurs connectés"
        : "Real-time engagement to keep users connected",
    },
    {
      id: 5,
      name: "Docker",
      img: "/dock.svg",
      nameImg: "/dockerName.svg",
      description: isFrench
        ? "Déploiement cohérent pour des applications fiables"
        : "Consistent deployment for reliable applications",
    },
    {
      id: 6,
      name: "Vercel",
      img: "/vercel.png",
      nameImg: "/vercelName.svg",
      description: isFrench
        ? "Déploiement global instantané pour une livraison plus rapide"
        : "Instant global deployment for faster delivery",
    },
  ];

  return (
    <section className="py-24 overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 items-center lg:gap-16">
          <div>
            <div className="inline-flex border border-lime-400/30 gap-2 text-lime-400 px-5 py-2 rounded-full items-center text-sm uppercase font-semibold bg-lime-400/5">
              <span>✦</span>
              <span>
                {isFrench
                  ? "Stack Technologique Industrie"
                  : "Industry Technology Stack"}
              </span>
            </div>
            <div>
              <h2 className="text-3xl md:text-5xl font-bold lg:text-left mt-6 leading-tight">
                {isFrench ? "Construit Avec" : "Built With"}{" "}
                <span className="bg-gradient-to-r from-blue-400 to-lime-400 bg-clip-text text-transparent">
                  {isFrench
                    ? "Une Technologie de Pointe"
                    : "Industry-Leading Technology"}
                </span>{" "}
                {isFrench ? "Qui Livre des Résultats" : "That Delivers Results"}
              </h2>
              <p className="mt-4 text-lg text-neutral-300 leading-relaxed">
                {isFrench
                  ? "J'exploite des plateformes éprouvées et prêtes pour l'entreprise pour construire des solutions qui évoluent avec votre business, garantissent une disponibilité maximale et offrent des performances exceptionnelles pour vos clients. Chaque technologie est choisie pour sa capacité à résoudre efficacement de vrais défis business."
                  : "I leverage proven, enterprise-ready platforms to build solutions that scale with your business, ensure maximum uptime, and deliver exceptional performance for your customers. Every technology is chosen for its ability to solve real business challenges effectively."}
              </p>
            </div>
          </div>
          <div>
            <div className="h-[400px] lg:h-[800px] mt-8 lg:mt-0 overflow-hidden grid md:grid-cols-2 gap-4 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
              <PlatformsColumn platforms={platforms} />
              <PlatformsColumn
                platforms={platforms.slice().reverse()}
                reversed
                className="hidden md:flex"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Platforms;
