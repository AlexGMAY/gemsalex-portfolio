import { FaLocationArrow } from "react-icons/fa6";
import { motion, useAnimate } from "framer-motion";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import GlowingStar from "./ui/GlowingStar";
import { useEffect } from "react";

const Hero = () => {
  const [leftPictureScope, leftPictureAnimate] = useAnimate();
  const [rightPictureScope, rightPictureAnimate] = useAnimate();

  useEffect(() => {
    leftPictureAnimate([
      [leftPictureScope.current, { opacity: 1 }, { duration: 0.5 }],
      [leftPictureScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
    ]);

    rightPictureAnimate([
      [
        rightPictureScope.current,
        { opacity: 1 },
        { duration: 0.5, delay: 1.5 },
      ],
      [rightPictureScope.current, { x: 0, y: 0 }, { duration: 0.5 }],
    ]);
  }, [])
  return (
    <div className="pb-20 pt-36 relative">
      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          // change the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <motion.div
        ref={leftPictureScope}
        initial={{ opacity: 0, y: 100, x: -100 }}
        drag
        className="absolute -left-60 w-[30%] h-[380px] bottom-10 rounded-3xl p-2 hidden lg:block"
      >
        <img
          src="/dashboard.jpeg"
          alt="Web apps development"
          className="w-full md:h-full p-2 bg-black-200 border border-lg border-neutral-700 rounded-3xl shadow-lg relative z-10"
          draggable = "false"
        />
      </motion.div>
      <motion.div
        ref={rightPictureScope}
        initial={{ opacity: 0, x: 100, y: 100 }}
        drag
        className="absolute -right-64 w-[30%] h-[380px] top-120 rounded-3xl p-2 hidden lg:block"
      >
        <img
          src="/realestate-dark.jpg"
          alt="Website Development"
          className="w-full md:h-full p-2 bg-black-200 border border-lg border-neutral-700 rounded-3xl shadow-lg relative z-10"
          draggable="false"
        />
      </motion.div>
      <div className="absolute left-40 top-40">
        <GlowingStar />
      </div>
      <div className="absolute right-40 bottom-16">
        <GlowingStar />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[70vw] flex flex-col items-center justify-center">
          <div className="inline-flex py-2 px-3 bg-gradient-to-r from-yellow-300 to-lime-800 rounded-full font-semibold">
            <p className="uppercase tracking-widest text-xs text-center text-neutral-950">
              {/* text-blue-100 max-w-82 */}
              Dynamic Web Excellence with{" "}
              <span className="font-semibold text-blue-100">
                8+ years of Experience
              </span>
            </p>
          </div>

          {/**
           *  Link: https://ui.aceternity.com/components/text-generate-effect
           *
           *  change md:text-6xl, add more responsive code
           */}
          <TextGenerateEffect
            words="Crafting Impactful Design into Engaging User Experiences"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hello! I&apos;m{" "}
            <span className="font-bold text-yellow-500">
              Merveille Alexander
            </span>
            , a Full Stack Software Engineer, WordPress Developer,
            Analyst-Programer and Auto-entrepreneur based in Tunisia.
          </p>

          <div className="flex items-center justify-center gap-4">
            <a href="#projects">
              <MagicButton
                title="Recent projects"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
            <motion.a
              href="#services"
              className="inline-block mt-10 bg-gradient-to-r from-yellow-300 to-lime-500 hover:bg-lime-600 transition px-6 py-3 rounded-lg text-black font-bold"
              whileHover={{ scale: 1.05 }}
            >
              All Services
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
