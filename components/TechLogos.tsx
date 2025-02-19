"use client";

import React from "react";
import { companies } from "@/data";

const TechLogos = () => {
  return (
    <section className="py-20 overflow-x-clip">
        <div className="container">
            <h3 className="text-center text-white/50 text-xl">
              
            </h3>
            <div className="overflow-hidden mt-12 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                <div className="flex gap-24 pr-24">
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
                </div>
            </div>
        </div>
    </section>
  )
}

export default TechLogos