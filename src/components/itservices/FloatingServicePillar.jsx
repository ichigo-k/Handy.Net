import React from 'react';
import { motion } from 'framer-motion';

function FloatingServicePillar({ pillar, position, delay, direction = 'horizontal' }) {
    const yAnimation = direction === 'vertical'
        ? [0, -10, 0]
        : [0, 10, 0];

    const xAnimation = direction === 'horizontal'
        ? [20, 0][0]
        : -20;

    return (
        <motion.div
            className={`absolute ${position} z-30 flex items-center gap-3 border border-slate-200 bg-white/90 backdrop-blur-sm text-slate-800 font-medium px-5 py-3 shadow-xl`}
            initial={{ opacity: 0, x: xAnimation }}
            animate={{ opacity: 1, x: 0, y: yAnimation }}
            transition={{
                opacity: { duration: 0.8, delay: delay },
                y: { duration: direction === 'vertical' ? 4 : 5, repeat: Infinity, ease: "easeInOut", delay: direction === 'vertical' ? 1 : 0.5 }
            }}
        >
            <span className="text-primary-500">{pillar.icon}</span>
            <span className="text-sm tracking-wide">{pillar.label}</span>
        </motion.div>
    );
}

export default FloatingServicePillar;
