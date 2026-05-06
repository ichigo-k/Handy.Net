import React from 'react';
import { ArrowRightCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] } },
};

function HeroContent() {
    return (
        <motion.div
            className="w-full lg:w-1/2 text-center lg:text-left flex flex-col justify-center"
            variants={{
                hidden: { opacity: 0 },
                visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
                },
            }}
            initial="hidden"
            animate="visible"
        >
            {/* Main Heading */}
            <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl xl:text-7xl font-extrabold leading-[1.1] text-slate-900 tracking-tight">
                Next-Gen <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-700">Infrastructure</span>
            </motion.h1>

            {/* Description */}
            <motion.p variants={itemVariants} className="max-w-xl mx-auto lg:mx-0 mt-6 text-lg md:text-xl text-slate-600 leading-relaxed font-light">
                Powering the Future of Your Business and Home. From high-speed IT networking to certified electrical systems and smart automation, Handy.Net delivers cutting-edge infrastructure with precision and reliability.
            </motion.p>

            {/* CTA Button */}
            <motion.div variants={itemVariants} className="mt-12 flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
                <a
                    href="#services"
                    className="group relative inline-flex items-center justify-center bg-slate-900 text-white font-semibold tracking-widest uppercase px-8 py-4 overflow-hidden transition-all duration-300 hover:bg-slate-800 border border-slate-900"
                >
                    <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-primary-500 group-hover:w-full group-hover:h-full opacity-10"></span>
                    <span className="relative flex items-center">
                        Explore Services <ArrowRightCircle size={20} className="ml-3 group-hover:translate-x-1 transition-transform" />
                    </span>
                </a>
            </motion.div>
        </motion.div>
    );
}

export default HeroContent;
