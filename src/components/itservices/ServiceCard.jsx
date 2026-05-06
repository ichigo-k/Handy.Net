import React from 'react';
import { motion } from 'framer-motion';

const accent = "bg-primary-500";

const cardVariants = {
    hidden: {
        opacity: 0,
        y: 14,
        scale: 0.98,
        filter: "blur(4px)",
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        transition: {
            duration: 0.45,
            ease: [0.22, 1, 0.36, 1],
        },
    },
    exit: {
        opacity: 0,
        y: -10,
        scale: 0.98,
        filter: "blur(3px)",
        transition: {
            duration: 0.25,
            ease: [0.4, 0, 1, 1],
        },
    },
};

function ServiceCard({ item, index }) {
    return (
        <motion.div
            layout="position"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ delay: index * 0.03 }}
            className="group relative overflow-hidden border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-md flex flex-col h-full"
        >
            <div className="p-8 flex flex-col flex-grow relative">
                <div className="flex items-start justify-between gap-4 mb-6 relative z-10">
                    <div>
                        <span className="inline-flex items-center gap-2 border border-slate-200 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-slate-500">
                            <span className={`h-1.5 w-1.5 rounded-full ${accent}`}></span>
                            {item.category}
                        </span>
                        <h3 className="mt-4 text-xl font-semibold text-slate-900 leading-tight group-hover:text-slate-700 transition-colors">
                            {item.name}
                        </h3>
                    </div>
                </div>

                <p className="text-slate-600 leading-relaxed mb-8 flex-grow font-light text-[0.98rem]">
                    {item.description}
                </p>
            </div>
        </motion.div>
    );
}

export default ServiceCard;
