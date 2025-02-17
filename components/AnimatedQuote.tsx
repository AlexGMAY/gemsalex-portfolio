import React from 'react'

const AnimatedQuote = () => {
    const text =
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out.";
  return (
    <section className='py-24'>
      <div className="container flex flex-col items-center justify-center">
        <div className="inline-flex border border-lime-400 gap-2 text-lime-500 px-3 py-1 rounded-full items-center text-sm uppercase font-semibold">
          <span>&#10038;</span>
          <span>Software Craftsmanship</span>
        </div>
        <div className='text-4xl md:text-6xl text-center font-medium mt-10'>
          <span className=''>Your Creative process deserves better.</span>{" "}
          <span className='text-neutral-700'>{text}</span>
          <span className='text-lime-400 font-semibold block'>That&apos;s why I serve you ! </span>
        </div>
      </div>
    </section>
  );
}

export default AnimatedQuote