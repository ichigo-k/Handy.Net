import React from "react";
import { motion } from "framer-motion";
import { Package, Truck, Warehouse, FileText, ClipboardCheck, Boxes } from "lucide-react";

const services = [
  {
    icon: ClipboardCheck,
    title: "Custom Clearance",
    description: "Smooth customs processing with expert handling.",
  },
  {
    icon: Truck,
    title: "Logistics Services",
    description: "End-to-end logistics solutions for all industries.",
  },
  {
    icon: Package,
    title: "Goods Transportation",
    description: "Safe and efficient transport for your goods.",
  },
  {
    icon: Warehouse,
    title: "Warehousing",
    description: "Secure storage solutions with easy access.",
  },
  {
    icon: FileText,
    title: "Documentation",
    description: "Hassle-free paperwork and legal processing.",
  },
  {
    icon: Boxes,
    title: "Freight Packaging",
    description: "High-quality packaging for safe transit.",
  },
];

function SubCta() {
  return (
    <section 
      className="w-full py-16 bg-orange-500 relative" id="services"
     style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23ffffff20' stroke-width='1'%3E%3Cpath d='M0 0h40v40H0z'/%3E%3Cpath d='M20 0v40M0 20h40'/%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: "40px 40px",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-white mb-10"
        >
          Services We Offer
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="bg-white shadow-lg rounded-xl p-6 flex flex-row items-center gap-x-4 transition duration-300 text-left"
            >
              {/* Icon */}
              <motion.div
                className="h-[60px] w-[60px] flex items-center justify-center  bg-white"
                whileHover={{ scale: 1.1 }}
              >
                <service.icon className="h-8 w-8 text-orange-500" />
              </motion.div>
              
              {/* Title & Description */}
              <div>
                <h3 className="text-xl font-semibold text-orange-500">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SubCta;
