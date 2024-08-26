import React from 'react';
import { PlusCircle } from 'lucide-react';
import { questions } from '../constants';

function Accordion({ question, answer }) {
  const [accordionOpen, setAccordionOpen] = React.useState(false);

  return (
    <div className="p-4">
      <button
        className="flex justify-between w-full items-center gap-x-3"
        onClick={() => setAccordionOpen(!accordionOpen)}
      >
        <span className="font-semibold text-xl text-left">{question}</span>
        <span>
          {accordionOpen ? (
            <PlusCircle size={24} className="transform rotate-45 text-yellow-400" />
          ) : (
            <PlusCircle size={24} className="text-yellow-400" />
          )}
        </span>
      </button>
      <div
        className={`transition-all duration-300 ease-in-out ${
          accordionOpen ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-slate-700 text-lg">{answer}</p>
        </div>
      </div>
    </div>
  );
}

function Faq() {
  return (
    <section id="faq" className="w-full p-5 bg-white">
      <div className="contain mx-auto flex flex-col items-center mt-6">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-bold text-slate-800 text-center">Frequently Asked Questions</h2>
          <div className="w-[10rem] h-2 bg-yellow-400 my-4"></div>
        </div>
        <div className="grid grid-cols-1  gap-5 max-w-4xl">
          {questions.map((item, index) => {
            // Apply conditional Tailwind classes based on index
            const itemClass = index > 5 ? 'hidden md:block' : 'block';
            return (
              <div key={index} className={`p-2 rounded-xl shadow-lg ${itemClass}`}>
                <Accordion question={item.question} answer={item.answer} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Faq;
