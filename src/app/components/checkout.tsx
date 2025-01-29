// import React from "react";

// const Checkout = () => {
//   return (
//     <div className="min-h-screen bg-gray-100 py-8">
//       <div className="container mx-auto px-4">
//         <h1 className="text-2xl font-bold mb-8">Checkout</h1>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Left Column - Checkout Form */}
//           <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-md">
//             <h2 className="text-xl font-semibold mb-6">Shipping Information</h2>

//             <form className="space-y-4">
//               {/* Full Name */}
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Full Name</label>
//                 <input
//                   type="text"
//                   className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   placeholder="John Doe"
//                 />
//               </div>

//               {/* Email */}
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Email</label>
//                 <input
//                   type="email"
//                   className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   placeholder="john.doe@example.com"
//                 />
//               </div>

//               {/* Address */}
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Address</label>
//                 <input
//                   type="text"
//                   className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   placeholder="123 Main St"
//                 />
//               </div>

//               {/* City and Zip Code */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">City</label>
//                   <input
//                     type="text"
//                     className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     placeholder="New York"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">Zip Code</label>
//                   <input
//                     type="text"
//                     className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     placeholder="10001"
//                   />
//                 </div>
//               </div>

//               {/* Payment Method */}
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Payment Method</label>
//                 <select
//                   className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 >
//                   <option value="credit_card">Credit Card</option>
//                   <option value="paypal">PayPal</option>
//                   <option value="cash_on_delivery">Cash on Delivery</option>
//                 </select>
//               </div>

//               {/* Submit Button */}
//               <div>
//                 <button
//                   type="submit"
//                   className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 >
//                   Place Order
//                 </button>
//               </div>
//             </form>
//           </div>

//           {/* Right Column - Order Summary */}
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <h2 className="text-xl font-semibold mb-6">Order Summary</h2>

//             {/* Order Items */}
//             <div className="space-y-4">
//               <div className="flex justify-between">
//                 <span>Product 1</span>
//                 <span>$20.00</span>
//               </div>
//               <div className="flex justify-between">
//                 <span>Product 2</span>
//                 <span>$15.00</span>
//               </div>
//               <div className="flex justify-between">
//                 <span>Shipping</span>
//                 <span>$5.00</span>
//               </div>
//             </div>

//             {/* Divider */}
//             <hr className="my-4 border-t border-gray-200" />

//             {/* Total */}
//             <div className="flex justify-between font-semibold">
//               <span>Total</span>
//               <span>$40.00</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Checkout;



"use client"
import React, { useState } from "react";
import Modal from "./modal"; // Import the Modal component
import Checkout from "./checkout"; // Import the Checkout component

export default function Gettouch() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="bg-gray-100 py-12 text-center justify-center">
      <h2 className="text-2xl font-bold text-gray-900">Get in touch</h2>
      <p className="text-sm text-gray-600 justify-center">
        For More Information About Our Product & Services. Please Feel Free To
        Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not
        Hesitate!
      </p>

      <div className="main-container w-[1058px] h-[923px] relative mx-auto mt-3">
        <div className="form-section w-[635px] h-[923px] bg-white absolute top-0 left-[423px] z-10">
          {/* Your existing form fields */}

          <button
            onClick={openModal}
            className="submit-btn w-[237px] h-[48px] rounded-[15px] border border-gray-400 bg-white text-black mt-[49px] mx-auto ml-[81px]"
          >
            <span className="block mt-[11px] text-center text-gray-500">
              Checkout
            </span>
          </button>
        </div>

        <div className="info-section w-[393px] h-[537px] bg-white absolute top-[68px] left-0 z-0">
          {/* Your existing info section */}
        </div>
      </div>

      {/* Modal for Checkout */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2 className="text-2xl font-bold mb-4">Checkout</h2>
        <p className="text-gray-600 mb-6">
          Thank you for your purchase! Please fill out the form below to complete
          your order.
        </p>
        <Checkout />
      </Modal>
    </div>
  );
}
