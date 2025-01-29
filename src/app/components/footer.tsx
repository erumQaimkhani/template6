

import React from 'react';

import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="footer bg-neutral text-neutral-content p-10">
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
    
        <div>
          <p className="text-sm">
            400 University Drive Suite 200 <br />
            Coral Gables, FL 33134 USA
          </p>
        </div>

     
        <div>
          <h6 className="footer-title mb-2">Links</h6>
          <ul>
            <li>
              <Link href="/" className="link link-hover">
                Home
              </Link>
            </li>
            <li>
              <Link href="/shop" className="link link-hover">
                Shop
              </Link>
            </li>
            <li>
              <Link href="/about" className="link link-hover">
                About
              </Link>
            </li>
            <li>
              <Link href="/Myaccount" className="link link-hover">
                Contact
              </Link>
            </li>
          </ul>
        </div>


        <div>
          <h6 className="footer-title mb-2">Help</h6>
          <ul>
            <li>
              <Link href="/cart" className="link link-hover">
                Payment Options
              </Link>
            </li>
            <li>
              <Link href="/return" className="link link-hover">
                Returns
              </Link>
            </li>
            <li>
              <Link href="/blog" className="link link-hover">
                Privacy Policies
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h6 className="footer-title mb-2">Newsletter</h6>
          <div className="flex items-center gap-2">
            <input placeholder="Enter your email" className="input input-bordered" />
            <button className="btn btn-primary text-white">Subscribe</button>  
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
