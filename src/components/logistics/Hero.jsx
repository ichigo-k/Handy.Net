import React, { useState, useEffect } from "react";

function Hero() {
  const headlines = [
  "Delivering Excellence, Every Mile.",
  "Seamless Logistics, On-Time Every Time.",
  "Your Cargo, Our Commitment."
];


  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % headlines.length);
        setFade(true);
      }, 500); // Half-second fade transition
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[35rem] rounded-b-[5rem] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <img
        src="https://cdn.pixabay.com/photo/2021/09/16/21/27/container-ship-6631117_1280.jpg"
        alt="Logistics Background"
        className="w-full h-full object-cover brightness-75"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content Box */}
      <div className="absolute flex flex-col items-center text-center text-white px-6">
        <h1
          className={`xl:text-6xl text-4xl w-full font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent transition-opacity duration-500 ${
            fade ? "opacity-100" : "opacity-0"
          }`}
        >
          {headlines[currentIndex]}
        </h1>
        <p className="max-w-2xl text-xl text-gray-200 mt-4">
          Streamlining logistics with efficiency and precision. We ensure your
          goods arrive on time, every time.
        </p>
        <a href="#services" className="mt-8 px-8 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold text-lg rounded-full shadow-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105">
          Explore Services
        </a>
      </div>
    </section>
  );
}

export default Hero;