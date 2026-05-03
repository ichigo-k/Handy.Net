import React from 'react';
import { ArrowRightCircle, Cpu, Zap, Home, Wifi } from 'lucide-react';
import { motion } from 'framer-motion';

const pillars = [
  { icon: <Cpu size={18} />, label: "IT Solutions" },
  { icon: <Zap size={18} />, label: "Electrical" },
  { icon: <Home size={18} />, label: "Smart Home" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] } },
};

function Hero() {
  return (
    <section className="w-full mt-6 max-lg:mt-[4rem] relative overflow-hidden bg-white">
      {/* Background grid - Boxy & Minimalist */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-50"></div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between p-6 md:p-12 relative z-10 min-h-[85vh]">
        {/* Left Side: Text Content */}
        <motion.div 
          className="w-full lg:w-1/2 text-center lg:text-left flex flex-col justify-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >


          {/* Main Heading */}
          <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl xl:text-7xl font-extrabold leading-[1.1] text-slate-900 tracking-tight">
            Next-Gen <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">Infrastructure</span>
          </motion.h1>

          {/* Description */}
          <motion.p variants={itemVariants} className="max-w-xl mx-auto lg:mx-0 mt-6 text-lg md:text-xl text-slate-600 leading-relaxed font-light">
            Elevating your business and home with robust IT networks, certified electrical systems, and intelligent automation. Precision engineering meets minimalist design.
          </motion.p>


          {/* CTA Button */}
          <motion.div variants={itemVariants} className="mt-12 flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
            <a
              href="#services"
              className="group relative inline-flex items-center justify-center bg-slate-900 text-white font-semibold tracking-widest uppercase px-8 py-4 overflow-hidden transition-all duration-300 hover:bg-slate-800 border border-slate-900"
            >
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-orange-500 group-hover:w-full group-hover:h-full opacity-10"></span>
              <span className="relative flex items-center">
                Explore Services <ArrowRightCircle size={20} className="ml-3 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>

          </motion.div>
        </motion.div>

        {/* Right Side: Animated Minimalist Tech Graphic */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative mt-20 lg:mt-0 h-[400px] md:h-[500px]">
          <div className="relative w-full max-w-lg h-full flex items-center justify-center">
            
            {/* Center Core */}
            <motion.div 
              className="absolute z-20 w-32 h-32 bg-slate-900 shadow-2xl flex items-center justify-center border border-slate-700"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            >
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-2 border border-slate-700 border-dashed"
              />
              <Cpu className="text-orange-400 w-12 h-12 relative z-10" />
            </motion.div>

            {/* Rotating Outer Square 1 */}
            <motion.div 
              className="absolute z-10 w-64 h-64 border border-slate-200"
              initial={{ opacity: 0, scale: 0.8, rotate: 45 }}
              animate={{ opacity: 1, scale: 1, rotate: 405 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute -top-2 -left-2 w-4 h-4 bg-white border border-orange-400"></div>
              <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-white border border-slate-400"></div>
            </motion.div>

            {/* Rotating Outer Square 2 */}
            <motion.div 
              className="absolute z-10 w-96 h-96 border border-slate-100/80"
              initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
              animate={{ opacity: 1, scale: 1, rotate: -360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute top-1/2 -left-4 -translate-y-1/2 w-8 h-8 bg-slate-900 flex items-center justify-center border border-slate-700">
                <Zap className="text-orange-400 w-4 h-4" />
              </div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-4 w-8 h-8 bg-slate-900 flex items-center justify-center border border-slate-700">
                <Wifi className="text-orange-400 w-4 h-4" />
              </div>
            </motion.div>

            {/* Floating Service Pillars */}
            <motion.div 
              className="absolute top-10 right-0 lg:right-4 z-30 flex items-center gap-3 border border-slate-200 bg-white/90 backdrop-blur-sm text-slate-800 font-medium px-5 py-3 shadow-xl"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0, y: [0, -10, 0] }}
              transition={{ opacity: { duration: 0.8, delay: 1.0 }, y: { duration: 4, repeat: Infinity, ease: "easeInOut" } }}
            >
              <span className="text-orange-500">{pillars[0].icon}</span> 
              <span className="text-sm tracking-wide">{pillars[0].label}</span>
            </motion.div>
            
            <motion.div 
              className="absolute bottom-24 left-0 lg:left-4 z-30 flex items-center gap-3 border border-slate-200 bg-white/90 backdrop-blur-sm text-slate-800 font-medium px-5 py-3 shadow-xl"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0, y: [0, 10, 0] }}
              transition={{ opacity: { duration: 0.8, delay: 1.2 }, y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 } }}
            >
              <span className="text-orange-500">{pillars[1].icon}</span> 
              <span className="text-sm tracking-wide">{pillars[1].label}</span>
            </motion.div>

            <motion.div 
              className="absolute top-1/2 -right-4 lg:-right-8 translate-y-12 z-30 flex items-center gap-3 border border-slate-200 bg-white/90 backdrop-blur-sm text-slate-800 font-medium px-5 py-3 shadow-xl"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0, y: [0, -15, 0] }}
              transition={{ opacity: { duration: 0.8, delay: 1.4 }, y: { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 } }}
            >
              <span className="text-orange-500">{pillars[2].icon}</span> 
              <span className="text-sm tracking-wide">{pillars[2].label}</span>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
