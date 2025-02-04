import React from "react";
import { Truck, Package, BadgeDollarSign } from "lucide-react";

function WhyUs() {
  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="contain  mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
        {/* Card 1 */}
        <div className="bg-white rounded-lg p-6 shadow-sm  flex flex-col items-start text-left ">
          <span className="p-3 rounded-md bg-gray-50 text-gray-500">
            <Truck size={28} />
          </span>
          <h5 className="font-semibold text-lg mt-4 hollow">Fast & Reliable Delivery</h5>
          <p className="text-gray-600 mt-2">
            We ensure your packages arrive on time, every time, with our trusted delivery network.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-lg p-6 shadow-sm flex flex-col items-start text-left ">
          <span className="p-3 rounded-md bg-gray-50 text-gray-500">
            <BadgeDollarSign size={28} />
          </span>
          <h5 className="font-semibold text-lg mt-4 hollow">Affordable Pricing</h5>
          <p className="text-gray-600 mt-2">
            Get the best rates for all your logistics needs without compromising on quality service.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-lg p-6 shadow-sm flex flex-col items-start text-left ">
          <span className="p-3 rounded-md bg-gray-50 text-gray-500">
            <Package size={28} />
          </span>
          <h5 className="font-semibold text-lg mt-4 hollow">Efficient Supply Chain</h5>
          <p className="text-gray-600 mt-2">
            From warehousing to last-mile delivery, we optimize logistics for seamless operations.
          </p>
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
