import { Star } from 'lucide-react';
import { motion } from 'framer-motion';
import React from 'react';

const testimonials = [
  {
    name: 'Emily Esi Boyevi',
    role: 'IT Manager',
    feedback:
      'I’ve worked with several IT service providers, but Handy.Net IT Solutions stands out for their professionalism and expertise. Their team was instrumental in setting up a new network system that has been running smoothly ever since.',
    rating: 5,
  },
  {
    name: 'Samuel Adu-Mensah',
    role: 'School Administrator',
    feedback:
      'We needed a reliable IT consultant for our school, and Handy.Net IT Solutions delivered beyond our expectations. They are thorough, detail-oriented, and offer great advice on maintaining our IT equipment.',
    rating: 5,
  },
  {
    name: 'Evelyn Mensah-Addo',
    role: 'Student',
    feedback:
      'I needed a new laptop for my studies, and Handy.Net IT Solutions helped me find the perfect one within my budget. Their staff was very knowledgeable and friendly. I will definitely return for future tech needs.',
    rating: 4,
  },
];

function Testimonials() {
  return (
    <section className="w-full bg-gradient-to-b from-yellow-100 to-yellow-200 py-12" id="testimonials">
      <div className="contain mx-auto px-6">
        {/* Section Header */}
        <header className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-slate-800">What Our Clients Say</h2>
          <div className="w-16 h-1 bg-yellow-500 mx-auto mt-3 rounded-full"></div>
        </header>

        {/* Testimonials Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white/80 shadow-lg rounded-2xl p-6 backdrop-blur-md border border-white/30 transform hover:scale-105 transition-all duration-300"
            >
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-slate-800">{testimonial.name}</h3>
                <p className="text-slate-500 text-sm">{testimonial.role}</p>
              </div>
              <p className="text-slate-700 text-base mb-4">{testimonial.feedback}</p>
              
              {/* Star Ratings */}
              <div className="flex space-x-1 text-yellow-500">
                {[...Array(5)].map((_, starIndex) => (
                  <Star
                    key={starIndex}
                    className={`w-5 h-5 ${starIndex < testimonial.rating ? 'fill-yellow-500' : 'fill-gray-300'}`}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
