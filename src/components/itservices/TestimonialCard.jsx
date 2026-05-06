import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

function TestimonialCard({ testimonial }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-slate-50 p-8 md:p-12 border border-slate-200 relative"
        >
            <Quote className="text-primary-400/30 w-8 h-8 mb-6" />

            <blockquote className="text-xl md:text-2xl font-medium text-slate-800 leading-relaxed mb-8">
                {testimonial.feedback}
            </blockquote>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-t border-slate-200 pt-6">
                <div>
                    <cite className="not-italic block text-lg font-semibold text-slate-900">
                        {testimonial.name}
                    </cite>
                    <span className="text-sm text-slate-500 mt-1 block">
                        {testimonial.role}
                    </span>
                </div>
                <div className="flex space-x-1 mt-4 sm:mt-0">
                    {[...Array(5)].map((_, i) => (
                        <Star
                            key={i}
                            className={`w-4 h-4 ${i < testimonial.rating ? 'fill-primary-500 text-primary-500' : 'fill-slate-200 text-slate-200'}`}
                        />
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

export default TestimonialCard;
