import React from 'react';
import ctaImg from "../../assets/cta.jpg";

function Cta() {
  return (
    <section className="relative w-full h-[15rem] md:h-[20rem] lg:h-[25rem]">
      {/* Background Image */}
      <img 
        src={ctaImg} 
        alt="CTA Background" 
        className="absolute inset-0 w-full h-full object-cover z-[-1]" 
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center text-white space-y-4">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold">Transform Your Business Today</h2>
        <p className="max-w-2xl text-sm md:text-base lg:text-lg">
          Discover the tools and strategies that can help elevate your business to the next level with Hany.Net IT Solutions.
        </p>
        <a 
          href=""
          className="inline-block px-6 py-3 text-sm md:text-base lg:text-lg font-semibold gradient-bg text-white rounded-md shadow-md transition duration-300 "
        >
          Get Started Now
        </a>
      </div>
    </section>
  );
}

export default Cta;
