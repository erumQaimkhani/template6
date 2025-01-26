
import React from "react";

const Pay: React.FC = () => {
  return (
    <div className="bg-[#faf4f4] py-12">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-start gap-8 px-6">

        <div className="text-left max-w-sm">
          <h2 className="text-2xl lg:text-3xl font-medium text-black">Free Delivery</h2>
          <p className="text-gray-500 text-lg mt-2">
            For all orders over $50, consectetur adipiscing elit.
          </p>
        </div>


        <div className="text-left max-w-sm">
          <h2 className="text-2xl lg:text-3xl font-medium text-black">90 Days Return</h2>
          <p className="text-gray-500 text-lg mt-2">
            If goods have problems, consectetur adipiscing elit.
          </p>
        </div>

        <div className="text-left max-w-sm">
          <h2 className="text-2xl lg:text-3xl font-medium text-black">Secure Payment</h2>
          <p className="text-gray-500 text-lg mt-2">
            100% secure payment, consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pay;