import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { services } from "../../constants";
import ServiceCard from "./ServiceCard";
import ServiceCategoryTabs from "./ServiceCategoryTabs";

function OurServices() {
  const [activeCategory, setActiveCategory] = React.useState("All");

  const filtered =
    activeCategory === "All"
      ? services
      : services.filter((s) => s.category === activeCategory);

  return (
    <section id="services" className="py-32 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <header className="mb-16 flex flex-col items-center text-center">
          <h2 className="text-xs font-black tracking-[0.3em] text-primary-500 uppercase mb-4 flex items-center gap-3">
            <span className="w-8 h-[1px] bg-primary-500"></span>
            Professional Services
            <span className="w-8 h-[1px] bg-primary-500"></span>
          </h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Tailored Solutions for <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-700">Modern Infrastructure</span>
          </h3>
        </header>

        {/* Category Tabs */}
        <ServiceCategoryTabs activeCategory={activeCategory} onCategoryChange={setActiveCategory} />

        {/* Services Grid */}
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={activeCategory}
            layout
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {filtered.map((item, index) => (
              <ServiceCard key={item.name} item={item} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

export default OurServices;
