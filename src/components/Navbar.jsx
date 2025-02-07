import { MenuIcon, SidebarClose } from "lucide-react";
import React, { useEffect, useState } from "react";
import { navLinks, socialMedia } from "../constants";

function Navbar({ log = false, title }) {
  const [nav, setNav] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (!log) return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [log]);

  return (
    <nav
      className={`w-full fixed top-0 z-[1000] transition-all duration-300 py-2 ${
        !log || (log && isScrolled) ? "bg-white shadow-lg" : "bg-transparent shadow-none"
      }`}
    >
      {/* Main Navbar */}
      <div className={`w-full h-[4rem] ${!log || (log && isScrolled) ? "bg-white" : "bg-transparent"}`}>
        <div className="w-full contain flex h-full justify-between items-center p-2 mx-auto">
          {/* Logo */}
          {!title ? (
            <div className="flex flex-col items-center">
              <h1 className={`text-xl font-bold ${!log || (log && isScrolled) ? "text-black" : "text-white"}`}>
                Handy.Net
              </h1>
              <h3 className="text-lg font-bold text-yellow-400 mt-[-10px]">IT Solutions</h3>
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <h1 className={`text-xl font-bold ${!log || (log && isScrolled) ? "text-black" : "text-white"}`}>
                Handy Hands
              </h1>
              <h3 className="text-lg font-bold text-yellow-400 mt-[-10px]">Company Limited</h3>
            </div>
          )}

          {/* Desktop Nav Links */}
          <div className="md:flex gap-x-9 hidden">
            {navLinks.map((item, index) => {
              const isActive = window.location.pathname === item.link;
              return (
                <a
                  key={index}
                  href={item.link}
                  className={`border-b-[0.2rem] px-2 transition-all ${
                    isActive ? "border-yellow-400 text-yellow-400 font-semibold" : "border-transparent"
                  } ${!log || (log && isScrolled) ? "text-black" : "text-white"} hover:border-yellow-400`}
                >
                  {item.name}
                </a>
              );
            })}
          </div>

          {/* Desktop Social Media Links */}
          <div className="md:flex gap-x-3 hidden p-1 px-3 rounded-3xl gradient-bg">
            {socialMedia.map((item, index) => (
              <a
                key={index}
                href={item.link}
                aria-label={item.name}
                className="text-white p-1 rounded-full hover:bg-opacity-80 transition-all"
              >
                {item.icon}
              </a>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button onClick={() => setNav((prev) => !prev)} aria-label="Toggle Menu" className="md:hidden">
            <MenuIcon size={30} className={!log || (log && isScrolled) ? "text-black" : "text-white"} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-[20rem] bg-white text-black rounded-b-xl shadow-xl transition-all duration-300 z-[10000] flex flex-col items-center md:hidden ${
          nav ? "translate-y-0" : "translate-y-[-100%]"
        }`}
      >
        <div className="w-full p-3 flex items-center justify-between">
          <h2 className="font-bold text-2xl">
            Handy<span className="hollow">Hands</span>
          </h2>
          <button onClick={() => setNav(false)} aria-label="Close Menu">
            <SidebarClose size={30} />
          </button>
        </div>

        <hr className="w-full border-gray-700" />

        {/* Mobile Nav Links */}
        <div className="flex flex-col gap-y-5 mt-5 text-lg">
          {navLinks.map((item, index) => {
            const isActive = window.location.pathname === item.link;
            return (
              <a
                key={index}
                href={item.link}
                onClick={() => setNav(false)}
                className={`hover:border-b hover:border-yellow-400 px-2 transition-all ${
                  isActive ? "text-yellow-400 font-semibold" : ""
                }`}
              >
                {item.name}
              </a>
            );
          })}
        </div>

        {/* Mobile Social Media Links */}
        <div className="flex flex-row mt-6 gap-x-9 gradient-bg p-2 rounded-3xl ">
          {socialMedia.map((item, index) => (
            <a
              key={index}
              href={item.link}
              aria-label={item.name}
              onClick={() => setNav(false)}
              className=" text-white hover:bg-opacity-80 transition-all"
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
