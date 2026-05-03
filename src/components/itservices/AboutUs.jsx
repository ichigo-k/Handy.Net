import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, MapPin, Zap, Users } from 'lucide-react';

const stats = [
  { icon: <MapPin className="text-orange-500" size={24} />, label: "Ghana-Based", desc: "Locally trusted solutions provider" },
  { icon: <Users className="text-orange-500" size={24} />, label: "Expert Team", desc: "Certified IT & electrical engineers" },
  { icon: <Zap className="text-orange-500" size={24} />, label: "Integration", desc: "Seamless smart home & automation" },
  { icon: <ShieldCheck className="text-orange-500" size={24} />, label: "Support", desc: "Responsive ongoing maintenance" },
];

function AboutUs() {
  return (
    <section id="about" className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Text & Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-xs font-bold tracking-[0.2em] text-orange-500 uppercase mb-4 flex items-center gap-2">
              <span className="w-4 h-[2px] bg-orange-500"></span>
              About Us
            </h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-[1.1] mb-6">
              Engineering <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">Seamless Connectivity</span>
            </h3>
            <p className="text-slate-600 text-lg leading-relaxed mb-10 max-w-lg font-light">
              We bridge the gap between complex infrastructure and effortless usability. From office networks to full smart home automation, Handy.Net delivers precision-engineered results.
            </p>


          </motion.div>

          {/* Right: Bento Grid Features */}
          <div className="relative mt-10 lg:mt-0">
            {/* Boxy decorative background */}
            <div className="absolute top-0 right-0 w-[90%] h-[90%] bg-slate-900 -z-10 transform translate-x-4 -translate-y-4 border border-slate-700"></div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
              {stats.map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white border border-slate-200 p-6 shadow-sm hover:shadow-md hover:border-orange-300 transition-all group"
                >
                  <div className="w-12 h-12 bg-orange-50 border border-orange-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <h4 className="text-lg font-bold text-slate-800 mb-2">{stat.label}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">{stat.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Decorative dots */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[radial-gradient(circle,#cbd5e1_2px,transparent_2px)] [background-size:16px_16px] -z-10"></div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default AboutUs;
