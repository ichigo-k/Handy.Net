import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { questions } from "../../constants";

function Accordion({ question, answer }) {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="bg-white shadow-md rounded-lg p-4 border border-gray-200">
      <button
        className="flex justify-between w-full items-left gap-x-3 py-2"
        onClick={() => setAccordionOpen(!accordionOpen)}
      >
        <span className="font-semibold text-lg text-slate-800">{question}</span>
        <motion.span
          animate={{ rotate: accordionOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown size={24} className="text-yellow-500" />
        </motion.span>
      </button>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: accordionOpen ? "auto" : 0, opacity: accordionOpen ? 1 : 0 }}
        className="overflow-hidden text-gray-700 text-md px-2 mt-2"
      >
        {answer}
      </motion.div>
    </div>
  );
}

function Faq() {
  const [showAll, setShowAll] = useState(false);

  return (
    <section id="faq" className="w-full py-12 bg-gray-50">
      <div className="container mx-auto flex flex-col items-center">
        <div className="text-left mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Frequently Asked Questions</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mt-3"></div>
        </div>
        <div className="grid grid-cols-1 gap-5 max-w-3xl w-full">
          {questions.slice(0, showAll ? questions.length : 6).map((item, index) => (
            <Accordion key={index} question={item.question} answer={item.answer} />
          ))}
        </div>
        {questions.length > 6 && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="mt-6 text-yellow-500 font-semibold flex items-center hover:underline"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        )}
      </div>
    </section>
  );
}

export default Faq;
