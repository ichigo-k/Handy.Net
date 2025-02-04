import { MenuIcon, Phone, SidebarClose } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { navLinks, socialMedia } from '../constants';

function Navbar({ log = false }) {
  const [nav, setNav] = useState(false); // State for mobile menu
  const [isScrolled, setIsScrolled] = useState(false); // State for scroll position

  // Handle scroll event only if `log` is true
  useEffect(() => {
    if (!log) return; // Exit if `log` is false

    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [log]); // Re-run effect if `log` changes

  return (
    <nav
      className={`w-full fixed  top-0 z-[1000] transition-all duration-300 ${
        !log || (log && isScrolled) ? 'bg-white shadow-lg' : 'bg-transparent shadow-none'
      }`}
    >
      {/* Main Navbar */}
      <div className={`w-full h-[4rem] ${!log || (log && isScrolled) ? 'bg-white' : 'bg-transparent'}`}>
        <div className="w-full contain flex h-full justify-between items-center p-2 mx-auto">
          {/* Logo */}
          <div className="flex flex-col items-center">
            <h1 className={`text-xl font-bold ${!log || (log && isScrolled) ? 'text-black' : 'text-white'}`}>
              Handy Hands
            </h1>
            <h3 className="text-lg font-bold text-yellow-400 mt-[-10px]">Company Limited</h3>
          </div>

          {/* Desktop Nav Links */}
          <div className="md:flex gap-x-9 hidden">
            {navLinks.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className={`${
                  !log || (log && isScrolled) ? 'text-black' : 'text-white'
                } hover:border-b hover:border-yellow-400 px-2 transition-all`}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Desktop Social Media Links */}
          <div className="md:flex gap-x-3 hidden  p-1 px-3 rounded-3xl gradient-bg">
            {socialMedia.map((item, index) => (
              <a
                key={index}
                href={item.link}
                aria-label={item.name}
                className={`text-white p-1 rounded-full hover:bg-opacity-80 transition-all`}
              >
                {item.icon}
              </a>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setNav((prev) => !prev)}
            aria-label="Toggle Menu"
            className="md:hidden"
          >
            <MenuIcon size={30} className={!log || (log && isScrolled) ? 'text-black' : 'text-white'} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-[22rem] bg-black text-white rounded-b-xl shadow-xl transition-all duration-300 z-[10000] flex flex-col items-center md:hidden ${
          nav ? 'translate-y-0' : 'translate-y-[-100%]'
        }`}
      >
        <div className="w-full p-3 flex items-center justify-between">
          <h2 className="font-bold text-2xl">
            Handy<span className="text-yellow-400">.Net</span>
          </h2>
          <button onClick={() => setNav(false)} aria-label="Close Menu">
            <SidebarClose size={30} />
          </button>
        </div>

        <hr className="w-full border-gray-700" />

        {/* Mobile Nav Links */}
        <div className="flex flex-col gap-y-5 mt-5 text-lg">
          {navLinks.map((item, index) => (
            <a
              key={index}
              href={item.link}
              onClick={() => setNav(false)}
              className="hover:border-b hover:border-yellow-400 px-2 transition-all"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Social Media Links */}
        <div className="flex flex-row mt-6 gap-x-7">
          {socialMedia.map((item, index) => (
            <a
              key={index}
              href={item.link}
              aria-label={item.name}
              onClick={() => setNav(false)}
              className="bg-white p-1 rounded-full text-black hover:bg-opacity-80 transition-all"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;