import React from 'react';
import { socialMedia } from '../constants';
import { Mail, Phone, MapPin } from 'lucide-react';

function Footer() {
  return (
    <footer className="w-full bg-black text-white py-12">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Logo & About */}
        <div>
          <h1 className="text-3xl font-bold">Handy Hands</h1>
          <h3 className="text-2xl font-bold hollow">Company Limited</h3>
          <p className="text-gray-100 text-sm mt-3">
            Your trusted partner in efficient logistics and supply chain solutions.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col space-y-3">
          <h4 className="text-2xl font-bold hollow">Quick Links</h4>
          <a href="/" className="text-gray-100 hover:text-yellow-400 transition">Logistics Services</a>
          <a href="/itServices" className="text-gray-100 hover:text-yellow-400 transition">IT Services</a>
          <a href="/contact" className="text-gray-100 hover:text-yellow-400 transition">Contact Us</a>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col space-y-3">
          <h4 className="text-2xl font-bold hollow">Contact Us</h4>
          <p className="flex items-center text-gray-100">
            <MapPin size={18} className="mr-2 text-yellow-400" />
            Tesano, Accra, Ghana
          </p>
          <p className="flex items-center text-gray-100">
            <Phone size={18} className="mr-2 text-yellow-400" />
            +233 123 456 789
          </p>
          <p className="flex items-center text-gray-100">
            <Mail size={18} className="mr-2 text-yellow-400" />
            support@handyhands.com
          </p>
        </div>

      </div>

      {/* Social Media & Copyright */}
      <div className="container mx-auto px-6 md:px-12 mt-8 flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-6">
        
        {/* Social Media Links */}
        <div className="flex space-x-4">
          {socialMedia.map((item, index) => (
            <a 
              key={index} 
              href={item.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 flex items-center justify-center gradient-bg rounded-full transition duration-300"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-gray-500 text-sm mt-4 md:mt-0">
          &copy; 2024 Handy Hands Company Limited. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
