"use client";

import { useState } from "react";
import { FiMessageCircle, FaWhatsapp } from 'react-icons/fi';
import { FaWhatsapp as WhatsappIcon } from 'react-icons/fa';

const ContactActionButton = ({ onSubmit }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-end gap-3 z-50">
      {/* WhatsApp Button */}
      {isOpen && (
        <a
          href="https://wa.me/9217918881/?text=Hello%20Repairing%20Junction%2C%20I%20would%20like%20to%20inquire%20about%20your%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full shadow-lg transition transform hover:scale-105"
        >
          <WhatsappIcon className="h-5 w-5" />
          <span className="text-sm font-semibold">WhatsApp</span>
        </a>
      )}

      {/* Call Button */}
      {isOpen && (
        <a
          href="tel:+919217918881"
          className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg transition transform hover:scale-105"
        >
          <span className="text-sm font-semibold">Call Us</span>
        </a>
      )}

      {/* Main Contact Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        className="flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white py-3 px-6 rounded-full shadow-lg transition transform hover:scale-110"
      >
        <FiMessageCircle className="h-6 w-6" />
        <span className="font-semibold hidden sm:inline">Contact Us</span>
      </button>
    </div>
  );
};

export default ContactActionButton;
