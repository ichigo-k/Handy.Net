import React from 'react';
import { socialMedia } from '../constants';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import logo from '../assets/logo.png';


function Footer() {
 return (
 <footer className="w-full bg-slate-950 pt-24 pb-8 relative mt-32">

 {/* Overlapping CTA Card */}
 <div className="absolute left-0 right-0 top-0 -translate-y-1/2 px-6">
 <div className="max-w-5xl mx-auto bg-primary-500 shadow-2xl p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
 <div className="text-center md:text-left md:w-2/3">
 <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
 Ready to Upgrade Your Infrastructure?
 </h2>
 <p className="text-slate-900/80 text-lg font-medium">
 From robust IT networks to smart home automation. Let Handy.Net build the technology foundation you need to succeed.
 </p>
 </div>
 <div className="md:w-1/3 flex justify-center md:justify-end">
 <a
 href="/#contact"
 className="group flex items-center justify-center gap-2 bg-slate-900 text-white font-bold tracking-widest uppercase px-8 py-4 shadow-lg hover:bg-slate-800 transition-colors duration-300 w-full sm:w-auto"
 >
 Get Started <ArrowRight size={20} className="transition-transform group-hover:translate-x-1"/>
 </a>
 </div>
 </div>
 </div>

 <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 pt-32 lg:pt-24">

 {/* Logo & About */}
 <div className="flex flex-col items-start">
  <a href="/"className="flex items-center group mb-6 overflow-hidden h-24 w-72">
  <img src={logo} alt="Handy.Net Logo" className="h-full w-full object-contain scale-[3.5] brightness-0 invert" />
  </a>
 <p className="text-slate-400 text-sm leading-relaxed">
 Your trusted partner for robust IT networks, certified electrical installations, and advanced smart home infrastructure.
 </p>
 </div>

 {/* Quick Links */}
 <div className="flex flex-col space-y-4">
 <h4 className="text-sm font-bold text-white tracking-[0.1em] uppercase mb-2">Quick Links</h4>
 <a href="/"className="text-slate-400 hover:text-primary-500 transition-colors duration-200 text-sm w-fit font-medium">Home</a>
 <a href="/#services"className="text-slate-400 hover:text-primary-500 transition-colors duration-200 text-sm w-fit font-medium">Our Services</a>
 <a href="/#about"className="text-slate-400 hover:text-primary-500 transition-colors duration-200 text-sm w-fit font-medium">About Us</a>
 <a href="/#contact"className="text-slate-400 hover:text-primary-500 transition-colors duration-200 text-sm w-fit font-medium">Contact Us</a>
 </div>

 {/* Contact Information */}
 <div className="flex flex-col space-y-4">
 <h4 className="text-sm font-bold text-white tracking-[0.1em] uppercase mb-2">Contact</h4>
 <div className="flex items-start text-slate-400 text-sm font-medium">
 <MapPin size={18} className="mr-3 text-primary-500 flex-shrink-0 mt-0.5"/>
 <p>Aviance Ghana, Airport Bypass Rd, Accra</p>
 </div>
 <div className="flex items-center text-slate-400 text-sm font-medium">
 <Phone size={18} className="mr-3 text-primary-500 flex-shrink-0"/>
 <p>+233 50 333 4857</p>
 </div>
 <div className="flex items-center text-slate-400 text-sm font-medium">
 <Mail size={18} className="mr-3 text-primary-500 flex-shrink-0"/>
 <p>handynetitsolutions@gmail.com</p>
 </div>
 </div>

 </div>

 {/* Bottom Bar */}
 <div className="max-w-6xl mx-auto px-6 mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">

 {/* Copyright */}
 <p className="text-slate-500 text-sm font-medium tracking-wide">
 &copy; {new Date().getFullYear()} Handy.Net IT Solutions. All Rights Reserved.
 </p>

 {/* Social Media Links */}
 <div className="flex space-x-3">
 {socialMedia.map((item, index) => (
 <a
 key={index}
 href={item.link}
 target="_blank"
 rel="noopener noreferrer"
 className="w-10 h-10 flex items-center justify-center bg-slate-800 text-slate-400 hover:bg-primary-500 hover:text-white transition-all duration-300"
 >
 {item.icon}
 </a>
 ))}
 </div>

 </div>
 </footer>
 );
}

export default Footer;
