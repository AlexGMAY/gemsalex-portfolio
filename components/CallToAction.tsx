import { motion } from 'framer-motion'
import React from 'react'

const CallToAction = () => {
  return (
    <section className="py-24">
      <div className="overflow-x-clip p-4 flex">
        <motion.div
          animate={{
            x: "-50%",
          }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity,
          }}
          className="flex flex-none gap-16 text-7xl md:text-8xl font-medium"
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="flex items-center gap-16 hover:text-lime-500">
              <span className="text-yellow-500 text-7xl">&#10038;</span>
              <span className="heading">Let&apos;s Work Together !</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default CallToAction