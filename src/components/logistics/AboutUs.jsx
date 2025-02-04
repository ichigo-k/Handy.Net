import React from "react";

function AboutUs() {
  return (
    <section id="about" className="w-full pb-16 ">
      <div className="contain  mx-auto flex flex-col lg:flex-row items-center justify-between px-6">
        {/* Left Side - Image Section */}
        <div className="w-full lg:w-1/2 lg:pr-12 mb-10 lg:mb-0 relative">
          {/* Experience Badge */}
          <div className="p-3 absolute top-5 left-5 bg-white shadow-lg flex items-center space-x-4 rounded-lg px-4 py-2">
            <span className="font-bold hollow text-4xl">3+</span>
            <span className="text-gray-700 font-semibold text-lg">Years of Experience</span>
          </div>

          {/* Main Image */}
          <img
            src="https://cdn.pixabay.com/photo/2022/08/29/07/44/port-7418239_960_720.jpg"
            alt="Logistics Hub"
            className="w-full h-[30rem] object-cover rounded-xl shadow-lg"
          />

          {/* Overlay Image */}
          <img
            src="https://cdn.pixabay.com/photo/2020/06/20/13/56/hamburg-5321111_960_720.jpg"
            alt="Logistics Operations"
            className="md:w-[15rem] md:h-[20rem] w-[10rem] h-[15rem] object-cover rounded-xl shadow-xl absolute md:-bottom-10 -bottom-4 border-4 border-white xl:-right-16 -right-2"
          />
        </div>

        {/* Right Side - Text Section */}
        <div className="w-full lg:w-2/5 text-center lg:text-left">
          {/* Heading */}
          <h2 className="text-4xl font-extrabold text-gray-800">
            About <span className="hollow">Us</span>
          </h2>
          <div className="w-16 h-1 hollow my-4 mx-auto lg:mx-0"></div>

          {/* Description */}
          <p className="text-gray-600 text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
            Handy Hands Company Limited was founded to provide an easy, fast, and convenient** way for businesses and individuals to simplify their logistics.  
            From seamless deliveries to secure warehousing, we ensure your goods reach their destination on time, every time.
          </p>

          {/* Call to Action Button */}
          <button className="mt-6 px-6 py-3 gradient-bg text-white font-semibold rounded-lg shadow-md hover:bg-yellow-600 transition-all">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
