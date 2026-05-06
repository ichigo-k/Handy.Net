import React from 'react';
import { motion } from 'framer-motion';

function StatCard({ stat, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white border border-slate-200 p-6 shadow-sm hover:shadow-md hover:border-primary-300 transition-all group"
        >
            <div className="w-12 h-12 bg-primary-50 border border-primary-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
            </div>
            <h4 className="text-lg font-bold text-slate-800 mb-2">{stat.label}</h4>
            <p className="text-sm text-slate-500 leading-relaxed">{stat.desc}</p>
        </motion.div>
    );
}

export default StatCard;
