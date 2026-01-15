import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Updated to use Anchor tags for single-page navigation
  const navItems = [
    { name: 'COURSES', href: '#features' },
    { name: 'OUTCOMES', href: '#outcomes' },
    { name: 'CURRICULUM', href: '#features' },
    { name: 'ABOUT', href: '#about' },
  ];

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      const offset = 80; // height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-xl shadow-sm py-3' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <a href="#" onClick={(e) => scrollToSection(e, '#top')} className="flex items-center group">
            <span className="text-2xl font-black tracking-tighter text-zinc-900">
              CareerSync<span className="text-blue-600 group-hover:animate-pulse">.</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="px-4 py-2 text-[10px] font-bold tracking-[0.2em] text-zinc-500 hover:text-blue-600 transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
            
            <a
              href="#signup"
              onClick={(e) => scrollToSection(e, '#signup')}
              className="ml-6 px-7 py-3 bg-zinc-900 text-white text-[10px] font-bold tracking-[0.2em] rounded-full hover:bg-blue-600 transition-all duration-300 shadow-xl shadow-zinc-200 hover:shadow-blue-200 flex items-center gap-2 group"
            >
              APPLY NOW
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-2xl bg-zinc-100 text-zinc-900"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 bg-white border-t border-zinc-100 shadow-2xl md:hidden overflow-hidden"
          >
            <div className="p-6 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="block text-sm font-bold tracking-widest text-zinc-600 hover:text-blue-600"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#signup"
                onClick={(e) => scrollToSection(e, '#signup')}
                className="block w-full py-4 bg-zinc-900 text-white text-center text-xs font-bold tracking-[0.2em] rounded-2xl"
              >
                APPLY NOW
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;