import React from 'react';
import { motion } from 'framer-motion';

function AboutUsContent() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
        >
            <h2 className="text-xs font-bold tracking-[0.2em] text-primary-500 uppercase mb-4 flex items-center gap-2">
                <span className="w-4 h-[2px] bg-primary-500"></span>
                About Us
            </h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-[1.1] mb-6">
                Engineering <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-700">Seamless Connectivity</span>
            </h3>
            <p className="text-slate-600 text-lg leading-relaxed mb-10 max-w-lg font-light">
                We bridge the gap between complex infrastructure and effortless usability. From office networks to full smart home automation, Handy.Net delivers precision-engineered results.
            </p>
        </motion.div>
    );
}

export default AboutUsContent;
