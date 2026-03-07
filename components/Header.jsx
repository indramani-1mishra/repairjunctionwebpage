'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiMail, FiPhone, FiHome, FiTool, FiInfo } from 'react-icons/fi';
import { IoIosLogIn } from "react-icons/io";

export default function Header() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  const navItems = [
    { name: 'Home', href: '/', Icon: FiHome },
    { name: 'Services', href: '/services', Icon: FiTool },
    { name: 'About', href: '/about', Icon: FiInfo },
    { name: 'Contact', href: '/contact', Icon: FiMail },
  ];

  const mobilenumber = "9217918881";

  const message = "Hello Repairing Junction, I want to register as a technician.";

  const whatsappLink = `https://wa.me/91${mobilenumber}?text=${encodeURIComponent(message)}`;

  const handleWhatsAppClick = () => {
    window.open(whatsappLink, "_blank");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/headerimages/repairing.png"
              alt="Repairing Junction Logo"
              width={130}
              height={50}
              className="rounded-lg"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">

            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition"
              >
                <item.Icon className="mr-1 h-4 w-4" />
                {item.name}
              </Link>
            ))}

            {/* Technician Register */}
            <button
              onClick={handleWhatsAppClick}
              className="inline-flex items-center px-4 py-2 text-sm rounded-lg text-white bg-red-500 hover:bg-red-800 focus:outline-none ring-2 ring-offset-2 ring-red-500 transition-all duration-200 cursor-pointer font-bold"
            >
              <IoIosLogIn className="mr-1 h-4 w-4" />
             Join As Technician
            </button>

          </nav>

          {/* Call Button */}
         <div className='flex md:flex-row gap-3'>
              <Link
              href="/contact"
              className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-lg text-blue-600 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200"
              >
              <FiMail className="mr-2 h-4 w-4" />
              Contact Us
            </Link>
          <a
            href="tel:+919217918881"
            className="hidden md:flex items-center px-4 py-2 text-sm font-medium rounded-lg text-white bg-green-600 hover:bg-green-700 transition shadow"
          >
            <FiPhone className="mr-2 h-4 w-4" />
           +919217918881 
          </a>

         </div>
          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex items-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100"
          >

            <div className="relative w-6 h-6">

              <span
                className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 top-2.5' : 'top-1'
                }`}
              ></span>

              <span
                className={`absolute block h-0.5 w-6 bg-current top-2.5 transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              ></span>

              <span
                className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 top-2.5' : 'top-4'
                }`}
              ></span>

            </div>

          </button>

        </div>

        {/* Mobile Menu */}

        <div
          className={`md:hidden transition-all duration-300 ${
            isMenuOpen ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >

          <div className="px-2 pt-2 pb-3 space-y-2 bg-gray-50 rounded-lg mt-2">

            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            {/* Technician Register Mobile */}
            <button
              onClick={handleWhatsAppClick}
              className="w-full flex items-center justify-center px-3 py-2 text-base font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md"
            >
              <IoIosLogIn className="mr-2 h-5 w-5" />
              Register as Technician
            </button>

            {/* Call Button Mobile */}
            <a
              href="tel:+919217918881"
              className="block w-full text-center px-3 py-2 text-base font-medium text-white bg-green-600 hover:bg-green-700 rounded-md"
            >
              Call Now
            </a>

          </div>

        </div>

      </div>
    </header>
  );
}