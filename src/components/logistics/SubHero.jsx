import React from "react";

function SubHero() {
  return (
    <div className="xl:w-[70%] md:w-[80%] w-[90%] shadow-lg bg-white p-6 rounded-2xl mx-auto relative -top-16 md:py-[2rem] flex items-center justify-center">
      <div className="w-full grid md:grid-cols-3 grid-cols-1 text-center gap-6">
        <div>
          <span className="text-3xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">50,000+</span>
          <p className="text-gray-600 text-lg">Successful Deliveries</p>
        </div>
        <div>
          <span className="text-3xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">150+</span>
          <p className="text-gray-600 text-lg">Countries Served</p>
        </div>
        <div>
          <span className="text-3xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">10,000+</span>
          <p className="text-gray-600 text-lg">Happy Customers</p>
        </div>
      </div>
    </div>
  );
}

export default SubHero;
