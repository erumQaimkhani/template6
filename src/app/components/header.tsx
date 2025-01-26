
"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";

import { FaFacebook, FaTwitter, FaInstagram, FaHeart } from "react-icons/fa";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [wishlist, setWishlist] = useState<string[]>([]);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  // Fetch wishlist from localStorage when component mounts
  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    setWishlist(storedWishlist);
  }, []);

  // Function to toggle the item in the wishlist
  const toggleWishlist = (item: string) => {
    const updatedWishlist = wishlist.includes(item)
      ? wishlist.filter((wishlistItem) => wishlistItem !== item) 
      : [...wishlist, item]; 

    setWishlist(updatedWishlist);


    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  return (
    <header className="main-container w-full h-[100px] relative mx-auto my-0">
 
      <div className="w-full h-[100px] bg-white absolute top-0 left-0 shadow-md" />

   
      <div className="flex gap-6 absolute top-[36px] right-[20px] z-10 text-xl bg-white hover:text-gray-600">
        <Link href="https://www.facebook.com" passHref>
          <FaFacebook aria-label="Facebook" className="hover:text-blue-600 cursor-pointer" />
        </Link>
        <Link href="https://www.twitter.com" passHref>
          <FaTwitter aria-label="Twitter" className="hover:text-blue-400 cursor-pointer" />
        </Link>
        <Link href="https://www.instagram.com" passHref>
          <FaInstagram aria-label="Instagram" className="hover:text-pink-500 cursor-pointer" />
        </Link>
        <FaHeart
          aria-label="Favorites"
          onClick={() => toggleWishlist("wishlist-item-1")} // You can pass a dynamic ID for each product
          className={`cursor-pointer ${wishlist.includes("wishlist-item-1") ? "text-red-300" : "text-gray-900"}`}
        />
      </div>

  
      <nav className="absolute top-[38px] left-1/2 transform -translate-x-1/2 z-10">
        <ul className="hidden md:flex gap-10">
          <Link href="/" passHref>
            <li className="font-poppins text-[16px] font-medium text-black cursor-pointer hover:text-gray-600">
              Home
            </li>
          </Link>
          <Link href="/shop" passHref>
            <li className="font-poppins text-[16px] font-medium text-black cursor-pointer hover:text-gray-600">
              Shop
            </li>
          </Link>
          <Link href="/about" passHref>
            <li className="font-poppins text-[16px] font-medium text-black cursor-pointer hover:text-gray-600">
              About
            </li>
          </Link>
          <Link href="/contact" passHref>
            <li className="font-poppins text-[16px] font-medium text-black cursor-pointer hover:text-gray-600">
              Contact
            </li>
          </Link>
        </ul>

     
        <button
          onClick={toggleMenu}
          className="block md:hidden text-black focus:outline-none"
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </nav>

   
      {menuOpen && (
        <div className="absolute top-[100px] left-0 w-full bg-white shadow-lg md:hidden">
          <ul className="flex flex-col items-center gap-4 p-4">
            <Link href="/" passHref>
              <li className="font-poppins text-[16px] font-medium text-black cursor-pointer hover:text-gray-600">
                Home
              </li>
            </Link>
            <Link href="/shop" passHref>
              <li className="font-poppins text-[16px] font-medium text-black cursor-pointer hover:text-gray-600">
                Shop
              </li>
            </Link>
            <Link href="/about" passHref>
              <li className="font-poppins text-[16px] font-medium text-black cursor-pointer hover:text-gray-600">
                About
              </li>
            </Link>
            <Link href="/contact" passHref>
              <li className="font-poppins text-[16px] font-medium text-black cursor-pointer hover:text-gray-600">
                Contact
              </li>
            </Link>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
