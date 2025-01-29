

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Pay from '../components/pay';
import Footer from '../components/footer';
import Gettouch from '../components/gettouch';

export default function Contact() {
    return (
        <>
            {/* Hero Section */}
            <header className="relative bg-gray-100 h-[316px]">
                <div className="absolute inset-0">
                    <Image
                        src="/images/shop.png"
                        alt="Background"
                        fill
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="relative flex flex-col items-center justify-center h-full text-center text-black">
                    <Image
                        src="/images/meubl.png"
                        alt="Logo"
                        width={77}
                        height={77}
                        className="h-[77px] w-[77px] object-contain"
                    />

                    <h1 className="text-4xl font-bold mt-4">Contact</h1>

                    {/* Breadcrumb Navigation */}
                    <nav className="flex items-center space-x-2 mt-2 text-sm">
                        <Link href="/" className="hover:underline">
                            Home
                        </Link>
                        <span>&gt;</span>
                        <Link href="/contact" className="hover:underline">
                            Contact
                        </Link>
                    </nav>
                </div>
            </header>

            {/* Main Content */}
            <main>
                <Gettouch />
           
                <Pay />
            </main>

            {/* Footer */}
            <Footer />
        </>
    );
}
