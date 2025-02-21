import React from 'react'

const AnimatedQuote = () => {
    const text =
      "I believe that every project deserves a thoughtful, innovative, and tailored approach. Whether you need a sleek website, a high-performing app, or a scalable software solution, I bring expertise and dedication to turn your ideas into reality.";
  return (
    <section className="py-24">
      <div className="container flex flex-col items-center justify-center">
        <div className="inline-flex border border-lime-400 gap-2 text-lime-500 px-3 py-1 rounded-full items-center text-sm uppercase font-semibold">
          <span>&#10038;</span>
          <span>Software Craftsmanship</span>
        </div>
        <div className="text-4xl md:text-6xl text-center font-medium mt-10">
          <span className="">Innovation Starts with the Right Partner.</span>{" "}
          <span className="text-neutral-700">{text}</span>
          <span className="text-lime-400 font-semibold block">
            That&apos;s why I serve you !{" "}
          </span>
        </div>
      </div>
    </section>
  );
}

export default AnimatedQuote