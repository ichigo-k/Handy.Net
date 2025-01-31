import React from 'react';
import { socialMedia } from '../constants';

function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center">
        {/* Logo Section */}
        <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
          
          <div className='flex flex-col items-center mb-3'>
            <h1 className='text-3xl font-bold '>Handy Hands</h1>
            <h3 className='text-2xl font-bold text-yellow-400'>Company Limited</h3>

          </div>
          <p className="text-gray-400 text-sm md:text-base text-center md:text-left">
            Handy Hands Company Limited - Your trusted partner.
          </p>
        </div>
        
        {/* Social Media Links */}
        <div className="flex space-x-4 mb-6 md:mb-0">
          {socialMedia.map((item, index) => (
            <a 
              key={index} 
              href={item.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 flex items-center justify-center bg-yellow-500 hover:bg-yellow-600 rounded-full transition duration-300"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="container mx-auto px-4 md:px-8 mt-6 border-t border-gray-700 pt-4 text-center">
        <p className="text-gray-500 text-sm">
          &copy; 2024 Handy Hands Company Limited. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
