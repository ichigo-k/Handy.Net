import { Star } from 'lucide-react';
import { motion } from 'framer-motion';
import React from 'react';

const testimonials = [
  {
    title: 'Exceptional Service',
    name: 'Emily Esi Boyevi',
    role: 'IT Manager',
    feedback:
      'I’ve worked with several IT service providers, but Handy.Net IT Solutions stands out for their professionalism and expertise.',
    rating: 5,
  },
  {
    title: 'Reliable IT Consulting',
    name: 'Samuel Adu-Mensah',
    role: 'School Administrator',
    feedback:
      'We needed a reliable IT consultant for our school, and Handy.Net IT Solutions delivered beyond our expectations.',
    rating: 5,
  },
  {
    title: 'Great Customer Support',
    name: 'Evelyn Mensah-Addo',
    role: 'Student',
    feedback:
      'I needed a new laptop for my studies, and Handy.Net IT Solutions helped me find the perfect one within my budget.',
    rating: 4,
  },
];

function Testimonials() {
  return (
    <section
     className="w-full bg-yellow-400 py-12 text-white" id="testimonials"

     style={{
  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23ffffff30' stroke-width='2'%3E%3Ccircle cx='15' cy='15' r='6'/%3E%3Ccircle cx='45' cy='45' r='6'/%3E%3Cpath d='M8 45l5 5m0 -5l-5 5'/%3E%3Cpath d='M30 8l4 8h-8z'/%3E%3Cpath d='M38 22l4 4m0 -4l-4 4'/%3E%3C/g%3E%3C/svg%3E")`,
  backgroundSize: "60px 60px",
}}

  

     >
      <div className="max-w-6xl mx-auto px-6">
        <header className="text-center mb-12">
          <h2 className="text-4xl font-extrabold">What Our Clients Say</h2>
          <div className="w-16 h-1 bg-white mx-auto mt-3 rounded-full"></div>
        </header>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white text-black shadow-lg rounded-2xl p-6 "
            >
              <div className="mb-4">
                <h3 className="text-xl font-bold text-yellow-400">{testimonial.title}</h3>
              </div>
              <p className="text-gray-700 italic">"{testimonial.feedback}"</p>
              <div className="mt-4">
                <p className="font-semibold text-lg">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
              <div className="flex space-x-1 text-yellow-500 mt-3">
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
