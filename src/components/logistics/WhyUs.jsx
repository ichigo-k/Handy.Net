import React from "react";
import { Truck, Package, BadgeDollarSign } from "lucide-react";

const features = [
  {
    icon: <Truck size={40} className="text-yellow-400 max-md:hidden" />, 
    title: "Fast & Reliable Delivery",
    description:
      "We ensure your packages arrive on time, every time, with our trusted delivery network.",
    image:
      "https://i.pinimg.com/736x/dd/1f/de/dd1fde910b283474d573d7fea0d109a6.jpg",
  },
  {
    icon: <BadgeDollarSign size={40} className="text-yellow-400 max-md:hidden" />, 
    title: "Affordable Pricing",
    description:
      "Get the best rates for all your logistics needs without compromising on quality service.",
    image:
      "https://i.pinimg.com/736x/28/ff/91/28ff91a239785459a346d12608cc8251.jpg",
  },
  {
    icon: <Package size={40} className="text-yellow-400 max-md:hidden" />, 
    title: "Efficient Supply Chain",
    description:
      "From warehousing to last-mile delivery, we optimize logistics for seamless operations.",
    image:
      "https://i.pinimg.com/736x/e2/e8/7c/e2e87cb489b758fe1425901cdfeef87f.jpg",
  },
];

function WhyUs() {
  return (
    <section className="w-full py-10 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 grid gap-10 md:gap-15">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-10 ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            <img
              src={feature.image}
              alt={feature.title}
              className="w-full md:w-1/2 h-64 object-cover rounded-2xl shadow-md"
            />
            <div className="md:w-1/2 text-center md:text-left space-y-4">
              <div className="flex items-center justify-center md:justify-start gap-3">
                {feature.icon}
                <h3 className="text-3xl font-semibold text-gray-900 hollow">
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyUs;
