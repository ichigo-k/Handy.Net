import React from 'react';
import ctaImg from "../../assets/cta.jpg";

function Cta() {
  return (
    <section className="relative w-full py-10">
      {/* Background Image */}
      <img 
        src={"https://cdn.pixabay.com/photo/2023/05/12/19/24/loading-dock-7989197_960_720.jpg"} 
        alt="CTA Background" 
        className="absolute inset-0 w-full h-full object-cover z-[-1]" 
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 z-0"></div>
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center text-white space-y-6">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold">Reliable Logistics, Seamless Deliveries</h2>
        <p className="max-w-2xl text-sm md:text-base lg:text-lg">
          Experience top-notch logistics solutions designed to ensure fast, secure, and efficient delivery for your business.
        </p>
          <a 
          href="/contact"
          className="inline-block px-6 py-3 text-sm md:text-base lg:text-lg font-semibold gradient-bg text-white rounded-lg shadow-lg hover:scale-105 transition duration-300"
        >
          Contact US
        </a>
      </div>
    </section>
  );
}

export default Cta;
