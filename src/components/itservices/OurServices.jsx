import React from "react";
import { motion } from "framer-motion";
import { services } from "../../constants";
import { XCircle, Eye } from "lucide-react";

function Modal({ info, onClose }) {
  if (!info) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
    >
      <div className="bg-white rounded-lg shadow-lg w-full max-w-lg mx-4 md:mx-0 relative overflow-hidden">
        <img
          src={info.image}
          alt={info.title}
          className="w-full h-60 mb-4 rounded-t-lg object-cover"
        />
        <button
          className="absolute top-3 right-3 text-gray-600 hover:text-red-500"
          onClick={onClose}
        >
          <XCircle size={28} />
        </button>
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">{info.title}</h2>
          <p className="text-lg text-gray-700 mb-6">{info.desc}</p>
          <button
            className="bg-yellow-400 text-white px-4 py-2 rounded-md hover:bg-yellow-500 transition"
            onClick={onClose}
          >
            Show Less
          </button>
        </div>
      </div>
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
        {/* Section Header */}
        <header className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Our Services</h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mt-4"></div>
        </header>

        {/* Modal */}
        {modal && <Modal info={info} onClose={closeModal} />}

        {/* Services Grid */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((item, index) => (
            <motion.div
              key={index}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="relative group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-60 object-cover group-hover:scale-105 transition-transform"
              />
              <div className="absolute inset-0 bg-black/60 flex flex-col justify-end p-6 text-white">
                <h1 className="text-xl font-semibold mb-4">{item.name}</h1>
                <button
                  className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200 transition"
                  onClick={() => openModal(item.name, item.description, item.image)}
                >
                  <Eye size={20} />
                  Learn More
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
