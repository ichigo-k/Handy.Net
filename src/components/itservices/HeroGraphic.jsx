import React from 'react';
import { Cpu, Zap, Wifi } from 'lucide-react';
import { motion } from 'framer-motion';
import FloatingServicePillar from './FloatingServicePillar';

const pillars = [
    { icon: <Cpu size={18} />, label: "IT Solutions" },
    { icon: <Zap size={18} />, label: "Electrical" },
    { icon: <Wifi size={18} />, label: "Sales & Retail" },
];

function HeroGraphic() {
    return (
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
                    <Cpu className="text-primary-400 w-12 h-12 relative z-10" />
                </motion.div>

                {/* Rotating Outer Square 1 */}
                <motion.div
                    className="absolute z-10 w-64 h-64 border border-slate-200"
                    initial={{ opacity: 0, scale: 0.8, rotate: 45 }}
                    animate={{ opacity: 1, scale: 1, rotate: 405 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                >
                    <div className="absolute -top-2 -left-2 w-4 h-4 bg-white border border-primary-400"></div>
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
                        <Zap className="text-primary-400 w-4 h-4" />
                    </div>
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-4 w-8 h-8 bg-slate-900 flex items-center justify-center border border-slate-700">
                        <Wifi className="text-primary-400 w-4 h-4" />
                    </div>
                </motion.div>

                {/* Floating Service Pillars */}
                <FloatingServicePillar
                    pillar={pillars[0]}
                    position="top-10 right-0 lg:right-4"
                    delay={1.0}
                    direction="vertical"
                />

                <FloatingServicePillar
                    pillar={pillars[1]}
                    position="bottom-24 left-0 lg:left-4"
                    delay={1.2}
                    direction="vertical"
                />

                <FloatingServicePillar
                    pillar={pillars[2]}
                    position="top-1/2 -right-4 lg:-right-8 translate-y-12"
                    delay={1.4}
                    direction="vertical"
                />
            </div>
        </div>
    );
}

export default HeroGraphic;
