import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import TestimonialCard from './TestimonialCard';
import TestimonialNavigation from './TestimonialNavigation';

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
        <section className="w-full bg-white py-24 overflow-hidden border-t border-slate-100" id="testimonials">
            <div className="max-w-4xl mx-auto px-6">
                <header className="mb-12 flex flex-col items-start">
                    <h2 className="text-xs font-bold tracking-[0.2em] hollow uppercase mb-3">Testimonials</h2>
                    <h3 className="text-3xl md:text-4xl font-semibold text-slate-900">
                        What Our Clients Say
                    </h3>
                </header>

                <div className="relative">
                    <AnimatePresence mode="wait">
                        <TestimonialCard key={index} testimonial={testimonials[index]} />
                    </AnimatePresence>

                    <TestimonialNavigation testimonials={testimonials} currentIndex={index} onNavigate={setIndex} />
                </div>
            </div>
        </section>
    );
}

export default Testimonials;
