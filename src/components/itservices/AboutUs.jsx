import React from 'react';

function AboutUs() {
  return (
    <section id="about" className="w-full py-12 bg-gray-50">
      <div className="contain mx-auto flex flex-col lg:flex-row items-center justify-between px-6">
        {/* Image Collage */}
        <div className="w-full lg:w-1/2 lg:pr-8 mb-8 lg:mb-0 grid grid-cols-2 gap-4">
          <img
            src="https://cdn.pixabay.com/photo/2019/10/06/10/03/team-4529717_1280.jpg"
            alt="Team"
            className="shadow-lg rounded-lg w-full h-40 object-cover"
          />
          <img
            src="https://i.pinimg.com/736x/e4/8a/a5/e48aa58f7a349d5a8f24feceaf7117bf.jpg"
            alt="IT Work"
            className="shadow-lg rounded-lg w-full h-40 object-cover"
          />
          <img
            src="https://i.pinimg.com/736x/6d/81/41/6d814162a0caf9554472408c7dd19342.jpg"
            alt="Meeting"
            className="shadow-lg rounded-lg w-full h-40 object-cover"
          />
          <img
            src="https://i.pinimg.com/736x/11/27/40/112740860f91b8b3b57f5a9de70a5b51.jpg"
            alt="Startup"
            className="shadow-lg rounded-lg w-full h-40 object-cover"
          />
        </div>

        {/* Content */}
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
