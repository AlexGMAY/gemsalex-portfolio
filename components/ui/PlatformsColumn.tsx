import React, { Fragment } from 'react'
import { type PlatformsType } from '../Platforms';
import { twMerge } from 'tailwind-merge';
import { motion } from 'framer-motion';

const PlatformsColumn = (props: { platforms: PlatformsType; className?: string; reversed?: boolean; }) => {
  const { platforms, className, reversed } = props;  
  return (
    <motion.div
      initial={{
        y: reversed ? "-50%" : 0
      }}
      animate={{
        y: reversed ? 0 : "-50%",
      }}
      transition={{
        duration: 15,
        ease: "linear",
        repeat: Infinity,
      }}
      className={twMerge("flex flex-col gap-4 pb-4", className)}
    >
      {Array.from({ length: 2 }).map((_, i) => (
        <Fragment key={i}>
          {platforms.map((platform) => (
            <div
              key={platform.id}
              className="flex flex-col justify-center items-center bg-black-200 border border-lime/10 rounded-3xl p-6"
            >
              <div className="flex justify-center bg-black-100 p-6 rounded-full w-fit">
                <img
                  src={platform.img}
                  alt={platform.name}
                  className="size-20"
                />
              </div>
              <h3 className="text-3xl text-center mt-6">{platform.name}</h3>
              <p className="text-center text-neutral-300 mt-2">
                {platform.description}
              </p>
            </div>
          ))}
        </Fragment>
      ))}
    </motion.div>
  );
};

export default PlatformsColumn