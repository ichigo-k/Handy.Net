import React from"react";
import { motion, AnimatePresence } from"framer-motion";
import { services } from"../../constants";
import { X, ArrowRight, Cpu, Zap, Home } from"lucide-react";

const categories = [
 { label:"All", icon: null },
 { label:"IT Services", icon: <Cpu size={16} /> },
 { label:"Electrical Services", icon: <Zap size={16} /> },
 { label:"Smart Home", icon: <Home size={16} /> },
];

function Modal({ info, onClose }) {
 if (!info) return null;

 return (
 <motion.div
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 exit={{ opacity: 0 }}
 className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4"
 onClick={onClose}
 >
 <motion.div
 initial={{ scale: 0.95, opacity: 0 }}
 animate={{ scale: 1, opacity: 1 }}
 exit={{ scale: 0.95, opacity: 0 }}
 className="bg-white shadow-2xl w-full max-w-xl relative overflow-hidden"
 onClick={(e) => e.stopPropagation()}
 >
 <img
 src={info.image}
 alt={info.title}
 className="w-full h-64 object-cover"
 />
 <span className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-sm text-white text-xs font-bold tracking-widest uppercase px-3 py-1">
 {info.category}
 </span>
 <button
 className="absolute top-4 right-4 bg-white text-slate-900 hover:bg-slate-900 hover:text-white transition-colors duration-200 p-2 border border-transparent hover:border-white"
 onClick={onClose}
 >
 <X size={20} />
 </button>
 <div className="p-8 md:p-10">
 <h2 className="text-3xl font-semibold text-slate-900 mb-4">{info.title}</h2>
 <p className="text-slate-600 text-lg mb-8 leading-relaxed">{info.desc}</p>
 <a
 href="/contact"
 className="flex items-center justify-center gap-2 w-full text-center bg-slate-900 text-white py-4 font-bold tracking-widest uppercase hover:bg-slate-800 transition-colors"
 >
 Get a Quote <ArrowRight size={18} />
 </a>
 </div>
 </motion.div>
 </motion.div>
 );
}

function OurServices() {
 const [modal, setModal] = React.useState(false);
 const [info, setInfo] = React.useState(null);
 const [activeCategory, setActiveCategory] = React.useState("All");

 function openModal(name, description, image, category) {
 setInfo({ title: name, desc: description, image, category });
 setModal(true);
 }

 function closeModal() {
 setModal(false);
 setInfo(null);
 }

 const filtered =
 activeCategory ==="All"
 ? services
 : services.filter((s) => s.category === activeCategory);

 return (
 <section id="services"className="py-24 bg-slate-50 border-t border-slate-100">
 <div className="max-w-6xl mx-auto px-6">
 {/* Header */}
 <header className="mb-12 flex flex-col items-center md:items-start text-center md:text-left">
 <h2 className="text-xs font-bold tracking-[0.2em] hollow uppercase mb-3">Our Services</h2>
 <h3 className="text-3xl md:text-4xl font-semibold text-slate-900">
 Solutions for Home & Business
 </h3>
 </header>

 {/* Category Tabs */}
 <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-12">
 {categories.map((cat) => (
 <button
 key={cat.label}
 onClick={() => setActiveCategory(cat.label)}
 className={`flex items-center gap-2 px-5 py-2.5 font-bold tracking-wider text-xs uppercase border transition-all duration-300 ${
 activeCategory === cat.label
 ?"bg-slate-900 text-white border-slate-900"
 :"border-slate-300 text-slate-600 hover:border-slate-900 hover:text-slate-900 bg-white"
 }`}
 >
 {cat.icon} {cat.label}
 </button>
 ))}
 </div>

 {/* Modal */}
 <AnimatePresence>
 {modal && <Modal info={info} onClose={closeModal} />}
 </AnimatePresence>

 {/* Services Grid */}
 <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
 <AnimatePresence>
 {filtered.map((item, index) => (
 <motion.div
 key={item.name}
 layout
 initial={{ opacity: 0, scale: 0.9 }}
 animate={{ opacity: 1, scale: 1 }}
 exit={{ opacity: 0, scale: 0.9 }}
 transition={{ duration: 0.3 }}
 className="bg-white border border-slate-200 overflow-hidden hover:border-orange-400 transition-colors duration-300 group flex flex-col"
 >
 <div className="relative overflow-hidden h-56">
 <img
 src={item.image}
 alt={item.name}
 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
 />
 <span className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-sm text-white text-xs font-bold tracking-widest uppercase px-3 py-1.5">
 {item.category}
 </span>
 </div>
 <div className="p-6 md:p-8 flex flex-col flex-grow">
 <h3 className="text-xl font-semibold text-slate-900 mb-3">{item.name}</h3>
 <p className="text-slate-600 leading-relaxed mb-6 flex-grow line-clamp-3">
 {item.description}
 </p>
 <button
 className="flex items-center gap-2 text-slate-900 font-bold uppercase tracking-widest text-sm group-hover:text-orange-500 transition-colors w-fit"
 onClick={() => openModal(item.name, item.description, item.image, item.category)}
 >
 Learn More <ArrowRight size={16} className="transition-transform group-hover:translate-x-1"/>
 </button>
 </div>
 </motion.div>
 ))}
 </AnimatePresence>
 </motion.div>
 </div>
 </section>
 );
}

export default OurServices;
