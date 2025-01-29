

// import React from "react";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// const Pay: React.FC = () => {
//   return (
//     <div className="container mx-auto p-6 flex flex-col lg:flex-row gap-10">
//       {/* Left Section: Billing Details */}
//       <div className="billing-details w-full lg:w-1/2">
//         <h1 className="font-poppins text-2xl font-semibold text-black mb-8">Billing Details</h1>

//         {/* First Name and Last Name */}
//         <div className="flex justify-between gap-6 mb-6">
//           <div className="flex flex-col w-1/2">
//             <label htmlFor="firstName" className="font-poppins text-base font-medium text-black mb-2">
//               First Name
//             </label>
//             <Input
//               id="firstName"
//               type="text"
//               className="w-full h-[50px] bg-white rounded-lg border border-gray-400 p-4"
//               placeholder="First Name"
//             />
//           </div>
//           <div className="flex flex-col w-1/2">
//             <label htmlFor="lastName" className="font-poppins text-base font-medium text-black mb-2">
//               Last Name
//             </label>
//             <Input
//               id="lastName"
//               type="text"
//               className="w-full h-[50px] bg-white rounded-lg border border-gray-400 p-4"
//               placeholder="Last Name"
//             />
//           </div>
//         </div>

//         {/* Other Billing Fields */}
//         <div className="mb-6">
//           <label htmlFor="companyName" className="font-poppins text-base font-medium text-black mb-2 block">
//             Company Name (Optional)
//           </label>
//           <Input
//             id="companyName"
//             type="text"
//             className="w-full h-[50px] bg-white rounded-lg border border-gray-400 p-4"
//             placeholder="Company Name"
//           />
//         </div>

//         <div className="mb-6">
//           <label htmlFor="country" className="font-poppins text-base font-medium text-black mb-2 block">
//             Country / Region
//           </label>
//           <select
//             id="country"
//             className="w-full h-[50px] bg-white rounded-lg border border-gray-400 p-4">
//             <option value="">Select a country</option>
//             <option value="Sri Lanka">Sri Lanka</option>
//           </select>
//         </div>

//         <div className="mb-6">
//           <label htmlFor="streetAddress" className="font-poppins text-base font-medium text-black mb-2 block">
//             Street Address
//           </label>
//           <Input
//             id="streetAddress"
//             type="text"
//             className="w-full h-[50px] bg-white rounded-lg border border-gray-400 p-4"
//             placeholder="Street Address"
//           />
//         </div>

//         <div className="mb-6">
//           <label htmlFor="city" className="font-poppins text-base font-medium text-black mb-2 block">
//             Town / City
//           </label>
//           <Input
//             id="city"
//             type="text"
//             className="w-full h-[50px] bg-white rounded-lg border border-gray-400 p-4"
//             placeholder="Town / City"
//           />
//         </div>

//         <div className="mb-6">
//           <label htmlFor="province" className="font-poppins text-base font-medium text-black mb-2 block">
//             Province
//           </label>
//           <select
//             id="province"
//             className="w-full h-[50px] bg-white rounded-lg border border-gray-400 p-4">
//             <option value="">Select a province</option>
//             <option value="Western Province">Western Province</option>
//           </select>
//         </div>

//         <div className="mb-6">
//           <label htmlFor="zip" className="font-poppins text-base font-medium text-black mb-2 block">
//             ZIP Code
//           </label>
//           <Input
//             id="zip"
//             type="text"
//             className="w-full h-[50px] bg-white rounded-lg border border-gray-400 p-4"
//             placeholder="ZIP Code"
//           />
//         </div>

//         <div className="mb-6">
//           <label htmlFor="phone" className="font-poppins text-base font-medium text-black mb-2 block">
//             Phone
//           </label>
//           <Input
//             id="phone"
//             type="text"
//             className="w-full h-[50px] bg-white rounded-lg border border-gray-400 p-4"
//             placeholder="Phone Number"
//           />
//         </div>

//         <div className="mb-6">
//           <label htmlFor="email" className="font-poppins text-base font-medium text-black mb-2 block">
//             Email Address
//           </label>
//           <Input
//             id="email"
//             type="email"
//             className="w-full h-[50px] bg-white rounded-lg border border-gray-400 p-4"
//             placeholder="Email Address"
//           />
//         </div>
//       </div>

//       {/* Right Section: Product Summary */}
//       <div className="product-summary w-full lg:w-1/2">
//         <h1 className="font-poppins text-2xl font-semibold text-black mb-8">Your Order</h1>

//         <div className="bg-white shadow-md rounded-lg p-6">
//           {/* Product Details */}
//           <div className="flex justify-between items-center mb-6">
//             <span className="font-poppins text-base font-medium text-black">Product</span>
//             <span className="font-poppins text-base font-medium text-black">Subtotal</span>
//           </div>

//           <div className="flex justify-between items-center mb-4">
//             <span className="font-poppins text-base text-gray-600">Asgaard sofa</span>
//             <span className="font-poppins text-base text-black">Rs. 250,000.00</span>
//           </div>

//           <div className="flex justify-between items-center mb-4">
//             <span className="font-poppins text-base text-black">Subtotal</span>
//             <span className="font-poppins text-base text-black">Rs. 250,000.00</span>
//           </div>

//           <div className="flex justify-between items-center mb-6">
//             <span className="font-poppins text-base text-black">Total</span>
//             <span className="font-poppins text-lg font-bold text-yellow-600">Rs. 250,000.00</span>
//           </div>

//           <Button className="w-full h-[50px] bg-black text-white rounded-lg font-poppins text-base font-medium">
//             Place Order
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Pay;
// "use client";
// import { client } from "../../sanity/lib/client";
// import imageUrlBuilder from "@sanity/image-url";
// import Image from "next/image";
// import React, { useEffect, useState } from "react";
// import Link from "next/link";
// import Swal from "sweetalert2";

// // Define the types for your product data
// interface Product {
//   _id: string;
//   title: string;
//   productImage: {
//     asset: {
//       _ref: string;
//       _type: "reference";
//     };
//   };
//   price: number;
//   discountPercentage?: number;
//   description?: string;
//   inventory?: number;
//   tag?: string;
//   isNew?: boolean;
//   slug: {
//     current: string;
//   };
// }

// // Define the type for the image source
// interface SanityImageSource {
//   asset: {
//     _ref: string;
//     _type: "reference";
//   };
// }

// // Create the URL helper function
// const builder = imageUrlBuilder(client);

// function urlFor(source: SanityImageSource) {
//   return source?.asset?._ref ? builder.image(source).url() : "";
// }

// const Filter = () => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [searchTerm, setSearchTerm] = useState<string>("");
//   const [priceFilter, setPriceFilter] = useState<string>("all");

//   useEffect(() => {
//     async function fetchProducts() {
//       try {
//         const fetchedProducts = await client.fetch(`*[_type == "product"]{
//           _id,
//           title,
//           productImage,
//           price,
//           discountPercentage,
//           description,
//           tag,
//           isNew,
//           inventory,
//           slug
//         }`);
//         setProducts(fetchedProducts);
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchProducts();
//   }, []);

//   const filteredProducts = products.filter((product) => {
//     const matchesSearch =
//       product.title.toLowerCase().includes(searchTerm.toLowerCase());

//     const matchesPrice =
//       priceFilter === "all" ||
//       (priceFilter === "lowToHigh" && product.price <= 20000) ||
//       (priceFilter === "highToLow" && product.price > 20000);

//     return matchesSearch && matchesPrice;
//   });

//   const addToCart = (product: Product) => {
//     console.log("Product added to cart:", product);
//   };

//   const handleAddToCart = (e: React.MouseEvent, product: Product) => {
//     e.preventDefault();
//     Swal.fire({
//       position: "top-start",
//       icon: "success",
//       title: `${product.title} added to cart`,
//       showConfirmButton: false,
//       timer: 1500,
//     });
//     addToCart(product);
//   };

//   if (loading) {
//     return <p className="text-center text-gray-500">Loading products...</p>;
//   }

//   if (filteredProducts.length === 0) {
//     return <p className="text-center text-gray-500">No products found.</p>;
//   }

//   return (
//     <div className="max-w-7xl mx-auto px-6 py-12">
//       <h1 className="text-4xl font-extrabold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600">
//         Our Products
//       </h1>

//       <div className="flex justify-between items-center mb-6">
//         <input
//           type="text"
//           placeholder="Search for products"
//           className="px-4 py-2 border rounded-lg"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />

//         {/* Price Filter */}
//         <select
//           className="px-4 py-2 border rounded-lg"
//           value={priceFilter}
//           onChange={(e) => setPriceFilter(e.target.value)}
//         >
//           <option value="all">All</option>
//           <option value="lowToHigh">Price: Low to High</option>
//           <option value="highToLow">Price: High to Low</option>
//         </select>
//       </div>

//       {/* Product Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {filteredProducts.map((product) => (
//           <div
//             key={product._id}
//             className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden transform hover:scale-105"
//           >
//             {product.slug?.current ? (
//               <Link href={`/product/${product.slug.current}`}>
//                 <div>
//                   <div className="relative">
//                     {product.productImage ? (
//                       <Image
//                         src={urlFor(product.productImage)}
//                         alt={product.title}
//                         width={500}
//                         height={300}
//                         className="w-full h-64 object-cover"
//                       />
//                     ) : (
//                       <div className="w-full h-64 flex items-center justify-center bg-gray-200">
//                         <p className="text-gray-500">No Image Available</p>
//                       </div>
//                     )}
//                     {product.isNew && (
//                       <button className="bg-gradient-to-r from-pink-300 via-purple-500 to-indigo-200 text-white py-2 px-4 rounded-full hover:bg-indigo-300 transition-transform duration-300 ease-in-out shadow-md">
//                         New Arrival
//                       </button>
//                     )}
//                   </div>
//                   <div className="p-6">
//                     <h2 className="text-xl font-semibold text-gray-800">{product.title}</h2>
//                     <p className="text-lg text-gray-600 mt-2">Price: ${product.price}</p>
//                     {product.discountPercentage && (
//                       <p className="text-sm text-red-500 mt-1">
//                         Discount: {product.discountPercentage}%
//                       </p>
//                     )}
//                     <div className="flex items-center justify-between mt-4">
//                       <button
//                         className="bg-indigo-600 text-white py-2 px-4 rounded-full hover:bg-indigo-700 transition-colors duration-300"
//                         onClick={(e) => handleAddToCart(e, product)}
//                       >
//                         Add to Cart
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </Link>
//             ) : (
//               <div className="p-6">
//                 <h2 className="text-xl font-semibold text-gray-800">{product.title}</h2>
//                 <p className="text-lg text-gray-600 mt-2">Price: ${product.price}</p>
//                 <p className="text-red-500 mt-2">Slug not available</p>
//                 <button
//                   className="bg-gradient-to-r from-pink-300 via-purple-500 to-indigo-200 text-white py-2 px-4 rounded-full hover:bg-indigo-300 transition-transform duration-300 ease-in-out shadow-md"
//                   onClick={(e) => handleAddToCart(e, product)}
//                 >
//                   Add to Cart
//                 </button>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Filter;
// "use client";
// import { client } from "../../sanity/lib/client";
// import imageUrlBuilder from "@sanity/image-url";
// import Image from "next/image";
// import React, { useEffect, useState } from "react";
// import Link from "next/link";
// import Swal from "sweetalert2";

// // Define the types for your product data
// interface Product {
//   _id: string;
//   title: string;
//   productImage: {
//     asset: {
//       _ref: string;
//       _type: "reference";
//     };
//   };
//   price: number;
//   discountPercentage?: number;
//   description?: string;
//   inventory?: number;
//   tag?: string;
//   isNew?: boolean;
//   slug: {
//     current: string;
//   };
// }

// // Define the type for the image source
// interface SanityImageSource {
//   asset: {
//     _ref: string;
//     _type: "reference";
//   };
// }

// // Create the URL helper function
// const builder = imageUrlBuilder(client);

// function urlFor(source: SanityImageSource) {
//   return source?.asset?._ref ? builder.image(source).url() : "";
// }

// const Filter = () => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [searchTerm, setSearchTerm] = useState<string>("");
//   const [priceFilter, setPriceFilter] = useState<string>("all");

//   useEffect(() => {
//     async function fetchProducts() {
//       try {
//         const fetchedProducts = await client.fetch(`*[_type == "product"]{
//           _id,
//           title,
//           productImage,
//           price,
//           discountPercentage,
//           description,
//           tag,
//           isNew,
//           inventory,
//           slug
//         }`);
//         setProducts(fetchedProducts);
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchProducts();
//   }, []);

//   const filteredProducts = products.filter((product) => {
//     const matchesSearch =
//       product.title.toLowerCase().includes(searchTerm.toLowerCase());

//     const matchesPrice =
//       priceFilter === "all" ||
//       (priceFilter === "lowToHigh" && product.price <= 20000) ||
//       (priceFilter === "highToLow" && product.price > 20000);

//     return matchesSearch && matchesPrice;
//   });

//   const handleAddToCart = (e: React.MouseEvent, product: Product) => {
//     e.preventDefault();

//     // SweetAlert2 Popup for Checkout
//     Swal.fire({
//       title: `<strong>Checkout ${product.title}</strong>`,
//       html: `
//         <div class="text-left">
//           <p class="text-gray-700 mb-4">Price: <span class="font-bold">$${product.price}</span></p>
//           <label class="block text-gray-700 mb-2">Billing Address</label>
//           <input
//             type="text"
//             id="billingAddress"
//             class="w-full px-4 py-2 border rounded-lg mb-4"
//             placeholder="Enter your billing address"
//           />
//           <label class="block text-gray-700 mb-2">Payment Method</label>
//           <select
//             id="paymentMethod"
//             class="w-full px-4 py-2 border rounded-lg mb-4"
//           >
//             <option value="creditCard">Credit Card</option>
//             <option value="paypal">PayPal</option>
//             <option value="cashOnDelivery">Cash on Delivery</option>
//           </select>
//         </div>
//       `,
//       showCancelButton: true,
//       confirmButtonText: "Place Order",
//       cancelButtonText: "Cancel",
//       customClass: {
//         confirmButton: "bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg",
//         cancelButton: "bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-lg ml-2",
//       },
//       buttonsStyling: false,
//     }).then((result) => {
//       if (result.isConfirmed) {
//         const billingAddress = (
//           document.getElementById("billingAddress") as HTMLInputElement
//         ).value;
//         const paymentMethod = (
//           document.getElementById("paymentMethod") as HTMLSelectElement
//         ).value;

//         Swal.fire({
//           icon: "success",
//           title: "Order Placed!",
//           text: `Your order for ${product.title} has been placed successfully.`,
//           confirmButtonText: "OK",
//           customClass: {
//             confirmButton: "bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg",
//           },
//           buttonsStyling: false,
//         });
//       }
//     });
//   };

//   if (loading) {
//     return <p className="text-center text-gray-500">Loading products...</p>;
//   }

//   if (filteredProducts.length === 0) {
//     return <p className="text-center text-gray-500">No products found.</p>;
//   }

//   return (
//     <div className="max-w-7xl mx-auto px-6 py-12">
//       <h1 className="text-4xl font-extrabold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600">
//         Our Products
//       </h1>

//       <div className="flex justify-between items-center mb-6">
//         <input
//           type="text"
//           placeholder="Search for products"
//           className="px-4 py-2 border rounded-lg"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />

//         {/* Price Filter */}
//         <select
//           className="px-4 py-2 border rounded-lg"
//           value={priceFilter}
//           onChange={(e) => setPriceFilter(e.target.value)}
//         >
//           <option value="all">All</option>
//           <option value="lowToHigh">Price: Low to High</option>
//           <option value="highToLow">Price: High to Low</option>
//         </select>
//       </div>

//       {/* Product Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {filteredProducts.map((product) => (
//           <div
//             key={product._id}
//             className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden transform hover:scale-105"
//           >
//             {product.slug?.current ? (
//               <Link href={`/product/${product.slug.current}`}>
//                 <div>
//                   <div className="relative">
//                     {product.productImage ? (
//                       <Image
//                         src={urlFor(product.productImage)}
//                         alt={product.title}
//                         width={500}
//                         height={300}
//                         className="w-full h-64 object-cover"
//                       />
//                     ) : (
//                       <div className="w-full h-64 flex items-center justify-center bg-gray-200">
//                         <p className="text-gray-500">No Image Available</p>
//                       </div>
//                     )}
//                     {product.isNew && (
//                       <button className="bg-gradient-to-r from-pink-300 via-purple-500 to-indigo-200 text-white py-2 px-4 rounded-full hover:bg-indigo-300 transition-transform duration-300 ease-in-out shadow-md">
//                         New Arrival
//                       </button>
//                     )}
//                   </div>
//                   <div className="p-6">
//                     <h2 className="text-xl font-semibold text-gray-800">{product.title}</h2>
//                     <p className="text-lg text-gray-600 mt-2">Price: ${product.price}</p>
//                     {product.discountPercentage && (
//                       <p className="text-sm text-red-500 mt-1">
//                         Discount: {product.discountPercentage}%
//                       </p>
//                     )}
//                     <div className="flex items-center justify-between mt-4">
//                       <button
//                         className="bg-indigo-600 text-white py-2 px-4 rounded-full hover:bg-indigo-700 transition-colors duration-300"
//                         onClick={(e) => handleAddToCart(e, product)}
//                       >
//                         Add to Cart
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </Link>
//             ) : (
//               <div className="p-6">
//                 <h2 className="text-xl font-semibold text-gray-800">{product.title}</h2>
//                 <p className="text-lg text-gray-600 mt-2">Price: ${product.price}</p>
//                 <p className="text-red-500 mt-2">Slug not available</p>
//                 <button
//                   className="bg-gradient-to-r from-pink-300 via-purple-500 to-indigo-200 text-white py-2 px-4 rounded-full hover:bg-indigo-300 transition-transform duration-300 ease-in-out shadow-md"
//                   onClick={(e) => handleAddToCart(e, product)}
//                 >
//                   Add to Cart
//                 </button>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Filter;
"use client";
import { client } from "../../sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Swal from "sweetalert2";

// Define product types
interface Product {
  _id: string;
  title: string;
  productImage: {
    asset: {
      _ref: string;
      _type: "reference";
    };
  };
  price: number;
  discountPercentage?: number;
  description?: string;
  inventory?: number;
  tag?: string;
  isNew?: boolean;
  slug: {
    current: string;
  };
}

// Define the type for the image source
interface SanityImageSource {
  asset: {
    _ref: string;
    _type: "reference";
  };
}

// Create the URL helper function
const builder = imageUrlBuilder(client);
function urlFor(source: SanityImageSource) {
  return source?.asset?._ref ? builder.image(source).url() : "";
}

const Filter = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [priceFilter, setPriceFilter] = useState<string>("all");

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

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPrice =
      priceFilter === "all" ||
      (priceFilter === "lowToHigh" && product.price <= 20000) ||
      (priceFilter === "highToLow" && product.price > 20000);
    return matchesSearch && matchesPrice;
  });

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();

    // SweetAlert2 Popup for Checkout
    Swal.fire({
      title: `<strong>Checkout ${product.title}</strong>`,
      html: `
        <div class="text-left">
          <p class="text-gray-700 mb-4">Price: <span class="font-bold">$${product.price}</span></p>
          <label class="block text-gray-700 mb-2">Billing Address</label>
          <input
            type="text"
            id="billingAddress"
            class="w-full px-4 py-2 border rounded-lg mb-4"
            placeholder="Enter your billing address"
          />
          <label class="block text-gray-700 mb-2">Payment Method</label>
          <select
            id="paymentMethod"
            class="w-full px-4 py-2 border rounded-lg mb-4"
          >
            <option value="creditCard">Credit Card</option>
            <option value="paypal">PayPal</option>
            <option value="cashOnDelivery">Cash on Delivery</option>
          </select>
        </div>
      `,
      showCancelButton: true,
      confirmButtonText: "Place Order",
      cancelButtonText: "Cancel",
      customClass: {
        confirmButton: "bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg",
        cancelButton: "bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-lg ml-2",
      },
      buttonsStyling: false,
    }).then((result) => {
      if (result.isConfirmed) {
        const billingAddress = (document.getElementById("billingAddress") as HTMLInputElement).value;
        const paymentMethod = (document.getElementById("paymentMethod") as HTMLSelectElement).value;

        // Process the order
        processOrder(billingAddress, paymentMethod, product);
      }
    });
  };

  // Function to handle order processing
  const processOrder = (billingAddress: string, paymentMethod: string, product: Product) => {
    console.log(`Order placed for ${product.title}`);
    console.log(`Billing Address: ${billingAddress}`);
    console.log(`Payment Method: ${paymentMethod}`);

    Swal.fire({
      icon: "success",
      title: "Order Placed!",
      text: `Your order for ${product.title} has been placed successfully.`,
      confirmButtonText: "OK",
      customClass: {
        confirmButton: "bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg",
      },
      buttonsStyling: false,
    });
  };

  if (loading) {
    return <p className="text-center text-gray-500">Loading products...</p>;
  }

  if (filteredProducts.length === 0) {
    return <p className="text-center text-gray-500">No products found.</p>;
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-extrabold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600">
        Our Products
      </h1>

      <div className="flex justify-between items-center mb-6">
        <input
          type="text"
          placeholder="Search for products"
          className="px-4 py-2 border rounded-lg"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* Price Filter */}
        <select
          className="px-4 py-2 border rounded-lg"
          value={priceFilter}
          onChange={(e) => setPriceFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="lowToHigh">Price: Low to High</option>
          <option value="highToLow">Price: High to Low</option>
        </select>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <div
            key={product._id}
            className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden transform hover:scale-105"
          >
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
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-800">{product.title}</h2>
                  <p className="text-lg text-gray-600 mt-2">Price: ${product.price}</p>
                  <button
                    className="bg-indigo-600 text-white py-2 px-4 rounded-full hover:bg-indigo-700 transition-colors duration-300"
                    onClick={(e) => handleAddToCart(e, product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
