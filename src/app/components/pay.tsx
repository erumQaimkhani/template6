
// import React from "react";

// const Pay: React.FC = () => {
//   return (
//     <div className="bg-[#faf4f4] py-12">
//       <div className="container mx-auto flex flex-col lg:flex-row justify-between items-start gap-8 px-6">

//         <div className="text-left max-w-sm">
//           <h2 className="text-2xl lg:text-3xl font-medium text-black">Free Delivery</h2>
//           <p className="text-gray-500 text-lg mt-2">
//             For all orders over $50, consectetur adipiscing elit.
//           </p>
//         </div>


//         <div className="text-left max-w-sm">
//           <h2 className="text-2xl lg:text-3xl font-medium text-black">90 Days Return</h2>
//           <p className="text-gray-500 text-lg mt-2">
//             If goods have problems, consectetur adipiscing elit.
//           </p>
//         </div>

//         <div className="text-left max-w-sm">
//           <h2 className="text-2xl lg:text-3xl font-medium text-black">Secure Payment</h2>
//           <p className="text-gray-500 text-lg mt-2">
//             100% secure payment, consectetur adipiscing elit.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Pay;
// import React from "react";
// import { Truck, RotateCcw, ShieldCheck } from "lucide-react"; // Icons
// import { motion } from "framer-motion"; // Animations

// const features = [
//   {
//     id: 1,
//     title: "Free Delivery",
//     description: "For all orders over $50, consectetur adipiscing elit.",
//     icon: <Truck size={40} className="text-black" />,
//   },
//   {
//     id: 2,
//     title: "90 Days Return",
//     description: "If goods have problems, consectetur adipiscing elit.",
//     icon: <RotateCcw size={40} className="text-black" />,
//   },
//   {
//     id: 3,
//     title: "Secure Payment",
//     description: "100% secure payment, consectetur adipiscing elit.",
//     icon: <ShieldCheck size={40} className="text-black" />,
//   },
// ];

// const Pay: React.FC = () => {
//   return (
//     <div className="bg-[#faf4f4] py-12">
//       <div className="container mx-auto flex flex-col lg:flex-row justify-between items-start gap-8 px-6">
//         {features.map((feature) => (
//           <motion.div
//             key={feature.id}
//             className="max-w-sm text-left bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
//             whileHover={{ scale: 1.05 }}
//           >
//             <div className="flex items-center gap-4">
//               {feature.icon}
//               <h2 className="text-2xl lg:text-3xl font-medium text-black">{feature.title}</h2>
//             </div>
//             <p className="text-gray-500 text-lg mt-2">{feature.description}</p>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Pay;
import React from "react";
import { Truck, RotateCw, ShieldCheck } from "lucide-react"; // Corrected icon imports

const Pay: React.FC = () => {
  // Data for the features
  const features = [
    {
      icon: <Truck className="w-8 h-8 text-black" />,
      title: "Free Delivery",
      description: "For all orders over $50, consectetur adipiscing elit.",
    },
    {
      icon: <RotateCw className="w-8 h-8 text-black" />,
      title: "90 Days Return",
      description: "If goods have problems, consectetur adipiscing elit.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-black" />,
      title: "Secure Payment",
      description: "100% secure payment, consectetur adipiscing elit.",
    },
  ];

  return (
    <div className="bg-[#faf4f4] py-12">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-start gap-8 px-6">
        {features.map((feature, index) => (
          <div key={index} className="text-left max-w-sm flex flex-col items-start gap-4">
            <div className="p-3 bg-white rounded-full shadow-md">
              {feature.icon}
            </div>
            <h2 className="text-2xl lg:text-3xl font-medium text-black">
              {feature.title}
            </h2>
            <p className="text-gray-500 text-lg">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pay;