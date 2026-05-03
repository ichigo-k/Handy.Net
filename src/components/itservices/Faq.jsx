import React, { useState } from"react";
import { motion, AnimatePresence } from"framer-motion";
import { Plus, Minus } from"lucide-react";
import { questions } from"../../constants";

function Accordion({ question, answer }) {
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
 className={`flex-shrink-0 flex items-center justify-center w-8 h-8 border transition-colors duration-200 mt-0.5 ${accordionOpen ? 'border-orange-500 text-orange-500' : 'border-slate-300 text-slate-400 group-hover:border-slate-500 group-hover:text-slate-600'}`}
 >
 {accordionOpen ? <Minus size={16} /> : <Plus size={16} />}
 </motion.span>
 </button>
 <AnimatePresence>
 {accordionOpen && (
 <motion.div
 initial={{ height: 0, opacity: 0 }}
 animate={{ height:"auto", opacity: 1 }}
 exit={{ height: 0, opacity: 0 }}
 transition={{ duration: 0.3, ease:"easeInOut"}}
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

function Faq() {
 const [showAll, setShowAll] = useState(false);

 return (
 <section id="faq"className="w-full py-24 bg-white border-t border-slate-100">
 <div className="max-w-6xl mx-auto px-6">
 <header className="mb-16 flex flex-col items-start">
 <h2 className="text-xs font-bold tracking-[0.2em] hollow uppercase mb-3">FAQ</h2>
 <h3 className="text-3xl md:text-4xl font-semibold text-slate-900">
 Common Questions
 </h3>
 </header>

 <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-20 items-start border-t border-slate-200">
 {questions.slice(0, showAll ? questions.length : 8).map((item, index) => (
 <Accordion key={index} question={item.question} answer={item.answer} />
 ))}
 </div>

 {questions.length > 8 && (
 <div className="mt-12 flex justify-start">
 <button
 onClick={() => setShowAll(!showAll)}
 className="px-6 py-3 border-2 border-slate-900 text-slate-900 font-bold text-sm tracking-widest uppercase hover:bg-slate-900 hover:text-white transition-colors duration-300"
 >
 {showAll ?"Show Less":"View All Questions"}
 </button>
 </div>
 )}
 </div>
 </section>
 );
}

export default Faq;
