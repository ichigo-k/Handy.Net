import React from 'react';
import { services } from '../constants';

function Modal({ info, onClose }) {
  if (!info) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-lg mx-4 md:mx-0">
        <img
          src={info.image}
          alt={info.title}
          className="w-full h-60 mb-4 rounded-t-lg object-cover"
        />
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">{info.title}</h2>
          <p className="text-lg mb-6">{info.desc}</p>
          <button
            className="bg-yellow-400 text-white px-4 py-2 rounded hover:bg-yellow-500 transition-colors"
            onClick={onClose}
          >
            Show Less
          </button>
        </div>
      </div>
    </div>
  );
}

function OurServices() {
  const [modal, setModal] = React.useState(false);
  const [info, setInfo] = React.useState(null);

  function openModal(title, desc, img) {
    setInfo({ title, desc, image: img });
    setModal(true);
  }

  function closeModal() {
    setModal(false);
    setInfo(null);
  }

  return (
    <section id="services" className="py-8 bg-white">
      <div className="container mx-auto px-4">
      <header className="text-center mb-8">
          <h2 className="text-4xl font-bold text-slate-800">Our Services</h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mt-4"></div>
        </header>

        {modal && <Modal info={info} onClose={closeModal} />}

        <div className="flex gap-6 overflow-x-auto pb-4 lg:justify-center">
          {services.map((item, index) => (
            <div
              className="flex-shrink-0 w-80 h-60 relative rounded-lg overflow-hidden bg-gray-200"
              key={index}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/60 flex flex-col justify-end p-4 text-white">
                <h1 className="text-xl font-semibold mb-4">{item.name}</h1>
                <button
                  className="bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200 transition-colors"
                  onClick={() => openModal(item.name, item.description, item.image)}
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurServices;
