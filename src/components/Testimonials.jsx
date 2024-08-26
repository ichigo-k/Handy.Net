import { Star } from 'lucide-react';
import React from 'react';

function Testimonials() {
  return (
    <section className="w-full bg-yellow-100 p-6 pb-12" id="testimonials">
      <div className="container mx-auto">
        <header className="text-center mb-8">
          <h2 className="text-4xl font-bold text-slate-800">Testimonials</h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mt-4"></div>
        </header>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Testimonial 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col">
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-slate-800">Emily Esi Boyevi</h3>
              <p className="text-slate-500 text-sm">IT Manager</p>
            </div>
            <p className="text-slate-700 text-base mb-4">
              I’ve worked with several IT service providers, but Handy.Net IT Solutions stands out for their professionalism and expertise. Their team was instrumental in helping us set up a new network system that has been running smoothly ever since.
            </p>
            <div className="flex space-x-1 text-green-600">
              <Star className="w-5 h-5 fill-green-600" />
              <Star className="w-5 h-5 fill-green-600" />
              <Star className="w-5 h-5 fill-green-600" />
              <Star className="w-5 h-5 fill-green-600" />
              <Star className="w-5 h-5 fill-green-600" />
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col">
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-slate-800">Samuel Adu-Mensah</h3>
              <p className="text-slate-500 text-sm">School Administrator</p>
            </div>
            <p className="text-slate-700 text-base mb-4">
              We needed a reliable IT consultant for our school, and Hany.Net IT Solutions delivered beyond our expectations. They are thorough and detail-oriented and offer great advice on maintaining our IT equipment.
            </p>
            <div className="flex space-x-1 text-green-600">
              <Star className="w-5 h-5 fill-green-600" />
              <Star className="w-5 h-5 fill-green-600" />
              <Star className="w-5 h-5 fill-green-600" />
              <Star className="w-5 h-5 fill-green-600" />
              <Star className="w-5 h-5 fill-green-600" />
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col">
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-slate-800">Evelyn Mensah-Addo</h3>
              <p className="text-slate-500 text-sm">Student</p>
            </div>
            <p className="text-slate-700 text-base mb-4">
              I needed a new laptop for my studies, and Hany.Net IT Solutions helped me find the perfect one within my budget. Their staff was very knowledgeable and friendly. I will definitely return for any future tech needs.
            </p>
            <div className="flex space-x-1 text-green-600">
              <Star className="w-5 h-5 fill-green-600" />
              <Star className="w-5 h-5 fill-green-600" />
              <Star className="w-5 h-5 fill-green-600" />
              <Star className="w-5 h-5 fill-green-600" />
              <Star className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
