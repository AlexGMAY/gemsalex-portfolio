import { platform } from 'os';
import React from 'react'
import PlatformsColumn from './ui/PlatformsColumn';
import GlowingStar from './ui/GlowingStar';

const platforms = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
    description: "lorem ipsum sit amet consectur est",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
    description: "lorem ipsum sit amet consectur est",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
    description: "lorem ipsum sit amet consectur est",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
    description: "lorem ipsum sit amet consectur est",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
    description: "lorem ipsum sit amet consectur est",
  },
  {
    id: 6,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
    description: "lorem ipsum sit amet consectur est",
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
                Amazing <span className="text-lime-500"> Platforms </span>I use
              </h2>
              <p className="mt-4 text-lg text-neutral-300">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima
                omnis voluptas ut odit amet ullam nisi numquam! Doloremque,
                officiis dolor.
              </p>
              <GlowingStar />
            </div>
          </div>
          <div>
            <div className="h-[400px] lg:h-[800px] mt-8 lg:mt-0 overflow-hidden grid md:grid-cols-2 gap-4 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
              <PlatformsColumn platforms={platforms} />
              <PlatformsColumn
                platforms={platforms.slice().reverse()}
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