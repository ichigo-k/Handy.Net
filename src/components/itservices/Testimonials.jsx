import { Star, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import React, { useState, useEffect } from 'react';

const testimonials = [
 {
 title: 'Exceptional IT Service',
 name: 'Emily Esi Boyevi',
 role: 'IT Manager',
 feedback:
"I've worked with several IT service providers, but Handy.Net stands out for their professionalism and expertise. Our office setup was handled flawlessly.",
 rating: 5,
 },
 {
 title: 'Brilliant Smart Home Setup',
 name: 'Kwame Asante',
 role: 'Homeowner, East Legon',
 feedback:
 'The team automated my entire home — lighting, security cameras, and climate control. Everything works perfectly from my phone. Absolutely worth it.',
 rating: 5,
 },
 {
 title: 'Reliable Electrical Installation',
 name: 'Evelyn Mensah-Addo',
 role: 'Business Owner',
 feedback:
 'Handy.Net handled our full office electrical rewiring and solar backup installation. Professional, on time, and the quality of work is outstanding.',
 rating: 5,
 },
 {
 title: 'Great Customer Support',
 name: 'Samuel Adu-Mensah',
 role: 'School Administrator',
 feedback:
 'We needed a reliable IT consultant for our school and Handy.Net delivered beyond our expectations. Their after-service support is second to none.',
 rating: 4,
 },
];

function Testimonials() {
 const [index, setIndex] = useState(0);

 useEffect(() => {
 const timer = setInterval(() => {
 setIndex((prev) => (prev + 1) % testimonials.length);
 }, 5000);
 return () => clearInterval(timer);
 }, []);

 return (
 <section className="w-full bg-white py-24 overflow-hidden border-t border-slate-100"id="testimonials">
 <div className="max-w-4xl mx-auto px-6">
 <header className="mb-12 flex flex-col items-start">
 <h2 className="text-xs font-bold tracking-[0.2em] hollow uppercase mb-3">Testimonials</h2>
 <h3 className="text-3xl md:text-4xl font-semibold text-slate-900">
 What Our Clients Say
 </h3>
 </header>

 <div className="relative">
 <AnimatePresence mode="wait">
 <motion.div
 key={index}
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 exit={{ opacity: 0 }}
 transition={{ duration: 0.4 }}
 className="bg-slate-50 p-8 md:p-12 border border-slate-200 relative"
 >
 <Quote className="text-orange-400/30 w-8 h-8 mb-6"/>

 <blockquote className="text-xl md:text-2xl font-medium text-slate-800 leading-relaxed mb-8">
 {testimonials[index].feedback}
 </blockquote>

 <div className="flex flex-col sm:flex-row sm:items-center justify-between border-t border-slate-200 pt-6">
 <div>
 <cite className="not-italic block text-lg font-semibold text-slate-900">
 {testimonials[index].name}
 </cite>
 <span className="text-sm text-slate-500 mt-1 block">
 {testimonials[index].role}
 </span>
 </div>
 <div className="flex space-x-1 mt-4 sm:mt-0">
 {[...Array(5)].map((_, i) => (
 <Star
 key={i}
 className={`w-4 h-4 ${i < testimonials[index].rating ? 'fill-yellow-500 text-yellow-500' : 'fill-slate-200 text-slate-200'}`}
 />
 ))}
 </div>
 </div>
 </motion.div>
 </AnimatePresence>

 {/* Navigation Lines */}
 <div className="flex space-x-2 mt-8">
 {testimonials.map((_, i) => (
 <button
 key={i}
 onClick={() => setIndex(i)}
 className={`h-1 transition-all duration-300 ${
 i === index ? 'w-10 gradient-bg' : 'w-6 bg-slate-200 hover:bg-slate-300'
 }`}
 aria-label={`Go to slide ${i + 1}`}
 />
 ))}
 </div>
 </div>
 </div>
 </section>
 );
}

export default Testimonials;
