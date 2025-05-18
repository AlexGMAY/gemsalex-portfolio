"use client";

import React from 'react'
import PlatformsColumn from './ui/PlatformsColumn';


const platforms = [
  {
    id: 1,
    name: "Cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
    description:
      "Advanced media management and optimization for images and videos",
  },
  {
    id: 2,
    name: "Appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
    description: "Open-source backend server for web and mobile applications",
  },
  {
    id: 3,
    name: "Hostinger",
    img: "/host.svg",
    nameImg: "/hostName.svg",
    description: "High-performance web hosting with global data centers",
  },
  {
    id: 4,
    name: "Stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
    description: "Real-time activity feeds and chat API infrastructure",
  },
  {
    id: 5,
    name: "Docker",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
    description:
      "Containerization platform for consistent development environments",
  },
  {
    id: 6,
    name: "Vercel",
    img: "/vercel.png",
    nameImg: "/vercelName.svg",
    description:
      "Instant deployments and edge network for frontend applications",
  },
];
export type PlatformsType = typeof platforms;

const Platforms = () => {   

  return (
    <section className="py-24 overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 items-center lg:gap-16 ">
          <div>
            <div className="inline-flex border border-lime-400 gap-2 text-lime-500 px-3 py-1 rounded-full     items-center text-sm uppercase font-semibold">
              <span>&#10038;</span>
              <span>Tech Platforms</span>
            </div>
            <div className="">
              <h2 className="text-5xl font-bold lg:text-left mt-4">
                Powerful{" "}
                <span className="bg-gradient-to-r from-lime-400 to-blue-300 bg-clip-text text-transparent">
                  Development Platforms
                </span>{" "}
                I Trust
              </h2>
              <p className="mt-4 text-lg text-neutral-300">
                These cutting-edge tools power my projects with scalability,
                performance, and reliability. Each platform is carefully
                selected for its unique strengths in modern web development.
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
}

export default Platforms