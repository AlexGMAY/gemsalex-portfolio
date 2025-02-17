import React from 'react'
import { type PlatformsType } from '../Platforms';
import { twMerge } from 'tailwind-merge';

const PlatformsColumn = (props: { platforms: PlatformsType; className?: string }) => {
  const { platforms, className } = props;
  return (
    <div className={twMerge("flex flex-col gap-4 pb-4", className)}>
      {platforms.map((platform) => (
        <div
          key={platform.id}
          className="flex flex-col justify-center items-center bg-black-200 border border-lime/10 rounded-3xl p-6"
        >
          <div className="flex justify-center bg-black-100 p-6 rounded-full w-fit">
            <img src={platform.img} alt={platform.name} className="size-20" />
          </div>
          <h3 className="text-3xl text-center mt-6">{platform.name}</h3>
          <p className="text-center text-neutral-300 mt-2">
            {platform.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default PlatformsColumn