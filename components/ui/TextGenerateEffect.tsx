"use client";
import { useEffect } from "react";
import { stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  useEffect(() => {    
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 0,
        delay: stagger(0.0),
      }
    );
  }, [scope.current, animate, wordsArray]);

  const renderWords = () => {
    return (
      <div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <span
              key={word + idx}
              // change here if idx is greater than 3, change the text color to #E7B108
              className={` ${
                idx > 3
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-lime-500"
                  : "dark:text-white text-black"
              } opacity-0`}
            >
              {word}{" "}
            </span>
          );
        })}
      </div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      {/* mt-4 to my-4 */}
      <div className="my-4">
        {/* remove  text-2xl from the original */}
        <div className=" dark:text-white text-black leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
