import React from 'react';

function TestimonialNavigation({ testimonials, currentIndex, onNavigate }) {
    return (
        <div className="flex space-x-2 mt-8">
            {testimonials.map((_, i) => (
                <button
                    key={i}
                    onClick={() => onNavigate(i)}
                    className={`h-1 transition-all duration-300 ${i === currentIndex ? 'w-10 gradient-bg' : 'w-6 bg-slate-200 hover:bg-slate-300'
                        }`}
                    aria-label={`Go to slide ${i + 1}`}
                />
            ))}
        </div>
    );
}

export default TestimonialNavigation;
