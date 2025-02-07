import React from "react";
import { motion } from "framer-motion";
import { services } from "../../constants";
import { X, Eye } from "lucide-react";

function Modal({ info, onClose }) {
  if (!info) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4"
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.9 }}
        className="bg-white rounded-2xl shadow-lg w-full max-w-xl relative overflow-hidden"
      >
        <img
          src={info.image}
          alt={info.title}
          className="w-full h-64 object-cover rounded-t-2xl"
        />
        <button
          className="absolute top-4 right-4 text-gray-700 hover:text-red-500"
          onClick={onClose}
        >
          <X size={28} />
        </button>
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">{info.title}</h2>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">{info.desc}</p>
          <button
            className="w-full bg-yellow-400 text-white py-3 rounded-lg hover:bg-yellow-500 transition"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </motion.div>
    </motion.div>
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
    <section id="services" className="py-16 bg-white">
      <div className="contain mx-auto px-6">
        <header className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Our Services</h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mt-4"></div>
        </header>

        {modal && <Modal info={info} onClose={closeModal} />}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ staggerChildren: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition group"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-64 object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-6 text-white">
                <h1 className="text-2xl font-semibold mb-4">{item.name}</h1>
                <button
                  className="flex items-center gap-2 bg-white text-black px-5 py-3 rounded-lg hover:bg-gray-200 transition"
                  onClick={() => openModal(item.name, item.description, item.image)}
                >
                  <Eye size={22} /> Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default OurServices;