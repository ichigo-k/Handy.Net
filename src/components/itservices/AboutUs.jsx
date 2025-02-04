import React from 'react';

function AboutUs() {
  return (
    <section id="about" className="w-full py-12 bg-gray-50">
      <div className="contain mx-auto flex flex-col lg:flex-row items-center justify-between px-6">
        <div className="w-full lg:w-1/2 lg:pr-8 mb-8 lg:mb-0">
          <img
            src="https://cdn.pixabay.com/photo/2019/10/06/10/03/team-4529717_1280.jpg"
            alt="Team"
            className="shadow-lg rounded-lg w-full h-72 object-cover"
          />
        </div>

        <div className="w-full lg:w-1/2">
        <header className="text-center mb-8">
          <h2 className="text-4xl font-bold text-slate-800">About Us</h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mt-4"></div>
        </header>
          <p className="text-gray-600 text-lg leading-relaxed">
            Handy.Net IT Solutions is a Ghana-based company dedicated to resolving IT challenges for businesses and individuals. From purchasing and installing IT devices to repair and maintenance, we provide comprehensive services tailored to your needs. Our expertise also extends to web development, where we create engaging, high-performing websites to support your digital goals. At Hany.Net, we are committed to delivering seamless IT solutions that help you thrive in a technology-driven world.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
