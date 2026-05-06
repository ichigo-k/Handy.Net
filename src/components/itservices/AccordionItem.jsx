import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

function AccordionItem({ question, answer }) {
    const [accordionOpen, setAccordionOpen] = useState(false);

    return (
        <div className="border-b border-slate-200 py-6">
            <button
                className="flex justify-between w-full items-start gap-x-4 text-left group"
                onClick={() => setAccordionOpen(!accordionOpen)}
            >
                <span className={`text-lg font-semibold transition-colors duration-200 pr-4 ${accordionOpen ? 'text-slate-900' : 'text-slate-700 group-hover:text-slate-900'}`}>
                    {question}
                </span>
                <motion.span
                    animate={{ rotate: accordionOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex-shrink-0 flex items-center justify-center w-8 h-8 border transition-colors duration-200 mt-0.5 ${accordionOpen ? 'border-primary-500 text-primary-500' : 'border-slate-300 text-slate-400 group-hover:border-slate-500 group-hover:text-slate-600'}`}
                >
                    {accordionOpen ? <Minus size={16} /> : <Plus size={16} />}
                </motion.span>
            </button>
            <AnimatePresence>
                {accordionOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <p className="text-slate-600 text-base leading-relaxed pt-4 pb-2 pr-12">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default AccordionItem;
