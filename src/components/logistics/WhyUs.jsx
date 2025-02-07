import React from "react";
import { Truck, Package, BadgeDollarSign } from "lucide-react";

const features = [
  {
    icon: <Truck size={50} className="text-orange-500" />,
    title: "Fast & Reliable Delivery",
    description:
      "On-time delivery with a trusted logistics network ensuring seamless transportation.",
    image:
      "https://i.pinimg.com/736x/dd/1f/de/dd1fde910b283474d573d7fea0d109a6.jpg",
  },
  {
    icon: <BadgeDollarSign size={50} className="text-orange-500" />,
    title: "Affordable Pricing",
    description:
      "Cost-effective solutions tailored to your logistics and IT service needs.",
    image:
      "https://i.pinimg.com/736x/28/ff/91/28ff91a239785459a346d12608cc8251.jpg",
  },
  {
    icon: <Package size={50} className="text-orange-500" />,
    title: "Efficient Supply Chain",
    description:
      "Streamlined logistics from warehousing to final-mile delivery for smooth operations.",
    image:
      "https://i.pinimg.com/736x/af/9d/fe/af9dfed09b20e466e4177f62dc3e8444.jpg",
  },
];

function WhyUs() {
  return (
    <section className="w-full py-16 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">Why <span className="hollow">Choose</span> Us?</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
          We provide top-notch logistics and IT solutions, ensuring efficiency, affordability, and reliability.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition duration-300"
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
