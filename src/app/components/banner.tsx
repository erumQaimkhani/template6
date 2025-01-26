
"use client";
import React, { useState, useEffect } from "react";
import { client } from "../../sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";
import Pagination from "./pagination"; 
import Link from "next/link";
import Swal from "sweetalert2";

const builder = imageUrlBuilder(client);

function urlFor(source: { asset: { _ref: string; _type: string } }) {
  return source?.asset?._ref ? builder.image(source).url() : "";
}

interface Product {
  _id: string;
  title: string;
  productImage: {
    asset: {
      _ref: string;
      _type: string;
    };
  };
  price: number;
  discountPercentage?: number;
  description?: string;
  tag?: string;
  isNew?: boolean;
  inventory?: number;
  slug: {
    current: string;
  };
}

const Banner = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 4;

  useEffect(() => {
    async function fetchProducts() {
      try {
        const fetchedProducts = await client.fetch(`*[_type == "product"]{
          _id,
          title,
          productImage,
          price,
          discountPercentage,
          description,
          tag,
          isNew,
          inventory,
          slug
        }`);
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const addToCart = (product: Product) => {
    console.log("Product added to cart:", product);
  };

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    Swal.fire({
      position: "top-start",
      icon: "success",
      title: `${product.title} added to cart`,
      showConfirmButton: false,
      timer: 1500,
    });
    addToCart(product);
  };

  if (loading) {
    return <p className="text-center text-gray-500">Loading products...</p>;
  }

  if (products.length === 0) {
    return <p className="text-center text-gray-500">No products found.</p>;
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-extrabold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600">
        Our Products
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentProducts.map((product) => (
          <div
            key={product._id}
            className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden transform hover:scale-105"
          >
            {product.slug?.current ? (
              <Link href={`/product/${product.slug.current}`}>
                <div>
                  <div className="relative">
                    {product.productImage ? (
                      <Image
                        src={urlFor(product.productImage)}
                        alt={product.title}
                        width={500}
                        height={300}
                        className="w-full h-64 object-cover"
                      />
                    ) : (
                      <div className="w-full h-64 flex items-center justify-center bg-gray-200">
                        <p className="text-gray-500">No Image Available</p>
                      </div>
                    )}
                    {product.isNew && (
                      <button className="bg-gradient-to-r from-pink-300 via-purple-500 to-indigo-200 text-white py-2 px-4 rounded-full hover:bg-indigo-300 transition-transform duration-300 ease-in-out shadow-md">
                        New Arrival
                      </button>
                    )}
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-semibold text-gray-800">{product.title}</h2>
                    <p className="text-lg text-gray-600 mt-2">Price: ${product.price}</p>
                    {product.discountPercentage && (
                      <p className="text-sm text-red-500 mt-1">
                        Discount: {product.discountPercentage}%
                      </p>
                    )}
                    <div className="flex items-center justify-between mt-4">
                      <button
                        className="bg-indigo-600 text-white py-2 px-4 rounded-full hover:bg-indigo-700 transition-colors duration-300"
                        onClick={(e) => handleAddToCart(e, product)}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            ) : (
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800">{product.title}</h2>
                <p className="text-lg text-gray-600 mt-2">Price: ${product.price}</p>
                <p className="text-red-500 mt-2">Slug not available</p>
                <button
                  className="bg-gradient-to-r from-pink-300 via-purple-500 to-indigo-200 text-white py-2 px-4 rounded-full hover:bg-indigo-300 transition-transform duration-300 ease-in-out shadow-md"
                  onClick={(e) => handleAddToCart(e, product)}
                >
                  Add to Cart
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Pagination */}
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
    </div>
  );
};

export default Banner;

