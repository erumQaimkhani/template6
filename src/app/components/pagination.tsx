"use client"

import React, { useState } from "react";
import Image from "next/image";

const Pagination: React.FC = () => {

  const products = [
    { src: "/images/Maskwhite.png", alt: "Image 1", name: "Trenton modular sofa_3", price: 25000 },
    { src: "/whitechairs.jpg", alt: "Image 2", name: "Granite dining table with dining chair", price: 25000 },
    { src: "/images/mask1.png", alt: "Image 3", name: "Outdoor bar table and stool", price: 30000 },
    { src: "/images/plain console with teak mirror 1.png", alt: "Image 4", name: "Plain console with teak mirror", price: 28000 },
    { src: "/images/Grain coffee table 1.png", alt: "Image 5", name: "Grain coffee table", price: 20000 },
    { src: "/Mask 2.png", alt: "Image 6", name: "Decorative piece", price: 15000 },
    { src: "/images/Plain console_ 1.png", alt: "Image 7", name: "Plain console", price: 22000 },
    { src: "/images/Mask3.png", alt: "Image 8", name: "Modern shelf", price: 35000 },
    // Add more products as needed...
  ];


  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 4;


  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;

  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);


  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };


  const totalPages = Math.ceil(products.length / itemsPerPage);

  return (
    <div className="main-container max-w-[1242px] mx-auto p-4">

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {currentProducts.map((item, index) => (
          <div key={index} className="relative group">
            <div className="w-full h-[200px] md:h-[287px] relative">
              <Image
                src={item.src}
                alt={item.alt}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div className="mt-2 text-center">
              <p className="text-sm md:text-base font-medium">{item.name}</p>
              <p className="text-lg font-semibold text-gray-800">Rs. {item.price.toLocaleString()}</p>
            </div>
          </div>
        ))}
      </div>


      <div className="flex justify-center items-center mt-8">
        <div className="flex space-x-4">

          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-100 text-black rounded-lg hover:bg-yellow-200 disabled:opacity-50"
          >
            Previous
          </button>

          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`px-4 py-2 ${currentPage === index + 1 ? "bg-yellow-200" : "bg-gray-100"} text-black rounded-lg hover:bg-yellow-200`}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-100 text-black rounded-lg hover:bg-yellow-200 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
