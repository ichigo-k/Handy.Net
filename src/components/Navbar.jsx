import { Menu, X } from"lucide-react";
import React, { useEffect, useState } from"react";
import { motion, AnimatePresence } from"framer-motion";
import { navLinks } from"../constants";

function Navbar() {
 const [nav, setNav] = useState(false);
 const [scrolled, setScrolled] = useState(false);

 useEffect(() => {
 const onScroll = () => setScrolled(window.scrollY > 20);
 window.addEventListener("scroll", onScroll);
 return () => window.removeEventListener("scroll", onScroll);
 }, []);

 useEffect(() => {
 const onResize = () => { if (window.innerWidth >= 768) setNav(false); };
 window.addEventListener("resize", onResize);
 return () => window.removeEventListener("resize", onResize);
 }, []);

 return (
 <>
 <motion.nav
 initial={{ y: -80, opacity: 0 }}
 animate={{ y: 0, opacity: 1 }}
 transition={{ duration: 0.5, ease:"easeOut"}}
 className={`w-full fixed top-0 z-[1000] transition-all duration-300 ${
 scrolled
 ?"bg-white/95 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.08)]"
 :"bg-white shadow-sm"
 }`}
 >
 <div className="contain mx-auto flex h-[4.2rem] items-center justify-between px-5">

 {/* Logo — left */}
 <a href="/"className="flex flex-col leading-none group">
 <span className="text-[1.15rem] font-extrabold text-slate-800 tracking-tight group-hover:text-yellow-500 transition-colors duration-200">
 Handy.Net
 </span>
 <span className="text-[0.75rem] font-semibold hollow tracking-widest uppercase mt-[-2px]">
 IT Solutions
 </span>
 </a>

 {/* Desktop Nav Links — right */}
 <div className="hidden md:flex items-center gap-x-1">
 {navLinks.map((item, index) => (
 <a
 key={index}
 href={item.link}
 className="relative px-4 py-2 text-sm font-medium text-slate-600 transition-colors duration-200 group hover:text-slate-900"
 >
 {item.name}
 {/* Underline slides in on hover only */}
 <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-0 -full gradient-bg transition-all duration-300 group-hover:w-4/5"/>
 </a>
 ))}
 </div>

 {/* Mobile Hamburger */}
 <button
 onClick={() => setNav((p) => !p)}
 aria-label="Toggle Menu"
 className="md:hidden p-2 text-slate-700 hover:bg-gray-100 transition-colors duration-200"
 >
 <AnimatePresence mode="wait"initial={false}>
 {nav ? (
 <motion.span
 key="close"
 initial={{ rotate: -90, opacity: 0 }}
 animate={{ rotate: 0, opacity: 1 }}
 exit={{ rotate: 90, opacity: 0 }}
 transition={{ duration: 0.15 }}
 className="block"
 >
 <X size={24} />
 </motion.span>
 ) : (
 <motion.span
 key="open"
 initial={{ rotate: 90, opacity: 0 }}
 animate={{ rotate: 0, opacity: 1 }}
 exit={{ rotate: -90, opacity: 0 }}
 transition={{ duration: 0.15 }}
 className="block"
 >
 <Menu size={24} />
 </motion.span>
 )}
 </AnimatePresence>
 </button>
 </div>
 </motion.nav>

 {/* Mobile Menu */}
 <AnimatePresence>
 {nav && (
 <>
 {/* Backdrop */}
 <motion.div
 key="backdrop"
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 exit={{ opacity: 0 }}
 transition={{ duration: 0.2 }}
 className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[999] md:hidden"
 onClick={() => setNav(false)}
 />

 {/* Drawer */}
 <motion.div
 key="drawer"
 initial={{ y:"-100%", opacity: 0 }}
 animate={{ y: 0, opacity: 1 }}
 exit={{ y:"-100%", opacity: 0 }}
 transition={{ type:"spring", stiffness: 300, damping: 30 }}
 className="fixed top-0 left-0 w-full z-[1001] md:hidden bg-white -2xl shadow-2xl overflow-hidden"
 >
 {/* Header */}
 <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
 <a href="/"className="flex flex-col leading-none"onClick={() => setNav(false)}>
 <span className="text-lg font-extrabold text-slate-800">Handy.Net</span>
 <span className="text-xs font-semibold hollow tracking-widest uppercase mt-[-2px]">IT Solutions</span>
 </a>
 <button
 onClick={() => setNav(false)}
 aria-label="Close Menu"
 className="p-2 text-slate-500 hover:bg-gray-100 transition-colors"
 >
 <X size={22} />
 </button>
 </div>

 {/* Links */}
 <div className="flex flex-col px-4 py-4 gap-y-1">
 {navLinks.map((item, index) => (
 <motion.a
 key={index}
 href={item.link}
 onClick={() => setNav(false)}
 initial={{ opacity: 0, x: -16 }}
 animate={{ opacity: 1, x: 0 }}
 transition={{ delay: index * 0.06, duration: 0.25 }}
 className="flex items-center px-4 py-3 text-base font-medium text-slate-700 hover:bg-gray-50 hover:text-yellow-500 transition-all duration-200"
 >
 {item.name}
 </motion.a>
 ))}
 </div>
 </motion.div>
 </>
 )}
 </AnimatePresence>
 </>
 );
}

export default Navbar;
