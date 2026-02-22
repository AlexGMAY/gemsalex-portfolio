"use client";

import React from "react";
import { companies } from "@/data";
import { motion } from "framer-motion";

const TechLogos = () => {
  return (
    <section className="py-20 overflow-x-clip">
      <div className="container">        
        <div className="flex overflow-hidden mt-12 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <motion.div
            animate={{
              x: "-50%",
            }}
            transition={{
              duration: 30,
              ease: "linear",
              repeat: Infinity,
            }}
            className="flex flex-none gap-24 pr-24"
          >
            {Array.from({ length: 2 }).map((_, i) => (
              <React.Fragment key={i}>
                {companies.map((company) => (
                  <React.Fragment key={company.id}>
                    <div className="flex md:max-w-60 max-w-32 gap-2">
                      <img
                        src={company.img}
                        alt={company.name}
                        className="md:w-10 w-5"
                      />
                      <img
                        src={company.nameImg}
                        alt={company.name}
                        width={company.id === 4 || company.id === 5 ? 100 : 150}
                        className="md:w-24 w-20"
                      />
                    </div>
                  </React.Fragment>
                ))}
              </React.Fragment>
            ))}            
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default TechLogos