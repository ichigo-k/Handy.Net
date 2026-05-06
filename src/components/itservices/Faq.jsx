import React, { useState } from "react";
import { questions } from "../../constants";
import AccordionItem from "./AccordionItem";

function Faq() {
    const [showAll, setShowAll] = useState(false);

    return (
        <section id="faq" className="w-full py-24 bg-white border-t border-slate-100">
            <div className="max-w-6xl mx-auto px-6">
                <header className="mb-16 flex flex-col items-start">
                    <h2 className="text-xs font-bold tracking-[0.2em] hollow uppercase mb-3">FAQ</h2>
                    <h3 className="text-3xl md:text-4xl font-semibold text-slate-900">
                        Common Questions
                    </h3>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-20 items-start border-t border-slate-200">
                    {questions.slice(0, showAll ? questions.length : 8).map((item, index) => (
                        <AccordionItem key={index} question={item.question} answer={item.answer} />
                    ))}
                </div>

                {questions.length > 8 && (
                    <div className="mt-12 flex justify-start">
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="px-6 py-3 border-2 border-slate-900 text-slate-900 font-bold text-sm tracking-widest uppercase hover:bg-slate-900 hover:text-white transition-colors duration-300"
                        >
                            {showAll ? "Show Less" : "View All Questions"}
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}

export default Faq;
