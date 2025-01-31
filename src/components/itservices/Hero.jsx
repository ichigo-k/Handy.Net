import React from 'react';
import { ArrowRightCircle } from 'lucide-react';
import heroImg from "../../assets/hero1.png"

function Hero() {
  return (
    <section className="w-full mt-6 max-lg:mt-[4rem] relative overflow-hidden">
      {/* Background gradient for a modern look */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-100 via-yellow-300 to-yellow-600 opacity-20 -z-10"></div>
      
      <div className="mx-auto contain flex flex-col md:flex-row items-center justify-between p-5 relative">
        {/* Left Side: Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left flex flex-col justify-center relative z-10">
          {/* Subheading with Icon */}
          <div className="flex items-center justify-center md:justify-start bg-yellow-400 text-white p-2 rounded-md shadow-lg max-w-fit mx-auto md:mx-0 mb-6">
            <ArrowRightCircle size={24} className="mr-2" />
            <span>Seamless IT Solutions</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold leading-snug text-slate-800">
            Comprehensive IT Services for Your Business.
          </h1>

          {/* Description */}
          <p className="max-w-lg mt-6 text-lg text-gray-700">
            At Handy.Net IT Solutions, we specialize in optimizing your IT infrastructure, from consultation to installation and ongoing support. Discover how our tailored services can elevate your business.
          </p>

          {/* Call to Action Button */}
          <a href="#services" className="inline-flex items-center justify-center bg-yellow-400 text-white px-6 py-3 rounded-full shadow-md mt-6 hover:bg-yellow-500 transition-colors duration-300 ease-in-out max-w-sm">
            Our Services <ArrowRightCircle size={24} className="ml-2" />
          </a>
        </div>

        {/* Right Side: Image with Decorative Elements */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end relative mt-10 md:mt-0">
          <div className="relative">
            {/* Decorative shapes behind the image */}
            <div className="absolute top-0 left-0 w-[200px] h-[200px] bg-yellow-300 rounded-full opacity-30 -z-10 transform -translate-x-10 -translate-y-10"></div>

            <div className="absolute bottom-0 right-0 w-[150px] h-[150px] bg-yellow-500  opacity-30 -z-10 transform translate-x-10 translate-y-10"></div>
            
            {/* Main Image */}
            <img 
              src={heroImg}
              alt="IT Network" 
              className="rounded-lg w-[300px] md:w-[270px] lg:w-[370px] object-cover -mb-6"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
