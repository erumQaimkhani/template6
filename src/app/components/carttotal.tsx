import React from "react";
import Image from "next/image";

export default function CartTotal() {
  return (
    <div className="main-container w-full max-w-[1440px] h-[525px] mx-auto relative bg-white">
  
      <div className="w-full max-w-[1240px] h-[390px] mx-auto mt-20 relative">
     
        <div className="w-full max-w-[817px] h-[216px] relative">
     
          <div className="flex items-center justify-between bg-[#fff9e5] px-6 py-4 rounded-lg">
            <Image
              src="/asgaard sofa.jpg"
              alt="Asgaard Sofa"
              width={106}
              height={106}
              className="rounded-lg"
            />
            <span className="text-gray-500 text-sm">Asgaard Sofa</span>
            <span className="text-gray-500 text-sm">Rs. 250,000.00</span>
            <div className="flex items-center space-x-2">
              <button className="w-8 h-8 border rounded flex items-center justify-center">
                1
              </button>
            </div>
            <span className="text-black text-sm">Rs. 250,000.00</span>
          </div>
        </div>

        <div className="w-full max-w-[393px] bg-[#fff9e5] rounded-lg p-6 absolute top-0 right-0">
          <h2 className="text-2xl font-semibold text-center mb-6">Cart Totals</h2>
          <div className="flex justify-between mb-4">
            <span className="font-medium">Subtotal</span>
            <span className="text-gray-500">Rs. 250,000.00</span>
          </div>
          <div className="flex justify-between mb-8">
            <span className="font-medium">Total</span>
            <span className="text-[#b88e2f] font-medium">Rs. 250,000.00</span>
          </div>
          <button className="w-full bg-black text-white text-lg py-3 rounded-lg">
            Check Out
          </button>
        </div>
      </div>
    </div>
  );
}
